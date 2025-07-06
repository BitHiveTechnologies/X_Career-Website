'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    Linkedin,
    Users,
    TrendingUp,
    Award,
    ExternalLink,
    Share2,
    BookOpen,
    Target,
    Zap,
    CheckCircle,
} from 'lucide-react';

const linkedinFeatures = [
    {
        icon: '🎯',
        title: 'Profile Optimization',
        description: 'Get your LinkedIn profile reviewed by industry experts',
        action: 'Optimize Profile',
        color: 'from-blue-500 to-cyan-500',
    },
    {
        icon: '🤝',
        title: 'Networking Events',
        description: 'Join exclusive LinkedIn networking events and webinars',
        action: 'View Events',
        color: 'from-green-500 to-emerald-500',
    },
    {
        icon: '📈',
        title: 'Content Strategy',
        description: 'Learn how to create engaging content that gets noticed',
        action: 'Learn More',
        color: 'from-purple-500 to-pink-500',
    },
    {
        icon: '💼',
        title: 'Job Referrals',
        description: 'Get referred to top companies through our LinkedIn network',
        action: 'Get Referred',
        color: 'from-orange-500 to-red-500',
    },
];

const linkedinStats = [
    { label: 'LinkedIn Connections', value: '100K+', icon: Users },
    { label: 'Profile Views', value: '50K+', icon: TrendingUp },
    { label: 'Success Stories', value: '1,000+', icon: Award },
    { label: 'Network Growth', value: '25%', icon: Zap },
];

const linkedinTips = [
    {
        category: 'Profile Optimization',
        tips: [
            'Use a professional headshot as your profile picture',
            'Write a compelling headline that showcases your value',
            'Craft a summary that tells your professional story',
            'Add relevant skills and get endorsements',
            'Include quantifiable achievements in your experience',
        ],
    },
    {
        category: 'Content Strategy',
        tips: [
            'Share industry insights and trends regularly',
            "Comment thoughtfully on others' posts",
            'Create original content about your expertise',
            'Use relevant hashtags to increase visibility',
            'Engage with your network consistently',
        ],
    },
    {
        category: 'Networking',
        tips: [
            'Connect with colleagues and industry professionals',
            'Send personalized connection requests',
            'Participate in LinkedIn groups and discussions',
            'Attend virtual networking events',
            'Follow up with new connections meaningfully',
        ],
    },
];

const successStories = [
    {
        name: 'Rajesh Kumar',
        role: 'Software Engineer at Google',
        image: '👨‍💻',
        story: 'Optimized my LinkedIn profile and got 5 interview calls in 2 weeks!',
        growth: '+300% profile views',
    },
    {
        name: 'Priya Sharma',
        role: 'Product Manager at Microsoft',
        image: '👩‍💼',
        story: 'LinkedIn networking helped me transition from developer to PM role.',
        growth: '+500 connections',
    },
    {
        name: 'Amit Patel',
        role: 'Data Scientist at Amazon',
        image: '👨‍🔬',
        story: 'Got my dream job through a LinkedIn referral from our community.',
        growth: '+200% engagement',
    },
];

