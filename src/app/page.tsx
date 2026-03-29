import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import ProfilePhoto from "@/components/ProfilePhoto";
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
    <div className="flex min-h-screen w-full min-w-0 flex-col">
      <Header />

      <main className="w-full min-w-0 flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
          <div className="bg-grid absolute inset-0 opacity-100" />

          <div
            className="glow-orb"
            style={{ top: "-120px", left: "-120px" }}
          />
          <div
            className="glow-orb-indigo"
            style={{ bottom: "-80px", right: "-80px" }}
          />

          <div className="container-wide relative z-10">
            <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:gap-16">
              <div>
                <div className="mb-8">
                  <span className="badge">
                    <span className="badge-dot" />
                    2× CTO · CEO &amp; Founder · Impelox
                  </span>
                </div>

                <h1 className="font-display mb-4 tracking-[-0.03em]">
                  <span className="block text-5xl font-medium leading-[1.06] text-white sm:text-6xl lg:text-[4.25rem]">
                    Venkatesh TV
                  </span>
                  <span className="mt-4 block max-w-3xl font-sans text-lg font-medium leading-snug text-slate-400 sm:text-xl lg:text-2xl">
                    Technical Entrepreneur building{" "}
                    <span className="gradient-text">AI Agents &amp; AI-First Teams</span>
                  </span>
                </h1>

                <div className="font-serif mb-10 max-w-3xl space-y-5 text-lg leading-relaxed text-slate-400 sm:text-xl lg:max-w-4xl">
                  <p>
                    I&apos;ve served as <strong className="text-slate-200">Chief Technology Officer twice</strong> —
                    now I lead{" "}
                    <a
                      href="https://www.impelox.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-blue-400 transition-colors hover:text-blue-300"
                    >
                      Impelox
                    </a>{" "}
                    as CEO. Over the years, I&apos;ve built and scaled teams of{" "}
                    <strong className="text-slate-200">60+ people</strong>, delivering AI agents and intelligent systems for regulated industries — enabling customers to run operations 24/7 with confidence.
                  </p>
                  <p>
                    I&apos;m still a builder at heart: I write code, stay close to architecture, and care deeply about product velocity and trust.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.linkedin.com/in/venkateshtv/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    Connect on LinkedIn
                  </a>
                  <Link href="/posts" className="btn-secondary">
                    Read my writing
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
                <div
                  className="pointer-events-none absolute -inset-4 rounded-[2rem] opacity-60 blur-3xl"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 40%, rgba(37, 99, 235, 0.35), transparent 55%)",
                  }}
                />
                <ProfilePhoto />
              </div>
            </div>
          </div>

          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-24"
            style={{
              background: "linear-gradient(to bottom, transparent, #020617)",
            }}
          />
        </section>

        {/* Personal notes */}
        <section className="border-t border-white/[0.04] py-16 sm:py-20">
          <div className="container-wide">
            <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-br from-blue-500/[0.06] via-white/[0.02] to-cyan-500/[0.04] p-8 sm:p-10 lg:p-12">
              <p className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[0.35em] text-blue-400/90">
                Beyond the desk
              </p>
              <h2 className="font-display mb-6 text-2xl font-medium text-white sm:text-3xl">
                Personal notes
              </h2>
              <ul className="font-serif grid gap-4 text-sm leading-relaxed text-slate-400 sm:grid-cols-2 sm:text-base">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                  <span>
                    I still <strong className="text-slate-200">write code</strong> — it keeps me honest about what we
                    ask teams to ship.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                  <span>
                    I read <strong className="text-slate-200">tech articles and papers</strong> constantly — AI moves
                    fast; curiosity is a habit.
                  </span>
                </li>
                <li className="flex gap-3 sm:col-span-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                  <span>
                    Away from work, I&apos;m with <strong className="text-slate-200">family</strong> — and with our
                    beagle, who has strong opinions about walk times and treats.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* About Cards Section */}
        <section className="py-20">
  <div className="container-wide">
    <div className="mb-10">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-500">
      Conversations I enjoy
      </p>
      <h2 className="font-display text-3xl font-medium text-white">
        where I add value
      </h2>
    </div>

    <div className="grid gap-5 sm:grid-cols-3">

      {/* 1. Customers */}
      <div className="glass-card p-6">
        <h3 className="mb-2 text-base font-semibold text-white">
          When growth starts breaking
        </h3>
        <p className="text-sm leading-relaxed text-slate-400">
          Leads slip through, costs rise, and adding people doesn’t fix it. I build AI agents that take over real customer workflows — not just assist.
        </p>
      </div>

      {/* 2.  CTO  */}
      <div className="glass-card p-6">
        <h3 className="mb-2 text-base font-semibold text-white">
          When tech decisions slow you down
        </h3>
        <p className="text-sm leading-relaxed text-slate-400">
          Architecture, AI direction, execution — things feel unclear or fragmented. I step in to bring clarity, make decisions faster, and align teams toward outcomes.
        </p>
      </div>

      {/* 3. Mentor */}
      <div className="glass-card p-6">
        <h3 className="mb-2 text-base font-semibold text-white">
          When you’re building but something feels off
        </h3>
        <p className="text-sm leading-relaxed text-slate-400">
          If you’re serious about what you’re building, I’m open to sharing what works, what breaks, and where most founders lose time.
        </p>
      </div>

    </div>

    <p className="mt-8 text-sm text-slate-500">
      If one of these resonates, you’ll know why to reach out.
    </p>
  </div>
</section>

        {/* Recent Posts Section */}
        <section className="border-t border-white/[0.04] py-24">
          <div className="container-wide">
            <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[0.35em] text-blue-400/90">
                  Journal
                </p>
                <h2 className="font-display text-4xl font-medium tracking-[-0.03em] text-white sm:text-5xl">
                  Recent writing
                </h2>
                <p className="font-serif mt-3 max-w-md text-slate-500">
                  Essays on AI, systems, and building companies — not hot takes.
                </p>
              </div>
              <Link
                href="/posts"
                className="group inline-flex items-center gap-2 font-sans text-sm font-semibold text-blue-400/90 transition-colors hover:text-blue-300"
              >
                Browse the archive
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {recentPosts.length > 0 ? (
              <div className="divide-y divide-white/[0.06]">
                {recentPosts.map((post, i) => (
                  <PostCard key={post.id} post={post} index={i} />
                ))}
              </div>
            ) : (
              <div className="glass-card p-16 text-center">
                <div
                  className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  <svg
                    className="h-6 w-6 text-slate-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <p className="mb-4 text-slate-400">No posts yet. Check back soon!</p>
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
