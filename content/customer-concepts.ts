import { upscaleApplovinCreativeOsContent } from "@/content/upscale-applovin-creative-os";
import type { IconAgencyTemplateContent } from "@/content/icon-agency-template";

export type CustomerConcept = {
  slug: string;
  name: string;
  category: string;
  coreAngle: string;
  creativeExamples: IconAgencyTemplateContent["creativeExamples"];
};

const customerLogos = [
  {
    name: "Westmore Beauty",
    image: "/customer-assets/logo-westmore.png",
  },
  {
    name: "Legion Athletics",
    image: "/customer-assets/logo-legion.png",
  },
  {
    name: "Biom",
    image: "/customer-assets/logo-biom.png",
  },
  {
    name: "David Protein",
    image: "/customer-assets/logo-david.png",
  },
  {
    name: "Fast Growing Trees",
    image: "/customer-assets/logo-fast-growing-trees.png",
  },
] satisfies NonNullable<IconAgencyTemplateContent["customerLogos"]>;

export const customerConcepts: CustomerConcept[] = [
  {
    slug: "customer-branch",
    name: "Branch",
    category: "Home & office",
    coreAngle: "Customer version using Branch creative from the Upscale AppLovin onboarding experience.",
    creativeExamples: [
      {
        eyebrow: "Branch",
        title: "Branch vertical creative",
        detail: "AppLovin · 9:16",
        image: "/customer-assets/wall-branch.jpg",
        alt: "Branch vertical creative frame from the Upscale AppLovin onboarding page",
      },
      {
        eyebrow: "[CREATIVE SLOT 02]",
        title: "[APPROVED BRANCH CREATIVE]",
        detail: "[FORMAT] · [DURATION]",
        alt: "Placeholder for a second approved Branch creative",
      },
    ],
  },
  {
    slug: "customer-jones-road",
    name: "Jones Road",
    category: "Beauty",
    coreAngle: "Customer version using Jones Road creative from both requested Upscale AppLovin pages.",
    creativeExamples: [
      {
        eyebrow: "Jones Road",
        title: "Jones Road vertical creative",
        detail: "AppLovin · 9:16",
        image: "/customer-assets/wall-jones-road.jpg",
        alt: "Jones Road vertical creative frame from the Upscale AppLovin onboarding page",
      },
      {
        eyebrow: "Jones Road Beauty",
        title: "Live AppLovin creative",
        detail: "AppLovin · 9:16 · 45s",
        image: "/customer-assets/jones-road-showcase.jpg",
        alt: "Jones Road Beauty creative poster from the Upscale AppLovin Creative OS page",
      },
    ],
  },
  {
    slug: "customer-once-upon-a-farm",
    name: "Once Upon a Farm",
    category: "Kids & family",
    coreAngle: "Customer version using Once Upon a Farm creative from the Upscale AppLovin onboarding experience.",
    creativeExamples: [
      {
        eyebrow: "Once Upon a Farm",
        title: "Once Upon a Farm vertical creative",
        detail: "AppLovin · 9:16",
        image: "/customer-assets/wall-once-upon-a-farm.jpg",
        alt: "Once Upon a Farm vertical creative frame from the Upscale AppLovin onboarding page",
      },
      {
        eyebrow: "[CREATIVE SLOT 02]",
        title: "[APPROVED ONCE UPON A FARM CREATIVE]",
        detail: "[FORMAT] · [DURATION]",
        alt: "Placeholder for a second approved Once Upon a Farm creative",
      },
    ],
  },
  {
    slug: "customer-david-protein",
    name: "David Protein",
    category: "Nutrition",
    coreAngle: "Customer version using David Protein creative examples from both requested Upscale AppLovin pages.",
    creativeExamples: [
      {
        eyebrow: "David Protein",
        title: "David Protein vertical creative",
        detail: "AppLovin · 9:16",
        image: "/customer-assets/wall-david-protein.jpg",
        alt: "David Protein vertical creative frame from the Upscale AppLovin onboarding page",
      },
      {
        eyebrow: "David Protein",
        title: "Social Montage",
        detail: "Macros in captions",
        image: "https://i.ytimg.com/vi/2SScnuGSXFg/oardefault.jpg",
        alt: "David Protein social montage creative from the Upscale AppLovin Creative OS showcase",
      },
    ],
  },
  {
    slug: "customer-fast-growing-trees",
    name: "Fast Growing Trees",
    category: "Garden",
    coreAngle: "Customer version using Fast Growing Trees creative examples from both requested Upscale AppLovin pages.",
    creativeExamples: [
      {
        eyebrow: "Fast Growing Trees",
        title: "Fast Growing Trees vertical creative",
        detail: "AppLovin · 9:16",
        image: "/customer-assets/wall-fast-growing-trees.jpg",
        alt: "Fast Growing Trees vertical creative frame from the Upscale AppLovin onboarding page",
      },
      {
        eyebrow: "Fast Growing Trees",
        title: "Small Spaces",
        detail: "Audience cut",
        image: "https://i.ytimg.com/vi/BoR0I1Q3oNs/oardefault.jpg",
        alt: "Fast Growing Trees Small Spaces creative from the Upscale AppLovin Creative OS showcase",
      },
    ],
  },
];

export function getCustomerConcept(slug: string) {
  const concept = customerConcepts.find((item) => item.slug === slug);
  if (!concept) throw new Error(`Unknown customer concept: ${slug}`);
  return concept;
}

export function getCustomerConceptContent(slug: string): IconAgencyTemplateContent {
  const concept = getCustomerConcept(slug);

  return {
    ...upscaleApplovinCreativeOsContent,
    templateNotice: `UPSCALE DEMO · V1.3 · ${concept.name.toUpperCase()} CUSTOMER VERSION · ICON-STRUCTURED MOBILE LANDING PAGE · ALL BRACKETED COPY REQUIRES INPUT`,
    customerSpotlight: {
      name: concept.name,
      category: concept.category,
      sourceLabel: "Customer creative sourced from Upscale AppLovin pages",
    },
    customerLogos,
    creativeExamples: concept.creativeExamples,
    hero: {
      ...upscaleApplovinCreativeOsContent.hero,
      eyebrow: `AppLovin Creative OS · ${concept.name} · v1.3`,
      assurances: ["[APPROVED CUSTOMER PROOF]", "[APPROVED CUSTOMER QUOTE]", "[VERIFIED RESULT]"],
    },
    customers: {
      ...upscaleApplovinCreativeOsContent.customers,
      title: `${concept.name} customer version`,
      description: "[APPROVED CUSTOMER-PROOF THESIS. USE ONLY ATTRIBUTED EVIDENCE.]",
      stories: [
        {
          name: concept.name,
          category: concept.category,
          quote: "[APPROVED CUSTOMER QUOTE]",
          result: "[VERIFIED RESULT + TEST WINDOW + ATTRIBUTION]",
          tone: "bg-[#d5f6f7]",
        },
        ...upscaleApplovinCreativeOsContent.customers.stories.slice(1),
      ],
    },
  };
}
