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
            data-oid="q3lttly"
        >
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden -z-10" data-oid="0:2fa5o">
                <div
                    className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-20 rounded-full blur-3xl animate-blob"
                    data-oid="a7lg.d_"
                ></div>
                <div
                    className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"
                    data-oid="xet.xid"
                ></div>
                <div
                    className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-4000"
                    data-oid="6viu3wp"
                ></div>
            </div>

            <div className="relative z-10" data-oid="2y_h_ci">
                {/* Hero Section */}
                <section className="pt-24 pb-16 px-4" data-oid="f8g9-kt">
                    <div className="max-w-6xl mx-auto text-center" data-oid="vy_p8s8">
                        <div
                            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-[hsl(196,80%,45%)] border border-[hsl(210,30%,95%)] mb-6"
                            data-oid="wrpd9jf"
                        >
                            <Linkedin className="h-4 w-4" data-oid="vcy_sm2" />
                            Professional Networking Made Easy
                        </div>

                        <h1
                            className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
                            data-oid="djxkj6l"
                        >
                            Master Your
                            <span
                                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] bg-clip-text text-transparent"
                                data-oid="93ynh3-"
                            >
                                {' '}
                                LinkedIn Presence
                            </span>
                        </h1>

                        <p
                            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                            data-oid="uz2w71-"
                        >
                            Build a powerful LinkedIn profile, expand your professional network, and
                            unlock career opportunities with our expert guidance and community
                            support.
                        </p>

                        <div
                            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                            data-oid="8ilnrsl"
                        >
                            <button
                                onClick={handleLinkedInRedirect}
                                className="px-8 py-4 bg-[#0077B5] text-white rounded-xl font-medium hover:bg-[#005885] transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                                data-oid="cd171u-"
                            >
                                <Linkedin className="h-5 w-5" data-oid="gni-8g6" />
                                Follow Us on LinkedIn
                                <ExternalLink className="h-4 w-4" data-oid="v319oay" />
                            </button>
                            <Link
                                href="/resources"
                                className="px-8 py-4 border border-[hsl(196,80%,45%)] text-[hsl(196,80%,45%)] rounded-xl font-medium hover:bg-[hsl(196,80%,45%)]/10 transition-all"
                                data-oid="wk6r-bv"
                            >
                                <BookOpen className="inline h-5 w-5 mr-2" data-oid="wz5sdhy" />
                                LinkedIn Resources
                            </Link>
                        </div>

                        {/* LinkedIn Stats */}
                        <div
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                            data-oid=".x1tlm1"
                        >
                            {linkedinStats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                    data-oid="6.f8ksw"
                                >
                                    <stat.icon
                                        className="h-8 w-8 text-[#0077B5] mx-auto mb-2"
                                        data-oid="jvye3vc"
                                    />

                                    <div
                                        className="text-2xl font-bold text-gray-800"
                                        data-oid="4g02z.5"
                                    >
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-600" data-oid="py0p543">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* LinkedIn Features */}
                <section className="py-16 px-4" data-oid="p351vvk">
                    <div className="max-w-6xl mx-auto" data-oid="wfxftz4">
                        <div className="text-center mb-12" data-oid="6bsn77b">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="roa7zin"
                            >
                                LinkedIn Success Services
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="rj_rirw">
                                Everything you need to build a powerful LinkedIn presence
                            </p>
                        </div>

                        <div
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                            data-oid="2_264-e"
                        >
                            {linkedinFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                    data-oid="_9qk9m4"
                                >
                                    <div
                                        className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto`}
                                        data-oid="3d019jy"
                                    >
                                        {feature.icon}
                                    </div>
                                    <h3
                                        className="text-xl font-bold text-gray-800 mb-2 text-center"
                                        data-oid="z_ybsxj"
                                    >
                                        {feature.title}
                                    </h3>
                                    <p
                                        className="text-gray-600 text-center mb-4"
                                        data-oid="7fd6oi7"
                                    >
                                        {feature.description}
                                    </p>
                                    <button
                                        className="w-full px-4 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
                                        data-oid="jcayrkf"
                                    >
                                        {feature.action}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* LinkedIn Tips */}
                <section className="py-16 px-4" data-oid="14mmfgt">
                    <div className="max-w-6xl mx-auto" data-oid="gmx-8gq">
                        <div className="text-center mb-12" data-oid="2aebqc0">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="a:bhs-0"
                            >
                                LinkedIn Success Tips
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="n81xmd-">
                                Expert advice to maximize your LinkedIn impact
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="phe9685">
                            {linkedinTips.map((section, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                    data-oid="io:0g_g"
                                >
                                    <h3
                                        className="text-xl font-bold text-gray-800 mb-4 text-center"
                                        data-oid="w9srvqa"
                                    >
                                        {section.category}
                                    </h3>
                                    <div className="space-y-3" data-oid="wkeeezm">
                                        {section.tips.map((tip, tipIndex) => (
                                            <div
                                                key={tipIndex}
                                                className="flex items-start gap-3"
                                                data-oid="19r2evz"
                                            >
                                                <CheckCircle
                                                    className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"
                                                    data-oid="pa1.z26"
                                                />

                                                <span
                                                    className="text-gray-700 text-sm"
                                                    data-oid="5--t5je"
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
                <section className="py-16 px-4" data-oid="26t3-ym">
                    <div className="max-w-6xl mx-auto" data-oid="z_mfltz">
                        <div className="text-center mb-12" data-oid="hk_dv5w">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="kwbj-em"
                            >
                                LinkedIn Success Stories
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="ltoj817">
                                Real results from our community members
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="w1uzkfn">
                            {successStories.map((story, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                    data-oid="n2c6m50"
                                >
                                    <div className="text-center mb-4" data-oid=":hb3lek">
                                        <div className="text-4xl mb-2" data-oid="4mv-h-k">
                                            {story.image}
                                        </div>
                                        <h3 className="font-bold text-gray-800" data-oid="1l_.vrj">
                                            {story.name}
                                        </h3>
                                        <p className="text-sm text-[#0077B5]" data-oid="0cy1u26">
                                            {story.role}
                                        </p>
                                    </div>
                                    <p
                                        className="text-gray-700 italic text-center mb-4"
                                        data-oid="6ld5hc4"
                                    >
                                        "{story.story}"
                                    </p>
                                    <div className="text-center" data-oid="302szx5">
                                        <span
                                            className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                                            data-oid="gz1__8w"
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
                <section className="py-16 px-4" data-oid="l5-81p1">
                    <div className="max-w-4xl mx-auto" data-oid="-zufrj:">
                        <div
                            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)]"
                            data-oid="wpjot:_"
                        >
                            <div className="text-center mb-8" data-oid="fpq:6vm">
                                <h2
                                    className="text-2xl font-bold text-gray-800 mb-4"
                                    data-oid="t_:o.st"
                                >
                                    Weekly LinkedIn Content Calendar
                                </h2>
                                <p className="text-gray-600" data-oid="oron27x">
                                    Stay consistent with our proven content strategy
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6" data-oid="gid5.4q">
                                <div className="space-y-4" data-oid="s-x93wx">
                                    <div
                                        className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"
                                        data-oid="s0lo98p"
                                    >
                                        <div
                                            className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                            data-oid="itndtfb"
                                        >
                                            M
                                        </div>
                                        <div data-oid="prj4z20">
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="u3faor_"
                                            >
                                                Monday Motivation
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="me:fbj:"
                                            >
                                                Share career insights or achievements
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                                        data-oid="iyx6-no"
                                    >
                                        <div
                                            className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                            data-oid="stv9irc"
                                        >
                                            T
                                        </div>
                                        <div data-oid="w-t9.8:">
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="8sc.6hx"
                                            >
                                                Tech Tuesday
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="lfwgix2"
                                            >
                                                Share technical knowledge or tutorials
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg"
                                        data-oid=".euo4_t"
                                    >
                                        <div
                                            className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                            data-oid="e0_22k8"
                                        >
                                            W
                                        </div>
                                        <div data-oid="jhohysd">
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="9:ep0so"
                                            >
                                                Wisdom Wednesday
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="o3s-3mm"
                                            >
                                                Share lessons learned or advice
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4" data-oid=":i5s4hz">
                                    <div
                                        className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg"
                                        data-oid="hdw0v1p"
                                    >
                                        <div
                                            className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                            data-oid="k-j:.g_"
                                        >
                                            T
                                        </div>
                                        <div data-oid="lkgmyn4">
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="mkrdtbt"
                                            >
                                                Throwback Thursday
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid=":t_ikou"
                                            >
                                                Share your journey or milestones
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center gap-3 p-3 bg-pink-50 rounded-lg"
                                        data-oid="248gski"
                                    >
                                        <div
                                            className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                            data-oid="umln0ci"
                                        >
                                            F
                                        </div>
                                        <div data-oid="immku82">
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="-1-l0p5"
                                            >
                                                Feature Friday
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="uwt.m66"
                                            >
                                                Highlight tools, resources, or people
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg"
                                        data-oid="zkdmosb"
                                    >
                                        <div
                                            className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                            data-oid="roxa0cu"
                                        >
                                            S
                                        </div>
                                        <div data-oid="c894nix">
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="jeqd15y"
                                            >
                                                Saturday Spotlight
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="z44cddk"
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
                <section className="py-16 px-4" data-oid="t88:c7i">
                    <div className="max-w-4xl mx-auto text-center" data-oid="13ygp2o">
                        <div
                            className="bg-gradient-to-r from-[#0077B5] to-[#005885] rounded-2xl p-8 text-white"
                            data-oid="mhdg318"
                        >
                            <h2 className="text-3xl font-bold mb-4" data-oid="wjxg:-_">
                                Ready to Transform Your LinkedIn?
                            </h2>
                            <p className="text-xl mb-6 text-blue-100" data-oid="zm6_t-i">
                                Join thousands of professionals who've accelerated their careers
                                through LinkedIn
                            </p>
                            <div
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                                data-oid="m7m51f9"
                            >
                                <button
                                    onClick={handleLinkedInRedirect}
                                    className="px-6 py-3 bg-white text-[#0077B5] rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
                                    data-oid="wer0qvm"
                                >
                                    <Linkedin className="inline h-5 w-5 mr-2" data-oid="-b2:it3" />
                                    Follow Our LinkedIn
                                </button>
                                <Link
                                    href="/resources/community"
                                    className="px-6 py-3 border border-white text-white rounded-xl font-medium hover:bg-white hover:text-[#0077B5] transition-all"
                                    data-oid="ut6:8zv"
                                >
                                    <Users className="inline h-5 w-5 mr-2" data-oid="kejgzc5" />
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
