/**
 * Cashfree payment integration client.
 * Handles checkout order creation, confirmation, history, and subscription fetches.
 */

import { ENV } from './env';

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
      cfOrderId?: string;
      paymentSessionId: string;
      amount: number;
      currency: string;
      status: string;
      orderMeta?: Record<string, any>;
      customerDetails?: Record<string, any>;
      createdAt?: string;
    };
    cashfree?: {
      mode: 'sandbox' | 'production';
      apiVersion?: string;
    };
    subscription?: {
      id: string;
      plan: string;
      status: string;
      startDate: string;
      endDate: string;
      expiresAt: string;
      amount: number;
      paymentId?: string;
      orderId?: string;
      paymentSessionId?: string;
      paymentStatus?: string;
      isActive?: boolean;
      isExpired?: boolean;
      daysRemaining?: number;
      daysSinceStart?: number;
      features?: string[];
    };
  };
  error?: {
    message: string;
    details?: any;
  };
}

export interface VerifyPaymentRequest {
  orderId: string;
  paymentId?: string;
}

export interface VerifyPaymentResponse {
  success: boolean;
  data?: {
    status: 'completed' | 'processing' | 'failed';
    subscription?: {
      id: string;
      plan: string;
      status: string;
      startDate: string;
      endDate: string;
      expiresAt: string;
      amount: number;
      paymentId?: string;
      orderId?: string;
      paymentSessionId?: string;
      paymentStatus?: string;
      isActive?: boolean;
      isExpired?: boolean;
      daysRemaining?: number;
      daysSinceStart?: number;
      features?: string[];
      payment?: any;
    };
    payment?: {
      id: string;
      status: string;
      amount?: number;
      currency?: string;
      message?: string;
      createdAt?: string;
    } | null;
  };
  error?: {
    message: string;
    details?: any;
  };
}

export interface PaymentHistoryResponse {
  success: boolean;
  data?: {
    subscriptions: Array<{
      id: string;
      plan: string;
      status: string;
      amount: number;
      currency: string;
      paymentStatus?: string;
      paymentId?: string;
      orderId?: string;
      paymentSessionId?: string;
      startDate: string;
      endDate: string;
      createdAt: string;
    }>;
    payments?: Array<{
      id: string;
      plan: string;
      status: string;
      amount: number;
      currency: string;
      paymentStatus?: string;
      paymentId?: string;
      orderId?: string;
      paymentSessionId?: string;
      startDate: string;
      endDate: string;
      createdAt: string;
    }>;
    pagination?: {
      page: number;
      limit: number;
      total: number;
      pages: number;
    };
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
      startDate: string;
      endDate: string;
      expiresAt?: string;
      amount: number;
      paymentId?: string;
      orderId?: string;
      paymentSessionId?: string;
      paymentStatus?: string;
      isActive?: boolean;
      isExpired?: boolean;
      daysRemaining?: number;
      features?: string[];
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
  private cashfreeMode: 'sandbox' | 'production';

  constructor() {
    this.baseUrl = ENV.API_BASE_URL;
    this.apiVersion = ENV.API_VERSION;
    this.cashfreeMode = ENV.CASHFREE_ENV === 'production' ? 'production' : 'sandbox';
  }

  private getAuthHeaders(): HeadersInit {
    const token = typeof window !== 'undefined' ? localStorage.getItem('careerx_token') : null;
    return {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    };
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data?.error?.message || data?.message || `HTTP ${response.status}: ${response.statusText}`);
    }
    return data;
  }

  async getSubscriptionPlans(): Promise<SubscriptionPlansResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/api/${this.apiVersion}/subscriptions/plans`);
      return await this.handleResponse<SubscriptionPlansResponse>(response);
    } catch (error) {
      return { success: false, error: { message: error instanceof Error ? error.message : 'Failed to fetch subscription plans' } };
    }
  }

  async getCurrentSubscription(): Promise<CurrentSubscriptionResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/api/${this.apiVersion}/subscriptions/current`, {
        headers: this.getAuthHeaders()
      });
      return await this.handleResponse<CurrentSubscriptionResponse>(response);
    } catch (error) {
      return { success: false, error: { message: error instanceof Error ? error.message : 'Failed to fetch current subscription' } };
    }
  }

  async createOrder(request: CreateOrderRequest): Promise<CreateOrderResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/api/${this.apiVersion}/payments/create-order`, {
        method: 'POST',
        headers: this.getAuthHeaders(),
        body: JSON.stringify(request)
      });
      return await this.handleResponse<CreateOrderResponse>(response);
    } catch (error) {
      return { success: false, error: { message: error instanceof Error ? error.message : 'Failed to create payment order' } };
    }
  }

  async verifyPayment(request: VerifyPaymentRequest): Promise<VerifyPaymentResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/api/${this.apiVersion}/payments/verify`, {
        method: 'POST',
        headers: this.getAuthHeaders(),
        body: JSON.stringify(request)
      });
      return await this.handleResponse<VerifyPaymentResponse>(response);
    } catch (error) {
      return { success: false, error: { message: error instanceof Error ? error.message : 'Failed to verify payment' } };
    }
  }

  async getPaymentHistory(): Promise<PaymentHistoryResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/api/${this.apiVersion}/payments/history`, {
        headers: this.getAuthHeaders()
      });
      return await this.handleResponse<PaymentHistoryResponse>(response);
    } catch (error) {
      return { success: false, error: { message: error instanceof Error ? error.message : 'Failed to fetch payment history' } };
    }
  }

  async getPaymentStatus(referenceId: string): Promise<VerifyPaymentResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/api/${this.apiVersion}/payments/status/${encodeURIComponent(referenceId)}`, {
        headers: this.getAuthHeaders()
      });
      return await this.handleResponse<VerifyPaymentResponse>(response);
    } catch (error) {
      return { success: false, error: { message: error instanceof Error ? error.message : 'Failed to fetch payment status' } };
    }
  }

  getCashfreeMode() {
    return this.cashfreeMode;
  }
}

export const paymentService = new PaymentService();
export default paymentService;
