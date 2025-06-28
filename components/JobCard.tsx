'use client';

import { useState } from 'react';
import { Job } from '@/app/jobs/page';
import JobDetailsModal from './JobDetailsModal';
import JobApplicationModal from './JobApplicationModal';
import ApplicationSuccessModal from './ApplicationSuccessModal';
import QuickApplyModal from './QuickApplyModal';

interface JobCardProps {
    job: Job;
    viewMode?: 'grid' | 'list';
    isInternship?: boolean;
}

export default function JobCard({ job, viewMode = 'list', isInternship = false }: JobCardProps) {
    const [isSaved, setIsSaved] = useState(false);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [showApplicationModal, setShowApplicationModal] = useState(false);
    const [showQuickApplyModal, setShowQuickApplyModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

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
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: `${job.title} at ${job.company}`,
                text: `Check out this job opportunity: ${job.title} at ${job.company}`,
                url: window.location.href + `/${job.id}`,
            });
        } else {
            navigator.clipboard.writeText(window.location.href + `/${job.id}`);
        }
    };

    const handleApplyClick = () => {
        const companySlug = job.company
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '');
        const jobTitleSlug = job.title
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '');
        const basePath = isInternship ? '/internships' : '/jobs';
        window.location.href = `${basePath}/apply/${companySlug}/${jobTitleSlug}`;
    };

    const handleViewDetails = () => {
        const companySlug = job.company
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '');
        const jobTitleSlug = job.title
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '');
        const basePath = isInternship ? '/internships' : '/jobs';
        window.location.href = `${basePath}/view-details/${companySlug}/${jobTitleSlug}`;
    };

    const handleApplicationSubmit = (applicationData: any) => {
        console.log('Application submitted:', applicationData);
        setShowApplicationModal(false);
        setShowQuickApplyModal(false);
        setShowSuccessModal(true);
    };

    return (
        <div
            className={`bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-[hsl(210,30%,95%)] p-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(196,80%,45%)] relative overflow-hidden group ${
                viewMode === 'grid' ? 'h-full' : ''
            }`}
            role="listitem"
            data-oid="7vgcpv8"
        >
            {/* Badges Container */}
            <div className="absolute top-4 right-4 flex flex-col gap-2" data-oid="mkwbg0r">
                {job.isUrgent && (
                    <span
                        className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse shadow-lg"
                        data-oid="njy5t96"
                    >
                        🔥 URGENT HIRING
                    </span>
                )}
                {job.isFeatured && (
                    <span
                        className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white text-xs font-bold px-3 py-1 rounded-full"
                        data-oid="74489yg"
                    >
                        ⭐ FEATURED
                    </span>
                )}
            </div>

            {/* Remote Badge */}
            {job.isRemote && (
                <div className="absolute top-4 left-4" data-oid="h35yinc">
                    <span
                        className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full"
                        data-oid=":glteen"
                    >
                        🏠 Remote
                    </span>
                </div>
            )}

            {/* Header Section */}
            <div className="mb-6" data-oid="825ufv7">
                <div className="flex items-start justify-between mb-3" data-oid="xh56rwo">
                    <div className="flex-1 min-w-0" data-oid=":8b.:0_">
                        <h3
                            className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[hsl(196,80%,45%)] transition-colors duration-300 line-clamp-2"
                            data-oid="9szrcrt"
                        >
                            <br data-oid="tubz3ap" />
                            {job.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 mb-2" data-oid="z4ijdr1">
                            <p
                                className="text-[hsl(196,80%,45%)] font-semibold text-lg"
                                data-oid=".1if__2"
                            >
                                {job.company}
                            </p>
                            {job.companySize && (
                                <span
                                    className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full"
                                    data-oid="ztx17z1"
                                >
                                    {job.companySize} employees
                                </span>
                            )}
                        </div>
                        {job.industry && (
                            <p className="text-sm text-gray-600" data-oid="d0f.3_i">
                                {job.industry} • {job.companyType}
                            </p>
                        )}
                    </div>
                </div>

                {/* Salary/Stipend and Applicant Count */}
                <div className="flex flex-wrap items-center gap-4 mb-4" data-oid="kli-_4t">
                    {job.salary && (
                        <div className="flex items-center gap-1" data-oid="8habhys">
                            <span className="text-green-600 font-medium text-sm" data-oid="bypr.cb">
                                💰 {job.salary}
                            </span>
                        </div>
                    )}
                    {job.applicantCount && (
                        <span
                            className="text-xs text-gray-500 bg-blue-50 px-3 py-1 rounded-full"
                            data-oid="h9bm6ai"
                        >
                            👥 {job.applicantCount} applicants
                        </span>
                    )}
                    {isInternship && (job as any).duration && (
                        <span
                            className="text-xs text-purple-600 bg-purple-50 px-3 py-1 rounded-full"
                            data-oid=":28_i6a"
                        >
                            ⏱️ {(job as any).duration}
                        </span>
                    )}
                </div>
            </div>

            {/* Details Row */}
            <div className="grid md:grid-cols-2 gap-4 mb-4" data-oid="hm5pecr">
                <div className="flex items-center text-gray-600" data-oid="i9xpl8g">
                    <svg
                        className="h-4 w-4 mr-2 text-[hsl(196,80%,45%)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        data-oid="67ofwor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            data-oid="67hwvz7"
                        />

                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            data-oid="_16by1b"
                        />
                    </svg>
                    <span className="text-sm" data-oid="_-r4ar5">
                        <span className="font-medium" data-oid="qbmzrti">
                            Location:
                        </span>{' '}
                        {job.location}
                    </span>
                </div>
                <div className="flex items-center text-gray-600" data-oid="hpo86uk">
                    <svg
                        className="h-4 w-4 mr-2 text-[hsl(196,80%,45%)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        data-oid="h:blpzl"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                            data-oid="3t8bnzu"
                        />
                    </svg>
                    <span className="text-sm" data-oid=".0:xe_z">
                        <span className="font-medium" data-oid="t28tcdr">
                            Experience:
                        </span>{' '}
                        {job.experienceRequired}
                    </span>
                </div>
            </div>

            {/* Employment Type & Job Type */}
            <div className="flex flex-wrap gap-2 mb-4" data-oid=":__tbt7">
                <span
                    className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded"
                    data-oid="16tnun."
                >
                    {job.jobType}
                </span>
                <span
                    className="bg-purple-50 text-purple-700 text-xs font-medium px-2.5 py-1 rounded"
                    data-oid="w_bh_pp"
                >
                    {job.employmentType}
                </span>
            </div>

            {/* Benefits Preview */}
            {job.benefits && job.benefits.length > 0 && (
                <div className="mb-4" data-oid="nwodmuy">
                    <div className="flex items-center mb-2" data-oid="w:ig0yd">
                        <svg
                            className="h-4 w-4 mr-2 text-[hsl(196,80%,45%)]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="imgfl5b"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                                data-oid=":z.2f_:"
                            />
                        </svg>
                        <span className="text-sm font-medium text-gray-700" data-oid="1mjfxuw">
                            Benefits:
                        </span>
                    </div>
                    <div className="flex flex-wrap gap-1" data-oid="7y-za52">
                        {job.benefits.slice(0, 3).map((benefit, index) => (
                            <span
                                key={index}
                                className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded"
                                data-oid="g---65l"
                            >
                                {benefit}
                            </span>
                        ))}
                        {job.benefits.length > 3 && (
                            <span className="text-xs text-gray-500 px-2 py-1" data-oid="0uzv_zi">
                                +{job.benefits.length - 3} more
                            </span>
                        )}
                    </div>
                </div>
            )}

            {/* Footer Row */}
            <div className="flex justify-between items-end" data-oid="55ty7vh">
                <div className="flex-1" data-oid=":.1f-qr">
                    <div className="flex items-center text-gray-600 mb-2" data-oid="0fjib.k">
                        <svg
                            className="h-4 w-4 mr-2 text-[hsl(196,80%,45%)]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="r6xx_9n"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                data-oid="4k48n89"
                            />
                        </svg>
                        <span className="text-sm" data-oid="1va.o._">
                            <span className="font-medium" data-oid="5uv_u2g">
                                Posted:
                            </span>{' '}
                            {formatDate(job.postedDate)}
                        </span>
                    </div>

                    <div className="flex items-start" data-oid="en6_x:.">
                        <svg
                            className="h-4 w-4 mr-2 mt-0.5 text-[hsl(196,80%,45%)] flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="_0vgy_e"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                data-oid="x.44-os"
                            />
                        </svg>
                        <div className="flex-1" data-oid="rllh6md">
                            <span className="text-sm font-medium text-gray-700" data-oid="1w0kpul">
                                Skills Required:
                            </span>
                            <div className="flex flex-wrap gap-1 mt-1" data-oid="6-8jltw">
                                {job.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                                        data-oid="tisqfjw"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div
                    className={`flex items-center ${viewMode === 'grid' ? 'justify-between' : 'space-x-3 ml-4'}`}
                    data-oid="xmkk5-9"
                >
                    <button
                        onClick={handleApplyClick}
                        className={`${viewMode === 'grid' ? 'flex-1 mr-3' : 'flex-1'} px-4 py-2 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-md font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2`}
                        data-oid="ztko3dp"
                    >
                        <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="9bh1o.t"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                data-oid="w0lu9b."
                            />
                        </svg>
                        {isInternship ? 'Apply for Internship' : 'Apply Now'}
                    </button>

                    <button
                        onClick={handleViewDetails}
                        className="px-4 py-2 border border-[hsl(196,80%,45%)] text-[hsl(196,80%,45%)] rounded-md text-sm font-medium hover:bg-[hsl(196,80%,45%)]/10 transition-all duration-300 flex items-center gap-2"
                        data-oid=":h48m4j"
                    >
                        <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="a8g_4vv"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                data-oid="2j23di3"
                            />

                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                data-oid="-8mp57r"
                            />
                        </svg>
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
                        data-oid="ag86m51"
                    >
                        <svg
                            className="h-5 w-5"
                            fill={isSaved ? 'currentColor' : 'none'}
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="yk9-8ta"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                data-oid="v9gge18"
                            />
                        </svg>
                    </button>

                    <button
                        onClick={handleShare}
                        className="p-2 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 transition-all duration-300"
                        title="Share job"
                        data-oid="ssny55:"
                    >
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid=".bo-8hh"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                                data-oid="_1btxw2"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Hover effect overlay */}
            <div
                className="absolute inset-0 bg-gradient-to-r from-[hsl(196,80%,45%)]/5 to-[hsl(175,70%,41%)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
                data-oid="n9356wj"
            ></div>

            {/* Modals */}
            <JobDetailsModal
                job={job}
                isOpen={showDetailsModal}
                onClose={() => setShowDetailsModal(false)}
                onApply={() => {
                    setShowDetailsModal(false);
                    setShowApplicationModal(true);
                }}
                data-oid="h0xx9xz"
            />

            <QuickApplyModal
                job={job}
                isOpen={showQuickApplyModal}
                onClose={() => setShowQuickApplyModal(false)}
                onSubmit={handleApplicationSubmit}
                data-oid="och-7te"
            />

            <JobApplicationModal
                job={job}
                isOpen={showApplicationModal}
                onClose={() => setShowApplicationModal(false)}
                onSubmit={handleApplicationSubmit}
                data-oid="6sa98n6"
            />

            <ApplicationSuccessModal
                isOpen={showSuccessModal}
                onClose={() => setShowSuccessModal(false)}
                jobTitle={job.title}
                companyName={job.company}
                data-oid="456p0yv"
            />
        </div>
    );
}
