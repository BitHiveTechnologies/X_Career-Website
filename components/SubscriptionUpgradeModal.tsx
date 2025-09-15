'use client';

import { usePremiumTheme } from '@/hooks/usePremiumTheme';
import { useAuth } from '@/lib/auth/AuthContext';
import { Check, Crown, Star, Zap } from 'lucide-react';
import { useState } from 'react';

interface SubscriptionUpgradeModalProps {
    isOpen: boolean;
    onClose: () => void;
    lockedTemplate?: string;
    currentPlan: 'free' | 'starter' | 'premium';
}

const subscriptionPlans = [
    {
        id: 'free',
        name: 'Free',
        price: '₹0',
        period: 'forever',
        description: 'Basic resume building for freshers',
        features: [
            'Minimal Clean Template (Freshers)',
            'Basic PDF Download',
            'Standard Support',
        ],
        buttonText: 'Current Plan',
        popular: false,
        disabled: true,
    },
    {
        id: 'starter',
        name: 'Starter',
        price: '₹49',
        period: 'month',
        description: 'Modern professional template for fresher interns',
        features: [
            'Modern Professional Template (Fresher Interns)',
            'Unlimited PDF Downloads',
            'Priority Support',
            'Resume Writing Tips',
        ],
        buttonText: 'Upgrade to Starter',
        popular: true,
        disabled: false,
    },
    {
        id: 'premium',
        name: 'Premium',
        price: '₹99',
        period: 'month',
        description: 'Creative design & executive templates for experienced candidates',
        features: [
            'Creative Design & Executive Templates (Experienced Candidates)',
            'Advanced Design Options',
            'Priority Support',
            'Resume Writing Tips',
            'Custom Color Schemes',
            'Premium Templates',
        ],
        buttonText: 'Upgrade to Premium',
        popular: false,
        disabled: false,
    },
];

export default function SubscriptionUpgradeModal({
    isOpen,
    onClose,
    lockedTemplate,
    currentPlan,
}: SubscriptionUpgradeModalProps) {
    const { updateSubscription, getUserSubscription } = useAuth();
    const { isPremium, premiumColors } = usePremiumTheme();
    const [isUpgrading, setIsUpgrading] = useState(false);
    const [upgradeStatus, setUpgradeStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleUpgrade = async (planId: 'starter' | 'premium') => {
        if (planId === currentPlan) return;

        setIsUpgrading(true);
        setUpgradeStatus('idle');

        try {
            const result = await updateSubscription(planId);
            
            if (result.success) {
                setUpgradeStatus('success');
                setTimeout(() => {
                    onClose();
                    setUpgradeStatus('idle');
                }, 2000);
            } else {
                setUpgradeStatus('error');
                setTimeout(() => setUpgradeStatus('idle'), 3000);
            }
        } catch (error) {
            setUpgradeStatus('error');
            setTimeout(() => setUpgradeStatus('idle'), 3000);
        } finally {
            setIsUpgrading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className={`p-6 border-b ${isPremium ? 'border-premium-gold/30' : 'border-gray-200'}`}>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-lg ${
                                isPremium 
                                    ? 'bg-gradient-to-r from-premium-gold to-premium-emerald'
                                    : 'bg-gradient-to-r from-blue-500 to-purple-600'
                            }`}>
                                <Crown className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className={`text-2xl font-bold ${isPremium ? 'text-premium-navy' : 'text-gray-900'}`}>
                                    {isPremium ? '👑 Royal Premium Upgrade' : 'Upgrade Your Resume Builder'}
                                </h2>
                                <p className={isPremium ? 'text-premium-navy/80' : 'text-gray-600'}>
                                    {lockedTemplate 
                                        ? `Unlock "${lockedTemplate}" template and more features`
                                        : isPremium ? 'Access exclusive Royal Tech Luxe templates and features' : 'Get access to premium templates and features'
                                    }
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Plans */}
                <div className="p-6">
                    <div className="grid md:grid-cols-3 gap-6">
                        {subscriptionPlans.map((plan) => {
                            const isCurrentPlan = plan.id === currentPlan;
                            const isRecommended = plan.popular;
                            
                            return (
                                <div
                                    key={plan.id}
                                    className={`relative border-2 rounded-xl p-6 transition-all duration-200 ${
                                        isCurrentPlan
                                            ? 'border-blue-500 bg-blue-50'
                                            : isRecommended
                                            ? 'border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50'
                                            : 'border-gray-200 hover:border-gray-300'
                                    }`}
                                >
                                    {isRecommended && (
                                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                                                Most Popular
                                            </span>
                                        </div>
                                    )}

                                    {isCurrentPlan && (
                                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                            <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                                                Current Plan
                                            </span>
                                        </div>
                                    )}

                                    <div className="text-center mb-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            {plan.name}
                                        </h3>
                                        <div className="mb-2">
                                            <span className="text-3xl font-bold text-gray-900">
                                                {plan.price}
                                            </span>
                                            <span className="text-gray-600">/{plan.period}</span>
                                        </div>
                                        <p className="text-sm text-gray-600">{plan.description}</p>
                                    </div>

                                    <div className="space-y-3 mb-6">
                                        {plan.features.map((feature, index) => (
                                            <div key={index} className="flex items-center space-x-3">
                                                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                                <span className="text-sm text-gray-700">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => handleUpgrade(plan.id as 'starter' | 'premium')}
                                        disabled={plan.disabled || isCurrentPlan || isUpgrading}
                                        className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                                            isCurrentPlan
                                                ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                                                : isRecommended
                                                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transform hover:scale-105'
                                                : 'bg-blue-500 text-white hover:bg-blue-600'
                                        } disabled:opacity-50 disabled:cursor-not-allowed`}
                                    >
                                        {isUpgrading ? (
                                            <div className="flex items-center justify-center space-x-2">
                                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                <span>Upgrading...</span>
                                            </div>
                                        ) : (
                                            plan.buttonText
                                        )}
                                    </button>
                                </div>
                            );
                        })}
                    </div>

                    {/* Status Messages */}
                    {upgradeStatus === 'success' && (
                        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                            <div className="flex items-center space-x-2">
                                <Check className="w-5 h-5 text-green-500" />
                                <span className="text-green-800 font-medium">
                                    Subscription upgraded successfully!
                                </span>
                            </div>
                        </div>
                    )}

                    {upgradeStatus === 'error' && (
                        <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                            <div className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-red-800 font-medium">
                                    Upgrade failed. Please try again.
                                </span>
                            </div>
                        </div>
                    )}

                    {/* Additional Info */}
                    <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">What's included:</h4>
                        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                            <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                    <Zap className="w-4 h-4 text-yellow-500" />
                                    <span>Unlimited template access</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Star className="w-4 h-4 text-yellow-500" />
                                    <span>Premium design options</span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                    <Check className="w-4 h-4 text-green-500" />
                                    <span>Priority customer support</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Check className="w-4 h-4 text-green-500" />
                                    <span>Cancel anytime</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 