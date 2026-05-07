# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 02-notify-plans.spec.ts >> TC-02 — NotifyX Plans Page >> clicking Buy Now opens payment modal or navigates to checkout
- Location: e2e/tests/02-notify-plans.spec.ts:44:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
```

# Page snapshot

```yaml
- generic [ref=e1]:
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
    - main [ref=e21]:
      - generic [ref=e28]:
        - generic [ref=e29]:
          - img [ref=e30]
          - text: NotifyX
        - heading "Stay Ahead with NotifyX" [level=1] [ref=e33]:
          - text: Stay Ahead with
          - generic [ref=e34]: NotifyX
        - paragraph [ref=e35]: Experience the ultimate in career notifications. Get exclusive access to priority alerts and personalized insights.
        - generic [ref=e36]:
          - paragraph [ref=e37]: Company Information
          - paragraph [ref=e38]:
            - text: X Careers is a product of
            - strong [ref=e39]: X Careers Connect Private Limited
            - text: . All services on this platform are provided by X Careers Connect Private Limited.
        - generic [ref=e42]:
          - generic [ref=e43]:
            - generic [ref=e44]:
              - img [ref=e45]
              - generic [ref=e47]: No Active Subscription
            - paragraph [ref=e48]: Upgrade to unlock premium features
          - button "Upgrade Now" [ref=e49] [cursor=pointer]
        - generic [ref=e51]:
          - heading "Get Notifications" [level=3] [ref=e52]
          - generic [ref=e53]: Please enter a valid email address.
          - generic [ref=e54]:
            - textbox "Enter your email" [ref=e55]
            - button "Notify" [disabled] [ref=e56]:
              - img [ref=e57]
              - text: Notify
          - paragraph [ref=e60]: No spam. Unsubscribe anytime.
        - generic [ref=e61]:
          - generic [ref=e62]:
            - generic [ref=e63]: 50K+
            - generic [ref=e64]: Active Subscribers
          - generic [ref=e65]:
            - generic [ref=e66]: 1000+
            - generic [ref=e67]: Jobs Daily
          - generic [ref=e68]:
            - generic [ref=e69]: 95%
            - generic [ref=e70]: Success Rate
          - generic [ref=e71]:
            - generic [ref=e72]: 24/7
            - generic [ref=e73]: Monitoring
      - generic [ref=e75]:
        - generic [ref=e76]:
          - heading "Premium Features" [level=2] [ref=e77]
          - paragraph [ref=e78]: Exclusive features designed for career success
        - generic [ref=e79]:
          - generic [ref=e80]:
            - generic [ref=e81]: 💼
            - heading "Job Alerts" [level=3] [ref=e82]
            - paragraph [ref=e83]: Get notified about new job opportunities matching your skills
            - generic [ref=e85]: Real-time
          - generic [ref=e86]:
            - generic [ref=e87]: 🎯
            - heading "Interview Tips" [level=3] [ref=e88]
            - paragraph [ref=e89]: Weekly interview preparation tips and success strategies
            - generic [ref=e91]: Weekly
          - generic [ref=e92]:
            - generic [ref=e93]: 📚
            - heading "Learning Resources" [level=3] [ref=e94]
            - paragraph [ref=e95]: New courses, tutorials, and skill development content
            - generic [ref=e97]: Bi-weekly
          - generic [ref=e98]:
            - generic [ref=e99]: 🚀
            - heading "Career Updates" [level=3] [ref=e100]
            - paragraph [ref=e101]: Industry trends, salary reports, and career guidance
            - generic [ref=e103]: Monthly
      - generic [ref=e105]:
        - generic [ref=e106]:
          - heading "Premium Plans" [level=2] [ref=e107]
          - paragraph [ref=e108]: Experience the ultimate in career notifications
        - generic [ref=e109]:
          - generic [ref=e110]:
            - generic [ref=e111]:
              - heading "Basic Plan" [level=3] [ref=e112]
              - generic [ref=e113]:
                - text: ₹49
                - generic [ref=e114]: /month
            - generic [ref=e115]:
              - generic [ref=e116]:
                - img [ref=e117]
                - generic [ref=e120]: Access to basic job listings
              - generic [ref=e121]:
                - img [ref=e122]
                - generic [ref=e125]: Email notifications
              - generic [ref=e126]:
                - img [ref=e127]
                - generic [ref=e130]: Basic profile management
            - button "Get Started" [active] [ref=e131] [cursor=pointer]
          - generic [ref=e132]:
            - generic [ref=e134]: Most Popular
            - generic [ref=e135]:
              - heading "Premium Plan" [level=3] [ref=e136]
              - generic [ref=e137]:
                - text: ₹99
                - generic [ref=e138]: /month
            - generic [ref=e139]:
              - generic [ref=e140]:
                - img [ref=e141]
                - generic [ref=e144]: All Basic features
              - generic [ref=e145]:
                - img [ref=e146]
                - generic [ref=e149]: Priority job matching
              - generic [ref=e150]:
                - img [ref=e151]
                - generic [ref=e154]: Advanced analytics
              - generic [ref=e155]:
                - img [ref=e156]
                - generic [ref=e159]: Resume builder tools
            - button "Start Premium" [ref=e160] [cursor=pointer]
          - generic [ref=e161]:
            - generic [ref=e162]:
              - heading "Enterprise Plan" [level=3] [ref=e163]
              - generic [ref=e164]:
                - text: ₹299
                - generic [ref=e165]: /month
            - generic [ref=e166]:
              - generic [ref=e167]:
                - img [ref=e168]
                - generic [ref=e171]: All Premium features
              - generic [ref=e172]:
                - img [ref=e173]
                - generic [ref=e176]: Custom integrations
              - generic [ref=e177]:
                - img [ref=e178]
                - generic [ref=e181]: Dedicated support
              - generic [ref=e182]:
                - img [ref=e183]
                - generic [ref=e186]: Advanced reporting
              - generic [ref=e187]:
                - img [ref=e188]
                - generic [ref=e191]: Team management
            - button "Go Pro" [ref=e192] [cursor=pointer]
      - generic [ref=e197]:
        - generic [ref=e198]:
          - heading "Why Go Premium?" [level=2] [ref=e199]
          - paragraph [ref=e200]: Unlock the full potential of NotifyX
        - generic [ref=e201]:
          - generic [ref=e202]:
            - img [ref=e203]
            - heading "Priority Job Alerts" [level=3] [ref=e205]
            - paragraph [ref=e206]: Get notified 24 hours before jobs go public
          - generic [ref=e207]:
            - img [ref=e208]
            - heading "Instant Notifications" [level=3] [ref=e210]
            - paragraph [ref=e211]: Real-time alerts via WhatsApp and SMS
          - generic [ref=e212]:
            - img [ref=e213]
            - heading "Personalized Recommendations" [level=3] [ref=e215]
            - paragraph [ref=e216]: AI-powered job matching based on your profile
          - generic [ref=e217]:
            - img [ref=e218]
            - heading "Exclusive Content" [level=3] [ref=e222]
            - paragraph [ref=e223]: Access to premium resources and insider tips
      - generic [ref=e226]:
        - generic [ref=e227]:
          - heading "Premium Preferences" [level=2] [ref=e228]
          - paragraph [ref=e229]: Personalize your notification experience
        - generic [ref=e230]:
          - generic [ref=e231]:
            - heading "Notification Types" [level=3] [ref=e232]
            - generic [ref=e234]: ✅ job Alerts
            - generic [ref=e236]: ✅ interview Tips
            - generic [ref=e238]: ✅ learning Resources
            - generic [ref=e240]: ✅ career Updates
          - generic [ref=e241]:
            - heading "Delivery Methods" [level=3] [ref=e242]
            - generic [ref=e243]:
              - generic [ref=e244]:
                - img [ref=e245]
                - generic [ref=e248]: Email Notifications
              - generic [ref=e249]:
                - img [ref=e250]
                - generic [ref=e252]: WhatsApp Alerts (Premium)
                - generic [ref=e253]: Coming Soon
              - generic [ref=e254]:
                - img [ref=e255]
                - generic [ref=e257]: SMS Notifications (Premium)
                - generic [ref=e258]: Coming Soon
      - generic [ref=e261]:
        - generic [ref=e262]:
          - heading "Success Stories" [level=2] [ref=e263]
          - paragraph [ref=e264]: Discover how our users achieved career success with NotifyX
        - generic [ref=e266]:
          - generic [ref=e267]:
            - generic [ref=e268]:
              - generic [ref=e269]:
                - img "Rohit Sharma" [ref=e270]
                - img [ref=e272]
              - generic [ref=e274]:
                - heading "Rohit Sharma" [level=3] [ref=e275]
                - paragraph [ref=e276]: Software Engineer at Flipkart
                - generic [ref=e278]:
                  - img [ref=e279]
                  - img [ref=e281]
                  - img [ref=e283]
                  - img [ref=e285]
                  - img [ref=e287]
            - paragraph [ref=e289]: "\"NotifyX helped me land my dream job! Got the alert 2 hours before it was posted publicly.\""
            - generic [ref=e291]:
              - generic [ref=e292]: ✅ Verified Success
              - generic [ref=e293]: ⚡ Priority Alert
          - generic [ref=e294]:
            - generic [ref=e295]:
              - generic [ref=e296]:
                - img "Priya Patel" [ref=e297]
                - img [ref=e299]
              - generic [ref=e301]:
                - heading "Priya Patel" [level=3] [ref=e302]
                - paragraph [ref=e303]: Product Manager at Zomato
                - generic [ref=e305]:
                  - img [ref=e306]
                  - img [ref=e308]
                  - img [ref=e310]
                  - img [ref=e312]
                  - img [ref=e314]
            - paragraph [ref=e316]: "\"The personalized job matching is incredible. Every alert is relevant to my skills and interests.\""
            - generic [ref=e318]:
              - generic [ref=e319]: ✅ Verified Success
              - generic [ref=e320]: 🎯 Smart Matching
          - generic [ref=e321]:
            - generic [ref=e322]:
              - generic [ref=e323]:
                - img "Arjun Kumar" [ref=e324]
                - img [ref=e326]
              - generic [ref=e328]:
                - heading "Arjun Kumar" [level=3] [ref=e329]
                - paragraph [ref=e330]: Data Scientist at Swiggy
                - generic [ref=e332]:
                  - img [ref=e333]
                  - img [ref=e335]
                  - img [ref=e337]
                  - img [ref=e339]
                  - img [ref=e341]
            - paragraph [ref=e343]: "\"Premium notifications gave me a competitive edge. Worth every penny!\""
            - generic [ref=e345]:
              - generic [ref=e346]: ✅ Verified Success
              - generic [ref=e347]: Premium User
          - generic [ref=e348]:
            - generic [ref=e349]:
              - generic [ref=e350]:
                - img "Neha Gupta" [ref=e351]
                - img [ref=e353]
              - generic [ref=e355]:
                - heading "Neha Gupta" [level=3] [ref=e356]
                - paragraph [ref=e357]: Frontend Developer at Razorpay
                - generic [ref=e359]:
                  - img [ref=e360]
                  - img [ref=e362]
                  - img [ref=e364]
                  - img [ref=e366]
                  - img [ref=e368]
            - paragraph [ref=e370]: "\"Real-time alerts helped me apply within minutes. Got the job before anyone else!\""
            - generic [ref=e372]:
              - generic [ref=e373]: ✅ Verified Success
              - generic [ref=e374]: ⚡ Instant Alert
          - generic [ref=e375]:
            - generic [ref=e376]:
              - generic [ref=e377]:
                - img "Vikram Singh" [ref=e378]
                - img [ref=e380]
              - generic [ref=e382]:
                - heading "Vikram Singh" [level=3] [ref=e383]
                - paragraph [ref=e384]: Backend Engineer at Paytm
                - generic [ref=e386]:
                  - img [ref=e387]
                  - img [ref=e389]
                  - img [ref=e391]
                  - img [ref=e393]
                  - img [ref=e395]
            - paragraph [ref=e397]: "\"The interview tips and resources made all the difference in my preparation.\""
            - generic [ref=e399]:
              - generic [ref=e400]: ✅ Verified Success
              - generic [ref=e401]: 📚 Learning Hub
          - generic [ref=e402]:
            - generic [ref=e403]:
              - generic [ref=e404]:
                - img "Rohit Sharma" [ref=e405]
                - img [ref=e407]
              - generic [ref=e409]:
                - heading "Rohit Sharma" [level=3] [ref=e410]
                - paragraph [ref=e411]: Software Engineer at Flipkart
                - generic [ref=e413]:
                  - img [ref=e414]
                  - img [ref=e416]
                  - img [ref=e418]
                  - img [ref=e420]
                  - img [ref=e422]
            - paragraph [ref=e424]: "\"NotifyX helped me land my dream job! Got the alert 2 hours before it was posted publicly.\""
            - generic [ref=e426]:
              - generic [ref=e427]: ✅ Verified Success
              - generic [ref=e428]: ⚡ Priority Alert
          - generic [ref=e429]:
            - generic [ref=e430]:
              - generic [ref=e431]:
                - img "Priya Patel" [ref=e432]
                - img [ref=e434]
              - generic [ref=e436]:
                - heading "Priya Patel" [level=3] [ref=e437]
                - paragraph [ref=e438]: Product Manager at Zomato
                - generic [ref=e440]:
                  - img [ref=e441]
                  - img [ref=e443]
                  - img [ref=e445]
                  - img [ref=e447]
                  - img [ref=e449]
            - paragraph [ref=e451]: "\"The personalized job matching is incredible. Every alert is relevant to my skills and interests.\""
            - generic [ref=e453]:
              - generic [ref=e454]: ✅ Verified Success
              - generic [ref=e455]: 🎯 Smart Matching
          - generic [ref=e456]:
            - generic [ref=e457]:
              - generic [ref=e458]:
                - img "Arjun Kumar" [ref=e459]
                - img [ref=e461]
              - generic [ref=e463]:
                - heading "Arjun Kumar" [level=3] [ref=e464]
                - paragraph [ref=e465]: Data Scientist at Swiggy
                - generic [ref=e467]:
                  - img [ref=e468]
                  - img [ref=e470]
                  - img [ref=e472]
                  - img [ref=e474]
                  - img [ref=e476]
            - paragraph [ref=e478]: "\"Premium notifications gave me a competitive edge. Worth every penny!\""
            - generic [ref=e480]:
              - generic [ref=e481]: ✅ Verified Success
              - generic [ref=e482]: Premium User
      - generic [ref=e489]:
        - heading "Ready for Premium Success?" [level=2] [ref=e490]
        - paragraph [ref=e491]: Join 35,000+ freshers who have launched their careers with NotifyX
        - link "Join Premium Community" [ref=e493] [cursor=pointer]:
          - /url: /community
          - img [ref=e494]
          - text: Join Premium Community
    - contentinfo [ref=e497]:
      - generic [ref=e498]:
        - generic [ref=e499]:
          - generic [ref=e500]:
            - link "X Career Logo" [ref=e502] [cursor=pointer]:
              - /url: /
              - link "X Career Logo" [ref=e503]:
                - /url: /
                - img "X Career Logo" [ref=e504]
            - paragraph [ref=e505]: Helping tech freshers launch their careers with curated opportunities and resources.
            - generic [ref=e506]:
              - link [ref=e507] [cursor=pointer]:
                - /url: https://www.linkedin.com/company/x-careers/
                - img [ref=e508]
              - link [ref=e510] [cursor=pointer]:
                - /url: https://www.instagram.com/x_careers_official
                - img [ref=e511]
              - link [ref=e513] [cursor=pointer]:
                - /url: https://whatsapp.com/channel/0029Vak7B1WLo4hdCrawMw3i
                - img [ref=e514]
              - link [ref=e516] [cursor=pointer]:
                - /url: https://t.me/x_careers
                - img [ref=e517]
          - generic [ref=e519]:
            - heading "Company" [level=3] [ref=e520]
            - list [ref=e521]:
              - listitem [ref=e522]:
                - link "About Us" [ref=e523] [cursor=pointer]:
                  - /url: /about
              - listitem [ref=e524]:
                - link "Careers" [ref=e525] [cursor=pointer]:
                  - /url: /careers
          - generic [ref=e526]:
            - heading "Resources" [level=3] [ref=e527]
            - list [ref=e528]:
              - listitem [ref=e529]:
                - link "Resume Review" [ref=e530] [cursor=pointer]:
                  - /url: /resume-review
              - listitem [ref=e531]:
                - link "Blog" [ref=e532] [cursor=pointer]:
                  - /url: /blog
          - generic [ref=e533]:
            - heading "Legal" [level=3] [ref=e534]
            - list [ref=e535]:
              - listitem [ref=e536]:
                - link "Privacy Policy" [ref=e537] [cursor=pointer]:
                  - /url: /privacy-policy
              - listitem [ref=e538]:
                - link "Terms of Service" [ref=e539] [cursor=pointer]:
                  - /url: /terms-of-service
              - listitem [ref=e540]:
                - link "Refund Policy" [ref=e541] [cursor=pointer]:
                  - /url: /refund-policy
              - listitem [ref=e542]:
                - link "Shipping Policy" [ref=e543] [cursor=pointer]:
                  - /url: /shipping-policy
              - listitem [ref=e544]:
                - link "Terms and Conditions" [ref=e545] [cursor=pointer]:
                  - /url: /terms-and-conditions
        - generic [ref=e546]:
          - paragraph [ref=e547]: © 2026 X Careers. All rights reserved.
          - paragraph [ref=e548]:
            - text: X Careers is a product of
            - strong [ref=e549]: X Careers Connect Private Limited
            - text: . All services on this platform are provided by X Careers Connect Private Limited.
          - paragraph [ref=e550]: Built with ❤️ for tech freshers
  - region "Notifications alt+T"
  - alert [ref=e551]
  - generic [ref=e554] [cursor=pointer]:
    - img [ref=e555]
    - generic [ref=e557]: 1 error
    - button "Hide Errors" [ref=e558]:
      - img [ref=e559]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
  4  | 
  5  | test.describe('TC-02 — NotifyX Plans Page', () => {
  6  |   test.beforeEach(async ({ page }) => {
  7  |     await page.goto(`${BASE_URL}/notify`);
  8  |     await page.waitForLoadState('networkidle');
  9  |   });
  10 | 
  11 |   test('notify page loads successfully', async ({ page }) => {
  12 |     await expect(page).not.toHaveURL(/error|404/);
  13 |     const body = page.locator('body');
  14 |     await expect(body).toBeVisible();
  15 |   });
  16 | 
  17 |   test('plan cards are displayed with pricing', async ({ page }) => {
  18 |     // Check at least one plan price is visible
  19 |     const prices = page.locator('text=/₹49|₹99|₹299/');
  20 |     await expect(prices.first()).toBeVisible({ timeout: 10000 });
  21 |   });
  22 | 
  23 |   test('Basic plan (₹49) card is visible', async ({ page }) => {
  24 |     const basicPlan = page.locator('text=/basic/i').first();
  25 |     await expect(basicPlan).toBeVisible();
  26 |   });
  27 | 
  28 |   test('Premium plan (₹99) card is visible', async ({ page }) => {
  29 |     const premiumPlan = page.locator('text=/premium/i').first();
  30 |     await expect(premiumPlan).toBeVisible();
  31 |   });
  32 | 
  33 |   test('Enterprise plan (₹299) card is visible', async ({ page }) => {
  34 |     const enterprisePlan = page.locator('text=/enterprise/i').first();
  35 |     await expect(enterprisePlan).toBeVisible();
  36 |   });
  37 | 
  38 |   test('Buy/Get Started button exists for premium plan', async ({ page }) => {
  39 |     const buyBtn = page.locator('button, a').filter({ hasText: /buy|get started|subscribe/i }).first();
  40 |     await expect(buyBtn).toBeVisible();
  41 |     await expect(buyBtn).toBeEnabled();
  42 |   });
  43 | 
  44 |   test('clicking Buy Now opens payment modal or navigates to checkout', async ({ page }) => {
  45 |     const buyBtn = page.locator('button').filter({ hasText: /buy|get started|subscribe/i }).first();
  46 |     if (await buyBtn.isVisible()) {
  47 |       await buyBtn.click();
  48 |       // Either a modal appears or we navigate
  49 |       await page.waitForTimeout(1000);
  50 |       const modal = page.locator('[role="dialog"], .modal, [data-testid="payment-modal"]');
  51 |       const navigated = !page.url().includes('/notify');
> 52 |       expect(await modal.isVisible() || navigated).toBe(true);
     |                                                    ^ Error: expect(received).toBe(expected) // Object.is equality
  53 |     }
  54 |   });
  55 | });
  56 | 
```