import conceptData from "@/content/upscale-concepts.json";
import { upscaleApplovinCreativeOsContent } from "@/content/upscale-applovin-creative-os";
import type { IconAgencyTemplateContent } from "@/content/icon-agency-template";

export type UpscaleConcept = {
  slug: string;
  name: string;
  coreAngle: string;
  headline: string;
  description: string;
  assurances: string[];
  sectionDirections: string[];
};

export const upscaleConcepts = conceptData satisfies UpscaleConcept[];

const angleLines: Record<string, string> = {
  "product-led": "[PRODUCT SYSTEM PROMISE]",
  "pain-led": "[PRIMARY CREATIVE BOTTLENECK]",
  "outcome-led": "[VERIFIED OUTCOME]",
  "workflow-led": "[INPUT] TO [OUTPUT]",
  "proof-led": "[VERIFIED PROOF POINT]",
};

export function getUpscaleConcept(slug: string) {
  const concept = upscaleConcepts.find((item) => item.slug === slug);

  if (!concept) {
    throw new Error(`Unknown Upscale concept: ${slug}`);
  }

  return concept;
}

export function getUpscaleConceptContent(slug: string): IconAgencyTemplateContent {
  const concept = getUpscaleConcept(slug);

  return {
    ...upscaleApplovinCreativeOsContent,
    templateNotice: `UPSCALE DEMO · V1.3 · ${concept.name.toUpperCase()} CONCEPT · ICON-STRUCTURED MOBILE LANDING PAGE · ALL BRACKETED COPY REQUIRES INPUT`,
    hero: {
      ...upscaleApplovinCreativeOsContent.hero,
      eyebrow: `AppLovin Creative OS · ${concept.name} · v1.3`,
      angleLine: angleLines[concept.slug],
      assurances: concept.assurances,
    },
  };
}
