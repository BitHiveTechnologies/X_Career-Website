/**
 * API Client for NotifyX Backend Integration
 * Handles HTTP requests, authentication, error handling, and response transformation
 */

import { apiConfig, API_ENDPOINTS, DEFAULT_HEADERS, HTTP_METHODS } from './config';
import { ApiResponse } from './types';
import { isApiLoggingEnabled, logApiRequest, logApiResponse, logApiError } from './logger';

// Request configuration interface
export interface RequestConfig {
  method: keyof typeof HTTP_METHODS;
  url: string;
  data?: any;
  headers?: Record<string, string>;
  params?: Record<string, any>;
  timeout?: number;
  retries?: number;
}

// Error class for API errors
export class ApiError extends Error {
  public status: number;
  public code: string;
  public details: any;

  constructor(message: string, status: number, code: string, details?: any) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

// Token management
class TokenManager {
  private static instance: TokenManager;
  private token: string | null = null;

  static getInstance(): TokenManager {
    if (!TokenManager.instance) {
      TokenManager.instance = new TokenManager();
    }
    return TokenManager.instance;
  }

  setToken(token: string): void {
    this.token = token;
    if (typeof window !== 'undefined') {
      localStorage.setItem('careerx_token', token);
    }
  }

  getToken(): string | null {
    if (this.token) return this.token;
    
    if (typeof window !== 'undefined') {
      this.token = localStorage.getItem('careerx_token');
    }
    
    return this.token;
  }

  clearToken(): void {
    this.token = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('careerx_token');
    }
  }

  isTokenExpired(token: string): boolean {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const currentTime = Date.now() / 1000;
      return payload.exp < currentTime;
    } catch {
      return true;
    }
  }
}

// API Client class
class ApiClient {
  private tokenManager = TokenManager.getInstance();
  private baseUrl: string;

  constructor() {
    this.baseUrl = apiConfig.baseUrl;
  }

