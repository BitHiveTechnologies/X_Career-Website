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
            data-oid="3iii7yj"
        >
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden -z-10" data-oid="bla3sy2">
                <div
                    className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-20 rounded-full blur-3xl animate-blob"
                    data-oid="lw6_:b3"
                ></div>
                <div
                    className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"
                    data-oid="xie7ytm"
                ></div>
                <div
                    className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-4000"
                    data-oid="j0lcj-3"
                ></div>
            </div>

            <div className="relative z-10" data-oid="fy79:6u">
                {/* Hero Section */}
                <section className="pt-24 pb-16 px-4" data-oid="louk7fa">
                    <div className="max-w-6xl mx-auto text-center" data-oid="ot2gi0k">
                        <div
                            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-[hsl(196,80%,45%)] border border-[hsl(210,30%,95%)] mb-6"
                            data-oid="lxx-0l5"
                        >
                            <Bell className="h-4 w-4" data-oid="miw7:t." />
                            Never Miss an Opportunity
                        </div>

                        <h1
                            className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
                            data-oid="lu0gew3"
                        >
                            Stay Ahead with
                            <span
                                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] bg-clip-text text-transparent"
                                data-oid="k0b8221"
                            >
                                {' '}
                                NotifyX
                            </span>
                        </h1>

                        <p
                            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                            data-oid="xd9rh70"
                        >
                            Get instant notifications about job opportunities, interview tips, and
                            career resources. Be the first to know, be the first to apply.
                        </p>

                        {/* Quick Subscribe Form */}
                        <div className="max-w-2xl mx-auto mb-12" data-oid="uj9eja-">
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[hsl(210,30%,95%)]"
                                data-oid="1_-qvnp"
                            >
                                <h3
                                    className="text-xl font-bold text-gray-800 mb-4"
                                    data-oid="tw99az8"
                                >
                                    Start Getting Notifications
                                </h3>
                                <div className="flex flex-col sm:flex-row gap-4" data-oid="61_4o16">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)]"
                                        data-oid="wc3ugfz"
                                    />

                                    <button
                                        onClick={() => handleSubscribe('free')}
                                        className="px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
                                        data-oid="nz_lc:."
                                    >
                                        <Bell className="inline h-5 w-5 mr-2" data-oid="_wxxjja" />
                                        Notify Me
                                    </button>
                                </div>
                                <p className="text-sm text-gray-500 mt-2" data-oid="1-5:aj7">
                                    Free forever. No spam. Unsubscribe anytime.
                                </p>
                            </div>
                        </div>

                        {/* Stats */}
                        <div
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                            data-oid="16nqfdp"
                        >
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                data-oid="52djs2a"
                            >
                                <div
                                    className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                                    data-oid="hjsnxcm"
                                >
                                    50K+
                                </div>
                                <div className="text-gray-600" data-oid="e04j9qf">
                                    Active Subscribers
                                </div>
                            </div>
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                data-oid="3zq47h:"
                            >
                                <div
                                    className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                                    data-oid="q67nz17"
                                >
                                    1000+
                                </div>
                                <div className="text-gray-600" data-oid="p7ayi0e">
                                    Jobs Notified Daily
                                </div>
                            </div>
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                data-oid="w7qv3h2"
                            >
                                <div
                                    className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                                    data-oid="_yj38iq"
                                >
                                    95%
                                </div>
                                <div className="text-gray-600" data-oid="c95azan">
                                    Success Rate
                                </div>
                            </div>
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                data-oid="c:zg6zo"
                            >
                                <div
                                    className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                                    data-oid="beuinhh"
                                >
                                    24/7
                                </div>
                                <div className="text-gray-600" data-oid="s-b6gia">
                                    Monitoring
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Notification Types */}
                <section className="py-16 px-4" data-oid="i9oh1rc">
                    <div className="max-w-6xl mx-auto" data-oid="wct31x6">
                        <div className="text-center mb-12" data-oid=".trvkqg">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="r-c80cf"
                            >
                                What You'll Get Notified About
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="xy7lt1c">
                                Choose what matters most to your career
                            </p>
                        </div>

                        <div
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                            data-oid="mza_g3r"
                        >
                            {notificationTypes.map((type, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                    data-oid="._sxjo0"
                                >
                                    <div
                                        className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto`}
                                        data-oid="9cuupx_"
                                    >
                                        {type.icon}
                                    </div>
                                    <h3
                                        className="text-xl font-bold text-gray-800 mb-2 text-center"
                                        data-oid="30ehq1e"
                                    >
                                        {type.title}
                                    </h3>
                                    <p
                                        className="text-gray-600 text-center mb-4"
                                        data-oid="4d1_j_b"
                                    >
                                        {type.description}
                                    </p>
                                    <div className="text-center" data-oid="v.qirau">
                                        <span
                                            className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                                            data-oid="vg9u9jk"
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
                <section className="py-16 px-4" data-oid="wmt0.rk">
                    <div className="max-w-6xl mx-auto" data-oid="sjv0yaf">
                        <div className="text-center mb-12" data-oid="sjvsyek">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="xf3_tfa"
                            >
                                Choose Your Plan
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="c333ykq">
                                Upgrade to premium for advanced features and priority access
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="1du_r8t">
                            {pricingPlans.map((plan, index) => (
                                <div
                                    key={index}
                                    className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 transform hover:-translate-y-2 ${
                                        plan.popular
                                            ? 'border-[hsl(196,80%,45%)] shadow-xl scale-105'
                                            : 'border-[hsl(210,30%,95%)] hover:shadow-xl'
                                    }`}
                                    data-oid="gcm6c.s"
                                >
                                    {plan.popular && (
                                        <div className="text-center mb-4" data-oid="kc0sw23">
                                            <span
                                                className="inline-block px-3 py-1 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-full text-sm font-medium"
                                                data-oid="ma.4ka6"
                                            >
                                                Most Popular
                                            </span>
                                        </div>
                                    )}

                                    <div className="text-center mb-6" data-oid="za4xe:i">
                                        <h3
                                            className="text-2xl font-bold text-gray-800 mb-2"
                                            data-oid="t9g7jqw"
                                        >
                                            {plan.name}
                                        </h3>
                                        <div
                                            className="text-4xl font-bold text-[hsl(196,80%,45%)] mb-1"
                                            data-oid="blcrjq6"
                                        >
                                            {plan.price}
                                            <span
                                                className="text-lg text-gray-600"
                                                data-oid="97o:s76"
                                            >
                                                /{plan.period}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="space-y-3 mb-8" data-oid="64pqj_c">
                                        {plan.features.map((feature, featureIndex) => (
                                            <div
                                                key={featureIndex}
                                                className="flex items-center gap-3"
                                                data-oid="azlv_a1"
                                            >
                                                <CheckCircle
                                                    className="h-5 w-5 text-green-500 flex-shrink-0"
                                                    data-oid="b_q9fhx"
                                                />

                                                <span className="text-gray-700" data-oid="2xgcj68">
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
                                        data-oid="2ny17y9"
                                    >
                                        {plan.buttonText}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Premium Features */}
                <section className="py-16 px-4" data-oid="z02yajl">
                    <div className="max-w-6xl mx-auto" data-oid="ouqiti4">
                        <div className="text-center mb-12" data-oid="j:4y._u">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="8956tzd"
                            >
                                Premium Features
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="_fw:awb">
                                Get the competitive edge with NotifyX Premium
                            </p>
                        </div>

                        <div
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                            data-oid="1ev5oac"
                        >
                            {premiumFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)] hover:shadow-lg transition-all"
                                    data-oid="6u7_oyh"
                                >
                                    <feature.icon
                                        className="h-12 w-12 text-[hsl(196,80%,45%)] mb-4 mx-auto"
                                        data-oid="q-xkst3"
                                    />

                                    <h3
                                        className="text-lg font-bold text-gray-800 mb-2 text-center"
                                        data-oid="o23is1c"
                                    >
                                        {feature.title}
                                    </h3>
                                    <p
                                        className="text-gray-600 text-center text-sm"
                                        data-oid="3-zg8om"
                                    >
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Notification Preferences */}
                <section className="py-16 px-4" data-oid="c.-8b2_">
                    <div className="max-w-4xl mx-auto" data-oid="i-3_rct">
                        <div
                            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)]"
                            data-oid="l72ulg7"
                        >
                            <div className="text-center mb-8" data-oid="vos10_p">
                                <h2
                                    className="text-2xl font-bold text-gray-800 mb-4"
                                    data-oid="k9:.9n1"
                                >
                                    Customize Your Notifications
                                </h2>
                                <p className="text-gray-600" data-oid=":odgbct">
                                    Choose what you want to be notified about
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6" data-oid="20rk96u">
                                <div className="space-y-4" data-oid="w19rg.5">
                                    <h3 className="font-semibold text-gray-800" data-oid="b3f2to:">
                                        Notification Types
                                    </h3>
                                    {Object.entries(preferences).map(([key, value]) => (
                                        <label
                                            key={key}
                                            className="flex items-center gap-3 cursor-pointer"
                                            data-oid="imy4.w0"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={value}
                                                onChange={() => handlePreferenceChange(key)}
                                                className="w-5 h-5 text-[hsl(196,80%,45%)] rounded focus:ring-[hsl(196,80%,45%)]"
                                                data-oid="09j8m1n"
                                            />

                                            <span
                                                className="text-gray-700 capitalize"
                                                data-oid=":x_qx92"
                                            >
                                                {key.replace(/([A-Z])/g, ' $1').trim()}
                                            </span>
                                        </label>
                                    ))}
                                </div>

                                <div className="space-y-4" data-oid="2n43s-x">
                                    <h3 className="font-semibold text-gray-800" data-oid="vqi7ttj">
                                        Delivery Methods
                                    </h3>
                                    <div className="space-y-3" data-oid="ajlbor2">
                                        <div
                                            className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"
                                            data-oid="s4--8db"
                                        >
                                            <Mail
                                                className="h-5 w-5 text-blue-600"
                                                data-oid="x7fvw1_"
                                            />

                                            <span className="text-gray-700" data-oid="eqqu9v2">
                                                Email Notifications
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                                            data-oid="-.whcaq"
                                        >
                                            <MessageCircle
                                                className="h-5 w-5 text-green-600"
                                                data-oid="u2pxw48"
                                            />

                                            <span className="text-gray-700" data-oid="cz6okpb">
                                                WhatsApp Alerts (Premium)
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg"
                                            data-oid="w1t1d48"
                                        >
                                            <Smartphone
                                                className="h-5 w-5 text-purple-600"
                                                data-oid="c4u_u0v"
                                            />

                                            <span className="text-gray-700" data-oid="bpp6kq5">
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
                <section className="py-16 px-4" data-oid="436:f05">
                    <div className="max-w-6xl mx-auto" data-oid="jsoimne">
                        <div className="text-center mb-12" data-oid="yb6qosw">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="j2dsnxc"
                            >
                                Success Stories
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="3a4gc9a">
                                See how NotifyX helped others land their dream jobs
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="sar41ag">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                    data-oid="bzankqa"
                                >
                                    <div
                                        className="flex items-center gap-4 mb-4"
                                        data-oid="2dozibe"
                                    >
                                        <div className="text-3xl" data-oid="rwbf:mv">
                                            {testimonial.image}
                                        </div>
                                        <div data-oid="o.comqm">
                                            <h4
                                                className="font-bold text-gray-800"
                                                data-oid="fi2gy_n"
                                            >
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-sm text-gray-600" data-oid="traowt-">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 italic mb-4" data-oid="c_1ryd8">
                                        "{testimonial.text}"
                                    </p>
                                    <div className="flex items-center gap-1" data-oid="31d60wj">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="h-4 w-4 text-yellow-500 fill-current"
                                                data-oid="nvifwz9"
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-4" data-oid="huw63t5">
                    <div className="max-w-4xl mx-auto text-center" data-oid="0tpkf1i">
                        <div
                            className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] rounded-2xl p-8 text-white"
                            data-oid="ut2la:-"
                        >
                            <h2 className="text-3xl font-bold mb-4" data-oid="foqigrn">
                                Ready to Get Notified?
                            </h2>
                            <p className="text-xl mb-6 text-blue-100" data-oid="antfkuo">
                                Join thousands of professionals who never miss an opportunity
                            </p>
                            <div
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                                data-oid="r-iaqg."
                            >
                                <button
                                    onClick={() => handleSubscribe('premium')}
                                    className="px-6 py-3 bg-white text-[hsl(196,80%,45%)] rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
                                    data-oid="il8ij00"
                                >
                                    <Zap className="inline h-5 w-5 mr-2" data-oid="xu:bkpb" />
                                    Start Premium Trial
                                </button>
                                <Link
                                    href="/resources/community"
                                    className="px-6 py-3 border border-white text-white rounded-xl font-medium hover:bg-white hover:text-[hsl(196,80%,45%)] transition-all"
                                    data-oid="fnggdf7"
                                >
                                    <TrendingUp
                                        className="inline h-5 w-5 mr-2"
                                        data-oid=".k5-u9z"
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
