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

/** Fixed starfield (deterministic, lightweight) */
const STARS: { x: number; y: number; r: number; o: number }[] = [
  { x: 18, y: 22, r: 0.35, o: 0.45 },
  { x: 42, y: 8, r: 0.25, o: 0.7 },
  { x: 67, y: 95, r: 0.2, o: 0.35 },
  { x: 95, y: 38, r: 0.4, o: 0.55 },
  { x: 112, y: 12, r: 0.2, o: 0.9 },
  { x: 128, y: 78, r: 0.3, o: 0.4 },
  { x: 155, y: 45, r: 0.25, o: 0.65 },
  { x: 178, y: 18, r: 0.35, o: 0.5 },
  { x: 188, y: 155, r: 0.22, o: 0.8 },
  { x: 215, y: 32, r: 0.28, o: 0.45 },
  { x: 238, y: 8, r: 0.4, o: 0.35 },
  { x: 262, y: 72, r: 0.2, o: 0.55 },
  { x: 285, y: 118, r: 0.32, o: 0.4 },
  { x: 308, y: 28, r: 0.25, o: 0.75 },
  { x: 332, y: 92, r: 0.35, o: 0.3 },
  { x: 358, y: 14, r: 0.22, o: 0.85 },
  { x: 382, y: 48, r: 0.3, o: 0.5 },
  { x: 8, y: 120, r: 0.2, o: 0.6 },
  { x: 34, y: 168, r: 0.28, o: 0.4 },
  { x: 56, y: 142, r: 0.18, o: 0.9 },
  { x: 88, y: 182, r: 0.35, o: 0.35 },
  { x: 145, y: 188, r: 0.22, o: 0.55 },
  { x: 320, y: 168, r: 0.25, o: 0.45 },
  { x: 368, y: 175, r: 0.3, o: 0.4 },
  { x: 392, y: 132, r: 0.2, o: 0.7 },
  { x: 24, y: 62, r: 0.15, o: 0.5 },
  { x: 200, y: 6, r: 0.4, o: 0.55 },
  { x: 400, y: 88, r: 0.2, o: 0.45 },
  { x: 172, y: 112, r: 0.18, o: 0.65 },
  { x: 228, y: 98, r: 0.2, o: 0.5 },
  { x: 118, y: 58, r: 0.25, o: 0.4 },
  { x: 292, y: 52, r: 0.22, o: 0.6 },
  { x: 48, y: 104, r: 0.2, o: 0.35 },
  { x: 350, y: 138, r: 0.28, o: 0.5 },
  { x: 14, y: 178, r: 0.22, o: 0.45 },
  { x: 76, y: 26, r: 0.18, o: 0.75 },
  { x: 244, y: 142, r: 0.2, o: 0.4 },
  { x: 268, y: 12, r: 0.32, o: 0.5 },
  { x: 198, y: 76, r: 0.15, o: 0.55 },
  { x: 312, y: 108, r: 0.2, o: 0.45 },
  { x: 164, y: 26, r: 0.2, o: 0.65 },
  { x: 384, y: 96, r: 0.25, o: 0.4 },
];

