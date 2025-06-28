'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    MessageCircle,
    Users,
    ArrowRight,
    Star,
    TrendingUp,
    Zap,
    Shield,
    Globe,
} from 'lucide-react';

const communityStats = [
    { label: 'Active Members', value: '25,000+', icon: Users },
    { label: 'Daily Messages', value: '1,500+', icon: MessageCircle },
    { label: 'Success Stories', value: '500+', icon: Star },
    { label: 'Job Referrals', value: '200+', icon: TrendingUp },
];

const communityFeatures = [
    {
        icon: '💼',
        title: 'Job Opportunities',
        description: 'Exclusive job postings and referrals from community members',
    },
    {
        icon: '🎯',
        title: 'Interview Prep',
        description: 'Mock interviews, coding challenges, and peer practice sessions',
    },
    {
        icon: '📚',
        title: 'Learning Resources',
        description: 'Curated study materials, courses, and learning paths',
    },
    {
        icon: '🤝',
        title: 'Networking',
        description: 'Connect with industry professionals and fellow job seekers',
    },
    {
        icon: '💡',
        title: 'Career Guidance',
        description: 'Get advice from experienced developers and career coaches',
    },
    {
        icon: '🚀',
        title: 'Project Collaboration',
        description: 'Find teammates for projects and build your portfolio together',
    },
];

const testimonials = [
    {
        name: 'Priya Sharma',
        role: 'Software Engineer at Google',
        image: '👩‍💻',
        text: 'Found my dream job through a referral in the WhatsApp group. The community support was incredible!',
    },
    {
        name: 'Rahul Kumar',
        role: 'Full Stack Developer at Flipkart',
        image: '👨‍💻',
        text: 'The interview prep sessions on Telegram helped me crack 5 interviews in a row!',
    },
    {
        name: 'Anita Patel',
        role: 'Frontend Developer at Zomato',
        image: '👩‍🎨',
        text: 'Amazing community! Got my resume reviewed and landed 3 job offers within a month.',
    },
];

