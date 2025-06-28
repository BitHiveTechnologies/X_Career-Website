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
            data-oid="dzz7_ir"
        >
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden -z-10" data-oid="-zb3vdc">
                <div
                    className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-20 rounded-full blur-3xl animate-blob"
                    data-oid="h9gje06"
                ></div>
                <div
                    className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"
                    data-oid="yq3zl-t"
                ></div>
                <div
                    className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-4000"
                    data-oid="wtx6pnz"
                ></div>
            </div>

            <div className="relative z-10" data-oid="d4ux6d9">
                {/* Hero Section */}
                <section className="pt-24 pb-16 px-4" data-oid="37ljtag">
                    <div className="max-w-6xl mx-auto text-center" data-oid="e._zc9q">
                        <div
                            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-[hsl(196,80%,45%)] border border-[hsl(210,30%,95%)] mb-6"
                            data-oid="7ndiw09"
                        >
                            <Users className="h-4 w-4" data-oid="d7d2dem" />
                            Join 25,000+ Tech Professionals
                        </div>

                        <h1
                            className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
                            data-oid="ae28r3v"
                        >
                            Connect. Learn.
                            <span
                                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] bg-clip-text text-transparent"
                                data-oid="9pkbvrk"
                            >
                                {' '}
                                Grow Together.
                            </span>
                        </h1>

                        <p
                            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                            data-oid="6s12r4l"
                        >
                            Join our vibrant community of developers, get instant help, share
                            opportunities, and accelerate your career growth.
                        </p>

                        {/* Community Stats */}
                        <div
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
                            data-oid="j6bm36y"
                        >
                            {communityStats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                    data-oid="x.knrvn"
                                >
                                    <stat.icon
                                        className="h-8 w-8 text-[hsl(196,80%,45%)] mx-auto mb-2"
                                        data-oid="x04xc32"
                                    />

                                    <div
                                        className="text-2xl font-bold text-gray-800"
                                        data-oid="moesial"
                                    >
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-600" data-oid="dj1sp_8">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Platform Selection */}
                <section className="py-16 px-4" data-oid="d50uim5">
                    <div className="max-w-4xl mx-auto" data-oid="v5ornxr">
                        <div className="text-center mb-12" data-oid="9ryxx:0">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="7lsmx31"
                            >
                                Choose Your Platform
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="c.e4ton">
                                Join our community on your preferred messaging platform
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8" data-oid="rky4d44">
                            {/* WhatsApp Community */}
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                data-oid="t_y8:i9"
                            >
                                <div className="text-center mb-6" data-oid="oeibtzk">
                                    <div
                                        className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                                        data-oid="o1gotet"
                                    >
                                        <MessageCircle
                                            className="h-10 w-10 text-green-600"
                                            data-oid="nh_l08d"
                                        />
                                    </div>
                                    <h3
                                        className="text-2xl font-bold text-gray-800 mb-2"
                                        data-oid="8oi.8ad"
                                    >
                                        WhatsApp Community
                                    </h3>
                                    <p className="text-gray-600" data-oid="2x2dem0">
                                        Real-time discussions and instant networking
                                    </p>
                                </div>

                                <div className="space-y-4 mb-8" data-oid="vjcxjg0">
                                    <div className="flex items-center gap-3" data-oid="7he3nhi">
                                        <div
                                            className="w-2 h-2 bg-green-500 rounded-full"
                                            data-oid="0f:t:oc"
                                        ></div>
                                        <span className="text-gray-700" data-oid="3enci78">
                                            15,000+ Active Members
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="_kxgqqy">
                                        <div
                                            className="w-2 h-2 bg-green-500 rounded-full"
                                            data-oid="hiz901e"
                                        ></div>
                                        <span className="text-gray-700" data-oid="p48_w:9">
                                            Daily Job Postings
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="idxvf-1">
                                        <div
                                            className="w-2 h-2 bg-green-500 rounded-full"
                                            data-oid="quz0gpq"
                                        ></div>
                                        <span className="text-gray-700" data-oid="q40pdh3">
                                            Quick Doubt Resolution
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="mx6pfqp">
                                        <div
                                            className="w-2 h-2 bg-green-500 rounded-full"
                                            data-oid="n5w76.n"
                                        ></div>
                                        <span className="text-gray-700" data-oid="sq7r0s6">
                                            Referral Opportunities
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleJoinCommunity('whatsapp')}
                                    className="w-full px-6 py-4 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                                    data-oid="5yf1m_9"
                                >
                                    <MessageCircle className="h-5 w-5" data-oid="ail.7ta" />
                                    Join WhatsApp Group
                                    <ArrowRight className="h-5 w-5" data-oid=":grxqmj" />
                                </button>
                            </div>

                            {/* Telegram Community */}
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                data-oid="iyrdu4j"
                            >
                                <div className="text-center mb-6" data-oid="oa:2wmj">
                                    <div
                                        className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
                                        data-oid="4:2r95q"
                                    >
                                        <Zap
                                            className="h-10 w-10 text-blue-600"
                                            data-oid="9nut84:"
                                        />
                                    </div>
                                    <h3
                                        className="text-2xl font-bold text-gray-800 mb-2"
                                        data-oid="sz5k1yd"
                                    >
                                        Telegram Channel
                                    </h3>
                                    <p className="text-gray-600" data-oid="d15l9ag">
                                        Organized discussions and resource sharing
                                    </p>
                                </div>

                                <div className="space-y-4 mb-8" data-oid="ki.qtes">
                                    <div className="flex items-center gap-3" data-oid="io8pwe:">
                                        <div
                                            className="w-2 h-2 bg-blue-500 rounded-full"
                                            data-oid="4qyr173"
                                        ></div>
                                        <span className="text-gray-700" data-oid="vu58yv5">
                                            10,000+ Subscribers
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="cx6y01.">
                                        <div
                                            className="w-2 h-2 bg-blue-500 rounded-full"
                                            data-oid="x49a5to"
                                        ></div>
                                        <span className="text-gray-700" data-oid="tuqo00r">
                                            Structured Learning Content
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="031rvyy">
                                        <div
                                            className="w-2 h-2 bg-blue-500 rounded-full"
                                            data-oid="26l23_l"
                                        ></div>
                                        <span className="text-gray-700" data-oid="j2fuas2">
                                            Weekly Tech Updates
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3" data-oid="2hwui11">
                                        <div
                                            className="w-2 h-2 bg-blue-500 rounded-full"
                                            data-oid=":xsvu8j"
                                        ></div>
                                        <span className="text-gray-700" data-oid="xyp2a-w">
                                            Interview Experiences
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleJoinCommunity('telegram')}
                                    className="w-full px-6 py-4 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                                    data-oid="li9wp.w"
                                >
                                    <Zap className="h-5 w-5" data-oid="vhp2l9f" />
                                    Join Telegram Channel
                                    <ArrowRight className="h-5 w-5" data-oid="hebaozr" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Community Features */}
                <section className="py-16 px-4" data-oid="kgxf5.d">
                    <div className="max-w-6xl mx-auto" data-oid="06h40tn">
                        <div className="text-center mb-12" data-oid="1xdbewf">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="a6bq8:2"
                            >
                                What You'll Get
                            </h2>
                            <p className="text-xl text-gray-600" data-oid=":l.e4c1">
                                Exclusive benefits for community members
                            </p>
                        </div>

                        <div
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                            data-oid=".tzrksg"
                        >
                            {communityFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)] hover:shadow-lg transition-all"
                                    data-oid="7fm5836"
                                >
                                    <div className="text-4xl mb-4" data-oid="065enjn">
                                        {feature.icon}
                                    </div>
                                    <h3
                                        className="text-xl font-bold text-gray-800 mb-2"
                                        data-oid=".izpkcz"
                                    >
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600" data-oid="fjeurmc">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Success Stories */}
                <section className="py-16 px-4" data-oid="4uk8_h3">
                    <div className="max-w-6xl mx-auto" data-oid="3eydt5v">
                        <div className="text-center mb-12" data-oid="tc-gv3_">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="in.db72"
                            >
                                Success Stories
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="_w10yt_">
                                Real stories from our community members
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="4grrbio">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                    data-oid="rn-_l3g"
                                >
                                    <div
                                        className="flex items-center gap-4 mb-4"
                                        data-oid="6vignuu"
                                    >
                                        <div className="text-3xl" data-oid="qzm62hg">
                                            {testimonial.image}
                                        </div>
                                        <div data-oid="6mava3v">
                                            <h4
                                                className="font-bold text-gray-800"
                                                data-oid="6glp5h6"
                                            >
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-sm text-gray-600" data-oid="ckktiqt">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 italic" data-oid="u-d2unf">
                                        "{testimonial.text}"
                                    </p>
                                    <div
                                        className="flex items-center gap-1 mt-4"
                                        data-oid="90kstwh"
                                    >
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="h-4 w-4 text-yellow-500 fill-current"
                                                data-oid="z.k21fz"
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Community Guidelines */}
                <section className="py-16 px-4" data-oid="o10xnd8">
                    <div className="max-w-4xl mx-auto" data-oid="mlsirk5">
                        <div
                            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)]"
                            data-oid="9533q-f"
                        >
                            <div className="text-center mb-8" data-oid="gqo-01r">
                                <Shield
                                    className="h-12 w-12 text-[hsl(196,80%,45%)] mx-auto mb-4"
                                    data-oid="q276f0."
                                />

                                <h2
                                    className="text-2xl font-bold text-gray-800 mb-4"
                                    data-oid="0ps2r13"
                                >
                                    Community Guidelines
                                </h2>
                                <p className="text-gray-600" data-oid="ck94:b:">
                                    Help us maintain a positive and productive environment
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6" data-oid="kr7b055">
                                <div className="space-y-4" data-oid="62h1nnp">
                                    <h3 className="font-semibold text-gray-800" data-oid="qljprn7">
                                        ✅ Do's
                                    </h3>
                                    <ul className="space-y-2 text-gray-600" data-oid="w7q-np3">
                                        <li data-oid="f0aio_2">
                                            • Share relevant job opportunities
                                        </li>
                                        <li data-oid="-5bddou">
                                            • Help fellow members with doubts
                                        </li>
                                        <li data-oid="v4:ed-k">• Share your success stories</li>
                                        <li data-oid="48-fsx.">• Be respectful and professional</li>
                                        <li data-oid="k-0l_pb">
                                            • Use appropriate channels for discussions
                                        </li>
                                    </ul>
                                </div>
                                <div className="space-y-4" data-oid="4d7apa.">
                                    <h3 className="font-semibold text-gray-800" data-oid="qgpqao3">
                                        ❌ Don'ts
                                    </h3>
                                    <ul className="space-y-2 text-gray-600" data-oid="xjmjuqh">
                                        <li data-oid="spt0hd4">• No spam or promotional content</li>
                                        <li data-oid="gs5mbnf">
                                            • No offensive or inappropriate language
                                        </li>
                                        <li data-oid="91rwpmj">
                                            • No sharing of personal information
                                        </li>
                                        <li data-oid="z.rwx3j">• No off-topic discussions</li>
                                        <li data-oid="-jwglqn">• No duplicate job postings</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-4" data-oid="sr4dhx-">
                    <div className="max-w-4xl mx-auto text-center" data-oid="t0nog41">
                        <div
                            className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] rounded-2xl p-8 text-white"
                            data-oid=":rywjnk"
                        >
                            <h2 className="text-3xl font-bold mb-4" data-oid="ia8mwn8">
                                Ready to Join?
                            </h2>
                            <p className="text-xl mb-6 text-blue-100" data-oid="3_a-77q">
                                Don't miss out on exclusive opportunities and valuable connections
                            </p>
                            <div
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                                data-oid="z6kd5tg"
                            >
                                <button
                                    onClick={() => handleJoinCommunity('whatsapp')}
                                    className="px-6 py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-all transform hover:scale-105"
                                    data-oid="_yu_7-5"
                                >
                                    <MessageCircle
                                        className="inline h-5 w-5 mr-2"
                                        data-oid="7l.q7yn"
                                    />
                                    Join WhatsApp
                                </button>
                                <button
                                    onClick={() => handleJoinCommunity('telegram')}
                                    className="px-6 py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-all transform hover:scale-105"
                                    data-oid=".aae2:g"
                                >
                                    <Zap className="inline h-5 w-5 mr-2" data-oid="rz9be_k" />
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
