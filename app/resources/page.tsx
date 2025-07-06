'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    ArrowRight,
    BookOpen,
    Users,
    Video,
    FileText,
    Download,
    ExternalLink,
    Star,
    Clock,
    TrendingUp,
} from 'lucide-react';

const resourceCategories = [
    {
        id: 'interview-prep',
        title: 'Interview Preparation',
        description: 'Master your next tech interview',
        icon: '🎯',
        color: 'from-blue-500 to-cyan-500',
        resources: [
            { title: 'Top 100 Coding Questions', type: 'PDF', downloads: '50K+', rating: 4.9 },
            { title: 'System Design Basics', type: 'Video', duration: '2h 30m', rating: 4.8 },
            {
                title: 'Behavioral Interview Guide',
                type: 'Article',
                readTime: '15 min',
                rating: 4.7,
            },
            { title: 'Mock Interview Platform', type: 'Tool', users: '25K+', rating: 4.9 },
        ],
    },
    {
        id: 'resume-building',
        title: 'Resume & Portfolio',
        description: 'Build a standout professional profile',
        icon: '📄',
        color: 'from-green-500 to-emerald-500',
        resources: [
            {
                title: 'ATS-Friendly Resume Templates',
                type: 'Template',
                downloads: '75K+',
                rating: 4.8,
            },
            { title: 'Portfolio Website Builder', type: 'Tool', users: '30K+', rating: 4.7 },
            { title: 'Resume Review Checklist', type: 'PDF', downloads: '40K+', rating: 4.9 },
            {
                title: 'LinkedIn Optimization Guide',
                type: 'Article',
                readTime: '20 min',
                rating: 4.6,
            },
        ],
    },
    {
        id: 'skill-development',
        title: 'Skill Development',
        description: 'Learn in-demand tech skills',
        icon: '🚀',
        color: 'from-purple-500 to-pink-500',
        resources: [
            { title: 'Full Stack Development Roadmap', type: 'Guide', views: '100K+', rating: 4.9 },
            {
                title: 'Data Structures & Algorithms',
                type: 'Course',
                students: '15K+',
                rating: 4.8,
            },
            { title: 'React.js Complete Tutorial', type: 'Video', duration: '8h 45m', rating: 4.7 },
            { title: 'Git & GitHub Mastery', type: 'Workshop', attendees: '20K+', rating: 4.8 },
        ],
    },
    {
        id: 'career-guidance',
        title: 'Career Guidance',
        description: 'Navigate your tech career path',
        icon: '🎓',
        color: 'from-orange-500 to-red-500',
        resources: [
            { title: 'Tech Career Roadmap 2024', type: 'Guide', downloads: '60K+', rating: 4.9 },
            { title: 'Salary Negotiation Tactics', type: 'Video', duration: '1h 20m', rating: 4.8 },
            {
                title: 'Remote Work Best Practices',
                type: 'Article',
                readTime: '12 min',
                rating: 4.7,
            },
            { title: 'Career Transition Guide', type: 'eBook', pages: '120', rating: 4.6 },
        ],
    },
];

const featuredResources = [
    {
        title: 'Complete Interview Preparation Kit',
        description: 'Everything you need to ace your next tech interview',
        image: '🎯',
        downloads: '100K+',
        rating: 4.9,
        price: 'Free',
        tags: ['Interview', 'Coding', 'System Design'],
    },
    {
        title: 'Tech Salary Report 2024',
        description: 'Latest salary trends and compensation data',
        image: '💰',
        downloads: '75K+',
        rating: 4.8,
        price: 'Free',
        tags: ['Salary', 'Trends', 'Data'],
    },
    {
        title: 'Remote Work Toolkit',
        description: 'Essential tools and tips for remote developers',
        image: '🏠',
        downloads: '50K+',
        rating: 4.7,
        price: 'Free',
        tags: ['Remote', 'Productivity', 'Tools'],
    },
];

