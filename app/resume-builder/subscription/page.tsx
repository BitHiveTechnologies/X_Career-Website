'use client';

import MainNavbar from '@/components/mainNavbar';
import { usePremiumTheme } from '@/hooks/usePremiumTheme';
import { useAuth } from '@/lib/auth/AuthContextBackend';
import { Check, Star } from 'lucide-react';
import { useState } from 'react';

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
            'Resume Writing Tips',
        ],
        buttonText: 'Current Plan',
        popular: false,
        disabled: true,
        color: 'border-gray-200',
        bgColor: 'bg-gray-50',
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
            'Custom Color Schemes',
            'Advanced Formatting',
        ],
        buttonText: 'Upgrade to Starter',
        popular: true,
        disabled: false,
        color: 'border-blue-200',
        bgColor: 'bg-blue-50',
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
            'AI-Powered Suggestions',
            'Multiple Resume Versions',
        ],
        buttonText: 'Upgrade to Premium',
        popular: false,
        disabled: false,
        color: 'border-purple-200',
        bgColor: 'bg-purple-50',
    },
];

const testimonials = [
    {
        name: 'Priya Sharma',
        role: 'Software Engineer',
        company: 'Google',
        quote: 'The premium templates helped me stand out in a competitive market. Got my dream job!',
        rating: 5,
        plan: 'Premium',
    },
    {
        name: 'Rahul Patel',
        role: 'Product Manager',
        company: 'Amazon',
        quote: 'Starter plan gave me access to professional templates. Highly recommended!',
        rating: 5,
        plan: 'Starter',
    },
    {
        name: 'Anjali Singh',
        role: 'Data Scientist',
        company: 'Microsoft',
        quote: 'The resume builder is intuitive and the templates are ATS-friendly. Perfect!',
        rating: 5,
        plan: 'Premium',
    },
];

