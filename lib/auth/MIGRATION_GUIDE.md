# Authentication Migration Guide

This guide helps you migrate from the mock authentication system to the real backend integration.

## 🔄 Migration Steps

### 1. Update AuthProvider Import

**Before:**
```tsx
import { AuthProvider } from '@/lib/auth/AuthContext';
```

**After:**
```tsx
import { AuthProvider } from '@/lib/auth/AuthContextBackend';
```

### 2. Update User Type

The new authentication system uses a more comprehensive User type that matches the backend API.

**Old User Type:**
```tsx
interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: string;
  subscription?: {
    plan: 'free' | 'starter' | 'premium';
    status: 'active' | 'inactive' | 'cancelled';
    startDate?: string;
    endDate?: string;
  };
}
```

**New User Type:**
```tsx
interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  mobile?: string;
  role: 'user' | 'admin' | 'super_admin';
  subscriptionStatus: 'active' | 'inactive' | 'expired' | 'cancelled';
  profile?: UserProfile;
  isProfileComplete: boolean;
  type?: string;
}
```

### 3. Update Component Usage

**Before:**
```tsx
const { user, login, logout, isAuthenticated } = useAuth();

// Access user name
const userName = user?.name;

// Check subscription
const subscription = user?.subscription?.plan;
```

**After:**
```tsx
const { user, login, logout, isAuthenticated, getUserSubscription } = useAuth();

// Access user name
const userName = user ? `${user.firstName} ${user.lastName}` : '';

// Check subscription
const subscription = getUserSubscription();
```

### 4. New Features Available

The new authentication system provides additional features:

```tsx
const { 
  // Existing features
  user, 
  login, 
  logout, 
  isAuthenticated,
  
  // New profile features
  getUserProfile,
  updateProfile,
  getProfileCompletion,
  
  // New role-based access control
  hasRole,
  isAdmin,
  isSuperAdmin,
  canAccessAdmin,
  
  // Enhanced subscription management
  updateSubscription,
  getUserSubscription
} = useAuth();
```

### 5. Profile Management

**Get User Profile:**
```tsx
const { getUserProfile } = useAuth();

const handleGetProfile = async () => {
  const result = await getUserProfile();
  if (result.success) {
    console.log('User profile:', result.profile);
  } else {
    console.error('Error:', result.error);
  }
};
```

**Update Profile:**
```tsx
const { updateProfile } = useAuth();

const handleUpdateProfile = async (profileData) => {
  const result = await updateProfile(profileData);
  if (result.success) {
    console.log('Profile updated:', result.user);
  } else {
    console.error('Error:', result.error);
  }
};
```

**Check Profile Completion:**
```tsx
const { getProfileCompletion } = useAuth();

const handleCheckCompletion = async () => {
  const result = await getProfileCompletion();
  if (result.success) {
    console.log('Completion:', result.completion);
  }
};
```

### 6. Role-Based Access Control

**Check User Role:**
```tsx
const { hasRole, isAdmin, canAccessAdmin } = useAuth();

// Check specific role
if (hasRole('admin')) {
  // Show admin features
}

// Check if user is admin
if (isAdmin()) {
  // Show admin panel
}

// Check if user can access admin features
if (canAccessAdmin()) {
  // Show admin dashboard
}
```

### 7. Error Handling

The new system provides better error handling:

```tsx
const { login } = useAuth();

const handleLogin = async (email, password) => {
  const result = await login(email, password);
  
  if (result.success) {
    // Login successful
    console.log('Logged in successfully');
  } else {
    // Handle error
    console.error('Login failed:', result.error);
    // Show error message to user
  }
};
```

## 🔧 Configuration

### Environment Variables

Make sure you have the correct environment variables set:

```env
# .env.local
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
NEXT_PUBLIC_API_VERSION=v1
```

### Backend Connection

The new authentication system requires a running backend server. Make sure your backend is running on the configured URL.

## 🧪 Testing

### Test Authentication

```tsx
import { testApiSetup } from '@/lib/api';

// Test API setup
const testResult = await testApiSetup();
console.log('API Setup Status:', testResult.success);
```

### Test Login

```tsx
import { authService } from '@/lib/api';

// Test login
const result = await authService.login({
  email: 'test@example.com',
  role: 'user',
  firstName: 'Test',
  lastName: 'User'
});

console.log('Login result:', result);
```

## 🚨 Breaking Changes

1. **User Object Structure**: The user object now has `firstName` and `lastName` instead of `name`
2. **Subscription Access**: Use `getUserSubscription()` instead of `user.subscription.plan`
3. **Profile Data**: Profile data is now in a separate `profile` object
4. **Role Management**: New role-based access control methods
5. **Error Handling**: All methods now return structured error responses

## 📚 Additional Resources

- [API Documentation](../../lib/api/README.md)
- [Type Definitions](../../lib/api/types.ts)
- [Authentication Service](../../lib/api/auth.ts)
- [Backend Integration Guide](../../BACKEND_INTEGRATION_GUIDE.md)

## 🆘 Troubleshooting

### Common Issues

1. **"User not authenticated" errors**: Make sure the backend is running and accessible
2. **Token validation errors**: Check if the JWT token is valid and not expired
3. **Profile data missing**: Ensure the user has completed their profile setup
4. **Role access denied**: Verify the user has the correct role for the requested action

### Debug Mode

Enable debug logging by adding this to your component:

```tsx
useEffect(() => {
  console.log('Auth state:', { user, isAuthenticated, isLoading });
}, [user, isAuthenticated, isLoading]);
```

---

**Migration Complete! 🎉**

Your authentication system is now fully integrated with the backend API.

