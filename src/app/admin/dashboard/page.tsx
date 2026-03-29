import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/utils";
import DeletePostButton from "./DeletePostButton";

export const metadata: Metadata = {
  title: "Dashboard",
};

async function getAllPosts() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        title: true,
        slug: true,
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

export default async function DashboardPage() {
  const posts = await getAllPosts();
  const publishedCount = posts.filter((p) => p.published).length;
  const draftCount = posts.filter((p) => !p.published).length;

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1
            className="text-2xl font-bold text-white"
            style={{ letterSpacing: "-0.025em" }}
          >
            Dashboard
          </h1>
          <p className="text-slate-500 text-sm mt-1">Manage your posts and content</p>
        </div>
        <Link href="/admin/posts/new" className="btn-primary">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New Post
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="card p-5">
          <p className="text-xs text-slate-500 mb-1 uppercase tracking-wide font-medium">Total Posts</p>
          <p className="text-3xl font-bold text-white">{posts.length}</p>
        </div>
        <div className="card p-5">
          <p className="text-xs text-slate-500 mb-1 uppercase tracking-wide font-medium">Published</p>
          <p className="text-3xl font-bold" style={{ color: "#34d399" }}>
            {publishedCount}
          </p>
        </div>
        <div className="card p-5">
          <p className="text-xs text-slate-500 mb-1 uppercase tracking-wide font-medium">Drafts</p>
          <p className="text-3xl font-bold" style={{ color: "#fbbf24" }}>
            {draftCount}
          </p>
        </div>
      </div>

      {/* Posts table */}
      <div
        className="rounded-xl overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          className="px-5 py-4 border-b flex items-center justify-between"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <h2 className="font-semibold text-white text-sm">All Posts</h2>
          <span className="text-xs text-slate-500">{posts.length} total</span>
        </div>

        {posts.length === 0 ? (
          <div className="p-12 text-center">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ background: "rgba(37, 99, 235, 0.1)" }}
            >
              <svg
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <p className="text-slate-300 font-medium mb-2">No posts yet</p>
            <p className="text-slate-500 text-sm mb-4">
              Create your first post to get started.
            </p>
            <Link href="/admin/posts/new" className="btn-primary text-sm">
              Create first post
            </Link>
          </div>
        ) : (
          <div>
            {posts.map((post, idx) => (
              <div
                key={post.id}
                className={`flex items-center gap-4 px-5 py-4 transition-colors hover:bg-white/[0.02] ${
                  idx > 0 ? "border-t border-white/[0.04]" : ""
                }`}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium text-slate-200 truncate text-sm">
                      {post.title}
                    </h3>
                    <span
                      className="flex-shrink-0 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium"
                      style={
                        post.published
                          ? {
                              background: "rgba(52, 211, 153, 0.1)",
                              color: "#34d399",
                              border: "1px solid rgba(52, 211, 153, 0.2)",
                            }
                          : {
                              background: "rgba(251, 191, 36, 0.1)",
                              color: "#fbbf24",
                              border: "1px solid rgba(251, 191, 36, 0.2)",
                            }
                      }
                    >
                      {post.published ? "Published" : "Draft"}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-600">
                    <span>/{post.slug}</span>
                    <span>·</span>
                    <span>{formatDate(post.createdAt)}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 flex-shrink-0">
                  {post.published && (
                    <Link
                      href={`/posts/${post.slug}`}
                      target="_blank"
                      className="p-1.5 rounded-lg transition-colors text-slate-600 hover:text-slate-300"
                      style={{ transition: "all 0.15s" }}
                      title="View post"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  )}
                  <Link
                    href={`/admin/posts/${post.id}/edit`}
                    className="rounded-lg p-1.5 text-slate-600 transition-colors hover:text-blue-400"
                    title="Edit post"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </Link>
                  <DeletePostButton postId={post.id} postTitle={post.title} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
