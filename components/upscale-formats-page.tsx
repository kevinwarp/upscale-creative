"use client";

import { useState } from "react";
import { Menu, Play } from "lucide-react";
import Link from "next/link";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const logos: Array<{ name: string; src: string; dark?: boolean }> = [
  { name: "Westmore Beauty", src: "/customer-assets/logo-westmore.png" },
  { name: "Legion Athletics", src: "/customer-assets/logo-legion.png" },
  { name: "Biom", src: "/customer-assets/logo-biom.png" },
  { name: "David Protein", src: "/customer-assets/logo-david.png", dark: true },
  { name: "Fast Growing Trees", src: "/customer-assets/logo-fast-growing-trees.png" },
];

function trackFormatsEvent(event: string, detail: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const analyticsWindow = window as typeof window & { dataLayer?: Array<Record<string, unknown>> };
  analyticsWindow.dataLayer ??= [];
  analyticsWindow.dataLayer.push({ event, page: "formats", version: "1.3", ...detail });
}

const examples = [
  { customer: "Branch", image: "/customer-assets/wall-branch.jpg" },
  { customer: "Jones Road", image: "/customer-assets/wall-jones-road.jpg" },
  { customer: "Once Upon a Farm", image: "/customer-assets/wall-once-upon-a-farm.jpg" },
  { customer: "David Protein", image: "/customer-assets/wall-david-protein.jpg" },
  { customer: "Fast Growing Trees", image: "/customer-assets/wall-fast-growing-trees.jpg" },
  { customer: "Jones Road", image: "/customer-assets/jones-road-showcase.jpg" },
  { customer: "David Protein", image: "/customer-assets/david-protein-showcase.jpg" },
  { customer: "Fast Growing Trees", image: "/customer-assets/fast-growing-trees-showcase.jpg" },
  { customer: "[CUSTOMER NAME]", image: null },
  { customer: "[CUSTOMER NAME]", image: null },
] as const;

function LogoGrid() {
  return (
    <div className="grid grid-cols-6 gap-2" aria-label="Upscale customer logos">
      {logos.map((logo, index) => (
        <a className={`col-span-2 grid h-14 place-items-center rounded-xl border border-black/10 px-2.5 ${index > 2 ? "col-span-3" : ""} ${logo.dark ? "bg-black" : "bg-white/88"}`} href="#examples" key={logo.name} onClick={() => trackFormatsEvent("logo_interaction", { logo: logo.name })}>
          <img alt={`${logo.name} logo`} className="max-h-8 max-w-full object-contain" src={logo.src} />
        </a>
      ))}
    </div>
  );
}

