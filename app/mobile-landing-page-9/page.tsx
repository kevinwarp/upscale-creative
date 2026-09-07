import type { Metadata } from "next";
import { MobileLandingPage } from "@/components/mobile-landing-page";
import { getVariant } from "@/content/mobile-landing-pages";

const v = getVariant(9);
export const metadata: Metadata = { title: v.headline === "Creative OS for AppLovin" ? v.headline : `${v.headline} — Creative OS for AppLovin`, description: v.sub };
export default async function Page({ searchParams }: { searchParams: Promise<{ theme?: string }> }) {
  const { theme } = await searchParams;
  return <MobileLandingPage n={9} theme={theme === "dark" ? "dark" : "light"} />;
}
