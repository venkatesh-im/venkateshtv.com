import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import ProfilePhoto from "@/components/ProfilePhoto";
import SectionFeatureCard from "@/components/SectionFeatureCard";
import ConversationsIDE from "@/components/ConversationsIDE";
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
        {/* Hero Section — tighter top: sticky header already consumes space */}
        <section className="relative overflow-hidden pt-6 pb-14 sm:pt-8 sm:pb-20 lg:pt-10 lg:pb-28">
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
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:gap-14 lg:items-start">
              <div>
                <div className="mb-5 sm:mb-6">
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
                    <strong className="text-slate-200">60+ people</strong>, delivering AI agents and intelligent systems
                    for regulated industries — enabling customers to run operations 24/7 with confidence.
                  </p>
                  <p>
                    I&apos;m still a builder at heart: I write code, stay close to architecture, and care deeply about
                    product velocity and trust.
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

        {/* Beyond the desk — image-led cards (replace images in /public/images/sections/) */}
        <section className="relative border-t border-white/[0.06] py-14 sm:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 20% 0%, rgba(37, 99, 235, 0.12), transparent), radial-gradient(ellipse 60% 40% at 90% 100%, rgba(6, 182, 212, 0.08), transparent)",
            }}
          />
          <div className="container-wide relative">
            <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-2 font-sans text-[11px] font-semibold uppercase tracking-[0.35em] text-blue-400/90">
                  Beyond the desk
                </p>
                <h2 className="font-display text-3xl font-medium tracking-[-0.02em] text-white sm:text-4xl">
                  Life outside the terminal
                </h2>
                <p className="mt-2 max-w-md font-sans text-sm text-slate-500 sm:text-base">
                  The habits and people that keep perspective sharp.
                </p>
              </div>
              <div className="hidden h-px w-full max-w-xs bg-gradient-to-r from-blue-500/40 via-cyan-500/25 to-transparent sm:mb-2 sm:block" />
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <SectionFeatureCard
                src="/images/sections/section-life-builder.png"
                alt="Placeholder art: coding and building (replace with your photo)"
                title="Hands-on builder"
                accent="blue"
              >
                <p>
                  I still <span className="text-slate-200">write code</span> — it keeps me honest about what we ask teams
                  to ship.
                </p>
              </SectionFeatureCard>

              <SectionFeatureCard
                src="/images/sections/section-life-learning.png"
                alt="Placeholder art: reading and research (replace with your photo)"
                title="Always learning"
                accent="cyan"
              >
                <p>
                  I read <span className="text-slate-200">tech articles and papers</span> constantly — AI moves fast;
                  curiosity is a habit.
                </p>
              </SectionFeatureCard>

              <SectionFeatureCard
                src="/images/sections/section-life-family.png"
                alt="Placeholder art: family and dog (replace with your photo)"
                title="Family & a beagle"
                accent="amber"
                wideOnSm
              >
                <p>
                  Away from work, I&apos;m with <span className="text-slate-200">family</span> — and our beagle, who has
                  strong opinions about walk times and treats.
                </p>
              </SectionFeatureCard>
            </div>
          </div>
        </section>

        {/* Where I add value — image-led cards */}
        <section className="relative py-16 sm:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(ellipse 70% 40% at 80% 0%, rgba(99, 102, 241, 0.1), transparent), radial-gradient(ellipse 50% 30% at 10% 100%, rgba(37, 99, 235, 0.08), transparent)",
            }}
          />
          <div className="container-wide relative">
            <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-500">
                  Conversations I enjoy
                </p>
                <h2 className="font-display text-3xl font-medium tracking-[-0.02em] text-white sm:text-4xl">
                  Where I add value
                </h2>
                <p className="mt-2 max-w-lg font-sans text-sm text-slate-500 sm:text-base">
                  Three places founders and operators usually feel the friction first.
                </p>
              </div>
              <div className="hidden h-px w-full max-w-xs bg-gradient-to-r from-violet-500/30 via-blue-500/25 to-transparent sm:mb-2 sm:block" />
            </div>

            <ConversationsIDE />

            <p className="mt-10 text-center font-sans text-sm text-slate-500 sm:text-left">
              If one of these resonates, you&apos;ll know why to reach out.
            </p>
          </div>
        </section>

        {/* Recent writing — editorial split with art */}
        <section className="border-t border-white/[0.06] py-16 sm:py-24">
          <div className="container-wide">
            <div className="grid gap-12 lg:grid-cols-[minmax(260px,340px)_minmax(0,1fr)] lg:gap-14 xl:gap-16">
              <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/[0.1] shadow-[0_32px_80px_-40px_rgba(37,99,235,0.35)] sm:aspect-[4/5] lg:sticky lg:top-24 lg:aspect-[3/4]">
                  <Image
                    src="/images/sections/section-journal.png"
                    alt="Placeholder art: writing and journal (replace)"
                    fill
                    sizes="(max-width: 1024px) 100vw, 320px"
                    className="object-cover"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/25 to-transparent" />
                </div>
              </div>

              <div className="min-w-0">
                <div className="mb-10 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
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
                    className="group inline-flex shrink-0 items-center gap-2 font-sans text-sm font-semibold text-blue-400/90 transition-colors hover:text-blue-300"
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
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
