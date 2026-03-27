import type { Metadata } from "next";
import PostForm from "../../PostForm";

export const metadata: Metadata = {
  title: "New Post",
};

export default function NewPostPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">New Post</h1>
        <p className="text-slate-500 text-sm mt-1">Create a new blog post</p>
      </div>
      <PostForm mode="create" />
    </div>
  );
}
