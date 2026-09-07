import { expect, test } from "@playwright/test";

test("home page loads without a runtime error", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page.locator("body")).toBeVisible();
  expect(errors).toEqual([]);
});

test("project route loads from typed data", async ({ page }) => {
  await page.goto("/projects/project-one");
  await expect(
    page.getByRole("heading", { name: "Project One" }),
  ).toBeVisible();
});

test("reduced motion keeps the page usable", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator("body")).toBeVisible();
});
