"use client"

import { useAuth } from '@/lib/auth/AuthContextBackend'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function DebugAuthPage() {
  const { user, isLoading, isAuthenticated, isAdmin, isSuperAdmin, canAccessAdmin, logout } = useAuth()
  const [testResult, setTestResult] = useState<any>(null)
  const [isTestingLogin, setIsTestingLogin] = useState(false)

  const testAdminLogin = async () => {
    setIsTestingLogin(true)
    try {
      const response = await fetch('/api/test-admin-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: 'admin@notifyx.com',
          password: 'Admin123!'
        })
      })
      const data = await response.json()
      setTestResult(data)
    } catch (error) {
      setTestResult({ success: false, error: error.message })
    } finally {
      setIsTestingLogin(false)
    }
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Authentication Debug</CardTitle>
          <CardDescription>
            Debug information about the current authentication state
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Auth Status</h3>
              <p><strong>Loading:</strong> {isLoading ? 'Yes' : 'No'}</p>
              <p><strong>Authenticated:</strong> {isAuthenticated ? 'Yes' : 'No'}</p>
              <p><strong>Is Admin:</strong> {isAdmin() ? 'Yes' : 'No'}</p>
              <p><strong>Is Super Admin:</strong> {isSuperAdmin() ? 'Yes' : 'No'}</p>
              <p><strong>Can Access Admin:</strong> {canAccessAdmin() ? 'Yes' : 'No'}</p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">User Data</h3>
              {user ? (
                <div>
                  <p><strong>ID:</strong> {user.id}</p>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>First Name:</strong> {user.firstName}</p>
                  <p><strong>Last Name:</strong> {user.lastName}</p>
                  <p><strong>Role:</strong> {user.role}</p>
                  <p><strong>Type:</strong> {user.type || 'Not set'}</p>
                </div>
              ) : (
                <p className="text-gray-500">No user data</p>
              )}
            </div>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Raw User Object</h3>
            <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto max-h-40">
              {JSON.stringify(user, null, 2)}
            </pre>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Test Admin Login</h3>
            <Button onClick={testAdminLogin} disabled={isTestingLogin} className="mb-4">
              {isTestingLogin ? 'Testing...' : 'Test Admin Login API'}
            </Button>
            {testResult && (
              <div>
                <h4 className="font-medium mb-2">Test Result:</h4>
                <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto max-h-40">
                  {JSON.stringify(testResult, null, 2)}
                </pre>
              </div>
            )}
          </div>

          <div className="flex gap-4">
            <Button onClick={() => window.location.href = '/login'}>
              Go to Login
            </Button>
            <Button onClick={() => window.location.href = '/dashboard'}>
              Go to Dashboard
            </Button>
            {isAuthenticated && (
              <Button onClick={logout} variant="outline">
                Logout
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
