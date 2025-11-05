'use client';

import { Crown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { User } from '@/lib/api/types';

interface PremiumBadgeProps {
  user: User | null;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export function PremiumBadge({ user, size = 'md', showText = true }: PremiumBadgeProps) {
  if (!user?.subscriptionInfo?.isActive) {
    return null;
  }

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  const planName = user.subscriptionPlan 
    ? (user.subscriptionPlan.charAt(0).toUpperCase() + user.subscriptionPlan.slice(1)) 
    : 'Premium';

  return (
    <Badge 
      className={`bg-gradient-to-r from-yellow-400 to-yellow-600 text-white border-0 flex items-center gap-1 ${sizeClasses[size]}`}
    >
      <Crown className={iconSizes[size]} />
      {showText && planName}
    </Badge>
  );
}

interface SubscriptionStatusProps {
  user: User | null;
  variant?: 'compact' | 'detailed';
}

export function SubscriptionStatus({ user, variant = 'compact' }: SubscriptionStatusProps) {
  if (!user?.subscriptionInfo) {
    return null;
  }

  const { isActive, daysRemaining, endDate } = user.subscriptionInfo;

  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-2 text-sm">
        {isActive ? (
          <>
            <div className="flex items-center gap-1 text-yellow-700 font-medium">
              <Crown className="w-4 h-4" />
              <span>{daysRemaining} days left</span>
            </div>
          </>
        ) : (
          <span className="text-gray-500">No active subscription</span>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600">Status</span>
        <PremiumBadge user={user} size="sm" />
      </div>
      {isActive && (
        <>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Days Remaining</span>
            <span className="font-semibold text-yellow-700">{daysRemaining}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Valid Until</span>
            <span className="font-medium">{new Date(endDate).toLocaleDateString()}</span>
          </div>
        </>
      )}
    </div>
  );
}

