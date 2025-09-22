/**
 * API Service Layer for NotifyX Backend Integration
 * Provides high-level service functions for all backend endpoints
 */

import { API_ENDPOINTS, apiClient } from './client';
import {
    // Admin types
    AdminDashboardStats,
    // Common types
    ApiResponse,
    ApplicationStats,
    ApplicationWithJob,
    ApplyJobRequest,
    // Health types
    BackendHealth,
    // Payment types
    CreateOrderRequest,
    CreateOrderResponse,
    // Notification types
    EmailQueueStatus,
    FrontendJob,
    // Job types
    Job,
    JobAnalytics,
    // Application types
    JobApplication,
    JobSearchParams,
    JobStats,
    MatchingAnalytics,
    MatchingRecommendationsResponse,
    PaginatedResponse,
    PaymentHistory,
    SendJobAlertRequest,
    SendWelcomeEmailRequest,
    // Subscription types
    Subscription,
    SubscriptionHistory,
    SubscriptionPlan,
    SystemHealth,
    UserAnalytics,
    VerifyPaymentRequest
} from './types';

// ============================================================================
// JOB SERVICES
// ============================================================================

export class JobService {
  /**
   * Get all jobs with optional filters
   */
  static async getJobs(params?: JobSearchParams): Promise<ApiResponse<JobsResponse>> {
    return apiClient.get(API_ENDPOINTS.JOBS.ALL, params);
  }

  /**
   * Search jobs with query and filters
   */
  static async searchJobs(query: string, params?: Omit<JobSearchParams, 'search'>): Promise<ApiResponse<JobsResponse>> {
    return apiClient.get(API_ENDPOINTS.JOBS.SEARCH, { ...params, search: query });
  }

  /**
   * Get job by ID
   */
  static async getJobById(jobId: string): Promise<ApiResponse<Job>> {
    return apiClient.get(API_ENDPOINTS.JOBS.BY_ID(jobId));
  }

  /**
   * Get job statistics (admin only)
   */
  static async getJobStats(): Promise<ApiResponse<JobStats>> {
    return apiClient.get(API_ENDPOINTS.JOBS.STATS);
  }

  /**
   * Create new job (admin only)
   */
  static async createJob(jobData: Partial<Job>): Promise<ApiResponse<Job>> {
    return apiClient.post(API_ENDPOINTS.JOBS.CREATE, jobData);
  }

  /**
   * Update job (admin only)
   */
  static async updateJob(jobId: string, jobData: Partial<Job>): Promise<ApiResponse<Job>> {
    return apiClient.put(API_ENDPOINTS.JOBS.UPDATE(jobId), jobData);
  }

  /**
   * Delete job (admin only)
   */
  static async deleteJob(jobId: string): Promise<ApiResponse<void>> {
    return apiClient.delete(API_ENDPOINTS.JOBS.DELETE(jobId));
  }

  /**
   * Toggle job status (admin only)
   */
  static async toggleJobStatus(jobId: string): Promise<ApiResponse<Job>> {
    return apiClient.patch(API_ENDPOINTS.JOBS.TOGGLE_STATUS(jobId));
  }

  /**
   * Transform backend job to frontend job format
   */
  static transformToFrontendJob(job: Job): FrontendJob {
    return {
      ...job,
      isFeatured: false, // Default value
      isUrgent: false, // Default value
      applicantCount: 0, // Default value
      companyLogo: undefined, // Default value
      companySize: undefined, // Default value
      industry: undefined, // Default value
      benefits: [], // Default value
      companyType: 'Product', // Default value
      experienceRequired: '0-2 years', // Default value
      jobType: job.type === 'job' ? 'Full-time' : 'Internship',
      employmentType: 'Permanent', // Default value
      skills: job.eligibility?.streams || [],
      postedDate: job.createdAt,
      isRemote: job.location === 'remote',
    };
  }
}

// ============================================================================
// APPLICATION SERVICES
// ============================================================================

export class ApplicationService {
  /**
   * Apply for a job
   */
  static async applyForJob(jobId: string, applicationData: ApplyJobRequest): Promise<ApiResponse<JobApplication>> {
    return apiClient.post(API_ENDPOINTS.APPLICATIONS.APPLY(jobId), applicationData);
  }

  /**
   * Get user's applications
   */
  static async getMyApplications(params?: {
    page?: number;
    limit?: number;
    status?: string;
  }): Promise<ApiResponse<PaginatedResponse<ApplicationWithJob>>> {
    return apiClient.get(API_ENDPOINTS.APPLICATIONS.MY_APPLICATIONS, params);
  }

  /**
   * Withdraw application
   */
  static async withdrawApplication(applicationId: string): Promise<ApiResponse<void>> {
    return apiClient.patch(API_ENDPOINTS.APPLICATIONS.WITHDRAW(applicationId));
  }

