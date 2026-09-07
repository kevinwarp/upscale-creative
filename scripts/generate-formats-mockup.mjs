import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const assetsDir = path.join(root, "public/customer-assets");
const out = path.join(root, "public/mockups/example-ads.png");

async function data(filename, svg = false) {
  const source = await fs.readFile(path.join(assetsDir, filename));
  const buffer = svg ? source : await sharp(source).png().toBuffer();
  return `data:image/${svg ? "svg+xml" : "png"};base64,${buffer.toString("base64")}`;
}

const wordmark = await data("upscale-wordmark.svg", true);
const logos = await Promise.all([
  "logo-westmore.png",
  "logo-legion.png",
  "logo-biom.png",
  "logo-david.png",
  "logo-fast-growing-trees.png",
].map((name) => data(name)));
const creatives = await Promise.all([
  "wall-branch.jpg",
  "wall-jones-road.jpg",
  "wall-once-upon-a-farm.jpg",
  "wall-david-protein.jpg",
].map((name) => data(name)));

const logoTiles = logos.map((logo, index) => {
  const first = index < 3;
  const x = first ? 24 + index * 116 : 24 + (index - 3) * 178;
  const y = first ? 213 : 267;
  const width = first ? 108 : 170;
  return `<rect x="${x}" y="${y}" width="${width}" height="46" rx="10" fill="${index === 3 ? "#000" : "#FFF"}" stroke="#021A20" stroke-opacity=".1"/><image href="${logo}" x="${x + 9}" y="${y + 9}" width="${width - 18}" height="28" preserveAspectRatio="xMidYMid meet"/>`;
}).join("");

const names = ["Branch", "Jones Road", "Once Upon a Farm", "David Protein"];
const cards = creatives.map((creative, index) => {
  const col = index % 2;
  const row = Math.floor(index / 2);
  const x = 14 + col * 186;
  const y = 346 + row * 505;
  const clip = `creative-${index}`;
  return `<clipPath id="${clip}"><rect x="${x}" y="${y}" width="176" height="313" rx="20"/></clipPath><rect x="${x}" y="${y}" width="176" height="313" rx="20" fill="#000"/><image href="${creative}" x="${x}" y="${y}" width="176" height="313" preserveAspectRatio="xMidYMid slice" clip-path="url(#${clip})"/><circle cx="${x + 148}" cy="${y + 285}" r="18" fill="#FFF" fill-opacity=".94"/><path d="M${x + 144} ${y + 277}l10 8-10 8z" fill="#021A20"/><text x="${x}" y="${y + 334}" class="body" font-size="10" fill="#021A20" fill-opacity=".55">${names[index]} creative</text><text x="${x}" y="${y + 356}" class="display" font-size="15" font-weight="600">[FORMAT NAME]</text><text x="${x}" y="${y + 378}" class="body" font-size="11">[APPROVED ONE-SENTENCE]</text><text x="${x}" y="${y + 394}" class="body" font-size="11">[FORMAT DESCRIPTION]</text><text x="${x}" y="${y + 420}" class="body" font-size="12" font-weight="600">Watch example →</text>`;
}).join("");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="390" height="1360" viewBox="0 0 390 1360"><defs><style>.display{font-family:Arial,sans-serif}.body{font-family:Arial,sans-serif}</style><radialGradient id="glow" cx="100%" cy="0%" r="55%"><stop offset="0" stop-color="#B9F8FC" stop-opacity=".58"/><stop offset="1" stop-color="#F8F8F6" stop-opacity="0"/></radialGradient></defs><rect width="390" height="1360" fill="#F8F8F6"/><rect width="390" height="520" fill="url(#glow)"/><image href="${wordmark}" x="14" y="22" width="136" height="28" preserveAspectRatio="xMinYMid meet"/><rect x="333" y="14" width="43" height="43" rx="17" fill="#FFF" stroke="#831F80" stroke-opacity=".25"/><path d="M344 27h21M344 35h21M344 43h21" stroke="#021A20" stroke-width="2.4" stroke-linecap="round"/><text x="14" y="104" class="display" font-size="27" font-weight="500" letter-spacing="-1">Example Ads</text><text x="14" y="139" class="body" font-size="16">Creative examples sourced from the Upscale</text><text x="14" y="160" class="body" font-size="16">AppLovin pages. Format names and results</text><text x="14" y="181" class="body" font-size="16">remain placeholders until approved.</text><rect x="14" y="195" width="362" height="128" rx="19" fill="#FBF6FB" stroke="#831F80" stroke-opacity=".18"/><text x="24" y="207" class="body" font-size="9" font-weight="600" letter-spacing="1" fill="#021A20" fill-opacity=".45">CUSTOMER EXAMPLES</text>${logoTiles}${cards}</svg>`;

await sharp(Buffer.from(svg), { density: 144 }).png({ compressionLevel: 9 }).toFile(out);
console.log(`Generated ${out}`);
