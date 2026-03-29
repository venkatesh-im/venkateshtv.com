import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="mt-auto w-full min-w-0 border-t"
      style={{
        background: "#020617",
        borderColor: "rgba(255, 255, 255, 0.06)",
      }}
    >
      <div className="container-wide w-full py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mb-8">
          {/* Left: Brand */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span
                className="text-base font-bold text-white tracking-tight"
                style={{ letterSpacing: "-0.02em" }}
              >
                Venkatesh TV
              </span>
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #2563eb, #0891b2)",
                  boxShadow: "0 0 10px rgba(37, 99, 235, 0.55)",
                }}
              />
            </div>
            <p className="text-sm text-slate-500">
              2× CTO · CEO &amp; Founder, Impelox · 60+ people · Chennai, India
            </p>
          </div>

          {/* Center: Nav */}
          <nav className="flex items-center gap-6 text-sm">
            <Link
              href="/"
              className="text-slate-500 hover:text-slate-200 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/posts"
              className="text-slate-500 hover:text-slate-200 transition-colors"
            >
              Writing
            </Link>
            <a
              href="https://impelox.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-200 transition-colors"
            >
              Impelox
            </a>
          </nav>

          {/* Right: LinkedIn */}
          <a
            href="https://www.linkedin.com/in/venkateshtv/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-blue-400"
          >
            <span
              className="flex h-8 w-8 items-center justify-center rounded-lg transition-all group-hover:border-blue-500/40"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </span>
            LinkedIn
          </a>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ borderColor: "rgba(255,255,255,0.04)" }}
        >
          <p className="text-xs text-slate-600">
            &copy; {currentYear} Venkatesh TV. All rights reserved.
          </p>
          <p className="text-xs text-slate-700">
            Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
