'use client';

import { paymentService } from '@/lib/api/payment';
import { UserSubscription } from '@/lib/api/subscriptionService';
import { AlertCircle, CheckCircle, Clock, Crown, XCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

interface SubscriptionStatusProps {
  onUpgrade?: () => void;
  className?: string;
}

export default function SubscriptionStatus({ onUpgrade, className = '' }: SubscriptionStatusProps) {
  const [subscription, setSubscription] = useState<UserSubscription | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadSubscription();
  }, []);

  const loadSubscription = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await paymentService.getCurrentSubscription();
      
      if (response.success && response.data?.subscription) {
        // Convert the response to match UserSubscription interface
        const subscription = response.data.subscription;
        setSubscription({
          id: subscription.id,
          plan: subscription.plan,
          planDetails: {
            id: subscription.plan,
            name: subscription.plan,
            price: 0,
            duration: 30,
            features: subscription.features || [],
            maxJobs: 50,
            priority: 'low' as const
          },
          status: subscription.status as 'pending' | 'completed' | 'cancelled' | 'expired' | 'failed',
          startDate: new Date().toISOString(),
          endDate: subscription.expiresAt,
          amount: 0,
          daysRemaining: 0,
          isActive: subscription.status === 'active'
        });
      } else {
        setSubscription(null);
      }
    } catch (err) {
      console.error('Failed to load subscription:', err);
      setError('Failed to load subscription status');
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'cancelled':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'expired':
        return <AlertCircle className="w-5 h-5 text-orange-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'pending':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'cancelled':
        return 'text-red-600 bg-red-50 border-red-200';
      case 'expired':
        return 'text-orange-600 bg-orange-50 border-orange-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getPlanName = (planId: string) => {
    switch (planId) {
      case 'basic':
        return 'Free Plan';
      case 'premium':
        return 'NotifyX Premium';
      case 'enterprise':
        return 'NotifyX Pro';
      default:
        return planId;
    }
  };

  const getPlanColor = (planId: string) => {
    switch (planId) {
      case 'basic':
        return 'text-gray-600';
      case 'premium':
        return 'text-yellow-600';
      case 'enterprise':
        return 'text-purple-600';
      default:
        return 'text-gray-600';
    }
  };

  if (isLoading) {
    return (
      <div className={`bg-white rounded-xl p-4 border border-gray-200 ${className}`}>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`bg-red-50 border border-red-200 rounded-xl p-4 ${className}`}>
        <div className="flex items-center">
          <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
          <span className="text-red-700 text-sm">{error}</span>
                        </div>
                    </div>
    );
  }

  if (!subscription) {
    return (
      <div className={`bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-4 ${className}`}>
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center mb-1">
              <Crown className="w-5 h-5 text-yellow-600 mr-2" />
              <span className="font-semibold text-gray-900">No Active Subscription</span>
            </div>
            <p className="text-sm text-gray-600">Upgrade to unlock premium features</p>
          </div>
          {onUpgrade && (
                        <button
              onClick={onUpgrade}
              className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg text-sm font-medium hover:from-yellow-600 hover:to-orange-600 transition-all"
                        >
              Upgrade Now
                        </button>
                    )}
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-xl p-4 border border-gray-200 ${className}`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <Crown className={`w-5 h-5 mr-2 ${getPlanColor(subscription.plan)}`} />
          <span className={`font-semibold ${getPlanColor(subscription.plan)}`}>
            {getPlanName(subscription.plan)}
          </span>
        </div>
        <div className={`flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(subscription.status)}`}>
          {getStatusIcon(subscription.status)}
          <span className="ml-1 capitalize">{subscription.status}</span>
        </div>
      </div>

      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex justify-between">
          <span>Amount:</span>
          <span className="font-medium">₹{subscription.amount}</span>
        </div>
        
        {subscription.isActive && subscription.daysRemaining > 0 && (
          <div className="flex justify-between">
            <span>Days Remaining:</span>
            <span className="font-medium text-green-600">{subscription.daysRemaining} days</span>
          </div>
        )}

        <div className="flex justify-between">
          <span>Valid Until:</span>
          <span className="font-medium">
            {new Date(subscription.endDate).toLocaleDateString()}
          </span>
        </div>

        {subscription.planDetails && (
          <div className="flex justify-between">
            <span>Max Jobs:</span>
            <span className="font-medium">{subscription.planDetails.maxJobs}</span>
                        </div>
                    )}
                </div>
                
      {!subscription.isActive && onUpgrade && (
        <div className="mt-3 pt-3 border-t border-gray-200">
          <button
            onClick={onUpgrade}
            className="w-full px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg text-sm font-medium hover:from-yellow-600 hover:to-orange-600 transition-all"
          >
            Renew Subscription
          </button>
                    </div>
                )}
            </div>
    );
}