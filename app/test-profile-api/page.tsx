'use client';

import { useAuth } from '@/lib/auth/AuthContext';
import { useState, useEffect } from 'react';

export default function TestProfileApiPage() {
  const { user, isAuthenticated, getProfileCompletion } = useAuth();
  const [completionData, setCompletionData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const testProfileCompletion = async () => {
    if (!isAuthenticated) {
      setError('Please login first');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const completion = await getProfileCompletion();
      setCompletionData(completion);
    } catch (err) {
      setError('Failed to fetch profile completion data');
      console.error('Profile completion error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      testProfileCompletion();
    }
  }, [isAuthenticated]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Profile API Test</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Authentication Status</h2>
          <div className="space-y-2">
            <p><strong>Authenticated:</strong> {isAuthenticated ? 'Yes' : 'No'}</p>
            {user && (
              <>
                <p><strong>User:</strong> {user.email}</p>
                <p><strong>Role:</strong> {user.role}</p>
              </>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Profile Completion Test</h2>
          <button
            onClick={testProfileCompletion}
            disabled={loading || !isAuthenticated}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Loading...' : 'Test Profile Completion API'}
          </button>
          
          {error && (
            <div className="mt-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}
          
          {completionData && (
            <div className="mt-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
              <h3 className="font-semibold mb-2">Profile Completion Data:</h3>
              <div className="space-y-1 text-sm">
                <p><strong>Completion Percentage:</strong> {completionData.completionPercentage}%</p>
                <p><strong>Completed Fields:</strong> {completionData.completedFields}</p>
                <p><strong>Total Fields:</strong> {completionData.totalFields}</p>
                <p><strong>Is Complete:</strong> {completionData.isComplete ? 'Yes' : 'No'}</p>
                {completionData.missingFields && completionData.missingFields.length > 0 && (
                  <div>
                    <p><strong>Missing Fields:</strong></p>
                    <ul className="list-disc list-inside ml-4">
                      {completionData.missingFields.map((field: string, index: number) => (
                        <li key={index}>{field}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Test Instructions</h3>
          <div className="text-sm text-blue-700 space-y-1">
            <p>1. Login with any test account (demo@example.com, admin@notifyx.com, etc.)</p>
            <p>2. Click "Test Profile Completion API" to test the API call</p>
            <p>3. Check the profile completion data returned</p>
            <p>4. Visit /profile to see the profile page with completion percentage</p>
          </div>
        </div>
      </div>
    </div>
  );
}
