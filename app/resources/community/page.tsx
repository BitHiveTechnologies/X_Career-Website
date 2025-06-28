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
            data-oid="w98cka9"
        >
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden -z-10" data-oid="u.ogkqi">
                <div
                    className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-20 rounded-full blur-3xl animate-blob"
                    data-oid=".x1g2h2"
                ></div>
                <div
                    className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"
                    data-oid="c3ieb_p"
                ></div>
                <div
                    className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-4000"
                    data-oid="_2zblcp"
                ></div>
            </div>

            <div className="relative z-10" data-oid="z5xkqzz">
                {/* Hero Section */}
                <section className="pt-24 pb-16 px-4" data-oid="-p4c69l">
                    <div className="max-w-6xl mx-auto text-center" data-oid="exd3z17">
                        <div
                            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-[hsl(196,80%,45%)] border border-[hsl(210,30%,95%)] mb-6"
                            data-oid="8_.le2m"
                        >
                            <Users className="h-4 w-4" data-oid="1jg6k0q" />
                            Join 25,000+ Tech Professionals
                        </div>

                        <h1
                            className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
                            data-oid="8vzifc7"
                        >
                            Connect. Learn.
                            <span
                                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] bg-clip-text text-transparent"
                                data-oid="znj8ejj"
                            >
                                {' '}
                                Grow Together.
                            </span>
                        </h1>

                        <p
                            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                            data-oid="3nus:2i"
                        >
                            Join our vibrant community of developers, get instant help, share
                            opportunities, and accelerate your career growth.
                        </p>

                        {/* Community Stats */}
                        <div
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
                            data-oid="eh3_.sv"
                        >
                            {communityStats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                    data-oid=".wcm99n"
                                >
                                    <stat.icon
                                        className="h-8 w-8 text-[hsl(196,80%,45%)] mx-auto mb-2"
                                        data-oid="zslh0g5"
                                    />

                                    <div
                                        className="text-2xl font-bold text-gray-800"
                                        data-oid="g45l6r2"
                                    >
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-600" data-oid="p:fcqkj">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Platform Selection */}
                <section className="py-16 px-4" data-oid="j89u6ml">
                    <div className="max-w-4xl mx-auto" data-oid="uhr90v1">
                        <div className="text-center mb-12" data-oid="r3tr49n">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="mfs_:zn"
                            >
                                Choose Your Platform
                            </h2>
                            <p className="text-xl text-gray-600" data-oid=":tz7-z-">
                                Join our community on your preferred messaging platform
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8" data-oid="h.ynah9">
                            {/* WhatsApp Community */}
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                data-oid="vot-0n_"
                            >
                                <div className="text-center mb-6" data-oid="a9-wxo:">
                                    <div
                                        className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                                        data-oid="8m5v96:"
                                    >
                                        <MessageCircle
                                            className="h-10 w-10 text-green-600"
                                            data-oid="ya5d9.9"
                                        />
                                    </div>
                                    <h3
                                        className="text-2xl font-bold text-gray-800 mb-2"
                                        data-oid="y7ot4gq"
                                    >
                                        WhatsApp Community
                                    </h3>
                                    <p className="text-gray-600" data-oid="gnimc0z">
                                        Real-time discussions and instant networking
                                    </p>
                                </div>

                                <div className="space-y-4 mb-8" data-oid="._pyzpj">
                                    <div className="flex items-center gap-3" data-oid="geiwrnz">
                                        <div
                                            className="w-2 h-2 bg-green-500 rounded-full"
                                            data-oid="v9j81e2"
                                        ></div>
                                        <span className="text-gray-700" data-oid="n8zlb0w">
                                            15,000+ Active Members
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="9sax1pp">
                                        <div
                                            className="w-2 h-2 bg-green-500 rounded-full"
                                            data-oid="6_10azs"
                                        ></div>
                                        <span className="text-gray-700" data-oid=".3.jlp9">
                                            Daily Job Postings
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="ah93yv_">
                                        <div
                                            className="w-2 h-2 bg-green-500 rounded-full"
                                            data-oid="nnfr2sh"
                                        ></div>
                                        <span className="text-gray-700" data-oid="rve47h_">
                                            Quick Doubt Resolution
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="bc2g1u0">
                                        <div
                                            className="w-2 h-2 bg-green-500 rounded-full"
                                            data-oid="4kwkld4"
                                        ></div>
                                        <span className="text-gray-700" data-oid="im2sqy:">
                                            Referral Opportunities
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleJoinCommunity('whatsapp')}
                                    className="w-full px-6 py-4 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                                    data-oid="5hy6:.9"
                                >
                                    <MessageCircle className="h-5 w-5" data-oid="8vpo.ao" />
                                    Join WhatsApp Group
                                    <ArrowRight className="h-5 w-5" data-oid="gavz8iy" />
                                </button>
                            </div>

                            {/* Telegram Community */}
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                data-oid="71xt9iq"
                            >
                                <div className="text-center mb-6" data-oid="h6w1pou">
                                    <div
                                        className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
                                        data-oid="px-6cvo"
                                    >
                                        <Zap
                                            className="h-10 w-10 text-blue-600"
                                            data-oid="00p608k"
                                        />
                                    </div>
                                    <h3
                                        className="text-2xl font-bold text-gray-800 mb-2"
                                        data-oid="ih-s65f"
                                    >
                                        Telegram Channel
                                    </h3>
                                    <p className="text-gray-600" data-oid="5cr-8j:">
                                        Organized discussions and resource sharing
                                    </p>
                                </div>

                                <div className="space-y-4 mb-8" data-oid="ju-aa1h">
                                    <div className="flex items-center gap-3" data-oid=":-t45qq">
                                        <div
                                            className="w-2 h-2 bg-blue-500 rounded-full"
                                            data-oid="xtrhpkp"
                                        ></div>
                                        <span className="text-gray-700" data-oid="4fxd5eo">
                                            10,000+ Subscribers
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="prtbuqm">
                                        <div
                                            className="w-2 h-2 bg-blue-500 rounded-full"
                                            data-oid="abqoy4e"
                                        ></div>
                                        <span className="text-gray-700" data-oid="l8ld563">
                                            Structured Learning Content
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="f3pjg99">
                                        <div
                                            className="w-2 h-2 bg-blue-500 rounded-full"
                                            data-oid="pi9ytkc"
                                        ></div>
                                        <span className="text-gray-700" data-oid="3b.d6p5">
                                            Weekly Tech Updates
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="t8n0ybl">
                                        <div
                                            className="w-2 h-2 bg-blue-500 rounded-full"
                                            data-oid="emxz-n:"
                                        ></div>
                                        <span className="text-gray-700" data-oid="22hwhvi">
                                            Interview Experiences
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleJoinCommunity('telegram')}
                                    className="w-full px-6 py-4 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                                    data-oid="jl_04xe"
                                >
                                    <Zap className="h-5 w-5" data-oid="wi4lcdo" />
                                    Join Telegram Channel
                                    <ArrowRight className="h-5 w-5" data-oid="oilrk3b" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Community Features */}
                <section className="py-16 px-4" data-oid="v55d-kp">
                    <div className="max-w-6xl mx-auto" data-oid="64fyuvs">
                        <div className="text-center mb-12" data-oid="k.hz5ce">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="2wu3k:p"
                            >
                                What You'll Get
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="_1bsv7y">
                                Exclusive benefits for community members
                            </p>
                        </div>

                        <div
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                            data-oid="rt9sfj3"
                        >
                            {communityFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)] hover:shadow-lg transition-all"
                                    data-oid="jsz.kyo"
                                >
                                    <div className="text-4xl mb-4" data-oid="-zk9l3j">
                                        {feature.icon}
                                    </div>
                                    <h3
                                        className="text-xl font-bold text-gray-800 mb-2"
                                        data-oid="zf6tw-3"
                                    >
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600" data-oid="4166wv8">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Success Stories */}
                <section className="py-16 px-4" data-oid="55-6pef">
                    <div className="max-w-6xl mx-auto" data-oid="54qvvz8">
                        <div className="text-center mb-12" data-oid="dxs8fo4">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="kpd2i.8"
                            >
                                Success Stories
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="yvsb5_q">
                                Real stories from our community members
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="7mqhr8u">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                    data-oid=":a5i4mw"
                                >
                                    <div
                                        className="flex items-center gap-4 mb-4"
                                        data-oid="i2ips:7"
                                    >
                                        <div className="text-3xl" data-oid="r:fda-d">
                                            {testimonial.image}
                                        </div>
                                        <div data-oid="pmjbupj">
                                            <h4
                                                className="font-bold text-gray-800"
                                                data-oid="c7zu:mn"
                                            >
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-sm text-gray-600" data-oid="nsqiwe0">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 italic" data-oid="q8dg83r">
                                        "{testimonial.text}"
                                    </p>
                                    <div
                                        className="flex items-center gap-1 mt-4"
                                        data-oid="_texpji"
                                    >
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="h-4 w-4 text-yellow-500 fill-current"
                                                data-oid="i3pm:zd"
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Community Guidelines */}
                <section className="py-16 px-4" data-oid="wjzbi4g">
                    <div className="max-w-4xl mx-auto" data-oid="kgc6cym">
                        <div
                            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)]"
                            data-oid="97x::bw"
                        >
                            <div className="text-center mb-8" data-oid="ib.r0s2">
                                <Shield
                                    className="h-12 w-12 text-[hsl(196,80%,45%)] mx-auto mb-4"
                                    data-oid="exl3p9b"
                                />

                                <h2
                                    className="text-2xl font-bold text-gray-800 mb-4"
                                    data-oid="rvhale2"
                                >
                                    Community Guidelines
                                </h2>
                                <p className="text-gray-600" data-oid="p0b_sej">
                                    Help us maintain a positive and productive environment
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6" data-oid="krvuei3">
                                <div className="space-y-4" data-oid=".5aq6-1">
                                    <h3 className="font-semibold text-gray-800" data-oid="gtfhkxx">
                                        ✅ Do's
                                    </h3>
                                    <ul className="space-y-2 text-gray-600" data-oid="blduq--">
                                        <li data-oid="18aqunc">
                                            • Share relevant job opportunities
                                        </li>
                                        <li data-oid="_a8ik5l">
                                            • Help fellow members with doubts
                                        </li>
                                        <li data-oid="pt9q6tj">• Share your success stories</li>
                                        <li data-oid="ev40ere">• Be respectful and professional</li>
                                        <li data-oid="18lymr3">
                                            • Use appropriate channels for discussions
                                        </li>
                                    </ul>
                                </div>
                                <div className="space-y-4" data-oid="2024du9">
                                    <h3 className="font-semibold text-gray-800" data-oid="cwedu6-">
                                        ❌ Don'ts
                                    </h3>
                                    <ul className="space-y-2 text-gray-600" data-oid="-1r03xu">
                                        <li data-oid="zd27zjp">• No spam or promotional content</li>
                                        <li data-oid="ff2blje">
                                            • No offensive or inappropriate language
                                        </li>
                                        <li data-oid="8g29l4g">
                                            • No sharing of personal information
                                        </li>
                                        <li data-oid="ack-wt3">• No off-topic discussions</li>
                                        <li data-oid="x.5t9ox">• No duplicate job postings</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-4" data-oid="dyuj.3y">
                    <div className="max-w-4xl mx-auto text-center" data-oid="kmnbmpl">
                        <div
                            className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] rounded-2xl p-8 text-white"
                            data-oid="otkf8cb"
                        >
                            <h2 className="text-3xl font-bold mb-4" data-oid="yh-sexy">
                                Ready to Join?
                            </h2>
                            <p className="text-xl mb-6 text-blue-100" data-oid="a8q9zf9">
                                Don't miss out on exclusive opportunities and valuable connections
                            </p>
                            <div
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                                data-oid="grkno.x"
                            >
                                <button
                                    onClick={() => handleJoinCommunity('whatsapp')}
                                    className="px-6 py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-all transform hover:scale-105"
                                    data-oid="nziqkze"
                                >
                                    <MessageCircle
                                        className="inline h-5 w-5 mr-2"
                                        data-oid="tw0sp5o"
                                    />
                                    Join WhatsApp
                                </button>
                                <button
                                    onClick={() => handleJoinCommunity('telegram')}
                                    className="px-6 py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-all transform hover:scale-105"
                                    data-oid="eej1d-k"
                                >
                                    <Zap className="inline h-5 w-5 mr-2" data-oid="b:o6vy3" />
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
