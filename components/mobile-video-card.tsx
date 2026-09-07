"use client";

import { useRef, useState } from "react";

// 9:16 creative card: poster first, tap to play the hosted video inline. `frame` adds the story-style
// chrome (progress bars, brand avatar and name) used in the hero.
export function MobileVideoCard({ poster, video, brand, meta, frame = false, dark = false, className = "" }: { poster: string; video?: string; brand: string; meta?: string; frame?: boolean; dark?: boolean; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const toggle = () => {
    const v = ref.current;
    if (!v || !video) return;
    if (v.paused) { if (!v.src) v.src = video; v.play().then(() => setPlaying(true)).catch(() => {}); }
    else { v.pause(); setPlaying(false); }
  };
  return (
    <figure className={`m-0 ${className}`}>
      <button type="button" onClick={toggle} aria-label={video ? `${playing ? "Pause" : "Play"} ${brand} creative` : `${brand} creative`} className={`relative block w-full overflow-hidden rounded-2xl border bg-black ${dark ? "border-white/15" : "border-[#e2e8f0]"}`} style={{ aspectRatio: "9 / 16" }}>
        <img alt={`${brand} AppLovin creative`} className="absolute inset-0 h-full w-full object-cover" loading="lazy" src={poster} />
        {video && <video ref={ref} className={`absolute inset-0 h-full w-full object-cover transition-opacity ${playing ? "opacity-100" : "opacity-0"}`} muted loop playsInline preload="none" poster={poster} />}
        {frame && (
          <span className="pointer-events-none absolute inset-x-0 top-0 p-2.5 text-left text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.6)]">
            <span className="flex gap-1">{[1, 2, 3].map((i) => <span key={i} className={`h-[3px] flex-1 rounded-full ${i === 1 ? "bg-white" : "bg-white/40"}`} />)}</span>
            <span className="mt-2 flex items-center gap-2">
              <span className="grid size-8 place-items-center rounded-full border-2 border-white/80 bg-[#831f80] text-[12px] font-bold">{brand.charAt(0)}</span>
              <span className="min-w-0"><span className="block truncate text-[13px] font-semibold leading-tight">{brand}</span><span className="block text-[11px] leading-tight opacity-85">{meta ?? "AppLovin · 9:16"}</span></span>
            </span>
          </span>
        )}
        {video && !playing && (
          <span className="absolute inset-0 grid place-items-center">
            <span className="grid size-12 place-items-center rounded-full bg-[#831f80] text-white shadow-lg"><svg viewBox="0 0 24 24" className="ml-0.5 size-5" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg></span>
          </span>
        )}
      </button>
      {!frame && <figcaption className={`mt-2 text-[13px] font-semibold ${dark ? "text-white" : "text-[#021a20]"}`}>{brand}<span className={`mt-0.5 block font-mono text-[10px] font-normal tracking-wide ${dark ? "text-white/60" : "text-[#64758b]"}`}>{meta ?? "AppLovin · 9:16"}</span></figcaption>}
    </figure>
  );
}
