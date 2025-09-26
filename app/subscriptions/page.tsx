'use client';

import { useState } from 'react';
// Container component - using div with max-width instead
import { PaymentModal } from '@/components/PaymentModal';
import { SubscriptionManager } from '@/components/SubscriptionManager';
import { SubscriptionPlan } from '@/lib/api/payment';

export default function SubscriptionsPage() {
    const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan | null>(null);
    const [showPaymentModal, setShowPaymentModal] = useState(false);

    const handleUpgrade = (plan: SubscriptionPlan) => {
        setSelectedPlan(plan);
        setShowPaymentModal(true);
    };

    const handlePaymentSuccess = (subscription: any) => {
        console.log('Payment successful:', subscription);
        setShowPaymentModal(false);
        setSelectedPlan(null);
        // You can add a success notification here
    };

    const handlePaymentError = (error: string) => {
        console.error('Payment error:', error);
        // You can add an error notification here
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[hsl(210,50%,98%)] to-[hsl(196,60%,95%)]">
            <div className="container mx-auto px-4 py-8">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Subscription Plans
                    </h1>
                    <p className="text-xl text-gray-600">
                        Choose the perfect plan for your career journey
                    </p>
                </div>

                <SubscriptionManager onUpgrade={handleUpgrade} />

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
        </div>
    );
} 