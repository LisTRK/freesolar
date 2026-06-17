import sharp from "sharp";
import { mkdir, writeFile, rename, unlink, copyFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const srcImages = path.join(root, "src", "images");
const publicImages = path.join(root, "public", "images");
const metaPath = path.join(root, "src", "assets", "image-meta.json");

await mkdir(publicImages, { recursive: true });

const meta = {};

async function writeWebpAvif(outBase, pipeline, { webp = 82, avif = 55 } = {}) {
  await pipeline.clone().webp({ quality: webp }).toFile(`${outBase}.webp`);
  await pipeline.clone().avif({ quality: avif }).toFile(`${outBase}.avif`);
}

async function resizeFrom(srcPath, outBase, width, opts = {}) {
  const sourceBuffer = await sharp(srcPath).toBuffer();
  const pipeline = sharp(sourceBuffer).resize(width, null, {
    withoutEnlargement: true,
    fit: "inside",
    ...opts.resize,
  });

  const webpPath = `${outBase}.webp`;
  const avifPath = `${outBase}.avif`;
  const useTemp = webpPath === srcPath || avifPath === srcPath;
  const targetBase = useTemp ? `${outBase}.tmp` : outBase;

  await writeWebpAvif(targetBase, pipeline, opts);

  if (useTemp) {
    try {
      await copyFile(`${targetBase}.webp`, webpPath);
      await copyFile(`${targetBase}.avif`, avifPath);
    } finally {
      await unlink(`${targetBase}.webp`).catch((err) => {
        if (err.code !== "ENOENT") throw err;
      });
      await unlink(`${targetBase}.avif`).catch((err) => {
        if (err.code !== "ENOENT") throw err;
      });
    }
  }

  const { width: w, height: h } = await sharp(`${outBase}.webp`).metadata();
  return { width: w, height: h };
}

// LCP background → public/ (джерело — повнорозмірний main-bg.webp)
const bgSource = path.join(publicImages, "main-bg.webp");
const bgBuffer = await sharp(bgSource).toBuffer();
const bgWidths = [640, 1280, 1920];
for (const w of bgWidths) {
  const suffix = w === 1920 ? "" : `-${w}`;
  const outBase = path.join(publicImages, `main-bg${suffix}`);
  const dims = await resizeFrom(bgBuffer, outBase, w);
  if (w === 1920) meta.mainBg = dims;
}

// Banner photo large (~352w for 2x displays)
const panelBaseLarge = path.join(srcImages, "solnechnyhPanel-352");
meta.solnechnyhPanelLarge = await resizeFrom(
  path.join(srcImages, "solnechnyhPanel.webp"),
  panelBaseLarge,
  352,
  { webp: 70, avif: 40 },
);

// Banner photo small (~176w display)
const panelBaseSmall = path.join(srcImages, "solnechnyhPanel-176");
meta.solnechnyhPanelSmall = await resizeFrom(
  path.join(srcImages, "solnechnyhPanel.webp"),
  panelBaseSmall,
  176,
  { webp: 65, avif: 35 },
);

await writeFile(metaPath, JSON.stringify(meta, null, 2) + "\n");
console.log("Done. Meta:", metaPath);
for (const [k, v] of Object.entries(meta)) {
  console.log(`  ${k}: ${v.width}×${v.height}`);
}
