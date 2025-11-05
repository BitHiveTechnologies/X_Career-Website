/**
 * API Configuration for NotifyX Backend Integration
 * Handles environment-based configuration and base URL management
 */

import { ENV } from './env';

export interface ApiConfig {
  baseUrl: string;
  timeout: number;
  retryAttempts: number;
  retryDelay: number;
  enableLogging: boolean;
}

// Get current configuration based on environment
export const getApiConfig = (): ApiConfig => {
  const baseConfig: ApiConfig = {
    baseUrl: ENV.API_BASE_URL,
    timeout: 10000, // 10 seconds
    retryAttempts: 3,
    retryDelay: 1000, // 1 second
    enableLogging: ENV.IS_DEVELOPMENT || ENV.ENABLE_API_LOGGING, // Enable logging in development or when explicitly enabled
  };

  // Adjust configuration based on environment
  if (ENV.IS_PRODUCTION) {
    return {
      ...baseConfig,
      timeout: 15000, // 15 seconds
      retryAttempts: 2,
      retryDelay: 2000, // 2 seconds
    };
  }

  if (ENV.IS_TEST) {
    return {
      ...baseConfig,
      timeout: 5000, // 5 seconds
      retryAttempts: 1,
      retryDelay: 500, // 0.5 seconds
    };
  }

  return baseConfig;
};

// API endpoints configuration
export const API_ENDPOINTS = {
  // Authentication
  AUTH: {
    LOGIN: '/api/v1/jwt-auth/login',
    REGISTER: '/api/v1/auth/register',
    ADMIN_LOGIN: '/api/v1/admin/login',
    ME: '/api/v1/jwt-auth/me',
    VERIFY: '/api/v1/jwt-auth/me', // Use ME endpoint for verification
  },
  
  // User Management
  USERS: {
    ME: '/api/v1/users/me',
    ME_COMPLETION: '/api/v1/users/me/completion',
    PROFILE: (userId: string) => `/api/v1/users/profile/${userId}`,
    ALL: '/api/v1/users/',
    STATS: '/api/v1/users/stats',
    DELETE: (userId: string) => `/api/v1/users/${userId}`,
  },
  
  // Payment
  PAYMENTS: {
    CREATE_ORDER: '/api/v1/payments/create-order',
    VERIFY: '/api/v1/payments/verify',
    HISTORY: '/api/v1/payments/history',
    WEBHOOK: '/api/v1/payments/webhook',
  },
  
  // Subscription
  SUBSCRIPTIONS: {
    CURRENT: '/api/v1/subscriptions/current',
    PLANS: '/api/v1/subscriptions/plans',
    HISTORY: '/api/v1/subscriptions/history',
    DELETE: (id: string) => `/api/v1/subscriptions/${id}`,
    RENEW: '/api/v1/subscriptions/renew',
    ANALYTICS: '/api/v1/subscriptions/analytics',
    PROCESS_EXPIRY: '/api/v1/subscriptions/process-expiry',
  },
  
  // Jobs
  JOBS: {
    ALL: '/api/v1/jobs/',
    SEARCH: '/api/v1/jobs/search',
    BY_ID: (jobId: string) => `/api/v1/jobs/${jobId}`,
    CREATE: '/api/v1/jobs/',
    UPDATE: (jobId: string) => `/api/v1/jobs/${jobId}`,
    DELETE: (jobId: string) => `/api/v1/jobs/${jobId}`,
    TOGGLE_STATUS: (jobId: string) => `/api/v1/jobs/${jobId}/toggle-status`,
    STATS: '/api/v1/jobs/stats/overview',
  },
  
  // Applications
  APPLICATIONS: {
    APPLY: (jobId: string) => `/api/v1/applications/${jobId}/apply`,
    MY_APPLICATIONS: '/api/v1/applications/my-applications',
    WITHDRAW: (applicationId: string) => `/api/v1/applications/${applicationId}/withdraw`,
    JOB_APPLICATIONS: (jobId: string) => `/api/v1/applications/job/${jobId}/applications`,
    UPDATE_STATUS: (applicationId: string) => `/api/v1/applications/${applicationId}/status`,
    STATS: '/api/v1/applications/stats/overview',
  },
  
  // Job Matching
  MATCHING: {
    JOBS: '/api/v1/matching/jobs',
    JOB_USERS: (jobId: string) => `/api/v1/matching/jobs/${jobId}/users`,
    RECOMMENDATIONS: '/api/v1/matching/recommendations',
    FILTERED_RECOMMENDATIONS: '/api/v1/matching/recommendations',
    ANALYTICS: '/api/v1/matching/analytics',
    STATS: '/api/v1/matching/stats',
    ADVANCED: '/api/v1/matching/advanced',
  },
  
  // Notifications
  NOTIFICATIONS: {
    TEST_CONNECTION: '/api/v1/notifications/test-connection',
    WELCOME: '/api/v1/notifications/welcome',
    JOB_ALERT: '/api/v1/notifications/job-alert',
    QUEUE_STATUS: '/api/v1/notifications/queue-status',
  },
  
  // Job Alerts (Enhanced Email Notification System)
  JOB_ALERTS: {
    STATISTICS: '/api/v1/jobs/alerts/statistics',
    SEND_FOR_JOB: (jobId: string) => `/api/v1/jobs/alerts/send/${jobId}`,
    SEND_ALL: '/api/v1/jobs/alerts/send-all',
    RETRY_FAILED: '/api/v1/jobs/alerts/retry-failed',
    SCHEDULER_STATUS: '/api/v1/jobs/alerts/scheduler/status',
    SCHEDULER_TRIGGER: '/api/v1/jobs/alerts/scheduler/trigger',
  },
  
  // Admin
  ADMIN: {
    DASHBOARD: '/api/v1/admin/dashboard',
    USERS: '/api/v1/admin/users',
    USER_ANALYTICS: '/api/v1/admin/analytics/users',
    JOB_ANALYTICS: '/api/v1/admin/analytics/jobs',
    HEALTH: '/api/v1/admin/health',
  },
  
  // Health Check
  HEALTH: {
    CHECK: '/health',
    API_DOCS: '/api/v1/',
  },
} as const;

// HTTP Methods
export const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
} as const;

// Default headers
export const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
} as const;

// Export current config for easy access
export const apiConfig = getApiConfig();
