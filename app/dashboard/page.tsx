"use client"

import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { FlexibleDataTable } from "@/components/flexible-data-table"
import { QuickCreateModal } from "@/components/QuickCreateModal"
import { SectionCards } from "@/components/section-cards"
import { SharedLayout } from "@/components/shared-layout"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { adminService, jobService, jobAlertService, paymentService } from "@/lib/api/services"
import { useAuth } from "@/lib/auth/AuthContext"
import { Briefcase, CreditCard, GraduationCap, Plus, Users } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "sonner"

// import customersData from "./customers-data.json" // Removed - using live data instead
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
  const [customers, setCustomers] = useState<any[]>([])
  const [sendingNotifications, setSendingNotifications] = useState<{[key: string]: boolean}>({})
  const [alertStats, setAlertStats] = useState<any>(null)
  const [sendingAllAlerts, setSendingAllAlerts] = useState(false)
  const [retryingFailed, setRetryingFailed] = useState(false)
  const [payments, setPayments] = useState<any[]>([])
  const [chartData, setChartData] = useState<{ date: string; customers: number }[]>([])

  // Check if user is admin
  useEffect(() => {
    if (!authLoading && user) {
      if (user.role !== 'admin' && user.role !== 'super_admin') {
        // Regular users should go to home page, not login
        router.push('/')
      }
    } else if (!authLoading && !user) {
      // No user, redirect to login
      router.push('/login')
    }
  }, [user, authLoading, router])

  // Fetch dashboard data - MUST be before any early returns
  useEffect(() => {
    console.log('🔍 Dashboard: Auth state changed', { user: user?.email, role: user?.role, authLoading });
    
    // BULLETPROOF: Always fetch data for testing
    if (!authLoading && user && (user.role === 'admin' || user.role === 'super_admin')) {
      console.log('🔍 Dashboard: Starting data fetch (bulletproof mode)...');
      fetchDashboardData()
      fetchAlertStats() // Fetch job alert statistics
    } else {
      console.log('🔍 Dashboard: Still loading auth state or not admin');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, authLoading])

  // Show loading while checking authentication
  if (authLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  // Don't render dashboard if user is not admin
  if (!user || (user.role !== 'admin' && user.role !== 'super_admin')) {
    return null
  }

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
      
      // Fetch dashboard overview stats
      try {
        console.log('🔍 Fetching dashboard stats...');
        const statsResponse = await adminService.getDashboardStats();
        if (statsResponse.success && statsResponse.data) {
          setDashboardStats(statsResponse.data);
          console.log('✅ Dashboard stats loaded');
        }
      } catch (statsError) {
        console.error('❌ Stats API failed:', statsError);
      }

      // Fetch user analytics for chart
      try {
        console.log('🔍 Fetching user analytics...');
        const analyticsResponse = await adminService.getUserAnalytics();
        if (analyticsResponse.success && analyticsResponse.data) {
          // Transform userTrends into chart data
          const trends = (analyticsResponse.data as any).userTrends || [];
          const transformedTrends = trends.map((t: any) => ({
            date: `${t._id.year}-${String(t._id.month).padStart(2, '0')}-${String(t._id.day).padStart(2, '0')}`,
            customers: t.count
          }));
          setChartData(transformedTrends);
          console.log('✅ User trends loaded for chart');
        }
      } catch (analyticsError) {
        console.error('❌ Analytics API failed:', analyticsError);
      }

      // Fetch payment history (admin version)
      try {
        console.log('🔍 Fetching all payment history...');
        const paymentsResponse = await adminService.getAllPayments({ limit: 50 });
        if (paymentsResponse.success && paymentsResponse.data) {
          const paymentList = paymentsResponse.data.data || [];
          setPayments(paymentList);
          console.log('✅ Payments loaded:', paymentList.length);
        }
      } catch (paymentsError) {
        console.error('❌ Payments API failed:', paymentsError);
      }

      // Fetch customers with bulletproof error handling
      try {
        console.log('🔍 Fetching customers with working token...');
        const customersResponse = await adminService.getAllCustomers({ limit: 50 });
        console.log('🔍 Customers API Response:', customersResponse);
        
        if (customersResponse.success && customersResponse.data && customersResponse.data.data) {
          const customerList = customersResponse.data.data || [];
          setCustomers(customerList);
          console.log('✅ Customers loaded successfully:', customerList.length);
        } else {
          console.error('❌ Invalid customers response:', customersResponse);
          setCustomers([]);
        }
      } catch (customersError) {
        console.error('❌ Customers API failed:', customersError);
        setCustomers([]);
      }

      // Fetch jobs
      try {
        const jobsResponse = await jobService.getJobs({ limit: 50 })
        console.log('🔍 API Response:', jobsResponse)
        
        if (jobsResponse.success && jobsResponse.data && jobsResponse.data.jobs) {
          const jobData = jobsResponse.data.jobs || []
          
          // Transform job data for dashboard display
          const transformedJobs = jobData
            .filter((job: any) => job.type === 'job')
            .map((job: any) => ({
              ...job,
              status: job.isActive ? 'Active' : 'Inactive',
              applications: 0, 
              postedDate: job.createdAt ? new Date(job.createdAt).toLocaleDateString() : 'N/A',
              expiryDate: job.applicationDeadline ? new Date(job.applicationDeadline).toLocaleDateString() : 'N/A'
            }))
          
          // Transform internship data for dashboard display
          const transformedInternships = jobData
            .filter((job: any) => job.type === 'internship')
            .map((job: any) => ({
              ...job,
              status: job.isActive ? 'Active' : 'Inactive',
              applications: 0,
              postedDate: job.createdAt ? new Date(job.createdAt).toLocaleDateString() : 'N/A',
              expiryDate: job.applicationDeadline ? new Date(job.applicationDeadline).toLocaleDateString() : 'N/A'
            }))
          
          setJobs(transformedJobs)
          setInternships(transformedInternships)
          
          toast.success(`Refreshed data: ${transformedJobs.length} jobs, ${transformedInternships.length} internships`)
        }
      } catch (apiError) {
        console.log('⚠️ API call failed:', apiError)
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error)
      toast.error('Failed to fetch dashboard data')
    } finally {
      setIsLoading(false)
    }
  }

  // Fetch job alert statistics
  const fetchAlertStats = async () => {
    try {
      const response = await jobAlertService.getStatistics();
      if (response.success) {
        setAlertStats(response.data.statistics);
      }
    } catch (error) {
      console.error('Error fetching alert statistics:', error);
    }
  };

  // Send alerts for a specific job
  const handleSendNotification = async (jobId: string, jobTitle: string) => {
    try {
      setSendingNotifications(prev => ({ ...prev, [jobId]: true }));
      toast.info(`Sending job alerts for "${jobTitle}"...`);
      
      const response = await jobAlertService.sendForJob(jobId, {
        minMatchScore: 50,
        maxUsers: 100,
        dryRun: false
      });
      
      if (response.success) {
        // API returns: { success, data: { jobId, jobTitle, emailsSent, emailsFailed, totalEligibleUsers, duplicateNotifications } }
        const stats = response.data;
        toast.success(`📧 Alerts sent for "${jobTitle}"!

📊 Results:
• Eligible Users: ${stats.totalEligibleUsers ?? 0}
• Emails Sent: ${stats.emailsSent ?? 0}
• Failed: ${stats.emailsFailed ?? 0}
• Duplicates Skipped: ${stats.duplicateNotifications ?? 0}`);
        fetchAlertStats();
      } else {
        toast.error(`Failed to send alerts for "${jobTitle}": ${response.error?.message || 'Unknown error'}`);
      }
    } catch (error: any) {
      console.error('Error sending job alerts:', error);
      toast.error(`Error sending job alerts: ${error.message}`);
    } finally {
      setSendingNotifications(prev => ({ ...prev, [jobId]: false }));
    }
  };

  // Send alerts to ALL active jobs
  const handleSendAllAlerts = async () => {
    try {
      setSendingAllAlerts(true);
      toast.info('Sending alerts to all active jobs. This may take a moment...');
      
      const response = await jobAlertService.sendForAllJobs({
        minMatchScore: 50,
        maxUsersPerJob: 100,
        dryRun: false
      });
      
      if (response.success) {
        // API returns: { success, data: { totalJobs, totalEligibleUsers, totalEmailsSent, totalEmailsFailed, totalDuplicates, perJob } }
        const d = response.data;
        toast.success(`📧 All job alerts sent!

📊 Results:
• Jobs Processed: ${d.totalJobs ?? 0}
• Total Eligible Users: ${d.totalEligibleUsers ?? 0}
• Emails Sent: ${d.totalEmailsSent ?? 0}
• Failed: ${d.totalEmailsFailed ?? 0}
• Duplicates Skipped: ${d.totalDuplicates ?? 0}`);
        fetchAlertStats();
      } else {
        toast.error(`Failed to send all job alerts: ${response.error?.message || 'Unknown error'}`);
      }
    } catch (error: any) {
      console.error('Error sending all job alerts:', error);
      toast.error(`Error sending all job alerts: ${error.message}`);
    } finally {
      setSendingAllAlerts(false);
    }
  };

  // Retry failed notifications
  const handleRetryFailed = async () => {
    try {
      setRetryingFailed(true);
      toast.info('Retrying failed notifications...');
      
      const response = await jobAlertService.retryFailed();
      
      if (response.success) {
        // API returns: { success, data: { result: { retried, successful, failed, skippedMaxRetries } } }
        const result = response.data?.result ?? response.data;
        toast.success(`🔄 Retry completed!

📊 Results:
• Retried: ${result.retried ?? 0}
• Successful: ${result.successful ?? 0}
• Still Failed: ${result.failed ?? 0}
• Skipped (max retries): ${result.skippedMaxRetries ?? 0}`);
        fetchAlertStats();
      } else {
        toast.error(`Failed to retry: ${response.error?.message || 'Unknown error'}`);
      }
    } catch (error: any) {
      console.error('Error retrying failed notifications:', error);
      toast.error(`Error retrying notifications: ${error.message}`);
    } finally {
      setRetryingFailed(false);
    }
  };

  // Send job alerts initiated from a specific user row — sends ALL active jobs to ALL matching users
  // (backend dedup ensures this user only gets jobs they haven't been notified about yet)
  const handleSendUserNotification = async (userId: string, userEmail: string) => {
    try {
      setSendingNotifications(prev => ({ ...prev, [userId]: true }));
      toast.info(`Sending matching job alerts to ${userEmail}...`);
      
      const response = await jobAlertService.sendForAllJobs({
        minMatchScore: 50,
        maxUsersPerJob: 100,
        dryRun: false
      });
      
      if (response.success) {
        const d = response.data;
        toast.success(`📧 Job alerts sent!

• Jobs Processed: ${d.totalJobs ?? 0}
• Total Users Notified: ${d.totalEmailsSent ?? 0}
• Failed: ${d.totalEmailsFailed ?? 0}
• Duplicates Skipped: ${d.totalDuplicates ?? 0}

Note: Dedup is active — ${userEmail} only receives new jobs they haven't seen.`);
        fetchAlertStats();
      } else {
        toast.error(`Failed to send alerts: ${response.error?.message || 'Unknown error'}`);
      }
    } catch (error: any) {
      toast.error(`Error sending job alerts: ${error.message}`);
    } finally {
      setSendingNotifications(prev => ({ ...prev, [userId]: false }));
    }
  };


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
        ...(formData.companyLogoUrl ? { companyLogoUrl: formData.companyLogoUrl } : {}), // Include logo URL if provided
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
        return customers.length > 0 ? customers : [] // Use live customer data
      case "jobs":
        // Always return data - either real data from API or mock data
        return jobs.length > 0 ? jobs : jobsData
      case "internships":
        // Always return data - either real data from API or mock data
        return internships.length > 0 ? internships : internshipsData
      case "payments":
        return payments.length > 0 ? payments : paymentsData // Fallback to mock if empty
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
          { key: "plan", label: "Plan" },
          { key: "createdAt", label: "Join Date" },
          { key: "lastSubscriptionDate", label: "Last Active" },
          { key: "profileStatus", label: "Profile" }
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
          { key: "location", label: "Location" }
        ]
      case "payments":
        return [
          { key: "transactionId", label: "Transaction ID" },
          { key: "customerName", label: "Customer" },
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
        
        <SectionCards 
          stats={dashboardStats?.overview} 
          growth={dashboardStats?.growth} 
        />
        <div className="px-4 lg:px-6">
          <ChartAreaInteractive data={chartData} />
        </div>

        {/* Job Alert Statistics & Actions */}
        <div className="px-4 lg:px-6">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                  📧 Job Alert System
                  {alertStats && (
                    <span className="text-sm font-normal text-gray-600 dark:text-gray-400">
                      (Percentage-based matching ≥50%)
                    </span>
                  )}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Send job/internship alerts to users with matching profiles
                </p>
              </div>
              <Button
                onClick={fetchAlertStats}
                variant="outline"
                size="sm"
                className="text-xs"
              >
                🔄 Refresh Stats
              </Button>
            </div>

            {/* Statistics Cards */}
            {alertStats && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {alertStats.totalNotifications || 0}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    Total Notifications
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-green-200 dark:border-green-700">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {alertStats.sentNotifications || 0}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    Sent Successfully
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-red-200 dark:border-red-700">
                  <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                    {alertStats.failedNotifications || 0}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    Failed
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-yellow-200 dark:border-yellow-700">
                  <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                    {alertStats.pendingNotifications || 0}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    Pending
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={handleSendAllAlerts}
                disabled={sendingAllAlerts || isLoading}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                {sendingAllAlerts ? (
                  <>
                    <span className="animate-spin mr-2">⏳</span>
                    Sending to All Jobs...
                  </>
                ) : (
                  <>
                    📧 Send Alerts to All Jobs
                  </>
                )}
              </Button>
              
              <Button
                onClick={handleRetryFailed}
                disabled={retryingFailed || isLoading}
                variant="outline"
                className="border-orange-300 hover:bg-orange-50 dark:border-orange-700 dark:hover:bg-orange-900/20"
              >
                {retryingFailed ? (
                  <>
                    <span className="animate-spin mr-2">⏳</span>
                    Retrying...
                  </>
                ) : (
                  <>
                    🔄 Retry Failed Notifications
                    {alertStats?.failedNotifications > 0 && (
                      <span className="ml-1 bg-red-500 text-white text-xs rounded-full px-1.5">
                        {alertStats.failedNotifications}
                      </span>
                    )}
                  </>
                )}
              </Button>

              <div className="ml-auto flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <span className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full border border-gray-300 dark:border-gray-600">
                  Min Match: 50%
                </span>
                <span className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full border border-gray-300 dark:border-gray-600">
                  Max Users: 100/job
                </span>
              </div>
            </div>
          </div>
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
                {jobs.length > 0 && (
                  <span className="ml-1 px-1.5 py-0.5 text-xs bg-blue-100 text-blue-800 rounded-full">
                    {jobs.length}
                  </span>
                )}
              </TabsTrigger>
              <TabsTrigger value="internships" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Internships
                {internships.length > 0 && (
                  <span className="ml-1 px-1.5 py-0.5 text-xs bg-green-100 text-green-800 rounded-full">
                    {internships.length}
                  </span>
                )}
              </TabsTrigger>
              <TabsTrigger value="payments" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                Payments
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="customers" className="mt-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  Showing {getTableData().length} customers
                  {customers.length > 0 ? (
                    <span className="ml-2 px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                      Live Data
                    </span>
                  ) : (
                    <span className="ml-2 px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">
                      No Data
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button 
                    onClick={() => {
                      console.log('🔍 Debug: Current state:', { 
                        customers: customers.length,
                        user: user?.email,
                        role: user?.role,
                        token: typeof window !== 'undefined' ? localStorage.getItem('careerx_token') ? 'Present' : 'Missing' : 'N/A',
                        isLoading: isLoading
                      });
                      toast.info(`🔍 Debug: ${customers.length} customers loaded, ${isLoading ? 'Loading...' : 'Ready'}`);
                    }} 
                    variant="outline" 
                    size="sm"
                  >
                    Debug
                  </Button>
                  <Button 
                    onClick={() => {
                      console.log('🔄 FORCE REFRESH triggered - clearing state and refetching...');
                      setCustomers([]);
                      setIsLoading(true);
                      setTimeout(() => {
                        fetchDashboardData();
                      }, 100);
                    }} 
                    variant="outline" 
                    size="sm"
                  >
                    Force Refresh
                  </Button>
                </div>
              </div>
              <FlexibleDataTable 
                data={getTableData()} 
                columns={getTableColumns()}
                onSendNotification={(id, email) => {
                  // For customers, send job matching alerts
                  handleSendUserNotification(id, email);
                }}
                showNotificationAction={true}
                notificationLabel="Send Job Alerts"
                sendingNotifications={sendingNotifications}
              />
            </TabsContent>
            
            <TabsContent value="jobs" className="mt-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  Showing {getTableData().length} jobs
                  {jobs.length > 0 ? (
                    <span className="ml-2 px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                      Live Data
                    </span>
                  ) : (
                    <span className="ml-2 px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">
                      Mock Data
                    </span>
                  )}
                </div>
              </div>
              <FlexibleDataTable 
                data={getTableData()} 
                columns={getTableColumns()} 
                onSendNotification={handleSendNotification}
                showNotificationAction={true}
                notificationLabel="Send Job Alert"
                sendingNotifications={sendingNotifications}
              />
            </TabsContent>
            
            <TabsContent value="internships" className="mt-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  Showing {getTableData().length} internships
                  {internships.length > 0 ? (
                    <span className="ml-2 px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                      Live Data
                    </span>
                  ) : (
                    <span className="ml-2 px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">
                      Mock Data
                    </span>
                  )}
                </div>
              </div>
              <FlexibleDataTable 
                data={getTableData()} 
                columns={getTableColumns()} 
                onSendNotification={handleSendNotification}
                showNotificationAction={true}
                notificationLabel="Send Internship Alert"
                sendingNotifications={sendingNotifications}
              />
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
