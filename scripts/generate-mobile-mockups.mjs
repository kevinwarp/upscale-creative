import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const concepts = JSON.parse(await fs.readFile(path.join(root, "content/upscale-concepts.json"), "utf8"));
const outputDir = path.join(root, "public/mockups");

await fs.mkdir(outputDir, { recursive: true });

const albert = (await fs.readFile(path.join(root, "public/fonts/albert-sans-900.ttf"))).toString("base64");
const albertRegular = (await fs.readFile(path.join(root, "public/fonts/albert-sans-400.ttf"))).toString("base64");
const inter = (await fs.readFile(path.join(root, "public/fonts/inter-400.ttf"))).toString("base64");
const interBold = (await fs.readFile(path.join(root, "public/fonts/inter-700.ttf"))).toString("base64");
const wordmark = (await fs.readFile(path.join(root, "public/customer-assets/upscale-wordmark.svg"))).toString("base64");
const customerAssetDir = path.join(root, "public/customer-assets");

async function rasterData(filename) {
  const buffer = await sharp(path.join(customerAssetDir, filename)).png().toBuffer();
  return `data:image/png;base64,${buffer.toString("base64")}`;
}

async function svgData(filename) {
  const buffer = await fs.readFile(path.join(customerAssetDir, filename));
  return `data:image/svg+xml;base64,${buffer.toString("base64")}`;
}

const customerLogos = await Promise.all([
  "logo-westmore.png",
  "logo-legion.png",
  "logo-biom.png",
].map(rasterData));

const creativeImages = await Promise.all([
  "wall-branch.jpg",
  "wall-jones-road.jpg",
].map(rasterData));

const teamImages = await Promise.all([
  "team-herman.avif",
  "team-kevin.avif",
  "team-mike.avif",
  "team-seth.avif",
].map(rasterData));

const investorLogos = await Promise.all([
  "investor-nvp.svg",
  "investor-m12.svg",
  "investor-eniac.svg",
].map(svgData));

function escapeXml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function wrap(value, maxCharacters) {
  const words = value.split(/\s+/);
  const lines = [];
  let line = "";

  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (candidate.length > maxCharacters && line) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  }

  if (line) lines.push(line);
  return lines;
}

function textLines(lines, x, y, lineHeight, attrs) {
  return `<text x="${x}" y="${y}" ${attrs}>${lines
    .map((line, index) => `<tspan x="${x}" dy="${index === 0 ? 0 : lineHeight}">${escapeXml(line)}</tspan>`)
    .join("")}</text>`;
}

