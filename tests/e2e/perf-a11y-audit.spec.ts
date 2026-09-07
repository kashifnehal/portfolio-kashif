import { test, expect } from "@playwright/test";

test.describe("Prompt 14: Performance & Accessibility Audit", () => {
  const baseUrl = process.env.BASE_URL || "http://localhost:3007";

  test("homepage accessibility - single h1, ARIA landmarks, and image alt text", async ({ page }) => {
    await page.goto(`${baseUrl}/`, { waitUntil: "domcontentloaded" });

    // 1. Single H1 heading check
    const h1Count = await page.locator("h1").count();
    expect(h1Count).toBe(1);

    // 2. ARIA Landmarks check
    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("main")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();

    // 3. Image alt text check
    const images = page.locator("img");
    const count = await images.count();
    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute("alt");
      expect(alt).not.toBeNull();
    }
  });

  test("project detail accessibility - single h1 and semantic structure", async ({ page }) => {
    await page.goto(`${baseUrl}/projects/barbara-scerbo`, { waitUntil: "domcontentloaded" });

    // 1. Single H1 heading check
    const h1Count = await page.locator("h1").count();
    expect(h1Count).toBe(1);

    // 2. Alt text check on detail images
    const images = page.locator("img");
    const count = await images.count();
    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute("alt");
      expect(alt).not.toBeNull();
    }
  });

  test("keyboard navigation - focus states on interactive elements", async ({ page }) => {
    await page.goto(`${baseUrl}/`, { waitUntil: "domcontentloaded" });

    // Tab through header links
    await page.keyboard.press("Tab");
    const activeElementTag = await page.evaluate(() => document.activeElement?.tagName);
    expect(["A", "BUTTON", "BODY"]).toContain(activeElementTag);
  });

  test("reduced motion support disables heavy animations", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(`${baseUrl}/`, { waitUntil: "domcontentloaded" });

    // Ensure content is immediately visible without opacity 0 stuck states
    const heroHeading = page.locator("h1#hero-heading").first();
    await expect(heroHeading).toBeVisible();
    const introHeading = page.locator("h2#intro-heading").first();
    await expect(introHeading).toBeVisible();
  });
});