export default function ResourcesPage() {
    const [activeCategory, setActiveCategory] = useState('interview-prep');
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div
            className="min-h-screen bg-gradient-to-b from-[hsl(210,50%,98%)] to-[hsl(196,60%,95%)]"
            data-oid="bwhj341"
        >
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden -z-10" data-oid="jri_l00">
                <div
                    className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-20 rounded-full blur-3xl animate-blob"
                    data-oid="u36lu5d"
                ></div>
                <div
                    className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"
                    data-oid="4lur1.m"
                ></div>
                <div
                    className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-4000"
                    data-oid="o8h93.0"
                ></div>
            </div>

            <div className="relative z-10" data-oid="ljj913-">
                {/* Hero Section */}
                <section className="pt-24 pb-16 px-4" data-oid="a4z8wgm">
                    <div className="max-w-7xl mx-auto text-center" data-oid="7op-jmu">
                        <div
                            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-[hsl(196,80%,45%)] border border-[hsl(210,30%,95%)] mb-6"
                            data-oid=":874fu_"
                        >
                            <BookOpen className="h-4 w-4" data-oid="oh46t-c" />
                            Free Resources for Tech Careers
                        </div>

                        <h1
                            className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
                            data-oid="momkewm"
                        >
                            Your Career
                            <span
                                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] bg-clip-text text-transparent"
                                data-oid="q9pefyr"
                            >
                                {' '}
                                Resource Hub
                            </span>
                        </h1>

                        <p
                            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                            data-oid="2hgw8yt"
                        >
                            Everything you need to land your dream tech job - from interview prep to
                            skill development, all in one place.
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto mb-12" data-oid=":-.wu:.">
                            <div className="relative" data-oid="tzwp_gg">
                                <input
                                    type="text"
                                    placeholder="Search resources, guides, templates..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-6 py-4 text-lg rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent shadow-lg"
                                    data-oid="ck82va6"
                                />

                                <button
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-xl hover:shadow-lg transition-all"
                                    data-oid="ja:5q1_"
                                >
                                    <ArrowRight className="h-5 w-5" data-oid="5pvfmdj" />
                                </button>
                            </div>
                        </div>

                        {/* Stats */}
                        <div
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                            data-oid="frggkpv"
                        >
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                data-oid="g0sg:gc"
                            >
                                <div
                                    className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                                    data-oid="cb9-bjq"
                                >
                                    500+
                                </div>
                                <div className="text-gray-600" data-oid="q35zrz6">
                                    Free Resources
                                </div>
                            </div>
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                data-oid="wq.g3rh"
                            >
                                <div
                                    className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                                    data-oid="66_iv02"
                                >
                                    1M+
                                </div>
                                <div className="text-gray-600" data-oid="53mvm74">
                                    Downloads
                                </div>
                            </div>
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                data-oid="hfk._we"
                            >
                                <div
                                    className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                                    data-oid="vavg3fc"
                                >
                                    50K+
                                </div>
                                <div className="text-gray-600" data-oid="f4ybdis">
                                    Success Stories
                                </div>
                            </div>
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                data-oid="wfptw72"
                            >
                                <div
                                    className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                                    data-oid="zsqr9b4"
                                >
                                    4.9★
                                </div>
                                <div className="text-gray-600" data-oid="0y1ahtb">
                                    Average Rating
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Resources */}
                <section className="py-16 px-4" data-oid="o:3yao_">
                    <div className="max-w-7xl mx-auto" data-oid="a51k:oh">
                        <div className="text-center mb-12" data-oid=":swa8-i">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="ler8m.."
                            >
                                Featured Resources
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="4d_95vg">
                                Most popular and highly-rated resources this month
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid=":2ot2kn">
                            {featuredResources.map((resource, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                    data-oid="4:b2qgh"
                                >
                                    <div className="text-4xl mb-4" data-oid="h05_i._">
                                        {resource.image}
                                    </div>
                                    <h3
                                        className="text-xl font-bold text-gray-800 mb-2"
                                        data-oid="lyzbx2u"
                                    >
                                        {resource.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4" data-oid="isj3a70">
                                        {resource.description}
                                    </p>

                                    <div
                                        className="flex items-center gap-4 mb-4"
                                        data-oid="6lt.8rl"
                                    >
                                        <div className="flex items-center gap-1" data-oid="cn:3zu7">
                                            <Download
                                                className="h-4 w-4 text-gray-500"
                                                data-oid="stw8u_s"
                                            />

                                            <span
                                                className="text-sm text-gray-600"
                                                data-oid="2xd46dq"
                                            >
                                                {resource.downloads}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1" data-oid="hszvp_b">
                                            <Star
                                                className="h-4 w-4 text-yellow-500 fill-current"
                                                data-oid="m3f-4-k"
                                            />

                                            <span
                                                className="text-sm text-gray-600"
                                                data-oid="rf0_6eb"
                                            >
                                                {resource.rating}
                                            </span>
                                        </div>
                                        <div
                                            className="text-sm font-medium text-green-600"
                                            data-oid="p530ppy"
                                        >
                                            {resource.price}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-4" data-oid="ep.ft3.">
                                        {resource.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                                                data-oid="_7nu47."
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <button
                                        className="w-full px-4 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
                                        data-oid="q-got27"
                                    >
                                        Download Now
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Resource Categories */}
                <section className="py-16 px-4" data-oid="djcsvpf">
                    <div className="max-w-7xl mx-auto" data-oid="m3tat2c">
                        <div className="text-center mb-12" data-oid="ytfd4gw">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="ssd.0.d"
                            >
                                Browse by Category
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="dpx62pi">
                                Find exactly what you need for your career journey
                            </p>
                        </div>

                        {/* Category Tabs */}
                        <div
                            className="flex flex-wrap justify-center gap-4 mb-12"
                            data-oid="6zy-uw_"
                        >
                            {resourceCategories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`px-6 py-3 rounded-xl font-medium transition-all ${
                                        activeCategory === category.id
                                            ? 'bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white shadow-lg'
                                            : 'bg-white/80 backdrop-blur-sm text-gray-700 border border-[hsl(210,30%,95%)] hover:border-[hsl(196,80%,45%)]'
                                    }`}
                                    data-oid="p-ggjl4"
                                >
                                    <span className="mr-2" data-oid="ryj50e8">
                                        {category.icon}
                                    </span>
                                    {category.title}
                                </button>
                            ))}
                        </div>

                        {/* Active Category Content */}
                        {resourceCategories.map(
                            (category) =>
                                activeCategory === category.id && (
                                    <div
                                        key={category.id}
                                        className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,30%,95%)]"
                                        data-oid="yqwv7mc"
                                    >
                                        <div className="text-center mb-8" data-oid="urm49lg">
                                            <div className="text-6xl mb-4" data-oid=".tilj3p">
                                                {category.icon}
                                            </div>
                                            <h3
                                                className="text-2xl font-bold text-gray-800 mb-2"
                                                data-oid="sr1dgou"
                                            >
                                                {category.title}
                                            </h3>
                                            <p className="text-gray-600" data-oid="gav-r0u">
                                                {category.description}
                                            </p>
                                        </div>

                                        <div
                                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                                            data-oid="5rgnshe"
                                        >
                                            {category.resources.map((resource, index) => (
                                                <div
                                                    key={index}
                                                    className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all"
                                                    data-oid="lt5c:1d"
                                                >
                                                    <div
                                                        className="flex items-start justify-between mb-3"
                                                        data-oid="189-690"
                                                    >
                                                        <h4
                                                            className="font-semibold text-gray-800 text-sm"
                                                            data-oid="dfcwu61"
                                                        >
                                                            {resource.title}
                                                        </h4>
                                                        <span
                                                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                                                            data-oid="6a7dcfy"
                                                        >
                                                            {resource.type}
                                                        </span>
                                                    </div>

                                                    <div
                                                        className="flex items-center gap-4 text-sm text-gray-600 mb-4"
                                                        data-oid="0.2pqyx"
                                                    >
                                                        {'downloads' in resource &&
                                                            resource.downloads && (
                                                                <div
                                                                    className="flex items-center gap-1"
                                                                    data-oid=".htmjwy"
                                                                >
                                                                    <Download
                                                                        className="h-3 w-3"
                                                                        data-oid="isgp1_t"
                                                                    />

                                                                    {resource.downloads}
                                                                </div>
                                                            )}
                                                        {'duration' in resource &&
                                                            resource.duration && (
                                                                <div
                                                                    className="flex items-center gap-1"
                                                                    data-oid="6yio.ez"
                                                                >
                                                                    <Clock
                                                                        className="h-3 w-3"
                                                                        data-oid="bplg1tu"
                                                                    />

                                                                    {resource.duration}
                                                                </div>
                                                            )}
                                                        {'readTime' in resource &&
                                                            resource.readTime && (
                                                                <div
                                                                    className="flex items-center gap-1"
                                                                    data-oid="vkoucti"
                                                                >
                                                                    <Clock
                                                                        className="h-3 w-3"
                                                                        data-oid="pzb-d0z"
                                                                    />

                                                                    {resource.readTime}
                                                                </div>
                                                            )}
                                                        {'users' in resource && resource.users && (
                                                            <div
                                                                className="flex items-center gap-1"
                                                                data-oid="x0diyys"
                                                            >
                                                                <Users
                                                                    className="h-3 w-3"
                                                                    data-oid="kbs:m3h"
                                                                />

                                                                {resource.users}
                                                            </div>
                                                        )}
                                                        {'views' in resource && resource.views && (
                                                            <div
                                                                className="flex items-center gap-1"
                                                                data-oid="dqtdhso"
                                                            >
                                                                <Users
                                                                    className="h-3 w-3"
                                                                    data-oid="5g_4--1"
                                                                />

                                                                {resource.views}
                                                            </div>
                                                        )}
                                                        {'students' in resource &&
                                                            resource.students && (
                                                                <div
                                                                    className="flex items-center gap-1"
                                                                    data-oid="w0d1slh"
                                                                >
                                                                    <Users
                                                                        className="h-3 w-3"
                                                                        data-oid="sb4wgl2"
                                                                    />

                                                                    {resource.students}
                                                                </div>
                                                            )}
                                                        {'attendees' in resource &&
                                                            resource.attendees && (
                                                                <div
                                                                    className="flex items-center gap-1"
                                                                    data-oid="f8ejnih"
                                                                >
                                                                    <Users
                                                                        className="h-3 w-3"
                                                                        data-oid="jabxrq3"
                                                                    />

                                                                    {resource.attendees}
                                                                </div>
                                                            )}
                                                        {'pages' in resource && resource.pages && (
                                                            <div
                                                                className="flex items-center gap-1"
                                                                data-oid="1i89x-7"
                                                            >
                                                                <FileText
                                                                    className="h-3 w-3"
                                                                    data-oid="4-36r-q"
                                                                />
                                                                {resource.pages} pages
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div
                                                        className="flex items-center justify-between"
                                                        data-oid="3ms3l2r"
                                                    >
                                                        <div
                                                            className="flex items-center gap-1"
                                                            data-oid="m7oezpq"
                                                        >
                                                            <Star
                                                                className="h-4 w-4 text-yellow-500 fill-current"
                                                                data-oid="erbxnmx"
                                                            />

                                                            <span
                                                                className="text-sm font-medium"
                                                                data-oid="v6wtjoh"
                                                            >
                                                                {resource.rating}
                                                            </span>
                                                        </div>
                                                        <button
                                                            className="text-[hsl(196,80%,45%)] hover:text-[hsl(196,80%,35%)] transition-colors"
                                                            data-oid="b8ks87u"
                                                        >
                                                            <ExternalLink
                                                                className="h-4 w-4"
                                                                data-oid="j:s9.07"
                                                            />
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ),
                        )}
                    </div>
                </section>

                {/* Community CTA */}
                <section className="py-16 px-4" data-oid="95.hqsq">
                    <div className="max-w-4xl mx-auto text-center" data-oid="ly084a-">
                        <div
                            className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] rounded-2xl p-8 text-white"
                            data-oid="6ox.uh-"
                        >
                            <h2 className="text-3xl font-bold mb-4" data-oid="6q4a2oq">
                                Join Our Learning Community
                            </h2>
                            <p className="text-xl mb-6 text-blue-100" data-oid="dic:lmx">
                                Connect with fellow developers, share resources, and grow together
                            </p>
                            <div
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                                data-oid="mx1mgwv"
                            >
                                <Link
                                    href="/resources/community"
                                    className="px-6 py-3 bg-white text-[hsl(196,80%,45%)] rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
                                    data-oid="9f5qo_a"
                                >
                                    <Users className="inline h-5 w-5 mr-2" data-oid="vp9p_m2" />
                                    Join Community
                                </Link>
                                <Link
                                    href="/notify"
                                    className="px-6 py-3 border border-white text-white rounded-xl font-medium hover:bg-white hover:text-[hsl(196,80%,45%)] transition-all"
                                    data-oid="-p1a87j"
                                >
                                    <TrendingUp
                                        className="inline h-5 w-5 mr-2"
                                        data-oid="vb76k0-"
                                    />
                                    Get Notified
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
