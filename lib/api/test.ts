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
  console.log('🧪 Testing NotifyX API Setup...');
  
  const results = {
    environment: false,
    config: false,
    connectivity: false,
    details: {} as any,
  };

  // Test 1: Environment validation
  console.log('1️⃣ Testing environment configuration...');
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
    console.log('✅ Environment configuration is valid');
  } else {
    console.error('❌ Environment configuration errors:', envValidation.errors);
  }

  // Test 2: API configuration
  console.log('2️⃣ Testing API configuration...');
  results.config = !!apiConfig.baseUrl && apiConfig.timeout > 0;
  results.details.config = {
    baseUrl: apiConfig.baseUrl,
    timeout: apiConfig.timeout,
    retryAttempts: apiConfig.retryAttempts,
    retryDelay: apiConfig.retryDelay,
  };

  if (results.config) {
    console.log('✅ API configuration is valid');
  } else {
    console.error('❌ API configuration is invalid');
  }

  // Test 3: Backend connectivity
  console.log('3️⃣ Testing backend connectivity...');
  try {
    const healthCheck = await performFullHealthCheck();
    results.connectivity = healthCheck.overall.isHealthy;
    results.details.connectivity = {
      overall: healthCheck.overall,
      details: healthCheck.details,
    };

    if (healthCheck.overall.isHealthy) {
      console.log('✅ Backend is healthy and reachable');
    } else {
      console.warn('⚠️ Backend health check failed:', healthCheck.overall.message);
    }
  } catch (error) {
    results.connectivity = false;
    results.details.connectivity = {
      error: error instanceof Error ? error.message : 'Unknown error',
    };
    console.error('❌ Backend connectivity test failed:', error);
  }

  const success = results.environment && results.config && results.connectivity;
  
  if (success) {
    console.log('🎉 All API setup tests passed!');
  } else {
    console.log('⚠️ Some API setup tests failed. Check the details above.');
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
    console.log('🚀 Running automatic API setup test...');
    testApiSetup().then(result => {
      if (result.success) {
        console.log('✅ API setup is ready for integration!');
      } else {
        console.log('⚠️ API setup needs attention before integration.');
      }
    });
  }, 1000);
}

