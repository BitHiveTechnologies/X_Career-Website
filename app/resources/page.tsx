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
            data-oid="4s0cgcs"
        >
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden -z-10" data-oid="d96nnjc">
                <div
                    className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-20 rounded-full blur-3xl animate-blob"
                    data-oid="7pmppfj"
                ></div>
                <div
                    className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"
                    data-oid="tcxrhwb"
                ></div>
                <div
                    className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-4000"
                    data-oid="4ctyscg"
                ></div>
            </div>

            <div className="relative z-10" data-oid="xihetr1">
                {/* Hero Section */}
                <section className="pt-24 pb-16 px-4" data-oid="7akn7vn">
                    <div className="max-w-7xl mx-auto text-center" data-oid="t8tj:3e">
                        <div
                            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-[hsl(196,80%,45%)] border border-[hsl(210,30%,95%)] mb-6"
                            data-oid="-hlwmns"
                        >
                            <BookOpen className="h-4 w-4" data-oid="a0bdq:z" />
                            Free Resources for Tech Careers
                        </div>

                        <h1
                            className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
                            data-oid="e:b:9tc"
                        >
                            Your Career
                            <span
                                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] bg-clip-text text-transparent"
                                data-oid="vnvsvmq"
                            >
                                {' '}
                                Resource Hub
                            </span>
                        </h1>

                        <p
                            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                            data-oid="7ecjtri"
                        >
                            Everything you need to land your dream tech job - from interview prep to
                            skill development, all in one place.
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto mb-12" data-oid="i7n891i">
                            <div className="relative" data-oid="iqt_0fv">
                                <input
                                    type="text"
                                    placeholder="Search resources, guides, templates..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-6 py-4 text-lg rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent shadow-lg"
                                    data-oid="t9rzipv"
                                />

                                <button
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-xl hover:shadow-lg transition-all"
                                    data-oid="14-r3nj"
                                >
                                    <ArrowRight className="h-5 w-5" data-oid="am4dcp." />
                                </button>
                            </div>
                        </div>

                        {/* Stats */}
                        <div
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                            data-oid="4fxs11s"
                        >
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                data-oid="7f4zrbv"
                            >
                                <div
                                    className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                                    data-oid="wr5::sw"
                                >
                                    500+
                                </div>
                                <div className="text-gray-600" data-oid="avkidou">
                                    Free Resources
                                </div>
                            </div>
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                data-oid="s0981:r"
                            >
                                <div
                                    className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                                    data-oid="7iz_5.a"
                                >
                                    1M+
                                </div>
                                <div className="text-gray-600" data-oid="w.ignl.">
                                    Downloads
                                </div>
                            </div>
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                data-oid="8ah7u4q"
                            >
                                <div
                                    className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                                    data-oid="7-qctmr"
                                >
                                    50K+
                                </div>
                                <div className="text-gray-600" data-oid="mf77k0e">
                                    Success Stories
                                </div>
                            </div>
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[hsl(210,30%,95%)]"
                                data-oid="k.pcqle"
                            >
                                <div
                                    className="text-3xl font-bold text-[hsl(196,80%,45%)]"
                                    data-oid="e07u6nm"
                                >
                                    4.9★
                                </div>
                                <div className="text-gray-600" data-oid="1n8t6j2">
                                    Average Rating
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Resources */}
                <section className="py-16 px-4" data-oid=".ca3ml9">
                    <div className="max-w-7xl mx-auto" data-oid="grjiy6i">
                        <div className="text-center mb-12" data-oid="574ld_2">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="f-fpf4o"
                            >
                                Featured Resources
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="766clin">
                                Most popular and highly-rated resources this month
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="maxkcnw">
                            {featuredResources.map((resource, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[hsl(210,30%,95%)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                    data-oid="ifkbo46"
                                >
                                    <div className="text-4xl mb-4" data-oid="2ij1l3n">
                                        {resource.image}
                                    </div>
                                    <h3
                                        className="text-xl font-bold text-gray-800 mb-2"
                                        data-oid="jwbom4_"
                                    >
                                        {resource.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4" data-oid="vvia4sp">
                                        {resource.description}
                                    </p>

                                    <div
                                        className="flex items-center gap-4 mb-4"
                                        data-oid="32arbzh"
                                    >
                                        <div className="flex items-center gap-1" data-oid="i2.ek7f">
                                            <Download
                                                className="h-4 w-4 text-gray-500"
                                                data-oid="zq_ricw"
                                            />

                                            <span
                                                className="text-sm text-gray-600"
                                                data-oid="h.on980"
                                            >
                                                {resource.downloads}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1" data-oid="g5_sd_a">
                                            <Star
                                                className="h-4 w-4 text-yellow-500 fill-current"
                                                data-oid="vo-b3oc"
                                            />

                                            <span
                                                className="text-sm text-gray-600"
                                                data-oid="l-xjgke"
                                            >
                                                {resource.rating}
                                            </span>
                                        </div>
                                        <div
                                            className="text-sm font-medium text-green-600"
                                            data-oid="ylviv5z"
                                        >
                                            {resource.price}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-4" data-oid="-k1vkdh">
                                        {resource.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                                                data-oid="z.o1qjl"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <button
                                        className="w-full px-4 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
                                        data-oid="qw7vewk"
                                    >
                                        Download Now
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Resource Categories */}
                <section className="py-16 px-4" data-oid="sa8xf.s">
                    <div className="max-w-7xl mx-auto" data-oid="z4btgc:">
                        <div className="text-center mb-12" data-oid="pits0a6">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                                data-oid="ualacip"
                            >
                                Browse by Category
                            </h2>
                            <p className="text-xl text-gray-600" data-oid="pjw9t73">
                                Find exactly what you need for your career journey
                            </p>
                        </div>

                        {/* Category Tabs */}
                        <div
                            className="flex flex-wrap justify-center gap-4 mb-12"
                            data-oid="r1.7sl4"
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
                                    data-oid="7.28df-"
                                >
                                    <span className="mr-2" data-oid="qcyki4i">
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
                                        data-oid="o_kgjba"
                                    >
                                        <div className="text-center mb-8" data-oid="ni.xsof">
                                            <div className="text-6xl mb-4" data-oid="d7:i6t9">
                                                {category.icon}
                                            </div>
                                            <h3
                                                className="text-2xl font-bold text-gray-800 mb-2"
                                                data-oid="vichaj3"
                                            >
                                                {category.title}
                                            </h3>
                                            <p className="text-gray-600" data-oid="pv6x8kt">
                                                {category.description}
                                            </p>
                                        </div>

                                        <div
                                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                                            data-oid="f5w9sg0"
                                        >
                                            {category.resources.map((resource, index) => (
                                                <div
                                                    key={index}
                                                    className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all"
                                                    data-oid="n3a5ygt"
                                                >
                                                    <div
                                                        className="flex items-start justify-between mb-3"
                                                        data-oid="v4i7sz1"
                                                    >
                                                        <h4
                                                            className="font-semibold text-gray-800 text-sm"
                                                            data-oid="vyqhx:m"
                                                        >
                                                            {resource.title}
                                                        </h4>
                                                        <span
                                                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                                                            data-oid=".vqmukv"
                                                        >
                                                            {resource.type}
                                                        </span>
                                                    </div>

                                                    <div
                                                        className="flex items-center gap-4 text-sm text-gray-600 mb-4"
                                                        data-oid=".4wc91k"
                                                    >
                                                        {resource.downloads && (
                                                            <div
                                                                className="flex items-center gap-1"
                                                                data-oid="lhsef.c"
                                                            >
                                                                <Download
                                                                    className="h-3 w-3"
                                                                    data-oid="lohyzjy"
                                                                />

                                                                {resource.downloads}
                                                            </div>
                                                        )}
                                                        {resource.duration && (
                                                            <div
                                                                className="flex items-center gap-1"
                                                                data-oid="kze2ra0"
                                                            >
                                                                <Clock
                                                                    className="h-3 w-3"
                                                                    data-oid="9qi:9b8"
                                                                />

                                                                {resource.duration}
                                                            </div>
                                                        )}
                                                        {resource.readTime && (
                                                            <div
                                                                className="flex items-center gap-1"
                                                                data-oid="639sz5:"
                                                            >
                                                                <Clock
                                                                    className="h-3 w-3"
                                                                    data-oid="rq:o542"
                                                                />

                                                                {resource.readTime}
                                                            </div>
                                                        )}
                                                        {resource.users && (
                                                            <div
                                                                className="flex items-center gap-1"
                                                                data-oid="17yhlms"
                                                            >
                                                                <Users
                                                                    className="h-3 w-3"
                                                                    data-oid="m.wkzwl"
                                                                />

                                                                {resource.users}
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div
                                                        className="flex items-center justify-between"
                                                        data-oid="6m0dmr8"
                                                    >
                                                        <div
                                                            className="flex items-center gap-1"
                                                            data-oid="p96m46y"
                                                        >
                                                            <Star
                                                                className="h-4 w-4 text-yellow-500 fill-current"
                                                                data-oid="r:fhne0"
                                                            />

                                                            <span
                                                                className="text-sm font-medium"
                                                                data-oid="dsl_d-p"
                                                            >
                                                                {resource.rating}
                                                            </span>
                                                        </div>
                                                        <button
                                                            className="text-[hsl(196,80%,45%)] hover:text-[hsl(196,80%,35%)] transition-colors"
                                                            data-oid="yx6u4z3"
                                                        >
                                                            <ExternalLink
                                                                className="h-4 w-4"
                                                                data-oid="zlj0k34"
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
                <section className="py-16 px-4" data-oid=".c51syu">
                    <div className="max-w-4xl mx-auto text-center" data-oid="ia-.dd5">
                        <div
                            className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] rounded-2xl p-8 text-white"
                            data-oid="bm_6sph"
                        >
                            <h2 className="text-3xl font-bold mb-4" data-oid="q3ohgo6">
                                Join Our Learning Community
                            </h2>
                            <p className="text-xl mb-6 text-blue-100" data-oid="mkopaqw">
                                Connect with fellow developers, share resources, and grow together
                            </p>
                            <div
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                                data-oid="ql6c6xq"
                            >
                                <Link
                                    href="/resources/community"
                                    className="px-6 py-3 bg-white text-[hsl(196,80%,45%)] rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105"
                                    data-oid="iv7:brp"
                                >
                                    <Users className="inline h-5 w-5 mr-2" data-oid="kewds6d" />
                                    Join Community
                                </Link>
                                <Link
                                    href="/notify"
                                    className="px-6 py-3 border border-white text-white rounded-xl font-medium hover:bg-white hover:text-[hsl(196,80%,45%)] transition-all"
                                    data-oid="f5mbptj"
                                >
                                    <TrendingUp
                                        className="inline h-5 w-5 mr-2"
                                        data-oid="fcy852n"
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
