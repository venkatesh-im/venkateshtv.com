import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import PostForm from "../../../PostForm";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = await prisma.post.findUnique({
      where: { id: params.id },
      select: { title: true },
    });
    return { title: post ? `Edit: ${post.title}` : "Edit Post" };
  } catch {
    return { title: "Edit Post" };
  }
}

async function getPost(id: string) {
  try {
    const post = await prisma.post.findUnique({
      where: { id },
    });
    return post;
  } catch {
    return null;
  }
}

export default async function EditPostPage({ params }: Props) {
  const post = await getPost(params.id);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Edit Post</h1>
        <p className="text-slate-500 text-sm mt-1 truncate">Editing: {post.title}</p>
      </div>
      <PostForm
        mode="edit"
        post={{
          id: post.id,
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt || "",
          coverImage: post.coverImage || "",
          content: post.content,
          published: post.published,
        }}
      />
    </div>
  );
}
