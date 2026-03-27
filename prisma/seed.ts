import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const post1 = await prisma.post.upsert({
    where: { slug: "hello-world" },
    update: {},
    create: {
      title: "Hello World",
      slug: "hello-world",
      excerpt:
        "Welcome to my personal website. This is my first post where I share a bit about myself and what I plan to write about.",
      content: `<h2>Welcome to my blog</h2>
<p>Hello! I'm Venkatesh TV, a software engineer and developer. I created this website to share my thoughts, experiences, and learnings in the world of software engineering.</p>
<h3>What to expect</h3>
<p>I plan to write about:</p>
<ul>
  <li>Software architecture and design patterns</li>
  <li>Web development with modern frameworks</li>
  <li>DevOps and infrastructure</li>
  <li>Career growth and lessons learned</li>
</ul>
<blockquote>
  <p>The best way to learn is to teach. Writing helps me solidify my understanding and hopefully helps others along the way.</p>
</blockquote>
<h3>About me</h3>
<p>I've been building software for several years, working across the full stack. I enjoy solving complex problems and building things that people find useful.</p>
<p>Feel free to connect with me on <a href="https://linkedin.com/in/venkateshtv">LinkedIn</a>.</p>`,
      published: true,
    },
  });

  const post2 = await prisma.post.upsert({
    where: { slug: "getting-started-with-nextjs-14" },
    update: {},
    create: {
      title: "Getting Started with Next.js 14",
      slug: "getting-started-with-nextjs-14",
      excerpt:
        "Next.js 14 brings exciting new features including the stable App Router, Server Actions, and improved performance. Let's explore what makes it great.",
      content: `<h2>Next.js 14 Overview</h2>
<p>Next.js 14 is a major release that brings several exciting improvements to the framework. In this post, I'll walk through the key features and why I chose it for this website.</p>
<h3>App Router</h3>
<p>The App Router is now the recommended way to build Next.js applications. It uses React Server Components by default, which provides several benefits:</p>
<ul>
  <li>Reduced client-side JavaScript bundle size</li>
  <li>Better performance for data-heavy pages</li>
  <li>Simplified data fetching with async/await</li>
  <li>Improved SEO with server-side rendering</li>
</ul>
<h3>TypeScript Support</h3>
<p>Next.js 14 has excellent TypeScript support out of the box. The framework provides type definitions for all its APIs, making development more productive and less error-prone.</p>
<pre><code class="language-typescript">// Example of a typed Server Component
interface Props {
  params: { slug: string };
}

export default async function PostPage({ params }: Props) {
  const post = await getPost(params.slug);
  return &lt;article&gt;{post.title}&lt;/article&gt;;
}</code></pre>
<h3>Conclusion</h3>
<p>Next.js 14 is a fantastic choice for building modern web applications. The combination of server-side rendering, great developer experience, and excellent performance makes it my go-to framework.</p>`,
      published: true,
    },
  });

  console.log({ post1, post2 });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
