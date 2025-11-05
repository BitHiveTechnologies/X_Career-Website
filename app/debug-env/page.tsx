'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ENV } from '@/lib/api/env';

export default function DebugEnvPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Environment Debug</h1>

      <Card>
        <CardHeader>
          <CardTitle>Environment Variables</CardTitle>
          <CardDescription>Current environment configuration</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <p className="font-medium">API Base URL:</p>
              <p className="text-sm bg-gray-100 p-2 rounded break-all">
                {ENV.API_BASE_URL}
              </p>
            </div>
            <div>
              <p className="font-medium">API Version:</p>
              <p className="text-sm bg-gray-100 p-2 rounded">
                {ENV.API_VERSION}
              </p>
            </div>
            <div>
              <p className="font-medium">Frontend URL:</p>
              <p className="text-sm bg-gray-100 p-2 rounded">
                {ENV.FRONTEND_URL}
              </p>
            </div>
            <div>
              <p className="font-medium">Razorpay Key ID:</p>
              <p className="text-sm bg-gray-100 p-2 rounded">
                {ENV.RAZORPAY_KEY_ID}
              </p>
            </div>
            <div>
              <p className="font-medium">Enable Payments:</p>
              <p className="text-sm bg-gray-100 p-2 rounded">
                {ENV.ENABLE_PAYMENTS ? 'Yes' : 'No'}
              </p>
            </div>
            <div>
              <p className="font-medium">Node Environment:</p>
              <p className="text-sm bg-gray-100 p-2 rounded">
                {ENV.NODE_ENV}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Process Environment Variables</CardTitle>
          <CardDescription>Raw process.env values</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div>
              <p className="font-medium">NEXT_PUBLIC_API_BASE_URL:</p>
              <p className="text-sm bg-gray-100 p-2 rounded break-all">
                {process.env.NEXT_PUBLIC_API_BASE_URL || 'Not set'}
              </p>
            </div>
            <div>
              <p className="font-medium">NEXT_PUBLIC_RAZORPAY_KEY_ID:</p>
              <p className="text-sm bg-gray-100 p-2 rounded">
                {process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'Not set'}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Test API Call</CardTitle>
          <CardDescription>Test the actual API URL being used</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="font-medium">Test URL:</p>
            <p className="text-sm bg-gray-100 p-2 rounded break-all">
              {`${ENV.API_BASE_URL}/api/${ENV.API_VERSION}/subscriptions/plans`}
            </p>
            <button 
              onClick={async () => {
                try {
                  const response = await fetch(`${ENV.API_BASE_URL}/api/${ENV.API_VERSION}/subscriptions/plans`);
                  const data = await response.json();
                  console.log('API Response:', data);
                  alert('Check console for API response');
                } catch (error) {
                  console.error('API Error:', error);
                  alert('API Error - check console');
                }
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Test API Call
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
