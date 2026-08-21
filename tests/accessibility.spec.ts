import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("both funnel routes have no automatically detectable serious accessibility violations", async ({ page }) => {
  for (const route of ["./", "./thankyou/"]) {
    await page.goto(route);
    await page.waitForLoadState("networkidle");

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(results.violations, `Accessibility violations on ${route}`).toEqual([]);
  }
});

test("skip link and visible focus treatment work from the keyboard on both routes", async ({ page }) => {
  for (const route of ["./", "./thankyou/"]) {
    await page.goto(route);
    await page.keyboard.press("Tab");
    const skipLink = page.locator(".skip-link");
    await expect(skipLink).toBeFocused();
    await expect(skipLink).toBeVisible();
    await page.keyboard.press("Enter");
    await expect(page.locator("#main-content")).toBeInViewport();
  }
});
