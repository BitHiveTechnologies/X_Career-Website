"use client"

import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { FlexibleDataTable } from "@/components/flexible-data-table"
import { QuickCreateModal } from "@/components/QuickCreateModal"
import { SectionCards } from "@/components/section-cards"
import { SharedLayout } from "@/components/shared-layout"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAuth } from "@/lib/auth/AuthContextBackend"
import { adminService, jobService } from "@/lib/api/services"
import { Briefcase, CreditCard, GraduationCap, Plus, Users } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "sonner"

import customersData from "./customers-data.json"
import data from "./data.json"
import internshipsData from "./internships-data.json"
import jobsData from "./jobs-data.json"
import paymentsData from "./payments-data.json"

export default function Page() {
  const { user, isLoading: authLoading } = useAuth()
  const router = useRouter()
  
  // All hooks must be called at the top level
  const [isQuickCreateOpen, setIsQuickCreateOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("customers")
  const [isLoading, setIsLoading] = useState(false)
  const [dashboardStats, setDashboardStats] = useState<any>(null)
  const [jobs, setJobs] = useState<any[]>([])
  const [internships, setInternships] = useState<any[]>([])

  // Check if user is admin
  useEffect(() => {
    if (!authLoading && (!user || (user.role !== 'admin' && user.role !== 'super_admin'))) {
      router.push('/login')
    }
  }, [user, authLoading, router])

  // Fetch dashboard data
  useEffect(() => {
    if (user && (user.role === 'admin' || user.role === 'super_admin')) {
      fetchDashboardData()
    }
  }, [user])

  // Show loading while checking auth
  if (authLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-lg text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  // Show access denied if not admin
  if (!user || (user.role !== 'admin' && user.role !== 'super_admin')) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-4">You need admin privileges to access this page.</p>
          {user && (
            <div className="mb-4 p-4 bg-gray-100 rounded-lg">
              <p className="text-sm text-gray-700">
                Current user: {user.email} (Role: {user.role})
              </p>
            </div>
          )}
          <Button onClick={() => router.push('/login')}>
            Go to Login
          </Button>
        </div>
      </div>
    )
  }

  const fetchDashboardData = async () => {
    try {
      setIsLoading(true)
      
      // Fetch dashboard stats
      const statsResponse = await adminService.getDashboardStats()
      if (statsResponse.success && statsResponse.data) {
        setDashboardStats(statsResponse.data.stats)
      }

      // Fetch jobs
      const jobsResponse = await jobService.getJobs({ limit: 50 })
      if (jobsResponse.success && jobsResponse.data) {
        const jobData = jobsResponse.data.jobs || []
        setJobs(jobData.filter((job: any) => job.type === 'job'))
        setInternships(jobData.filter((job: any) => job.type === 'internship'))
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error)
      toast.error('Failed to fetch dashboard data')
    } finally {
      setIsLoading(false)
    }
  }

  const handleQuickCreate = async (formData: any) => {
    try {
      setIsLoading(true)
      
      // Prepare the job data according to backend API requirements
      const jobData = {
        title: formData.title,
        company: formData.company,
        description: formData.description,
        type: formData.type || (activeTab === "job" ? "job" : "internship"),
        eligibility: formData.eligibility || {
          qualifications: [],
          streams: [],
          passoutYears: [],
          minCGPA: 0
        },
        applicationDeadline: formData.applicationDeadline,
        applicationLink: formData.applicationLink,
        location: formData.location,
        ...(formData.type === 'job' ? { salary: formData.salary || "" } : {}), // Only include salary for jobs
        ...(formData.type === 'internship' && formData.stipend ? { stipend: formData.stipend } : {}), // Only include stipend for internships
        isActive: formData.isActive !== undefined ? formData.isActive : true,
        ...(formData.type === 'internship' && {
          duration: formData.duration,
          startDate: formData.startDate,
          isPartTime: formData.isPartTime,
          isPaid: formData.isPaid,
          certificateProvided: formData.certificateProvided,
          mentorshipIncluded: formData.mentorshipIncluded,
        })
      }

      console.log('Creating job with data:', jobData)
      console.log('Current user:', user)
      
      // Check if we have a valid token
      const token = localStorage.getItem('careerx_token')
      console.log('Current token:', token ? 'Present' : 'Missing')
      
      const response = await jobService.createJob(jobData)
      
      if (response.success) {
        toast.success(`${formData.type === 'job' ? 'Job' : 'Internship'} created successfully!`)
        
        // Refresh the data
        await fetchDashboardData()
        
        // Close the modal
        setIsQuickCreateOpen(false)
      } else {
        console.error('Job creation failed:', response)
        if (response.error?.message === 'Admin access required') {
          toast.error('Admin access required. The backend job creation endpoint needs to be fixed. Please contact the backend team.')
        } else {
          throw new Error(response.error?.message || 'Failed to create job')
        }
      }
    } catch (error: any) {
      console.error('Error creating job:', error)
      if (error.message === 'Admin access required') {
        toast.error('Admin access required. The backend job creation endpoint needs to be fixed. Please contact the backend team.')
      } else {
        toast.error(error.message || 'Failed to create job/internship')
      }
    } finally {
      setIsLoading(false)
    }
  }

  const getTableData = () => {
    switch (activeTab) {
      case "customers":
        return customersData // Keep mock data for customers for now
      case "jobs":
        return jobs.length > 0 ? jobs : jobsData
      case "internships":
        return internships.length > 0 ? internships : internshipsData
      case "payments":
        return paymentsData // Keep mock data for payments for now
      default:
        return data
    }
  }

  const getTableColumns = () => {
    switch (activeTab) {
      case "customers":
        return [
          { key: "name", label: "Name" },
          { key: "email", label: "Email" },
          { key: "status", label: "Status" },
          { key: "joinDate", label: "Join Date" },
          { key: "lastActive", label: "Last Active" },
          { key: "applications", label: "Applications" },
          { key: "profile", label: "Profile" }
        ]
      case "jobs":
        return [
          { key: "title", label: "Job Title" },
          { key: "company", label: "Company" },
          { key: "status", label: "Status" },
          { key: "applications", label: "Applications" },
          { key: "postedDate", label: "Posted Date" },
          { key: "expiryDate", label: "Expiry Date" },
          { key: "salary", label: "Salary" },
          { key: "location", label: "Location" }
        ]
      case "internships":
        return [
          { key: "title", label: "Internship Title" },
          { key: "company", label: "Company" },
          { key: "status", label: "Status" },
          { key: "applications", label: "Applications" },
          { key: "postedDate", label: "Posted Date" },
          { key: "expiryDate", label: "Expiry Date" },
          { key: "stipend", label: "Stipend" },
          { key: "duration", label: "Duration" },
          { key: "location", label: "Location" }
        ]
      case "payments":
        return [
          { key: "transactionId", label: "Transaction ID" },
          { key: "customer", label: "Customer" },
          { key: "amount", label: "Amount" },
          { key: "status", label: "Status" },
          { key: "date", label: "Date" },
          { key: "type", label: "Type" },
          { key: "paymentMethod", label: "Payment Method" }
        ]
      default:
        return [
          { key: "header", label: "Header" },
          { key: "type", label: "Section Type" },
          { key: "status", label: "Status" },
          { key: "target", label: "Target" },
          { key: "limit", label: "Limit" },
          { key: "reviewer", label: "Reviewer" }
        ]
    }
  }

  return (
    <SharedLayout>
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        {/* Quick Create Button */}
        <div className="px-4 lg:px-6">
          <div className="flex justify-between items-center mb-6">
            <div>
            </div>
            <Button 
              onClick={() => setIsQuickCreateOpen(true)}
              disabled={isLoading}
              className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)]"
            >
              <Plus className="h-4 w-4 mr-2" />
              {isLoading ? 'Loading...' : 'Quick Create'}
            </Button>
          </div>
        </div>
        
        <SectionCards />
        <div className="px-4 lg:px-6">
          <ChartAreaInteractive />
        </div>
        
        {/* Tabbed Data Tables */}
        <div className="px-4 lg:px-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="customers" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Customers
              </TabsTrigger>
              <TabsTrigger value="jobs" className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                Jobs
              </TabsTrigger>
              <TabsTrigger value="internships" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Internships
              </TabsTrigger>
              <TabsTrigger value="payments" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                Payments
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="customers" className="mt-6">
              <FlexibleDataTable data={getTableData()} columns={getTableColumns()} />
            </TabsContent>
            
            <TabsContent value="jobs" className="mt-6">
              <FlexibleDataTable data={getTableData()} columns={getTableColumns()} />
            </TabsContent>
            
            <TabsContent value="internships" className="mt-6">
              <FlexibleDataTable data={getTableData()} columns={getTableColumns()} />
            </TabsContent>
            
            <TabsContent value="payments" className="mt-6">
              <FlexibleDataTable data={getTableData()} columns={getTableColumns()} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <QuickCreateModal
        isOpen={isQuickCreateOpen}
        onClose={() => setIsQuickCreateOpen(false)}
        onSubmit={handleQuickCreate}
        isLoading={isLoading}
      />
    </SharedLayout>
  )
}
