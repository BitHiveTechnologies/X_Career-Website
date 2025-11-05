'use client';

import { useAuth } from '@/lib/auth/AuthContext';
import { useEffect, useState } from 'react';

export default function TestRoutingPage() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const [testResults, setTestResults] = useState<string[]>([]);

  useEffect(() => {
    const results = [];
    
    if (isLoading) {
      results.push('⏳ Loading authentication...');
    } else if (isAuthenticated && user) {
      results.push(`✅ User authenticated: ${user.email}`);
      results.push(`👤 Role: ${user.role}`);
      results.push(`🆔 User ID: ${user.id}`);
      
      // Test routing logic
      if (user.role === 'admin' || user.role === 'super_admin') {
        results.push('🎯 Should redirect to: /dashboard (Admin Dashboard)');
      } else {
        results.push('🏠 Should redirect to: / (Home Page)');
      }
    } else {
      results.push('❌ User not authenticated');
      results.push('🔐 Should redirect to: /login');
    }
    
    setTestResults(results);
  }, [user, isAuthenticated, isLoading]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Authentication Routing Test</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Current Authentication Status</h2>
          <div className="space-y-2">
            {testResults.map((result, index) => (
              <div key={index} className="text-sm">
                {result}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Test Credentials</h3>
          <div className="text-sm text-blue-700 space-y-1">
            <p><strong>Regular User:</strong> demo@example.com / password → Should go to home page</p>
            <p><strong>Admin User:</strong> admin@notifyx.com / password → Should go to dashboard</p>
            <p><strong>Super Admin:</strong> superadmin@notifyx.com / password → Should go to dashboard</p>
          </div>
        </div>
      </div>
    </div>
  );
}
