"use client";

import { useState } from "react";
import { Job } from "@/app/jobs/page";
import JobDetailsModal from "./JobDetailsModal";
import JobApplicationModal from "./JobApplicationModal";
import ApplicationSuccessModal from "./ApplicationSuccessModal";
import QuickApplyModal from "./QuickApplyModal";
import { useAuthAction } from "@/lib/auth/useAuthAction";

interface JobCardProps {
  job: Job;
  viewMode?: "grid" | "list";
  isInternship?: boolean;
}

export default function JobCard({
  job,
  viewMode = "list",
  isInternship = false,
}: JobCardProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [showQuickApplyModal, setShowQuickApplyModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { navigateWithAuth, isAuthenticated } = useAuthAction();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return "1 day ago";
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
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
    const jobTitleSlug = job.title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
    const basePath = isInternship ? "/internships" : "/jobs";
    const applyPath = `${basePath}/apply/${companySlug}/${jobTitleSlug}`;

    // Use auth-protected navigation
    navigateWithAuth(applyPath);
  };

  const handleViewDetails = () => {
    const companySlug = job.company
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
    const jobTitleSlug = job.title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
    const basePath = isInternship ? "/internships" : "/jobs";
    const detailsPath = `${basePath}/view-details/${companySlug}/${jobTitleSlug}`;

    // Use auth-protected navigation
    navigateWithAuth(detailsPath);
  };

  const handleApplicationSubmit = (applicationData: any) => {
    console.log("Application submitted:", applicationData);
    setShowApplicationModal(false);
    setShowQuickApplyModal(false);
    setShowSuccessModal(true);
  };

  return (
    <div
      className={`bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-[hsl(210,30%,95%)] p-4 sm:p-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-[hsl(196,80%,45%)] relative overflow-hidden group ${
        viewMode === "grid" ? "h-full" : ""
      }`}
      role="listitem"
      data-oid="xhzsxwm"
    >
      {/* Badges Container */}
      <div
        className="absolute top-3 right-3 sm:top-4 sm:right-4 flex flex-col gap-1 sm:gap-2 z-10"
        data-oid="1fvu8:."
      >
        {job.isUrgent && (
          <span
            className="bg-red-500 text-white text-xs font-bold px-2 py-1 sm:px-3 rounded-full animate-pulse shadow-lg"
            data-oid="to-nxe7"
          >
            🔥{" "}
            <span className="hidden sm:inline" data-oid="frrez3l">
              URGENT HIRING
            </span>
          </span>
        )}
        {job.isFeatured && (
          <span
            className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white text-xs font-bold px-2 py-1 sm:px-3 rounded-full"
            data-oid="zva5d0_"
          >
            ⭐{" "}
            <span className="hidden sm:inline" data-oid="94qvi2a">
              FEATURED
            </span>
          </span>
        )}
      </div>

      {/* Remote Badge */}
      {job.isRemote && (
        <div
          className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10"
          data-oid="vtunpa9"
        >
          <span
            className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full"
            data-oid="p172bt7"
          >
            🏠 Remote
          </span>
        </div>
      )}

      {/* Header Section */}
      <div className="mb-4 sm:mb-6 mt-8 sm:mt-0" data-oid="zrr7gke">
        <div
          className="flex items-start justify-between mb-3"
          data-oid="8-9iw6a"
        >
          <div className="flex-1 min-w-0 pr-2" data-oid="q-jm4rd">
            <h3
              className="text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-[hsl(196,80%,45%)] transition-colors duration-300 line-clamp-2"
              data-oid="7cj2y3d"
            >
              {job.title}
            </h3>
            <div
              className="flex flex-wrap items-center gap-2 mb-2"
              data-oid="zppnm0i"
            >
              <p
                className="text-[hsl(196,80%,45%)] font-semibold text-base sm:text-lg"
                data-oid="59pfrv5"
              >
                {job.company}
              </p>
              {job.companySize && (
                <span
                  className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full hidden sm:inline"
                  data-oid="ps1q3fh"
                >
                  {job.companySize} employees
                </span>
              )}
            </div>
            {job.industry && (
              <p className="text-sm text-gray-600 truncate" data-oid="v13p:p6">
                {job.industry} • {job.companyType}
              </p>
            )}
          </div>
        </div>

        {/* Salary/Stipend and Applicant Count */}
        <div
          className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4"
          data-oid="b8f6sj_"
        >
          {job.salary && (
            <div className="flex items-center gap-1" data-oid=".bdr15r">
              <div className="flex items-center gap-1" data-oid="mc2-jmt">
                <svg
                  className="h-4 w-4 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="ko_zdhy"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    data-oid="q3q6h5d"
                  />
                </svg>
                <span
                  className="text-green-600 font-medium text-sm"
                  data-oid="gwj6fpv"
                >
                  {job.salary}
                </span>
              </div>
            </div>
          )}
          {job.applicantCount && (
            <span
              className="text-xs text-gray-500 bg-blue-50 px-2 sm:px-3 py-1 rounded-full"
              data-oid="09z13zu"
            >
              👥 {job.applicantCount}{" "}
              <span className="hidden sm:inline" data-oid="yxcv-4w">
                applicants
              </span>
            </span>
          )}
          {isInternship && (job as any).duration && (
            <span
              className="text-xs text-purple-600 bg-purple-50 px-2 sm:px-3 py-1 rounded-full"
              data-oid="mlrpru8"
            >
              ⏱️ {(job as any).duration}
            </span>
          )}
        </div>
      </div>

      {/* Details Row */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4"
        data-oid="ed_vewa"
      >
        <div className="flex items-center text-gray-600" data-oid="bhql-ft">
          <svg
            className="h-4 w-4 mr-2 text-[hsl(196,80%,45%)] flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            data-oid="ta:z68q"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              data-oid="lzsh:mk"
            />

            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              data-oid="6zq4nl0"
            />
          </svg>
          <span className="text-sm truncate" data-oid="m32g7q-">
            <span className="font-medium" data-oid="5:zn3i2">
              Location:
            </span>{" "}
            {job.location}
          </span>
        </div>
        <div className="flex items-center text-gray-600" data-oid="0d_kel6">
          <svg
            className="h-4 w-4 mr-2 text-[hsl(196,80%,45%)] flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            data-oid="n5o1ia:"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
              data-oid="vzbq02r"
            />
          </svg>
          <span className="text-sm truncate" data-oid="sxci-3x">
            <span className="font-medium" data-oid="i414i1.">
              Experience:
            </span>{" "}
            {job.experienceRequired}
          </span>
        </div>
      </div>

      {/* Employment Type & Job Type */}
      <div className="flex flex-wrap gap-2 mb-4" data-oid="etspf5r">
        <span
          className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded"
          data-oid="zwc9922"
        >
          {job.jobType}
        </span>
        <span
          className="bg-purple-50 text-purple-700 text-xs font-medium px-2.5 py-1 rounded"
          data-oid="gncl71l"
        >
          {job.employmentType}
        </span>
      </div>

      {/* Benefits Preview */}
      {job.benefits && job.benefits.length > 0 && (
        <div className="mb-4" data-oid="62j0xba">
          <div className="flex items-center mb-2" data-oid="-2_yt_-">
            <svg
              className="h-4 w-4 mr-2 text-[hsl(196,80%,45%)] flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              data-oid="u76mu2r"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                data-oid="f-5-8cp"
              />
            </svg>
            <span
              className="text-sm font-medium text-gray-700"
              data-oid="g:2-5n-"
            >
              Benefits:
            </span>
          </div>
          <div className="flex flex-wrap gap-1" data-oid="ir1xw85">
            {job.benefits.slice(0, 3).map((benefit, index) => (
              <span
                key={index}
                className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded"
                data-oid="tk1o8h_"
              >
                {benefit}
              </span>
            ))}
            {job.benefits.length > 3 && (
              <span
                className="text-xs text-gray-500 px-2 py-1"
                data-oid="2oesw0s"
              >
                +{job.benefits.length - 3} more
              </span>
            )}
          </div>
        </div>
      )}

      {/* Footer Row */}
      <div
        className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4"
        data-oid="azrn81q"
      >
        <div className="flex-1 min-w-0" data-oid="148ah25">
          <div
            className="flex items-center text-gray-600 mb-2"
            data-oid="ym_pn_s"
          >
            <svg
              className="h-4 w-4 mr-2 text-[hsl(196,80%,45%)] flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              data-oid="bk5-kit"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                data-oid="ne3r833"
              />
            </svg>
            <span className="text-sm" data-oid=".v0s4e7">
              <span className="font-medium" data-oid="yt1zo66">
                Posted:
              </span>{" "}
              {formatDate(job.postedDate)}
            </span>
          </div>

          <div className="flex items-start" data-oid="2pu0d_j">
            <svg
              className="h-4 w-4 mr-2 mt-0.5 text-[hsl(196,80%,45%)] flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              data-oid="9qa0pox"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                data-oid="cntbx4t"
              />
            </svg>
            <div className="flex-1 min-w-0" data-oid="-pnmn:3">
              <span
                className="text-sm font-medium text-gray-700"
                data-oid="z51y.ms"
              >
                Skills Required:
              </span>
              <div className="flex flex-wrap gap-1 mt-1" data-oid="myyk4sa">
                {job.skills.slice(0, 4).map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                    data-oid="8zv0410"
                  >
                    {skill}
                  </span>
                ))}
                {job.skills.length > 4 && (
                  <span
                    className="text-xs text-gray-500 px-2 py-1"
                    data-oid="0mqmx9d"
                  >
                    +{job.skills.length - 4} more
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div
          className={`flex items-center gap-2 ${viewMode === "grid" ? "flex-col w-full" : "flex-row flex-shrink-0"}`}
          data-oid="5:80z4p"
        >
          <button
            onClick={handleApplyClick}
            className={`${viewMode === "grid" ? "w-full" : "flex-1 min-w-0"} px-3 sm:px-4 py-2 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-md font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm`}
            data-oid="q8ypn2t"
          >
            <svg
              className="h-4 w-4 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              data-oid="lv.uzr3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                data-oid="lkiy1g-"
              />
            </svg>
            <span className="truncate" data-oid="kpixbsu">
              {isInternship ? "Apply for Internship" : "Apply Now"}
            </span>
          </button>

          <div
            className={`flex gap-2 ${viewMode === "grid" ? "w-full justify-center" : ""}`}
            data-oid="7hkr9k5"
          >
            <button
              onClick={handleViewDetails}
              className="px-3 sm:px-4 py-2 border border-[hsl(196,80%,45%)] text-[hsl(196,80%,45%)] rounded-md text-sm font-medium hover:bg-[hsl(196,80%,45%)]/10 transition-all duration-300 flex items-center gap-2"
              data-oid="paxvz8b"
            >
              <svg
                className="h-4 w-4 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                data-oid="skbkrw3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  data-oid="owjqw:7"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  data-oid="9yym7pv"
                />
              </svg>
              <span className="hidden sm:inline" data-oid="n8:-5ap">
                View Details
              </span>
            </button>

            <button
              onClick={handleSave}
              className={`p-2 rounded-md transition-all duration-300 ${
                isSaved
                  ? "bg-red-100 text-red-600 hover:bg-red-200"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              title={isSaved ? "Remove from saved" : "Save job"}
              data-oid="5det0k-"
            >
              <svg
                className="h-4 w-4 sm:h-5 sm:w-5"
                fill={isSaved ? "currentColor" : "none"}
                stroke="currentColor"
                viewBox="0 0 24 24"
                data-oid="szjzcoy"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  data-oid="y.zzxpo"
                />
              </svg>
            </button>

            <button
              onClick={handleShare}
              className="p-2 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 transition-all duration-300"
              title="Share job"
              data-oid="4wt0zi3"
            >
              <svg
                className="h-4 w-4 sm:h-5 sm:w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                data-oid="s8cofi7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                  data-oid="djb8r:-"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Hover effect overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[hsl(196,80%,45%)]/5 to-[hsl(175,70%,41%)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
        data-oid="wwq9s8w"
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
        data-oid="0mwj_5o"
      />

      <QuickApplyModal
        job={job}
        isOpen={showQuickApplyModal}
        onClose={() => setShowQuickApplyModal(false)}
        onSubmit={handleApplicationSubmit}
        data-oid="e3f3wbr"
      />

      <JobApplicationModal
        job={job}
        isOpen={showApplicationModal}
        onClose={() => setShowApplicationModal(false)}
        onSubmit={handleApplicationSubmit}
        data-oid="um2phvv"
      />

      <ApplicationSuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        jobTitle={job.title}
        companyName={job.company}
        data-oid="_0nrv1c"
      />
    </div>
  );
}
