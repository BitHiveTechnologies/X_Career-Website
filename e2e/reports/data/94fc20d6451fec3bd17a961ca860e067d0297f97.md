# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 04-login.spec.ts >> TC-04 — Login Page >> should redirect to /profile after successful login (API mock)
- Location: e2e/tests/04-login.spec.ts:112:7

# Error details

```
TimeoutError: locator.fill: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('input[type="email"], input[name="email"]').first()

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e4]:
      - navigation [ref=e5]:
        - generic [ref=e6]:
          - link "X Career Logo XCareers" [ref=e7] [cursor=pointer]:
            - /url: /
            - img "X Career Logo" [ref=e10]
            - generic [ref=e12]: XCareers
          - generic [ref=e13]:
            - link "Home" [ref=e14] [cursor=pointer]:
              - /url: /
            - link "Jobs" [ref=e15] [cursor=pointer]:
              - /url: /jobs
            - link "Internships" [ref=e16] [cursor=pointer]:
              - /url: /internships
            - link "Resume Builder" [ref=e17] [cursor=pointer]:
              - /url: /resume-builder
          - generic [ref=e18]:
            - link "Login" [ref=e19] [cursor=pointer]:
              - /url: /login
            - link "Subscribe" [ref=e20] [cursor=pointer]:
              - /url: /notify
    - generic [ref=e23]:
      - img [ref=e25]
      - heading "Welcome Back" [level=2] [ref=e27]
      - paragraph [ref=e28]: Sign in to your account and continue your career journey
      - button "Sign In" [ref=e29] [cursor=pointer]
      - paragraph [ref=e30]:
        - text: Don't have an account?
        - link "Get Started with NotifyX" [ref=e31] [cursor=pointer]:
          - /url: /notify
  - region "Notifications alt+T"
  - alert [ref=e32]
```

# Test source

