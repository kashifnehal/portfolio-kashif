import { expect, test } from "@playwright/test";

test.describe("Design Studio — Customizer Panel", () => {
  test.beforeEach(async ({ page }) => {
    // Clear localStorage before each test so we start from defaults
    await page.goto("/");
    await page.evaluate(() => localStorage.clear());
    await page.reload();
    await page.waitForLoadState("networkidle");
  });

  // ─── 1. Toggle button ──────────────────────────────────────────────────
  test("toggle button is visible in the bottom-right", async ({ page }) => {
    const toggle = page.locator("#design-playground-toggle");
    await expect(toggle).toBeVisible();
    await expect(toggle).toContainText("Design Studio");
  });

  // ─── 2. Open / close panel & click outside ────────────────────────────
  test("panel opens on click and closes via X button", async ({ page }) => {
    await page.locator("#design-playground-toggle").click();
    const panel = page.locator("#design-playground-panel");
    await expect(panel).toBeVisible();

    await panel.getByRole("button", { name: "Close Design Studio" }).click();
    await expect(panel).not.toBeVisible();
    await expect(page.locator("#design-playground-toggle")).toBeVisible();
  });

  test("panel closes when clicked outside", async ({ page }) => {
    await page.locator("#design-playground-toggle").click();
    const panel = page.locator("#design-playground-panel");
    await expect(panel).toBeVisible();

    // Click outside panel (e.g. top-left corner of viewport)
    await page.mouse.click(10, 10);
    await expect(panel).not.toBeVisible();
  });

  // ─── 3. Tabs present (Fonts, Filters, Grid) — Colors removed ─────────
  test("tabs present are Fonts, Filters, Grid (Colors removed)", async ({ page }) => {
    await page.locator("#design-playground-toggle").click();
    const panel = page.locator("#design-playground-panel");
    await expect(panel.getByRole("button", { name: "Fonts" })).toBeVisible();
    await expect(panel.getByRole("button", { name: "Filters" })).toBeVisible();
    await expect(panel.getByRole("button", { name: "Grid", exact: true })).toBeVisible();
    await expect(panel.getByRole("button", { name: "Colors" })).not.toBeVisible();
  });

  // ─── 4. Default display font is Bebas Neue ─────────────────────────────
  test("default display font is Bebas Neue", async ({ page }) => {
    const fontVar = await page.evaluate(() =>
      window.getComputedStyle(document.documentElement).getPropertyValue("--font-display")
    );
    expect(fontVar).toContain("Bebas Neue");
  });

  // ─── 5. Typography Presets ─────────────────────────────────────────────
  test("switching to Luxury & Editorial preset updates font variables", async ({ page }) => {
    await page.locator("#design-playground-toggle").click();
    const panel = page.locator("#design-playground-panel");
    await panel.getByRole("button", { name: /Luxury & Editorial/ }).click();

    const fontVar = await page.evaluate(() =>
      document.documentElement.style.getPropertyValue("--font-display")
    );
    expect(fontVar).toContain("Cormorant Garamond");
  });

  test("switching to Vintage & Retro preset updates display font to Syne", async ({ page }) => {
    await page.locator("#design-playground-toggle").click();
    const panel = page.locator("#design-playground-panel");
    await panel.getByRole("button", { name: /Vintage & Retro/ }).click();

    const fontVar = await page.evaluate(() =>
      document.documentElement.style.getPropertyValue("--font-display")
    );
    expect(fontVar).toContain("Syne");
  });

  // ─── 6. Design Studio Modal Constant Isolation ─────────────────────────
  test("Design Studio panel font family remains constant when font theme changes", async ({ page }) => {
    await page.locator("#design-playground-toggle").click();
    const panel = page.locator("#design-playground-panel");
    await panel.getByRole("button", { name: /Luxury & Editorial/ }).click();

    const panelFont = await panel.evaluate((el) => window.getComputedStyle(el).fontFamily);
    expect(panelFont).not.toContain("Cormorant Garamond");
  });

  // ─── 7. Filter tab ───────────────────────────────────────────────────
  test("switching to Monochrome Noir filter updates --img-filter", async ({ page }) => {
    await page.locator("#design-playground-toggle").click();
    const panel = page.locator("#design-playground-panel");
    await panel.getByRole("button", { name: "Filters" }).click();
    await panel.getByRole("button", { name: /Monochrome Noir/ }).click();
    const filter = await page.evaluate(() =>
      document.documentElement.style.getPropertyValue("--img-filter")
    );
    expect(filter).toContain("grayscale(100%)");
  });

  // ─── 8. Grid/Layout tab ──────────────────────────────────────────────
  test("switching layout updates data-layout on #cases", async ({ page }) => {
    await page.locator("#design-playground-toggle").click();
    const panel = page.locator("#design-playground-panel");
    await panel.getByRole("button", { name: "Grid", exact: true }).click();

    await panel.getByRole("button", { name: /Symmetrical Grid Focus/ }).click();
    await expect(page.locator("#cases")).toHaveAttribute("data-layout", "grid");

    await panel.getByRole("button", { name: /Minimalist List View/ }).click();
    await expect(page.locator("#cases")).toHaveAttribute("data-layout", "list");

    await panel.getByRole("button", { name: /Compact Dashboard Matrix/ }).click();
    await expect(page.locator("#cases")).toHaveAttribute("data-layout", "compact");
  });

  // ─── 9. Reset to Default ─────────────────────────────────────────────
  test("Reset to Default restores Bebas Neue default font and editorial layout", async ({ page }) => {
    await page.locator("#design-playground-toggle").click();
    const panel = page.locator("#design-playground-panel");

    // Apply Luxury & Editorial theme and compact layout
    await panel.getByRole("button", { name: /Luxury & Editorial/ }).click();
    await panel.getByRole("button", { name: "Grid", exact: true }).click();
    await panel.getByRole("button", { name: /Compact Dashboard Matrix/ }).click();

    // Reset
    await panel.getByRole("button", { name: "Reset to Default" }).click();

    const fontVar = await page.evaluate(() =>
      document.documentElement.style.getPropertyValue("--font-display")
    );
    expect(fontVar).toContain("Bebas Neue");

    await expect(page.locator("#cases")).toHaveAttribute("data-layout", "editorial");
  });

  // ─── 10. UI integrity across layout switches ───────────────────────────
  test("switching layouts does not cause JS errors or break nav/footer", async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));

    await page.locator("#design-playground-toggle").click();
    const panel = page.locator("#design-playground-panel");
    await panel.getByRole("button", { name: "Grid", exact: true }).click();

    const layoutButtons = [
      "Symmetrical Grid Focus",
      "Minimalist List View",
      "Compact Dashboard Matrix",
      "Editorial Cards (Default)",
    ];

    for (const name of layoutButtons) {
      await panel.getByRole("button", { name, exact: false }).first().click();
      await page.waitForTimeout(300);
      await expect(page.getByRole("navigation", { name: "Primary navigation" })).toBeVisible();
      await expect(page.locator("footer")).toBeVisible();
    }
    expect(errors).toEqual([]);
  });

  // ─── 11. localStorage persistence & active badge ──────────────────────
  test("theme selection is persisted in localStorage", async ({ page }) => {
    await page.locator("#design-playground-toggle").click();
    const panel = page.locator("#design-playground-panel");
    await panel.getByRole("button", { name: /Vintage & Retro/ }).click();
    const stored = await page.evaluate(() => localStorage.getItem("portfolio_font_theme"));
    expect(stored).toBe("vintage");
  });

  // ─── 12. Site-wide body copy, buttons & table font updates ────────────
  test("body copy, contact button, and award table inherit active font theme", async ({ page }) => {
    await page.locator("#design-playground-toggle").click();
    const panel = page.locator("#design-playground-panel");
    await panel.getByRole("button", { name: /Luxury & Editorial/ }).click();

    // Bio paragraph in Intro section
    const bioFont = await page.locator("#intro p").evaluate((el) => window.getComputedStyle(el).fontFamily);
    expect(bioFont).toContain("Cormorant Garamond");

    // Contact Me button
    const contactBtnFont = await page.locator("#contact a").first().evaluate((el) => window.getComputedStyle(el).fontFamily);
    expect(contactBtnFont).toContain("Cormorant Garamond");

    // Recognition Award Title
    const awardTitleFont = await page.locator("#awards div.col-span-4").first().evaluate((el) => window.getComputedStyle(el).fontFamily);
    expect(awardTitleFont).toContain("Cormorant Garamond");
  });

  // ─── 13. Project Detail Page (/projects/viceversa) font inheritance ───
  test("project detail page (/projects/viceversa) inherits active font theme", async ({ page }) => {
    // Apply font theme on home page
    await page.locator("#design-playground-toggle").click();
    const panel = page.locator("#design-playground-panel");
    await panel.getByRole("button", { name: /Luxury & Editorial/ }).click();

    // Navigate to project detail page
    await page.goto("/projects/viceversa");
    await page.waitForLoadState("networkidle");

    const headerFont = await page.locator("h1").evaluate((el) => window.getComputedStyle(el).fontFamily);
    expect(headerFont).toContain("Cormorant Garamond");
  });
});
