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
            data-oid=":73--hc"
        >
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden -z-10" data-oid="htz1moe">
                <div
                    className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-20 rounded-full blur-3xl animate-blob"
                    data-oid="of96e4t"
                ></div>
                <div
                    className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"
                    data-oid=".utkk9m"
                ></div>
                <div
                    className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-4000"
                    data-oid="4_hk0c-"
                ></div>
            </div>

            <div className="relative z-10" data-oid="u1c_c8j">
                {/* Hero Section */}
                <section className="pt-24 pb-16 px-4" data-oid="-5g-0af">
                    <div className="max-w-6xl mx-auto text-center" data-oid="-peewzt">
                        <div
                            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-[hsl(196,80%,45%)] border border-[hsl(210,30%,95%)] mb-6"
                            data-oid="17ko-cz"
                        >
                            <Bell className="h-4 w-4" data-oid="zkptt85" />
                            Never Miss an Opportunity
                        </div>

                        <h1
                            className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
                            data-oid="kusxtde"
                        >
                            Stay Ahead with
                            <span
                                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] bg-clip-text text-transparent"
                                data-oid="-5a90c9"
                            >
                                {' '}
                                NotifyX
                            </span>
                        </h1>

                        <p
                            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                            data-oid="65cw2dj"
                        >
                            Get instant notifications about job opportunities, interview tips, and
                            career resources. Be the first to know, be the first to apply.
                        </p>

                        {/* Quick Subscribe Form */}
                        <div className="max-w-2xl mx-auto mb-12" data-oid="3zf:5b.">
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[hsl(210,30%,95%)]"
                                data-oid="a7etq8a"
                            >
                                <h3
                                    className="text-xl font-bold text-gray-800 mb-4"
                                    data-oid="x1.1pl1"
                                >
                                    Start Getting Notifications
                                </h3>
                                <div className="flex flex-col sm:flex-row gap-4" data-oid="bjapy:5">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)]"
                                        data-oid="bg:m8tl"
                                    />

                                    <button
                                        onClick={() => handleSubscribe('free')}
                                        className="px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
                                        data-oid="u9frwy_"
                                    >
                                        <Bell className="inline h-5 w-5 mr-2" data-oid="6fb3k0c" />
                                        Notify Me
                                    </button>
                                </div>
                                <p className="text-sm text-gray-500 mt-2" data-oid="l7qlgr5">
                                    Free forever. No spam. Unsubscribe anytime.
                                </p>
                            </div>
                        </div>

                        {/* Stats */}
                        <div
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                            data-oid="gq8ky64"
                        >
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                data-oid="b939aac"
                            >
                                <div
                                    className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                                    data-oid="lc03y3j"
                                >
                                    50K+
                                </div>
                                <div className="text-gray-600" data-oid="sox6.-8">
                                    Active Subscribers
                                </div>
                            </div>
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                data-oid="mn6kg.p"
                            >
                                <div
                                    className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                                    data-oid="s4zyvu0"
                                >
                                    1000+
                                </div>
                                <div className="text-gray-600" data-oid="d1__kbn">
                                    Jobs Notified Daily
                                </div>
                            </div>
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                data-oid="zguch64"
                            >
                                <div
                                    className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                                    data-oid="sb_hgku"
                                >
                                    95%
                                </div>
                                <div className="text-gray-600" data-oid=".cz2s3_">
                                    Success Rate
                                </div>
                            </div>
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                data-oid="eupf-yz"
                            >
                                <div
                                    className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                                    data-oid="qz5xer8"
                                >
                                    24/7
                                </div>
                                <div className="text-gray-600" data-oid="nw1uo76">
                                    Monitoring
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Notification Types */}
                <section className="py-16 px-4" data-oid="1n0._rr">
                    <div className="max-w-6xl mx-auto" data-oid="b:rxu3y">
                        <div className="text-center mb-12" data-oid="usf4m_0">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="-4vmtd-"
                            >
                                What You'll Get Notified About
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="_r1gj1d">
                                Choose what matters most to your career
                            </p>
                        </div>

                        <div
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                            data-oid="a:hltix"
                        >
                            {notificationTypes.map((type, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                    data-oid="1mcww5:"
                                >
                                    <div
                                        className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto`}
                                        data-oid=".r38mt9"
                                    >
                                        {type.icon}
                                    </div>
                                    <h3
                                        className="text-xl font-bold text-gray-800 mb-2 text-center"
                                        data-oid="uwlh_ok"
                                    >
                                        {type.title}
                                    </h3>
                                    <p
                                        className="text-gray-600 text-center mb-4"
                                        data-oid="6ajba_r"
                                    >
                                        {type.description}
                                    </p>
                                    <div className="text-center" data-oid="k.wd.23">
                                        <span
                                            className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                                            data-oid="a9kqkpg"
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
                <section className="py-16 px-4" data-oid="f5hvaiw">
                    <div className="max-w-6xl mx-auto" data-oid="0ipkqnk">
                        <div className="text-center mb-12" data-oid=".2k3lfu">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="nj1qzdd"
                            >
                                Choose Your Plan
                            </h2>
                            <p className="text-xl text-gray-600" data-oid=":2lox5_">
                                Upgrade to premium for advanced features and priority access
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="_k66y30">
                            {pricingPlans.map((plan, index) => (
                                <div
                                    key={index}
                                    className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 transform hover:-translate-y-2 ${
                                        plan.popular
                                            ? 'border-[hsl(196,80%,45%)] shadow-xl scale-105'
                                            : 'border-[hsl(210,30%,95%)] hover:shadow-xl'
                                    }`}
                                    data-oid="8dioq0i"
                                >
                                    {plan.popular && (
                                        <div className="text-center mb-4" data-oid="-0k15xj">
                                            <span
                                                className="inline-block px-3 py-1 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-full text-sm font-medium"
                                                data-oid="y8wl6do"
                                            >
                                                Most Popular
                                            </span>
                                        </div>
                                    )}

                                    <div className="text-center mb-6" data-oid="gfrxzsa">
                                        <h3
                                            className="text-2xl font-bold text-gray-800 mb-2"
                                            data-oid="qsw3m:6"
                                        >
                                            {plan.name}
                                        </h3>
                                        <div
                                            className="text-4xl font-bold text-[hsl(196,80%,45%)] mb-1"
                                            data-oid="k.7er4s"
                                        >
                                            {plan.price}
                                            <span
                                                className="text-lg text-gray-600"
                                                data-oid="jjjk933"
                                            >
                                                /{plan.period}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="space-y-3 mb-8" data-oid="t9kuel4">
                                        {plan.features.map((feature, featureIndex) => (
                                            <div
                                                key={featureIndex}
                                                className="flex items-center gap-3"
                                                data-oid="vou.t5y"
                                            >
                                                <CheckCircle
                                                    className="h-5 w-5 text-green-500 flex-shrink-0"
                                                    data-oid="2b7qs8u"
                                                />

                                                <span className="text-gray-700" data-oid=":4y4sbl">
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
                                        data-oid="phaxqkg"
                                    >
                                        {plan.buttonText}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Premium Features */}
                <section className="py-16 px-4" data-oid="j60pnmb">
                    <div className="max-w-6xl mx-auto" data-oid="puw-dyv">
                        <div className="text-center mb-12" data-oid=".jjh0l6">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="-eu1mjf"
                            >
                                Premium Features
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="qrtbhql">
                                Get the competitive edge with NotifyX Premium
                            </p>
                        </div>

                        <div
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                            data-oid="gdez.sx"
                        >
                            {premiumFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)] hover:shadow-lg transition-all"
                                    data-oid="k:rb:_z"
                                >
                                    <feature.icon
                                        className="h-12 w-12 text-[hsl(196,80%,45%)] mb-4 mx-auto"
                                        data-oid="g4cpgfn"
                                    />

                                    <h3
                                        className="text-lg font-bold text-gray-800 mb-2 text-center"
                                        data-oid="080j1_6"
                                    >
                                        {feature.title}
                                    </h3>
                                    <p
                                        className="text-gray-600 text-center text-sm"
                                        data-oid="rmucgit"
                                    >
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Notification Preferences */}
                <section className="py-16 px-4" data-oid="gwzcroa">
                    <div className="max-w-4xl mx-auto" data-oid="sip991v">
                        <div
                            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)]"
                            data-oid="u24v0fd"
                        >
                            <div className="text-center mb-8" data-oid="_th84e3">
                                <h2
                                    className="text-2xl font-bold text-gray-800 mb-4"
                                    data-oid="w:2c2f5"
                                >
                                    Customize Your Notifications
                                </h2>
                                <p className="text-gray-600" data-oid="rs-w4by">
                                    Choose what you want to be notified about
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6" data-oid="nwl.1:t">
                                <div className="space-y-4" data-oid="2bq2_8s">
                                    <h3 className="font-semibold text-gray-800" data-oid="ebf9qby">
                                        Notification Types
                                    </h3>
                                    {Object.entries(preferences).map(([key, value]) => (
                                        <label
                                            key={key}
                                            className="flex items-center gap-3 cursor-pointer"
                                            data-oid="i45t4iq"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={value}
                                                onChange={() => handlePreferenceChange(key)}
                                                className="w-5 h-5 text-[hsl(196,80%,45%)] rounded focus:ring-[hsl(196,80%,45%)]"
                                                data-oid="rgk821k"
                                            />

                                            <span
                                                className="text-gray-700 capitalize"
                                                data-oid="ftv7_zd"
                                            >
                                                {key.replace(/([A-Z])/g, ' $1').trim()}
                                            </span>
                                        </label>
                                    ))}
                                </div>

                                <div className="space-y-4" data-oid="ft5e9db">
                                    <h3 className="font-semibold text-gray-800" data-oid="i6pexbf">
                                        Delivery Methods
                                    </h3>
                                    <div className="space-y-3" data-oid="5g15we3">
                                        <div
                                            className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"
                                            data-oid="0flx9jj"
                                        >
                                            <Mail
                                                className="h-5 w-5 text-blue-600"
                                                data-oid="rpyaj8y"
                                            />

                                            <span className="text-gray-700" data-oid="sgm9mak">
                                                Email Notifications
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                                            data-oid="v5xkso5"
                                        >
                                            <MessageCircle
                                                className="h-5 w-5 text-green-600"
                                                data-oid="0k_ra8v"
                                            />

                                            <span className="text-gray-700" data-oid="t91__jz">
                                                WhatsApp Alerts (Premium)
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg"
                                            data-oid="wsv7hw:"
                                        >
                                            <Smartphone
                                                className="h-5 w-5 text-purple-600"
                                                data-oid="t4:h6_j"
                                            />

                                            <span className="text-gray-700" data-oid="-3c3p.c">
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
                <section className="py-16 px-4" data-oid="ls:gdwc">
                    <div className="max-w-6xl mx-auto" data-oid="cevfqcj">
                        <div className="text-center mb-12" data-oid="g4cde6a">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="hgul0-k"
                            >
                                Success Stories
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="gcx1c0e">
                                See how NotifyX helped others land their dream jobs
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="ioa7256">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                    data-oid="q6de2dd"
                                >
                                    <div
                                        className="flex items-center gap-4 mb-4"
                                        data-oid="qvjczic"
                                    >
                                        <div className="text-3xl" data-oid="i:9w0he">
                                            {testimonial.image}
                                        </div>
                                        <div data-oid="oq6w19-">
                                            <h4
                                                className="font-bold text-gray-800"
                                                data-oid="2z0k2le"
                                            >
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-sm text-gray-600" data-oid="t.v-1r7">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 italic mb-4" data-oid="vkb2rka">
                                        "{testimonial.text}"
                                    </p>
                                    <div className="flex items-center gap-1" data-oid="m_b-rmr">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="h-4 w-4 text-yellow-500 fill-current"
                                                data-oid="9-z-0y7"
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-4" data-oid="_i4b5up">
                    <div className="max-w-4xl mx-auto text-center" data-oid="b5guks5">
                        <div
                            className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] rounded-2xl p-8 text-white"
                            data-oid="oseq9wg"
                        >
                            <h2 className="text-3xl font-bold mb-4" data-oid="xiiyft0">
                                Ready to Get Notified?
                            </h2>
                            <p className="text-xl mb-6 text-blue-100" data-oid="sacrj55">
                                Join thousands of professionals who never miss an opportunity
                            </p>
                            <div
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                                data-oid="zo0:fcq"
                            >
                                <button
                                    onClick={() => handleSubscribe('premium')}
                                    className="px-6 py-3 bg-white text-[hsl(196,80%,45%)] rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
                                    data-oid="y3-5aft"
                                >
                                    <Zap className="inline h-5 w-5 mr-2" data-oid=".mcmr4u" />
                                    Start Premium Trial
                                </button>
                                <Link
                                    href="/resources/community"
                                    className="px-6 py-3 border border-white text-white rounded-xl font-medium hover:bg-white hover:text-[hsl(196,80%,45%)] transition-all"
                                    data-oid="wmxq-j7"
                                >
                                    <TrendingUp
                                        className="inline h-5 w-5 mr-2"
                                        data-oid=":3ml7pb"
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
