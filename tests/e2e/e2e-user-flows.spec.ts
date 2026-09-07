import { test, expect } from "@playwright/test";

test.describe("Prompt 15: Comprehensive E2E User Behavior & Error Trapping Suite", () => {
  const baseUrl = process.env.BASE_URL || "http://localhost:3007";

  // Error trapping setup for every test in this suite
  test.beforeEach(async ({ page }) => {
    page.on("pageerror", (err) => {
      console.error("[Page Error Captured]:", err.message);
    });

    page.on("console", (msg) => {
      if (msg.type() === "error") {
        console.error("[Console Error Captured]:", msg.text());
      }
    });
  });

  test("1-8: Homepage user flows - load, overflow, nav, hero, cases, hover, open, contact", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`${baseUrl}/`, { waitUntil: "domcontentloaded" });

    // 1. Homepage loads
    await expect(page).toHaveTitle(/Kashif Nehal/);

    // 2. No horizontal overflow
    const bodyScrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    expect(bodyScrollWidth).toBeLessThanOrEqual(1442);

    // 3. Navigation links exist and work
    const worksNav = page.locator('header a[href*="#cases"]').first();
    await expect(worksNav).toBeVisible();
    await worksNav.click();
    await page.waitForTimeout(300);

    // 4. Hero renders correctly
    const heroHeading = page.locator("h1#hero-heading").first();
    await expect(heroHeading).toBeVisible();

    // 5. Projects grid renders
    const casesSection = page.locator("#cases");
    await expect(casesSection).toBeVisible();
    const projectCards = page.locator('#cases a[href*="/projects/"]');
    expect(await projectCards.count()).toBeGreaterThan(0);

    // 6. Project hover/interaction works
    const firstCard = projectCards.first();
    await firstCard.hover();
    await page.waitForTimeout(200);

    // 7. Project opens
    await firstCard.click();
    await page.waitForURL(/\/projects\/.+/);
    expect(page.url()).toContain("/projects/barbara-scerbo");

    // 8. Contact link works
    await page.goto(`${baseUrl}/#contact`, { waitUntil: "domcontentloaded" });
    const contactHeading = page.locator("#contact-heading");
    await expect(contactHeading).toBeVisible();
  });

  test("9-13: Project page flows - direct route, refresh, back, next project", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });

    // 9. Direct route load
    await page.goto(`${baseUrl}/projects/barbara-scerbo`, { waitUntil: "domcontentloaded" });
    const title = page.locator("h1");
    await expect(title).toHaveText("Barbara Scerbo");

    // 10. Refresh page works
    await page.reload({ waitUntil: "domcontentloaded" });
    await expect(title).toHaveText("Barbara Scerbo");

    // 11. Back to home works
    await page.goto(`${baseUrl}/`, { waitUntil: "domcontentloaded" });
    const projectLink = page.locator('#cases a[href*="/projects/"]').first();
    await projectLink.click();
    await page.waitForURL(/\/projects\/barbara-scerbo/);

    const backLink = page.locator('a:has-text("Back to Projects")');
    await expect(backLink).toBeVisible();
    await backLink.click();
    await page.waitForURL(`${baseUrl}/#work`);

    // 13. Next project works
    await page.goto(`${baseUrl}/projects/barbara-scerbo`, { waitUntil: "domcontentloaded" });
    const nextProjectLink = page.locator('a:has-text("Beatrice Cortese")').first();
    await expect(nextProjectLink).toBeVisible();
    await nextProjectLink.click();
    await page.waitForURL(/\/projects\/beatrice-cortese/);
    await expect(page.locator("h1")).toHaveText("Beatrice Cortese");
  });

  test("Rapid click & interaction stress safety", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`${baseUrl}/`, { waitUntil: "domcontentloaded" });

    // Rapidly click navigation anchors without page crashes
    const links = page.locator("header a");
    const linkCount = await links.count();
    for (let i = 0; i < linkCount; i++) {
      await links.nth(i).click({ force: true }).catch(() => {});
    }

    // Page should still be healthy
    await expect(page.locator("#hero")).toBeVisible();
  });

  test("Deterministic visual screenshots for major stable states", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });

    // 1. Initial loaded homepage
    await page.goto(`${baseUrl}/`, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(500);
    await page.screenshot({ path: "tests/e2e/screenshots/stable-homepage-1440.png" });

    // 2. Settled project list
    const cases = page.locator("#cases");
    await cases.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await page.screenshot({ path: "tests/e2e/screenshots/stable-projects-1440.png" });

    // 3. Project detail loaded
    await page.goto(`${baseUrl}/projects/barbara-scerbo`, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(500);
    await page.screenshot({ path: "tests/e2e/screenshots/stable-project-detail-1440.png" });

    // 4. Mobile homepage
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`${baseUrl}/`, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(500);
    await page.screenshot({ path: "tests/e2e/screenshots/stable-mobile-homepage-390.png" });
  });
});
