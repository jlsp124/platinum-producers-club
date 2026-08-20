import { chromium } from "@playwright/test";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const phase = process.env.COMPARISON_PHASE || "before";
const ppcUrl = process.env.PPC_COMPARISON_URL || "https://jlsp124.github.io/platinum-producers-club/";
const outputDirectory = path.resolve("docs/screenshots/comparison", phase);

const pages = [
  { name: "new-ppc", url: ppcUrl },
  { name: "creator-college", url: "https://creatorcollege.com/c/vip" },
  { name: "old-ppc", url: "https://platinumproducersclub.com/" }
];

const viewports = [
  { name: "mobile-390", width: 390, height: 844 },
  { name: "tablet-768", width: 768, height: 1024 },
  { name: "desktop-1440", width: 1440, height: 1000 }
];

await mkdir(outputDirectory, { recursive: true });
const browser = await chromium.launch();

try {
  for (const target of pages) {
    for (const viewport of viewports) {
      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height },
        colorScheme: "light",
        reducedMotion: "reduce"
      });
      const page = await context.newPage();
      await page.goto(target.url, { waitUntil: "domcontentloaded", timeout: 45_000 });
      await page.waitForLoadState("networkidle", { timeout: 12_000 }).catch(() => {});
      await page.waitForTimeout(1_200);

      const prefix = `${target.name}-${viewport.name}`;
      await page.screenshot({
        path: path.join(outputDirectory, `${prefix}-hero.jpg`),
        type: "jpeg",
        quality: 82,
        fullPage: false
      });

      await page.evaluate(async () => {
        const step = Math.max(1, Math.floor(window.innerHeight * 0.8));
        for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
          window.scrollTo(0, y);
          await new Promise((resolve) => setTimeout(resolve, 30));
        }
        window.scrollTo(0, 0);
      });
      await page.waitForTimeout(300);

      await page.screenshot({
        path: path.join(outputDirectory, `${prefix}-full.jpg`),
        type: "jpeg",
        quality: 76,
        fullPage: true
      });

      console.log(`${phase}: ${target.name} at ${viewport.width}px -> ${page.url()}`);
      await context.close();
    }
  }
} finally {
  await browser.close();
}

console.log(`Saved ${pages.length * viewports.length * 2} comparison screenshots to ${outputDirectory}`);
