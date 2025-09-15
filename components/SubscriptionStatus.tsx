'use client';

import { useAuth } from '@/lib/auth/AuthContext';
import { usePremiumTheme } from '@/hooks/usePremiumTheme';
import { Crown, Zap } from 'lucide-react';
import { useState } from 'react';
import SubscriptionUpgradeModal from './SubscriptionUpgradeModal';

export default function SubscriptionStatus() {
    const { getUserSubscription } = useAuth();
    const { isPremium, premiumColors } = usePremiumTheme();
    const [showUpgradeModal, setShowUpgradeModal] = useState(false);
    
    const currentPlan = getUserSubscription();
    
    const getPlanInfo = (plan: string) => {
        switch (plan) {
            case 'free':
                return {
                    name: 'Free Plan',
                    description: 'Minimal Clean template (for freshers)',
                    color: 'bg-gray-100 text-gray-700',
                    icon: '📄',
                };
            case 'starter':
                return {
                    name: 'Starter Plan',
                    description: 'Modern Professional template (for fresher interns)',
                    color: 'bg-blue-100 text-blue-700',
                    icon: '🚀',
                };
            case 'premium':
                return {
                    name: 'Premium Plan',
                    description: 'Creative Design & Executive templates (for experienced candidates)',
                    color: 'bg-purple-100 text-purple-700',
                    icon: '👑',
                };
            default:
                return {
                    name: 'Free Plan',
                    description: 'Minimal Clean template (for freshers)',
                    color: 'bg-gray-100 text-gray-700',
                    icon: '📄',
                };
        }
    };

    const planInfo = getPlanInfo(currentPlan);

    return (
        <>
            <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="text-2xl">{planInfo.icon}</div>
                        <div>
                            <h3 className="font-semibold text-gray-900">{planInfo.name}</h3>
                            <p className="text-sm text-gray-600">{planInfo.description}</p>
                        </div>
                    </div>
                    
                    {currentPlan === 'free' && (
                        <button
                            onClick={() => setShowUpgradeModal(true)}
                            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                        >
                            <Crown className="w-4 h-4" />
                            <span>Upgrade</span>
                        </button>
                    )}
                    
                    {currentPlan === 'starter' && (
                        <button
                            onClick={() => setShowUpgradeModal(true)}
                            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105"
                        >
                            <Zap className="w-4 h-4" />
                            <span>Upgrade to Premium</span>
                        </button>
                    )}
                    
                    {currentPlan === 'premium' && (
                        <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${
                            isPremium 
                                ? 'bg-premium-gold text-premium-navy border border-premium-gold/30'
                                : 'bg-purple-100 text-purple-700'
                        }`}>
                            <Crown className="w-4 h-4" />
                            <span>{isPremium ? '👑 Royal Premium' : 'Premium Active'}</span>
                        </div>
                    )}
                </div>
                
                {currentPlan === 'free' && (
                    <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <div className="flex items-start space-x-2">
                            <div className="text-yellow-600 mt-0.5">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="text-sm text-yellow-800">
                                <p className="font-medium">Limited Access</p>
                                <p>You have access to 1 template. Upgrade to unlock all templates and premium features.</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <SubscriptionUpgradeModal
                isOpen={showUpgradeModal}
                onClose={() => setShowUpgradeModal(false)}
                currentPlan={currentPlan}
            />
        </>
    );
} 