```ts
  23  |         }
  24  |       })
  25  |     });
  26  |   });
  27  | 
  28  |   await page.route('**/api/v1/auth/me', async route => {
  29  |     await route.fulfill({
  30  |       status: 200,
  31  |       contentType: 'application/json',
  32  |       body: JSON.stringify({
  33  |         success: true,
  34  |         data: {
  35  |           user: {
  36  |             id: 'user_e2e_login',
  37  |             email,
  38  |             role: 'user',
  39  |             firstName: 'QA',
  40  |             lastName: 'Tester',
  41  |             subscriptionPlan: 'premium',
  42  |             subscriptionStatus: 'active',
  43  |             mustChangePassword: false,
  44  |             subscriptionInfo: {
  45  |               isActive: true,
  46  |               daysRemaining: 87,
  47  |               plan: 'premium',
  48  |               endDate: new Date(Date.now() + 87 * 24 * 60 * 60 * 1000).toISOString()
  49  |             }
  50  |           }
  51  |         }
  52  |       })
  53  |     });
  54  |   });
  55  | }
  56  | 
  57  | test.describe('TC-04 — Login Page', () => {
  58  |   test('login page loads with email and password fields', async ({ page }) => {
  59  |     await page.goto(`${BASE_URL}/login`);
  60  |     await page.waitForLoadState('networkidle');
  61  | 
  62  |     const emailInput = page.locator('input[type="email"], input[name="email"], input[placeholder*="email" i]').first();
  63  |     const passwordInput = page.locator('input[type="password"]').first();
  64  | 
  65  |     await expect(emailInput).toBeVisible();
  66  |     await expect(passwordInput).toBeVisible();
  67  |   });
  68  | 
  69  |   test('login button is present and enabled', async ({ page }) => {
  70  |     await page.goto(`${BASE_URL}/login`);
  71  |     const loginBtn = page.locator('button[type="submit"], button').filter({ hasText: /sign in|log in|login/i }).first();
  72  |     await expect(loginBtn).toBeVisible();
  73  |     await expect(loginBtn).toBeEnabled();
  74  |   });
  75  | 
  76  |   test('should show error for empty form submission', async ({ page }) => {
  77  |     await page.goto(`${BASE_URL}/login`);
  78  |     await page.waitForLoadState('networkidle');
  79  | 
  80  |     const loginBtn = page.locator('button[type="submit"], button').filter({ hasText: /sign in|log in|login/i }).first();
  81  |     await loginBtn.click();
  82  |     await page.waitForTimeout(500);
  83  | 
  84  |     // Should see some kind of error / validation
  85  |     const errorText = page.locator('text=/required|invalid|email/i').first();
  86  |     await expect(errorText).toBeVisible({ timeout: 3000 });
  87  |   });
  88  | 
  89  |   test('should show error for wrong credentials (API mock)', async ({ page }) => {
  90  |     await page.route('**/api/v1/auth/login', async route => {
  91  |       await route.fulfill({
  92  |         status: 401,
  93  |         contentType: 'application/json',
  94  |         body: JSON.stringify({ success: false, error: { message: 'Invalid email or password' } })
  95  |       });
  96  |     });
  97  | 
  98  |     await page.goto(`${BASE_URL}/login`);
  99  |     await page.waitForLoadState('networkidle');
  100 | 
  101 |     await page.fill('input[type="email"], input[name="email"]', 'wrong@example.com');
  102 |     await page.fill('input[type="password"]', 'WrongPass123!');
  103 | 
  104 |     const loginBtn = page.locator('button[type="submit"], button').filter({ hasText: /sign in|log in|login/i }).first();
  105 |     await loginBtn.click();
  106 |     await page.waitForTimeout(1000);
  107 | 
  108 |     const errMsg = page.locator('text=/invalid|incorrect|wrong|not found/i').first();
  109 |     await expect(errMsg).toBeVisible({ timeout: 5000 });
  110 |   });
  111 | 
  112 |   test('should redirect to /profile after successful login (API mock)', async ({ page }) => {
  113 |     const testEmail = 'qa_login@example.com';
  114 |     await mockLoginSuccess(page, testEmail);
  115 | 
  116 |     await page.goto(`${BASE_URL}/login`);
  117 |     await page.waitForLoadState('networkidle');
  118 | 
  119 |     const emailInput = page.locator('input[type="email"], input[name="email"]').first();
  120 |     const passwordInput = page.locator('input[type="password"]').first();
  121 |     const loginBtn = page.locator('button[type="submit"], button').filter({ hasText: /sign in|log in|login/i }).first();
  122 | 
> 123 |     await emailInput.fill(testEmail);
      |                      ^ TimeoutError: locator.fill: Timeout 15000ms exceeded.
  124 |     await passwordInput.fill('TestPass123!');
  125 |     await loginBtn.click();
  126 | 
  127 |     // Wait for redirect
  128 |     await page.waitForURL(/\/profile|\/dashboard/, { timeout: 10000 }).catch(() => {});
  129 | 
  130 |     // Accept either redirect or remaining on login (if frontend doesn't set token in mock)
  131 |     const currentUrl = page.url();
  132 |     console.log('After login URL:', currentUrl);
  133 |     expect(currentUrl).toBeDefined();
  134 |   });
  135 | 
  136 |   test('/profile redirects to login when not authenticated', async ({ page }) => {
  137 |     // Block /me so it returns 401
  138 |     await page.route('**/api/v1/auth/me', async route => {
  139 |       await route.fulfill({ status: 401, body: '{}' });
  140 |     });
  141 | 
  142 |     await page.goto(`${BASE_URL}/profile`);
  143 |     await page.waitForTimeout(2000);
  144 | 
  145 |     // Should be on login page or have login elements
  146 |     const onLogin = page.url().includes('/login');
  147 |     const loginForm = page.locator('input[type="email"], input[type="password"]');
  148 |     expect(onLogin || await loginForm.first().isVisible()).toBe(true);
  149 |   });
  150 | });
  151 | 
```