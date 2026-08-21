import { expect, test, type Page } from "@playwright/test";

const calendlyUrl = "https://calendly.com/terence-p-lam/release-ready-strategy-call";

const assertHealthyLayout = async (page: Page) => {
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
};

test.beforeEach(async ({ page }) => {
  await page.goto("./");
  await page.waitForLoadState("networkidle");
});

test("homepage is a short, single-focus sales page", async ({ page }) => {
  await expect(page).toHaveTitle(/Platinum Producers Club/);
  await expect(page.locator("#hero-title")).toHaveText("Produce Top-40 Level Songs In 90 Days");
  await expect(page.locator("main > section")).toHaveCount(5);
  await expect(page.locator(".faq-section, .process-section, .coach-section")).toHaveCount(0);

  const mainWords = await page.locator("main").evaluate((main) =>
    (main.textContent?.trim().match(/[\p{L}\p{N}][\p{L}\p{N}’'–—-]*/gu) || []).length
  );
  expect(mainWords).toBeLessThanOrEqual(320);
  await assertHealthyLayout(page);
});

test("thank-you route confirms the booking and stays focused on call preparation", async ({ page }) => {
  await page.goto("./thankyou/");
  await page.waitForLoadState("networkidle");
  await expect(page.locator("#thankyou-title")).toHaveText("Your strategy call is booked.");
  await expect(page.getByText("Please watch the entire video before our call.")).toBeVisible();
  await expect(page.locator(".prep-list > li")).toHaveCount(3);
  await expect(page.locator("main > section")).toHaveCount(4);
  await assertHealthyLayout(page);
});

test("every sales-page CTA uses the current owner wording and verified Calendly event", async ({ page }) => {
  const links = page.locator("a.js-calendly");
  await expect(links).toHaveCount(3);

  for (const link of await links.all()) {
    await expect(link).toContainText("Book your free strategy call");
    expect(await link.getAttribute("href")).toBe(calendlyUrl);
  }

  await page.goto("./thankyou/");
  await expect(page.locator("a.js-calendly")).toHaveCount(0);
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

test("loads the current release-ready Vimeo VSL and no historical VSL", async ({ page }) => {
  await page.route("https://player.vimeo.com/**", (route) => route.fulfill({ status: 204 }));
  const heroVideo = page.locator(".provider-video--hero");
  await expect(heroVideo.locator("iframe")).toHaveCount(0);
  await heroVideo.locator("[data-player-open]").click();
  await expect(heroVideo.locator("iframe")).toHaveAttribute("src", /1137317543/);
  await expect(heroVideo.locator("iframe")).not.toHaveAttribute("src", /1050034975/);
  await expect(heroVideo.locator("iframe")).toHaveAttribute("title", "Platinum Producers Club overview");
});

test("uses three video testimonials curated on the current sales page", async ({ page }) => {
  await page.route("https://player.mux.com/**", (route) => route.fulfill({ status: 204 }));
  const videos = page.locator(".video-proof [data-provider-video]");
  await expect(videos).toHaveCount(3);
  await expect(page.locator(".video-proof figcaption")).toHaveText([
    "Carpe Dien",
    "Alex Kade",
    "Melissa Nathalia (Mòhuaika)"
  ]);

  await videos.first().scrollIntoViewIfNeeded();
  await videos.first().locator("[data-player-open]").click();
  await expect(videos.first().locator("iframe")).toHaveAttribute("src", /h019kzi7ze7GIF7te00YQJyrbQemnXOfGjFeZJeK4Tj300/);
  await expect(videos.nth(1).locator("iframe")).toHaveCount(0);
  await expect(videos.nth(2).locator("iframe")).toHaveCount(0);
});

test("thank-you page uses its separate current pre-call Vimeo", async ({ page }) => {
  await page.route("https://player.vimeo.com/**", (route) => route.fulfill({ status: 204 }));
  await page.goto("./thankyou/");
  const preCallVideo = page.locator(".provider-video--precall");
  await preCallVideo.locator("[data-player-open]").click();
  await expect(preCallVideo.locator("iframe")).toHaveAttribute("src", /1105995692/);
  await expect(preCallVideo.locator("iframe")).toHaveAttribute("src", /b7a12ad4e6/);
  await expect(preCallVideo.locator("iframe")).not.toHaveAttribute("src", /1137317543/);
});

test("headers remain minimal and the converted route does not keep selling", async ({ page }) => {
  await expect(page.locator(".site-header__brand")).toBeVisible();
  await expect(page.locator(".header-cta")).toBeVisible();
  await expect(page.locator(".site-header nav, [data-menu-toggle]")).toHaveCount(0);

  await page.goto("./thankyou/");
  await expect(page.locator(".site-header__brand")).toBeVisible();
  await expect(page.locator(".header-cta, a.js-calendly")).toHaveCount(0);
});

test("all same-origin document links resolve on both funnel routes", async ({ page, request, baseURL }) => {
  const hrefs = new Set<string>();
  for (const route of ["./", "./thankyou/"]) {
    await page.goto(route);
    for (const href of await page.locator("a[href]").evaluateAll((links) =>
      links.map((link) => (link as HTMLAnchorElement).href)
    )) {
      if (href.startsWith(baseURL!)) hrefs.add(href);
    }
  }

  for (const href of hrefs) {
    const response = await request.get(href);
    expect(response.ok(), `${href} returned ${response.status()}`).toBe(true);
  }
});

test("both funnel routes report no local console, request, or response errors", async ({ page, baseURL }) => {
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

  for (const route of ["./", "./thankyou/"]) {
    await page.goto(route, { waitUntil: "networkidle" });
  }
  expect(consoleErrors).toEqual([]);
  expect(failedRequests).toEqual([]);
  expect(badResponses).toEqual([]);
});

test("reduced-motion visitors receive visible, effectively non-transitioning content", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const route of ["./", "./thankyou/"]) {
    await page.goto(route);
    const reveal = page.locator("[data-reveal]").first();
    await expect(reveal).toHaveCSS("opacity", "1");
    const transitionSeconds = await reveal.evaluate((element) =>
      Number.parseFloat(getComputedStyle(element).transitionDuration)
    );
    expect(transitionSeconds).toBeLessThanOrEqual(0.00001);
  }
});
