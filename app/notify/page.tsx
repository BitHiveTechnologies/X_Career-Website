'use client';

import MainNavbar from '@/components/mainNavbar';
import PaymentModal from '@/components/PaymentModal';
import SubscriptionStatus from '@/components/SubscriptionStatus';

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
import { subscriptionService, SubscriptionPlan, UserSubscription } from '@/lib/api/subscriptionService';

const notificationTypes = [
    {
        icon: '💼',
        title: 'Job Alerts',
        description: 'Get notified about new job opportunities matching your skills',
        frequency: 'Real-time',
        color: 'from-blue-600 to-indigo-600',
    },
    {
        icon: '🎯',
        title: 'Interview Tips',
        description: 'Weekly interview preparation tips and success strategies',
        frequency: 'Weekly',
        color: 'from-emerald-600 to-teal-600',
    },
    {
        icon: '📚',
        title: 'Learning Resources',
        description: 'New courses, tutorials, and skill development content',
        frequency: 'Bi-weekly',
        color: 'from-purple-600 to-violet-600',
    },
    {
        icon: '🚀',
        title: 'Career Updates',
        description: 'Industry trends, salary reports, and career guidance',
        frequency: 'Monthly',
        color: 'from-orange-600 to-red-600',
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

// Default pricing plans (will be replaced by API data)
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

// NotifyX testimonials data
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

    // Subscription state
    const [pricingPlans, setPricingPlans] = useState(defaultPricingPlans);
    const [currentSubscription, setCurrentSubscription] = useState<UserSubscription | null>(null);
    const [isLoadingPlans, setIsLoadingPlans] = useState(true);
    const [isLoadingSubscription, setIsLoadingSubscription] = useState(true);
    const [paymentModal, setPaymentModal] = useState<{
        isOpen: boolean;
        plan: any;
    }>({ isOpen: false, plan: null });

    // Load subscription plans and current subscription
    useEffect(() => {
        loadSubscriptionData();
    }, []);

    const loadSubscriptionData = async () => {
        try {
            // Load subscription plans
            setIsLoadingPlans(true);
            const plansResponse = await subscriptionService.getPlans();
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

            // Load current subscription
            setIsLoadingSubscription(true);
            const subscriptionResponse = await subscriptionService.getCurrentSubscription();
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

    // Add custom CSS for animations
    useEffect(() => {
        if (typeof window === 'undefined') return; // SSR safety
        
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
            .animate-scroll {
                animation: scroll 40s linear infinite;
            }
            .pause-animation {
                animation-play-state: paused;
            }
        `;
        
        document.head.appendChild(style);
        
        return () => {
            try {
                if (style && style.parentNode) {
                    document.head.removeChild(style);
                }
            } catch (error) {
                // Style already removed, ignore
            }
        };
    }, []);

    const handleSubscribe = async (planId: string) => {
        // Handle free plan subscription (email notification)
        if (planId === 'basic' || planId === 'free') {
            if (!email || !email.includes('@')) {
                setSubscriptionStatus('error');
                setTimeout(() => setSubscriptionStatus('idle'), 3000);
                return;
            }

            setIsSubmitting(true);
            setSubscriptionStatus('idle');

            try {
                // Call the API to subscribe
                const response = await fetch('/api/subscribe', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email,
                        preferences
                    }),
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.error || 'Subscription failed');
                }

                setSubscriptionStatus('success');
                setEmail(''); // Clear the form
                
                // Reset success message after 5 seconds
                setTimeout(() => setSubscriptionStatus('idle'), 5000);
                
            } catch (error) {
                setSubscriptionStatus('error');
                setTimeout(() => setSubscriptionStatus('idle'), 3000);
            } finally {
                setIsSubmitting(false);
            }
        } else {
            // Handle paid plan subscription (open payment modal)
            const selectedPlan = pricingPlans.find(p => p.id === planId);
            if (selectedPlan) {
                setPaymentModal({ isOpen: true, plan: selectedPlan });
            }
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

    const sendWelcomeNotification = async (userEmail: string) => {
        // This would typically call your backend API
        
        // Simulate email service call
        const welcomeEmail = {
            to: userEmail,
            subject: '🎉 Welcome to NotifyX - Your Career Success Journey Begins!',
            template: 'welcome',
            data: {
                name: userEmail.split('@')[0],
                preferences: preferences,
                unsubscribeLink: `https://xcareers.com/unsubscribe?email=${encodeURIComponent(userEmail)}`
            }
        };
        
        // In a real implementation, this would be sent to your email service
    };

    const sendJobAlert = async (userEmail: string) => {
        // This would typically call your backend API
        
        // Simulate immediate job alert
        const jobAlert = {
            to: userEmail,
            subject: '🚀 Hot Job Alert: Software Engineer at Google (Apply Now!)',
            template: 'job-alert',
            data: {
                company: 'Google',
                position: 'Software Engineer',
                location: 'Mountain View, CA',
                salary: '$150K - $200K',
                urgency: 'High Priority',
                applyLink: 'https://careers.google.com/jobs/12345',
                similarJobs: [
                    { company: 'Microsoft', position: 'Senior Developer', location: 'Seattle, WA' },
                    { company: 'Amazon', position: 'Full Stack Engineer', location: 'Seattle, WA' }
                ]
            }
        };
        
        // In a real implementation, this would be sent to your email service
    };

    const handlePreferenceChange = (key: string) => {
        setPreferences((prev) => ({
            ...prev,
            [key]: !prev[key as keyof typeof prev],
        }));
    };

    const Logo = () => (
        <svg className="h-8 w-auto" viewBox="0 0 140 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 5L20 15L10 25" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M30 5H40L50 25H40" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <text x="60" y="22" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="#ffffff">X Careers</text>
        </svg>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-notify-deep-black via-notify-deep-black to-notify-deep-black">
            <MainNavbar />
            
            {/* Main Content */}
            <main className="pt-0">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-notify-deep-black via-notify-deep-black to-notify-deep-black text-notify-pure-white py-24 relative overflow-hidden">
                    {/* Elegant background pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,201,77,0.1),transparent_50%)]"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
                    <div className="w-full">
                        <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="inline-flex items-center gap-2 bg-notify-golden-yellow/20 backdrop-blur-md border-notify-golden-yellow/40 px-6 py-3 rounded-full text-sm font-semibold mb-8 border shadow-lg">
                                <Bell className="h-4 w-4 text-notify-golden-yellow" />
                                NotifyX
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                                Stay Ahead with
                                <span className="bg-gradient-to-r from-notify-golden-yellow via-notify-orange-gold to-notify-golden-yellow bg-clip-text text-transparent">
                                    {' '}NotifyX
                                </span>
                            </h1>

                            <p className="text-xl text-notify-soft-gray mb-10 max-w-3xl mx-auto leading-relaxed">
                                Experience the ultimate in career notifications with our platform. Get exclusive access to priority alerts and personalized insights with an elegant, sophisticated design.
                            </p>

                        {/* Current Subscription Status */}
                        {!isLoadingSubscription && (
                            <div className="max-w-md mx-auto mb-8">
                                <SubscriptionStatus 
                                    onUpgrade={() => {
                                        const premiumPlan = pricingPlans.find(p => p.id === 'premium');
                                        if (premiumPlan) {
                                            setPaymentModal({ isOpen: true, plan: premiumPlan });
                                        }
                                    }}
                                />
                            </div>
                        )}

                        {/* Quick Subscribe Form */}
                            <div className="max-w-2xl mx-auto mb-16">
                                <div className="bg-notify-golden-yellow/10 backdrop-blur-xl border-notify-golden-yellow/30 rounded-3xl p-8 border shadow-2xl">
                                    <h3 className="text-2xl font-bold mb-6 text-center">
                                        Notifications
                                    </h3>
                                    
                                    {/* Status Messages */}
                                    {subscriptionStatus === 'success' && (
                                        <div className="mb-6 p-4 bg-green-500/20 border border-green-400/30 rounded-2xl text-green-100 text-center">
                                            <div className="flex items-center justify-center gap-2">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                <span className="font-semibold">Success! Check your email for job alerts and welcome message.</span>
                                            </div>
                                        </div>
                                    )}
                                    
                                    {subscriptionStatus === 'error' && (
                                        <div className="mb-6 p-4 bg-notify-bright-red/20 border border-notify-bright-red/30 rounded-2xl text-notify-bright-red text-center">
                                            <div className="flex items-center justify-center gap-2">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                </svg>
                                                <span className="font-semibold">Please enter a valid email address.</span>
                                            </div>
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
                                            className="flex-1 px-6 py-4 border border-notify-golden-yellow/40 rounded-2xl focus:outline-none focus:ring-2 focus:ring-notify-golden-yellow/50 bg-notify-golden-yellow/5 text-notify-pure-white placeholder-notify-soft-gray text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                    />
                                    <button
                                        onClick={() => handleSubscribe('free')}
                                            disabled={isSubmitting || !email}
                                            className="px-8 py-4 bg-gradient-to-r from-notify-golden-yellow to-notify-orange-gold text-notify-deep-black rounded-2xl font-semibold hover:from-notify-golden-yellow/90 hover:to-notify-orange-gold/90 hover:scale-105 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <svg className="inline h-5 w-5 mr-2 animate-spin" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Processing...
                                                </>
                                            ) : (
                                                <>
                                                    <Bell className="inline h-5 w-5 mr-2" />
                                                    Notify
                                                </>
                                            )}
                                    </button>
                                </div>
                                    <p className="text-sm mt-4 text-center text-notify-soft-gray">
                                        Experience. No spam. Unsubscribe anytime.
                                    </p>
                            </div>
                        </div>

                        {/* Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                                <div className="bg-notify-golden-yellow/10 backdrop-blur-xl border-notify-golden-yellow/30 rounded-2xl p-6 border shadow-xl hover:shadow-2xl transition-all duration-300">
                                    <div className="text-3xl font-bold text-notify-golden-yellow">50K+</div>
                                    <div className="text-sm font-medium text-notify-soft-gray">Active Subscribers</div>
                                </div>
                                <div className="bg-notify-royal-purple/10 backdrop-blur-xl border-notify-royal-purple/30 rounded-2xl p-6 border shadow-xl hover:shadow-2xl transition-all duration-300">
                                    <div className="text-3xl font-bold text-notify-royal-purple">1000+</div>
                                    <div className="text-sm font-medium text-notify-soft-gray">Jobs Notified Daily</div>
                                </div>
                                <div className="bg-notify-golden-yellow/10 backdrop-blur-xl border-notify-golden-yellow/30 rounded-2xl p-6 border shadow-xl hover:shadow-2xl transition-all duration-300">
                                    <div className="text-3xl font-bold text-notify-golden-yellow">95%</div>
                                    <div className="text-sm font-medium text-notify-soft-gray">Success Rate</div>
                                </div>
                                <div className="bg-notify-orange-gold/10 backdrop-blur-xl border-notify-orange-gold/30 rounded-2xl p-6 border shadow-xl hover:shadow-2xl transition-all duration-300">
                                    <div className="text-3xl font-bold text-notify-orange-gold">24/7</div>
                                    <div className="text-sm font-medium text-notify-soft-gray">Monitoring</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 px-4 bg-notify-soft-gray">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-notify-deep-black">
                                Premium Features
                            </h2>
                            <p className="text-xl max-w-2xl mx-auto text-notify-deep-black/80">
                                Exclusive features designed for career success
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {notificationTypes.map((type, index) => (
                                <div key={index} className="bg-notify-pure-white border-notify-golden-yellow/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border">
                                    <div className="w-20 h-20 bg-gradient-to-r from-notify-golden-yellow to-notify-orange-gold rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto shadow-lg">
                                        {type.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-center text-notify-deep-black">{type.title}</h3>
                                    <p className="text-center mb-4 leading-relaxed text-notify-deep-black/80">{type.description}</p>
                                    <div className="text-center">
                                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-notify-golden-yellow/20 text-notify-deep-black border border-notify-golden-yellow/30">
                                            {type.frequency}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section className="py-20 px-4 bg-gradient-to-br from-notify-soft-gray to-notify-soft-gray/80">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-notify-deep-black">
                                Premium Plans
                            </h2>
                            <p className="text-xl max-w-2xl mx-auto text-notify-deep-black/80">
                                Experience the ultimate in career notifications with our exclusive platform
                            </p>
                        </div>
                        {isLoadingPlans ? (
                            <div className="grid md:grid-cols-3 gap-8">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="bg-notify-pure-white rounded-3xl p-8 border border-notify-golden-yellow/30 animate-pulse">
                                        <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
                                        <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-6"></div>
                                        <div className="space-y-3 mb-8">
                                            {[1, 2, 3, 4].map((j) => (
                                                <div key={j} className="h-4 bg-gray-200 rounded"></div>
                                            ))}
                                        </div>
                                        <div className="h-12 bg-gray-200 rounded"></div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-3 gap-8">
                                {pricingPlans.map((plan, index) => (
                                    <div key={index} className={`bg-notify-pure-white rounded-3xl p-8 border transition-all duration-500 transform hover:-translate-y-3 ${
                                        plan.popular 
                                            ? 'border-notify-golden-yellow shadow-2xl scale-105' 
                                            : 'border-notify-golden-yellow/30 hover:shadow-xl'
                                    }`}>
                                        {plan.popular && (
                                            <div className="text-center mb-6">
                                                <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold shadow-lg bg-gradient-to-r from-notify-golden-yellow to-notify-orange-gold text-notify-deep-black">
                                                    Most Popular
                                                </span>
                                            </div>
                                        )}
                                        <div className="text-center mb-8">
                                            <h3 className="text-2xl font-bold mb-3 text-notify-deep-black">{plan.name}</h3>
                                            <div className="text-4xl font-bold mb-2 text-notify-golden-yellow">
                                                ₹{plan.price}
                                                <span className="text-lg text-notify-deep-black/70">/{plan.period}</span>
                                            </div>
                                        </div>
                                        <div className="space-y-4 mb-8">
                                            {plan.features.map((feature, featureIndex) => (
                                                <div key={featureIndex} className="flex items-center gap-3">
                                                    <CheckCircle className="h-5 w-5 text-notify-deep-black flex-shrink-0" />
                                                    <span className="text-notify-deep-black text-sm">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <button
                                            onClick={() => handleSubscribe(plan.id)}
                                            className={`w-full px-6 py-4 rounded-2xl font-semibold transition-all transform hover:scale-105 ${
                                                plan.popular
                                                    ? 'bg-gradient-to-r from-notify-golden-yellow to-notify-orange-gold text-notify-deep-black hover:shadow-xl'
                                                    : 'border-2 border-notify-golden-yellow text-notify-golden-yellow hover:bg-notify-golden-yellow hover:text-notify-deep-black'
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

                {/* Premium Features Section */}
                <section className="py-20 px-4 bg-gradient-to-br from-notify-deep-black via-notify-deep-black to-notify-deep-black text-notify-pure-white">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-notify-pure-white">
                                Premium Features
                            </h2>
                            <p className="text-xl max-w-2xl mx-auto text-notify-pure-white/90">
                                Experience the ultimate in career notifications with exclusive features
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {premiumFeatures.map((feature, index) => (
                                <div key={index} className="bg-notify-golden-yellow/10 border-notify-golden-yellow/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border">
                                    <feature.icon className="h-14 w-14 mb-6 mx-auto text-notify-golden-yellow" />
                                    <h3 className="text-xl font-bold mb-3 text-center text-notify-pure-white">{feature.title}</h3>
                                    <p className="text-center text-sm leading-relaxed text-notify-pure-white/80">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Preferences Section */}
                <section className="py-20 px-4 bg-notify-soft-gray">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-notify-pure-white border-notify-golden-yellow/30 rounded-3xl p-8 shadow-2xl border">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold mb-4 text-notify-deep-black">
                                    Premium Preferences
                                </h2>
                                <p className="text-notify-deep-black/80">
                                    Personalize your notification experience
                                </p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h3 className="font-bold text-notify-deep-black text-lg">Notification Types</h3>
                                    {Object.entries(preferences).map(([key, value]) => (
                                        <div key={key} className="flex items-center gap-3 p-3 bg-notify-soft-gray/50 rounded-xl">
                                            <span className="text-notify-deep-black capitalize font-medium">
                                                ✅ {key.replace(/([A-Z])/g, ' $1')}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-4">
                                    <h3 className="font-bold text-notify-deep-black text-lg">Delivery Methods</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 p-4 bg-notify-golden-yellow/10 rounded-xl border border-notify-golden-yellow/20">
                                            <Mail className="h-5 w-5 text-notify-golden-yellow" />
                                            <span className="text-notify-deep-black font-medium">Email Notifications</span>
                                        </div>
                                        <div className="flex items-center gap-3 p-4 bg-notify-soft-gray/50 rounded-xl opacity-60 cursor-not-allowed border border-notify-deep-black/20">
                                            <MessageCircle className="h-5 w-5 text-notify-deep-black/40" />
                                            <span className="text-notify-deep-black/60">WhatsApp Alerts (Premium)</span>
                                            <span className="ml-auto text-xs bg-notify-royal-purple/20 text-notify-royal-purple px-2 py-1 rounded-full font-medium">Coming Soon</span>
                                        </div>
                                        <div className="flex items-center gap-3 p-4 bg-notify-soft-gray/50 rounded-xl opacity-60 cursor-not-allowed border border-notify-deep-black/20">
                                            <Smartphone className="h-5 w-5 text-notify-deep-black/40" />
                                            <span className="text-notify-deep-black/60">SMS Notifications (Premium)</span>
                                            <span className="ml-auto text-xs bg-notify-royal-purple/20 text-notify-royal-purple px-2 py-1 rounded-full font-medium">Coming Soon</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Success Stories Section */}
                <section className="py-20 px-4 bg-gradient-to-br from-notify-soft-gray to-notify-soft-gray/80">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-notify-deep-black">
                                 Success Stories
                            </h2>
                            <p className="text-xl max-w-2xl mx-auto text-notify-deep-black/80">
                                Discover how our users achieved career success with NotifyX
                            </p>
                        </div>
                        {/* Scrolling Testimonials */}
                        <div className="relative overflow-hidden py-3">
                            <div 
                                className="flex animate-scroll gap-4"
                                style={{ width: `${notifyTestimonials.length * 320}px` }}
                            >
                                {notifyTestimonials.map((testimonial) => (
                                    <div
                                        key={testimonial.id}
                                        className="bg-gradient-to-br from-notify-pure-white/95 to-notify-pure-white/85 backdrop-blur-md text-notify-deep-black p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 relative z-10 border border-notify-pure-white/30 w-[300px] h-[220px] flex-shrink-0 flex flex-col"
                                    >
                                        <div className="flex items-center mb-4">
                                            <div className="relative">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="w-12 h-12 rounded-full mr-3 object-cover border-3 border-notify-orange-gold/20 shadow-md"
                                                />
                                                <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-notify-pure-white flex items-center justify-center">
                                                    <svg className="w-2.5 h-2.5 text-notify-pure-white" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-notify-deep-black text-base">
                                                    {testimonial.name}
                                                </h3>
                                                <p className="text-notify-orange-gold text-xs font-semibold">
                                                    {testimonial.company}
                                                </p>
                                                <div className="flex items-center mt-1">
                                                    <div className="flex text-notify-orange-gold">
                                                        {[...Array(5)].map((_, i) => (
                                                            <svg key={i} className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.835 1.688-1.71 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.874.57-2.01-.197-1.71-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                            </svg>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-notify-deep-black/80 italic flex-grow text-sm leading-relaxed">
                                            "{testimonial.quote}"
                                        </p>
                                        <div className="mt-3 pt-3 border-t border-notify-deep-black/20">
                                            <div className="flex items-center justify-between text-xs text-notify-deep-black/60">
                                                <span>✅ Verified Success</span>
                                                <span>{testimonial.tag}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* Duplicate for seamless loop */}
                                {notifyTestimonials.slice(0, 3).map((testimonial) => (
                                    <div
                                        key={`duplicate-${testimonial.id}`}
                                        className="bg-gradient-to-br from-notify-pure-white/95 to-notify-pure-white/85 backdrop-blur-md text-notify-deep-black p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative z-10 border border-notify-pure-white/30 w-[300px] h-[220px] flex-shrink-0 flex flex-col"
                                    >
                                        <div className="flex items-center mb-4">
                                            <div className="relative">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="w-12 h-12 rounded-full mr-3 object-cover border-3 border-notify-orange-gold/20 shadow-md"
                                                />
                                                <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-notify-pure-white flex items-center justify-center">
                                                    <svg className="w-2.5 h-2.5 text-notify-pure-white" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-notify-deep-black text-base">
                                                    {testimonial.name}
                                                </h3>
                                                <p className="text-notify-orange-gold text-xs font-semibold">
                                                    {testimonial.company}
                                                </p>
                                                <div className="flex items-center mt-1">
                                                    <div className="flex text-notify-orange-gold">
                                                        {[...Array(5)].map((_, i) => (
                                                            <svg key={i} className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.835 1.688-1.71 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.874.57-2.01-.197-1.71-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                            </svg>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-notify-deep-black/80 italic flex-grow text-sm leading-relaxed">
                                            "{testimonial.quote}"
                                        </p>
                                        <div className="mt-3 pt-3 border-t border-notify-deep-black/20">
                                            <div className="flex items-center justify-between text-xs text-notify-deep-black/60">
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
                        <div className="bg-gradient-to-r from-notify-deep-black via-notify-deep-black to-notify-deep-black p-12 text-notify-pure-white relative overflow-hidden">
                            {/* Elegant background pattern */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,201,77,0.1),transparent_50%)]"></div>
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
                            <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                                     Ready for Premium Success?
                                </h2>
                                <p className="text-xl mb-8 text-notify-pure-white/90 max-w-2xl mx-auto">
                                    Experience the ultimate in career notifications with our exclusive platform
                                </p>
                                <div className="flex justify-center">
                                    <a
                                        href="/community"
                                        className="px-8 py-4 border-2 border-notify-golden-yellow text-notify-golden-yellow hover:bg-notify-golden-yellow hover:text-notify-deep-black rounded-2xl font-semibold transition-all transform hover:scale-105 shadow-xl"
                                    >
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
            <footer className="bg-notify-deep-black text-notify-pure-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="mb-6">
                                <Logo />
                            </div>
                            <p className="text-notify-soft-gray mb-4">
                                Helping tech freshers launch their careers with curated opportunities and resources.
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    href="https://www.linkedin.com/company/x-careers/"
                                    className="text-notify-soft-gray hover:text-notify-pure-white transition-all duration-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.instagram.com/x_careers_official?igsh=Z3M3cTJyNndtdDdq"
                                    className="text-notify-soft-gray hover:text-notify-pure-white transition-all duration-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://whatsapp.com/channel/0029Vak7B1WLo4hdCrawMw3i"
                                    className="text-notify-soft-gray hover:text-notify-pure-white transition-all duration-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                                    </svg>
                                </a>
                                <a
                                    href="https://t.me/xcareerconnect"
                                    className="text-notify-soft-gray hover:text-notify-pure-white transition-all duration-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Company</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="/about" className="text-notify-soft-gray hover:text-notify-pure-white transition-all duration-300">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="/careers" className="text-notify-soft-gray hover:text-notify-pure-white transition-all duration-300">
                                        Careers
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Resources</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="/resume-review" className="text-notify-soft-gray hover:text-notify-pure-white transition-all duration-300">
                                        Resume Review
                                    </a>
                                </li>
                                <li>
                                    <a href="/blog" className="text-notify-soft-gray hover:text-notify-pure-white transition-all duration-300">
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Legal</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="/privacy-policy" className="text-notify-soft-gray hover:text-notify-pure-white transition-all duration-300">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="/terms-of-service" className="text-notify-soft-gray hover:text-notify-pure-white transition-all duration-300">
                                        Terms of Service
                                    </a>
                                </li>
                                <li>
                                    <a href="/refund-policy" className="text-notify-soft-gray hover:text-notify-pure-white transition-all duration-300">
                                        Refund Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="/shipping-policy" className="text-notify-soft-gray hover:text-notify-pure-white transition-all duration-300">
                                        Shipping Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="/terms-and-conditions" className="text-notify-soft-gray hover:text-notify-pure-white transition-all duration-300">
                                        Terms and Conditions
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-notify-soft-gray/20 mt-12 pt-8 text-center text-notify-soft-gray">
                        <p className="mb-2">© {new Date().getFullYear()} X Careers. All rights reserved.</p>
                        <p>Built with ❤️ for tech freshers</p>
                    </div>
            </div>
            </footer>

            {/* Payment Modal */}
            <PaymentModal
                isOpen={paymentModal.isOpen}
                onClose={() => setPaymentModal({ isOpen: false, plan: null })}
                plan={paymentModal.plan}
                onSuccess={handlePaymentSuccess}
                onError={handlePaymentError}
            />
        </div>
    );
}
