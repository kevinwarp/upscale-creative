import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Menu } from "lucide-react";

import { upscaleApplovinCreativeOsContent } from "@/content/upscale-applovin-creative-os";

export const metadata: Metadata = {
  title: "How Creative OS Works | Upscale v1.3",
  description: "The seven-step Upscale AppLovin Creative OS operating plan.",
};

export default function HowItWorksPage() {
  const { process } = upscaleApplovinCreativeOsContent;

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8f8f6] text-[#021a20]">
      <header className="mx-auto flex h-[68px] max-w-[430px] items-center justify-between px-4">
        <Link aria-label="Upscale AI landing page options" href="/">
          <img alt="Upscale AI" className="h-[28px] w-auto" height="35" src="/customer-assets/upscale-wordmark.svg" width="136" />
        </Link>
        <details className="relative">
          <summary className="grid size-11 cursor-pointer list-none place-items-center rounded-[1.15rem] border border-black/12 bg-white [&::-webkit-details-marker]:hidden" aria-label="Open menu">
            <Menu className="size-5.5" strokeWidth={2.4} aria-hidden="true" />
          </summary>
          <nav className="absolute right-0 top-14 z-30 grid w-52 gap-1 rounded-2xl border border-black/10 bg-white p-2 shadow-xl" aria-label="Page menu">
            <Link className="rounded-xl px-3 py-3 text-[13px] font-semibold hover:bg-black/5" href="/">LP options</Link>
            <Link className="rounded-xl px-3 py-3 text-[13px] font-semibold hover:bg-black/5" href="/formats">Example Ads</Link>
            <Link className="rounded-xl bg-[#effcff] px-3 py-3 text-[13px] font-semibold" href="/how-it-works">How it works</Link>
          </nav>
        </details>
      </header>

      <section className="mx-auto max-w-[430px] px-4 pb-8 pt-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#831f80]">AppLovin Creative OS · v1.3</p>
        <h1 className="mt-2 text-[38px] font-medium leading-[0.98] tracking-[-0.05em]">How Creative OS works</h1>
        <p className="mt-3 text-[15px] leading-[1.4] text-black/72">The detailed seven-step operating plan from account connection through AppLovin launch.</p>

        <div className="mt-6 flex items-center gap-3">
          <h2 className="shrink-0 text-[15px] font-semibold tracking-[-0.03em]">Seven-step plan</h2>
          <span className="h-px flex-1 bg-black/12" aria-hidden="true" />
        </div>

        <ol className="mt-4 grid gap-2.5">
          {process.steps.map((step, index) => (
            <li className="rounded-[1.35rem] border border-black/12 bg-white p-4 shadow-[0_4px_14px_rgba(2,26,32,0.04)]" key={step.title}>
              <div className="flex items-center gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-[0.7rem] bg-black text-sm font-semibold text-white">{index + 1}</span>
                <span className="text-[15px] font-semibold">{step.timing}</span>
              </div>
              <h2 className="mt-4 text-lg font-semibold leading-[1.1] tracking-[-0.03em]">{step.title}</h2>
              <p className="mt-1.5 text-sm leading-[1.5] text-black/72">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-5 rounded-[1.35rem] bg-gradient-to-r from-[#831f80] via-[#26259d] to-[#0a6d86] p-5 text-white">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#00f0ff]">Payment and launch</p>
          <h2 className="mt-2 text-[22px] font-medium leading-[1.08] tracking-[-0.04em]">Approve batch one before payment</h2>
          <p className="mt-3 text-[13px] leading-[1.45] text-white/78">Approve batch one before paying. Launch into AppLovin within one week.</p>
          <Link className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-xl bg-white px-4 text-[13px] font-semibold text-black" href="/concepts/product-led#top">
            Start My First Batch
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <Link className="mt-5 inline-flex min-h-11 items-center gap-2 text-[13px] font-semibold" href="/">
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to landing-page options
        </Link>
      </section>
    </main>
  );
}
