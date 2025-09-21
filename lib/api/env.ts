/**
 * Environment Configuration for NotifyX Frontend
 * Handles environment variables and feature flags
 */

// Environment variables with fallbacks
export const ENV = {
  // API Configuration
  API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001',
  API_VERSION: process.env.NEXT_PUBLIC_API_VERSION || 'v1',
  
  // Frontend Configuration
  FRONTEND_URL: process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000',
  
  // Environment
  NODE_ENV: process.env.NODE_ENV || 'development',
  IS_DEVELOPMENT: process.env.NODE_ENV === 'development',
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
  IS_TEST: process.env.NODE_ENV === 'test',
  
  // Razorpay Configuration
  RAZORPAY_KEY_ID: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || '',
  RAZORPAY_KEY_SECRET: process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET || '',
  
  // Email Configuration
  EMAIL_FROM: process.env.NEXT_PUBLIC_EMAIL_FROM || 'noreply@notifyx.com',
  EMAIL_SUPPORT: process.env.NEXT_PUBLIC_EMAIL_SUPPORT || 'support@notifyx.com',
  
  // Feature Flags
  ENABLE_PAYMENTS: process.env.NEXT_PUBLIC_ENABLE_PAYMENTS === 'true',
  ENABLE_NOTIFICATIONS: process.env.NEXT_PUBLIC_ENABLE_NOTIFICATIONS === 'true',
  ENABLE_ANALYTICS: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
  ENABLE_ADMIN_DASHBOARD: process.env.NEXT_PUBLIC_ENABLE_ADMIN_DASHBOARD === 'true',
  ENABLE_API_LOGGING: process.env.NEXT_PUBLIC_ENABLE_API_LOGGING === 'true',
} as const;

// Validate required environment variables
export const validateEnvironment = (): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  // Check API configuration
  if (!ENV.API_BASE_URL) {
    errors.push('NEXT_PUBLIC_API_BASE_URL is required');
  }
  
  // Check Razorpay configuration if payments are enabled
  if (ENV.ENABLE_PAYMENTS && !ENV.RAZORPAY_KEY_ID) {
    errors.push('NEXT_PUBLIC_RAZORPAY_KEY_ID is required when payments are enabled');
  }
  
  return {
    isValid: errors.length === 0,
    errors,
  };
};

// Get full API URL
export const getApiUrl = (endpoint: string): string => {
  const baseUrl = ENV.API_BASE_URL.endsWith('/') 
    ? ENV.API_BASE_URL.slice(0, -1) 
    : ENV.API_BASE_URL;
  
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  
  return `${baseUrl}${cleanEndpoint}`;
};

// Log environment validation on client side
if (typeof window !== 'undefined') {
  const validation = validateEnvironment();
  if (!validation.isValid) {
    console.warn('Environment validation failed:', validation.errors);
  }
}
