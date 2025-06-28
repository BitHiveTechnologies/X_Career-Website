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
            data-oid="3o_-ipm"
        >
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden -z-10" data-oid="hk93qt:">
                <div
                    className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-20 rounded-full blur-3xl animate-blob"
                    data-oid="3jff_ex"
                ></div>
                <div
                    className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"
                    data-oid="zymro4."
                ></div>
                <div
                    className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-4000"
                    data-oid="xrq1n9h"
                ></div>
            </div>

            <div className="relative z-10" data-oid="o90gn8a">
                {/* Hero Section */}
                <section className="pt-24 pb-16 px-4" data-oid="1og8cx-">
                    <div className="max-w-6xl mx-auto text-center" data-oid="v.l5vk3">
                        <div
                            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-[hsl(196,80%,45%)] border border-[hsl(210,30%,95%)] mb-6"
                            data-oid=".2bpayn"
                        >
                            <Heart className="h-4 w-4" data-oid="j7r0.cg" />
                            Built by developers, for developers
                        </div>

                        <h1
                            className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
                            data-oid="a711ia8"
                        >
                            Welcome to Our
                            <span
                                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] bg-clip-text text-transparent"
                                data-oid="5y.8kz4"
                            >
                                {' '}
                                Tech Community
                            </span>
                        </h1>

                        <p
                            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                            data-oid="awtx2vl"
                        >
                            Join thousands of developers, share knowledge, find opportunities, and
                            grow your career in the most supportive tech community in India.
                        </p>

                        <div
                            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                            data-oid="lr.6qzp"
                        >
                            <Link
                                href="/resources/community"
                                className="px-8 py-4 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
                                data-oid="qatcpgf"
                            >
                                <Users className="inline h-5 w-5 mr-2" data-oid="ldns_km" />
                                Join Community
                            </Link>
                            <Link
                                href="/resources"
                                className="px-8 py-4 border border-[hsl(196,80%,45%)] text-[hsl(196,80%,45%)] rounded-xl font-medium hover:bg-[hsl(196,80%,45%)]/10 transition-all"
                                data-oid="0zesi58"
                            >
                                <BookOpen className="inline h-5 w-5 mr-2" data-oid="7iyajab" />
                                Browse Resources
                            </Link>
                        </div>

                        {/* Community Stats */}
                        <div
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                            data-oid="_3cjv21"
                        >
                            {communityStats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                    data-oid="lofmtz1"
                                >
                                    <stat.icon
                                        className={`h-8 w-8 ${stat.color} mx-auto mb-2`}
                                        data-oid="z6f6:81"
                                    />

                                    <div
                                        className="text-2xl font-bold text-gray-800"
                                        data-oid="svi8jo8"
                                    >
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-600" data-oid="pfh5-1s">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Community Highlights */}
                <section className="py-16 px-4" data-oid="odjh3re">
                    <div className="max-w-6xl mx-auto" data-oid="eh7b_rg">
                        <div className="text-center mb-12" data-oid="8tjy0dx">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="9-0fuoq"
                            >
                                Community Highlights
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="uewu67z">
                                Discover what makes our community special
                            </p>
                        </div>

                        <div
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                            data-oid="50ljz.o"
                        >
                            {communityHighlights.map((highlight, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                    data-oid="sp2:0jx"
                                >
                                    <div
                                        className={`w-16 h-16 bg-gradient-to-r ${highlight.color} rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto`}
                                        data-oid="1ezx-gi"
                                    >
                                        {highlight.icon}
                                    </div>
                                    <h3
                                        className="text-xl font-bold text-gray-800 mb-2 text-center"
                                        data-oid="fwdd6q9"
                                    >
                                        {highlight.title}
                                    </h3>
                                    <p
                                        className="text-gray-600 text-center mb-4"
                                        data-oid="p:m4um7"
                                    >
                                        {highlight.description}
                                    </p>
                                    <div className="text-center" data-oid="5mwtx6k">
                                        <span
                                            className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                                            data-oid="zukqw7e"
                                        >
                                            <Users className="h-3 w-3" data-oid="i_opcvt" />
                                            {highlight.participants}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Upcoming Events */}
                <section className="py-16 px-4" data-oid="wl-ekrk">
                    <div className="max-w-6xl mx-auto" data-oid="up:q94h">
                        <div className="text-center mb-12" data-oid="hlfspk0">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="y6aes_8"
                            >
                                Upcoming Events
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="qxyt8o-">
                                Don't miss these amazing learning opportunities
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="1jk8y:u">
                            {upcomingEvents.map((event, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)] hover:shadow-lg transition-all"
                                    data-oid="omk-_5n"
                                >
                                    <div
                                        className="flex items-center justify-between mb-4"
                                        data-oid="ov.p0te"
                                    >
                                        <span
                                            className="px-3 py-1 bg-[hsl(196,80%,45%)]/10 text-[hsl(196,80%,45%)] rounded-full text-sm font-medium"
                                            data-oid="hjbdt6_"
                                        >
                                            {event.type}
                                        </span>
                                        <div
                                            className="flex items-center gap-1 text-sm text-gray-600"
                                            data-oid="6-eoiqo"
                                        >
                                            <Users className="h-4 w-4" data-oid="31-o:.q" />
                                            {event.attendees}
                                        </div>
                                    </div>

                                    <h3
                                        className="text-xl font-bold text-gray-800 mb-2"
                                        data-oid="qi3seg:"
                                    >
                                        {event.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4" data-oid="3qnw48p">
                                        by {event.speaker}
                                    </p>

                                    <div
                                        className="flex items-center gap-4 text-sm text-gray-600 mb-4"
                                        data-oid="aziq:wd"
                                    >
                                        <div className="flex items-center gap-1" data-oid="-our0rh">
                                            <Calendar className="h-4 w-4" data-oid="thjkd-4" />
                                            {event.date}
                                        </div>
                                        <div className="flex items-center gap-1" data-oid="c:j453a">
                                            <Globe className="h-4 w-4" data-oid="ric8xpe" />
                                            {event.time}
                                        </div>
                                    </div>

                                    <button
                                        className="w-full px-4 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
                                        data-oid="cbg1ctn"
                                    >
                                        Register Now
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Community Channels */}
                <section className="py-16 px-4" data-oid="rm-9cna">
                    <div className="max-w-6xl mx-auto" data-oid="uve627w">
                        <div className="text-center mb-12" data-oid="mi1-7v6">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="0qhi-ot"
                            >
                                Community Channels
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="r-fw.68">
                                Find the right channel for your interests
                            </p>
                        </div>

                        <div
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                            data-oid="qoo92:l"
                        >
                            {communityChannels.map((channel, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)] hover:shadow-lg transition-all"
                                    data-oid="ae-8nz3"
                                >
                                    <div
                                        className="flex items-center gap-3 mb-3"
                                        data-oid="zaghl8_"
                                    >
                                        <channel.icon
                                            className="h-6 w-6 text-[hsl(196,80%,45%)]"
                                            data-oid="5p613i."
                                        />

                                        <h3 className="font-bold text-gray-800" data-oid="8ii4t-6">
                                            {channel.name}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-3" data-oid="7n96rik">
                                        {channel.description}
                                    </p>
                                    <div
                                        className="flex items-center justify-between"
                                        data-oid="rk6_66d"
                                    >
                                        <span className="text-sm text-gray-500" data-oid="21v.bc3">
                                            {channel.members} members
                                        </span>
                                        <button
                                            className="text-[hsl(196,80%,45%)] hover:text-[hsl(196,80%,35%)] text-sm font-medium"
                                            data-oid="2p2uef-"
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
                <section className="py-16 px-4" data-oid="z_i37ue">
                    <div className="max-w-6xl mx-auto" data-oid="gn:-:xq">
                        <div className="text-center mb-12" data-oid="swz0wc0">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="d2bd0fy"
                            >
                                Featured Community Members
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="wtpx2us">
                                Meet the amazing people who make our community thrive
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="4es:3mv">
                            {featuredMembers.map((member, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)] text-center"
                                    data-oid="p14:rm8"
                                >
                                    <div className="text-4xl mb-4" data-oid="fgydk1x">
                                        {member.image}
                                    </div>
                                    <h3
                                        className="text-xl font-bold text-gray-800 mb-1"
                                        data-oid="qdwkw05"
                                    >
                                        {member.name}
                                    </h3>
                                    <p
                                        className="text-[hsl(196,80%,45%)] font-medium mb-3"
                                        data-oid="26tgl-u"
                                    >
                                        {member.role}
                                    </p>
                                    <p className="text-gray-600 text-sm mb-4" data-oid="5zgr0w3">
                                        {member.contribution}
                                    </p>
                                    <span
                                        className="inline-block px-3 py-1 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-full text-xs font-medium"
                                        data-oid="7jgejhd"
                                    >
                                        {member.badge}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-4" data-oid="jqm4k7_">
                    <div className="max-w-4xl mx-auto text-center" data-oid="8udzlpr">
                        <div
                            className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] rounded-2xl p-8 text-white"
                            data-oid="hboawzi"
                        >
                            <h2 className="text-3xl font-bold mb-4" data-oid="i_pe2cm">
                                Ready to Join Our Community?
                            </h2>
                            <p className="text-xl mb-6 text-blue-100" data-oid="e--nx_5">
                                Connect with like-minded developers and accelerate your career
                                growth
                            </p>
                            <div
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                                data-oid="v5l5ptz"
                            >
                                <Link
                                    href="/resources/community"
                                    className="px-6 py-3 bg-white text-[hsl(196,80%,45%)] rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
                                    data-oid="rr5y17g"
                                >
                                    <Users className="inline h-5 w-5 mr-2" data-oid="jerwdwt" />
                                    Join Now
                                </Link>
                                <Link
                                    href="/notify"
                                    className="px-6 py-3 border border-white text-white rounded-xl font-medium hover:bg-white hover:text-[hsl(196,80%,45%)] transition-all"
                                    data-oid="6oy-1cf"
                                >
                                    <Zap className="inline h-5 w-5 mr-2" data-oid="aoal3t5" />
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
