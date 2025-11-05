# Testing the Authentication Fix

## Quick Test Checklist

### ✅ Pre-Test Setup
1. Clear browser localStorage:
   ```javascript
   // In browser console
   localStorage.clear();
   ```

2. Verify API base URL is configured:
   ```javascript
   // In browser console
   console.log(process.env.NEXT_PUBLIC_API_BASE_URL);
   ```

3. Open DevTools (F12) and navigate to:
   - Console tab (to see logs)
   - Network tab (to see API calls)
   - Application → Local Storage (to verify token storage)

### ✅ Test 1: Successful Admin Login

**Steps:**
1. Navigate to login page
2. Enter admin credentials:
   - Email: `admin@notifyx.com` or `superadmin@notifyx.com`
   - Password: (your admin password)
3. Click "Login"

**Expected Console Output:**
```
🔐 AuthContext.login: Using admin login for admin user: admin@notifyx.com
🔐 Admin login attempt: { email: "admin@notifyx.com" }
🔐 Admin login raw response: { success: true, hasData: true, ... }
🔐 Token extraction: { hasToken: true, tokenPreview: "eyJhbGciOiJIUzI1NiI..." }
✅ Storing valid token in apiClient
✅ TokenManager.setToken: Storing valid token: eyJhbGciOiJIUzI1NiI...
✅ TokenManager.setToken: Token saved to localStorage
✅ TokenManager.setToken: Token verified in localStorage
✅ Token storage verification: { tokenStored: true, tokensMatch: true }
🔐 AuthContext.login: Found token in result.data.token
💾 AuthContext.login: Storing user and token in localStorage
✅ AuthContext.login: Storage verification: { tokenStored: true, userStored: true, tokenMatches: true }
🚀 AuthContext.login: Redirecting admin to /dashboard
```

**Expected localStorage:**
```javascript
// Check in Application → Local Storage
{
  "careerx_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "careerx_user": "{\"id\":\"...\",\"email\":\"admin@notifyx.com\",\"role\":\"admin\",...}"
}
```

**Expected Network Requests:**
1. **Login Request:**
   ```
   POST /api/v1/admin/login
   Status: 200 OK
   Response: { success: true, data: { token: "...", user: {...} } }
   ```

2. **Subsequent Requests:**
   ```
   GET /api/v1/users/me (or any authenticated endpoint)
   Headers: {
     Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
   }
   Status: 200 OK (not 401)
   ```

**✅ Pass Criteria:**
- [x] Console shows all ✅ success messages
- [x] No ❌ error messages in console
- [x] localStorage contains `careerx_token`
- [x] Token is a valid JWT (3 parts separated by dots)
- [x] Redirected to `/dashboard`
- [x] Subsequent API calls include Authorization header
- [x] Subsequent API calls return 200, not 401

**❌ Fail Criteria:**
- Any ❌ error messages in console
- localStorage missing `careerx_token`
- Token value is `undefined`, `null`, or empty string
- Stuck on login page (no redirect)
- Subsequent API calls return 401 Unauthorized

---

### ✅ Test 2: Regular User Login

**Steps:**
1. Clear localStorage
2. Navigate to login page
3. Enter user credentials:
   - Email: `demo@example.com` (or any non-admin email)
   - Password: (user password)
4. Click "Login"

**Expected Console Output:**
```
🔐 AuthContext.login: Using regular user login for: demo@example.com
(similar log messages as admin login)
🚀 AuthContext.login: Redirecting user to /
```

**✅ Pass Criteria:**
- Same as Test 1, but redirects to `/` instead of `/dashboard`
- User role is `'user'` not `'admin'`

---

### ✅ Test 3: Invalid Credentials

**Steps:**
1. Clear localStorage
2. Navigate to login page
3. Enter invalid credentials:
   - Email: `admin@notifyx.com`
   - Password: `wrongpassword`
4. Click "Login"

**Expected Behavior:**
- Error message displayed
- No redirect
- localStorage remains empty
- Console may show API error

**✅ Pass Criteria:**
- [x] User sees error message
- [x] Stays on login page
- [x] localStorage has no token
- [x] No ✅ success messages in console

---

### ✅ Test 4: Token Persistence (Page Refresh)

**Steps:**
1. Complete Test 1 (successful admin login)
2. Verify you're on `/dashboard`
3. Refresh the page (F5)

**Expected Behavior:**
- Token is read from localStorage
- User remains authenticated
- Dashboard loads successfully
- No redirect to login

**Expected Console Output:**
```
Auth initialization - checking stored data: { hasUser: true, hasToken: true, tokenPreview: "..." }
🔍 TokenManager.getToken: Retrieved token from localStorage: eyJhbGciOiJIUzI1NiI...
```

**✅ Pass Criteria:**
- [x] Page refresh maintains authentication
- [x] Dashboard loads without re-login
- [x] No 401 errors on API calls

---

### ✅ Test 5: Logout Functionality

**Steps:**
1. Complete Test 1 (successful admin login)
2. Click "Logout" button

**Expected Behavior:**
- Token removed from localStorage
- User removed from localStorage
- Redirected to home/login page

**Expected Console Output:**
```
🗑️ TokenManager.clearToken: Clearing token
```

