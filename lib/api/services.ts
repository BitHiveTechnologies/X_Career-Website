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
    JobsResponse,
    JobStats,
    // Auth types
    LoginRequest,
    LoginResponse,
    MatchingAnalytics,
    MatchingRecommendationsResponse,
    PaginatedResponse,
    PaymentHistory,
    RegisterRequest,
    RegisterResponse,
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
// AUTH SERVICES
// ============================================================================

export class AuthService {
  /**
   * Register a new user
   */
  static async register(registerData: RegisterRequest): Promise<ApiResponse<RegisterResponse>> {
    return apiClient.post(API_ENDPOINTS.AUTH.REGISTER, registerData);
  }

  /**
   * Login user
   */
  static async login(loginData: LoginRequest): Promise<ApiResponse<LoginResponse>> {
    return apiClient.post(API_ENDPOINTS.AUTH.LOGIN, loginData);
  }

  /**
   * Admin login
   */
  static async adminLogin(loginData: LoginRequest): Promise<ApiResponse<LoginResponse>> {
    return apiClient.post(API_ENDPOINTS.AUTH.ADMIN_LOGIN, loginData);
  }

  /**
   * Get current user info
   */
  static async getMe(): Promise<ApiResponse<any>> {
    return apiClient.get(API_ENDPOINTS.AUTH.ME);
  }

  /**
   * Verify token
   */
  static async verifyToken(): Promise<ApiResponse<any>> {
    return apiClient.get(API_ENDPOINTS.AUTH.VERIFY);
  }
}

// ============================================================================
// JOB SERVICES
// ============================================================================