export default function BeyondDeskAgents() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#3c3c3c] bg-[#0d1117] shadow-[0_32px_80px_-28px_rgba(0,0,0,0.9)] ring-1 ring-white/[0.04]">
      {/* Title bar — subtle deep-space strip */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#2a2540]/80 bg-gradient-to-r from-[#0a0814] via-[#12101c] to-[#080c18] px-4 py-2.5">
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

      {/* Cosmic orchestrator: space + planets + sun */}
      <div className="relative overflow-hidden border-b border-[#2a2540]/80 px-3 py-8 sm:px-6 sm:py-10">
        <p className="relative z-[1] mb-6 text-center font-mono text-[11px] text-indigo-200/75 sm:text-xs">
          <span className="text-amber-200/90">✦</span> Three worlds in orbit — streams converge at the sun:{" "}
          <span className="text-amber-100/90">merge ctx</span>.
        </p>

        <div
          className="relative z-[1] mx-auto max-w-3xl"
          role="img"
          aria-label="Cosmic diagram: builder, learner, and home as planets with paths of light flowing into a central sun labeled merge context"
        >
          <svg
            className="h-auto w-full drop-shadow-[0_0_40px_rgba(88,28,135,0.15)]"
            viewBox="0 0 400 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="beyondDeskCosmicVoid" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#03040a" />
                <stop offset="35%" stopColor="#0a0c1a" />
                <stop offset="65%" stopColor="#0f0820" />
                <stop offset="100%" stopColor="#040208" />
              </linearGradient>
              <radialGradient id="beyondDeskNebulaViolet" cx="22%" cy="18%" r="55%">
                <stop offset="0%" stopColor="#6d28d9" stopOpacity="0.35" />
                <stop offset="50%" stopColor="#4c1d95" stopOpacity="0.12" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
              <radialGradient id="beyondDeskNebulaTeal" cx="88%" cy="75%" r="45%">
                <stop offset="0%" stopColor="#0891b2" stopOpacity="0.22" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
              <radialGradient id="beyondDeskNebulaRose" cx="50%" cy="100%" r="50%">
                <stop offset="0%" stopColor="#be185d" stopOpacity="0.15" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>

              <radialGradient id="beyondDeskPlanetBuilder" cx="32%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#93c5fd" />
                <stop offset="40%" stopColor="#2563eb" />
                <stop offset="78%" stopColor="#1e3a5f" />
                <stop offset="100%" stopColor="#0c1525" />
              </radialGradient>
              <radialGradient id="beyondDeskPlanetLearner" cx="35%" cy="28%" r="68%">
                <stop offset="0%" stopColor="#a5f3fc" />
                <stop offset="38%" stopColor="#06b6d4" />
                <stop offset="75%" stopColor="#0e7490" />
                <stop offset="100%" stopColor="#042f2e" />
              </radialGradient>
              <radialGradient id="beyondDeskPlanetHome" cx="30%" cy="32%" r="72%">
                <stop offset="0%" stopColor="#fde68a" />
                <stop offset="35%" stopColor="#d97706" />
                <stop offset="72%" stopColor="#78350f" />
                <stop offset="100%" stopColor="#1c1008" />
              </radialGradient>

              <radialGradient id="beyondDeskSunCore" cx="38%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#fffbeb" />
                <stop offset="18%" stopColor="#fde047" />
                <stop offset="45%" stopColor="#f59e0b" />
                <stop offset="72%" stopColor="#ea580c" />
                <stop offset="100%" stopColor="#9a3412" />
              </radialGradient>
              <radialGradient id="beyondDeskSunCorona" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fcd34d" stopOpacity="0.55" />
                <stop offset="40%" stopColor="#f97316" stopOpacity="0.2" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>

              <filter id="beyondDeskSoftGlow" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="2.5" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="beyondDeskSunBloom" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="6" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <rect width="400" height="200" fill="url(#beyondDeskCosmicVoid)" rx="4" />
            <rect width="400" height="200" fill="url(#beyondDeskNebulaViolet)" rx="4" />
            <rect width="400" height="200" fill="url(#beyondDeskNebulaTeal)" rx="4" />
            <rect width="400" height="200" fill="url(#beyondDeskNebulaRose)" rx="4" />

            {STARS.map((s, i) => (
              <circle key={`star-${i}`} cx={s.x} cy={s.y} r={s.r} fill="#e2e8f0" opacity={s.o} />
            ))}

            {/* Orbit trails */}
            {PATHS.map((d, i) => (
              <path
                key={`base-${agents[i].id}`}
                d={d}
                stroke="rgba(99, 102, 241, 0.22)"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            ))}
            {PATHS.map((d, i) => (
              <path
                key={`flow-${agents[i].id}`}
                d={d}
                stroke={agents[i].lineColor}
                strokeWidth="1.8"
                strokeLinecap="round"
                fill="none"
                strokeDasharray="5 12"
                className="animate-agent-dash opacity-[0.85]"
              />
            ))}

            {/* Sun — corona then core */}
            <circle cx="200" cy="102" r="48" fill="url(#beyondDeskSunCorona)" className="animate-hub-pulse" />
            <circle cx="200" cy="102" r="38" fill="url(#beyondDeskSunCorona)" opacity="0.35" />
            <circle
              cx="200"
              cy="102"
              r="24"
              fill="url(#beyondDeskSunCore)"
              stroke="#fbbf24"
              strokeWidth="1.2"
              strokeOpacity="0.85"
              filter="url(#beyondDeskSunBloom)"
            />

            {/* Planet atmospheres */}
            <circle cx="72" cy="48" r="18" fill="#3b82f6" opacity="0.12" filter="url(#beyondDeskSoftGlow)" />
            <circle cx="328" cy="48" r="18" fill="#22d3ee" opacity="0.12" filter="url(#beyondDeskSoftGlow)" />
            <circle cx="200" cy="168" r="18" fill="#f59e0b" opacity="0.14" filter="url(#beyondDeskSoftGlow)" />

            {/* Planets */}
            <circle cx="72" cy="48" r="13" fill="url(#beyondDeskPlanetBuilder)" stroke="#60a5fa" strokeWidth="1.2" />
            <circle cx="328" cy="48" r="13" fill="url(#beyondDeskPlanetLearner)" stroke="#67e8f9" strokeWidth="1.2" />
            {/* Ring world (home) */}
            <ellipse
              cx="200"
              cy="168"
              rx="22"
              ry="5"
              transform="rotate(-18 200 168)"
              stroke="#fcd34d"
              strokeWidth="1"
              strokeOpacity="0.55"
              fill="none"
            />
            <circle cx="200" cy="168" r="13" fill="url(#beyondDeskPlanetHome)" stroke="#fbbf24" strokeWidth="1.2" />

            {/* Labels */}
            <text
              x="72"
              y="28"
              textAnchor="middle"
              fill="#bfdbfe"
              fontSize="11"
              fontFamily="ui-monospace, monospace"
              style={{ textShadow: "0 0 12px rgba(37,99,235,0.9)" }}
            >
              Builder Agent
            </text>
            <text
              x="328"
              y="28"
              textAnchor="middle"
              fill="#a5f3fc"
              fontSize="11"
              fontFamily="ui-monospace, monospace"
              style={{ textShadow: "0 0 12px rgba(6,182,212,0.85)" }}
            >
              Learner Agent
            </text>
            <text
              x="200"
              y="196"
              textAnchor="middle"
              fill="#fde68a"
              fontSize="11"
              fontFamily="ui-monospace, monospace"
              style={{ textShadow: "0 0 14px rgba(217,119,6,0.85)" }}
            >
              Home Agent
            </text>

            <text
              x="200"
              y="98"
              textAnchor="middle"
              fill="#1c1917"
              fontSize="10"
              fontWeight="700"
              fontFamily="ui-monospace, monospace"
              style={{ textShadow: "0 0 6px rgba(255,251,235,0.95), 0 1px 0 rgba(0,0,0,0.4)" }}
            >
              One
            </text>
            <text
              x="200"
              y="110"
              textAnchor="middle"
              fill="#422006"
              fontSize="8"
              fontFamily="ui-monospace, monospace"
              fontWeight="600"
              style={{ textShadow: "0 0 4px rgba(254,243,199,0.8)" }}
            >
              life
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
              <span className="text-[#79c0ff]">{a.title}</span>
              <span className="text-[#8b949e]">RUNNING</span>
              <span className="text-[#484f58]">—</span>
              <span className="text-[#d2a8ff]">description:</span>
              <span>{a.body}</span>
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
      {/* <div className="grid gap-0 border-t border-[#30363d] bg-[#0a0d12] sm:grid-cols-2 lg:grid-cols-3">
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
      </div> */}
    </div>
  );
}
