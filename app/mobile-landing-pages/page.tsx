import Link from "next/link";
import { pages, variants } from "@/content/mobile-landing-pages";

export const metadata = { title: "Mobile landing pages — Creative OS for AppLovin" };

export default function Index() {
  return (
    <main className="min-h-screen bg-[#021a20] px-6 py-12 text-white">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#c9a3e0]">Creative OS for AppLovin · mobile</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-[-0.03em]">Ten mobile landing pages, light and dark.</h1>
        <p className="mt-3 max-w-xl text-white/70">Icon-format hero, built from the applovin-home content with the homepage tokens and assets. Five message frames and five customer frames; each in a light and a dark version.</p>
        <h2 className="mt-8 text-lg font-semibold">Subpages</h2>
        <ol className="mt-3 grid gap-2">
          {Object.values(pages).map((p) => (
            <li key={p.path} className="flex items-center justify-between gap-4 rounded-xl border border-white/12 bg-white/[0.05] px-4 py-3">
              <span className="min-w-0"><span className="font-mono text-[11px] text-[#c9a3e0]">{p.path}</span><span className="block truncate font-semibold">{p.title}</span><span className="text-[12px] text-white/55">{p.kicker}</span></span>
              <span className="flex shrink-0 gap-2"><Link className="rounded-lg bg-white px-3 py-1.5 text-[12px] font-semibold text-[#021a20]" href={p.path}>Light</Link><Link className="rounded-lg border border-white/30 px-3 py-1.5 text-[12px] font-semibold" href={`${p.path}?theme=dark`}>Dark</Link></span>
            </li>
          ))}
        </ol>
        <h2 className="mt-8 text-lg font-semibold">Landing pages</h2>
        <ol className="mt-3 grid gap-2">
          {variants.map((v) => (
            <li key={v.n} className="flex items-center justify-between gap-4 rounded-xl border border-white/12 bg-white/[0.05] px-4 py-3">
              <span className="min-w-0"><span className="font-mono text-[11px] text-[#c9a3e0]">/mobile-landing-page-{v.n}</span><span className="block truncate font-semibold">{v.headline}</span><span className="text-[12px] text-white/55">{v.name}</span></span>
              <span className="flex shrink-0 gap-2"><Link className="rounded-lg bg-white px-3 py-1.5 text-[12px] font-semibold text-[#021a20]" href={`/mobile-landing-page-${v.n}`}>Light</Link><Link className="rounded-lg border border-white/30 px-3 py-1.5 text-[12px] font-semibold" href={`/mobile-landing-page-${v.n}?theme=dark`}>Dark</Link></span>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
