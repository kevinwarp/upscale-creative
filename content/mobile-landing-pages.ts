// Mobile-specific landing pages built from the applovin-home content (Creative OS for AppLovin).
// Media lives in public/home-assets (copied from the applovin-home site).
export const MEDIA = "/home-assets";

export const links = {
  onboarding: "https://onboarding.upscale.ai/",
  newBrand: "https://new-applovin.upscale.ai/",
  demo: "https://calendly.com/kevin-tvads/applovin-creative-os-demo",
  playable: "https://playabledtc.upscale.ai",
  showcase: "https://applovin.upscale.ai/showcase",
  beginners: "https://hubs.ly/Q04sTTbM0",
  handbook: "https://hubs.ly/Q04sTTdk0",
  bestPractices: "https://storage.googleapis.com/upscale-creative-kalshi/applovin/Upscale_AppLovin_Best_Practices_Guide.pdf",
};

export const offer = "Sign up and our Creative Team will use Creative OS to make you 4 new high-performance AppLovin ads in your first month for free.";
// Icon-format hero lines: value, what we do, risk reversal.
export const heroValue = "4 new high-performance AppLovin ads in your first month, free. Then from $250 a month.";
export const heroWhat = "Creative OS reads your AppLovin results, writes the briefs, and an AI Editor with our human editors makes the ads.";
export const heroRisk = "Approve every brief and every finished ad before it goes live. A new batch every 10 to 14 days. You keep your account and your budget.";
export const promise = "Understand what's working. Find what's missing. Make what wins next.";

export type Creative = { brand: string; slug: string; poster: string; video?: string; meta?: string };

export const showcase: Creative[] = [
  { brand: "Latico Leathers", slug: "latico-leathers", poster: `${MEDIA}/showcase-9x16/latico-leathers-1.jpg`, video: `${MEDIA}/videos/latico-leathers.mp4`, meta: "AppLovin · 9:16 · 45s" },
  { brand: "Jones Road Beauty", slug: "jones-road-beauty", poster: `${MEDIA}/showcase-9x16/jones-road-beauty-1.jpg`, video: `${MEDIA}/videos/jones-road-beauty.mp4`, meta: "AppLovin · 9:16 · 45s" },
  { brand: "Once Upon a Farm", slug: "once-upon-a-farm", poster: `${MEDIA}/showcase-9x16/once-upon-a-farm-1.jpg`, video: `${MEDIA}/videos/once-upon-a-farm.mp4`, meta: "AppLovin · 9:16" },
  { brand: "Swoveralls", slug: "swoveralls", poster: `${MEDIA}/showcase-9x16/swoveralls-1.jpg`, video: `${MEDIA}/videos/swoveralls.mp4`, meta: "AppLovin · 9:16" },
  { brand: "Kalshi", slug: "kalshi", poster: `${MEDIA}/showcase-9x16/kalshi-1.jpg`, video: `${MEDIA}/videos/kalshi.mp4`, meta: "AppLovin · 9:16" },
  { brand: "Rally", slug: "rally", poster: `${MEDIA}/showcase-9x16/rally-1.jpg`, video: `${MEDIA}/videos/rally.mp4`, meta: "AppLovin · 9:16" },
  { brand: "Legion Athletics", slug: "legion-athletics", poster: `${MEDIA}/showcase-9x16/legion-athletics-1.jpg`, video: `${MEDIA}/videos/legion-athletics.mp4`, meta: "AppLovin · 9:16" },
  { brand: "Trove", slug: "trove", poster: `${MEDIA}/showcase-9x16/trove-1.jpg`, video: `${MEDIA}/videos/trove.mp4`, meta: "AppLovin · 9:16" },
];

export const customerCreatives: Record<string, Creative> = {
  branch: { brand: "Branch", slug: "branch", poster: "/customer-assets/wall-branch.jpg", meta: "AppLovin · 9:16" },
  "david-protein": { brand: "David Protein", slug: "david-protein", poster: "/customer-assets/wall-david-protein.jpg", meta: "AppLovin · 9:16" },
  "fast-growing-trees": { brand: "Fast Growing Trees", slug: "fast-growing-trees", poster: `${MEDIA}/showcase-9x16/fast-growing-trees-1.jpg`, meta: "AppLovin · 9:16" },
  "jones-road": showcase[1],
  "once-upon-a-farm": showcase[2],
};

