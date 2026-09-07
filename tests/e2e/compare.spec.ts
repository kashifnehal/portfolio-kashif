import { test } from "@playwright/test";

test.describe("Visual Comparison: Reference vs Localhost", () => {
  test("capture reference site screenshots", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("https://bepatrickdavid.com/", { waitUntil: "networkidle" });
    await page.waitForTimeout(3000);

    // Hero
    await page.screenshot({ path: "tests/e2e/screenshots/reference-hero-1440.png" });

    // Intro
    const intro = page.locator("#intro");
    if (await intro.isVisible()) {
      await intro.scrollIntoViewIfNeeded();
      await page.waitForTimeout(1000);
      await page.screenshot({ path: "tests/e2e/screenshots/reference-intro-1440.png" });
    }

    // Cases
    const cases = page.locator("#cases");
    if (await cases.isVisible()) {
      await cases.scrollIntoViewIfNeeded();
      await page.waitForTimeout(1000);
      await page.screenshot({ path: "tests/e2e/screenshots/reference-cases-1440.png" });
    }
  });

  test("capture local site screenshots", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("http://localhost:3007/", { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);

    // Hero
    await page.screenshot({ path: "tests/e2e/screenshots/local-hero-1440.png" });

    // Intro
    const intro = page.locator("#intro");
    if (await intro.isVisible()) {
      await intro.scrollIntoViewIfNeeded();
      await page.waitForTimeout(1000);
      await page.screenshot({ path: "tests/e2e/screenshots/local-intro-1440.png" });
    }

    // Cases
    const cases = page.locator("#cases");
    if (await cases.isVisible()) {
      await cases.scrollIntoViewIfNeeded();
      await page.waitForTimeout(1000);
      await page.screenshot({ path: "tests/e2e/screenshots/local-cases-1440.png" });
    }
  });
});