export default function LinkedInPage() {
    const [activeTab, setActiveTab] = useState('overview');

    const handleLinkedInRedirect = () => {
        // This will be replaced with actual LinkedIn URL later
        alert('Redirecting to LinkedIn page...');
        // window.open('https://linkedin.com/company/your-company', '_blank');
    };

    return (
        <div
            className="min-h-screen bg-gradient-to-b from-[hsl(210,50%,98%)] to-[hsl(196,60%,95%)]"
            data-oid="te12-1w"
        >
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden -z-10" data-oid="kc3jsjk">
                <div
                    className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-20 rounded-full blur-3xl animate-blob"
                    data-oid="jcok949"
                ></div>
                <div
                    className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"
                    data-oid="h90p5rn"
                ></div>
                <div
                    className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-4000"
                    data-oid="fm3wz8g"
                ></div>
            </div>

            <div className="relative z-10" data-oid="pp8pr_-">
                {/* Hero Section */}
                <section className="pt-24 pb-16 px-4" data-oid="p6qcrth">
                    <div className="max-w-6xl mx-auto text-center" data-oid="fnc_rrr">
                        <div
                            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-[hsl(196,80%,45%)] border border-[hsl(210,30%,95%)] mb-6"
                            data-oid="pkrf_bt"
                        >
                            <Linkedin className="h-4 w-4" data-oid="fxo.j9_" />
                            Professional Networking Made Easy
                        </div>

                        <h1
                            className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
                            data-oid="6_i12ch"
                        >
                            Master Your
                            <span
                                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] bg-clip-text text-transparent"
                                data-oid=":tl:i09"
                            >
                                {' '}
                                LinkedIn Presence
                            </span>
                        </h1>

                        <p
                            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                            data-oid="bq:w0ky"
                        >
                            Build a powerful LinkedIn profile, expand your professional network, and
                            unlock career opportunities with our expert guidance and community
                            support.
                        </p>

                        <div
                            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                            data-oid="bm1_jx0"
                        >
                            <button
                                onClick={handleLinkedInRedirect}
                                className="px-8 py-4 bg-[#0077B5] text-white rounded-xl font-medium hover:bg-[#005885] transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                                data-oid="knnlizi"
                            >
                                <Linkedin className="h-5 w-5" data-oid="77rboa3" />
                                Follow Us on LinkedIn
                                <ExternalLink className="h-4 w-4" data-oid="n1u_0o0" />
                            </button>
                            <Link
                                href="/resources"
                                className="px-8 py-4 border border-[hsl(196,80%,45%)] text-[hsl(196,80%,45%)] rounded-xl font-medium hover:bg-[hsl(196,80%,45%)]/10 transition-all"
                                data-oid="0-_7.tq"
                            >
                                <BookOpen className="inline h-5 w-5 mr-2" data-oid="m96mfv6" />
                                LinkedIn Resources
                            </Link>
                        </div>

                        {/* LinkedIn Stats */}
                        <div
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                            data-oid="pj4brg."
                        >
                            {linkedinStats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                    data-oid="l:h3b.f"
                                >
                                    <stat.icon
                                        className="h-8 w-8 text-[#0077B5] mx-auto mb-2"
                                        data-oid="dqry3n6"
                                    />

                                    <div
                                        className="text-2xl font-bold text-gray-800"
                                        data-oid="bjfemkc"
                                    >
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-600" data-oid="r8n9cv_">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* LinkedIn Features */}
                <section className="py-16 px-4" data-oid="7nla_l_">
                    <div className="max-w-6xl mx-auto" data-oid="fzo4nu3">
                        <div className="text-center mb-12" data-oid="z9z7vs5">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="kwaepfw"
                            >
                                LinkedIn Success Services
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="z2u:e4q">
                                Everything you need to build a powerful LinkedIn presence
                            </p>
                        </div>

                        <div
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                            data-oid="w9.-1ka"
                        >
                            {linkedinFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                    data-oid="reprwgl"
                                >
                                    <div
                                        className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto`}
                                        data-oid="y6ax9dk"
                                    >
                                        {feature.icon}
                                    </div>
                                    <h3
                                        className="text-xl font-bold text-gray-800 mb-2 text-center"
                                        data-oid="mpl6enb"
                                    >
                                        {feature.title}
                                    </h3>
                                    <p
                                        className="text-gray-600 text-center mb-4"
                                        data-oid="40rwx0n"
                                    >
                                        {feature.description}
                                    </p>
                                    <button
                                        className="w-full px-4 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
                                        data-oid="pep23y."
                                    >
                                        {feature.action}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* LinkedIn Tips */}
                <section className="py-16 px-4" data-oid="sw_ek_a">
                    <div className="max-w-6xl mx-auto" data-oid="p2dpdox">
                        <div className="text-center mb-12" data-oid="8-ejau7">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="ob3347u"
                            >
                                LinkedIn Success Tips
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="v9edhed">
                                Expert advice to maximize your LinkedIn impact
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="i409ijq">
                            {linkedinTips.map((section, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                    data-oid="umgc9-s"
                                >
                                    <h3
                                        className="text-xl font-bold text-gray-800 mb-4 text-center"
                                        data-oid="ql:64vm"
                                    >
                                        {section.category}
                                    </h3>
                                    <div className="space-y-3" data-oid="9sykr:s">
                                        {section.tips.map((tip, tipIndex) => (
                                            <div
                                                key={tipIndex}
                                                className="flex items-start gap-3"
                                                data-oid="n:przf8"
                                            >
                                                <CheckCircle
                                                    className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"
                                                    data-oid="165rx4k"
                                                />

                                                <span
                                                    className="text-gray-700 text-sm"
                                                    data-oid="rupqoz2"
                                                >
                                                    {tip}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Success Stories */}
                <section className="py-16 px-4" data-oid="wuq33to">
                    <div className="max-w-6xl mx-auto" data-oid="ohr-ok5">
                        <div className="text-center mb-12" data-oid="_zgamzp">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="lyqekzb"
                            >
                                LinkedIn Success Stories
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="q:wntgh">
                                Real results from our community members
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="p0.j2bg">
                            {successStories.map((story, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                    data-oid="2840e0c"
                                >
                                    <div className="text-center mb-4" data-oid="m2g65y3">
                                        <div className="text-4xl mb-2" data-oid="0:6mn8r">
                                            {story.image}
                                        </div>
                                        <h3 className="font-bold text-gray-800" data-oid="ylo74y1">
                                            {story.name}
                                        </h3>
                                        <p className="text-sm text-[#0077B5]" data-oid="miktg.y">
                                            {story.role}
                                        </p>
                                    </div>
                                    <p
                                        className="text-gray-700 italic text-center mb-4"
                                        data-oid="73scklz"
                                    >
                                        "{story.story}"
                                    </p>
                                    <div className="text-center" data-oid="7468-j-">
                                        <span
                                            className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                                            data-oid="ky92etr"
                                        >
                                            {story.growth}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* LinkedIn Content Calendar */}
                <section className="py-16 px-4" data-oid="8zl72uw">
                    <div className="max-w-4xl mx-auto" data-oid="48.7xxv">
                        <div
                            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)]"
                            data-oid="m0aow02"
                        >
                            <div className="text-center mb-8" data-oid="6uqub:e">
                                <h2
                                    className="text-2xl font-bold text-gray-800 mb-4"
                                    data-oid="yk3ev1w"
                                >
                                    Weekly LinkedIn Content Calendar
                                </h2>
                                <p className="text-gray-600" data-oid="3rc-l4_">
                                    Stay consistent with our proven content strategy
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6" data-oid="k2vc4ab">
                                <div className="space-y-4" data-oid="s5jknxc">
                                    <div
                                        className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"
                                        data-oid="f-_0k-c"
                                    >
                                        <div
                                            className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                            data-oid="_2yz4dy"
                                        >
                                            M
                                        </div>
                                        <div data-oid="tla8qlv">
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="mjogz.0"
                                            >
                                                Monday Motivation
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="la9ji-o"
                                            >
                                                Share career insights or achievements
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                                        data-oid="9ozodrt"
                                    >
                                        <div
                                            className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                            data-oid="z7t2p0f"
                                        >
                                            T
                                        </div>
                                        <div data-oid="6wtre6r">
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="_9tvzfc"
                                            >
                                                Tech Tuesday
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="s1b.moa"
                                            >
                                                Share technical knowledge or tutorials
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg"
                                        data-oid="2o3nte6"
                                    >
                                        <div
                                            className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                            data-oid="95vlz5p"
                                        >
                                            W
                                        </div>
                                        <div data-oid="vgymzo-">
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="gn:ymwp"
                                            >
                                                Wisdom Wednesday
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="x25ole4"
                                            >
                                                Share lessons learned or advice
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4" data-oid="atw91e9">
                                    <div
                                        className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg"
                                        data-oid="thg81jo"
                                    >
                                        <div
                                            className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                            data-oid="8o9:ju1"
                                        >
                                            T
                                        </div>
                                        <div data-oid="qlb0s:t">
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="58nh4u-"
                                            >
                                                Throwback Thursday
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="wn1.d91"
                                            >
                                                Share your journey or milestones
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center gap-3 p-3 bg-pink-50 rounded-lg"
                                        data-oid="gpwjy63"
                                    >
                                        <div
                                            className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                            data-oid=".k_2d.c"
                                        >
                                            F
                                        </div>
                                        <div data-oid="1rzsd5h">
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="lloqe9n"
                                            >
                                                Feature Friday
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="1l6q:q9"
                                            >
                                                Highlight tools, resources, or people
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg"
                                        data-oid="n6i3_:p"
                                    >
                                        <div
                                            className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                            data-oid="2mqfclz"
                                        >
                                            S
                                        </div>
                                        <div data-oid="xp:x:i2">
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="oy1:0ed"
                                            >
                                                Saturday Spotlight
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="_v-:abu"
                                            >
                                                Engage with community content
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-4" data-oid=".a-lts3">
                    <div className="max-w-4xl mx-auto text-center" data-oid="m0l804b">
                        <div
                            className="bg-gradient-to-r from-[#0077B5] to-[#005885] rounded-2xl p-8 text-white"
                            data-oid="6.:f_dq"
                        >
                            <h2 className="text-3xl font-bold mb-4" data-oid="xcsjchr">
                                Ready to Transform Your LinkedIn?
                            </h2>
                            <p className="text-xl mb-6 text-blue-100" data-oid="121i9og">
                                Join thousands of professionals who've accelerated their careers
                                through LinkedIn
                            </p>
                            <div
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                                data-oid="dpbld16"
                            >
                                <button
                                    onClick={handleLinkedInRedirect}
                                    className="px-6 py-3 bg-white text-[#0077B5] rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
                                    data-oid="22ex-1c"
                                >
                                    <Linkedin className="inline h-5 w-5 mr-2" data-oid=".o:j:or" />
                                    Follow Our LinkedIn
                                </button>
                                <Link
                                    href="/resources/community"
                                    className="px-6 py-3 border border-white text-white rounded-xl font-medium hover:bg-white hover:text-[#0077B5] transition-all"
                                    data-oid="wlyvfdr"
                                >
                                    <Users className="inline h-5 w-5 mr-2" data-oid="lseuta4" />
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
