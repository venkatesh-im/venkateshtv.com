import Link from "next/link";
import { formatDate, readingTime } from "@/lib/utils";

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  published: boolean;
  createdAt: Date | string;
  updatedAt: Date | string;
}

interface PostCardProps {
  post: Post;
  index?: number;
  featured?: boolean;
}

export default function PostCard({ post, index, featured = false }: PostCardProps) {
  if (featured) {
    return (
      <article className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.07] via-white/[0.02] to-transparent p-px shadow-[0_24px_80px_-24px_rgba(124,58,237,0.35)] transition-transform duration-500 hover:scale-[1.01]">
        <div className="relative overflow-hidden rounded-[15px] bg-[#070a12] p-8 sm:p-10">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-40 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(37,99,235,0.45) 0%, transparent 70%)",
            }}
          />
          <div
            className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full opacity-30 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(34,211,238,0.25) 0%, transparent 70%)",
            }}
          />

          <div className="relative">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-amber-200/20 bg-amber-200/10 px-3 py-0.5 font-display text-[11px] font-medium uppercase tracking-[0.2em] text-amber-100/90">
                Featured
              </span>
              <time
                dateTime={new Date(post.createdAt).toISOString()}
                className="font-sans text-xs font-medium tracking-wide text-slate-500"
              >
                {formatDate(post.createdAt)}
              </time>
              <span className="text-slate-600">·</span>
              <span className="font-sans text-xs text-slate-500">{readingTime(post.content)}</span>
            </div>

            <Link href={`/posts/${post.slug}`} className="block">
              <h2 className="font-display text-3xl font-medium leading-[1.15] tracking-[-0.02em] text-white transition-colors group-hover:text-blue-100 sm:text-4xl lg:text-[2.75rem]">
                {post.title}
              </h2>
              {post.excerpt && (
                <p className="mt-5 max-w-2xl font-serif text-lg leading-relaxed text-slate-400">
                  {post.excerpt}
                </p>
              )}
              <span className="mt-8 inline-flex items-center gap-2 font-sans text-sm font-semibold text-blue-300 transition-all group-hover:gap-3">
                Read essay
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </article>
    );
  }

  const n = index !== undefined ? String(index + 1).padStart(2, "0") : null;

  return (
    <article className="group relative">
      <Link
        href={`/posts/${post.slug}`}
        className="flex gap-5 rounded-xl border border-transparent py-6 pl-2 pr-3 transition-all duration-300 hover:border-white/[0.06] hover:bg-white/[0.02] sm:gap-8 sm:py-8"
      >
        {n && (
          <span
            className="font-display mt-1 w-10 shrink-0 text-right text-sm font-medium tabular-nums text-slate-600 transition-colors group-hover:text-blue-400/90 sm:w-12"
            aria-hidden
          >
            {n}
          </span>
        )}
        <div className="min-w-0 flex-1 pb-6 sm:pb-8">
          <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <time dateTime={new Date(post.createdAt).toISOString()}>{formatDate(post.createdAt)}</time>
            <span className="text-slate-700">·</span>
            <span>{readingTime(post.content)}</span>
          </div>
          <h2 className="font-display text-xl font-medium leading-snug tracking-[-0.02em] text-slate-100 transition-colors group-hover:text-white sm:text-2xl">
            {post.title}
          </h2>
          {post.excerpt && (
            <p className="mt-3 line-clamp-2 font-serif text-sm leading-relaxed text-slate-500 sm:text-[15px]">
              {post.excerpt}
            </p>
          )}
          <span className="mt-4 inline-flex items-center gap-1 font-sans text-xs font-semibold uppercase tracking-wider text-blue-400/90 opacity-0 transition-opacity group-hover:opacity-100">
            Continue
            <svg className="h-3 w-3 translate-x-0 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </Link>
    </article>
  );
}
