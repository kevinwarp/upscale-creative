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

export const offer = "Sign up and our Creative Team will use Creative OS to make you 4 new high-performance AppLovin ads, included in your first batch.";
// Icon-format hero lines: value, what we do, risk reversal.
export const heroValue = "Four new AppLovin ads, included in your first batch. From $250 a month.";
export const heroWhat = "Creative OS reads your AppLovin results, writes the briefs, and our editors make the ads.";
export const heroRisk = "You approve every brief and every ad. New ads every 10 to 14 days. You keep your account and your budget.";
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
  ["Mid-game", "A level ends. The player chooses to watch an ad for a bonus."],
  ["Portrait video", "Full screen, 9:16, up to 60 seconds. The first five cannot be skipped."],
  ["Playable", "The shopper taps, picks and plays."],
  ["End card", "Product, offer, one button."],
  ["Back to the game", "A short countdown, then play resumes."],
] as const;

export const agents = [
  { badge: "Performance Agent", title: "Understand exactly what's working", copy: "Connects to your AppLovin data and explains why each ad performed. Then it tells you what to scale, what to pause, and what to make next.", shot: `${MEDIA}/shots/upscale-vs-non.jpg`, alt: "Insights view comparing Upscale vs non-Upscale creative performance" },
  { badge: "Creative Agent", title: "Turn performance data into new creative", copy: "Takes what your ads taught it and writes the next briefs. Winners remixed, losers replaced, gaps filled.", shot: `${MEDIA}/shots/creative-agent-briefs.jpg`, alt: "Creative Agent brief list" },
  { badge: "Creative Matrix", title: "Go beyond individual ads", copy: "Maps your personas against your creative types. You see what works today and where the holes are.", shot: `${MEDIA}/shots/matrix-strategy.png`, alt: "Creative Matrix: personas by creative type" },
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
  copy: "Latico brought its brand and its AppLovin account. Creative OS read what worked, wrote the briefs, and our team shipped six batches. Upscale creative now runs on more than 80% of daily spend.",
  stats: [["80%+", "of daily AppLovin spend on Upscale creative"], ["6", "batches, Jun 26 to Sep 2"], ["+19%", "account CTR vs. the prior 90 days"]] as const,
  share: [[0, 0], [7, 18], [19, 30], [26, 48], [40, 65], [54, 76], [68, 84]] as const,
  bars: [["Creator demo (polished)", 1.57], ["Captioned creator", 1.16], ["Unboxing / packing", 1.15], ["Evergreen studio", 1.13], ["UGC creator", 1.03], ["Produced montage", 0.97], ["Discount-led sale", 0.63]] as const,
  benchmark: 1.09,
  note: "CTR by creative type across 58 Latico ads. Dashed line: the 1.09% account average.",
};

// What happens after sign-up, as a numbered sequence (Icon-style "How it works" steps). Facts from the homepage.
export const process = [
  ["Connect your account", "Your site and your AppLovin account. It takes minutes."],
  ["Creative OS reads your results", "It explains why each ad performed and what to make next."],
  ["Briefs are drafted", "The Creative Agent writes the next briefs from what works."],
  ["You approve the briefs", "Nothing gets made until you say so."],
  ["The ads get made", "Our editors make four AppLovin ads. They come as one batch."],
  ["You approve and launch", "You approve every ad before it goes live. Then a new batch every 10 to 14 days."],
] as const;

export const riskFree = [
  ["Four ads per batch", "Your first batch includes four approved ads."],
  ["You approve everything", "Every brief and every ad."],
  ["You keep your account", "Your campaigns and budget stay yours."],
  ["Month to month", "Per channel. Add the team when you want the ads made."],
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
    ["Four ads in the first batch", "✓", "—", "—"],
    ["Starts at", "$250/mo", "Retainer", "Headcount"],
  ],
};

export const calendar = [
  ["Days 1–3", "Launch the batch. Check tracking and delivery."],
  ["Days 4–7", "First read. What to scale, what to pause."],
  ["Days 8–12", "Next batch in production."],
  ["Repeat", "Every batch starts smarter than the one before."],
] as const;

