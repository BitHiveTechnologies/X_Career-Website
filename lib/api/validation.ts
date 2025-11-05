/**
 * Data Validation Utilities for NotifyX API
 * Provides runtime validation for API data to ensure type safety
 */

import { 
  User, 
  UserProfile, 
  Job, 
  JobApplication, 
  Subscription, 
  PaymentHistory,
  JobRecommendation,
  AdminDashboardStats,
  BackendHealth,
  ApiResponse
} from './types';

// ============================================================================
// VALIDATION HELPERS
// ============================================================================

export class ValidationError extends Error {
  constructor(message: string, public field?: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone);
};

export const isValidPincode = (pincode: string): boolean => {
  const pincodeRegex = /^\d{6}$/;
  return pincodeRegex.test(pincode);
};

export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const isValidDate = (dateString: string): boolean => {
  const date = new Date(dateString);
  return !isNaN(date.getTime()) && date.toISOString() === dateString;
};

// ============================================================================
// USER VALIDATION
// ============================================================================

export const validateUser = (user: any): user is User => {
  if (!user || typeof user !== 'object') {
    throw new ValidationError('User must be an object');
  }

  const requiredFields = ['id', 'email', 'firstName', 'lastName', 'role'];
  for (const field of requiredFields) {
    if (!user[field]) {
      throw new ValidationError(`User missing required field: ${field}`, field);
    }
  }

  if (!isValidEmail(user.email)) {
    throw new ValidationError('Invalid email format', 'email');
  }

  if (user.mobile && !isValidPhoneNumber(user.mobile)) {
    throw new ValidationError('Invalid phone number format', 'mobile');
  }

  const validRoles = ['user', 'admin', 'super_admin'];
  if (!validRoles.includes(user.role)) {
    throw new ValidationError('Invalid user role', 'role');
  }

  return true;
};

export const validateUserProfile = (profile: any): profile is UserProfile => {
  if (!profile || typeof profile !== 'object') {
    throw new ValidationError('Profile must be an object');
  }

  const requiredFields = [
    'firstName', 'lastName', 'contactNumber', 'dateOfBirth',
    'qualification', 'stream', 'yearOfPassout', 'cgpaOrPercentage', 'collegeName'
  ];

  for (const field of requiredFields) {
    if (!profile[field]) {
      throw new ValidationError(`Profile missing required field: ${field}`, field);
    }
  }

  if (!isValidPhoneNumber(profile.contactNumber)) {
    throw new ValidationError('Invalid contact number format', 'contactNumber');
  }

  if (!isValidDate(profile.dateOfBirth)) {
    throw new ValidationError('Invalid date format', 'dateOfBirth');
  }

  if (profile.pincode && !isValidPincode(profile.pincode)) {
    throw new ValidationError('Invalid pincode format', 'pincode');
  }

  if (profile.resumeUrl && !isValidUrl(profile.resumeUrl)) {
    throw new ValidationError('Invalid resume URL format', 'resumeUrl');
  }

  if (profile.linkedinUrl && !isValidUrl(profile.linkedinUrl)) {
    throw new ValidationError('Invalid LinkedIn URL format', 'linkedinUrl');
  }

  if (profile.githubUrl && !isValidUrl(profile.githubUrl)) {
    throw new ValidationError('Invalid GitHub URL format', 'githubUrl');
  }

  return true;
};

// ============================================================================
// JOB VALIDATION
// ============================================================================

export const validateJob = (job: any): job is Job => {
  if (!job || typeof job !== 'object') {
    throw new ValidationError('Job must be an object');
  }

  const requiredFields = [
    'id', 'title', 'company', 'description', 'type', 'eligibility',
    'applicationDeadline', 'applicationLink', 'location', 'isActive'
  ];

  for (const field of requiredFields) {
    if (job[field] === undefined || job[field] === null) {
      throw new ValidationError(`Job missing required field: ${field}`, field);
    }
  }

  const validTypes = ['job', 'internship'];
  if (!validTypes.includes(job.type)) {
    throw new ValidationError('Invalid job type', 'type');
  }

  const validLocations = ['remote', 'onsite', 'hybrid'];
  if (!validLocations.includes(job.location)) {
    throw new ValidationError('Invalid location type', 'location');
  }

  if (!isValidDate(job.applicationDeadline)) {
    throw new ValidationError('Invalid application deadline format', 'applicationDeadline');
  }

  if (!isValidUrl(job.applicationLink)) {
    throw new ValidationError('Invalid application link format', 'applicationLink');
  }

  if (job.eligibility && typeof job.eligibility === 'object') {
    const { qualifications, streams, passoutYears } = job.eligibility;
    
    if (!Array.isArray(qualifications)) {
      throw new ValidationError('Qualifications must be an array', 'eligibility.qualifications');
    }
    
    if (!Array.isArray(streams)) {
      throw new ValidationError('Streams must be an array', 'eligibility.streams');
    }
    
    if (!Array.isArray(passoutYears)) {
      throw new ValidationError('Passout years must be an array', 'eligibility.passoutYears');
    }
  }

  return true;
};

