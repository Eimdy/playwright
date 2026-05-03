import { test, expect } from "../../fixture/pageManagementFixture.js";

test.describe("UI Verification", () => {

  test("@SMOKE Verify homepage loads successfully 1", async ({ page }) => {
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(/sauce-demo\.myshopify\.com/);
  });
  test("@SMOKE Verify homepage loads successfully 2", async ({ page }) => {
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(/sauce-demo\.myshopify\.com/);
  });
  test("@SMOKE Verify homepage loads successfully 3", async ({ page }) => {
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(/sauce-demo\.myshopify\.com/);
  });
  test("@SMOKE Verify homepage loads successfully 4", async ({ page }) => {
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(/sauce-demo\.myshopify\.com/);
  });
  test("@SMOKE Verify homepage loads successfully 5", async ({ page }) => {
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(/sauce-demo\.myshopify\.com/);
  });
  test("@SMOKE Verify homepage loads successfully 6", async ({ page }) => {
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(/sauce-demo\.myshopify\.com/);
  });
  test("@SMOKE Verify homepage loads successfully 7", async ({ page }) => {
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(/sauce-demo\.myshopify\.com/);
  });
  test("@SMOKE Verify homepage loads successfully 8", async ({ page }) => {
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(/sauce-demo\.myshopify\.com/);
  });
  test("@SMOKE Verify homepage loads successfully 9", async ({ page }) => {
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(/sauce-demo\.myshopify\.com/);
  });
  test("@SMOKE Verify homepage loads successfully 10", async ({ page }) => {
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(/sauce-demo\.myshopify\.com/);
  });
  test("@SMOKE Verify homepage loads successfully 11", async ({ page }) => {
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(/sauce-demo\.myshopify\.com/);
  });
  test("@SMOKE Verify homepage loads successfully 12", async ({ page }) => {
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(/sauce-demo\.myshopify\.com/);
  });

});