'use client';

import MainNavbar from '@/components/mainNavbar';
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Job } from '@/app/jobs/page';
import Link from 'next/link';
import { findJobBySlug } from '@/lib/mockData';

export default function JobDetailsPage() {
    const params = useParams();
    const router = useRouter();
    const [job, setJob] = useState<Job | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<'overview' | 'requirements' | 'company' | 'reviews'>(
        'overview',
    );
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        const companySlug = params.company as string;
        const jobTitleSlug = params.jobTitle as string;

        // Find job by matching company and title slugs
        const foundJob = findJobBySlug(companySlug, jobTitleSlug);

        setJob(foundJob || null);
        setIsLoading(false);
    }, [params]);

    const handleApply = () => {
        if (job) {
            const companySlug = job.company
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^a-z0-9-]/g, '');
            const jobTitleSlug = job.title
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^a-z0-9-]/g, '');
            router.push(`/jobs/apply/${companySlug}/${jobTitleSlug}`);
        }
    };

    const handleSave = () => {
        setIsSaved(!isSaved);
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: `${job?.title} at ${job?.company}`,
                text: `Check out this job opportunity: ${job?.title} at ${job?.company}`,
                url: window.location.href,
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    if (isLoading) {
        return (
            <>
                <MainNavbar data-oid="2dfxu2d" />
                <div
                    className="min-h-screen bg-gradient-to-b from-[hsl(196,60%,95%)] to-white flex items-center justify-center"
                    data-oid="8od29oe"
                >
                    <div
                        className="animate-spin rounded-full h-12 w-12 border-b-2 border-[hsl(196,80%,45%)]"
                        data-oid="bi1vhk1"
                    ></div>
                </div>
            </>
        );
    }

    if (!job) {
        return (
            <>
                <MainNavbar data-oid="tu2fr-h" />
                <div
                    className="min-h-screen bg-gradient-to-b from-[hsl(196,60%,95%)] to-white flex items-center justify-center"
                    data-oid="0c9afsx"
                >
                    <div className="text-center" data-oid="hme-4g8">
                        <h1 className="text-2xl font-bold text-gray-800 mb-4" data-oid="b6c3th4">
                            Job Not Found
                        </h1>
                        <p className="text-gray-600 mb-6" data-oid="2-nb45y">
                            The job you're looking for doesn't exist.
                        </p>
                        <button
                            onClick={() => router.push('/jobs')}
                            className="px-6 py-3 bg-[hsl(196,80%,45%)] text-white rounded-lg hover:bg-[hsl(196,80%,40%)] transition-colors"
                            data-oid="6-nuhrr"
                        >
                            Back to Jobs
                        </button>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <MainNavbar data-oid="bo7kqrz" />
            <div
                className="min-h-screen bg-gradient-to-b from-[hsl(196,60%,95%)] to-white"
                data-oid="m7eca95"
            >
                {/* Breadcrumb */}
                <div
                    className="bg-white/80 backdrop-blur-sm border-b border-gray-200"
                    data-oid="gjsk6xj"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4" data-oid="vuqa3gc">
                        <nav
                            className="flex items-center space-x-2 text-sm text-gray-600"
                            data-oid="0-:aij7"
                        >
                            <Link
                                href="/jobs"
                                className="hover:text-[hsl(196,80%,45%)] transition-colors"
                                data-oid="h42ocf2"
                            >
                                Jobs
                            </Link>
                            <span data-oid="2tvzvwq">›</span>
                            <Link
                                href={`/jobs?company=${job.company}`}
                                className="hover:text-[hsl(196,80%,45%)] transition-colors"
                                data-oid="ubg9:r6"
                            >
                                {job.company}
                            </Link>
                            <span data-oid="zcjx1st">›</span>
                            <span className="text-gray-800 font-medium" data-oid="gq68kmg">
                                {job.title}
                            </span>
                        </nav>
                    </div>
                </div>

                {/* Header Section */}
                <div
                    className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white"
                    data-oid="di0wn3c"
                >
                    <div
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
                        data-oid="m:cmh2d"
                    >
                        <div
                            className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8"
                            data-oid="0fllvtn"
                        >
                            <div className="flex-1" data-oid="bzi1vfl">
                                <div className="flex items-center gap-4 mb-4" data-oid="le1-71c">
                                    <div
                                        className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
                                        data-oid="h-at.h5"
                                    >
                                        <span
                                            className="text-2xl font-bold text-white"
                                            data-oid="93ykuz."
                                        >
                                            {job.company.charAt(0)}
                                        </span>
                                    </div>
                                    <div data-oid="s-:jr0n">
                                        <h1
                                            className="text-3xl lg:text-4xl font-bold mb-2"
                                            data-oid="h1te3.h"
                                        >
                                            {job.title}
                                        </h1>
                                        <p className="text-xl text-blue-100" data-oid="rpxaug8">
                                            {job.company}
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="flex flex-wrap items-center gap-6 text-blue-100 mb-6"
                                    data-oid="tz2ct7m"
                                >
                                    <div className="flex items-center gap-2" data-oid="4-1ko7x">
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="d::5oe."
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                data-oid="vawxjwd"
                                            />

                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                data-oid="6s8jde."
                                            />
                                        </svg>
                                        <span data-oid="xkexiw8">{job.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2" data-oid="zxazpio">
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="m995qv1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                                                data-oid="ehpx7mt"
                                            />
                                        </svg>
                                        <span data-oid="6:409sm">{job.salary}</span>
                                    </div>
                                    <div className="flex items-center gap-2" data-oid="f2d-44f">
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="uu317np"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                                data-oid="-lcy1.h"
                                            />
                                        </svg>
                                        <span data-oid="5x8ve:7">{job.experienceRequired}</span>
                                    </div>
                                    <div className="flex items-center gap-2" data-oid="r5j9kll">
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="f_hjn4z"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="2xg:74q"
                                            />
                                        </svg>
                                        <span data-oid="alzfz5l">
                                            Posted {formatDate(job.postedDate)}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3" data-oid="iatutt3">
                                    {job.isUrgent && (
                                        <span
                                            className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full animate-pulse"
                                            data-oid="debqze1"
                                        >
                                            🔥 URGENT HIRING
                                        </span>
                                    )}
                                    {job.isFeatured && (
                                        <span
                                            className="bg-yellow-500 text-white text-sm font-bold px-3 py-1 rounded-full"
                                            data-oid="tzkzvv6"
                                        >
                                            ⭐ FEATURED
                                        </span>
                                    )}
                                    {job.isRemote && (
                                        <span
                                            className="bg-green-500 text-white text-sm font-medium px-3 py-1 rounded-full"
                                            data-oid="qny:fk0"
                                        >
                                            🏠 Remote
                                        </span>
                                    )}
                                    <span
                                        className="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full"
                                        data-oid="s2h9277"
                                    >
                                        {job.jobType}
                                    </span>
                                    <span
                                        className="bg-purple-500 text-white text-sm font-medium px-3 py-1 rounded-full"
                                        data-oid="g454r_0"
                                    >
                                        {job.employmentType}
                                    </span>
                                </div>
                            </div>

                            <div
                                className="flex flex-col sm:flex-row lg:flex-col gap-4"
                                data-oid="_3lftq7"
                            >
                                <button
                                    onClick={handleApply}
                                    className="px-8 py-4 bg-white text-[hsl(196,80%,45%)] rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                                    data-oid="o:n5l66"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="4dlj9nu"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                            data-oid="lcpf9.3"
                                        />
                                    </svg>
                                    Apply Now
                                </button>
                                <div className="flex gap-3" data-oid="1fr8x.2">
                                    <button
                                        onClick={handleSave}
                                        className={`p-3 rounded-xl transition-all duration-300 ${
                                            isSaved
                                                ? 'bg-red-500 text-white'
                                                : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
                                        }`}
                                        title={isSaved ? 'Remove from saved' : 'Save job'}
                                        data-oid="6_tfna3"
                                    >
                                        <svg
                                            className="h-6 w-6"
                                            fill={isSaved ? 'currentColor' : 'none'}
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="w96rnnd"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                data-oid="nn98hq9"
                                            />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={handleShare}
                                        className="p-3 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white/30 transition-all duration-300"
                                        title="Share job"
                                        data-oid="nac7eli"
                                    >
                                        <svg
                                            className="h-6 w-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="bny:5:y"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                                                data-oid="v::h7zb"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Stats */}
                <div
                    className="bg-white/80 backdrop-blur-sm border-b border-gray-200"
                    data-oid="y2mw4n7"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6" data-oid="-ltwg8.">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6" data-oid="_w_rj:r">
                            <div className="text-center" data-oid="r.:kc0r">
                                <div
                                    className="text-2xl font-bold text-[hsl(196,80%,45%)]"
                                    data-oid=".w2e2ki"
                                >
                                    {job.applicantCount}
                                </div>
                                <div className="text-sm text-gray-600" data-oid="i9:4k8u">
                                    Applicants
                                </div>
                            </div>
                            <div className="text-center" data-oid="7bzm4hf">
                                <div
                                    className="text-2xl font-bold text-green-600"
                                    data-oid="-pg60-q"
                                >
                                    {job.companySize}
                                </div>
                                <div className="text-sm text-gray-600" data-oid="bsdouc:">
                                    Company Size
                                </div>
                            </div>
                            <div className="text-center" data-oid="9nm3:mx">
                                <div
                                    className="text-2xl font-bold text-purple-600"
                                    data-oid="iungh6h"
                                >
                                    {job.industry}
                                </div>
                                <div className="text-sm text-gray-600" data-oid="wm9sw1v">
                                    Industry
                                </div>
                            </div>
                            <div className="text-center" data-oid="yybtrqk">
                                <div
                                    className="text-2xl font-bold text-orange-600"
                                    data-oid="65s6zgm"
                                >
                                    {Math.max(1, Math.floor(Math.random() * 15))} days
                                </div>
                                <div className="text-sm text-gray-600" data-oid="yu6pr1w">
                                    Application Deadline
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-oid="j.b-ft6">
                    <div className="grid lg:grid-cols-3 gap-8" data-oid="itb-dxa">
                        {/* Main Content */}
                        <div className="lg:col-span-2" data-oid="njlawkb">
                            {/* Tabs */}
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-gray-200 mb-8"
                                data-oid="5ihdem."
                            >
                                <div className="border-b border-gray-200" data-oid="qq-ryfr">
                                    <nav className="flex space-x-8 px-6" data-oid="685kh5x">
                                        {[
                                            { id: 'overview', label: 'Job Overview' },
                                            { id: 'requirements', label: 'Requirements' },
                                            { id: 'company', label: 'About Company' },
                                            { id: 'reviews', label: 'Reviews' },
                                        ].map((tab) => (
                                            <button
                                                key={tab.id}
                                                onClick={() => setActiveTab(tab.id as any)}
                                                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                                                    activeTab === tab.id
                                                        ? 'border-[hsl(196,80%,45%)] text-[hsl(196,80%,45%)]'
                                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                                }`}
                                                data-oid="0b8k.7u"
                                            >
                                                {tab.label}
                                            </button>
                                        ))}
                                    </nav>
                                </div>

                                <div className="p-6" data-oid="8:it67b">
                                    {activeTab === 'overview' && (
                                        <div className="space-y-6" data-oid=":ovggiq">
                                            <div data-oid="xfgy9ua">
                                                <h3
                                                    className="text-lg font-semibold text-gray-800 mb-3"
                                                    data-oid="eibb-ng"
                                                >
                                                    Job Description
                                                </h3>
                                                <div
                                                    className="prose prose-blue max-w-none"
                                                    data-oid="vo_i31s"
                                                >
                                                    <p
                                                        className="text-gray-600 leading-relaxed mb-4"
                                                        data-oid="m:6d1:_"
                                                    >
                                                        We are looking for a talented {job.title} to
                                                        join our dynamic team at {job.company}. This
                                                        is an excellent opportunity for someone with{' '}
                                                        {job.experienceRequired} of experience to
                                                        work on cutting-edge projects and grow their
                                                        career in the {job.industry} industry.
                                                    </p>
                                                    <p
                                                        className="text-gray-600 leading-relaxed mb-4"
                                                        data-oid="unsc6hd"
                                                    >
                                                        As a {job.title}, you will be responsible
                                                        for developing and maintaining high-quality
                                                        software solutions, collaborating with
                                                        cross-functional teams, and contributing to
                                                        the overall success of our products.
                                                    </p>
                                                    <p
                                                        className="text-gray-600 leading-relaxed"
                                                        data-oid="8:c4hni"
                                                    >
                                                        Join us in building innovative solutions
                                                        that impact millions of users across India
                                                        and beyond. We offer a collaborative work
                                                        environment, competitive compensation, and
                                                        excellent growth opportunities.
                                                    </p>
                                                </div>
                                            </div>

                                            <div data-oid="5ruqhuy">
                                                <h3
                                                    className="text-lg font-semibold text-gray-800 mb-3"
                                                    data-oid="6wg_ak5"
                                                >
                                                    Key Responsibilities
                                                </h3>
                                                <ul className="space-y-2" data-oid="v714kh9">
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="x7x3op:"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="x49cxls"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="x2-_dpj"
                                                        >
                                                            Develop and maintain high-quality
                                                            software applications
                                                        </span>
                                                    </li>
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="ua-a2zl"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="uk3rz:n"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="o19:wu1"
                                                        >
                                                            Collaborate with cross-functional teams
                                                            to define and implement features
                                                        </span>
                                                    </li>
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="t9hm0f5"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="zad9yoh"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="3f85yqy"
                                                        >
                                                            Write clean, maintainable, and efficient
                                                            code
                                                        </span>
                                                    </li>
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="w0t.f.."
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="wco0yvm"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="fgw.cz_"
                                                        >
                                                            Participate in code reviews and maintain
                                                            coding standards
                                                        </span>
                                                    </li>
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="i9pvk9n"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid=".ug_8fo"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="63x_emo"
                                                        >
                                                            Troubleshoot and debug applications to
                                                            optimize performance
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>

                                            {job.benefits && job.benefits.length > 0 && (
                                                <div data-oid="ni2mk9l">
                                                    <h3
                                                        className="text-lg font-semibold text-gray-800 mb-3"
                                                        data-oid="-qh8kel"
                                                    >
                                                        Benefits & Perks
                                                    </h3>
                                                    <div
                                                        className="grid grid-cols-1 md:grid-cols-2 gap-3"
                                                        data-oid="f9o1549"
                                                    >
                                                        {job.benefits.map((benefit, index) => (
                                                            <div
                                                                key={index}
                                                                className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                                                                data-oid="3k5j7rf"
                                                            >
                                                                <div
                                                                    className="w-2 h-2 bg-green-500 rounded-full"
                                                                    data-oid="xlw9czt"
                                                                ></div>
                                                                <span
                                                                    className="text-gray-700"
                                                                    data-oid="p0scti7"
                                                                >
                                                                    {benefit}
                                                                </span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {activeTab === 'requirements' && (
                                        <div className="space-y-6" data-oid="7-fh_s.">
                                            <div data-oid="k5g04og">
                                                <h3
                                                    className="text-lg font-semibold text-gray-800 mb-3"
                                                    data-oid="68ss3vv"
                                                >
                                                    Required Skills
                                                </h3>
                                                <div
                                                    className="flex flex-wrap gap-2"
                                                    data-oid="eaw8.72"
                                                >
                                                    {job.skills.map((skill, index) => (
                                                        <span
                                                            key={index}
                                                            className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-2 rounded-full"
                                                            data-oid="r:vxxbo"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div data-oid="f0ekck2">
                                                <h3
                                                    className="text-lg font-semibold text-gray-800 mb-3"
                                                    data-oid="kcbfob0"
                                                >
                                                    Experience & Qualifications
                                                </h3>
                                                <ul className="space-y-3" data-oid="egeyvnz">
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="h7uwwbn"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="32av2p8"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="9a.m4xn"
                                                        >
                                                            Experience: {job.experienceRequired}
                                                        </span>
                                                    </li>
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="kqdh1m1"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="b0g1aq6"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid=".abra-x"
                                                        >
                                                            Bachelor's degree in Computer Science,
                                                            Engineering, or related field
                                                        </span>
                                                    </li>
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="g2m1jyt"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="81j::ey"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="lav_8sw"
                                                        >
                                                            Strong problem-solving and analytical
                                                            skills
                                                        </span>
                                                    </li>
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="ipz.cs9"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="5o_oseg"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="-:h4rvp"
                                                        >
                                                            Excellent communication and teamwork
                                                            abilities
                                                        </span>
                                                    </li>
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="kkkuj9p"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="him.xg2"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="wbhtp:_"
                                                        >
                                                            Passion for learning new technologies
                                                            and best practices
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div data-oid="d7kbr8p">
                                                <h3
                                                    className="text-lg font-semibold text-gray-800 mb-3"
                                                    data-oid="a5l88xy"
                                                >
                                                    Nice to Have Skills
                                                </h3>
                                                <div
                                                    className="flex flex-wrap gap-2"
                                                    data-oid="ya3qdyt"
                                                >
                                                    {[
                                                        'Git',
                                                        'Docker',
                                                        'AWS',
                                                        'Agile',
                                                        'Testing',
                                                        'CI/CD',
                                                    ].map((skill, index) => (
                                                        <span
                                                            key={index}
                                                            className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full border border-gray-300"
                                                            data-oid="nvk.0c2"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'company' && (
                                        <div className="space-y-6" data-oid="fpbstov">
                                            <div data-oid="82u3bft">
                                                <h3
                                                    className="text-lg font-semibold text-gray-800 mb-3"
                                                    data-oid="ycin.2z"
                                                >
                                                    About {job.company}
                                                </h3>
                                                <p
                                                    className="text-gray-600 leading-relaxed mb-4"
                                                    data-oid="5.jgkjm"
                                                >
                                                    {job.company} is a leading {job.industry}{' '}
                                                    company that has been revolutionizing the
                                                    industry with innovative solutions and
                                                    cutting-edge technology. We are committed to
                                                    creating products that make a real difference in
                                                    people's lives.
                                                </p>
                                                <p
                                                    className="text-gray-600 leading-relaxed"
                                                    data-oid="zkw3re."
                                                >
                                                    Our team consists of passionate professionals
                                                    who are dedicated to excellence and continuous
                                                    learning. We foster a culture of innovation,
                                                    collaboration, and growth where every team
                                                    member can thrive and make an impact.
                                                </p>
                                            </div>

                                            <div
                                                className="grid grid-cols-1 md:grid-cols-3 gap-4"
                                                data-oid="xiopaa0"
                                            >
                                                <div
                                                    className="bg-blue-50 p-4 rounded-lg text-center"
                                                    data-oid="hiev5od"
                                                >
                                                    <div
                                                        className="text-2xl font-bold text-[hsl(196,80%,45%)]"
                                                        data-oid="1x4nzil"
                                                    >
                                                        {job.companySize}
                                                    </div>
                                                    <div
                                                        className="text-sm text-gray-600"
                                                        data-oid="_chs9v5"
                                                    >
                                                        Employees
                                                    </div>
                                                </div>
                                                <div
                                                    className="bg-green-50 p-4 rounded-lg text-center"
                                                    data-oid="nngy6sy"
                                                >
                                                    <div
                                                        className="text-2xl font-bold text-green-600"
                                                        data-oid="8rc.g30"
                                                    >
                                                        {job.industry}
                                                    </div>
                                                    <div
                                                        className="text-sm text-gray-600"
                                                        data-oid="-9813nv"
                                                    >
                                                        Industry
                                                    </div>
                                                </div>
                                                <div
                                                    className="bg-purple-50 p-4 rounded-lg text-center"
                                                    data-oid="xq_18y:"
                                                >
                                                    <div
                                                        className="text-2xl font-bold text-purple-600"
                                                        data-oid="yk85-df"
                                                    >
                                                        {job.companyType}
                                                    </div>
                                                    <div
                                                        className="text-sm text-gray-600"
                                                        data-oid="86rc3b8"
                                                    >
                                                        Company Type
                                                    </div>
                                                </div>
                                            </div>

                                            <div data-oid="6kgc75k">
                                                <h3
                                                    className="text-lg font-semibold text-gray-800 mb-3"
                                                    data-oid="awouuzq"
                                                >
                                                    Company Culture
                                                </h3>
                                                <div
                                                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                                    data-oid="_fkwx0w"
                                                >
                                                    <div
                                                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                                                        data-oid="ppuoec_"
                                                    >
                                                        <div
                                                            className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"
                                                            data-oid="u73huex"
                                                        >
                                                            <span
                                                                className="text-blue-600 text-sm"
                                                                data-oid="_s0sl7p"
                                                            >
                                                                🚀
                                                            </span>
                                                        </div>
                                                        <div data-oid="8xu2xrx">
                                                            <div
                                                                className="font-medium text-gray-800"
                                                                data-oid="_-dx6az"
                                                            >
                                                                Innovation
                                                            </div>
                                                            <div
                                                                className="text-sm text-gray-600"
                                                                data-oid="hc5hsir"
                                                            >
                                                                Cutting-edge technology
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                                                        data-oid="_pcag.1"
                                                    >
                                                        <div
                                                            className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"
                                                            data-oid="q2upnf9"
                                                        >
                                                            <span
                                                                className="text-green-600 text-sm"
                                                                data-oid="vatoxuw"
                                                            >
                                                                🤝
                                                            </span>
                                                        </div>
                                                        <div data-oid="d3d:yby">
                                                            <div
                                                                className="font-medium text-gray-800"
                                                                data-oid="9meqduy"
                                                            >
                                                                Collaboration
                                                            </div>
                                                            <div
                                                                className="text-sm text-gray-600"
                                                                data-oid="z1:ho_0"
                                                            >
                                                                Team-first approach
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                                                        data-oid="koj-zfz"
                                                    >
                                                        <div
                                                            className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center"
                                                            data-oid="0scyodd"
                                                        >
                                                            <span
                                                                className="text-purple-600 text-sm"
                                                                data-oid="0a9i_zq"
                                                            >
                                                                📈
                                                            </span>
                                                        </div>
                                                        <div data-oid="_40n:.1">
                                                            <div
                                                                className="font-medium text-gray-800"
                                                                data-oid="kcixst4"
                                                            >
                                                                Growth
                                                            </div>
                                                            <div
                                                                className="text-sm text-gray-600"
                                                                data-oid="arqda2v"
                                                            >
                                                                Career development
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                                                        data-oid="kqtcw4a"
                                                    >
                                                        <div
                                                            className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center"
                                                            data-oid="-w2rxcx"
                                                        >
                                                            <span
                                                                className="text-orange-600 text-sm"
                                                                data-oid="_6e2u4z"
                                                            >
                                                                ⚖️
                                                            </span>
                                                        </div>
                                                        <div data-oid="bscnpe:">
                                                            <div
                                                                className="font-medium text-gray-800"
                                                                data-oid=".o4_aue"
                                                            >
                                                                Work-Life Balance
                                                            </div>
                                                            <div
                                                                className="text-sm text-gray-600"
                                                                data-oid="3.7we8z"
                                                            >
                                                                Flexible working
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'reviews' && (
                                        <div className="space-y-6" data-oid="u.ql75r">
                                            <div className="text-center py-8" data-oid="kukfomr">
                                                <div className="text-6xl mb-4" data-oid="yio4x:b">
                                                    ⭐
                                                </div>
                                                <h3
                                                    className="text-2xl font-bold text-gray-800 mb-2"
                                                    data-oid="vgeqe4w"
                                                >
                                                    4.2 out of 5
                                                </h3>
                                                <p
                                                    className="text-gray-600 mb-4"
                                                    data-oid="f:6u.zi"
                                                >
                                                    Based on 127 employee reviews
                                                </p>
                                                <div
                                                    className="flex justify-center space-x-1 mb-6"
                                                    data-oid="sf5lnco"
                                                >
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <svg
                                                            key={star}
                                                            className={`h-6 w-6 ${star <= 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                            data-oid=".l.t2a3"
                                                        >
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                                data-oid="f5b2l7e"
                                                            />
                                                        </svg>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="space-y-4" data-oid="0t3v4-4">
                                                {[
                                                    {
                                                        rating: 5,
                                                        title: 'Great place to work!',
                                                        review: 'Amazing work culture and great learning opportunities. The team is very supportive and the projects are challenging.',
                                                        author: 'Software Engineer',
                                                        date: '2 weeks ago',
                                                    },
                                                    {
                                                        rating: 4,
                                                        title: 'Good growth opportunities',
                                                        review: 'The company provides excellent growth opportunities and the work-life balance is decent. Management is approachable.',
                                                        author: 'Frontend Developer',
                                                        date: '1 month ago',
                                                    },
                                                    {
                                                        rating: 4,
                                                        title: 'Innovative environment',
                                                        review: 'Love working here! The company encourages innovation and provides latest tools and technologies to work with.',
                                                        author: 'Product Manager',
                                                        date: '2 months ago',
                                                    },
                                                ].map((review, index) => (
                                                    <div
                                                        key={index}
                                                        className="bg-gray-50 rounded-lg p-4"
                                                        data-oid="kov1vw9"
                                                    >
                                                        <div
                                                            className="flex items-center justify-between mb-2"
                                                            data-oid="3vhjtc8"
                                                        >
                                                            <div
                                                                className="flex items-center space-x-1"
                                                                data-oid="rurh4cu"
                                                            >
                                                                {[1, 2, 3, 4, 5].map((star) => (
                                                                    <svg
                                                                        key={star}
                                                                        className={`h-4 w-4 ${star <= review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                                                        fill="currentColor"
                                                                        viewBox="0 0 20 20"
                                                                        data-oid="ninrf1d"
                                                                    >
                                                                        <path
                                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                                            data-oid="5q2205v"
                                                                        />
                                                                    </svg>
                                                                ))}
                                                            </div>
                                                            <span
                                                                className="text-sm text-gray-500"
                                                                data-oid="exx1k--"
                                                            >
                                                                {review.date}
                                                            </span>
                                                        </div>
                                                        <h4
                                                            className="font-semibold text-gray-800 mb-1"
                                                            data-oid="z5.iwqe"
                                                        >
                                                            {review.title}
                                                        </h4>
                                                        <p
                                                            className="text-gray-600 text-sm mb-2"
                                                            data-oid="ep1sb8t"
                                                        >
                                                            {review.review}
                                                        </p>
                                                        <p
                                                            className="text-xs text-gray-500"
                                                            data-oid="5fk_28a"
                                                        >
                                                            {review.author}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1" data-oid="2r05ic6">
                            <div className="sticky top-24 space-y-6" data-oid="rlk2eah">
                                {/* Apply Card */}
                                <div
                                    className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-gray-200 p-6"
                                    data-oid="xu..4zv"
                                >
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-4"
                                        data-oid="repkbkt"
                                    >
                                        Ready to Apply?
                                    </h3>
                                    <button
                                        onClick={handleApply}
                                        className="w-full px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 mb-4"
                                        data-oid=":v7j3vh"
                                    >
                                        Apply Now
                                    </button>
                                    <div
                                        className="text-sm text-gray-600 space-y-2"
                                        data-oid="u.uyxlm"
                                    >
                                        <div className="flex items-center gap-2" data-oid="-cfktc-">
                                            <svg
                                                className="h-4 w-4 text-green-500"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="esoz0ue"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                    data-oid="lj_zvy5"
                                                />
                                            </svg>
                                            <span data-oid="te4j9:q">
                                                Quick application process
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2" data-oid="7wo:7mu">
                                            <svg
                                                className="h-4 w-4 text-green-500"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="pe71dhl"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                    data-oid="xu_ceqo"
                                                />
                                            </svg>
                                            <span data-oid="4ls87mb">Response within 3-5 days</span>
                                        </div>
                                        <div className="flex items-center gap-2" data-oid="h.l_pf0">
                                            <svg
                                                className="h-4 w-4 text-green-500"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="8fm217d"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                    data-oid="_:3wen5"
                                                />
                                            </svg>
                                            <span data-oid="hy54m4s">Direct contact with HR</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Job Summary */}
                                <div
                                    className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-gray-200 p-6"
                                    data-oid="6.eix8p"
                                >
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-4"
                                        data-oid="5sazszx"
                                    >
                                        Job Summary
                                    </h3>
                                    <div className="space-y-3 text-sm" data-oid="24co7lz">
                                        <div className="flex justify-between" data-oid="9i5p3xc">
                                            <span className="text-gray-600" data-oid="8d1lsc:">
                                                Job Type:
                                            </span>
                                            <span className="font-medium" data-oid="puc87es">
                                                {job.jobType}
                                            </span>
                                        </div>
                                        <div className="flex justify-between" data-oid="_vdux:8">
                                            <span className="text-gray-600" data-oid="r06xja-">
                                                Employment:
                                            </span>
                                            <span className="font-medium" data-oid="yhllyi:">
                                                {job.employmentType}
                                            </span>
                                        </div>
                                        <div className="flex justify-between" data-oid="wvwe9vf">
                                            <span className="text-gray-600" data-oid="6hq7yp8">
                                                Experience:
                                            </span>
                                            <span className="font-medium" data-oid="g__kbqr">
                                                {job.experienceRequired}
                                            </span>
                                        </div>
                                        <div className="flex justify-between" data-oid="ajeu0xs">
                                            <span className="text-gray-600" data-oid="wglm32:">
                                                Salary:
                                            </span>
                                            <span className="font-medium" data-oid="d989wt9">
                                                {job.salary}
                                            </span>
                                        </div>
                                        <div className="flex justify-between" data-oid="j07rz-_">
                                            <span className="text-gray-600" data-oid="juk1261">
                                                Location:
                                            </span>
                                            <span className="font-medium" data-oid="ewltbxy">
                                                {job.location}
                                            </span>
                                        </div>
                                        <div className="flex justify-between" data-oid="jqy5yge">
                                            <span className="text-gray-600" data-oid="yarwsh.">
                                                Remote:
                                            </span>
                                            <span className="font-medium" data-oid="vzc4-:l">
                                                {job.isRemote ? 'Yes' : 'No'}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Similar Jobs */}
                                <div
                                    className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-gray-200 p-6"
                                    data-oid="eg7j-24"
                                >
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-4"
                                        data-oid="9-7l1q9"
                                    >
                                        Similar Jobs
                                    </h3>
                                    <div className="space-y-3" data-oid="_2xy6b3">
                                        {[
                                            {
                                                title: 'React Developer',
                                                company: 'TechCorp',
                                                salary: '₹8-12 LPA',
                                            },
                                            {
                                                title: 'Frontend Engineer',
                                                company: 'StartupXYZ',
                                                salary: '₹6-10 LPA',
                                            },
                                            {
                                                title: 'UI Developer',
                                                company: 'BigTech',
                                                salary: '₹10-15 LPA',
                                            },
                                        ].map((similarJob, index) => (
                                            <div
                                                key={index}
                                                className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                                                data-oid="h_s9-tb"
                                            >
                                                <h4
                                                    className="font-medium text-gray-800 text-sm"
                                                    data-oid="jom72-n"
                                                >
                                                    {similarJob.title}
                                                </h4>
                                                <p
                                                    className="text-xs text-gray-600"
                                                    data-oid="5hso7hc"
                                                >
                                                    {similarJob.company}
                                                </p>
                                                <p
                                                    className="text-xs text-[hsl(196,80%,45%)] font-medium"
                                                    data-oid="1q2rmbp"
                                                >
                                                    {similarJob.salary}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Apply Button */}
                <div className="fixed bottom-6 right-6 z-50 lg:hidden" data-oid="kypgkxm">
                    <button
                        onClick={handleApply}
                        className="px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-full font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-110 shadow-2xl flex items-center gap-2 animate-bounce"
                        data-oid="hl8fn3."
                    >
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="vbzedpe"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                data-oid="jd0jpvy"
                            />
                        </svg>
                        Quick Apply
                    </button>
                </div>
            </div>
        </>
    );
}
