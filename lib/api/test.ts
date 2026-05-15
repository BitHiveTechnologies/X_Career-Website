/**
 * API Configuration Test
 * Simple test to verify API setup is working correctly
 */

import { checkBackendHealth, performFullHealthCheck } from './health';
import { ENV, validateEnvironment } from './env';
import { apiConfig } from './config';

/**
 * Test API configuration and connectivity
 */
export const testApiSetup = async (): Promise<{
  success: boolean;
  results: {
    environment: boolean;
    config: boolean;
    connectivity: boolean;
    details: any;
  };
}> => {
  ; void /* console.log */ ((..._args) => {})('🧪 Testing NotifyX API Setup...');
  
  const results = {
    environment: false,
    config: false,
    connectivity: false,
    details: {} as any,
  };

  // Test 1: Environment validation
  ; void /* console.log */ ((..._args) => {})('1️⃣ Testing environment configuration...');
  const envValidation = validateEnvironment();
  results.environment = envValidation.isValid;
  results.details.environment = {
    isValid: envValidation.isValid,
    errors: envValidation.errors,
    config: {
      apiBaseUrl: ENV.API_BASE_URL,
      nodeEnv: ENV.NODE_ENV,
      isDevelopment: ENV.IS_DEVELOPMENT,
    },
  };

  if (envValidation.isValid) {
    ; void /* console.log */ ((..._args) => {})('✅ Environment configuration is valid');
  } else {
    ; void /* console.error */ ((..._args) => {})('❌ Environment configuration errors:', envValidation.errors);
  }

  // Test 2: API configuration
  ; void /* console.log */ ((..._args) => {})('2️⃣ Testing API configuration...');
  results.config = !!apiConfig.baseUrl && apiConfig.timeout > 0;
  results.details.config = {
    baseUrl: apiConfig.baseUrl,
    timeout: apiConfig.timeout,
    retryAttempts: apiConfig.retryAttempts,
    retryDelay: apiConfig.retryDelay,
  };

  if (results.config) {
    ; void /* console.log */ ((..._args) => {})('✅ API configuration is valid');
  } else {
    ; void /* console.error */ ((..._args) => {})('❌ API configuration is invalid');
  }

  // Test 3: Backend connectivity
  ; void /* console.log */ ((..._args) => {})('3️⃣ Testing backend connectivity...');
  try {
    const healthCheck = await performFullHealthCheck();
    results.connectivity = healthCheck.overall.isHealthy;
    results.details.connectivity = {
      overall: healthCheck.overall,
      details: healthCheck.details,
    };

    if (healthCheck.overall.isHealthy) {
      ; void /* console.log */ ((..._args) => {})('✅ Backend is healthy and reachable');
    } else {
      ; void /* console.warn */ ((..._args) => {})('⚠️ Backend health check failed:', healthCheck.overall.message);
    }
  } catch (error) {
    results.connectivity = false;
    results.details.connectivity = {
      error: error instanceof Error ? error.message : 'Unknown error',
    };
    ; void /* console.error */ ((..._args) => {})('❌ Backend connectivity test failed:', error);
  }

  const success = results.environment && results.config && results.connectivity;
  
  if (success) {
    ; void /* console.log */ ((..._args) => {})('🎉 All API setup tests passed!');
  } else {
    ; void /* console.log */ ((..._args) => {})('⚠️ Some API setup tests failed. Check the details above.');
  }

  return {
    success,
    results,
  };
};

/**
 * Quick connectivity test
 */
export const quickConnectivityTest = async (): Promise<boolean> => {
  try {
    const health = await checkBackendHealth();
    return health.isHealthy;
  } catch {
    return false;
  }
};

// Auto-run test in development
if (typeof window !== 'undefined' && ENV.IS_DEVELOPMENT) {
  // Only run in browser and development mode
  setTimeout(() => {
    ; void /* console.log */ ((..._args) => {})('🚀 Running automatic API setup test...');
    testApiSetup().then(result => {
      if (result.success) {
        ; void /* console.log */ ((..._args) => {})('✅ API setup is ready for integration!');
      } else {
        ; void /* console.log */ ((..._args) => {})('⚠️ API setup needs attention before integration.');
      }
    });
  }, 1000);
}