export const quotes = [
  { text: "AppLovin is a real ad platform. I spent $4M of our own money in Q4 and it matched Facebook ROAS.", who: "Ridge · Sean Frank, CEO", tag: "Not sponsored" },
  { text: "Scaled AppLovin from zero to about $80k/day in seven days, and about $1M in the first 30.", who: "Cuddle Clones · Operator interview", tag: "Self-reported" },
  { text: "Creative production capacity, not platform performance, was the immediate bottleneck to scaling.", who: "PROOF Wallets · Founders", tag: "Sponsored episode" },
];

export const platformStats = [
  ["30s+", "median screen time per impression"],
  ["81%", "of top-video spend is on videos over 30 seconds"],
  ["+64%", "Day-0 ROAS with captions"],
  ["107 → 300+", "monthly video uploads as advertisers scale"],
] as const;

export const applovinLogos = ["quince", "prose", "wayfair", "caraway", "hexclad", "olipop", "bombas", "gymshark", "honeylove", "blueland", "immi"].map((s) => ({ name: s, src: `${MEDIA}/logos/${s}.${["bombas", "gymshark", "hexclad", "prose", "quince", "wayfair"].includes(s) ? "svg" : "png"}` }));

export const sequence = [
  ["Mid-game", "A level ends. The player opts in to watch an ad for a bonus. You are not fighting a feed for attention."],
  ["Portrait video", "Full screen, 9:16, up to 60 seconds, unskippable for the first five."],
  ["Playable", "The shopper taps, picks and plays. Attention turns into an intentional click."],
  ["End card", "Product, offer and one button. The moment that decides the visit."],
  ["Back to the game", "A short countdown, then play resumes. The brand had 30 seconds or more."],
] as const;

export const agents = [
  { badge: "Performance Agent", title: "Understand exactly what's working", copy: "Creative OS connects to your AppLovin data and explains why each ad performed: product, message, hook, format, offer, persona and narrative. It says which ads to scale, which are fatiguing, which to pause, and what to make next.", shot: `${MEDIA}/shots/upscale-vs-non.jpg`, alt: "Insights view comparing Upscale vs non-Upscale creative performance" },
  { badge: "Creative Agent", title: "Turn performance data into new creative", copy: "The Creative Agent takes what your ads have taught it and writes the next concepts and briefs around the patterns that drive results: winners remixed, underperformers replaced, gaps turned into new concepts.", shot: `${MEDIA}/shots/creative-agent-briefs.jpg`, alt: "Creative Agent brief list" },
  { badge: "Creative Matrix", title: "Go beyond individual ads", copy: "The Creative Matrix maps the personas you speak to against the creative types you run, so you can see what performs today and where your strategy has holes.", shot: `${MEDIA}/shots/matrix-strategy.png`, alt: "Creative Matrix: personas by creative type" },
];

export const shots = [
  { label: "Performance Agent · Insights", title: "See the lift, not just the spend", src: `${MEDIA}/shots/upscale-vs-non.jpg` },
  { label: "Performance Agent · Chat", title: "Recommendations you can act on", src: `${MEDIA}/shots/perf-agent.jpg` },
  { label: "Performance Agent · Insights", title: "Spend and ROAS, day by day", src: `${MEDIA}/shots/insights-performance.jpg` },
  { label: "Creative Agent · Brief", title: "A brief, not a vague idea", src: `${MEDIA}/shots/brief-detail.jpg` },
  { label: "Creative Agent · Brief", title: "Scene by scene, ready to cut", src: `${MEDIA}/shots/brief-scenes.jpg` },
];

export const caseStudy = {
  title: "How Upscale built an AppLovin creative engine for Latico Leathers.",
  copy: "Latico brought its brand and its AppLovin account. Creative OS read what was working, wrote the next briefs, and our Creative Team shipped six batches of channel-specific creative. Upscale creative now carries more than 80% of daily spend in the account.",
  stats: [["80%+", "of daily AppLovin spend on Upscale creative"], ["6", "batches, Jun 26 to Sep 2"], ["+19%", "account CTR vs. the prior 90 days"]] as const,
  share: [[0, 0], [7, 18], [19, 30], [26, 48], [40, 65], [54, 76], [68, 84]] as const,
  bars: [["Creator demo (polished)", 1.57], ["Captioned creator", 1.16], ["Unboxing / packing", 1.15], ["Evergreen studio", 1.13], ["UGC creator", 1.03], ["Produced montage", 0.97], ["Discount-led sale", 0.63]] as const,
  benchmark: 1.09,
  note: "Click-through rate by creative type from a frame-by-frame teardown of 58 Latico creatives. Dashed line: the 1.09% account average.",
};

