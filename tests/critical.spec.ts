import { expect, test } from "@playwright/test";

const calendlyUrl = "https://calendly.com/terence-p-lam/release-ready-strategy-call";

test.beforeEach(async ({ page }) => {
  await page.goto("./");
  await page.waitForLoadState("networkidle");
});

test("renders the focused offer without overflow or broken images", async ({ page }) => {
  await expect(page).toHaveTitle(/Platinum Producers Club/);
  await expect(page.locator("#hero-title")).toContainText("Finish music");
  await expect(page.locator("[data-provider-video]").first()).toBeVisible();

  const dimensions = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth
  }));
  expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth + 1);

  const images = page.locator("img");
  for (let index = 0; index < await images.count(); index += 1) {
    const image = images.nth(index);
    await image.scrollIntoViewIfNeeded();
    await expect.poll(() => image.evaluate((node) => ({
      complete: (node as HTMLImageElement).complete,
      naturalWidth: (node as HTMLImageElement).naturalWidth
    }))).toMatchObject({ complete: true });
    expect(await image.evaluate((node) => (node as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
  }
});

test("keeps every application CTA on the verified Calendly event", async ({ page }) => {
  const links = page.locator("a.js-calendly");
  expect(await links.count()).toBeGreaterThanOrEqual(5);

  for (const href of await links.evaluateAll((items) => items.map((item) => (item as HTMLAnchorElement).href))) {
    expect(href).toBe(calendlyUrl);
  }
});

test("passes supported campaign parameters and emits a private local conversion event", async ({ page }) => {
  await page.goto("./?utm_source=studio&utm_medium=referral&utm_campaign=august&private_token=nope");
  const link = page.locator("a.js-calendly").first();
  const href = await link.getAttribute("href");
  const destination = new URL(href!);

  expect(destination.origin + destination.pathname).toBe(calendlyUrl);
  expect(destination.searchParams.get("utm_source")).toBe("studio");
  expect(destination.searchParams.get("utm_medium")).toBe("referral");
  expect(destination.searchParams.get("utm_campaign")).toBe("august");
  expect(destination.searchParams.has("private_token")).toBe(false);

  await page.evaluate(() => {
    (window as Window & { ppcClickContext?: string }).ppcClickContext = "";
    window.addEventListener("ppc:calendly-click", ((event: CustomEvent<{ context: string }>) => {
      (window as Window & { ppcClickContext?: string }).ppcClickContext = event.detail.context;
    }) as EventListener);
  });
  await link.evaluate((element) => element.addEventListener("click", (event) => event.preventDefault()));
  await link.click();
  expect(await page.evaluate(() => (window as Window & { ppcClickContext?: string }).ppcClickContext)).toBe("header");
});

test("loads the primary Vimeo VSL only after the visible poster is clicked", async ({ page }) => {
  await page.route("https://player.vimeo.com/**", (route) => route.fulfill({ status: 204 }));
  const heroVideo = page.locator("[data-provider-video]").first();
  await expect(heroVideo.locator("iframe")).toHaveCount(0);
  await heroVideo.locator("[data-player-open]").click();
  await expect(heroVideo.locator("iframe")).toHaveAttribute("src", /1050034975/);
  await expect(heroVideo.locator("iframe")).toHaveAttribute("title", "Platinum Producers Club program overview");
});

test("loads real Mux testimonial media on demand and leaves other players dormant", async ({ page }) => {
  await page.route("https://player.mux.com/**", (route) => route.fulfill({ status: 204 }));
  const videos = page.locator(".video-proof [data-provider-video]");
  await expect(videos).toHaveCount(3);
  await videos.first().scrollIntoViewIfNeeded();
  await videos.first().locator("[data-player-open]").click();
  await expect(videos.first().locator("iframe")).toHaveAttribute("src", /JdlyyKMnxXeNXeYKQxuEhXVmBYqPWg3LQZvkj1imbsY/);
  await expect(videos.nth(1).locator("iframe")).toHaveCount(0);
  await expect(videos.nth(2).locator("iframe")).toHaveCount(0);
});

test("FAQ behaves predictably and the header has no distracting navigation", async ({ page }) => {
  const faq = page.locator(".faq-item");
  await faq.nth(2).locator("summary").click();
  await expect(faq.nth(2)).toHaveAttribute("open", "");
  await faq.first().locator("summary").click();
  await expect(faq.first()).toHaveAttribute("open", "");
  await expect(faq.nth(2)).not.toHaveAttribute("open", "");

  await expect(page.locator(".site-header__brand")).toBeVisible();
  await expect(page.locator(".header-cta")).toBeVisible();
  await expect(page.locator(".site-header nav")).toHaveCount(0);
  await expect(page.locator("[data-menu-toggle]")).toHaveCount(0);
});

test("all same-origin document links resolve", async ({ page, request, baseURL }) => {
  const hrefs = await page.locator("a[href]").evaluateAll((links) =>
    links.map((link) => (link as HTMLAnchorElement).href)
  );
  const localPaths = [...new Set(hrefs
    .filter((href) => href.startsWith(baseURL!))
    .map((href) => new URL(href).pathname)
  )];

  for (const path of localPaths) {
    const response = await request.get(path);
    expect(response.ok(), `${path} returned ${response.status()}`).toBe(true);
  }
});

test("built page reports no console errors, failed local requests, or local 4xx/5xx responses", async ({ page, baseURL }) => {
  const consoleErrors: string[] = [];
  const failedRequests: string[] = [];
  const badResponses: string[] = [];
  const origin = new URL(baseURL!).origin;

  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("requestfailed", (request) => {
    if (new URL(request.url()).origin === origin) failedRequests.push(request.url());
  });
  page.on("response", (response) => {
    if (new URL(response.url()).origin === origin && response.status() >= 400) {
      badResponses.push(`${response.status()} ${response.url()}`);
    }
  });

  await page.reload({ waitUntil: "networkidle" });
  expect(consoleErrors).toEqual([]);
  expect(failedRequests).toEqual([]);
  expect(badResponses).toEqual([]);
});

test("reduced-motion visitors receive visible, effectively non-transitioning content", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.reload();
  const reveal = page.locator("[data-reveal]").first();
  await expect(reveal).toHaveCSS("opacity", "1");
  const transitionSeconds = await reveal.evaluate((element) =>
    Number.parseFloat(getComputedStyle(element).transitionDuration)
  );
  expect(transitionSeconds).toBeLessThanOrEqual(0.00001);
});
