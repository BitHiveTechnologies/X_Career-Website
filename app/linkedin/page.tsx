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
            data-oid="wmf7i_q"
        >
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden -z-10" data-oid="einpbbl">
                <div
                    className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-20 rounded-full blur-3xl animate-blob"
                    data-oid="f3vqgiv"
                ></div>
                <div
                    className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"
                    data-oid="8gb82.2"
                ></div>
                <div
                    className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-4000"
                    data-oid="49z944g"
                ></div>
            </div>

            <div className="relative z-10" data-oid="u74kx:p">
                {/* Hero Section */}
                <section className="pt-24 pb-16 px-4" data-oid="_0pn4mx">
                    <div className="max-w-6xl mx-auto text-center" data-oid="-1x7.q:">
                        <div
                            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-[hsl(196,80%,45%)] border border-[hsl(210,30%,95%)] mb-6"
                            data-oid="yca9qt0"
                        >
                            <Linkedin className="h-4 w-4" data-oid="-j:m-95" />
                            Professional Networking Made Easy
                        </div>

                        <h1
                            className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
                            data-oid="wmapska"
                        >
                            Master Your
                            <span
                                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] bg-clip-text text-transparent"
                                data-oid="tjulp.b"
                            >
                                {' '}
                                LinkedIn Presence
                            </span>
                        </h1>

                        <p
                            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                            data-oid="_fuy4pn"
                        >
                            Build a powerful LinkedIn profile, expand your professional network, and
                            unlock career opportunities with our expert guidance and community
                            support.
                        </p>

                        <div
                            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                            data-oid="321ik3o"
                        >
                            <button
                                onClick={handleLinkedInRedirect}
                                className="px-8 py-4 bg-[#0077B5] text-white rounded-xl font-medium hover:bg-[#005885] transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                                data-oid="72-9.ig"
                            >
                                <Linkedin className="h-5 w-5" data-oid="bri0f1n" />
                                Follow Us on LinkedIn
                                <ExternalLink className="h-4 w-4" data-oid=".wjq1-1" />
                            </button>
                            <Link
                                href="/resources"
                                className="px-8 py-4 border border-[hsl(196,80%,45%)] text-[hsl(196,80%,45%)] rounded-xl font-medium hover:bg-[hsl(196,80%,45%)]/10 transition-all"
                                data-oid="omeii1y"
                            >
                                <BookOpen className="inline h-5 w-5 mr-2" data-oid="xnfj_4i" />
                                LinkedIn Resources
                            </Link>
                        </div>

                        {/* LinkedIn Stats */}
                        <div
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                            data-oid="p8-ee70"
                        >
                            {linkedinStats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                    data-oid="xb47i9y"
                                >
                                    <stat.icon
                                        className="h-8 w-8 text-[#0077B5] mx-auto mb-2"
                                        data-oid="rawd3rs"
                                    />

                                    <div
                                        className="text-2xl font-bold text-gray-800"
                                        data-oid="zsydstf"
                                    >
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-600" data-oid="rf234jh">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* LinkedIn Features */}
                <section className="py-16 px-4" data-oid="3bg-5qg">
                    <div className="max-w-6xl mx-auto" data-oid="ahg2vz5">
                        <div className="text-center mb-12" data-oid="envep2d">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="orpdcej"
                            >
                                LinkedIn Success Services
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="jnd8go5">
                                Everything you need to build a powerful LinkedIn presence
                            </p>
                        </div>

                        <div
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                            data-oid="i7ihtat"
                        >
                            {linkedinFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                    data-oid="7rq3.dg"
                                >
                                    <div
                                        className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto`}
                                        data-oid="vbgvbdz"
                                    >
                                        {feature.icon}
                                    </div>
                                    <h3
                                        className="text-xl font-bold text-gray-800 mb-2 text-center"
                                        data-oid="5c-c_w."
                                    >
                                        {feature.title}
                                    </h3>
                                    <p
                                        className="text-gray-600 text-center mb-4"
                                        data-oid="5krzamm"
                                    >
                                        {feature.description}
                                    </p>
                                    <button
                                        className="w-full px-4 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
                                        data-oid="4.wd3nq"
                                    >
                                        {feature.action}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* LinkedIn Tips */}
                <section className="py-16 px-4" data-oid="f28he9z">
                    <div className="max-w-6xl mx-auto" data-oid="c2hvx7m">
                        <div className="text-center mb-12" data-oid="o6:by4:">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="bnhl2pd"
                            >
                                LinkedIn Success Tips
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="xm:7uzi">
                                Expert advice to maximize your LinkedIn impact
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="vuf:o7y">
                            {linkedinTips.map((section, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                    data-oid=":-:kb2x"
                                >
                                    <h3
                                        className="text-xl font-bold text-gray-800 mb-4 text-center"
                                        data-oid="1zjvec7"
                                    >
                                        {section.category}
                                    </h3>
                                    <div className="space-y-3" data-oid="fu0aea:">
                                        {section.tips.map((tip, tipIndex) => (
                                            <div
                                                key={tipIndex}
                                                className="flex items-start gap-3"
                                                data-oid="y97:rrf"
                                            >
                                                <CheckCircle
                                                    className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"
                                                    data-oid="o03e3ug"
                                                />

                                                <span
                                                    className="text-gray-700 text-sm"
                                                    data-oid="wlg4u4t"
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
                <section className="py-16 px-4" data-oid="e:qghjb">
                    <div className="max-w-6xl mx-auto" data-oid="2fsbv-r">
                        <div className="text-center mb-12" data-oid="tj3xx9o">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="mb6cxj1"
                            >
                                LinkedIn Success Stories
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="dt829yv">
                                Real results from our community members
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="9k9w1-q">
                            {successStories.map((story, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                    data-oid="cabgk9u"
                                >
                                    <div className="text-center mb-4" data-oid="_:t3bfr">
                                        <div className="text-4xl mb-2" data-oid="in3fepb">
                                            {story.image}
                                        </div>
                                        <h3 className="font-bold text-gray-800" data-oid="g25o28o">
                                            {story.name}
                                        </h3>
                                        <p className="text-sm text-[#0077B5]" data-oid="wrupz9d">
                                            {story.role}
                                        </p>
                                    </div>
                                    <p
                                        className="text-gray-700 italic text-center mb-4"
                                        data-oid="jz2p--v"
                                    >
                                        "{story.story}"
                                    </p>
                                    <div className="text-center" data-oid="-su16af">
                                        <span
                                            className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                                            data-oid="jwcfrll"
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
                <section className="py-16 px-4" data-oid="pv6q18k">
                    <div className="max-w-4xl mx-auto" data-oid="bcb6mrn">
                        <div
                            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)]"
                            data-oid="qjs36:s"
                        >
                            <div className="text-center mb-8" data-oid="7ph1u7s">
                                <h2
                                    className="text-2xl font-bold text-gray-800 mb-4"
                                    data-oid="41c6oeo"
                                >
                                    Weekly LinkedIn Content Calendar
                                </h2>
                                <p className="text-gray-600" data-oid="_cdy91a">
                                    Stay consistent with our proven content strategy
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6" data-oid="a97:op:">
                                <div className="space-y-4" data-oid="26fcnro">
                                    <div
                                        className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"
                                        data-oid="3_7jv60"
                                    >
                                        <div
                                            className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                            data-oid="1iu08ry"
                                        >
                                            M
                                        </div>
                                        <div data-oid="vtoticn">
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="8fpd_gs"
                                            >
                                                Monday Motivation
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="508f:oa"
                                            >
                                                Share career insights or achievements
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                                        data-oid="jlbu786"
                                    >
                                        <div
                                            className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                            data-oid="2ahwa3y"
                                        >
                                            T
                                        </div>
                                        <div data-oid="7e6p5xs">
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="_0z6r_y"
                                            >
                                                Tech Tuesday
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="oxcnujv"
                                            >
                                                Share technical knowledge or tutorials
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg"
                                        data-oid="f601i1m"
                                    >
                                        <div
                                            className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                            data-oid="ubzvegk"
                                        >
                                            W
                                        </div>
                                        <div data-oid="4_gnqpy">
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="sm6lqks"
                                            >
                                                Wisdom Wednesday
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="lljwhw_"
                                            >
                                                Share lessons learned or advice
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4" data-oid="90p-ysi">
                                    <div
                                        className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg"
                                        data-oid="jfu633-"
                                    >
                                        <div
                                            className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                            data-oid="yz-svko"
                                        >
                                            T
                                        </div>
                                        <div data-oid="lac1.kd">
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="_j1hu9p"
                                            >
                                                Throwback Thursday
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="8o_iahm"
                                            >
                                                Share your journey or milestones
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center gap-3 p-3 bg-pink-50 rounded-lg"
                                        data-oid="hoc835i"
                                    >
                                        <div
                                            className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                            data-oid="yczbms4"
                                        >
                                            F
                                        </div>
                                        <div data-oid="kvrs0tt">
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="_1z.z87"
                                            >
                                                Feature Friday
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="s0r_maa"
                                            >
                                                Highlight tools, resources, or people
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg"
                                        data-oid="2ta_:vm"
                                    >
                                        <div
                                            className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                            data-oid="q9vxxcm"
                                        >
                                            S
                                        </div>
                                        <div data-oid="ernh4_i">
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="-lhr52o"
                                            >
                                                Saturday Spotlight
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="lq-8a56"
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
                <section className="py-16 px-4" data-oid="brni9kb">
                    <div className="max-w-4xl mx-auto text-center" data-oid="mozpi.8">
                        <div
                            className="bg-gradient-to-r from-[#0077B5] to-[#005885] rounded-2xl p-8 text-white"
                            data-oid="1wkov29"
                        >
                            <h2 className="text-3xl font-bold mb-4" data-oid="m:y.k3o">
                                Ready to Transform Your LinkedIn?
                            </h2>
                            <p className="text-xl mb-6 text-blue-100" data-oid="43.9tm5">
                                Join thousands of professionals who've accelerated their careers
                                through LinkedIn
                            </p>
                            <div
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                                data-oid="y9ts9cu"
                            >
                                <button
                                    onClick={handleLinkedInRedirect}
                                    className="px-6 py-3 bg-white text-[#0077B5] rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
                                    data-oid="x6o_6fg"
                                >
                                    <Linkedin className="inline h-5 w-5 mr-2" data-oid="m_fxa18" />
                                    Follow Our LinkedIn
                                </button>
                                <Link
                                    href="/resources/community"
                                    className="px-6 py-3 border border-white text-white rounded-xl font-medium hover:bg-white hover:text-[#0077B5] transition-all"
                                    data-oid="gtzj7_u"
                                >
                                    <Users className="inline h-5 w-5 mr-2" data-oid="jmra_3y" />
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
