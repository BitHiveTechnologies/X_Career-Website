'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/lib/auth/AuthContextBackend';
import { Crown, DollarSign, TrendingUp, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

interface PremiumUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  subscriptionStatus: string;
  subscriptionPlan: string;
  subscriptionStartDate?: string;
  subscriptionEndDate?: string;
}

export default function AdminDashboard() {
  const { user, isAuthenticated, isAdmin } = useAuth();
  const [premiumUsers, setPremiumUsers] = useState<PremiumUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isAuthenticated && isAdmin()) {
      fetchPremiumUsers();
    }
  }, [isAuthenticated, isAdmin]);

  const fetchPremiumUsers = async () => {
    try {
      setLoading(true);
      setError(null);

      // Get all users (this would need to be implemented in backend)
      const token = localStorage.getItem('careerx_token');
      const response = await fetch('http://localhost:3001/api/v1/users/', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch users: ${response.status}`);
      }

      const data = await response.json();
      console.log('All users response:', data);

      // Filter for premium users (this is a mock filter since we don't have subscription data)
      if (data.success && data.data?.users) {
        const users = data.data.users;
        // For now, let's show all users and mark some as premium for demo
        const mockPremiumUsers = users.map((user: any, index: number) => ({
          id: user.id,
          email: user.email,
          firstName: user.firstName || user.name || 'User',
          lastName: user.lastName || '',
          subscriptionStatus: index === 0 ? 'active' : 'inactive', // Mock: first user is premium
          subscriptionPlan: index === 0 ? 'premium' : 'basic',
          subscriptionStartDate: index === 0 ? new Date().toISOString() : undefined,
          subscriptionEndDate: index === 0 ? new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString() : undefined,
        }));
        setPremiumUsers(mockPremiumUsers);
      }

    } catch (err) {
      console.error('Error fetching premium users:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch premium users');
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-500">Active</Badge>;
      case 'expired':
        return <Badge variant="destructive">Expired</Badge>;
      case 'cancelled':
        return <Badge variant="secondary">Cancelled</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getPlanBadge = (plan: string) => {
    switch (plan) {
      case 'premium':
        return <Badge className="bg-purple-500">Premium</Badge>;
      case 'enterprise':
        return <Badge className="bg-blue-500">Enterprise</Badge>;
      default:
        return <Badge variant="outline">{plan}</Badge>;
    }
  };

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
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user?.firstName}</p>
        </div>
        <Button onClick={fetchPremiumUsers} disabled={loading}>
          {loading ? 'Loading...' : 'Refresh Data'}
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{premiumUsers.length}</div>
            <p className="text-xs text-muted-foreground">All registered users</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Premium Users</CardTitle>
            <Crown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {premiumUsers.filter(user => user.subscriptionStatus === 'active' && user.subscriptionPlan !== 'basic').length}
            </div>
            <p className="text-xs text-muted-foreground">Active premium subscriptions</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ₹{premiumUsers.filter(user => user.subscriptionStatus === 'active' && user.subscriptionPlan !== 'basic').length * 99}
            </div>
            <p className="text-xs text-muted-foreground">Monthly recurring revenue</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Growth</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12%</div>
            <p className="text-xs text-muted-foreground">From last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Premium Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>Premium Users</CardTitle>
          <CardDescription>Users with active premium or enterprise subscriptions</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8">
              <p>Loading premium users...</p>
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <p className="text-red-600">Error: {error}</p>
              <Button onClick={fetchPremiumUsers} className="mt-2">
                Retry
              </Button>
            </div>
          ) : premiumUsers.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600">No premium users found.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {premiumUsers.map((user) => (
                <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">
                        {user.firstName} {user.lastName}
                      </h3>
                      {getStatusBadge(user.subscriptionStatus)}
                      {getPlanBadge(user.subscriptionPlan)}
                    </div>
                    <p className="text-sm text-gray-600">{user.email}</p>
                    {user.subscriptionStartDate && (
                      <p className="text-xs text-gray-500">
                        Started: {new Date(user.subscriptionStartDate).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                  <div className="text-right">
                    {user.subscriptionPlan === 'premium' && (
                      <p className="text-sm font-medium text-purple-600">₹99/month</p>
                    )}
                    {user.subscriptionPlan === 'enterprise' && (
                      <p className="text-sm font-medium text-blue-600">₹299/month</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Debug Info */}
      <Card>
        <CardHeader>
          <CardTitle>Debug Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p><strong>Current User:</strong> {user?.email}</p>
            <p><strong>Role:</strong> {user?.role}</p>
            <p><strong>Is Admin:</strong> {isAdmin() ? 'Yes' : 'No'}</p>
            <p><strong>Token:</strong> {localStorage.getItem('careerx_token') ? 'Present' : 'Missing'}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
