import Link from "next/link";
import { variants } from "@/content/mobile-landing-pages";

export const metadata = { title: "Mobile landing pages — Creative OS for AppLovin" };

export default function Index() {
  return (
    <main className="min-h-screen bg-[#021a20] px-6 py-12 text-white">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#c9a3e0]">Creative OS for AppLovin · mobile</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-[-0.03em]">Ten mobile landing pages.</h1>
        <p className="mt-3 max-w-xl text-white/70">Built from the applovin-home content with the homepage tokens and assets. Five message frames and five customer frames; same sections, different hero.</p>
        <ol className="mt-8 grid gap-2">
          {variants.map((v) => (
            <li key={v.n}><Link className="flex items-baseline justify-between gap-4 rounded-xl border border-white/12 bg-white/[0.05] px-4 py-3 hover:border-[#c9a3e0]" href={`/mobile-landing-page-${v.n}`}><span><span className="font-mono text-[11px] text-[#c9a3e0]">/mobile-landing-page-{v.n}</span><span className="block font-semibold">{v.headline}</span></span><span className="shrink-0 text-[12px] text-white/55">{v.name}</span></Link></li>
          ))}
        </ol>
      </div>
    </main>
  );
}
