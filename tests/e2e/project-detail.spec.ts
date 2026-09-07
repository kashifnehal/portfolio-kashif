import { test, expect } from "@playwright/test";

test.describe("Project Detail Page E2E (Prompt 11)", () => {
  const baseUrl = process.env.BASE_URL || "http://localhost:3007";

  test("direct URL access loads rich project details", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`${baseUrl}/projects/barbara-scerbo`, { waitUntil: "networkidle" });

    // Check Header & Title
    const title = page.locator("h1");
    await expect(title).toHaveText("Barbara Scerbo");

    // Check Overview & Challenge / Solution
    await expect(page.locator('text="The Challenge"')).toBeVisible();
    await expect(page.locator('text="The Solution"')).toBeVisible();

    // Check Impact Metrics
    await expect(page.locator('text="Average Session Duration"')).toBeVisible();

    // Check Project Showcase Gallery
    await expect(page.locator('text="Project Showcase"')).toBeVisible();

    // Check Next Project link
    const nextProjectHeading = page.locator('h2:has-text("Beatrice Cortese")');
    await expect(nextProjectHeading).toBeVisible();

    // Take screenshot of full detail page
    await page.screenshot({
      path: "tests/e2e/screenshots/project-detail-full-1440.png",
      fullPage: true,
    });
  });

  test("navigating to Next Project works seamlessly", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`${baseUrl}/projects/barbara-scerbo`, { waitUntil: "domcontentloaded" });

    // Click Next Project link
    const nextProjectLink = page.locator('a:has-text("Beatrice Cortese")');
    await nextProjectLink.click();

    // Verify URL transitioned to Beatrice Cortese project detail
    await page.waitForURL(/\/projects\/beatrice-cortese/);
    const title = page.locator("h1");
    await expect(title).toHaveText("Beatrice Cortese");
  });
});
