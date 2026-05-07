# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 01-homepage.spec.ts >> TC-01 — Homepage & Website Exploration >> page loads without JS console errors
- Location: e2e/tests/01-homepage.spec.ts:24:7

# Error details

```
Error: expect(received).toHaveLength(expected)

Expected length: 0
Received length: 10
Received array:  ["Warning: In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s <a> a·
    at a
    at LinkComponent (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/link.js:121:19)
    at Logo (webpack-internal:///(app-pages-browser)/./components/ui/Logo.tsx:12:11)
    at a
    at LinkComponent (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/link.js:121:19)
    at div
    at div
    at div
    at div
    at footer
    at Footer
    at main
    at div
    at Page (webpack-internal:///(app-pages-browser)/./app/page.tsx:229:90)
    at ClientPageRoot (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/client-page.js:14:11)
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/layout-router.js:243:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/redirect-boundary.js:74:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/redirect-boundary.js:82:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/not-found-boundary.js:76:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/not-found-boundary.js:84:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/layout-router.js:349:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/error-boundary.js:113:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/error-boundary.js:160:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/layout-router.js:153:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/layout-router.js:228:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/render-from-template-context.js:16:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/layout-router.js:370:11)
    at AuthProvider (webpack-internal:///(app-pages-browser)/./lib/auth/AuthContext.tsx:33:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./components/ErrorBoundary.tsx:81:9)
    at Providers (webpack-internal:///(app-pages-browser)/./app/providers.tsx:17:11)
    at body
    at html
    at RootLayout (Server)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/redirect-boundary.js:74:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/redirect-boundary.js:82:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/not-found-boundary.js:76:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/not-found-boundary.js:84:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/dev-root-not-found-boundary.js:33:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/react-dev-overlay/app/ReactDevOverlay.js:87:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/react-dev-overlay/app/hot-reloader-client.js:321:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/app-router.js:207:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/error-boundary.js:113:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/error-boundary.js:160:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/app-router.js:585:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/app-index.js:112:27)
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/app-index.js:117:11)", "Warning: An error occurred during hydration. The server HTML was replaced with client content in <%s>. #document", "Failed to load resource: the server responded with a status of 404 (Not Found)", "Failed to load resource: the server responded with a status of 404 (Not Found)", "Failed to fetch stats SyntaxError: Unexpected token '<', \"<!DOCTYPE \"... is not valid JSON", "Failed to fetch testimonials SyntaxError: Unexpected token '<', \"<!DOCTYPE \"... is not valid JSON", "Failed to load resource: the server responded with a status of 404 (Not Found)", "Failed to load resource: the server responded with a status of 404 (Not Found)", "Failed to fetch stats SyntaxError: Unexpected token '<', \"<!DOCTYPE \"... is not valid JSON", "Failed to fetch testimonials SyntaxError: Unexpected token '<', \"<!DOCTYPE \"... is not valid JSON"]
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e3]:
      - banner [ref=e5]:
        - navigation [ref=e6]:
          - generic [ref=e7]:
            - link "X Career Logo XCareers" [ref=e8] [cursor=pointer]:
              - /url: /
              - img "X Career Logo" [ref=e11]
              - generic [ref=e13]: XCareers
            - generic [ref=e14]:
              - link "Home" [ref=e15] [cursor=pointer]:
                - /url: /
              - link "Jobs" [ref=e16] [cursor=pointer]:
                - /url: /jobs
              - link "Internships" [ref=e17] [cursor=pointer]:
                - /url: /internships
              - link "Resume Builder" [ref=e18] [cursor=pointer]:
                - /url: /resume-builder
            - generic [ref=e19]:
              - link "Login" [ref=e20] [cursor=pointer]:
                - /url: /login
              - link "Subscribe" [ref=e21] [cursor=pointer]:
                - /url: /notify
      - generic [ref=e24]:
        - link "NOTIFY X" [ref=e26] [cursor=pointer]:
          - /url: /notify
          - img [ref=e27]
          - text: NOTIFY X
        - generic [ref=e31]:
          - link "Join Telegram Community" [ref=e32] [cursor=pointer]:
            - /url: https://t.me/x_careers
            - img [ref=e33]
            - text: Join Telegram Community
          - link "Join WhatsApp Community" [ref=e35] [cursor=pointer]:
            - /url: https://whatsapp.com/channel/0029Vak7B1WLo4hdCrawMw3i
            - img [ref=e36]
            - text: Join WhatsApp Community
    - main [ref=e38]:
      - generic [ref=e46]:
        - generic [ref=e47]:
          - img [ref=e48]
          - text: India's Most Trusted Career Platform for Tech Freshers
        - heading "Launch Your Tech Career with Top Companies" [level=1] [ref=e50]:
          - generic [ref=e51]: Launch Your Tech Career
          - generic [ref=e52]: with Top Companies
        - paragraph [ref=e53]: Explore Jobs, Internships & Career Resources Designed for Freshers
        - generic [ref=e54]:
          - generic [ref=e55]:
            - generic [ref=e56]: 35,213
            - generic [ref=e57]: Freshers Joined
          - generic [ref=e58]:
            - generic [ref=e59]: 10k+
            - generic [ref=e60]: Verified Jobs
          - generic [ref=e61]:
            - generic [ref=e62]: 42,780
            - generic [ref=e63]: Active Members
          - generic [ref=e64]:
            - generic [ref=e65]: 1,250
            - generic [ref=e66]: Premium Users
        - generic [ref=e68]:
          - generic [ref=e70]:
            - textbox "Search Jobs, Internships, or Companies..." [ref=e71]
            - button "SEARCH" [ref=e72] [cursor=pointer]
          - generic [ref=e73]:
            - generic [ref=e74]: 35K+ Active Freshers
            - generic [ref=e75]: 10,000+ Verified Opportunities
            - generic [ref=e76]: Built for Entry-Level Talent
        - generic [ref=e79]:
          - link "Join Our Network" [ref=e80] [cursor=pointer]:
            - /url: /community
            - img [ref=e81]
            - text: Join Our Network
            - img [ref=e83]
          - generic [ref=e85]:
            - button "Explore Opportunities" [ref=e86] [cursor=pointer]:
              - img [ref=e87]
              - text: Explore Opportunities
              - img [ref=e89]
            - link "Explore Opportunities":
              - /url: /jobs
        - generic [ref=e92]:
          - generic [ref=e93]: Discover More Opportunities Below
          - img [ref=e94]
      - generic [ref=e97]:
        - heading "Our Impact in Numbers" [level=2] [ref=e98]
        - generic [ref=e99]:
          - generic [ref=e100]:
            - img [ref=e102]
            - heading "Active Members" [level=3] [ref=e104]
            - paragraph [ref=e105]: 35,213 growing community members
            - button "Join Now" [ref=e106] [cursor=pointer]:
              - text: Join Now
              - img [ref=e107]
          - generic [ref=e109]:
            - img [ref=e111]
            - heading "Posted Jobs" [level=3] [ref=e113]
            - paragraph [ref=e114]: 1k Jobs posted till now
            - link "See Jobs" [ref=e115] [cursor=pointer]:
              - /url: /jobs
              - text: See Jobs
              - img [ref=e116]
          - generic [ref=e118]:
            - img [ref=e120]
            - heading "LinkedIn" [level=3] [ref=e124]
            - paragraph [ref=e125]: 40k professional followers
            - link "Connect" [ref=e126] [cursor=pointer]:
              - /url: https://www.linkedin.com/company/x-careers/
              - text: Connect
              - img [ref=e127]
          - generic [ref=e129]:
            - img [ref=e131]
            - heading "Registered Users" [level=3] [ref=e133]
            - paragraph [ref=e134]: 42,780 active accounts
      - generic [ref=e136]:
        - generic [ref=e137]:
          - heading "Why Choose X Careers" [level=2] [ref=e138]
          - paragraph [ref=e139]: Built Specifically for Tech Freshers
          - paragraph [ref=e140]: We understand what entry-level talent needs — and deliver exactly that.
        - generic [ref=e144]:
          - generic [ref=e145]:
            - heading "NOTIFY X" [level=3] [ref=e146]
            - paragraph [ref=e147]: Get Instant Job Alerts Tailored to Your Profile
          - link "Explore NotifyX →" [ref=e148] [cursor=pointer]:
            - /url: /notify
        - generic [ref=e149]:
          - generic [ref=e150]:
            - img [ref=e152]
            - heading "Built for Freshers" [level=3] [ref=e155]
            - paragraph [ref=e156]: Designed for 0–2 Years Experience — No Guesswork, Just Opportunities
          - generic [ref=e157]:
            - img [ref=e159]
            - heading "Curated Opportunities" [level=3] [ref=e162]
            - paragraph [ref=e163]: Handpicked Jobs from Companies That Hire & Train Freshers
          - generic [ref=e164]:
            - img [ref=e166]
            - heading "Supportive Network" [level=3] [ref=e169]
            - paragraph [ref=e170]: Connect with Peers, Mentors & Recruiters Who Actually Hire
      - generic [ref=e175]:
        - generic [ref=e176]:
          - heading "NotifyX" [level=2] [ref=e177]
          - paragraph [ref=e178]: Unlock Real-Time Job Alerts for Just ₹79/Month.
          - paragraph [ref=e179]: Access curated jobs, insider updates, and a powerful tech community — all for less than your daily coffee. Start growing your career today.
        - generic [ref=e180]:
          - generic [ref=e181]:
            - img [ref=e183]
            - heading "Instant Access" [level=3] [ref=e185]
            - paragraph [ref=e186]: Be the First to See New Job Openings — No Delays.
          - generic [ref=e187]:
            - img [ref=e189]
            - heading "Real-Time Alerts" [level=3] [ref=e192]
            - paragraph [ref=e193]: Receive Personalized Alerts Based on Your Skills & Interests.
          - generic [ref=e194]:
            - img [ref=e196]
            - heading "Fast-Track Your Career" [level=3] [ref=e198]
            - paragraph [ref=e199]: Apply Early, Stand Out, and Get Hired Faster.
      - generic [ref=e201]:
        - generic [ref=e202]:
          - heading "Hear From Our Members" [level=2] [ref=e203]
          - paragraph [ref=e204]: Real stories from freshers who launched their tech careers
        - generic [ref=e206]:
          - generic [ref=e207]:
            - generic [ref=e208]:
              - img "Priya Sharma" [ref=e209]
              - generic [ref=e210]:
                - heading "Priya Sharma" [level=4] [ref=e211]
                - paragraph [ref=e212]: Google
            - generic [ref=e214]:
              - img [ref=e215]
              - img [ref=e217]
              - img [ref=e219]
              - img [ref=e221]
              - img [ref=e223]
            - paragraph [ref=e225]: "\"X Careers gave me the confidence to land my role at Google.\""
          - generic [ref=e226]:
            - generic [ref=e227]:
              - img "Rahul Verma" [ref=e228]
              - generic [ref=e229]:
                - heading "Rahul Verma" [level=4] [ref=e230]
                - paragraph [ref=e231]: Amazon
            - generic [ref=e233]:
              - img [ref=e234]
              - img [ref=e236]
              - img [ref=e238]
              - img [ref=e240]
              - img [ref=e242]
            - paragraph [ref=e244]: "\"DSA practice helped me crack Amazon's interviews.\""
          - generic [ref=e245]:
            - generic [ref=e246]:
              - img "Ananya Patel" [ref=e247]
              - generic [ref=e248]:
                - heading "Ananya Patel" [level=4] [ref=e249]
                - paragraph [ref=e250]: Microsoft
            - generic [ref=e252]:
              - img [ref=e253]
              - img [ref=e255]
              - img [ref=e257]
              - img [ref=e259]
              - img [ref=e261]
            - paragraph [ref=e263]: "\"Community referrals fast-tracked my Microsoft application.\""
          - generic [ref=e264]:
            - generic [ref=e265]:
              - img "Vikram Singh" [ref=e266]
              - generic [ref=e267]:
                - heading "Vikram Singh" [level=4] [ref=e268]
                - paragraph [ref=e269]: Adobe
            - generic [ref=e271]:
              - img [ref=e272]
              - img [ref=e274]
              - img [ref=e276]
              - img [ref=e278]
              - img [ref=e280]
            - paragraph [ref=e282]: "\"The resume builder helped me create an ATS-friendly CV that got noticed.\""
          - generic [ref=e283]:
            - generic [ref=e284]:
              - img "Neha Gupta" [ref=e285]
              - generic [ref=e286]:
                - heading "Neha Gupta" [level=4] [ref=e287]
                - paragraph [ref=e288]: Flipkart
            - generic [ref=e290]:
              - img [ref=e291]
              - img [ref=e293]
              - img [ref=e295]
              - img [ref=e297]
              - img [ref=e299]
            - paragraph [ref=e301]: "\"From campus to Flipkart in 3 months thanks to X Careers resources!\""
          - generic [ref=e302]:
            - generic [ref=e303]:
              - img "Arjun Reddy" [ref=e304]
              - generic [ref=e305]:
                - heading "Arjun Reddy" [level=4] [ref=e306]
                - paragraph [ref=e307]: Infosys
            - generic [ref=e309]:
              - img [ref=e310]
              - img [ref=e312]
              - img [ref=e314]
              - img [ref=e316]
              - img [ref=e318]
            - paragraph [ref=e320]: "\"The mock interviews prepared me perfectly for the real thing.\""
          - generic [ref=e321]:
            - generic [ref=e322]:
              - img "Kavita Desai" [ref=e323]
              - generic [ref=e324]:
                - heading "Kavita Desai" [level=4] [ref=e325]
                - paragraph [ref=e326]: TCS
            - generic [ref=e328]:
              - img [ref=e329]
              - img [ref=e331]
              - img [ref=e333]
              - img [ref=e335]
              - img [ref=e337]
            - paragraph [ref=e339]: "\"Found my first job through X Careers job board - so grateful!\""
          - generic [ref=e340]:
            - generic [ref=e341]:
              - img "Rohan Mehta" [ref=e342]
              - generic [ref=e343]:
                - heading "Rohan Mehta" [level=4] [ref=e344]
                - paragraph [ref=e345]: Wipro
            - generic [ref=e347]:
              - img [ref=e348]
              - img [ref=e350]
              - img [ref=e352]
              - img [ref=e354]
              - img [ref=e356]
            - paragraph [ref=e358]: "\"The community support made all the difference in my job search.\""
          - generic [ref=e359]:
            - generic [ref=e360]:
              - img "Divya Sharma" [ref=e361]
              - generic [ref=e362]:
                - heading "Divya Sharma" [level=4] [ref=e363]
                - paragraph [ref=e364]: IBM
            - generic [ref=e366]:
              - img [ref=e367]
              - img [ref=e369]
              - img [ref=e371]
              - img [ref=e373]
              - img [ref=e375]
            - paragraph [ref=e377]: "\"X Careers helped me transition from college to a tech career seamlessly.\""
          - generic [ref=e378]:
            - generic [ref=e379]:
              - img "Priya Sharma" [ref=e380]
              - generic [ref=e381]:
                - heading "Priya Sharma" [level=4] [ref=e382]
                - paragraph [ref=e383]: Google
            - generic [ref=e385]:
              - img [ref=e386]
              - img [ref=e388]
              - img [ref=e390]
              - img [ref=e392]
              - img [ref=e394]
            - paragraph [ref=e396]: "\"X Careers gave me the confidence to land my role at Google.\""
          - generic [ref=e397]:
            - generic [ref=e398]:
              - img "Rahul Verma" [ref=e399]
              - generic [ref=e400]:
                - heading "Rahul Verma" [level=4] [ref=e401]
                - paragraph [ref=e402]: Amazon
            - generic [ref=e404]:
              - img [ref=e405]
              - img [ref=e407]
              - img [ref=e409]
              - img [ref=e411]
              - img [ref=e413]
            - paragraph [ref=e415]: "\"DSA practice helped me crack Amazon's interviews.\""
          - generic [ref=e416]:
            - generic [ref=e417]:
              - img "Ananya Patel" [ref=e418]
              - generic [ref=e419]:
                - heading "Ananya Patel" [level=4] [ref=e420]
                - paragraph [ref=e421]: Microsoft
            - generic [ref=e423]:
              - img [ref=e424]
              - img [ref=e426]
              - img [ref=e428]
              - img [ref=e430]
              - img [ref=e432]
            - paragraph [ref=e434]: "\"Community referrals fast-tracked my Microsoft application.\""
          - generic [ref=e435]:
            - generic [ref=e436]:
              - img "Vikram Singh" [ref=e437]
              - generic [ref=e438]:
                - heading "Vikram Singh" [level=4] [ref=e439]
                - paragraph [ref=e440]: Adobe
            - generic [ref=e442]:
              - img [ref=e443]
              - img [ref=e445]
              - img [ref=e447]
              - img [ref=e449]
              - img [ref=e451]
            - paragraph [ref=e453]: "\"The resume builder helped me create an ATS-friendly CV that got noticed.\""
          - generic [ref=e454]:
            - generic [ref=e455]:
              - img "Neha Gupta" [ref=e456]
              - generic [ref=e457]:
                - heading "Neha Gupta" [level=4] [ref=e458]
                - paragraph [ref=e459]: Flipkart
            - generic [ref=e461]:
              - img [ref=e462]
              - img [ref=e464]
              - img [ref=e466]
              - img [ref=e468]
              - img [ref=e470]
            - paragraph [ref=e472]: "\"From campus to Flipkart in 3 months thanks to X Careers resources!\""
          - generic [ref=e473]:
            - generic [ref=e474]:
              - img "Arjun Reddy" [ref=e475]
              - generic [ref=e476]:
                - heading "Arjun Reddy" [level=4] [ref=e477]
                - paragraph [ref=e478]: Infosys
            - generic [ref=e480]:
              - img [ref=e481]
              - img [ref=e483]
              - img [ref=e485]
              - img [ref=e487]
              - img [ref=e489]
            - paragraph [ref=e491]: "\"The mock interviews prepared me perfectly for the real thing.\""
          - generic [ref=e492]:
            - generic [ref=e493]:
              - img "Kavita Desai" [ref=e494]
              - generic [ref=e495]:
                - heading "Kavita Desai" [level=4] [ref=e496]
                - paragraph [ref=e497]: TCS
            - generic [ref=e499]:
              - img [ref=e500]
              - img [ref=e502]
              - img [ref=e504]
              - img [ref=e506]
              - img [ref=e508]
            - paragraph [ref=e510]: "\"Found my first job through X Careers job board - so grateful!\""
          - generic [ref=e511]:
            - generic [ref=e512]:
              - img "Rohan Mehta" [ref=e513]
              - generic [ref=e514]:
                - heading "Rohan Mehta" [level=4] [ref=e515]
                - paragraph [ref=e516]: Wipro
            - generic [ref=e518]:
              - img [ref=e519]
              - img [ref=e521]
              - img [ref=e523]
              - img [ref=e525]
              - img [ref=e527]
            - paragraph [ref=e529]: "\"The community support made all the difference in my job search.\""
          - generic [ref=e530]:
            - generic [ref=e531]:
              - img "Divya Sharma" [ref=e532]
              - generic [ref=e533]:
                - heading "Divya Sharma" [level=4] [ref=e534]
                - paragraph [ref=e535]: IBM
            - generic [ref=e537]:
              - img [ref=e538]
              - img [ref=e540]
              - img [ref=e542]
              - img [ref=e544]
              - img [ref=e546]
            - paragraph [ref=e548]: "\"X Careers helped me transition from college to a tech career seamlessly.\""
      - generic [ref=e553]:
        - generic [ref=e554]:
          - heading "Join 35,000+ Ambitious Tech Freshers" [level=2] [ref=e555]
          - paragraph [ref=e556]: Grow faster by connecting with a community that shares opportunities, guidance, and support.
        - generic [ref=e557]:
          - link "WhatsApp Daily Job Updates & Instant Alerts" [ref=e558] [cursor=pointer]:
            - /url: /whatsapp
            - img [ref=e560]
            - heading "WhatsApp" [level=3] [ref=e562]
            - paragraph [ref=e563]: Daily Job Updates & Instant Alerts
          - link "LinkedIn Professional Insights & Career Opportunities" [ref=e564] [cursor=pointer]:
            - /url: /linkedin
            - img [ref=e566]
            - heading "LinkedIn" [level=3] [ref=e568]
            - paragraph [ref=e569]: Professional Insights & Career Opportunities
          - link "Telegram Fast Updates & Exclusive Openings" [ref=e570] [cursor=pointer]:
            - /url: /telegram
            - img [ref=e572]
            - heading "Telegram" [level=3] [ref=e574]
            - paragraph [ref=e575]: Fast Updates & Exclusive Openings
          - link "Instagram Tips, Updates & Career Content" [ref=e576] [cursor=pointer]:
            - /url: /instagram
            - img [ref=e578]
            - heading "Instagram" [level=3] [ref=e580]
            - paragraph [ref=e581]: Tips, Updates & Career Content
      - generic [ref=e586]:
        - generic [ref=e587]:
          - heading "Top Opportunities for Freshers" [level=2] [ref=e588]
          - paragraph [ref=e589]: Carefully curated roles to help you land your first tech job faster
        - generic [ref=e590]:
          - generic [ref=e592]:
            - generic [ref=e593]:
              - img [ref=e595]
              - generic [ref=e598]: New
            - heading "Frontend Developer" [level=3] [ref=e599]
            - paragraph [ref=e600]: Microsoft
            - generic [ref=e601]:
              - generic [ref=e602]: React
              - generic [ref=e603]: TypeScript
              - generic [ref=e604]: Remote
            - generic [ref=e605]:
              - generic [ref=e606]: ₹5-8 LPA
              - generic [ref=e607]:
                - link "View Role" [ref=e608] [cursor=pointer]:
                  - /url: /jobs/view-details/microsoft/frontend-developer
                  - text: View Role
                  - img [ref=e609]
                - link "Apply Instantly →" [ref=e612] [cursor=pointer]:
                  - /url: /jobs/apply/microsoft/frontend-developer
                  - img [ref=e613]
                  - text: Apply Instantly →
          - generic [ref=e616]:
            - generic [ref=e617]:
              - img [ref=e619]
              - generic [ref=e621]: Featured
            - heading "Backend Engineer" [level=3] [ref=e622]
            - paragraph [ref=e623]: Amazon
            - generic [ref=e624]:
              - generic [ref=e625]: Java
              - generic [ref=e626]: Spring Boot
              - generic [ref=e627]: Hybrid
            - generic [ref=e628]:
              - generic [ref=e629]: ₹8-12 LPA
              - generic [ref=e630]:
                - link "View Role" [ref=e631] [cursor=pointer]:
                  - /url: /jobs/view-details/amazon/backend-engineer
                  - text: View Role
                  - img [ref=e632]
                - link "Apply Instantly →" [ref=e635] [cursor=pointer]:
                  - /url: /jobs/apply/amazon/backend-engineer
                  - img [ref=e636]
                  - text: Apply Instantly →
          - generic [ref=e639]:
            - generic [ref=e640]:
              - img [ref=e642]
              - generic [ref=e645]: Hot
            - heading "Full Stack Developer" [level=3] [ref=e646]
            - paragraph [ref=e647]: Google
            - generic [ref=e648]:
              - generic [ref=e649]: React
              - generic [ref=e650]: Node.js
              - generic [ref=e651]: Onsite
            - generic [ref=e652]:
              - generic [ref=e653]: ₹10-15 LPA
              - generic [ref=e654]:
                - link "View Role" [ref=e655] [cursor=pointer]:
                  - /url: /jobs/view-details/google/full-stack-developer
                  - text: View Role
                  - img [ref=e656]
                - link "Apply Instantly →" [ref=e659] [cursor=pointer]:
                  - /url: /jobs/apply/google/full-stack-developer
                  - img [ref=e660]
                  - text: Apply Instantly →
        - link "Explore All Opportunities →" [ref=e663] [cursor=pointer]:
          - /url: /jobs
          - text: Explore All Opportunities →
          - img [ref=e664]
      - generic [ref=e667]:
        - generic [ref=e668]:
          - heading "Everything You Need to Get Hired" [level=2] [ref=e669]
          - paragraph [ref=e670]: Tools, guidance, and resources to accelerate your career
        - generic [ref=e671]:
          - generic [ref=e673]:
            - img [ref=e675]
            - heading "Job Matches" [level=3] [ref=e678]
            - paragraph [ref=e679]: Get job recommendations tailored to your skills and profile
            - link "Explore →" [ref=e680] [cursor=pointer]:
              - /url: /resources/job-matches
              - text: Explore →
              - img [ref=e681]
          - generic [ref=e684]:
            - img [ref=e686]
            - heading "Community" [level=3] [ref=e691]
            - paragraph [ref=e692]: Learn, grow, and connect with a strong tech community
            - link "Explore →" [ref=e693] [cursor=pointer]:
              - /url: /community
              - text: Explore →
              - img [ref=e694]
          - generic [ref=e697]:
            - img [ref=e699]
            - heading "Resume Builder" [level=3] [ref=e702]
            - paragraph [ref=e703]: Build a professional, ATS-friendly resume that gets noticed
            - link "Explore →" [ref=e704] [cursor=pointer]:
              - /url: /resources/resume-builder
              - text: Explore →
              - img [ref=e705]
      - generic [ref=e712]:
        - generic [ref=e713]:
          - heading "Success Stories from Our Community" [level=2] [ref=e714]
          - paragraph [ref=e715]: Success stories from freshers who found their dream tech jobs
        - generic [ref=e718]:
          - generic [ref=e719]:
            - generic [ref=e720]:
              - generic [ref=e721]:
                - img "Priya Sharma" [ref=e722]
                - img [ref=e724]
              - generic [ref=e726]:
                - heading "Priya Sharma" [level=3] [ref=e727]
                - paragraph [ref=e728]: Google
                - generic [ref=e730]:
                  - img [ref=e731]
                  - img [ref=e733]
                  - img [ref=e735]
                  - img [ref=e737]
                  - img [ref=e739]
            - paragraph [ref=e741]: "\"X Careers gave me the confidence to land my role at Google.\""
            - generic [ref=e743]:
              - generic [ref=e744]: ✅ Verified Success
              - generic [ref=e745]: 🎯 Entry Level
          - generic [ref=e746]:
            - generic [ref=e747]:
              - generic [ref=e748]:
                - img "Rahul Verma" [ref=e749]
                - img [ref=e751]
              - generic [ref=e753]:
                - heading "Rahul Verma" [level=3] [ref=e754]
                - paragraph [ref=e755]: Amazon
                - generic [ref=e757]:
                  - img [ref=e758]
                  - img [ref=e760]
                  - img [ref=e762]
                  - img [ref=e764]
                  - img [ref=e766]
            - paragraph [ref=e768]: "\"DSA practice helped me crack Amazon's interviews.\""
            - generic [ref=e770]:
              - generic [ref=e771]: ✅ Verified Success
              - generic [ref=e772]: 🎯 Entry Level
          - generic [ref=e773]:
            - generic [ref=e774]:
              - generic [ref=e775]:
                - img "Ananya Patel" [ref=e776]
                - img [ref=e778]
              - generic [ref=e780]:
                - heading "Ananya Patel" [level=3] [ref=e781]
                - paragraph [ref=e782]: Microsoft
                - generic [ref=e784]:
                  - img [ref=e785]
                  - img [ref=e787]
                  - img [ref=e789]
                  - img [ref=e791]
                  - img [ref=e793]
            - paragraph [ref=e795]: "\"Community referrals fast-tracked my Microsoft application.\""
            - generic [ref=e797]:
              - generic [ref=e798]: ✅ Verified Success
              - generic [ref=e799]: 🎯 Entry Level
          - generic [ref=e800]:
            - generic [ref=e801]:
              - generic [ref=e802]:
                - img "Vikram Singh" [ref=e803]
                - img [ref=e805]
              - generic [ref=e807]:
                - heading "Vikram Singh" [level=3] [ref=e808]
                - paragraph [ref=e809]: Adobe
                - generic [ref=e811]:
                  - img [ref=e812]
                  - img [ref=e814]
                  - img [ref=e816]
                  - img [ref=e818]
                  - img [ref=e820]
            - paragraph [ref=e822]: "\"The resume builder helped me create an ATS-friendly CV that got noticed.\""
            - generic [ref=e824]:
              - generic [ref=e825]: ✅ Verified Success
              - generic [ref=e826]: 🎯 Entry Level
          - generic [ref=e827]:
            - generic [ref=e828]:
              - generic [ref=e829]:
                - img "Neha Gupta" [ref=e830]
                - img [ref=e832]
              - generic [ref=e834]:
                - heading "Neha Gupta" [level=3] [ref=e835]
                - paragraph [ref=e836]: Flipkart
                - generic [ref=e838]:
                  - img [ref=e839]
                  - img [ref=e841]
                  - img [ref=e843]
                  - img [ref=e845]
                  - img [ref=e847]
            - paragraph [ref=e849]: "\"From campus to Flipkart in 3 months thanks to X Careers resources!\""
            - generic [ref=e851]:
              - generic [ref=e852]: ✅ Verified Success
              - generic [ref=e853]: 🎯 Entry Level
          - generic [ref=e854]:
            - generic [ref=e855]:
              - generic [ref=e856]:
                - img "Arjun Reddy" [ref=e857]
                - img [ref=e859]
              - generic [ref=e861]:
                - heading "Arjun Reddy" [level=3] [ref=e862]
                - paragraph [ref=e863]: Infosys
                - generic [ref=e865]:
                  - img [ref=e866]
                  - img [ref=e868]
                  - img [ref=e870]
                  - img [ref=e872]
                  - img [ref=e874]
            - paragraph [ref=e876]: "\"The mock interviews prepared me perfectly for the real thing.\""
            - generic [ref=e878]:
              - generic [ref=e879]: ✅ Verified Success
              - generic [ref=e880]: 🎯 Entry Level
          - generic [ref=e881]:
            - generic [ref=e882]:
              - generic [ref=e883]:
                - img "Kavita Desai" [ref=e884]
                - img [ref=e886]
              - generic [ref=e888]:
                - heading "Kavita Desai" [level=3] [ref=e889]
                - paragraph [ref=e890]: TCS
                - generic [ref=e892]:
                  - img [ref=e893]
                  - img [ref=e895]
                  - img [ref=e897]
                  - img [ref=e899]
                  - img [ref=e901]
            - paragraph [ref=e903]: "\"Found my first job through X Careers job board - so grateful!\""
            - generic [ref=e905]:
              - generic [ref=e906]: ✅ Verified Success
              - generic [ref=e907]: 🎯 Entry Level
          - generic [ref=e908]:
            - generic [ref=e909]:
              - generic [ref=e910]:
                - img "Rohan Mehta" [ref=e911]
                - img [ref=e913]
              - generic [ref=e915]:
                - heading "Rohan Mehta" [level=3] [ref=e916]
                - paragraph [ref=e917]: Wipro
                - generic [ref=e919]:
                  - img [ref=e920]
                  - img [ref=e922]
                  - img [ref=e924]
                  - img [ref=e926]
                  - img [ref=e928]
            - paragraph [ref=e930]: "\"The community support made all the difference in my job search.\""
            - generic [ref=e932]:
              - generic [ref=e933]: ✅ Verified Success
              - generic [ref=e934]: 🎯 Entry Level
          - generic [ref=e935]:
            - generic [ref=e936]:
              - generic [ref=e937]:
                - img "Divya Sharma" [ref=e938]
                - img [ref=e940]
              - generic [ref=e942]:
                - heading "Divya Sharma" [level=3] [ref=e943]
                - paragraph [ref=e944]: IBM
                - generic [ref=e946]:
                  - img [ref=e947]
                  - img [ref=e949]
                  - img [ref=e951]
                  - img [ref=e953]
                  - img [ref=e955]
            - paragraph [ref=e957]: "\"X Careers helped me transition from college to a tech career seamlessly.\""
            - generic [ref=e959]:
              - generic [ref=e960]: ✅ Verified Success
              - generic [ref=e961]: 🎯 Entry Level
          - generic [ref=e962]:
            - generic [ref=e963]:
              - generic [ref=e964]:
                - img "Priya Sharma" [ref=e965]
                - img [ref=e967]
              - generic [ref=e969]:
                - heading "Priya Sharma" [level=3] [ref=e970]
                - paragraph [ref=e971]: Google
                - generic [ref=e973]:
                  - img [ref=e974]
                  - img [ref=e976]
                  - img [ref=e978]
                  - img [ref=e980]
                  - img [ref=e982]
            - paragraph [ref=e984]: "\"X Careers gave me the confidence to land my role at Google.\""
            - generic [ref=e986]:
              - generic [ref=e987]: ✅ Verified Success
              - generic [ref=e988]: 🎯 Entry Level
          - generic [ref=e989]:
            - generic [ref=e990]:
              - generic [ref=e991]:
                - img "Rahul Verma" [ref=e992]
                - img [ref=e994]
              - generic [ref=e996]:
                - heading "Rahul Verma" [level=3] [ref=e997]
                - paragraph [ref=e998]: Amazon
                - generic [ref=e1000]:
                  - img [ref=e1001]
                  - img [ref=e1003]
                  - img [ref=e1005]
                  - img [ref=e1007]
                  - img [ref=e1009]
            - paragraph [ref=e1011]: "\"DSA practice helped me crack Amazon's interviews.\""
            - generic [ref=e1013]:
              - generic [ref=e1014]: ✅ Verified Success
              - generic [ref=e1015]: 🎯 Entry Level
          - generic [ref=e1016]:
            - generic [ref=e1017]:
              - generic [ref=e1018]:
                - img "Ananya Patel" [ref=e1019]
                - img [ref=e1021]
              - generic [ref=e1023]:
                - heading "Ananya Patel" [level=3] [ref=e1024]
                - paragraph [ref=e1025]: Microsoft
                - generic [ref=e1027]:
                  - img [ref=e1028]
                  - img [ref=e1030]
                  - img [ref=e1032]
                  - img [ref=e1034]
                  - img [ref=e1036]
            - paragraph [ref=e1038]: "\"Community referrals fast-tracked my Microsoft application.\""
            - generic [ref=e1040]:
              - generic [ref=e1041]: ✅ Verified Success
              - generic [ref=e1042]: 🎯 Entry Level
      - generic [ref=e1047]:
        - paragraph [ref=e1048]: Your Tech Career Starts Here
        - heading "Ready to Get Hired in Tech?" [level=2] [ref=e1049]
        - paragraph [ref=e1050]: Join 35,000+ freshers already building their careers with X Careers
        - generic [ref=e1051]:
          - button "Get Started for Free →" [ref=e1052] [cursor=pointer]
          - link "Explore Jobs →" [ref=e1053] [cursor=pointer]:
            - /url: /jobs
      - generic [ref=e1055]:
        - generic [ref=e1056]:
          - generic [ref=e1057]:
            - link "X Career Logo" [ref=e1059] [cursor=pointer]:
              - /url: /
              - link "X Career Logo" [ref=e1060]:
                - /url: /
                - img "X Career Logo" [ref=e1061]
            - paragraph [ref=e1062]: Helping tech freshers launch their careers with curated opportunities and resources.
            - generic [ref=e1063]:
              - link [ref=e1064] [cursor=pointer]:
                - /url: https://www.linkedin.com/company/x-careers/
                - img [ref=e1065]
              - link [ref=e1067] [cursor=pointer]:
                - /url: https://www.instagram.com/x_careers_official
                - img [ref=e1068]
              - link [ref=e1070] [cursor=pointer]:
                - /url: https://whatsapp.com/channel/0029Vak7B1WLo4hdCrawMw3i
                - img [ref=e1071]
              - link [ref=e1073] [cursor=pointer]:
                - /url: https://t.me/x_careers
                - img [ref=e1074]
          - generic [ref=e1076]:
            - heading "Company" [level=3] [ref=e1077]
            - list [ref=e1078]:
              - listitem [ref=e1079]:
                - link "About Us" [ref=e1080] [cursor=pointer]:
                  - /url: /about
              - listitem [ref=e1081]:
                - link "Careers" [ref=e1082] [cursor=pointer]:
                  - /url: /careers
          - generic [ref=e1083]:
            - heading "Resources" [level=3] [ref=e1084]
            - list [ref=e1085]:
              - listitem [ref=e1086]:
                - link "Resume Review" [ref=e1087] [cursor=pointer]:
                  - /url: /resume-review
              - listitem [ref=e1088]:
                - link "Blog" [ref=e1089] [cursor=pointer]:
                  - /url: /blog
          - generic [ref=e1090]:
            - heading "Legal" [level=3] [ref=e1091]
            - list [ref=e1092]:
              - listitem [ref=e1093]:
                - link "Privacy Policy" [ref=e1094] [cursor=pointer]:
                  - /url: /privacy-policy
              - listitem [ref=e1095]:
                - link "Terms of Service" [ref=e1096] [cursor=pointer]:
                  - /url: /terms-of-service
              - listitem [ref=e1097]:
                - link "Refund Policy" [ref=e1098] [cursor=pointer]:
                  - /url: /refund-policy
              - listitem [ref=e1099]:
                - link "Shipping Policy" [ref=e1100] [cursor=pointer]:
                  - /url: /shipping-policy
              - listitem [ref=e1101]:
                - link "Terms and Conditions" [ref=e1102] [cursor=pointer]:
                  - /url: /terms-and-conditions
        - generic [ref=e1103]:
          - paragraph [ref=e1104]: © 2026 X Careers. All rights reserved.
          - paragraph [ref=e1105]:
            - text: X Careers is a product of
            - strong [ref=e1106]: X Careers Connect Private Limited
            - text: . All services on this platform are provided by X Careers Connect Private Limited.
          - paragraph [ref=e1107]: Built with ❤️ for tech freshers
  - region "Notifications alt+T"
  - alert [ref=e1108]
  - generic [ref=e1111] [cursor=pointer]:
    - img [ref=e1112]
    - generic [ref=e1114]: 1 error
    - button "Hide Errors" [ref=e1115]:
      - img [ref=e1116]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
  4  | 
  5  | test.describe('TC-01 — Homepage & Website Exploration', () => {
  6  |   test.beforeEach(async ({ page }) => {
  7  |     await page.goto(BASE_URL);
  8  |   });
  9  | 
  10 |   test('homepage loads with correct title', async ({ page }) => {
  11 |     await expect(page).toHaveTitle(/career|notify|x career/i);
  12 |   });
  13 | 
  14 |   test('navigation bar is visible', async ({ page }) => {
  15 |     const nav = page.locator('nav, header');
  16 |     await expect(nav.first()).toBeVisible();
  17 |   });
  18 | 
  19 |   test('hero section has a primary CTA button', async ({ page }) => {
  20 |     const cta = page.locator('a[href], button').filter({ hasText: /get started|explore|notify|join/i }).first();
  21 |     await expect(cta).toBeVisible();
  22 |   });
  23 | 
  24 |   test('page loads without JS console errors', async ({ page }) => {
  25 |     const errors: string[] = [];
  26 |     page.on('console', msg => {
  27 |       if (msg.type() === 'error') errors.push(msg.text());
  28 |     });
  29 |     await page.goto(BASE_URL);
  30 |     await page.waitForLoadState('networkidle');
  31 |     // Filter out known third-party errors
  32 |     const criticalErrors = errors.filter(e =>
  33 |       !e.includes('favicon') && !e.includes('analytics') && !e.includes('gtag')
  34 |     );
> 35 |     expect(criticalErrors).toHaveLength(0);
     |                            ^ Error: expect(received).toHaveLength(expected)
  36 |   });
  37 | 
  38 |   test('page does not have broken images', async ({ page }) => {
  39 |     await page.waitForLoadState('networkidle');
  40 |     const brokenImages = await page.evaluate(() => {
  41 |       const imgs = Array.from(document.querySelectorAll('img'));
  42 |       return imgs.filter(img => !img.complete || img.naturalWidth === 0).map(img => img.src);
  43 |     });
  44 |     expect(brokenImages).toHaveLength(0);
  45 |   });
  46 | 
  47 |   test('footer is visible at bottom of page', async ({ page }) => {
  48 |     await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  49 |     const footer = page.locator('footer');
  50 |     await expect(footer).toBeVisible();
  51 |   });
  52 | 
  53 |   test('footer links are clickable', async ({ page }) => {
  54 |     await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  55 |     const privacyLink = page.locator('a[href*="privacy"]').first();
  56 |     if (await privacyLink.isVisible()) {
  57 |       await expect(privacyLink).toBeEnabled();
  58 |     }
  59 |   });
  60 | 
  61 |   test('page is responsive at 375px mobile width', async ({ page }) => {
  62 |     await page.setViewportSize({ width: 375, height: 812 });
  63 |     await page.goto(BASE_URL);
  64 |     // No horizontal overflow
  65 |     const hasHorizontalScroll = await page.evaluate(() =>
  66 |       document.body.scrollWidth > window.innerWidth
  67 |     );
  68 |     expect(hasHorizontalScroll).toBe(false);
  69 |   });
  70 | });
  71 | 
```