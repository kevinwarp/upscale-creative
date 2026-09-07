import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const assetDir = path.join(root, "public/customer-assets");
const outputDir = path.join(root, "public/mockups");
await fs.mkdir(outputDir, { recursive: true });

const font = async (name) => (await fs.readFile(path.join(root, `public/fonts/${name}`))).toString("base64");
const [albertRegular, albertBold, interRegular, interBold] = await Promise.all([
  font("albert-sans-400.ttf"),
  font("albert-sans-700.ttf"),
  font("inter-400.ttf"),
  font("inter-700.ttf"),
]);

async function rasterData(filename) {
  const buffer = await sharp(path.join(assetDir, filename)).png().toBuffer();
  return `data:image/png;base64,${buffer.toString("base64")}`;
}

async function svgData(filename) {
  const buffer = await fs.readFile(path.join(assetDir, filename));
  return `data:image/svg+xml;base64,${buffer.toString("base64")}`;
}

const assets = {
  wordmark: await svgData("upscale-wordmark.svg"),
  logos: await Promise.all(["logo-westmore.png", "logo-legion.png", "logo-biom.png", "logo-david.png", "logo-fast-growing-trees.png"].map(rasterData)),
  team: await Promise.all(["team-herman.avif", "team-kevin.avif", "team-mike.avif", "team-seth.avif"].map(rasterData)),
  investors: await Promise.all(["investor-nvp.svg", "investor-m12.svg", "investor-eniac.svg"].map(svgData)),
};

const concepts = [
  { slug: "customer-branch", name: "Branch", category: "Home & office", order: ["actions", "logos", "creatives", "proof"], creative: ["wall-branch.jpg", null] },
  { slug: "customer-jones-road", name: "Jones Road", category: "Beauty", order: ["logos", "actions", "proof", "creatives"], creative: ["wall-jones-road.jpg", "jones-road-showcase.jpg"] },
  { slug: "customer-once-upon-a-farm", name: "Once Upon a Farm", category: "Kids & family", order: ["actions", "logos", "creatives", "proof"], creative: ["wall-once-upon-a-farm.jpg", null] },
  { slug: "customer-david-protein", name: "David Protein", category: "Nutrition", order: ["logos", "actions", "creatives", "proof"], creative: ["wall-david-protein.jpg", null] },
  { slug: "customer-fast-growing-trees", name: "Fast Growing Trees", category: "Garden", order: ["actions", "logos", "proof", "creatives"], creative: ["wall-fast-growing-trees.jpg", null] },
];

const escapeXml = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

function wrap(value, maxCharacters) {
  const words = value.split(/\s+/);
  const lines = [];
  let line = "";
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > maxCharacters && line) { lines.push(line); line = word; } else line = next;
  }
  if (line) lines.push(line);
  return lines;
}

function textLines(lines, x, y, lineHeight, attrs) {
  return `<text x="${x}" y="${y}" ${attrs}>${lines.map((line, index) => `<tspan x="${x}" dy="${index ? lineHeight : 0}">${escapeXml(line)}</tspan>`).join("")}</text>`;
}

function logoStrip(concept, y) {
  const boxes = assets.logos.slice(0, 3).map((image, index) => {
    const x = 24 + index * 116;
    return `<rect x="${x}" y="${y + 29}" width="108" height="34" rx="7" fill="#F8F8F6" stroke="#021A20" stroke-opacity=".08"/><image href="${image}" x="${x + 8}" y="${y + 35}" width="92" height="22" preserveAspectRatio="xMidYMid meet"/>`;
  }).join("");
  return `<g><rect x="14" y="${y}" width="362" height="73" rx="17" fill="#FFFFFF" stroke="#021A20" stroke-opacity=".10"/>
    <text x="24" y="${y + 17}" class="body" font-size="8" font-weight="700" letter-spacing=".75" fill="#021A20" fill-opacity=".45">[APPROVED CUSTOMER PROOF LABEL]</text>
    <text x="366" y="${y + 17}" text-anchor="end" class="body" font-size="8" font-weight="500" fill="#021A20" fill-opacity=".48">${escapeXml(concept.name)}</text>${boxes}</g>`;
}

