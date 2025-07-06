'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    Users,
    MessageCircle,
    Calendar,
    Award,
    TrendingUp,
    Heart,
    Globe,
    Zap,
    BookOpen,
    Code,
    Coffee,
    Rocket,
} from 'lucide-react';

const communityHighlights = [
    {
        icon: '🎯',
        title: 'Weekly Challenges',
        description: 'Coding challenges and hackathons to sharpen your skills',
        participants: '5,000+',
        color: 'from-purple-500 to-pink-500',
    },
    {
        icon: '💼',
        title: 'Job Board',
        description: 'Exclusive job postings from our partner companies',
        participants: '200+ jobs',
        color: 'from-blue-500 to-cyan-500',
    },
    {
        icon: '🎓',
        title: 'Mentorship Program',
        description: 'Get guidance from industry experts and senior developers',
        participants: '1,000+ mentors',
        color: 'from-green-500 to-emerald-500',
    },
    {
        icon: '🚀',
        title: 'Project Showcase',
        description: 'Share your projects and get feedback from the community',
        participants: '3,000+ projects',
        color: 'from-orange-500 to-red-500',
    },
];

const upcomingEvents = [
    {
        title: 'React.js Workshop',
        date: 'Dec 15, 2024',
        time: '7:00 PM IST',
        attendees: 500,
        type: 'Workshop',
        speaker: 'Priya Sharma, Meta',
    },
    {
        title: 'System Design Masterclass',
        date: 'Dec 18, 2024',
        time: '8:00 PM IST',
        attendees: 800,
        type: 'Masterclass',
        speaker: 'Rahul Kumar, Google',
    },
    {
        title: 'Career Guidance Session',
        date: 'Dec 20, 2024',
        time: '6:30 PM IST',
        attendees: 300,
        type: 'Session',
        speaker: 'Anita Patel, Microsoft',
    },
];

const communityStats = [
    { label: 'Total Members', value: '50,000+', icon: Users, color: 'text-blue-600' },
    { label: 'Daily Active Users', value: '15,000+', icon: TrendingUp, color: 'text-green-600' },
    { label: 'Success Stories', value: '2,500+', icon: Award, color: 'text-purple-600' },
    { label: 'Events Hosted', value: '500+', icon: Calendar, color: 'text-orange-600' },
];

const featuredMembers = [
    {
        name: 'Arjun Mehta',
        role: 'Senior SDE at Amazon',
        image: '👨‍💻',
        contribution: 'Helped 200+ members with interview prep',
        badge: 'Top Contributor',
    },
    {
        name: 'Sneha Gupta',
        role: 'Product Manager at Flipkart',
        image: '👩‍💼',
        contribution: 'Mentored 50+ career transitions',
        badge: 'Mentor of the Month',
    },
    {
        name: 'Vikram Singh',
        role: 'Full Stack Developer at Zomato',
        image: '👨‍🔬',
        contribution: 'Created 30+ learning resources',
        badge: 'Resource Creator',
    },
];

const communityChannels = [
    {
        name: 'General Discussion',
        members: '25K',
        icon: MessageCircle,
        description: 'Open discussions about tech and careers',
    },
    {
        name: 'Job Opportunities',
        members: '20K',
        icon: Rocket,
        description: 'Latest job postings and referrals',
    },
    {
        name: 'Interview Prep',
        members: '18K',
        icon: BookOpen,
        description: 'Interview experiences and preparation tips',
    },
    {
        name: 'Code Review',
        members: '15K',
        icon: Code,
        description: 'Get your code reviewed by experts',
    },
    {
        name: 'Casual Chat',
        members: '12K',
        icon: Coffee,
        description: 'Non-tech discussions and networking',
    },
];

