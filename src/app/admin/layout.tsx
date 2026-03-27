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
      <div className="min-h-screen bg-slate-50">
        {/* Admin top bar */}
        <div className="bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-sky-600 rounded flex items-center justify-center text-white text-xs font-bold">
              V
            </div>
            <span className="text-sm font-semibold text-slate-900">venkateshtv.com</span>
            <span className="text-slate-300">/</span>
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
