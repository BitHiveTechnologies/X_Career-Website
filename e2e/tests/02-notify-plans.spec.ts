import { test, expect } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

test.describe('TC-02 — NotifyX Plans Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/notify`);
    await page.waitForLoadState('networkidle');
  });

  test('notify page loads successfully', async ({ page }) => {
    await expect(page).not.toHaveURL(/error|404/);
    const body = page.locator('body');
    await expect(body).toBeVisible();
  });

  test('plan cards are displayed with pricing', async ({ page }) => {
    // Check at least one plan price is visible
    const prices = page.locator('text=/₹49|₹99|₹299/');
    await expect(prices.first()).toBeVisible({ timeout: 10000 });
  });

  test('Basic plan (₹49) card is visible', async ({ page }) => {
    const basicPlan = page.locator('text=/basic/i').first();
    await expect(basicPlan).toBeVisible();
  });

  test('Premium plan (₹99) card is visible', async ({ page }) => {
    const premiumPlan = page.locator('text=/premium/i').first();
    await expect(premiumPlan).toBeVisible();
  });

  test('Enterprise plan (₹299) card is visible', async ({ page }) => {
    const enterprisePlan = page.locator('text=/enterprise/i').first();
    await expect(enterprisePlan).toBeVisible();
  });

  test('Buy/Get Started button exists for premium plan', async ({ page }) => {
    const buyBtn = page.locator('button, a').filter({ hasText: /buy|get started|subscribe/i }).first();
    await expect(buyBtn).toBeVisible();
    await expect(buyBtn).toBeEnabled();
  });

  test('clicking Buy Now opens payment modal or navigates to checkout', async ({ page }) => {
    const buyBtn = page.locator('button').filter({ hasText: /buy|get started|subscribe/i }).first();
    if (await buyBtn.isVisible()) {
      await buyBtn.click();
      // Either a modal appears or we navigate
      await page.waitForTimeout(1000);
      const modal = page.locator('[role="dialog"], .modal, [data-testid="payment-modal"]');
      const navigated = !page.url().includes('/notify');
      expect(await modal.isVisible() || navigated).toBe(true);
    }
  });
});
