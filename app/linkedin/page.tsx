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
            data-oid="-mvkozz"
        >
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden -z-10" data-oid="axpf5yw">
                <div
                    className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-20 rounded-full blur-3xl animate-blob"
                    data-oid="eqs92c7"
                ></div>
                <div
                    className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"
                    data-oid="45ps6oy"
                ></div>
                <div
                    className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-4000"
                    data-oid="0q7qbvt"
                ></div>
            </div>

            <div className="relative z-10" data-oid="iuo4c.-">
                {/* Hero Section */}
                <section className="pt-24 pb-16 px-4" data-oid="6h46ss5">
                    <div className="max-w-6xl mx-auto text-center" data-oid=".nhvqml">
                        <div
                            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-[hsl(196,80%,45%)] border border-[hsl(210,30%,95%)] mb-6"
                            data-oid="pc3md9s"
                        >
                            <Linkedin className="h-4 w-4" data-oid="o3w6984" />
                            Professional Networking Made Easy
                        </div>

                        <h1
                            className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
                            data-oid="isiu63g"
                        >
                            Master Your
                            <span
                                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] bg-clip-text text-transparent"
                                data-oid="5.vva4e"
                            >
                                {' '}
                                LinkedIn Presence
                            </span>
                        </h1>

                        <p
                            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                            data-oid="gwkv0n4"
                        >
                            Build a powerful LinkedIn profile, expand your professional network, and
                            unlock career opportunities with our expert guidance and community
                            support.
                        </p>

                        <div
                            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                            data-oid="k9iuiem"
                        >
                            <button
                                onClick={handleLinkedInRedirect}
                                className="px-8 py-4 bg-[#0077B5] text-white rounded-xl font-medium hover:bg-[#005885] transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                                data-oid="45iqaha"
                            >
                                <Linkedin className="h-5 w-5" data-oid="5k80iwq" />
                                Follow Us on LinkedIn
                                <ExternalLink className="h-4 w-4" data-oid="174meh1" />
                            </button>
                            <Link
                                href="/resources"
                                className="px-8 py-4 border border-[hsl(196,80%,45%)] text-[hsl(196,80%,45%)] rounded-xl font-medium hover:bg-[hsl(196,80%,45%)]/10 transition-all"
                                data-oid="bop6.9o"
                            >
                                <BookOpen className="inline h-5 w-5 mr-2" data-oid="58knp.e" />
                                LinkedIn Resources
                            </Link>
                        </div>

                        {/* LinkedIn Stats */}
                        <div
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                            data-oid="cyiabua"
                        >
                            {linkedinStats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                    data-oid="vnc62tn"
                                >
                                    <stat.icon
                                        className="h-8 w-8 text-[#0077B5] mx-auto mb-2"
                                        data-oid="yk-nk0o"
                                    />

                                    <div
                                        className="text-2xl font-bold text-gray-800"
                                        data-oid="_94jso9"
                                    >
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-600" data-oid="89k4gnd">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* LinkedIn Features */}
                <section className="py-16 px-4" data-oid="m_y9u3w">
                    <div className="max-w-6xl mx-auto" data-oid="wsom7rx">
                        <div className="text-center mb-12" data-oid="axq4ad-">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="hwzy00u"
                            >
                                LinkedIn Success Services
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="fnmzc6x">
                                Everything you need to build a powerful LinkedIn presence
                            </p>
                        </div>

                        <div
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                            data-oid="h8fkio_"
                        >
                            {linkedinFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                    data-oid="jv01-o_"
                                >
                                    <div
                                        className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto`}
                                        data-oid="ykn6_4."
                                    >
                                        {feature.icon}
                                    </div>
                                    <h3
                                        className="text-xl font-bold text-gray-800 mb-2 text-center"
                                        data-oid="19hi:mp"
                                    >
                                        {feature.title}
                                    </h3>
                                    <p
                                        className="text-gray-600 text-center mb-4"
                                        data-oid="e-etj7y"
                                    >
                                        {feature.description}
                                    </p>
                                    <button
                                        className="w-full px-4 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
                                        data-oid="gw8lqt1"
                                    >
                                        {feature.action}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* LinkedIn Tips */}
                <section className="py-16 px-4" data-oid="e.-gyo_">
                    <div className="max-w-6xl mx-auto" data-oid="nrwfscl">
                        <div className="text-center mb-12" data-oid="wne_vxk">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid=".g7d78_"
                            >
                                LinkedIn Success Tips
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="fjkt-15">
                                Expert advice to maximize your LinkedIn impact
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="cun3tp:">
                            {linkedinTips.map((section, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                    data-oid="yfsbkf."
                                >
                                    <h3
                                        className="text-xl font-bold text-gray-800 mb-4 text-center"
                                        data-oid="62edfy7"
                                    >
                                        {section.category}
                                    </h3>
                                    <div className="space-y-3" data-oid="hdfkpg8">
                                        {section.tips.map((tip, tipIndex) => (
                                            <div
                                                key={tipIndex}
                                                className="flex items-start gap-3"
                                                data-oid="a9dc4ca"
                                            >
                                                <CheckCircle
                                                    className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"
                                                    data-oid="w9an-3t"
                                                />

                                                <span
                                                    className="text-gray-700 text-sm"
                                                    data-oid="10hcq2a"
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
                <section className="py-16 px-4" data-oid="p03c64s">
                    <div className="max-w-6xl mx-auto" data-oid="czhyn_t">
                        <div className="text-center mb-12" data-oid="j4fcn0e">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="mkwdia2"
                            >
                                LinkedIn Success Stories
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="-iyzpw4">
                                Real results from our community members
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="ws4k5xz">
                            {successStories.map((story, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                    data-oid="d_tfn8n"
                                >
                                    <div className="text-center mb-4" data-oid="y5p21e8">
                                        <div className="text-4xl mb-2" data-oid="73amv2-">
                                            {story.image}
                                        </div>
                                        <h3 className="font-bold text-gray-800" data-oid="j5hofko">
                                            {story.name}
                                        </h3>
                                        <p className="text-sm text-[#0077B5]" data-oid="_cv.o2o">
                                            {story.role}
                                        </p>
                                    </div>
                                    <p
                                        className="text-gray-700 italic text-center mb-4"
                                        data-oid="9:-gdoz"
                                    >
                                        "{story.story}"
                                    </p>
                                    <div className="text-center" data-oid="2j88xym">
                                        <span
                                            className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                                            data-oid="4k2r2._"
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
                <section className="py-16 px-4" data-oid="65p3fi6">
                    <div className="max-w-4xl mx-auto" data-oid="7-5sgi7">
                        <div
                            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)]"
                            data-oid="2.w5d:k"
                        >
                            <div className="text-center mb-8" data-oid="y_4525k">
                                <h2
                                    className="text-2xl font-bold text-gray-800 mb-4"
                                    data-oid="2emox3b"
                                >
                                    Weekly LinkedIn Content Calendar
                                </h2>
                                <p className="text-gray-600" data-oid="jq_2-p-">
                                    Stay consistent with our proven content strategy
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6" data-oid="1g_m65o">
                                <div className="space-y-4" data-oid="mzvyp6r">
                                    <div
                                        className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"
                                        data-oid="zp_9sm7"
                                    >
                                        <div
                                            className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                            data-oid="7_6s81l"
                                        >
                                            M
                                        </div>
                                        <div data-oid="w8k1bn2">
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="v.dq9kq"
                                            >
                                                Monday Motivation
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="543545s"
                                            >
                                                Share career insights or achievements
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                                        data-oid="xm4554-"
                                    >
                                        <div
                                            className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                            data-oid="7fet43e"
                                        >
                                            T
                                        </div>
                                        <div data-oid="o0gu6ou">
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="z2lqg0e"
                                            >
                                                Tech Tuesday
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="iyq4zk-"
                                            >
                                                Share technical knowledge or tutorials
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg"
                                        data-oid="fvsnzws"
                                    >
                                        <div
                                            className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                            data-oid="doee2yj"
                                        >
                                            W
                                        </div>
                                        <div data-oid="37_ozhz">
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="wy:lqy0"
                                            >
                                                Wisdom Wednesday
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="pjc0fkc"
                                            >
                                                Share lessons learned or advice
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4" data-oid="ku9-8_9">
                                    <div
                                        className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg"
                                        data-oid="8-yopoj"
                                    >
                                        <div
                                            className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                            data-oid="sjdh7m7"
                                        >
                                            T
                                        </div>
                                        <div data-oid="w7m7c-m">
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="hp9hfcb"
                                            >
                                                Throwback Thursday
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="e4mg8:6"
                                            >
                                                Share your journey or milestones
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center gap-3 p-3 bg-pink-50 rounded-lg"
                                        data-oid="2ej40km"
                                    >
                                        <div
                                            className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                            data-oid="m06h1e6"
                                        >
                                            F
                                        </div>
                                        <div data-oid="3zyiwn_">
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="998ob.8"
                                            >
                                                Feature Friday
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="r6tdqkw"
                                            >
                                                Highlight tools, resources, or people
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg"
                                        data-oid="ay.x8jb"
                                    >
                                        <div
                                            className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                            data-oid="6uluvzs"
                                        >
                                            S
                                        </div>
                                        <div data-oid="k6vrmou">
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="bwnzzxo"
                                            >
                                                Saturday Spotlight
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="5gke3q0"
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
                <section className="py-16 px-4" data-oid="yqpbpyc">
                    <div className="max-w-4xl mx-auto text-center" data-oid="9c2pngl">
                        <div
                            className="bg-gradient-to-r from-[#0077B5] to-[#005885] rounded-2xl p-8 text-white"
                            data-oid="ib-5_cc"
                        >
                            <h2 className="text-3xl font-bold mb-4" data-oid="x721hn2">
                                Ready to Transform Your LinkedIn?
                            </h2>
                            <p className="text-xl mb-6 text-blue-100" data-oid="62zqc8v">
                                Join thousands of professionals who've accelerated their careers
                                through LinkedIn
                            </p>
                            <div
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                                data-oid="e6r5el9"
                            >
                                <button
                                    onClick={handleLinkedInRedirect}
                                    className="px-6 py-3 bg-white text-[#0077B5] rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
                                    data-oid="7i0rdmd"
                                >
                                    <Linkedin className="inline h-5 w-5 mr-2" data-oid="eex7kn2" />
                                    Follow Our LinkedIn
                                </button>
                                <Link
                                    href="/resources/community"
                                    className="px-6 py-3 border border-white text-white rounded-xl font-medium hover:bg-white hover:text-[#0077B5] transition-all"
                                    data-oid="-nhd.wb"
                                >
                                    <Users className="inline h-5 w-5 mr-2" data-oid="6pgpuw." />
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
