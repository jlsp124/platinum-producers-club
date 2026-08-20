import { readFile } from "node:fs/promises";

const expectedBase = (process.env.EXPECTED_BASE_PATH || "").replace(/\/$/, "");
if (!expectedBase.startsWith("/") || expectedBase.length < 2) {
  throw new Error("EXPECTED_BASE_PATH must be a non-root path such as /platinum-producers-club");
}

const pages = ["dist/index.html", "dist/privacy/index.html", "dist/terms/index.html", "dist/404.html"];
for (const file of pages) {
  const html = await readFile(file, "utf8");
  const localReferences = [...html.matchAll(/\b(?:href|src)="(\/[^"#?]*)/g)].map((match) => match[1]);
  const unprefixed = localReferences.filter((reference) =>
    reference !== expectedBase && !reference.startsWith(`${expectedBase}/`)
  );
  if (unprefixed.length) {
    throw new Error(`${file} contains unprefixed root references: ${[...new Set(unprefixed)].join(", ")}`);
  }

  if (!html.includes('name="robots" content="noindex,nofollow,noarchive"')) {
    throw new Error(`${file} is missing the preview noindex directive`);
  }
}

const robots = await readFile("dist/robots.txt", "utf8");
if (!robots.includes("Disallow: /")) {
  throw new Error("GitHub Pages preview robots.txt must block crawling");
}

console.log(`Validated GitHub Pages base path and preview indexing guard for ${expectedBase}`);
