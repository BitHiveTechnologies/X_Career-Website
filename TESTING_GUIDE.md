# 🧪 Testing Guide - Payment Flow & Premium Features

## 📋 Pre-Testing Checklist

### **Environment Setup**
- [ ] Backend server running (port 3001)
- [ ] Frontend server running (port 3000)
- [ ] Razorpay API keys configured in `.env` or `mcp.json`
- [ ] Database connected
- [ ] Test payment credentials available

### **Required Accounts**
- [ ] Test user account created
- [ ] User logged in with valid JWT token
- [ ] Razorpay test mode enabled

---

## 🔍 Test Scenarios

### **Scenario 1: Successful Payment Flow (Happy Path)**

#### **Steps:**
1. **Navigate to subscription page**
   ```
   Go to: http://localhost:3000/subscriptions
   ```

2. **Click upgrade button**
   - Click on "Upgrade to Premium" or "Choose Premium"
   - Payment modal should open

3. **Verify payment modal displays:**
   - [ ] Plan name and price (e.g., "Premium ₹299")
   - [ ] Plan features listed
   - [ ] Payment steps indicator
   - [ ] Security notice
   - [ ] Cancel and Pay buttons

4. **Click "Pay ₹299" button**
   - [ ] Order creation initiated
   - [ ] Step 1 (Creating Order) shows loading
   - [ ] Razorpay checkout modal opens

5. **Complete payment in Razorpay**
   - Use test card: `4111 1111 1111 1111`
   - Expiry: Any future date (e.g., 12/25)
   - CVV: Any 3 digits (e.g., 123)
   - [ ] Payment accepted

6. **Verify payment verification**
   - [ ] Step 3 (Verification) shows loading
   - [ ] Success alert appears: "🎉 Payment successful!"
   - [ ] Modal closes automatically

7. **Verify navigation**
   - [ ] Redirected to `/profile` page
   - [ ] Profile page loads successfully

8. **Verify premium UI elements on profile:**
   - [ ] Premium badge appears next to user name
   - [ ] Crown icon (👑) visible
   - [ ] "365 days remaining" text displayed
   - [ ] Expiration date shown
   - [ ] Subscription status card appears in sidebar
   - [ ] All subscription details visible

9. **Verify data in browser**
   ```javascript
   // Open DevTools Console
   console.log(JSON.parse(localStorage.getItem('careerx_user')));
   
   // Should show:
   // {
   //   subscriptionPlan: "premium",
   //   subscriptionStatus: "active",
   //   subscriptionInfo: {
   //     isActive: true,
   //     daysRemaining: 365,
   //     ...
   //   }
   // }
   ```

10. **Verify API response**
    ```bash
    # Test /me endpoint
    curl -X GET http://localhost:3001/api/v1/users/me \
      -H "Authorization: Bearer YOUR_TOKEN"
    
    # Should return subscriptionInfo object
    ```

#### **Expected Results:**
- ✅ Payment processed successfully
- ✅ User data refreshed from backend
- ✅ Navigation to profile completed
- ✅ Premium badge visible
- ✅ Subscription details displayed
- ✅ No console errors

---

### **Scenario 2: Payment Failure**

#### **Steps:**
1. Navigate to subscription page
2. Click upgrade button
3. Click "Pay ₹299"
4. In Razorpay, click "Payment Failed" or close modal

#### **Expected Results:**
- ✅ Error message displayed
- ✅ Modal remains open
- ✅ User can retry payment
- ✅ No navigation occurs
- ✅ User data unchanged

---

### **Scenario 3: Network Error During Verification**

#### **Test Setup:**
```javascript
// In DevTools Network tab
// Set throttling to "Offline" after payment
```

#### **Expected Results:**
- ✅ Error caught gracefully
- ✅ Error message shown to user
- ✅ Modal state reset
- ✅ User can retry

---

### **Scenario 4: Premium UI Display**

#### **Test Active Subscription:**
1. Login with user who has active subscription
2. Navigate to `/profile`
3. Verify all premium elements visible

#### **Expected Elements:**
- [ ] Premium badge in header (golden gradient)
- [ ] Crown icon (👑)
- [ ] Days remaining text (e.g., "365 days remaining")
- [ ] Expiration date (e.g., "Valid until Oct 8, 2026")
- [ ] Subscription status card with:
  - [ ] Plan name badge
  - [ ] Active status badge (green)
  - [ ] Days remaining counter
  - [ ] Expiration date
  - [ ] "Enjoying premium benefits" message