export const pricing = [
  { name: "Creative Strategist", price: "$250", per: "per month, per channel", features: ["Performance Agent with Insights", "Creative Agent", "Creative Matrix (persona × creative type)", "Slack performance and creative reports"], promo: "Add the Creative Team to get your first batch of four ads made.", primary: true },
  { name: "Creative Strategist + Creative Team", price: "$1,000", per: "per month, per channel", includes: "Includes 4 approved creatives", features: ["Everything in Creative Strategist", "One batch every month", "AI Editor + human editors make the ads", "$250 per ad"] },
  { name: "Creative Strategist + Creative Team, three batches", price: "$2,000", per: "per month, per channel", includes: "Includes 12 approved creatives", features: ["Everything in Creative Strategist", "Three batches every month", "AI Editor + human editors make and review", "$167 per ad"] },
];

export const paths = [
  { kicker: "Already on AppLovin", title: "Connect your account.", copy: "Connect your AppLovin account and your brand. Your first four ads start this month.", cta: "Start onboarding", href: links.onboarding, primary: true },
  { kicker: "New to AppLovin", title: "Launch with us.", copy: "Bring your brand. We set up AppLovin with you and plan the first creative before you spend.", cta: "Launch on AppLovin", href: links.newBrand },
  { kicker: "Want to see it first", title: "Book a demo.", copy: "Twenty minutes with the team, on a live account.", cta: "Book a demo", href: links.demo },
];

export const faq = [
  ["What is Creative OS?", "Upscale's AI Creative Strategist for AppLovin. It reads your results, explains what works, and turns that into briefs and ads."],
  ["Do you run our media?", "No. You keep your account, campaigns and budget. We plan and make the creative. You approve and launch."],
  ["Who makes the ads?", "An AI Editor and our human editors. You approve every brief and every ad."],
  ["What do you need from us?", "Your site and access to your AppLovin account. New to AppLovin? We set it up with you."],
  ["How fast can we start?", "Onboarding takes minutes. Your first batch of four ads follows."],
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
  { n: 1, slug: "product-led", name: "Product-led", kicker: "Introducing", headline: "Creative OS for AppLovin", sub: "It reads your AppLovin results, explains why each ad worked, and makes the next ones.", lead: showcase[0] },
  { n: 2, slug: "pain-led", name: "Pain-led", kicker: "The creative bottleneck", headline: "Your AppLovin creative is running out.", sub: "AppLovin needs new creative all the time. Creative OS keeps four new ads coming every 10 to 14 days, built from what your last batch taught it.", lead: showcase[1] },
  { n: 3, slug: "outcome-led", name: "Outcome-led", kicker: "The outcome", headline: "80% of daily AppLovin spend, on creative that works.", sub: "That is where Latico Leathers landed after six batches. Start with your first batch of four.", lead: showcase[0] },
  { n: 4, slug: "workflow-led", name: "Workflow-led", kicker: "One loop", headline: "From your AppLovin data to your next four ads.", sub: "Run creative. Learn what works. Make better creative. Repeat. The Performance Agent reads results, the Creative Agent writes briefs, and our editors make the ads.", lead: showcase[2] },
  { n: 5, slug: "proof-led", name: "Proof-led", kicker: "What wins on AppLovin", headline: "Creator demos win. Discount-led ads are the floor.", sub: "In a teardown of 58 AppLovin ads, polished creator demos got 1.57% CTR. Discount-led ads got 0.63%. Creative OS finds what wins in your account, then makes it.", lead: showcase[0] },
  { n: 6, slug: "customer-branch", name: "Branch", customer: "Branch", kicker: "Made for Branch", headline: "Branch, meet your next four AppLovin ads.", sub: "Creative OS reads what already works for Branch, writes the briefs, and our team makes four AppLovin ads in your first batch.", lead: customerCreatives.branch },
  { n: 7, slug: "customer-david-protein", name: "David Protein", customer: "David Protein", kicker: "Made for David Protein", headline: "David, meet your next four AppLovin ads.", sub: "Creative OS reads what already works for David Protein, writes the briefs, and our team makes four AppLovin ads in your first batch.", lead: customerCreatives["david-protein"] },
  { n: 8, slug: "customer-fast-growing-trees", name: "Fast Growing Trees", customer: "Fast Growing Trees", kicker: "Made for Fast Growing Trees", headline: "Fast Growing Trees, meet your next four AppLovin ads.", sub: "Creative OS reads what already works for Fast Growing Trees, writes the briefs, and our team makes four AppLovin ads in your first batch.", lead: customerCreatives["fast-growing-trees"] },
  { n: 9, slug: "customer-jones-road", name: "Jones Road", customer: "Jones Road Beauty", kicker: "Made for Jones Road", headline: "Jones Road, meet your next four AppLovin ads.", sub: "Jones Road Beauty is already live on AppLovin with Upscale creative. The next four come as one batch.", lead: customerCreatives["jones-road"] },
  { n: 10, slug: "customer-once-upon-a-farm", name: "Once Upon a Farm", customer: "Once Upon a Farm", kicker: "Made for Once Upon a Farm", headline: "Once Upon a Farm, meet your next four AppLovin ads.", sub: "Once Upon a Farm is already live on AppLovin with Upscale creative. The next four come as one batch.", lead: customerCreatives["once-upon-a-farm"] },
];

