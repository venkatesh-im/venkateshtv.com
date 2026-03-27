"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Link from "next/link";
import { slugify } from "@/lib/utils";

// Dynamically import TipTap to avoid SSR issues
const TipTapEditor = dynamic(() => import("@/components/TipTapEditor"), {
  ssr: false,
  loading: () => (
    <div className="border border-slate-300 rounded-xl p-4 min-h-[400px] bg-white flex items-center justify-center">
      <div className="flex items-center gap-2 text-slate-400">
        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
        <span className="text-sm">Loading editor...</span>
      </div>
    </div>
  ),
});

interface PostFormProps {
  mode: "create" | "edit";
  post?: {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    published: boolean;
  };
}

export default function PostForm({ mode, post }: PostFormProps) {
  const router = useRouter();

  const [title, setTitle] = useState(post?.title || "");
  const [slug, setSlug] = useState(post?.slug || "");
  const [excerpt, setExcerpt] = useState(post?.excerpt || "");
  const [content, setContent] = useState(post?.content || "");
  const [published, setPublished] = useState(post?.published || false);
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(!!post?.slug);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const handleTitleChange = useCallback(
    (value: string) => {
      setTitle(value);
      if (!slugManuallyEdited) {
        setSlug(slugify(value));
      }
    },
    [slugManuallyEdited]
  );

  const handleSlugChange = useCallback((value: string) => {
    setSlug(value);
    setSlugManuallyEdited(true);
  }, []);

  const handleContentChange = useCallback((html: string) => {
    setContent(html);
  }, []);

  async function handleSubmit(e: React.FormEvent, publishOverride?: boolean) {
    e.preventDefault();
    setError("");

    if (!title.trim()) {
      setError("Title is required");
      return;
    }
    if (!slug.trim()) {
      setError("Slug is required");
      return;
    }
    if (!content || content === "<p></p>") {
      setError("Content is required");
      return;
    }

    setSaving(true);

    const payload = {
      title: title.trim(),
      slug: slug.trim(),
      excerpt: excerpt.trim() || null,
      content,
      published: publishOverride !== undefined ? publishOverride : published,
    };

    try {
      const url = mode === "create" ? "/api/posts" : `/api/posts/${post!.id}`;
      const method = mode === "create" ? "POST" : "PUT";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Failed to save post");
        return;
      }

      const savedPost = await res.json();
      router.push("/admin/dashboard");
      router.refresh();

      // If just published, also navigate to post view
      if (payload.published) {
        router.prefetch(`/posts/${savedPost.slug}`);
      }
    } catch {
      setError("An unexpected error occurred");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
          {error}
        </div>
      )}

      {/* Title */}
      <div className="card p-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="title" className="label">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              className="input text-lg font-medium"
              placeholder="Enter post title..."
              required
            />
          </div>

          <div>
            <label htmlFor="slug" className="label">
              Slug <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-400 flex-shrink-0">/posts/</span>
              <input
                id="slug"
                type="text"
                value={slug}
                onChange={(e) => handleSlugChange(e.target.value)}
                className="input flex-1"
                placeholder="post-slug"
                pattern="[a-z0-9-]+"
                title="Lowercase letters, numbers, and hyphens only"
                required
              />
            </div>
            <p className="text-xs text-slate-400 mt-1">
              URL-friendly identifier. Lowercase letters, numbers, and hyphens only.
            </p>
          </div>

          <div>
            <label htmlFor="excerpt" className="label">
              Excerpt
            </label>
            <textarea
              id="excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              className="input resize-none"
              rows={3}
              placeholder="Brief description of the post (used for SEO and post listings)..."
            />
          </div>
        </div>
      </div>

      {/* Content Editor */}
      <div>
        <label className="label mb-2">
          Content <span className="text-red-500">*</span>
        </label>
        <TipTapEditor
          content={content}
          onChange={handleContentChange}
          placeholder="Start writing your post..."
        />
      </div>

      {/* Publish toggle + actions */}
      <div className="card p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <label className="flex items-center gap-3 cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-10 h-6 bg-slate-200 peer-checked:bg-sky-600 rounded-full transition-colors peer" />
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-transform peer-checked:translate-x-4" />
          </div>
          <div>
            <span className="text-sm font-medium text-slate-900">
              {published ? "Published" : "Draft"}
            </span>
            <p className="text-xs text-slate-400">
              {published ? "Visible to public" : "Only visible to you"}
            </p>
          </div>
        </label>

        <div className="flex items-center gap-3">
          <Link href="/admin/dashboard" className="btn-secondary">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={saving}
            className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {saving ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Saving...
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {mode === "create" ? "Create Post" : "Save Changes"}
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
