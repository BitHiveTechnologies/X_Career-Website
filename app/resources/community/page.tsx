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
            data-oid="prq203r"
        >
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden -z-10" data-oid="tejbm2u">
                <div
                    className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-20 rounded-full blur-3xl animate-blob"
                    data-oid="dqwx7v5"
                ></div>
                <div
                    className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"
                    data-oid="bxmzbw4"
                ></div>
                <div
                    className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-4000"
                    data-oid="1yjn63u"
                ></div>
            </div>

            <div className="relative z-10" data-oid="2tg.8v1">
                {/* Hero Section */}
                <section className="pt-24 pb-16 px-4" data-oid="73a2grb">
                    <div className="max-w-6xl mx-auto text-center" data-oid="8h:18-z">
                        <div
                            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-[hsl(196,80%,45%)] border border-[hsl(210,30%,95%)] mb-6"
                            data-oid="iie:k3x"
                        >
                            <Users className="h-4 w-4" data-oid="agfa2hs" />
                            Join 25,000+ Tech Professionals
                        </div>

                        <h1
                            className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
                            data-oid="xgl2nhz"
                        >
                            Connect. Learn.
                            <span
                                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] bg-clip-text text-transparent"
                                data-oid="c8_z-:v"
                            >
                                {' '}
                                Grow Together.
                            </span>
                        </h1>

                        <p
                            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                            data-oid="uslg62x"
                        >
                            Join our vibrant community of developers, get instant help, share
                            opportunities, and accelerate your career growth.
                        </p>

                        {/* Community Stats */}
                        <div
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
                            data-oid="p:8q043"
                        >
                            {communityStats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                    data-oid="m5pnn0_"
                                >
                                    <stat.icon
                                        className="h-8 w-8 text-[hsl(196,80%,45%)] mx-auto mb-2"
                                        data-oid="_kra3ho"
                                    />

                                    <div
                                        className="text-2xl font-bold text-gray-800"
                                        data-oid="ibe-6h6"
                                    >
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-600" data-oid=".pnh.gb">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Platform Selection */}
                <section className="py-16 px-4" data-oid="-8_u.-y">
                    <div className="max-w-4xl mx-auto" data-oid="r_-gv8b">
                        <div className="text-center mb-12" data-oid="uh3.-xd">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="adsndh5"
                            >
                                Choose Your Platform
                            </h2>
                            <p className="text-xl text-gray-600" data-oid=":2usl3z">
                                Join our community on your preferred messaging platform
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8" data-oid="ne4siln">
                            {/* WhatsApp Community */}
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                data-oid="t7x522h"
                            >
                                <div className="text-center mb-6" data-oid="xl1gjo:">
                                    <div
                                        className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                                        data-oid="qlo_ut:"
                                    >
                                        <MessageCircle
                                            className="h-10 w-10 text-green-600"
                                            data-oid="m0_nu.b"
                                        />
                                    </div>
                                    <h3
                                        className="text-2xl font-bold text-gray-800 mb-2"
                                        data-oid="fc5yvo-"
                                    >
                                        WhatsApp Community
                                    </h3>
                                    <p className="text-gray-600" data-oid="5cjav:d">
                                        Real-time discussions and instant networking
                                    </p>
                                </div>

                                <div className="space-y-4 mb-8" data-oid="x:7rqlb">
                                    <div className="flex items-center gap-3" data-oid="z04ru1p">
                                        <div
                                            className="w-2 h-2 bg-green-500 rounded-full"
                                            data-oid="6k7:sc0"
                                        ></div>
                                        <span className="text-gray-700" data-oid="qn76:ss">
                                            15,000+ Active Members
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="_c_vvef">
                                        <div
                                            className="w-2 h-2 bg-green-500 rounded-full"
                                            data-oid="gwy00v9"
                                        ></div>
                                        <span className="text-gray-700" data-oid="a_ujmp-">
                                            Daily Job Postings
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="3oybbbd">
                                        <div
                                            className="w-2 h-2 bg-green-500 rounded-full"
                                            data-oid="q5rh1me"
                                        ></div>
                                        <span className="text-gray-700" data-oid="llymzgs">
                                            Quick Doubt Resolution
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="u1amctt">
                                        <div
                                            className="w-2 h-2 bg-green-500 rounded-full"
                                            data-oid="50zv4nf"
                                        ></div>
                                        <span className="text-gray-700" data-oid="q63mkv1">
                                            Referral Opportunities
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleJoinCommunity('whatsapp')}
                                    className="w-full px-6 py-4 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                                    data-oid="gga42b3"
                                >
                                    <MessageCircle className="h-5 w-5" data-oid="jhyiw9y" />
                                    Join WhatsApp Group
                                    <ArrowRight className="h-5 w-5" data-oid="l-z7-mc" />
                                </button>
                            </div>

                            {/* Telegram Community */}
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                data-oid="ttbgyxu"
                            >
                                <div className="text-center mb-6" data-oid="nlxlpqd">
                                    <div
                                        className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
                                        data-oid="m9c6scw"
                                    >
                                        <Zap
                                            className="h-10 w-10 text-blue-600"
                                            data-oid=":8y1uty"
                                        />
                                    </div>
                                    <h3
                                        className="text-2xl font-bold text-gray-800 mb-2"
                                        data-oid="9z9hxn1"
                                    >
                                        Telegram Channel
                                    </h3>
                                    <p className="text-gray-600" data-oid="jxqacmc">
                                        Organized discussions and resource sharing
                                    </p>
                                </div>

                                <div className="space-y-4 mb-8" data-oid="ehphf-e">
                                    <div className="flex items-center gap-3" data-oid="-5im4tk">
                                        <div
                                            className="w-2 h-2 bg-blue-500 rounded-full"
                                            data-oid="awlbkvx"
                                        ></div>
                                        <span className="text-gray-700" data-oid="5n094n.">
                                            10,000+ Subscribers
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="xvpn7m_">
                                        <div
                                            className="w-2 h-2 bg-blue-500 rounded-full"
                                            data-oid="v:jmy6."
                                        ></div>
                                        <span className="text-gray-700" data-oid="30b_9gk">
                                            Structured Learning Content
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="7a8p6t4">
                                        <div
                                            className="w-2 h-2 bg-blue-500 rounded-full"
                                            data-oid="-ls3grv"
                                        ></div>
                                        <span className="text-gray-700" data-oid="bhne9xp">
                                            Weekly Tech Updates
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="9aca01-">
                                        <div
                                            className="w-2 h-2 bg-blue-500 rounded-full"
                                            data-oid=":dlqj1v"
                                        ></div>
                                        <span className="text-gray-700" data-oid="hf9qzd.">
                                            Interview Experiences
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleJoinCommunity('telegram')}
                                    className="w-full px-6 py-4 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                                    data-oid="ebp:yka"
                                >
                                    <Zap className="h-5 w-5" data-oid="0y0pujr" />
                                    Join Telegram Channel
                                    <ArrowRight className="h-5 w-5" data-oid="aqyquyy" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Community Features */}
                <section className="py-16 px-4" data-oid="r:ztqrh">
                    <div className="max-w-6xl mx-auto" data-oid="y7:k2bk">
                        <div className="text-center mb-12" data-oid="uu8onft">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="-igxo8g"
                            >
                                What You'll Get
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="nms9_-h">
                                Exclusive benefits for community members
                            </p>
                        </div>

                        <div
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                            data-oid="98a7wqr"
                        >
                            {communityFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)] hover:shadow-lg transition-all"
                                    data-oid="oxbe3f1"
                                >
                                    <div className="text-4xl mb-4" data-oid="whzw3_p">
                                        {feature.icon}
                                    </div>
                                    <h3
                                        className="text-xl font-bold text-gray-800 mb-2"
                                        data-oid="fbwugnw"
                                    >
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600" data-oid="::b14cw">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Success Stories */}
                <section className="py-16 px-4" data-oid="trfj2bg">
                    <div className="max-w-6xl mx-auto" data-oid="gfi023q">
                        <div className="text-center mb-12" data-oid="w:tcds_">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="27vscnv"
                            >
                                Success Stories
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="3dmmzr6">
                                Real stories from our community members
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="6kgr73k">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                    data-oid="geexjba"
                                >
                                    <div
                                        className="flex items-center gap-4 mb-4"
                                        data-oid="qa_obyj"
                                    >
                                        <div className="text-3xl" data-oid="9a7e-.3">
                                            {testimonial.image}
                                        </div>
                                        <div data-oid="r9nnrsv">
                                            <h4
                                                className="font-bold text-gray-800"
                                                data-oid="j757x:h"
                                            >
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-sm text-gray-600" data-oid="pruvg5l">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 italic" data-oid="smcojh6">
                                        "{testimonial.text}"
                                    </p>
                                    <div
                                        className="flex items-center gap-1 mt-4"
                                        data-oid="bk0ufw8"
                                    >
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="h-4 w-4 text-yellow-500 fill-current"
                                                data-oid="12y7n93"
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Community Guidelines */}
                <section className="py-16 px-4" data-oid="956znlk">
                    <div className="max-w-4xl mx-auto" data-oid="vxpd8jh">
                        <div
                            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)]"
                            data-oid="as4ldia"
                        >
                            <div className="text-center mb-8" data-oid="qsqz.xc">
                                <Shield
                                    className="h-12 w-12 text-[hsl(196,80%,45%)] mx-auto mb-4"
                                    data-oid="0d:e3dd"
                                />

                                <h2
                                    className="text-2xl font-bold text-gray-800 mb-4"
                                    data-oid="w9n_1dw"
                                >
                                    Community Guidelines
                                </h2>
                                <p className="text-gray-600" data-oid=":v3gb-4">
                                    Help us maintain a positive and productive environment
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6" data-oid="xnl5.6f">
                                <div className="space-y-4" data-oid="z5iu9x7">
                                    <h3 className="font-semibold text-gray-800" data-oid="6r8btus">
                                        ✅ Do's
                                    </h3>
                                    <ul className="space-y-2 text-gray-600" data-oid="1949m3e">
                                        <li data-oid="f3siqjh">
                                            • Share relevant job opportunities
                                        </li>
                                        <li data-oid="lbirnhy">
                                            • Help fellow members with doubts
                                        </li>
                                        <li data-oid="96lo25b">• Share your success stories</li>
                                        <li data-oid=".0_7kvf">• Be respectful and professional</li>
                                        <li data-oid="8ae.qy0">
                                            • Use appropriate channels for discussions
                                        </li>
                                    </ul>
                                </div>
                                <div className="space-y-4" data-oid="q-kr4yv">
                                    <h3 className="font-semibold text-gray-800" data-oid="6:m14nq">
                                        ❌ Don'ts
                                    </h3>
                                    <ul className="space-y-2 text-gray-600" data-oid=".idixnu">
                                        <li data-oid="x:2ohp0">• No spam or promotional content</li>
                                        <li data-oid="ejjf-l2">
                                            • No offensive or inappropriate language
                                        </li>
                                        <li data-oid="r.5pd5s">
                                            • No sharing of personal information
                                        </li>
                                        <li data-oid=".mg6.tt">• No off-topic discussions</li>
                                        <li data-oid="_lbfm:h">• No duplicate job postings</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-4" data-oid="58.cksw">
                    <div className="max-w-4xl mx-auto text-center" data-oid="e_wrxts">
                        <div
                            className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] rounded-2xl p-8 text-white"
                            data-oid="yt:gcce"
                        >
                            <h2 className="text-3xl font-bold mb-4" data-oid="ugtgfsm">
                                Ready to Join?
                            </h2>
                            <p className="text-xl mb-6 text-blue-100" data-oid="bqsjczp">
                                Don't miss out on exclusive opportunities and valuable connections
                            </p>
                            <div
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                                data-oid="hq3nynw"
                            >
                                <button
                                    onClick={() => handleJoinCommunity('whatsapp')}
                                    className="px-6 py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-all transform hover:scale-105"
                                    data-oid="98p0me0"
                                >
                                    <MessageCircle
                                        className="inline h-5 w-5 mr-2"
                                        data-oid="821od0x"
                                    />
                                    Join WhatsApp
                                </button>
                                <button
                                    onClick={() => handleJoinCommunity('telegram')}
                                    className="px-6 py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-all transform hover:scale-105"
                                    data-oid="1jrlees"
                                >
                                    <Zap className="inline h-5 w-5 mr-2" data-oid="eyvgcoj" />
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