#### **Test Inactive Subscription:**
1. Login with free user
2. Navigate to `/profile`

#### **Expected Elements:**
- [ ] No premium badge
- [ ] No days remaining text
- [ ] Subscription card shows "Inactive"
- [ ] "Upgrade to Premium" button visible
- [ ] Gray color scheme for card

---

### **Scenario 5: Page Refresh After Payment**

#### **Steps:**
1. Complete payment successfully
2. Get redirected to profile
3. Refresh the page (F5 or Cmd+R)

#### **Expected Results:**
- ✅ Premium status persists
- ✅ User data loaded from localStorage
- ✅ Premium UI elements still visible
- ✅ Subscription info intact

---

### **Scenario 6: Logout and Login Again**

#### **Steps:**
1. Complete payment and verify premium status
2. Logout from the application
3. Login again with same credentials

#### **Expected Results:**
- ✅ Premium status restored after login
- ✅ User data fetched from backend
- ✅ Premium UI elements visible
- ✅ Subscription details correct

---

## 🔧 Debugging Tools

### **1. Browser DevTools**

#### **Console Logging:**
```javascript
// Check user state
console.log('User:', JSON.parse(localStorage.getItem('careerx_user')));

// Check token
console.log('Token:', localStorage.getItem('careerx_token'));

// Monitor API calls
// Go to Network tab and filter by "Fetch/XHR"
```

#### **React DevTools:**
```javascript
// Check AuthContext state
// In React DevTools, find AuthProvider component
// Inspect "user" state
```

### **2. API Testing**

#### **Test /me endpoint:**
```bash
TOKEN="your_jwt_token_here"

curl -X GET http://localhost:3001/api/v1/users/me \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json"
```

#### **Test payment order creation:**
```bash
curl -X POST http://localhost:3001/api/v1/payments/create-order \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "plan": "premium",
    "amount": 299,
    "currency": "INR"
  }'
```

### **3. Network Inspection**

#### **Monitor Payment Flow:**
1. Open DevTools → Network tab
2. Start payment process
3. Watch for these requests:
   - [ ] `POST /api/v1/payments/create-order`
   - [ ] `POST /api/v1/payments/verify`
   - [ ] `GET /api/v1/users/me`

#### **Check Response Data:**
```json
// /me endpoint should return:
{
  "success": true,
  "data": {
    "user": {
      "subscriptionPlan": "premium",
      "subscriptionInfo": {
        "isActive": true,
        "daysRemaining": 365,
        "plan": "premium",
        "endDate": "2026-10-08T00:00:00.000Z"
      }
    }
  }
}
```

---

## 🐛 Common Issues & Solutions

### **Issue 1: Premium badge not showing**

**Symptoms:**
- Payment successful
- Redirected to profile
- No premium badge visible

**Debugging:**
```javascript
// Check user data in console
const user = JSON.parse(localStorage.getItem('careerx_user'));
console.log('Subscription Info:', user?.subscriptionInfo);
console.log('Is Active:', user?.subscriptionInfo?.isActive);
```

**Solutions:**
1. Check if `subscriptionInfo` exists in user object
2. Verify `isActive` is `true`
3. Check if `/me` API was called after payment
4. Verify backend returns `subscriptionInfo` in response

---

### **Issue 2: Navigation not working**

**Symptoms:**
- Payment successful
- Still on payment page
- No redirect to profile

**Debugging:**
```javascript
// Check router in PaymentModal
console.log('Router available:', !!router);
```

**Solutions:**
1. Verify `useRouter` imported from `next/navigation`
2. Check if `router.push('/profile')` is called
3. Look for JavaScript errors in console
4. Verify payment verification success condition

---

### **Issue 3: User data not refreshing**

**Symptoms:**
- Payment successful
- Redirected to profile
- Old data still showing

**Debugging:**
```javascript
// Check if refreshUser was called
console.log('Auth context:', useAuth());
```

**Solutions:**
1. Verify `refreshUser()` method exists in AuthContext
2. Check if method is called in `handlePaymentVerification`
3. Verify `/me` API is being called
4. Check network tab for API request
5. Verify API returns updated data

---

### **Issue 4: Razorpay not opening**

**Symptoms:**
- Click "Pay" button
- Nothing happens
- No Razorpay modal

