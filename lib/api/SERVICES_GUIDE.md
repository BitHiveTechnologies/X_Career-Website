# API Services Usage Guide

This guide provides comprehensive examples of how to use the NotifyX API services in your React components.

## 📚 Table of Contents

- [Job Services](#job-services)
- [Application Services](#application-services)
- [Subscription Services](#subscription-services)
- [Payment Services](#payment-services)
- [Matching Services](#matching-services)
- [Admin Services](#admin-services)
- [Notification Services](#notification-services)
- [Health Services](#health-services)
- [Error Handling](#error-handling)
- [Loading States](#loading-states)

## 💼 Job Services

### Get All Jobs

```tsx
import { jobService } from '@/lib/api';
import { useState, useEffect } from 'react';

function JobsList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await jobService.getJobs({
          page: 1,
          limit: 10,
          type: 'job',
          location: 'remote'
        });
        
        if (response.success && response.data) {
          setJobs(response.data.data);
        } else {
          setError(response.error?.message || 'Failed to fetch jobs');
        }
      } catch (err) {
        setError('An error occurred while fetching jobs');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) return <div>Loading jobs...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {jobs.map(job => (
        <div key={job.id}>
          <h3>{job.title}</h3>
          <p>{job.company}</p>
          <p>{job.location}</p>
        </div>
      ))}
    </div>
  );
}
```

### Search Jobs

```tsx
import { jobService } from '@/lib/api';

function JobSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query: string) => {
    try {
      const response = await jobService.searchJobs(query, {
        location: 'remote',
        type: 'job'
      });
      
      if (response.success && response.data) {
        setSearchResults(response.data.data);
      }
    } catch (error) {
      console.error('Search error:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
        placeholder="Search jobs..."
      />
      <button onClick={() => handleSearch(searchQuery)}>Search</button>
      
      {searchResults.map(job => (
        <div key={job.id}>
          <h3>{job.title}</h3>
          <p>{job.company}</p>
        </div>
      ))}
    </div>
  );
}
```

### Get Job Details

```tsx
import { jobService } from '@/lib/api';
import { useParams } from 'next/navigation';

function JobDetails() {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      if (!jobId) return;
      
      try {
        const response = await jobService.getJobById(jobId as string);
        if (response.success && response.data) {
          setJob(response.data);
        }
      } catch (error) {
        console.error('Error fetching job:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [jobId]);

  if (loading) return <div>Loading job details...</div>;
  if (!job) return <div>Job not found</div>;

  return (
    <div>
      <h1>{job.title}</h1>
      <h2>{job.company}</h2>
      <p>{job.description}</p>
      <p>Location: {job.location}</p>
      <p>Salary: {job.salary}</p>
    </div>
  );
}
```

## 📝 Application Services

### Apply for Job

```tsx
import { applicationService } from '@/lib/api';
import { useAuth } from '@/lib/auth/AuthContextBackend';

function JobApplication({ jobId }: { jobId: string }) {
  const { isAuthenticated } = useAuth();
  const [applying, setApplying] = useState(false);
  const [resumeUrl, setResumeUrl] = useState('');
  const [coverLetter, setCoverLetter] = useState('');

  const handleApply = async () => {
    if (!isAuthenticated) {
      alert('Please login to apply for jobs');
      return;
    }

    try {
      setApplying(true);
      const response = await applicationService.applyForJob(jobId, {
        resumeUrl,
        coverLetter
      });
      
      if (response.success) {
        alert('Application submitted successfully!');
        setResumeUrl('');
        setCoverLetter('');
      } else {
        alert(`Application failed: ${response.error?.message}`);
      }
    } catch (error) {
      alert('An error occurred while applying');
    } finally {
      setApplying(false);
    }
  };

  return (
    <div>
      <h3>Apply for this job</h3>
      <input
        type="url"
        placeholder="Resume URL"
        value={resumeUrl}
        onChange={(e) => setResumeUrl(e.target.value)}
      />
      <textarea
        placeholder="Cover Letter"
        value={coverLetter}
        onChange={(e) => setCoverLetter(e.target.value)}
      />
      <button onClick={handleApply} disabled={applying}>
        {applying ? 'Applying...' : 'Apply Now'}
      </button>
    </div>
  );
}
```

### Get My Applications

```tsx
import { applicationService } from '@/lib/api';

function MyApplications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await applicationService.getMyApplications({
          page: 1,
          limit: 10
        });
        
        if (response.success && response.data) {
          setApplications(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching applications:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  if (loading) return <div>Loading applications...</div>;

  return (
    <div>
      <h2>My Applications</h2>
      {applications.map(app => (
        <div key={app.id}>
          <h3>{app.job.title}</h3>
          <p>{app.job.company}</p>
          <p>Status: {app.status}</p>
          <p>Applied: {new Date(app.appliedAt).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
}
```

## 💳 Subscription Services

### Get Subscription Plans

```tsx
import { subscriptionService } from '@/lib/api';

function SubscriptionPlans() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await subscriptionService.getPlans();
        if (response.success && response.data) {
          setPlans(response.data.plans);
        }
      } catch (error) {
        console.error('Error fetching plans:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  if (loading) return <div>Loading plans...</div>;

  return (
    <div>
      <h2>Subscription Plans</h2>
      {plans.map(plan => (
        <div key={plan.id}>
          <h3>{plan.name}</h3>
          <p>Price: {plan.currency} {plan.price}/{plan.duration}</p>
          <ul>
            {plan.features.map(feature => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
```

### Get Current Subscription

```tsx
import { subscriptionService } from '@/lib/api';

function CurrentSubscription() {
  const [subscription, setSubscription] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        const response = await subscriptionService.getCurrentSubscription();
        if (response.success && response.data) {
          setSubscription(response.data.subscription);
        }
      } catch (error) {
        console.error('Error fetching subscription:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubscription();
  }, []);

  if (loading) return <div>Loading subscription...</div>;
  if (!subscription) return <div>No active subscription</div>;

  return (
    <div>
      <h2>Current Subscription</h2>
      <p>Plan: {subscription.plan}</p>
      <p>Status: {subscription.status}</p>
      <p>Start Date: {new Date(subscription.startDate).toLocaleDateString()}</p>
      <p>End Date: {new Date(subscription.endDate).toLocaleDateString()}</p>
    </div>
  );
}
```

## 💰 Payment Services

### Create Payment Order

```tsx
import { paymentService } from '@/lib/api';

function PaymentForm({ planId, amount }: { planId: string; amount: number }) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setLoading(true);
      const response = await paymentService.createOrder({
        plan: planId,
        amount,
        currency: 'INR'
      });
      
      if (response.success && response.data) {
        // Initialize Razorpay
        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          amount: response.data.order.amount * 100, // Convert to paise
          currency: response.data.order.currency,
          name: 'NotifyX',
          description: 'Subscription Payment',
          order_id: response.data.razorpay.orderId,
          handler: async (paymentResponse: any) => {
            // Verify payment
            await verifyPayment(paymentResponse, response.data.order.id);
          }
        };
        
        const razorpay = new (window as any).Razorpay(options);
        razorpay.open();
      }
    } catch (error) {
      console.error('Payment error:', error);
    } finally {
      setLoading(false);
    }
  };

  const verifyPayment = async (paymentResponse: any, orderId: string) => {
    try {
      await paymentService.verifyPayment({
        razorpay_order_id: orderId,
        razorpay_payment_id: paymentResponse.razorpay_payment_id,
        razorpay_signature: paymentResponse.razorpay_signature,
        plan: planId,
        amount
      });
      alert('Payment successful!');
    } catch (error) {
      alert('Payment verification failed');
    }
  };

  return (
    <button onClick={handlePayment} disabled={loading}>
      {loading ? 'Processing...' : `Pay ₹${amount}`}
    </button>
  );
}
```

## 🎯 Matching Services

### Get Job Recommendations

```tsx
import { matchingService } from '@/lib/api';

function JobRecommendations() {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await matchingService.getRecommendations({
          limit: 10
        });
        
        if (response.success && response.data) {
          setRecommendations(response.data.recommendations);
        }
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, []);

  if (loading) return <div>Loading recommendations...</div>;

  return (
    <div>
      <h2>Recommended Jobs</h2>
      {recommendations.map((rec, index) => (
        <div key={index}>
          <h3>{rec.job.title}</h3>
          <p>{rec.job.company}</p>
          <p>Match Score: {rec.matchScore}%</p>
          <p>Reasons: {rec.matchReasons.join(', ')}</p>
        </div>
      ))}
    </div>
  );
}
```

## 👑 Admin Services

### Admin Dashboard

```tsx
import { adminService } from '@/lib/api';
import { useAuth } from '@/lib/auth/AuthContextBackend';

function AdminDashboard() {
  const { canAccessAdmin } = useAuth();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!canAccessAdmin()) return;

    const fetchStats = async () => {
      try {
        const response = await adminService.getDashboardStats();
        if (response.success && response.data) {
          setStats(response.data.stats);
        }
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [canAccessAdmin]);

  if (!canAccessAdmin()) {
    return <div>Access denied. Admin privileges required.</div>;
  }

  if (loading) return <div>Loading dashboard...</div>;
  if (!stats) return <div>No data available</div>;

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Users</h3>
          <p>{stats.totalUsers}</p>
        </div>
        <div className="stat-card">
          <h3>Active Jobs</h3>
          <p>{stats.activeJobs}</p>
        </div>
        <div className="stat-card">
          <h3>Total Applications</h3>
          <p>{stats.totalApplications}</p>
        </div>
        <div className="stat-card">
          <h3>Total Revenue</h3>
          <p>₹{stats.totalRevenue}</p>
        </div>
      </div>
    </div>
  );
}
```

## 🏥 Health Services

### Health Check

```tsx
import { healthService } from '@/lib/api';

function HealthStatus() {
  const [health, setHealth] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await healthService.checkHealth();
        if (response.success && response.data) {
          setHealth(response.data);
        }
      } catch (error) {
        console.error('Health check failed:', error);
      } finally {
        setLoading(false);
      }
    };

    checkHealth();
  }, []);

  if (loading) return <div>Checking system health...</div>;
  if (!health) return <div>Health check failed</div>;

  return (
    <div>
      <h2>System Health</h2>
      <p>Status: {health.success ? 'Healthy' : 'Unhealthy'}</p>
      <p>Message: {health.message}</p>
      <p>Version: {health.version}</p>
      <p>Uptime: {Math.floor(health.uptime / 60)} minutes</p>
    </div>
  );
}
```

## ⚠️ Error Handling

### Comprehensive Error Handling

```tsx
import { ApiError } from '@/lib/api';

function ErrorHandlingExample() {
  const [error, setError] = useState(null);

  const handleApiCall = async () => {
    try {
      const response = await jobService.getJobs();
      // Handle success
    } catch (error) {
      if (error instanceof ApiError) {
        // Handle API-specific errors
        switch (error.status) {
          case 401:
            setError('Please login to continue');
            break;
          case 403:
            setError('You do not have permission to access this resource');
            break;
          case 404:
            setError('Resource not found');
            break;
          case 500:
            setError('Server error. Please try again later');
            break;
          default:
            setError(error.message);
        }
      } else {
        // Handle other errors
        setError('An unexpected error occurred');
      }
    }
  };

  return (
    <div>
      {error && <div className="error">{error}</div>}
      <button onClick={handleApiCall}>Make API Call</button>
    </div>
  );
}
```

## 🔄 Loading States

### Loading State Management

```tsx
import { useState } from 'react';

function LoadingStateExample() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await jobService.getJobs();
      if (response.success) {
        setData(response.data);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <button onClick={fetchData}>Fetch Data</button>
          {data && <div>Data loaded successfully</div>}
        </div>
      )}
    </div>
  );
}
```

## 🎯 Best Practices

1. **Always handle errors** - Use try-catch blocks and check response.success
2. **Show loading states** - Provide user feedback during API calls
3. **Validate data** - Use the validation utilities to ensure data integrity
4. **Use TypeScript** - Leverage the type definitions for better development experience
5. **Handle authentication** - Check if user is authenticated before making protected calls
6. **Implement retry logic** - The API client includes automatic retry for failed requests
7. **Cache responses** - Consider implementing caching for frequently accessed data

## 📚 Additional Resources

- [API Configuration Guide](./README.md)
- [Type Definitions](./types.ts)
- [Authentication Service](./auth.ts)
- [Backend Integration Guide](../../BACKEND_INTEGRATION_GUIDE.md)

---

**Happy coding! 🚀**

