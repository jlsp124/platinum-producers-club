import { expect, test } from "@playwright/test";

const calendlyUrl = "https://calendly.com/terence-p-lam/release-ready-strategy-call";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");
});

test("renders without horizontal overflow or broken local images", async ({ page }) => {
  await expect(page).toHaveTitle(/Platinum Producers Club/);
  await expect(page.locator("#hero-title")).toContainText("Finish music");

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

test("passes supported campaign parameters to Calendly and drops unrelated parameters", async ({ page }) => {
  await page.goto("/?utm_source=studio&utm_medium=referral&utm_campaign=august&private_token=nope");
  const href = await page.locator("a.js-calendly").first().getAttribute("href");
  const destination = new URL(href!);

  expect(destination.origin + destination.pathname).toBe(calendlyUrl);
  expect(destination.searchParams.get("utm_source")).toBe("studio");
  expect(destination.searchParams.get("utm_medium")).toBe("referral");
  expect(destination.searchParams.get("utm_campaign")).toBe("august");
  expect(destination.searchParams.has("private_token")).toBe(false);
});

test("opens the overview in the native dialog and restores focus on close", async ({ page }) => {
  await page.route("https://player.vimeo.com/**", (route) => route.fulfill({ status: 204 }));
  const opener = page.locator("[data-video-open]");
  await opener.click();

  const dialog = page.locator("[data-video-dialog]");
  await expect(dialog).toHaveJSProperty("open", true);
  await expect(dialog.locator("iframe")).toHaveAttribute("src", /1047620937/);
  await dialog.locator("[data-video-close]").click();
  await expect(dialog).not.toHaveJSProperty("open", true);
  await expect(opener).toBeFocused();
});

test("testimonial controls and FAQ behave predictably", async ({ page }) => {
  await page.locator("#results").scrollIntoViewIfNeeded();
  await expect(page.locator("[data-testimonial-count]")).toHaveText("01 / 04");
  await page.locator("[data-testimonial-next]").click();
  await expect(page.locator("[data-testimonial-count]")).toHaveText("02 / 04");
  await expect(page.locator("[data-testimonial]:visible strong")).toHaveText("Grace Leeswadtrakul");

  const faq = page.locator(".faq-item");
  await faq.nth(2).locator("summary").click();
  await expect(faq.nth(2)).toHaveAttribute("open", "");
  await expect(faq.first()).not.toHaveAttribute("open", "");
});

test("mobile navigation is keyboard-closeable and desktop navigation stays visible", async ({ page }) => {
  const mobile = page.viewportSize()!.width < 1200;
  const toggle = page.locator("[data-menu-toggle]");

  if (mobile) {
    await expect(toggle).toBeVisible();
    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    await expect(page.locator("[data-mobile-menu]")).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await expect(page.locator("[data-mobile-menu]")).toBeHidden();
  } else {
    await expect(toggle).toBeHidden();
    await expect(page.locator(".site-header__nav")).toBeVisible();
    await expect(page.locator(".header-cta")).toBeVisible();
  }
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

test("built page reports no console errors, failed requests, or same-origin 4xx/5xx responses", async ({ page, baseURL }) => {
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

test("reduced-motion visitors receive visible, non-transitioning content", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.reload();
  const reveal = page.locator("[data-reveal]").first();
  await expect(reveal).toHaveCSS("opacity", "1");
  const transitionSeconds = await reveal.evaluate((element) =>
    Number.parseFloat(getComputedStyle(element).transitionDuration)
  );
  expect(transitionSeconds).toBeLessThanOrEqual(0.00001);
});
