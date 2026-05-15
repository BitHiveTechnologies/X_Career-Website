'use client';

import { useState, useEffect } from 'react';
import PaymentModal from '@/components/PaymentModal';
import PricingPlans from '@/components/PricingPlans';
import MainNavbar from '@/components/mainNavbar';
import { SubscriptionPlan } from '@/lib/api/payment';
import { paymentService } from '@/lib/api/payment';
import { useAuth } from '@/lib/auth/AuthContextBackend';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SubscriptionsPage() {
    const router = useRouter();
    const auth = useAuth();
    const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan | null>(null);
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [currentPlanId, setCurrentPlanId] = useState<string | null>(null);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [successPlanName, setSuccessPlanName] = useState('');

    // Load the user's current plan on mount
    useEffect(() => {
        const loadCurrentPlan = async () => {
            try {
                const sub = await paymentService.getCurrentSubscription();
                if (sub.success && sub.data?.subscription) {
                    setCurrentPlanId(sub.data.subscription.plan);
                }
            } catch {
                // Not logged in or no subscription — fine, show all plans
            }
        };
        loadCurrentPlan();
    }, []);

    const handleSelectPlan = (plan: SubscriptionPlan) => {
        setSelectedPlan(plan);
        setShowPaymentModal(true);
    };

    const handlePaymentSuccess = (subscription: any) => {
        const planId = subscription?.plan || selectedPlan?.id || '';
        const displayName = planId === 'enterprise' ? 'Pro' :
            planId.charAt(0).toUpperCase() + planId.slice(1);
        setSuccessPlanName(displayName);
        setPaymentSuccess(true);
        setShowPaymentModal(false);
        setSelectedPlan(null);
        setCurrentPlanId(planId);
    };

    const handlePaymentError = (error: string) => {
        console.error('Payment error:', error);
        // Keep modal open so user can see the error state
    };

    if (paymentSuccess) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex flex-col">
                <MainNavbar />
                <div className="flex-1 flex items-center justify-center px-4 py-16">
                    <div className="max-w-md w-full text-center">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-once">
                            <CheckCircle2 className="w-10 h-10 text-green-500" />
                        </div>
                        <h1 className="text-3xl font-black text-slate-800 mb-3">
                            You're subscribed! 🎉
                        </h1>
                        <p className="text-slate-600 mb-2 text-lg">
                            Your <span className="font-bold text-green-600">{successPlanName} Plan</span> is now active.
                        </p>
                        <p className="text-slate-500 text-sm mb-8">
                            All features for your plan have been unlocked. Start building your resume or browsing jobs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <button
                                onClick={() => router.push('/resume-builder')}
                                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
                            >
                                Build Resume <ArrowRight className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => router.push('/dashboard')}
                                className="px-6 py-3 border-2 border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-all"
                            >
                                Go to Dashboard
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            <MainNavbar />

            <main className="max-w-6xl mx-auto px-4 py-12 md:py-20">
                {/* Hero Header */}
                <div className="text-center mb-14">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-xs font-bold uppercase tracking-widest mb-5">
                        ✦ Subscription Plans
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-4">
                        Choose the plan that fits
                        <br />
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            your career goals
                        </span>
                    </h1>
                    <p className="text-slate-500 text-lg max-w-xl mx-auto">
                        Start with Basic and upgrade anytime. All plans include 30 days of access.
                    </p>
                </div>

                {/* Pricing Plans */}
                <PricingPlans
                    onSelectPlan={handleSelectPlan}
                    currentPlanId={currentPlanId}
                />

                {/* Trust indicators */}
                <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-slate-500">
                    <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Secure Cashfree Payments
                    </span>
                    <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Instant Activation
                    </span>
                    <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        30-Day Access
                    </span>
                    <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Cancel Anytime
                    </span>
                </div>
            </main>

            {/* Payment Modal */}
            {selectedPlan && (
                <PaymentModal
                    isOpen={showPaymentModal}
                    onClose={() => {
                        setShowPaymentModal(false);
                        setSelectedPlan(null);
                    }}
                    plan={selectedPlan}
                    onSuccess={handlePaymentSuccess}
                    onError={handlePaymentError}
                />
            )}
        </div>
    );
}