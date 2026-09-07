import { IconAgencyMobileTemplate } from "@/components/icon-agency-mobile-template";
import { getUpscaleConceptContent } from "@/content/upscale-concepts";
import { customerConcepts, getCustomerConceptContent } from "@/content/customer-concepts";

export default async function MobilePreview({
  searchParams,
}: {
  searchParams: Promise<{ concept?: string }>;
}) {
  const { concept = "product-led" } = await searchParams;
  const customerSlugs = new Set(customerConcepts.map((item) => item.slug));
  const allowed = new Set(["product-led", "pain-led", "outcome-led", "workflow-led", "proof-led", ...customerSlugs]);
  const selected = allowed.has(concept) ? concept : "product-led";
  const content = customerSlugs.has(selected) ? getCustomerConceptContent(selected) : getUpscaleConceptContent(selected);

  return (
    <main className="min-h-screen bg-[#101517] px-6 py-10 text-white">
      <div className="mx-auto w-fit">
        <p className="mb-4 text-center text-[10px] font-bold uppercase tracking-[0.16em] text-white/55">
          v1.3 · 390 × 844 mobile review frame
        </p>
        <div
          data-mobile-frame
          className="block h-[844px] w-[390px] overflow-hidden rounded-[2rem] border border-white/18 bg-[#f6f6f6] text-[#021a20] shadow-[0_30px_90px_rgba(0,0,0,0.46)]"
        >
          <IconAgencyMobileTemplate content={content} screenshotOnly variant={selected} />
        </div>
      </div>
    </main>
  );
}
