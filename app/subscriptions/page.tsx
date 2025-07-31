'use client';

import MainNavbar from '@/components/mainNavbar';
import { Check, Crown, Star } from 'lucide-react';
import { useState } from 'react';

const plans = [
    {
        name: 'Starter',
        price: '₹49',
        period: 'month',
        description: 'Perfect for freshers starting their career journey',
        features: [
            'Prior job alerts',
            'Instant job notifications',
            'Minimal Clean resume builder access',
            'Basic community access',
            'Email support'
        ],
        popular: false,
        color: 'from-blue-500 to-cyan-500'
    },
    {
        name: 'Mid-tier',
        price: '₹79',
        period: 'month',
        description: 'For experienced professionals and advanced users',
        features: [
            'Priority alerts',
            'Real-time notifications',
            'Unlock all resume templates',
            'Advanced community features',
            'Priority customer support',
            'Exclusive content access',
            'Interview preparation resources'
        ],
        popular: true,
        color: 'from-purple-500 to-pink-500'
    }
];

export default function SubscriptionsPage() {
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

    const handlePlanSelection = (planName: string) => {
        setSelectedPlan(planName);
        // Here you would integrate with payment gateway
        console.log('Selected plan:', planName);
        // Redirect to payment or show payment modal
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[hsl(210,50%,98%)] to-[hsl(196,60%,95%)]">
            <MainNavbar />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-[hsl(196,80%,45%)] via-[hsl(210,70%,45%)] to-[hsl(175,70%,41%)] text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Choose Your Plan
                    </h1>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Unlock your career potential with our premium subscription plans. 
                        Get priority access to the best opportunities.
                    </p>
                </div>
            </section>

            {/* Plans Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Subscription Plans
                        </h2>
                        <p className="text-xl text-gray-600">
                            Select the plan that best fits your career goals
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {plans.map((plan, index) => (
                            <div
                                key={plan.name}
                                className={`relative bg-white rounded-2xl shadow-xl border-2 transition-all duration-300 hover:shadow-2xl ${
                                    plan.popular 
                                        ? 'border-purple-200 scale-105' 
                                        : 'border-gray-200 hover:border-blue-200'
                                }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                                            <Star className="h-4 w-4" />
                                            Most Popular
                                        </div>
                                    </div>
                                )}

                                <div className="p-8">
                                    <div className="text-center mb-6">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                            {plan.name}
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            {plan.description}
                                        </p>
                                        <div className="mb-6">
                                            <span className="text-4xl font-bold text-gray-800">
                                                {plan.price}
                                            </span>
                                            <span className="text-gray-600">/{plan.period}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-4 mb-8">
                                        {plan.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-center gap-3">
                                                <div className="flex-shrink-0">
                                                    <Check className="h-5 w-5 text-green-500" />
                                                </div>
                                                <span className="text-gray-700">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => handlePlanSelection(plan.name)}
                                        className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                                            plan.popular
                                                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                                                : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600'
                                        }`}
                                    >
                                        {plan.popular ? (
                                            <div className="flex items-center justify-center gap-2">
                                                <Crown className="h-5 w-5" />
                                                Get Started
                                            </div>
                                        ) : (
                                            'Get Started'
                                        )}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Info */}
                    <div className="mt-12 text-center">
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                What's Included in All Plans?
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-green-500" />
                                        <span>Job matching algorithm</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-green-500" />
                                        <span>ATS-friendly resume templates</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-green-500" />
                                        <span>Community access</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-green-500" />
                                        <span>Email notifications</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-green-500" />
                                        <span>Basic career resources</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-green-500" />
                                        <span>Cancel anytime</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
} 