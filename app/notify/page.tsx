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
            data-oid="48p.bgz"
        >
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden -z-10" data-oid="fx22kd8">
                <div
                    className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-20 rounded-full blur-3xl animate-blob"
                    data-oid="ells6_k"
                ></div>
                <div
                    className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"
                    data-oid="ervtg5v"
                ></div>
                <div
                    className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-4000"
                    data-oid="9g2tpzu"
                ></div>
            </div>

            <div className="relative z-10" data-oid="ozedpko">
                {/* Hero Section */}
                <section className="pt-24 pb-16 px-4" data-oid="y4rp6lp">
                    <div className="max-w-6xl mx-auto text-center" data-oid="enve79y">
                        <div
                            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-[hsl(196,80%,45%)] border border-[hsl(210,30%,95%)] mb-6"
                            data-oid="zlvl0l-"
                        >
                            <Bell className="h-4 w-4" data-oid="b-tfetr" />
                            Never Miss an Opportunity
                        </div>

                        <h1
                            className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
                            data-oid="bq0.yta"
                        >
                            Stay Ahead with
                            <span
                                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] bg-clip-text text-transparent"
                                data-oid="xa3ahub"
                            >
                                {' '}
                                NotifyX
                            </span>
                        </h1>

                        <p
                            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                            data-oid="ezobu6_"
                        >
                            Get instant notifications about job opportunities, interview tips, and
                            career resources. Be the first to know, be the first to apply.
                        </p>

                        {/* Quick Subscribe Form */}
                        <div className="max-w-2xl mx-auto mb-12" data-oid="jcum6wd">
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[hsl(210,30%,95%)]"
                                data-oid="n8:f40e"
                            >
                                <h3
                                    className="text-xl font-bold text-gray-800 mb-4"
                                    data-oid="dow8ldi"
                                >
                                    Start Getting Notifications
                                </h3>
                                <div className="flex flex-col sm:flex-row gap-4" data-oid="7rh1z5j">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)]"
                                        data-oid="tj-h6pi"
                                    />

                                    <button
                                        onClick={() => handleSubscribe('free')}
                                        className="px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
                                        data-oid="xsaow:4"
                                    >
                                        <Bell className="inline h-5 w-5 mr-2" data-oid="6b-5wck" />
                                        Notify Me
                                    </button>
                                </div>
                                <p className="text-sm text-gray-500 mt-2" data-oid="f6.s3cj">
                                    Free forever. No spam. Unsubscribe anytime.
                                </p>
                            </div>
                        </div>

                        {/* Stats */}
                        <div
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                            data-oid="i7_8-b3"
                        >
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                data-oid="0aapiz4"
                            >
                                <div
                                    className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                                    data-oid="f4e-:82"
                                >
                                    50K+
                                </div>
                                <div className="text-gray-600" data-oid="ujglqkd">
                                    Active Subscribers
                                </div>
                            </div>
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                data-oid="wwzq6.m"
                            >
                                <div
                                    className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                                    data-oid="d-sm1ay"
                                >
                                    1000+
                                </div>
                                <div className="text-gray-600" data-oid="ui0vj46">
                                    Jobs Notified Daily
                                </div>
                            </div>
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                data-oid="s5_r.q5"
                            >
                                <div
                                    className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                                    data-oid="itg3np5"
                                >
                                    95%
                                </div>
                                <div className="text-gray-600" data-oid="x:35h.y">
                                    Success Rate
                                </div>
                            </div>
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                data-oid="gv:oe7x"
                            >
                                <div
                                    className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                                    data-oid="48ku:rh"
                                >
                                    24/7
                                </div>
                                <div className="text-gray-600" data-oid="4c91mdr">
                                    Monitoring
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Notification Types */}
                <section className="py-16 px-4" data-oid="fncje8q">
                    <div className="max-w-6xl mx-auto" data-oid="4g_rev5">
                        <div className="text-center mb-12" data-oid="vpo49dl">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="o_delhj"
                            >
                                What You'll Get Notified About
                            </h2>
                            <p className="text-xl text-gray-600" data-oid=".pyphm2">
                                Choose what matters most to your career
                            </p>
                        </div>

                        <div
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                            data-oid="u3.fzxu"
                        >
                            {notificationTypes.map((type, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                    data-oid="z:5hy86"
                                >
                                    <div
                                        className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto`}
                                        data-oid="wmw.mlg"
                                    >
                                        {type.icon}
                                    </div>
                                    <h3
                                        className="text-xl font-bold text-gray-800 mb-2 text-center"
                                        data-oid="tv7i7fq"
                                    >
                                        {type.title}
                                    </h3>
                                    <p
                                        className="text-gray-600 text-center mb-4"
                                        data-oid=":ur89v6"
                                    >
                                        {type.description}
                                    </p>
                                    <div className="text-center" data-oid="0wkg7-b">
                                        <span
                                            className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                                            data-oid="etccptv"
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
                <section className="py-16 px-4" data-oid="h--idtw">
                    <div className="max-w-6xl mx-auto" data-oid="w0417ba">
                        <div className="text-center mb-12" data-oid="yt-bj:n">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid=".p_wjje"
                            >
                                Choose Your Plan
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="jau3odm">
                                Upgrade to premium for advanced features and priority access
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="6pqlakh">
                            {pricingPlans.map((plan, index) => (
                                <div
                                    key={index}
                                    className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 transform hover:-translate-y-2 ${
                                        plan.popular
                                            ? 'border-[hsl(196,80%,45%)] shadow-xl scale-105'
                                            : 'border-[hsl(210,30%,95%)] hover:shadow-xl'
                                    }`}
                                    data-oid="hq-brz6"
                                >
                                    {plan.popular && (
                                        <div className="text-center mb-4" data-oid="tivmwu:">
                                            <span
                                                className="inline-block px-3 py-1 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-full text-sm font-medium"
                                                data-oid="_ta-eta"
                                            >
                                                Most Popular
                                            </span>
                                        </div>
                                    )}

                                    <div className="text-center mb-6" data-oid="z.cxih-">
                                        <h3
                                            className="text-2xl font-bold text-gray-800 mb-2"
                                            data-oid="k9s-huq"
                                        >
                                            {plan.name}
                                        </h3>
                                        <div
                                            className="text-4xl font-bold text-[hsl(196,80%,45%)] mb-1"
                                            data-oid="291dm8p"
                                        >
                                            {plan.price}
                                            <span
                                                className="text-lg text-gray-600"
                                                data-oid="08s9ock"
                                            >
                                                /{plan.period}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="space-y-3 mb-8" data-oid="xrvlr0w">
                                        {plan.features.map((feature, featureIndex) => (
                                            <div
                                                key={featureIndex}
                                                className="flex items-center gap-3"
                                                data-oid="nw8iq9m"
                                            >
                                                <CheckCircle
                                                    className="h-5 w-5 text-green-500 flex-shrink-0"
                                                    data-oid="cchxh1f"
                                                />

                                                <span className="text-gray-700" data-oid="143yiy0">
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
                                        data-oid="8gd1c_l"
                                    >
                                        {plan.buttonText}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Premium Features */}
                <section className="py-16 px-4" data-oid="k.bund3">
                    <div className="max-w-6xl mx-auto" data-oid="nh7x.lx">
                        <div className="text-center mb-12" data-oid="va2u-je">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="98qk3.0"
                            >
                                Premium Features
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="p4f:1fw">
                                Get the competitive edge with NotifyX Premium
                            </p>
                        </div>

                        <div
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                            data-oid="x:ntwhb"
                        >
                            {premiumFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)] hover:shadow-lg transition-all"
                                    data-oid="0r:32b1"
                                >
                                    <feature.icon
                                        className="h-12 w-12 text-[hsl(196,80%,45%)] mb-4 mx-auto"
                                        data-oid="-rzb7hr"
                                    />

                                    <h3
                                        className="text-lg font-bold text-gray-800 mb-2 text-center"
                                        data-oid="x5_xubl"
                                    >
                                        {feature.title}
                                    </h3>
                                    <p
                                        className="text-gray-600 text-center text-sm"
                                        data-oid="iputdnt"
                                    >
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Notification Preferences */}
                <section className="py-16 px-4" data-oid="61xm:8u">
                    <div className="max-w-4xl mx-auto" data-oid="9yyrt5p">
                        <div
                            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)]"
                            data-oid="mokaw2d"
                        >
                            <div className="text-center mb-8" data-oid="ecf4q:o">
                                <h2
                                    className="text-2xl font-bold text-gray-800 mb-4"
                                    data-oid="i85hphz"
                                >
                                    Customize Your Notifications
                                </h2>
                                <p className="text-gray-600" data-oid="l:a4age">
                                    Choose what you want to be notified about
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6" data-oid="r7j3_jt">
                                <div className="space-y-4" data-oid="2gt20af">
                                    <h3 className="font-semibold text-gray-800" data-oid="u7p.vbl">
                                        Notification Types
                                    </h3>
                                    {Object.entries(preferences).map(([key, value]) => (
                                        <label
                                            key={key}
                                            className="flex items-center gap-3 cursor-pointer"
                                            data-oid="78vhosi"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={value}
                                                onChange={() => handlePreferenceChange(key)}
                                                className="w-5 h-5 text-[hsl(196,80%,45%)] rounded focus:ring-[hsl(196,80%,45%)]"
                                                data-oid="603..2i"
                                            />

                                            <span
                                                className="text-gray-700 capitalize"
                                                data-oid="g2jggwk"
                                            >
                                                {key.replace(/([A-Z])/g, ' $1').trim()}
                                            </span>
                                        </label>
                                    ))}
                                </div>

                                <div className="space-y-4" data-oid="5wco3e_">
                                    <h3 className="font-semibold text-gray-800" data-oid="9e:47pm">
                                        Delivery Methods
                                    </h3>
                                    <div className="space-y-3" data-oid="8rgy94m">
                                        <div
                                            className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"
                                            data-oid="c48ge61"
                                        >
                                            <Mail
                                                className="h-5 w-5 text-blue-600"
                                                data-oid="gcqqaag"
                                            />

                                            <span className="text-gray-700" data-oid="9lsvu:o">
                                                Email Notifications
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                                            data-oid="x-r3it0"
                                        >
                                            <MessageCircle
                                                className="h-5 w-5 text-green-600"
                                                data-oid="808m2.d"
                                            />

                                            <span className="text-gray-700" data-oid="p.ht4h_">
                                                WhatsApp Alerts (Premium)
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg"
                                            data-oid="3a_x4rj"
                                        >
                                            <Smartphone
                                                className="h-5 w-5 text-purple-600"
                                                data-oid="vw0at9r"
                                            />

                                            <span className="text-gray-700" data-oid="1sn26o6">
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
                <section className="py-16 px-4" data-oid="ekmlnu8">
                    <div className="max-w-6xl mx-auto" data-oid="gixk:bj">
                        <div className="text-center mb-12" data-oid="ksvskwe">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid=".ppyrjv"
                            >
                                Success Stories
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="2haa5lk">
                                See how NotifyX helped others land their dream jobs
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="pxh0bah">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                    data-oid="0lxv-rz"
                                >
                                    <div
                                        className="flex items-center gap-4 mb-4"
                                        data-oid="h_wh9i6"
                                    >
                                        <div className="text-3xl" data-oid="5zn.2tq">
                                            {testimonial.image}
                                        </div>
                                        <div data-oid="9xsqk29">
                                            <h4
                                                className="font-bold text-gray-800"
                                                data-oid="7ngg27t"
                                            >
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-sm text-gray-600" data-oid="u37aki1">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 italic mb-4" data-oid="8ssvptu">
                                        "{testimonial.text}"
                                    </p>
                                    <div className="flex items-center gap-1" data-oid="l82pzv6">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="h-4 w-4 text-yellow-500 fill-current"
                                                data-oid="u.ny_n5"
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-4" data-oid="n2b:w94">
                    <div className="max-w-4xl mx-auto text-center" data-oid="0i0:n_2">
                        <div
                            className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] rounded-2xl p-8 text-white"
                            data-oid="8qi68d0"
                        >
                            <h2 className="text-3xl font-bold mb-4" data-oid="3azh8.o">
                                Ready to Get Notified?
                            </h2>
                            <p className="text-xl mb-6 text-blue-100" data-oid="53qdhe9">
                                Join thousands of professionals who never miss an opportunity
                            </p>
                            <div
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                                data-oid="c:d9yku"
                            >
                                <button
                                    onClick={() => handleSubscribe('premium')}
                                    className="px-6 py-3 bg-white text-[hsl(196,80%,45%)] rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
                                    data-oid="_22uy.f"
                                >
                                    <Zap className="inline h-5 w-5 mr-2" data-oid=":anv0pi" />
                                    Start Premium Trial
                                </button>
                                <Link
                                    href="/resources/community"
                                    className="px-6 py-3 border border-white text-white rounded-xl font-medium hover:bg-white hover:text-[hsl(196,80%,45%)] transition-all"
                                    data-oid="yezttzw"
                                >
                                    <TrendingUp
                                        className="inline h-5 w-5 mr-2"
                                        data-oid="ezsynvp"
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