// What happens after sign-up, as a numbered sequence (Icon-style "How it works" steps). Facts from the homepage.
export const process = [
  ["Connect your account", "Your brand's site and your AppLovin account, or the intent to open one. Onboarding takes minutes."],
  ["Creative OS reads your results", "The Performance Agent explains why each ad performed and what to make next."],
  ["Briefs are drafted", "The Creative Agent writes the next concepts and briefs around the patterns that drive results."],
  ["You approve the briefs", "Every brief comes back to you before anything is made."],
  ["The ads get made", "An AI Editor and our human editors make four AppLovin ads. The first four are free."],
  ["You approve and launch", "Every finished creative is approved by you before it goes live. A new batch every 10 to 14 days."],
] as const;

export const riskFree = [
  ["Free first batch", "Your first four ads are included in month one."],
  ["You approve everything", "Every brief and every finished ad, before it goes live."],
  ["You keep your account", "Your AppLovin campaigns and budget stay yours. We don't run your media."],
  ["Month to month", "Per channel. Add the Creative Team when you want the ads made."],
] as const;

// Generic comparison, no competitor names (public-content rule).
export const compare = {
  cols: ["Creative OS", "Typical agency", "In-house"],
  rows: [
    ["Reads your AppLovin data, creative by creative", "✓", "Reports", "Varies"],
    ["Says which ads to scale, pause or replace", "✓", "Varies", "Varies"],
    ["Persona × creative-type map of your strategy", "✓", "—", "—"],
    ["New batch of four ads every 10 to 14 days", "✓", "Varies", "Varies"],
    ["You approve every brief and every ad", "✓", "Varies", "✓"],
    ["First four ads free", "✓", "—", "—"],
    ["Starts at", "$250/mo", "Retainer", "Headcount"],
  ],
};

export const calendar = [
  ["Days 1–3", "Launch the batch. Verify tracking, delivery and the full ad experience."],
  ["Days 4–7", "First read. Creative OS flags what to scale, what is fatiguing, what to pause."],
  ["Days 8–12", "Next batch in production, built from what the last one taught us."],
  ["Repeat", "Every batch starts smarter than the one before."],
] as const;

export const pricing = [
  { name: "Creative Strategist", price: "$250", per: "per month, per channel", features: ["Performance Agent with Insights", "Creative Agent", "Creative Matrix (persona × creative type)", "Slack performance and creative reports"], promo: "Launch promo: your first four ads are included in month one.", primary: true },
  { name: "Creative Strategist + Creative Team", price: "$1,000", per: "per month, per channel", includes: "Includes 4 approved creatives", features: ["Everything in Creative Strategist", "One batch every month", "AI Editor + human editors make the ads", "$250 per ad"] },
  { name: "Creative Strategist + Creative Team, three batches", price: "$2,000", per: "per month, per channel", includes: "Includes 12 approved creatives", features: ["Everything in Creative Strategist", "Three batches every month", "AI Editor + human editors make and review", "$167 per ad"] },
];

export const paths = [
  { kicker: "Already on AppLovin", title: "Connect your account.", copy: "Connect your AppLovin account and your brand. Creative OS reads what is working, and your first four ads start this month.", cta: "Start onboarding", href: links.onboarding, primary: true },
  { kicker: "New to AppLovin", title: "Launch with us.", copy: "Bring your brand. We set up the AppLovin account with you, and Creative OS plans the first creative before you spend.", cta: "Launch on AppLovin", href: links.newBrand },
  { kicker: "Want to see it first", title: "Book a demo.", copy: "Twenty minutes with the team. We walk through Creative OS on a live account and answer the hard questions.", cta: "Book a demo", href: links.demo },
];

