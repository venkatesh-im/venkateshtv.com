import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Posts",
  description:
    "Articles and thoughts on software engineering, web development, and technology by Venkatesh TV.",
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
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 py-12">
        <div className="container-narrow">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-slate-900 mb-3">Posts</h1>
            <p className="text-slate-500">
              Thoughts, ideas, and learnings about software engineering and development.
            </p>
          </div>

          {posts.length > 0 ? (
            <div className="space-y-4">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="card p-16 text-center">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <p className="text-slate-500 text-lg font-medium mb-1">No posts yet</p>
              <p className="text-slate-400 text-sm">Check back soon for new content!</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