function ExampleDialog({ example, index }: { example: (typeof examples)[number]; index: number }) {
  const [playing, setPlaying] = useState(false);

  return (
    <Dialog onOpenChange={(open) => {
      if (open) trackFormatsEvent("creative_play", { customer: example.customer, creative_index: index + 1 });
      if (!open) setPlaying(false);
    }}>
      <article className="min-w-0">
        <DialogTrigger asChild>
          <button className="relative block w-full overflow-hidden rounded-[1.35rem] border border-black/10 bg-black text-left shadow-[0_12px_28px_rgba(2,26,32,0.12)]" type="button">
            {example.image ? (
              <img alt={`${example.customer} vertical creative example`} className="aspect-[9/16] w-full object-cover" loading={index < 2 ? "eager" : "lazy"} src={example.image} />
            ) : (
              <div className="grid aspect-[9/16] place-items-center bg-gradient-to-b from-[#831f80] via-[#26259d] to-[#0a6d86] p-4 text-center text-[11px] font-semibold text-white">[APPROVED CREATIVE]</div>
            )}
            <span className="absolute bottom-2.5 right-2.5 grid size-9 place-items-center rounded-full bg-white/92 text-black shadow-sm">
              <Play className="ml-0.5 size-4 fill-current" aria-hidden="true" />
            </span>
          </button>
        </DialogTrigger>
        <p className="mt-2.5 truncate text-[10px] font-medium text-black/55">{example.customer} creative</p>
        <h2 className="mt-1 text-[15px] font-semibold leading-[1.15] tracking-[-0.025em]">[FORMAT NAME]</h2>
        <p className="mt-1.5 text-[11px] leading-[1.38] text-black/70">[APPROVED ONE-SENTENCE FORMAT DESCRIPTION]</p>
        <DialogTrigger asChild>
          <button className="mt-2 inline-flex text-[12px] font-semibold" type="button">Watch example →</button>
        </DialogTrigger>
      </article>

      <DialogContent className="bottom-0 top-auto max-h-[94dvh] max-w-none translate-y-0 overflow-y-auto rounded-b-none rounded-t-[1.75rem] border-black/10 bg-[#f8f8f6] p-4 sm:bottom-auto sm:top-1/2 sm:max-w-lg sm:-translate-y-1/2 sm:rounded-[1.75rem] sm:p-6">
        <DialogHeader className="pr-8 text-left">
          <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-[#831f80]">Creative example</p>
          <DialogTitle className="text-[24px] font-semibold leading-[1.05] tracking-[-0.04em]">{example.customer}</DialogTitle>
          <DialogDescription className="text-[12px] leading-5 text-black/52">Tap the player when an approved video file is connected.</DialogDescription>
        </DialogHeader>
        <button className="relative mt-1 block w-full overflow-hidden rounded-[1.35rem] bg-black text-white" onClick={() => {
          const next = !playing;
          setPlaying(next);
          trackFormatsEvent("creative_player_control", { customer: example.customer, creative_index: index + 1, state: next ? "play" : "pause" });
        }} type="button">
          {example.image ? <img alt="" className="max-h-[48dvh] w-full object-cover opacity-72" src={example.image} /> : <div className="aspect-[9/12] bg-gradient-to-b from-[#831f80] via-[#26259d] to-[#0a6d86]" />}
          <span className="absolute inset-0 grid place-items-center bg-black/22"><span className="grid size-16 place-items-center rounded-full bg-white text-black"><Play className="ml-1 size-6 fill-current" aria-hidden="true" /></span></span>
          <span className="absolute inset-x-3 bottom-3 rounded-lg bg-black/64 px-3 py-2 text-center text-[10px] font-semibold tracking-[0.06em]">{playing ? "[PLAYING APPROVED VIDEO]" : "[CONNECT APPROVED VIDEO FILE]"}</span>
        </button>
        <dl className="grid grid-cols-2 gap-2 text-[11px]">
          {[["Customer", example.customer], ["Format", "[FORMAT]"], ["Duration", "[DURATION]"], ["Source asset", "[SOURCE ASSET]"], ["Concept", "[CONCEPT]"], ["Result", "[VERIFIED RESULT]"]].map(([label, value]) => (
            <div className={`rounded-xl border border-black/10 bg-white p-3 ${label === "Result" ? "bg-[#d5f6f7]" : ""}`} key={label}>
              <dt className="text-[9px] font-semibold uppercase tracking-[0.1em] text-black/42">{label}</dt>
              <dd className="mt-1 font-semibold leading-4">{value}</dd>
            </div>
          ))}
        </dl>
      </DialogContent>
    </Dialog>
  );
}

export function UpscaleFormatsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8f8f6] text-[#021a20]">
      <header className="mx-auto flex h-[76px] max-w-[430px] items-center justify-between px-4">
        <Link aria-label="Upscale AI landing page options" href="/">
          <img alt="Upscale AI" className="h-[28px] w-auto" height="35" src="/customer-assets/upscale-wordmark.svg" width="136" />
        </Link>
        <details className="relative">
          <summary className="grid size-11 cursor-pointer list-none place-items-center rounded-[1.15rem] border border-[#831f80]/25 bg-white/90 [&::-webkit-details-marker]:hidden" aria-label="Open menu">
            <Menu className="size-5.5" strokeWidth={2.4} aria-hidden="true" />
          </summary>
          <nav className="absolute right-0 top-14 z-30 grid w-48 gap-1 rounded-2xl border border-black/10 bg-white p-2 shadow-xl" aria-label="Page menu">
            <Link className="rounded-xl px-3 py-3 text-[13px] font-semibold hover:bg-black/5" href="/">LP options</Link>
            <Link className="rounded-xl bg-[#effcff] px-3 py-3 text-[13px] font-semibold" href="/formats">Example Ads</Link>
            <Link className="rounded-xl px-3 py-3 text-[13px] font-semibold hover:bg-black/5" href="/how-it-works">How it works</Link>
          </nav>
        </details>
      </header>

      <section className="mx-auto max-w-[430px] px-4 pb-7">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#831f80]">AppLovin Creative OS · v1.3</p>
        <h1 className="text-[27px] font-medium leading-[1.08] tracking-[-0.04em]">Example Ads</h1>
        <p className="mt-3 text-[16px] leading-[1.34] tracking-[-0.025em]">
          Creative examples sourced from the Upscale AppLovin pages. Format names and results remain placeholders until approved.
        </p>

        <div className="mt-5 rounded-[1.2rem] border border-[#831f80]/18 bg-gradient-to-r from-[#fbf6fb] to-[#effcff] p-3">
          <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.11em] text-black/45">Customer examples</p>
          <LogoGrid />
        </div>

        <div className="mt-5 grid grid-cols-2 gap-x-2.5 gap-y-5" id="examples">
          {examples.map((example, index) => (
            <ExampleDialog example={example} index={index} key={`${example.customer}-${index}`} />
          ))}
        </div>
      </section>

      <section className="border-t border-black/10 bg-white/55 px-4 py-8" id="example-placeholder">
        <div className="mx-auto max-w-[398px] rounded-[1.35rem] bg-gradient-to-r from-[#831f80] via-[#26259d] to-[#0a6d86] p-5 text-white">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#00f0ff]">Creative OS</p>
          <h2 className="mt-2 text-[22px] font-medium leading-[1.08] tracking-[-0.04em]">Start your first batch</h2>
          <p className="mt-3 text-[13px] leading-[1.45] text-white/75">12 AppLovin ads per month from your existing winners and approved assets.</p>
          <Link className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-white px-4 text-[13px] font-semibold text-black" href="/concepts/product-led#top" onClick={() => trackFormatsEvent("cta_click", { path: "formats_start_first_batch" })}>
            Start My First Batch
          </Link>
        </div>
      </section>
    </main>
  );
}
