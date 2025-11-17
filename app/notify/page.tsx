'use client';

import MainNavbar from '@/components/mainNavbar';
import PaymentModal from '@/components/PaymentModal';
import SubscriptionStatus from '@/components/SubscriptionStatus';
import { paymentService } from '@/lib/api/payment';
import {
    Bell,
    CheckCircle,
    Crown,
    Gift,
    Mail,
    MessageCircle,
    Smartphone,
    Star,
    TrendingUp,
    Zap
} from 'lucide-react';
import { useEffect, useState } from 'react';

const notificationTypes = [
    {
        icon: '💼',
        title: 'Job Alerts',
        description: 'Get notified about new job opportunities matching your skills',
        frequency: 'Real-time',
        color: 'text-blue-600',
    },
    {
        icon: '🎯',
        title: 'Interview Tips',
        description: 'Weekly interview preparation tips and success strategies',
        frequency: 'Weekly',
        color: 'text-teal-600',
    },
    {
        icon: '📚',
        title: 'Learning Resources',
        description: 'New courses, tutorials, and skill development content',
        frequency: 'Bi-weekly',
        color: 'text-purple-600',
    },
    {
        icon: '🚀',
        title: 'Career Updates',
        description: 'Industry trends, salary reports, and career guidance',
        frequency: 'Monthly',
        color: 'text-orange-600',
    },
];

const premiumFeatures = [
    {
        icon: Crown,
        title: 'Priority Job Alerts',
        description: 'Get notified 24 hours before jobs go public',
    },
    {
        icon: Zap,
        title: 'Instant Notifications',
        description: 'Real-time alerts via WhatsApp and SMS',
    },
    {
        icon: Star,
        title: 'Personalized Recommendations',
        description: 'AI-powered job matching based on your profile',
    },
    {
        icon: Gift,
        title: 'Exclusive Content',
        description: 'Access to premium resources and insider tips',
    },
];

const defaultPricingPlans = [
    {
        id: 'basic',
        name: 'Free',
        price: 0,
        period: 'forever',
        features: ['Basic job alerts', 'Weekly newsletter', 'Community access', 'Basic resources'],
        buttonText: 'Get Started',
        popular: false,
    },
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
            'Interview prep calls',
        ],
        buttonText: 'Start Premium',
        popular: true,
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
            'Custom job search strategy',
        ],
        buttonText: 'Go Pro',
        popular: false,
    },
];

const notifyTestimonials = [
    {
        id: 1,
        name: 'Rohit Sharma',
        company: 'Software Engineer at Flipkart',
        quote: 'NotifyX helped me land my dream job! Got the alert 2 hours before it was posted publicly.',
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
        tag: '⚡ Priority Alert'
    },
    {
        id: 2,
        name: 'Priya Patel',
        company: 'Product Manager at Zomato',
        quote: 'The personalized job matching is incredible. Every alert is relevant to my skills and interests.',
        image: 'https://randomuser.me/api/portraits/women/2.jpg',
        tag: '🎯 Smart Matching'
    },
    {
        id: 3,
        name: 'Arjun Kumar',
        company: 'Data Scientist at Swiggy',
        quote: 'Premium notifications gave me a competitive edge. Worth every penny!',
        image: 'https://randomuser.me/api/portraits/men/3.jpg',
        tag: ' Premium User'
    },
    {
        id: 4,
        name: 'Neha Gupta',
        company: 'Frontend Developer at Razorpay',
        quote: 'Real-time alerts helped me apply within minutes. Got the job before anyone else!',
        image: 'https://randomuser.me/api/portraits/women/4.jpg',
        tag: '⚡ Instant Alert'
    },
    {
        id: 5,
        name: 'Vikram Singh',
        company: 'Backend Engineer at Paytm',
        quote: 'The interview tips and resources made all the difference in my preparation.',
        image: 'https://randomuser.me/api/portraits/men/5.jpg',
        tag: '📚 Learning Hub'
    }
];

