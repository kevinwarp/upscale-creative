import type { Metadata } from "next";
import { MobileLandingPage } from "@/components/mobile-landing-page";
import { getVariant } from "@/content/mobile-landing-pages";

const v = getVariant(1);
export const metadata: Metadata = { title: v.headline === "Creative OS for AppLovin" ? v.headline : `${v.headline} — Creative OS for AppLovin`, description: v.sub };
export default function Page() { return <MobileLandingPage n={1} />; }
