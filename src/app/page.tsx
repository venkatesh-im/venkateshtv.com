import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import ProfilePhoto from "@/components/ProfilePhoto";
import BeyondDeskAgents from "@/components/BeyondDeskAgents";
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

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative overflow-hidden pt-16 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-36">
          <div className="bg-grid absolute inset-0 opacity-100" />
          <div className="glow-orb" style={{ top: "-160px", left: "-160px" }} />
          <div className="glow-orb-indigo" style={{ bottom: "-100px", right: "-100px" }} />

          <div className="container-wide relative z-10">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

              {/* Left */}
              <div className="flex flex-col items-start">
                <div className="mb-6">
                  <span className="badge">
                    <span className="badge-dot" />
                    2× CTO · CEO &amp; Founder · Impelox
                  </span>
                </div>

                <h1 className="font-display mb-6 text-5xl font-medium leading-[1.05] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
                  Venkatesh TV
                </h1>

                <p className="mb-10 max-w-lg text-lg font-medium leading-snug text-slate-400 sm:text-xl lg:text-2xl">
                  I build AI agents that run sales and support —{" "}
                  <span className="gradient-text">from first contact to closed deal</span>
                </p>

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
                  <Link href="/contact" className="btn-secondary">
                    Contact me
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </Link>
                </div>

                {/* Stats — visible above the fold */}
                <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/[0.08] pt-8">
                  {[
                    { value: "2×", label: "CTO" },
                    { value: "60+", label: "People Led" },
                    { value: "5+", label: "Years Building" },
                    { value: "20+", label: "Years of Exp" },
                  ].map((stat) => (
                    <div key={stat.label} className="flex flex-col gap-0.5">
                      <span
                        className="font-display text-2xl font-semibold tracking-tight sm:text-3xl"
                        style={{
                          background: "linear-gradient(135deg, #60a5fa, #38bdf8)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {stat.value}
                      </span>
                      <span className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — photo with floating badges */}
              <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-md">
                {/* Glow behind photo */}
                <div
                  className="pointer-events-none absolute -inset-6 rounded-[2.5rem] opacity-70 blur-3xl"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 40%, rgba(37, 99, 235, 0.4), transparent 60%)",
                  }}
                />

                <ProfilePhoto />

                {/* Floating badge — bottom left */}
                <div
                  className="absolute -bottom-4 -left-4 z-10 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-[0_16px_40px_-8px_rgba(0,0,0,0.6)] sm:-left-6"
                  style={{
                    background: "rgba(13, 17, 23, 0.92)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    backdropFilter: "blur(16px)",
                  }}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/20">
                    <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">AI Agents for...</p>
                    <p className="text-[11px] text-slate-400">Insurance · Healthcare · Pharma · E-commerce · Hospitality · Real Estate · Manufacturing · Supply Chain & Logistics</p>
                  </div>
                </div>

                {/* Floating badge — top right */}
                <div
                  className="absolute -top-4 -right-4 z-10 flex items-center gap-2 rounded-2xl px-4 py-3 shadow-[0_16px_40px_-8px_rgba(0,0,0,0.6)] sm:-right-6"
                  style={{
                    background: "rgba(13, 17, 23, 0.92)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    backdropFilter: "blur(16px)",
                  }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <p className="text-xs font-semibold text-white">AI agents · live in production</p>
                </div>
              </div>

            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
              Scroll to explore
            </span>
            <div
              className="flex h-10 w-6 items-start justify-center rounded-full p-1.5"
              style={{
                border: "1px solid rgba(96,165,250,0.35)",
                background: "rgba(37,99,235,0.08)",
                boxShadow: "0 0 16px rgba(37,99,235,0.2)",
              }}
            >
              <div
                className="w-1 rounded-full bg-blue-400"
                style={{
                  height: "6px",
                  animation: "scrollDot 1.6s ease-in-out infinite",
                  boxShadow: "0 0 6px rgba(96,165,250,0.8)",
                }}
              />
            </div>
            <style>{`
              @keyframes scrollDot {
                0%   { transform: translateY(0);   opacity: 1; }
                60%  { transform: translateY(10px); opacity: 0.2; }
                100% { transform: translateY(0);   opacity: 1; }
              }
            `}</style>
          </div>

          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-28"
            style={{ background: "linear-gradient(to bottom, transparent, #020617)" }}
          />
        </section>


        {/* ── Who I Am ─────────────────────────────────────────── */}
        <section className="relative py-20 sm:py-28">
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 0% 50%, rgba(37, 99, 235, 0.15), transparent), radial-gradient(ellipse 50% 40% at 100% 50%, rgba(6, 182, 212, 0.1), transparent)",
            }}
          />
          <div className="container-wide relative">
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

              {/* Image */}
              <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
                <div
                  className="pointer-events-none absolute -inset-6 rounded-[2rem] opacity-50 blur-3xl"
                  style={{
                    background: "radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.25), transparent 65%)",
                  }}
                />
                <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] shadow-[0_40px_80px_-24px_rgba(0,0,0,0.7)]">
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src="/venkatesh-tv-4.jpg"
                      alt="Venkatesh TV"
                      fill
                      sizes="(max-width: 1024px) 100vw, 480px"
                      className="object-cover object-top"
                      priority={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/60 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Impelox pill */}
                <a
                  href="https://www.impelox.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 flex items-center gap-2 rounded-full px-5 py-2.5 transition-all hover:scale-105"
                  style={{
                    background: "rgba(13, 17, 23, 0.92)",
                    border: "1px solid rgba(37,99,235,0.35)",
                    backdropFilter: "blur(16px)",
                    boxShadow: "0 0 24px rgba(37,99,235,0.2)",
                  }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  <span className="text-xs font-semibold text-blue-300">CEO @ Impelox</span>
                </a>
              </div>

              {/* Text */}
              <div>
                <p className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[0.35em] text-blue-400/90">
                  Who I Am
                </p>
                <h2 className="font-display mb-8 text-4xl font-medium tracking-[-0.02em] text-white sm:text-5xl">
                  Builder. Leader.{" "}
                  <span className="gradient-text-violet">Founder.</span>
                </h2>

                <div className="space-y-5 font-serif text-lg leading-relaxed text-slate-400 sm:text-xl">
                  <p>
                    I&apos;ve served as{" "}
                    <strong className="text-slate-200">Chief Technology Officer twice</strong> —
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
                    <strong className="text-slate-200">60+ people</strong>, delivering AI agents and
                    intelligent systems for regulated industries — enabling customers to run
                    operations 24/7 with confidence.
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Link href="/posts" className="btn-primary">
                    Read my writing
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <a
                    href="https://www.impelox.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    Visit Impelox
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── What I bring ─────────────────────────────────────── */}
        <section className="relative border-t border-white/[0.06] py-16 sm:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(37, 99, 235, 0.18), transparent)",
            }}
          />
          <div className="container-wide relative">
            <div className="mb-10 sm:mb-12">
              <p className="mb-2 font-sans text-[11px] font-semibold uppercase tracking-[0.35em] text-blue-400/90">
                Capabilities
              </p>
              <h2 className="font-display text-3xl font-medium tracking-[-0.02em] text-white sm:text-4xl">
                What I bring to the table
              </h2>
              <p className="mt-2 max-w-xl font-sans text-sm text-slate-500 sm:text-base">
                Specific things I&apos;ve done, built, or earned — not just titles.
              </p>
            </div>

            {/* Bento grid — 2 large on top, 3 compact below */}
            <div className="grid gap-3 sm:grid-cols-2">

              {/* Agent Frameworks — large */}
              <div className="glass-card p-7">
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: "rgba(37, 99, 235, 0.15)", border: "1px solid rgba(37,99,235,0.25)" }}
                  >
                    <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">Get your own Agents</h3>
                </div>
                <p className="mb-5 font-sans text-sm leading-relaxed text-slate-400">
                  Custom AI agents that work 24/7 — handling leads, support, follow-ups, and operations so your team doesn&apos;t have to.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Next Action AI", "OpenClaw", "ADK", "AG2", "LangGraph", "Claude", "GPT", "Gemini", "Ollama"].map((t) => (
                    <span key={t} className="rounded-full bg-blue-500/10 px-3 py-1 font-mono text-xs text-blue-300 ring-1 ring-blue-500/20">{t}</span>
                  ))}
                </div>
              </div>

              {/* Workflow Automation — large */}
              <div className="glass-card p-7">
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: "rgba(251, 191, 36, 0.12)", border: "1px solid rgba(251,191,36,0.22)" }}
                  >
                    <svg className="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">Automate Repeated Tasks</h3>
                </div>
                <p className="mb-5 font-sans text-sm leading-relaxed text-slate-400">
                  Stop doing the same thing twice. Automate your repetitive workflows end-to-end — saving time, reducing errors, and freeing your team for what matters.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Impelox Platform", "n8n", "Make.com", "GHL", "Zapier"].map((t) => (
                    <span key={t} className="rounded-full bg-amber-500/10 px-3 py-1 font-mono text-xs text-amber-300 ring-1 ring-amber-500/20">{t}</span>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom row — 3 compact credential cards */}
            <div className="mt-3 grid gap-3 sm:grid-cols-3">

              {/* Security & Compliance */}
              <div className="glass-card p-6">
                <div className="mb-3 flex items-center gap-3">
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                    style={{ background: "rgba(16, 185, 129, 0.12)", border: "1px solid rgba(16,185,129,0.22)" }}
                  >
                    <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-base font-semibold text-white">Security &amp; Compliance</h3>
                </div>
                <p className="mb-3 font-sans text-xs leading-relaxed text-slate-400">
                  Production systems in regulated industries with enterprise-grade certifications.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["SOC 2", "ISO 27001", "GDPR", "HIPAA"].map((t) => (
                    <span key={t} className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] text-emerald-300 ring-1 ring-emerald-500/20">{t}</span>
                  ))}
                </div>
              </div>

              {/* Product Scale */}
              <div className="glass-card p-6">
                <div className="mb-3 flex items-center gap-3">
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                    style={{ background: "rgba(6, 182, 212, 0.12)", border: "1px solid rgba(6,182,212,0.22)" }}
                  >
                    <svg className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="font-display text-base font-semibold text-white">Product Scale</h3>
                </div>
                <p className="font-sans text-xs leading-relaxed text-slate-400">
                  Scaled a product from zero to{" "}
                  <span className="font-medium text-slate-200">25% market share</span>{" "}
                  in its vertical — architecture to commercial traction.
                </p>
              </div>

              {/* Investor Conversations */}
              <div className="glass-card p-6">
                <div className="mb-3 flex items-center gap-3">
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                    style={{ background: "rgba(167, 139, 250, 0.12)", border: "1px solid rgba(167,139,250,0.22)" }}
                  >
                    <svg className="h-4 w-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-base font-semibold text-white">Investor Conversations</h3>
                </div>
                <p className="font-sans text-xs leading-relaxed text-slate-400">
                  Represented tech in{" "}
                  <span className="font-medium text-slate-200">funding rounds</span>{" "}
                  — translating architecture and roadmap into investor confidence.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── Beyond the desk ───────────────────────────────────── */}
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
                <p className="mt-2 max-w-xl font-sans text-sm text-slate-500 sm:text-base">
                  I think of life outside work as three agents running in parallel — builder, learner, and home — merged
                  into one day.
                </p>
              </div>
              <div className="hidden h-px w-full max-w-xs bg-gradient-to-r from-blue-500/40 via-cyan-500/25 to-transparent sm:mb-2 sm:block" />
            </div>
            <BeyondDeskAgents />
          </div>
        </section>

        {/* ── Where I add value ─────────────────────────────────── */}
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
              If one of these resonates,{" "}
              <Link
                href="/contact"
                className="text-blue-400 transition-colors hover:text-blue-300"
              >
                reach out
              </Link>
              . I read every message.
            </p>
          </div>
        </section>

        {/* ── Recent writing ────────────────────────────────────── */}
        <section className="border-t border-white/[0.06] py-16 sm:py-24">
          <div className="container-wide">
            <div className="grid gap-12 lg:grid-cols-[minmax(260px,340px)_minmax(0,1fr)] lg:gap-14 xl:gap-16">
              <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/[0.1] shadow-[0_32px_80px_-40px_rgba(37,99,235,0.35)] sm:aspect-[4/5] lg:sticky lg:top-24 lg:aspect-[3/4]">
                  <Image
                    src="/images/sections/section-journal.png"
                    alt="Writing and journal"
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
                      <svg className="h-6 w-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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