export class JobService {
  /**
   * Get all jobs with optional filters
   */
  static async getJobs(params?: JobSearchParams): Promise<ApiResponse<JobsResponse>> {
    console.log('🔍 JobService.getJobs called with params:', params);
    console.log('🔍 API_ENDPOINTS.JOBS.ALL:', API_ENDPOINTS.JOBS.ALL);
    
    try {
      const result = await apiClient.get(API_ENDPOINTS.JOBS.ALL, params);
      console.log('✅ JobService.getJobs result:', result);
      return result;
    } catch (error) {
      console.error('❌ JobService.getJobs error:', error);
      throw error;
    }
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
    // Determine company type based on company name patterns
    const getCompanyType = (companyName: string): 'Startup' | 'MNC' | 'Product' | 'Service' => {
      const name = companyName.toLowerCase();
      
      // MNC companies
      if (['microsoft', 'google', 'amazon', 'apple', 'meta', 'netflix', 'uber', 'airbnb', 'flipkart', 'hotstar', 'freshworks'].some(mnc => name.includes(mnc))) {
        return 'MNC';
      }
      
      // Startup companies
      if (['swiggy', 'zomato', 'ola', 'paytm', 'phonepe', 'dream11', 'coindcx', 'byjus', 'razorpay', 'startup', 'tech', 'innov', 'labs', 'ventures'].some(startup => name.includes(startup))) {
        return 'Startup';
      }
      
      // Product companies
      if (['product', 'platform', 'app', 'software', 'phonepe', 'razorpay', 'freshworks'].some(product => name.includes(product))) {
        return 'Product';
      }
      
      // Service companies
      if (['consulting', 'services', 'solutions', 'advisory', 'urban company', 'nykaa'].some(service => name.includes(service))) {
        return 'Service';
      }
      
      return 'Product'; // Default
    };

    // Determine experience level based on job title and description patterns
    const getExperienceLevel = (title: string, description: string = ''): string => {
      const combinedText = `${title} ${description || ''}`.toLowerCase();
      
      // Senior level keywords
      if (['senior', 'lead', 'principal', 'architect', 'manager', 'director', 'head', '5+', '7+', '10+'].some(senior => combinedText.includes(senior))) {
        return '5+ years';
      }
      
      // Mid level keywords
      if (['mid', 'intermediate', 'experienced', '3-5', '4-5', '3-7'].some(mid => combinedText.includes(mid))) {
        return '3-5 years';
      }
      
      // Junior level keywords
      if (['junior', 'entry', 'associate', '1-3', '2-3', '1-2', '2-4'].some(junior => combinedText.includes(junior))) {
        return '1-3 years';
      }
      
      // Fresher/Intern keywords
      if (['intern', 'internship', 'fresher', 'trainee', 'entry level', '0-1', '0-2'].some(intern => combinedText.includes(intern))) {
        return '0-1 years';
      }
      
      return '1-3 years'; // Default
    };

    // Determine job type based on backend type
    const getJobType = (type: string): string => {
      switch (type) {
        case 'job':
          return 'Full-time';
        case 'internship':
          return 'Internship';
        default:
          return 'Full-time';
      }
    };

    // Determine employment type based on job type and title
    const getEmploymentType = (type: string, title: string): string => {
      const titleLower = title.toLowerCase();
      
      if (type === 'internship') {
        return 'Temporary';
      }
      
      if (['contract', 'freelance', 'consultant'].some(contract => titleLower.includes(contract))) {
        return 'Contract';
      }
      
      return 'Permanent';
    };

    // Extract skills from eligibility streams and add common skills based on title
    const getSkills = (job: Job): string[] => {
      const baseSkills = job.eligibility?.streams || [];
      const titleLower = job.title.toLowerCase();
      const descriptionLower = (job.description || '').toLowerCase();
      
      // Add skills based on common patterns in title/description
      const skillPatterns = {
        'React': ['react', 'jsx', 'hooks'],
        'JavaScript': ['javascript', 'js', 'es6', 'typescript'],
        'Python': ['python', 'django', 'flask', 'pandas'],
        'Java': ['java', 'spring', 'hibernate'],
        'Node.js': ['node', 'express', 'npm'],
        'AWS': ['aws', 'amazon web services', 'cloud'],
        'Docker': ['docker', 'containerization'],
        'Kubernetes': ['kubernetes', 'k8s'],
        'SQL': ['sql', 'mysql', 'postgresql', 'database'],
        'Git': ['git', 'version control', 'github'],
        'Machine Learning': ['machine learning', 'ml', 'ai', 'tensorflow', 'pytorch'],
        'Data Science': ['data science', 'analytics', 'pandas', 'numpy'],
        'UI/UX': ['ui', 'ux', 'design', 'figma', 'adobe'],
        'DevOps': ['devops', 'ci/cd', 'jenkins', 'terraform']
      };
      
      const detectedSkills: string[] = [];
      Object.entries(skillPatterns).forEach(([skill, patterns]) => {
        if (patterns.some(pattern => 
          titleLower.includes(pattern) || descriptionLower.includes(pattern)
        )) {
          detectedSkills.push(skill);
        }
      });
      
      return [...new Set([...baseSkills, ...detectedSkills])]; // Remove duplicates
    };

    return {
      ...job,
      isFeatured: Math.random() > 0.8, // Randomly feature some jobs
      isUrgent: Math.random() > 0.9, // Randomly mark some jobs as urgent
      applicantCount: Math.floor(Math.random() * 500), // Random applicant count
      companyLogo: undefined, // Default value
      companySize: ['1-10', '11-50', '51-200', '201-1000', '1000+'][Math.floor(Math.random() * 5)],
      industry: ['Technology', 'Fintech', 'E-commerce', 'Healthcare', 'Education'][Math.floor(Math.random() * 5)],
      benefits: ['Health Insurance', 'Work from Home', 'Learning Budget', 'Stock Options'].slice(0, Math.floor(Math.random() * 4) + 1),
      companyType: getCompanyType(job.company),
      experienceRequired: getExperienceLevel(job.title, job.description || ''),
      jobType: getJobType(job.type),
      employmentType: getEmploymentType(job.type, job.title),
      skills: getSkills(job),
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

  /**
   * Get all users (admin only)
   */
  static async getUsers(params?: {
    page?: number;
    limit?: number;
    subscriptionPlan?: string;
    subscriptionStatus?: string;
    search?: string;
  }): Promise<ApiResponse<any>> {
    console.log('🔍 AdminService.getUsers called with params:', params);
    return apiClient.get(API_ENDPOINTS.ADMIN.USERS, params);
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
// JOB ALERT SERVICES (Enhanced Email Notification System)
// ============================================================================

export class JobAlertService {
  /**
   * Get job alert statistics (admin only)
   */
  static async getStatistics(jobId?: string): Promise<ApiResponse<any>> {
    const url = jobId 
      ? `${API_ENDPOINTS.JOB_ALERTS.STATISTICS}?jobId=${jobId}`
      : API_ENDPOINTS.JOB_ALERTS.STATISTICS;
    return apiClient.get(url);
  }

  /**
   * Send job alerts for a specific job (admin only)
   */
  static async sendForJob(jobId: string, options: {
    minMatchScore?: number;
    maxUsers?: number;
    dryRun?: boolean;
  } = {}): Promise<ApiResponse<any>> {
    const payload = {
      minMatchScore: options.minMatchScore || 50,
      maxUsers: options.maxUsers || 100,
      dryRun: options.dryRun || false
    };
    return apiClient.post(API_ENDPOINTS.JOB_ALERTS.SEND_FOR_JOB(jobId), payload);
  }

  /**
   * Send job alerts for all active jobs (admin only)
   */
  static async sendForAllJobs(options: {
    minMatchScore?: number;
    maxUsersPerJob?: number;
    dryRun?: boolean;
  } = {}): Promise<ApiResponse<any>> {
    const payload = {
      minMatchScore: options.minMatchScore || 50,
      maxUsersPerJob: options.maxUsersPerJob || 100,
      dryRun: options.dryRun || false
    };
    return apiClient.post(API_ENDPOINTS.JOB_ALERTS.SEND_ALL, payload);
  }

  /**
   * Retry failed notifications (admin only)
   */
  static async retryFailed(jobId?: string): Promise<ApiResponse<any>> {
    const payload = jobId ? { jobId } : {};
    return apiClient.post(API_ENDPOINTS.JOB_ALERTS.RETRY_FAILED, payload);
  }

  /**
   * Get scheduler status (admin only)
   */
  static async getSchedulerStatus(): Promise<ApiResponse<any>> {
    return apiClient.get(API_ENDPOINTS.JOB_ALERTS.SCHEDULER_STATUS);
  }

  /**
   * Trigger scheduler task (admin only)
   */
  static async triggerSchedulerTask(task: 'jobAlerts' | 'retryFailed', dryRun: boolean = false): Promise<ApiResponse<any>> {
    const payload = { task, dryRun };
    return apiClient.post(API_ENDPOINTS.JOB_ALERTS.SCHEDULER_TRIGGER, payload);
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
export const authService = AuthService;
export const jobService = JobService;
export const applicationService = ApplicationService;
export const subscriptionService = SubscriptionService;
export const paymentService = PaymentService;
export const matchingService = MatchingService;
export const adminService = AdminService;
export const notificationService = NotificationService;
export const jobAlertService = JobAlertService;
export const healthService = HealthService;

// Export individual service methods for convenience
export const {
  register,
  login,
  adminLogin,
  getMe,
  verifyToken,
} = AuthService;

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
  getUsers,
} = AdminService;

export const {
  testEmailConnection,
  sendWelcomeEmail,
  sendJobAlertEmail,
  getEmailQueueStatus,
} = NotificationService;

export const {
  getStatistics,
  sendForJob,
  sendForAllJobs,
  retryFailed,
  getSchedulerStatus,
  triggerSchedulerTask,
} = JobAlertService;

export const {
  checkHealth,
  getApiDocs,
} = HealthService;

