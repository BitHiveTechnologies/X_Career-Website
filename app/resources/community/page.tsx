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
            data-oid="5rrw1u2"
        >
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden -z-10" data-oid="z7j.nbv">
                <div
                    className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-20 rounded-full blur-3xl animate-blob"
                    data-oid="hrrojxl"
                ></div>
                <div
                    className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"
                    data-oid="b:crdt5"
                ></div>
                <div
                    className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-4000"
                    data-oid="a:7kzdb"
                ></div>
            </div>

            <div className="relative z-10" data-oid="om28lra">
                {/* Hero Section */}
                <section className="pt-24 pb-16 px-4" data-oid="abru_0k">
                    <div className="max-w-6xl mx-auto text-center" data-oid="md57pdb">
                        <div
                            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-[hsl(196,80%,45%)] border border-[hsl(210,30%,95%)] mb-6"
                            data-oid="0rp2p5q"
                        >
                            <Users className="h-4 w-4" data-oid="4sf299c" />
                            Join 25,000+ Tech Professionals
                        </div>

                        <h1
                            className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
                            data-oid="16k-d2s"
                        >
                            Connect. Learn.
                            <span
                                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] bg-clip-text text-transparent"
                                data-oid="l8mqey9"
                            >
                                {' '}
                                Grow Together.
                            </span>
                        </h1>

                        <p
                            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                            data-oid=".uald0q"
                        >
                            Join our vibrant community of developers, get instant help, share
                            opportunities, and accelerate your career growth.
                        </p>

                        {/* Community Stats */}
                        <div
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
                            data-oid="zifuuxi"
                        >
                            {communityStats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                    data-oid="xdop8ta"
                                >
                                    <stat.icon
                                        className="h-8 w-8 text-[hsl(196,80%,45%)] mx-auto mb-2"
                                        data-oid="k-p:312"
                                    />

                                    <div
                                        className="text-2xl font-bold text-gray-800"
                                        data-oid="uyhexxe"
                                    >
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-600" data-oid="w9iilkr">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Platform Selection */}
                <section className="py-16 px-4" data-oid="vtdy849">
                    <div className="max-w-4xl mx-auto" data-oid="p6r1bwn">
                        <div className="text-center mb-12" data-oid="jh27sm3">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="_h8brrm"
                            >
                                Choose Your Platform
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="zq188l2">
                                Join our community on your preferred messaging platform
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8" data-oid="6x19xch">
                            {/* WhatsApp Community */}
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                data-oid="du1i223"
                            >
                                <div className="text-center mb-6" data-oid="ht9cct9">
                                    <div
                                        className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                                        data-oid="4b0jkpu"
                                    >
                                        <MessageCircle
                                            className="h-10 w-10 text-green-600"
                                            data-oid="d1_vaic"
                                        />
                                    </div>
                                    <h3
                                        className="text-2xl font-bold text-gray-800 mb-2"
                                        data-oid="0na8ww5"
                                    >
                                        WhatsApp Community
                                    </h3>
                                    <p className="text-gray-600" data-oid="6m47b68">
                                        Real-time discussions and instant networking
                                    </p>
                                </div>

                                <div className="space-y-4 mb-8" data-oid="iit_28j">
                                    <div className="flex items-center gap-3" data-oid="6h:y-.u">
                                        <div
                                            className="w-2 h-2 bg-green-500 rounded-full"
                                            data-oid="wtawqid"
                                        ></div>
                                        <span className="text-gray-700" data-oid="rfc1:nb">
                                            15,000+ Active Members
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="vn35mni">
                                        <div
                                            className="w-2 h-2 bg-green-500 rounded-full"
                                            data-oid="lzknae2"
                                        ></div>
                                        <span className="text-gray-700" data-oid="rbeaxse">
                                            Daily Job Postings
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="4jnwi3i">
                                        <div
                                            className="w-2 h-2 bg-green-500 rounded-full"
                                            data-oid="mc22m8p"
                                        ></div>
                                        <span className="text-gray-700" data-oid="dq:0tge">
                                            Quick Doubt Resolution
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="7vymnfp">
                                        <div
                                            className="w-2 h-2 bg-green-500 rounded-full"
                                            data-oid="y4.b_d2"
                                        ></div>
                                        <span className="text-gray-700" data-oid="n.6kcui">
                                            Referral Opportunities
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleJoinCommunity('whatsapp')}
                                    className="w-full px-6 py-4 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                                    data-oid="o8syteh"
                                >
                                    <MessageCircle className="h-5 w-5" data-oid="tgpcdww" />
                                    Join WhatsApp Group
                                    <ArrowRight className="h-5 w-5" data-oid="eslu23w" />
                                </button>
                            </div>

                            {/* Telegram Community */}
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                data-oid="2.vfmy5"
                            >
                                <div className="text-center mb-6" data-oid="yn2ses9">
                                    <div
                                        className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
                                        data-oid="fnvn9.r"
                                    >
                                        <Zap
                                            className="h-10 w-10 text-blue-600"
                                            data-oid="r3ypez2"
                                        />
                                    </div>
                                    <h3
                                        className="text-2xl font-bold text-gray-800 mb-2"
                                        data-oid="vmp1bz:"
                                    >
                                        Telegram Channel
                                    </h3>
                                    <p className="text-gray-600" data-oid="auof4m-">
                                        Organized discussions and resource sharing
                                    </p>
                                </div>

                                <div className="space-y-4 mb-8" data-oid="lkky7d0">
                                    <div className="flex items-center gap-3" data-oid="bl6y2vd">
                                        <div
                                            className="w-2 h-2 bg-blue-500 rounded-full"
                                            data-oid="xxrhw17"
                                        ></div>
                                        <span className="text-gray-700" data-oid="mpepcy:">
                                            10,000+ Subscribers
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="idvp:uq">
                                        <div
                                            className="w-2 h-2 bg-blue-500 rounded-full"
                                            data-oid="_s5m0em"
                                        ></div>
                                        <span className="text-gray-700" data-oid="g.oac9t">
                                            Structured Learning Content
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="rn.vz1s">
                                        <div
                                            className="w-2 h-2 bg-blue-500 rounded-full"
                                            data-oid="0q4c0h0"
                                        ></div>
                                        <span className="text-gray-700" data-oid="1ckn9ye">
                                            Weekly Tech Updates
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="re7:9_6">
                                        <div
                                            className="w-2 h-2 bg-blue-500 rounded-full"
                                            data-oid="5:nwso2"
                                        ></div>
                                        <span className="text-gray-700" data-oid="y7q_dv.">
                                            Interview Experiences
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleJoinCommunity('telegram')}
                                    className="w-full px-6 py-4 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                                    data-oid="w8:ezs5"
                                >
                                    <Zap className="h-5 w-5" data-oid="eus28_l" />
                                    Join Telegram Channel
                                    <ArrowRight className="h-5 w-5" data-oid="9b1retu" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Community Features */}
                <section className="py-16 px-4" data-oid="fsr6j34">
                    <div className="max-w-6xl mx-auto" data-oid="7qepbui">
                        <div className="text-center mb-12" data-oid="c5ev_ef">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="6q_1vea"
                            >
                                What You'll Get
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="liiouuy">
                                Exclusive benefits for community members
                            </p>
                        </div>

                        <div
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                            data-oid="vyhkj34"
                        >
                            {communityFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)] hover:shadow-lg transition-all"
                                    data-oid="390p:tb"
                                >
                                    <div className="text-4xl mb-4" data-oid="jm6-ch.">
                                        {feature.icon}
                                    </div>
                                    <h3
                                        className="text-xl font-bold text-gray-800 mb-2"
                                        data-oid="vq9i6k."
                                    >
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600" data-oid="dqb:ylc">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Success Stories */}
                <section className="py-16 px-4" data-oid="va_loq0">
                    <div className="max-w-6xl mx-auto" data-oid="un4sgm5">
                        <div className="text-center mb-12" data-oid="rc2jjzo">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="pjy9nf4"
                            >
                                Success Stories
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="r741_jo">
                                Real stories from our community members
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="5ouhbty">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                    data-oid="4o99au:"
                                >
                                    <div
                                        className="flex items-center gap-4 mb-4"
                                        data-oid="-z_gulv"
                                    >
                                        <div className="text-3xl" data-oid="z924535">
                                            {testimonial.image}
                                        </div>
                                        <div data-oid="7c1fa7f">
                                            <h4
                                                className="font-bold text-gray-800"
                                                data-oid="k970l7f"
                                            >
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-sm text-gray-600" data-oid="c.u7o3o">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 italic" data-oid="ev_e-4q">
                                        "{testimonial.text}"
                                    </p>
                                    <div
                                        className="flex items-center gap-1 mt-4"
                                        data-oid="jf-g_-k"
                                    >
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="h-4 w-4 text-yellow-500 fill-current"
                                                data-oid="ucbi1s2"
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Community Guidelines */}
                <section className="py-16 px-4" data-oid="zevno8.">
                    <div className="max-w-4xl mx-auto" data-oid="sver8.r">
                        <div
                            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)]"
                            data-oid="6n8:6nh"
                        >
                            <div className="text-center mb-8" data-oid="spu9ziy">
                                <Shield
                                    className="h-12 w-12 text-[hsl(196,80%,45%)] mx-auto mb-4"
                                    data-oid="6v6rjfg"
                                />

                                <h2
                                    className="text-2xl font-bold text-gray-800 mb-4"
                                    data-oid="s:fwsr9"
                                >
                                    Community Guidelines
                                </h2>
                                <p className="text-gray-600" data-oid="x_svad7">
                                    Help us maintain a positive and productive environment
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6" data-oid="ctrh2e:">
                                <div className="space-y-4" data-oid="mqfhu4:">
                                    <h3 className="font-semibold text-gray-800" data-oid="i4n9:-q">
                                        ✅ Do's
                                    </h3>
                                    <ul className="space-y-2 text-gray-600" data-oid="3d3enl1">
                                        <li data-oid="wtx1xvu">
                                            • Share relevant job opportunities
                                        </li>
                                        <li data-oid="tqa9jqi">
                                            • Help fellow members with doubts
                                        </li>
                                        <li data-oid="0gxihx7">• Share your success stories</li>
                                        <li data-oid="gk4.ijp">• Be respectful and professional</li>
                                        <li data-oid="ianmpy6">
                                            • Use appropriate channels for discussions
                                        </li>
                                    </ul>
                                </div>
                                <div className="space-y-4" data-oid="w-h.r-t">
                                    <h3 className="font-semibold text-gray-800" data-oid="bq.tvgq">
                                        ❌ Don'ts
                                    </h3>
                                    <ul className="space-y-2 text-gray-600" data-oid="i3jg0ts">
                                        <li data-oid="gzn_mxw">• No spam or promotional content</li>
                                        <li data-oid="t452.5z">
                                            • No offensive or inappropriate language
                                        </li>
                                        <li data-oid="d_g9f41">
                                            • No sharing of personal information
                                        </li>
                                        <li data-oid="xwjx6-f">• No off-topic discussions</li>
                                        <li data-oid="i1uep0b">• No duplicate job postings</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-4" data-oid="mfl4dst">
                    <div className="max-w-4xl mx-auto text-center" data-oid="j52_hl0">
                        <div
                            className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] rounded-2xl p-8 text-white"
                            data-oid="ekgll.a"
                        >
                            <h2 className="text-3xl font-bold mb-4" data-oid="j-3f:4m">
                                Ready to Join?
                            </h2>
                            <p className="text-xl mb-6 text-blue-100" data-oid="kmoam1p">
                                Don't miss out on exclusive opportunities and valuable connections
                            </p>
                            <div
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                                data-oid="18ukfq1"
                            >
                                <button
                                    onClick={() => handleJoinCommunity('whatsapp')}
                                    className="px-6 py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-all transform hover:scale-105"
                                    data-oid="s251hak"
                                >
                                    <MessageCircle
                                        className="inline h-5 w-5 mr-2"
                                        data-oid="c8f_2n7"
                                    />
                                    Join WhatsApp
                                </button>
                                <button
                                    onClick={() => handleJoinCommunity('telegram')}
                                    className="px-6 py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-all transform hover:scale-105"
                                    data-oid="ec7nz46"
                                >
                                    <Zap className="inline h-5 w-5 mr-2" data-oid="op:yogc" />
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
