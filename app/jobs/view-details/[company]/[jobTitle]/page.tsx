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
                <MainNavbar data-oid="nkbhs1e" />
                <div
                    className="min-h-screen bg-gradient-to-b from-[hsl(196,60%,95%)] to-white flex items-center justify-center"
                    data-oid="5bj2fnl"
                >
                    <div
                        className="animate-spin rounded-full h-12 w-12 border-b-2 border-[hsl(196,80%,45%)]"
                        data-oid="z_dqhl3"
                    ></div>
                </div>
            </>
        );
    }

    if (!job) {
        return (
            <>
                <MainNavbar data-oid="83ggvqk" />
                <div
                    className="min-h-screen bg-gradient-to-b from-[hsl(196,60%,95%)] to-white flex items-center justify-center"
                    data-oid="g8a-9fm"
                >
                    <div className="text-center" data-oid="p79jgw-">
                        <h1 className="text-2xl font-bold text-gray-800 mb-4" data-oid="rq3g99t">
                            Job Not Found
                        </h1>
                        <p className="text-gray-600 mb-6" data-oid="9691o:x">
                            The job you're looking for doesn't exist.
                        </p>
                        <button
                            onClick={() => router.push('/jobs')}
                            className="px-6 py-3 bg-[hsl(196,80%,45%)] text-white rounded-lg hover:bg-[hsl(196,80%,40%)] transition-colors"
                            data-oid=":ogq7xk"
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
            <MainNavbar data-oid="ydxs6vf" />
            <div
                className="min-h-screen bg-gradient-to-b from-[hsl(196,60%,95%)] to-white"
                data-oid="hjq4jt_"
            >
                {/* Breadcrumb */}
                <div
                    className="bg-white/80 backdrop-blur-sm border-b border-gray-200"
                    data-oid="em5i50k"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4" data-oid="bry60-5">
                        <nav
                            className="flex items-center space-x-2 text-sm text-gray-600"
                            data-oid="ottp25l"
                        >
                            <Link
                                href="/jobs"
                                className="hover:text-[hsl(196,80%,45%)] transition-colors"
                                data-oid="dewx2uc"
                            >
                                Jobs
                            </Link>
                            <span data-oid=".7gbgk3">›</span>
                            <Link
                                href={`/jobs?company=${job.company}`}
                                className="hover:text-[hsl(196,80%,45%)] transition-colors"
                                data-oid="-6-jre9"
                            >
                                {job.company}
                            </Link>
                            <span data-oid="d_cqjzx">›</span>
                            <span className="text-gray-800 font-medium" data-oid="egrs9bu">
                                {job.title}
                            </span>
                        </nav>
                    </div>
                </div>

                {/* Header Section */}
                <div
                    className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white"
                    data-oid="n:3c.x_"
                >
                    <div
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
                        data-oid="2iq7s:j"
                    >
                        <div
                            className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8"
                            data-oid="xuzpeo3"
                        >
                            <div className="flex-1" data-oid="9cmu83h">
                                <div className="flex items-center gap-4 mb-4" data-oid="pmbc_p0">
                                    <div
                                        className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
                                        data-oid=".7_mhwg"
                                    >
                                        <span
                                            className="text-2xl font-bold text-white"
                                            data-oid="-aa4jrh"
                                        >
                                            {job.company.charAt(0)}
                                        </span>
                                    </div>
                                    <div data-oid="ec9.9_3">
                                        <h1
                                            className="text-3xl lg:text-4xl font-bold mb-2"
                                            data-oid="l2eyts_"
                                        >
                                            {job.title}
                                        </h1>
                                        <p className="text-xl text-blue-100" data-oid="qw6m2gz">
                                            {job.company}
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="flex flex-wrap items-center gap-6 text-blue-100 mb-6"
                                    data-oid="-r.vy7."
                                >
                                    <div className="flex items-center gap-2" data-oid="2u-1-:x">
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="eahx1gy"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                data-oid="0cdzfn5"
                                            />

                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                data-oid="ag4-q3."
                                            />
                                        </svg>
                                        <span data-oid="5j1v8rj">{job.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2" data-oid="xwnkti0">
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="9lbq7de"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                                                data-oid="0ydzelx"
                                            />
                                        </svg>
                                        <span data-oid="7r4dnma">{job.salary}</span>
                                    </div>
                                    <div className="flex items-center gap-2" data-oid="zzu-q00">
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="gr5jdze"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                                data-oid="zo68e3z"
                                            />
                                        </svg>
                                        <span data-oid="mjc2lar">{job.experienceRequired}</span>
                                    </div>
                                    <div className="flex items-center gap-2" data-oid="xtwv7ci">
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="rg4lbu7"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid=".3.a47c"
                                            />
                                        </svg>
                                        <span data-oid="3iaxtpe">
                                            Posted {formatDate(job.postedDate)}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3" data-oid="umw_.89">
                                    {job.isUrgent && (
                                        <span
                                            className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full animate-pulse"
                                            data-oid="_ufj9ec"
                                        >
                                            🔥 URGENT HIRING
                                        </span>
                                    )}
                                    {job.isFeatured && (
                                        <span
                                            className="bg-yellow-500 text-white text-sm font-bold px-3 py-1 rounded-full"
                                            data-oid="sq2_.4y"
                                        >
                                            ⭐ FEATURED
                                        </span>
                                    )}
                                    {job.isRemote && (
                                        <span
                                            className="bg-green-500 text-white text-sm font-medium px-3 py-1 rounded-full"
                                            data-oid="2:ikspq"
                                        >
                                            🏠 Remote
                                        </span>
                                    )}
                                    <span
                                        className="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full"
                                        data-oid="7yit7y9"
                                    >
                                        {job.jobType}
                                    </span>
                                    <span
                                        className="bg-purple-500 text-white text-sm font-medium px-3 py-1 rounded-full"
                                        data-oid="2ylfolq"
                                    >
                                        {job.employmentType}
                                    </span>
                                </div>
                            </div>

                            <div
                                className="flex flex-col sm:flex-row lg:flex-col gap-4"
                                data-oid="-7l2.rw"
                            >
                                <button
                                    onClick={handleApply}
                                    className="px-8 py-4 bg-white text-[hsl(196,80%,45%)] rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                                    data-oid="391qj3r"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="1udg0j:"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                            data-oid="a-d7aeh"
                                        />
                                    </svg>
                                    Apply Now
                                </button>
                                <div className="flex gap-3" data-oid="y:x00js">
                                    <button
                                        onClick={handleSave}
                                        className={`p-3 rounded-xl transition-all duration-300 ${
                                            isSaved
                                                ? 'bg-red-500 text-white'
                                                : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
                                        }`}
                                        title={isSaved ? 'Remove from saved' : 'Save job'}
                                        data-oid="7pw2tuw"
                                    >
                                        <svg
                                            className="h-6 w-6"
                                            fill={isSaved ? 'currentColor' : 'none'}
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="o3vwhii"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                data-oid=".rn__:3"
                                            />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={handleShare}
                                        className="p-3 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white/30 transition-all duration-300"
                                        title="Share job"
                                        data-oid="vaqo-7m"
                                    >
                                        <svg
                                            className="h-6 w-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="f40nqyh"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                                                data-oid="n4h7bwf"
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
                    data-oid="kh2ds.j"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6" data-oid="2c0v70l">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6" data-oid="k0nm601">
                            <div className="text-center" data-oid="c5us1gw">
                                <div
                                    className="text-2xl font-bold text-[hsl(196,80%,45%)]"
                                    data-oid="h6_.ksi"
                                >
                                    {job.applicantCount}
                                </div>
                                <div className="text-sm text-gray-600" data-oid="6tk9k1u">
                                    Applicants
                                </div>
                            </div>
                            <div className="text-center" data-oid="9l72:-j">
                                <div
                                    className="text-2xl font-bold text-green-600"
                                    data-oid="qwtzbum"
                                >
                                    {job.companySize}
                                </div>
                                <div className="text-sm text-gray-600" data-oid="ar8g99o">
                                    Company Size
                                </div>
                            </div>
                            <div className="text-center" data-oid="8nvhr7e">
                                <div
                                    className="text-2xl font-bold text-purple-600"
                                    data-oid="of:ixed"
                                >
                                    {job.industry}
                                </div>
                                <div className="text-sm text-gray-600" data-oid="1omgqae">
                                    Industry
                                </div>
                            </div>
                            <div className="text-center" data-oid="yfrktqp">
                                <div
                                    className="text-2xl font-bold text-orange-600"
                                    data-oid="xg2do-b"
                                >
                                    {Math.max(1, Math.floor(Math.random() * 15))} days
                                </div>
                                <div className="text-sm text-gray-600" data-oid="nep7ts_">
                                    Application Deadline
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-oid="t6j7px_">
                    <div className="grid lg:grid-cols-3 gap-8" data-oid="y.5qcwc">
                        {/* Main Content */}
                        <div className="lg:col-span-2" data-oid="sl1_._l">
                            {/* Tabs */}
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-gray-200 mb-8"
                                data-oid="6lw9-68"
                            >
                                <div className="border-b border-gray-200" data-oid="70ao4n9">
                                    <nav className="flex space-x-8 px-6" data-oid="siea87_">
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
                                                data-oid="et5iqjm"
                                            >
                                                {tab.label}
                                            </button>
                                        ))}
                                    </nav>
                                </div>

                                <div className="p-6" data-oid="k8_6ntz">
                                    {activeTab === 'overview' && (
                                        <div className="space-y-6" data-oid="4v6g_dg">
                                            <div data-oid="dv0qmpd">
                                                <h3
                                                    className="text-lg font-semibold text-gray-800 mb-3"
                                                    data-oid="oc7vh4y"
                                                >
                                                    Job Description
                                                </h3>
                                                <div
                                                    className="prose prose-blue max-w-none"
                                                    data-oid="1eenzh0"
                                                >
                                                    <p
                                                        className="text-gray-600 leading-relaxed mb-4"
                                                        data-oid=":8bj2z0"
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
                                                        data-oid="ba_9.fr"
                                                    >
                                                        As a {job.title}, you will be responsible
                                                        for developing and maintaining high-quality
                                                        software solutions, collaborating with
                                                        cross-functional teams, and contributing to
                                                        the overall success of our products.
                                                    </p>
                                                    <p
                                                        className="text-gray-600 leading-relaxed"
                                                        data-oid="04y6o-q"
                                                    >
                                                        Join us in building innovative solutions
                                                        that impact millions of users across India
                                                        and beyond. We offer a collaborative work
                                                        environment, competitive compensation, and
                                                        excellent growth opportunities.
                                                    </p>
                                                </div>
                                            </div>

                                            <div data-oid="bi7on1n">
                                                <h3
                                                    className="text-lg font-semibold text-gray-800 mb-3"
                                                    data-oid="c4rf7ur"
                                                >
                                                    Key Responsibilities
                                                </h3>
                                                <ul className="space-y-2" data-oid="ycajeg8">
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="h3:ztb8"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="hmrg65:"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="1ly6s41"
                                                        >
                                                            Develop and maintain high-quality
                                                            software applications
                                                        </span>
                                                    </li>
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="in:2kte"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="ojv92pl"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="94-adhb"
                                                        >
                                                            Collaborate with cross-functional teams
                                                            to define and implement features
                                                        </span>
                                                    </li>
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="su.65xk"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="mqg0.7k"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="kwqwcwd"
                                                        >
                                                            Write clean, maintainable, and efficient
                                                            code
                                                        </span>
                                                    </li>
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="rnhivmy"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="llq5iwn"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="y:pb2kz"
                                                        >
                                                            Participate in code reviews and maintain
                                                            coding standards
                                                        </span>
                                                    </li>
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="ggijwp8"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="c0p1rwp"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid=":76lic6"
                                                        >
                                                            Troubleshoot and debug applications to
                                                            optimize performance
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>

                                            {job.benefits && job.benefits.length > 0 && (
                                                <div data-oid="rh7i-s_">
                                                    <h3
                                                        className="text-lg font-semibold text-gray-800 mb-3"
                                                        data-oid="k5j7rdf"
                                                    >
                                                        Benefits & Perks
                                                    </h3>
                                                    <div
                                                        className="grid grid-cols-1 md:grid-cols-2 gap-3"
                                                        data-oid="pulzgp8"
                                                    >
                                                        {job.benefits.map((benefit, index) => (
                                                            <div
                                                                key={index}
                                                                className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                                                                data-oid="iqjau.g"
                                                            >
                                                                <div
                                                                    className="w-2 h-2 bg-green-500 rounded-full"
                                                                    data-oid="76y-pgy"
                                                                ></div>
                                                                <span
                                                                    className="text-gray-700"
                                                                    data-oid="og4qn05"
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
                                        <div className="space-y-6" data-oid="nppxvkj">
                                            <div data-oid="3g62xf0">
                                                <h3
                                                    className="text-lg font-semibold text-gray-800 mb-3"
                                                    data-oid="y7cjcti"
                                                >
                                                    Required Skills
                                                </h3>
                                                <div
                                                    className="flex flex-wrap gap-2"
                                                    data-oid="v9aeb4i"
                                                >
                                                    {job.skills.map((skill, index) => (
                                                        <span
                                                            key={index}
                                                            className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-2 rounded-full"
                                                            data-oid="v7zv5y0"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div data-oid="42wnymc">
                                                <h3
                                                    className="text-lg font-semibold text-gray-800 mb-3"
                                                    data-oid="ju8s7aq"
                                                >
                                                    Experience & Qualifications
                                                </h3>
                                                <ul className="space-y-3" data-oid="-pj.6:u">
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="ppy30tx"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="e5uzb.f"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="k9n4amg"
                                                        >
                                                            Experience: {job.experienceRequired}
                                                        </span>
                                                    </li>
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="7yko.yh"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="1yc_k_o"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="skoob81"
                                                        >
                                                            Bachelor's degree in Computer Science,
                                                            Engineering, or related field
                                                        </span>
                                                    </li>
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="mwn85fy"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="-bv-xf8"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="-uwy5gl"
                                                        >
                                                            Strong problem-solving and analytical
                                                            skills
                                                        </span>
                                                    </li>
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="8ohii11"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="bds_gzl"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="ggjkpo-"
                                                        >
                                                            Excellent communication and teamwork
                                                            abilities
                                                        </span>
                                                    </li>
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="u31sk7d"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid=".n7lb5u"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="v23p21-"
                                                        >
                                                            Passion for learning new technologies
                                                            and best practices
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div data-oid="vacj-sa">
                                                <h3
                                                    className="text-lg font-semibold text-gray-800 mb-3"
                                                    data-oid="d1mxb:o"
                                                >
                                                    Nice to Have Skills
                                                </h3>
                                                <div
                                                    className="flex flex-wrap gap-2"
                                                    data-oid="m.za0k5"
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
                                                            data-oid="0log3cc"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'company' && (
                                        <div className="space-y-6" data-oid="x.y_-:r">
                                            <div data-oid="5s9g3hk">
                                                <h3
                                                    className="text-lg font-semibold text-gray-800 mb-3"
                                                    data-oid="147zyb3"
                                                >
                                                    About {job.company}
                                                </h3>
                                                <p
                                                    className="text-gray-600 leading-relaxed mb-4"
                                                    data-oid="y71222."
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
                                                    data-oid="q:8m.7x"
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
                                                data-oid=":mk8uzp"
                                            >
                                                <div
                                                    className="bg-blue-50 p-4 rounded-lg text-center"
                                                    data-oid="j3nc6o_"
                                                >
                                                    <div
                                                        className="text-2xl font-bold text-[hsl(196,80%,45%)]"
                                                        data-oid="dz7p.w-"
                                                    >
                                                        {job.companySize}
                                                    </div>
                                                    <div
                                                        className="text-sm text-gray-600"
                                                        data-oid="n05y_ip"
                                                    >
                                                        Employees
                                                    </div>
                                                </div>
                                                <div
                                                    className="bg-green-50 p-4 rounded-lg text-center"
                                                    data-oid="i2c8vlt"
                                                >
                                                    <div
                                                        className="text-2xl font-bold text-green-600"
                                                        data-oid="s4kll3c"
                                                    >
                                                        {job.industry}
                                                    </div>
                                                    <div
                                                        className="text-sm text-gray-600"
                                                        data-oid="4_8j.jb"
                                                    >
                                                        Industry
                                                    </div>
                                                </div>
                                                <div
                                                    className="bg-purple-50 p-4 rounded-lg text-center"
                                                    data-oid="-ayzmt0"
                                                >
                                                    <div
                                                        className="text-2xl font-bold text-purple-600"
                                                        data-oid="1tx61ms"
                                                    >
                                                        {job.companyType}
                                                    </div>
                                                    <div
                                                        className="text-sm text-gray-600"
                                                        data-oid="q_wi62o"
                                                    >
                                                        Company Type
                                                    </div>
                                                </div>
                                            </div>

                                            <div data-oid="3h1vvl1">
                                                <h3
                                                    className="text-lg font-semibold text-gray-800 mb-3"
                                                    data-oid="5ui-iif"
                                                >
                                                    Company Culture
                                                </h3>
                                                <div
                                                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                                    data-oid="ri5-ceq"
                                                >
                                                    <div
                                                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                                                        data-oid="h9gs_37"
                                                    >
                                                        <div
                                                            className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"
                                                            data-oid="jf3fbqc"
                                                        >
                                                            <span
                                                                className="text-blue-600 text-sm"
                                                                data-oid="jfqss4."
                                                            >
                                                                🚀
                                                            </span>
                                                        </div>
                                                        <div data-oid="a7z-6hm">
                                                            <div
                                                                className="font-medium text-gray-800"
                                                                data-oid="1pdwvs6"
                                                            >
                                                                Innovation
                                                            </div>
                                                            <div
                                                                className="text-sm text-gray-600"
                                                                data-oid="dy2y:hb"
                                                            >
                                                                Cutting-edge technology
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                                                        data-oid="zodhcf4"
                                                    >
                                                        <div
                                                            className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"
                                                            data-oid="46ssaz7"
                                                        >
                                                            <span
                                                                className="text-green-600 text-sm"
                                                                data-oid="2sa26tv"
                                                            >
                                                                🤝
                                                            </span>
                                                        </div>
                                                        <div data-oid="aoq4wsi">
                                                            <div
                                                                className="font-medium text-gray-800"
                                                                data-oid="d6z33sr"
                                                            >
                                                                Collaboration
                                                            </div>
                                                            <div
                                                                className="text-sm text-gray-600"
                                                                data-oid="jrnsfeo"
                                                            >
                                                                Team-first approach
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                                                        data-oid="pmh2qk2"
                                                    >
                                                        <div
                                                            className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center"
                                                            data-oid="wury94e"
                                                        >
                                                            <span
                                                                className="text-purple-600 text-sm"
                                                                data-oid="dvmdpej"
                                                            >
                                                                📈
                                                            </span>
                                                        </div>
                                                        <div data-oid="t4jkgbt">
                                                            <div
                                                                className="font-medium text-gray-800"
                                                                data-oid="2tqxr-5"
                                                            >
                                                                Growth
                                                            </div>
                                                            <div
                                                                className="text-sm text-gray-600"
                                                                data-oid="y2fdsa9"
                                                            >
                                                                Career development
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                                                        data-oid="nb9j0il"
                                                    >
                                                        <div
                                                            className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center"
                                                            data-oid="7-megmu"
                                                        >
                                                            <span
                                                                className="text-orange-600 text-sm"
                                                                data-oid="zmxc5ic"
                                                            >
                                                                ⚖️
                                                            </span>
                                                        </div>
                                                        <div data-oid="8gpkivf">
                                                            <div
                                                                className="font-medium text-gray-800"
                                                                data-oid="pr08:tm"
                                                            >
                                                                Work-Life Balance
                                                            </div>
                                                            <div
                                                                className="text-sm text-gray-600"
                                                                data-oid="3san9g9"
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
                                        <div className="space-y-6" data-oid="og.x:5r">
                                            <div className="text-center py-8" data-oid="1b1qmis">
                                                <div className="text-6xl mb-4" data-oid="drd_xd_">
                                                    ⭐
                                                </div>
                                                <h3
                                                    className="text-2xl font-bold text-gray-800 mb-2"
                                                    data-oid="3.0c8h4"
                                                >
                                                    4.2 out of 5
                                                </h3>
                                                <p
                                                    className="text-gray-600 mb-4"
                                                    data-oid="uossgon"
                                                >
                                                    Based on 127 employee reviews
                                                </p>
                                                <div
                                                    className="flex justify-center space-x-1 mb-6"
                                                    data-oid=".a::t0t"
                                                >
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <svg
                                                            key={star}
                                                            className={`h-6 w-6 ${star <= 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                            data-oid="40hzd9o"
                                                        >
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                                data-oid="-c3pngb"
                                                            />
                                                        </svg>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="space-y-4" data-oid="v-r8wh-">
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
                                                        data-oid="rjephyk"
                                                    >
                                                        <div
                                                            className="flex items-center justify-between mb-2"
                                                            data-oid="rv4elnp"
                                                        >
                                                            <div
                                                                className="flex items-center space-x-1"
                                                                data-oid="6ogy2za"
                                                            >
                                                                {[1, 2, 3, 4, 5].map((star) => (
                                                                    <svg
                                                                        key={star}
                                                                        className={`h-4 w-4 ${star <= review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                                                        fill="currentColor"
                                                                        viewBox="0 0 20 20"
                                                                        data-oid="97m_y8d"
                                                                    >
                                                                        <path
                                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                                            data-oid="1qp2ulf"
                                                                        />
                                                                    </svg>
                                                                ))}
                                                            </div>
                                                            <span
                                                                className="text-sm text-gray-500"
                                                                data-oid="n5wla1f"
                                                            >
                                                                {review.date}
                                                            </span>
                                                        </div>
                                                        <h4
                                                            className="font-semibold text-gray-800 mb-1"
                                                            data-oid="ps0xpjs"
                                                        >
                                                            {review.title}
                                                        </h4>
                                                        <p
                                                            className="text-gray-600 text-sm mb-2"
                                                            data-oid="47-kcbg"
                                                        >
                                                            {review.review}
                                                        </p>
                                                        <p
                                                            className="text-xs text-gray-500"
                                                            data-oid="vku:f9m"
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
                        <div className="lg:col-span-1" data-oid="7nv8a0h">
                            <div className="sticky top-24 space-y-6" data-oid="9d9483l">
                                {/* Apply Card */}
                                <div
                                    className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-gray-200 p-6"
                                    data-oid="i8mg:yy"
                                >
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-4"
                                        data-oid="qi.cvla"
                                    >
                                        Ready to Apply?
                                    </h3>
                                    <button
                                        onClick={handleApply}
                                        className="w-full px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 mb-4"
                                        data-oid="_xu0xmx"
                                    >
                                        Apply Now
                                    </button>
                                    <div
                                        className="text-sm text-gray-600 space-y-2"
                                        data-oid="g6:-w33"
                                    >
                                        <div className="flex items-center gap-2" data-oid="d:ycilg">
                                            <svg
                                                className="h-4 w-4 text-green-500"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="zf6wxoo"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                    data-oid="4b7.hpr"
                                                />
                                            </svg>
                                            <span data-oid="-bt1:9u">
                                                Quick application process
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2" data-oid="jz.-d7v">
                                            <svg
                                                className="h-4 w-4 text-green-500"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="10.7oer"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                    data-oid="w:l.gdo"
                                                />
                                            </svg>
                                            <span data-oid="oa6wm30">Response within 3-5 days</span>
                                        </div>
                                        <div className="flex items-center gap-2" data-oid="p_1x-jk">
                                            <svg
                                                className="h-4 w-4 text-green-500"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="72fskat"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                    data-oid="69ezs.x"
                                                />
                                            </svg>
                                            <span data-oid="5hiku7h">Direct contact with HR</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Job Summary */}
                                <div
                                    className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-gray-200 p-6"
                                    data-oid=":qx14o_"
                                >
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-4"
                                        data-oid="mi1yvdg"
                                    >
                                        Job Summary
                                    </h3>
                                    <div className="space-y-3 text-sm" data-oid="w6pjjs8">
                                        <div className="flex justify-between" data-oid="nioj7u:">
                                            <span className="text-gray-600" data-oid="1xs-pr-">
                                                Job Type:
                                            </span>
                                            <span className="font-medium" data-oid="hh89uam">
                                                {job.jobType}
                                            </span>
                                        </div>
                                        <div className="flex justify-between" data-oid="ia.fsij">
                                            <span className="text-gray-600" data-oid="mnb9fxk">
                                                Employment:
                                            </span>
                                            <span className="font-medium" data-oid="0wj9eo2">
                                                {job.employmentType}
                                            </span>
                                        </div>
                                        <div className="flex justify-between" data-oid="e44--g:">
                                            <span className="text-gray-600" data-oid=".j55piy">
                                                Experience:
                                            </span>
                                            <span className="font-medium" data-oid="hn97lau">
                                                {job.experienceRequired}
                                            </span>
                                        </div>
                                        <div className="flex justify-between" data-oid="920s06i">
                                            <span className="text-gray-600" data-oid="swjud98">
                                                Salary:
                                            </span>
                                            <span className="font-medium" data-oid="jn0q_pu">
                                                {job.salary}
                                            </span>
                                        </div>
                                        <div className="flex justify-between" data-oid="-woq7_v">
                                            <span className="text-gray-600" data-oid="euis4po">
                                                Location:
                                            </span>
                                            <span className="font-medium" data-oid="9v0zbqe">
                                                {job.location}
                                            </span>
                                        </div>
                                        <div className="flex justify-between" data-oid="b2d5wu.">
                                            <span className="text-gray-600" data-oid="ob_-0-y">
                                                Remote:
                                            </span>
                                            <span className="font-medium" data-oid="t2.636n">
                                                {job.isRemote ? 'Yes' : 'No'}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Similar Jobs */}
                                <div
                                    className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-gray-200 p-6"
                                    data-oid="o8rz.51"
                                >
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-4"
                                        data-oid="f1m:28x"
                                    >
                                        Similar Jobs
                                    </h3>
                                    <div className="space-y-3" data-oid="c-8ju98">
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
                                                data-oid="fjmqpoy"
                                            >
                                                <h4
                                                    className="font-medium text-gray-800 text-sm"
                                                    data-oid="sdyemjs"
                                                >
                                                    {similarJob.title}
                                                </h4>
                                                <p
                                                    className="text-xs text-gray-600"
                                                    data-oid="q0vka.d"
                                                >
                                                    {similarJob.company}
                                                </p>
                                                <p
                                                    className="text-xs text-[hsl(196,80%,45%)] font-medium"
                                                    data-oid="jhatim7"
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
                <div className="fixed bottom-6 right-6 z-50 lg:hidden" data-oid="i7pzqep">
                    <button
                        onClick={handleApply}
                        className="px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-full font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-110 shadow-2xl flex items-center gap-2 animate-bounce"
                        data-oid="q3zcow5"
                    >
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="ny4_tus"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                data-oid="dymv921"
                            />
                        </svg>
                        Quick Apply
                    </button>
                </div>
            </div>
        </>
    );
}