export default function ResumeBuilderSubscriptionPage() {
    const { getUserSubscription, updateSubscription } = useAuth();
    const { isPremium, premiumColors } = usePremiumTheme();
    const [isUpgrading, setIsUpgrading] = useState(false);
    const [upgradeStatus, setUpgradeStatus] = useState<'idle' | 'success' | 'error'>('idle');
    
    const currentPlan = getUserSubscription();

    const handleUpgrade = async (planId: 'starter' | 'premium') => {
        if (planId === currentPlan) return;

        setIsUpgrading(true);
        setUpgradeStatus('idle');

        try {
            const result = await updateSubscription(planId);
            
            if (result.success) {
                setUpgradeStatus('success');
                setTimeout(() => {
                    setUpgradeStatus('idle');
                }, 3000);
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

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
            <MainNavbar />

            {/* Hero Section */}
            <section className={`${isPremium 
                ? 'bg-premium-navy' 
                : 'bg-gradient-to-r from-[hsl(196,80%,45%)] via-[hsl(210,70%,45%)] to-[hsl(175,70%,41%)]'
            } text-white py-16`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        {isPremium ? '👑 Royal Premium Resume Builder' : 'Resume Builder Subscription'}
                    </h1>
                    <p className={`text-xl mb-8 max-w-2xl mx-auto ${
                        isPremium ? 'text-premium-ivory' : 'text-blue-100'
                    }`}>
                        {isPremium 
                            ? 'Experience the ultimate in resume building with our exclusive Royal Tech Luxe theme and premium templates.'
                            : 'Choose the perfect plan for your resume building needs. Unlock premium templates and features.'
                        }
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <div className={`flex items-center px-4 py-2 rounded-full ${
                            isPremium ? 'bg-premium-gold/20 border border-premium-gold/30' : 'bg-white/20'
                        }`}>
                            <span className="mr-2">✨</span>
                            {isPremium ? 'Royal Templates' : 'Professional Templates'}
                        </div>
                        <div className={`flex items-center px-4 py-2 rounded-full ${
                            isPremium ? 'bg-premium-gold/20 border border-premium-gold/30' : 'bg-white/20'
                        }`}>
                            <span className="mr-2">📱</span>
                            ATS-Friendly
                        </div>
                        <div className={`flex items-center px-4 py-2 rounded-full ${
                            isPremium ? 'bg-premium-gold/20 border border-premium-gold/30' : 'bg-white/20'
                        }`}>
                            <span className="mr-2">⚡</span>
                            {isPremium ? 'Premium Download' : 'Instant Download'}
                        </div>
                    </div>
                </div>
            </section>

            {/* Plans Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className={`text-3xl font-bold mb-4 ${isPremium ? 'text-premium-navy' : 'text-gray-900'}`}>
                            {isPremium ? '👑 Royal Premium Plans' : 'Choose Your Plan'}
                        </h2>
                        <p className={`text-lg max-w-2xl mx-auto ${isPremium ? 'text-premium-navy/80' : 'text-gray-600'}`}>
                            {isPremium 
                                ? 'Experience the ultimate in resume building with our exclusive Royal Tech Luxe theme.'
                                : 'Start with our free plan and upgrade as you need more features and templates.'
                            }
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {subscriptionPlans.map((plan) => {
                            const isCurrentPlan = plan.id === currentPlan;
                            const isRecommended = plan.popular;
                            
                            return (
                                <div
                                    key={plan.id}
                                    className={`relative border-2 rounded-xl p-8 transition-all duration-200 ${
                                        isCurrentPlan
                                            ? 'border-blue-500 bg-blue-50'
                                            : isRecommended
                                            ? isPremium 
                                                ? 'border-premium-gold bg-gradient-to-br from-premium-gold/10 to-premium-emerald/10'
                                                : 'border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50'
                                            : plan.color + ' ' + plan.bgColor
                                    }`}
                                >
                                    {isRecommended && (
                                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                            <span className={`px-4 py-1 rounded-full text-sm font-medium ${
                                                isPremium 
                                                    ? 'bg-gradient-to-r from-premium-gold to-premium-emerald text-premium-navy'
                                                    : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                                            }`}>
                                                {isPremium ? '👑 Royal Choice' : 'Most Popular'}
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

                                    <div className="text-center mb-8">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                            {plan.name}
                                        </h3>
                                        <div className="mb-4">
                                            <span className="text-4xl font-bold text-gray-900">
                                                {plan.price}
                                            </span>
                                            <span className="text-gray-600">/{plan.period}</span>
                                        </div>
                                        <p className="text-gray-600">{plan.description}</p>
                                    </div>

                                    <div className="space-y-4 mb-8">
                                        {plan.features.map((feature, index) => (
                                            <div key={index} className="flex items-center space-x-3">
                                                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                                <span className="text-gray-700">{feature}</span>
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
                                                ? isPremium 
                                                    ? 'bg-gradient-to-r from-premium-gold to-premium-emerald text-premium-navy hover:from-premium-gold-light hover:to-premium-emerald-light transform hover:scale-105'
                                                    : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transform hover:scale-105'
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
                        <div className="max-w-md mx-auto p-4 bg-green-50 border border-green-200 rounded-lg">
                            <div className="flex items-center space-x-2">
                                <Check className="w-5 h-5 text-green-500" />
                                <span className="text-green-800 font-medium">
                                    Subscription upgraded successfully!
                                </span>
                            </div>
                        </div>
                    )}

                    {upgradeStatus === 'error' && (
                        <div className="max-w-md mx-auto p-4 bg-red-50 border border-red-200 rounded-lg">
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
                </div>
            </section>

            {/* Testimonials Section */}
            <section className={`py-16 ${isPremium ? 'bg-premium-platinum' : 'bg-white'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className={`text-3xl font-bold mb-4 ${isPremium ? 'text-premium-navy' : 'text-gray-900'}`}>
                            {isPremium ? '👑 Royal Premium Testimonials' : 'What Our Users Say'}
                        </h2>
                        <p className={`text-lg ${isPremium ? 'text-premium-navy/80' : 'text-gray-600'}`}>
                            {isPremium 
                                ? 'Hear from our premium users who have experienced the Royal Tech Luxe difference.'
                                : 'Join thousands of professionals who have landed their dream jobs with our resume builder.'
                            }
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg p-6">
                                <div className="flex items-center mb-4">
                                    <div className="flex text-yellow-400">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-current" />
                                        ))}
                                    </div>
                                    <span className="ml-2 text-sm text-gray-600">{testimonial.plan} Plan</span>
                                </div>
                                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div className="ml-3">
                                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                        <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className={`py-16 ${isPremium ? 'bg-premium-navy/5' : ''}`}>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className={`text-3xl font-bold mb-4 ${isPremium ? 'text-premium-navy' : 'text-gray-900'}`}>
                            {isPremium ? '👑 Royal Premium FAQ' : 'Frequently Asked Questions'}
                        </h2>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-lg shadow-sm border p-6">
                            <h3 className="font-semibold text-gray-900 mb-2">
                                Can I cancel my subscription anytime?
                            </h3>
                            <p className="text-gray-600">
                                Yes, you can cancel your subscription at any time. You'll continue to have access to your current plan until the end of your billing period.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm border p-6">
                            <h3 className="font-semibold text-gray-900 mb-2">
                                What's the difference between Starter and Premium plans?
                            </h3>
                            <p className="text-gray-600">
                                Starter plan gives you access to the Modern Professional template designed for fresher interns, while Premium plan includes Creative Design & Executive templates designed for experienced candidates.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm border p-6">
                            <h3 className="font-semibold text-gray-900 mb-2">
                                Are the templates ATS-friendly?
                            </h3>
                            <p className="text-gray-600">
                                Yes, all our templates are optimized for Applicant Tracking Systems (ATS) to ensure your resume gets through automated screening.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm border p-6">
                            <h3 className="font-semibold text-gray-900 mb-2">
                                Can I download my resume as PDF?
                            </h3>
                            <p className="text-gray-600">
                                Yes, all plans include PDF download functionality. Premium plans offer unlimited downloads and additional format options.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
} 