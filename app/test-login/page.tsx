"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useAuth } from '@/lib/auth/AuthContext'
import { useState } from 'react'

export default function TestLoginPage() {
  const { login, user, isLoading } = useAuth()
  const [testResult, setTestResult] = useState<any>(null)
  const [isTesting, setIsTesting] = useState(false)

  const testSuperAdminLogin = async () => {
    setIsTesting(true)
    setTestResult(null)
    
    try {
      console.log('Testing super admin login...')
      const result = await login('superadmin@notifyx.com', 'anypassword')
      console.log('Login result:', result)
      setTestResult({
        success: result.success,
        error: result.error,
        user: user
      })
    } catch (error: any) {
      console.error('Test login error:', error)
      setTestResult({
        success: false,
        error: error.message
      })
    } finally {
      setIsTesting(false)
    }
  }

  const testAdminLogin = async () => {
    setIsTesting(true)
    setTestResult(null)
    
    try {
      console.log('Testing admin login...')
      const result = await login('admin@notifyx.com', 'Admin123!')
      console.log('Login result:', result)
      setTestResult({
        success: result.success,
        error: result.error,
        user: user
      })
    } catch (error: any) {
      console.error('Test login error:', error)
      setTestResult({
        success: false,
        error: error.message
      })
    } finally {
      setIsTesting(false)
    }
  }

  const checkTokenStatus = () => {
    const token = localStorage.getItem('careerx_token')
    const user = localStorage.getItem('careerx_user')
    console.log('Token in localStorage:', token ? 'Exists' : 'Missing')
    console.log('User in localStorage:', user ? 'Exists' : 'Missing')
    console.log('Full token value:', token)
    setTestResult({
      token: token ? 'Exists' : 'Missing',
      user: user ? 'Exists' : 'Missing',
      tokenValue: token,
      tokenLength: token ? token.length : 0,
      userData: user ? JSON.parse(user) : null
    })
  }

  const testApiCall = async () => {
    setIsTesting(true)
    setTestResult(null)
    
    try {
      console.log('Testing API call...')
      const { authService } = await import('@/lib/api/services')
      const result = await authService.getMe()
      console.log('API call result:', result)
      setTestResult({
        success: result.success,
        data: result.data,
        error: result.error
      })
    } catch (error: any) {
      console.error('API call error:', error)
      setTestResult({
        success: false,
        error: error.message
      })
    } finally {
      setIsTesting(false)
    }
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Login Test Page</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Button onClick={testSuperAdminLogin} disabled={isTesting}>
              {isTesting ? 'Testing...' : 'Test Super Admin Login'}
            </Button>
            <Button onClick={testAdminLogin} disabled={isTesting}>
              {isTesting ? 'Testing...' : 'Test Admin Login'}
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Button onClick={checkTokenStatus} variant="outline">
              Check Token Status
            </Button>
            <Button onClick={testApiCall} disabled={isTesting} variant="outline">
              {isTesting ? 'Testing...' : 'Test API Call'}
            </Button>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Current User</h3>
            <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto max-h-40">
              {JSON.stringify(user, null, 2)}
            </pre>
          </div>

          {testResult && (
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Test Result</h3>
              <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto max-h-40">
                {JSON.stringify(testResult, null, 2)}
              </pre>
            </div>
          )}

          <div className="flex gap-4">
            <Button onClick={() => window.location.href = '/login'}>
              Go to Login Page
            </Button>
            <Button onClick={() => window.location.href = '/profile'}>
              Go to Profile Page
            </Button>
            <Button onClick={() => window.location.href = '/dashboard'}>
              Go to Dashboard
            </Button>
            <Button onClick={() => window.location.href = '/clear-auth'}>
              Clear Auth Data
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