  /**
   * Get job applications (admin only)
   */
  static async getJobApplications(jobId: string, params?: {
    page?: number;
    limit?: number;
    status?: string;
  }): Promise<ApiResponse<PaginatedResponse<JobApplication>>> {
    return apiClient.get(API_ENDPOINTS.APPLICATIONS.JOB_APPLICATIONS(jobId), params);
  }

  /**
   * Update application status (admin only)
   */
  static async updateApplicationStatus(
    applicationId: string, 
    status: 'applied' | 'shortlisted' | 'rejected' | 'withdrawn'
  ): Promise<ApiResponse<JobApplication>> {
    return apiClient.patch(API_ENDPOINTS.APPLICATIONS.UPDATE_STATUS(applicationId), { status });
  }

  /**
   * Get application statistics (admin only)
   */
  static async getApplicationStats(): Promise<ApiResponse<ApplicationStats>> {
    return apiClient.get(API_ENDPOINTS.APPLICATIONS.STATS);
  }
}

// ============================================================================
// SUBSCRIPTION SERVICES
// ============================================================================

export class SubscriptionService {
  /**
   * Get available subscription plans
   */
  static async getPlans(): Promise<ApiResponse<{ plans: SubscriptionPlan[] }>> {
    return apiClient.get(API_ENDPOINTS.SUBSCRIPTIONS.PLANS);
  }

  /**
   * Get current subscription
   */
  static async getCurrentSubscription(): Promise<ApiResponse<{ subscription: Subscription }>> {
    return apiClient.get(API_ENDPOINTS.SUBSCRIPTIONS.CURRENT);
  }

  /**
   * Get subscription history
   */
  static async getSubscriptionHistory(params?: {
    page?: number;
    limit?: number;
  }): Promise<ApiResponse<PaginatedResponse<SubscriptionHistory>>> {
    return apiClient.get(API_ENDPOINTS.SUBSCRIPTIONS.HISTORY, params);
  }

  /**
   * Cancel subscription
   */
  static async cancelSubscription(subscriptionId: string): Promise<ApiResponse<void>> {
    return apiClient.delete(API_ENDPOINTS.SUBSCRIPTIONS.DELETE(subscriptionId));
  }

  /**
   * Renew subscription
   */
  static async renewSubscription(): Promise<ApiResponse<Subscription>> {
    return apiClient.post(API_ENDPOINTS.SUBSCRIPTIONS.RENEW);
  }

  /**
   * Get subscription analytics (admin only)
   */
  static async getSubscriptionAnalytics(): Promise<ApiResponse<any>> {
    return apiClient.get(API_ENDPOINTS.SUBSCRIPTIONS.ANALYTICS);
  }
}

// ============================================================================
// PAYMENT SERVICES
// ============================================================================

export class PaymentService {
  /**
   * Create payment order
   */
  static async createOrder(orderData: CreateOrderRequest): Promise<ApiResponse<CreateOrderResponse>> {
    return apiClient.post(API_ENDPOINTS.PAYMENTS.CREATE_ORDER, orderData);
  }

  /**
   * Verify payment
   */
  static async verifyPayment(verificationData: VerifyPaymentRequest): Promise<ApiResponse<any>> {
    return apiClient.post(API_ENDPOINTS.PAYMENTS.VERIFY, verificationData);
  }

  /**
   * Get payment history
   */
  static async getPaymentHistory(params?: {
    page?: number;
    limit?: number;
  }): Promise<ApiResponse<PaginatedResponse<PaymentHistory>>> {
    return apiClient.get(API_ENDPOINTS.PAYMENTS.HISTORY, params);
  }
}

// ============================================================================
// MATCHING SERVICES
// ============================================================================

export class MatchingService {
  /**
   * Get job recommendations
   */
  static async getRecommendations(params?: {
    limit?: number;
  }): Promise<ApiResponse<MatchingRecommendationsResponse>> {
    return apiClient.get(API_ENDPOINTS.MATCHING.RECOMMENDATIONS, params);
  }

  /**
   * Get filtered recommendations
   */
  static async getFilteredRecommendations(filters: {
    location?: string;
    type?: string;
    skills?: string[];
    limit?: number;
  }): Promise<ApiResponse<MatchingRecommendationsResponse>> {
    return apiClient.post(API_ENDPOINTS.MATCHING.FILTERED_RECOMMENDATIONS, filters);
  }

  /**
   * Get matching analytics
   */
  static async getMatchingAnalytics(): Promise<ApiResponse<MatchingAnalytics>> {
    return apiClient.get(API_ENDPOINTS.MATCHING.ANALYTICS);
  }

  /**
   * Get matching statistics (admin only)
   */
  static async getMatchingStats(): Promise<ApiResponse<any>> {
    return apiClient.get(API_ENDPOINTS.MATCHING.STATS);
  }

  /**
   * Get matching jobs for user
   */
  static async getMatchingJobs(params?: {
    page?: number;
    limit?: number;
  }): Promise<ApiResponse<PaginatedResponse<Job>>> {
    return apiClient.get(API_ENDPOINTS.MATCHING.JOBS, params);
  }

