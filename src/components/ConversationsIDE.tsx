/**
 * VS Code / Cursor–style mock: editor + terminal — "developer at heart" for the value prop section.
 */
export default function ConversationsIDE() {
  return (
    <div className="overflow-hidden rounded-xl border border-[#3c3c3c] bg-[#1e1e1e] shadow-[0_32px_80px_-24px_rgba(0,0,0,0.75)] ring-1 ring-white/[0.04]">

      {/* Title bar */}
      <div className="flex h-10 shrink-0 items-center gap-3 border-b border-black/40 bg-[#2d2d2d] px-4">
        <div className="flex gap-2 pl-1">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" aria-hidden />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" aria-hidden />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" aria-hidden />
        </div>
        <div className="flex min-w-0 flex-1 items-center justify-center">
          <span className="truncate font-mono text-xs text-[#cccccc]">
            Venkatesh TV — Conversations IDE
          </span>
        </div>
        <div className="w-16 shrink-0" aria-hidden />
      </div>

      <div className="flex min-h-[480px] flex-col lg:min-h-[420px] lg:flex-row">

        {/* Activity bar */}
        <div
          className="flex flex-row justify-around gap-1 border-b border-[#252526] bg-[#181818] px-2 py-2 lg:w-12 lg:flex-col lg:justify-start lg:border-b-0 lg:border-r lg:py-3"
          aria-hidden
        >
          <div className="flex h-8 w-8 items-center justify-center rounded text-[#858585] hover:bg-[#2a2d2e]">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
            </svg>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded text-[#858585] opacity-60">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded text-[#cccccc]">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
            </svg>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          {/* Tabs */}
          <div className="flex items-end gap-px bg-[#252526] px-2 pt-1">
            <div className="flex items-center gap-2 rounded-t border border-b-0 border-[#3c3c3c] bg-[#1e1e1e] px-3 py-2 font-mono text-xs text-[#cccccc]">
              <svg className="h-3.5 w-3.5 shrink-0 text-[#519aba]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
              </svg>
              conversations.md
              <span className="opacity-40">×</span>
            </div>
            <div className="px-3 py-2 font-mono text-xs text-[#858585] opacity-70">terminal</div>
          </div>

          {/* Editor pane */}
          <div className="min-h-[140px] flex-1 overflow-x-auto border-b border-[#3c3c3c] bg-[#1e1e1e] p-5 lg:min-h-0">
            <div className="flex gap-4 font-mono text-sm leading-7">
              <div className="select-none text-right tabular-nums text-[#4a4a4a]" aria-hidden>
                {Array.from({ length: 7 }, (_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
              <div className="min-w-0">
                <p className="text-[#6a9955]">{"// Where I add value — three conversations that matter"}</p>
                <p className="mt-1 text-[#4ec9b0]">{"## Conversations that matter"}</p>
                <p className="mt-3 text-[#6a9955]">{"/* Three places founders feel friction first */"}</p>
                <p className="mt-2">
                  <span className="text-[#c586c0]">const</span>{" "}
                  <span className="text-[#9cdcfe]">topics</span>
                  <span className="text-[#d4d4d4]">: ValueProp[] = [</span>
                </p>
                <p className="pl-6">
                  <span className="text-[#ce9178]">&quot;growth&quot;</span>
                  <span className="text-[#d4d4d4]">, </span>
                  <span className="text-[#ce9178]">&quot;tech-leadership&quot;</span>
                  <span className="text-[#d4d4d4]">, </span>
                  <span className="text-[#ce9178]">&quot;first-time-founder&quot;</span>
                </p>
                <p className="text-[#d4d4d4]">];</p>
              </div>
            </div>
          </div>

          {/* Terminal pane */}
          <div className="flex flex-col bg-[#0c0c0c]">
            <div className="flex items-center justify-between border-b border-[#2a2a2a] bg-[#0c0c0c] px-4 py-2">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#6a6a6a]">
                Terminal — zsh
              </span>
              <span className="font-mono text-xs text-[#404040]">⌘ `</span>
            </div>

            <div className="p-5 font-mono">
              <p className="text-sm text-[#4a8a4a]"># impelox · workspace</p>
              <p className="mt-2 text-sm">
                <span className="text-[#569cd6]">➜</span>{" "}
                <span className="text-[#4ec9b0]">~/values</span>{" "}
                <span className="text-[#dcdcaa]">git:(main)</span>{" "}
                <span className="text-[#858585]">$</span>{" "}
                <span className="text-[#d4d4d4]">./print-conversations.sh</span>
              </p>

              <div className="mt-5 space-y-6 border-l-2 border-[#264f78] pl-4">
                <div>
                  <p className="text-base font-semibold text-[#4fc1ff]">when-growth-breaks.md</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#d4d4d4]">
                    Leads slip through, costs rise, and adding people doesn&apos;t fix it. I build AI agents that take over
                    real customer workflows — not just assist.
                  </p>
                </div>
                <div>
                  <p className="text-base font-semibold text-[#4fc1ff]">when-tech-slows.md</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#d4d4d4]">
                    Architecture, AI direction, execution — things feel unclear or fragmented. I step in to bring clarity,
                    make decisions faster, and ship.
                  </p>
                </div>
                <div>
                  <p className="text-base font-semibold text-[#4fc1ff]">when-you&apos;re-figuring-it-out.md</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#d4d4d4]">
                    First time building something real? I&apos;ve made the mistakes — on hiring, tech bets, and product direction.
                    Happy to share what I wish someone had told me earlier.
                  </p>
                </div>
              </div>

              <p className="mt-5 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm">
                <span className="text-[#569cd6]">➜</span>{" "}
                <span className="text-[#4ec9b0]">~/values</span>{" "}
                <span className="text-[#dcdcaa]">git:(main)</span>{" "}
                <span className="text-[#858585]">$</span>{" "}
                <span className="inline-block h-4 w-2 animate-pulse bg-[#569cd6]" aria-hidden />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
