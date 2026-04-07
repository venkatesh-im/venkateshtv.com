const agents = [
  {
    id: "builder-agent",
    title: "Hands-on builder",
    borderClass: "border-l-blue-500/70",
    dotClass: "bg-blue-400",
    dotColor: "#60a5fa",
    src: "/images/sections/section-life-builder.png",
    alt: "Venkatesh TV writing code",
    body: (
      <>
        I still <span className="text-white">write code</span> — it keeps me honest about what we ask teams to ship.
      </>
    ),
  },
  {
    id: "learner-agent",
    title: "Always learning",
    borderClass: "border-l-cyan-500/70",
    dotClass: "bg-cyan-400",
    dotColor: "#22d3ee",
    src: "/images/sections/section-life-learning.png",
    alt: "Venkatesh TV reading and researching",
    body: (
      <>
        I read <span className="text-white">books and articles</span> to stay sharp — Business, Tech, AI. If it&apos;s moving fast, I want to understand it first.
      </>
    ),
  },
  {
    id: "home-agent",
    title: "Family & a beagle",
    borderClass: "border-l-amber-500/70",
    dotClass: "bg-amber-400",
    dotColor: "#fbbf24",
    src: "/images/sections/section-life-family.png",
    alt: "Venkatesh TV with family",
    body: (
      <>
        Away from work, I&apos;m with <span className="text-white">family</span> — and our beagle, who has strong opinions about walk times and treats.
      </>
    ),
  },
];

const COSMIC_W = 1000;
const COSMIC_H = 620;

const COSMIC_STARS: { x: number; y: number; r: number; o: number; fill: string }[] = (() => {
  const palette = [
    "#ffffff", "#fef08a", "#fde047", "#a5f3fc",
    "#fda4af", "#e9d5ff", "#bbf7d0", "#fcd34d", "#f0abfc", "#7dd3fc",
  ];
  let s = 314159;
  const out: { x: number; y: number; r: number; o: number; fill: string }[] = [];
  for (let i = 0; i < 380; i++) {
    s = (s * 48271 + 11) % 2147483647;
    const x = s % COSMIC_W;
    s = (s * 48271 + 11) % 2147483647;
    const y = s % COSMIC_H;
    s = (s * 48271 + 11) % 2147483647;
    const bright = s % 11 === 0;
    const r = bright ? 0.55 + (s % 18) / 35 : 0.1 + (s % 22) / 120;
    const o = bright ? 0.65 + (s % 30) / 100 : 0.25 + (s % 55) / 100;
    const fill = palette[s % palette.length];
    out.push({ x, y, r, o, fill });
  }
  return out;
})();