export default function CommunityPage() {
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <div
            className="min-h-screen bg-gradient-to-b from-[hsl(210,50%,98%)] to-[hsl(196,60%,95%)]"
            data-oid="5998uq6"
        >
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden -z-10" data-oid="vqhzyqo">
                <div
                    className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-20 rounded-full blur-3xl animate-blob"
                    data-oid="8vlrt9n"
                ></div>
                <div
                    className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"
                    data-oid="lmf-x_8"
                ></div>
                <div
                    className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-4000"
                    data-oid="c.asgb3"
                ></div>
            </div>

            <div className="relative z-10" data-oid="ynb32a:">
                {/* Hero Section */}
                <section className="pt-24 pb-16 px-4" data-oid="8_.tcx0">
                    <div className="max-w-6xl mx-auto text-center" data-oid=":8fy9cb">
                        <div
                            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-[hsl(196,80%,45%)] border border-[hsl(210,30%,95%)] mb-6"
                            data-oid="wn1ig2e"
                        >
                            <Heart className="h-4 w-4" data-oid="twx.cu:" />
                            Built by developers, for developers
                        </div>

                        <h1
                            className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
                            data-oid="5nwugib"
                        >
                            Welcome to Our
                            <span
                                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] bg-clip-text text-transparent"
                                data-oid="3lrp.3l"
                            >
                                {' '}
                                Tech Community
                            </span>
                        </h1>

                        <p
                            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                            data-oid="76o7:92"
                        >
                            Join thousands of developers, share knowledge, find opportunities, and
                            grow your career in the most supportive tech community in India.
                        </p>

                        <div
                            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                            data-oid="t02p7pp"
                        >
                            <Link
                                href="/resources/community"
                                className="px-8 py-4 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
                                data-oid=".074_g:"
                            >
                                <Users className="inline h-5 w-5 mr-2" data-oid="ic_o8sm" />
                                Join Community
                            </Link>
                            <Link
                                href="/resources"
                                className="px-8 py-4 border border-[hsl(196,80%,45%)] text-[hsl(196,80%,45%)] rounded-xl font-medium hover:bg-[hsl(196,80%,45%)]/10 transition-all"
                                data-oid="o9j0k9b"
                            >
                                <BookOpen className="inline h-5 w-5 mr-2" data-oid="6zzu9bp" />
                                Browse Resources
                            </Link>
                        </div>

                        {/* Community Stats */}
                        <div
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                            data-oid="od_fjx1"
                        >
                            {communityStats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                    data-oid="7i7_i37"
                                >
                                    <stat.icon
                                        className={`h-8 w-8 ${stat.color} mx-auto mb-2`}
                                        data-oid=":4a6.gk"
                                    />

                                    <div
                                        className="text-2xl font-bold text-gray-800"
                                        data-oid="bdy06.f"
                                    >
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-600" data-oid="jhlrf9c">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Community Highlights */}
                <section className="py-16 px-4" data-oid="vea_l1f">
                    <div className="max-w-6xl mx-auto" data-oid="ggvduz8">
                        <div className="text-center mb-12" data-oid="b:j8_wa">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="a-9pipl"
                            >
                                Community Highlights
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="i61x:au">
                                Discover what makes our community special
                            </p>
                        </div>

                        <div
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                            data-oid="f6ppwau"
                        >
                            {communityHighlights.map((highlight, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                    data-oid="9f4yd09"
                                >
                                    <div
                                        className={`w-16 h-16 bg-gradient-to-r ${highlight.color} rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto`}
                                        data-oid="s5v6a80"
                                    >
                                        {highlight.icon}
                                    </div>
                                    <h3
                                        className="text-xl font-bold text-gray-800 mb-2 text-center"
                                        data-oid="kkr:d-n"
                                    >
                                        {highlight.title}
                                    </h3>
                                    <p
                                        className="text-gray-600 text-center mb-4"
                                        data-oid="q3f0kha"
                                    >
                                        {highlight.description}
                                    </p>
                                    <div className="text-center" data-oid="88:l8rj">
                                        <span
                                            className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                                            data-oid="b0f.2h4"
                                        >
                                            <Users className="h-3 w-3" data-oid="jq.7kni" />
                                            {highlight.participants}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Upcoming Events */}
                <section className="py-16 px-4" data-oid="stq7wpp">
                    <div className="max-w-6xl mx-auto" data-oid="0n6gebd">
                        <div className="text-center mb-12" data-oid="9zblnss">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="sxspsvj"
                            >
                                Upcoming Events
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="_uuxdf2">
                                Don't miss these amazing learning opportunities
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="938m1k:">
                            {upcomingEvents.map((event, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)] hover:shadow-lg transition-all"
                                    data-oid=":6a.6-n"
                                >
                                    <div
                                        className="flex items-center justify-between mb-4"
                                        data-oid="fi0sdem"
                                    >
                                        <span
                                            className="px-3 py-1 bg-[hsl(196,80%,45%)]/10 text-[hsl(196,80%,45%)] rounded-full text-sm font-medium"
                                            data-oid="8b92af."
                                        >
                                            {event.type}
                                        </span>
                                        <div
                                            className="flex items-center gap-1 text-sm text-gray-600"
                                            data-oid="zak.w-f"
                                        >
                                            <Users className="h-4 w-4" data-oid="usdzvxr" />
                                            {event.attendees}
                                        </div>
                                    </div>

                                    <h3
                                        className="text-xl font-bold text-gray-800 mb-2"
                                        data-oid="k1kh:r."
                                    >
                                        {event.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4" data-oid="15:tmpm">
                                        by {event.speaker}
                                    </p>

                                    <div
                                        className="flex items-center gap-4 text-sm text-gray-600 mb-4"
                                        data-oid="rjy8bvp"
                                    >
                                        <div className="flex items-center gap-1" data-oid="_x.k_eb">
                                            <Calendar className="h-4 w-4" data-oid="sa.3fgx" />
                                            {event.date}
                                        </div>
                                        <div className="flex items-center gap-1" data-oid="ryk2f3a">
                                            <Globe className="h-4 w-4" data-oid="5p.b:90" />
                                            {event.time}
                                        </div>
                                    </div>

                                    <button
                                        className="w-full px-4 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
                                        data-oid="hcq54n."
                                    >
                                        Register Now
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Community Channels */}
                <section className="py-16 px-4" data-oid="vz7a60.">
                    <div className="max-w-6xl mx-auto" data-oid="lhwflux">
                        <div className="text-center mb-12" data-oid="o0ka5jh">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="ehez3oh"
                            >
                                Community Channels
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="lth43tm">
                                Find the right channel for your interests
                            </p>
                        </div>

                        <div
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                            data-oid="vkici:q"
                        >
                            {communityChannels.map((channel, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)] hover:shadow-lg transition-all"
                                    data-oid="sq:i5cj"
                                >
                                    <div
                                        className="flex items-center gap-3 mb-3"
                                        data-oid="546tt5k"
                                    >
                                        <channel.icon
                                            className="h-6 w-6 text-[hsl(196,80%,45%)]"
                                            data-oid="cs2er25"
                                        />

                                        <h3 className="font-bold text-gray-800" data-oid="jendkz1">
                                            {channel.name}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-3" data-oid="2t6vdhl">
                                        {channel.description}
                                    </p>
                                    <div
                                        className="flex items-center justify-between"
                                        data-oid="m9wu5m1"
                                    >
                                        <span className="text-sm text-gray-500" data-oid="wm.h1b8">
                                            {channel.members} members
                                        </span>
                                        <button
                                            className="text-[hsl(196,80%,45%)] hover:text-[hsl(196,80%,35%)] text-sm font-medium"
                                            data-oid="jf3lq1y"
                                        >
                                            Join →
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Featured Members */}
                <section className="py-16 px-4" data-oid="-ssrw_y">
                    <div className="max-w-6xl mx-auto" data-oid=":bcy54l">
                        <div className="text-center mb-12" data-oid="0xj6rad">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="qjdrt3:"
                            >
                                Featured Community Members
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="2e1w62c">
                                Meet the amazing people who make our community thrive
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="-fqg3x8">
                            {featuredMembers.map((member, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)] text-center"
                                    data-oid="m57i6q2"
                                >
                                    <div className="text-4xl mb-4" data-oid="jafroy3">
                                        {member.image}
                                    </div>
                                    <h3
                                        className="text-xl font-bold text-gray-800 mb-1"
                                        data-oid="7206qif"
                                    >
                                        {member.name}
                                    </h3>
                                    <p
                                        className="text-[hsl(196,80%,45%)] font-medium mb-3"
                                        data-oid="wldd_nh"
                                    >
                                        {member.role}
                                    </p>
                                    <p className="text-gray-600 text-sm mb-4" data-oid="c5iyur7">
                                        {member.contribution}
                                    </p>
                                    <span
                                        className="inline-block px-3 py-1 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-full text-xs font-medium"
                                        data-oid="tnq1tc-"
                                    >
                                        {member.badge}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-4" data-oid="65.q830">
                    <div className="max-w-4xl mx-auto text-center" data-oid="nj9.a5n">
                        <div
                            className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] rounded-2xl p-8 text-white"
                            data-oid="fyt4nxv"
                        >
                            <h2 className="text-3xl font-bold mb-4" data-oid="7t2dn9s">
                                Ready to Join Our Community?
                            </h2>
                            <p className="text-xl mb-6 text-blue-100" data-oid="xb4ofxn">
                                Connect with like-minded developers and accelerate your career
                                growth
                            </p>
                            <div
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                                data-oid="01ivi6."
                            >
                                <Link
                                    href="/resources/community"
                                    className="px-6 py-3 bg-white text-[hsl(196,80%,45%)] rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
                                    data-oid="ns_-dtm"
                                >
                                    <Users className="inline h-5 w-5 mr-2" data-oid="_t1m484" />
                                    Join Now
                                </Link>
                                <Link
                                    href="/notify"
                                    className="px-6 py-3 border border-white text-white rounded-xl font-medium hover:bg-white hover:text-[hsl(196,80%,45%)] transition-all"
                                    data-oid="8yqlx5j"
                                >
                                    <Zap className="inline h-5 w-5 mr-2" data-oid="3:kqun0" />
                                    Get Updates
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
