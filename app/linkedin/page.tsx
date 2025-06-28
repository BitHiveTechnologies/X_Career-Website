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
            data-oid="uln:70v"
        >
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden -z-10" data-oid="5-n92nq">
                <div
                    className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-20 rounded-full blur-3xl animate-blob"
                    data-oid=":zy5y0g"
                ></div>
                <div
                    className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"
                    data-oid="rm.oh4i"
                ></div>
                <div
                    className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-4000"
                    data-oid="hz6k-h_"
                ></div>
            </div>

            <div className="relative z-10" data-oid="nilefk9">
                {/* Hero Section */}
                <section className="pt-24 pb-16 px-4" data-oid="_cgrh6m">
                    <div className="max-w-6xl mx-auto text-center" data-oid="sldyeh3">
                        <div
                            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-[hsl(196,80%,45%)] border border-[hsl(210,30%,95%)] mb-6"
                            data-oid="ey7xgim"
                        >
                            <Linkedin className="h-4 w-4" data-oid="-sfe1kl" />
                            Professional Networking Made Easy
                        </div>

                        <h1
                            className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
                            data-oid="-sz4o3:"
                        >
                            Master Your
                            <span
                                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] bg-clip-text text-transparent"
                                data-oid="g56ssg9"
                            >
                                {' '}
                                LinkedIn Presence
                            </span>
                        </h1>

                        <p
                            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                            data-oid="u3sxf81"
                        >
                            Build a powerful LinkedIn profile, expand your professional network, and
                            unlock career opportunities with our expert guidance and community
                            support.
                        </p>

                        <div
                            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                            data-oid="n9ydr:y"
                        >
                            <button
                                onClick={handleLinkedInRedirect}
                                className="px-8 py-4 bg-[#0077B5] text-white rounded-xl font-medium hover:bg-[#005885] transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                                data-oid="j95nnf4"
                            >
                                <Linkedin className="h-5 w-5" data-oid="lheol8x" />
                                Follow Us on LinkedIn
                                <ExternalLink className="h-4 w-4" data-oid=".zso6sv" />
                            </button>
                            <Link
                                href="/resources"
                                className="px-8 py-4 border border-[hsl(196,80%,45%)] text-[hsl(196,80%,45%)] rounded-xl font-medium hover:bg-[hsl(196,80%,45%)]/10 transition-all"
                                data-oid="ba8x-hy"
                            >
                                <BookOpen className="inline h-5 w-5 mr-2" data-oid="woq8ann" />
                                LinkedIn Resources
                            </Link>
                        </div>

                        {/* LinkedIn Stats */}
                        <div
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                            data-oid="95trohj"
                        >
                            {linkedinStats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                    data-oid="xn.3ci3"
                                >
                                    <stat.icon
                                        className="h-8 w-8 text-[#0077B5] mx-auto mb-2"
                                        data-oid="f-aqoys"
                                    />

                                    <div
                                        className="text-2xl font-bold text-gray-800"
                                        data-oid="fdcnwoy"
                                    >
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-600" data-oid="6a-kwhb">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* LinkedIn Features */}
                <section className="py-16 px-4" data-oid="1x.qdho">
                    <div className="max-w-6xl mx-auto" data-oid="q6b0o_:">
                        <div className="text-center mb-12" data-oid="9r09o3x">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="elsv53b"
                            >
                                LinkedIn Success Services
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="y5-d3:v">
                                Everything you need to build a powerful LinkedIn presence
                            </p>
                        </div>

                        <div
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                            data-oid="8nyv8ne"
                        >
                            {linkedinFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                    data-oid="9f_-e1i"
                                >
                                    <div
                                        className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto`}
                                        data-oid="lrnlvse"
                                    >
                                        {feature.icon}
                                    </div>
                                    <h3
                                        className="text-xl font-bold text-gray-800 mb-2 text-center"
                                        data-oid="h2whi4_"
                                    >
                                        {feature.title}
                                    </h3>
                                    <p
                                        className="text-gray-600 text-center mb-4"
                                        data-oid="f8oa39y"
                                    >
                                        {feature.description}
                                    </p>
                                    <button
                                        className="w-full px-4 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
                                        data-oid="2cpmgmd"
                                    >
                                        {feature.action}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* LinkedIn Tips */}
                <section className="py-16 px-4" data-oid="d:ltw1s">
                    <div className="max-w-6xl mx-auto" data-oid="xa2ouid">
                        <div className="text-center mb-12" data-oid="uyp64y8">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="ulj5-8w"
                            >
                                LinkedIn Success Tips
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="-hcw8be">
                                Expert advice to maximize your LinkedIn impact
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="7fdy-.c">
                            {linkedinTips.map((section, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                    data-oid="gcn.4n3"
                                >
                                    <h3
                                        className="text-xl font-bold text-gray-800 mb-4 text-center"
                                        data-oid="4oxd5l_"
                                    >
                                        {section.category}
                                    </h3>
                                    <div className="space-y-3" data-oid="t2kp1ko">
                                        {section.tips.map((tip, tipIndex) => (
                                            <div
                                                key={tipIndex}
                                                className="flex items-start gap-3"
                                                data-oid="h7jjbt5"
                                            >
                                                <CheckCircle
                                                    className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"
                                                    data-oid=".:.3xd5"
                                                />

                                                <span
                                                    className="text-gray-700 text-sm"
                                                    data-oid="dl5hdw:"
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
                <section className="py-16 px-4" data-oid="gspsvub">
                    <div className="max-w-6xl mx-auto" data-oid="v4b-rfh">
                        <div className="text-center mb-12" data-oid="sxce25d">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="za-b9wo"
                            >
                                LinkedIn Success Stories
                            </h2>
                            <p className="text-xl text-gray-600" data-oid=":wfqar7">
                                Real results from our community members
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="bll:biw">
                            {successStories.map((story, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                    data-oid="j7e5fl6"
                                >
                                    <div className="text-center mb-4" data-oid="r2na52a">
                                        <div className="text-4xl mb-2" data-oid="4pgvcac">
                                            {story.image}
                                        </div>
                                        <h3 className="font-bold text-gray-800" data-oid="npc3kow">
                                            {story.name}
                                        </h3>
                                        <p className="text-sm text-[#0077B5]" data-oid="8pch5n7">
                                            {story.role}
                                        </p>
                                    </div>
                                    <p
                                        className="text-gray-700 italic text-center mb-4"
                                        data-oid="68vyy3v"
                                    >
                                        "{story.story}"
                                    </p>
                                    <div className="text-center" data-oid="2_3029g">
                                        <span
                                            className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                                            data-oid="s78q8c6"
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
                <section className="py-16 px-4" data-oid="m3:ugb9">
                    <div className="max-w-4xl mx-auto" data-oid="fg5wfue">
                        <div
                            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)]"
                            data-oid="12-88d4"
                        >
                            <div className="text-center mb-8" data-oid="d70p69_">
                                <h2
                                    className="text-2xl font-bold text-gray-800 mb-4"
                                    data-oid="0x90o:."
                                >
                                    Weekly LinkedIn Content Calendar
                                </h2>
                                <p className="text-gray-600" data-oid="rorat9j">
                                    Stay consistent with our proven content strategy
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6" data-oid="7uktcm2">
                                <div className="space-y-4" data-oid="n0wjmru">
                                    <div
                                        className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"
                                        data-oid=".:kuy-h"
                                    >
                                        <div
                                            className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                            data-oid="2q4816t"
                                        >
                                            M
                                        </div>
                                        <div data-oid="h0gu:30">
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="olh09sk"
                                            >
                                                Monday Motivation
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="vkj:5n-"
                                            >
                                                Share career insights or achievements
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                                        data-oid="g.dkla4"
                                    >
                                        <div
                                            className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                            data-oid="n5hey1h"
                                        >
                                            T
                                        </div>
                                        <div data-oid="jlw27jg">
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="3asm56q"
                                            >
                                                Tech Tuesday
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid=":g2k4vl"
                                            >
                                                Share technical knowledge or tutorials
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg"
                                        data-oid="amd4tu9"
                                    >
                                        <div
                                            className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                            data-oid="28csa8."
                                        >
                                            W
                                        </div>
                                        <div data-oid="3_rcnf9">
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="vhqen_e"
                                            >
                                                Wisdom Wednesday
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="cyt6o2c"
                                            >
                                                Share lessons learned or advice
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4" data-oid="u8_oy5n">
                                    <div
                                        className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg"
                                        data-oid="800s:9c"
                                    >
                                        <div
                                            className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                            data-oid="p:nuluu"
                                        >
                                            T
                                        </div>
                                        <div data-oid="0v71pl.">
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="0smod-."
                                            >
                                                Throwback Thursday
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="56mvnyb"
                                            >
                                                Share your journey or milestones
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center gap-3 p-3 bg-pink-50 rounded-lg"
                                        data-oid="g.xy837"
                                    >
                                        <div
                                            className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                            data-oid="nmwp4gh"
                                        >
                                            F
                                        </div>
                                        <div data-oid="-uqea69">
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="qqsu6op"
                                            >
                                                Feature Friday
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="glpflrn"
                                            >
                                                Highlight tools, resources, or people
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg"
                                        data-oid="fbaqka7"
                                    >
                                        <div
                                            className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                            data-oid="pbt7z0p"
                                        >
                                            S
                                        </div>
                                        <div data-oid="n1wk6lm">
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="f2.1.u4"
                                            >
                                                Saturday Spotlight
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="cwcc5up"
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
                <section className="py-16 px-4" data-oid="65xgkb9">
                    <div className="max-w-4xl mx-auto text-center" data-oid="n4ckl7q">
                        <div
                            className="bg-gradient-to-r from-[#0077B5] to-[#005885] rounded-2xl p-8 text-white"
                            data-oid=".:wn-yx"
                        >
                            <h2 className="text-3xl font-bold mb-4" data-oid="ckvpy6v">
                                Ready to Transform Your LinkedIn?
                            </h2>
                            <p className="text-xl mb-6 text-blue-100" data-oid="q9tvbsh">
                                Join thousands of professionals who've accelerated their careers
                                through LinkedIn
                            </p>
                            <div
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                                data-oid="eg8m-n6"
                            >
                                <button
                                    onClick={handleLinkedInRedirect}
                                    className="px-6 py-3 bg-white text-[#0077B5] rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
                                    data-oid="0zjk44x"
                                >
                                    <Linkedin className="inline h-5 w-5 mr-2" data-oid=".bnxo.1" />
                                    Follow Our LinkedIn
                                </button>
                                <Link
                                    href="/resources/community"
                                    className="px-6 py-3 border border-white text-white rounded-xl font-medium hover:bg-white hover:text-[#0077B5] transition-all"
                                    data-oid=":aoq78b"
                                >
                                    <Users className="inline h-5 w-5 mr-2" data-oid="ftrpcx:" />
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
