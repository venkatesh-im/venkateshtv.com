"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const PHOTOS = [
  { src: "/venkatesh-tv.jpg", alt: "Venkatesh TV" },
  { src: "/venkatesh-tv-4.jpg", alt: "Venkatesh TV" },
] as const;

const INTERVAL_MS = 2000;

export default function ProfilePhoto() {
  const [active, setActive] = useState(0);
  const [failedAll, setFailedAll] = useState(false);
  const [failed, setFailed] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (failedAll) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % PHOTOS.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [failedAll]);

  useEffect(() => {
    if (PHOTOS.every((p) => failed[p.src])) setFailedAll(true);
  }, [failed]);

  if (failedAll) {
    return (
      <div
        className="flex aspect-[4/5] w-full max-w-md items-center justify-center rounded-2xl border border-blue-500/25 bg-gradient-to-br from-blue-600/40 via-slate-900 to-cyan-900/30 font-display text-5xl font-medium tracking-tight text-white shadow-[0_32px_64px_-24px_rgba(37,99,235,0.45)] sm:text-6xl lg:max-w-none"
        aria-hidden
      >
        VT
      </div>
    );
  }

  return (
    <div
      className="relative w-full max-w-md lg:max-w-none"
      role="region"
      aria-roledescription="carousel"
      aria-label="Photos of Venkatesh TV"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-[0_32px_64px_-24px_rgba(37,99,235,0.4)] ring-2 ring-blue-500/25">
        {PHOTOS.map((photo, i) => (
          <Image
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            fill
            priority={i === 0}
            quality={85}
            sizes="(max-width: 1024px) 100vw, min(480px, 42vw)"
            className="object-cover object-top transition-opacity duration-700 ease-in-out"
            style={{
              opacity: active === i ? 1 : 0,
              zIndex: active === i ? 2 : 1,
            }}
            aria-hidden={active !== i}
            onError={() => setFailed((f) => ({ ...f, [photo.src]: true }))}
          />
        ))}
      </div>

      <div
        className="mt-3 flex justify-center gap-2"
        aria-hidden
      >
        {PHOTOS.map((photo, i) => (
          <span
            key={photo.src}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              active === i ? "w-6 bg-blue-400" : "w-1.5 bg-slate-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
