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
            data-oid="daqlph1"
        >
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden -z-10" data-oid="lp.81io">
                <div
                    className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-20 rounded-full blur-3xl animate-blob"
                    data-oid="_.4ejlw"
                ></div>
                <div
                    className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"
                    data-oid="_:zwwg9"
                ></div>
                <div
                    className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-4000"
                    data-oid="_beuj:g"
                ></div>
            </div>

            <div className="relative z-10" data-oid="3gytble">
                {/* Hero Section */}
                <section className="pt-24 pb-16 px-4" data-oid="n2duwgm">
                    <div className="max-w-6xl mx-auto text-center" data-oid="9j10k-v">
                        <div
                            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-[hsl(196,80%,45%)] border border-[hsl(210,30%,95%)] mb-6"
                            data-oid=".t7b1h:"
                        >
                            <Users className="h-4 w-4" data-oid="vdvt4n_" />
                            Join 25,000+ Tech Professionals
                        </div>

                        <h1
                            className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
                            data-oid="44ny78-"
                        >
                            Connect. Learn.
                            <span
                                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] bg-clip-text text-transparent"
                                data-oid="mpmc3q0"
                            >
                                {' '}
                                Grow Together.
                            </span>
                        </h1>

                        <p
                            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                            data-oid="3:g31f6"
                        >
                            Join our vibrant community of developers, get instant help, share
                            opportunities, and accelerate your career growth.
                        </p>

                        {/* Community Stats */}
                        <div
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
                            data-oid="tpfscyk"
                        >
                            {communityStats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                    data-oid="_ab58:2"
                                >
                                    <stat.icon
                                        className="h-8 w-8 text-[hsl(196,80%,45%)] mx-auto mb-2"
                                        data-oid="7xgj566"
                                    />

                                    <div
                                        className="text-2xl font-bold text-gray-800"
                                        data-oid="_3yhybz"
                                    >
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-600" data-oid="q.x950k">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Platform Selection */}
                <section className="py-16 px-4" data-oid="_xfx:l1">
                    <div className="max-w-4xl mx-auto" data-oid="db8xw4s">
                        <div className="text-center mb-12" data-oid="ze73x6h">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="devpy29"
                            >
                                Choose Your Platform
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="u-:7rzw">
                                Join our community on your preferred messaging platform
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8" data-oid="n3w9sh9">
                            {/* WhatsApp Community */}
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                data-oid="n8z023v"
                            >
                                <div className="text-center mb-6" data-oid="kw9lgxq">
                                    <div
                                        className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                                        data-oid="bub5-qy"
                                    >
                                        <MessageCircle
                                            className="h-10 w-10 text-green-600"
                                            data-oid="c9uuat7"
                                        />
                                    </div>
                                    <h3
                                        className="text-2xl font-bold text-gray-800 mb-2"
                                        data-oid="td-60my"
                                    >
                                        WhatsApp Community
                                    </h3>
                                    <p className="text-gray-600" data-oid="srrdq3u">
                                        Real-time discussions and instant networking
                                    </p>
                                </div>

                                <div className="space-y-4 mb-8" data-oid="1_2o-l3">
                                    <div className="flex items-center gap-3" data-oid="64rymiy">
                                        <div
                                            className="w-2 h-2 bg-green-500 rounded-full"
                                            data-oid=".:cvm.g"
                                        ></div>
                                        <span className="text-gray-700" data-oid="2:igvdx">
                                            15,000+ Active Members
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="kfh4a0a">
                                        <div
                                            className="w-2 h-2 bg-green-500 rounded-full"
                                            data-oid="71__lsb"
                                        ></div>
                                        <span className="text-gray-700" data-oid="jqlmdrr">
                                            Daily Job Postings
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="m:_-k:s">
                                        <div
                                            className="w-2 h-2 bg-green-500 rounded-full"
                                            data-oid="7yhk3y5"
                                        ></div>
                                        <span className="text-gray-700" data-oid="0wig-cv">
                                            Quick Doubt Resolution
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="ktbne38">
                                        <div
                                            className="w-2 h-2 bg-green-500 rounded-full"
                                            data-oid="wo1rke:"
                                        ></div>
                                        <span className="text-gray-700" data-oid="oz.j5me">
                                            Referral Opportunities
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleJoinCommunity('whatsapp')}
                                    className="w-full px-6 py-4 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                                    data-oid="c-pwnvx"
                                >
                                    <MessageCircle className="h-5 w-5" data-oid="n4r-9sb" />
                                    Join WhatsApp Group
                                    <ArrowRight className="h-5 w-5" data-oid="g-o_r9f" />
                                </button>
                            </div>

                            {/* Telegram Community */}
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                data-oid="-capj4r"
                            >
                                <div className="text-center mb-6" data-oid="1m32h0f">
                                    <div
                                        className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
                                        data-oid="7-1a_70"
                                    >
                                        <Zap
                                            className="h-10 w-10 text-blue-600"
                                            data-oid="0p.zrsg"
                                        />
                                    </div>
                                    <h3
                                        className="text-2xl font-bold text-gray-800 mb-2"
                                        data-oid="wg8wyzx"
                                    >
                                        Telegram Channel
                                    </h3>
                                    <p className="text-gray-600" data-oid="8nxuitx">
                                        Organized discussions and resource sharing
                                    </p>
                                </div>

                                <div className="space-y-4 mb-8" data-oid="o3p48yh">
                                    <div className="flex items-center gap-3" data-oid="nn0lxqz">
                                        <div
                                            className="w-2 h-2 bg-blue-500 rounded-full"
                                            data-oid="u60abxb"
                                        ></div>
                                        <span className="text-gray-700" data-oid="c3n8a3s">
                                            10,000+ Subscribers
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid=":..xwcv">
                                        <div
                                            className="w-2 h-2 bg-blue-500 rounded-full"
                                            data-oid="ryu30cx"
                                        ></div>
                                        <span className="text-gray-700" data-oid="bd7.7t6">
                                            Structured Learning Content
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="2i_aira">
                                        <div
                                            className="w-2 h-2 bg-blue-500 rounded-full"
                                            data-oid="c_s.bh:"
                                        ></div>
                                        <span className="text-gray-700" data-oid="7o5xmju">
                                            Weekly Tech Updates
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="9u-ulu:">
                                        <div
                                            className="w-2 h-2 bg-blue-500 rounded-full"
                                            data-oid="9_9-5:b"
                                        ></div>
                                        <span className="text-gray-700" data-oid="vj8y3k3">
                                            Interview Experiences
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleJoinCommunity('telegram')}
                                    className="w-full px-6 py-4 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                                    data-oid=":w--k9q"
                                >
                                    <Zap className="h-5 w-5" data-oid="4z0-ynr" />
                                    Join Telegram Channel
                                    <ArrowRight className="h-5 w-5" data-oid="rlp9d4v" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Community Features */}
                <section className="py-16 px-4" data-oid="v20j8og">
                    <div className="max-w-6xl mx-auto" data-oid="zg0p.2w">
                        <div className="text-center mb-12" data-oid="wb:0e6_">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="su6lu15"
                            >
                                What You'll Get
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="oi-iwpj">
                                Exclusive benefits for community members
                            </p>
                        </div>

                        <div
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                            data-oid="nw6g9w6"
                        >
                            {communityFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)] hover:shadow-lg transition-all"
                                    data-oid="-ab87e:"
                                >
                                    <div className="text-4xl mb-4" data-oid="avcidpy">
                                        {feature.icon}
                                    </div>
                                    <h3
                                        className="text-xl font-bold text-gray-800 mb-2"
                                        data-oid=":w-oi07"
                                    >
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600" data-oid="e97vjbi">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Success Stories */}
                <section className="py-16 px-4" data-oid="qb7ouh0">
                    <div className="max-w-6xl mx-auto" data-oid="5w2okp0">
                        <div className="text-center mb-12" data-oid="uul3xyl">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="41b3p4y"
                            >
                                Success Stories
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="faz:srq">
                                Real stories from our community members
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="5:tkat6">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                    data-oid="at3-v1:"
                                >
                                    <div
                                        className="flex items-center gap-4 mb-4"
                                        data-oid="57qpgoe"
                                    >
                                        <div className="text-3xl" data-oid="o77rw3l">
                                            {testimonial.image}
                                        </div>
                                        <div data-oid="30:-mqx">
                                            <h4
                                                className="font-bold text-gray-800"
                                                data-oid="2qf4p60"
                                            >
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-sm text-gray-600" data-oid="qvdtqvq">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 italic" data-oid="5fdhhy6">
                                        "{testimonial.text}"
                                    </p>
                                    <div
                                        className="flex items-center gap-1 mt-4"
                                        data-oid="5ss4srz"
                                    >
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="h-4 w-4 text-yellow-500 fill-current"
                                                data-oid="h5pf.ua"
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Community Guidelines */}
                <section className="py-16 px-4" data-oid="k7l3_zn">
                    <div className="max-w-4xl mx-auto" data-oid="l-fvu.2">
                        <div
                            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)]"
                            data-oid="0y-cwx9"
                        >
                            <div className="text-center mb-8" data-oid="79sm:.-">
                                <Shield
                                    className="h-12 w-12 text-[hsl(196,80%,45%)] mx-auto mb-4"
                                    data-oid="z2htg2e"
                                />

                                <h2
                                    className="text-2xl font-bold text-gray-800 mb-4"
                                    data-oid="o7ynmk7"
                                >
                                    Community Guidelines
                                </h2>
                                <p className="text-gray-600" data-oid="98z:gqu">
                                    Help us maintain a positive and productive environment
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6" data-oid="4bdespr">
                                <div className="space-y-4" data-oid="91lum6b">
                                    <h3 className="font-semibold text-gray-800" data-oid="9gsnfto">
                                        ✅ Do's
                                    </h3>
                                    <ul className="space-y-2 text-gray-600" data-oid="ndsrobb">
                                        <li data-oid="_7h02gs">
                                            • Share relevant job opportunities
                                        </li>
                                        <li data-oid="igyxft2">
                                            • Help fellow members with doubts
                                        </li>
                                        <li data-oid="20unoko">• Share your success stories</li>
                                        <li data-oid="r_pks1h">• Be respectful and professional</li>
                                        <li data-oid="izrac5v">
                                            • Use appropriate channels for discussions
                                        </li>
                                    </ul>
                                </div>
                                <div className="space-y-4" data-oid="68.mfp3">
                                    <h3 className="font-semibold text-gray-800" data-oid="bufnb16">
                                        ❌ Don'ts
                                    </h3>
                                    <ul className="space-y-2 text-gray-600" data-oid=".iqayos">
                                        <li data-oid="0-5maq.">• No spam or promotional content</li>
                                        <li data-oid="ma::mfe">
                                            • No offensive or inappropriate language
                                        </li>
                                        <li data-oid="yohie7l">
                                            • No sharing of personal information
                                        </li>
                                        <li data-oid="_01zkpx">• No off-topic discussions</li>
                                        <li data-oid="1kg:uyq">• No duplicate job postings</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-4" data-oid=":0c9vbz">
                    <div className="max-w-4xl mx-auto text-center" data-oid="b7c.z59">
                        <div
                            className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] rounded-2xl p-8 text-white"
                            data-oid="p:isyz2"
                        >
                            <h2 className="text-3xl font-bold mb-4" data-oid="g6qril:">
                                Ready to Join?
                            </h2>
                            <p className="text-xl mb-6 text-blue-100" data-oid="a8qvt.-">
                                Don't miss out on exclusive opportunities and valuable connections
                            </p>
                            <div
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                                data-oid="utlvr5n"
                            >
                                <button
                                    onClick={() => handleJoinCommunity('whatsapp')}
                                    className="px-6 py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-all transform hover:scale-105"
                                    data-oid="4-lhmyh"
                                >
                                    <MessageCircle
                                        className="inline h-5 w-5 mr-2"
                                        data-oid="atssj6y"
                                    />
                                    Join WhatsApp
                                </button>
                                <button
                                    onClick={() => handleJoinCommunity('telegram')}
                                    className="px-6 py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-all transform hover:scale-105"
                                    data-oid="66nzbi6"
                                >
                                    <Zap className="inline h-5 w-5 mr-2" data-oid="vakyi5v" />
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
