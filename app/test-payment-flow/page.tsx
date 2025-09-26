'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { paymentService } from '@/lib/api/payment';
import { useAuth } from '@/lib/auth/AuthContextBackend';
import { useState } from 'react';

export default function TestPaymentFlowPage() {
  const { user, isAuthenticated, login, logout } = useAuth();
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    const result = await login('user@example.com', 'password');
    console.log('Login result:', result);
    if (result.success) {
      alert('Login successful!');
    } else {
      alert(`Login failed: ${result.error}`);
    }
  };

  const testCreateOrder = async () => {
    try {
      setLoading(true);
      setError(null);

      const token = localStorage.getItem('careerx_token');
      console.log('Current token:', token);

      const response = await paymentService.createOrder({
        plan: 'basic',
        amount: 49, // ₹49, not ₹4900
        currency: 'INR'
      });

      setResult({
        success: true,
        response: response
      });

    } catch (err) {
      console.error('Create order failed:', err);
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const testSubscriptionPlans = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await paymentService.getSubscriptionPlans();
      setResult({
        success: true,
        response: response
      });

    } catch (err) {
      console.error('Get plans failed:', err);
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const testCurrentSubscription = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await paymentService.getCurrentSubscription();
      setResult({
        success: true,
        response: response
      });

    } catch (err) {
      console.error('Get subscription failed:', err);
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Payment Flow Test</h1>

      {/* Authentication Status */}
      <Card>
        <CardHeader>
          <CardTitle>Authentication Status</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-medium">Authenticated:</p>
              <p className={isAuthenticated ? 'text-green-600' : 'text-red-600'}>
                {isAuthenticated ? 'Yes' : 'No'}
              </p>
            </div>
            <div>
              <p className="font-medium">User:</p>
              <p className="text-sm">{user?.email || 'Not logged in'}</p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button onClick={handleLogin} disabled={isAuthenticated}>
              Login as user@example.com
            </Button>
            <Button onClick={logout} disabled={!isAuthenticated} variant="outline">
              Logout
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* API Tests */}
      <Card>
        <CardHeader>
          <CardTitle>API Tests</CardTitle>
          <CardDescription>Test payment-related API calls</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button onClick={testSubscriptionPlans} disabled={loading}>
              Test Get Plans
            </Button>
            <Button onClick={testCurrentSubscription} disabled={loading}>
              Test Get Subscription
            </Button>
            <Button onClick={testCreateOrder} disabled={loading || !isAuthenticated}>
              Test Create Order
            </Button>
          </div>

          {loading && (
            <div className="text-center">
              <p>Testing API calls...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded p-3">
              <p className="text-red-600 font-medium">Error:</p>
              <p className="text-red-600">{error}</p>
            </div>
          )}

          {result && (
            <div>
              <p className="font-medium">API Response:</p>
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto max-h-96">
                {JSON.stringify(result, null, 2)}
              </pre>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Token Debug */}
      <Card>
        <CardHeader>
          <CardTitle>Token Debug</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <p className="font-medium">Local Storage Token:</p>
            <p className="text-sm bg-gray-100 p-2 rounded break-all">
              {typeof window !== 'undefined' ? localStorage.getItem('careerx_token') || 'No token found' : 'Server side'}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Instructions */}
      <Card>
        <CardHeader>
          <CardTitle>How to Fix Payment Issues</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm text-gray-600">1. <strong>Login First:</strong> Click "Login as user@example.com"</p>
          <p className="text-sm text-gray-600">2. <strong>Test APIs:</strong> Click "Test Get Plans" and "Test Create Order"</p>
          <p className="text-sm text-gray-600">3. <strong>Check Results:</strong> Look at the API responses above</p>
          <p className="text-sm text-gray-600">4. <strong>Go to Notify:</strong> Visit <code>/notify</code> and try payment again</p>
        </CardContent>
      </Card>
    </div>
  );
}
