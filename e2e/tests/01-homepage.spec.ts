import { test, expect } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

test.describe('TC-01 — Homepage & Website Exploration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  test('homepage loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/career|notify|x career/i);
  });

  test('navigation bar is visible', async ({ page }) => {
    const nav = page.locator('nav, header');
    await expect(nav.first()).toBeVisible();
  });

  test('hero section has a primary CTA button', async ({ page }) => {
    const cta = page.locator('a[href], button').filter({ hasText: /get started|explore|notify|join/i }).first();
    await expect(cta).toBeVisible();
  });

  test('page loads without JS console errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');
    // Filter out known third-party errors
    const criticalErrors = errors.filter(e =>
      !e.includes('favicon') && !e.includes('analytics') && !e.includes('gtag')
    );
    expect(criticalErrors).toHaveLength(0);
  });

  test('page does not have broken images', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    const brokenImages = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img'));
      return imgs.filter(img => !img.complete || img.naturalWidth === 0).map(img => img.src);
    });
    expect(brokenImages).toHaveLength(0);
  });

  test('footer is visible at bottom of page', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });

  test('footer links are clickable', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    const privacyLink = page.locator('a[href*="privacy"]').first();
    if (await privacyLink.isVisible()) {
      await expect(privacyLink).toBeEnabled();
    }
  });

  test('page is responsive at 375px mobile width', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(BASE_URL);
    // No horizontal overflow
    const hasHorizontalScroll = await page.evaluate(() =>
      document.body.scrollWidth > window.innerWidth
    );
    expect(hasHorizontalScroll).toBe(false);
  });
});
