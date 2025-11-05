'use client';

import { useAuth } from '@/lib/auth/AuthContext';
import { AuthGuard } from '@/components/AuthGuard';
import { useState } from 'react';

export default function TestAuthPage() {
  const { user, isAuthenticated, login, register, logout } = useAuth();
  const [testEmail, setTestEmail] = useState('demo@example.com');
  const [testPassword, setTestPassword] = useState('password');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    const result = await login(testEmail, testPassword);
    if (result.success) {
      setMessage('Login successful!');
    } else {
      setMessage(`Login failed: ${result.error}`);
    }
  };

  const handleLogout = () => {
    logout();
    setMessage('Logged out successfully!');
  };

  const handleTestRegistration = async () => {
    const result = await register(
      'Test User',
      'test@example.com',
      'TestPass123!',
      '9876543210',
      'B.Tech',
      'CSE',
      2023,
      8.5
    );
    if (result.success) {
      setMessage('Registration successful!');
    } else {
      setMessage(`Registration failed: ${result.error}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Authentication Test Page</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Current Authentication Status</h2>
          <div className="space-y-2">
            <p><strong>Authenticated:</strong> {isAuthenticated ? 'Yes' : 'No'}</p>
            {user && (
              <>
                <p><strong>User ID:</strong> {user.id}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
                <p><strong>Role:</strong> {user.role}</p>
              </>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Login Test */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Test Login</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={testEmail}
                  onChange={(e) => setTestEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  value={testPassword}
                  onChange={(e) => setTestPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                onClick={handleLogin}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Test Login
              </button>
            </div>
          </div>

          {/* Registration Test */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Test Registration</h3>
            <p className="text-sm text-gray-600 mb-4">
              This will create a new user with test data.
            </p>
            <button
              onClick={handleTestRegistration}
              className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
            >
              Test Registration
            </button>
          </div>
        </div>

        {/* Logout */}
        {isAuthenticated && (
          <div className="bg-white rounded-lg shadow-md p-6 mt-6">
            <h3 className="text-lg font-semibold mb-4">Logout</h3>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        )}

        {/* Message Display */}
        {message && (
          <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded-lg mt-6">
            {message}
          </div>
        )}

        {/* Test Credentials */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">Test Credentials</h3>
          <div className="text-sm text-yellow-700 space-y-1">
            <p><strong>Regular User:</strong> demo@example.com / password</p>
            <p><strong>Admin User:</strong> admin@notifyx.com / password</p>
            <p><strong>Super Admin:</strong> superadmin@notifyx.com / password</p>
          </div>
        </div>

        {/* Protected Content Test */}
        <AuthGuard requireAuth={true}>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6">
            <h3 className="text-lg font-semibold text-green-800 mb-2">Protected Content</h3>
            <p className="text-green-700">
              This content is only visible to authenticated users!
            </p>
          </div>
        </AuthGuard>

        {/* Admin Only Content Test */}
        <AuthGuard requireAuth={true} requireRole="admin">
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mt-6">
            <h3 className="text-lg font-semibold text-purple-800 mb-2">Admin Only Content</h3>
            <p className="text-purple-700">
              This content is only visible to admin users!
            </p>
          </div>
        </AuthGuard>
      </div>
    </div>
  );
}
