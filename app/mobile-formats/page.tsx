import type { Metadata } from "next";
import { MobileLandingPage } from "@/components/mobile-landing-page";
import { pages } from "@/content/mobile-landing-pages";

const p = pages["formats"];
export const metadata: Metadata = { title: `${p.title} — Creative OS for AppLovin`, description: p.value };
export default async function Page({ searchParams }: { searchParams: Promise<{ theme?: string }> }) {
  const { theme } = await searchParams;
  return <MobileLandingPage n={1} page="formats" theme={theme === "dark" ? "dark" : "light"} />;
}
