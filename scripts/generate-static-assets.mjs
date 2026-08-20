import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const source = join(root, "src", "assets", "source");
const publicDir = join(root, "public");
const socialDir = join(publicDir, "social");

await mkdir(socialDir, { recursive: true });

const poster = join(source, "mentor-video-poster.jpg");
const wordmark = join(source, "current-01.png");
const favicon = join(source, "current-favicon.png");

const resizedWordmark = await sharp(wordmark)
  .resize({ width: 430, withoutEnlargement: true })
  .png()
  .toBuffer();

const overlay = Buffer.from(`
  <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="shade" x1="0" x2="1">
        <stop offset="0" stop-color="#090A0B" stop-opacity="0.98" />
        <stop offset="0.58" stop-color="#090A0B" stop-opacity="0.62" />
        <stop offset="1" stop-color="#090A0B" stop-opacity="0.25" />
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#shade)" />
    <rect x="64" y="314" width="10" height="196" fill="#FF5A3D" />
    <text x="102" y="382" fill="#F2EFE7" font-family="Arial, sans-serif" font-size="60" font-weight="800" letter-spacing="-2">FINISH MUSIC THAT</text>
    <text x="102" y="452" fill="#FF5A3D" font-family="Arial, sans-serif" font-size="60" font-weight="800" letter-spacing="-2">FEELS RELEASE-READY.</text>
    <text x="102" y="505" fill="#C9C5BB" font-family="Arial, sans-serif" font-size="22" font-weight="600" letter-spacing="2">PRIVATE PRODUCTION MENTORSHIP · TERENCE LAM</text>
  </svg>
`);

await sharp(poster)
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .composite([
    { input: overlay, left: 0, top: 0 },
    { input: resizedWordmark, left: 70, top: 64 }
  ])
  .jpeg({ quality: 88, chromaSubsampling: "4:4:4", mozjpeg: true })
  .toFile(join(socialDir, "ppc-social.jpg"));

await sharp(favicon).resize(32, 32, { fit: "cover" }).png({ compressionLevel: 9 }).toFile(join(publicDir, "favicon-32.png"));
await sharp(favicon).resize(180, 180, { fit: "cover" }).png({ compressionLevel: 9 }).toFile(join(publicDir, "apple-touch-icon.png"));

