# Admin Authentication Guide for Frontend

This guide explains how to implement admin authentication in the frontend, including login, token management, and API calls with Bearer tokens.

## Table of Contents
1. [Admin Login Flow](#admin-login-flow)
2. [Token Management](#token-management)
3. [API Calls with Bearer Token](#api-calls-with-bearer-token)
4. [Frontend Implementation Examples](#frontend-implementation-examples)
5. [Error Handling](#error-handling)
6. [Security Best Practices](#security-best-practices)

## Admin Login Flow

### 1. Login Endpoint
**URL:** `POST /api/v1/admin/login`  
**Content-Type:** `application/json`

### 2. Request Body
```json
{
  "email": "admin@notifyx.com",
  "password": "Admin123!"
}
```

### 3. Success Response
```json
{
  "success": true,
  "data": {
    "admin": {
      "id": "68d0138566b16cdc7b1ff3eb",
      "email": "admin@notifyx.com",
      "name": "System Administrator",
      "role": "admin",
      "permissions": [
        "user_management",
        "job_management",
        "subscription_management",
        "analytics_view",
        "email_management"
      ]
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OGQwMTM4NTY2YjE2Y2RjN2IxZmYzZWIiLCJlbWFpbCI6ImFkbWluQG5vdGlmeXguY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzU5OTA3MTA1LCJleHAiOjE3NjA1MTE5MDUsImF1ZCI6Im5vdGlmeXgtdXNlcnMiLCJpc3MiOiJub3RpZnl4LWJhY2tlbmQifQ.NmrEGhE0RCAdUmJsvcuYBtlBuTdkszbNBIboGoz3LZ4"
  },
  "timestamp": "2025-10-08T07:05:05.687Z"
}
```

### 4. Error Response
```json
{
  "success": false,
  "error": {
    "message": "Invalid credentials or account inactive"
  },
  "timestamp": "2025-10-08T07:05:05.687Z"
}
```

## Token Management

### Token Storage
Store the JWT token securely in your frontend application:

**Recommended Storage Options:**
1. **HttpOnly Cookies** (Most Secure)
2. **localStorage** (For development)
3. **sessionStorage** (For session-only storage)

### Token Expiration
- **Access Token:** 7 days
- **Token Format:** JWT with `userId`, `email`, `role` fields
- **Issuer:** `notifyx-backend`
- **Audience:** `notifyx-users`

### Token Structure (Decoded)
```json
{
  "userId": "68d0138566b16cdc7b1ff3eb",
  "email": "admin@notifyx.com",
  "role": "admin",
  "iat": 1759907105,
  "exp": 1760511905,
  "aud": "notifyx-users",
  "iss": "notifyx-backend"
}
```

## API Calls with Bearer Token

### Authorization Header Format
All authenticated API calls must include the Bearer token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

### Example API Calls

#### 1. Get All Users (Admin Only)
```javascript
const getAllUsers = async (token) => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/users', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
```

#### 2. Delete User (Admin Only)
```javascript
const deleteUser = async (userId, token) => {
  try {
    const response = await fetch(`http://localhost:3001/api/v1/users/${userId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};
```

## Frontend Implementation Examples

### React Implementation

#### 1. Admin Login Component
```jsx
import React, { useState } from 'react';

const AdminLogin = ({ onLoginSuccess }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:3001/api/v1/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });

      const data = await response.json();

      if (data.success) {
        // Store token securely
        localStorage.setItem('adminToken', data.data.token);
        localStorage.setItem('adminInfo', JSON.stringify(data.data.admin));
        
        // Call success callback
        onLoginSuccess(data.data);
      } else {
        setError(data.error.message);
      }
    } catch (error) {
      setError('Login failed. Please try again.');
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={credentials.email}
          onChange={(e) => setCredentials({...credentials, email: e.target.value})}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={credentials.password}
          onChange={(e) => setCredentials({...credentials, password: e.target.value})}
          required
        />
      </div>
      {error && <div style={{color: 'red'}}>{error}</div>}
      <button type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
};

export default AdminLogin;
```

#### 2. API Service with Token Management
```jsx
// services/adminApi.js
class AdminApiService {
  constructor() {
    this.baseURL = 'http://localhost:3001/api/v1';
    this.token = localStorage.getItem('adminToken');
  }

  // Set token after login
  setToken(token) {
    this.token = token;
    localStorage.setItem('adminToken', token);
  }

  // Clear token on logout
  clearToken() {
    this.token = null;
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminInfo');
  }

  // Get authorization header
  getAuthHeaders() {
    return {
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json'
    };
  }

  // Generic API call method
  async apiCall(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      ...options,
      headers: {
        ...this.getAuthHeaders(),
        ...options.headers
      }
    };

    try {
      const response = await fetch(url, config);
      
      // Handle token expiration
      if (response.status === 401) {
        this.clearToken();
        window.location.href = '/admin/login';
        throw new Error('Session expired. Please login again.');
      }

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error?.message || 'API call failed');
      }

      return data;
    } catch (error) {
      console.error('API call error:', error);
      throw error;
    }
  }

  // Admin-specific API methods
  async getAllUsers(page = 1, limit = 10, filters = {}) {
    const queryParams = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...filters
    });
    
    return this.apiCall(`/users?${queryParams}`);
  }

  async deleteUser(userId) {
    return this.apiCall(`/users/${userId}`, {
      method: 'DELETE'
    });
  }

  async updateUser(userId, userData) {
    return this.apiCall(`/users/${userId}`, {
      method: 'PUT',
      body: JSON.stringify(userData)
    });
  }

  async getJobs(page = 1, limit = 10) {
    const queryParams = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString()
    });
    
    return this.apiCall(`/jobs?${queryParams}`);
  }

  async getAnalytics() {
    return this.apiCall('/analytics');
  }
}

