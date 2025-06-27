'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

interface Job {
    id: number;
    title: string;
    company: string;
    location: string;
    salary?: string;
    description: string;
    skills: string[];
    benefits?: string[];
}

const mockJobs: Job[] = [
    {
        id: 1,
        title: 'Frontend Developer',
        company: 'Swiggy',
        location: 'Bangalore, India',
        salary: '₹6-10 LPA',
        description: 'Join our team to build amazing user interfaces for millions of food lovers.',
        skills: ['React', 'TypeScript', 'JavaScript'],
        benefits: ['Health Insurance', 'Free Meals'],
    },
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
            <div className="min-h-screen bg-white" data-oid="xc:e_vy">
                <div className="max-w-4xl mx-auto px-4 py-16 text-center" data-oid="mj15e8u">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4" data-oid="b3so9a1">
                        Job Not Found
                    </h1>
                    <p className="text-gray-600 mb-8" data-oid="h17iuv2">
                        The job you're looking for doesn't exist.
                    </p>
                    <button
                        onClick={() => router.push('/jobs')}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        data-oid="l29efga"
                    >
                        Back to Jobs
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50" data-oid="o-p:ipb">
            <div className="max-w-6xl mx-auto px-4 py-8" data-oid="85bl-:8">
                {/* Header */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8" data-oid="s.v:ft8">
                    <div className="flex items-center justify-between mb-4" data-oid="4x68ykr">
                        <button
                            onClick={() => router.back()}
                            className="flex items-center text-blue-600 hover:text-blue-700"
                            data-oid="2rscvd4"
                        >
                            <svg
                                className="h-5 w-5 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid=":f3zjd3"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 19l-7-7 7-7"
                                    data-oid="_swexbq"
                                />
                            </svg>
                            Back to Jobs
                        </button>

                        <div className="flex gap-2" data-oid="fp59q05">
                            <button
                                onClick={handleSave}
                                className={`p-2 rounded-md transition-colors ${
                                    isSaved
                                        ? 'bg-red-100 text-red-600'
                                        : 'bg-gray-100 text-gray-600'
                                }`}
                                data-oid=":1l7:w1"
                            >
                                <svg
                                    className="h-5 w-5"
                                    fill={isSaved ? 'currentColor' : 'none'}
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="-s8f.k."
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                        data-oid="9r:9aj3"
                                    />
                                </svg>
                            </button>

                            <button
                                onClick={handleShare}
                                className="p-2 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200"
                                data-oid="g6zspf8"
                            >
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="9a6.one"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                                        data-oid=".9efd0f"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="flex items-start justify-between" data-oid="inp_fhn">
                        <div className="flex-1" data-oid="1p_er2e">
                            <div className="flex items-center gap-4 mb-4" data-oid="gbtargf">
                                <h1 className="text-3xl font-bold text-gray-800" data-oid="yuu260m">
                                    {job.title}
                                </h1>
                                {job.isUrgent && (
                                    <span
                                        className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse"
                                        data-oid="es015ws"
                                    >
                                        🔥 URGENT HIRING
                                    </span>
                                )}
                                {job.isFeatured && (
                                    <span
                                        className="bg-gradient-to-r from-blue-500 to-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full"
                                        data-oid=":t1drcd"
                                    >
                                        ⭐ FEATURED
                                    </span>
                                )}
                            </div>

                            <p className="text-xl text-blue-600 mb-2" data-oid="p4-3wqg">
                                {job.company}
                            </p>
                            <div
                                className="flex flex-wrap items-center gap-4 text-gray-600 mb-4"
                                data-oid="dx:3c6g"
                            >
                                <span className="flex items-center" data-oid="26f72hy">
                                    <svg
                                        className="h-4 w-4 mr-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="e:g2-cp"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            data-oid="e.do4im"
                                        />

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            data-oid="p:gih18"
                                        />
                                    </svg>
                                    {job.location}
                                </span>
                                <span className="flex items-center" data-oid="-:5zux6">
                                    <svg
                                        className="h-4 w-4 mr-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="_lvv6s."
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            data-oid=":l05q5a"
                                        />
                                    </svg>
                                    {formatDate(job.postedDate)}
                                </span>
                                <span className="flex items-center" data-oid="b28g.z5">
                                    <svg
                                        className="h-4 w-4 mr-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="j9asqol"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                            data-oid="r0rtquj"
                                        />
                                    </svg>
                                    {job.applicantCount} applicants
                                </span>
                            </div>

                            {job.salary && (
                                <div
                                    className="flex items-center text-green-600 font-semibold text-lg mb-4"
                                    data-oid="zwy4b4o"
                                >
                                    <span data-oid="sk-f5.9">💰 {job.salary}</span>
                                </div>
                            )}
                        </div>

                        <button
                            onClick={handleApplyClick}
                            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg"
                            data-oid="lnt5e42"
                        >
                            Apply Now
                        </button>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8" data-oid="6__8ewu">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8" data-oid="..b9qch">
                        {/* Job Description */}
                        <div className="bg-white rounded-lg shadow-md p-6" data-oid="b27bik3">
                            <h2
                                className="text-2xl font-bold text-gray-800 mb-4"
                                data-oid="2m41zox"
                            >
                                Job Description
                            </h2>
                            <div className="prose max-w-none" data-oid="rmvhewm">
                                <p className="text-gray-700 leading-relaxed" data-oid="hx4wre4">
                                    {job.description}
                                </p>
                            </div>
                        </div>

                        {/* Skills Required */}
                        <div className="bg-white rounded-lg shadow-md p-6" data-oid="ux0amu2">
                            <h2
                                className="text-2xl font-bold text-gray-800 mb-4"
                                data-oid="mzmtsvn"
                            >
                                Skills Required
                            </h2>
                            <div className="flex flex-wrap gap-2" data-oid="g6civ10">
                                {job.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                                        data-oid="l-8zauc"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Benefits */}
                        {job.benefits && job.benefits.length > 0 && (
                            <div className="bg-white rounded-lg shadow-md p-6" data-oid="bj65l9y">
                                <h2
                                    className="text-2xl font-bold text-gray-800 mb-4"
                                    data-oid="_vtwio4"
                                >
                                    Benefits & Perks
                                </h2>
                                <div className="grid md:grid-cols-2 gap-3" data-oid="cq5874n">
                                    {job.benefits.map((benefit, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center"
                                            data-oid=":5zy8sa"
                                        >
                                            <svg
                                                className="h-5 w-5 text-green-500 mr-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="ihfmde9"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                    data-oid="t12gu.i"
                                                />
                                            </svg>
                                            <span className="text-gray-700" data-oid="42259.0">
                                                {benefit}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6" data-oid="nbgu8re">
                        {/* Job Summary */}
                        <div className="bg-white rounded-lg shadow-md p-6" data-oid="jpnvekr">
                            <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid="7ijx34t">
                                Job Summary
                            </h3>
                            <div className="space-y-3" data-oid="g65yxvl">
                                <div className="flex justify-between" data-oid="i-3kzgy">
                                    <span className="text-gray-600" data-oid="cpfwgse">
                                        Job Type:
                                    </span>
                                    <span className="font-medium" data-oid="u_pf.51">
                                        {job.jobType}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid="8ledndc">
                                    <span className="text-gray-600" data-oid="o08hwew">
                                        Employment:
                                    </span>
                                    <span className="font-medium" data-oid="pb-o7s-">
                                        {job.employmentType}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid="-zztb.q">
                                    <span className="text-gray-600" data-oid="ed_787h">
                                        Experience:
                                    </span>
                                    <span className="font-medium" data-oid="tlbqq:d">
                                        {job.experienceRequired}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid="wr2-ed6">
                                    <span className="text-gray-600" data-oid="t0:_fky">
                                        Industry:
                                    </span>
                                    <span className="font-medium" data-oid="e:idkh4">
                                        {job.industry}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid=":h:5x2h">
                                    <span className="text-gray-600" data-oid="h1uvtxo">
                                        Company Size:
                                    </span>
                                    <span className="font-medium" data-oid="kb_brzh">
                                        {job.companySize}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid=":tkbz5x">
                                    <span className="text-gray-600" data-oid="cq8mt_v">
                                        Remote:
                                    </span>
                                    <span className="font-medium" data-oid="2murz1o">
                                        {job.isRemote ? 'Yes' : 'No'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Company Info */}
                        <div className="bg-white rounded-lg shadow-md p-6" data-oid="ym5kg_f">
                            <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid="qwiqu8f">
                                About {job.company}
                            </h3>
                            <div className="space-y-3" data-oid="g-5l5v0">
                                <div className="flex justify-between" data-oid="r::ngz.">
                                    <span className="text-gray-600" data-oid="jr9rdnw">
                                        Industry:
                                    </span>
                                    <span className="font-medium" data-oid="xf6tnnr">
                                        {job.industry}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid="4ly59t9">
                                    <span className="text-gray-600" data-oid="32o.jz-">
                                        Company Type:
                                    </span>
                                    <span className="font-medium" data-oid="hwmm12m">
                                        {job.companyType}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid=".q5n9-n">
                                    <span className="text-gray-600" data-oid="0-3zhrr">
                                        Size:
                                    </span>
                                    <span className="font-medium" data-oid="k18pc-m">
                                        {job.companySize} employees
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Apply Button (Sticky) */}
                        <div
                            className="bg-white rounded-lg shadow-md p-6 sticky top-24"
                            data-oid="om80la."
                        >
                            <button
                                onClick={handleApplyClick}
                                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg"
                                data-oid=":7cd_iq"
                            >
                                Apply for this Job
                            </button>
                            <p
                                className="text-sm text-gray-500 text-center mt-2"
                                data-oid="dk72c85"
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
