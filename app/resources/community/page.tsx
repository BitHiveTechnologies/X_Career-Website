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
            data-oid="_zakv_e"
        >
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden -z-10" data-oid="nclmj3u">
                <div
                    className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-20 rounded-full blur-3xl animate-blob"
                    data-oid="jjv2--y"
                ></div>
                <div
                    className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"
                    data-oid="3cl:ofo"
                ></div>
                <div
                    className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-4000"
                    data-oid="3jmhoug"
                ></div>
            </div>

            <div className="relative z-10" data-oid=":pcbtwp">
                {/* Hero Section */}
                <section className="pt-24 pb-16 px-4" data-oid="phdj489">
                    <div className="max-w-6xl mx-auto text-center" data-oid="xxu-j_z">
                        <div
                            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-[hsl(196,80%,45%)] border border-[hsl(210,30%,95%)] mb-6"
                            data-oid="2p1t2ib"
                        >
                            <Users className="h-4 w-4" data-oid=":fo9.nz" />
                            Join 25,000+ Tech Professionals
                        </div>

                        <h1
                            className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
                            data-oid="j1omv94"
                        >
                            Connect. Learn.
                            <span
                                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] bg-clip-text text-transparent"
                                data-oid="xi2xms_"
                            >
                                {' '}
                                Grow Together.
                            </span>
                        </h1>

                        <p
                            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                            data-oid="...0:20"
                        >
                            Join our vibrant community of developers, get instant help, share
                            opportunities, and accelerate your career growth.
                        </p>

                        {/* Community Stats */}
                        <div
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
                            data-oid="tg6tv6s"
                        >
                            {communityStats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                    data-oid=":ncp81n"
                                >
                                    <stat.icon
                                        className="h-8 w-8 text-[hsl(196,80%,45%)] mx-auto mb-2"
                                        data-oid="g8r6gfk"
                                    />

                                    <div
                                        className="text-2xl font-bold text-gray-800"
                                        data-oid="hsi_6ts"
                                    >
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-600" data-oid="4qbs.jn">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Platform Selection */}
                <section className="py-16 px-4" data-oid="due:wx0">
                    <div className="max-w-4xl mx-auto" data-oid="0x74y72">
                        <div className="text-center mb-12" data-oid="syfdje1">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="n17a5ih"
                            >
                                Choose Your Platform
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="b-b920-">
                                Join our community on your preferred messaging platform
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8" data-oid="iskomwr">
                            {/* WhatsApp Community */}
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                data-oid="srhs:.o"
                            >
                                <div className="text-center mb-6" data-oid="mc-5koe">
                                    <div
                                        className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                                        data-oid="bu4fd_f"
                                    >
                                        <MessageCircle
                                            className="h-10 w-10 text-green-600"
                                            data-oid="to.n7dr"
                                        />
                                    </div>
                                    <h3
                                        className="text-2xl font-bold text-gray-800 mb-2"
                                        data-oid="o0kpvy:"
                                    >
                                        WhatsApp Community
                                    </h3>
                                    <p className="text-gray-600" data-oid="gnbglix">
                                        Real-time discussions and instant networking
                                    </p>
                                </div>

                                <div className="space-y-4 mb-8" data-oid="cff9.ot">
                                    <div className="flex items-center gap-3" data-oid="nsn6wo_">
                                        <div
                                            className="w-2 h-2 bg-green-500 rounded-full"
                                            data-oid="hvdttyi"
                                        ></div>
                                        <span className="text-gray-700" data-oid="wt:l470">
                                            15,000+ Active Members
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="thqnnsp">
                                        <div
                                            className="w-2 h-2 bg-green-500 rounded-full"
                                            data-oid="o1q0rha"
                                        ></div>
                                        <span className="text-gray-700" data-oid="mrltahb">
                                            Daily Job Postings
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="o1-fco2">
                                        <div
                                            className="w-2 h-2 bg-green-500 rounded-full"
                                            data-oid="94ouy:u"
                                        ></div>
                                        <span className="text-gray-700" data-oid="bd:bhnr">
                                            Quick Doubt Resolution
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="-mp-sti">
                                        <div
                                            className="w-2 h-2 bg-green-500 rounded-full"
                                            data-oid="rdgkp3j"
                                        ></div>
                                        <span className="text-gray-700" data-oid="8d3ti5i">
                                            Referral Opportunities
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleJoinCommunity('whatsapp')}
                                    className="w-full px-6 py-4 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                                    data-oid="ub7oz:a"
                                >
                                    <MessageCircle className="h-5 w-5" data-oid="pr3jvms" />
                                    Join WhatsApp Group
                                    <ArrowRight className="h-5 w-5" data-oid="8u-mwce" />
                                </button>
                            </div>

                            {/* Telegram Community */}
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                data-oid="66ps4ig"
                            >
                                <div className="text-center mb-6" data-oid="8:zpll.">
                                    <div
                                        className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
                                        data-oid="j..sn.5"
                                    >
                                        <Zap
                                            className="h-10 w-10 text-blue-600"
                                            data-oid=":01mrj_"
                                        />
                                    </div>
                                    <h3
                                        className="text-2xl font-bold text-gray-800 mb-2"
                                        data-oid="_t_jg-j"
                                    >
                                        Telegram Channel
                                    </h3>
                                    <p className="text-gray-600" data-oid=":9tu5se">
                                        Organized discussions and resource sharing
                                    </p>
                                </div>

                                <div className="space-y-4 mb-8" data-oid="e6fu74l">
                                    <div className="flex items-center gap-3" data-oid="ylook0_">
                                        <div
                                            className="w-2 h-2 bg-blue-500 rounded-full"
                                            data-oid="qa73msk"
                                        ></div>
                                        <span className="text-gray-700" data-oid="i:eslfj">
                                            10,000+ Subscribers
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="tq87thz">
                                        <div
                                            className="w-2 h-2 bg-blue-500 rounded-full"
                                            data-oid="bcy2-a4"
                                        ></div>
                                        <span className="text-gray-700" data-oid="zm3nd2k">
                                            Structured Learning Content
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="z9h3wen">
                                        <div
                                            className="w-2 h-2 bg-blue-500 rounded-full"
                                            data-oid="7ggy5.y"
                                        ></div>
                                        <span className="text-gray-700" data-oid="7in6b_t">
                                            Weekly Tech Updates
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="arudto9">
                                        <div
                                            className="w-2 h-2 bg-blue-500 rounded-full"
                                            data-oid="7uds04p"
                                        ></div>
                                        <span className="text-gray-700" data-oid="10.jm__">
                                            Interview Experiences
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleJoinCommunity('telegram')}
                                    className="w-full px-6 py-4 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                                    data-oid="6rk02vc"
                                >
                                    <Zap className="h-5 w-5" data-oid="s2bk450" />
                                    Join Telegram Channel
                                    <ArrowRight className="h-5 w-5" data-oid="t3i4gna" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Community Features */}
                <section className="py-16 px-4" data-oid="vyubsw_">
                    <div className="max-w-6xl mx-auto" data-oid="shi7dy_">
                        <div className="text-center mb-12" data-oid="21vhtrg">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="i33:dna"
                            >
                                What You'll Get
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="kli78kj">
                                Exclusive benefits for community members
                            </p>
                        </div>

                        <div
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                            data-oid="-ue:sfo"
                        >
                            {communityFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)] hover:shadow-lg transition-all"
                                    data-oid="f:t62sx"
                                >
                                    <div className="text-4xl mb-4" data-oid="7g:z:lm">
                                        {feature.icon}
                                    </div>
                                    <h3
                                        className="text-xl font-bold text-gray-800 mb-2"
                                        data-oid="uzyn7_8"
                                    >
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600" data-oid="wsjmbtt">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Success Stories */}
                <section className="py-16 px-4" data-oid="xqu7scl">
                    <div className="max-w-6xl mx-auto" data-oid="6vmqxaf">
                        <div className="text-center mb-12" data-oid="u71tv5c">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="b422vkr"
                            >
                                Success Stories
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="7j54pho">
                                Real stories from our community members
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="lt6k5lg">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                    data-oid="ibqzu9j"
                                >
                                    <div
                                        className="flex items-center gap-4 mb-4"
                                        data-oid="0udxpj4"
                                    >
                                        <div className="text-3xl" data-oid="vmux45z">
                                            {testimonial.image}
                                        </div>
                                        <div data-oid="xauink7">
                                            <h4
                                                className="font-bold text-gray-800"
                                                data-oid="t7cherk"
                                            >
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-sm text-gray-600" data-oid="j6brbe.">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 italic" data-oid="sx_vfy9">
                                        "{testimonial.text}"
                                    </p>
                                    <div
                                        className="flex items-center gap-1 mt-4"
                                        data-oid="g8gw_yp"
                                    >
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="h-4 w-4 text-yellow-500 fill-current"
                                                data-oid="0eesabo"
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Community Guidelines */}
                <section className="py-16 px-4" data-oid="zx7fj7e">
                    <div className="max-w-4xl mx-auto" data-oid="3j3h5t0">
                        <div
                            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)]"
                            data-oid="c10f36n"
                        >
                            <div className="text-center mb-8" data-oid="bz.fr0t">
                                <Shield
                                    className="h-12 w-12 text-[hsl(196,80%,45%)] mx-auto mb-4"
                                    data-oid="en56bfk"
                                />

                                <h2
                                    className="text-2xl font-bold text-gray-800 mb-4"
                                    data-oid="bjb-p.a"
                                >
                                    Community Guidelines
                                </h2>
                                <p className="text-gray-600" data-oid="sym48k_">
                                    Help us maintain a positive and productive environment
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6" data-oid="lbi8i7z">
                                <div className="space-y-4" data-oid="rglbqjn">
                                    <h3 className="font-semibold text-gray-800" data-oid="5:mviz0">
                                        ✅ Do's
                                    </h3>
                                    <ul className="space-y-2 text-gray-600" data-oid="gactg2d">
                                        <li data-oid="454iau3">
                                            • Share relevant job opportunities
                                        </li>
                                        <li data-oid="p-o4-q9">
                                            • Help fellow members with doubts
                                        </li>
                                        <li data-oid="sjztq-8">• Share your success stories</li>
                                        <li data-oid="bsj_2i-">• Be respectful and professional</li>
                                        <li data-oid=".asq0u7">
                                            • Use appropriate channels for discussions
                                        </li>
                                    </ul>
                                </div>
                                <div className="space-y-4" data-oid="uz.yl40">
                                    <h3 className="font-semibold text-gray-800" data-oid="8k8tdtz">
                                        ❌ Don'ts
                                    </h3>
                                    <ul className="space-y-2 text-gray-600" data-oid="g6h33yt">
                                        <li data-oid="pcu_-rt">• No spam or promotional content</li>
                                        <li data-oid="qkmm2d-">
                                            • No offensive or inappropriate language
                                        </li>
                                        <li data-oid="5r.l97i">
                                            • No sharing of personal information
                                        </li>
                                        <li data-oid=".ra-c-u">• No off-topic discussions</li>
                                        <li data-oid="qspe8k6">• No duplicate job postings</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-4" data-oid="n.k0hyb">
                    <div className="max-w-4xl mx-auto text-center" data-oid="0m0mz31">
                        <div
                            className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] rounded-2xl p-8 text-white"
                            data-oid="rdc3k69"
                        >
                            <h2 className="text-3xl font-bold mb-4" data-oid="-xr18rg">
                                Ready to Join?
                            </h2>
                            <p className="text-xl mb-6 text-blue-100" data-oid="7ufwexo">
                                Don't miss out on exclusive opportunities and valuable connections
                            </p>
                            <div
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                                data-oid="z6xm5i8"
                            >
                                <button
                                    onClick={() => handleJoinCommunity('whatsapp')}
                                    className="px-6 py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-all transform hover:scale-105"
                                    data-oid="n6e0tmf"
                                >
                                    <MessageCircle
                                        className="inline h-5 w-5 mr-2"
                                        data-oid="rdet_2b"
                                    />
                                    Join WhatsApp
                                </button>
                                <button
                                    onClick={() => handleJoinCommunity('telegram')}
                                    className="px-6 py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-all transform hover:scale-105"
                                    data-oid="q5t2y5d"
                                >
                                    <Zap className="inline h-5 w-5 mr-2" data-oid=":bu3npj" />
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
