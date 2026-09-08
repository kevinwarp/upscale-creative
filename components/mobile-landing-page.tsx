import { MobileVideoCard } from "@/components/mobile-video-card";
import { MEDIA, agents, applovinLogos, attentionRule, calendar, caseStudy, compare, explore, faq, formats, getVariant, heroRisk, heroValue, heroWhat, links, losingDna, offer, pages, paths, platformStats, pricing, process, promise, quotes, riskFree, sequence, shots, showcase, showcaseAll, winningDna, type Page } from "@/content/mobile-landing-pages";

export type Theme = "light" | "dark";
const P = "#831f80"; // brand purple

// Theme tokens: light = homepage paper; dark = homepage brand black.
const themes = {
  light: { page: "bg-[#f8fafc] text-[#021a20]", alt: "bg-white", muted: "text-[#64758b]", card: "bg-white border-[#e2e8f0]", tint: "bg-[#f0eafe]", line: "border-[#e2e8f0]", kicker: "text-[#831f80]", chip: "bg-[#f1f5f9]", ghost: "border border-[#021a20]/20 text-[#021a20]", header: "bg-[#f8fafc]/90 border-[#e2e8f0]", bar: "bg-white/95 border-[#e2e8f0]", grid: "#e2e8f0", inverse: "bg-[#021a20] text-white", thead: "bg-[#f8fafc]", low: "#94a3b8" },
  dark: { page: "bg-[#021a20] text-white", alt: "bg-[#06232b]", muted: "text-white/65", card: "bg-white/[0.06] border-white/12", tint: "bg-white/[0.08]", line: "border-white/12", kicker: "text-[#c9a3e0]", chip: "bg-white/10", ghost: "border border-white/35 text-white", header: "bg-[#021a20]/90 border-white/10", bar: "bg-[#021a20]/95 border-white/10", grid: "rgba(255,255,255,0.14)", inverse: "bg-[#f0eafe] text-[#021a20]", thead: "bg-[#021a20]", low: "#64758b" },
} as const;

type T = (typeof themes)[Theme];
const Kicker = ({ children, t }: { children: React.ReactNode; t: T }) => <p className={`font-mono text-[11px] font-semibold uppercase tracking-[0.12em] ${t.kicker}`}>{children}</p>;
const H2 = ({ children }: { children: React.ReactNode }) => <h2 className="mt-2 font-[family-name:var(--font-display)] text-[28px] font-semibold leading-[1.08] tracking-[-0.02em]">{children}</h2>;
const Rail = ({ children, ariaLabel }: { children: React.ReactNode; ariaLabel: string }) => <div className="-mx-4 mt-5 flex snap-x snap-mandatory items-start gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-label={ariaLabel}>{children}</div>;
const Cta = ({ href, children, ghost = false, t }: { href: string; children: React.ReactNode; ghost?: boolean; t: T }) => (
  <a className={`inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-4 text-[17px] font-semibold ${ghost ? t.ghost : "bg-[#831f80] text-white shadow-[0_10px_28px_-14px_rgba(131,31,128,0.9)]"}`} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{children}</a>
);
const Card = ({ children, className = "", t }: { children: React.ReactNode; className?: string; t: T }) => <div className={`rounded-2xl border ${t.card} ${className}`}>{children}</div>;

