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
                <MainNavbar data-oid="csc-iv3" />
                <div
                    className="min-h-screen bg-gradient-to-b from-[hsl(196,60%,95%)] to-white flex items-center justify-center"
                    data-oid=":3u-gby"
                >
                    <div
                        className="animate-spin rounded-full h-12 w-12 border-b-2 border-[hsl(196,80%,45%)]"
                        data-oid="olj:hwg"
                    ></div>
                </div>
            </>
        );
    }

    if (!job) {
        return (
            <>
                <MainNavbar data-oid="gr_jnlx" />
                <div
                    className="min-h-screen bg-gradient-to-b from-[hsl(196,60%,95%)] to-white flex items-center justify-center"
                    data-oid=".sc63yj"
                >
                    <div className="text-center" data-oid="w9w90l1">
                        <h1 className="text-2xl font-bold text-gray-800 mb-4" data-oid="xzlll.k">
                            Job Not Found
                        </h1>
                        <p className="text-gray-600 mb-6" data-oid="lg00umi">
                            The job you're looking for doesn't exist.
                        </p>
                        <button
                            onClick={() => router.push('/jobs')}
                            className="px-6 py-3 bg-[hsl(196,80%,45%)] text-white rounded-lg hover:bg-[hsl(196,80%,40%)] transition-colors"
                            data-oid="29na:sp"
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
            <MainNavbar data-oid="xh5ilx9" />
            <div
                className="min-h-screen bg-gradient-to-b from-[hsl(196,60%,95%)] to-white"
                data-oid=".9xl4d7"
            >
                {/* Breadcrumb */}
                <div
                    className="bg-white/80 backdrop-blur-sm border-b border-gray-200"
                    data-oid="pc2dl9q"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4" data-oid="e8g28dp">
                        <nav
                            className="flex items-center space-x-2 text-sm text-gray-600"
                            data-oid="6xnbuvz"
                        >
                            <Link
                                href="/jobs"
                                className="hover:text-[hsl(196,80%,45%)] transition-colors"
                                data-oid="n6xjqk2"
                            >
                                Jobs
                            </Link>
                            <span data-oid="jbp583s">›</span>
                            <Link
                                href={`/jobs?company=${job.company}`}
                                className="hover:text-[hsl(196,80%,45%)] transition-colors"
                                data-oid="2g.lit3"
                            >
                                {job.company}
                            </Link>
                            <span data-oid="-96zxnr">›</span>
                            <span className="text-gray-800 font-medium" data-oid="7gp58pu">
                                {job.title}
                            </span>
                        </nav>
                    </div>
                </div>

                {/* Header Section */}
                <div
                    className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white"
                    data-oid=".l18o1f"
                >
                    <div
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
                        data-oid="9ll9_ir"
                    >
                        <div
                            className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8"
                            data-oid="bxeo1yk"
                        >
                            <div className="flex-1" data-oid="skg5gt8">
                                <div className="flex items-center gap-4 mb-4" data-oid="5fngit6">
                                    <div
                                        className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
                                        data-oid="75kmw33"
                                    >
                                        <span
                                            className="text-2xl font-bold text-white"
                                            data-oid=":uln6:d"
                                        >
                                            {job.company.charAt(0)}
                                        </span>
                                    </div>
                                    <div data-oid="pe7xqpa">
                                        <h1
                                            className="text-3xl lg:text-4xl font-bold mb-2"
                                            data-oid="od0zs9k"
                                        >
                                            {job.title}
                                        </h1>
                                        <p className="text-xl text-blue-100" data-oid="_qtc3-z">
                                            {job.company}
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="flex flex-wrap items-center gap-6 text-blue-100 mb-6"
                                    data-oid="44s0h3w"
                                >
                                    <div className="flex items-center gap-2" data-oid="f_v32tc">
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="rxroyhq"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                data-oid="stdow3_"
                                            />

                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                data-oid=":3y1.w3"
                                            />
                                        </svg>
                                        <span data-oid="ae2y-55">{job.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2" data-oid="6df:u14">
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="2axyd6g"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                                                data-oid="_qo83u8"
                                            />
                                        </svg>
                                        <span data-oid="51aby5:">{job.salary}</span>
                                    </div>
                                    <div className="flex items-center gap-2" data-oid="-2pw0ug">
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="tast57h"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                                data-oid="353ezy0"
                                            />
                                        </svg>
                                        <span data-oid="8.s5m5j">{job.experienceRequired}</span>
                                    </div>
                                    <div className="flex items-center gap-2" data-oid="el4iblc">
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="9n5vyli"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="hh-ibgt"
                                            />
                                        </svg>
                                        <span data-oid="-tpk-5r">
                                            Posted {formatDate(job.postedDate)}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3" data-oid=":ki405v">
                                    {job.isUrgent && (
                                        <span
                                            className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full animate-pulse"
                                            data-oid="0hp5qyy"
                                        >
                                            🔥 URGENT HIRING
                                        </span>
                                    )}
                                    {job.isFeatured && (
                                        <span
                                            className="bg-yellow-500 text-white text-sm font-bold px-3 py-1 rounded-full"
                                            data-oid="ig6g5.h"
                                        >
                                            ⭐ FEATURED
                                        </span>
                                    )}
                                    {job.isRemote && (
                                        <span
                                            className="bg-green-500 text-white text-sm font-medium px-3 py-1 rounded-full"
                                            data-oid="vtdwyqm"
                                        >
                                            🏠 Remote
                                        </span>
                                    )}
                                    <span
                                        className="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full"
                                        data-oid="7e:h6ok"
                                    >
                                        {job.jobType}
                                    </span>
                                    <span
                                        className="bg-purple-500 text-white text-sm font-medium px-3 py-1 rounded-full"
                                        data-oid="xou5u2t"
                                    >
                                        {job.employmentType}
                                    </span>
                                </div>
                            </div>

                            <div
                                className="flex flex-col sm:flex-row lg:flex-col gap-4"
                                data-oid=".fd9lly"
                            >
                                <button
                                    onClick={handleApply}
                                    className="px-8 py-4 bg-white text-[hsl(196,80%,45%)] rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                                    data-oid="arndla8"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="dfc8kt1"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                            data-oid=".flxr37"
                                        />
                                    </svg>
                                    Apply Now
                                </button>
                                <div className="flex gap-3" data-oid="8lhukk_">
                                    <button
                                        onClick={handleSave}
                                        className={`p-3 rounded-xl transition-all duration-300 ${
                                            isSaved
                                                ? 'bg-red-500 text-white'
                                                : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
                                        }`}
                                        title={isSaved ? 'Remove from saved' : 'Save job'}
                                        data-oid="f5rugrt"
                                    >
                                        <svg
                                            className="h-6 w-6"
                                            fill={isSaved ? 'currentColor' : 'none'}
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="que-s04"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                data-oid="l3psufv"
                                            />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={handleShare}
                                        className="p-3 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white/30 transition-all duration-300"
                                        title="Share job"
                                        data-oid="hof80_1"
                                    >
                                        <svg
                                            className="h-6 w-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="0x9kakb"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                                                data-oid="h7rgv-8"
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
                    data-oid="qqikdtn"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6" data-oid="b9vl62n">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6" data-oid="k_sppxn">
                            <div className="text-center" data-oid="6g_p-.n">
                                <div
                                    className="text-2xl font-bold text-[hsl(196,80%,45%)]"
                                    data-oid="rb0-g6c"
                                >
                                    {job.applicantCount}
                                </div>
                                <div className="text-sm text-gray-600" data-oid="1uxdd03">
                                    Applicants
                                </div>
                            </div>
                            <div className="text-center" data-oid="-tjcy0f">
                                <div
                                    className="text-2xl font-bold text-green-600"
                                    data-oid="a1ftour"
                                >
                                    {job.companySize}
                                </div>
                                <div className="text-sm text-gray-600" data-oid="uo2uceq">
                                    Company Size
                                </div>
                            </div>
                            <div className="text-center" data-oid="b-77.9y">
                                <div
                                    className="text-2xl font-bold text-purple-600"
                                    data-oid="q8.i47r"
                                >
                                    {job.industry}
                                </div>
                                <div className="text-sm text-gray-600" data-oid="s:tkcta">
                                    Industry
                                </div>
                            </div>
                            <div className="text-center" data-oid="0elhpw2">
                                <div
                                    className="text-2xl font-bold text-orange-600"
                                    data-oid="88-c0cp"
                                >
                                    {Math.max(1, Math.floor(Math.random() * 15))} days
                                </div>
                                <div className="text-sm text-gray-600" data-oid="gdnvdov">
                                    Application Deadline
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-oid="8idz1sn">
                    <div className="grid lg:grid-cols-3 gap-8" data-oid="994.2wc">
                        {/* Main Content */}
                        <div className="lg:col-span-2" data-oid="8-qj5bg">
                            {/* Tabs */}
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-gray-200 mb-8"
                                data-oid="zpaqcv."
                            >
                                <div className="border-b border-gray-200" data-oid="s3jx7mz">
                                    <nav className="flex space-x-8 px-6" data-oid="1lq7p-.">
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
                                                data-oid="zahetvj"
                                            >
                                                {tab.label}
                                            </button>
                                        ))}
                                    </nav>
                                </div>

                                <div className="p-6" data-oid="_sgyuf1">
                                    {activeTab === 'overview' && (
                                        <div className="space-y-6" data-oid="mriyj56">
                                            <div data-oid="eyc1b96">
                                                <h3
                                                    className="text-lg font-semibold text-gray-800 mb-3"
                                                    data-oid="8nn0pwt"
                                                >
                                                    Job Description
                                                </h3>
                                                <div
                                                    className="prose prose-blue max-w-none"
                                                    data-oid="4m0hq_0"
                                                >
                                                    <p
                                                        className="text-gray-600 leading-relaxed mb-4"
                                                        data-oid="wnyevim"
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
                                                        data-oid="o68ourq"
                                                    >
                                                        As a {job.title}, you will be responsible
                                                        for developing and maintaining high-quality
                                                        software solutions, collaborating with
                                                        cross-functional teams, and contributing to
                                                        the overall success of our products.
                                                    </p>
                                                    <p
                                                        className="text-gray-600 leading-relaxed"
                                                        data-oid="egp2ghv"
                                                    >
                                                        Join us in building innovative solutions
                                                        that impact millions of users across India
                                                        and beyond. We offer a collaborative work
                                                        environment, competitive compensation, and
                                                        excellent growth opportunities.
                                                    </p>
                                                </div>
                                            </div>

                                            <div data-oid="656zh89">
                                                <h3
                                                    className="text-lg font-semibold text-gray-800 mb-3"
                                                    data-oid=":onoyws"
                                                >
                                                    Key Responsibilities
                                                </h3>
                                                <ul className="space-y-2" data-oid="ggd.9ik">
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="iwpspmv"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="kx8a9ux"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="jp4v:zw"
                                                        >
                                                            Develop and maintain high-quality
                                                            software applications
                                                        </span>
                                                    </li>
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="lm7yww3"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="15mz7lh"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="urnfq1s"
                                                        >
                                                            Collaborate with cross-functional teams
                                                            to define and implement features
                                                        </span>
                                                    </li>
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="u.3-2rb"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="4313zs1"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="p8a36xw"
                                                        >
                                                            Write clean, maintainable, and efficient
                                                            code
                                                        </span>
                                                    </li>
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="cy8wfti"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="mkgspnv"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="zaclhpq"
                                                        >
                                                            Participate in code reviews and maintain
                                                            coding standards
                                                        </span>
                                                    </li>
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="4rgrlby"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="rqn0_y."
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="xk-z2y:"
                                                        >
                                                            Troubleshoot and debug applications to
                                                            optimize performance
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>

                                            {job.benefits && job.benefits.length > 0 && (
                                                <div data-oid="xk1ajj8">
                                                    <h3
                                                        className="text-lg font-semibold text-gray-800 mb-3"
                                                        data-oid="vu8b5_u"
                                                    >
                                                        Benefits & Perks
                                                    </h3>
                                                    <div
                                                        className="grid grid-cols-1 md:grid-cols-2 gap-3"
                                                        data-oid="5h8j0n2"
                                                    >
                                                        {job.benefits.map((benefit, index) => (
                                                            <div
                                                                key={index}
                                                                className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                                                                data-oid="q8d.5wg"
                                                            >
                                                                <div
                                                                    className="w-2 h-2 bg-green-500 rounded-full"
                                                                    data-oid="rsz_hf1"
                                                                ></div>
                                                                <span
                                                                    className="text-gray-700"
                                                                    data-oid=".o.lqpj"
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
                                        <div className="space-y-6" data-oid="8162l-1">
                                            <div data-oid="wx4a_0b">
                                                <h3
                                                    className="text-lg font-semibold text-gray-800 mb-3"
                                                    data-oid="l2vzdh6"
                                                >
                                                    Required Skills
                                                </h3>
                                                <div
                                                    className="flex flex-wrap gap-2"
                                                    data-oid="a1ec1q-"
                                                >
                                                    {job.skills.map((skill, index) => (
                                                        <span
                                                            key={index}
                                                            className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-2 rounded-full"
                                                            data-oid="wi2-wif"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div data-oid="jpxg8ya">
                                                <h3
                                                    className="text-lg font-semibold text-gray-800 mb-3"
                                                    data-oid="j5djy9f"
                                                >
                                                    Experience & Qualifications
                                                </h3>
                                                <ul className="space-y-3" data-oid="tciuprr">
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="gfbit3h"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="2m3ryw1"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="-5_gd67"
                                                        >
                                                            Experience: {job.experienceRequired}
                                                        </span>
                                                    </li>
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="enym4xj"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="qi4r-l:"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="ygcfljo"
                                                        >
                                                            Bachelor's degree in Computer Science,
                                                            Engineering, or related field
                                                        </span>
                                                    </li>
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="9ive538"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="8z_0ahm"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="-9.e14p"
                                                        >
                                                            Strong problem-solving and analytical
                                                            skills
                                                        </span>
                                                    </li>
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="qp5t.yi"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="l800m1g"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="-ce-0xq"
                                                        >
                                                            Excellent communication and teamwork
                                                            abilities
                                                        </span>
                                                    </li>
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="w9.n5hq"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="_mfy7cc"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="hgf1fn3"
                                                        >
                                                            Passion for learning new technologies
                                                            and best practices
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div data-oid=":aprx:t">
                                                <h3
                                                    className="text-lg font-semibold text-gray-800 mb-3"
                                                    data-oid="gqgm-3f"
                                                >
                                                    Nice to Have Skills
                                                </h3>
                                                <div
                                                    className="flex flex-wrap gap-2"
                                                    data-oid="1f9x_t3"
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
                                                            data-oid="yzyt2t9"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'company' && (
                                        <div className="space-y-6" data-oid="h8u4.sg">
                                            <div data-oid="g8ys8wh">
                                                <h3
                                                    className="text-lg font-semibold text-gray-800 mb-3"
                                                    data-oid="4tcxc-."
                                                >
                                                    About {job.company}
                                                </h3>
                                                <p
                                                    className="text-gray-600 leading-relaxed mb-4"
                                                    data-oid="9:r:i2_"
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
                                                    data-oid="e_o53aj"
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
                                                data-oid="soen4wx"
                                            >
                                                <div
                                                    className="bg-blue-50 p-4 rounded-lg text-center"
                                                    data-oid="5tmafeb"
                                                >
                                                    <div
                                                        className="text-2xl font-bold text-[hsl(196,80%,45%)]"
                                                        data-oid="b2l-x:z"
                                                    >
                                                        {job.companySize}
                                                    </div>
                                                    <div
                                                        className="text-sm text-gray-600"
                                                        data-oid="4qgxf43"
                                                    >
                                                        Employees
                                                    </div>
                                                </div>
                                                <div
                                                    className="bg-green-50 p-4 rounded-lg text-center"
                                                    data-oid="iocwr_9"
                                                >
                                                    <div
                                                        className="text-2xl font-bold text-green-600"
                                                        data-oid="pwsyz82"
                                                    >
                                                        {job.industry}
                                                    </div>
                                                    <div
                                                        className="text-sm text-gray-600"
                                                        data-oid="o1tkv9h"
                                                    >
                                                        Industry
                                                    </div>
                                                </div>
                                                <div
                                                    className="bg-purple-50 p-4 rounded-lg text-center"
                                                    data-oid="cfvg-.s"
                                                >
                                                    <div
                                                        className="text-2xl font-bold text-purple-600"
                                                        data-oid="i7ly2yf"
                                                    >
                                                        {job.companyType}
                                                    </div>
                                                    <div
                                                        className="text-sm text-gray-600"
                                                        data-oid=":-3efbh"
                                                    >
                                                        Company Type
                                                    </div>
                                                </div>
                                            </div>

                                            <div data-oid="0ybjz3p">
                                                <h3
                                                    className="text-lg font-semibold text-gray-800 mb-3"
                                                    data-oid=":jsogiu"
                                                >
                                                    Company Culture
                                                </h3>
                                                <div
                                                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                                    data-oid="ccd9056"
                                                >
                                                    <div
                                                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                                                        data-oid="ate:p9v"
                                                    >
                                                        <div
                                                            className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"
                                                            data-oid="4.5cn7x"
                                                        >
                                                            <span
                                                                className="text-blue-600 text-sm"
                                                                data-oid="j-rwtk5"
                                                            >
                                                                🚀
                                                            </span>
                                                        </div>
                                                        <div data-oid="4z7yo3k">
                                                            <div
                                                                className="font-medium text-gray-800"
                                                                data-oid="knvyryv"
                                                            >
                                                                Innovation
                                                            </div>
                                                            <div
                                                                className="text-sm text-gray-600"
                                                                data-oid=".08lq_p"
                                                            >
                                                                Cutting-edge technology
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                                                        data-oid="qrgf_.7"
                                                    >
                                                        <div
                                                            className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"
                                                            data-oid="5gs_jzr"
                                                        >
                                                            <span
                                                                className="text-green-600 text-sm"
                                                                data-oid="hs:xrc:"
                                                            >
                                                                🤝
                                                            </span>
                                                        </div>
                                                        <div data-oid="cx5vxyh">
                                                            <div
                                                                className="font-medium text-gray-800"
                                                                data-oid="vi.lhmx"
                                                            >
                                                                Collaboration
                                                            </div>
                                                            <div
                                                                className="text-sm text-gray-600"
                                                                data-oid="ryvbe2-"
                                                            >
                                                                Team-first approach
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                                                        data-oid="70zrggb"
                                                    >
                                                        <div
                                                            className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center"
                                                            data-oid="95tb50o"
                                                        >
                                                            <span
                                                                className="text-purple-600 text-sm"
                                                                data-oid="fq36rbo"
                                                            >
                                                                📈
                                                            </span>
                                                        </div>
                                                        <div data-oid="-gz75b5">
                                                            <div
                                                                className="font-medium text-gray-800"
                                                                data-oid="c760nax"
                                                            >
                                                                Growth
                                                            </div>
                                                            <div
                                                                className="text-sm text-gray-600"
                                                                data-oid="q_qhe-2"
                                                            >
                                                                Career development
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                                                        data-oid="gsy7-.k"
                                                    >
                                                        <div
                                                            className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center"
                                                            data-oid="78n9itg"
                                                        >
                                                            <span
                                                                className="text-orange-600 text-sm"
                                                                data-oid="d8-kt6j"
                                                            >
                                                                ⚖️
                                                            </span>
                                                        </div>
                                                        <div data-oid="13jiyy2">
                                                            <div
                                                                className="font-medium text-gray-800"
                                                                data-oid="bw3ytki"
                                                            >
                                                                Work-Life Balance
                                                            </div>
                                                            <div
                                                                className="text-sm text-gray-600"
                                                                data-oid="iu4.02l"
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
                                        <div className="space-y-6" data-oid="zk2cipd">
                                            <div className="text-center py-8" data-oid="us:.o1z">
                                                <div className="text-6xl mb-4" data-oid="r6ob-65">
                                                    ⭐
                                                </div>
                                                <h3
                                                    className="text-2xl font-bold text-gray-800 mb-2"
                                                    data-oid="mx241uj"
                                                >
                                                    4.2 out of 5
                                                </h3>
                                                <p
                                                    className="text-gray-600 mb-4"
                                                    data-oid="_frc81l"
                                                >
                                                    Based on 127 employee reviews
                                                </p>
                                                <div
                                                    className="flex justify-center space-x-1 mb-6"
                                                    data-oid="3-bu.jq"
                                                >
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <svg
                                                            key={star}
                                                            className={`h-6 w-6 ${star <= 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                            data-oid="8x1:4d3"
                                                        >
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                                data-oid="szjff_e"
                                                            />
                                                        </svg>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="space-y-4" data-oid="-789ot8">
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
                                                        data-oid="e4ybxw9"
                                                    >
                                                        <div
                                                            className="flex items-center justify-between mb-2"
                                                            data-oid=":-wedx0"
                                                        >
                                                            <div
                                                                className="flex items-center space-x-1"
                                                                data-oid="xxrphf0"
                                                            >
                                                                {[1, 2, 3, 4, 5].map((star) => (
                                                                    <svg
                                                                        key={star}
                                                                        className={`h-4 w-4 ${star <= review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                                                        fill="currentColor"
                                                                        viewBox="0 0 20 20"
                                                                        data-oid="n7a6i4i"
                                                                    >
                                                                        <path
                                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                                            data-oid="a4_fe2s"
                                                                        />
                                                                    </svg>
                                                                ))}
                                                            </div>
                                                            <span
                                                                className="text-sm text-gray-500"
                                                                data-oid="ukov4c0"
                                                            >
                                                                {review.date}
                                                            </span>
                                                        </div>
                                                        <h4
                                                            className="font-semibold text-gray-800 mb-1"
                                                            data-oid="z7st45f"
                                                        >
                                                            {review.title}
                                                        </h4>
                                                        <p
                                                            className="text-gray-600 text-sm mb-2"
                                                            data-oid="w.lqklh"
                                                        >
                                                            {review.review}
                                                        </p>
                                                        <p
                                                            className="text-xs text-gray-500"
                                                            data-oid="i5.vpip"
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
                        <div className="lg:col-span-1" data-oid="7ihfqs1">
                            <div className="sticky top-24 space-y-6" data-oid="_u7effb">
                                {/* Apply Card */}
                                <div
                                    className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-gray-200 p-6"
                                    data-oid="5-:m027"
                                >
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-4"
                                        data-oid=":nt95za"
                                    >
                                        Ready to Apply?
                                    </h3>
                                    <button
                                        onClick={handleApply}
                                        className="w-full px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 mb-4"
                                        data-oid="21pys7z"
                                    >
                                        Apply Now
                                    </button>
                                    <div
                                        className="text-sm text-gray-600 space-y-2"
                                        data-oid="jktp33_"
                                    >
                                        <div className="flex items-center gap-2" data-oid="ag2yaba">
                                            <svg
                                                className="h-4 w-4 text-green-500"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="wtm5t5c"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                    data-oid="mkqloid"
                                                />
                                            </svg>
                                            <span data-oid="_0:fr5p">
                                                Quick application process
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2" data-oid="b3ujnp2">
                                            <svg
                                                className="h-4 w-4 text-green-500"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid=":7fbj9k"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                    data-oid="asjc.bp"
                                                />
                                            </svg>
                                            <span data-oid="bla0hfv">Response within 3-5 days</span>
                                        </div>
                                        <div className="flex items-center gap-2" data-oid="wnau6t9">
                                            <svg
                                                className="h-4 w-4 text-green-500"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="85.8x-k"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                    data-oid="9cbf7cq"
                                                />
                                            </svg>
                                            <span data-oid="q21upmd">Direct contact with HR</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Job Summary */}
                                <div
                                    className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-gray-200 p-6"
                                    data-oid=":0:c57w"
                                >
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-4"
                                        data-oid="6labg2x"
                                    >
                                        Job Summary
                                    </h3>
                                    <div className="space-y-3 text-sm" data-oid="jrquebm">
                                        <div className="flex justify-between" data-oid="4z.rxc3">
                                            <span className="text-gray-600" data-oid="1042pe9">
                                                Job Type:
                                            </span>
                                            <span className="font-medium" data-oid="i2jboi.">
                                                {job.jobType}
                                            </span>
                                        </div>
                                        <div className="flex justify-between" data-oid="dy.x9io">
                                            <span className="text-gray-600" data-oid="k58tnc4">
                                                Employment:
                                            </span>
                                            <span className="font-medium" data-oid="m9ylt_6">
                                                {job.employmentType}
                                            </span>
                                        </div>
                                        <div className="flex justify-between" data-oid="aozh7i-">
                                            <span className="text-gray-600" data-oid="8k76sag">
                                                Experience:
                                            </span>
                                            <span className="font-medium" data-oid="dn.-_9d">
                                                {job.experienceRequired}
                                            </span>
                                        </div>
                                        <div className="flex justify-between" data-oid="3d0ms78">
                                            <span className="text-gray-600" data-oid="moqutw0">
                                                Salary:
                                            </span>
                                            <span className="font-medium" data-oid="5crs:s2">
                                                {job.salary}
                                            </span>
                                        </div>
                                        <div className="flex justify-between" data-oid="_fec6oj">
                                            <span className="text-gray-600" data-oid="0ju::cv">
                                                Location:
                                            </span>
                                            <span className="font-medium" data-oid="st-7fu4">
                                                {job.location}
                                            </span>
                                        </div>
                                        <div className="flex justify-between" data-oid="9cqdgkn">
                                            <span className="text-gray-600" data-oid="6f63.i6">
                                                Remote:
                                            </span>
                                            <span className="font-medium" data-oid="_2i.x14">
                                                {job.isRemote ? 'Yes' : 'No'}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Similar Jobs */}
                                <div
                                    className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-gray-200 p-6"
                                    data-oid="-2ib3tt"
                                >
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-4"
                                        data-oid="d3l4l93"
                                    >
                                        Similar Jobs
                                    </h3>
                                    <div className="space-y-3" data-oid="1hiq_xj">
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
                                                data-oid="m55agqb"
                                            >
                                                <h4
                                                    className="font-medium text-gray-800 text-sm"
                                                    data-oid="-3v5lrx"
                                                >
                                                    {similarJob.title}
                                                </h4>
                                                <p
                                                    className="text-xs text-gray-600"
                                                    data-oid="bgiedw-"
                                                >
                                                    {similarJob.company}
                                                </p>
                                                <p
                                                    className="text-xs text-[hsl(196,80%,45%)] font-medium"
                                                    data-oid="pz1fqy9"
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
                <div className="fixed bottom-6 right-6 z-50 lg:hidden" data-oid="6aftn-a">
                    <button
                        onClick={handleApply}
                        className="px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-full font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-110 shadow-2xl flex items-center gap-2 animate-bounce"
                        data-oid="vus5hpv"
                    >
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="cik2nmc"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                data-oid="ez81_2t"
                            />
                        </svg>
                        Quick Apply
                    </button>
                </div>
            </div>
        </>
    );
}