export const faq = [
  ["What is Creative OS?", "Upscale's AI Creative Strategist for AppLovin. It learns your brand, reads your AppLovin performance, explains why creative is working, and turns that into new briefs and ads."],
  ["Do you run our media?", "No. You keep your AppLovin account, campaigns and budget. Creative OS plans and makes creative. You approve and launch."],
  ["Who makes the ads?", "An AI Editor and our human editors, using Creative OS. Every brief and every finished ad comes back to you for approval before delivery."],
  ["What do you need from us?", "Your brand's site and access to your AppLovin account. New to AppLovin? Choose that path and we set it up with you."],
  ["How fast can we start?", "Onboarding takes minutes. Your first four ads are made in month one."],
] as const;

export type Variant = {
  n: number;
  slug: string;
  name: string;
  kicker: string;
  headline: string;
  sub: string;
  lead: Creative;
  customer?: string;
};

export const variants: Variant[] = [
  { n: 1, slug: "product-led", name: "Product-led", kicker: "Introducing", headline: "Creative OS for AppLovin", sub: "Upscale's AI Creative Strategist reads your AppLovin results, explains why each ad performed, and turns that into the next ads to make.", lead: showcase[0] },
  { n: 2, slug: "pain-led", name: "Pain-led", kicker: "The creative bottleneck", headline: "Your AppLovin creative is running out.", sub: "AppLovin needs a steady supply of new creative and a clear read on what is driving results. Creative OS keeps four new ads moving every 10 to 14 days, built from what your last batch taught it.", lead: showcase[1] },
  { n: 3, slug: "outcome-led", name: "Outcome-led", kicker: "The outcome", headline: "80% of daily AppLovin spend, on creative that works.", sub: "That is where Latico Leathers landed after six batches from Creative OS and our Creative Team. Start with four ads, free, and see what the account does.", lead: showcase[0] },
  { n: 4, slug: "workflow-led", name: "Workflow-led", kicker: "One loop", headline: "From your AppLovin data to your next four ads.", sub: "Run creative, learn what works, make better creative, repeat. The Performance Agent reads the results, the Creative Agent drafts the briefs, and an AI Editor with our human editors makes the ads.", lead: showcase[2] },
  { n: 5, slug: "proof-led", name: "Proof-led", kicker: "What wins on AppLovin", headline: "Creator demos win. Discount-led ads are the floor.", sub: "From a frame-by-frame teardown of 58 AppLovin creatives: 1.57% CTR for polished creator demos against 0.63% for discount-led. Creative OS finds that pattern in your account, then makes the ads.", lead: showcase[0] },
  { n: 6, slug: "customer-branch", name: "Branch", customer: "Branch", kicker: "Made for Branch", headline: "Branch, meet your next four AppLovin ads.", sub: "Creative OS reads what is already working for Branch, writes the briefs, and our Creative Team makes four AppLovin ads in the first month, free.", lead: customerCreatives.branch },
  { n: 7, slug: "customer-david-protein", name: "David Protein", customer: "David Protein", kicker: "Made for David Protein", headline: "David, meet your next four AppLovin ads.", sub: "Creative OS reads what is already working for David Protein, writes the briefs, and our Creative Team makes four AppLovin ads in the first month, free.", lead: customerCreatives["david-protein"] },
  { n: 8, slug: "customer-fast-growing-trees", name: "Fast Growing Trees", customer: "Fast Growing Trees", kicker: "Made for Fast Growing Trees", headline: "Fast Growing Trees, meet your next four AppLovin ads.", sub: "Creative OS reads what is already working for Fast Growing Trees, writes the briefs, and our Creative Team makes four AppLovin ads in the first month, free.", lead: customerCreatives["fast-growing-trees"] },
  { n: 9, slug: "customer-jones-road", name: "Jones Road", customer: "Jones Road Beauty", kicker: "Made for Jones Road", headline: "Jones Road, meet your next four AppLovin ads.", sub: "Jones Road Beauty is already live on AppLovin with Upscale creative. Creative OS reads what is working, writes the next briefs, and our Creative Team makes the next four, free.", lead: customerCreatives["jones-road"] },
  { n: 10, slug: "customer-once-upon-a-farm", name: "Once Upon a Farm", customer: "Once Upon a Farm", kicker: "Made for Once Upon a Farm", headline: "Once Upon a Farm, meet your next four AppLovin ads.", sub: "Once Upon a Farm is already live on AppLovin with Upscale creative. Creative OS reads what is working, writes the next briefs, and our Creative Team makes the next four, free.", lead: customerCreatives["once-upon-a-farm"] },
];

