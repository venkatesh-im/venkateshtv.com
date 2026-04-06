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

const COSMIC_W = 1000;
const COSMIC_H = 620;

/** Dense, colorful starfield — full-bleed cosmic canvas */
const COSMIC_STARS: { x: number; y: number; r: number; o: number; fill: string }[] = (() => {
  const palette = [
    "#ffffff",
    "#fef08a",
    "#fde047",
    "#a5f3fc",
    "#fda4af",
    "#e9d5ff",
    "#bbf7d0",
    "#fcd34d",
    "#f0abfc",
    "#7dd3fc",
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
      {/* Full cosmic canvas: title bar, tagline, tripundra + life status (third eye at center band) */}
      <div className="relative flex min-h-[480px] flex-col sm:min-h-[580px]">
        {/* Full-bleed colorful space + stars */}
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
          {/* Extra vivid color wash (CSS) for depth */}
          <div
            className="absolute inset-0 mix-blend-screen opacity-40"
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 20% 30%, rgba(236,72,153,0.45), transparent 50%), radial-gradient(ellipse 70% 45% at 85% 25%, rgba(56,189,248,0.5), transparent 55%), radial-gradient(ellipse 60% 40% at 50% 90%, rgba(251,191,36,0.4), transparent 50%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-transparent to-[#0f0a1a]/40" />
        </div>

        <div className="relative z-10 flex min-h-0 flex-1 flex-col border-b border-white/10 pb-6">
          {/* Title bar — glass on cosmic */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/15 bg-black/25 px-4 py-2.5 backdrop-blur-md">
            <div className="flex min-w-0 items-center gap-2 font-mono text-[11px] text-[#e2e8f0] sm:text-xs">
              <span className="truncate text-[#7dd3fc] drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]">life-orchestrator</span>
              <span className="text-[#94a3b8]">·</span>
              <span className="hidden sm:inline text-cyan-300/90">multi-agent</span>
              <span className="rounded border border-[#38bdf8]/30 bg-[#0f172a]/60 px-1.5 py-0.5 text-[10px] text-[#fef08a]">
                3 agents
              </span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#4ade80]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ade80] opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4ade80] shadow-[0_0_8px_#4ade80]" />
              </span>
              merged_context
            </div>
          </div>

          <p className="px-4 pt-6 text-center font-mono text-[11px] text-[#fef08a] drop-shadow-[0_0_12px_rgba(250,204,21,0.5)] sm:px-6 sm:text-xs">
            <span className="text-fuchsia-300">✦</span> Three systems I actively run in parallel — each shaping how I think, build, and operate.{" "}
            .
          </p>

          {/* Tripundra + life status — full width; bands flex to fill column; description flows inline */}
          <div className="mt-8 flex w-full min-h-0 flex-1 flex-col px-4 sm:px-6">
            <p className="shrink-0 font-mono text-[11px] text-[#b4bcc8] sm:text-xs">
              <span className="text-[#79c0ff]">$</span> life status --agents
            </p>

            <div
              className="relative mt-4 flex min-h-0 flex-1 flex-col overflow-hidden rounded-sm border-2 border-white/95 bg-[#050608]/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_32px_rgba(255,255,255,0.06)] backdrop-blur-[2px]"
              role="group"
              aria-label="Agents"
            >
              {/* One / life — behind tripundra (same amber gradient + glow as before; layer stays back) */}
              <div
                className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden"
                aria-hidden
              >
                <div className="relative flex select-none flex-col items-center justify-center opacity-[0.28] sm:opacity-[0.34]">
                  <div
                    className="absolute h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.55)_0%,transparent_72%)] blur-2xl"
                  />
                  <div className="absolute top-[18%] h-20 w-px bg-gradient-to-b from-amber-200/80 via-amber-400/35 to-transparent" />
                  <span className="relative bg-gradient-to-b from-amber-50 to-amber-300 bg-clip-text font-display text-5xl font-semibold tracking-tight text-transparent drop-shadow-[0_0_40px_rgba(251,191,36,0.55)] sm:text-6xl md:text-7xl">
                    One
                  </span>
                  <span className="relative mt-0.5 font-mono text-2xl tracking-[0.4em] text-amber-100/95 drop-shadow-[0_0_24px_rgba(251,191,36,0.4)] sm:text-3xl">
                    life
                  </span>
                  <span
                    className="relative mt-3 rounded-full bg-amber-300 shadow-[0_0_14px_#fcd34d,0_0_28px_rgba(251,191,36,0.35)]"
                    style={{ width: 7, height: 7 }}
                  />
                </div>
              </div>

              {agents.map((a, i) => (
                <div key={a.id} className="relative z-10 flex min-h-0 flex-1 flex-col">
                  <div
                    className={`h-[3px] shrink-0 bg-white shadow-[0_0_10px_rgba(255,255,255,0.45)] ${i === 1 ? "mx-auto w-[90%]" : "w-full"}`}
                    aria-hidden
                  />
                  <div className="relative z-10 flex min-h-0 flex-1 flex-col justify-center px-4 py-4 sm:px-6 sm:py-5">
                    <p className="font-mono text-[11px] leading-relaxed text-[#cbd5e1] sm:text-xs">
                      <span className="text-[#7ee787]">●</span>{" "}
                      <span className="font-medium text-[#79c0ff]">{a.title}</span>{" "}
                      <span className="text-[#8b949e]">RUNNING</span>{" "}
                      <span className="text-[#484f58]">—</span>{" "}
                      <span className="text-[#d2a8ff]">description:</span>{" "}
                      <span className="font-sans text-[#e2e8f0]">{a.body}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 w-full shrink-0 border-t-2 border-white/30 pt-4 text-center font-mono text-[11px] text-[#8b949e] sm:text-xs">
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
