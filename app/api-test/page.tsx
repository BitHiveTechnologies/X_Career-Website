"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { healthService, jobService, adminService } from '@/lib/api/services'
import { toast } from 'sonner'

export default function ApiTestPage() {
  const [testResults, setTestResults] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  const runTests = async () => {
    setIsLoading(true)
    const results: any = {}

    try {
      // Test 1: Health Check
      try {
        const healthResponse = await healthService.checkHealth()
        results.healthCheck = {
          success: true,
          data: healthResponse
        }
      } catch (error: any) {
        results.healthCheck = {
          success: false,
          error: error.message
        }
      }

      // Test 2: Get Jobs
      try {
        const jobsResponse = await jobService.getJobs({ limit: 5 })
        results.getJobs = {
          success: true,
          data: jobsResponse.data
        }
      } catch (error: any) {
        results.getJobs = {
          success: false,
          error: error.message
        }
      }

      // Test 3: Admin Dashboard (will fail without admin token)
      try {
        const dashboardResponse = await adminService.getDashboardStats()
        results.adminDashboard = {
          success: true,
          data: dashboardResponse.data
        }
      } catch (error: any) {
        results.adminDashboard = {
          success: false,
          error: error.message
        }
      }

      setTestResults(results)
      toast.success('API tests completed!')
    } catch (error: any) {
      toast.error('API tests failed: ' + error.message)
    } finally {
      setIsLoading(false)
    }
  }

  const createTestJob = async () => {
    try {
      setIsLoading(true)
      
      const testJobData = {
        title: "Test Frontend Developer",
        company: "Test Company",
        description: "This is a test job created from the frontend integration test.",
        type: "job" as const,
        eligibility: {
          qualifications: ["B.Tech"],
          streams: ["CSE", "IT"],
          passoutYears: [2023, 2024],
          minCGPA: 7.0
        },
        applicationDeadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days from now
        applicationLink: "https://testcompany.com/apply",
        location: "remote" as const,
        salary: "₹6-10 LPA",
        isActive: true
      }

      const response = await jobService.createJob(testJobData)
      
      if (response.success) {
        toast.success('Test job created successfully!')
        console.log('Created job:', response.data)
      } else {
        throw new Error(response.error?.message || 'Failed to create job')
      }
    } catch (error: any) {
      console.error('Error creating test job:', error)
      toast.error('Failed to create test job: ' + error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>API Integration Test</CardTitle>
          <CardDescription>
            Test the backend API integration for the dashboard and job creation functionality.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <Button onClick={runTests} disabled={isLoading}>
              {isLoading ? 'Running Tests...' : 'Run API Tests'}
            </Button>
            <Button onClick={createTestJob} disabled={isLoading} variant="outline">
              Create Test Job
            </Button>
          </div>
        </CardContent>
      </Card>

      {testResults && (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Test Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(testResults).map(([testName, result]: [string, any]) => (
                  <div key={testName} className="p-4 border rounded-lg">
                    <h3 className="font-semibold capitalize mb-2">
                      {testName.replace(/([A-Z])/g, ' $1')}
                      <span className={`ml-2 text-sm ${result.success ? 'text-green-600' : 'text-red-600'}`}>
                        {result.success ? '✅ Success' : '❌ Failed'}
                      </span>
                    </h3>
                    {result.success ? (
                      <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto max-h-40">
                        {JSON.stringify(result.data, null, 2)}
                      </pre>
                    ) : (
                      <p className="text-red-600 text-sm">{result.error}</p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}