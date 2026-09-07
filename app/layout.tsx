import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Demo Upscale v1.3 | Mobile LP Options",
  description:
    "Ten revised Icon-structured mobile landing-page options for Upscale AppLovin Creative OS, with placeholders for every unconfirmed fact.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
