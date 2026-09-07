import { ArrowUpRight, Smartphone } from "lucide-react";
import Link from "next/link";

import { upscaleConcepts } from "@/content/upscale-concepts";
import { customerConcepts } from "@/content/customer-concepts";

const sharedCopy = [
  "Creative OS",
  "12 new AppLovin ads every month, built from ads and assets you already have.",
  "We review your winners, create briefs, and draft four ads for approval every 10 days.",
  "Approve batch one before paying. Launch into AppLovin within one week.",
];

const improvements = [
  "Campaign-aware message matching",
  "Qualified proof and pricing placeholders",
  "First-batch preview and instant scheduling",
  "Buyer economics, fit guidance and FAQ",
  "Conversion, scroll and module instrumentation",
  "Self-hosted Upscale fonts",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#101617] text-white">
      <header className="border-b border-white/10 bg-[#101617]/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-5 sm:px-6">
          <a className="flex items-center" href="#top" aria-label="Upscale AI home">
            <img alt="Upscale AI" className="h-[28px] w-auto brightness-0 invert" height="35" src="/customer-assets/upscale-wordmark.svg" width="136" />
          </a>
          <span className="rounded-full border border-white/15 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.15em] text-white/55">
            v1.3
          </span>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 pb-10 pt-10 sm:px-6 sm:pb-14 sm:pt-14" id="top">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.17em] text-[#00f0ff]">AppLovin Creative OS · v1.3</p>
            <h1 className="mt-3 max-w-3xl text-[clamp(2.6rem,8vw,6.5rem)] font-black leading-[0.9] tracking-[-0.07em]">
              Ten mobile landing page options.
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/55">
              Each route uses the revised Icon-matched mobile template, Upscale brand system, sourced creative examples, and bracketed placeholders for every unresolved input.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-white/12 bg-white/[0.06] p-5">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-[#00f0ff] text-black"><Smartphone className="size-5" aria-hidden="true" /></span>
              <div>
                <p className="text-sm font-black">Shared above-the-fold copy</p>
                <p className="mt-0.5 text-[11px] text-white/42">v1.3 · 390 x 844 mobile composition</p>
              </div>
            </div>
            <ol className="mt-5 grid gap-3">
              {sharedCopy.map((line, index) => (
                <li className="grid grid-cols-[1.5rem_1fr] gap-2 text-[12px] leading-5 text-white/68" key={line}>
                  <span className="font-black text-[#00f0ff]">{index + 1}</span>
                  <span>{line}</span>
                </li>
              ))}
            </ol>
            <div className="mt-5 border-t border-white/10 pt-4">
              <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#00f0ff]">v1.3 additions</p>
              <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-[11px] leading-4 text-white/58">
                {improvements.map((item) => <li key={item}>• {item}</li>)}
              </ul>
              <p className="mt-4 text-[10px] font-semibold text-white/42">Research date: August 31, 2026</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#e8eceb] px-4 py-10 text-[#021a20] sm:px-6 sm:py-14">
        <div className="mx-auto max-w-7xl">
          <Link className="mb-10 flex items-center justify-between gap-4 rounded-[1.5rem] bg-gradient-to-r from-[#831f80] via-[#26259d] to-[#0a6d86] p-5 text-white shadow-[0_18px_50px_rgba(38,37,157,0.18)]" href="/formats">
            <span>
              <span className="block text-[10px] font-black uppercase tracking-[0.14em] text-[#00f0ff]">New review page</span>
              <strong className="mt-1 block text-[22px] font-black tracking-[-0.045em]">Example Ads</strong>
              <span className="mt-1 block text-[12px] text-white/68">Icon Formats structure with Upscale creative examples.</span>
            </span>
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white text-black"><ArrowUpRight className="size-5" aria-hidden="true" /></span>
          </Link>
          <div className="mb-5">
            <p className="text-[10px] font-black uppercase tracking-[0.14em] text-black/38">Core versions</p>
            <h2 className="mt-1 text-[26px] font-black tracking-[-0.045em]">Five angle-led options</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {upscaleConcepts.map((concept, index) => (
              <article className="group overflow-hidden rounded-[1.65rem] border border-black/10 bg-[#f8f8f6] shadow-[0_18px_50px_rgba(2,26,32,0.08)]" key={concept.slug}>
                <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.14em] text-black/38">Option {String(index + 1).padStart(2, "0")}</p>
                    <h2 className="mt-1 text-[22px] font-black tracking-[-0.045em]">{concept.name}</h2>
                  </div>
                  <span className="grid size-10 place-items-center rounded-full bg-black text-white transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    <ArrowUpRight className="size-5" aria-hidden="true" />
                  </span>
                </div>

                <a className="block bg-[#dfe5e3] p-4" href={`/concepts/${concept.slug}`} aria-label={`Open ${concept.name} mobile landing page`}>
                  <img
                    alt={`${concept.name} Upscale mobile landing page mockup`}
                    className="mx-auto h-auto w-full max-w-[300px] rounded-[1.35rem] border border-black/10 shadow-[0_20px_45px_rgba(2,26,32,0.16)] transition duration-300 group-hover:-translate-y-1"
                    src={`/mockups/${concept.slug}.png`}
                  />
                </a>

                <div className="p-5">
                  <p className="text-[13px] leading-6 text-black/58">{concept.coreAngle}</p>
                  <a className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-black px-4 text-[14px] font-black text-white transition hover:bg-[#0a6d86]" href={`/concepts/${concept.slug}`}>
                    Open mobile LP
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mb-5 mt-12 border-t border-black/10 pt-10">
            <p className="text-[10px] font-black uppercase tracking-[0.14em] text-black/38">Customer versions</p>
            <h2 className="mt-1 text-[26px] font-black tracking-[-0.045em]">Five source-based examples</h2>
            <p className="mt-2 max-w-2xl text-[13px] leading-6 text-black/58">Customer names, categories, logos and creative frames are sourced from the requested Upscale AppLovin pages. Unverified customer claims remain placeholders.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {customerConcepts.map((concept, index) => (
              <article className="group overflow-hidden rounded-[1.65rem] border border-black/10 bg-[#f8f8f6] shadow-[0_18px_50px_rgba(2,26,32,0.08)]" key={concept.slug}>
                <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.14em] text-black/38">Customer {String(index + 1).padStart(2, "0")}</p>
                    <h3 className="mt-1 text-[22px] font-black tracking-[-0.045em]">{concept.name}</h3>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.1em] text-black/38">{concept.category}</p>
                  </div>
                  <span className="grid size-10 place-items-center rounded-full bg-black text-white transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    <ArrowUpRight className="size-5" aria-hidden="true" />
                  </span>
                </div>
                <a className="block bg-[#dfe5e3] p-4" href={`/concepts/${concept.slug}`} aria-label={`Open ${concept.name} customer mobile landing page`}>
                  <img alt={`${concept.name} customer mobile landing page mockup`} className="mx-auto h-auto w-full max-w-[300px] rounded-[1.35rem] border border-black/10 shadow-[0_20px_45px_rgba(2,26,32,0.16)] transition duration-300 group-hover:-translate-y-1" src={`/mockups/${concept.slug}.png`} />
                </a>
                <div className="p-5">
                  <p className="text-[13px] leading-6 text-black/58">{concept.coreAngle}</p>
                  <a className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-black px-4 text-[14px] font-black text-white transition hover:bg-[#0a6d86]" href={`/concepts/${concept.slug}`}>
                    Open customer LP
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#101617] px-4 py-7 text-white sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-[11px] leading-5 text-white/42 sm:flex-row sm:items-center sm:justify-between">
          <p>Upscale AppLovin Creative OS mobile landing page review · v1.3 · August 31, 2026.</p>
          <p>All bracketed fields require verification and approval.</p>
        </div>
      </footer>
    </main>
  );
}