export const getVariant = (n: number) => {
  const v = variants.find((x) => x.n === n);
  if (!v) throw new Error(`Unknown mobile landing page ${n}`);
  return v;
};


// ---- Subpages (Icon's /formats, /admaker-2.0, /customers counterparts) ----
export type Page = "landing" | "formats" | "creative-os" | "customers";

export const pages: Record<Exclude<Page, "landing">, { path: string; kicker: string; title: string; value: string; what: string }> = {
  formats: { path: "/mobile-formats", kicker: "AppLovin best practices", title: "Formats", value: "Seven creative types, ranked by what actually clicks on AppLovin.", what: "From a frame-by-frame teardown of 58 AppLovin creatives and Upscale's AppLovin best-practices guide. Creative OS finds these patterns in your account, then makes the ads." },
  "creative-os": { path: "/mobile-creative-os", kicker: "The product", title: "Creative OS", value: "Upscale's AI Creative Strategist for AppLovin. Two agents, one map, and the editors who make the ads.", what: "It reads your AppLovin results, explains why each ad performed, writes the next briefs, and maps your personas against creative types so you can see where the gaps are." },
  customers: { path: "/mobile-customers", kicker: "Customers", title: "Made for AppLovin.", value: "21 creatives across 9 brands, all vertical, captioned, built for sound off, with the offer in the last five seconds.", what: "Every one was made by our Creative Team with Creative OS for AppLovin. Tap any card to play." },
};

// Creative types from the Latico teardown (58 creatives, weighted CTR vs a 1.09% account benchmark).
export const formats: { name: string; ctr: number; what: string; rule: string; example?: string }[] = [
  { name: "Creator demo (polished)", ctr: 1.57, what: "One real creator talking to camera, demoing the product, with a clean edit.", rule: "Question or curiosity-gap hook in the first two seconds, high-contrast product in the opening frames, a specific use-case moment, and give the demo room: about 45 seconds.", example: "latico-leathers" },
  { name: "Captioned creator", ctr: 1.16, what: "Creator to camera with bold kinetic captions carrying the message sound-off.", rule: "Captions with hierarchy, never a dense paragraph. Most viewers watch muted.", example: "jones-road-beauty" },
  { name: "Unboxing / packing", ctr: 1.15, what: "In-situ unboxing or packing the product, long-form.", rule: "Curiosity carries the first half; the long demo earns the click." },
  { name: "Evergreen studio", ctr: 1.13, what: "The workhorse: studio product demo with a feature-to-benefit structure.", rule: "Reliable at scale. Close with proof, not a discount." },
  { name: "UGC creator", ctr: 1.03, what: "Selfie-style creator content, high variance.", rule: "Wins when the creator has one strong single-feature hook; loses when the sign-off is weak." },
  { name: "Produced montage", ctr: 0.97, what: "Agency-style montage with music, press logos and mixed settings.", rule: "Reads as an ad. Over-production dilutes the native feel." },
  { name: "Discount-led sale", ctr: 0.63, what: "The offer as the hook.", rule: "The account floor. Keep the offer on the end card; never make the discount the hook." },
];

export const winningDna = [
  "One real creator talking to camera, demoing the product. Creator beats polished montage beats no human.",
  "A question or curiosity-gap hook in the first two seconds. Open a loop, never a feature or a price.",
  "High-contrast product in the opening frames: the thumb-stop.",
  "Bold kinetic captions with hierarchy, never a dense paragraph.",
  "A specific use-case moment beats a feature list.",
  "Give the demo room. Longer creator demos beat 26 to 30 second montages.",
  "Proof as the closer: reviews, the award, the number.",
] as const;

export const losingDna = [
  "No human, music-only product montage.",
  "Over-produced agency montage with press logos as the whole creative.",
  "Dense caption paragraphs, unreadable sound-off.",
  "Compressing the cut to 26 to 30 seconds.",
  "Discount as the hook. Dedicated sale creatives are the floor.",
] as const;

