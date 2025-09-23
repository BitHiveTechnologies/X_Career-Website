'use client';

import { useState } from 'react';
import { X, Crown, CheckCircle, ArrowRight } from 'lucide-react';
import { subscriptionService, SubscriptionPlan } from '@/lib/api/subscriptionService';

interface SubscriptionUpgradeModalProps {
    isOpen: boolean;
    onClose: () => void;
  currentPlan?: string;
  onUpgrade: (planId: string) => void;
}

export default function SubscriptionUpgradeModal({ 
  isOpen, 
  onClose, 
  currentPlan = 'basic',
  onUpgrade 
}: SubscriptionUpgradeModalProps) {
  const [selectedPlan, setSelectedPlan] = useState<string>('premium');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const plans = [
    {
      id: 'premium',
      name: 'NotifyX Premium',
      price: 49,
        period: 'month',
        features: [
        'Priority job alerts',
        'Instant notifications',
        'Personalized matching',
        'Exclusive content',
        'Resume review',
        'Interview prep calls'
      ],
        popular: true,
      current: currentPlan === 'premium'
    },
    {
      id: 'enterprise',
      name: 'NotifyX Pro',
      price: 99,
        period: 'month',
        features: [
        'Everything in Premium',
        '1-on-1 career coaching',
        'LinkedIn optimization',
        'Salary negotiation help',
        'Direct recruiter connect',
        'Custom job search strategy'
      ],
        popular: false,
      current: currentPlan === 'enterprise'
    }
  ];

  const handleUpgrade = async () => {
    if (selectedPlan === currentPlan) {
                    onClose();
      return;
    }

    setIsLoading(true);
    try {
      onUpgrade(selectedPlan);
        } finally {
      setIsLoading(false);
        }
    };

    return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center">
            <Crown className="w-6 h-6 text-yellow-500 mr-2" />
            <h2 className="text-xl font-bold text-gray-900">Upgrade Your Plan</h2>
                        </div>
                        <button
                            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            disabled={isLoading}
                        >
            <X className="h-5 w-5" />
                        </button>
                    </div>

        {/* Content */}
        <div className="p-6">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Unlock Premium Features
            </h3>
            <p className="text-gray-600">
              Choose the perfect plan for your career growth
            </p>
                </div>

                {/* Plans */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {plans.map((plan) => (
                                <div
                                    key={plan.id}
                className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedPlan === plan.id
                    ? 'border-yellow-500 bg-yellow-50'
                                            : 'border-gray-200 hover:border-gray-300'
                } ${plan.current ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={() => !plan.current && setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                                                Most Popular
                                            </span>
                                        </div>
                                    )}

                {plan.current && (
                  <div className="absolute -top-2 right-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                                                Current Plan
                                            </span>
                                        </div>
                                    )}

                <div className="text-center mb-4">
                  <h4 className="font-semibold text-gray-900 mb-1">{plan.name}</h4>
                  <div className="text-2xl font-bold text-yellow-600">
                    ₹{plan.price}
                    <span className="text-sm text-gray-500">/{plan.period}</span>
                                        </div>
                                    </div>

                <ul className="space-y-2 text-sm text-gray-600">
                  {plan.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {plan.features.length > 4 && (
                    <li className="text-xs text-gray-500">
                      +{plan.features.length - 4} more features
                    </li>
                  )}
                </ul>
                                            </div>
                                        ))}
                                    </div>

          {/* Benefits */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4 mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Why Upgrade?</h4>
                        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                Get job alerts 24 hours before they go public
                                </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                Priority support and faster response times
                                </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                Access to exclusive job opportunities
                            </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                Personalized career guidance and tips
                                </div>
                            </div>
                        </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              disabled={isLoading}
            >
              Maybe Later
            </button>
            <button
              onClick={handleUpgrade}
              disabled={isLoading || selectedPlan === currentPlan}
              className="flex-1 px-4 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
              ) : (
                <ArrowRight className="w-4 h-4 mr-2" />
              )}
              {selectedPlan === currentPlan ? 'Current Plan' : `Upgrade to ${plans.find(p => p.id === selectedPlan)?.name}`}
            </button>
                    </div>
                </div>
            </div>
        </div>
    );
} 