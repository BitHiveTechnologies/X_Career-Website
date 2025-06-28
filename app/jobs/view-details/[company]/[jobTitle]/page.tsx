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
                <MainNavbar data-oid="wlvogf2" />
                <div
                    className="min-h-screen bg-gradient-to-b from-[hsl(196,60%,95%)] to-white flex items-center justify-center"
                    data-oid="23ny5k6"
                >
                    <div
                        className="animate-spin rounded-full h-12 w-12 border-b-2 border-[hsl(196,80%,45%)]"
                        data-oid="-ey2cq7"
                    ></div>
                </div>
            </>
        );
    }

    if (!job) {
        return (
            <>
                <MainNavbar data-oid="2dps0t9" />
                <div
                    className="min-h-screen bg-gradient-to-b from-[hsl(196,60%,95%)] to-white flex items-center justify-center"
                    data-oid=".unxkse"
                >
                    <div className="text-center" data-oid="g-s:d:y">
                        <h1 className="text-2xl font-bold text-gray-800 mb-4" data-oid="x07g6._">
                            Job Not Found
                        </h1>
                        <p className="text-gray-600 mb-6" data-oid="lquv5_t">
                            The job you're looking for doesn't exist.
                        </p>
                        <button
                            onClick={() => router.push('/jobs')}
                            className="px-6 py-3 bg-[hsl(196,80%,45%)] text-white rounded-lg hover:bg-[hsl(196,80%,40%)] transition-colors"
                            data-oid="ac8njx7"
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
            <MainNavbar data-oid="7zj-m8o" />
            <div
                className="min-h-screen bg-gradient-to-b from-[hsl(196,60%,95%)] to-white"
                data-oid="hc39cvk"
            >
                {/* Breadcrumb */}
                <div
                    className="bg-white/80 backdrop-blur-sm border-b border-gray-200"
                    data-oid="oc_r8px"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4" data-oid="se6ssnn">
                        <nav
                            className="flex items-center space-x-2 text-sm text-gray-600"
                            data-oid="yfccea2"
                        >
                            <Link
                                href="/jobs"
                                className="hover:text-[hsl(196,80%,45%)] transition-colors"
                                data-oid="-w3ty8m"
                            >
                                Jobs
                            </Link>
                            <span data-oid="82_rnhw">›</span>
                            <Link
                                href={`/jobs?company=${job.company}`}
                                className="hover:text-[hsl(196,80%,45%)] transition-colors"
                                data-oid="mhm43yd"
                            >
                                {job.company}
                            </Link>
                            <span data-oid="my-5lym">›</span>
                            <span className="text-gray-800 font-medium" data-oid="r7y:_pe">
                                {job.title}
                            </span>
                        </nav>
                    </div>
                </div>

                {/* Header Section */}
                <div
                    className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white"
                    data-oid="q_y9wxn"
                >
                    <div
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
                        data-oid="_mqsrc0"
                    >
                        <div
                            className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8"
                            data-oid="x-trrx5"
                        >
                            <div className="flex-1" data-oid="gvjcyyc">
                                <div className="flex items-center gap-4 mb-4" data-oid="legllqz">
                                    <div
                                        className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
                                        data-oid="ho0h:1u"
                                    >
                                        <span
                                            className="text-2xl font-bold text-white"
                                            data-oid="ie:v7we"
                                        >
                                            {job.company.charAt(0)}
                                        </span>
                                    </div>
                                    <div data-oid="6-df8va">
                                        <h1
                                            className="text-3xl lg:text-4xl font-bold mb-2"
                                            data-oid=":xlxlwt"
                                        >
                                            {job.title}
                                        </h1>
                                        <p className="text-xl text-blue-100" data-oid="uwzc:zc">
                                            {job.company}
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="flex flex-wrap items-center gap-6 text-blue-100 mb-6"
                                    data-oid="9l3yqcj"
                                >
                                    <div className="flex items-center gap-2" data-oid=".03pdxn">
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="lg4nw36"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                data-oid="maqx9z2"
                                            />

                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                data-oid=".laka.-"
                                            />
                                        </svg>
                                        <span data-oid="rh.m59e">{job.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2" data-oid="ltn2vc0">
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="sepx2cz"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                                                data-oid="ya8lx.0"
                                            />
                                        </svg>
                                        <span data-oid="ajamuyg">{job.salary}</span>
                                    </div>
                                    <div className="flex items-center gap-2" data-oid="9ezm._z">
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="bpswb46"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                                data-oid="gkgdhcc"
                                            />
                                        </svg>
                                        <span data-oid="6gme6:9">{job.experienceRequired}</span>
                                    </div>
                                    <div className="flex items-center gap-2" data-oid="y09ixsg">
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="mzhn:rq"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid=":ck4ugc"
                                            />
                                        </svg>
                                        <span data-oid=".2f9mk6">
                                            Posted {formatDate(job.postedDate)}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3" data-oid="y7u-7cq">
                                    {job.isUrgent && (
                                        <span
                                            className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full animate-pulse"
                                            data-oid="ncrryhb"
                                        >
                                            🔥 URGENT HIRING
                                        </span>
                                    )}
                                    {job.isFeatured && (
                                        <span
                                            className="bg-yellow-500 text-white text-sm font-bold px-3 py-1 rounded-full"
                                            data-oid="yy23q5u"
                                        >
                                            ⭐ FEATURED
                                        </span>
                                    )}
                                    {job.isRemote && (
                                        <span
                                            className="bg-green-500 text-white text-sm font-medium px-3 py-1 rounded-full"
                                            data-oid="rc7lk3s"
                                        >
                                            🏠 Remote
                                        </span>
                                    )}
                                    <span
                                        className="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full"
                                        data-oid="lr5lzoa"
                                    >
                                        {job.jobType}
                                    </span>
                                    <span
                                        className="bg-purple-500 text-white text-sm font-medium px-3 py-1 rounded-full"
                                        data-oid="gi1kn1."
                                    >
                                        {job.employmentType}
                                    </span>
                                </div>
                            </div>

                            <div
                                className="flex flex-col sm:flex-row lg:flex-col gap-4"
                                data-oid="ihe.vup"
                            >
                                <button
                                    onClick={handleApply}
                                    className="px-8 py-4 bg-white text-[hsl(196,80%,45%)] rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                                    data-oid="i93pce."
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="an_dk9s"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                            data-oid="1.7qmon"
                                        />
                                    </svg>
                                    Apply Now
                                </button>
                                <div className="flex gap-3" data-oid="q4c0o_0">
                                    <button
                                        onClick={handleSave}
                                        className={`p-3 rounded-xl transition-all duration-300 ${
                                            isSaved
                                                ? 'bg-red-500 text-white'
                                                : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
                                        }`}
                                        title={isSaved ? 'Remove from saved' : 'Save job'}
                                        data-oid="-dhz74a"
                                    >
                                        <svg
                                            className="h-6 w-6"
                                            fill={isSaved ? 'currentColor' : 'none'}
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="is_6we7"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                data-oid="xtce1ew"
                                            />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={handleShare}
                                        className="p-3 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white/30 transition-all duration-300"
                                        title="Share job"
                                        data-oid="n9kwrcn"
                                    >
                                        <svg
                                            className="h-6 w-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="wi2rbk-"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                                                data-oid="jmwb_7_"
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
                    data-oid="vkw3xnx"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6" data-oid="uxs4_hd">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6" data-oid=".yq71n.">
                            <div className="text-center" data-oid="tt9ctu.">
                                <div
                                    className="text-2xl font-bold text-[hsl(196,80%,45%)]"
                                    data-oid="ixo287_"
                                >
                                    {job.applicantCount}
                                </div>
                                <div className="text-sm text-gray-600" data-oid="x0xs.-v">
                                    Applicants
                                </div>
                            </div>
                            <div className="text-center" data-oid="i7628tg">
                                <div
                                    className="text-2xl font-bold text-green-600"
                                    data-oid="vyerrm:"
                                >
                                    {job.companySize}
                                </div>
                                <div className="text-sm text-gray-600" data-oid="g8azk3k">
                                    Company Size
                                </div>
                            </div>
                            <div className="text-center" data-oid="7.gz8nh">
                                <div
                                    className="text-2xl font-bold text-purple-600"
                                    data-oid="jeqslsa"
                                >
                                    {job.industry}
                                </div>
                                <div className="text-sm text-gray-600" data-oid="fmafi6l">
                                    Industry
                                </div>
                            </div>
                            <div className="text-center" data-oid="il38u-5">
                                <div
                                    className="text-2xl font-bold text-orange-600"
                                    data-oid="amcv:83"
                                >
                                    {Math.max(1, Math.floor(Math.random() * 15))} days
                                </div>
                                <div className="text-sm text-gray-600" data-oid="qj4fg8n">
                                    Application Deadline
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-oid="-u1_ykf">
                    <div className="grid lg:grid-cols-3 gap-8" data-oid="0.11py5">
                        {/* Main Content */}
                        <div className="lg:col-span-2" data-oid="gww0-a:">
                            {/* Tabs */}
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-gray-200 mb-8"
                                data-oid="_v5mx73"
                            >
                                <div className="border-b border-gray-200" data-oid="q9_6xde">
                                    <nav className="flex space-x-8 px-6" data-oid="igbphd-">
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
                                                data-oid="qmgj7xq"
                                            >
                                                {tab.label}
                                            </button>
                                        ))}
                                    </nav>
                                </div>

                                <div className="p-6" data-oid="bs:ofwf">
                                    {activeTab === 'overview' && (
                                        <div className="space-y-6" data-oid="jhoqva6">
                                            <div data-oid="n.u23ek">
                                                <h3
                                                    className="text-lg font-semibold text-gray-800 mb-3"
                                                    data-oid="-w07_bb"
                                                >
                                                    Job Description
                                                </h3>
                                                <div
                                                    className="prose prose-blue max-w-none"
                                                    data-oid="fm2djdv"
                                                >
                                                    <p
                                                        className="text-gray-600 leading-relaxed mb-4"
                                                        data-oid="fsxhbrp"
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
                                                        data-oid="xylp8cs"
                                                    >
                                                        As a {job.title}, you will be responsible
                                                        for developing and maintaining high-quality
                                                        software solutions, collaborating with
                                                        cross-functional teams, and contributing to
                                                        the overall success of our products.
                                                    </p>
                                                    <p
                                                        className="text-gray-600 leading-relaxed"
                                                        data-oid="p2xf.e."
                                                    >
                                                        Join us in building innovative solutions
                                                        that impact millions of users across India
                                                        and beyond. We offer a collaborative work
                                                        environment, competitive compensation, and
                                                        excellent growth opportunities.
                                                    </p>
                                                </div>
                                            </div>

                                            <div data-oid="c_s0ke8">
                                                <h3
                                                    className="text-lg font-semibold text-gray-800 mb-3"
                                                    data-oid="lqcvng."
                                                >
                                                    Key Responsibilities
                                                </h3>
                                                <ul className="space-y-2" data-oid="asf3r5i">
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="aqwocfr"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="aswfyh4"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid=".xyy6x3"
                                                        >
                                                            Develop and maintain high-quality
                                                            software applications
                                                        </span>
                                                    </li>
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="6zlhven"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="q25nuhw"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="moljmr1"
                                                        >
                                                            Collaborate with cross-functional teams
                                                            to define and implement features
                                                        </span>
                                                    </li>
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="9c.0ncl"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="952n9dq"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="ss2gdje"
                                                        >
                                                            Write clean, maintainable, and efficient
                                                            code
                                                        </span>
                                                    </li>
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="dk4prcf"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="yz3zlts"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="8n2qfkh"
                                                        >
                                                            Participate in code reviews and maintain
                                                            coding standards
                                                        </span>
                                                    </li>
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="o17m6zt"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="iz9ajui"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="0fnkxk_"
                                                        >
                                                            Troubleshoot and debug applications to
                                                            optimize performance
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>

                                            {job.benefits && job.benefits.length > 0 && (
                                                <div data-oid="irpc64m">
                                                    <h3
                                                        className="text-lg font-semibold text-gray-800 mb-3"
                                                        data-oid="otv:b1w"
                                                    >
                                                        Benefits & Perks
                                                    </h3>
                                                    <div
                                                        className="grid grid-cols-1 md:grid-cols-2 gap-3"
                                                        data-oid="ord_l3c"
                                                    >
                                                        {job.benefits.map((benefit, index) => (
                                                            <div
                                                                key={index}
                                                                className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                                                                data-oid="7_6w0as"
                                                            >
                                                                <div
                                                                    className="w-2 h-2 bg-green-500 rounded-full"
                                                                    data-oid="4zrmlpb"
                                                                ></div>
                                                                <span
                                                                    className="text-gray-700"
                                                                    data-oid="x-9123m"
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
                                        <div className="space-y-6" data-oid="j399seh">
                                            <div data-oid="xzn7alj">
                                                <h3
                                                    className="text-lg font-semibold text-gray-800 mb-3"
                                                    data-oid="adt.r08"
                                                >
                                                    Required Skills
                                                </h3>
                                                <div
                                                    className="flex flex-wrap gap-2"
                                                    data-oid="ql393fv"
                                                >
                                                    {job.skills.map((skill, index) => (
                                                        <span
                                                            key={index}
                                                            className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-2 rounded-full"
                                                            data-oid="cenv8us"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div data-oid="br40:2s">
                                                <h3
                                                    className="text-lg font-semibold text-gray-800 mb-3"
                                                    data-oid="vt-ijn6"
                                                >
                                                    Experience & Qualifications
                                                </h3>
                                                <ul className="space-y-3" data-oid=":c__mbj">
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="1y0ffwz"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="cq__ng."
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="7id28ap"
                                                        >
                                                            Experience: {job.experienceRequired}
                                                        </span>
                                                    </li>
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="5f_5wdm"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="lbt0mt."
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="lppvw4m"
                                                        >
                                                            Bachelor's degree in Computer Science,
                                                            Engineering, or related field
                                                        </span>
                                                    </li>
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid=".s014-a"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="o8laz3e"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="kd.hpq5"
                                                        >
                                                            Strong problem-solving and analytical
                                                            skills
                                                        </span>
                                                    </li>
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="ne75cqx"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="30u3o8f"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="y5wia5a"
                                                        >
                                                            Excellent communication and teamwork
                                                            abilities
                                                        </span>
                                                    </li>
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="p_cqfai"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="v3zj4-9"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="ji0ityj"
                                                        >
                                                            Passion for learning new technologies
                                                            and best practices
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div data-oid="fly3qzk">
                                                <h3
                                                    className="text-lg font-semibold text-gray-800 mb-3"
                                                    data-oid="djq3oha"
                                                >
                                                    Nice to Have Skills
                                                </h3>
                                                <div
                                                    className="flex flex-wrap gap-2"
                                                    data-oid=":ih89rv"
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
                                                            data-oid="2a1tx:y"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'company' && (
                                        <div className="space-y-6" data-oid="iibosa9">
                                            <div data-oid="g3u-1bm">
                                                <h3
                                                    className="text-lg font-semibold text-gray-800 mb-3"
                                                    data-oid="0w9vjbw"
                                                >
                                                    About {job.company}
                                                </h3>
                                                <p
                                                    className="text-gray-600 leading-relaxed mb-4"
                                                    data-oid="sywx1tj"
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
                                                    data-oid="0j2xomw"
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
                                                data-oid="k__9m4f"
                                            >
                                                <div
                                                    className="bg-blue-50 p-4 rounded-lg text-center"
                                                    data-oid="g_b-82v"
                                                >
                                                    <div
                                                        className="text-2xl font-bold text-[hsl(196,80%,45%)]"
                                                        data-oid="iovmk0p"
                                                    >
                                                        {job.companySize}
                                                    </div>
                                                    <div
                                                        className="text-sm text-gray-600"
                                                        data-oid="6596b-o"
                                                    >
                                                        Employees
                                                    </div>
                                                </div>
                                                <div
                                                    className="bg-green-50 p-4 rounded-lg text-center"
                                                    data-oid="nrf:uwj"
                                                >
                                                    <div
                                                        className="text-2xl font-bold text-green-600"
                                                        data-oid="xq7-onc"
                                                    >
                                                        {job.industry}
                                                    </div>
                                                    <div
                                                        className="text-sm text-gray-600"
                                                        data-oid="4lk1jv0"
                                                    >
                                                        Industry
                                                    </div>
                                                </div>
                                                <div
                                                    className="bg-purple-50 p-4 rounded-lg text-center"
                                                    data-oid="bl9t4aw"
                                                >
                                                    <div
                                                        className="text-2xl font-bold text-purple-600"
                                                        data-oid="_c85wu4"
                                                    >
                                                        {job.companyType}
                                                    </div>
                                                    <div
                                                        className="text-sm text-gray-600"
                                                        data-oid="jq2aezi"
                                                    >
                                                        Company Type
                                                    </div>
                                                </div>
                                            </div>

                                            <div data-oid="nvkjawb">
                                                <h3
                                                    className="text-lg font-semibold text-gray-800 mb-3"
                                                    data-oid="cjxu6gi"
                                                >
                                                    Company Culture
                                                </h3>
                                                <div
                                                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                                    data-oid="uquv5j-"
                                                >
                                                    <div
                                                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                                                        data-oid=".w9143y"
                                                    >
                                                        <div
                                                            className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"
                                                            data-oid="ejd59ol"
                                                        >
                                                            <span
                                                                className="text-blue-600 text-sm"
                                                                data-oid="4e2gybc"
                                                            >
                                                                🚀
                                                            </span>
                                                        </div>
                                                        <div data-oid="uip2noy">
                                                            <div
                                                                className="font-medium text-gray-800"
                                                                data-oid="4ehk-9i"
                                                            >
                                                                Innovation
                                                            </div>
                                                            <div
                                                                className="text-sm text-gray-600"
                                                                data-oid="zmv9rms"
                                                            >
                                                                Cutting-edge technology
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                                                        data-oid="xgjtquh"
                                                    >
                                                        <div
                                                            className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"
                                                            data-oid="tychhrj"
                                                        >
                                                            <span
                                                                className="text-green-600 text-sm"
                                                                data-oid="v_gopcp"
                                                            >
                                                                🤝
                                                            </span>
                                                        </div>
                                                        <div data-oid="1jude_r">
                                                            <div
                                                                className="font-medium text-gray-800"
                                                                data-oid="z9:w3xq"
                                                            >
                                                                Collaboration
                                                            </div>
                                                            <div
                                                                className="text-sm text-gray-600"
                                                                data-oid="m96_x7p"
                                                            >
                                                                Team-first approach
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                                                        data-oid="25_nve6"
                                                    >
                                                        <div
                                                            className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center"
                                                            data-oid="rnytvaf"
                                                        >
                                                            <span
                                                                className="text-purple-600 text-sm"
                                                                data-oid="ydo02.a"
                                                            >
                                                                📈
                                                            </span>
                                                        </div>
                                                        <div data-oid="u.94rjk">
                                                            <div
                                                                className="font-medium text-gray-800"
                                                                data-oid="i_bvsdu"
                                                            >
                                                                Growth
                                                            </div>
                                                            <div
                                                                className="text-sm text-gray-600"
                                                                data-oid="826chei"
                                                            >
                                                                Career development
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                                                        data-oid="bm20np7"
                                                    >
                                                        <div
                                                            className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center"
                                                            data-oid="9asi8to"
                                                        >
                                                            <span
                                                                className="text-orange-600 text-sm"
                                                                data-oid="19evahp"
                                                            >
                                                                ⚖️
                                                            </span>
                                                        </div>
                                                        <div data-oid=".9i4wlq">
                                                            <div
                                                                className="font-medium text-gray-800"
                                                                data-oid="6zaewgk"
                                                            >
                                                                Work-Life Balance
                                                            </div>
                                                            <div
                                                                className="text-sm text-gray-600"
                                                                data-oid="5w.-f2o"
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
                                        <div className="space-y-6" data-oid="2x1z_xy">
                                            <div className="text-center py-8" data-oid="2vx_wqr">
                                                <div className="text-6xl mb-4" data-oid="oua.4us">
                                                    ⭐
                                                </div>
                                                <h3
                                                    className="text-2xl font-bold text-gray-800 mb-2"
                                                    data-oid="ixbpnbt"
                                                >
                                                    4.2 out of 5
                                                </h3>
                                                <p
                                                    className="text-gray-600 mb-4"
                                                    data-oid="lkl-dib"
                                                >
                                                    Based on 127 employee reviews
                                                </p>
                                                <div
                                                    className="flex justify-center space-x-1 mb-6"
                                                    data-oid="jh7qtxt"
                                                >
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <svg
                                                            key={star}
                                                            className={`h-6 w-6 ${star <= 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                            data-oid="961cpdw"
                                                        >
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                                data-oid="un.sblv"
                                                            />
                                                        </svg>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="space-y-4" data-oid="cawp9c7">
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
                                                        data-oid="zn4:8av"
                                                    >
                                                        <div
                                                            className="flex items-center justify-between mb-2"
                                                            data-oid="_3yns-q"
                                                        >
                                                            <div
                                                                className="flex items-center space-x-1"
                                                                data-oid="m:9gx3."
                                                            >
                                                                {[1, 2, 3, 4, 5].map((star) => (
                                                                    <svg
                                                                        key={star}
                                                                        className={`h-4 w-4 ${star <= review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                                                        fill="currentColor"
                                                                        viewBox="0 0 20 20"
                                                                        data-oid="b9oes8h"
                                                                    >
                                                                        <path
                                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                                            data-oid="5fhtb5x"
                                                                        />
                                                                    </svg>
                                                                ))}
                                                            </div>
                                                            <span
                                                                className="text-sm text-gray-500"
                                                                data-oid="8b.213i"
                                                            >
                                                                {review.date}
                                                            </span>
                                                        </div>
                                                        <h4
                                                            className="font-semibold text-gray-800 mb-1"
                                                            data-oid="_ksbz4r"
                                                        >
                                                            {review.title}
                                                        </h4>
                                                        <p
                                                            className="text-gray-600 text-sm mb-2"
                                                            data-oid="f.tzl6a"
                                                        >
                                                            {review.review}
                                                        </p>
                                                        <p
                                                            className="text-xs text-gray-500"
                                                            data-oid="fi1342_"
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
                        <div className="lg:col-span-1" data-oid="w-0vkdq">
                            <div className="sticky top-24 space-y-6" data-oid="4aj-:yx">
                                {/* Apply Card */}
                                <div
                                    className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-gray-200 p-6"
                                    data-oid="2.j3ms1"
                                >
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-4"
                                        data-oid="ii-_:jt"
                                    >
                                        Ready to Apply?
                                    </h3>
                                    <button
                                        onClick={handleApply}
                                        className="w-full px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 mb-4"
                                        data-oid="o.-l1ur"
                                    >
                                        Apply Now
                                    </button>
                                    <div
                                        className="text-sm text-gray-600 space-y-2"
                                        data-oid="_qhc9jb"
                                    >
                                        <div className="flex items-center gap-2" data-oid="4owqhaq">
                                            <svg
                                                className="h-4 w-4 text-green-500"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="8:xts7e"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                    data-oid="yu4rai4"
                                                />
                                            </svg>
                                            <span data-oid="_p_2z6r">
                                                Quick application process
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2" data-oid="4r8a8is">
                                            <svg
                                                className="h-4 w-4 text-green-500"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="nej2ukw"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                    data-oid="ecbyis:"
                                                />
                                            </svg>
                                            <span data-oid="xf3fero">Response within 3-5 days</span>
                                        </div>
                                        <div className="flex items-center gap-2" data-oid="-o2xep6">
                                            <svg
                                                className="h-4 w-4 text-green-500"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="sagcnf_"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                    data-oid="mmm5_v0"
                                                />
                                            </svg>
                                            <span data-oid="-onf7dz">Direct contact with HR</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Job Summary */}
                                <div
                                    className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-gray-200 p-6"
                                    data-oid="7dmbu-8"
                                >
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-4"
                                        data-oid="trtnm2-"
                                    >
                                        Job Summary
                                    </h3>
                                    <div className="space-y-3 text-sm" data-oid="ipcems0">
                                        <div className="flex justify-between" data-oid="0fxzo_l">
                                            <span className="text-gray-600" data-oid="pvik:3b">
                                                Job Type:
                                            </span>
                                            <span className="font-medium" data-oid="wd69.b5">
                                                {job.jobType}
                                            </span>
                                        </div>
                                        <div className="flex justify-between" data-oid="dgps1s-">
                                            <span className="text-gray-600" data-oid="-j_o.hn">
                                                Employment:
                                            </span>
                                            <span className="font-medium" data-oid="z:j01h1">
                                                {job.employmentType}
                                            </span>
                                        </div>
                                        <div className="flex justify-between" data-oid="_ndv26e">
                                            <span className="text-gray-600" data-oid="h3hb.d2">
                                                Experience:
                                            </span>
                                            <span className="font-medium" data-oid="vdqmp3b">
                                                {job.experienceRequired}
                                            </span>
                                        </div>
                                        <div className="flex justify-between" data-oid="kpqrj:4">
                                            <span className="text-gray-600" data-oid="a-62eiz">
                                                Salary:
                                            </span>
                                            <span className="font-medium" data-oid="aiytwe2">
                                                {job.salary}
                                            </span>
                                        </div>
                                        <div className="flex justify-between" data-oid="3c198vb">
                                            <span className="text-gray-600" data-oid="-ypuz.j">
                                                Location:
                                            </span>
                                            <span className="font-medium" data-oid="s9jcjzs">
                                                {job.location}
                                            </span>
                                        </div>
                                        <div className="flex justify-between" data-oid="0do_u6w">
                                            <span className="text-gray-600" data-oid="00zy7cp">
                                                Remote:
                                            </span>
                                            <span className="font-medium" data-oid="clkojk9">
                                                {job.isRemote ? 'Yes' : 'No'}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Similar Jobs */}
                                <div
                                    className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-gray-200 p-6"
                                    data-oid="es_t92x"
                                >
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-4"
                                        data-oid="cevyoq9"
                                    >
                                        Similar Jobs
                                    </h3>
                                    <div className="space-y-3" data-oid="qcw0s7s">
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
                                                data-oid="3_oypf:"
                                            >
                                                <h4
                                                    className="font-medium text-gray-800 text-sm"
                                                    data-oid="9_ud:ps"
                                                >
                                                    {similarJob.title}
                                                </h4>
                                                <p
                                                    className="text-xs text-gray-600"
                                                    data-oid="w.j3.ny"
                                                >
                                                    {similarJob.company}
                                                </p>
                                                <p
                                                    className="text-xs text-[hsl(196,80%,45%)] font-medium"
                                                    data-oid="s024:7s"
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
                <div className="fixed bottom-6 right-6 z-50 lg:hidden" data-oid="wpceeim">
                    <button
                        onClick={handleApply}
                        className="px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-full font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-110 shadow-2xl flex items-center gap-2 animate-bounce"
                        data-oid="9e8u3hq"
                    >
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="93ay2ep"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                data-oid="5dk1-:v"
                            />
                        </svg>
                        Quick Apply
                    </button>
                </div>
            </div>
        </>
    );
}
