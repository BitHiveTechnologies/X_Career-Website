'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { apiClient } from '@/lib/api/client';
import { adminService } from '@/lib/api/services';
import { useAuth } from '@/lib/auth/AuthContext';
import {
  Activity,
  AlertCircle,
  CheckCircle,
  Crown,
  Download,
  Edit,
  Eye,
  Filter,
  Mail,
  Phone,
  RefreshCw,
  Search,
  User,
  Users,
  XCircle
} from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

interface Customer {
  _id: string;
  id: string;
  email: string;
  name: string;
  fullName: string;
  mobile: string;
  role: string;
  subscriptionPlan: string;
  subscriptionStatus: string;
  subscriptionStartDate?: string;
  subscriptionEndDate?: string;
  isProfileComplete: boolean;
  createdAt: string;
  updatedAt: string;
  clerkUserId?: string;
  subscriptionInfo: {
    status: string;
    plan: string;
    isActive: boolean;
    daysRemaining: number;
    startDate?: string;
    endDate?: string;
  };
}

interface CustomerStatistics {
  totalUsers: number;
  activeUsers: number;
  completedProfiles: number;
  subscriptionBreakdown: {
    active: number;
    inactive: number;
    halted: number;
    premium: number;
    basic: number;
  };
}

interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalUsers: number;
  limit: number;
}

interface RegistrationTrend {
  _id: {
    year: number;
    month: number;
    day: number;
  };
  count: number;
}

interface CustomerAnalytics {
  period: string;
  userTrends: RegistrationTrend[];
  subscriptionAnalytics: Array<{
    _id: string;
    count: number;
    users: Array<{ id: string; email: string; name: string }>;
  }>;
  profileCompletion: Array<{
    _id: boolean;
    count: number;
  }>;
  userEngagement: {
    totalEngagedUsers: number;
    averageApplications: number;
  };
}

