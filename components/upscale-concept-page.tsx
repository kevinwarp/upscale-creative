import { IconAgencyMobileTemplate } from "@/components/icon-agency-mobile-template";
import { getUpscaleConceptContent } from "@/content/upscale-concepts";
import { getCustomerConceptContent } from "@/content/customer-concepts";

export function UpscaleConceptPage({ slug, customer = false }: { slug: string; customer?: boolean }) {
  const content = customer ? getCustomerConceptContent(slug) : getUpscaleConceptContent(slug);
  return <IconAgencyMobileTemplate content={content} variant={slug} />;
}
