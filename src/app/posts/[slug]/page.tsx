import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReadingProgress from "@/components/blog/ReadingProgress";
import CopyLinkButton from "@/components/blog/CopyLinkButton";
import { prisma } from "@/lib/prisma";
import { formatDate, readingTime, truncate, stripHtml } from "@/lib/utils";

interface Props {
  params: { slug: string };
}

async function getPost(slug: string) {
  try {
    const post = await prisma.post.findUnique({
      where: { slug, published: true },
    });
    return post;
  } catch {
    return null;
  }
}

async function getAdjacentPosts(createdAt: Date) {
  try {
    const [older, newer] = await Promise.all([
      prisma.post.findFirst({
        where: { published: true, createdAt: { lt: createdAt } },
        orderBy: { createdAt: "desc" },
        select: { title: true, slug: true },
      }),
      prisma.post.findFirst({
        where: { published: true, createdAt: { gt: createdAt } },
        orderBy: { createdAt: "asc" },
        select: { title: true, slug: true },
      }),
    ]);
    return { older, newer };
  } catch {
    return { older: null, newer: null };
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const description = post.excerpt || truncate(stripHtml(post.content), 160);

  return {
    title: post.title,
    description,
    openGraph: {
      title: post.title,
      description,
      type: "article",
      publishedTime: post.createdAt.toISOString(),
      modifiedTime: post.updatedAt.toISOString(),
      authors: ["Venkatesh TV"],
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: ["/og-image.png"],
    },
  };
}

export async function generateStaticParams() {
  try {
    const posts = await prisma.post.findMany({
      where: { published: true },
      select: { slug: true },
    });
    return posts.map((post) => ({ slug: post.slug }));
  } catch {
    return [];
  }
}

export default async function PostPage({ params }: Props) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const { older, newer } = await getAdjacentPosts(post.createdAt);

  return (
    <div className="relative flex min-h-screen w-full min-w-0 flex-col">
      <ReadingProgress />

      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 50% -10%, rgba(37, 99, 235, 0.14), transparent 50%), #020617",
        }}
      />

      <Header />

      <main className="w-full min-w-0 flex-1 pb-24 pt-12 sm:pt-16">
        <article className="container-wide w-full">
          <div className="mx-auto w-full max-w-5xl">
            <Link
              href="/posts"
              className="group mb-12 inline-flex items-center gap-2 font-sans text-sm font-medium text-slate-500 transition-colors hover:text-blue-300"
            >
              <svg
                className="h-4 w-4 transition-transform group-hover:-translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All writing
            </Link>

            <header className="mb-14 text-center sm:mb-16">
              <p className="mb-6 font-sans text-[11px] font-semibold uppercase tracking-[0.35em] text-blue-400/90">
                Essay
              </p>
              <h1 className="font-display text-[2rem] font-medium leading-[1.12] tracking-[-0.03em] text-white sm:text-5xl sm:leading-[1.08] lg:text-[3.25rem]">
                {post.title}
              </h1>

              {post.excerpt && (
                <p className="font-serif mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
                  {post.excerpt}
                </p>
              )}

              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 font-sans text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold text-white shadow-lg shadow-blue-500/25"
                    style={{
                      background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 45%, #0891b2 100%)",
                    }}
                  >
                    V
                  </div>
                  <div className="text-left">
                    <span className="block font-medium text-slate-300">Venkatesh TV</span>
                    <span className="text-xs text-slate-600">CEO · 2× CTO · Impelox (60+ people)</span>
                  </div>
                </div>
                <span className="hidden text-slate-700 sm:inline">·</span>
                <time dateTime={post.createdAt.toISOString()}>{formatDate(post.createdAt)}</time>
                <span className="text-slate-700">·</span>
                <span>{readingTime(post.content)}</span>
              </div>
            </header>

            <div
              className="prose-content prose-editorial"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-20 border-t border-white/[0.06] pt-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <CopyLinkButton />
                <a
                  href="https://www.linkedin.com/in/venkateshtv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-sans text-sm font-medium text-slate-300 transition-colors hover:border-blue-500/40 hover:text-white"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  Discuss on LinkedIn
                </a>
              </div>

              {(older || newer) && (
                <nav
                  className={`mt-12 flex flex-wrap gap-4 border-t border-white/[0.06] pt-12 ${
                    !older && newer ? "justify-end" : "justify-between"
                  }`}
                  aria-label="Adjacent posts"
                >
                  {older && (
                    <Link
                      href={`/posts/${older.slug}`}
                      className="group max-w-full rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all hover:border-blue-500/30 hover:bg-white/[0.04] sm:max-w-[min(100%,22rem)]"
                    >
                      <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                        Older
                      </span>
                      <p className="font-display mt-2 text-lg leading-snug text-slate-200 transition-colors group-hover:text-white">
                        {older.title}
                      </p>
                    </Link>
                  )}
                  {newer && (
                    <Link
                      href={`/posts/${newer.slug}`}
                      className="group max-w-full rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 text-left transition-all hover:border-blue-500/30 hover:bg-white/[0.04] sm:max-w-[min(100%,22rem)] sm:text-right"
                    >
                      <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                        Newer
                      </span>
                      <p className="font-display mt-2 text-lg leading-snug text-slate-200 transition-colors group-hover:text-white">
                        {newer.title}
                      </p>
                    </Link>
                  )}
                </nav>
              )}
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
