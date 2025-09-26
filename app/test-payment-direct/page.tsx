'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { paymentService } from '@/lib/api/payment';
import { useState } from 'react';

export default function TestPaymentDirectPage() {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const testDirectAPI = async () => {
    try {
      setLoading(true);
      setError(null);

      // Test direct fetch to ngrok URL
      const response = await fetch('https://unstaffed-semipictorially-sunshine.ngrok-free.dev/api/v1/subscriptions/plans');
      const data = await response.json();
      
      setResult({
        status: response.status,
        data: data,
        url: 'https://unstaffed-semipictorially-sunshine.ngrok-free.dev/api/v1/subscriptions/plans'
      });

    } catch (err) {
      console.error('Direct API test failed:', err);
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const testPaymentService = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await paymentService.getSubscriptionPlans();
      setResult({
        service: 'paymentService',
        response: response
      });

    } catch (err) {
      console.error('Payment service test failed:', err);
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const testPaymentOrder = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await paymentService.createOrder({
        plan: 'basic',
        amount: 4900,
        currency: 'INR'
      });
      
      setResult({
        service: 'paymentService.createOrder',
        response: response
      });

    } catch (err) {
      console.error('Payment order test failed:', err);
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Direct Payment API Test</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button onClick={testDirectAPI} disabled={loading}>
          Test Direct API Call
        </Button>
        <Button onClick={testPaymentService} disabled={loading}>
          Test Payment Service
        </Button>
        <Button onClick={testPaymentOrder} disabled={loading}>
          Test Payment Order
        </Button>
      </div>

      {loading && (
        <div className="text-center">
          <p>Testing API calls...</p>
        </div>
      )}

      {error && (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="pt-6">
            <p className="text-red-600 font-medium">Error:</p>
            <p className="text-red-600">{error}</p>
          </CardContent>
        </Card>
      )}

      {result && (
        <Card>
          <CardHeader>
            <CardTitle>Test Result</CardTitle>
            <CardDescription>API call response</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto max-h-96">
              {JSON.stringify(result, null, 2)}
            </pre>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Network Debug</CardTitle>
          <CardDescription>Check browser network tab for actual requests</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">
            1. Open browser Developer Tools (F12)
          </p>
          <p className="text-sm text-gray-600">
            2. Go to Network tab
          </p>
          <p className="text-sm text-gray-600">
            3. Click the test buttons above
          </p>
          <p className="text-sm text-gray-600">
            4. Check what URLs are actually being called
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