**Expected localStorage:**
```javascript
// localStorage should be empty or missing auth keys
{
  // no careerx_token
  // no careerx_user
}
```

**✅ Pass Criteria:**
- [x] localStorage cleared
- [x] Redirected to login/home
- [x] Cannot access dashboard without re-login

---

### ✅ Test 6: Backend Returns No Token (Error Handling)

This test requires modifying the backend or mocking the response.

**Mock Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "123",
      "email": "admin@notifyx.com"
    }
    // NO TOKEN!
  }
}
```

**Expected Console Output:**
```
❌ CRITICAL: No valid token found in admin login response
❌ Response structure: { ... }
❌ AuthContext.login: CRITICAL - No valid token available after login!
```

**Expected Behavior:**
- Login fails with error message
- No redirect
- localStorage remains empty

**✅ Pass Criteria:**
- [x] Error message shown to user
- [x] Console shows ❌ CRITICAL error
- [x] No token stored in localStorage
- [x] User stays on login page

---

## Browser DevTools Guide

### Console Tab
Look for these emoji prefixes:
- 🔐 = Authentication event
- ✅ = Success
- ❌ = Error/Failure
- 💾 = Storage operation
- 🚀 = Navigation/Redirect
- 🔍 = Token retrieval
- 🗑️ = Clear/Delete operation

### Network Tab
1. Filter by "Fetch/XHR"
2. Look for `/api/v1/admin/login` or `/api/v1/auth/login`
3. Check Response:
   - Status should be 200
   - Response should contain `token` or `accessToken`
4. Check subsequent requests:
   - Headers should include `Authorization: Bearer ...`

### Application Tab → Local Storage
Look for:
- `careerx_token` - Should be a JWT (looks like: eyJhbGc...)
- `careerx_user` - Should be JSON with user data

To verify token is valid JWT:
```javascript
const token = localStorage.getItem('careerx_token');
const parts = token.split('.');
console.log('Valid JWT:', parts.length === 3);
console.log('Decoded payload:', JSON.parse(atob(parts[1])));
```

---

## Manual Testing Commands

### Clear All Auth Data
```javascript
// In browser console
localStorage.removeItem('careerx_token');
localStorage.removeItem('careerx_user');
localStorage.removeItem('careerx_redirect_after_auth');
```

### Check Current Token
```javascript
// In browser console
const token = localStorage.getItem('careerx_token');
console.log('Token exists:', !!token);
console.log('Token value:', token);

if (token) {
  const parts = token.split('.');
  console.log('Token parts:', parts.length);
  if (parts.length === 3) {
    try {
      const payload = JSON.parse(atob(parts[1]));
      console.log('Token payload:', payload);
      console.log('Expires at:', new Date(payload.exp * 1000));
      console.log('Is expired:', payload.exp < Date.now() / 1000);
    } catch (e) {
      console.error('Invalid token format:', e);
    }
  }
}
```

### Check Current User
```javascript
// In browser console
const user = localStorage.getItem('careerx_user');
console.log('User exists:', !!user);
if (user) {
  console.log('User data:', JSON.parse(user));
}
```

### Test API Call with Token
```javascript
// In browser console
const token = localStorage.getItem('careerx_token');
fetch('/api/v1/users/me', {
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
})
  .then(r => r.json())
  .then(data => console.log('API response:', data))
  .catch(err => console.error('API error:', err));
```

---

## Known Issues & Workarounds

### Issue: Token not persisting after page refresh
**Cause:** Browser privacy/security settings blocking localStorage
**Solution:** Check browser settings, disable "Block third-party cookies" if enabled

### Issue: 401 errors despite token in localStorage
**Cause:** Token might be expired or invalid
**Solution:** 
```javascript
// Check token expiration
const token = localStorage.getItem('careerx_token');
const payload = JSON.parse(atob(token.split('.')[1]));
const isExpired = payload.exp < Date.now() / 1000;
console.log('Token expired:', isExpired);
```

### Issue: Console shows "Token verification failed"
**Cause:** localStorage.setItem() failed (quota exceeded, permissions)
**Solution:** 
- Clear browser cache and cookies
- Check localStorage quota
- Try incognito/private browsing mode

---

## Automated Testing (Future Enhancement)

Consider adding these automated tests:

```typescript
describe('Admin Login', () => {
  it('should store token in localStorage on successful login', async () => {
    // Mock API response
    // Call login
    // Assert localStorage.getItem('careerx_token') exists
  });

  it('should fail login if no token in response', async () => {
    // Mock API response without token
    // Call login
    // Assert error message
    // Assert localStorage empty
  });

  it('should include Authorization header in subsequent requests', async () => {
    // Login
    // Make API call
    // Assert Authorization header present
  });
});
```

---

## Success Summary

If all tests pass, you should see:

✅ Admin can login successfully  
✅ Token is stored in localStorage  
✅ Token is included in API request headers  
✅ API calls succeed with 200 status  
✅ Token persists after page refresh  
✅ Logout clears token properly  
✅ Error handling works for missing tokens  

## Contact for Issues

If any tests fail, check:
1. Console for ❌ error messages
2. Network tab for API response structure
3. localStorage for token value
4. Compare with examples in [AUTHENTICATION_FIX.md](./AUTHENTICATION_FIX.md)

