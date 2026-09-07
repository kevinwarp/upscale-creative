export type IconAgencyTemplateContent = {
  templateNotice: string;
  brand: { name: string; descriptor: string };
  navigation: { login: string; primaryCta: string };
  hero: {
    eyebrow: string;
    headline: string;
    angleLine?: string;
    subheadline?: string;
    description: string;
    positioningLine?: string;
    primaryCta: string;
    secondaryCta: string;
    assurances: string[];
  };
  creativeExamples: Array<{
    eyebrow: string;
    title: string;
    detail: string;
    image?: string;
    alt: string;
  }>;
  customerSpotlight?: {
    name: string;
    category: string;
    sourceLabel: string;
  };
  customerLogos?: Array<{
    name: string;
    image: string;
  }>;
  gateways: Array<{ label: string; kicker: string; href: string; tone: string }>;
  formats: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{ name: string; hook: string; note: string; tone: string; image?: string }>;
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    steps: Array<{ title: string; description: string; timing: string }>;
  };
  pricing: {
    eyebrow: string;
    title: string;
    description: string;
    tiers: Array<{
      name: string;
      price: string;
      cadence: string;
      description: string;
      bullets: string[];
      cta: string;
      featured?: boolean;
      action: "start" | "director";
    }>;
    doneForYou: string[];
    riskFree: string[];
  };
  customers: {
    eyebrow: string;
    title: string;
    description: string;
    stats: Array<{ value: string; label: string }>;
    stories: Array<{ name: string; category: string; quote: string; result: string; tone: string }>;
  };
  products: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{ name: string; label: string; description: string; ui: string[]; tone: string }>;
  };
  comparison: {
    eyebrow: string;
    title: string;
    description: string;
    columns: string[];
    rows: Array<{ feature: string; values: string[] }>;
    footnote: string;
  };
  founder: {
    eyebrow: string;
    title: string;
    story: string;
    quote: string;
    attribution: string;
    milestones: string[];
  };
  investors: {
    eyebrow: string;
    title: string;
    description: string;
    names: string[];
  };
  partner: {
    eyebrow: string;
    title: string;
    description: string;
    bounty: string;
    revenueShare: string;
    steps: string[];
    formats: string[];
    cta: string;
  };
  noveltyPricing: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{ name: string; price: string; note: string; tone: string }>;
  };
  explore: {
    eyebrow: string;
    title: string;
    items: Array<{ label: string; description: string; href: string }>;
  };
  finalCta: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  dialogs: {
    start: {
      title: string;
      description: string;
      button: string;
      successTitle: string;
      successDescription: string;
    };
    director: {
      title: string;
      description: string;
      button: string;
      successTitle: string;
      successDescription: string;
    };
  };
};
