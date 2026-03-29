import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays on AI, engineering, and leadership — by Venkatesh TV, two-time CTO and CEO of Impelox (60+ people).",
};

async function getAllPosts() {
  try {
    const posts = await prisma.post.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        content: true,
        published: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    return posts;
  } catch {
    return [];
  }
}

export default async function PostsPage() {
  const posts = await getAllPosts();

  return (
    <div className="relative flex min-h-screen w-full min-w-0 flex-col">
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 50% -30%, rgba(37, 99, 235, 0.2), transparent 55%), radial-gradient(ellipse 60% 50% at 100% 20%, rgba(34, 211, 238, 0.08), transparent), #020617",
        }}
      />
      <div className="bg-grid pointer-events-none fixed inset-0 -z-10 opacity-[0.45]" />

      <Header />

      <main className="flex-1">
        <header className="relative border-b border-white/[0.06] pb-16 pt-20 sm:pt-28">
          <div className="container-wide relative">
            <p className="mb-4 font-sans text-[11px] font-semibold uppercase tracking-[0.35em] text-blue-400/90">
              Journal
            </p>
            <h1 className="font-display max-w-3xl text-5xl font-medium leading-[1.05] tracking-[-0.03em] text-white sm:text-6xl lg:text-[4.25rem]">
              Ideas worth{" "}
              <span className="bg-gradient-to-r from-amber-100 via-blue-200 to-cyan-200 bg-clip-text text-transparent">
                revisiting
              </span>
            </h1>
            <p className="font-serif mt-8 max-w-xl text-lg leading-relaxed text-slate-400 sm:text-xl">
              Long-form notes on building AI-native companies, shipping product, and the craft of engineering
              leadership — written for operators who still write code.
            </p>
          </div>
        </header>

        <div className="container-wide w-full py-16 sm:py-20">
          {posts.length > 0 ? (
            <div className="mx-auto w-full max-w-6xl">
              {posts.length === 1 ? (
                <PostCard post={posts[0]} featured />
              ) : (
                <>
                  <PostCard post={posts[0]} featured />
                  <div className="divide-y divide-white/[0.06]">
                    {posts.slice(1).map((post, i) => (
                      <PostCard key={post.id} post={post} index={i + 1} />
                    ))}
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="mx-auto max-w-lg rounded-2xl border border-white/[0.08] bg-white/[0.02] px-8 py-20 text-center">
              <div
                className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/25"
                style={{
                  background: "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(79,70,229,0.08))",
                }}
              >
                <svg className="h-7 w-7 text-blue-400/85" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <p className="font-display text-xl text-slate-200">The first essay is on its way</p>
              <p className="font-serif mt-2 text-slate-500">Check back soon.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
