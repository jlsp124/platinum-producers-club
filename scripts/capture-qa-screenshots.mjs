import { chromium } from "@playwright/test";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const baseUrl = process.env.QA_BASE_URL || "http://127.0.0.1:4321";
const outputDirectory = path.resolve("docs/screenshots/qa");
const viewports = [
  { name: "desktop-1440", width: 1440, height: 1000, deviceScaleFactor: 1 },
  { name: "large-desktop-1728", width: 1728, height: 1000, deviceScaleFactor: 1 },
  { name: "tablet-1024", width: 1024, height: 768, deviceScaleFactor: 1 },
  { name: "tablet-768", width: 768, height: 1024, deviceScaleFactor: 1 },
  { name: "iphone-430", width: 430, height: 932, deviceScaleFactor: 2 },
  { name: "iphone-390", width: 390, height: 844, deviceScaleFactor: 2 },
  { name: "iphone-375", width: 375, height: 812, deviceScaleFactor: 2 },
  { name: "narrow-320", width: 320, height: 700, deviceScaleFactor: 2 }
];

await mkdir(outputDirectory, { recursive: true });
const browser = await chromium.launch();

try {
  for (const viewport of viewports) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      deviceScaleFactor: viewport.deviceScaleFactor,
      colorScheme: "light",
      reducedMotion: "reduce"
    });
    const page = await context.newPage();
    await page.goto(baseUrl, { waitUntil: "networkidle" });

    await page.screenshot({
      path: path.join(outputDirectory, `${viewport.name}-hero.png`),
      fullPage: false
    });

    await page.evaluate(async () => {
      const distance = Math.max(1, Math.floor(window.innerHeight * 0.75));
      for (let y = 0; y < document.documentElement.scrollHeight; y += distance) {
        window.scrollTo(0, y);
        await new Promise((resolve) => setTimeout(resolve, 35));
      }
      window.scrollTo(0, 0);
    });
    // Require every local and provider-hosted image to finish after the scroll
    // pass so the saved review evidence reflects the real media.
    await page.waitForFunction(
      () => Array.from(document.images).every((image) => image.complete && image.naturalWidth > 0),
      undefined,
      { timeout: 10_000 }
    );
    await page.waitForTimeout(250);

    await page.screenshot({
      path: path.join(outputDirectory, `${viewport.name}-full.png`),
      fullPage: true
    });
    await context.close();
  }
} finally {
  await browser.close();
}

console.log(`Saved ${viewports.length * 2} QA screenshots to ${outputDirectory}`);
