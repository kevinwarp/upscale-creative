import fs from "node:fs/promises";
import path from "node:path";

const output = path.join(process.cwd(), "public/customer-assets");
await fs.mkdir(output, { recursive: true });

const assets = {
  "upscale-wordmark.svg": "https://onboarding.upscale.ai/brand/upscale-wordmark.svg",
  "wall-branch.jpg": "https://onboarding.upscale.ai/applovin/wall-branch.jpg",
  "wall-jones-road.jpg": "https://onboarding.upscale.ai/applovin/wall-jones-road.jpg",
  "wall-once-upon-a-farm.jpg": "https://onboarding.upscale.ai/applovin/wall-once-upon-a-farm.jpg",
  "wall-david-protein.jpg": "https://onboarding.upscale.ai/applovin/wall-david-protein.jpg",
  "wall-fast-growing-trees.jpg": "https://onboarding.upscale.ai/applovin/wall-fast-growing-trees.jpg",
  "jones-road-showcase.jpg": "https://applovin.upscale.ai/__l5e/assets-v1/e18a95f2-48e8-4b36-b4a3-405cf36ef8b5/jonesroad-poster.jpg",
  "logo-westmore.png": "https://westmorebeauty.com/cdn/shop/files/Westmore_-_Logo_CMYK_3_42fac461-62d8-4a93-a89e-ad1c92d41d40.png?v=1775149841&width=500",
  "logo-legion.png": "https://applovin.upscale.ai/__l5e/assets-v1/b4209f44-45b7-4a05-8efc-0489d0fff480/legion-athletics.png",
  "logo-biom.png": "https://getbiom.co/cdn/shop/files/biom_Identity_logo-green.png?v=1762554164&width=250",
  "logo-david.png": "https://davidprotein.com/cdn/shop/files/Group_524_4.png?v=1776707158",
  "logo-fast-growing-trees.png": "https://applovin.upscale.ai/__l5e/assets-v1/b07bf206-4c57-4b42-99b8-b4b9671c901e/fast-growing-trees.png",
  "team-herman.avif": "https://cdn.prod.website-files.com/67e002ca1673b66e25aef679/67fe8c073ba6ff5107ae816a_4.avif",
  "team-kevin.avif": "https://cdn.prod.website-files.com/67e002ca1673b66e25aef679/67fe8c478483073793ed8cef_1.avif",
  "team-mike.avif": "https://cdn.prod.website-files.com/67e002ca1673b66e25aef679/67fe8c47fd31caef9eab4242_3.avif",
  "team-seth.avif": "https://cdn.prod.website-files.com/67e002ca1673b66e25aef679/67fe8c4701f559b336a28405_2.avif",
  "investor-nvp.svg": "https://cdn.prod.website-files.com/67e002ca1673b66e25aef679/67ffd38a5121c72ee6136254_new-nvp-logo-white%201.svg",
  "investor-m12.svg": "https://cdn.prod.website-files.com/67e002ca1673b66e25aef679/67ffd342197dfd21f311abc5_M12-Logo%201.svg",
  "investor-eniac.svg": "https://cdn.prod.website-files.com/67e002ca1673b66e25aef679/67ffd3f3edc46b09bb868c31_65077ee6ce905dbaabb161f0_logo-purple%201.svg",
};

for (const [filename, url] of Object.entries(assets)) {
  const destination = path.join(output, filename);
  try {
    await fs.access(destination);
    console.log(`Keeping ${filename}`);
    continue;
  } catch {}

  const response = await fetch(url, { signal: AbortSignal.timeout(20_000) });
  if (!response.ok) throw new Error(`${response.status} while fetching ${url}`);
  await fs.writeFile(destination, Buffer.from(await response.arrayBuffer()));
  console.log(`Saved ${filename}`);
}

console.log(`Saved ${Object.keys(assets).length} source assets to ${output}`);
