'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    Bell,
    Zap,
    Star,
    CheckCircle,
    ArrowRight,
    Smartphone,
    Mail,
    MessageCircle,
    Crown,
    Gift,
    TrendingUp,
} from 'lucide-react';

const notificationTypes = [
    {
        icon: '💼',
        title: 'Job Alerts',
        description: 'Get notified about new job opportunities matching your skills',
        frequency: 'Real-time',
        color: 'from-blue-500 to-cyan-500',
    },
    {
        icon: '🎯',
        title: 'Interview Tips',
        description: 'Weekly interview preparation tips and success strategies',
        frequency: 'Weekly',
        color: 'from-green-500 to-emerald-500',
    },
    {
        icon: '📚',
        title: 'Learning Resources',
        description: 'New courses, tutorials, and skill development content',
        frequency: 'Bi-weekly',
        color: 'from-purple-500 to-pink-500',
    },
    {
        icon: '🚀',
        title: 'Career Updates',
        description: 'Industry trends, salary reports, and career guidance',
        frequency: 'Monthly',
        color: 'from-orange-500 to-red-500',
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

const pricingPlans = [
    {
        name: 'Free',
        price: '₹0',
        period: 'forever',
        features: ['Basic job alerts', 'Weekly newsletter', 'Community access', 'Basic resources'],
        buttonText: 'Get Started',
        popular: false,
    },
    {
        name: 'NotifyX Premium',
        price: '₹99',
        period: 'month',
        features: [
            'Priority job alerts',
            'Instant notifications',
            'Personalized matching',
            'Exclusive content',
            'Resume review',
            'Interview prep calls',
        ],

        buttonText: 'Start Free Trial',
        popular: true,
    },
    {
        name: 'NotifyX Pro',
        price: '₹199',
        period: 'month',
        features: [
            'Everything in Premium',
            '1-on-1 career coaching',
            'LinkedIn optimization',
            'Salary negotiation help',
            'Direct recruiter connect',
            'Custom job search strategy',
        ],

        buttonText: 'Contact Sales',
        popular: false,
    },
];

const testimonials = [
    {
        name: 'Rohit Sharma',
        role: 'Software Engineer at Flipkart',
        image: '👨‍💻',
        text: 'NotifyX helped me land my dream job! Got the alert 2 hours before it was posted publicly.',
        rating: 5,
    },
    {
        name: 'Priya Patel',
        role: 'Product Manager at Zomato',
        image: '👩‍💼',
        text: 'The personalized job matching is incredible. Every alert is relevant to my skills and interests.',
        rating: 5,
    },
    {
        name: 'Arjun Kumar',
        role: 'Data Scientist at Swiggy',
        image: '👨‍🔬',
        text: 'Premium notifications gave me a competitive edge. Worth every penny!',
        rating: 5,
    },
];

export default function NotifyPage() {
    const [selectedPlan, setSelectedPlan] = useState('premium');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [preferences, setPreferences] = useState({
        jobAlerts: true,
        interviewTips: true,
        learningResources: false,
        careerUpdates: true,
    });

    const handleSubscribe = (plan: string) => {
        // This will be replaced with actual subscription logic
        alert(`Subscribing to ${plan} plan...`);
    };

    const handlePreferenceChange = (key: string) => {
        setPreferences((prev) => ({
            ...prev,
            [key]: !prev[key as keyof typeof prev],
        }));
    };

    return (
        <div
            className="min-h-screen bg-gradient-to-b from-[hsl(210,50%,98%)] to-[hsl(196,60%,95%)]"
            data-oid="fe2fzg."
        >
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden -z-10" data-oid="0l33f59">
                <div
                    className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-20 rounded-full blur-3xl animate-blob"
                    data-oid="7cavmfg"
                ></div>
                <div
                    className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"
                    data-oid="w.khlv_"
                ></div>
                <div
                    className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-4000"
                    data-oid="nrxi1:7"
                ></div>
            </div>

            <div className="relative z-10" data-oid="8ucn1rv">
                {/* Hero Section */}
                <section className="pt-24 pb-16 px-4" data-oid="wqq.wmr">
                    <div className="max-w-6xl mx-auto text-center" data-oid="f3xpi2-">
                        <div
                            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-[hsl(196,80%,45%)] border border-[hsl(210,30%,95%)] mb-6"
                            data-oid=":5jd7lr"
                        >
                            <Bell className="h-4 w-4" data-oid="h4xakep" />
                            Never Miss an Opportunity
                        </div>

                        <h1
                            className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
                            data-oid="_y8_0xk"
                        >
                            Stay Ahead with
                            <span
                                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] bg-clip-text text-transparent"
                                data-oid="c87ugvd"
                            >
                                {' '}
                                NotifyX
                            </span>
                        </h1>

                        <p
                            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                            data-oid="fv.smjs"
                        >
                            Get instant notifications about job opportunities, interview tips, and
                            career resources. Be the first to know, be the first to apply.
                        </p>

                        {/* Quick Subscribe Form */}
                        <div className="max-w-2xl mx-auto mb-12" data-oid="7xjl9.-">
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[hsl(210,30%,95%)]"
                                data-oid="53xuj77"
                            >
                                <h3
                                    className="text-xl font-bold text-gray-800 mb-4"
                                    data-oid="c8q6ata"
                                >
                                    Start Getting Notifications
                                </h3>
                                <div className="flex flex-col sm:flex-row gap-4" data-oid="bbxkx60">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)]"
                                        data-oid="60bna-c"
                                    />

                                    <button
                                        onClick={() => handleSubscribe('free')}
                                        className="px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
                                        data-oid="opl5bni"
                                    >
                                        <Bell className="inline h-5 w-5 mr-2" data-oid="vguu327" />
                                        Notify Me
                                    </button>
                                </div>
                                <p className="text-sm text-gray-500 mt-2" data-oid="xqct18_">
                                    Free forever. No spam. Unsubscribe anytime.
                                </p>
                            </div>
                        </div>

                        {/* Stats */}
                        <div
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                            data-oid="n0y8rl_"
                        >
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                data-oid="z53qa9g"
                            >
                                <div
                                    className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                                    data-oid="9fovrvh"
                                >
                                    50K+
                                </div>
                                <div className="text-gray-600" data-oid="s:7u1ho">
                                    Active Subscribers
                                </div>
                            </div>
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                data-oid="g.a4rg0"
                            >
                                <div
                                    className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                                    data-oid="r7.910i"
                                >
                                    1000+
                                </div>
                                <div className="text-gray-600" data-oid="eye10yc">
                                    Jobs Notified Daily
                                </div>
                            </div>
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                data-oid="fmx:2ih"
                            >
                                <div
                                    className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                                    data-oid="y0v15vb"
                                >
                                    95%
                                </div>
                                <div className="text-gray-600" data-oid="xzz-qmo">
                                    Success Rate
                                </div>
                            </div>
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                data-oid=":q6dhhn"
                            >
                                <div
                                    className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                                    data-oid="c-4kfvv"
                                >
                                    24/7
                                </div>
                                <div className="text-gray-600" data-oid="bzftloa">
                                    Monitoring
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Notification Types */}
                <section className="py-16 px-4" data-oid="1up05n2">
                    <div className="max-w-6xl mx-auto" data-oid="4plilnl">
                        <div className="text-center mb-12" data-oid="cn:u_-8">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="a930dbo"
                            >
                                What You'll Get Notified About
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="qvzik-w">
                                Choose what matters most to your career
                            </p>
                        </div>

                        <div
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                            data-oid="m-5ubfv"
                        >
                            {notificationTypes.map((type, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                    data-oid="mvgrt1e"
                                >
                                    <div
                                        className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto`}
                                        data-oid="hv2htvm"
                                    >
                                        {type.icon}
                                    </div>
                                    <h3
                                        className="text-xl font-bold text-gray-800 mb-2 text-center"
                                        data-oid="189kp8n"
                                    >
                                        {type.title}
                                    </h3>
                                    <p
                                        className="text-gray-600 text-center mb-4"
                                        data-oid="0:.4cd8"
                                    >
                                        {type.description}
                                    </p>
                                    <div className="text-center" data-oid="qyt47_5">
                                        <span
                                            className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                                            data-oid="b6_xfe:"
                                        >
                                            {type.frequency}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Plans */}
                <section className="py-16 px-4" data-oid="w:42nd.">
                    <div className="max-w-6xl mx-auto" data-oid="vg5_lms">
                        <div className="text-center mb-12" data-oid="m6d.0a2">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="6_xbfof"
                            >
                                Choose Your Plan
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="g-k4jen">
                                Upgrade to premium for advanced features and priority access
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="wo:4xnr">
                            {pricingPlans.map((plan, index) => (
                                <div
                                    key={index}
                                    className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 transform hover:-translate-y-2 ${
                                        plan.popular
                                            ? 'border-[hsl(196,80%,45%)] shadow-xl scale-105'
                                            : 'border-[hsl(210,30%,95%)] hover:shadow-xl'
                                    }`}
                                    data-oid="ibmpf.0"
                                >
                                    {plan.popular && (
                                        <div className="text-center mb-4" data-oid="i5sa525">
                                            <span
                                                className="inline-block px-3 py-1 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-full text-sm font-medium"
                                                data-oid="4k3lo1c"
                                            >
                                                Most Popular
                                            </span>
                                        </div>
                                    )}

                                    <div className="text-center mb-6" data-oid="joqm9ai">
                                        <h3
                                            className="text-2xl font-bold text-gray-800 mb-2"
                                            data-oid="2l2jj0-"
                                        >
                                            {plan.name}
                                        </h3>
                                        <div
                                            className="text-4xl font-bold text-[hsl(196,80%,45%)] mb-1"
                                            data-oid="ppl78sw"
                                        >
                                            {plan.price}
                                            <span
                                                className="text-lg text-gray-600"
                                                data-oid="e35s_o7"
                                            >
                                                /{plan.period}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="space-y-3 mb-8" data-oid="a45yv9s">
                                        {plan.features.map((feature, featureIndex) => (
                                            <div
                                                key={featureIndex}
                                                className="flex items-center gap-3"
                                                data-oid="81g5bzi"
                                            >
                                                <CheckCircle
                                                    className="h-5 w-5 text-green-500 flex-shrink-0"
                                                    data-oid="q_t5n3o"
                                                />

                                                <span className="text-gray-700" data-oid="94b_5k8">
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => handleSubscribe(plan.name.toLowerCase())}
                                        className={`w-full px-6 py-3 rounded-xl font-medium transition-all transform hover:scale-105 ${
                                            plan.popular
                                                ? 'bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white hover:shadow-lg'
                                                : 'border border-[hsl(196,80%,45%)] text-[hsl(196,80%,45%)] hover:bg-[hsl(196,80%,45%)]/10'
                                        }`}
                                        data-oid="xszgg6g"
                                    >
                                        {plan.buttonText}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Premium Features */}
                <section className="py-16 px-4" data-oid="kgk:o__">
                    <div className="max-w-6xl mx-auto" data-oid="3ovlmq-">
                        <div className="text-center mb-12" data-oid="s7c6knn">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="zop3kb7"
                            >
                                Premium Features
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="fqsbpl3">
                                Get the competitive edge with NotifyX Premium
                            </p>
                        </div>

                        <div
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                            data-oid=":eta799"
                        >
                            {premiumFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)] hover:shadow-lg transition-all"
                                    data-oid="3mwg_0l"
                                >
                                    <feature.icon
                                        className="h-12 w-12 text-[hsl(196,80%,45%)] mb-4 mx-auto"
                                        data-oid="8_gi_o8"
                                    />

                                    <h3
                                        className="text-lg font-bold text-gray-800 mb-2 text-center"
                                        data-oid="s:p-dme"
                                    >
                                        {feature.title}
                                    </h3>
                                    <p
                                        className="text-gray-600 text-center text-sm"
                                        data-oid="d6i-s8_"
                                    >
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Notification Preferences */}
                <section className="py-16 px-4" data-oid="g4urnpr">
                    <div className="max-w-4xl mx-auto" data-oid="p02445v">
                        <div
                            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)]"
                            data-oid=".864m6h"
                        >
                            <div className="text-center mb-8" data-oid="33zxjkt">
                                <h2
                                    className="text-2xl font-bold text-gray-800 mb-4"
                                    data-oid="9sm:zdu"
                                >
                                    Customize Your Notifications
                                </h2>
                                <p className="text-gray-600" data-oid="s7cg-8:">
                                    Choose what you want to be notified about
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6" data-oid="hl_3p:.">
                                <div className="space-y-4" data-oid="sthrbhk">
                                    <h3 className="font-semibold text-gray-800" data-oid="z-i5lj-">
                                        Notification Types
                                    </h3>
                                    {Object.entries(preferences).map(([key, value]) => (
                                        <label
                                            key={key}
                                            className="flex items-center gap-3 cursor-pointer"
                                            data-oid="ccr0y:q"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={value}
                                                onChange={() => handlePreferenceChange(key)}
                                                className="w-5 h-5 text-[hsl(196,80%,45%)] rounded focus:ring-[hsl(196,80%,45%)]"
                                                data-oid="51p4k-_"
                                            />

                                            <span
                                                className="text-gray-700 capitalize"
                                                data-oid="seu:14g"
                                            >
                                                {key.replace(/([A-Z])/g, ' $1').trim()}
                                            </span>
                                        </label>
                                    ))}
                                </div>

                                <div className="space-y-4" data-oid="gkjs7f2">
                                    <h3 className="font-semibold text-gray-800" data-oid="u98w5pt">
                                        Delivery Methods
                                    </h3>
                                    <div className="space-y-3" data-oid="hi8-0gl">
                                        <div
                                            className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"
                                            data-oid="5ohusyy"
                                        >
                                            <Mail
                                                className="h-5 w-5 text-blue-600"
                                                data-oid="vlh38qg"
                                            />

                                            <span className="text-gray-700" data-oid="m30ym3v">
                                                Email Notifications
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                                            data-oid="sxv8r29"
                                        >
                                            <MessageCircle
                                                className="h-5 w-5 text-green-600"
                                                data-oid="qtfa-l0"
                                            />

                                            <span className="text-gray-700" data-oid="io:di47">
                                                WhatsApp Alerts (Premium)
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg"
                                            data-oid="5dg7ha-"
                                        >
                                            <Smartphone
                                                className="h-5 w-5 text-purple-600"
                                                data-oid="ykbd7rt"
                                            />

                                            <span className="text-gray-700" data-oid="ojpz1-g">
                                                SMS Notifications (Premium)
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-16 px-4" data-oid="an8uomf">
                    <div className="max-w-6xl mx-auto" data-oid="hmhz_k0">
                        <div className="text-center mb-12" data-oid="0k-clg:">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="efdc33v"
                            >
                                Success Stories
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="fn31epi">
                                See how NotifyX helped others land their dream jobs
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="3d3j3dz">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                    data-oid="x0l6hji"
                                >
                                    <div
                                        className="flex items-center gap-4 mb-4"
                                        data-oid="rjdqu--"
                                    >
                                        <div className="text-3xl" data-oid="obg8ivt">
                                            {testimonial.image}
                                        </div>
                                        <div data-oid="0mz6n07">
                                            <h4
                                                className="font-bold text-gray-800"
                                                data-oid="99h_4jk"
                                            >
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-sm text-gray-600" data-oid="sqp7:.3">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 italic mb-4" data-oid="sxzoech">
                                        "{testimonial.text}"
                                    </p>
                                    <div className="flex items-center gap-1" data-oid="8_z2pwa">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="h-4 w-4 text-yellow-500 fill-current"
                                                data-oid="_-7im-v"
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-4" data-oid="l3uxkjw">
                    <div className="max-w-4xl mx-auto text-center" data-oid="haai28u">
                        <div
                            className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] rounded-2xl p-8 text-white"
                            data-oid="gameis5"
                        >
                            <h2 className="text-3xl font-bold mb-4" data-oid="1xpx60b">
                                Ready to Get Notified?
                            </h2>
                            <p className="text-xl mb-6 text-blue-100" data-oid="sig5u39">
                                Join thousands of professionals who never miss an opportunity
                            </p>
                            <div
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                                data-oid="4cx2b:n"
                            >
                                <button
                                    onClick={() => handleSubscribe('premium')}
                                    className="px-6 py-3 bg-white text-[hsl(196,80%,45%)] rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
                                    data-oid="p4w5aqu"
                                >
                                    <Zap className="inline h-5 w-5 mr-2" data-oid="kn58muj" />
                                    Start Premium Trial
                                </button>
                                <Link
                                    href="/resources/community"
                                    className="px-6 py-3 border border-white text-white rounded-xl font-medium hover:bg-white hover:text-[hsl(196,80%,45%)] transition-all"
                                    data-oid=".c:u3:."
                                >
                                    <TrendingUp
                                        className="inline h-5 w-5 mr-2"
                                        data-oid="-jfztuy"
                                    />
                                    Join Community
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
