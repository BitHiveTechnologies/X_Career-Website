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
}

export default function JobCard({ job, viewMode = 'list' }: JobCardProps) {
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
        window.location.href = `/jobs/apply/${companySlug}/${jobTitleSlug}`;
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
        window.location.href = `/jobs/view-details/${companySlug}/${jobTitleSlug}`;
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
            data-oid="lw.grnm"
        >
            {/* Badges Container */}
            <div className="absolute top-4 right-4 flex flex-col gap-2" data-oid="1854keb">
                {job.isUrgent && (
                    <span
                        className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse shadow-lg"
                        data-oid="v:m3cbw"
                    >
                        🔥 URGENT HIRING
                    </span>
                )}
                {job.isFeatured && (
                    <span
                        className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white text-xs font-bold px-3 py-1 rounded-full"
                        data-oid="5bc.8v2"
                    >
                        ⭐ FEATURED
                    </span>
                )}
            </div>

            {/* Remote Badge */}
            {job.isRemote && (
                <div className="absolute top-4 left-4" data-oid="-0268ig">
                    <span
                        className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full"
                        data-oid="do9wiz9"
                    >
                        🏠 Remote
                    </span>
                </div>
            )}

            {/* Header Section */}
            <div className="mb-6" data-oid="up9vhta">
                <div className="flex items-start justify-between mb-3" data-oid="0dft-6t">
                    <div className="flex-1 min-w-0" data-oid="dn8mm1s">
                        <h3
                            className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[hsl(196,80%,45%)] transition-colors duration-300 line-clamp-2"
                            data-oid="loky531"
                        >
                            <br data-oid="rlg1rai" />
                            {job.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 mb-2" data-oid="9hcldb9">
                            <p
                                className="text-[hsl(196,80%,45%)] font-semibold text-lg"
                                data-oid="amjz6ba"
                            >
                                {job.company}
                            </p>
                            {job.companySize && (
                                <span
                                    className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full"
                                    data-oid="zm2zoq2"
                                >
                                    {job.companySize} employees
                                </span>
                            )}
                        </div>
                        {job.industry && (
                            <p className="text-sm text-gray-600" data-oid="pua-_iv">
                                {job.industry} • {job.companyType}
                            </p>
                        )}
                    </div>
                </div>

                {/* Salary and Applicant Count */}
                <div className="flex flex-wrap items-center gap-4 mb-4" data-oid="b:541eb">
                    {job.salary && (
                        <div className="flex items-center gap-1" data-oid="etcarla">
                            <span className="text-green-600 font-medium text-sm" data-oid="e9scu20">
                                💰 {job.salary}
                            </span>
                        </div>
                    )}
                    {job.applicantCount && (
                        <span
                            className="text-xs text-gray-500 bg-blue-50 px-3 py-1 rounded-full"
                            data-oid="zfmr.41"
                        >
                            👥 {job.applicantCount} applicants
                        </span>
                    )}
                </div>
            </div>

            {/* Details Row */}
            <div className="grid md:grid-cols-2 gap-4 mb-4" data-oid="9aj6tj8">
                <div className="flex items-center text-gray-600" data-oid="yq5me0u">
                    <svg
                        className="h-4 w-4 mr-2 text-[hsl(196,80%,45%)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        data-oid="9zjeiw-"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            data-oid=":8tjg56"
                        />

                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            data-oid="_efr82u"
                        />
                    </svg>
                    <span className="text-sm" data-oid="xd.-89s">
                        <span className="font-medium" data-oid="f-amoxu">
                            Location:
                        </span>{' '}
                        {job.location}
                    </span>
                </div>
                <div className="flex items-center text-gray-600" data-oid="47k3w6p">
                    <svg
                        className="h-4 w-4 mr-2 text-[hsl(196,80%,45%)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        data-oid=".ql_vm-"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                            data-oid="4gu07dw"
                        />
                    </svg>
                    <span className="text-sm" data-oid="bj2lhnc">
                        <span className="font-medium" data-oid="44pf6cw">
                            Experience:
                        </span>{' '}
                        {job.experienceRequired}
                    </span>
                </div>
            </div>

            {/* Employment Type & Job Type */}
            <div className="flex flex-wrap gap-2 mb-4" data-oid="e:y4c_.">
                <span
                    className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded"
                    data-oid="oee_b65"
                >
                    {job.jobType}
                </span>
                <span
                    className="bg-purple-50 text-purple-700 text-xs font-medium px-2.5 py-1 rounded"
                    data-oid="g:g92c7"
                >
                    {job.employmentType}
                </span>
            </div>

            {/* Benefits Preview */}
            {job.benefits && job.benefits.length > 0 && (
                <div className="mb-4" data-oid="y:zcuk9">
                    <div className="flex items-center mb-2" data-oid="8:v4rrt">
                        <svg
                            className="h-4 w-4 mr-2 text-[hsl(196,80%,45%)]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="adx5-kq"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                                data-oid="n.ohbaz"
                            />
                        </svg>
                        <span className="text-sm font-medium text-gray-700" data-oid="3xr_8-o">
                            Benefits:
                        </span>
                    </div>
                    <div className="flex flex-wrap gap-1" data-oid="measvj2">
                        {job.benefits.slice(0, 3).map((benefit, index) => (
                            <span
                                key={index}
                                className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded"
                                data-oid="a:hssvf"
                            >
                                {benefit}
                            </span>
                        ))}
                        {job.benefits.length > 3 && (
                            <span className="text-xs text-gray-500 px-2 py-1" data-oid="9:zuki8">
                                +{job.benefits.length - 3} more
                            </span>
                        )}
                    </div>
                </div>
            )}

            {/* Footer Row */}
            <div className="flex justify-between items-end" data-oid="6jp2bk0">
                <div className="flex-1" data-oid="n:0zsyl">
                    <div className="flex items-center text-gray-600 mb-2" data-oid="s8aft5d">
                        <svg
                            className="h-4 w-4 mr-2 text-[hsl(196,80%,45%)]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="-eqrgq3"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                data-oid="8eyjksi"
                            />
                        </svg>
                        <span className="text-sm" data-oid="oakmwhc">
                            <span className="font-medium" data-oid="gv2wdqk">
                                Posted:
                            </span>{' '}
                            {formatDate(job.postedDate)}
                        </span>
                    </div>

                    <div className="flex items-start" data-oid="3gx5obu">
                        <svg
                            className="h-4 w-4 mr-2 mt-0.5 text-[hsl(196,80%,45%)] flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="wgrdw3e"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                data-oid="ml09jxh"
                            />
                        </svg>
                        <div className="flex-1" data-oid="jq6m8sg">
                            <span className="text-sm font-medium text-gray-700" data-oid="9tht8xz">
                                Skills Required:
                            </span>
                            <div className="flex flex-wrap gap-1 mt-1" data-oid="p35obx9">
                                {job.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                                        data-oid=".evjtsq"
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
                    data-oid=".akdk_9"
                >
                    <button
                        onClick={handleApplyClick}
                        className={`${viewMode === 'grid' ? 'flex-1 mr-3' : 'flex-1'} px-4 py-2 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-md font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2`}
                        data-oid="o1im8po"
                    >
                        <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="vyy-ciq"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                data-oid="c2ukjrk"
                            />
                        </svg>
                        Apply Now
                    </button>

                    <button
                        onClick={handleViewDetails}
                        className="px-4 py-2 border border-[hsl(196,80%,45%)] text-[hsl(196,80%,45%)] rounded-md text-sm font-medium hover:bg-[hsl(196,80%,45%)]/10 transition-all duration-300 flex items-center gap-2"
                        data-oid="ty8zru4"
                    >
                        <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="ls1b1fo"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                data-oid="lf9a6z1"
                            />

                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                data-oid="qx.j3go"
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
                        data-oid="npljuq9"
                    >
                        <svg
                            className="h-5 w-5"
                            fill={isSaved ? 'currentColor' : 'none'}
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="rug7b4d"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                data-oid="seik3_-"
                            />
                        </svg>
                    </button>

                    <button
                        onClick={handleShare}
                        className="p-2 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 transition-all duration-300"
                        title="Share job"
                        data-oid="xkk.-pn"
                    >
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="s2773ts"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                                data-oid="ev3rn0e"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Hover effect overlay */}
            <div
                className="absolute inset-0 bg-gradient-to-r from-[hsl(196,80%,45%)]/5 to-[hsl(175,70%,41%)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
                data-oid="p.jhtaw"
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
                data-oid="r6n3z9s"
            />

            <QuickApplyModal
                job={job}
                isOpen={showQuickApplyModal}
                onClose={() => setShowQuickApplyModal(false)}
                onSubmit={handleApplicationSubmit}
                data-oid="opxm2qz"
            />

            <JobApplicationModal
                job={job}
                isOpen={showApplicationModal}
                onClose={() => setShowApplicationModal(false)}
                onSubmit={handleApplicationSubmit}
                data-oid="68a9wc."
            />

            <ApplicationSuccessModal
                isOpen={showSuccessModal}
                onClose={() => setShowSuccessModal(false)}
                jobTitle={job.title}
                companyName={job.company}
                data-oid="twvx9oy"
            />
        </div>
    );
}
