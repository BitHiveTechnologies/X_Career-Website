'use client';

import { useState } from 'react';
import { Job } from '@/app/jobs/page';

interface JobCardProps {
    job: Job;
}

export default function JobCard({ job }: JobCardProps) {
    const [isSaved, setIsSaved] = useState(false);

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

    const handleSave = () => {
        setIsSaved(!isSaved);
        // Here you would typically make an API call to save/unsave the job
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: `${job.title} at ${job.company}`,
                text: `Check out this job opportunity: ${job.title} at ${job.company}`,
                url: window.location.href + `/${job.id}`,
            });
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(window.location.href + `/${job.id}`);
            // You could show a toast notification here
        }
    };

    return (
        <div
            className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-[hsl(210,30%,95%)] p-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(196,80%,45%)] relative overflow-hidden group"
            role="listitem"
            data-oid="v898kk2"
        >
            {/* Featured Badge */}
            {job.isFeatured && (
                <div className="absolute top-4 right-4" data-oid="rjifduq">
                    <span
                        className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white text-xs font-bold px-3 py-1 rounded-full"
                        data-oid="gqhg.tc"
                    >
                        FEATURED
                    </span>
                </div>
            )}

            {/* Remote Badge */}
            {job.isRemote && (
                <div className="absolute top-4 left-4" data-oid="nj5-g0d">
                    <span
                        className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full"
                        data-oid="h347vxr"
                    >
                        Remote
                    </span>
                </div>
            )}

            {/* Header Row */}
            <div className="flex justify-between items-start mb-4 mt-2" data-oid="k6yrw1h">
                <div className="flex-1" data-oid="ggenugd">
                    <h3
                        className="text-xl font-bold text-gray-800 mb-1 group-hover:text-[hsl(196,80%,45%)] transition-colors duration-300"
                        data-oid="qes6rmm"
                    >
                        {job.title}
                    </h3>
                    <p className="text-[hsl(196,80%,45%)] font-semibold text-lg" data-oid="28p6ij0">
                        {job.company}
                    </p>
                    {job.salary && (
                        <p className="text-green-600 font-medium text-sm mt-1" data-oid="uip9ea_">
                            {job.salary}
                        </p>
                    )}
                </div>
                <button
                    className="px-6 py-2 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-md font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 ml-4"
                    data-oid="acriyjl"
                >
                    Apply Now
                </button>
            </div>

            {/* Details Row */}
            <div className="grid md:grid-cols-2 gap-4 mb-4" data-oid="ndwrdsq">
                <div className="flex items-center text-gray-600" data-oid="h.0-d24">
                    <svg
                        className="h-4 w-4 mr-2 text-[hsl(196,80%,45%)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        data-oid="o.ltv5w"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            data-oid="32ufv_l"
                        />

                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            data-oid="sprgsz."
                        />
                    </svg>
                    <span className="text-sm" data-oid="2aewux3">
                        <span className="font-medium" data-oid="fu8c4np">
                            Location:
                        </span>{' '}
                        {job.location}
                    </span>
                </div>
                <div className="flex items-center text-gray-600" data-oid="8fcnbdb">
                    <svg
                        className="h-4 w-4 mr-2 text-[hsl(196,80%,45%)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        data-oid="soh8jvt"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                            data-oid="6gl.lxp"
                        />
                    </svg>
                    <span className="text-sm" data-oid=".bqred8">
                        <span className="font-medium" data-oid="8a:zeni">
                            Experience:
                        </span>{' '}
                        {job.experienceRequired}
                    </span>
                </div>
            </div>

            {/* Employment Type & Job Type */}
            <div className="flex flex-wrap gap-2 mb-4" data-oid="fax_xgs">
                <span
                    className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded"
                    data-oid="s0uybwu"
                >
                    {job.jobType}
                </span>
                <span
                    className="bg-purple-50 text-purple-700 text-xs font-medium px-2.5 py-1 rounded"
                    data-oid="vs:n.6s"
                >
                    {job.employmentType}
                </span>
            </div>

            {/* Footer Row */}
            <div className="flex justify-between items-end" data-oid="yjpx2fr">
                <div className="flex-1" data-oid="wmr_miw">
                    <div className="flex items-center text-gray-600 mb-2" data-oid="4pp_..3">
                        <svg
                            className="h-4 w-4 mr-2 text-[hsl(196,80%,45%)]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="wkxp22u"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                data-oid="2vpe57."
                            />
                        </svg>
                        <span className="text-sm" data-oid="ew74831">
                            <span className="font-medium" data-oid="5w3weio">
                                Posted:
                            </span>{' '}
                            {formatDate(job.postedDate)}
                        </span>
                    </div>

                    <div className="flex items-start" data-oid="9oag9d0">
                        <svg
                            className="h-4 w-4 mr-2 mt-0.5 text-[hsl(196,80%,45%)] flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="w2qj-hv"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                data-oid="g73033y"
                            />
                        </svg>
                        <div className="flex-1" data-oid="2w7yky0">
                            <span className="text-sm font-medium text-gray-700" data-oid="k17-hbb">
                                Skills Required:
                            </span>
                            <div className="flex flex-wrap gap-1 mt-1" data-oid="g3o1kha">
                                {job.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                                        data-oid="3n:stcu"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-3 ml-4" data-oid="8qo9h_h">
                    <button
                        className="px-4 py-2 border border-[hsl(196,80%,45%)] text-[hsl(196,80%,45%)] rounded-md text-sm font-medium hover:bg-[hsl(196,80%,45%)]/10 transition-all duration-300"
                        data-oid="pvbcd_-"
                    >
                        View Details
                    </button>

                    <button
                        onClick={handleSave}
                        className={`p-2 rounded-md transition-all duration-300 ${
                            isSaved
                                ? 'bg-red-100 text-red-600 hover:bg-red-200'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                        title={isSaved ? 'Remove from saved' : 'Save job'}
                        data-oid="phad8ny"
                    >
                        <svg
                            className="h-5 w-5"
                            fill={isSaved ? 'currentColor' : 'none'}
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="bldunwu"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                data-oid="hmzu2pt"
                            />
                        </svg>
                    </button>

                    <button
                        onClick={handleShare}
                        className="p-2 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 transition-all duration-300"
                        title="Share job"
                        data-oid="b:2q83d"
                    >
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="8yyexbo"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                                data-oid="77urx-a"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Hover effect overlay */}
            <div
                className="absolute inset-0 bg-gradient-to-r from-[hsl(196,80%,45%)]/5 to-[hsl(175,70%,41%)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
                data-oid="vatwe0g"
            ></div>
        </div>
    );
}