function actions(y) {
  return `<g><rect x="14" y="${y}" width="362" height="54" rx="17" fill="url(#primaryCta)"/><circle cx="101" cy="${y + 27}" r="10" fill="none" stroke="#FFF" stroke-width="6"/><text x="224" y="${y + 33}" text-anchor="middle" class="body" font-size="16" font-weight="700" fill="#FFF">Start My First Batch</text>
  <rect x="14" y="${y + 62}" width="362" height="50" rx="17" fill="#FFF" stroke="#021A20" stroke-opacity=".14"/><text x="195" y="${y + 93}" text-anchor="middle" class="body" font-size="16" font-weight="700" fill="#021A20">See Example Ads</text><text x="195" y="${y + 127}" text-anchor="middle" class="body" font-size="8" fill="#021A20" fill-opacity=".48">[APPROVED GUARANTEE OR CANCELLATION LANGUAGE]</text></g>`;
}

function proof(y) {
  const team = assets.team.map((image, index) => `<image href="${image}" x="${23 + index * 37}" y="${y + 10}" width="33" height="33" preserveAspectRatio="xMidYMid slice"/>`).join("");
  const investors = assets.investors.map((image, index) => `<rect x="${208 + index * 52}" y="${y + 10}" width="46" height="33" rx="6" fill="${index === 0 ? "#171D2A" : "#F4F4F1"}"/><image href="${image}" x="${212 + index * 52}" y="${y + 17}" width="38" height="19" preserveAspectRatio="xMidYMid meet"/>`).join("");
  return `<g><rect x="14" y="${y}" width="177" height="176" rx="20" fill="#FBF6FB" fill-opacity=".94" stroke="#831F80" stroke-opacity=".18"/>${team}<text x="23" y="${y + 65}" class="body" font-size="15" font-weight="700">Story</text>${textLines(["[APPROVED EXECUTIVE", "TEAM STORY AND", "VERIFIED OUTCOME]"], 23, y + 85, 14, 'class="body" font-size="11" fill="#021A20" fill-opacity=".78"')}<text x="23" y="${y + 160}" class="body" font-size="12" font-weight="700">Meet the team →</text>
  <rect x="199" y="${y}" width="177" height="176" rx="20" fill="#EFFCFF" fill-opacity=".94" stroke="#0A6D86" stroke-opacity=".18"/>${investors}<text x="208" y="${y + 65}" class="body" font-size="15" font-weight="700">Investors</text><text x="208" y="${y + 86}" class="body" font-size="11" fill="#021A20" fill-opacity=".78">NVP, M12 and Eniac.</text><text x="208" y="${y + 160}" class="body" font-size="12" font-weight="700">Meet our investors →</text></g>`;
}

async function creatives(concept, y) {
  const imageData = await Promise.all(concept.creative.map((filename) => filename ? rasterData(filename) : null));
  return imageData.map((image, index) => {
    const x = index ? 199 : 14;
    const clip = `creative-${concept.slug}-${index}`;
    if (!image) return `<g><rect x="${x}" y="${y}" width="177" height="315" rx="22" fill="#26383B"/><text x="${x + 88.5}" y="${y + 145}" text-anchor="middle" class="body" font-size="10" font-weight="700" fill="#FFF">[CREATIVE SLOT 02]</text><text x="${x + 88.5}" y="${y + 164}" text-anchor="middle" class="body" font-size="9" fill="#FFF" fill-opacity=".7">[APPROVED ASSET]</text></g>`;
    return `<g><clipPath id="${clip}"><rect x="${x}" y="${y}" width="177" height="315" rx="22"/></clipPath><rect x="${x}" y="${y}" width="177" height="315" rx="22" fill="#111"/><image href="${image}" x="${x}" y="${y}" width="177" height="315" preserveAspectRatio="xMidYMid slice" clip-path="url(#${clip})"/><rect x="${x}" y="${y}" width="177" height="315" rx="22" fill="none" stroke="#021A20" stroke-opacity=".12"/><circle cx="${x + 151}" cy="${y + 288}" r="17" fill="#FFFFFF"/><path d="M${x + 148} ${y + 281}l9 7-9 7z" fill="#021A20"/></g>`;
  }).join("");
}

