# NotifyX API Integration

This directory contains all the API integration code for connecting the NotifyX frontend with the backend services.

## 📁 Structure

```
lib/api/
├── config.ts      # API configuration and endpoints
├── client.ts      # HTTP client with authentication
├── env.ts         # Environment variables management
├── health.ts      # Health check utilities
├── test.ts        # Testing utilities
├── index.ts       # Centralized exports
└── README.md      # This file
```

## 🚀 Quick Start

### 1. Import the API client

```typescript
import { apiClient, API_ENDPOINTS } from '@/lib/api';

// Make a simple GET request
const response = await apiClient.get(API_ENDPOINTS.HEALTH.CHECK);
```

### 2. Test the setup

```typescript
import { testApiSetup } from '@/lib/api';

// Run comprehensive API setup test
const result = await testApiSetup();
console.log('API Setup Status:', result.success);
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in your project root:

```env
# Backend API Configuration
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
NEXT_PUBLIC_API_VERSION=v1

# Razorpay Configuration
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_your_key_id_here
NEXT_PUBLIC_RAZORPAY_KEY_SECRET=your_key_secret_here

# Feature Flags
NEXT_PUBLIC_ENABLE_PAYMENTS=true
NEXT_PUBLIC_ENABLE_NOTIFICATIONS=true
```

### API Configuration

The API client automatically configures itself based on the environment:

- **Development**: `http://localhost:3000` with 10s timeout
- **Production**: `https://api.notifyx.com` with 15s timeout
- **Test**: `http://localhost:3001` with 5s timeout

## 📡 Usage Examples

### Authentication

```typescript
import { apiClient, API_ENDPOINTS } from '@/lib/api';

// Login
const loginResponse = await apiClient.post(API_ENDPOINTS.AUTH.LOGIN, {
  email: 'user@example.com',
  role: 'user',
  firstName: 'John',
  lastName: 'Doe'
});

// Set token for subsequent requests
apiClient.setToken(loginResponse.data.token);
```

### Making Requests

```typescript
// GET request with query parameters
const jobs = await apiClient.get(API_ENDPOINTS.JOBS.ALL, {
  page: 1,
  limit: 10,
  type: 'job'
});

// POST request with data
const application = await apiClient.post(
  API_ENDPOINTS.APPLICATIONS.APPLY('job_123'),
  {
    resumeUrl: 'https://example.com/resume.pdf',
    coverLetter: 'I am interested in this position...'
  }
);
```

### Error Handling

```typescript
import { ApiError } from '@/lib/api';

try {
  const response = await apiClient.get(API_ENDPOINTS.USERS.ME);
  // Handle success
} catch (error) {
  if (error instanceof ApiError) {
    console.error('API Error:', error.message);
    console.error('Status Code:', error.status);
    console.error('Error Code:', error.code);
  } else {
    console.error('Unknown error:', error);
  }
}
```

## 🏥 Health Monitoring

### Check Backend Health

```typescript
import { checkBackendHealth, healthMonitor } from '@/lib/api';

// One-time health check
const health = await checkBackendHealth();
console.log('Backend Status:', health.isHealthy);

// Continuous monitoring
healthMonitor.start(30000); // Check every 30 seconds
healthMonitor.onStatusChange((status) => {
  console.log('Health Status Changed:', status);
});
```

## 🔐 Authentication

The API client automatically handles JWT tokens:

- Tokens are stored in localStorage
- Automatic token validation and refresh
- Automatic token inclusion in requests
- Token expiration handling

### Manual Token Management

```typescript
// Set token manually
apiClient.setToken('your-jwt-token');

// Get current token
const token = apiClient.getToken();

// Check if authenticated
const isAuth = apiClient.isAuthenticated();

// Clear token (logout)
apiClient.clearToken();
```

## 🛠️ Development

### Testing API Setup

```typescript
import { testApiSetup, quickConnectivityTest } from '@/lib/api';

// Quick test
const isConnected = await quickConnectivityTest();

// Comprehensive test
const testResult = await testApiSetup();
if (testResult.success) {
  console.log('✅ API setup is ready!');
} else {
  console.log('❌ API setup needs attention');
  console.log('Details:', testResult.results);
}
```

### Available Endpoints

All backend endpoints are available through `API_ENDPOINTS`:

- **Authentication**: `AUTH.LOGIN`, `AUTH.ME`, `AUTH.VERIFY`
- **Users**: `USERS.ME`, `USERS.ME_COMPLETION`, `USERS.PROFILE(userId)`
- **Jobs**: `JOBS.ALL`, `JOBS.SEARCH`, `JOBS.BY_ID(jobId)`
- **Applications**: `APPLICATIONS.APPLY(jobId)`, `APPLICATIONS.MY_APPLICATIONS`
- **Payments**: `PAYMENTS.CREATE_ORDER`, `PAYMENTS.VERIFY`
- **Subscriptions**: `SUBSCRIPTIONS.CURRENT`, `SUBSCRIPTIONS.PLANS`
- **Matching**: `MATCHING.RECOMMENDATIONS`, `MATCHING.ANALYTICS`
- **Admin**: `ADMIN.DASHBOARD`, `ADMIN.USER_ANALYTICS`
- **Health**: `HEALTH.CHECK`, `HEALTH.API_DOCS`

## 🔄 Next Steps

1. **Test the setup** - Run `testApiSetup()` to verify everything is working
2. **Integrate authentication** - Replace mock auth with real JWT integration
3. **Connect data sources** - Replace mock data with real API calls
4. **Add error handling** - Implement user-friendly error messages
5. **Add loading states** - Show loading indicators during API calls

## 📚 Additional Resources

- [Backend Integration Guide](../../BACKEND_INTEGRATION_GUIDE.md)
- [API Endpoints Summary](../../API_ENDPOINTS_SUMMARY.md)
- [Backend API Documentation](http://localhost:3000/api/v1/)

---

**Ready to integrate! 🚀**

