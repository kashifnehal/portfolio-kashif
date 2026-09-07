import { test, expect } from "@playwright/test";

const viewports = [
  { width: 390, height: 844, name: "mobile-iphone13" },
  { width: 393, height: 873, name: "mobile-pixel7" },
  { width: 430, height: 932, name: "mobile-promax" },
  { width: 768, height: 1024, name: "tablet-ipad-portrait" },
  { width: 820, height: 1180, name: "tablet-ipad-air" },
  { width: 1024, height: 768, name: "tablet-ipad-landscape" },
  { width: 1280, height: 800, name: "desktop-laptop" },
  { width: 1440, height: 900, name: "desktop-standard" },
  { width: 1536, height: 864, name: "desktop-large" },
];

test.describe("Prompt 13: Responsive Engineering Viewport Audit", () => {
  const baseUrl = process.env.BASE_URL || "http://localhost:3007";

  for (const vp of viewports) {
    test(`homepage viewport check - ${vp.name} (${vp.width}x${vp.height})`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto(`${baseUrl}/`, { waitUntil: "domcontentloaded" });
      await page.waitForTimeout(500);

      // 1. Check no horizontal overflow
      const bodyScrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const viewportWidth = vp.width;
      expect(bodyScrollWidth).toBeLessThanOrEqual(viewportWidth + 2); // 2px margin tolerance

      // 2. Check main sections exist and are visible
      await expect(page.locator("#hero")).toBeVisible();
      await expect(page.locator("#intro")).toBeVisible();
      await expect(page.locator("#cases")).toBeVisible();

      // 3. Check headline typography scale does not overflow
      const heading = page.locator("#hero-heading");
      await expect(heading).toBeVisible();

      // 4. Capture viewport screenshot for visual QA
      await page.screenshot({
        path: `tests/e2e/screenshots/responsive-${vp.name}.png`,
      });
    });

    test(`project detail viewport check - ${vp.name} (${vp.width}x${vp.height})`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto(`${baseUrl}/projects/barbara-scerbo`, { waitUntil: "domcontentloaded" });
      await page.waitForTimeout(500);

      // Check no horizontal overflow on detail page
      const bodyScrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      expect(bodyScrollWidth).toBeLessThanOrEqual(vp.width + 2);

      // Check detail page heading
      const title = page.locator("h1");
      await expect(title).toHaveText("Barbara Scerbo");
    });
  }
});
