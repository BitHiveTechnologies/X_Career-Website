"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { jobService } from '@/lib/api/services'
import { useAuth } from '@/lib/auth/AuthContextBackend'
import { toast } from 'sonner'

export default function DebugJobCreationPage() {
  const { user, login } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [testResult, setTestResult] = useState<any>(null)
  const [jobData, setJobData] = useState({
    title: "Test Frontend Developer",
    company: "Test Company",
    description: "Test job description for debugging purposes",
    type: "job" as "job" | "internship",
    eligibility: {
      qualifications: ["B.Tech"],
      streams: ["CSE"],
      passoutYears: [2024],
      minCGPA: 7.0
    },
    applicationDeadline: "2024-12-31T23:59:59.000Z",
    applicationLink: "https://test.com",
    location: "remote" as "remote" | "onsite" | "hybrid",
    salary: "₹10-15 LPA",
    isActive: true
  })

  const handleLogin = async (email: string, password: string) => {
    try {
      setIsLoading(true)
      const result = await login(email, password)
      if (result.success) {
        toast.success('Login successful!')
      } else {
        toast.error(result.error || 'Login failed')
      }
    } catch (error: any) {
      toast.error(error.message || 'Login failed')
    } finally {
      setIsLoading(false)
    }
  }

  const testJobCreation = async () => {
    try {
      setIsLoading(true)
      console.log('Testing job creation with data:', jobData)
      console.log('Current user:', user)
      
      // Check token
      const token = localStorage.getItem('careerx_token')
      console.log('Token present:', !!token)
      
      const response = await jobService.createJob(jobData)
      console.log('Job creation response:', response)
      
      setTestResult({
        success: response.success,
        data: response.data,
        error: response.error,
        timestamp: new Date().toISOString()
      })
      
      if (response.success) {
        toast.success('Job created successfully!')
      } else {
        toast.error(response.error?.message || 'Job creation failed')
      }
    } catch (error: any) {
      console.error('Job creation error:', error)
      setTestResult({
        success: false,
        error: error.message,
        timestamp: new Date().toISOString()
      })
      toast.error(error.message || 'Job creation failed')
    } finally {
      setIsLoading(false)
    }
  }

  const testAdminLogin = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/test-admin-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'admin@notifyx.com',
          password: 'Admin123!'
        })
      })
      
      const result = await response.json()
      console.log('Admin login test result:', result)
      setTestResult({
        success: response.ok,
        data: result,
        timestamp: new Date().toISOString()
      })
      
      if (response.ok) {
        toast.success('Admin login test successful!')
      } else {
        toast.error('Admin login test failed')
      }
    } catch (error: any) {
      console.error('Admin login test error:', error)
      setTestResult({
        success: false,
        error: error.message,
        timestamp: new Date().toISOString()
      })
      toast.error(error.message || 'Admin login test failed')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Debug Job Creation</h1>
        <p className="text-gray-600">Test job creation functionality and debug authentication issues</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Authentication Section */}
        <Card>
          <CardHeader>
            <CardTitle>Authentication</CardTitle>
            <CardDescription>Test admin login functionality</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Current User</Label>
              <div className="p-3 bg-gray-100 rounded-md">
                {user ? (
                  <div>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Role:</strong> {user.role}</p>
                    <p><strong>ID:</strong> {user.id}</p>
                  </div>
                ) : (
                  <p>Not logged in</p>
                )}
              </div>
            </div>
            
            <div className="space-y-2">
              <Button 
                onClick={() => handleLogin('admin@notifyx.com', 'Admin123!')}
                disabled={isLoading}
                className="w-full"
              >
                Login as Admin
              </Button>
              
              <Button 
                onClick={() => handleLogin('superadmin@notifyx.com', 'Admin123!')}
                disabled={isLoading}
                variant="outline"
                className="w-full"
              >
                Login as Super Admin
              </Button>
              
              <Button 
                onClick={testAdminLogin}
                disabled={isLoading}
                variant="secondary"
                className="w-full"
              >
                Test Admin Login API
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Job Creation Section */}
        <Card>
          <CardHeader>
            <CardTitle>Job Creation Test</CardTitle>
            <CardDescription>Test job creation with dummy data</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={jobData.title}
                  onChange={(e) => setJobData({...jobData, title: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  value={jobData.company}
                  onChange={(e) => setJobData({...jobData, company: e.target.value})}
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={jobData.description}
                onChange={(e) => setJobData({...jobData, description: e.target.value})}
                rows={3}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label htmlFor="type">Type</Label>
                <Select value={jobData.type} onValueChange={(value: "job" | "internship") => setJobData({...jobData, type: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="job">Job</SelectItem>
                    <SelectItem value="internship">Internship</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Select value={jobData.location} onValueChange={(value: "remote" | "onsite" | "hybrid") => setJobData({...jobData, location: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="remote">Remote</SelectItem>
                    <SelectItem value="onsite">Onsite</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label htmlFor="salary">Salary</Label>
                <Input
                  id="salary"
                  value={jobData.salary}
                  onChange={(e) => setJobData({...jobData, salary: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="deadline">Deadline</Label>
                <Input
                  id="deadline"
                  type="datetime-local"
                  value={jobData.applicationDeadline.slice(0, 16)}
                  onChange={(e) => setJobData({...jobData, applicationDeadline: new Date(e.target.value).toISOString()})}
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="link">Application Link</Label>
              <Input
                id="link"
                value={jobData.applicationLink}
                onChange={(e) => setJobData({...jobData, applicationLink: e.target.value})}
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="active"
                checked={jobData.isActive}
                onCheckedChange={(checked) => setJobData({...jobData, isActive: !!checked})}
              />
              <Label htmlFor="active">Active</Label>
            </div>
            
            <Button 
              onClick={testJobCreation}
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? 'Testing...' : 'Test Job Creation'}
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Test Results */}
      {testResult && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Test Results</CardTitle>
            <CardDescription>Latest test result</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="p-4 bg-gray-100 rounded-md">
              <pre className="text-sm overflow-auto">
                {JSON.stringify(testResult, null, 2)}
              </pre>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