export default function ResourcesCommunityPage() {
    const [selectedPlatform, setSelectedPlatform] = useState<'whatsapp' | 'telegram' | null>(null);

    const handleJoinCommunity = (platform: 'whatsapp' | 'telegram') => {
        // These will be replaced with actual links later
        const links = {
            whatsapp: 'https://chat.whatsapp.com/your-group-link',
            telegram: 'https://t.me/your-channel-link',
        };

        // For now, just show an alert
        alert(
            `Redirecting to ${platform.charAt(0).toUpperCase() + platform.slice(1)} community...`,
        );
        // window.open(links[platform], '_blank');
    };

    return (
        <div
            className="min-h-screen bg-gradient-to-b from-[hsl(210,50%,98%)] to-[hsl(196,60%,95%)]"
            data-oid="w3c--bi"
        >
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden -z-10" data-oid="lpezuph">
                <div
                    className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-20 rounded-full blur-3xl animate-blob"
                    data-oid="9irpbky"
                ></div>
                <div
                    className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"
                    data-oid="7xff2w2"
                ></div>
                <div
                    className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-4000"
                    data-oid="2kz:sck"
                ></div>
            </div>

            <div className="relative z-10" data-oid="d7vz2jr">
                {/* Hero Section */}
                <section className="pt-24 pb-16 px-4" data-oid="v__hl6w">
                    <div className="max-w-6xl mx-auto text-center" data-oid="yr_px-8">
                        <div
                            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-[hsl(196,80%,45%)] border border-[hsl(210,30%,95%)] mb-6"
                            data-oid="hj7wppk"
                        >
                            <Users className="h-4 w-4" data-oid="8r-uzw9" />
                            Join 25,000+ Tech Professionals
                        </div>

                        <h1
                            className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
                            data-oid="7ef5p:n"
                        >
                            Connect. Learn.
                            <span
                                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] bg-clip-text text-transparent"
                                data-oid="-c5e6te"
                            >
                                {' '}
                                Grow Together.
                            </span>
                        </h1>

                        <p
                            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                            data-oid="mcbyxy4"
                        >
                            Join our vibrant community of developers, get instant help, share
                            opportunities, and accelerate your career growth.
                        </p>

                        {/* Community Stats */}
                        <div
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
                            data-oid="aeub9_j"
                        >
                            {communityStats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                    data-oid="i8.ri1h"
                                >
                                    <stat.icon
                                        className="h-8 w-8 text-[hsl(196,80%,45%)] mx-auto mb-2"
                                        data-oid="qwwe_9d"
                                    />

                                    <div
                                        className="text-2xl font-bold text-gray-800"
                                        data-oid="d24lh2m"
                                    >
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-600" data-oid="auwer6-">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Platform Selection */}
                <section className="py-16 px-4" data-oid="wew-e9m">
                    <div className="max-w-4xl mx-auto" data-oid="bn93k:1">
                        <div className="text-center mb-12" data-oid="lqlkyea">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="xxuh5in"
                            >
                                Choose Your Platform
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="f115f-9">
                                Join our community on your preferred messaging platform
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8" data-oid="wqqsv3u">
                            {/* WhatsApp Community */}
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                data-oid="0eo7x8p"
                            >
                                <div className="text-center mb-6" data-oid="905bdes">
                                    <div
                                        className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                                        data-oid="_b7tmf7"
                                    >
                                        <MessageCircle
                                            className="h-10 w-10 text-green-600"
                                            data-oid="od22b6b"
                                        />
                                    </div>
                                    <h3
                                        className="text-2xl font-bold text-gray-800 mb-2"
                                        data-oid="rcpeqtk"
                                    >
                                        WhatsApp Community
                                    </h3>
                                    <p className="text-gray-600" data-oid="okrqkj6">
                                        Real-time discussions and instant networking
                                    </p>
                                </div>

                                <div className="space-y-4 mb-8" data-oid="b._-4c_">
                                    <div className="flex items-center gap-3" data-oid="xfr6fdd">
                                        <div
                                            className="w-2 h-2 bg-green-500 rounded-full"
                                            data-oid="lnw5qgd"
                                        ></div>
                                        <span className="text-gray-700" data-oid="-8zio:j">
                                            15,000+ Active Members
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="y088oml">
                                        <div
                                            className="w-2 h-2 bg-green-500 rounded-full"
                                            data-oid="ru2cd43"
                                        ></div>
                                        <span className="text-gray-700" data-oid="3u_5i_z">
                                            Daily Job Postings
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="q31pxtq">
                                        <div
                                            className="w-2 h-2 bg-green-500 rounded-full"
                                            data-oid="-r1e.vf"
                                        ></div>
                                        <span className="text-gray-700" data-oid="h9e:xl0">
                                            Quick Doubt Resolution
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="0rt6k1d">
                                        <div
                                            className="w-2 h-2 bg-green-500 rounded-full"
                                            data-oid="2h0u_dc"
                                        ></div>
                                        <span className="text-gray-700" data-oid="ir.z-nc">
                                            Referral Opportunities
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleJoinCommunity('whatsapp')}
                                    className="w-full px-6 py-4 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                                    data-oid="hte4.2z"
                                >
                                    <MessageCircle className="h-5 w-5" data-oid="e7rm0hv" />
                                    Join WhatsApp Group
                                    <ArrowRight className="h-5 w-5" data-oid="oh8tro5" />
                                </button>
                            </div>

                            {/* Telegram Community */}
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                data-oid="1ay_6d0"
                            >
                                <div className="text-center mb-6" data-oid="1h1g_4k">
                                    <div
                                        className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
                                        data-oid="j04k2jk"
                                    >
                                        <Zap
                                            className="h-10 w-10 text-blue-600"
                                            data-oid="s6cwvmd"
                                        />
                                    </div>
                                    <h3
                                        className="text-2xl font-bold text-gray-800 mb-2"
                                        data-oid="bpjubs6"
                                    >
                                        Telegram Channel
                                    </h3>
                                    <p className="text-gray-600" data-oid="svc1-_h">
                                        Organized discussions and resource sharing
                                    </p>
                                </div>

                                <div className="space-y-4 mb-8" data-oid="acd1r4t">
                                    <div className="flex items-center gap-3" data-oid="2l:f2ck">
                                        <div
                                            className="w-2 h-2 bg-blue-500 rounded-full"
                                            data-oid="61eik0l"
                                        ></div>
                                        <span className="text-gray-700" data-oid="n4rjhpi">
                                            10,000+ Subscribers
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="f2.o0.e">
                                        <div
                                            className="w-2 h-2 bg-blue-500 rounded-full"
                                            data-oid="g9q5lg_"
                                        ></div>
                                        <span className="text-gray-700" data-oid="6-_o8fx">
                                            Structured Learning Content
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="v.bcy:n">
                                        <div
                                            className="w-2 h-2 bg-blue-500 rounded-full"
                                            data-oid="79uz2v3"
                                        ></div>
                                        <span className="text-gray-700" data-oid="l-2g07l">
                                            Weekly Tech Updates
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="51vkzs9">
                                        <div
                                            className="w-2 h-2 bg-blue-500 rounded-full"
                                            data-oid="_syrh74"
                                        ></div>
                                        <span className="text-gray-700" data-oid="0wqj_o1">
                                            Interview Experiences
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleJoinCommunity('telegram')}
                                    className="w-full px-6 py-4 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                                    data-oid=":s61zii"
                                >
                                    <Zap className="h-5 w-5" data-oid="7cym1a5" />
                                    Join Telegram Channel
                                    <ArrowRight className="h-5 w-5" data-oid=".lv07r6" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Community Features */}
                <section className="py-16 px-4" data-oid="tkij.wg">
                    <div className="max-w-6xl mx-auto" data-oid="ru.i:db">
                        <div className="text-center mb-12" data-oid="xieqao0">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="fm008aj"
                            >
                                What You'll Get
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="j.o.pqm">
                                Exclusive benefits for community members
                            </p>
                        </div>

                        <div
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                            data-oid="t4.vylp"
                        >
                            {communityFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)] hover:shadow-lg transition-all"
                                    data-oid="5ou_qwe"
                                >
                                    <div className="text-4xl mb-4" data-oid="t0818hk">
                                        {feature.icon}
                                    </div>
                                    <h3
                                        className="text-xl font-bold text-gray-800 mb-2"
                                        data-oid="iwmf0sb"
                                    >
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600" data-oid="xn7m_:d">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Success Stories */}
                <section className="py-16 px-4" data-oid=":6-le5_">
                    <div className="max-w-6xl mx-auto" data-oid=":smtfef">
                        <div className="text-center mb-12" data-oid="q52onb3">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="yfg-ymm"
                            >
                                Success Stories
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="uxbgcge">
                                Real stories from our community members
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="481cwb.">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                    data-oid="enzc_ub"
                                >
                                    <div
                                        className="flex items-center gap-4 mb-4"
                                        data-oid="g1_18rr"
                                    >
                                        <div className="text-3xl" data-oid="gj0.a24">
                                            {testimonial.image}
                                        </div>
                                        <div data-oid="aicd7wg">
                                            <h4
                                                className="font-bold text-gray-800"
                                                data-oid="v6mtuih"
                                            >
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-sm text-gray-600" data-oid=".9pyfmw">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 italic" data-oid="i.7kah2">
                                        "{testimonial.text}"
                                    </p>
                                    <div
                                        className="flex items-center gap-1 mt-4"
                                        data-oid="xxdpccr"
                                    >
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="h-4 w-4 text-yellow-500 fill-current"
                                                data-oid="kin:om2"
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Community Guidelines */}
                <section className="py-16 px-4" data-oid="m6x5w99">
                    <div className="max-w-4xl mx-auto" data-oid="v5qx_vh">
                        <div
                            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)]"
                            data-oid="w-p6lqn"
                        >
                            <div className="text-center mb-8" data-oid="_z3sgis">
                                <Shield
                                    className="h-12 w-12 text-[hsl(196,80%,45%)] mx-auto mb-4"
                                    data-oid="vh0ubwl"
                                />

                                <h2
                                    className="text-2xl font-bold text-gray-800 mb-4"
                                    data-oid="4w9frf7"
                                >
                                    Community Guidelines
                                </h2>
                                <p className="text-gray-600" data-oid="mb8f6j9">
                                    Help us maintain a positive and productive environment
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6" data-oid="9d:xz1-">
                                <div className="space-y-4" data-oid="l.cuowf">
                                    <h3 className="font-semibold text-gray-800" data-oid="fbcsaxa">
                                        ✅ Do's
                                    </h3>
                                    <ul className="space-y-2 text-gray-600" data-oid="e_dlzcr">
                                        <li data-oid="p-paa__">
                                            • Share relevant job opportunities
                                        </li>
                                        <li data-oid="j6vp6ka">
                                            • Help fellow members with doubts
                                        </li>
                                        <li data-oid="ms3z2er">• Share your success stories</li>
                                        <li data-oid="2-9l_xp">• Be respectful and professional</li>
                                        <li data-oid="7fjq2mm">
                                            • Use appropriate channels for discussions
                                        </li>
                                    </ul>
                                </div>
                                <div className="space-y-4" data-oid="b-ncg:3">
                                    <h3 className="font-semibold text-gray-800" data-oid="3iz3uia">
                                        ❌ Don'ts
                                    </h3>
                                    <ul className="space-y-2 text-gray-600" data-oid="51qxyvl">
                                        <li data-oid="t9mj4it">• No spam or promotional content</li>
                                        <li data-oid="1jnyuob">
                                            • No offensive or inappropriate language
                                        </li>
                                        <li data-oid="5yfra.f">
                                            • No sharing of personal information
                                        </li>
                                        <li data-oid="quqxt49">• No off-topic discussions</li>
                                        <li data-oid="wtgrxrq">• No duplicate job postings</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-4" data-oid="1w7cndj">
                    <div className="max-w-4xl mx-auto text-center" data-oid="vi6qxhd">
                        <div
                            className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] rounded-2xl p-8 text-white"
                            data-oid="6_ith:j"
                        >
                            <h2 className="text-3xl font-bold mb-4" data-oid="de-te2v">
                                Ready to Join?
                            </h2>
                            <p className="text-xl mb-6 text-blue-100" data-oid="5cat:ip">
                                Don't miss out on exclusive opportunities and valuable connections
                            </p>
                            <div
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                                data-oid="3grvu--"
                            >
                                <button
                                    onClick={() => handleJoinCommunity('whatsapp')}
                                    className="px-6 py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-all transform hover:scale-105"
                                    data-oid="g0p60qi"
                                >
                                    <MessageCircle
                                        className="inline h-5 w-5 mr-2"
                                        data-oid="nkwmcde"
                                    />
                                    Join WhatsApp
                                </button>
                                <button
                                    onClick={() => handleJoinCommunity('telegram')}
                                    className="px-6 py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-all transform hover:scale-105"
                                    data-oid="ndrnhyj"
                                >
                                    <Zap className="inline h-5 w-5 mr-2" data-oid="alr7t3i" />
                                    Join Telegram
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
