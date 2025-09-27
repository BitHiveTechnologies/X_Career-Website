/**
 * TypeScript Interfaces for NotifyX Backend API
 * Matches the backend API response structures exactly
 */

// ============================================================================
// BASE TYPES
// ============================================================================

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    code: string;
    details?: any;
  };
  timestamp: string;
}

export interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  pages: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: PaginationInfo;
}

// Specific response types for different endpoints
export interface JobsResponse {
  jobs: Job[];
  pagination: PaginationInfo;
}

// Alternative structure that some endpoints might use
export interface JobsResponseAlternative {
  data: Job[];
  pagination: PaginationInfo;
}

// Backend API response structure for jobs endpoint
export interface BackendJobsResponse {
  jobs: Job[];
  pagination: PaginationInfo;
}

// ============================================================================
// AUTHENTICATION TYPES
// ============================================================================

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AdminLoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  mobile: string;
  qualification: string;
  stream: string;
  yearOfPassout: number;
  cgpaOrPercentage: number;
}

export interface LoginResponse {
  token: string;
  user?: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
    mobile?: string;
  };
  admin?: {
    id: string;
    email: string;
    name: string;
    role: string;
    permissions?: string[];
  };
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  user: {
    id: string;
    name: string;
    email: string;
    mobile: string;
    qualification: string;
    stream: string;
    yearOfPassout: number;
    cgpaOrPercentage: number;
    role: string;
  };
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  mobile?: string;
  role: 'user' | 'admin' | 'super_admin';
  subscriptionStatus: 'active' | 'inactive' | 'expired' | 'cancelled';
  profile?: UserProfile;
  isProfileComplete: boolean;
  type?: string;
  avatar?: string;
}

// ============================================================================
// USER PROFILE TYPES
// ============================================================================

export interface UserProfile {
  firstName: string;
  lastName: string;
  contactNumber: string;
  dateOfBirth: string; // ISO date
  qualification: string;
  stream: string;
  yearOfPassout: number;
  cgpaOrPercentage: number;
  collegeName: string;
  address?: string;
  city?: string;
  state?: string;
  pincode?: string; // 6-digit Indian pincode
  skills?: string;
  resumeUrl?: string;
  linkedinUrl?: string;
  githubUrl?: string;
}

export interface ProfileCompletionStatus {
  isComplete: boolean;
  completionPercentage: number;
  missingFields: string[];
}

export interface UpdateProfileRequest {
  firstName?: string;
  lastName?: string;
  name?: string;
  mobile?: string;
  qualification?: string;
  stream?: string;
  yearOfPassout?: number;
  cgpaOrPercentage?: number;
  collegeName?: string;
  dateOfBirth?: string;
  address?: string;
  city?: string;
  state?: string;
  pincode?: string;
  skills?: string;
  resumeUrl?: string;
  linkedinUrl?: string;
  githubUrl?: string;
}

// ============================================================================
// SUBSCRIPTION TYPES
// ============================================================================

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  duration: 'monthly' | 'yearly';
  features: string[];
}

export interface Subscription {
  id: string;
  plan: string;
  status: 'active' | 'inactive' | 'expired' | 'cancelled' | 'completed';
  startDate: string; // ISO date
  endDate: string; // ISO date
  amount: number;
  currency: string;
}

export interface SubscriptionHistory {
  id: string;
  plan: string;
  status: string;
  amount: number;
  currency: string;
  createdAt: string; // ISO date
}

// ============================================================================
// PAYMENT TYPES
// ============================================================================

export interface CreateOrderRequest {
  plan: string;
  amount: number;
  currency: string;
}

export interface CreateOrderResponse {
  order: {
    id: string;
    amount: number;
    currency: string;
    receipt: string;
    status: string;
  };
  razorpay: {
    orderId: string;
    keyId: string;
  };
}

export interface VerifyPaymentRequest {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
  plan: string;
  amount: number;
}

export interface PaymentHistory {
  id: string;
  amount: number;
  currency: string;
  status: 'completed' | 'failed' | 'pending';
  plan: string;
  createdAt: string; // ISO date
}

// ============================================================================
// JOB TYPES
// ============================================================================

export interface JobEligibility {
  qualifications: string[];
  streams: string[];
  passoutYears: number[];
  minCGPA?: number;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  description: string;
  type: 'job' | 'internship';
  eligibility: JobEligibility;
  applicationDeadline: string; // ISO date
  applicationLink: string;
  location: 'remote' | 'onsite' | 'hybrid';
  salary?: string;
  stipend?: string;
  skills?: string[];
  isActive: boolean;
  createdAt: string; // ISO date
}

export interface JobSearchParams {
  page?: number;
  limit?: number;
  type?: 'job' | 'internship';
  location?: 'remote' | 'onsite' | 'hybrid';
  search?: string;
}

export interface JobStats {
  totalJobs: number;
  activeJobs: number;
  totalApplications: number;
  pendingApplications: number;
}

// ============================================================================
// APPLICATION TYPES
// ============================================================================

export interface JobApplication {
  id: string;
  jobId: string;
  userId: string;
  status: 'applied' | 'shortlisted' | 'rejected' | 'withdrawn';
  resumeUrl: string;
  coverLetter?: string;
  appliedAt: string; // ISO date
  job?: Job; // Populated in responses
}

