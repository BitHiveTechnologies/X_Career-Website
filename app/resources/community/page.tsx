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
            data-oid="1ccjfr-"
        >
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden -z-10" data-oid="o81vtwa">
                <div
                    className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-20 rounded-full blur-3xl animate-blob"
                    data-oid="z-izvth"
                ></div>
                <div
                    className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"
                    data-oid="8z-kzma"
                ></div>
                <div
                    className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-4000"
                    data-oid="aeecp4."
                ></div>
            </div>

            <div className="relative z-10" data-oid="jb2pxin">
                {/* Hero Section */}
                <section className="pt-24 pb-16 px-4" data-oid="lmm42tj">
                    <div className="max-w-6xl mx-auto text-center" data-oid="t_u8em8">
                        <div
                            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-[hsl(196,80%,45%)] border border-[hsl(210,30%,95%)] mb-6"
                            data-oid="r3ohmje"
                        >
                            <Users className="h-4 w-4" data-oid="xuyhob-" />
                            Join 25,000+ Tech Professionals
                        </div>

                        <h1
                            className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
                            data-oid="t3luv.e"
                        >
                            Connect. Learn.
                            <span
                                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] bg-clip-text text-transparent"
                                data-oid="dqhq41k"
                            >
                                {' '}
                                Grow Together.
                            </span>
                        </h1>

                        <p
                            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                            data-oid="p37d-_e"
                        >
                            Join our vibrant community of developers, get instant help, share
                            opportunities, and accelerate your career growth.
                        </p>

                        {/* Community Stats */}
                        <div
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
                            data-oid="1d6j.36"
                        >
                            {communityStats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                    data-oid="cvpwmxi"
                                >
                                    <stat.icon
                                        className="h-8 w-8 text-[hsl(196,80%,45%)] mx-auto mb-2"
                                        data-oid="zfau8o0"
                                    />

                                    <div
                                        className="text-2xl font-bold text-gray-800"
                                        data-oid="vp8zddx"
                                    >
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-600" data-oid="1f4xyqn">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Platform Selection */}
                <section className="py-16 px-4" data-oid="xqntqb2">
                    <div className="max-w-4xl mx-auto" data-oid="s048uy6">
                        <div className="text-center mb-12" data-oid="ymk:49b">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="jc7mm.u"
                            >
                                Choose Your Platform
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="wbwqhy9">
                                Join our community on your preferred messaging platform
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8" data-oid="u7g8lph">
                            {/* WhatsApp Community */}
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                data-oid="tlmqytt"
                            >
                                <div className="text-center mb-6" data-oid="..k8wqi">
                                    <div
                                        className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                                        data-oid="tqjr:.:"
                                    >
                                        <MessageCircle
                                            className="h-10 w-10 text-green-600"
                                            data-oid="14z7pix"
                                        />
                                    </div>
                                    <h3
                                        className="text-2xl font-bold text-gray-800 mb-2"
                                        data-oid="v0fkw8m"
                                    >
                                        WhatsApp Community
                                    </h3>
                                    <p className="text-gray-600" data-oid="-tafiu4">
                                        Real-time discussions and instant networking
                                    </p>
                                </div>

                                <div className="space-y-4 mb-8" data-oid="-il89d1">
                                    <div className="flex items-center gap-3" data-oid="273kvo_">
                                        <div
                                            className="w-2 h-2 bg-green-500 rounded-full"
                                            data-oid="hu-x1br"
                                        ></div>
                                        <span className="text-gray-700" data-oid="-q7l34g">
                                            15,000+ Active Members
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="j7eej8s">
                                        <div
                                            className="w-2 h-2 bg-green-500 rounded-full"
                                            data-oid="b7pujwu"
                                        ></div>
                                        <span className="text-gray-700" data-oid="7a5o:jr">
                                            Daily Job Postings
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="3hbrt9v">
                                        <div
                                            className="w-2 h-2 bg-green-500 rounded-full"
                                            data-oid="-3nfgbq"
                                        ></div>
                                        <span className="text-gray-700" data-oid="ncqgvsq">
                                            Quick Doubt Resolution
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="ahotua-">
                                        <div
                                            className="w-2 h-2 bg-green-500 rounded-full"
                                            data-oid="6n:_7fw"
                                        ></div>
                                        <span className="text-gray-700" data-oid="a_otbb3">
                                            Referral Opportunities
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleJoinCommunity('whatsapp')}
                                    className="w-full px-6 py-4 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                                    data-oid="t4md8f5"
                                >
                                    <MessageCircle className="h-5 w-5" data-oid="3fwolx:" />
                                    Join WhatsApp Group
                                    <ArrowRight className="h-5 w-5" data-oid="sqpfed0" />
                                </button>
                            </div>

                            {/* Telegram Community */}
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                data-oid="6.ttvtp"
                            >
                                <div className="text-center mb-6" data-oid="boeyatv">
                                    <div
                                        className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
                                        data-oid="rzmhk6j"
                                    >
                                        <Zap
                                            className="h-10 w-10 text-blue-600"
                                            data-oid="sd_emk1"
                                        />
                                    </div>
                                    <h3
                                        className="text-2xl font-bold text-gray-800 mb-2"
                                        data-oid="flgneu3"
                                    >
                                        Telegram Channel
                                    </h3>
                                    <p className="text-gray-600" data-oid="x6.eckg">
                                        Organized discussions and resource sharing
                                    </p>
                                </div>

                                <div className="space-y-4 mb-8" data-oid="rb1aig1">
                                    <div className="flex items-center gap-3" data-oid="5tpldf-">
                                        <div
                                            className="w-2 h-2 bg-blue-500 rounded-full"
                                            data-oid="vtzbbvg"
                                        ></div>
                                        <span className="text-gray-700" data-oid="zu::smo">
                                            10,000+ Subscribers
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="hufm_s9">
                                        <div
                                            className="w-2 h-2 bg-blue-500 rounded-full"
                                            data-oid="uncd2kz"
                                        ></div>
                                        <span className="text-gray-700" data-oid="2z1g0ry">
                                            Structured Learning Content
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="92m82a4">
                                        <div
                                            className="w-2 h-2 bg-blue-500 rounded-full"
                                            data-oid="d5x430p"
                                        ></div>
                                        <span className="text-gray-700" data-oid="itl.x07">
                                            Weekly Tech Updates
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid=".i381rm">
                                        <div
                                            className="w-2 h-2 bg-blue-500 rounded-full"
                                            data-oid="6sk2td1"
                                        ></div>
                                        <span className="text-gray-700" data-oid="bbycpo.">
                                            Interview Experiences
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleJoinCommunity('telegram')}
                                    className="w-full px-6 py-4 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                                    data-oid="hbwwhub"
                                >
                                    <Zap className="h-5 w-5" data-oid="h_yt16e" />
                                    Join Telegram Channel
                                    <ArrowRight className="h-5 w-5" data-oid="aac4f9l" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Community Features */}
                <section className="py-16 px-4" data-oid="ni2ft-i">
                    <div className="max-w-6xl mx-auto" data-oid="d4u9zcy">
                        <div className="text-center mb-12" data-oid="h_p5a2u">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="snpipq2"
                            >
                                What You'll Get
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="ns8f30v">
                                Exclusive benefits for community members
                            </p>
                        </div>

                        <div
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                            data-oid="jtogq9e"
                        >
                            {communityFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)] hover:shadow-lg transition-all"
                                    data-oid="wp6tpq3"
                                >
                                    <div className="text-4xl mb-4" data-oid=".uv:wz2">
                                        {feature.icon}
                                    </div>
                                    <h3
                                        className="text-xl font-bold text-gray-800 mb-2"
                                        data-oid="tc1xtph"
                                    >
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600" data-oid="mq2lba6">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Success Stories */}
                <section className="py-16 px-4" data-oid="-4ebutv">
                    <div className="max-w-6xl mx-auto" data-oid="87hb5-4">
                        <div className="text-center mb-12" data-oid="idzr-:b">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="l3gvds9"
                            >
                                Success Stories
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="dn:yjx5">
                                Real stories from our community members
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="4ookmej">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                    data-oid="ltz_ixl"
                                >
                                    <div
                                        className="flex items-center gap-4 mb-4"
                                        data-oid="n:s4sjt"
                                    >
                                        <div className="text-3xl" data-oid="cksab85">
                                            {testimonial.image}
                                        </div>
                                        <div data-oid="6-2l3jj">
                                            <h4
                                                className="font-bold text-gray-800"
                                                data-oid="3wjfand"
                                            >
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-sm text-gray-600" data-oid="o5kjwi-">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 italic" data-oid="jwve-5.">
                                        "{testimonial.text}"
                                    </p>
                                    <div
                                        className="flex items-center gap-1 mt-4"
                                        data-oid="uwn:s.b"
                                    >
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="h-4 w-4 text-yellow-500 fill-current"
                                                data-oid="1_u60.0"
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Community Guidelines */}
                <section className="py-16 px-4" data-oid="fzsngz4">
                    <div className="max-w-4xl mx-auto" data-oid="i040qkq">
                        <div
                            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)]"
                            data-oid="gsya_b8"
                        >
                            <div className="text-center mb-8" data-oid="bdo4ef0">
                                <Shield
                                    className="h-12 w-12 text-[hsl(196,80%,45%)] mx-auto mb-4"
                                    data-oid="utc30g_"
                                />

                                <h2
                                    className="text-2xl font-bold text-gray-800 mb-4"
                                    data-oid="6w7jgsh"
                                >
                                    Community Guidelines
                                </h2>
                                <p className="text-gray-600" data-oid="rpvwxl0">
                                    Help us maintain a positive and productive environment
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6" data-oid="img1lcu">
                                <div className="space-y-4" data-oid="gp-7o7o">
                                    <h3 className="font-semibold text-gray-800" data-oid="ve2._uc">
                                        ✅ Do's
                                    </h3>
                                    <ul className="space-y-2 text-gray-600" data-oid="q5:abj.">
                                        <li data-oid="bujcpl-">
                                            • Share relevant job opportunities
                                        </li>
                                        <li data-oid="dbicvm5">
                                            • Help fellow members with doubts
                                        </li>
                                        <li data-oid="0o-zxt7">• Share your success stories</li>
                                        <li data-oid="2upa_64">• Be respectful and professional</li>
                                        <li data-oid="_wkggj0">
                                            • Use appropriate channels for discussions
                                        </li>
                                    </ul>
                                </div>
                                <div className="space-y-4" data-oid="9ex9148">
                                    <h3 className="font-semibold text-gray-800" data-oid="_7t45et">
                                        ❌ Don'ts
                                    </h3>
                                    <ul className="space-y-2 text-gray-600" data-oid="zygvirb">
                                        <li data-oid=".zyrw8l">• No spam or promotional content</li>
                                        <li data-oid="30rc-j4">
                                            • No offensive or inappropriate language
                                        </li>
                                        <li data-oid="c3tpv2j">
                                            • No sharing of personal information
                                        </li>
                                        <li data-oid="q0rggmq">• No off-topic discussions</li>
                                        <li data-oid="5_rfqt7">• No duplicate job postings</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-4" data-oid="jfugg0t">
                    <div className="max-w-4xl mx-auto text-center" data-oid="9m-6lqu">
                        <div
                            className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] rounded-2xl p-8 text-white"
                            data-oid="r_kdclu"
                        >
                            <h2 className="text-3xl font-bold mb-4" data-oid="51ly9.v">
                                Ready to Join?
                            </h2>
                            <p className="text-xl mb-6 text-blue-100" data-oid="0d:s782">
                                Don't miss out on exclusive opportunities and valuable connections
                            </p>
                            <div
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                                data-oid="ou7c41u"
                            >
                                <button
                                    onClick={() => handleJoinCommunity('whatsapp')}
                                    className="px-6 py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-all transform hover:scale-105"
                                    data-oid="u28tbag"
                                >
                                    <MessageCircle
                                        className="inline h-5 w-5 mr-2"
                                        data-oid="hl2cfzi"
                                    />
                                    Join WhatsApp
                                </button>
                                <button
                                    onClick={() => handleJoinCommunity('telegram')}
                                    className="px-6 py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-all transform hover:scale-105"
                                    data-oid="qibleii"
                                >
                                    <Zap className="inline h-5 w-5 mr-2" data-oid="uyqs.ze" />
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
