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
            data-oid="33:men0"
        >
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden -z-10" data-oid="6xayxho">
                <div
                    className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-20 rounded-full blur-3xl animate-blob"
                    data-oid="pdsd8gi"
                ></div>
                <div
                    className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"
                    data-oid="iwxrs6n"
                ></div>
                <div
                    className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-4000"
                    data-oid="bz9qv1e"
                ></div>
            </div>

            <div className="relative z-10" data-oid="gco837h">
                {/* Hero Section */}
                <section className="pt-24 pb-16 px-4" data-oid="_89lvj-">
                    <div className="max-w-7xl mx-auto text-center" data-oid="dg5dj85">
                        <div
                            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-[hsl(196,80%,45%)] border border-[hsl(210,30%,95%)] mb-6"
                            data-oid="dfm5k.n"
                        >
                            <BookOpen className="h-4 w-4" data-oid="oaersz6" />
                            Free Resources for Tech Careers
                        </div>

                        <h1
                            className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
                            data-oid="i_uc1tj"
                        >
                            Your Career
                            <span
                                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] bg-clip-text text-transparent"
                                data-oid="t1dc5rg"
                            >
                                {' '}
                                Resource Hub
                            </span>
                        </h1>

                        <p
                            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                            data-oid="9qmxt12"
                        >
                            Everything you need to land your dream tech job - from interview prep to
                            skill development, all in one place.
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto mb-12" data-oid="29fx.cb">
                            <div className="relative" data-oid="m1r06.r">
                                <input
                                    type="text"
                                    placeholder="Search resources, guides, templates..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-6 py-4 text-lg rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent shadow-lg"
                                    data-oid="t8lz9cd"
                                />

                                <button
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-xl hover:shadow-lg transition-all"
                                    data-oid="vy3fntd"
                                >
                                    <ArrowRight className="h-5 w-5" data-oid="y8fvnqq" />
                                </button>
                            </div>
                        </div>

                        {/* Stats */}
                        <div
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                            data-oid="4l3o:w1"
                        >
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                data-oid="vxgix3."
                            >
                                <div
                                    className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                                    data-oid="8z2fn0r"
                                >
                                    500+
                                </div>
                                <div className="text-gray-600" data-oid="qh-s8bl">
                                    Free Resources
                                </div>
                            </div>
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                data-oid="la8kjz4"
                            >
                                <div
                                    className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                                    data-oid="zon6om4"
                                >
                                    1M+
                                </div>
                                <div className="text-gray-600" data-oid="ur82.hq">
                                    Downloads
                                </div>
                            </div>
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                data-oid="t:3ovty"
                            >
                                <div
                                    className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                                    data-oid="d7wcx20"
                                >
                                    50K+
                                </div>
                                <div className="text-gray-600" data-oid="knyfl0l">
                                    Success Stories
                                </div>
                            </div>
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                data-oid="ymiie9r"
                            >
                                <div
                                    className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                                    data-oid="pmpdwq5"
                                >
                                    4.9★
                                </div>
                                <div className="text-gray-600" data-oid="abvzjf4">
                                    Average Rating
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Resources */}
                <section className="py-16 px-4" data-oid="le.kyir">
                    <div className="max-w-7xl mx-auto" data-oid="7mw23-n">
                        <div className="text-center mb-12" data-oid="wmqu.2j">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="7eqybh."
                            >
                                Featured Resources
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="yca9-da">
                                Most popular and highly-rated resources this month
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="a:nirj2">
                            {featuredResources.map((resource, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                    data-oid="_wkwdnu"
                                >
                                    <div className="text-4xl mb-4" data-oid="bq-33yv">
                                        {resource.image}
                                    </div>
                                    <h3
                                        className="text-xl font-bold text-gray-800 mb-2"
                                        data-oid="py1:wey"
                                    >
                                        {resource.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4" data-oid="t3hkt4w">
                                        {resource.description}
                                    </p>

                                    <div
                                        className="flex items-center gap-4 mb-4"
                                        data-oid="23n7t9b"
                                    >
                                        <div className="flex items-center gap-1" data-oid="y2p96pj">
                                            <Download
                                                className="h-4 w-4 text-gray-500"
                                                data-oid="x802zl-"
                                            />

                                            <span
                                                className="text-sm text-gray-600"
                                                data-oid="imj3ihw"
                                            >
                                                {resource.downloads}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1" data-oid=".wmy6ue">
                                            <Star
                                                className="h-4 w-4 text-yellow-500 fill-current"
                                                data-oid="clco-tm"
                                            />

                                            <span
                                                className="text-sm text-gray-600"
                                                data-oid="tyr9fvc"
                                            >
                                                {resource.rating}
                                            </span>
                                        </div>
                                        <div
                                            className="text-sm font-medium text-green-600"
                                            data-oid="qn3tt.f"
                                        >
                                            {resource.price}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-4" data-oid="qwc66.y">
                                        {resource.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                                                data-oid="lfbsg0r"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <button
                                        className="w-full px-4 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
                                        data-oid="g7robvp"
                                    >
                                        Download Now
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Resource Categories */}
                <section className="py-16 px-4" data-oid="jrbg.2v">
                    <div className="max-w-7xl mx-auto" data-oid="8nuh74c">
                        <div className="text-center mb-12" data-oid="3a:f7ll">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="dktan9j"
                            >
                                Browse by Category
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="5nm_3us">
                                Find exactly what you need for your career journey
                            </p>
                        </div>

                        {/* Category Tabs */}
                        <div
                            className="flex flex-wrap justify-center gap-4 mb-12"
                            data-oid="f90q_jz"
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
                                    data-oid="49bumt7"
                                >
                                    <span className="mr-2" data-oid=".6909zi">
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
                                        data-oid=".9iu4is"
                                    >
                                        <div className="text-center mb-8" data-oid="4rvsjlb">
                                            <div className="text-6xl mb-4" data-oid="rhc.w-f">
                                                {category.icon}
                                            </div>
                                            <h3
                                                className="text-2xl font-bold text-gray-800 mb-2"
                                                data-oid="nw7xn8p"
                                            >
                                                {category.title}
                                            </h3>
                                            <p className="text-gray-600" data-oid="czkci5u">
                                                {category.description}
                                            </p>
                                        </div>

                                        <div
                                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                                            data-oid="lmq8:a5"
                                        >
                                            {category.resources.map((resource, index) => (
                                                <div
                                                    key={index}
                                                    className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all"
                                                    data-oid="-m:qey8"
                                                >
                                                    <div
                                                        className="flex items-start justify-between mb-3"
                                                        data-oid="jhdj9i:"
                                                    >
                                                        <h4
                                                            className="font-semibold text-gray-800 text-sm"
                                                            data-oid="fi-_s06"
                                                        >
                                                            {resource.title}
                                                        </h4>
                                                        <span
                                                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                                                            data-oid="8daql6b"
                                                        >
                                                            {resource.type}
                                                        </span>
                                                    </div>

                                                    <div
                                                        className="flex items-center gap-4 text-sm text-gray-600 mb-4"
                                                        data-oid="f:bcg-8"
                                                    >
                                                        {resource.downloads && (
                                                            <div
                                                                className="flex items-center gap-1"
                                                                data-oid="g02uclv"
                                                            >
                                                                <Download
                                                                    className="h-3 w-3"
                                                                    data-oid="m9nci9t"
                                                                />

                                                                {resource.downloads}
                                                            </div>
                                                        )}
                                                        {resource.duration && (
                                                            <div
                                                                className="flex items-center gap-1"
                                                                data-oid="m6ue69d"
                                                            >
                                                                <Clock
                                                                    className="h-3 w-3"
                                                                    data-oid="7i1l_f6"
                                                                />

                                                                {resource.duration}
                                                            </div>
                                                        )}
                                                        {resource.readTime && (
                                                            <div
                                                                className="flex items-center gap-1"
                                                                data-oid="7oinhzh"
                                                            >
                                                                <Clock
                                                                    className="h-3 w-3"
                                                                    data-oid="mylfuy5"
                                                                />

                                                                {resource.readTime}
                                                            </div>
                                                        )}
                                                        {resource.users && (
                                                            <div
                                                                className="flex items-center gap-1"
                                                                data-oid="1cz6upo"
                                                            >
                                                                <Users
                                                                    className="h-3 w-3"
                                                                    data-oid="7utfge0"
                                                                />

                                                                {resource.users}
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div
                                                        className="flex items-center justify-between"
                                                        data-oid="8j0i-qg"
                                                    >
                                                        <div
                                                            className="flex items-center gap-1"
                                                            data-oid="zoudk17"
                                                        >
                                                            <Star
                                                                className="h-4 w-4 text-yellow-500 fill-current"
                                                                data-oid="qv8b:rw"
                                                            />

                                                            <span
                                                                className="text-sm font-medium"
                                                                data-oid="5gi8dka"
                                                            >
                                                                {resource.rating}
                                                            </span>
                                                        </div>
                                                        <button
                                                            className="text-[hsl(196,80%,45%)] hover:text-[hsl(196,80%,35%)] transition-colors"
                                                            data-oid="ht0yu:r"
                                                        >
                                                            <ExternalLink
                                                                className="h-4 w-4"
                                                                data-oid="-5g6ern"
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
                <section className="py-16 px-4" data-oid="wjddi59">
                    <div className="max-w-4xl mx-auto text-center" data-oid="24m:9n9">
                        <div
                            className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] rounded-2xl p-8 text-white"
                            data-oid="n6_qk4k"
                        >
                            <h2 className="text-3xl font-bold mb-4" data-oid="xc::jx0">
                                Join Our Learning Community
                            </h2>
                            <p className="text-xl mb-6 text-blue-100" data-oid="rj5h87m">
                                Connect with fellow developers, share resources, and grow together
                            </p>
                            <div
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                                data-oid="5bzeehv"
                            >
                                <Link
                                    href="/resources/community"
                                    className="px-6 py-3 bg-white text-[hsl(196,80%,45%)] rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
                                    data-oid="scd1o:w"
                                >
                                    <Users className="inline h-5 w-5 mr-2" data-oid="xk31.4u" />
                                    Join Community
                                </Link>
                                <Link
                                    href="/notify"
                                    className="px-6 py-3 border border-white text-white rounded-xl font-medium hover:bg-white hover:text-[hsl(196,80%,45%)] transition-all"
                                    data-oid="9ya97al"
                                >
                                    <TrendingUp
                                        className="inline h-5 w-5 mr-2"
                                        data-oid="uf856t6"
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