export interface ApplyJobRequest {
  resumeUrl: string;
  coverLetter?: string;
}

export interface ApplicationWithJob {
  id: string;
  job: {
    id: string;
    title: string;
    company: string;
  };
  status: string;
  appliedAt: string; // ISO date
}

export interface ApplicationStats {
  totalApplications: number;
  pendingApplications: number;
  shortlistedApplications: number;
  rejectedApplications: number;
}

// ============================================================================
// JOB MATCHING TYPES
// ============================================================================

export interface JobRecommendation {
  job: {
    id: string;
    title: string;
    company: string;
    location: string;
    salary?: string;
  };
  matchScore: number;
  matchReasons: string[];
}

export interface MatchingAnalytics {
  totalRecommendations: number;
  averageMatchScore: number;
  topMatchCategories: string[];
  preferredLocations: string[];
  skillMatches: string[];
}

export interface UserProfileForMatching {
  qualification: string;
  stream: string;
  yearOfPassout: number;
  skills: string[];
}

export interface MatchingRecommendationsResponse {
  recommendations: JobRecommendation[];
  totalRecommendations: number;
  userProfile: UserProfileForMatching;
}

// ============================================================================
// NOTIFICATION TYPES
// ============================================================================

export interface EmailQueueStatus {
  waiting: number;
  active: number;
  completed: number;
  failed: number;
  delayed: number;
}

export interface SendWelcomeEmailRequest {
  email: string;
  name: string;
}

export interface SendJobAlertRequest {
  userId: string;
  jobId: string;
}

// ============================================================================
// ADMIN TYPES
// ============================================================================

export interface AdminDashboardStats {
  totalUsers: number;
  activeUsers: number;
  totalJobs: number;
  activeJobs: number;
  totalApplications: number;
  pendingApplications: number;
  totalRevenue: number;
  monthlyRevenue: number;
}

export interface UserAnalytics {
  totalUsers: number;
  activeUsers: number;
  newUsersThisMonth: number;
  userGrowthRate: number;
  subscriptionBreakdown: {
    free: number;
    starter: number;
    premium: number;
  };
}

export interface JobAnalytics {
  totalJobs: number;
  activeJobs: number;
  jobsThisMonth: number;
  applicationStats: {
    total: number;
    pending: number;
    shortlisted: number;
    rejected: number;
  };
  topCompanies: Array<{
    company: string;
    jobCount: number;
  }>;
}

export interface SystemHealth {
  status: 'healthy' | 'degraded' | 'unhealthy';
  uptime: number;
  version: string;
  database: 'connected' | 'disconnected';
  email: 'working' | 'failed';
  payment: 'working' | 'failed';
}

// ============================================================================
// HEALTH CHECK TYPES
// ============================================================================

export interface BackendHealth {
  success: boolean;
  message: string;
  version: string;
  timestamp: string;
  uptime: number;
}

// ============================================================================
// ERROR TYPES
// ============================================================================

export interface ValidationErrorDetail {
  field: string;
  message: string;
}

export interface ApiErrorResponse {
  success: false;
  error: {
    message: string;
    code: string;
    details?: ValidationErrorDetail[] | string;
  };
  timestamp: string;
}

// ============================================================================
// REQUEST/RESPONSE TYPE HELPERS
// ============================================================================

export type ApiRequest<T> = T;
export type ApiResponseData<T> = T;

// Common response patterns
export type PaginatedApiResponse<T> = ApiResponse<PaginatedResponse<T>>;
export type SingleApiResponse<T> = ApiResponse<T>;
export type ListApiResponse<T> = ApiResponse<T[]>;

// ============================================================================
// FRONTEND-SPECIFIC TYPES
// ============================================================================

export interface FrontendJob extends Job {
  // Additional frontend-specific properties
  isFeatured?: boolean;
  isUrgent?: boolean;
  applicantCount?: number;
  companyLogo?: string;
  companySize?: string;
  industry?: string;
  benefits?: string[];
  companyType?: 'Startup' | 'MNC' | 'Product' | 'Service';
  experienceRequired?: string;
  jobType?: string;
  employmentType?: string;
  skills?: string[];
  postedDate?: string;
  isRemote?: boolean;
}

export interface FrontendUser extends User {
  // Additional frontend-specific properties
  avatar?: string;
  createdAt?: string;
  subscription?: {
    plan: 'free' | 'starter' | 'premium';
    status: 'active' | 'inactive' | 'expired';
    startDate: string;
    endDate?: string;
  };
}

// ============================================================================
// FORM TYPES
// ============================================================================

export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  mobile: string;
  qualification: string;
  stream: string;
  yearOfPassout: number;
  cgpaOrPercentage: number;
}

export interface ProfileFormData {
  firstName: string;
  lastName: string;
  mobile: string;
  qualification: string;
  stream: string;
  yearOfPassout: number;
  cgpaOrPercentage: number;
  collegeName: string;
  dateOfBirth: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  skills: string;
  resumeUrl: string;
  linkedinUrl: string;
  githubUrl: string;
}

export interface JobSearchFormData {
  search: string;
  location: string;
  type: 'job' | 'internship' | 'all';
  experienceLevel: string;
  salaryRange: string;
  companyType: string;
}

// ============================================================================
// EXPORT ALL TYPES
// ============================================================================

// All types are already exported as interfaces above