  // Build full URL with query parameters
  private buildUrl(endpoint: string, params?: Record<string, any>): string {
    const url = new URL(endpoint, this.baseUrl);
    
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          url.searchParams.append(key, String(value));
        }
      });
    }
    
    return url.toString();
  }

  // Get authorization header
  private getAuthHeader(): Record<string, string> {
    // Always check localStorage directly to ensure we get the latest token
    let token = null;
    if (typeof window !== 'undefined') {
      token = localStorage.getItem('careerx_token');
    }
    
    // Fallback to token manager if localStorage is not available
    if (!token) {
      token = this.tokenManager.getToken();
    }
    
    if (token) {
      // Check if token is expired
      if (this.tokenManager.isTokenExpired(token)) {
        console.log('Token is expired, clearing it');
        this.tokenManager.clearToken();
        if (typeof window !== 'undefined') {
          localStorage.removeItem('careerx_token');
        }
        return {};
      }
      
      console.log('Using token for API request:', token.substring(0, 20) + '...');
      return { Authorization: `Bearer ${token}` };
    }
    
    console.log('No token found for API request');
    return {};
  }

  // Retry logic
  private async retryRequest<T>(
    requestFn: () => Promise<T>,
    retries: number = apiConfig.retryAttempts
  ): Promise<T> {
    try {
      return await requestFn();
    } catch (error) {
      if (retries > 0 && this.shouldRetry(error)) {
        if (isApiLoggingEnabled()) {
          console.warn(`🔄 Retrying request... (${retries} attempts left)`, {
            error: error instanceof Error ? error.message : 'Unknown error'
          });
        }
        await new Promise(resolve => setTimeout(resolve, apiConfig.retryDelay));
        return this.retryRequest(requestFn, retries - 1);
      }
      throw error;
    }
  }

  // Determine if request should be retried
  private shouldRetry(error: any): boolean {
    if (error instanceof ApiError) {
      // Retry on server errors (5xx) and rate limiting (429)
      return error.status >= 500 || error.status === 429;
    }
    return false;
  }

  // Main request method
  async request<T = any>(config: RequestConfig): Promise<ApiResponse<T>> {
    const {
      method,
      url,
      data,
      headers = {},
      params,
      timeout = apiConfig.timeout,
      retries = apiConfig.retryAttempts,
    } = config;

    const requestFn = async (): Promise<ApiResponse<T>> => {
      const fullUrl = this.buildUrl(url, params);
      const authHeaders = this.getAuthHeader();
      
      const requestHeaders = {
        ...DEFAULT_HEADERS,
        ...authHeaders,
        ...headers,
      };

      const requestConfig: RequestInit = {
        method: HTTP_METHODS[method],
        headers: requestHeaders,
        signal: AbortSignal.timeout(timeout),
      };

      if (data && method !== 'GET') {
        requestConfig.body = JSON.stringify(data);
      }

      try {
        // Log the request details if logging is enabled
        if (isApiLoggingEnabled()) {
          console.group(`🚀 API Request: ${method} ${fullUrl}`);
          logApiRequest('📤 Request Headers:', requestHeaders);
          if (data && method !== 'GET') {
            logApiRequest('📤 Request Body:', data);
          }
          if (params) {
            logApiRequest('📤 Request Params:', params);
          }
          console.groupEnd();
        }

        const response = await fetch(fullUrl, requestConfig);
        const responseData: ApiResponse<T> = await response.json();

        // Log the response details if logging is enabled
        if (isApiLoggingEnabled()) {
          console.group(`📥 API Response: ${method} ${fullUrl}`);
          logApiResponse('📊 Response Status:', `${response.status} ${response.statusText}`);
          logApiResponse('📊 Response Headers:', Object.fromEntries(Array.from(response.headers.entries())));
          logApiResponse('📊 Response Data:', responseData);
          console.groupEnd();
        }

        // Always log login responses for debugging
        if (fullUrl.includes('/login') || fullUrl.includes('/jwt-auth')) {
          console.log('🔐 Login API Response Debug:', {
            url: fullUrl,
            status: response.status,
            responseData: responseData,
            hasToken: !!(responseData as any)?.data?.token
          });
        }

        if (!response.ok) {
          console.error('❌ API Error:', {
            status: response.status,
            message: responseData.error?.message || 'Request failed',
            code: responseData.error?.code || 'UNKNOWN_ERROR',
            details: responseData.error?.details
          });
          throw new ApiError(
            responseData.error?.message || 'Request failed',
            response.status,
            responseData.error?.code || 'UNKNOWN_ERROR',
            responseData.error?.details
          );
        }

        if (isApiLoggingEnabled()) {
          logApiResponse('✅ API Request Successful:', fullUrl);
        }
        return responseData;
      } catch (error) {
        // Log the error details
        console.error('💥 API Request Failed:', {
          url: fullUrl,
          method: method,
          error: error instanceof Error ? error.message : 'Unknown error',
          stack: error instanceof Error ? error.stack : undefined
        });

        if (error instanceof ApiError) {
          throw error;
        }
        
        // Handle network errors
        if (error instanceof TypeError && error.message.includes('fetch')) {
          console.error('🌐 Network Error:', error.message);
          throw new ApiError(
            'Network error - please check your connection',
            0,
            'NETWORK_ERROR'
          );
        }
        
        // Handle timeout errors
        if (error instanceof DOMException && error.name === 'AbortError') {
          console.error('⏰ Timeout Error:', error.message);
          throw new ApiError(
            'Request timeout - please try again',
            408,
            'TIMEOUT_ERROR'
          );
        }
        
        console.error('❓ Unexpected Error:', error);
        throw new ApiError(
          'An unexpected error occurred',
          500,
          'UNKNOWN_ERROR',
          error
        );
      }
    };

    return this.retryRequest(requestFn, retries);
  }

  // Convenience methods
  async get<T = any>(url: string, params?: Record<string, any>, config?: Partial<RequestConfig>): Promise<ApiResponse<T>> {
    return this.request<T>({
      method: 'GET',
      url,
      params,
      ...config,
    });
  }

  async post<T = any>(url: string, data?: any, config?: Partial<RequestConfig>): Promise<ApiResponse<T>> {
    return this.request<T>({
      method: 'POST',
      url,
      data,
      ...config,
    });
  }

  async put<T = any>(url: string, data?: any, config?: Partial<RequestConfig>): Promise<ApiResponse<T>> {
    return this.request<T>({
      method: 'PUT',
      url,
      data,
      ...config,
    });
  }

  async patch<T = any>(url: string, data?: any, config?: Partial<RequestConfig>): Promise<ApiResponse<T>> {
    return this.request<T>({
      method: 'PATCH',
      url,
      data,
      ...config,
    });
  }

  async delete<T = any>(url: string, config?: Partial<RequestConfig>): Promise<ApiResponse<T>> {
    return this.request<T>({
      method: 'DELETE',
      url,
      ...config,
    });
  }

  // Token management methods
  setToken(token: string): void {
    this.tokenManager.setToken(token);
  }

  getToken(): string | null {
    return this.tokenManager.getToken();
  }

  clearToken(): void {
    this.tokenManager.clearToken();
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return token !== null && !this.tokenManager.isTokenExpired(token);
  }
}

// Export singleton instance
export const apiClient = new ApiClient();

// Export types and utilities
export { TokenManager };
export { API_ENDPOINTS } from './config';
