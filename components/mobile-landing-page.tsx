import { MobileVideoCard } from "@/components/mobile-video-card";
import { MEDIA, agents, applovinLogos, calendar, caseStudy, faq, getVariant, links, offer, paths, platformStats, pricing, promise, quotes, sequence, shots, showcase } from "@/content/mobile-landing-pages";

const P = "#831f80"; // brand purple
const K = "#021a20"; // brand black

function Kicker({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`font-mono text-[11px] font-semibold uppercase tracking-[0.12em] ${light ? "text-[#c9a3e0]" : "text-[#831f80]"}`}>{children}</p>;
}
function H2({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <h2 className={`mt-2 font-[family-name:var(--font-display)] text-[28px] font-semibold leading-[1.08] tracking-[-0.02em] ${light ? "text-white" : "text-[#021a20]"}`}>{children}</h2>;
}
function Rail({ children, ariaLabel }: { children: React.ReactNode; ariaLabel: string }) {
  return <div className="-mx-4 mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-label={ariaLabel}>{children}</div>;
}
function Cta({ href, children, ghost = false, light = false, block = false }: { href: string; children: React.ReactNode; ghost?: boolean; light?: boolean; block?: boolean }) {
  const base = "inline-flex items-center justify-center rounded-xl px-5 py-3.5 text-[15px] font-semibold transition";
  const style = ghost ? (light ? "border border-white/35 text-white" : "border border-[#021a20]/20 text-[#021a20]") : "bg-[#831f80] text-white shadow-[0_8px_24px_-12px_rgba(131,31,128,0.8)]";
  return <a className={`${base} ${style} ${block ? "w-full" : ""}`} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{children}</a>;
}

export function MobileLandingPage({ n }: { n: number }) {
  const v = getVariant(n);
  const X = (d: number) => 20 + (d / 68) * 260;
  const Y = (p: number) => 110 - (p / 100) * 96;
  const line = caseStudy.share.map(([d, p], i) => `${i ? "L" : "M"}${X(d).toFixed(1)} ${Y(p).toFixed(1)}`).join(" ");

  return (
    <main className="min-h-screen bg-[#f8fafc] font-[family-name:var(--font-body)] text-[#021a20] antialiased">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-[#e2e8f0] bg-[#f8fafc]/90 backdrop-blur">
        <div className="mx-auto flex max-w-[480px] items-center justify-between px-4 py-3">
          <a href="#top" aria-label="Upscale"><img alt="Upscale" className="h-6 w-auto" src="/customer-assets/upscale-wordmark.svg" width="136" height="35" /></a>
          <span className="hidden rounded-full bg-[#f0eafe] px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-[#831f80] min-[380px]:inline">Creative OS for AppLovin</span>
          <a className="rounded-lg bg-[#831f80] px-3.5 py-2 text-[13px] font-semibold text-white" href={links.onboarding} target="_blank" rel="noopener noreferrer">Get started</a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="bg-[radial-gradient(120%_80%_at_80%_0%,#3b1a4a_0%,#1a1030_45%,#021a20_100%)] px-4 pb-8 pt-8 text-white">
        <div className="mx-auto max-w-[480px]">
          <Kicker light>{v.kicker}</Kicker>
          <h1 className="mt-2 font-[family-name:var(--font-display)] text-[36px] font-semibold leading-[1.02] tracking-[-0.03em]">{v.headline}</h1>
          {n !== 1 && <p className="mt-3 text-[15px] font-medium text-[#c9a3e0]">{promise}</p>}
          <p className="mt-3 text-[15px] leading-6 text-white/80">{v.sub}</p>
          <div className="mt-4 rounded-xl border border-white/15 bg-white/[0.07] p-3.5 text-[14px] font-semibold leading-5">{offer}</div>
          <div className="mt-4 grid grid-cols-2 gap-2.5">
            <Cta href={links.onboarding} block>Get started</Cta>
            <Cta href="#how" ghost light block>See how it works</Cta>
          </div>
          <div className="mt-6 grid grid-cols-[1fr_1fr] items-end gap-3">
            <MobileVideoCard {...v.lead} />
            <div className="grid gap-2">
              {platformStats.slice(0, 3).map(([num, d]) => (
                <div key={num} className="rounded-xl border border-white/12 bg-white/[0.06] p-3"><div className="font-[family-name:var(--font-display)] text-[22px] font-semibold leading-none">{num}</div><div className="mt-1 text-[11px] leading-4 text-white/65">{d}</div></div>
              ))}
              <p className="font-mono text-[9px] text-white/45">Source: AppLovin, 2026.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why AppLovin */}
      <section className="px-4 py-9">
        <div className="mx-auto max-w-[480px]">
          <Kicker>Why AppLovin</Kicker>
          <H2>DTC brands are already scaling on AppLovin.</H2>
          <p className="mt-3 text-[15px] leading-6 text-[#64758b]">Brands like Ridge, Caraway, Quince, Prose and Wayfair are using AppLovin to reach billions of consumers inside mobile games, and showing it can be a meaningful, scalable performance channel beyond Meta and Google.</p>
          <Rail ariaLabel="Operators on the record">
            {quotes.map((q) => (
              <blockquote key={q.who} className="m-0 w-[82%] shrink-0 snap-start rounded-2xl border border-[#e2e8f0] bg-white p-4">
                <p className="text-[15px] font-medium leading-6 text-[#021a20]">“{q.text}”</p>
                <footer className="mt-3 flex flex-wrap items-center gap-2 text-[12px] text-[#64758b]"><span className="font-semibold text-[#021a20]">{q.who}</span><span className="rounded-full bg-[#f1f5f9] px-2 py-0.5 font-mono text-[10px]">{q.tag}</span></footer>
              </blockquote>
            ))}
          </Rail>
          <div className="mt-5 grid grid-cols-4 items-center gap-x-4 gap-y-3 opacity-80">
            {applovinLogos.slice(0, 8).map((l) => <img key={l.name} alt={l.name} className="mx-auto h-5 w-auto max-w-full object-contain" loading="lazy" src={l.src} />)}
          </div>
          <p className="mt-2 text-center font-mono text-[10px] text-[#64758b]">Brands in AppLovin's own case studies.</p>
          <div className="mt-6 rounded-2xl bg-[#021a20] p-5 text-white">
            <p className="text-[15px] font-semibold leading-6">Winning on AppLovin takes more than moving budget to a new platform. It is a different ad experience for the consumer, part TV, part social, part mobile game.</p>
            <p className="mt-2 text-[14px] leading-6 text-white/75">You need a steady pipeline of unique creative, and a way to understand what is actually driving performance.</p>
          </div>
        </div>
      </section>

      {/* The ad is a sequence */}
      <section className="border-y border-[#e2e8f0] bg-white px-4 py-9">
        <div className="mx-auto max-w-[480px]">
          <Kicker>How AppLovin ads work</Kicker>
          <H2>The ad is a sequence, not a clip.</H2>
          <p className="mt-3 text-[15px] leading-6 text-[#64758b]">On AppLovin the ad sits between levels of a game, and you get 30 seconds or more across connected parts. Design one story: same product, same promise, same proof, same next action.</p>
          <Rail ariaLabel="The AppLovin ad sequence">
            {sequence.map(([t, d], i) => (
              <div key={t} className="w-[70%] shrink-0 snap-start rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] p-4">
                {i === 1 && <img alt="Portrait video frame" className="mb-3 h-36 w-full rounded-lg object-cover" loading="lazy" src={`${MEDIA}/sequence/latico-video-poster.jpg`} />}
                {i === 2 && <img alt="Playable frame" className="mb-3 h-36 w-full rounded-lg object-cover object-top" loading="lazy" src={`${MEDIA}/sequence/latico-playable.png`} />}
                <span className="grid size-7 place-items-center rounded-full bg-[#831f80] font-mono text-[12px] font-semibold text-white">{i + 1}</span>
                <h3 className="mt-2 text-[16px] font-semibold">{t}</h3>
                <p className="mt-1 text-[13px] leading-5 text-[#64758b]">{d}</p>
              </div>
            ))}
          </Rail>
          <p className="mt-3 text-[13px] text-[#64758b]">Try the full in-game experience with your own product page on <a className="font-semibold text-[#831f80]" href={links.playable} target="_blank" rel="noopener noreferrer">Playable DTC</a>. Free.</p>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="px-4 py-9">
        <div className="mx-auto max-w-[480px]">
          <Kicker>How it works</Kicker>
          <H2>{promise}</H2>
          <p className="mt-3 text-[15px] leading-6 text-[#64758b]">Two agents and one map. Then an AI Editor and our human editors make the ads.</p>
          <div className="mt-5 grid gap-4">
            {agents.map((a, i) => (
              <article key={a.badge} className="overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white">
                <img alt={a.alt} className="h-44 w-full object-cover object-left-top" loading="lazy" src={a.shot} />
                <div className="p-4">
                  <div className="flex items-center gap-2"><span className="font-mono text-[12px] text-[#831f80]">0{i + 1}</span><span className="rounded-full border border-[#831f80]/25 bg-[#831f80]/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.05em] text-[#831f80]">{a.badge}</span></div>
                  <h3 className="mt-2 font-[family-name:var(--font-display)] text-[20px] font-semibold leading-tight">{a.title}</h3>
                  <p className="mt-2 text-[14px] leading-6 text-[#64758b]">{a.copy}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-5 rounded-2xl border-l-4 border-[#831f80] bg-[#f0eafe] p-4 text-[14px] leading-6"><strong>We don't stop at recommendations.</strong> An AI Editor and our human editors make the ads, and you approve every brief and every finished creative before it goes live.</div>
          <Kicker>Inside the platform</Kicker>
          <Rail ariaLabel="Product screenshots">
            {shots.map((s) => (
              <figure key={s.title} className="m-0 w-[86%] shrink-0 snap-start overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white">
                <img alt={s.title} className="h-48 w-full object-cover object-left-top" loading="lazy" src={s.src} />
                <figcaption className="p-3"><span className="font-mono text-[10px] uppercase tracking-[0.08em] text-[#831f80]">{s.label}</span><p className="mt-1 text-[14px] font-semibold">{s.title}</p></figcaption>
              </figure>
            ))}
          </Rail>
        </div>
      </section>

      {/* Case study */}
      <section className="bg-white px-4 py-9">
        <div className="mx-auto max-w-[480px]">
          <Kicker>Case study</Kicker>
          <H2>{caseStudy.title}</H2>
          <p className="mt-3 text-[15px] leading-6 text-[#64758b]">{caseStudy.copy}</p>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {caseStudy.stats.map(([num, d]) => <div key={num} className="rounded-xl border border-[#e2e8f0] p-3"><div className="font-[family-name:var(--font-display)] text-[22px] font-semibold text-[#831f80]">{num}</div><div className="mt-1 text-[11px] leading-4 text-[#64758b]">{d}</div></div>)}
          </div>
          <svg viewBox="0 0 300 130" className="mt-4 w-full" role="img" aria-label="Upscale share of daily AppLovin spend grew from 0% to more than 80% between June 26 and September 2, 2026">
            {[0, 50, 100].map((p) => <line key={p} x1="20" x2="280" y1={Y(p)} y2={Y(p)} stroke="#e2e8f0" />)}
            <line x1="20" x2="280" y1={Y(80)} y2={Y(80)} stroke={P} strokeDasharray="4 3" />
            <text x="24" y={Y(80) - 4} fontSize="8" fill={P} fontFamily="monospace">80% reference</text>
            <path d={`${line} L280 ${Y(0)} L20 ${Y(0)} Z`} fill={P} opacity="0.16" />
            <path d={line} fill="none" stroke={P} strokeWidth="2.5" strokeLinejoin="round" />
            {[["Jun 26", 0], ["Jul 15", 19], ["Aug 5", 40], ["Sep 2", 68]].map(([l, d]) => <text key={l as string} x={X(d as number)} y="124" fontSize="8" fill="#64758b" textAnchor="middle" fontFamily="monospace">{l}</text>)}
          </svg>
          <p className="font-mono text-[10px] leading-4 text-[#64758b]">Upscale share of daily AppLovin spend. Directional reconstruction from the dashboard trend; intermediate values are approximate.</p>
          <h3 className="mt-6 font-[family-name:var(--font-display)] text-[20px] font-semibold leading-tight">Creator demos win. Discount-led ads are the floor.</h3>
          <div className="mt-3 grid gap-2">
            {caseStudy.bars.map(([t, x]) => (
              <div key={t} className="grid grid-cols-[112px_1fr_44px] items-center gap-2 text-[12px]">
                <span className="text-right leading-tight">{t}</span>
                <span className="relative h-4 overflow-hidden rounded-md bg-[#f1f5f9]"><span className="absolute inset-y-0 left-0 rounded-md" style={{ width: `${(x / 1.8) * 100}%`, background: x >= caseStudy.benchmark ? P : "#94a3b8" }} /><span className="absolute inset-y-0 border-l-2 border-dashed border-[#021a20]/70" style={{ left: `${(caseStudy.benchmark / 1.8) * 100}%` }} /></span>
                <span className="font-mono">{x.toFixed(2)}%</span>
              </div>
            ))}
          </div>
          <p className="mt-2 font-mono text-[10px] leading-4 text-[#64758b]">{caseStudy.note}</p>
        </div>
      </section>

      {/* Showcase */}
      <section className="border-y border-[#e2e8f0] px-4 py-9">
        <div className="mx-auto max-w-[480px]">
          <Kicker>Showcase</Kicker>
          <H2>Made for AppLovin.</H2>
          <p className="mt-3 text-[15px] leading-6 text-[#64758b]">Vertical, captioned, built for sound off, with the offer in the last five seconds. Tap to play.</p>
          <Rail ariaLabel="AppLovin creatives">
            {showcase.map((c) => <div key={c.slug} className="w-[46%] shrink-0 snap-start"><MobileVideoCard {...c} /></div>)}
          </Rail>
        </div>
      </section>

      {/* Mid CTA */}
      <section className="px-4 py-8">
        <div className="mx-auto max-w-[480px] rounded-2xl bg-[#021a20] p-5 text-white">
          <Kicker light>Seen enough?</Kicker>
          <H2 light>Get your first four AppLovin ads.</H2>
          <p className="mt-2 text-[14px] leading-6 text-white/75">{offer}</p>
          <div className="mt-4 grid grid-cols-2 gap-2.5"><Cta href={links.onboarding} block>Get started</Cta><Cta href={links.demo} ghost light block>Book a demo</Cta></div>
        </div>
      </section>

      {/* Calendar */}
      <section className="bg-white px-4 py-9">
        <div className="mx-auto max-w-[480px]">
          <Kicker>The creative calendar</Kicker>
          <H2>New ads every 10 to 14 days. A read every week.</H2>
          <p className="mt-3 text-[15px] leading-6 text-[#64758b]">AppLovin needs a steady supply of new creative. Creative OS keeps a batch of four new ads moving every 10 to 14 days, reads performance each week, and feeds what it learns into the next batch.</p>
          <div className="mt-4 grid grid-cols-4 gap-1.5">
            {[1, 12, 25, 38].map((d, i) => <div key={d} className="rounded-lg bg-[#831f80] p-2 text-white"><div className="font-mono text-[10px] opacity-80">Day {d}</div><div className="text-[12px] font-semibold leading-tight">Batch {i + 1}</div><div className="text-[10px] opacity-80">4 new ads</div></div>)}
          </div>
          <ol className="mt-4 grid gap-2">
            {calendar.map(([t, d]) => <li key={t} className="grid grid-cols-[76px_1fr] gap-3 border-t border-[#e2e8f0] pt-2 text-[13px]"><span className="font-mono text-[11px] font-semibold text-[#831f80]">{t}</span><span className="leading-5 text-[#021a20]">{d}</span></li>)}
          </ol>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-4 py-9">
        <div className="mx-auto max-w-[480px]">
          <Kicker>Pricing</Kicker>
          <H2>Start with the strategist. Add the Creative Team when you want the ads made.</H2>
          <Rail ariaLabel="Plans">
            {pricing.map((p) => (
              <div key={p.name} className={`flex w-[84%] shrink-0 snap-start flex-col rounded-2xl border bg-white p-4 ${p.primary ? "border-[#831f80]" : "border-[#e2e8f0]"}`}>
                <div className="min-h-[2.6em] text-[14px] font-semibold">{p.name}</div>
                <div className="font-[family-name:var(--font-display)] text-[36px] font-semibold tracking-[-0.03em]">{p.price}</div>
                <div className="font-mono text-[11px] text-[#64758b]">{p.per}</div>
                {p.includes && <div className="mt-1.5 self-start rounded-full bg-[#f0eafe] px-2.5 py-0.5 text-[11px] font-semibold text-[#831f80]">{p.includes}</div>}
                <ul className="mt-3 grid gap-1.5 text-[13px]">{p.features.map((f) => <li key={f} className="flex gap-2"><span className="text-[#0a6d86]">✓</span>{f}</li>)}</ul>
                {p.promo && <p className="mt-3 rounded-lg bg-[#f0eafe] p-2.5 text-[12px] font-semibold text-[#831f80]">{p.promo}</p>}
                <div className="mt-auto pt-4"><Cta href={links.onboarding} ghost={!p.primary} block>Get started</Cta></div>
              </div>
            ))}
          </Rail>
          <p className="mt-2 text-[13px] text-[#64758b]">AppLovin today. YouTube and CTV on request. Spending more than these tiers cover? <a className="font-semibold text-[#831f80]" href={links.demo} target="_blank" rel="noopener noreferrer">Talk to us</a>.</p>
        </div>
      </section>

      {/* Get started */}
      <section id="start" className="bg-white px-4 py-9">
        <div className="mx-auto max-w-[480px]">
          <Kicker>Get started</Kicker>
          <H2>Get your first four AppLovin ads.</H2>
          <p className="mt-3 text-[15px] leading-6 text-[#64758b]">Sign up and our Creative Team makes you four new high-performance AppLovin ads in your first month, free. Start whichever way fits.</p>
          <div className="mt-4 grid gap-3">
            {paths.map((p) => (
              <a key={p.kicker} href={p.href} target="_blank" rel="noopener noreferrer" className={`block rounded-2xl border p-4 ${p.primary ? "border-[#831f80] bg-[#f0eafe]/40" : "border-[#e2e8f0]"}`}>
                <Kicker>{p.kicker}</Kicker>
                <h3 className="mt-1 text-[18px] font-semibold">{p.title}</h3>
                <p className="mt-1 text-[13px] leading-5 text-[#64758b]">{p.copy}</p>
                <span className="mt-2 inline-block text-[14px] font-semibold text-[#831f80]">{p.cta} →</span>
              </a>
            ))}
          </div>
          <p className="mt-3 text-[13px] text-[#64758b]"><strong className="text-[#021a20]">What you bring:</strong> your brand's site and your AppLovin account, or the intent to open one.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-9">
        <div className="mx-auto max-w-[480px]">
          <Kicker>FAQ</Kicker>
          <H2>Operator questions, answered.</H2>
          <div className="mt-4 divide-y divide-[#e2e8f0] rounded-2xl border border-[#e2e8f0] bg-white">
            {faq.map(([q, a]) => <details key={q} className="group p-4"><summary className="flex cursor-pointer list-none items-center justify-between text-[15px] font-semibold">{q}<span className="ml-3 text-[#831f80] transition group-open:rotate-45">+</span></summary><p className="mt-2 text-[14px] leading-6 text-[#64758b]">{a}</p></details>)}
          </div>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[13px]">
            <a className="font-semibold text-[#831f80]" href={links.beginners} target="_blank" rel="noopener noreferrer">AppLovin for DTC Beginners →</a>
            <a className="font-semibold text-[#831f80]" href={links.handbook} target="_blank" rel="noopener noreferrer">Onboarding Handbook →</a>
            <a className="font-semibold text-[#831f80]" href={links.bestPractices} target="_blank" rel="noopener noreferrer">Creative Best-Practices Guide →</a>
          </div>
        </div>
      </section>

      {/* Final CTA + footer */}
      <section className="px-4 pb-28 pt-4">
        <div className="mx-auto max-w-[480px] rounded-2xl bg-[radial-gradient(120%_80%_at_80%_0%,#3b1a4a_0%,#1a1030_45%,#021a20_100%)] p-6 text-center text-white">
          <h2 className="font-[family-name:var(--font-display)] text-[26px] font-semibold leading-[1.1] tracking-[-0.02em]">{promise}</h2>
          <p className="mt-3 text-[14px] leading-6 text-white/75">{offer}</p>
          <div className="mt-4 grid gap-2.5"><Cta href={links.onboarding} block>Get started</Cta><Cta href={links.demo} ghost light block>Book a demo</Cta></div>
        </div>
        <footer className="mx-auto mt-8 max-w-[480px] text-center text-[11px] leading-5 text-[#64758b]">
          <img alt="Upscale" className="mx-auto mb-2 h-5 w-auto" src="/customer-assets/upscale-wordmark.svg" width="136" height="35" />
          © 2026 Upscale AI. Creative OS for AppLovin is Upscale's AI Creative Strategist. AppLovin is a trademark of its owner; Upscale is an independent creative partner. Platform statistics cited to AppLovin.
          <p className="mt-1 font-mono text-[10px]">Mobile landing page {n} · {v.name}</p>
        </footer>
      </section>

      {/* Sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#e2e8f0] bg-white/95 backdrop-blur" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
        <div className="mx-auto flex max-w-[480px] items-center gap-3 px-4 py-2.5">
          <p className="min-w-0 flex-1 text-[13px] font-semibold leading-4"><span className="block">4 new AppLovin ads in your first month, free.</span><span className="block text-[11px] font-normal text-[#64758b]">Made by our Creative Team with Creative OS.</span></p>
          <a className="shrink-0 rounded-xl bg-[#831f80] px-4 py-2.5 text-[14px] font-semibold text-white" href={links.onboarding} target="_blank" rel="noopener noreferrer">Get started</a>
        </div>
      </div>
    </main>
  );
}