export const getVariant = (n: number) => {
  const v = variants.find((x) => x.n === n);
  if (!v) throw new Error(`Unknown mobile landing page ${n}`);
  return v;
};


// ---- Subpages (Icon's /formats, /admaker-2.0, /customers counterparts) ----
export type Page = "landing" | "formats" | "creative-os" | "customers";

export const pages: Record<Exclude<Page, "landing">, { path: string; kicker: string; title: string; value: string; what: string }> = {
  formats: { path: "/mobile-formats", kicker: "AppLovin best practices", title: "Formats", value: "Seven creative types, ranked by what clicks on AppLovin.", what: "From a teardown of 58 AppLovin ads and our best-practices guide." },
  "creative-os": { path: "/mobile-creative-os", kicker: "The product", title: "Creative OS", value: "Upscale's AI Creative Strategist for AppLovin.", what: "It reads your results, writes the briefs, and shows where your strategy has gaps. Then our editors make the ads." },
  customers: { path: "/mobile-customers", kicker: "Customers", title: "Made for AppLovin.", value: "21 creatives, 9 brands, all made for AppLovin.", what: "Vertical, captioned, built for sound off. Tap any card to play." },
};

// Creative types from the Latico teardown (58 creatives, weighted CTR vs a 1.09% account benchmark).
export const formats: { name: string; ctr: number; what: string; rule: string; example?: string }[] = [
  { name: "Creator demo (polished)", ctr: 1.57, what: "One real creator on camera, showing the product.", rule: "Open with a question. Show the product in the first frames. Give the demo about 45 seconds.", example: "latico-leathers" },
  { name: "Captioned creator", ctr: 1.16, what: "Creator on camera with bold captions.", rule: "Big, short captions. Most people watch muted.", example: "jones-road-beauty" },
  { name: "Unboxing / packing", ctr: 1.15, what: "Unboxing or packing the product, at length.", rule: "Curiosity carries the first half. The long demo earns the click." },
  { name: "Evergreen studio", ctr: 1.13, what: "The studio product demo. Feature, then benefit.", rule: "Reliable at scale. Close with proof, not a discount." },
  { name: "UGC creator", ctr: 1.03, what: "Selfie-style creator content. Results vary.", rule: "Wins with one strong hook. Loses with a weak sign-off." },
  { name: "Produced montage", ctr: 0.97, what: "Montage with music and press logos.", rule: "Reads as an ad. Less polish works better." },
  { name: "Discount-led sale", ctr: 0.63, what: "The discount as the hook.", rule: "The floor. Keep the offer on the end card." },
];

export const winningDna = [
  "One real creator on camera, showing the product.",
  "A question in the first two seconds. Never a feature or a price.",
  "The product, in high contrast, in the first frames.",
  "Big, short captions. Never a paragraph.",
  "One real use-case moment beats a feature list.",
  "Give the demo room. 45 seconds beats 30.",
  "Close with proof: reviews, the award, the number.",
] as const;

export const losingDna = [
  "No person, just music and product.",
  "Press logos and polish as the whole ad.",
  "Caption paragraphs nobody can read muted.",
  "Cutting the ad down to 30 seconds.",
  "The discount as the hook.",
] as const;

export const attentionRule = "Viewers are most locked in right before the close button appears. Put the offer, the proof and the button in the last five seconds.";

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
  { label: "Pricing", sub: "From $250 a month, four ads per batch", href: "#pricing" },
  { label: "Get started", sub: "Connect your account or launch with us", href: "#start" },
  { label: "Book a demo", sub: "Twenty minutes on a live account", href: "https://calendly.com/kevin-tvads/applovin-creative-os-demo" },
] as const;
