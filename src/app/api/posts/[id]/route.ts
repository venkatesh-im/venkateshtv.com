import { NextRequest, NextResponse } from "next/server";
import { getAuthToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

interface Params {
  params: { id: string };
}

// GET /api/posts/[id] — returns a single post (public: only published, admin: any)
export async function GET(request: NextRequest, { params }: Params) {
  try {
    const token = await getAuthToken(request);
    const isAdmin = !!token;

    const post = await prisma.post.findUnique({
      where: isAdmin ? { id: params.id } : { id: params.id, published: true },
    });

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error(`[GET /api/posts/${params.id}]`, error);
    return NextResponse.json({ error: "Failed to fetch post" }, { status: 500 });
  }
}

// PUT /api/posts/[id] — admin only, updates a post
export async function PUT(request: NextRequest, { params }: Params) {
  try {
    const token = await getAuthToken(request);
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { title, slug, excerpt, coverImage, content, published } = body;

    if (!title || typeof title !== "string") {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }
    if (!slug || typeof slug !== "string") {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }
    if (!content || typeof content !== "string") {
      return NextResponse.json({ error: "Content is required" }, { status: 400 });
    }

    // Validate slug format
    if (!/^[a-z0-9-]+$/.test(slug)) {
      return NextResponse.json(
        { error: "Slug must contain only lowercase letters, numbers, and hyphens" },
        { status: 400 }
      );
    }

    // Check that the post exists
    const existing = await prisma.post.findUnique({ where: { id: params.id } });
    if (!existing) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    // Check for slug conflict with a different post
    const slugConflict = await prisma.post.findFirst({
      where: { slug: slug.trim(), id: { not: params.id } },
    });
    if (slugConflict) {
      return NextResponse.json(
        { error: "A post with this slug already exists" },
        { status: 409 }
      );
    }

    const post = await prisma.post.update({
      where: { id: params.id },
      data: {
        title: title.trim(),
        slug: slug.trim(),
        excerpt: excerpt?.trim() || null,
        coverImage: coverImage || null,
        content,
        published: !!published,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error(`[PUT /api/posts/${params.id}]`, error);
    return NextResponse.json({ error: "Failed to update post" }, { status: 500 });
  }
}

// DELETE /api/posts/[id] — admin only, deletes a post
export async function DELETE(request: NextRequest, { params }: Params) {
  try {
    const token = await getAuthToken(request);
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const existing = await prisma.post.findUnique({ where: { id: params.id } });
    if (!existing) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    await prisma.post.delete({ where: { id: params.id } });

    return NextResponse.json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error(`[DELETE /api/posts/${params.id}]`, error);
    return NextResponse.json({ error: "Failed to delete post" }, { status: 500 });
  }
}
