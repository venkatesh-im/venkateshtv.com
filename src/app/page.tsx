import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import { prisma } from "@/lib/prisma";

async function getRecentPosts() {
  try {
    const posts = await prisma.post.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
      take: 3,
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

export default async function HomePage() {
  const recentPosts = await getRecentPosts();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 sm:py-28 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200">
          <div className="container-narrow">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-sky-700 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg flex-shrink-0">
                V
              </div>
              <div>
                <p className="text-sm font-medium text-sky-600 mb-1">Hello, I&apos;m</p>
                <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
                  Venkatesh TV
                </h1>
              </div>
            </div>

            <p className="text-xl text-slate-600 leading-relaxed mb-3 max-w-2xl">
              Software Engineer &amp; Developer
            </p>
            <p className="text-base text-slate-500 leading-relaxed mb-8 max-w-2xl">
              I build modern web applications and write about software engineering, architecture,
              and the craft of building great software. Passionate about clean code, developer
              experience, and shipping products that make a difference.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://linkedin.com/in/venkateshtv"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Connect on LinkedIn
              </a>
              <Link href="/posts" className="btn-secondary">
                Read my posts
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="container-narrow">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">About me</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="card p-5">
                <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 mb-1.5">Full Stack Development</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Building end-to-end web applications with modern frameworks and best practices.
                </p>
              </div>
              <div className="card p-5">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 mb-1.5">System Architecture</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Designing scalable systems and making thoughtful technical decisions.
                </p>
              </div>
              <div className="card p-5">
                <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 mb-1.5">Technical Writing</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Sharing knowledge and experiences through articles and blog posts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Posts Section */}
        <section className="py-16">
          <div className="container-narrow">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-slate-900">Recent Posts</h2>
              <Link
                href="/posts"
                className="text-sm font-medium text-sky-600 hover:text-sky-800 transition-colors flex items-center gap-1"
              >
                View all
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {recentPosts.length > 0 ? (
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="card p-12 text-center">
                <p className="text-slate-500 mb-4">No posts yet. Check back soon!</p>
                <Link href="/posts" className="btn-secondary text-sm">
                  Browse posts
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
