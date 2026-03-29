import Image from "next/image";

const agents = [
  {
    id: "builder-agent",
    title: "Hands-on builder",
    borderClass: "border-l-blue-500/70",
    dotClass: "bg-blue-400",
    lineColor: "#58a6ff",
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
    lineColor: "#22d3ee",
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
    lineColor: "#fbbf24",
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

/** Hub-and-spoke paths: builder (TL), learner (TR), home (B) → center merge */
const PATHS = [
  "M 72 48 Q 130 78 200 102",
  "M 328 48 Q 270 78 200 102",
  "M 200 168 Q 200 138 200 102",
];

export default function BeyondDeskAgents() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#3c3c3c] bg-[#0d1117] shadow-[0_32px_80px_-28px_rgba(0,0,0,0.9)] ring-1 ring-white/[0.04]">
      {/* Title bar */}
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

      {/* Primary focus: agents ↔ hub (animated flow) */}
      <div className="relative border-b border-[#30363d] bg-[radial-gradient(ellipse_85%_80%_at_50%_45%,rgba(88,166,255,0.08),transparent_55%)] px-3 py-8 sm:px-6 sm:py-10">
        <p className="mb-6 text-center font-mono text-[11px] text-[#8b949e] sm:text-xs">
          <span className="text-[#7ee787]">●</span> Three agents stream into one orchestrator — your attention is the merge
          step.
        </p>

        <div
          className="relative mx-auto max-w-3xl"
          role="img"
          aria-label="Diagram: three agents builder, learner, and home connect with animated lines into a central merge hub"
        >
          <svg
            className="h-auto w-full"
            viewBox="0 0 400 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="beyondDeskHubGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Base paths */}
            {PATHS.map((d, i) => (
              <path
                key={`base-${agents[i].id}`}
                d={d}
                stroke="#30363d"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            ))}

            {/* Animated flow — reads as data moving between agents */}
            {PATHS.map((d, i) => (
              <path
                key={`flow-${agents[i].id}`}
                d={d}
                stroke={agents[i].lineColor}
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                strokeDasharray="6 14"
                className="animate-agent-dash opacity-90"
              />
            ))}

            <text x="72" y="28" textAnchor="middle" fill="#58a6ff" fontSize="11" fontFamily="ui-monospace, monospace">
              builder
            </text>
            <text x="328" y="28" textAnchor="middle" fill="#22d3ee" fontSize="11" fontFamily="ui-monospace, monospace">
              learner
            </text>
            <text x="200" y="196" textAnchor="middle" fill="#fbbf24" fontSize="11" fontFamily="ui-monospace, monospace">
              home
            </text>

            <circle cx="72" cy="48" r="13" fill="#161b22" stroke="#58a6ff" strokeWidth="2" />
            <circle cx="328" cy="48" r="13" fill="#161b22" stroke="#22d3ee" strokeWidth="2" />
            <circle cx="200" cy="168" r="13" fill="#161b22" stroke="#fbbf24" strokeWidth="2" />

            <circle
              cx="200"
              cy="102"
              r="28"
              fill="none"
              stroke="#3fb950"
              strokeWidth="1.5"
              className="animate-hub-pulse"
            />
            <circle
              cx="200"
              cy="102"
              r="22"
              fill="#0d1117"
              stroke="#3fb950"
              strokeWidth="2"
              filter="url(#beyondDeskHubGlow)"
            />
            <text x="200" y="99" textAnchor="middle" fill="#7ee787" fontSize="10" fontFamily="ui-monospace, monospace">
              merge
            </text>
            <text x="200" y="111" textAnchor="middle" fill="#8b949e" fontSize="8" fontFamily="ui-monospace, monospace">
              ctx
            </text>
          </svg>
        </div>
      </div>

      {/* Terminal — secondary detail */}
      <div className="border-b border-[#30363d] px-4 py-4 font-mono text-[11px] leading-relaxed text-[#c9d1d9] sm:px-5 sm:text-xs">
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

      {/* Cards — supporting detail; smaller imagery so diagram stays hero */}
      <div className="grid gap-0 border-t border-[#30363d] bg-[#0a0d12] sm:grid-cols-2 lg:grid-cols-3">
        {agents.map((a, i) => (
          <article
            key={a.id}
            className={`group relative border-b border-[#30363d] bg-gradient-to-b from-white/[0.04] to-transparent transition-colors hover:bg-white/[0.03] sm:border-b-0 lg:border-r lg:border-[#30363d] lg:last:border-r-0 ${a.borderClass} border-l-4`}
          >
            <div className="flex items-center justify-between border-b border-white/[0.06] bg-black/25 px-3 py-2 font-mono text-[10px] text-slate-400 sm:px-4 sm:text-[11px]">
              <span className="truncate text-slate-300">{a.id}</span>
              <span className="flex shrink-0 items-center gap-1.5">
                <span className="text-[#8b949e]">↔</span>
                <span className={`h-1.5 w-1.5 rounded-full ${a.dotClass}`} aria-hidden />
                <span className="text-emerald-400/90">sync</span>
              </span>
            </div>
            <div className="relative aspect-[2/1] w-full overflow-hidden sm:aspect-[16/10]">
              <Image
                src={a.src}
                alt={a.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent" />
            </div>
            <div className="p-4 sm:p-5">
              <h3 className="font-display text-base font-medium tracking-[-0.02em] text-white sm:text-lg">{a.title}</h3>
              <div className="mt-2 font-sans text-xs leading-relaxed text-slate-400 sm:text-sm">{a.body}</div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
