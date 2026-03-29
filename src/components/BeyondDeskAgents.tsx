import Image from "next/image";

const agents = [
  {
    id: "builder-agent",
    title: "Hands-on builder",
    borderClass: "border-l-blue-500/70",
    dotClass: "bg-blue-400",
    src: "/images/sections/section-life-builder.png",
    alt: "Placeholder art: coding and building (replace with your photo)",
    body: (
      <>
        I still <span className="text-slate-200">write code</span> — it keeps me honest about what we ask teams to ship.
      </>
    ),
  },
  {
    id: "learner-agent",
    title: "Always learning",
    borderClass: "border-l-cyan-500/70",
    dotClass: "bg-cyan-400",
    src: "/images/sections/section-life-learning.png",
    alt: "Placeholder art: reading and research (replace with your photo)",
    body: (
      <>
        I read <span className="text-slate-200">tech articles and papers</span> constantly — AI moves fast; curiosity is
        a habit.
      </>
    ),
  },
  {
    id: "home-agent",
    title: "Family & a beagle",
    borderClass: "border-l-amber-500/70",
    dotClass: "bg-amber-400",
    src: "/images/sections/section-life-family.png",
    alt: "Placeholder art: family and dog (replace with your photo)",
    body: (
      <>
        Away from work, I&apos;m with <span className="text-slate-200">family</span> — and our beagle, who has strong
        opinions about walk times and treats.
      </>
    ),
  },
];

export default function BeyondDeskAgents() {
  return (
    <div className="space-y-8">
      {/* Orchestrator — multi-agent “runtime” */}
      <div className="overflow-hidden rounded-xl border border-[#3c3c3c] bg-[#0d1117] shadow-[0_24px_60px_-28px_rgba(0,0,0,0.85)] ring-1 ring-white/[0.04]">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#30363d] bg-[#161b22] px-4 py-2.5">
          <div className="flex min-w-0 items-center gap-2 font-mono text-[11px] text-[#8b949e] sm:text-xs">
            <span className="truncate text-[#58a6ff]">life-orchestrator</span>
            <span className="text-[#484f58]">·</span>
            <span className="hidden sm:inline">multi-agent</span>
            <span className="rounded border border-[#30363d] bg-[#21262d] px-1.5 py-0.5 text-[10px] text-[#c9d1d9]">
              3 agents
            </span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#3fb950]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3fb950] opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3fb950]" />
            </span>
            merged_context
          </div>
        </div>

        <div className="relative px-4 py-4 font-mono text-[11px] leading-relaxed text-[#c9d1d9] sm:px-5 sm:text-xs">
          <p className="text-[#8b949e]">
            <span className="text-[#79c0ff]">$</span> life status --agents
          </p>
          <ul className="mt-3 space-y-2 border-l border-[#30363d] pl-3">
            {agents.map((a) => (
              <li key={a.id} className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                <span className="text-[#7ee787]">●</span>
                <span className="text-[#79c0ff]">{a.id}</span>
                <span className="text-[#8b949e]">RUNNING</span>
                <span className="text-[#484f58]">—</span>
                <span className="text-[#d2a8ff]">role:</span>
                <span>{a.title}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 border-t border-[#30363d] pt-3 text-[#8b949e]">
            <span className="text-[#ffa657]">merge</span>
            <span className="text-[#c9d1d9]">(</span>
            <span className="text-[#79c0ff]">builder</span>
            <span className="text-[#c9d1d9]">, </span>
            <span className="text-[#79c0ff]">learner</span>
            <span className="text-[#c9d1d9]">, </span>
            <span className="text-[#79c0ff]">home</span>
            <span className="text-[#c9d1d9]">)</span>
            <span className="text-[#8b949e]"> → </span>
            <span className="text-[#7ee787]">one day, one life</span>
          </p>
        </div>

        {/* Connector lines into the three cards (desktop) */}
        <div className="relative hidden h-6 border-t border-[#30363d] lg:block" aria-hidden>
          <svg className="absolute inset-x-0 bottom-0 h-full w-full text-[#30363d]" preserveAspectRatio="none">
            <line x1="17%" y1="0" x2="17%" y2="100%" stroke="currentColor" strokeWidth="1" />
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="currentColor" strokeWidth="1" />
            <line x1="83%" y1="0" x2="83%" y2="100%" stroke="currentColor" strokeWidth="1" />
            <line x1="17%" y1="0" x2="83%" y2="0" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
      </div>

      {/* Agent cards */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {agents.map((a) => (
          <article
            key={a.id}
            className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] shadow-[0_24px_60px_-30px_rgba(0,0,0,0.85)] transition-all duration-300 ${a.borderClass} border-l-4`}
          >
            <div className="flex items-center justify-between border-b border-white/[0.06] bg-black/20 px-4 py-2.5 font-mono text-[10px] text-slate-400 sm:text-[11px]">
              <span className="truncate text-slate-300">{a.id}</span>
              <span className="flex items-center gap-1.5 shrink-0">
                <span className={`h-1.5 w-1.5 rounded-full ${a.dotClass}`} aria-hidden />
                <span className="text-emerald-400/90">active</span>
              </span>
            </div>
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={a.src}
                alt={a.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/35 to-transparent" />
            </div>
            <div className="p-6 pt-5">
              <h3 className="font-display text-lg font-medium tracking-[-0.02em] text-white sm:text-xl">{a.title}</h3>
              <div className="mt-3 font-sans text-sm leading-relaxed text-slate-400">{a.body}</div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
