'use client';

import { useEffect, useState } from 'react';
import { apiClient, API_ENDPOINTS } from '@/lib/api';

export default function ApiTestPage() {
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const addResult = (test: string, status: 'success' | 'error', data?: any) => {
    setResults(prev => [...prev, {
      test,
      status,
      data: data ? JSON.stringify(data, null, 2) : null,
      timestamp: new Date().toLocaleTimeString()
    }]);
  };

  const runTests = async () => {
    setLoading(true);
    setResults([]);

    try {
      // Test 1: Backend Health
      addResult('Backend Health Check', 'success', 'Starting...');
      const health = await apiClient.get(API_ENDPOINTS.HEALTH.CHECK);
      addResult('Backend Health Check', health.success ? 'success' : 'error', health);

      // Test 2: Jobs API
      addResult('Jobs API', 'success', 'Starting...');
      const jobs = await apiClient.get(API_ENDPOINTS.JOBS.ALL);
      addResult('Jobs API', jobs.success ? 'success' : 'error', jobs);

      // Test 3: JWT Login
      addResult('JWT Login', 'success', 'Starting...');
      const login = await apiClient.post(API_ENDPOINTS.AUTH.LOGIN, {
        email: 'test@example.com',
        role: 'user',
        firstName: 'Test',
        lastName: 'User'
      });
      addResult('JWT Login', login.success ? 'success' : 'error', login);

      // Test 4: JWT Verify (if login successful)
      if (login.success && login.data?.token) {
        apiClient.setToken(login.data.token);
        addResult('JWT Verify', 'success', 'Starting...');
        const verify = await apiClient.get(API_ENDPOINTS.AUTH.ME);
        addResult('JWT Verify', verify.success ? 'success' : 'error', verify);
      }

    } catch (error: any) {
      addResult('Test Error', 'error', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">API Integration Test</h1>
        
        <button
          onClick={runTests}
          disabled={loading}
          className="mb-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Running Tests...' : 'Run All Tests'}
        </button>

        <div className="space-y-4">
          {results.map((result, index) => (
            <div key={index} className={`p-4 rounded-lg border ${
              result.status === 'success' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">{result.test}</h3>
                <span className={`px-2 py-1 rounded text-sm ${
                  result.status === 'success' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
                }`}>
                  {result.status.toUpperCase()}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">Time: {result.timestamp}</p>
              {result.data && (
                <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto max-h-40">
                  {result.data}
                </pre>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

