"use client"

export const dynamic = 'force-dynamic'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useAuth } from '@/lib/auth/AuthContextBackend'
import { jobService } from '@/lib/api/services'

export default function TestJobCreationPage() {
  const { user, login } = useAuth()
  const [testResult, setTestResult] = useState<any>(null)
  const [isTesting, setIsTesting] = useState(false)

  const testJobCreation = async () => {
    setIsTesting(true)
    setTestResult(null)
    
    try {
      console.log('Testing job creation...')
      console.log('Current user:', user)
      
      const jobData = {
        title: "Test Job",
        company: "Test Company",
        description: "This is a test job description",
        type: "job" as const,
        eligibility: {
          qualifications: ["B.Tech"],
          streams: ["CSE"],
          passoutYears: [2024],
          minCGPA: 7.0
        },
        applicationDeadline: "2024-12-31T23:59:59.000Z",
        applicationLink: "https://test.com",
        location: "remote" as const,
        salary: "10 LPA",
        isActive: true
      }
      
      const result = await jobService.createJob(jobData)
      console.log('Job creation result:', result)
      setTestResult(result)
    } catch (error: any) {
      console.error('Job creation error:', error)
      setTestResult({
        success: false,
        error: error.message
      })
    } finally {
      setIsTesting(false)
    }
  }

  const loginAsAdmin = async () => {
    setIsTesting(true)
    try {
      console.log('Logging in as admin...')
      const result = await login('admin@notifyx.com', 'Admin123!')
      console.log('Login result:', result)
      setTestResult({
        login: result,
        user: user
      })
    } catch (error: any) {
      console.error('Login error:', error)
      setTestResult({
        success: false,
        error: error.message
      })
    } finally {
      setIsTesting(false)
    }
  }

  const loginAsSuperAdmin = async () => {
    setIsTesting(true)
    try {
      console.log('Logging in as superadmin...')
      const result = await login('superadmin@notifyx.com', 'anypassword')
      console.log('Login result:', result)
      setTestResult({
        login: result,
        user: user
      })
    } catch (error: any) {
      console.error('Login error:', error)
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
          <CardTitle>Job Creation Test Page</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Current User</h3>
            <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto max-h-40">
              {JSON.stringify(user, null, 2)}
            </pre>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <Button onClick={loginAsAdmin} disabled={isTesting}>
              Login as Admin
            </Button>
            <Button onClick={loginAsSuperAdmin} disabled={isTesting}>
              Login as Super Admin
            </Button>
            <Button onClick={testJobCreation} disabled={isTesting || !user}>
              Test Job Creation
            </Button>
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
