"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/posts", label: "Writing" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 w-full min-w-0 border-b"
      style={{
        background: "rgba(2, 6, 23, 0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderColor: "rgba(255, 255, 255, 0.06)",
      }}
    >
      <div className="container-wide w-full">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span
              className="text-base font-bold text-white tracking-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              Venkatesh TV
            </span>
            <span
              className="w-1.5 h-1.5 rounded-full mt-0.5"
                style={{
                background: "linear-gradient(135deg, #2563eb, #0891b2)",
                boxShadow: "0 0 10px rgba(37, 99, 235, 0.55)",
              }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
                style={{
                  color: pathname === link.href ? "#60a5fa" : "#94a3b8",
                  background:
                    pathname === link.href
                      ? "rgba(37, 99, 235, 0.12)"
                      : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (pathname !== link.href) {
                    (e.currentTarget as HTMLElement).style.color = "#e2e8f0";
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(255,255,255,0.04)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (pathname !== link.href) {
                    (e.currentTarget as HTMLElement).style.color = "#94a3b8";
                    (e.currentTarget as HTMLElement).style.background =
                      "transparent";
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.linkedin.com/in/venkateshtv/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all"
              style={{
                color: "#94a3b8",
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.03)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#60a5fa";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(37,99,235,0.45)";
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(37,99,235,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#94a3b8";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(255,255,255,0.03)";
              }}
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="sm:hidden p-2 rounded-md transition-colors"
            style={{ color: "#94a3b8" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#e2e8f0";
              (e.currentTarget as HTMLElement).style.background =
                "rgba(255,255,255,0.06)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#94a3b8";
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="sm:hidden py-3 pb-4 border-t"
            style={{ borderColor: "rgba(255,255,255,0.06)" }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-sm font-medium transition-colors mb-1"
                style={{
                  color: pathname === link.href ? "#60a5fa" : "#94a3b8",
                  background:
                    pathname === link.href
                      ? "rgba(37, 99, 235, 0.12)"
                      : "transparent",
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.linkedin.com/in/venkateshtv/"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 rounded-md text-sm font-medium transition-colors"
              style={{ color: "#94a3b8" }}
            >
              LinkedIn ↗
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
