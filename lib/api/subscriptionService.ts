/**
 * Subscription Service for NotifyX Backend Integration
 * Handles all subscription-related API calls including plans, payments, and management
 */

import { apiClient } from './client';
import { API_ENDPOINTS } from './config';
import { ApiResponse } from './types';

// ============================================================================
// SUBSCRIPTION TYPES (Extended from API documentation)
// ============================================================================

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  duration: number; // in days
  features: string[];
  maxJobs: number;
  priority: 'low' | 'medium' | 'high';
}

export interface SubscriptionPlanResponse {
  plans: SubscriptionPlan[];
}

export interface UserSubscription {
  id: string;
  plan: string;
  planDetails: SubscriptionPlan;
  status: 'pending' | 'completed' | 'cancelled' | 'expired' | 'failed';
  startDate: string;
  endDate: string;
  amount: number;
  daysRemaining: number;
  isActive: boolean;
}

export interface SubscriptionHistoryItem {
  id: string;
  plan: string;
  status: string;
  startDate: string;
  endDate: string;
  amount: number;
  createdAt: string;
}

export interface SubscriptionHistoryResponse {
  subscriptions: SubscriptionHistoryItem[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalRecords: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
}

export interface CreateOrderRequest {
  plan: string;
  amount: number;
  currency?: string;
}

export interface CreateOrderResponse {
  order: {
    id: string;
    amount: number;
    currency: string;
    receipt: string;
    status: string;
  };
  razorpay: {
    orderId: string;
    keyId: string;
  };
}

export interface VerifyPaymentRequest {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
  plan: string;
  amount: number;
}

export interface CancelSubscriptionRequest {
  reason?: string;
}

export interface RenewSubscriptionRequest {
  plan: string;
}

// ============================================================================
// SUBSCRIPTION SERVICE CLASS
// ============================================================================

class SubscriptionService {
  /**
   * Get all available subscription plans
   * This is a public endpoint that doesn't require authentication
   */
  async getPlans(): Promise<ApiResponse<SubscriptionPlanResponse>> {
    try {
      const response = await apiClient.get<SubscriptionPlanResponse>(
        API_ENDPOINTS.SUBSCRIPTIONS.PLANS
      );
      return response;
    } catch (error) {
      console.error('Failed to fetch subscription plans:', error);
      throw error;
    }
  }

  /**
   * Get current user's active subscription
   * Requires authentication
   */
  async getCurrentSubscription(): Promise<ApiResponse<{ subscription: UserSubscription }>> {
    try {
      const response = await apiClient.get<{ subscription: UserSubscription }>(
        API_ENDPOINTS.SUBSCRIPTIONS.CURRENT
      );
      return response;
    } catch (error) {
      console.error('Failed to fetch current subscription:', error);
      throw error;
    }
  }

  /**
   * Get user's subscription history
   * Requires authentication
   */
  async getSubscriptionHistory(params?: {
    page?: number;
    limit?: number;
    status?: string;
  }): Promise<ApiResponse<SubscriptionHistoryResponse>> {
    try {
      const response = await apiClient.get<SubscriptionHistoryResponse>(
        API_ENDPOINTS.SUBSCRIPTIONS.HISTORY,
        params
      );
      return response;
    } catch (error) {
      console.error('Failed to fetch subscription history:', error);
      throw error;
    }
  }

  /**
   * Create a payment order for subscription
   * Requires authentication
   */
  async createOrder(request: CreateOrderRequest): Promise<ApiResponse<CreateOrderResponse>> {
    try {
      const response = await apiClient.post<CreateOrderResponse>(
        API_ENDPOINTS.PAYMENTS.CREATE_ORDER,
        {
          ...request,
          currency: request.currency || 'INR'
        }
      );
      return response;
    } catch (error) {
      console.error('Failed to create payment order:', error);
      throw error;
    }
  }

  /**
   * Verify payment and activate subscription
   * Requires authentication
   */
  async verifyPayment(request: VerifyPaymentRequest): Promise<ApiResponse<any>> {
    try {
      const response = await apiClient.post(
        API_ENDPOINTS.PAYMENTS.VERIFY,
        request
      );
      return response;
    } catch (error) {
      console.error('Failed to verify payment:', error);
      throw error;
    }
  }

  /**
   * Cancel current subscription
   * Requires authentication
   */
  async cancelSubscription(request: CancelSubscriptionRequest): Promise<ApiResponse<any>> {
    try {
      const response = await apiClient.post(
        API_ENDPOINTS.SUBSCRIPTIONS.RENEW, // Using renew endpoint for cancel
        request
      );
      return response;
    } catch (error) {
      console.error('Failed to cancel subscription:', error);
      throw error;
    }
  }

  /**
   * Renew subscription
   * Requires authentication
   */
  async renewSubscription(request: RenewSubscriptionRequest): Promise<ApiResponse<any>> {
    try {
      const response = await apiClient.post(
        API_ENDPOINTS.SUBSCRIPTIONS.RENEW,
        request
      );
      return response;
    } catch (error) {
      console.error('Failed to renew subscription:', error);
      throw error;
    }
  }

  /**
   * Check if user has active subscription
   */
  async hasActiveSubscription(): Promise<boolean> {
    try {
      const response = await this.getCurrentSubscription();
      return response.success && response.data?.subscription?.isActive === true;
    } catch (error) {
      console.error('Failed to check subscription status:', error);
      return false;
    }
  }

  /**
   * Get subscription plan by ID
   */
  async getPlanById(planId: string): Promise<SubscriptionPlan | null> {
    try {
      const response = await this.getPlans();
      if (response.success && response.data?.plans) {
        return response.data.plans.find(plan => plan.id === planId) || null;
      }
      return null;
    } catch (error) {
      console.error('Failed to get plan by ID:', error);
      return null;
    }
  }

  /**
   * Check if user can apply for jobs based on subscription
   */
  async canApplyForJobs(): Promise<{ canApply: boolean; reason?: string; maxJobs?: number }> {
    try {
      const response = await this.getCurrentSubscription();
      
      if (!response.success || !response.data?.subscription) {
        // No subscription - check free plan limits
        const plansResponse = await this.getPlans();
        if (plansResponse.success && plansResponse.data?.plans) {
          const freePlan = plansResponse.data.plans.find(plan => plan.id === 'basic');
          return {
            canApply: true,
            maxJobs: freePlan?.maxJobs || 10
          };
        }
        return { canApply: true, maxJobs: 10 };
      }

      const subscription = response.data.subscription;
      
      if (!subscription.isActive) {
        return { canApply: false, reason: 'Subscription is not active' };
      }

      return {
        canApply: true,
        maxJobs: subscription.planDetails?.maxJobs || 10
      };
    } catch (error) {
      console.error('Failed to check job application eligibility:', error);
      return { canApply: true, maxJobs: 10 }; // Default to allowing with free limits
    }
  }
}

// Export singleton instance
export const subscriptionService = new SubscriptionService();

// Export types
export type {
  SubscriptionPlan,
  SubscriptionPlanResponse,
  UserSubscription,
  SubscriptionHistoryItem,
  SubscriptionHistoryResponse,
  CreateOrderRequest,
  CreateOrderResponse,
  VerifyPaymentRequest,
  CancelSubscriptionRequest,
  RenewSubscriptionRequest
};
