/**
 * API Logger Utility
 * Provides functions to control API logging behavior
 */

import { apiConfig } from './config';

// Global logging state
let loggingEnabled = apiConfig.enableLogging;

/**
 * Enable API logging
 */
export const enableApiLogging = () => {
  loggingEnabled = true;
  console.log('🔧 API Logging enabled');
};

/**
 * Disable API logging
 */
export const disableApiLogging = () => {
  loggingEnabled = false;
  console.log('🔧 API Logging disabled');
};

/**
 * Check if API logging is enabled
 */
export const isApiLoggingEnabled = () => loggingEnabled;

/**
 * Toggle API logging
 */
export const toggleApiLogging = () => {
  if (loggingEnabled) {
    disableApiLogging();
  } else {
    enableApiLogging();
  }
};

/**
 * Log API request (if logging is enabled)
 */
export const logApiRequest = (message: string, data?: any) => {
  if (loggingEnabled) {
    console.log(message, data);
  }
};

/**
 * Log API response (if logging is enabled)
 */
export const logApiResponse = (message: string, data?: any) => {
  if (loggingEnabled) {
    console.log(message, data);
  }
};

/**
 * Log API error (always logs, regardless of setting)
 */
export const logApiError = (message: string, error?: any) => {
  console.error(message, error);
};

// Make functions available globally for easy access in browser console
if (typeof window !== 'undefined') {
  (window as any).apiLogger = {
    enable: enableApiLogging,
    disable: disableApiLogging,
    toggle: toggleApiLogging,
    status: isApiLoggingEnabled,
  };
}
