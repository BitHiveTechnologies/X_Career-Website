/**
 * Payment Service Integration
 * Handles all payment-related API calls with the backend
 */

import { ENV } from './env';

// Types for payment operations
export interface CreateOrderRequest {
  plan: string;
  amount: number;
  currency: string;
}

export interface CreateOrderResponse {
  success: boolean;
  data?: {
    order: {
      id: string;
      amount: number;
      currency: string;
      status: string;
    };
    razorpay: {
      keyId: string;
      orderId: string;
    };
  };
  error?: {
    message: string;
    details?: any;
  };
}

export interface VerifyPaymentRequest {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

export interface VerifyPaymentResponse {
  success: boolean;
  data?: {
    payment: {
      id: string;
      amount: number;
      currency: string;
      status: string;
    };
    subscription?: {
      id: string;
      plan: string;
      status: string;
      expiresAt: string;
    };
  };
  error?: {
    message: string;
    details?: any;
  };
}

export interface PaymentHistoryResponse {
  success: boolean;
  data?: {
    payments: Array<{
      id: string;
      amount: number;
      currency: string;
      status: string;
      createdAt: string;
      plan?: string;
    }>;
  };
  error?: {
    message: string;
    details?: any;
  };
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  duration: number;
  features: string[];
  maxJobs: number;
  priority: string;
}

export interface SubscriptionPlansResponse {
  success: boolean;
  data?: {
    plans: SubscriptionPlan[];
  };
  error?: {
    message: string;
    details?: any;
  };
}

export interface CurrentSubscriptionResponse {
  success: boolean;
  data?: {
    subscription: {
      id: string;
      plan: string;
      status: string;
      expiresAt: string;
      features: string[];
    };
  };
  error?: {
    message: string;
    details?: any;
  };
}

class PaymentService {
  private baseUrl: string;
  private apiVersion: string;

  constructor() {
    this.baseUrl = ENV.API_BASE_URL;
    this.apiVersion = ENV.API_VERSION;
  }

  private getAuthHeaders(): HeadersInit {
    const token = typeof window !== 'undefined' ? localStorage.getItem('careerx_token') : null;
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` }),
    };
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error?.message || `HTTP ${response.status}: ${response.statusText}`);
    }
    
    return data;
  }

  /**
   * Get available subscription plans
   */
  async getSubscriptionPlans(): Promise<SubscriptionPlansResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/api/${this.apiVersion}/subscriptions/plans`);
      return await this.handleResponse<SubscriptionPlansResponse>(response);
    } catch (error) {
      console.error('Error fetching subscription plans:', error);
      return {
        success: false,
        error: {
          message: error instanceof Error ? error.message : 'Failed to fetch subscription plans'
        }
      };
    }
  }

  /**
   * Get current user's subscription
   */
  async getCurrentSubscription(): Promise<CurrentSubscriptionResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/api/${this.apiVersion}/subscriptions/current`, {
        headers: this.getAuthHeaders()
      });
      return await this.handleResponse<CurrentSubscriptionResponse>(response);
    } catch (error) {
      console.error('Error fetching current subscription:', error);
      return {
        success: false,
        error: {
          message: error instanceof Error ? error.message : 'Failed to fetch current subscription'
        }
      };
    }
  }

  /**
   * Create a Razorpay payment order
   */
  async createOrder(request: CreateOrderRequest): Promise<CreateOrderResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/api/${this.apiVersion}/payments/create-order`, {
        method: 'POST',
        headers: this.getAuthHeaders(),
        body: JSON.stringify(request)
      });
      return await this.handleResponse<CreateOrderResponse>(response);
    } catch (error) {
      console.error('Error creating payment order:', error);
      return {
        success: false,
        error: {
          message: error instanceof Error ? error.message : 'Failed to create payment order'
        }
      };
    }
  }

  /**
   * Verify payment after Razorpay callback
   */
  async verifyPayment(request: VerifyPaymentRequest): Promise<VerifyPaymentResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/api/${this.apiVersion}/payments/verify`, {
        method: 'POST',
        headers: this.getAuthHeaders(),
        body: JSON.stringify(request)
      });
      return await this.handleResponse<VerifyPaymentResponse>(response);
    } catch (error) {
      console.error('Error verifying payment:', error);
      return {
        success: false,
        error: {
          message: error instanceof Error ? error.message : 'Failed to verify payment'
        }
      };
    }
  }

  /**
   * Get payment history
   */
  async getPaymentHistory(): Promise<PaymentHistoryResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/api/${this.apiVersion}/payments/history`, {
        headers: this.getAuthHeaders()
      });
      return await this.handleResponse<PaymentHistoryResponse>(response);
    } catch (error) {
      console.error('Error fetching payment history:', error);
      return {
        success: false,
        error: {
          message: error instanceof Error ? error.message : 'Failed to fetch payment history'
        }
      };
    }
  }

  /**
   * Cancel subscription
   */
  async cancelSubscription(subscriptionId: string): Promise<{ success: boolean; error?: { message: string } }> {
    try {
      const response = await fetch(`${this.baseUrl}/api/${this.apiVersion}/subscriptions/${subscriptionId}`, {
        method: 'DELETE',
        headers: this.getAuthHeaders()
      });
      return await this.handleResponse<{ success: boolean; error?: { message: string } }>(response);
    } catch (error) {
      console.error('Error canceling subscription:', error);
      return {
        success: false,
        error: {
          message: error instanceof Error ? error.message : 'Failed to cancel subscription'
        }
      };
    }
  }

  /**
   * Renew subscription
   */
  async renewSubscription(): Promise<{ success: boolean; error?: { message: string } }> {
    try {
      const response = await fetch(`${this.baseUrl}/api/${this.apiVersion}/subscriptions/renew`, {
        method: 'POST',
        headers: this.getAuthHeaders()
      });
      return await this.handleResponse<{ success: boolean; error?: { message: string } }>(response);
    } catch (error) {
      console.error('Error renewing subscription:', error);
      return {
        success: false,
        error: {
          message: error instanceof Error ? error.message : 'Failed to renew subscription'
        }
      };
    }
  }
}

// Export singleton instance
export const paymentService = new PaymentService();