// ============================================================================
// APPLICATION VALIDATION
// ============================================================================

export const validateJobApplication = (application: any): application is JobApplication => {
  if (!application || typeof application !== 'object') {
    throw new ValidationError('Application must be an object');
  }

  const requiredFields = ['id', 'jobId', 'userId', 'status', 'resumeUrl', 'appliedAt'];
  for (const field of requiredFields) {
    if (!application[field]) {
      throw new ValidationError(`Application missing required field: ${field}`, field);
    }
  }

  const validStatuses = ['applied', 'shortlisted', 'rejected', 'withdrawn'];
  if (!validStatuses.includes(application.status)) {
    throw new ValidationError('Invalid application status', 'status');
  }

  if (!isValidUrl(application.resumeUrl)) {
    throw new ValidationError('Invalid resume URL format', 'resumeUrl');
  }

  if (!isValidDate(application.appliedAt)) {
    throw new ValidationError('Invalid applied date format', 'appliedAt');
  }

  return true;
};

// ============================================================================
// SUBSCRIPTION VALIDATION
// ============================================================================

export const validateSubscription = (subscription: any): subscription is Subscription => {
  if (!subscription || typeof subscription !== 'object') {
    throw new ValidationError('Subscription must be an object');
  }

  const requiredFields = ['id', 'plan', 'status', 'startDate', 'endDate', 'amount', 'currency'];
  for (const field of requiredFields) {
    if (!subscription[field]) {
      throw new ValidationError(`Subscription missing required field: ${field}`, field);
    }
  }

  const validStatuses = ['active', 'inactive', 'expired', 'cancelled', 'completed'];
  if (!validStatuses.includes(subscription.status)) {
    throw new ValidationError('Invalid subscription status', 'status');
  }

  if (!isValidDate(subscription.startDate)) {
    throw new ValidationError('Invalid start date format', 'startDate');
  }

  if (!isValidDate(subscription.endDate)) {
    throw new ValidationError('Invalid end date format', 'endDate');
  }

  if (typeof subscription.amount !== 'number' || subscription.amount < 0) {
    throw new ValidationError('Amount must be a positive number', 'amount');
  }

  return true;
};

// ============================================================================
// API RESPONSE VALIDATION
// ============================================================================

export const validateApiResponse = <T>(response: any): response is ApiResponse<T> => {
  if (!response || typeof response !== 'object') {
    throw new ValidationError('Response must be an object');
  }

  if (typeof response.success !== 'boolean') {
    throw new ValidationError('Response must have a boolean success field');
  }

  if (!response.timestamp) {
    throw new ValidationError('Response must have a timestamp field');
  }

  if (!response.success && !response.error) {
    throw new ValidationError('Failed response must have an error field');
  }

  if (response.error && typeof response.error !== 'object') {
    throw new ValidationError('Error field must be an object');
  }

  return true;
};

// ============================================================================
// BULK VALIDATION
// ============================================================================

export const validateArray = <T>(
  items: any[],
  validator: (item: any) => item is T,
  itemName: string = 'item'
): items is T[] => {
  if (!Array.isArray(items)) {
    throw new ValidationError(`${itemName} must be an array`);
  }

  items.forEach((item, index) => {
    try {
      validator(item);
    } catch (error) {
      if (error instanceof ValidationError) {
        throw new ValidationError(`${itemName}[${index}]: ${error.message}`, `${itemName}[${index}].${error.field}`);
      }
      throw error;
    }
  });

  return true;
};

// ============================================================================
// SAFE VALIDATION (NON-THROWING)
// ============================================================================

export const safeValidate = <T>(
  data: any,
  validator: (item: any) => item is T
): { isValid: boolean; data?: T; error?: string } => {
  try {
    const isValid = validator(data);
    return { isValid, data: isValid ? data : undefined };
  } catch (error) {
    return {
      isValid: false,
      error: error instanceof Error ? error.message : 'Validation failed'
    };
  }
};

// ============================================================================
// VALIDATION UTILITIES
// ============================================================================

export const createValidator = <T>(validator: (item: any) => item is T) => {
  return {
    validate: validator,
    safeValidate: (data: any) => safeValidate(data, validator),
    validateArray: (items: any[], itemName?: string) => validateArray(items, validator, itemName),
  };
};

// Pre-configured validators
export const userValidator = createValidator(validateUser);
export const userProfileValidator = createValidator(validateUserProfile);
export const jobValidator = createValidator(validateJob);
export const jobApplicationValidator = createValidator(validateJobApplication);
export const subscriptionValidator = createValidator(validateSubscription);
export const apiResponseValidator = createValidator(validateApiResponse);

