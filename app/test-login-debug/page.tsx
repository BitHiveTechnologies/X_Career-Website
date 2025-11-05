'use client';

export const dynamic = 'force-dynamic'

import { useState } from 'react';
import { useAuth } from '@/lib/auth/AuthContextBackend';
import { authService } from '@/lib/api';

export default function TestLoginDebugPage() {
  const [email, setEmail] = useState('okjohn.doe@example.com');
  const [password, setPassword] = useState('password123');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const testDirectAPI = async () => {
    setLoading(true);
    try {
      console.log('Testing direct API call...');
      const response = await authService.login({ email, password });
      console.log('Direct API response:', response);
      setResult({ type: 'direct', response });
    } catch (error) {
      console.error('Direct API error:', error);
      setResult({ type: 'direct', error: error instanceof Error ? error.message : 'Unknown error' });
    } finally {
      setLoading(false);
    }
  };

  const testAuthContext = async () => {
    setLoading(true);
    try {
      console.log('Testing auth context login...');
      const response = await login(email, password);
      console.log('Auth context response:', response);
      setResult({ type: 'context', response });
    } catch (error) {
      console.error('Auth context error:', error);
      setResult({ type: 'context', error: error instanceof Error ? error.message : 'Unknown error' });
    } finally {
      setLoading(false);
    }
  };

  const checkLocalStorage = () => {
    const token = localStorage.getItem('careerx_token');
    const user = localStorage.getItem('careerx_user');
    console.log('LocalStorage check:', { token, user });
    setResult({ 
      type: 'localStorage', 
      token: token ? token.substring(0, 20) + '...' : 'No token',
      user: user ? JSON.parse(user) : null
    });
  };

  const clearStorage = () => {
    localStorage.removeItem('careerx_token');
    localStorage.removeItem('careerx_user');
    console.log('LocalStorage cleared');
    setResult({ type: 'clear', message: 'Storage cleared' });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Login Debug Page</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Test Credentials</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Test Actions</h2>
          <div className="space-x-4">
            <button
              onClick={testDirectAPI}
              disabled={loading}
              className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
            >
              Test Direct API
            </button>
            <button
              onClick={testAuthContext}
              disabled={loading}
              className="bg-green-500 text-white px-4 py-2 rounded disabled:opacity-50"
            >
              Test Auth Context
            </button>
            <button
              onClick={checkLocalStorage}
              className="bg-yellow-500 text-white px-4 py-2 rounded"
            >
              Check LocalStorage
            </button>
            <button
              onClick={clearStorage}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Clear Storage
            </button>
          </div>
        </div>

        {result && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Result</h2>
            <pre className="bg-gray-100 p-4 rounded overflow-auto">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
