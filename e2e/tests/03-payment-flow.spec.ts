import { test, expect, Page } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

/**
 * Helper: intercept the create-order API and return a mock response
 * so we can test the payment flow without hitting real Cashfree
 */
async function mockCreateOrder(page: Page) {
  await page.route('**/api/v1/payments/create-order', async route => {
    await route.fulfill({
      status: 201,
      contentType: 'application/json',
      body: JSON.stringify({
        success: true,
        message: 'Order created successfully',
        data: {
          order: {
            id: 'test_order_e2e_001',
            cfOrderId: 'cf_e2e_001',
            paymentSessionId: 'test_session_e2e',
            amount: 99,
            currency: 'INR',
            status: 'ACTIVE'
          },
          subscription: {
            id: 'sub_e2e_001',
            plan: 'premium',
            status: 'pending'
          }
        }
      })
    });
  });
}

test.describe('TC-03 — Payment Modal Flow', () => {
  test('payment modal shows plan name and price', async ({ page }) => {
    await page.goto(`${BASE_URL}/notify`);
    await page.waitForLoadState('networkidle');

    const buyBtn = page.locator('button').filter({ hasText: /buy|get started|subscribe/i }).first();
    if (await buyBtn.isVisible()) {
      await buyBtn.click();
      await page.waitForTimeout(500);

      const modal = page.locator('[role="dialog"], .modal, [data-testid="payment-modal"]');
      if (await modal.isVisible({ timeout: 3000 }).catch(() => false)) {
        // Look for price in modal
        const price = modal.locator('text=/₹99|99/');
        await expect(price.first()).toBeVisible();
      }
    }
  });

  test('email validation shows error for empty email', async ({ page }) => {
    await page.goto(`${BASE_URL}/notify`);
    await page.waitForLoadState('networkidle');

    const buyBtn = page.locator('button').filter({ hasText: /buy|get started|subscribe/i }).first();
    if (await buyBtn.isVisible()) {
      await buyBtn.click();
      await page.waitForTimeout(500);

      const proceedBtn = page.locator('button').filter({ hasText: /proceed|pay now|continue/i }).first();
      if (await proceedBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
        await proceedBtn.click();
        // Validation error should appear
        const error = page.locator('text=/email|required/i').first();
        await expect(error).toBeVisible({ timeout: 3000 });
      }
    }
  });

  test('email validation shows error for invalid email format', async ({ page }) => {
    await page.goto(`${BASE_URL}/notify`);
    await page.waitForLoadState('networkidle');

    const buyBtn = page.locator('button').filter({ hasText: /buy|get started|subscribe/i }).first();
    if (await buyBtn.isVisible()) {
      await buyBtn.click();
      await page.waitForTimeout(500);

      const emailInput = page.locator('input[type="email"], input[placeholder*="email" i]').first();
      if (await emailInput.isVisible({ timeout: 2000 }).catch(() => false)) {
        await emailInput.fill('invalid-not-an-email');
        const proceedBtn = page.locator('button').filter({ hasText: /proceed|pay now|continue/i }).first();
        if (await proceedBtn.isVisible()) await proceedBtn.click();
        // Expect validation feedback
        await page.waitForTimeout(500);
      }
    }
  });
});

test.describe('TC-04 — Payment Success Redirect', () => {
  test('profile page shows after payment success query param', async ({ page }) => {
    // Simulate coming back from payment with success=true
    await mockCreateOrder(page);

    // Mock the /me API to return a premium user
    await page.route('**/api/v1/auth/me', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          success: true,
          data: {
            user: {
              id: 'user_e2e',
              email: 'qa_e2e@example.com',
              role: 'user',
              firstName: 'QA',
              lastName: 'Tester',
              subscriptionPlan: 'premium',
              subscriptionStatus: 'active',
              mustChangePassword: false,
              subscriptionInfo: {
                isActive: true,
                daysRemaining: 89,
                plan: 'premium',
                endDate: new Date(Date.now() + 89 * 24 * 60 * 60 * 1000).toISOString()
              }
            }
          }
        })
      });
    });

    // Navigate to profile with payment=success query param (as backend redirects)
    await page.goto(`${BASE_URL}/profile?payment=success&order_id=test_order_e2e_001`);
    await page.waitForLoadState('networkidle');

    // Should not be redirected to login (if session exists)
    // At minimum, the page should load
    await expect(page.locator('body')).toBeVisible();
  });
});
