"use client";

import MainNavbar from "@/components/mainNavbar";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Job } from "@/app/jobs/page";
import Link from "next/link";
import { findJobBySlug } from "@/lib/mockData";

export default function JobDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [job, setJob] = useState<Job | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<
    "overview" | "requirements" | "company" | "reviews"
  >("overview");
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
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");
      const jobTitleSlug = job.title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");
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
    return date.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (isLoading) {
    return (
      <>
        <MainNavbar data-oid="n7bee-3" />
        <div
          className="min-h-screen bg-gradient-to-b from-[hsl(196,60%,95%)] to-white flex items-center justify-center"
          data-oid="8:6ywf_"
        >
          <div
            className="animate-spin rounded-full h-12 w-12 border-b-2 border-[hsl(196,80%,45%)]"
            data-oid="axrvid4"
          ></div>
        </div>
      </>
    );
  }

  if (!job) {
    return (
      <>
        <MainNavbar data-oid="yaxfydk" />
        <div
          className="min-h-screen bg-gradient-to-b from-[hsl(196,60%,95%)] to-white flex items-center justify-center"
          data-oid="ci:cwbu"
        >
          <div className="text-center" data-oid="vzw591l">
            <h1
              className="text-2xl font-bold text-gray-800 mb-4"
              data-oid="4t_aih1"
            >
              Job Not Found
            </h1>
            <p className="text-gray-600 mb-6" data-oid="_gxwqri">
              The job you're looking for doesn't exist.
            </p>
            <button
              onClick={() => router.push("/jobs")}
              className="px-6 py-3 bg-[hsl(196,80%,45%)] text-white rounded-lg hover:bg-[hsl(196,80%,40%)] transition-colors"
              data-oid="ygdm6ms"
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
      <MainNavbar data-oid="a:1yr8j" />
      <div
        className="min-h-screen bg-gradient-to-b from-[hsl(196,60%,95%)] to-white"
        data-oid="p89i2ta"
      >
        {/* Breadcrumb */}
        <div
          className="bg-white/80 backdrop-blur-sm border-b border-gray-200"
          data-oid="ok2.6uh"
        >
          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"
            data-oid="j1zir23"
          >
            <nav
              className="flex items-center space-x-2 text-sm text-gray-600"
              data-oid="m0acsrl"
            >
              <Link
                href="/jobs"
                className="hover:text-[hsl(196,80%,45%)] transition-colors"
                data-oid="d:dgyh:"
              >
                Jobs
              </Link>
              <span data-oid=":p8dlve">›</span>
              <Link
                href={`/jobs?company=${job.company}`}
                className="hover:text-[hsl(196,80%,45%)] transition-colors"
                data-oid="5fbp7ro"
              >
                {job.company}
              </Link>
              <span data-oid=":xtiks7">›</span>
              <span className="text-gray-800 font-medium" data-oid="9m_i:dj">
                {job.title}
              </span>
            </nav>
          </div>
        </div>

        {/* Header Section */}
        <div
          className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white"
          data-oid=".e3wfce"
        >
          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
            data-oid="arw86mi"
          >
            <div
              className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8"
              data-oid="ct2-:rg"
            >
              <div className="flex-1" data-oid="-azgoql">
                <div
                  className="flex items-center gap-4 mb-4"
                  data-oid="4etkc:s"
                >
                  <div
                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
                    data-oid="61n1b5c"
                  >
                    <span
                      className="text-2xl font-bold text-white"
                      data-oid="vrjriil"
                    >
                      {job.company.charAt(0)}
                    </span>
                  </div>
                  <div data-oid="-22gr.8">
                    <h1
                      className="text-3xl lg:text-4xl font-bold mb-2"
                      data-oid=":x3i8cz"
                    >
                      {job.title}
                    </h1>
                    <p className="text-xl text-blue-100" data-oid="z_w3wp.">
                      {job.company}
                    </p>
                  </div>
                </div>

                <div
                  className="flex flex-wrap items-center gap-6 text-blue-100 mb-6"
                  data-oid="mtpj:16"
                >
                  <div className="flex items-center gap-2" data-oid="4:nevpp">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="_vm-7ic"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        data-oid="kr74ktt"
                      />

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        data-oid="-ds7az."
                      />
                    </svg>
                    <span data-oid="0lfqi07">{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2" data-oid="ee6u8y9">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="niby.zj"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                        data-oid="hi2n5vt"
                      />
                    </svg>
                    <span data-oid="tdw2pxy">{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-2" data-oid="4pk_sj6">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="td0olb6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                        data-oid="a6-9_t:"
                      />
                    </svg>
                    <span data-oid=":3eawdm">{job.experienceRequired}</span>
                  </div>
                  <div className="flex items-center gap-2" data-oid="vr7lamc">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="wmrm5wl"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        data-oid="fscybye"
                      />
                    </svg>
                    <span data-oid="i3a64ba">
                      Posted {formatDate(job.postedDate)}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3" data-oid="oq15zjn">
                  {job.isUrgent && (
                    <span
                      className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full animate-pulse"
                      data-oid="o.c72k4"
                    >
                      🔥 URGENT HIRING
                    </span>
                  )}
                  {job.isFeatured && (
                    <span
                      className="bg-yellow-500 text-white text-sm font-bold px-3 py-1 rounded-full"
                      data-oid="67j21on"
                    >
                      ⭐ FEATURED
                    </span>
                  )}
                  {job.isRemote && (
                    <span
                      className="bg-green-500 text-white text-sm font-medium px-3 py-1 rounded-full"
                      data-oid="6:jevry"
                    >
                      🏠 Remote
                    </span>
                  )}
                  <span
                    className="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full"
                    data-oid="hoxzzej"
                  >
                    {job.jobType}
                  </span>
                  <span
                    className="bg-purple-500 text-white text-sm font-medium px-3 py-1 rounded-full"
                    data-oid="8n40_oo"
                  >
                    {job.employmentType}
                  </span>
                </div>
              </div>

              <div
                className="flex flex-col sm:flex-row lg:flex-col gap-4"
                data-oid="tbl5v17"
              >
                <button
                  onClick={handleApply}
                  className="px-8 py-4 bg-white text-[hsl(196,80%,45%)] rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                  data-oid="gaqy780"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="yxr.ncl"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      data-oid="rw84qqa"
                    />
                  </svg>
                  Apply Now
                </button>
                <div className="flex gap-3" data-oid="105:hg.">
                  <button
                    onClick={handleSave}
                    className={`p-3 rounded-xl transition-all duration-300 ${
                      isSaved
                        ? "bg-red-500 text-white"
                        : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                    }`}
                    title={isSaved ? "Remove from saved" : "Save job"}
                    data-oid="vin71_v"
                  >
                    <svg
                      className="h-6 w-6"
                      fill={isSaved ? "currentColor" : "none"}
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="01glv36"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        data-oid="u:q-dj2"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={handleShare}
                    className="p-3 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white/30 transition-all duration-300"
                    title="Share job"
                    data-oid="diq1-.m"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="7ofdsud"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                        data-oid="bnmu9vr"
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
          data-oid="ygatcbh"
        >
          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"
            data-oid="0.6-e7:"
          >
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              data-oid="3x7lq2-"
            >
              <div className="text-center" data-oid="3jc_gbn">
                <div
                  className="text-2xl font-bold text-[hsl(196,80%,45%)]"
                  data-oid="kvcv0ru"
                >
                  {job.applicantCount}
                </div>
                <div className="text-sm text-gray-600" data-oid="0aythf.">
                  Applicants
                </div>
              </div>
              <div className="text-center" data-oid="rv8df:7">
                <div
                  className="text-2xl font-bold text-green-600"
                  data-oid="rt3k7ow"
                >
                  {job.companySize}
                </div>
                <div className="text-sm text-gray-600" data-oid="--jisg-">
                  Company Size
                </div>
              </div>
              <div className="text-center" data-oid="5wwdxy6">
                <div
                  className="text-2xl font-bold text-purple-600"
                  data-oid="pl9w:5r"
                >
                  {job.industry}
                </div>
                <div className="text-sm text-gray-600" data-oid="ivfl9k5">
                  Industry
                </div>
              </div>
              <div className="text-center" data-oid="c8vd051">
                <div
                  className="text-2xl font-bold text-orange-600"
                  data-oid="j9vhcuc"
                >
                  {Math.max(1, Math.floor(Math.random() * 15))} days
                </div>
                <div className="text-sm text-gray-600" data-oid="yfh23wl">
                  Application Deadline
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
          data-oid="tx.r43s"
        >
          <div className="grid lg:grid-cols-3 gap-8" data-oid="f:1mq7i">
            {/* Main Content */}
            <div className="lg:col-span-2" data-oid="flh0l2t">
              {/* Tabs */}
              <div
                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-gray-200 mb-8"
                data-oid="yy75b4g"
              >
                <div className="border-b border-gray-200" data-oid="fqact1h">
                  <nav className="flex space-x-8 px-6" data-oid="f7pfhlq">
                    {[
                      { id: "overview", label: "Job Overview" },
                      { id: "requirements", label: "Requirements" },
                      { id: "company", label: "About Company" },
                      { id: "reviews", label: "Reviews" },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                          activeTab === tab.id
                            ? "border-[hsl(196,80%,45%)] text-[hsl(196,80%,45%)]"
                            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                        }`}
                        data-oid="yg2gncr"
                      >
                        {tab.label}
                      </button>
                    ))}
                  </nav>
                </div>

                <div className="p-6" data-oid="34qp6go">
                  {activeTab === "overview" && (
                    <div className="space-y-6" data-oid=".01gm5w">
                      <div data-oid="vo6cunr">
                        <h3
                          className="text-lg font-semibold text-gray-800 mb-3"
                          data-oid="q2t1qvk"
                        >
                          Job Description
                        </h3>
                        <div
                          className="prose prose-blue max-w-none"
                          data-oid="vt3i:u0"
                        >
                          <p
                            className="text-gray-600 leading-relaxed mb-4"
                            data-oid="2tbb1l6"
                          >
                            We are looking for a talented {job.title} to join
                            our dynamic team at {job.company}. This is an
                            excellent opportunity for someone with{" "}
                            {job.experienceRequired} of experience to work on
                            cutting-edge projects and grow their career in the{" "}
                            {job.industry} industry.
                          </p>
                          <p
                            className="text-gray-600 leading-relaxed mb-4"
                            data-oid="uhhjky0"
                          >
                            As a {job.title}, you will be responsible for
                            developing and maintaining high-quality software
                            solutions, collaborating with cross-functional
                            teams, and contributing to the overall success of
                            our products.
                          </p>
                          <p
                            className="text-gray-600 leading-relaxed"
                            data-oid="2ykq_ku"
                          >
                            Join us in building innovative solutions that impact
                            millions of users across India and beyond. We offer
                            a collaborative work environment, competitive
                            compensation, and excellent growth opportunities.
                          </p>
                        </div>
                      </div>

                      <div data-oid="y-iiy51">
                        <h3
                          className="text-lg font-semibold text-gray-800 mb-3"
                          data-oid="q5u_eio"
                        >
                          Key Responsibilities
                        </h3>
                        <ul className="space-y-2" data-oid="4j0.y7e">
                          <li
                            className="flex items-start gap-3"
                            data-oid="0chuv5s"
                          >
                            <div
                              className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                              data-oid="0916ief"
                            ></div>
                            <span className="text-gray-700" data-oid="re3g_io">
                              Develop and maintain high-quality software
                              applications
                            </span>
                          </li>
                          <li
                            className="flex items-start gap-3"
                            data-oid="fy256cs"
                          >
                            <div
                              className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                              data-oid="hd5_zfi"
                            ></div>
                            <span className="text-gray-700" data-oid="uxl8:ao">
                              Collaborate with cross-functional teams to define
                              and implement features
                            </span>
                          </li>
                          <li
                            className="flex items-start gap-3"
                            data-oid="k:03ut8"
                          >
                            <div
                              className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                              data-oid="5pq-3b6"
                            ></div>
                            <span className="text-gray-700" data-oid="v9y3tkp">
                              Write clean, maintainable, and efficient code
                            </span>
                          </li>
                          <li
                            className="flex items-start gap-3"
                            data-oid="obs_bck"
                          >
                            <div
                              className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                              data-oid="oa3147s"
                            ></div>
                            <span className="text-gray-700" data-oid="i70os3h">
                              Participate in code reviews and maintain coding
                              standards
                            </span>
                          </li>
                          <li
                            className="flex items-start gap-3"
                            data-oid="htr8x3:"
                          >
                            <div
                              className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                              data-oid="_aovt1c"
                            ></div>
                            <span className="text-gray-700" data-oid="y3avamy">
                              Troubleshoot and debug applications to optimize
                              performance
                            </span>
                          </li>
                        </ul>
                      </div>

                      {job.benefits && job.benefits.length > 0 && (
                        <div data-oid="zljv9_g">
                          <h3
                            className="text-lg font-semibold text-gray-800 mb-3"
                            data-oid="-td919-"
                          >
                            Benefits & Perks
                          </h3>
                          <div
                            className="grid grid-cols-1 md:grid-cols-2 gap-3"
                            data-oid="w7wgopc"
                          >
                            {job.benefits.map((benefit, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                                data-oid="2vb7oki"
                              >
                                <div
                                  className="w-2 h-2 bg-green-500 rounded-full"
                                  data-oid="p:f7dng"
                                ></div>
                                <span
                                  className="text-gray-700"
                                  data-oid="rsraped"
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

                  {activeTab === "requirements" && (
                    <div className="space-y-6" data-oid="9378mih">
                      <div data-oid="aqmb.go">
                        <h3
                          className="text-lg font-semibold text-gray-800 mb-3"
                          data-oid="zorj-3w"
                        >
                          Required Skills
                        </h3>
                        <div
                          className="flex flex-wrap gap-2"
                          data-oid=".tw0ytk"
                        >
                          {job.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-2 rounded-full"
                              data-oid="8b7d:32"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div data-oid="odmdb4j">
                        <h3
                          className="text-lg font-semibold text-gray-800 mb-3"
                          data-oid="8so--qp"
                        >
                          Experience & Qualifications
                        </h3>
                        <ul className="space-y-3" data-oid="8dil04u">
                          <li
                            className="flex items-start gap-3"
                            data-oid="qgjxavb"
                          >
                            <div
                              className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                              data-oid="lw:jecv"
                            ></div>
                            <span className="text-gray-700" data-oid="ouzahti">
                              Experience: {job.experienceRequired}
                            </span>
                          </li>
                          <li
                            className="flex items-start gap-3"
                            data-oid="t__5q5v"
                          >
                            <div
                              className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                              data-oid="uav-0_h"
                            ></div>
                            <span className="text-gray-700" data-oid="3g1vbi-">
                              Bachelor's degree in Computer Science,
                              Engineering, or related field
                            </span>
                          </li>
                          <li
                            className="flex items-start gap-3"
                            data-oid="4d5m8oc"
                          >
                            <div
                              className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                              data-oid="jrkmmd1"
                            ></div>
                            <span className="text-gray-700" data-oid="b_jc9tg">
                              Strong problem-solving and analytical skills
                            </span>
                          </li>
                          <li
                            className="flex items-start gap-3"
                            data-oid="n4.z.qg"
                          >
                            <div
                              className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                              data-oid="bm9z6ga"
                            ></div>
                            <span className="text-gray-700" data-oid="xjy-tng">
                              Excellent communication and teamwork abilities
                            </span>
                          </li>
                          <li
                            className="flex items-start gap-3"
                            data-oid="62enrc-"
                          >
                            <div
                              className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                              data-oid="src6hwg"
                            ></div>
                            <span className="text-gray-700" data-oid="9yszyyz">
                              Passion for learning new technologies and best
                              practices
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div data-oid="s983qrj">
                        <h3
                          className="text-lg font-semibold text-gray-800 mb-3"
                          data-oid="0xc515c"
                        >
                          Nice to Have Skills
                        </h3>
                        <div
                          className="flex flex-wrap gap-2"
                          data-oid="6jpqhrr"
                        >
                          {[
                            "Git",
                            "Docker",
                            "AWS",
                            "Agile",
                            "Testing",
                            "CI/CD",
                          ].map((skill, index) => (
                            <span
                              key={index}
                              className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full border border-gray-300"
                              data-oid="f2zpu6n"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "company" && (
                    <div className="space-y-6" data-oid="5mdxmmm">
                      <div data-oid="di0viqd">
                        <h3
                          className="text-lg font-semibold text-gray-800 mb-3"
                          data-oid="pjstyww"
                        >
                          About {job.company}
                        </h3>
                        <p
                          className="text-gray-600 leading-relaxed mb-4"
                          data-oid="ct07qad"
                        >
                          {job.company} is a leading {job.industry} company that
                          has been revolutionizing the industry with innovative
                          solutions and cutting-edge technology. We are
                          committed to creating products that make a real
                          difference in people's lives.
                        </p>
                        <p
                          className="text-gray-600 leading-relaxed"
                          data-oid="m62-aea"
                        >
                          Our team consists of passionate professionals who are
                          dedicated to excellence and continuous learning. We
                          foster a culture of innovation, collaboration, and
                          growth where every team member can thrive and make an
                          impact.
                        </p>
                      </div>

                      <div
                        className="grid grid-cols-1 md:grid-cols-3 gap-4"
                        data-oid="yx_y2t8"
                      >
                        <div
                          className="bg-blue-50 p-4 rounded-lg text-center"
                          data-oid="r02lerv"
                        >
                          <div
                            className="text-2xl font-bold text-[hsl(196,80%,45%)]"
                            data-oid="jgq8lcj"
                          >
                            {job.companySize}
                          </div>
                          <div
                            className="text-sm text-gray-600"
                            data-oid="1q7j7o4"
                          >
                            Employees
                          </div>
                        </div>
                        <div
                          className="bg-green-50 p-4 rounded-lg text-center"
                          data-oid="2p8tvf."
                        >
                          <div
                            className="text-2xl font-bold text-green-600"
                            data-oid="46ut2gj"
                          >
                            {job.industry}
                          </div>
                          <div
                            className="text-sm text-gray-600"
                            data-oid="rtsivqd"
                          >
                            Industry
                          </div>
                        </div>
                        <div
                          className="bg-purple-50 p-4 rounded-lg text-center"
                          data-oid="iv_53kr"
                        >
                          <div
                            className="text-2xl font-bold text-purple-600"
                            data-oid="er6-3eb"
                          >
                            {job.companyType}
                          </div>
                          <div
                            className="text-sm text-gray-600"
                            data-oid="ebj:edg"
                          >
                            Company Type
                          </div>
                        </div>
                      </div>

                      <div data-oid=":k72_51">
                        <h3
                          className="text-lg font-semibold text-gray-800 mb-3"
                          data-oid="xbu9stz"
                        >
                          Company Culture
                        </h3>
                        <div
                          className="grid grid-cols-1 md:grid-cols-2 gap-4"
                          data-oid="03o9jut"
                        >
                          <div
                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                            data-oid="u1jy2h1"
                          >
                            <div
                              className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"
                              data-oid="76cayoz"
                            >
                              <span
                                className="text-blue-600 text-sm"
                                data-oid="48j73h7"
                              >
                                🚀
                              </span>
                            </div>
                            <div data-oid="coy5v0g">
                              <div
                                className="font-medium text-gray-800"
                                data-oid="j24k3gu"
                              >
                                Innovation
                              </div>
                              <div
                                className="text-sm text-gray-600"
                                data-oid="2hq9kb9"
                              >
                                Cutting-edge technology
                              </div>
                            </div>
                          </div>
                          <div
                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                            data-oid=":q_es67"
                          >
                            <div
                              className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"
                              data-oid="b:oyqf7"
                            >
                              <span
                                className="text-green-600 text-sm"
                                data-oid="9k86f20"
                              >
                                🤝
                              </span>
                            </div>
                            <div data-oid="9qxv5ji">
                              <div
                                className="font-medium text-gray-800"
                                data-oid="1d:t-z7"
                              >
                                Collaboration
                              </div>
                              <div
                                className="text-sm text-gray-600"
                                data-oid="r7--qia"
                              >
                                Team-first approach
                              </div>
                            </div>
                          </div>
                          <div
                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                            data-oid="samwy6j"
                          >
                            <div
                              className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center"
                              data-oid="0z9nq6g"
                            >
                              <span
                                className="text-purple-600 text-sm"
                                data-oid="pj0a0fr"
                              >
                                📈
                              </span>
                            </div>
                            <div data-oid="n476nvk">
                              <div
                                className="font-medium text-gray-800"
                                data-oid="np3afkp"
                              >
                                Growth
                              </div>
                              <div
                                className="text-sm text-gray-600"
                                data-oid="fb-op.1"
                              >
                                Career development
                              </div>
                            </div>
                          </div>
                          <div
                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                            data-oid="jt4g04d"
                          >
                            <div
                              className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center"
                              data-oid="gu0vvli"
                            >
                              <span
                                className="text-orange-600 text-sm"
                                data-oid="ekkqtv0"
                              >
                                ⚖️
                              </span>
                            </div>
                            <div data-oid="j7h0gnw">
                              <div
                                className="font-medium text-gray-800"
                                data-oid="txsr3.d"
                              >
                                Work-Life Balance
                              </div>
                              <div
                                className="text-sm text-gray-600"
                                data-oid="znq4vx:"
                              >
                                Flexible working
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "reviews" && (
                    <div className="space-y-6" data-oid="klsbv7x">
                      <div className="text-center py-8" data-oid="qeuoiql">
                        <div className="text-6xl mb-4" data-oid="j_jm0py">
                          ⭐
                        </div>
                        <h3
                          className="text-2xl font-bold text-gray-800 mb-2"
                          data-oid="5y9xkmv"
                        >
                          4.2 out of 5
                        </h3>
                        <p className="text-gray-600 mb-4" data-oid="13msoui">
                          Based on 127 employee reviews
                        </p>
                        <div
                          className="flex justify-center space-x-1 mb-6"
                          data-oid="kg:j9yd"
                        >
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className={`h-6 w-6 ${star <= 4 ? "text-yellow-400" : "text-gray-300"}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              data-oid="twootlh"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                data-oid="i57jvew"
                              />
                            </svg>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4" data-oid="g4h_qd2">
                        {[
                          {
                            rating: 5,
                            title: "Great place to work!",
                            review:
                              "Amazing work culture and great learning opportunities. The team is very supportive and the projects are challenging.",
                            author: "Software Engineer",
                            date: "2 weeks ago",
                          },
                          {
                            rating: 4,
                            title: "Good growth opportunities",
                            review:
                              "The company provides excellent growth opportunities and the work-life balance is decent. Management is approachable.",
                            author: "Frontend Developer",
                            date: "1 month ago",
                          },
                          {
                            rating: 4,
                            title: "Innovative environment",
                            review:
                              "Love working here! The company encourages innovation and provides latest tools and technologies to work with.",
                            author: "Product Manager",
                            date: "2 months ago",
                          },
                        ].map((review, index) => (
                          <div
                            key={index}
                            className="bg-gray-50 rounded-lg p-4"
                            data-oid="x8nc:fw"
                          >
                            <div
                              className="flex items-center justify-between mb-2"
                              data-oid="yk8v1ji"
                            >
                              <div
                                className="flex items-center space-x-1"
                                data-oid="dm3pf3q"
                              >
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <svg
                                    key={star}
                                    className={`h-4 w-4 ${star <= review.rating ? "text-yellow-400" : "text-gray-300"}`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    data-oid="tfa0-zw"
                                  >
                                    <path
                                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                      data-oid="muh7:g0"
                                    />
                                  </svg>
                                ))}
                              </div>
                              <span
                                className="text-sm text-gray-500"
                                data-oid="49vmh9h"
                              >
                                {review.date}
                              </span>
                            </div>
                            <h4
                              className="font-semibold text-gray-800 mb-1"
                              data-oid="k5q47mp"
                            >
                              {review.title}
                            </h4>
                            <p
                              className="text-gray-600 text-sm mb-2"
                              data-oid="7ohnlxh"
                            >
                              {review.review}
                            </p>
                            <p
                              className="text-xs text-gray-500"
                              data-oid="sqys0jq"
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
            <div className="lg:col-span-1" data-oid=".x-_hl7">
              <div className="sticky top-24 space-y-6" data-oid="oj30m:q">
                {/* Apply Card */}
                <div
                  className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-gray-200 p-6"
                  data-oid="pd:gw6s"
                >
                  <h3
                    className="text-lg font-semibold text-gray-800 mb-4"
                    data-oid="mo9bzvz"
                  >
                    Ready to Apply?
                  </h3>
                  <button
                    onClick={handleApply}
                    className="w-full px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 mb-4"
                    data-oid="w4i_en6"
                  >
                    Apply Now
                  </button>
                  <div
                    className="text-sm text-gray-600 space-y-2"
                    data-oid="6bkyc-u"
                  >
                    <div className="flex items-center gap-2" data-oid="7mx4p:b">
                      <svg
                        className="h-4 w-4 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        data-oid="0g3et1v"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                          data-oid="zpjs8gi"
                        />
                      </svg>
                      <span data-oid="eqv31d1">Quick application process</span>
                    </div>
                    <div className="flex items-center gap-2" data-oid="hzbd_9m">
                      <svg
                        className="h-4 w-4 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        data-oid="e6xggne"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                          data-oid="sju.oyt"
                        />
                      </svg>
                      <span data-oid="fx2ted4">Response within 3-5 days</span>
                    </div>
                    <div className="flex items-center gap-2" data-oid="6j2-hum">
                      <svg
                        className="h-4 w-4 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        data-oid="7ha8z6y"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                          data-oid="59t9r7h"
                        />
                      </svg>
                      <span data-oid="l8bb3xl">Direct contact with HR</span>
                    </div>
                  </div>
                </div>

                {/* Job Summary */}
                <div
                  className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-gray-200 p-6"
                  data-oid="g.u.4h_"
                >
                  <h3
                    className="text-lg font-semibold text-gray-800 mb-4"
                    data-oid="r82hzl9"
                  >
                    Job Summary
                  </h3>
                  <div className="space-y-3 text-sm" data-oid="d8e_tdb">
                    <div className="flex justify-between" data-oid="ov6qasw">
                      <span className="text-gray-600" data-oid="diyqumu">
                        Job Type:
                      </span>
                      <span className="font-medium" data-oid="yjhlbpv">
                        {job.jobType}
                      </span>
                    </div>
                    <div className="flex justify-between" data-oid="ghrst9w">
                      <span className="text-gray-600" data-oid="y.qwmcx">
                        Employment:
                      </span>
                      <span className="font-medium" data-oid="kl7g_2r">
                        {job.employmentType}
                      </span>
                    </div>
                    <div className="flex justify-between" data-oid="uqhi_1i">
                      <span className="text-gray-600" data-oid="-zl7m.m">
                        Experience:
                      </span>
                      <span className="font-medium" data-oid="fsv6gyu">
                        {job.experienceRequired}
                      </span>
                    </div>
                    <div className="flex justify-between" data-oid="o337et9">
                      <span className="text-gray-600" data-oid="vik71rr">
                        Salary:
                      </span>
                      <span className="font-medium" data-oid="j29laqr">
                        {job.salary}
                      </span>
                    </div>
                    <div className="flex justify-between" data-oid="n9zzjfi">
                      <span className="text-gray-600" data-oid="t.a0e1l">
                        Location:
                      </span>
                      <span className="font-medium" data-oid="14p8q0.">
                        {job.location}
                      </span>
                    </div>
                    <div className="flex justify-between" data-oid="q_pbb-l">
                      <span className="text-gray-600" data-oid="eu2::il">
                        Remote:
                      </span>
                      <span className="font-medium" data-oid="gctc6re">
                        {job.isRemote ? "Yes" : "No"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Similar Jobs */}
                <div
                  className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-gray-200 p-6"
                  data-oid="-aq-5_l"
                >
                  <h3
                    className="text-lg font-semibold text-gray-800 mb-4"
                    data-oid="gh2bh7i"
                  >
                    Similar Jobs
                  </h3>
                  <div className="space-y-3" data-oid="k_z57d_">
                    {[
                      {
                        title: "React Developer",
                        company: "TechCorp",
                        salary: "₹8-12 LPA",
                      },
                      {
                        title: "Frontend Engineer",
                        company: "StartupXYZ",
                        salary: "₹6-10 LPA",
                      },
                      {
                        title: "UI Developer",
                        company: "BigTech",
                        salary: "₹10-15 LPA",
                      },
                    ].map((similarJob, index) => (
                      <div
                        key={index}
                        className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                        data-oid="378fxz1"
                      >
                        <h4
                          className="font-medium text-gray-800 text-sm"
                          data-oid="qdewfct"
                        >
                          {similarJob.title}
                        </h4>
                        <p className="text-xs text-gray-600" data-oid="rwtdgh:">
                          {similarJob.company}
                        </p>
                        <p
                          className="text-xs text-[hsl(196,80%,45%)] font-medium"
                          data-oid="_::elwx"
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
        <div
          className="fixed bottom-6 right-6 z-50 lg:hidden"
          data-oid="4hpzb7i"
        >
          <button
            onClick={handleApply}
            className="px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-full font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-110 shadow-2xl flex items-center gap-2 animate-bounce"
            data-oid="9:ge:h6"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              data-oid="u2vut0k"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
                data-oid=":do:fjf"
              />
            </svg>
            Quick Apply
          </button>
        </div>
      </div>
    </>
  );
}
