import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import AdminNav from "@/components/AdminNav";
import SessionProvider from "./SessionProvider";

export const metadata: Metadata = {
  title: {
    default: "Admin",
    template: "%s | Admin — Venkatesh TV",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <SessionProvider session={session}>
      <div className="min-h-screen" style={{ background: "#05070f" }}>
        {/* Admin top bar */}
        <div
          className="px-4 py-3 flex items-center justify-between border-b"
          style={{
            background: "rgba(13, 17, 23, 0.9)",
            borderColor: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(12px)",
            position: "sticky",
            top: 0,
            zIndex: 40,
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-7 h-7 rounded flex items-center justify-center text-white text-xs font-bold"
              style={{ background: "linear-gradient(135deg, #2563eb, #0891b2)" }}
            >
              V
            </div>
            <span className="text-sm font-semibold text-white">
              venkateshtv.com
            </span>
            <span className="text-slate-600">/</span>
            <span className="text-sm text-slate-500">Admin</span>
          </div>
        </div>

        <div className="container-wide py-6">
          <div className="flex flex-col lg:flex-row gap-6">
            <AdminNav />
            <div className="flex-1 min-w-0">{children}</div>
          </div>
        </div>
      </div>
    </SessionProvider>
  );
}
