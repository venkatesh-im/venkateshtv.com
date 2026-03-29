import Image from "next/image";
import type { ReactNode } from "react";

const hoverByAccent = {
  blue: "hover:border-blue-500/30",
  cyan: "hover:border-cyan-500/30",
  amber: "hover:border-amber-500/25",
  violet: "hover:border-violet-500/25",
} as const;

type Accent = keyof typeof hoverByAccent;

interface SectionFeatureCardProps {
  src: string;
  alt: string;
  title: string;
  accent?: Accent;
  children: ReactNode;
  /** Wider card on small screens (e.g. featured row) */
  wideOnSm?: boolean;
}

export default function SectionFeatureCard({
  src,
  alt,
  title,
  accent = "blue",
  children,
  wideOnSm = false,
}: SectionFeatureCardProps) {
  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] shadow-[0_24px_60px_-30px_rgba(0,0,0,0.85)] transition-all duration-300 ${hoverByAccent[accent]} ${
        wideOnSm ? "sm:col-span-2 lg:col-span-1" : ""
      }`}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/35 to-transparent" />
        <div className="absolute bottom-3 left-4 right-4">
          <div className="h-0.5 w-12 rounded-full bg-gradient-to-r from-blue-400/80 to-cyan-400/60 opacity-80" />
        </div>
      </div>
      <div className="p-6 pt-5">
        <h3 className="font-display text-lg font-medium tracking-[-0.02em] text-white sm:text-xl">{title}</h3>
        <div className="mt-3 font-sans text-sm leading-relaxed text-slate-400">{children}</div>
      </div>
    </article>
  );
}
