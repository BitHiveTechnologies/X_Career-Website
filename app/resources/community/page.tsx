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
            data-oid="17b6mh_"
        >
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden -z-10" data-oid="w3-:r_5">
                <div
                    className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-20 rounded-full blur-3xl animate-blob"
                    data-oid="nbsyjt3"
                ></div>
                <div
                    className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"
                    data-oid="zuy5hie"
                ></div>
                <div
                    className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-4000"
                    data-oid="f:hwg0."
                ></div>
            </div>

            <div className="relative z-10" data-oid="br1tj0.">
                {/* Hero Section */}
                <section className="pt-24 pb-16 px-4" data-oid="6y0pbq5">
                    <div className="max-w-6xl mx-auto text-center" data-oid="0.68zb-">
                        <div
                            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-[hsl(196,80%,45%)] border border-[hsl(210,30%,95%)] mb-6"
                            data-oid="2uh_-bp"
                        >
                            <Users className="h-4 w-4" data-oid="5zi5sz9" />
                            Join 25,000+ Tech Professionals
                        </div>

                        <h1
                            className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
                            data-oid="706y4ir"
                        >
                            Connect. Learn.
                            <span
                                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] bg-clip-text text-transparent"
                                data-oid="y0-0u9."
                            >
                                {' '}
                                Grow Together.
                            </span>
                        </h1>

                        <p
                            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                            data-oid="n69c2ni"
                        >
                            Join our vibrant community of developers, get instant help, share
                            opportunities, and accelerate your career growth.
                        </p>

                        {/* Community Stats */}
                        <div
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
                            data-oid="p.7rxa."
                        >
                            {communityStats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                    data-oid="5_h.ahk"
                                >
                                    <stat.icon
                                        className="h-8 w-8 text-[hsl(196,80%,45%)] mx-auto mb-2"
                                        data-oid="06v8buj"
                                    />

                                    <div
                                        className="text-2xl font-bold text-gray-800"
                                        data-oid="9f61934"
                                    >
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-600" data-oid="5cxt2u2">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Platform Selection */}
                <section className="py-16 px-4" data-oid="yb4db.2">
                    <div className="max-w-4xl mx-auto" data-oid="5d8dudl">
                        <div className="text-center mb-12" data-oid="-:h4n:2">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="kdq1x7v"
                            >
                                Choose Your Platform
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="r_b9zj7">
                                Join our community on your preferred messaging platform
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8" data-oid="vh0m6vq">
                            {/* WhatsApp Community */}
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                data-oid="h.5r0og"
                            >
                                <div className="text-center mb-6" data-oid="d0evqqo">
                                    <div
                                        className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                                        data-oid="pnq4z1f"
                                    >
                                        <MessageCircle
                                            className="h-10 w-10 text-green-600"
                                            data-oid="sgfibp:"
                                        />
                                    </div>
                                    <h3
                                        className="text-2xl font-bold text-gray-800 mb-2"
                                        data-oid="n985.14"
                                    >
                                        WhatsApp Community
                                    </h3>
                                    <p className="text-gray-600" data-oid="m6wx588">
                                        Real-time discussions and instant networking
                                    </p>
                                </div>

                                <div className="space-y-4 mb-8" data-oid="9s45d9c">
                                    <div className="flex items-center gap-3" data-oid="svgq93l">
                                        <div
                                            className="w-2 h-2 bg-green-500 rounded-full"
                                            data-oid="0a4lm_c"
                                        ></div>
                                        <span className="text-gray-700" data-oid="_mt4c99">
                                            15,000+ Active Members
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="r0usw4v">
                                        <div
                                            className="w-2 h-2 bg-green-500 rounded-full"
                                            data-oid="mwq16hs"
                                        ></div>
                                        <span className="text-gray-700" data-oid="6md_0--">
                                            Daily Job Postings
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="h3ccuam">
                                        <div
                                            className="w-2 h-2 bg-green-500 rounded-full"
                                            data-oid="c9i8q-l"
                                        ></div>
                                        <span className="text-gray-700" data-oid="sfr9anh">
                                            Quick Doubt Resolution
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="2oqfp.:">
                                        <div
                                            className="w-2 h-2 bg-green-500 rounded-full"
                                            data-oid="_rv_:1n"
                                        ></div>
                                        <span className="text-gray-700" data-oid="ynew6kn">
                                            Referral Opportunities
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleJoinCommunity('whatsapp')}
                                    className="w-full px-6 py-4 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                                    data-oid="_imvdxl"
                                >
                                    <MessageCircle className="h-5 w-5" data-oid="f3zw6ql" />
                                    Join WhatsApp Group
                                    <ArrowRight className="h-5 w-5" data-oid="k.qgmo:" />
                                </button>
                            </div>

                            {/* Telegram Community */}
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                data-oid="v8rq5vr"
                            >
                                <div className="text-center mb-6" data-oid="ixas.sg">
                                    <div
                                        className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
                                        data-oid="fmhv2xk"
                                    >
                                        <Zap
                                            className="h-10 w-10 text-blue-600"
                                            data-oid=":w6srdi"
                                        />
                                    </div>
                                    <h3
                                        className="text-2xl font-bold text-gray-800 mb-2"
                                        data-oid="382rksc"
                                    >
                                        Telegram Channel
                                    </h3>
                                    <p className="text-gray-600" data-oid="eotztsf">
                                        Organized discussions and resource sharing
                                    </p>
                                </div>

                                <div className="space-y-4 mb-8" data-oid="g26:bzv">
                                    <div className="flex items-center gap-3" data-oid="admn8t2">
                                        <div
                                            className="w-2 h-2 bg-blue-500 rounded-full"
                                            data-oid="lg_nd9n"
                                        ></div>
                                        <span className="text-gray-700" data-oid="b6o4o48">
                                            10,000+ Subscribers
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="3snml3q">
                                        <div
                                            className="w-2 h-2 bg-blue-500 rounded-full"
                                            data-oid="efea_ts"
                                        ></div>
                                        <span className="text-gray-700" data-oid="5gjg4k:">
                                            Structured Learning Content
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="lke54vx">
                                        <div
                                            className="w-2 h-2 bg-blue-500 rounded-full"
                                            data-oid="ye7a105"
                                        ></div>
                                        <span className="text-gray-700" data-oid="bd46gc-">
                                            Weekly Tech Updates
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="8o6d.gv">
                                        <div
                                            className="w-2 h-2 bg-blue-500 rounded-full"
                                            data-oid="sm.7d6p"
                                        ></div>
                                        <span className="text-gray-700" data-oid="uidofrp">
                                            Interview Experiences
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleJoinCommunity('telegram')}
                                    className="w-full px-6 py-4 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                                    data-oid="1by.4o2"
                                >
                                    <Zap className="h-5 w-5" data-oid="3j5ilkc" />
                                    Join Telegram Channel
                                    <ArrowRight className="h-5 w-5" data-oid=":blmjl6" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Community Features */}
                <section className="py-16 px-4" data-oid="vx32yge">
                    <div className="max-w-6xl mx-auto" data-oid="p6a-mpk">
                        <div className="text-center mb-12" data-oid="4n_tpm7">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="l47vaiz"
                            >
                                What You'll Get
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="3tkr.7u">
                                Exclusive benefits for community members
                            </p>
                        </div>

                        <div
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                            data-oid="hig6icd"
                        >
                            {communityFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)] hover:shadow-lg transition-all"
                                    data-oid=".7k.rql"
                                >
                                    <div className="text-4xl mb-4" data-oid="tjgi4ks">
                                        {feature.icon}
                                    </div>
                                    <h3
                                        className="text-xl font-bold text-gray-800 mb-2"
                                        data-oid="14xzojd"
                                    >
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600" data-oid="gz7zy-c">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Success Stories */}
                <section className="py-16 px-4" data-oid="7xig8bt">
                    <div className="max-w-6xl mx-auto" data-oid="jdt.vq1">
                        <div className="text-center mb-12" data-oid="64g3bf4">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="8tjote-"
                            >
                                Success Stories
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="rslbf0.">
                                Real stories from our community members
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="g:663dd">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                    data-oid="2ty63zz"
                                >
                                    <div
                                        className="flex items-center gap-4 mb-4"
                                        data-oid="iu4858i"
                                    >
                                        <div className="text-3xl" data-oid="t6nfah9">
                                            {testimonial.image}
                                        </div>
                                        <div data-oid="ij22mnu">
                                            <h4
                                                className="font-bold text-gray-800"
                                                data-oid="o4hv59k"
                                            >
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-sm text-gray-600" data-oid="r9r6ney">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 italic" data-oid="bf0qc_-">
                                        "{testimonial.text}"
                                    </p>
                                    <div
                                        className="flex items-center gap-1 mt-4"
                                        data-oid=":w_qo:r"
                                    >
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="h-4 w-4 text-yellow-500 fill-current"
                                                data-oid="0vhp_7_"
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Community Guidelines */}
                <section className="py-16 px-4" data-oid="klo3q2q">
                    <div className="max-w-4xl mx-auto" data-oid="_mcfi3b">
                        <div
                            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)]"
                            data-oid="9bkx__d"
                        >
                            <div className="text-center mb-8" data-oid="rggc.wb">
                                <Shield
                                    className="h-12 w-12 text-[hsl(196,80%,45%)] mx-auto mb-4"
                                    data-oid="ibwj11f"
                                />

                                <h2
                                    className="text-2xl font-bold text-gray-800 mb-4"
                                    data-oid="lliyvyg"
                                >
                                    Community Guidelines
                                </h2>
                                <p className="text-gray-600" data-oid="dur3ibp">
                                    Help us maintain a positive and productive environment
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6" data-oid=".au_ju6">
                                <div className="space-y-4" data-oid="m45vr39">
                                    <h3 className="font-semibold text-gray-800" data-oid="tif1lbt">
                                        ✅ Do's
                                    </h3>
                                    <ul className="space-y-2 text-gray-600" data-oid="6jp177t">
                                        <li data-oid="9su1rb6">
                                            • Share relevant job opportunities
                                        </li>
                                        <li data-oid="b-qz2_q">
                                            • Help fellow members with doubts
                                        </li>
                                        <li data-oid="fzxlxkx">• Share your success stories</li>
                                        <li data-oid="kl_bx59">• Be respectful and professional</li>
                                        <li data-oid="kq:qsfe">
                                            • Use appropriate channels for discussions
                                        </li>
                                    </ul>
                                </div>
                                <div className="space-y-4" data-oid="69vmp9j">
                                    <h3 className="font-semibold text-gray-800" data-oid="tfcau28">
                                        ❌ Don'ts
                                    </h3>
                                    <ul className="space-y-2 text-gray-600" data-oid="v0yhb-h">
                                        <li data-oid="p6ym5s.">• No spam or promotional content</li>
                                        <li data-oid="7hyf94w">
                                            • No offensive or inappropriate language
                                        </li>
                                        <li data-oid="3mzj2s2">
                                            • No sharing of personal information
                                        </li>
                                        <li data-oid="hwiz062">• No off-topic discussions</li>
                                        <li data-oid="m1ju:53">• No duplicate job postings</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-4" data-oid="9dq-15b">
                    <div className="max-w-4xl mx-auto text-center" data-oid="xrrle45">
                        <div
                            className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] rounded-2xl p-8 text-white"
                            data-oid="t2b._0v"
                        >
                            <h2 className="text-3xl font-bold mb-4" data-oid="bv_:awl">
                                Ready to Join?
                            </h2>
                            <p className="text-xl mb-6 text-blue-100" data-oid="jkz6pk3">
                                Don't miss out on exclusive opportunities and valuable connections
                            </p>
                            <div
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                                data-oid="zbvlzj2"
                            >
                                <button
                                    onClick={() => handleJoinCommunity('whatsapp')}
                                    className="px-6 py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-all transform hover:scale-105"
                                    data-oid="pg.t-sn"
                                >
                                    <MessageCircle
                                        className="inline h-5 w-5 mr-2"
                                        data-oid="b1-715v"
                                    />
                                    Join WhatsApp
                                </button>
                                <button
                                    onClick={() => handleJoinCommunity('telegram')}
                                    className="px-6 py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-all transform hover:scale-105"
                                    data-oid="izihljc"
                                >
                                    <Zap className="inline h-5 w-5 mr-2" data-oid="wsfqgx_" />
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
