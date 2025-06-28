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
            data-oid="2vek6o0"
        >
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden -z-10" data-oid="kowcy21">
                <div
                    className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-20 rounded-full blur-3xl animate-blob"
                    data-oid="2::3:24"
                ></div>
                <div
                    className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"
                    data-oid="4yk05tu"
                ></div>
                <div
                    className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-4000"
                    data-oid="frdka_j"
                ></div>
            </div>

            <div className="relative z-10" data-oid="55_q0cp">
                {/* Hero Section */}
                <section className="pt-24 pb-16 px-4" data-oid="l5fa6-v">
                    <div className="max-w-6xl mx-auto text-center" data-oid="_o7w-dc">
                        <div
                            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-[hsl(196,80%,45%)] border border-[hsl(210,30%,95%)] mb-6"
                            data-oid="wt:sw9d"
                        >
                            <Users className="h-4 w-4" data-oid="csz4vw3" />
                            Join 25,000+ Tech Professionals
                        </div>

                        <h1
                            className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
                            data-oid=".dq6ics"
                        >
                            Connect. Learn.
                            <span
                                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] bg-clip-text text-transparent"
                                data-oid="91zes7w"
                            >
                                {' '}
                                Grow Together.
                            </span>
                        </h1>

                        <p
                            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                            data-oid="5a5t.ja"
                        >
                            Join our vibrant community of developers, get instant help, share
                            opportunities, and accelerate your career growth.
                        </p>

                        {/* Community Stats */}
                        <div
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
                            data-oid="trjgaic"
                        >
                            {communityStats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                    data-oid="a-5-wom"
                                >
                                    <stat.icon
                                        className="h-8 w-8 text-[hsl(196,80%,45%)] mx-auto mb-2"
                                        data-oid="2547zby"
                                    />

                                    <div
                                        className="text-2xl font-bold text-gray-800"
                                        data-oid="u0cp.hq"
                                    >
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-600" data-oid="fxtu1e_">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Platform Selection */}
                <section className="py-16 px-4" data-oid="h3ytt7-">
                    <div className="max-w-4xl mx-auto" data-oid="jltxblk">
                        <div className="text-center mb-12" data-oid="zyu9ggg">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="fgx2.2s"
                            >
                                Choose Your Platform
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="tc9duo:">
                                Join our community on your preferred messaging platform
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8" data-oid="4hokxlz">
                            {/* WhatsApp Community */}
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                data-oid="h_n4__3"
                            >
                                <div className="text-center mb-6" data-oid=".6i76wu">
                                    <div
                                        className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                                        data-oid="1yc-ko6"
                                    >
                                        <MessageCircle
                                            className="h-10 w-10 text-green-600"
                                            data-oid="qgcrxrq"
                                        />
                                    </div>
                                    <h3
                                        className="text-2xl font-bold text-gray-800 mb-2"
                                        data-oid="nukv3i4"
                                    >
                                        WhatsApp Community
                                    </h3>
                                    <p className="text-gray-600" data-oid="x-.nwx9">
                                        Real-time discussions and instant networking
                                    </p>
                                </div>

                                <div className="space-y-4 mb-8" data-oid="c8--u1p">
                                    <div className="flex items-center gap-3" data-oid=":6zca54">
                                        <div
                                            className="w-2 h-2 bg-green-500 rounded-full"
                                            data-oid=":n8qd9s"
                                        ></div>
                                        <span className="text-gray-700" data-oid="xyvl16c">
                                            15,000+ Active Members
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="qqgn0h:">
                                        <div
                                            className="w-2 h-2 bg-green-500 rounded-full"
                                            data-oid="fab.0b3"
                                        ></div>
                                        <span className="text-gray-700" data-oid="i6i-ne7">
                                            Daily Job Postings
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="t:ig3v6">
                                        <div
                                            className="w-2 h-2 bg-green-500 rounded-full"
                                            data-oid="-x:8q0a"
                                        ></div>
                                        <span className="text-gray-700" data-oid="knld3i3">
                                            Quick Doubt Resolution
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="je_xgml">
                                        <div
                                            className="w-2 h-2 bg-green-500 rounded-full"
                                            data-oid="4c88n5f"
                                        ></div>
                                        <span className="text-gray-700" data-oid="s7wdb48">
                                            Referral Opportunities
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleJoinCommunity('whatsapp')}
                                    className="w-full px-6 py-4 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                                    data-oid="r3gxxu0"
                                >
                                    <MessageCircle className="h-5 w-5" data-oid="js2gicu" />
                                    Join WhatsApp Group
                                    <ArrowRight className="h-5 w-5" data-oid=":58ujp3" />
                                </button>
                            </div>

                            {/* Telegram Community */}
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                data-oid="4d8m6zn"
                            >
                                <div className="text-center mb-6" data-oid="r7_prom">
                                    <div
                                        className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
                                        data-oid="c0j87a7"
                                    >
                                        <Zap
                                            className="h-10 w-10 text-blue-600"
                                            data-oid="ki_-t3m"
                                        />
                                    </div>
                                    <h3
                                        className="text-2xl font-bold text-gray-800 mb-2"
                                        data-oid="61o6oy5"
                                    >
                                        Telegram Channel
                                    </h3>
                                    <p className="text-gray-600" data-oid="6x-43o:">
                                        Organized discussions and resource sharing
                                    </p>
                                </div>

                                <div className="space-y-4 mb-8" data-oid="891nvj3">
                                    <div className="flex items-center gap-3" data-oid="en6z5ul">
                                        <div
                                            className="w-2 h-2 bg-blue-500 rounded-full"
                                            data-oid="m9e.io1"
                                        ></div>
                                        <span className="text-gray-700" data-oid="yo1jy1j">
                                            10,000+ Subscribers
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="83:tc1h">
                                        <div
                                            className="w-2 h-2 bg-blue-500 rounded-full"
                                            data-oid="alw3np1"
                                        ></div>
                                        <span className="text-gray-700" data-oid="mb.ss.5">
                                            Structured Learning Content
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="50-1yqo">
                                        <div
                                            className="w-2 h-2 bg-blue-500 rounded-full"
                                            data-oid="wot5t0n"
                                        ></div>
                                        <span className="text-gray-700" data-oid="6rt4bzf">
                                            Weekly Tech Updates
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="ivfr801">
                                        <div
                                            className="w-2 h-2 bg-blue-500 rounded-full"
                                            data-oid="ybc8.e-"
                                        ></div>
                                        <span className="text-gray-700" data-oid="rlg6p4h">
                                            Interview Experiences
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleJoinCommunity('telegram')}
                                    className="w-full px-6 py-4 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                                    data-oid="usf:4uo"
                                >
                                    <Zap className="h-5 w-5" data-oid="g7pdla3" />
                                    Join Telegram Channel
                                    <ArrowRight className="h-5 w-5" data-oid="ovu2pk0" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Community Features */}
                <section className="py-16 px-4" data-oid="-npxkvi">
                    <div className="max-w-6xl mx-auto" data-oid="r82vbhu">
                        <div className="text-center mb-12" data-oid="w12_okc">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid=".95o8se"
                            >
                                What You'll Get
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="9faituq">
                                Exclusive benefits for community members
                            </p>
                        </div>

                        <div
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                            data-oid="zl4y12e"
                        >
                            {communityFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)] hover:shadow-lg transition-all"
                                    data-oid="dmqmu-h"
                                >
                                    <div className="text-4xl mb-4" data-oid=".lqn-rv">
                                        {feature.icon}
                                    </div>
                                    <h3
                                        className="text-xl font-bold text-gray-800 mb-2"
                                        data-oid=".:qr8rb"
                                    >
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600" data-oid="4h852ns">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Success Stories */}
                <section className="py-16 px-4" data-oid="wl6stm9">
                    <div className="max-w-6xl mx-auto" data-oid=":4m3_zg">
                        <div className="text-center mb-12" data-oid="f-lptbc">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="j5bkldm"
                            >
                                Success Stories
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="rx25_nn">
                                Real stories from our community members
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="aih1ttg">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                    data-oid="6becsqr"
                                >
                                    <div
                                        className="flex items-center gap-4 mb-4"
                                        data-oid="_2ks-wl"
                                    >
                                        <div className="text-3xl" data-oid="1f196od">
                                            {testimonial.image}
                                        </div>
                                        <div data-oid="qb.6rol">
                                            <h4
                                                className="font-bold text-gray-800"
                                                data-oid="3j9kv1d"
                                            >
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-sm text-gray-600" data-oid="r-4g1.s">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 italic" data-oid="5uf55eg">
                                        "{testimonial.text}"
                                    </p>
                                    <div
                                        className="flex items-center gap-1 mt-4"
                                        data-oid="ugrg9sp"
                                    >
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="h-4 w-4 text-yellow-500 fill-current"
                                                data-oid="3r41mfh"
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Community Guidelines */}
                <section className="py-16 px-4" data-oid="zp21u10">
                    <div className="max-w-4xl mx-auto" data-oid="_drcypv">
                        <div
                            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)]"
                            data-oid="0b8uaqp"
                        >
                            <div className="text-center mb-8" data-oid="r-vamp2">
                                <Shield
                                    className="h-12 w-12 text-[hsl(196,80%,45%)] mx-auto mb-4"
                                    data-oid="iu15n56"
                                />

                                <h2
                                    className="text-2xl font-bold text-gray-800 mb-4"
                                    data-oid="o53eio6"
                                >
                                    Community Guidelines
                                </h2>
                                <p className="text-gray-600" data-oid="57iteid">
                                    Help us maintain a positive and productive environment
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6" data-oid="qzo-5wt">
                                <div className="space-y-4" data-oid="hnwarfn">
                                    <h3 className="font-semibold text-gray-800" data-oid="jj2r0q4">
                                        ✅ Do's
                                    </h3>
                                    <ul className="space-y-2 text-gray-600" data-oid="74ziaw9">
                                        <li data-oid="uh_6k5o">
                                            • Share relevant job opportunities
                                        </li>
                                        <li data-oid="4jq_f3a">
                                            • Help fellow members with doubts
                                        </li>
                                        <li data-oid="sm1w-sn">• Share your success stories</li>
                                        <li data-oid="ua2gr:f">• Be respectful and professional</li>
                                        <li data-oid="f-_gd63">
                                            • Use appropriate channels for discussions
                                        </li>
                                    </ul>
                                </div>
                                <div className="space-y-4" data-oid=":yzcb-w">
                                    <h3 className="font-semibold text-gray-800" data-oid="qz7j6i.">
                                        ❌ Don'ts
                                    </h3>
                                    <ul className="space-y-2 text-gray-600" data-oid="wr.c1tz">
                                        <li data-oid="169pka.">• No spam or promotional content</li>
                                        <li data-oid="6fn3:xf">
                                            • No offensive or inappropriate language
                                        </li>
                                        <li data-oid="x2gw:tg">
                                            • No sharing of personal information
                                        </li>
                                        <li data-oid=":zfiqlr">• No off-topic discussions</li>
                                        <li data-oid="k3cy:7v">• No duplicate job postings</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-4" data-oid="na:qe8x">
                    <div className="max-w-4xl mx-auto text-center" data-oid="ue5jr40">
                        <div
                            className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] rounded-2xl p-8 text-white"
                            data-oid="5.4w_1:"
                        >
                            <h2 className="text-3xl font-bold mb-4" data-oid="it6dwyu">
                                Ready to Join?
                            </h2>
                            <p className="text-xl mb-6 text-blue-100" data-oid="2wki72j">
                                Don't miss out on exclusive opportunities and valuable connections
                            </p>
                            <div
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                                data-oid="j.dv:9u"
                            >
                                <button
                                    onClick={() => handleJoinCommunity('whatsapp')}
                                    className="px-6 py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-all transform hover:scale-105"
                                    data-oid="zd9of:i"
                                >
                                    <MessageCircle
                                        className="inline h-5 w-5 mr-2"
                                        data-oid="hp4yrxv"
                                    />
                                    Join WhatsApp
                                </button>
                                <button
                                    onClick={() => handleJoinCommunity('telegram')}
                                    className="px-6 py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-all transform hover:scale-105"
                                    data-oid="pwizits"
                                >
                                    <Zap className="inline h-5 w-5 mr-2" data-oid="ssp4rvk" />
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
