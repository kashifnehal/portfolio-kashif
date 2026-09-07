import { test, expect } from "@playwright/test";

test.describe("Project Opening Transition E2E", () => {
  test("click project card and navigate to project detail page with back navigation", async ({ page }) => {
    const baseUrl = process.env.BASE_URL || "http://localhost:3007";

    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`${baseUrl}/`, { waitUntil: "domcontentloaded" });

    // Locate the first project link
    const firstProjectLink = page.locator('#cases a[href*="/projects/"]').first();
    await expect(firstProjectLink).toBeVisible();

    // Click the project card
    await firstProjectLink.click();

    // Wait for URL transition
    await page.waitForURL(/\/projects\/.+/);
    expect(page.url()).toContain("/projects/barbara-scerbo");

    // Verify detail page elements
    const heading = page.locator("h1");
    await expect(heading).toHaveText("Barbara Scerbo");

    // Capture screenshot of project detail page
    await page.screenshot({ path: "tests/e2e/screenshots/project-detail-1440.png" });

    // Test back button link
    const backLink = page.locator('a:has-text("Back to Projects")');
    await expect(backLink).toBeVisible();
    await backLink.click();

    // Verify back navigation returns to home page
    await page.waitForURL(`${baseUrl}/#work`);
  });
});
