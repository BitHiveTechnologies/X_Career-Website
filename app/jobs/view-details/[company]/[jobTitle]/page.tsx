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
                <MainNavbar data-oid="q0.p8he" />
                <div
                    className="min-h-screen bg-gradient-to-b from-[hsl(196,60%,95%)] to-white flex items-center justify-center"
                    data-oid="qw6pe1k"
                >
                    <div
                        className="animate-spin rounded-full h-12 w-12 border-b-2 border-[hsl(196,80%,45%)]"
                        data-oid="vf8fwpg"
                    ></div>
                </div>
            </>
        );
    }

    if (!job) {
        return (
            <>
                <MainNavbar data-oid="48iyq4m" />
                <div
                    className="min-h-screen bg-gradient-to-b from-[hsl(196,60%,95%)] to-white flex items-center justify-center"
                    data-oid="_62zfnv"
                >
                    <div className="text-center" data-oid="slsp.p8">
                        <h1 className="text-2xl font-bold text-gray-800 mb-4" data-oid="74vls7y">
                            Job Not Found
                        </h1>
                        <p className="text-gray-600 mb-6" data-oid="r569jh1">
                            The job you're looking for doesn't exist.
                        </p>
                        <button
                            onClick={() => router.push('/jobs')}
                            className="px-6 py-3 bg-[hsl(196,80%,45%)] text-white rounded-lg hover:bg-[hsl(196,80%,40%)] transition-colors"
                            data-oid="ybnq_oo"
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
            <MainNavbar data-oid="zka6eko" />
            <div
                className="min-h-screen bg-gradient-to-b from-[hsl(196,60%,95%)] to-white"
                data-oid="r0kc0o."
            >
                {/* Breadcrumb */}
                <div
                    className="bg-white/80 backdrop-blur-sm border-b border-gray-200"
                    data-oid="fs:i:-a"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4" data-oid="bl_p_3f">
                        <nav
                            className="flex items-center space-x-2 text-sm text-gray-600"
                            data-oid="jjlktw9"
                        >
                            <Link
                                href="/jobs"
                                className="hover:text-[hsl(196,80%,45%)] transition-colors"
                                data-oid="4lapbi1"
                            >
                                Jobs
                            </Link>
                            <span data-oid="68h-_ax">›</span>
                            <Link
                                href={`/jobs?company=${job.company}`}
                                className="hover:text-[hsl(196,80%,45%)] transition-colors"
                                data-oid="2jm6-b8"
                            >
                                {job.company}
                            </Link>
                            <span data-oid="6jy-23:">›</span>
                            <span className="text-gray-800 font-medium" data-oid="ooepche">
                                {job.title}
                            </span>
                        </nav>
                    </div>
                </div>

                {/* Header Section */}
                <div
                    className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white"
                    data-oid="3l54:cm"
                >
                    <div
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
                        data-oid="gt:3.-y"
                    >
                        <div
                            className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8"
                            data-oid="0joty3p"
                        >
                            <div className="flex-1" data-oid="z9q85i3">
                                <div className="flex items-center gap-4 mb-4" data-oid="r-cv6q5">
                                    <div
                                        className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
                                        data-oid="6ub-lmc"
                                    >
                                        <span
                                            className="text-2xl font-bold text-white"
                                            data-oid="p4b-t2v"
                                        >
                                            {job.company.charAt(0)}
                                        </span>
                                    </div>
                                    <div data-oid="x645e-d">
                                        <h1
                                            className="text-3xl lg:text-4xl font-bold mb-2"
                                            data-oid="uc4cxs9"
                                        >
                                            {job.title}
                                        </h1>
                                        <p className="text-xl text-blue-100" data-oid="kbur--z">
                                            {job.company}
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="flex flex-wrap items-center gap-6 text-blue-100 mb-6"
                                    data-oid="cs3_xpc"
                                >
                                    <div className="flex items-center gap-2" data-oid="ga7n_mg">
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="sul68_2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                data-oid="szyqroq"
                                            />

                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                data-oid="8g586zu"
                                            />
                                        </svg>
                                        <span data-oid="gjwmr3j">{job.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2" data-oid="-kbedy7">
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="u_p2ogj"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                                                data-oid="aevzab_"
                                            />
                                        </svg>
                                        <span data-oid="_nbu5s2">{job.salary}</span>
                                    </div>
                                    <div className="flex items-center gap-2" data-oid="7qkht7r">
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="kqn:rn_"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                                data-oid="4in0oec"
                                            />
                                        </svg>
                                        <span data-oid="yn5nf2a">{job.experienceRequired}</span>
                                    </div>
                                    <div className="flex items-center gap-2" data-oid="7baq6bm">
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="dx3giye"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="ed-3s.0"
                                            />
                                        </svg>
                                        <span data-oid="-b0t9nq">
                                            Posted {formatDate(job.postedDate)}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3" data-oid="lf2ipr1">
                                    {job.isUrgent && (
                                        <span
                                            className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full animate-pulse"
                                            data-oid="wbdm75f"
                                        >
                                            🔥 URGENT HIRING
                                        </span>
                                    )}
                                    {job.isFeatured && (
                                        <span
                                            className="bg-yellow-500 text-white text-sm font-bold px-3 py-1 rounded-full"
                                            data-oid=".rf233a"
                                        >
                                            ⭐ FEATURED
                                        </span>
                                    )}
                                    {job.isRemote && (
                                        <span
                                            className="bg-green-500 text-white text-sm font-medium px-3 py-1 rounded-full"
                                            data-oid="8n7h7w3"
                                        >
                                            🏠 Remote
                                        </span>
                                    )}
                                    <span
                                        className="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full"
                                        data-oid="t_nczyr"
                                    >
                                        {job.jobType}
                                    </span>
                                    <span
                                        className="bg-purple-500 text-white text-sm font-medium px-3 py-1 rounded-full"
                                        data-oid="feorws:"
                                    >
                                        {job.employmentType}
                                    </span>
                                </div>
                            </div>

                            <div
                                className="flex flex-col sm:flex-row lg:flex-col gap-4"
                                data-oid="y-fz2y:"
                            >
                                <button
                                    onClick={handleApply}
                                    className="px-8 py-4 bg-white text-[hsl(196,80%,45%)] rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                                    data-oid="spkn6cc"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="x2ghwoo"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                            data-oid="iyjmmkg"
                                        />
                                    </svg>
                                    Apply Now
                                </button>
                                <div className="flex gap-3" data-oid="6wixq.g">
                                    <button
                                        onClick={handleSave}
                                        className={`p-3 rounded-xl transition-all duration-300 ${
                                            isSaved
                                                ? 'bg-red-500 text-white'
                                                : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
                                        }`}
                                        title={isSaved ? 'Remove from saved' : 'Save job'}
                                        data-oid="z9h.-xa"
                                    >
                                        <svg
                                            className="h-6 w-6"
                                            fill={isSaved ? 'currentColor' : 'none'}
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="mvngte9"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                data-oid="h-5zx_."
                                            />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={handleShare}
                                        className="p-3 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white/30 transition-all duration-300"
                                        title="Share job"
                                        data-oid="6mndool"
                                    >
                                        <svg
                                            className="h-6 w-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="4221s.s"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                                                data-oid="05w:h2n"
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
                    data-oid="2vo-la1"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6" data-oid="dqptlap">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6" data-oid="ae7w:oz">
                            <div className="text-center" data-oid="gl_:yjp">
                                <div
                                    className="text-2xl font-bold text-[hsl(196,80%,45%)]"
                                    data-oid="so5mo3v"
                                >
                                    {job.applicantCount}
                                </div>
                                <div className="text-sm text-gray-600" data-oid="my9rq6u">
                                    Applicants
                                </div>
                            </div>
                            <div className="text-center" data-oid="2_f0zwb">
                                <div
                                    className="text-2xl font-bold text-green-600"
                                    data-oid=":zopp28"
                                >
                                    {job.companySize}
                                </div>
                                <div className="text-sm text-gray-600" data-oid=".o6ijmd">
                                    Company Size
                                </div>
                            </div>
                            <div className="text-center" data-oid="7ml1pj9">
                                <div
                                    className="text-2xl font-bold text-purple-600"
                                    data-oid="0k8idj2"
                                >
                                    {job.industry}
                                </div>
                                <div className="text-sm text-gray-600" data-oid="80::1dr">
                                    Industry
                                </div>
                            </div>
                            <div className="text-center" data-oid="4ilpt_0">
                                <div
                                    className="text-2xl font-bold text-orange-600"
                                    data-oid="b3gm10x"
                                >
                                    {Math.max(1, Math.floor(Math.random() * 15))} days
                                </div>
                                <div className="text-sm text-gray-600" data-oid="jjrvbxs">
                                    Application Deadline
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-oid="qk:smri">
                    <div className="grid lg:grid-cols-3 gap-8" data-oid="2sseymh">
                        {/* Main Content */}
                        <div className="lg:col-span-2" data-oid="gd124sj">
                            {/* Tabs */}
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-gray-200 mb-8"
                                data-oid="kk42i5l"
                            >
                                <div className="border-b border-gray-200" data-oid="dnzi1v_">
                                    <nav className="flex space-x-8 px-6" data-oid="3_sgs8x">
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
                                                data-oid="6lsl62f"
                                            >
                                                {tab.label}
                                            </button>
                                        ))}
                                    </nav>
                                </div>

                                <div className="p-6" data-oid="kc8gt0y">
                                    {activeTab === 'overview' && (
                                        <div className="space-y-6" data-oid="8r502gz">
                                            <div data-oid="frrtu:o">
                                                <h3
                                                    className="text-lg font-semibold text-gray-800 mb-3"
                                                    data-oid="jp9tqxp"
                                                >
                                                    Job Description
                                                </h3>
                                                <div
                                                    className="prose prose-blue max-w-none"
                                                    data-oid="ck0h.87"
                                                >
                                                    <p
                                                        className="text-gray-600 leading-relaxed mb-4"
                                                        data-oid="bztbqwl"
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
                                                        data-oid="gzcje8p"
                                                    >
                                                        As a {job.title}, you will be responsible
                                                        for developing and maintaining high-quality
                                                        software solutions, collaborating with
                                                        cross-functional teams, and contributing to
                                                        the overall success of our products.
                                                    </p>
                                                    <p
                                                        className="text-gray-600 leading-relaxed"
                                                        data-oid="5kgcfqs"
                                                    >
                                                        Join us in building innovative solutions
                                                        that impact millions of users across India
                                                        and beyond. We offer a collaborative work
                                                        environment, competitive compensation, and
                                                        excellent growth opportunities.
                                                    </p>
                                                </div>
                                            </div>

                                            <div data-oid="8s:ge5c">
                                                <h3
                                                    className="text-lg font-semibold text-gray-800 mb-3"
                                                    data-oid="0mfz.p5"
                                                >
                                                    Key Responsibilities
                                                </h3>
                                                <ul className="space-y-2" data-oid="8op7to6">
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="_.g1viw"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="mz.t38j"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="bfiwyd1"
                                                        >
                                                            Develop and maintain high-quality
                                                            software applications
                                                        </span>
                                                    </li>
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="3v6ck3g"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="egzwrmr"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid=".ra_o5i"
                                                        >
                                                            Collaborate with cross-functional teams
                                                            to define and implement features
                                                        </span>
                                                    </li>
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="7t8rm9s"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="japy1:w"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="lv2jjl."
                                                        >
                                                            Write clean, maintainable, and efficient
                                                            code
                                                        </span>
                                                    </li>
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="owz3nf9"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="vbwvs7b"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="1ykfoi3"
                                                        >
                                                            Participate in code reviews and maintain
                                                            coding standards
                                                        </span>
                                                    </li>
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="-vbunpe"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="kh7rklb"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="07ykuzg"
                                                        >
                                                            Troubleshoot and debug applications to
                                                            optimize performance
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>

                                            {job.benefits && job.benefits.length > 0 && (
                                                <div data-oid="5kxj9ge">
                                                    <h3
                                                        className="text-lg font-semibold text-gray-800 mb-3"
                                                        data-oid="2yug0:w"
                                                    >
                                                        Benefits & Perks
                                                    </h3>
                                                    <div
                                                        className="grid grid-cols-1 md:grid-cols-2 gap-3"
                                                        data-oid="bi1pnnz"
                                                    >
                                                        {job.benefits.map((benefit, index) => (
                                                            <div
                                                                key={index}
                                                                className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                                                                data-oid="kw0._vy"
                                                            >
                                                                <div
                                                                    className="w-2 h-2 bg-green-500 rounded-full"
                                                                    data-oid="kj8tx91"
                                                                ></div>
                                                                <span
                                                                    className="text-gray-700"
                                                                    data-oid="q9f961d"
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
                                        <div className="space-y-6" data-oid="td.ytus">
                                            <div data-oid="2vral5:">
                                                <h3
                                                    className="text-lg font-semibold text-gray-800 mb-3"
                                                    data-oid="etyf07z"
                                                >
                                                    Required Skills
                                                </h3>
                                                <div
                                                    className="flex flex-wrap gap-2"
                                                    data-oid="y-f-le0"
                                                >
                                                    {job.skills.map((skill, index) => (
                                                        <span
                                                            key={index}
                                                            className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-2 rounded-full"
                                                            data-oid="7f6qjhj"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div data-oid="s8z_w3f">
                                                <h3
                                                    className="text-lg font-semibold text-gray-800 mb-3"
                                                    data-oid="gw8g733"
                                                >
                                                    Experience & Qualifications
                                                </h3>
                                                <ul className="space-y-3" data-oid="79kklay">
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="nl.7sbs"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid=".pt6sid"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="y5amx_v"
                                                        >
                                                            Experience: {job.experienceRequired}
                                                        </span>
                                                    </li>
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="w46y_k7"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="flkpi0u"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="3vg-byo"
                                                        >
                                                            Bachelor's degree in Computer Science,
                                                            Engineering, or related field
                                                        </span>
                                                    </li>
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="_1t:0na"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="8k9hjfv"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="qh3ws90"
                                                        >
                                                            Strong problem-solving and analytical
                                                            skills
                                                        </span>
                                                    </li>
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="eq2486a"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="s4:2yws"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid=":101.6c"
                                                        >
                                                            Excellent communication and teamwork
                                                            abilities
                                                        </span>
                                                    </li>
                                                    <li
                                                        className="flex items-start gap-3"
                                                        data-oid="z1f70om"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                            data-oid="45bt24v"
                                                        ></div>
                                                        <span
                                                            className="text-gray-700"
                                                            data-oid="dgm.8fd"
                                                        >
                                                            Passion for learning new technologies
                                                            and best practices
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div data-oid="q_r7z8.">
                                                <h3
                                                    className="text-lg font-semibold text-gray-800 mb-3"
                                                    data-oid="zn2uz4p"
                                                >
                                                    Nice to Have Skills
                                                </h3>
                                                <div
                                                    className="flex flex-wrap gap-2"
                                                    data-oid="kq8p._p"
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
                                                            data-oid="ndsv-6y"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'company' && (
                                        <div className="space-y-6" data-oid="hx.a:1.">
                                            <div data-oid="78m3yq8">
                                                <h3
                                                    className="text-lg font-semibold text-gray-800 mb-3"
                                                    data-oid="zx2z2g6"
                                                >
                                                    About {job.company}
                                                </h3>
                                                <p
                                                    className="text-gray-600 leading-relaxed mb-4"
                                                    data-oid="ldgf77i"
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
                                                    data-oid="d-d3nk4"
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
                                                data-oid="zl_57:g"
                                            >
                                                <div
                                                    className="bg-blue-50 p-4 rounded-lg text-center"
                                                    data-oid="c17h8qk"
                                                >
                                                    <div
                                                        className="text-2xl font-bold text-[hsl(196,80%,45%)]"
                                                        data-oid="_so1h-h"
                                                    >
                                                        {job.companySize}
                                                    </div>
                                                    <div
                                                        className="text-sm text-gray-600"
                                                        data-oid="..zw2vv"
                                                    >
                                                        Employees
                                                    </div>
                                                </div>
                                                <div
                                                    className="bg-green-50 p-4 rounded-lg text-center"
                                                    data-oid="_2usuk_"
                                                >
                                                    <div
                                                        className="text-2xl font-bold text-green-600"
                                                        data-oid="nwamwum"
                                                    >
                                                        {job.industry}
                                                    </div>
                                                    <div
                                                        className="text-sm text-gray-600"
                                                        data-oid="q92hdzb"
                                                    >
                                                        Industry
                                                    </div>
                                                </div>
                                                <div
                                                    className="bg-purple-50 p-4 rounded-lg text-center"
                                                    data-oid="uym9qv_"
                                                >
                                                    <div
                                                        className="text-2xl font-bold text-purple-600"
                                                        data-oid="ziu914w"
                                                    >
                                                        {job.companyType}
                                                    </div>
                                                    <div
                                                        className="text-sm text-gray-600"
                                                        data-oid="thoni4v"
                                                    >
                                                        Company Type
                                                    </div>
                                                </div>
                                            </div>

                                            <div data-oid="6pk-sdg">
                                                <h3
                                                    className="text-lg font-semibold text-gray-800 mb-3"
                                                    data-oid="-kc8idc"
                                                >
                                                    Company Culture
                                                </h3>
                                                <div
                                                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                                    data-oid="yw4s-y1"
                                                >
                                                    <div
                                                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                                                        data-oid="fhe59_v"
                                                    >
                                                        <div
                                                            className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"
                                                            data-oid="5fj7zah"
                                                        >
                                                            <span
                                                                className="text-blue-600 text-sm"
                                                                data-oid="g5si3z1"
                                                            >
                                                                🚀
                                                            </span>
                                                        </div>
                                                        <div data-oid="ot8ynig">
                                                            <div
                                                                className="font-medium text-gray-800"
                                                                data-oid="x64oql."
                                                            >
                                                                Innovation
                                                            </div>
                                                            <div
                                                                className="text-sm text-gray-600"
                                                                data-oid="2o6f5yc"
                                                            >
                                                                Cutting-edge technology
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                                                        data-oid="rtm85:m"
                                                    >
                                                        <div
                                                            className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"
                                                            data-oid="8xrjchp"
                                                        >
                                                            <span
                                                                className="text-green-600 text-sm"
                                                                data-oid="h.n.ba_"
                                                            >
                                                                🤝
                                                            </span>
                                                        </div>
                                                        <div data-oid="xlfy4qz">
                                                            <div
                                                                className="font-medium text-gray-800"
                                                                data-oid=".hs845g"
                                                            >
                                                                Collaboration
                                                            </div>
                                                            <div
                                                                className="text-sm text-gray-600"
                                                                data-oid=".frlyi8"
                                                            >
                                                                Team-first approach
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                                                        data-oid="gsuy3s9"
                                                    >
                                                        <div
                                                            className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center"
                                                            data-oid="jmwcdge"
                                                        >
                                                            <span
                                                                className="text-purple-600 text-sm"
                                                                data-oid="x1:cab1"
                                                            >
                                                                📈
                                                            </span>
                                                        </div>
                                                        <div data-oid="w-azyhf">
                                                            <div
                                                                className="font-medium text-gray-800"
                                                                data-oid="3iwc077"
                                                            >
                                                                Growth
                                                            </div>
                                                            <div
                                                                className="text-sm text-gray-600"
                                                                data-oid="_:h178l"
                                                            >
                                                                Career development
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                                                        data-oid="17z_u0."
                                                    >
                                                        <div
                                                            className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center"
                                                            data-oid="dl5w7zc"
                                                        >
                                                            <span
                                                                className="text-orange-600 text-sm"
                                                                data-oid="ctmi7-h"
                                                            >
                                                                ⚖️
                                                            </span>
                                                        </div>
                                                        <div data-oid="fl7ngri">
                                                            <div
                                                                className="font-medium text-gray-800"
                                                                data-oid="e8yei7_"
                                                            >
                                                                Work-Life Balance
                                                            </div>
                                                            <div
                                                                className="text-sm text-gray-600"
                                                                data-oid="0fo.8qg"
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
                                        <div className="space-y-6" data-oid="lwqexvy">
                                            <div className="text-center py-8" data-oid="q2z_q02">
                                                <div className="text-6xl mb-4" data-oid="gx3a0mk">
                                                    ⭐
                                                </div>
                                                <h3
                                                    className="text-2xl font-bold text-gray-800 mb-2"
                                                    data-oid="t2gc5jj"
                                                >
                                                    4.2 out of 5
                                                </h3>
                                                <p
                                                    className="text-gray-600 mb-4"
                                                    data-oid=".2tzqb2"
                                                >
                                                    Based on 127 employee reviews
                                                </p>
                                                <div
                                                    className="flex justify-center space-x-1 mb-6"
                                                    data-oid="klidasi"
                                                >
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <svg
                                                            key={star}
                                                            className={`h-6 w-6 ${star <= 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                            data-oid="9_1.fq."
                                                        >
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                                data-oid="mbdf0i3"
                                                            />
                                                        </svg>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="space-y-4" data-oid="9epvz4q">
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
                                                        data-oid="20xsz0p"
                                                    >
                                                        <div
                                                            className="flex items-center justify-between mb-2"
                                                            data-oid="oc8qv2g"
                                                        >
                                                            <div
                                                                className="flex items-center space-x-1"
                                                                data-oid="8kvj7_5"
                                                            >
                                                                {[1, 2, 3, 4, 5].map((star) => (
                                                                    <svg
                                                                        key={star}
                                                                        className={`h-4 w-4 ${star <= review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                                                        fill="currentColor"
                                                                        viewBox="0 0 20 20"
                                                                        data-oid="5m_w5p1"
                                                                    >
                                                                        <path
                                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                                            data-oid="u3pl1k9"
                                                                        />
                                                                    </svg>
                                                                ))}
                                                            </div>
                                                            <span
                                                                className="text-sm text-gray-500"
                                                                data-oid="932wuk_"
                                                            >
                                                                {review.date}
                                                            </span>
                                                        </div>
                                                        <h4
                                                            className="font-semibold text-gray-800 mb-1"
                                                            data-oid="_m-oshm"
                                                        >
                                                            {review.title}
                                                        </h4>
                                                        <p
                                                            className="text-gray-600 text-sm mb-2"
                                                            data-oid="tmwy:09"
                                                        >
                                                            {review.review}
                                                        </p>
                                                        <p
                                                            className="text-xs text-gray-500"
                                                            data-oid="lj:r706"
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
                        <div className="lg:col-span-1" data-oid="ovgwjyz">
                            <div className="sticky top-24 space-y-6" data-oid="ox-.723">
                                {/* Apply Card */}
                                <div
                                    className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-gray-200 p-6"
                                    data-oid="x5keyf9"
                                >
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-4"
                                        data-oid="b--.b_."
                                    >
                                        Ready to Apply?
                                    </h3>
                                    <button
                                        onClick={handleApply}
                                        className="w-full px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 mb-4"
                                        data-oid="ar7b3gy"
                                    >
                                        Apply Now
                                    </button>
                                    <div
                                        className="text-sm text-gray-600 space-y-2"
                                        data-oid="n6l6:g0"
                                    >
                                        <div className="flex items-center gap-2" data-oid="k2v424r">
                                            <svg
                                                className="h-4 w-4 text-green-500"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="gx7bn9b"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                    data-oid="lv8ol2n"
                                                />
                                            </svg>
                                            <span data-oid="ja:grj5">
                                                Quick application process
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2" data-oid="tz9o2lh">
                                            <svg
                                                className="h-4 w-4 text-green-500"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="rob997s"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                    data-oid="pl2-8hv"
                                                />
                                            </svg>
                                            <span data-oid="wiy0hh.">Response within 3-5 days</span>
                                        </div>
                                        <div className="flex items-center gap-2" data-oid="ovxgxdl">
                                            <svg
                                                className="h-4 w-4 text-green-500"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="fceapw1"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                    data-oid="5c7fam7"
                                                />
                                            </svg>
                                            <span data-oid="3jma8vo">Direct contact with HR</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Job Summary */}
                                <div
                                    className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-gray-200 p-6"
                                    data-oid="35ad8b5"
                                >
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-4"
                                        data-oid="rxpzpx9"
                                    >
                                        Job Summary
                                    </h3>
                                    <div className="space-y-3 text-sm" data-oid="o:0jrqd">
                                        <div className="flex justify-between" data-oid="1_ekgfc">
                                            <span className="text-gray-600" data-oid="0:u.o9z">
                                                Job Type:
                                            </span>
                                            <span className="font-medium" data-oid="j-b7::k">
                                                {job.jobType}
                                            </span>
                                        </div>
                                        <div className="flex justify-between" data-oid="wmycrn0">
                                            <span className="text-gray-600" data-oid="t681pgj">
                                                Employment:
                                            </span>
                                            <span className="font-medium" data-oid=".56xhpk">
                                                {job.employmentType}
                                            </span>
                                        </div>
                                        <div className="flex justify-between" data-oid="d6up0q7">
                                            <span className="text-gray-600" data-oid="31y38tm">
                                                Experience:
                                            </span>
                                            <span className="font-medium" data-oid="5scf2pc">
                                                {job.experienceRequired}
                                            </span>
                                        </div>
                                        <div className="flex justify-between" data-oid="s8s1hk6">
                                            <span className="text-gray-600" data-oid="tx_00tl">
                                                Salary:
                                            </span>
                                            <span className="font-medium" data-oid="jj:gapn">
                                                {job.salary}
                                            </span>
                                        </div>
                                        <div className="flex justify-between" data-oid="rjrkysc">
                                            <span className="text-gray-600" data-oid="74n4i.p">
                                                Location:
                                            </span>
                                            <span className="font-medium" data-oid="jh81g2w">
                                                {job.location}
                                            </span>
                                        </div>
                                        <div className="flex justify-between" data-oid="sxglq2g">
                                            <span className="text-gray-600" data-oid="a-4t4sf">
                                                Remote:
                                            </span>
                                            <span className="font-medium" data-oid="bbhra61">
                                                {job.isRemote ? 'Yes' : 'No'}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Similar Jobs */}
                                <div
                                    className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-gray-200 p-6"
                                    data-oid="5:zcq8g"
                                >
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-4"
                                        data-oid="1-xnlg1"
                                    >
                                        Similar Jobs
                                    </h3>
                                    <div className="space-y-3" data-oid="y3uwcgc">
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
                                                data-oid="9y3__-."
                                            >
                                                <h4
                                                    className="font-medium text-gray-800 text-sm"
                                                    data-oid="jy5:zox"
                                                >
                                                    {similarJob.title}
                                                </h4>
                                                <p
                                                    className="text-xs text-gray-600"
                                                    data-oid="9te1x_9"
                                                >
                                                    {similarJob.company}
                                                </p>
                                                <p
                                                    className="text-xs text-[hsl(196,80%,45%)] font-medium"
                                                    data-oid="m.nmkkm"
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
                <div className="fixed bottom-6 right-6 z-50 lg:hidden" data-oid="7_qx3ho">
                    <button
                        onClick={handleApply}
                        className="px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-full font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-110 shadow-2xl flex items-center gap-2 animate-bounce"
                        data-oid="rzw5kpd"
                    >
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="h:dy7kz"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                data-oid="kjod.0s"
                            />
                        </svg>
                        Quick Apply
                    </button>
                </div>
            </div>
        </>
    );
}
