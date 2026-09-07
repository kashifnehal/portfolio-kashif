import { test, expect } from "@playwright/test";

const qaViewports = [
  { width: 1440, height: 900, name: "1440x900-desktop" },
  { width: 1280, height: 800, name: "1280x800-laptop" },
  { width: 1024, height: 768, name: "1024x768-tablet-land" },
  { width: 768, height: 1024, name: "768x1024-tablet-port" },
  { width: 390, height: 844, name: "390x844-mobile" },
];

test.describe("Prompt 16: Final Visual and Motion QA Comparison", () => {
  const baseUrl = process.env.BASE_URL || "http://localhost:3007";

  for (const vp of qaViewports) {
    test(`capture QA baseline screenshots - ${vp.name}`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });

      // Local Site Captures
      await page.goto(`${baseUrl}/`, { waitUntil: "networkidle" });
      await page.waitForTimeout(500);

      // Hero
      await page.screenshot({ path: `tests/e2e/screenshots/qa-local-hero-${vp.name}.png` });

      // Cases
      const cases = page.locator("#cases");
      if (await cases.isVisible()) {
        await cases.scrollIntoViewIfNeeded();
        await page.waitForTimeout(400);
        await page.screenshot({ path: `tests/e2e/screenshots/qa-local-cases-${vp.name}.png` });
      }

      // Contact / Footer
      const contact = page.locator("#contact");
      if (await contact.isVisible()) {
        await contact.scrollIntoViewIfNeeded();
        await page.waitForTimeout(400);
        await page.screenshot({ path: `tests/e2e/screenshots/qa-local-contact-${vp.name}.png` });
      }
    });
  }

  test("measure computed styles and visual parameters", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`${baseUrl}/`, { waitUntil: "domcontentloaded" });

    // Measure hero heading font parameters
    const heroHeadingStyles = await page.evaluate(() => {
      const el = document.querySelector("#hero-heading");
      if (!el) return null;
      const computed = window.getComputedStyle(el);
      return {
        fontSize: computed.fontSize,
        lineHeight: computed.lineHeight,
        fontFamily: computed.fontFamily,
        textTransform: computed.textTransform,
      };
    });

    expect(heroHeadingStyles).not.toBeNull();
    expect(heroHeadingStyles?.textTransform).toBe("uppercase");

    // Measure gutter spacing
    const gutterPadding = await page.evaluate(() => {
      const hero = document.querySelector("#hero");
      if (!hero) return null;
      const computed = window.getComputedStyle(hero);
      return computed.paddingLeft;
    });

    expect(gutterPadding).toBe("28px");
  });
});