async function createSvg(concept) {
  const offer = wrap("12 new AppLovin ads every month, built from ads and assets you already have.", 43).slice(0, 3);
  const description = wrap("We review your winners, create briefs, and draft four ads for approval every 10 days.", 51).slice(0, 3);
  const positioning = wrap("Approve batch one before paying. Launch into AppLovin within one week.", 52).slice(0, 3);
  const offerY = 150;
  const descriptionY = offerY + 18 * (offer.length - 1) + 21;
  const positioningY = descriptionY + 17 * (description.length - 1) + 20;
  let moduleY = positioningY + 17 * (positioning.length - 1) + 18;
  const modules = [];
  for (const sectionName of concept.order) {
    if (sectionName === "logos") { modules.push(logoStrip(concept, moduleY)); moduleY += 83; }
    if (sectionName === "actions") { modules.push(actions(moduleY)); moduleY += 139; }
    if (sectionName === "proof") { modules.push(proof(moduleY)); moduleY += 186; }
    if (sectionName === "creatives") { modules.push(await creatives(concept, moduleY)); moduleY += 325; }
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="390" height="844" viewBox="0 0 390 844"><defs><style>
    @font-face{font-family:'Albert Sans';src:url(data:font/ttf;base64,${albertRegular});font-weight:400}@font-face{font-family:'Albert Sans';src:url(data:font/ttf;base64,${albertBold});font-weight:700}@font-face{font-family:'Inter';src:url(data:font/ttf;base64,${interRegular});font-weight:400}@font-face{font-family:'Inter';src:url(data:font/ttf;base64,${interBold});font-weight:700}.display{font-family:'Albert Sans',sans-serif}.body{font-family:'Inter',sans-serif}</style><radialGradient id="glow" cx="10%" cy="55%" r="72%"><stop offset="0" stop-color="#DAB6DD" stop-opacity=".64"/><stop offset="1" stop-color="#F8F8F6" stop-opacity="0"/></radialGradient><radialGradient id="topGlow" cx="100%" cy="0%" r="72%"><stop offset="0" stop-color="#B9F8FC" stop-opacity=".58"/><stop offset="1" stop-color="#F8F8F6" stop-opacity="0"/></radialGradient><linearGradient id="primaryCta" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#831F80"/><stop offset=".52" stop-color="#26259D"/><stop offset="1" stop-color="#0A6D86"/></linearGradient></defs>
  <rect width="390" height="844" fill="#F8F8F6"/><image href="${assets.wordmark}" x="14" y="20" width="136" height="28" preserveAspectRatio="xMinYMid meet"/><rect x="333" y="12" width="43" height="43" rx="17" fill="#FFF" stroke="#021A20" stroke-opacity=".12"/><path d="M344 25h21M344 33h21M344 41h21" stroke="#021A20" stroke-width="2.4" stroke-linecap="round"/>
  <text x="14" y="80" class="body" font-size="8" font-weight="700" letter-spacing=".8" fill="#831F80">APPLOVIN CREATIVE OS · ${escapeXml(concept.name.toUpperCase())} · V1.3</text><text x="14" y="119" class="display" font-size="38" font-weight="400" letter-spacing="-1.9" fill="#021A20">Creative OS</text>${textLines(offer,14,offerY,18,'class="body" font-size="16" font-weight="400" letter-spacing="-.32" fill="#021A20"')}${textLines(description,14,descriptionY,17,'class="body" font-size="13" font-weight="400" fill="#021A20" fill-opacity=".82"')}${textLines(positioning,14,positioningY,17,'class="body" font-size="13" font-weight="400" fill="#021A20" fill-opacity=".82"')}${modules.join("")}</svg>`;
}

for (const concept of concepts) {
  const svg = await createSvg(concept);
  await sharp(Buffer.from(svg), { density: 144 }).png({ compressionLevel: 9 }).toFile(path.join(outputDir, `${concept.slug}.png`));
  console.log(`Generated ${concept.slug}.png`);
}