function createSvg(concept) {
  const angleLines = {
    "product-led": "[PRODUCT SYSTEM PROMISE]",
    "pain-led": "[PRIMARY CREATIVE BOTTLENECK]",
    "outcome-led": "[VERIFIED OUTCOME]",
    "workflow-led": "[INPUT] TO [OUTPUT]",
    "proof-led": "[VERIFIED PROOF POINT]",
  };
  const headlineY = 119;
  const offerLines = wrap(
    "12 new AppLovin ads every month, built from ads and assets you already have.",
    43,
  ).slice(0, 3);
  const offerY = 150;
  const thirdSentenceLines = wrap(
    "We review your winners, create briefs, and draft four ads for approval every 10 days.",
    51,
  ).slice(0, 3);
  const thirdSentenceY = offerY + 18 * (offerLines.length - 1) + 21;
  const fourthSentenceLines = wrap(
    "Approve batch one before paying. Launch into AppLovin within one week.",
    52,
  ).slice(0, 3);
  const fourthSentenceY = thirdSentenceY + 17 * (thirdSentenceLines.length - 1) + 20;
  const angleY = fourthSentenceY + 17 * (fourthSentenceLines.length - 1) + 17;
  const moduleY = angleY + 31;
  const leadHeight = concept.slug === "pain-led" ? 78 : ["outcome-led", "proof-led"].includes(concept.slug) ? 52 : 0;
  const ctaY = moduleY + (leadHeight ? leadHeight + 8 : 0);
  const secondCtaY = ctaY + 62;
  const workflowHeight = concept.slug === "workflow-led" ? 66 : 0;
  const proofY = secondCtaY + 78 + workflowHeight;
  const credibilityHeight = concept.slug === "proof-led" ? 160 : 0;
  const reelY = proofY + 83 + credibilityHeight;
  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="390" height="844" viewBox="0 0 390 844">
    <defs>
      <font-face font-family="Albert Sans"><font-face-src><font-face-uri href="data:font/ttf;base64,${albert}"/></font-face-src></font-face>
      <style>
        @font-face { font-family: 'Albert Sans'; src: url(data:font/ttf;base64,${albert}); font-weight: 900; }
        @font-face { font-family: 'Albert Sans'; src: url(data:font/ttf;base64,${albertRegular}); font-weight: 400; }
        @font-face { font-family: 'Inter'; src: url(data:font/ttf;base64,${inter}); font-weight: 400; }
        @font-face { font-family: 'Inter'; src: url(data:font/ttf;base64,${interBold}); font-weight: 700; }
        .display { font-family: 'Albert Sans', sans-serif; }
        .body { font-family: 'Inter', sans-serif; }
      </style>
      <radialGradient id="pageGlow" cx="12%" cy="54%" r="68%">
        <stop offset="0%" stop-color="#DAB6DD" stop-opacity="0.64"/>
        <stop offset="100%" stop-color="#F8F8F6" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="topGlow" cx="100%" cy="0%" r="72%">
        <stop offset="0%" stop-color="#B9F8FC" stop-opacity="0.58"/>
        <stop offset="100%" stop-color="#F8F8F6" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="primaryCta" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#831F80"/><stop offset="52%" stop-color="#26259D"/><stop offset="100%" stop-color="#0A6D86"/>
      </linearGradient>
      <linearGradient id="creativeOne" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#831F80"/>
        <stop offset="52%" stop-color="#26259D"/>
        <stop offset="100%" stop-color="#0A6D86"/>
      </linearGradient>
      <linearGradient id="creativeTwo" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#0A6D86"/>
        <stop offset="100%" stop-color="#021A20"/>
      </linearGradient>
      <filter id="shadow" x="-30%" y="-30%" width="160%" height="180%">
        <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021A20" flood-opacity="0.10"/>
      </filter>
      <clipPath id="viewport"><rect width="390" height="844" rx="0"/></clipPath>
    </defs>
    <g clip-path="url(#viewport)">
      <rect width="390" height="844" fill="#F8F8F6"/>

      <image href="data:image/svg+xml;base64,${wordmark}" x="14" y="20" width="136" height="28" preserveAspectRatio="xMinYMid meet"/>
      <rect x="333" y="12" width="43" height="43" rx="17" fill="#FFFFFF" stroke="#021A20" stroke-opacity="0.12"/>
      <line x1="344" x2="365" y1="25" y2="25" stroke="#021A20" stroke-width="2.4" stroke-linecap="round"/>
      <line x1="344" x2="365" y1="33" y2="33" stroke="#021A20" stroke-width="2.4" stroke-linecap="round"/>
      <line x1="344" x2="365" y1="41" y2="41" stroke="#021A20" stroke-width="2.4" stroke-linecap="round"/>

      <text x="14" y="80" class="body" font-size="8" font-weight="700" letter-spacing=".8" fill="#831F80">APPLOVIN CREATIVE OS · ${escapeXml(concept.name.toUpperCase())} · V1.3</text>
      <text x="14" y="${headlineY}" class="display" font-size="38" font-weight="400" letter-spacing="-1.9" fill="#021A20">Creative OS</text>
      ${textLines(offerLines, 14, offerY, 18, `class="body" font-size="16" font-weight="400" letter-spacing="-0.32" fill="#021A20"`)}
      ${textLines(thirdSentenceLines, 14, thirdSentenceY, 17, `class="body" font-size="13" font-weight="400" letter-spacing="-0.08" fill="#021A20" fill-opacity="0.82"`)}
      ${textLines(fourthSentenceLines, 14, fourthSentenceY, 17, `class="body" font-size="13" font-weight="400" letter-spacing="-0.08" fill="#021A20" fill-opacity="0.82"`)}
      <rect x="14" y="${angleY}" width="${Math.min(260, 34 + angleLines[concept.slug].length * 6.1)}" height="23" rx="11.5" fill="#FBF6FB" stroke="#831F80" stroke-opacity=".18"/>
      <text x="25" y="${angleY + 15}" class="body" font-size="8.5" font-weight="700" letter-spacing=".55" fill="#831F80">${escapeXml(angleLines[concept.slug])}</text>

      ${concept.slug === "pain-led" ? `<g transform="translate(14 ${moduleY})"><rect width="362" height="78" rx="17" fill="#FFFFFF" stroke="#021A20" stroke-opacity=".10"/>${teamImages.map((image, index) => `<image href="${image}" x="${10 + index * 42}" y="10" width="36" height="36" preserveAspectRatio="xMidYMid slice"/>`).join("")}<text x="188" y="25" class="body" font-size="13" font-weight="700" fill="#021A20">Story</text><text x="188" y="43" class="body" font-size="9" fill="#021A20" fill-opacity=".64">Herman, Kevin, Mike and Seth.</text><text x="188" y="61" class="body" font-size="9" font-weight="700" fill="#021A20">Meet the team →</text></g>` : ""}
      ${["outcome-led", "proof-led"].includes(concept.slug) ? `<g transform="translate(14 ${moduleY})"><rect width="362" height="52" rx="17" fill="#FFFFFF" stroke="#021A20" stroke-opacity=".10"/><text x="10" y="31" class="body" font-size="9" font-weight="700" letter-spacing=".8" fill="#021A20" fill-opacity=".48">BACKED BY</text>${investorLogos.map((image, index) => `<rect x="${102 + index * 82}" y="9" width="74" height="34" rx="7" fill="${index === 0 ? "#171D2A" : "#F8F8F6"}" stroke="#021A20" stroke-opacity=".08"/><image href="${image}" x="${110 + index * 82}" y="16" width="58" height="20" preserveAspectRatio="xMidYMid meet"/>`).join("")}</g>` : ""}

      <rect x="14" y="${ctaY}" width="362" height="54" rx="17" fill="url(#primaryCta)"/>
      <circle cx="101" cy="${ctaY + 27}" r="10" fill="none" stroke="#FFFFFF" stroke-width="6"/>
      <text x="224" y="${ctaY + 33}" text-anchor="middle" class="body" font-size="16" font-weight="700" fill="#FFFFFF">Start My First Batch</text>

      <rect x="14" y="${secondCtaY}" width="362" height="50" rx="17" fill="#FFFFFF" stroke="#021A20" stroke-opacity="0.14"/>
      <text x="195" y="${secondCtaY + 31}" text-anchor="middle" class="body" font-size="16" font-weight="700" fill="#021A20">See Example Ads</text>
      <text x="195" y="${secondCtaY + 65}" text-anchor="middle" class="body" font-size="8" fill="#021A20" fill-opacity="0.48">[APPROVED GUARANTEE OR CANCELLATION LANGUAGE]</text>

      ${concept.slug === "workflow-led" ? `<g transform="translate(14 ${secondCtaY + 78})"><rect width="362" height="58" rx="17" fill="url(#primaryCta)"/>${["Review", "Briefs", "Launch"].map((step, index) => `<rect x="${8 + index * 118}" y="8" width="110" height="42" rx="11" fill="#FFFFFF" fill-opacity=".08" stroke="#FFFFFF" stroke-opacity=".12"/><circle cx="${28 + index * 118}" cy="22" r="8" fill="#00F0FF"/><text x="${28 + index * 118}" y="25" text-anchor="middle" class="body" font-size="8" font-weight="700" fill="#021A20">${index + 1}</text><text x="${63 + index * 118}" y="34" text-anchor="middle" class="body" font-size="10" font-weight="700" fill="#FFFFFF">${step}</text>`).join("")}</g>` : ""}

      <g transform="translate(14 ${proofY})">
        <rect width="362" height="73" rx="17" fill="#FFFFFF" stroke="#021A20" stroke-opacity="0.10"/>
        <text x="10" y="17" class="body" font-size="8" font-weight="700" letter-spacing=".75" fill="#021A20" fill-opacity=".45">[APPROVED CUSTOMER PROOF LABEL]</text>
        ${customerLogos.map((image, index) => `<rect x="${10 + index * 116}" y="29" width="108" height="34" rx="7" fill="#F8F8F6" stroke="#021A20" stroke-opacity=".08"/><image href="${image}" x="${18 + index * 116}" y="35" width="92" height="22" preserveAspectRatio="xMidYMid meet"/>`).join("")}
      </g>

      ${concept.slug === "proof-led" ? `<g transform="translate(14 ${proofY + 83})"><rect width="177" height="150" rx="20" fill="#FFFFFF" stroke="#021A20" stroke-opacity=".10"/>${teamImages.map((image, index) => `<image href="${image}" x="${9 + index * 39}" y="9" width="34" height="34" preserveAspectRatio="xMidYMid slice"/>`).join("")}<text x="9" y="64" class="body" font-size="15" font-weight="700">Story</text><text x="9" y="84" class="body" font-size="10" fill="#021A20" fill-opacity=".68">Herman, Kevin, Mike and Seth.</text><text x="9" y="134" class="body" font-size="11" font-weight="700">Meet the team →</text><rect x="185" width="177" height="150" rx="20" fill="#FFFFFF" stroke="#021A20" stroke-opacity=".10"/>${investorLogos.map((image, index) => `<rect x="${194 + index * 52}" y="9" width="46" height="34" rx="7" fill="${index === 0 ? "#171D2A" : "#F8F8F6"}"/><image href="${image}" x="${200 + index * 52}" y="16" width="34" height="20" preserveAspectRatio="xMidYMid meet"/>`).join("")}<text x="194" y="64" class="body" font-size="15" font-weight="700">Investors</text><text x="194" y="84" class="body" font-size="10" fill="#021A20" fill-opacity=".68">NVP, M12 and Eniac.</text><text x="194" y="134" class="body" font-size="11" font-weight="700">Meet our investors →</text></g>` : ""}

      ${[14, 199].map((x, index) => `
        <g transform="translate(${x} ${reelY})">
          <clipPath id="creative-${concept.slug}-${index}"><rect width="177" height="315" rx="21"/></clipPath>
          <rect width="177" height="315" rx="21" fill="#111111"/>
          <image href="${creativeImages[index]}" width="177" height="315" preserveAspectRatio="xMidYMid slice" clip-path="url(#creative-${concept.slug}-${index})"/>
          <rect width="177" height="315" rx="21" fill="none" stroke="#021A20" stroke-opacity=".10"/>
          <circle cx="151" cy="288" r="17" fill="#FFFFFF"/><path d="M148 281l9 7-9 7z" fill="#021A20"/>
        </g>
      `).join("")}
    </g>
  </svg>`;
}

for (const concept of concepts) {
  const svg = createSvg(concept);
  await sharp(Buffer.from(svg), { density: 144 })
    .png({ compressionLevel: 9 })
    .toFile(path.join(outputDir, `${concept.slug}.png`));
}

console.log(`Generated ${concepts.length} mobile mockups in ${outputDir}`);
