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

  // ─── 2. Open / close panel ────────────────────────────────────────────
  test("panel opens on click and closes via X button", async ({ page }) => {
    await page.locator("#design-playground-toggle").click();
    const panel = page.locator("#design-playground-panel");
    await expect(panel).toBeVisible();

    await panel.getByRole("button", { name: "Close Design Studio" }).click();
    await expect(panel).not.toBeVisible();
    await expect(page.locator("#design-playground-toggle")).toBeVisible();
  });

  // ─── 3. All 4 tabs present ────────────────────────────────────────────
  test("all four tabs are present: Fonts, Colors, Filters, Grid", async ({ page }) => {
    await page.locator("#design-playground-toggle").click();
    const panel = page.locator("#design-playground-panel");
    await expect(panel.getByRole("button", { name: "Fonts" })).toBeVisible();
    await expect(panel.getByRole("button", { name: "Colors" })).toBeVisible();
    await expect(panel.getByRole("button", { name: "Filters" })).toBeVisible();
    await expect(panel.getByRole("button", { name: "Grid" })).toBeVisible();
  });

  // ─── 4. Font switching updates CSS vars ──────────────────────────────
  test("switching display font updates --font-display CSS variable", async ({ page }) => {
    await page.locator("#design-playground-toggle").click();
    const panel = page.locator("#design-playground-panel");
    await panel.getByRole("button", { name: "Bebas Neue" }).click();
    const fontVar = await page.evaluate(() =>
      document.documentElement.style.getPropertyValue("--font-display")
    );
    expect(fontVar).toContain("Bebas Neue");
  });

  test("switching body font updates --font-body CSS variable", async ({ page }) => {
    await page.locator("#design-playground-toggle").click();
    const panel = page.locator("#design-playground-panel");
    await panel.getByRole("button", { name: "Geist Sans" }).click();
    const fontVar = await page.evaluate(() =>
      document.documentElement.style.getPropertyValue("--font-body")
    );
    expect(fontVar).toBeTruthy();
  });

  // ─── 5. Theme switching ───────────────────────────────────────────────
  test("selecting Cyber Tech theme updates --color-background", async ({ page }) => {
    await page.locator("#design-playground-toggle").click();
    const panel = page.locator("#design-playground-panel");
    await panel.getByRole("button", { name: "Colors" }).click();
    await panel.getByRole("button", { name: /Cyber Tech/ }).click();
    const bg = await page.evaluate(() =>
      document.documentElement.style.getPropertyValue("--color-background")
    );
    expect(bg).toBe("#080811");
  });

  test("selecting Crimson accent swatch overrides --color-accent", async ({ page }) => {
    await page.locator("#design-playground-toggle").click();
    const panel = page.locator("#design-playground-panel");
    await panel.getByRole("button", { name: "Colors" }).click();
    await panel.getByRole("button", { name: /Crimson/ }).click();
    const accent = await page.evaluate(() =>
      document.documentElement.style.getPropertyValue("--color-accent")
    );
    expect(accent).toBe("#ef4444");
  });

  // ─── 6. Filter tab ───────────────────────────────────────────────────
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

  // ─── 7. Grid/Layout tab ──────────────────────────────────────────────
  test("switching to grid layout sets data-layout=grid on #cases", async ({ page }) => {
    await page.locator("#design-playground-toggle").click();
    const panel = page.locator("#design-playground-panel");
    await panel.getByRole("button", { name: "Grid" }).click();
    await panel.getByRole("button", { name: /Compact 2-Column Grid/ }).click();
    await expect(page.locator("#cases")).toHaveAttribute("data-layout", "grid");
  });

  test("switching to list layout sets data-layout=list on #cases", async ({ page }) => {
    await page.locator("#design-playground-toggle").click();
    const panel = page.locator("#design-playground-panel");
    await panel.getByRole("button", { name: "Grid" }).click();
    await panel.getByRole("button", { name: /Minimal List View/ }).click();
    await expect(page.locator("#cases")).toHaveAttribute("data-layout", "list");
  });

  // ─── 8. Reset to Default ─────────────────────────────────────────────
  test("Reset to Default restores default CSS values and editorial layout", async ({ page }) => {
    await page.locator("#design-playground-toggle").click();
    const panel = page.locator("#design-playground-panel");

    // Apply Cyber Tech theme (bg: #080811) and grid layout
    await panel.getByRole("button", { name: "Colors" }).click();
    await panel.getByRole("button", { name: /Cyber Tech/ }).click();
    await panel.getByRole("button", { name: "Grid" }).click();
    await panel.getByRole("button", { name: /Compact 2-Column Grid/ }).click();

    // Verify customisation was applied
    const bgBefore = await page.evaluate(() =>
      document.documentElement.style.getPropertyValue("--color-background")
    );
    expect(bgBefore).toBe("#080811");

    // Reset
    await panel.getByRole("button", { name: "Reset to Default" }).click();

    // After reset, useEffect re-applies the default theme (Dark Onyx bg = #0d0d0d)
    const bgAfter = await page.evaluate(() =>
      document.documentElement.style.getPropertyValue("--color-background")
    );
    expect(bgAfter).toBe("#0d0d0d");

    // Layout must return to editorial
    await expect(page.locator("#cases")).toHaveAttribute("data-layout", "editorial");
  });

  test("Reset to Default clears localStorage keys", async ({ page }) => {
    await page.locator("#design-playground-toggle").click();
    const panel = page.locator("#design-playground-panel");
    await panel.getByRole("button", { name: "Colors" }).click();
    await panel.getByRole("button", { name: /Alpine Emerald/ }).click();
    await panel.getByRole("button", { name: "Reset to Default" }).click();
    const stored = await page.evaluate(() => localStorage.getItem("portfolio_theme"));
    expect(stored).toBeNull();
  });

  // ─── 9. UI integrity across layout switches ───────────────────────────
  test("switching layouts does not cause JS errors or break nav/footer", async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));

    await page.locator("#design-playground-toggle").click();
    const panel = page.locator("#design-playground-panel");
    await panel.getByRole("button", { name: "Grid" }).click();

    // Use exact button text to avoid regex issues with parentheses in "(Default)"
    const layoutButtons = [
      "Compact 2-Column Grid",
      "Minimal List View",
      "Editorial Cards (Default)",
    ];

    for (const name of layoutButtons) {
      // Use exact string match, not regex, to avoid unescaped parentheses
      await panel.getByRole("button", { name, exact: false }).first().click();
      await page.waitForTimeout(300);
      await expect(page.getByRole("navigation", { name: "Primary navigation" })).toBeVisible();
      await expect(page.locator("footer")).toBeVisible();
    }
    expect(errors).toEqual([]);
  });

  // ─── 10. localStorage persistence ────────────────────────────────────
  test("theme selection is persisted in localStorage", async ({ page }) => {
    await page.locator("#design-playground-toggle").click();
    const panel = page.locator("#design-playground-panel");
    await panel.getByRole("button", { name: "Colors" }).click();
    await panel.getByRole("button", { name: /Alpine Emerald/ }).click();
    const stored = await page.evaluate(() => localStorage.getItem("portfolio_theme"));
    expect(stored).toBe("Alpine Emerald");
  });

  // ─── 11. Active badge shows when customized ──────────────────────────
  test("Active badge appears on toggle when a customization is applied", async ({ page }) => {
    const toggle = page.locator("#design-playground-toggle");
    await toggle.click();
    const panel = page.locator("#design-playground-panel");
    await panel.getByRole("button", { name: "Colors" }).click();
    await panel.getByRole("button", { name: /Cyber Tech/ }).click();
    await panel.getByRole("button", { name: "Close Design Studio" }).click();
    await expect(toggle.getByText("Active")).toBeVisible();
  });
});