export default function BeyondDeskAgents() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#3c3c3c] bg-[#0d1117] shadow-[0_32px_80px_-28px_rgba(0,0,0,0.9)] ring-1 ring-white/[0.04]">
      <div className="relative flex min-h-[520px] flex-col sm:min-h-[600px]">

        {/* Cosmic background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <svg
            className="h-full w-full"
            viewBox={`0 0 ${COSMIC_W} ${COSMIC_H}`}
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <defs>
              <linearGradient id="beyondDeskCosmicSkyBase" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e0b4d" />
                <stop offset="28%" stopColor="#312e81" />
                <stop offset="52%" stopColor="#0e7490" />
                <stop offset="78%" stopColor="#4c1d95" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              <radialGradient id="beyondDeskCosmicNebulaPink" cx="18%" cy="18%" r="55%">
                <stop offset="0%" stopColor="#f472b6" stopOpacity="0.65" />
                <stop offset="35%" stopColor="#c026d3" stopOpacity="0.4" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
              <radialGradient id="beyondDeskCosmicNebulaCyan" cx="88%" cy="22%" r="58%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.7" />
                <stop offset="40%" stopColor="#2563eb" stopOpacity="0.35" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
              <radialGradient id="beyondDeskCosmicNebulaGold" cx="50%" cy="100%" r="50%">
                <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.55" />
                <stop offset="45%" stopColor="#f97316" stopOpacity="0.28" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
              <radialGradient id="beyondDeskCosmicNebulaViolet" cx="72%" cy="58%" r="50%">
                <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.2" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
              <radialGradient id="beyondDeskCosmicNebulaEmerald" cx="28%" cy="72%" r="48%">
                <stop offset="0%" stopColor="#34d399" stopOpacity="0.35" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <rect width={COSMIC_W} height={COSMIC_H} fill="url(#beyondDeskCosmicSkyBase)" />
            <rect width={COSMIC_W} height={COSMIC_H} fill="url(#beyondDeskCosmicNebulaPink)" />
            <rect width={COSMIC_W} height={COSMIC_H} fill="url(#beyondDeskCosmicNebulaCyan)" />
            <rect width={COSMIC_W} height={COSMIC_H} fill="url(#beyondDeskCosmicNebulaGold)" />
            <rect width={COSMIC_W} height={COSMIC_H} fill="url(#beyondDeskCosmicNebulaViolet)" />
            <rect width={COSMIC_W} height={COSMIC_H} fill="url(#beyondDeskCosmicNebulaEmerald)" />
            {COSMIC_STARS.map((star, i) => (
              <circle key={`cosmic-star-${i}`} cx={star.x} cy={star.y} r={star.r} fill={star.fill} opacity={star.o} />
            ))}
          </svg>
          <div
            className="absolute inset-0 mix-blend-screen opacity-40"
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 20% 30%, rgba(236,72,153,0.45), transparent 50%), radial-gradient(ellipse 70% 45% at 85% 25%, rgba(56,189,248,0.5), transparent 55%), radial-gradient(ellipse 60% 40% at 50% 90%, rgba(251,191,36,0.4), transparent 50%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/95 via-[#020617]/30 to-[#0f0a1a]/50" />
        </div>

        <div className="relative z-10 flex min-h-0 flex-1 flex-col">
          {/* Title bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/15 bg-black/30 px-5 py-3 backdrop-blur-md">
            <div className="flex min-w-0 items-center gap-2.5 font-mono text-xs text-[#e2e8f0]">
              <span className="truncate font-semibold text-[#7dd3fc] drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]">life-orchestrator</span>
              <span className="text-[#94a3b8]">·</span>
              <span className="hidden text-cyan-300/90 sm:inline">multi-agent</span>
              <span className="rounded border border-[#38bdf8]/30 bg-[#0f172a]/60 px-2 py-0.5 text-[11px] text-[#fef08a]">
                3 agents
              </span>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#4ade80]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ade80] opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4ade80] shadow-[0_0_8px_#4ade80]" />
              </span>
              merged_context
            </div>
          </div>

          {/* Tagline */}
          <p className="px-5 pt-7 text-center font-mono text-sm text-[#fef08a] drop-shadow-[0_0_12px_rgba(250,204,21,0.5)] sm:px-8">
            <span className="text-fuchsia-300">✦</span>{" "}
            Three systems I actively run in parallel — each shaping how I think, build, and operate.
          </p>

          {/* Agent list */}
          <div className="mt-7 flex w-full min-h-0 flex-1 flex-col px-5 pb-8 sm:px-8">
            <p className="shrink-0 font-mono text-sm text-[#b4bcc8]">
              <span className="text-[#79c0ff]">$</span> life status --agents
            </p>

            <div
              className="relative mt-5 flex min-h-0 flex-1 flex-col overflow-hidden rounded-lg border border-white/20 bg-[#050608]/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm"
              role="group"
              aria-label="Life agents"
            >
              {/* "One life" watermark */}
              <div
                className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden"
                aria-hidden
              >
                <div className="relative flex select-none flex-col items-center justify-center opacity-[0.22]">
                  <div className="absolute h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.55)_0%,transparent_72%)] blur-2xl" />
                  <span className="relative bg-gradient-to-b from-amber-50 to-amber-300 bg-clip-text font-display text-6xl font-semibold tracking-tight text-transparent drop-shadow-[0_0_40px_rgba(251,191,36,0.55)] sm:text-7xl">
                    One
                  </span>
                  <span className="relative mt-1 font-mono text-2xl tracking-[0.4em] text-amber-100/95 sm:text-3xl">
                    life
                  </span>
                </div>
              </div>

              {agents.map((a, i) => (
                <div key={a.id} className="relative z-10 flex min-h-0 flex-1 flex-col">
                  <div
                    className={`h-px shrink-0 bg-white/20 ${i === 0 ? "hidden" : ""}`}
                    aria-hidden
                  />
                  <div className="flex min-h-0 flex-1 flex-col justify-center gap-2 px-5 py-5 sm:px-6 sm:py-6">
                    <div className="flex items-center gap-2.5">
                      <span
                        className="h-2 w-2 shrink-0 rounded-full"
                        style={{ background: a.dotColor, boxShadow: `0 0 8px ${a.dotColor}` }}
                        aria-hidden
                      />
                      <span className="font-mono text-xs font-semibold uppercase tracking-widest text-slate-400">
                        {a.id}
                      </span>
                      <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] text-emerald-400">
                        RUNNING
                      </span>
                    </div>
                    <div className="pl-[18px]">
                      <p className="font-display text-lg font-medium text-white sm:text-xl">{a.title}</p>
                      <p className="mt-1 font-sans text-sm leading-relaxed text-slate-300 sm:text-base">{a.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-5 w-full shrink-0 border-t border-white/15 pt-4 text-center font-mono text-sm text-[#8b949e]">
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
        </div>
      </div>
    </div>
  );
}
