/**
 * Health Check Utilities for NotifyX Backend
 * Provides methods to check backend connectivity and status
 */

import { apiClient } from './client';
import { API_ENDPOINTS } from './config';

export interface HealthStatus {
  isHealthy: boolean;
  status: 'online' | 'offline' | 'error';
  message: string;
  responseTime?: number;
  timestamp: string;
  version?: string;
  uptime?: number;
}

export interface BackendHealth {
  success: boolean;
  message: string;
  version: string;
  timestamp: string;
  uptime: number;
}

/**
 * Check if the backend is healthy and responsive
 */
export const checkBackendHealth = async (): Promise<HealthStatus> => {
  const startTime = Date.now();
  
  try {
    const response = await apiClient.get<BackendHealth>(API_ENDPOINTS.HEALTH.CHECK);
    const responseTime = Date.now() - startTime;
    
    if (response.success && response.data) {
      return {
        isHealthy: true,
        status: 'online',
        message: response.data.message,
        responseTime,
        timestamp: response.data.timestamp,
        version: response.data.version,
        uptime: response.data.uptime,
      };
    } else {
      return {
        isHealthy: false,
        status: 'error',
        message: 'Backend returned invalid response',
        responseTime,
        timestamp: new Date().toISOString(),
      };
    }
  } catch (error: any) {
    const responseTime = Date.now() - startTime;
    
    return {
      isHealthy: false,
      status: 'offline',
      message: error.message || 'Backend is not reachable',
      responseTime,
      timestamp: new Date().toISOString(),
    };
  }
};

/**
 * Check if the API documentation endpoint is accessible
 */
export const checkApiDocs = async (): Promise<boolean> => {
  try {
    const response = await apiClient.get(API_ENDPOINTS.HEALTH.API_DOCS);
    return response.success;
  } catch {
    return false;
  }
};

/**
 * Perform a comprehensive health check including multiple endpoints
 */
export const performFullHealthCheck = async (): Promise<{
  overall: HealthStatus;
  details: {
    healthEndpoint: boolean;
    apiDocs: boolean;
    authEndpoint: boolean;
  };
}> => {
  const [healthStatus, apiDocsStatus, authStatus] = await Promise.allSettled([
    checkBackendHealth(),
    checkApiDocs(),
    checkAuthEndpoint(),
  ]);

  const overall = healthStatus.status === 'fulfilled' 
    ? healthStatus.value 
    : {
        isHealthy: false,
        status: 'error' as const,
        message: 'Health check failed',
        timestamp: new Date().toISOString(),
      };

  return {
    overall,
    details: {
      healthEndpoint: healthStatus.status === 'fulfilled' && healthStatus.value.isHealthy,
      apiDocs: apiDocsStatus.status === 'fulfilled' && apiDocsStatus.value,
      authEndpoint: authStatus.status === 'fulfilled' && authStatus.value,
    },
  };
};

/**
 * Check if the authentication endpoint is accessible
 */
const checkAuthEndpoint = async (): Promise<boolean> => {
  try {
    // Try to access the auth endpoint without credentials
    // This should return a 401 or 400, but not a connection error
    const response = await apiClient.get(API_ENDPOINTS.AUTH.ME);
    return true; // If we get any response, the endpoint is accessible
  } catch (error: any) {
    // 401/403 errors are expected, connection errors are not
    return error.status !== 0 && error.status < 500;
  }
};

/**
 * Monitor backend health with periodic checks
 */
export class HealthMonitor {
  private intervalId: NodeJS.Timeout | null = null;
  private callbacks: ((status: HealthStatus) => void)[] = [];
  private lastStatus: HealthStatus | null = null;

  /**
   * Start monitoring backend health
   * @param intervalMs - Check interval in milliseconds (default: 30000 = 30 seconds)
   */
  start(intervalMs: number = 30000): void {
    if (this.intervalId) {
      this.stop();
    }

    // Perform initial check
    this.checkHealth();

    // Set up periodic checks
    this.intervalId = setInterval(() => {
      this.checkHealth();
    }, intervalMs);
  }

  /**
   * Stop monitoring backend health
   */
  stop(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  /**
   * Add a callback to be notified of health status changes
   */
  onStatusChange(callback: (status: HealthStatus) => void): void {
    this.callbacks.push(callback);
  }

  /**
   * Remove a status change callback
   */
  removeCallback(callback: (status: HealthStatus) => void): void {
    this.callbacks = this.callbacks.filter(cb => cb !== callback);
  }

  /**
   * Get the last known health status
   */
  getLastStatus(): HealthStatus | null {
    return this.lastStatus;
  }

  private async checkHealth(): Promise<void> {
    const status = await checkBackendHealth();
    
    // Only notify if status changed
    if (!this.lastStatus || 
        this.lastStatus.status !== status.status || 
        this.lastStatus.isHealthy !== status.isHealthy) {
      
      this.lastStatus = status;
      this.callbacks.forEach(callback => callback(status));
    }
  }
}

// Export singleton health monitor
export const healthMonitor = new HealthMonitor();

