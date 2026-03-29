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

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "admin@venkateshtv.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
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

        // Support both plain text (for simple setups) and bcrypt hashed passwords
        let isValidPassword = false;

        if (adminPassword.startsWith("$2")) {
          // Bcrypt hash
          isValidPassword = await bcryptjs.compare(credentials.password, adminPassword);
        } else {
          // Plain text comparison (for development; in production, use hashed passwords)
          isValidPassword = credentials.password === adminPassword;
        }

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
    maxAge: 30 * 24 * 60 * 60, // 30 days
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
