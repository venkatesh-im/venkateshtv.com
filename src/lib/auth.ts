import { NextAuthOptions } from "next-auth";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";
import CredentialsProvider from "next-auth/providers/credentials";
import bcryptjs from "bcryptjs";

/** Use in Route Handlers — `getServerSession` often misses cookies on API `fetch`; `getToken` matches middleware. */
export async function getAuthToken(request: NextRequest) {
  return getToken({
    req: request as any,
    secret: process.env.NEXTAUTH_SECRET,
  });
}

// In-memory rate limiter — max 5 attempts per IP per 15 minutes
const loginAttempts = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = loginAttempts.get(ip);

  if (!entry || now > entry.resetAt) {
    loginAttempts.set(ip, { count: 1, resetAt: now + 15 * 60 * 1000 });
    return true;
  }

  if (entry.count >= 5) {
    return false;
  }

  entry.count++;
  return true;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "admin@venkateshtv.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Rate limiting by IP
        const ip =
          (req?.headers?.["x-forwarded-for"] as string)?.split(",")[0].trim() ||
          (req?.headers?.["x-real-ip"] as string) ||
          "unknown";

        if (!checkRateLimit(ip)) {
          throw new Error("Too many login attempts. Try again in 15 minutes.");
        }

        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (!adminEmail || !adminPassword) {
          console.error("ADMIN_EMAIL or ADMIN_PASSWORD environment variables not set");
          return null;
        }

        if (credentials.email !== adminEmail) {
          return null;
        }

        const isValidPassword = await bcryptjs.compare(credentials.password, adminPassword);

        if (!isValidPassword) {
          return null;
        }

        return {
          id: "admin",
          email: adminEmail,
          name: "Venkatesh TV",
        };
      },
    }),
  ],
  pages: {
    signIn: "/admin/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 8 * 60 * 60, // 8 hours
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token) {
        (session.user as { id?: string }).id = token.id as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
