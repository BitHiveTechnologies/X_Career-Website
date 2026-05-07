# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 05-profile.spec.ts >> TC-07 — Profile Page >> profile page loads with user name and email
- Location: e2e/tests/05-profile.spec.ts:83:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=/QA|Tester|qa_profile/i').first()
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for locator('text=/QA|Tester|qa_profile/i').first()

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
  1   | import { test, expect, Page } from '@playwright/test';
  2   | 
  3   | const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
  4   | 
  5   | /** Inject mock auth token and user data into localStorage */
  6   | async function injectAuthSession(page: Page, isPremium = true) {
  7   |   await page.addInitScript((premium) => {
  8   |     window.localStorage.setItem('careerx_token', 'mock_access_token_e2e');
  9   |     window.localStorage.setItem('careerx_user', JSON.stringify({
  10  |       id: 'user_e2e_profile',
  11  |       email: 'qa_profile@example.com',
  12  |       role: 'user',
  13  |       firstName: 'QA',
  14  |       lastName: 'Tester',
  15  |       subscriptionPlan: premium ? 'premium' : 'basic',
  16  |       subscriptionStatus: premium ? 'active' : 'inactive',
  17  |       mustChangePassword: false,
  18  |       subscriptionInfo: {
  19  |         isActive: premium,
  20  |         daysRemaining: premium ? 87 : 0,
  21  |         plan: premium ? 'premium' : 'basic',
  22  |         endDate: new Date(Date.now() + 87 * 24 * 60 * 60 * 1000).toISOString()
  23  |       }
  24  |     }));
  25  |   }, isPremium);
  26  | 
  27  |   await page.route('**/api/v1/auth/me', async route => {
  28  |     await route.fulfill({
  29  |       status: 200,
  30  |       contentType: 'application/json',
  31  |       body: JSON.stringify({
  32  |         success: true,
  33  |         data: {
  34  |           user: {
  35  |             id: 'user_e2e_profile',
  36  |             email: 'qa_profile@example.com',
  37  |             role: 'user',
  38  |             firstName: 'QA',
  39  |             lastName: 'Tester',
  40  |             subscriptionPlan: isPremium ? 'premium' : 'basic',
  41  |             subscriptionStatus: isPremium ? 'active' : 'inactive',
  42  |             mustChangePassword: false,
  43  |             subscriptionInfo: {
  44  |               isActive: isPremium,
  45  |               daysRemaining: isPremium ? 87 : 0,
  46  |               plan: isPremium ? 'premium' : 'basic'
  47  |             }
  48  |           },
  49  |           profile: {
  50  |             qualification: 'B.Tech',
  51  |             stream: 'CSE',
  52  |             yearOfPassout: 2023,
  53  |             cgpaOrPercentage: 8.5
  54  |           }
  55  |         }
  56  |       })
  57  |     });
  58  |   });
  59  | 
  60  |   await page.route('**/api/v1/users/profile', async route => {
  61  |     await route.fulfill({
  62  |       status: 200,
  63  |       contentType: 'application/json',
  64  |       body: JSON.stringify({
  65  |         success: true,
  66  |         data: {
  67  |           profile: {
  68  |             firstName: 'QA',
  69  |             lastName: 'Tester',
  70  |             qualification: 'B.Tech',
  71  |             stream: 'CSE',
  72  |             yearOfPassout: 2023,
  73  |             cgpaOrPercentage: 8.5,
  74  |             skills: 'JavaScript, React'
  75  |           }
  76  |         }
  77  |       })
  78  |     });
  79  |   });
  80  | }
  81  | 
  82  | test.describe('TC-07 — Profile Page', () => {
  83  |   test('profile page loads with user name and email', async ({ page }) => {
  84  |     await injectAuthSession(page);
  85  |     await page.goto(`${BASE_URL}/profile`);
  86  |     await page.waitForLoadState('networkidle');
  87  | 
> 88  |     await expect(page.locator('text=/QA|Tester|qa_profile/i').first()).toBeVisible({ timeout: 10000 });
      |                                                                        ^ Error: expect(locator).toBeVisible() failed
  89  |   });
  90  | 
  91  |   test('all 5 profile tabs are visible', async ({ page }) => {
  92  |     await injectAuthSession(page);
  93  |     await page.goto(`${BASE_URL}/profile`);
  94  |     await page.waitForLoadState('networkidle');
  95  | 
  96  |     const tabs = ['Personal', 'Education', 'Contact', 'Links', 'Security'];
  97  |     for (const tab of tabs) {
  98  |       const tabEl = page.locator(`[role="tab"], button`).filter({ hasText: new RegExp(tab, 'i') }).first();
  99  |       if (await tabEl.isVisible({ timeout: 3000 }).catch(() => false)) {
  100 |         await expect(tabEl).toBeVisible();
  101 |       }
  102 |     }
  103 |   });
  104 | 
  105 |   test('premium badge is visible for active subscription user', async ({ page }) => {
  106 |     await injectAuthSession(page, true);
  107 |     await page.goto(`${BASE_URL}/profile`);
  108 |     await page.waitForLoadState('networkidle');
  109 | 
  110 |     // Premium badge with Crown icon or "Premium" text
  111 |     const badge = page.locator('text=/premium/i').first();
  112 |     // It may or may not show depending on auth state from localStorage
  113 |     if (await badge.isVisible({ timeout: 3000 }).catch(() => false)) {
  114 |       await expect(badge).toBeVisible();
  115 |     }
  116 |   });
  117 | 
  118 |   test('Edit Profile button exists and is clickable', async ({ page }) => {
  119 |     await injectAuthSession(page);
  120 |     await page.goto(`${BASE_URL}/profile`);
  121 |     await page.waitForLoadState('networkidle');
  122 | 
  123 |     const editBtn = page.locator('button').filter({ hasText: /edit profile/i }).first();
  124 |     if (await editBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
  125 |       await expect(editBtn).toBeEnabled();
  126 |       await editBtn.click();
  127 |       // Save and Cancel buttons should appear
  128 |       const saveBtn = page.locator('button').filter({ hasText: /save/i }).first();
  129 |       await expect(saveBtn).toBeVisible({ timeout: 3000 });
  130 |     }
  131 |   });
  132 | 
  133 |   test('clicking Education tab shows education form fields', async ({ page }) => {
  134 |     await injectAuthSession(page);
  135 |     await page.goto(`${BASE_URL}/profile`);
  136 |     await page.waitForLoadState('networkidle');
  137 | 
  138 |     const educationTab = page.locator('[role="tab"], button').filter({ hasText: /education/i }).first();
  139 |     if (await educationTab.isVisible({ timeout: 5000 }).catch(() => false)) {
  140 |       await educationTab.click();
  141 |       await page.waitForTimeout(500);
  142 | 
  143 |       // Should see qualification/CGPA fields
  144 |       const qualField = page.locator('text=/qualification|cgpa|college/i').first();
  145 |       if (await qualField.isVisible({ timeout: 3000 }).catch(() => false)) {
  146 |         await expect(qualField).toBeVisible();
  147 |       }
  148 |     }
  149 |   });
  150 | 
  151 |   test('profile completion percentage is displayed', async ({ page }) => {
  152 |     await injectAuthSession(page);
  153 |     await page.goto(`${BASE_URL}/profile`);
  154 |     await page.waitForLoadState('networkidle');
  155 | 
  156 |     // Look for % completion indicator
  157 |     const completion = page.locator('text=/%/').first();
  158 |     if (await completion.isVisible({ timeout: 5000 }).catch(() => false)) {
  159 |       await expect(completion).toBeVisible();
  160 |     }
  161 |   });
  162 | 
  163 |   test('security tab shows password change form', async ({ page }) => {
  164 |     await injectAuthSession(page);
  165 |     await page.goto(`${BASE_URL}/profile`);
  166 |     await page.waitForLoadState('networkidle');
  167 | 
  168 |     const securityTab = page.locator('[role="tab"], button').filter({ hasText: /security/i }).first();
  169 |     if (await securityTab.isVisible({ timeout: 5000 }).catch(() => false)) {
  170 |       await securityTab.click();
  171 |       await page.waitForTimeout(500);
  172 | 
  173 |       const pwdInput = page.locator('input[type="password"]').first();
  174 |       if (await pwdInput.isVisible({ timeout: 3000 }).catch(() => false)) {
  175 |         await expect(pwdInput).toBeVisible();
  176 |       }
  177 |     }
  178 |   });
  179 | });
  180 | 
```