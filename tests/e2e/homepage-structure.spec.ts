import { expect, test } from "@playwright/test";

test.describe("Homepage Structure & Navigation", () => {
  test("renders header navigation with valid link anchors", async ({ page }) => {
    await page.goto("/");
    const nav = page.getByRole("navigation", { name: "Primary navigation" });
    await expect(nav).toBeVisible();
    await expect(nav.getByRole("link", { name: "works" })).toHaveAttribute("href", "/#cases");
    await expect(nav.getByRole("link", { name: "about" })).toHaveAttribute("href", "/about");
    await expect(nav.getByRole("link", { name: "contact" })).toHaveAttribute("href", "/#contact");
  });

  test("renders all required homepage sections", async ({ page }) => {
    await page.goto("/");
    // Hero section
    await expect(page.locator("section[aria-labelledby='hero-heading']")).toBeVisible();
    // Intro section
    await expect(page.locator("section[aria-labelledby='intro-heading']")).toBeVisible();
    // Projects section
    await expect(page.locator("section[aria-labelledby='projects-heading']")).toBeVisible();
    // Recognition section
    await expect(page.locator("section[aria-labelledby='recognition-heading']")).toBeVisible();
    // Services section
    await expect(page.locator("section[aria-labelledby='services-heading']")).toBeVisible();
    // Contact section
    await expect(page.locator("section[aria-labelledby='contact-heading']")).toBeVisible();
    // Footer landmark
    await expect(page.locator("footer")).toBeVisible();
  });

  test("availability widget hover triggers curtain transition", async ({ page }) => {
    await page.goto("/");
    const widget = page.locator("#availability-widget");
    await expect(widget).toBeVisible();
    await widget.hover();
    await page.waitForTimeout(300);
    await expect(page.getByText("It's a fake availability")).toBeVisible();
  });
});