**Debugging:**
```javascript
// Check if Razorpay loaded
console.log('Razorpay:', window.Razorpay);
```

**Solutions:**
1. Check if Razorpay script loaded (Network tab)
2. Verify `https://checkout.razorpay.com/v1/checkout.js` in page source
3. Check for JavaScript errors
4. Verify order creation was successful
5. Check Razorpay API keys are correct

---

## 📊 Test Results Template

### **Test Session: [Date/Time]**

#### **Environment:**
- Frontend: http://localhost:3000
- Backend: http://localhost:3001
- Razorpay Mode: Test

#### **Test Results:**

| Scenario | Status | Notes |
|----------|--------|-------|
| Successful Payment | ✅ / ❌ | |
| Premium Badge Display | ✅ / ❌ | |
| Days Remaining | ✅ / ❌ | |
| Subscription Card | ✅ / ❌ | |
| Payment Failure | ✅ / ❌ | |
| Network Error | ✅ / ❌ | |
| Page Refresh | ✅ / ❌ | |
| Logout/Login | ✅ / ❌ | |

#### **Issues Found:**
1. [Issue description]
2. [Issue description]

#### **Screenshots:**
- [ ] Payment modal
- [ ] Razorpay checkout
- [ ] Success message
- [ ] Profile with premium badge
- [ ] Subscription card

---

## 🎯 Performance Testing

### **Load Time:**
- [ ] Payment modal opens < 500ms
- [ ] Razorpay loads < 1s
- [ ] Profile page loads < 1s
- [ ] API calls complete < 500ms

### **User Experience:**
- [ ] Smooth transitions
- [ ] No UI flicker
- [ ] Clear loading states
- [ ] Responsive on mobile

---

## ✅ Final Acceptance Criteria

- [ ] Payment completes successfully with Razorpay
- [ ] User automatically redirected to profile page
- [ ] Premium badge appears next to user name
- [ ] Crown icon (👑) displayed
- [ ] Days remaining counter shows correct value
- [ ] Expiration date formatted correctly
- [ ] Subscription status card appears in sidebar
- [ ] All subscription details visible
- [ ] User data persists after page refresh
- [ ] User data persists after logout/login
- [ ] Error handling works for failed payments
- [ ] No console errors
- [ ] Mobile responsive
- [ ] All API calls successful
- [ ] LocalStorage updated correctly

---

## 🚀 Production Deployment Checklist

Before deploying to production:

### **Backend:**
- [ ] Use production Razorpay keys
- [ ] Verify `/me` endpoint returns `subscriptionInfo`
- [ ] Test payment verification endpoint
- [ ] Check database subscription records
- [ ] Verify CORS settings
- [ ] Test with production database

### **Frontend:**
- [ ] Update API endpoints to production URLs
- [ ] Remove console.log statements
- [ ] Test with production build (`npm run build`)
- [ ] Verify all environment variables set
- [ ] Test on multiple browsers
- [ ] Test on mobile devices
- [ ] Run lighthouse audit
- [ ] Check accessibility

### **Razorpay:**
- [ ] Switch to production mode
- [ ] Use live API keys
- [ ] Configure webhooks
- [ ] Test with real payment methods
- [ ] Set up payment notifications

---

## 📞 Support & Resources

### **Documentation:**
- [IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md) - Complete implementation details
- [PAYMENT_FLOW_IMPLEMENTATION.md](./PAYMENT_FLOW_IMPLEMENTATION.md) - Technical flow
- [UI_PREVIEW_GUIDE.md](./UI_PREVIEW_GUIDE.md) - UI components and design
- [SUBSCRIPTION_UPDATE_SUMMARY.md](./SUBSCRIPTION_UPDATE_SUMMARY.md) - Backend API details

### **External Resources:**
- [Razorpay Test Cards](https://razorpay.com/docs/payments/payments/test-card-details/)
- [Razorpay Integration Guide](https://razorpay.com/docs/payments/payment-gateway/web-integration/)
- [Next.js Router Documentation](https://nextjs.org/docs/app/api-reference/functions/use-router)

---

## 🎉 Success!

If all tests pass, your payment flow is ready for production! 🚀

**Key Features Working:**
✅ Seamless Razorpay integration
✅ Automatic user data refresh
✅ Beautiful premium UI
✅ Professional subscription management
✅ Robust error handling

**Happy Testing! 🧪✨**

