"use client";

import { useRef, useState } from "react";

// 9:16 creative card: poster first, tap (or hover) to play the hosted video inline. No autoplay, no Drive.
export function MobileVideoCard({ poster, video, brand, meta, className = "" }: { poster: string; video?: string; brand: string; meta?: string; className?: string }) {
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
      <button type="button" onClick={toggle} aria-label={video ? `${playing ? "Pause" : "Play"} ${brand} creative` : `${brand} creative`} className="relative block w-full overflow-hidden rounded-2xl border border-[#e2e8f0] bg-black" style={{ aspectRatio: "9 / 16" }}>
        <img alt={`${brand} AppLovin creative`} className="absolute inset-0 h-full w-full object-cover" loading="lazy" src={poster} />
        {video && <video ref={ref} className={`absolute inset-0 h-full w-full object-cover transition-opacity ${playing ? "opacity-100" : "opacity-0"}`} muted loop playsInline preload="none" poster={poster} />}
        {video && !playing && (
          <span className="absolute inset-0 grid place-items-center">
            <span className="grid size-12 place-items-center rounded-full bg-[#831f80] text-white shadow-lg"><svg viewBox="0 0 24 24" className="ml-0.5 size-5" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg></span>
          </span>
        )}
      </button>
      <figcaption className="mt-2 text-[13px] font-semibold text-[#021a20]">{brand}<span className="mt-0.5 block font-mono text-[10px] font-normal tracking-wide text-[#64758b]">{meta ?? "AppLovin · 9:16"}</span></figcaption>
    </figure>
  );
}
