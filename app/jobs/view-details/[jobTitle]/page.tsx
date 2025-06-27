'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import MainNavbar from '@/components/mainNavbar';
import { Job } from '@/app/jobs/page';

// Mock data - in real app, this would come from API
const mockJobs: Job[] = [
    {
        id: 1,
        title: 'Frontend Developer',
        company: 'Swiggy',
        location: 'Bangalore, India',
        experienceRequired: '0-2 years',
        jobType: 'Full-time',
        employmentType: 'Permanent',
        skills: ['React', 'TypeScript', 'JavaScript', 'CSS', 'Redux'],
        postedDate: '2024-01-15',
        salary: '₹6-10 LPA',
        description:
            'Join our team to build amazing user interfaces for millions of food lovers. You will be working on cutting-edge technologies and contributing to products used by millions of users daily. We are looking for passionate developers who love creating exceptional user experiences.',
        isRemote: false,
        isFeatured: true,
        isUrgent: true,
        applicantCount: 234,
        companyLogo: '/logos/swiggy.png',
        companySize: '5000-10000',
        industry: 'Food Tech',
        benefits: ['Health Insurance', 'Free Meals', 'Flexible Hours', 'Stock Options'],
        companyType: 'Startup',
    },
    // Add other jobs here...
];

export default function JobDetailsPage() {
    const params = useParams();
    const router = useRouter();
    const jobTitle = params.jobTitle as string;
    const [job, setJob] = useState<Job | null>(null);
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        // Find job by title (URL decoded)
        const decodedTitle = decodeURIComponent(jobTitle).replace(/-/g, ' ');
        const foundJob = mockJobs.find((j) => j.title.toLowerCase() === decodedTitle.toLowerCase());
        setJob(foundJob || null);
    }, [jobTitle]);

    const handleApplyClick = () => {
        if (job) {
            const jobTitleSlug = job.title.toLowerCase().replace(/\s+/g, '-');
            router.push(`/jobs/apply/${jobTitleSlug}`);
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
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - date.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1) return '1 day ago';
        if (diffDays < 7) return `${diffDays} days ago`;
        if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
        return `${Math.ceil(diffDays / 30)} months ago`;
    };

    if (!job) {
        return (
            <div className="min-h-screen bg-white" data-oid="ykxso4f">
                <MainNavbar data-oid="mbka_6s" />
                <div className="max-w-4xl mx-auto px-4 py-16 text-center" data-oid="s:49u05">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4" data-oid="irjzrrm">
                        Job Not Found
                    </h1>
                    <p className="text-gray-600 mb-8" data-oid="..cjysa">
                        The job you're looking for doesn't exist.
                    </p>
                    <button
                        onClick={() => router.push('/jobs')}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        data-oid="en4nhox"
                    >
                        Back to Jobs
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50" data-oid="t1n1xkv">
            <MainNavbar data-oid="7xd8ptn" />

            <div className="max-w-6xl mx-auto px-4 py-8" data-oid="wh23e.b">
                {/* Header */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8" data-oid="gyw9hj_">
                    <div className="flex items-center justify-between mb-4" data-oid="wn568g2">
                        <button
                            onClick={() => router.back()}
                            className="flex items-center text-blue-600 hover:text-blue-700"
                            data-oid="8a37sqi"
                        >
                            <svg
                                className="h-5 w-5 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="43qycj1"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 19l-7-7 7-7"
                                    data-oid="yk:rjiy"
                                />
                            </svg>
                            Back to Jobs
                        </button>

                        <div className="flex gap-2" data-oid="sbzde2q">
                            <button
                                onClick={handleSave}
                                className={`p-2 rounded-md transition-colors ${
                                    isSaved
                                        ? 'bg-red-100 text-red-600'
                                        : 'bg-gray-100 text-gray-600'
                                }`}
                                data-oid="x:qvofj"
                            >
                                <svg
                                    className="h-5 w-5"
                                    fill={isSaved ? 'currentColor' : 'none'}
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="v2ig-dr"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                        data-oid="xt8vhia"
                                    />
                                </svg>
                            </button>

                            <button
                                onClick={handleShare}
                                className="p-2 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200"
                                data-oid="maoe-3j"
                            >
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="4nt0-ib"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                                        data-oid="nej3o5w"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="flex items-start justify-between" data-oid="hnyn:az">
                        <div className="flex-1" data-oid="jiu:fh.">
                            <div className="flex items-center gap-4 mb-4" data-oid="1oxhfgc">
                                <h1 className="text-3xl font-bold text-gray-800" data-oid="td81x6h">
                                    {job.title}
                                </h1>
                                {job.isUrgent && (
                                    <span
                                        className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse"
                                        data-oid="nrg_bj4"
                                    >
                                        🔥 URGENT HIRING
                                    </span>
                                )}
                                {job.isFeatured && (
                                    <span
                                        className="bg-gradient-to-r from-blue-500 to-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full"
                                        data-oid="3t9.ye-"
                                    >
                                        ⭐ FEATURED
                                    </span>
                                )}
                            </div>

                            <p className="text-xl text-blue-600 mb-2" data-oid="xezilfm">
                                {job.company}
                            </p>
                            <div
                                className="flex flex-wrap items-center gap-4 text-gray-600 mb-4"
                                data-oid="4d9oond"
                            >
                                <span className="flex items-center" data-oid="5qc4pyd">
                                    <svg
                                        className="h-4 w-4 mr-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="jrqhypi"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            data-oid="7ivke_9"
                                        />

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            data-oid=".59pcxd"
                                        />
                                    </svg>
                                    {job.location}
                                </span>
                                <span className="flex items-center" data-oid="7wu8rq9">
                                    <svg
                                        className="h-4 w-4 mr-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="q2m2x88"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            data-oid="bv2nmr4"
                                        />
                                    </svg>
                                    {formatDate(job.postedDate)}
                                </span>
                                <span className="flex items-center" data-oid="guu_6fn">
                                    <svg
                                        className="h-4 w-4 mr-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="t_t8qjb"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                            data-oid="a8f1.gg"
                                        />
                                    </svg>
                                    {job.applicantCount} applicants
                                </span>
                            </div>

                            {job.salary && (
                                <div
                                    className="flex items-center text-green-600 font-semibold text-lg mb-4"
                                    data-oid="rcdz-cq"
                                >
                                    <span data-oid="g83jt3x">💰 {job.salary}</span>
                                </div>
                            )}
                        </div>

                        <button
                            onClick={handleApplyClick}
                            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg"
                            data-oid="l8fbha9"
                        >
                            Apply Now
                        </button>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8" data-oid="vf5su:m">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8" data-oid="epc6u4k">
                        {/* Job Description */}
                        <div className="bg-white rounded-lg shadow-md p-6" data-oid="k0__gsv">
                            <h2
                                className="text-2xl font-bold text-gray-800 mb-4"
                                data-oid="o5zz:ae"
                            >
                                Job Description
                            </h2>
                            <div className="prose max-w-none" data-oid="khkozqp">
                                <p className="text-gray-700 leading-relaxed" data-oid="x0ontys">
                                    {job.description}
                                </p>
                            </div>
                        </div>

                        {/* Skills Required */}
                        <div className="bg-white rounded-lg shadow-md p-6" data-oid="2e4z-t_">
                            <h2
                                className="text-2xl font-bold text-gray-800 mb-4"
                                data-oid="2fx_pvs"
                            >
                                Skills Required
                            </h2>
                            <div className="flex flex-wrap gap-2" data-oid="siid0q9">
                                {job.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                                        data-oid="ot06141"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Benefits */}
                        {job.benefits && job.benefits.length > 0 && (
                            <div className="bg-white rounded-lg shadow-md p-6" data-oid="_.o.xy8">
                                <h2
                                    className="text-2xl font-bold text-gray-800 mb-4"
                                    data-oid="ohw-4uh"
                                >
                                    Benefits & Perks
                                </h2>
                                <div className="grid md:grid-cols-2 gap-3" data-oid="sl_ja2z">
                                    {job.benefits.map((benefit, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center"
                                            data-oid="yltheqf"
                                        >
                                            <svg
                                                className="h-5 w-5 text-green-500 mr-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="cbbngoq"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                    data-oid="he.in.w"
                                                />
                                            </svg>
                                            <span className="text-gray-700" data-oid="_ij.w4a">
                                                {benefit}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6" data-oid="mmsg7ga">
                        {/* Job Summary */}
                        <div className="bg-white rounded-lg shadow-md p-6" data-oid="zjczn:d">
                            <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid="5xhy040">
                                Job Summary
                            </h3>
                            <div className="space-y-3" data-oid="2munh9l">
                                <div className="flex justify-between" data-oid="r55.b88">
                                    <span className="text-gray-600" data-oid="2k4imt0">
                                        Job Type:
                                    </span>
                                    <span className="font-medium" data-oid=".9dozl.">
                                        {job.jobType}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid="5cxr8v1">
                                    <span className="text-gray-600" data-oid="nglw8n5">
                                        Employment:
                                    </span>
                                    <span className="font-medium" data-oid="m7:wf9w">
                                        {job.employmentType}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid="r5b1.a0">
                                    <span className="text-gray-600" data-oid="_s.2g:s">
                                        Experience:
                                    </span>
                                    <span className="font-medium" data-oid="y0fsyn2">
                                        {job.experienceRequired}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid="w5k3n:t">
                                    <span className="text-gray-600" data-oid="w65hjjh">
                                        Industry:
                                    </span>
                                    <span className="font-medium" data-oid="l6.w9e.">
                                        {job.industry}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid="28dr:ne">
                                    <span className="text-gray-600" data-oid="9yo8ude">
                                        Company Size:
                                    </span>
                                    <span className="font-medium" data-oid="u2tv04e">
                                        {job.companySize}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid="llwxeiu">
                                    <span className="text-gray-600" data-oid="i73fw94">
                                        Remote:
                                    </span>
                                    <span className="font-medium" data-oid="j2_uqxn">
                                        {job.isRemote ? 'Yes' : 'No'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Company Info */}
                        <div className="bg-white rounded-lg shadow-md p-6" data-oid="bjivn8v">
                            <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid="tp655k9">
                                About {job.company}
                            </h3>
                            <div className="space-y-3" data-oid="8anln9c">
                                <div className="flex justify-between" data-oid="oen_g.g">
                                    <span className="text-gray-600" data-oid="juyu98y">
                                        Industry:
                                    </span>
                                    <span className="font-medium" data-oid="5uecjir">
                                        {job.industry}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid="v1ldfjh">
                                    <span className="text-gray-600" data-oid="71fd9z:">
                                        Company Type:
                                    </span>
                                    <span className="font-medium" data-oid="s216pzn">
                                        {job.companyType}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid="0h5-o.x">
                                    <span className="text-gray-600" data-oid="3qx9:m.">
                                        Size:
                                    </span>
                                    <span className="font-medium" data-oid="vz.3a81">
                                        {job.companySize} employees
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Apply Button (Sticky) */}
                        <div
                            className="bg-white rounded-lg shadow-md p-6 sticky top-24"
                            data-oid="p_qzkci"
                        >
                            <button
                                onClick={handleApplyClick}
                                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg"
                                data-oid="c1yk_65"
                            >
                                Apply for this Job
                            </button>
                            <p
                                className="text-sm text-gray-500 text-center mt-2"
                                data-oid="z13fjx3"
                            >
                                Quick and easy application process
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