export const attentionRule = "On AppLovin the viewer is most locked in at the end, right as the close button appears. Put the offer, the proof and the button in the final five seconds.";

export const showcaseAll = [
  { brand: "Latico Leathers", slug: "latico-leathers", posters: [`${MEDIA}/showcase-9x16/latico-leathers-1.jpg`, `${MEDIA}/showcase-9x16/latico-leathers-2.jpg`, `${MEDIA}/showcase-9x16/latico-leathers-3.jpg`, `${MEDIA}/showcase-9x16/latico-leathers.jpg`], video: `${MEDIA}/videos/latico-leathers.mp4` },
  { brand: "Once Upon a Farm", slug: "once-upon-a-farm", posters: [`${MEDIA}/showcase-9x16/once-upon-a-farm-1.jpg`, `${MEDIA}/showcase-9x16/once-upon-a-farm-2.jpg`, `${MEDIA}/showcase-9x16/once-upon-a-farm-3.jpg`, `${MEDIA}/showcase-9x16/once-upon-a-farm.jpg`], video: `${MEDIA}/videos/once-upon-a-farm.mp4` },
  { brand: "Swoveralls", slug: "swoveralls", posters: [`${MEDIA}/showcase-9x16/swoveralls-1.jpg`, `${MEDIA}/showcase-9x16/swoveralls-2.jpg`, `${MEDIA}/showcase-9x16/swoveralls-3.jpg`, `${MEDIA}/showcase-9x16/swoveralls.jpg`], video: `${MEDIA}/videos/swoveralls.mp4` },
  { brand: "Kalshi", slug: "kalshi", posters: [`${MEDIA}/showcase-9x16/kalshi-1.jpg`, `${MEDIA}/showcase-9x16/kalshi-2.jpg`, `${MEDIA}/showcase-9x16/kalshi-3.jpg`, `${MEDIA}/showcase-9x16/kalshi.jpg`], video: `${MEDIA}/videos/kalshi.mp4` },
  { brand: "Rally", slug: "rally", posters: [`${MEDIA}/showcase-9x16/rally-1.jpg`, `${MEDIA}/showcase-9x16/rally-2.jpg`, `${MEDIA}/showcase-9x16/rally-3.jpg`, `${MEDIA}/showcase-9x16/rally.jpg`], video: `${MEDIA}/videos/rally.mp4` },
  { brand: "Jones Road Beauty", slug: "jones-road-beauty", posters: [`${MEDIA}/showcase-9x16/jones-road-beauty-1.jpg`, `${MEDIA}/showcase-9x16/jones-road-beauty-2.jpg`, `${MEDIA}/showcase-9x16/jones-road-beauty.jpg`], video: `${MEDIA}/videos/jones-road-beauty.mp4` },
  { brand: "Fast Growing Trees", slug: "fast-growing-trees", posters: [`${MEDIA}/showcase-9x16/fast-growing-trees-1.jpg`, `${MEDIA}/showcase-9x16/fast-growing-trees-2.jpg`], video: undefined },
  { brand: "Legion Athletics", slug: "legion-athletics", posters: [`${MEDIA}/showcase-9x16/legion-athletics-1.jpg`, `${MEDIA}/showcase-9x16/legion-athletics.jpg`], video: `${MEDIA}/videos/legion-athletics.mp4` },
  { brand: "Trove", slug: "trove", posters: [`${MEDIA}/showcase-9x16/trove-1.jpg`, `${MEDIA}/showcase-9x16/trove.jpg`], video: `${MEDIA}/videos/trove.mp4` },
] as const;

export const explore = [
  { label: "Formats", sub: "AppLovin best practices and examples", href: "/mobile-formats" },
  { label: "Creative OS", sub: "The product: two agents and one map", href: "/mobile-creative-os" },
  { label: "Customers", sub: "The 9:16 showcase, 21 creatives", href: "/mobile-customers" },
  { label: "Pricing", sub: "From $250 a month, first four ads free", href: "#pricing" },
  { label: "Get started", sub: "Connect your account or launch with us", href: "#start" },
  { label: "Book a demo", sub: "Twenty minutes on a live account", href: "https://calendly.com/kevin-tvads/applovin-creative-os-demo" },
] as const;