export default function NotifyPage() {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [preferences, setPreferences] = useState({
        jobAlerts: true,
        interviewTips: true,
        learningResources: true,
        careerUpdates: true,
    });

    const [pricingPlans, setPricingPlans] = useState(defaultPricingPlans);
    const [currentSubscription, setCurrentSubscription] = useState<{
        id: string;
        plan: string;
        status: string;
        expiresAt: string;
        features: string[];
    } | null>(null);
    const [isLoadingPlans, setIsLoadingPlans] = useState(true);
    const [isLoadingSubscription, setIsLoadingSubscription] = useState(true);
    const [paymentModal, setPaymentModal] = useState<{
        isOpen: boolean;
        plan: any;
    }>({ isOpen: false, plan: null });

    useEffect(() => {
        loadSubscriptionData();
    }, []);

    const loadSubscriptionData = async () => {
        try {
            setIsLoadingPlans(true);
            const plansResponse = await paymentService.getSubscriptionPlans();
            if (plansResponse.success && plansResponse.data?.plans) {
                const apiPlans = plansResponse.data.plans.map(plan => ({
                    id: plan.id,
                    name: plan.name,
                    price: plan.price,
                    period: plan.duration === 999999 ? 'forever' : 'month',
                    features: plan.features,
                    buttonText: plan.id === 'basic' ? 'Get Started' : 
                               plan.id === 'premium' ? 'Start Premium' : 'Go Pro',
                    popular: plan.id === 'premium'
                }));
                setPricingPlans(apiPlans);
            }

            setIsLoadingSubscription(true);
            const subscriptionResponse = await paymentService.getCurrentSubscription();
            if (subscriptionResponse.success && subscriptionResponse.data?.subscription) {
                setCurrentSubscription(subscriptionResponse.data.subscription);
            }
        } catch (error) {
            console.error('Failed to load subscription data:', error);
        } finally {
            setIsLoadingPlans(false);
            setIsLoadingSubscription(false);
        }
    };

    useEffect(() => {
        if (typeof window === 'undefined') return;
        
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            @keyframes ring {
                0%, 100% { transform: rotate(0deg); }
                25% { transform: rotate(10deg); }
                75% { transform: rotate(-10deg); }
            }
            @keyframes blob {
                0% { transform: translate(0px, 0px) scale(1); }
                33% { transform: translate(30px, -50px) scale(1.1); }
                66% { transform: translate(-20px, 20px) scale(0.9); }
                100% { transform: translate(0px, 0px) scale(1); }
            }
            @keyframes shine {
                from { transform: translateX(-100%); }
                to { transform: translateX(100%); }
            }
            .animate-scroll { animation: scroll 40s linear infinite; }
            .animate-blob { animation: blob 7s infinite; }
            .animate-shine { animation: shine 2s infinite; }
            .animation-delay-2000 { animation-delay: 2s; }
            .animation-delay-4000 { animation-delay: 4s; }
            .pause-animation { animation-play-state: paused; }
        `;
        document.head.appendChild(style);
        return () => {
            try {
                if (style && style.parentNode) document.head.removeChild(style);
            } catch (error) {}
        };
    }, []);

    const handleSubscribe = async (planId: string) => {
        if (planId === 'basic' || planId === 'free') {
            if (!email || !email.includes('@')) {
                setSubscriptionStatus('error');
                setTimeout(() => setSubscriptionStatus('idle'), 3000);
                return;
            }

            setIsSubmitting(true);
            setSubscriptionStatus('idle');

            try {
                const response = await fetch('/api/subscribe', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, preferences }),
                });

                const data = await response.json();
                if (!response.ok) throw new Error(data.error || 'Subscription failed');

                setSubscriptionStatus('success');
                setEmail('');
                setTimeout(() => setSubscriptionStatus('idle'), 5000);
            } catch (error) {
                setSubscriptionStatus('error');
                setTimeout(() => setSubscriptionStatus('idle'), 3000);
            } finally {
                setIsSubmitting(false);
            }
        } else {
            const selectedPlan = pricingPlans.find(p => p.id === planId);
            if (selectedPlan) setPaymentModal({ isOpen: true, plan: selectedPlan });
        }
    };

    const handlePaymentSuccess = (subscription: any) => {
        console.log('Payment successful:', subscription);
        setCurrentSubscription(subscription);
        setPaymentModal({ isOpen: false, plan: null });
        setSubscriptionStatus('success');
        setTimeout(() => setSubscriptionStatus('idle'), 5000);
    };

    const handlePaymentError = (error: string) => {
        console.error('Payment error:', error);
        setSubscriptionStatus('error');
        setTimeout(() => setSubscriptionStatus('idle'), 5000);
    };

    const Logo = () => (
        <svg className="h-8 w-auto" viewBox="0 0 140 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 5L20 15L10 25" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M30 5H40L50 25H40" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <text x="60" y="22" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="#ffffff">X Careers</text>
        </svg>
    );

    return (
        <div className="min-h-screen bg-white">
            <MainNavbar />
            <main className="pt-0">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-[hsl(196,80%,45%)] via-[hsl(210,70%,45%)] to-[hsl(175,70%,41%)] text-white py-24 relative overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-30 rounded-full blur-3xl animate-blob"></div>
                        <div className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-40 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
                        <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-40 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
                    </div>
                    <div className="w-full relative z-10">
                        <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg text-white">
                                <Bell className="h-4 w-4 text-yellow-300" />
                                NotifyX
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-white">
                                Stay Ahead with
                                <span className="block mt-2 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                                    NotifyX
                                </span>
                            </h1>
                            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                                Experience the ultimate in career notifications. Get exclusive access to priority alerts and personalized insights.
                            </p>

                            {/* Current Subscription Status */}
                            {!isLoadingSubscription && (
                                <div className="max-w-md mx-auto mb-8">
                                    <SubscriptionStatus 
                                        onUpgrade={() => {
                                            const premiumPlan = pricingPlans.find(p => p.id === 'premium');
                                            if (premiumPlan) setPaymentModal({ isOpen: true, plan: premiumPlan });
                                        }}
                                    />
                                </div>
                            )}

                            {/* Quick Subscribe Form */}
                            <div className="max-w-2xl mx-auto mb-16">
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
                                    <h3 className="text-2xl font-bold mb-6 text-center text-white">Get Notifications</h3>
                                    {subscriptionStatus === 'success' && (
                                        <div className="mb-6 p-4 bg-green-500/20 border border-green-400/30 rounded-2xl text-green-100 text-center">
                                            <div className="flex items-center justify-center gap-2">
                                                <CheckCircle className="w-5 h-5" />
                                                <span className="font-semibold">Success! Check your email.</span>
                                            </div>
                                        </div>
                                    )}
                                    {subscriptionStatus === 'error' && (
                                        <div className="mb-6 p-4 bg-red-500/20 border border-red-400/30 rounded-2xl text-red-100 text-center">
                                            <span className="font-semibold">Please enter a valid email address.</span>
                                        </div>
                                    )}
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            onKeyPress={(e) => e.key === 'Enter' && handleSubscribe('free')}
                                            disabled={isSubmitting}
                                            className="flex-1 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/50 bg-white text-gray-800 placeholder-gray-500 text-lg disabled:opacity-50"
                                        />
                                        <button
                                            onClick={() => handleSubscribe('free')}
                                            disabled={isSubmitting || !email}
                                            className="px-8 py-4 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] text-white rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-xl disabled:opacity-50 border border-white/20"
                                        >
                                            {isSubmitting ? (
                                                <span className="animate-pulse">Processing...</span>
                                            ) : (
                                                <>
                                                    <Bell className="inline h-5 w-5 mr-2" />
                                                    Notify
                                                </>
                                            )}
                                        </button>
                                    </div>
                                    <p className="text-sm mt-4 text-center text-blue-100">No spam. Unsubscribe anytime.</p>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                                {[
                                    { val: '50K+', label: 'Active Subscribers', color: 'text-yellow-300' },
                                    { val: '1000+', label: 'Jobs Daily', color: 'text-white' },
                                    { val: '95%', label: 'Success Rate', color: 'text-green-300' },
                                    { val: '24/7', label: 'Monitoring', color: 'text-orange-300' }
                                ].map((stat, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl hover:bg-white/20 transition-all duration-300">
                                        <div className={`text-3xl font-bold ${stat.color}`}>{stat.val}</div>
                                        <div className="text-sm font-medium text-blue-100">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 px-4 bg-[hsl(210,50%,98%)]">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-800">Premium Features</h2>
                            <p className="text-xl max-w-2xl mx-auto text-gray-600">Exclusive features designed for career success</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {notificationTypes.map((type, index) => (
                                <div key={index} className="bg-white border border-[hsl(210,30%,95%)] rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3">
                                    <div className="w-20 h-20 bg-gradient-to-r from-[hsl(210,60%,92%)] to-[hsl(196,70%,90%)] rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto">
                                        {type.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-center text-gray-800">{type.title}</h3>
                                    <p className="text-center mb-4 leading-relaxed text-gray-600">{type.description}</p>
                                    <div className="text-center">
                                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-blue-50 text-blue-800 border border-blue-100">
                                            {type.frequency}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section className="py-20 px-4 bg-gradient-to-b from-white to-[hsl(196,60%,95%)]">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-800">Premium Plans</h2>
                            <p className="text-xl max-w-2xl mx-auto text-gray-600">Experience the ultimate in career notifications</p>
                        </div>
                        {isLoadingPlans ? (
                            <div className="grid md:grid-cols-3 gap-8">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="bg-white rounded-3xl p-8 border border-gray-200 animate-pulse">
                                        <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
                                        <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-6"></div>
                                        <div className="h-12 bg-gray-200 rounded"></div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-3 gap-8">
                                {pricingPlans.map((plan, index) => (
                                    <div key={index} className={`bg-white rounded-3xl p-8 border transition-all duration-500 transform hover:-translate-y-3 ${
                                        plan.popular 
                                            ? 'border-[hsl(196,80%,45%)] shadow-2xl scale-105 relative z-10 border-2' 
                                            : 'border-gray-200 hover:shadow-xl hover:border-[hsl(175,70%,41%)]'
                                    }`}>
                                        {plan.popular && (
                                            <div className="text-center mb-6">
                                                <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold shadow-lg bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white">Most Popular</span>
                                            </div>
                                        )}
                                        <div className="text-center mb-8">
                                            <h3 className="text-2xl font-bold mb-3 text-gray-800">{plan.name}</h3>
                                            <div className="text-4xl font-bold mb-2 text-[hsl(196,80%,45%)]">
                                                ₹{plan.price}
                                                <span className="text-lg text-gray-500">/{plan.period}</span>
                                            </div>
                                        </div>
                                        <div className="space-y-4 mb-8">
                                            {plan.features.map((feature, featureIndex) => (
                                                <div key={featureIndex} className="flex items-center gap-3">
                                                    <CheckCircle className="h-5 w-5 text-[hsl(175,70%,41%)] flex-shrink-0" />
                                                    <span className="text-gray-600 text-sm">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <button
                                            onClick={() => handleSubscribe(plan.id)}
                                            className={`w-full px-6 py-4 rounded-2xl font-semibold transition-all transform hover:scale-105 ${
                                                plan.popular
                                                    ? 'bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white hover:shadow-xl'
                                                    : 'border-2 border-[hsl(196,80%,45%)] text-[hsl(196,80%,45%)] hover:bg-[hsl(196,80%,45%)]/10'
                                            }`}
                                        >
                                            {plan.buttonText}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* Additional Premium Features */}
                <section className="py-20 px-4 bg-gradient-to-r from-[hsl(196,80%,45%)] via-[hsl(210,70%,45%)] to-[hsl(175,70%,41%)] text-white relative overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden opacity-20">
                         <div className="absolute top-0 left-1/4 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-30 rounded-full blur-3xl animate-blob"></div>
                         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-30 rounded-full blur-3xl animate-blob"></div>
                    </div>
                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">Why Go Premium?</h2>
                            <p className="text-xl max-w-2xl mx-auto text-blue-100">Unlock the full potential of NotifyX</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {premiumFeatures.map((feature, index) => (
                                <div key={index} className="bg-white/10 border border-white/20 rounded-3xl p-8 shadow-xl hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-3 backdrop-blur-sm">
                                    <feature.icon className="h-14 w-14 mb-6 mx-auto text-yellow-300" />
                                    <h3 className="text-xl font-bold mb-3 text-center text-white">{feature.title}</h3>
                                    <p className="text-center text-sm leading-relaxed text-blue-50">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Preferences Section */}
                <section className="py-20 px-4 bg-[hsl(210,50%,98%)]">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white border border-blue-100 rounded-3xl p-8 shadow-lg">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold mb-4 text-gray-800">Premium Preferences</h2>
                                <p className="text-gray-600">Personalize your notification experience</p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h3 className="font-bold text-gray-800 text-lg">Notification Types</h3>
                                    {Object.entries(preferences).map(([key, value]) => (
                                        <div key={key} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                                            <span className="text-gray-700 capitalize font-medium">✅ {key.replace(/([A-Z])/g, ' $1')}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-4">
                                    <h3 className="font-bold text-gray-800 text-lg">Delivery Methods</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                                            <Mail className="h-5 w-5 text-blue-600" />
                                            <span className="text-gray-800 font-medium">Email Notifications</span>
                                        </div>
                                        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl opacity-60 cursor-not-allowed border border-gray-200">
                                            <MessageCircle className="h-5 w-5 text-gray-400" />
                                            <span className="text-gray-500">WhatsApp Alerts (Premium)</span>
                                            <span className="ml-auto text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full font-medium">Coming Soon</span>
                                        </div>
                                        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl opacity-60 cursor-not-allowed border border-gray-200">
                                            <Smartphone className="h-5 w-5 text-gray-400" />
                                            <span className="text-gray-500">SMS Notifications (Premium)</span>
                                            <span className="ml-auto text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full font-medium">Coming Soon</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Success Stories */}
                <section className="py-20 px-4 bg-gradient-to-r from-[hsl(196,80%,45%)] via-[hsl(210,70%,45%)] to-[hsl(175,70%,41%)] relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]"></div>
                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">Success Stories</h2>
                            <p className="text-xl max-w-2xl mx-auto text-blue-100">Discover how our users achieved career success with NotifyX</p>
                        </div>
                        <div className="relative overflow-hidden py-3">
                            <div className="flex animate-scroll gap-4" style={{ width: `${notifyTestimonials.length * 320}px` }}>
                                {notifyTestimonials.map((testimonial) => (
                                    <div key={testimonial.id} className="bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-md text-gray-800 p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 relative z-10 border border-white/30 w-[300px] h-[220px] flex-shrink-0 flex flex-col">
                                        <div className="flex items-center mb-4">
                                            <div className="relative">
                                                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-3 object-cover border-3 border-blue-100 shadow-md" />
                                                <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                                                    <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-800 text-base">{testimonial.name}</h3>
                                                <p className="text-blue-600 text-xs font-semibold">{testimonial.company}</p>
                                                <div className="flex items-center mt-1">
                                                    <div className="flex text-yellow-400">
                                                        {[...Array(5)].map((_, i) => (
                                                            <svg key={i} className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.835 1.688-1.71 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.874.57-2.01-.197-1.71-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                            </svg>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 italic flex-grow text-sm leading-relaxed">"{testimonial.quote}"</p>
                                        <div className="mt-3 pt-3 border-t border-gray-200">
                                            <div className="flex items-center justify-between text-xs text-gray-500">
                                                <span>✅ Verified Success</span>
                                                <span>{testimonial.tag}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* Duplicate for loop */}
                                {notifyTestimonials.slice(0, 3).map((testimonial) => (
                                    <div key={`duplicate-${testimonial.id}`} className="bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-md text-gray-800 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative z-10 border border-white/30 w-[300px] h-[220px] flex-shrink-0 flex flex-col">
                                        <div className="flex items-center mb-4">
                                            <div className="relative">
                                                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-3 object-cover border-3 border-blue-100 shadow-md" />
                                                <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                                                    <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-800 text-base">{testimonial.name}</h3>
                                                <p className="text-blue-600 text-xs font-semibold">{testimonial.company}</p>
                                                <div className="flex items-center mt-1">
                                                    <div className="flex text-yellow-400">
                                                        {[...Array(5)].map((_, i) => (
                                                            <svg key={i} className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.835 1.688-1.71 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.874.57-2.01-.197-1.71-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                            </svg>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 italic flex-grow text-sm leading-relaxed">"{testimonial.quote}"</p>
                                        <div className="mt-3 pt-3 border-t border-gray-200">
                                            <div className="flex items-center justify-between text-xs text-gray-500">
                                                <span>✅ Verified Success</span>
                                                <span>{testimonial.tag}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20">
                    <div className="w-full">
                        <div className="bg-white p-12 text-[hsl(196,80%,45%)] relative overflow-hidden">
                             <div className="absolute inset-0 overflow-hidden opacity-30">
                                <div className="absolute top-20 left-10 w-72 h-72 bg-[hsl(196,80%,65%)] rounded-full blur-3xl animate-blob animation-delay-4000"></div>
                                <div className="absolute bottom-20 right-10 w-72 h-72 bg-[hsl(175,70%,61%)] rounded-full blur-3xl animate-blob"></div>
                            </div>
                            <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-800">Ready for Premium Success?</h2>
                                <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">Join 35,000+ freshers who have launched their careers with NotifyX</p>
                                <div className="flex justify-center">
                                    <a href="/community" className="px-8 py-4 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] rounded-2xl font-semibold transition-all transform hover:scale-105 shadow-xl">
                                        <TrendingUp className="inline h-6 w-6 mr-3" />
                                        Join Premium Community
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-950 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="mb-6"><Logo /></div>
                            <p className="text-gray-400 mb-4">Helping tech freshers launch their careers with curated opportunities and resources.</p>
                            <div className="flex space-x-4">
                                <a href="https://www.linkedin.com/company/x-careers/" className="text-gray-400 hover:text-white transition-all duration-300" target="_blank" rel="noopener noreferrer">
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                </a>
                                <a href="https://www.instagram.com/x_careers_official?igsh=Z3M3cTJyNndtdDdq" className="text-gray-400 hover:text-white transition-all duration-300" target="_blank" rel="noopener noreferrer">
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                                </a>
                                <a href="https://whatsapp.com/channel/0029Vak7B1WLo4hdCrawMw3i" className="text-gray-400 hover:text-white transition-all duration-300" target="_blank" rel="noopener noreferrer">
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" /></svg>
                                </a>
                                <a href="https://t.me/xcareerconnect" className="text-gray-400 hover:text-white transition-all duration-300" target="_blank" rel="noopener noreferrer">
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Company</h3>
                            <ul className="space-y-3">
                                <li><a href="/about" className="text-gray-400 hover:text-white transition-all duration-300">About Us</a></li>
                                <li><a href="/careers" className="text-gray-400 hover:text-white transition-all duration-300">Careers</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Resources</h3>
                            <ul className="space-y-3">
                                <li><a href="/resume-review" className="text-gray-400 hover:text-white transition-all duration-300">Resume Review</a></li>
                                <li><a href="/blog" className="text-gray-400 hover:text-white transition-all duration-300">Blog</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Legal</h3>
                            <ul className="space-y-3">
                                <li><a href="/privacy-policy" className="text-gray-400 hover:text-white transition-all duration-300">Privacy Policy</a></li>
                                <li><a href="/terms-of-service" className="text-gray-400 hover:text-white transition-all duration-300">Terms of Service</a></li>
                                <li><a href="/refund-policy" className="text-gray-400 hover:text-white transition-all duration-300">Refund Policy</a></li>
                                <li><a href="/shipping-policy" className="text-gray-400 hover:text-white transition-all duration-300">Shipping Policy</a></li>
                                <li><a href="/terms-and-conditions" className="text-gray-400 hover:text-white transition-all duration-300">Terms and Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                        <p className="mb-2">© {new Date().getFullYear()} X Careers. All rights reserved.</p>
                        <p>Built with ❤️ for tech freshers</p>
                    </div>
                </div>
            </footer>
            <PaymentModal isOpen={paymentModal.isOpen} onClose={() => setPaymentModal({ isOpen: false, plan: null })} plan={paymentModal.plan} onSuccess={handlePaymentSuccess} onError={handlePaymentError} />
        </div>
    );
}