  /**
   * Get matching users for job (admin only)
   */
  static async getMatchingUsersForJob(jobId: string, params?: {
    page?: number;
    limit?: number;
  }): Promise<ApiResponse<PaginatedResponse<any>>> {
    return apiClient.get(API_ENDPOINTS.MATCHING.JOB_USERS(jobId), params);
  }

  /**
   * Advanced job matching (admin only)
   */
  static async advancedMatching(criteria: any): Promise<ApiResponse<any>> {
    return apiClient.post(API_ENDPOINTS.MATCHING.ADVANCED, criteria);
  }
}

// ============================================================================
// ADMIN SERVICES
// ============================================================================

export class AdminService {
  /**
   * Get dashboard statistics
   */
  static async getDashboardStats(): Promise<ApiResponse<{ stats: AdminDashboardStats }>> {
    return apiClient.get(API_ENDPOINTS.ADMIN.DASHBOARD);
  }

  /**
   * Get user analytics
   */
  static async getUserAnalytics(): Promise<ApiResponse<UserAnalytics>> {
    return apiClient.get(API_ENDPOINTS.ADMIN.USER_ANALYTICS);
  }

  /**
   * Get job analytics
   */
  static async getJobAnalytics(): Promise<ApiResponse<JobAnalytics>> {
    return apiClient.get(API_ENDPOINTS.ADMIN.JOB_ANALYTICS);
  }

  /**
   * Get system health
   */
  static async getSystemHealth(): Promise<ApiResponse<SystemHealth>> {
    return apiClient.get(API_ENDPOINTS.ADMIN.HEALTH);
  }
}

// ============================================================================
// NOTIFICATION SERVICES
// ============================================================================

export class NotificationService {
  /**
   * Test email connection (admin only)
   */
  static async testEmailConnection(): Promise<ApiResponse<any>> {
    return apiClient.get(API_ENDPOINTS.NOTIFICATIONS.TEST_CONNECTION);
  }

  /**
   * Send welcome email (admin only)
   */
  static async sendWelcomeEmail(emailData: SendWelcomeEmailRequest): Promise<ApiResponse<any>> {
    return apiClient.post(API_ENDPOINTS.NOTIFICATIONS.WELCOME, emailData);
  }

  /**
   * Send job alert email (admin only)
   */
  static async sendJobAlertEmail(alertData: SendJobAlertRequest): Promise<ApiResponse<any>> {
    return apiClient.post(API_ENDPOINTS.NOTIFICATIONS.JOB_ALERT, alertData);
  }

  /**
   * Get email queue status (admin only)
   */
  static async getEmailQueueStatus(): Promise<ApiResponse<{ queueStatus: EmailQueueStatus }>> {
    return apiClient.get(API_ENDPOINTS.NOTIFICATIONS.QUEUE_STATUS);
  }
}

// ============================================================================
// HEALTH SERVICES
// ============================================================================

export class HealthService {
  /**
   * Check API health
   */
  static async checkHealth(): Promise<ApiResponse<BackendHealth>> {
    return apiClient.get(API_ENDPOINTS.HEALTH.CHECK);
  }

  /**
   * Get API documentation
   */
  static async getApiDocs(): Promise<ApiResponse<any>> {
    return apiClient.get(API_ENDPOINTS.HEALTH.API_DOCS);
  }
}

// ============================================================================
// CONVENIENCE FUNCTIONS
// ============================================================================

// Export all services for easy access
export const jobService = JobService;
export const applicationService = ApplicationService;
export const subscriptionService = SubscriptionService;
export const paymentService = PaymentService;
export const matchingService = MatchingService;
export const adminService = AdminService;
export const notificationService = NotificationService;
export const healthService = HealthService;

// Export individual service methods for convenience
export const {
  getJobs,
  searchJobs,
  getJobById,
  getJobStats,
  createJob,
  updateJob,
  deleteJob,
  toggleJobStatus,
  transformToFrontendJob,
} = JobService;

export const {
  applyForJob,
  getMyApplications,
  withdrawApplication,
  getJobApplications,
  updateApplicationStatus,
  getApplicationStats,
} = ApplicationService;

export const {
  getPlans,
  getCurrentSubscription,
  getSubscriptionHistory,
  cancelSubscription,
  renewSubscription,
  getSubscriptionAnalytics,
} = SubscriptionService;

export const {
  createOrder,
  verifyPayment,
  getPaymentHistory,
} = PaymentService;

export const {
  getRecommendations,
  getFilteredRecommendations,
  getMatchingAnalytics,
  getMatchingStats,
  getMatchingJobs,
  getMatchingUsersForJob,
  advancedMatching,
} = MatchingService;

export const {
  getDashboardStats,
  getUserAnalytics,
  getJobAnalytics,
  getSystemHealth,
} = AdminService;

export const {
  testEmailConnection,
  sendWelcomeEmail,
  sendJobAlertEmail,
  getEmailQueueStatus,
} = NotificationService;

export const {
  checkHealth,
  getApiDocs,
} = HealthService;

