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
            data-oid=".86drt:"
        >
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden -z-10" data-oid="zn9ef.y">
                <div
                    className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-20 rounded-full blur-3xl animate-blob"
                    data-oid="7_mm9xv"
                ></div>
                <div
                    className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"
                    data-oid="--.49pm"
                ></div>
                <div
                    className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-4000"
                    data-oid="4k.kbrm"
                ></div>
            </div>

            <div className="relative z-10" data-oid="9sv84h1">
                {/* Hero Section */}
                <section className="pt-24 pb-16 px-4" data-oid="8dpbvmk">
                    <div className="max-w-6xl mx-auto text-center" data-oid="e45qlty">
                        <div
                            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-[hsl(196,80%,45%)] border border-[hsl(210,30%,95%)] mb-6"
                            data-oid="h0ejffo"
                        >
                            <Bell className="h-4 w-4" data-oid="_l_h6s5" />
                            Never Miss an Opportunity
                        </div>

                        <h1
                            className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
                            data-oid="htzx2uj"
                        >
                            Stay Ahead with
                            <span
                                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] bg-clip-text text-transparent"
                                data-oid="kvmmwzs"
                            >
                                {' '}
                                NotifyX
                            </span>
                        </h1>

                        <p
                            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                            data-oid="4g3osya"
                        >
                            Get instant notifications about job opportunities, interview tips, and
                            career resources. Be the first to know, be the first to apply.
                        </p>

                        {/* Quick Subscribe Form */}
                        <div className="max-w-2xl mx-auto mb-12" data-oid="f6f6ot2">
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[hsl(210,30%,95%)]"
                                data-oid="jh64.i7"
                            >
                                <h3
                                    className="text-xl font-bold text-gray-800 mb-4"
                                    data-oid="gmiqh3q"
                                >
                                    Start Getting Notifications
                                </h3>
                                <div className="flex flex-col sm:flex-row gap-4" data-oid="nqk-lwm">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)]"
                                        data-oid="fngii2u"
                                    />

                                    <button
                                        onClick={() => handleSubscribe('free')}
                                        className="px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
                                        data-oid="cija4h2"
                                    >
                                        <Bell className="inline h-5 w-5 mr-2" data-oid="_y.r2oi" />
                                        Notify Me
                                    </button>
                                </div>
                                <p className="text-sm text-gray-500 mt-2" data-oid=".7whs31">
                                    Free forever. No spam. Unsubscribe anytime.
                                </p>
                            </div>
                        </div>

                        {/* Stats */}
                        <div
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                            data-oid="z:y:8:x"
                        >
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                data-oid="5jk.cs_"
                            >
                                <div
                                    className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                                    data-oid="-h_i:nd"
                                >
                                    50K+
                                </div>
                                <div className="text-gray-600" data-oid="647q:-:">
                                    Active Subscribers
                                </div>
                            </div>
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                data-oid="7ktf-np"
                            >
                                <div
                                    className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                                    data-oid="tnkhmwl"
                                >
                                    1000+
                                </div>
                                <div className="text-gray-600" data-oid="cnju1tv">
                                    Jobs Notified Daily
                                </div>
                            </div>
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                data-oid="fza6bw-"
                            >
                                <div
                                    className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                                    data-oid="qyuj6:9"
                                >
                                    95%
                                </div>
                                <div className="text-gray-600" data-oid=":972fna">
                                    Success Rate
                                </div>
                            </div>
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                data-oid="73ag:hp"
                            >
                                <div
                                    className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                                    data-oid="6bqvc3d"
                                >
                                    24/7
                                </div>
                                <div className="text-gray-600" data-oid="-4fxp3-">
                                    Monitoring
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Notification Types */}
                <section className="py-16 px-4" data-oid="7w8qpcp">
                    <div className="max-w-6xl mx-auto" data-oid="3t1k.6g">
                        <div className="text-center mb-12" data-oid="4gw3n37">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="o6_byme"
                            >
                                What You'll Get Notified About
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="cdi:3kx">
                                Choose what matters most to your career
                            </p>
                        </div>

                        <div
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                            data-oid=":0k3wmr"
                        >
                            {notificationTypes.map((type, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                    data-oid="syi819:"
                                >
                                    <div
                                        className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto`}
                                        data-oid=".yhhhh."
                                    >
                                        {type.icon}
                                    </div>
                                    <h3
                                        className="text-xl font-bold text-gray-800 mb-2 text-center"
                                        data-oid="-sq361-"
                                    >
                                        {type.title}
                                    </h3>
                                    <p
                                        className="text-gray-600 text-center mb-4"
                                        data-oid="adzyd6l"
                                    >
                                        {type.description}
                                    </p>
                                    <div className="text-center" data-oid="iz-2.:z">
                                        <span
                                            className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                                            data-oid="gaj2aud"
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
                <section className="py-16 px-4" data-oid="t4hny.9">
                    <div className="max-w-6xl mx-auto" data-oid="0xye71k">
                        <div className="text-center mb-12" data-oid="fx.ku5i">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="kiocu_c"
                            >
                                Choose Your Plan
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="f0ewaxj">
                                Upgrade to premium for advanced features and priority access
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="xr6w-cd">
                            {pricingPlans.map((plan, index) => (
                                <div
                                    key={index}
                                    className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 transform hover:-translate-y-2 ${
                                        plan.popular
                                            ? 'border-[hsl(196,80%,45%)] shadow-xl scale-105'
                                            : 'border-[hsl(210,30%,95%)] hover:shadow-xl'
                                    }`}
                                    data-oid="kpys5yo"
                                >
                                    {plan.popular && (
                                        <div className="text-center mb-4" data-oid="12qxlus">
                                            <span
                                                className="inline-block px-3 py-1 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-full text-sm font-medium"
                                                data-oid="q.o6ysq"
                                            >
                                                Most Popular
                                            </span>
                                        </div>
                                    )}

                                    <div className="text-center mb-6" data-oid="19zew7m">
                                        <h3
                                            className="text-2xl font-bold text-gray-800 mb-2"
                                            data-oid="_ltrx6-"
                                        >
                                            {plan.name}
                                        </h3>
                                        <div
                                            className="text-4xl font-bold text-[hsl(196,80%,45%)] mb-1"
                                            data-oid="jjhotrr"
                                        >
                                            {plan.price}
                                            <span
                                                className="text-lg text-gray-600"
                                                data-oid="2n7471q"
                                            >
                                                /{plan.period}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="space-y-3 mb-8" data-oid="hc7x0cd">
                                        {plan.features.map((feature, featureIndex) => (
                                            <div
                                                key={featureIndex}
                                                className="flex items-center gap-3"
                                                data-oid="-tagtwu"
                                            >
                                                <CheckCircle
                                                    className="h-5 w-5 text-green-500 flex-shrink-0"
                                                    data-oid="8wi8tj6"
                                                />

                                                <span className="text-gray-700" data-oid="i196287">
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
                                        data-oid="7jgbcrw"
                                    >
                                        {plan.buttonText}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Premium Features */}
                <section className="py-16 px-4" data-oid="p:5wmtv">
                    <div className="max-w-6xl mx-auto" data-oid="dzer7ic">
                        <div className="text-center mb-12" data-oid="vqmij9x">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="b2qcrti"
                            >
                                Premium Features
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="-ltl9kb">
                                Get the competitive edge with NotifyX Premium
                            </p>
                        </div>

                        <div
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                            data-oid="ykflsrg"
                        >
                            {premiumFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)] hover:shadow-lg transition-all"
                                    data-oid="8s.jlzk"
                                >
                                    <feature.icon
                                        className="h-12 w-12 text-[hsl(196,80%,45%)] mb-4 mx-auto"
                                        data-oid="i942m0p"
                                    />

                                    <h3
                                        className="text-lg font-bold text-gray-800 mb-2 text-center"
                                        data-oid="2yz6qov"
                                    >
                                        {feature.title}
                                    </h3>
                                    <p
                                        className="text-gray-600 text-center text-sm"
                                        data-oid="iylr7h5"
                                    >
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Notification Preferences */}
                <section className="py-16 px-4" data-oid="aezwh4p">
                    <div className="max-w-4xl mx-auto" data-oid="jh2nv7-">
                        <div
                            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)]"
                            data-oid="sgo09wo"
                        >
                            <div className="text-center mb-8" data-oid="ljt.zh:">
                                <h2
                                    className="text-2xl font-bold text-gray-800 mb-4"
                                    data-oid="xlfc:.."
                                >
                                    Customize Your Notifications
                                </h2>
                                <p className="text-gray-600" data-oid="9aw85mw">
                                    Choose what you want to be notified about
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6" data-oid="tnf65nh">
                                <div className="space-y-4" data-oid="69:jdw4">
                                    <h3 className="font-semibold text-gray-800" data-oid="tmp7sl5">
                                        Notification Types
                                    </h3>
                                    {Object.entries(preferences).map(([key, value]) => (
                                        <label
                                            key={key}
                                            className="flex items-center gap-3 cursor-pointer"
                                            data-oid="cxbcahu"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={value}
                                                onChange={() => handlePreferenceChange(key)}
                                                className="w-5 h-5 text-[hsl(196,80%,45%)] rounded focus:ring-[hsl(196,80%,45%)]"
                                                data-oid="rv_s14f"
                                            />

                                            <span
                                                className="text-gray-700 capitalize"
                                                data-oid="u3cf_x7"
                                            >
                                                {key.replace(/([A-Z])/g, ' $1').trim()}
                                            </span>
                                        </label>
                                    ))}
                                </div>

                                <div className="space-y-4" data-oid="7:g_i9l">
                                    <h3 className="font-semibold text-gray-800" data-oid="5xzpsll">
                                        Delivery Methods
                                    </h3>
                                    <div className="space-y-3" data-oid="tus4-cr">
                                        <div
                                            className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"
                                            data-oid="11::h23"
                                        >
                                            <Mail
                                                className="h-5 w-5 text-blue-600"
                                                data-oid="5y3mk.z"
                                            />

                                            <span className="text-gray-700" data-oid="g3m868h">
                                                Email Notifications
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                                            data-oid="xh0ocyd"
                                        >
                                            <MessageCircle
                                                className="h-5 w-5 text-green-600"
                                                data-oid="ys:dis-"
                                            />

                                            <span className="text-gray-700" data-oid="b8c8zvo">
                                                WhatsApp Alerts (Premium)
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg"
                                            data-oid="5ktzqqz"
                                        >
                                            <Smartphone
                                                className="h-5 w-5 text-purple-600"
                                                data-oid="9x8_9vr"
                                            />

                                            <span className="text-gray-700" data-oid="1bn38q7">
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
                <section className="py-16 px-4" data-oid="g:7qn0c">
                    <div className="max-w-6xl mx-auto" data-oid="fi:6h9v">
                        <div className="text-center mb-12" data-oid="0wpr-or">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="7w2f4qj"
                            >
                                Success Stories
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="rjxf:jc">
                                See how NotifyX helped others land their dream jobs
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="z41:v7w">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                    data-oid="7nor240"
                                >
                                    <div
                                        className="flex items-center gap-4 mb-4"
                                        data-oid="s0rft:9"
                                    >
                                        <div className="text-3xl" data-oid="g8e4r-q">
                                            {testimonial.image}
                                        </div>
                                        <div data-oid="iu0ugxb">
                                            <h4
                                                className="font-bold text-gray-800"
                                                data-oid="j2on:ql"
                                            >
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-sm text-gray-600" data-oid="hdx7vut">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 italic mb-4" data-oid="9zlm_ta">
                                        "{testimonial.text}"
                                    </p>
                                    <div className="flex items-center gap-1" data-oid=":_b6v7f">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="h-4 w-4 text-yellow-500 fill-current"
                                                data-oid="b4o:g:p"
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-4" data-oid="v:lzx5m">
                    <div className="max-w-4xl mx-auto text-center" data-oid="w4z4bxq">
                        <div
                            className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] rounded-2xl p-8 text-white"
                            data-oid="u8qzlt3"
                        >
                            <h2 className="text-3xl font-bold mb-4" data-oid="m6ucdap">
                                Ready to Get Notified?
                            </h2>
                            <p className="text-xl mb-6 text-blue-100" data-oid="etyvl3b">
                                Join thousands of professionals who never miss an opportunity
                            </p>
                            <div
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                                data-oid="hp5zlax"
                            >
                                <button
                                    onClick={() => handleSubscribe('premium')}
                                    className="px-6 py-3 bg-white text-[hsl(196,80%,45%)] rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
                                    data-oid="ey6xb1u"
                                >
                                    <Zap className="inline h-5 w-5 mr-2" data-oid=":e4tudq" />
                                    Start Premium Trial
                                </button>
                                <Link
                                    href="/resources/community"
                                    className="px-6 py-3 border border-white text-white rounded-xl font-medium hover:bg-white hover:text-[hsl(196,80%,45%)] transition-all"
                                    data-oid="je2::6o"
                                >
                                    <TrendingUp
                                        className="inline h-5 w-5 mr-2"
                                        data-oid="3vkf_7p"
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
