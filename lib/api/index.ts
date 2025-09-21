/**
 * NotifyX API Integration
 * Centralized exports for all API-related functionality
 */

// Configuration
export { apiConfig, getApiConfig, API_ENDPOINTS, HTTP_METHODS, DEFAULT_HEADERS } from './config';
export { ENV, validateEnvironment, getApiUrl } from './env';

// Client
export { 
  apiClient, 
  ApiError, 
  TokenManager,
  type RequestConfig 
} from './client';

// Health Check
export { 
  checkBackendHealth, 
  checkApiDocs, 
  performFullHealthCheck, 
  HealthMonitor, 
  healthMonitor,
  type HealthStatus, 
  type BackendHealth 
} from './health';

// Testing
export { 
  testApiSetup, 
  quickConnectivityTest 
} from './test';

// Types
export * from './types';

// Validation
export * from './validation';

// Authentication
export * from './auth';

// Services
export * from './services';

// Re-export for convenience
export { apiClient as api } from './client';