export function MobileLandingPage({ n = 1, theme = "light", page = "landing" }: { n?: number; theme?: Theme; page?: Page }) {
  const v = getVariant(n);
  const pg = page === "landing" ? null : pages[page];
  const t = themes[theme];
  const dark = theme === "dark";
  const second = showcase.find((c) => c.slug !== v.lead.slug)!;
  const X = (d: number) => 20 + (d / 68) * 260;
  const Y = (p: number) => 110 - (p / 100) * 96;
  const line = caseStudy.share.map(([d, p], i) => `${i ? "L" : "M"}${X(d).toFixed(1)} ${Y(p).toFixed(1)}`).join(" ");
  return (
    <main className={`min-h-screen font-[family-name:var(--font-body)] antialiased ${t.page}`}>
      {/* Header */}
      <header className={`sticky top-0 z-40 border-b backdrop-blur ${t.header}`}>
        <div className="mx-auto flex max-w-[480px] items-center justify-between px-4 py-3">
          <a href="#top" aria-label="Upscale"><img alt="Upscale" className={`h-6 w-auto ${dark ? "brightness-0 invert" : ""}`} src="/customer-assets/upscale-wordmark.svg" width="136" height="35" /></a>
          <span className={`hidden rounded-full px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.1em] ${t.tint} ${t.kicker} min-[380px]:inline`}>Creative OS for AppLovin</span>
          <a className="rounded-lg bg-[#831f80] px-3.5 py-2 text-[13px] font-semibold text-white" href={links.onboarding} target="_blank" rel="noopener noreferrer">Get started</a>
        </div>
      </header>

      {page === "landing" && (
        <>
      {/* Hero, Icon format: H1, value line, what, risk, stacked CTAs, two proof cards, two creatives */}
      <section id="top" className="px-4 pb-6 pt-7">
        <div className="mx-auto max-w-[480px]">
          <Kicker t={t}>{v.kicker}</Kicker>
          <h1 className="mt-1.5 font-[family-name:var(--font-display)] text-[40px] font-semibold leading-[1.0] tracking-[-0.03em]">{v.headline}</h1>
          <p className="mt-4 text-[19px] font-medium leading-[1.3]">{heroValue}</p>
          <p className={`mt-3 text-[15px] leading-6 ${t.muted}`}>{n === 1 ? heroWhat : v.sub}</p>
          <p className={`mt-2 text-[15px] leading-6 ${t.muted}`}>{heroRisk}</p>
          <div className="mt-5 grid gap-2.5">
            <Cta t={t} href={links.onboarding}><span className="grid size-5 place-items-center rounded-full border-2 border-white/80"><span className="size-2 rounded-full bg-white" /></span>Get started</Cta>
            <Cta t={t} href={links.demo} ghost><svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0M17 8v6M14 11h6" /></svg>Book a demo</Cta>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <Card t={t} className="p-3.5">
              <div className="flex gap-1.5">{[`${MEDIA}/showcase-9x16/latico-leathers-1.jpg`, `${MEDIA}/showcase-9x16/latico-leathers-2.jpg`, `${MEDIA}/sequence/latico-video-poster.jpg`].map((s) => <img key={s} alt="" className="h-14 w-14 rounded-lg object-cover" loading="lazy" src={s} />)}</div>
              <p className="mt-3 text-[17px] font-semibold">Case study</p>
              <p className={`mt-1 text-[13px] leading-5 ${t.muted}`}>Latico Leathers: six batches, CTR up 19%, Upscale creative on 80%+ of daily spend.</p>
              <a className={`mt-3 inline-block text-[13px] font-semibold ${t.kicker}`} href="#case-study">Read the case study →</a>
            </Card>
            <Card t={t} className="p-3.5">
              <div className="flex gap-1.5">{applovinLogos.slice(0, 3).map((l) => <span key={l.name} className="grid h-14 w-14 place-items-center rounded-lg bg-white p-2"><img alt={l.name} className="max-h-full max-w-full object-contain" loading="lazy" src={l.src} /></span>)}</div>
              <p className="mt-3 text-[17px] font-semibold">Why AppLovin</p>
              <p className={`mt-1 text-[13px] leading-5 ${t.muted}`}>Ridge, Caraway, Quince, Prose and Wayfair are scaling on AppLovin.</p>
              <a className={`mt-3 inline-block text-[13px] font-semibold ${t.kicker}`} href="#why">See the evidence →</a>
            </Card>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <MobileVideoCard {...v.lead} frame dark={dark} />
            <MobileVideoCard {...second} frame dark={dark} />
          </div>
        </div>
      </section>
        </>
      )}

      {pg && (
        <section id="top" className="px-4 pb-6 pt-7">
          <div className="mx-auto max-w-[480px]">
            <Kicker t={t}>{pg.kicker}</Kicker>
            <h1 className="mt-1.5 font-[family-name:var(--font-display)] text-[40px] font-semibold leading-[1.0] tracking-[-0.03em]">{pg.title}</h1>
            <p className="mt-4 text-[19px] font-medium leading-[1.3]">{pg.value}</p>
            <p className={`mt-3 text-[15px] leading-6 ${t.muted}`}>{pg.what}</p>
            <p className={`mt-2 text-[15px] leading-6 ${t.muted}`}>{heroRisk}</p>
            <div className="mt-5 grid gap-2.5">
              <Cta t={t} href={links.onboarding}><span className="grid size-5 place-items-center rounded-full border-2 border-white/80"><span className="size-2 rounded-full bg-white" /></span>Get started</Cta>
              <Cta t={t} href={links.demo} ghost>Book a demo</Cta>
            </div>
          </div>
        </section>
      )}

      {page === "formats" && (
        <section className={`px-4 py-9 ${t.alt}`}>
          <div className="mx-auto max-w-[480px]">
            <Kicker t={t}>Seven creative types</Kicker>
            <H2>What wins on AppLovin, ranked by click-through rate.</H2>
            <p className={`mt-3 text-[15px] leading-6 ${t.muted}`}>CTR by creative type across 58 AppLovin ads. The account average was 1.09%.</p>
            <div className="mt-5 grid gap-3">
              {formats.map((f, i) => {
                const ex = f.example ? showcase.find((c) => c.slug === f.example) : undefined;
                return (
                  <article key={f.name} className={`overflow-hidden rounded-2xl border ${t.card}`}>
                    <div className="grid grid-cols-[1fr_96px] gap-3 p-4">
                      <div>
                        <div className="flex items-center gap-2"><span className={`font-mono text-[12px] ${t.kicker}`}>0{i + 1}</span><span className={`rounded-full px-2 py-0.5 font-mono text-[11px] font-semibold ${f.ctr >= caseStudy.benchmark ? `${t.tint} ${t.kicker}` : t.chip}`}>{f.ctr.toFixed(2)}% CTR</span></div>
                        <h3 className="mt-1.5 text-[18px] font-semibold leading-tight">{f.name}</h3>
                        <p className={`mt-1 text-[13px] leading-5 ${t.muted}`}>{f.what}</p>
                        <p className="mt-2 text-[13px] leading-5"><strong>The rule:</strong> {f.rule}</p>
                        {ex && <a className={`mt-2 inline-block text-[13px] font-semibold ${t.kicker}`} href="#example-rail">Watch example →</a>}
                      </div>
                      {ex && <div className="self-start"><MobileVideoCard {...ex} dark={dark} /></div>}
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="mt-8 grid gap-3">
              <div className={`rounded-2xl border p-4 ${t.card}`}>
                <Kicker t={t}>Winning DNA</Kicker>
                <ol className="mt-2 grid gap-2">{winningDna.map((w, i) => <li key={w} className="grid grid-cols-[1.6rem_1fr] gap-2 text-[14px] leading-5"><span className={`font-mono text-[12px] font-semibold ${t.kicker}`}>{i + 1}</span>{w}</li>)}</ol>
              </div>
              <div className={`rounded-2xl border p-4 ${t.card}`}>
                <Kicker t={t}>Losing DNA</Kicker>
                <ul className="mt-2 grid gap-2">{losingDna.map((w) => <li key={w} className="grid grid-cols-[1.6rem_1fr] gap-2 text-[14px] leading-5"><span className={t.muted}>✕</span>{w}</li>)}</ul>
              </div>
              <div className={`rounded-2xl border-l-4 border-[#831f80] p-4 text-[14px] leading-6 ${t.tint}`}><strong>The last five seconds.</strong> {attentionRule}</div>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-[13px]">
              <a className={`font-semibold ${t.kicker}`} href={links.bestPractices} target="_blank" rel="noopener noreferrer">The AppLovin Creative Best-Practices Guide (PDF) →</a>
              <a className={`font-semibold ${t.kicker}`} href={links.beginners} target="_blank" rel="noopener noreferrer">AppLovin for DTC Beginners →</a>
            </div>
          </div>
        </section>
      )}

      {page === "customers" && (
        <section className={`px-4 py-9 ${t.alt}`}>
          <div className="mx-auto max-w-[480px]">
            {showcaseAll.map((b) => (
              <div key={b.slug} className="mb-8" id={b.slug}>
                <h2 className="font-[family-name:var(--font-display)] text-[22px] font-semibold tracking-[-0.02em]">{b.brand}</h2>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {b.posters.map((poster, i) => <MobileVideoCard key={poster} brand={b.brand} poster={poster} video={b.video} meta={`AppLovin · 9:16${i ? ` · ${i + 1}` : ""}`} dark={dark} />)}
                </div>
              </div>
            ))}
            <p className={`text-[13px] ${t.muted}`}>Want yours here? <a className={`font-semibold ${t.kicker}`} href={links.onboarding} target="_blank" rel="noopener noreferrer">Get your first four AppLovin ads</a>, made by our Creative Team with Creative OS.</p>
          </div>
        </section>
      )}

      {/* Why AppLovin */}
      <section id="why" className={`px-4 py-9 ${t.alt}`}>
        <div className="mx-auto max-w-[480px]">
          <Kicker t={t}>Why AppLovin</Kicker>
          <H2>DTC brands are already scaling on AppLovin.</H2>
          <p className={`mt-3 text-[15px] leading-6 ${t.muted}`}>Ridge, Caraway, Quince, Prose and Wayfair use AppLovin to reach billions of people inside mobile games. It is becoming a real performance channel beyond Meta and Google.</p>
          <Rail ariaLabel="Operators on the record">
            {quotes.map((q) => (
              <blockquote key={q.who} className={`m-0 w-[82%] shrink-0 snap-start rounded-2xl border p-4 ${t.card}`}>
                <p className="text-[15px] font-medium leading-6">“{q.text}”</p>
                <footer className={`mt-3 flex flex-wrap items-center gap-2 text-[12px] ${t.muted}`}><span className="font-semibold">{q.who}</span><span className={`rounded-full px-2 py-0.5 font-mono text-[10px] ${t.chip}`}>{q.tag}</span></footer>
              </blockquote>
            ))}
          </Rail>
          <div className={`mt-5 grid grid-cols-4 items-center gap-x-4 gap-y-3 ${dark ? "rounded-xl bg-white p-3" : "opacity-80"}`}>
            {applovinLogos.slice(0, 8).map((l) => <img key={l.name} alt={l.name} className="mx-auto h-5 w-auto max-w-full object-contain" loading="lazy" src={l.src} />)}
          </div>
          <p className={`mt-2 text-center font-mono text-[10px] ${t.muted}`}>Brands in AppLovin’s own case studies.</p>
          <div className="mt-5 grid grid-cols-4 gap-2">
            {platformStats.map(([num, d]) => <div key={num} className={`rounded-xl border p-2.5 ${t.card}`}><div className="font-[family-name:var(--font-display)] text-[18px] font-semibold leading-none">{num}</div><div className={`mt-1 text-[10px] leading-[1.3] ${t.muted}`}>{d}</div></div>)}
          </div>
          <p className={`mt-1.5 font-mono text-[9px] ${t.muted}`}>Source: AppLovin, 2026. Top 1,000 videos by spend share.</p>
          <div className={`mt-6 rounded-2xl p-5 ${t.inverse}`}>
            <p className="text-[15px] font-semibold leading-6">Winning on AppLovin takes more than budget. It is a different kind of ad: part TV, part social, part game.</p>
            <p className="mt-2 text-[14px] leading-6 opacity-80">You need a steady supply of new creative, and a clear read on what drives results.</p>
          </div>
        </div>
      </section>

      {/* The ad is a sequence */}
      <section className={`border-y px-4 py-9 ${t.line}`}>
        <div className="mx-auto max-w-[480px]">
          <Kicker t={t}>How AppLovin ads work</Kicker>
          <H2>The ad is a sequence, not a clip.</H2>
          <p className={`mt-3 text-[15px] leading-6 ${t.muted}`}>Your ad sits between game levels. The AppLovin ad experience is 75 seconds: a 60-second video, a 12-second playable, a 3-second end card. Tell one story.</p>
          <Rail ariaLabel="The AppLovin ad sequence">
            {sequence.map(([tt, d], i) => (
              <div key={tt} className={`w-[70%] shrink-0 snap-start rounded-2xl border p-4 ${t.card}`}>
                {i === 1 && <img alt="Portrait video frame" className="mb-3 h-36 w-full rounded-lg object-cover" loading="lazy" src={`${MEDIA}/sequence/latico-video-poster.jpg`} />}
                {i === 2 && <img alt="Playable frame" className="mb-3 h-36 w-full rounded-lg object-cover object-top" loading="lazy" src={`${MEDIA}/sequence/latico-playable.png`} />}
                <span className="grid size-7 place-items-center rounded-full bg-[#831f80] font-mono text-[12px] font-semibold text-white">{i + 1}</span>
                <h3 className="mt-2 text-[16px] font-semibold">{tt}</h3>
                <p className={`mt-1 text-[13px] leading-5 ${t.muted}`}>{d}</p>
              </div>
            ))}
          </Rail>
          <p className={`mt-3 text-[13px] ${t.muted}`}>Try the full in-game experience with your own product page on <a className={`font-semibold ${t.kicker}`} href={links.playable} target="_blank" rel="noopener noreferrer">Playable DTC</a>. Free.</p>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className={`px-4 py-9 ${t.alt}`}>
        <div className="mx-auto max-w-[480px]">
          <Kicker t={t}>How it works</Kicker>
          <H2>{promise}</H2>
          <p className={`mt-3 text-[15px] leading-6 ${t.muted}`}>Two agents and one map. Then our editors make the ads.</p>
          <div className="mt-5 grid gap-4">
            {agents.map((a, i) => (
              <article key={a.badge} className={`overflow-hidden rounded-2xl border ${t.card}`}>
                <img alt={a.alt} className="h-44 w-full object-cover object-left-top" loading="lazy" src={a.shot} />
                <div className="p-4">
                  <div className="flex items-center gap-2"><span className={`font-mono text-[12px] ${t.kicker}`}>0{i + 1}</span><span className={`rounded-full border border-[#831f80]/30 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.05em] ${t.kicker} ${t.tint}`}>{a.badge}</span></div>
                  <h3 className="mt-2 font-[family-name:var(--font-display)] text-[20px] font-semibold leading-tight">{a.title}</h3>
                  <p className={`mt-2 text-[14px] leading-6 ${t.muted}`}>{a.copy}</p>
                </div>
              </article>
            ))}
          </div>
          <div className={`mt-5 rounded-2xl border-l-4 border-[#831f80] p-4 text-[14px] leading-6 ${t.tint}`}><strong>We don’t stop at recommendations.</strong> Our editors make the ads. You approve every brief and every ad.</div>
          <div className="mt-8">
            <Kicker t={t}>What happens next</Kicker>
            <H2>From sign-up to your first four ads.</H2>
            <ol className="mt-4 grid gap-0">
              {process.map(([tt, d], i) => (
                <li key={tt} className={`grid grid-cols-[2rem_1fr] gap-3 border-l-2 pb-5 pl-0 last:pb-0 ${t.line}`}>
                  <span className="-ml-[9px] grid size-7 place-items-center rounded-full bg-[#831f80] font-mono text-[11px] font-semibold text-white">{i + 1}</span>
                  <div><h3 className="text-[15px] font-semibold leading-tight">{tt}</h3><p className={`mt-1 text-[13px] leading-5 ${t.muted}`}>{d}</p></div>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-8"><Kicker t={t}>Inside the platform</Kicker></div>
          <Rail ariaLabel="Product screenshots">
            {shots.map((s) => (
              <figure key={s.title} className={`m-0 w-[86%] shrink-0 snap-start overflow-hidden rounded-2xl border ${t.card}`}>
                <img alt={s.title} className="h-48 w-full object-cover object-left-top" loading="lazy" src={s.src} />
                <figcaption className="p-3"><span className={`font-mono text-[10px] uppercase tracking-[0.08em] ${t.kicker}`}>{s.label}</span><p className="mt-1 text-[14px] font-semibold">{s.title}</p></figcaption>
              </figure>
            ))}
          </Rail>
        </div>
      </section>

      {/* Case study */}
      <section id="case-study" className="px-4 py-9">
        <div className="mx-auto max-w-[480px]">
          <Kicker t={t}>Case study</Kicker>
          <H2>{caseStudy.title}</H2>
          <p className={`mt-3 text-[15px] leading-6 ${t.muted}`}>{caseStudy.copy}</p>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {caseStudy.stats.map(([num, d]) => <div key={num} className={`rounded-xl border p-3 ${t.card}`}><div className={`font-[family-name:var(--font-display)] text-[22px] font-semibold ${t.kicker}`}>{num}</div><div className={`mt-1 text-[11px] leading-4 ${t.muted}`}>{d}</div></div>)}
          </div>
          <svg viewBox="0 0 300 130" className="mt-4 w-full" role="img" aria-label="Upscale share of daily AppLovin spend grew from 0% to more than 80% between June 26 and September 2, 2026">
            {[0, 50, 100].map((p) => <line key={p} x1="20" x2="280" y1={Y(p)} y2={Y(p)} stroke={t.grid} />)}
            <line x1="20" x2="280" y1={Y(80)} y2={Y(80)} stroke={P} strokeDasharray="4 3" />
            <text x="24" y={Y(80) - 4} fontSize="8" fill={dark ? "#c9a3e0" : P} fontFamily="monospace">80% reference</text>
            <path d={`${line} L280 ${Y(0)} L20 ${Y(0)} Z`} fill={P} opacity="0.2" />
            <path d={line} fill="none" stroke={dark ? "#c9a3e0" : P} strokeWidth="2.5" strokeLinejoin="round" />
            {[["Jun 26", 0], ["Jul 15", 19], ["Aug 5", 40], ["Sep 2", 68]].map(([l, d]) => <text key={l as string} x={X(d as number)} y="124" fontSize="8" fill={dark ? "rgba(255,255,255,0.65)" : "#64758b"} textAnchor="middle" fontFamily="monospace">{l}</text>)}
          </svg>
          <p className={`font-mono text-[10px] leading-4 ${t.muted}`}>Upscale share of daily AppLovin spend. Points between the dates are approximate.</p>
          <h3 className="mt-6 font-[family-name:var(--font-display)] text-[20px] font-semibold leading-tight">Creator demos win. Discount-led ads are the floor.</h3>
          <div className="mt-3 grid gap-2">
            {caseStudy.bars.map(([tt, x]) => (
              <div key={tt} className="grid grid-cols-[112px_1fr_44px] items-center gap-2 text-[12px]">
                <span className="text-right leading-tight">{tt}</span>
                <span className={`relative h-4 overflow-hidden rounded-md ${t.chip}`}><span className="absolute inset-y-0 left-0 rounded-md" style={{ width: `${(x / 1.8) * 100}%`, background: x >= caseStudy.benchmark ? P : t.low }} /><span className={`absolute inset-y-0 border-l-2 border-dashed ${dark ? "border-white/70" : "border-[#021a20]/70"}`} style={{ left: `${(caseStudy.benchmark / 1.8) * 100}%` }} /></span>
                <span className="font-mono">{x.toFixed(2)}%</span>
              </div>
            ))}
          </div>
          <p className={`mt-2 font-mono text-[10px] leading-4 ${t.muted}`}>{caseStudy.note}</p>
        </div>
      </section>

      {/* Showcase */}
      <section className={`border-y px-4 py-9 ${t.line} ${t.alt}`}>
        <div className="mx-auto max-w-[480px]">
          <Kicker t={t}>Showcase</Kicker>
          <H2>Made for AppLovin.</H2>
          <p className={`mt-3 text-[15px] leading-6 ${t.muted}`}>Vertical, captioned, built for sound off. Tap to play.</p>
          <div id="example-rail" /><Rail ariaLabel="AppLovin creatives">
            {showcase.map((c) => <div key={c.slug} className="w-[46%] shrink-0 snap-start"><MobileVideoCard {...c} dark={dark} /></div>)}
          </Rail>
          <a className={`mt-2 inline-block text-[14px] font-semibold ${t.kicker}`} href={links.showcase} target="_blank" rel="noopener noreferrer">See the full showcase →</a>
        </div>
      </section>

      {/* Mid CTA */}
      <section className="px-4 py-8">
        <div className={`mx-auto max-w-[480px] rounded-2xl p-5 ${t.inverse}`}>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] opacity-80">Seen enough?</p>
          <H2>Get your first four AppLovin ads.</H2>
          <p className="mt-2 text-[14px] leading-6 opacity-80">{offer}</p>
          <div className="mt-4 grid gap-2.5"><Cta t={t} href={links.onboarding}>Get started</Cta><a className={`inline-flex w-full items-center justify-center rounded-2xl border px-5 py-4 text-[17px] font-semibold ${dark ? "border-[#021a20]/25" : "border-white/35"}`} href={links.demo} target="_blank" rel="noopener noreferrer">Book a demo</a></div>
        </div>
      </section>

      {/* Calendar */}
      <section className={`px-4 py-9 ${t.alt}`}>
        <div className="mx-auto max-w-[480px]">
          <Kicker t={t}>The creative calendar</Kicker>
          <H2>New ads every 10 to 14 days. A read every week.</H2>
          <p className={`mt-3 text-[15px] leading-6 ${t.muted}`}>AppLovin needs new creative all the time. Creative OS ships four new ads every 10 to 14 days and reads results every week.</p>
          <div className="mt-4 grid grid-cols-4 gap-1.5">
            {[1, 12, 25, 38].map((d, i) => <div key={d} className="rounded-lg bg-[#831f80] p-2 text-white"><div className="font-mono text-[10px] opacity-80">Day {d}</div><div className="text-[12px] font-semibold leading-tight">Batch {i + 1}</div><div className="text-[10px] opacity-80">4 new ads</div></div>)}
          </div>
          <ol className="mt-4 grid gap-2">
            {calendar.map(([tt, d]) => <li key={tt} className={`grid grid-cols-[76px_1fr] gap-3 border-t pt-2 text-[13px] ${t.line}`}><span className={`font-mono text-[11px] font-semibold ${t.kicker}`}>{tt}</span><span className="leading-5">{d}</span></li>)}
          </ol>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-4 py-9">
        <div className="mx-auto max-w-[480px]">
          <Kicker t={t}>Pricing</Kicker>
          <H2>Start with the strategist. Add the team when you want the ads made.</H2>
          <Rail ariaLabel="Plans">
            {pricing.map((p) => (
              <div key={p.name} className={`flex w-[84%] shrink-0 snap-start flex-col rounded-2xl border p-4 ${p.primary ? "border-[#831f80]" : ""} ${t.card}`}>
                <div className="min-h-[2.6em] text-[14px] font-semibold">{p.name}</div>
                <div className="font-[family-name:var(--font-display)] text-[36px] font-semibold tracking-[-0.03em]">{p.price}</div>
                <div className={`font-mono text-[11px] ${t.muted}`}>{p.per}</div>
                {p.includes && <div className={`mt-1.5 self-start rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${t.tint} ${t.kicker}`}>{p.includes}</div>}
                <ul className="mt-3 grid gap-1.5 text-[13px]">{p.features.map((f) => <li key={f} className="flex gap-2"><span className="text-[#0a6d86]">✓</span>{f}</li>)}</ul>
                {p.promo && <p className={`mt-3 rounded-lg p-2.5 text-[12px] font-semibold ${t.tint} ${t.kicker}`}>{p.promo}</p>}
                <div className="mt-auto pt-4"><Cta t={t} href={links.onboarding} ghost={!p.primary}>Get started</Cta></div>
              </div>
            ))}
          </Rail>
          <p className={`mt-2 text-[13px] ${t.muted}`}>AppLovin today. YouTube and CTV on request. Bigger budget? <a className={`font-semibold ${t.kicker}`} href={links.demo} target="_blank" rel="noopener noreferrer">Talk to us</a>.</p>
          <div className="mt-6 grid grid-cols-2 gap-2.5">
            {riskFree.map(([tt, d]) => <div key={tt} className={`rounded-xl border p-3 ${t.card}`}><div className="flex items-center gap-1.5 text-[13px] font-semibold"><span className="text-[#0a6d86]">✓</span>{tt}</div><p className={`mt-1 text-[12px] leading-4 ${t.muted}`}>{d}</p></div>)}
          </div>
          <div className="mt-8">
            <Kicker t={t}>Us vs. them</Kicker>
            <H2>What you get, side by side.</H2>
            <div className="-mx-4 mt-4 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <table className="w-full min-w-[420px] border-collapse text-[12px]">
                <thead><tr>{["", ...compare.cols].map((c, i) => <th key={i} className={`border-b p-2 text-left font-semibold ${t.line} ${i === 1 ? t.kicker : ""} ${i === 0 ? `sticky left-0 z-10 w-[46%] ${t.thead}` : "text-center"}`}>{c}</th>)}</tr></thead>
                <tbody>{compare.rows.map((r) => <tr key={r[0]}>{r.map((cell, i) => <td key={i} className={`border-b p-2 ${t.line} ${i === 0 ? `sticky left-0 z-10 font-medium ${t.thead}` : "text-center"} ${i === 1 ? `font-semibold ${t.kicker} ${t.tint}` : ""}`}>{cell}</td>)}</tr>)}</tbody>
              </table>
            </div>
            <p className={`mt-2 font-mono text-[10px] ${t.muted}`}>“Varies” means it depends on the provider or team. We make no claim about any named company.</p>
          </div>
        </div>
      </section>

      {/* Get started */}
      <section id="start" className={`px-4 py-9 ${t.alt}`}>
        <div className="mx-auto max-w-[480px]">
          <Kicker t={t}>Get started</Kicker>
          <H2>Get your first four AppLovin ads.</H2>
          <p className={`mt-3 text-[15px] leading-6 ${t.muted}`}>One batch of AppLovin ads is included in your first month. Pick the path that fits.</p>
          <div className="mt-4 grid gap-3">
            {paths.map((p) => (
              <a key={p.kicker} href={p.href} target="_blank" rel="noopener noreferrer" className={`block rounded-2xl border p-4 ${p.primary ? "border-[#831f80]" : ""} ${t.card}`}>
                <Kicker t={t}>{p.kicker}</Kicker>
                <h3 className="mt-1 text-[18px] font-semibold">{p.title}</h3>
                <p className={`mt-1 text-[13px] leading-5 ${t.muted}`}>{p.copy}</p>
                <span className={`mt-2 inline-block text-[14px] font-semibold ${t.kicker}`}>{p.cta} →</span>
              </a>
            ))}
          </div>
          <p className={`mt-3 text-[13px] ${t.muted}`}><strong className={dark ? "text-white" : "text-[#021a20]"}>What you bring:</strong> your site and your AppLovin account, or the plan to open one.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-9">
        <div className="mx-auto max-w-[480px]">
          <Kicker t={t}>FAQ</Kicker>
          <H2>Questions, answered.</H2>
          <div className={`mt-4 divide-y rounded-2xl border ${t.card} ${dark ? "divide-white/12" : "divide-[#e2e8f0]"}`}>
            {faq.map(([q, a]) => <details key={q} className="group p-4"><summary className="flex cursor-pointer list-none items-center justify-between text-[15px] font-semibold">{q}<span className={`ml-3 transition group-open:rotate-45 ${t.kicker}`}>+</span></summary><p className={`mt-2 text-[14px] leading-6 ${t.muted}`}>{a}</p></details>)}
          </div>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[13px]">
            <a className={`font-semibold ${t.kicker}`} href={links.beginners} target="_blank" rel="noopener noreferrer">AppLovin for DTC Beginners →</a>
            <a className={`font-semibold ${t.kicker}`} href={links.handbook} target="_blank" rel="noopener noreferrer">Onboarding Handbook →</a>
            <a className={`font-semibold ${t.kicker}`} href={links.bestPractices} target="_blank" rel="noopener noreferrer">Creative Best-Practices Guide →</a>
          </div>
        </div>
      </section>

      {/* Explore more */}
      <section className={`px-4 py-9 ${t.alt}`}>
        <div className="mx-auto max-w-[480px]">
          <Kicker t={t}>Explore more</Kicker>
          <div className="mt-3 grid grid-cols-2 gap-2.5">
            {explore.filter((e) => e.href !== (pg?.path ?? "")).map((e) => (
              <a key={e.label} className={`rounded-2xl border p-3.5 ${t.card}`} href={e.href} target={e.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"><span className="block text-[15px] font-semibold">{e.label} →</span><span className={`mt-1 block text-[12px] leading-4 ${t.muted}`}>{e.sub}</span></a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA + footer */}
      <section className="px-4 pb-28 pt-4">
        <div className={`mx-auto max-w-[480px] rounded-2xl p-6 text-center ${t.inverse}`}>
          <h2 className="font-[family-name:var(--font-display)] text-[26px] font-semibold leading-[1.1] tracking-[-0.02em]">{promise}</h2>
          <p className="mt-3 text-[14px] leading-6 opacity-80">{offer}</p>
          <div className="mt-4 grid gap-2.5"><Cta t={t} href={links.onboarding}>Get started</Cta><a className={`inline-flex w-full items-center justify-center rounded-2xl border px-5 py-4 text-[17px] font-semibold ${dark ? "border-[#021a20]/25" : "border-white/35"}`} href={links.demo} target="_blank" rel="noopener noreferrer">Book a demo</a></div>
        </div>
        <footer className={`mx-auto mt-8 max-w-[480px] text-center text-[11px] leading-5 ${t.muted}`}>
          <img alt="Upscale" className={`mx-auto mb-2 h-5 w-auto ${dark ? "brightness-0 invert" : ""}`} src="/customer-assets/upscale-wordmark.svg" width="136" height="35" />
          © 2026 Upscale AI. Creative OS for AppLovin is Upscale’s AI Creative Strategist. AppLovin is a trademark of its owner; Upscale is an independent creative partner. Platform statistics cited to AppLovin.
          <p className="mt-1 font-mono text-[10px]">{pg ? `${pg.title} · ${theme}` : `Mobile landing page ${n} · ${v.name} · ${theme}`}</p>
        </footer>
      </section>

      {/* Sticky CTA */}
      <div className={`fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur ${t.bar}`} style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
        <div className="mx-auto flex max-w-[480px] items-center gap-3 px-4 py-2.5">
          <p className="min-w-0 flex-1 text-[13px] font-semibold leading-4"><span className="block">One batch of ads included in your first month.</span><span className={`block text-[11px] font-normal ${t.muted}`}>Made by our team with Creative OS.</span></p>
          <a className="shrink-0 rounded-xl bg-[#831f80] px-4 py-2.5 text-[14px] font-semibold text-white" href={links.onboarding} target="_blank" rel="noopener noreferrer">Get started</a>
        </div>
      </div>
    </main>
  );
}
