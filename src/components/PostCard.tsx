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
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="group card p-6 hover:shadow-md transition-shadow duration-200">
      <Link href={`/posts/${post.slug}`} className="block">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-semibold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-2 mb-2">
              {post.title}
            </h2>
            {post.excerpt && (
              <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 mb-4">
                {post.excerpt}
              </p>
            )}
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <time dateTime={new Date(post.createdAt).toISOString()}>
                {formatDate(post.createdAt)}
              </time>
              <span>·</span>
              <span>{readingTime(post.content)}</span>
            </div>
          </div>
          <div className="flex-shrink-0 mt-1">
            <svg
              className="w-5 h-5 text-slate-400 group-hover:text-sky-500 transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </Link>
    </article>
  );
}
