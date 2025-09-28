'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { paymentService } from '@/lib/api/payment';
import { useAuth } from '@/lib/auth/AuthContext';
import { useState } from 'react';

export default function DebugAuthPage() {
  const { user, isAuthenticated, isLoading, login, logout } = useAuth();
  const [subscriptionData, setSubscriptionData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const testSubscriptionData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Test subscription plans
      const plansResponse = await paymentService.getSubscriptionPlans();
      console.log('Plans response:', plansResponse);

      // Test current subscription
      const subscriptionResponse = await paymentService.getCurrentSubscription();
      console.log('Subscription response:', subscriptionResponse);

      setSubscriptionData({
        plans: plansResponse,
        subscription: subscriptionResponse
      });

    } catch (err) {
      console.error('Error testing subscription data:', err);
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    const result = await login('user@example.com', 'password');
    console.log('Login result:', result);
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Authentication Debug</h1>

      {/* Authentication Status */}
      <Card>
        <CardHeader>
          <CardTitle>Authentication Status</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-medium">Loading:</p>
              <p className={isLoading ? 'text-yellow-600' : 'text-green-600'}>
                {isLoading ? 'Yes' : 'No'}
              </p>
            </div>
            <div>
              <p className="font-medium">Authenticated:</p>
              <p className={isAuthenticated ? 'text-green-600' : 'text-red-600'}>
                {isAuthenticated ? 'Yes' : 'No'}
              </p>
            </div>
          </div>
          
          {user && (
            <div>
              <p className="font-medium">User Data:</p>
              <pre className="bg-gray-100 p-2 rounded text-sm overflow-auto">
                {JSON.stringify(user, null, 2)}
              </pre>
            </div>
          )}

          <div className="flex gap-2">
            <Button onClick={handleLogin} disabled={isAuthenticated}>
              Login as user@example.com
            </Button>
            <Button onClick={handleLogout} disabled={!isAuthenticated} variant="outline">
              Logout
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Subscription Data Test */}
      <Card>
        <CardHeader>
          <CardTitle>Subscription Data Test</CardTitle>
          <CardDescription>Test subscription API calls</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button onClick={testSubscriptionData} disabled={loading}>
            {loading ? 'Testing...' : 'Test Subscription Data'}
          </Button>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded p-3">
              <p className="text-red-600 font-medium">Error:</p>
              <p className="text-red-600">{error}</p>
            </div>
          )}

          {subscriptionData && (
            <div>
              <p className="font-medium">API Response:</p>
              <pre className="bg-gray-100 p-2 rounded text-sm overflow-auto max-h-96">
                {JSON.stringify(subscriptionData, null, 2)}
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
              {typeof window !== 'undefined' ? localStorage.getItem('token') || 'No token found' : 'Server side'}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}