export default function AdminDashboard() {
  const { user, isAuthenticated, isAdmin } = useAuth();
  
  // Core data state
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [customerStats, setCustomerStats] = useState<CustomerStatistics>({
    totalUsers: 0,
    activeUsers: 0,
    completedProfiles: 0,
    subscriptionBreakdown: {
      active: 0,
      inactive: 0,
      halted: 0,
      premium: 0,
      basic: 0,
    },
  });
  const [analytics, setAnalytics] = useState<CustomerAnalytics | null>(null);
  const [pagination, setPagination] = useState<PaginationInfo>({
    currentPage: 1,
    totalPages: 1,
    totalUsers: 0,
    limit: 20,
  });

  // Loading and error states
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  // Filter and search state
  const [filters, setFilters] = useState({
    subscriptionStatus: 'all',
    subscriptionPlan: 'all',
    profileCompletion: 'all',
    role: 'all',
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');

  // UI state
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [showCustomerModal, setShowCustomerModal] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  // Get the current user's token from the auth context
  const getUserToken = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('careerx_token');
    }
    return null;
  };

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Comprehensive customer data fetching
  const fetchCustomers = useCallback(async (isRefresh = false) => {
    try {
      if (isRefresh) {
        setRefreshing(true);
      } else {
      setLoading(true);
      }
      setError(null);

      // Set the user's token for this request
      const userToken = getUserToken();
      if (!userToken) {
        throw new Error('No authentication token available');
      }
      apiClient.setToken(userToken);

      // Build comprehensive query parameters
      const params: any = {
        page: pagination.currentPage,
        limit: pagination.limit,
      };

      // Add filters
      if (filters.subscriptionStatus !== 'all') {
        params.subscriptionStatus = filters.subscriptionStatus;
      }
      if (filters.subscriptionPlan !== 'all') {
        params.subscriptionPlan = filters.subscriptionPlan;
      }
      if (filters.role !== 'all') {
        params.role = filters.role;
      }
      if (filters.profileCompletion !== 'all') {
        params.isProfileComplete = filters.profileCompletion === 'complete';
      }

      // Add search query if provided
      if (debouncedSearchQuery.trim()) {
        params.search = debouncedSearchQuery.trim();
      }

      console.log('🔍 Fetching customers with params:', params);

      const response = await adminService.getUsers(params);
      console.log('✅ Customers response:', response);

      if (response.success && response.data) {
        const customersData = response.data.users || response.data;
        const paginationData = response.data.pagination;
        const statisticsData = response.data.statistics;
        const registrationTrends = response.data.registrationTrends || [];

        // Update customers data
        if (Array.isArray(customersData)) {
          setCustomers(customersData);
        } else {
          setCustomers([]);
        }

        // Update pagination
        if (paginationData) {
          setPagination(prev => ({
            ...prev,
            currentPage: paginationData.currentPage || 1,
            totalPages: paginationData.totalPages || 1,
            totalUsers: paginationData.totalUsers || 0,
          }));
        }

        // Update customer statistics
        if (statisticsData) {
          setCustomerStats(prev => ({
            ...prev,
            totalUsers: statisticsData.totalUsers || 0,
            activeUsers: statisticsData.activeUsers || 0,
            completedProfiles: statisticsData.completedProfiles || 0,
          }));
        }

        // Update last updated timestamp
        setLastUpdated(new Date());
      } else {
        setCustomers([]);
        setError('Failed to fetch customer data');
      }

    } catch (err) {
      console.error('❌ Error fetching customers:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch customers');
      setCustomers([]);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [filters, debouncedSearchQuery, pagination.currentPage, pagination.limit]);

  // Fetch comprehensive customer analytics
  const fetchCustomerAnalytics = useCallback(async () => {
    try {
      console.log('🔍 Fetching customer analytics...');
      const userToken = getUserToken();
      if (!userToken) {
        throw new Error('No authentication token available');
      }
      apiClient.setToken(userToken);
      
      const response = await adminService.getUserAnalytics();
      console.log('✅ Customer analytics response:', response);

      if (response.success && response.data) {
        const analyticsData = response.data;
        
        // Update analytics state with proper typing
        setAnalytics(analyticsData as unknown as CustomerAnalytics);
        
        // Update customer statistics with detailed breakdown
        setCustomerStats(prev => ({
          ...prev,
          totalUsers: analyticsData.totalUsers || prev.totalUsers,
          activeUsers: analyticsData.activeUsers || prev.activeUsers,
          completedProfiles: analyticsData.subscriptionBreakdown?.premium || prev.completedProfiles,
          subscriptionBreakdown: {
            active: analyticsData.activeUsers || 0,
            inactive: analyticsData.totalUsers - analyticsData.activeUsers || 0,
            halted: 0, // This would need to come from the actual analytics response
            premium: analyticsData.subscriptionBreakdown?.premium || 0,
            basic: analyticsData.subscriptionBreakdown?.starter || 0,
          },
        }));
      }
    } catch (err) {
      console.error('❌ Error fetching customer analytics:', err);
      // Don't set error state for analytics, just log it
    }
  }, []);

  // Auto-refresh functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!loading && !refreshing) {
        fetchCustomers(true);
        fetchCustomerAnalytics();
      }
    }, 30000); // Auto-refresh every 30 seconds

    return () => clearInterval(interval);
  }, [fetchCustomers, fetchCustomerAnalytics, loading, refreshing]);

  // Filter change handler
  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value,
    }));
    setPagination(prev => ({ ...prev, currentPage: 1 })); // Reset to first page
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      subscriptionStatus: 'all',
      subscriptionPlan: 'all',
      profileCompletion: 'all',
      role: 'all',
    });
    setSearchQuery('');
    setPagination(prev => ({ ...prev, currentPage: 1 }));
  };

  // Pagination handlers
  const handlePageChange = (page: number) => {
    setPagination(prev => ({ ...prev, currentPage: page }));
  };

  const handleLimitChange = (limit: number) => {
    setPagination(prev => ({ ...prev, limit, currentPage: 1 }));
  };

  // Customer modal handlers
  const openCustomerModal = (customer: Customer) => {
    setSelectedCustomer(customer);
    setShowCustomerModal(true);
  };

  const closeCustomerModal = () => {
    setSelectedCustomer(null);
    setShowCustomerModal(false);
  };

  // Export functionality
  const exportToCSV = () => {
    const csvContent = [
      ['ID', 'Name', 'Email', 'Mobile', 'Role', 'Subscription Plan', 'Status', 'Profile Complete', 'Created Date'],
      ...customers.map(customer => [
        customer.id,
        customer.fullName || customer.name,
        customer.email,
        customer.mobile,
        customer.role,
        customer.subscriptionPlan,
        customer.subscriptionStatus,
        customer.isProfileComplete ? 'Yes' : 'No',
        new Date(customer.createdAt).toLocaleDateString(),
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `customers-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  // Initial data fetch - wait for authentication to be ready
  useEffect(() => {
    console.log('🔍 Admin Dashboard: Auth state changed', { isAuthenticated, isAdmin: isAdmin() });
    
    if (isAuthenticated && isAdmin()) {
      console.log('🔍 Admin Dashboard: Starting data fetch...');
      fetchCustomers();
      fetchCustomerAnalytics();
    } else {
      console.log('🔍 Admin Dashboard: Not authenticated or not admin, skipping data fetch');
    }
  }, [isAuthenticated, isAdmin, fetchCustomers, fetchCustomerAnalytics]);

  // Refetch when filters or pagination change
  useEffect(() => {
    if (isAuthenticated && isAdmin()) {
      fetchCustomers();
    }
  }, [filters, debouncedSearchQuery, pagination.currentPage, pagination.limit, fetchCustomers, isAuthenticated, isAdmin]);

  // UI Helper functions
  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return <Badge className="bg-green-500 text-white">Active</Badge>;
      case 'inactive':
        return <Badge variant="secondary">Inactive</Badge>;
      case 'expired':
        return <Badge variant="destructive">Expired</Badge>;
      case 'cancelled':
        return <Badge variant="outline">Cancelled</Badge>;
      case 'halted':
        return <Badge className="bg-yellow-500 text-white">Halted</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getPlanBadge = (plan: string) => {
    switch (plan.toLowerCase()) {
      case 'premium':
        return <Badge className="bg-purple-500 text-white">Premium</Badge>;
      case 'enterprise':
        return <Badge className="bg-blue-500 text-white">Enterprise</Badge>;
      case 'basic':
        return <Badge variant="outline">Basic</Badge>;
      default:
        return <Badge variant="outline">{plan}</Badge>;
    }
  };

  const getRoleBadge = (role: string) => {
    switch (role.toLowerCase()) {
      case 'admin':
        return <Badge className="bg-red-500 text-white">Admin</Badge>;
      case 'user':
        return <Badge variant="outline">User</Badge>;
      default:
        return <Badge variant="outline">{role}</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const calculateDaysRemaining = (endDate?: string) => {
    if (!endDate) return 0;
    const end = new Date(endDate);
    const now = new Date();
    const diffTime = end.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  // Computed values
  const filteredCustomersCount = customers.length;
  const hasActiveFilters = Object.values(filters).some(filter => filter !== 'all') || searchQuery.trim() !== '';
  const isDataEmpty = customers.length === 0 && !loading;

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto p-6">
        <Card>
          <CardContent className="pt-6">
            <p className="text-center text-gray-600">Please login to access the admin dashboard.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!isAdmin()) {
    return (
      <div className="container mx-auto p-6">
        <Card>
          <CardContent className="pt-6">
            <p className="text-center text-red-600">Access denied. Admin privileges required.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Customer Management</h1>
          <p className="text-gray-600">Manage and analyze customer data</p>
          {lastUpdated && (
            <p className="text-sm text-gray-500">
              Last updated: {lastUpdated.toLocaleTimeString()}
            </p>
          )}
        </div>
              <div className="flex gap-2">
          <Button onClick={exportToCSV} variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export CSV
                </Button>
                <Button
            onClick={() => {
              fetchCustomers(true);
              fetchCustomerAnalytics();
            }} 
            disabled={loading || refreshing}
                  size="sm"
          >
            {refreshing ? (
              <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <RefreshCw className="h-4 w-4 mr-2" />
            )}
            Refresh
                </Button>
                <Button
            onClick={() => {
              console.log('🔍 Debug: Current auth state:', { 
                isAuthenticated, 
                isAdmin: isAdmin(), 
                user: user?.email,
                token: getUserToken() ? 'Present' : 'Missing'
              });
            }} 
            variant="outline" 
                  size="sm"
          >
            Debug Auth
                </Button>
              </div>
            </div>

      {/* Comprehensive Statistics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {loading ? (
                <RefreshCw className="h-6 w-6 animate-spin" />
              ) : (
                customerStats.totalUsers.toLocaleString()
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              All registered customers
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {loading ? (
                <RefreshCw className="h-6 w-6 animate-spin" />
              ) : (
                customerStats.subscriptionBreakdown.active.toLocaleString()
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              Active subscriptions
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Premium Customers</CardTitle>
            <Crown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {loading ? (
                <RefreshCw className="h-6 w-6 animate-spin" />
              ) : (
                customerStats.subscriptionBreakdown.premium.toLocaleString()
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              Premium subscriptions
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Profiles</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {loading ? (
                <RefreshCw className="h-6 w-6 animate-spin" />
              ) : (
                customerStats.completedProfiles.toLocaleString()
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              {customerStats.totalUsers > 0 
                ? `${Math.round((customerStats.completedProfiles / customerStats.totalUsers) * 100)}% completion rate`
                : '0% completion rate'
              }
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Advanced Filter and Search Panel */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Filter & Search</CardTitle>
              <CardDescription>Find customers with advanced filters</CardDescription>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-4 w-4 mr-2" />
                {showFilters ? 'Hide' : 'Show'} Filters
              </Button>
              {hasActiveFilters && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearFilters}
                >
                  Clear All
                </Button>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search by name, email, or mobile..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t">
              <div>
                <label className="text-sm font-medium mb-2 block">Subscription Status</label>
                <Select
                  value={filters.subscriptionStatus}
                  onValueChange={(value) => handleFilterChange('subscriptionStatus', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="expired">Expired</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                    <SelectItem value="halted">Halted</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Subscription Plan</label>
                <Select
                  value={filters.subscriptionPlan}
                  onValueChange={(value) => handleFilterChange('subscriptionPlan', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Plans</SelectItem>
                    <SelectItem value="basic">Basic</SelectItem>
                    <SelectItem value="premium">Premium</SelectItem>
                    <SelectItem value="enterprise">Enterprise</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Profile Completion</label>
                <Select
                  value={filters.profileCompletion}
                  onValueChange={(value) => handleFilterChange('profileCompletion', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select completion" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Profiles</SelectItem>
                    <SelectItem value="complete">Complete</SelectItem>
                    <SelectItem value="incomplete">Incomplete</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Role</label>
                <Select
                  value={filters.role}
                  onValueChange={(value) => handleFilterChange('role', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Roles</SelectItem>
                    <SelectItem value="user">User</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Customer Data Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Customer List</CardTitle>
          <CardDescription>
                Showing {filteredCustomersCount} of {pagination.totalUsers} customers
                {hasActiveFilters && ' (filtered)'}
          </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Select
                value={pagination.limit.toString()}
                onValueChange={(value) => handleLimitChange(parseInt(value))}
              >
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                  <SelectItem value="100">100</SelectItem>
                </SelectContent>
              </Select>
              <span className="text-sm text-gray-500">per page</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8">
              <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4" />
              <p>Loading customer data from backend...</p>
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <AlertCircle className="h-8 w-8 text-red-500 mx-auto mb-4" />
              <p className="text-red-600 mb-2">Error: {error}</p>
              <p className="text-sm text-gray-600 mb-4">Failed to fetch customer data from backend</p>
              <Button onClick={() => fetchCustomers()} className="mt-2">
                <RefreshCw className="h-4 w-4 mr-2" />
                Retry
              </Button>
            </div>
          ) : isDataEmpty ? (
            <div className="text-center py-8">
              <Users className="h-8 w-8 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No customers found matching your criteria.</p>
              <p className="text-sm text-gray-500 mt-2">Try adjusting your filters or search terms.</p>
              {hasActiveFilters && (
                <Button onClick={clearFilters} className="mt-4" variant="outline">
                  Clear Filters
                </Button>
              )}
            </div>
          ) : (
            <>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                      <th className="text-left p-3 font-medium">Customer</th>
                      <th className="text-left p-3 font-medium">Contact</th>
                      <th className="text-left p-3 font-medium">Role</th>
                      <th className="text-left p-3 font-medium">Subscription</th>
                      <th className="text-left p-3 font-medium">Profile</th>
                      <th className="text-left p-3 font-medium">Created</th>
                      <th className="text-left p-3 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                    {customers.map((customer) => (
                      <tr key={customer.id} className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-3">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                              <User className="h-4 w-4 text-gray-600" />
                            </div>
                            <div>
                        <div className="font-medium">
                                {customer.fullName || customer.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                ID: {customer.id.slice(-8)}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-3">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-sm">
                              <Mail className="h-3 w-3 text-gray-400" />
                              {customer.email}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <Phone className="h-3 w-3 text-gray-400" />
                              {customer.mobile}
                            </div>
                        </div>
                      </td>
                        <td className="p-3">
                          {getRoleBadge(customer.role)}
                      </td>
                        <td className="p-3">
                          <div className="space-y-1">
                            {getStatusBadge(customer.subscriptionStatus)}
                            {getPlanBadge(customer.subscriptionPlan)}
                            {customer.subscriptionInfo.daysRemaining > 0 && (
                              <div className="text-xs text-gray-500">
                                {customer.subscriptionInfo.daysRemaining} days left
                              </div>
                            )}
                          </div>
                      </td>
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            {customer.isProfileComplete ? (
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            ) : (
                              <XCircle className="h-4 w-4 text-red-500" />
                            )}
                            <span className="text-sm">
                              {customer.isProfileComplete ? 'Complete' : 'Incomplete'}
                            </span>
                          </div>
                      </td>
                        <td className="p-3">
                          <div className="text-sm text-gray-600">
                            {formatDate(customer.createdAt)}
                          </div>
                      </td>
                        <td className="p-3">
                          <div className="flex gap-1">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => openCustomerModal(customer)}
                            >
                              <Eye className="h-3 w-3" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                // TODO: Implement edit functionality
                                console.log('Edit customer:', customer.id);
                              }}
                            >
                              <Edit className="h-3 w-3" />
                        </Button>
                          </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

              {/* Pagination */}
              {pagination.totalPages > 1 && (
                <div className="flex items-center justify-between mt-6">
              <div className="text-sm text-gray-600">
                    Showing {((pagination.currentPage - 1) * pagination.limit) + 1} to{' '}
                    {Math.min(pagination.currentPage * pagination.limit, pagination.totalUsers)} of{' '}
                    {pagination.totalUsers} customers
              </div>
                  <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                      onClick={() => handlePageChange(pagination.currentPage - 1)}
                      disabled={pagination.currentPage === 1}
                >
                  Previous
                </Button>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
                        const page = i + 1;
                        return (
                          <Button
                            key={page}
                            variant={pagination.currentPage === page ? "default" : "outline"}
                            size="sm"
                            onClick={() => handlePageChange(page)}
                            className="w-8 h-8 p-0"
                          >
                            {page}
                          </Button>
                        );
                      })}
                    </div>
                <Button
                  variant="outline"
                  size="sm"
                      onClick={() => handlePageChange(pagination.currentPage + 1)}
                      disabled={pagination.currentPage === pagination.totalPages}
                >
                  Next
                </Button>
              </div>
            </div>
              )}
            </>
          )}
        </CardContent>
      </Card>

      {/* Backend Integration Status */}
      <Card>
        <CardHeader>
          <CardTitle>Integration Status</CardTitle>
          <CardDescription>Real-time status of backend data integration</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
              <h4 className="font-medium">Authentication</h4>
              <p><strong>User Token:</strong> {getUserToken() ? 'Set' : 'Missing'}</p>
              <p><strong>Current User:</strong> {user?.email || 'Not logged in'}</p>
            <p><strong>Is Admin:</strong> {isAdmin() ? 'Yes' : 'No'}</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Data Status</h4>
              <p><strong>Total Customers:</strong> {customerStats.totalUsers}</p>
              <p><strong>Active Customers:</strong> {customerStats.subscriptionBreakdown.active}</p>
              <p><strong>Premium Customers:</strong> {customerStats.subscriptionBreakdown.premium}</p>
              <p><strong>Completed Profiles:</strong> {customerStats.completedProfiles}</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">System Status</h4>
            <p><strong>Loading:</strong> {loading ? 'Yes' : 'No'}</p>
              <p><strong>Refreshing:</strong> {refreshing ? 'Yes' : 'No'}</p>
            <p><strong>Error:</strong> {error || 'None'}</p>
              <p><strong>Last Updated:</strong> {lastUpdated ? lastUpdated.toLocaleTimeString() : 'Never'}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Customer Detail Modal */}
      {showCustomerModal && selectedCustomer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Customer Details</h2>
              <Button variant="outline" onClick={closeCustomerModal}>
                ×
              </Button>
            </div>
            
            <div className="space-y-6">
              {/* Basic Information */}
              <div>
                <h3 className="font-semibold mb-3">Basic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Name</label>
                    <p className="font-medium">{selectedCustomer.fullName || selectedCustomer.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Email</label>
                    <p>{selectedCustomer.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Mobile</label>
                    <p>{selectedCustomer.mobile}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Role</label>
                    <p>{getRoleBadge(selectedCustomer.role)}</p>
                  </div>
                </div>
              </div>

              {/* Subscription Information */}
              <div>
                <h3 className="font-semibold mb-3">Subscription Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Plan</label>
                    <p>{getPlanBadge(selectedCustomer.subscriptionPlan)}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Status</label>
                    <p>{getStatusBadge(selectedCustomer.subscriptionStatus)}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Start Date</label>
                    <p>{selectedCustomer.subscriptionStartDate ? formatDate(selectedCustomer.subscriptionStartDate) : 'Not set'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">End Date</label>
                    <p>{selectedCustomer.subscriptionEndDate ? formatDate(selectedCustomer.subscriptionEndDate) : 'Not set'}</p>
                  </div>
                  {selectedCustomer.subscriptionInfo.daysRemaining > 0 && (
                    <div>
                      <label className="text-sm font-medium text-gray-500">Days Remaining</label>
                      <p className="text-orange-600 font-medium">{selectedCustomer.subscriptionInfo.daysRemaining} days</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Profile Information */}
              <div>
                <h3 className="font-semibold mb-3">Profile Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Profile Complete</label>
                    <p className="flex items-center gap-2">
                      {selectedCustomer.isProfileComplete ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : (
                        <XCircle className="h-4 w-4 text-red-500" />
                      )}
                      {selectedCustomer.isProfileComplete ? 'Complete' : 'Incomplete'}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Created</label>
                    <p>{formatDate(selectedCustomer.createdAt)}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Last Updated</label>
                    <p>{formatDate(selectedCustomer.updatedAt)}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Customer ID</label>
                    <p className="font-mono text-sm">{selectedCustomer.id}</p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-4 border-t">
                <Button onClick={() => {
                  // TODO: Implement edit functionality
                  console.log('Edit customer:', selectedCustomer.id);
                }}>
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Customer
                </Button>
                <Button variant="outline" onClick={closeCustomerModal}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