export default new AdminApiService();
```

#### 3. Admin Dashboard Component
```jsx
import React, { useState, useEffect } from 'react';
import AdminApiService from '../services/adminApi';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    setLoading(true);
    setError('');
    
    try {
      const data = await AdminApiService.getAllUsers();
      setUsers(data.data.users);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (!window.confirm('Are you sure you want to delete this user?')) {
      return;
    }

    try {
      await AdminApiService.deleteUser(userId);
      // Reload users after deletion
      loadUsers();
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {error && <div style={{color: 'red'}}>{error}</div>}
      
      <h2>Users ({users.length})</h2>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Name</th>
            <th>Role</th>
            <th>Subscription</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.email}</td>
              <td>{user.name || 'N/A'}</td>
              <td>{user.role}</td>
              <td>{user.subscriptionPlan}</td>
              <td>
                <button onClick={() => handleDeleteUser(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
```

### Vue.js Implementation

#### 1. Admin Login Component
```vue
<template>
  <form @submit.prevent="handleLogin">
    <div>
      <label>Email:</label>
      <input 
        v-model="credentials.email" 
        type="email" 
        required 
      />
    </div>
    <div>
      <label>Password:</label>
      <input 
        v-model="credentials.password" 
        type="password" 
        required 
      />
    </div>
    <div v-if="error" style="color: red">{{ error }}</div>
    <button type="submit" :disabled="loading">
      {{ loading ? 'Logging in...' : 'Login' }}
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      credentials: {
        email: '',
        password: ''
      },
      loading: false,
      error: ''
    };
  },
  methods: {
    async handleLogin() {
      this.loading = true;
      this.error = '';

      try {
        const response = await fetch('http://localhost:3001/api/v1/admin/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.credentials)
        });

        const data = await response.json();

        if (data.success) {
          localStorage.setItem('adminToken', data.data.token);
          localStorage.setItem('adminInfo', JSON.stringify(data.data.admin));
          this.$emit('login-success', data.data);
        } else {
          this.error = data.error.message;
        }
      } catch (error) {
        this.error = 'Login failed. Please try again.';
        console.error('Login error:', error);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>
```

## Error Handling

### Common Error Responses

#### 1. Invalid Credentials (401)
```json
{
  "success": false,
  "error": {
    "message": "Invalid credentials or account inactive"
  },
  "timestamp": "2025-10-08T07:05:05.687Z"
}
```

#### 2. Invalid Token (401)
```json
{
  "success": false,
  "error": {
    "message": "Invalid or expired token"
  },
  "timestamp": "2025-10-08T07:05:05.687Z"
}
```

#### 3. Insufficient Permissions (403)
```json
{
  "success": false,
  "error": {
    "message": "Admin access required"
  },
  "timestamp": "2025-10-08T07:05:05.687Z"
}
```

### Error Handling Best Practices

```javascript
const handleApiError = (error, response) => {
  if (response?.status === 401) {
    // Token expired or invalid
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminInfo');
    window.location.href = '/admin/login';
  } else if (response?.status === 403) {
    // Insufficient permissions
    alert('You do not have permission to perform this action.');
  } else if (response?.status >= 500) {
    // Server error
    alert('Server error. Please try again later.');
  } else {
    // Other errors
    alert(error.message || 'An error occurred. Please try again.');
  }
};
```

## Security Best Practices

### 1. Token Storage
- **Production:** Use HttpOnly cookies
- **Development:** localStorage is acceptable
- **Never:** Store tokens in URL parameters or plain text

### 2. Token Transmission
- Always use HTTPS in production
- Include token in Authorization header, not in request body
- Never log tokens in console or error messages

### 3. Token Validation
- Check token expiration before making API calls
- Implement automatic token refresh if needed
- Clear tokens on logout

### 4. Error Handling
- Don't expose sensitive information in error messages
- Log errors securely on the server side
- Implement proper user feedback for different error types

## Testing the Implementation

### 1. Test Admin Login
```bash
curl -X POST http://localhost:3001/api/v1/admin/login \
  -H "Content-Type: application/json" \
  -d '{"email": "admin@notifyx.com", "password": "Admin123!"}'
```

### 2. Test Protected Endpoint
```bash
curl -X GET http://localhost:3001/api/v1/users \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE" \
  -H "Content-Type: application/json"
```

### 3. Test Invalid Token
```bash
curl -X GET http://localhost:3001/api/v1/users \
  -H "Authorization: Bearer invalid_token" \
  -H "Content-Type: application/json"
```

## Available Admin Endpoints

| Method | Endpoint | Description | Required Permissions |
|--------|----------|-------------|---------------------|
| GET | `/api/v1/users` | Get all users | `user_management` |
| DELETE | `/api/v1/users/:id` | Delete user | `user_management` |
| PUT | `/api/v1/users/:id` | Update user | `user_management` |
| GET | `/api/v1/jobs` | Get all jobs | `job_management` |
| POST | `/api/v1/jobs` | Create job | `job_management` |
| PUT | `/api/v1/jobs/:id` | Update job | `job_management` |
| DELETE | `/api/v1/jobs/:id` | Delete job | `job_management` |
| GET | `/api/v1/analytics` | Get analytics | `analytics_view` |

## Support

For any issues or questions regarding admin authentication:
1. Check the server logs for detailed error messages
2. Verify the JWT token format and expiration
3. Ensure proper CORS configuration for your frontend domain
4. Contact the backend team for assistance

---

**Last Updated:** October 8, 2025  
**Version:** 1.0
