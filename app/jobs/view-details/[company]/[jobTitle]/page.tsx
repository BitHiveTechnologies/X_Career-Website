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
        <MainNavbar data-oid="zo-..s0" />
        <div
          className="min-h-screen bg-gradient-to-b from-[hsl(196,60%,95%)] to-white flex items-center justify-center"
          data-oid="fvxal-d"
        >
          <div
            className="animate-spin rounded-full h-12 w-12 border-b-2 border-[hsl(196,80%,45%)]"
            data-oid="vkkrsqd"
          ></div>
        </div>
      </>
    );
  }

  if (!job) {
    return (
      <>
        <MainNavbar data-oid="jwyu94c" />
        <div
          className="min-h-screen bg-gradient-to-b from-[hsl(196,60%,95%)] to-white flex items-center justify-center"
          data-oid="gj:rf0a"
        >
          <div className="text-center" data-oid="916v_qm">
            <h1
              className="text-2xl font-bold text-gray-800 mb-4"
              data-oid="1g:-w:v"
            >
              Job Not Found
            </h1>
            <p className="text-gray-600 mb-6" data-oid="80zpuep">
              The job you're looking for doesn't exist.
            </p>
            <button
              onClick={() => router.push("/jobs")}
              className="px-6 py-3 bg-[hsl(196,80%,45%)] text-white rounded-lg hover:bg-[hsl(196,80%,40%)] transition-colors"
              data-oid="shjgbjh"
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
      <MainNavbar data-oid="od9qeep" />
      <div
        className="min-h-screen bg-gradient-to-b from-[hsl(196,60%,95%)] to-white"
        data-oid="r3tijnf"
      >
        {/* Breadcrumb */}
        <div
          className="bg-white/80 backdrop-blur-sm border-b border-gray-200"
          data-oid="on1waff"
        >
          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"
            data-oid="m14uux3"
          >
            <nav
              className="flex items-center space-x-2 text-sm text-gray-600"
              data-oid="iqavq.h"
            >
              <Link
                href="/jobs"
                className="hover:text-[hsl(196,80%,45%)] transition-colors"
                data-oid="427o:-z"
              >
                Jobs
              </Link>
              <span data-oid="dkeci.a">›</span>
              <Link
                href={`/jobs?company=${job.company}`}
                className="hover:text-[hsl(196,80%,45%)] transition-colors"
                data-oid="j:-kdyj"
              >
                {job.company}
              </Link>
              <span data-oid="e93rx8l">›</span>
              <span className="text-gray-800 font-medium" data-oid="k2-k776">
                {job.title}
              </span>
            </nav>
          </div>
        </div>

        {/* Header Section */}
        <div
          className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white"
          data-oid="piv5_:5"
        >
          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
            data-oid="1_gephh"
          >
            <div
              className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8"
              data-oid=".33sknq"
            >
              <div className="flex-1" data-oid="j6e_fcd">
                <div
                  className="flex items-center gap-4 mb-4"
                  data-oid="ppi0pla"
                >
                  <div
                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
                    data-oid="a8l24h1"
                  >
                    <span
                      className="text-2xl font-bold text-white"
                      data-oid="lhx:9b:"
                    >
                      {job.company.charAt(0)}
                    </span>
                  </div>
                  <div data-oid="xp:t2r8">
                    <h1
                      className="text-3xl lg:text-4xl font-bold mb-2"
                      data-oid="gi.5vok"
                    >
                      {job.title}
                    </h1>
                    <p className="text-xl text-blue-100" data-oid=".1l.d7d">
                      {job.company}
                    </p>
                  </div>
                </div>

                <div
                  className="flex flex-wrap items-center gap-6 text-blue-100 mb-6"
                  data-oid="prv0-nh"
                >
                  <div className="flex items-center gap-2" data-oid="nog5iv:">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="giz9.ji"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        data-oid=":qit4iq"
                      />

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        data-oid="m_ks_fk"
                      />
                    </svg>
                    <span data-oid="u7m.29q">{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2" data-oid="cwdsifj">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="kk1xkx-"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                        data-oid="snigs2r"
                      />
                    </svg>
                    <span data-oid="vsp:dm4">{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-2" data-oid="r7ymc3z">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="9w14pky"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                        data-oid="-udt6aj"
                      />
                    </svg>
                    <span data-oid="_lo76ld">{job.experienceRequired}</span>
                  </div>
                  <div className="flex items-center gap-2" data-oid="rrncehl">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="8lq5u3n"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        data-oid="sl0wab0"
                      />
                    </svg>
                    <span data-oid="6b6inhi">
                      Posted {formatDate(job.postedDate)}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3" data-oid="wwu41a9">
                  {job.isUrgent && (
                    <span
                      className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full animate-pulse"
                      data-oid="ants1ez"
                    >
                      🔥 URGENT HIRING
                    </span>
                  )}
                  {job.isFeatured && (
                    <span
                      className="bg-yellow-500 text-white text-sm font-bold px-3 py-1 rounded-full"
                      data-oid="ko419iy"
                    >
                      ⭐ FEATURED
                    </span>
                  )}
                  {job.isRemote && (
                    <span
                      className="bg-green-500 text-white text-sm font-medium px-3 py-1 rounded-full"
                      data-oid="bd:-5yt"
                    >
                      🏠 Remote
                    </span>
                  )}
                  <span
                    className="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full"
                    data-oid="43u1v89"
                  >
                    {job.jobType}
                  </span>
                  <span
                    className="bg-purple-500 text-white text-sm font-medium px-3 py-1 rounded-full"
                    data-oid="4auzdpr"
                  >
                    {job.employmentType}
                  </span>
                </div>
              </div>

              <div
                className="flex flex-col sm:flex-row lg:flex-col gap-4"
                data-oid="gxge16w"
              >
                <button
                  onClick={handleApply}
                  className="px-8 py-4 bg-white text-[hsl(196,80%,45%)] rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                  data-oid="u06_p09"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="c0-96db"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      data-oid="a1lpoln"
                    />
                  </svg>
                  Apply Now
                </button>
                <div className="flex gap-3" data-oid="aseph2e">
                  <button
                    onClick={handleSave}
                    className={`p-3 rounded-xl transition-all duration-300 ${
                      isSaved
                        ? "bg-red-500 text-white"
                        : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                    }`}
                    title={isSaved ? "Remove from saved" : "Save job"}
                    data-oid="p-bzsd6"
                  >
                    <svg
                      className="h-6 w-6"
                      fill={isSaved ? "currentColor" : "none"}
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="42m8.lj"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        data-oid="12cox4s"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={handleShare}
                    className="p-3 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white/30 transition-all duration-300"
                    title="Share job"
                    data-oid="sz-1p2t"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="f9vk_zc"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                        data-oid="32o4b__"
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
          data-oid="vz61w3j"
        >
          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"
            data-oid="9h01xbx"
          >
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              data-oid="7q51toz"
            >
              <div className="text-center" data-oid="frvzcmc">
                <div
                  className="text-2xl font-bold text-[hsl(196,80%,45%)]"
                  data-oid="ge4xkzl"
                >
                  {job.applicantCount}
                </div>
                <div className="text-sm text-gray-600" data-oid="0:aqe41">
                  Applicants
                </div>
              </div>
              <div className="text-center" data-oid="enusdd8">
                <div
                  className="text-2xl font-bold text-green-600"
                  data-oid="_06n30g"
                >
                  {job.companySize}
                </div>
                <div className="text-sm text-gray-600" data-oid="202lwep">
                  Company Size
                </div>
              </div>
              <div className="text-center" data-oid="bh7noh6">
                <div
                  className="text-2xl font-bold text-purple-600"
                  data-oid="a44vlfr"
                >
                  {job.industry}
                </div>
                <div className="text-sm text-gray-600" data-oid="1hra989">
                  Industry
                </div>
              </div>
              <div className="text-center" data-oid="rf37bp8">
                <div
                  className="text-2xl font-bold text-orange-600"
                  data-oid="z.x_90v"
                >
                  {Math.max(1, Math.floor(Math.random() * 15))} days
                </div>
                <div className="text-sm text-gray-600" data-oid="a8zxv-u">
                  Application Deadline
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
          data-oid="kzxf2z6"
        >
          <div className="grid lg:grid-cols-3 gap-8" data-oid="cm2:y_j">
            {/* Main Content */}
            <div className="lg:col-span-2" data-oid="lamwlw7">
              {/* Tabs */}
              <div
                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-gray-200 mb-8"
                data-oid="-4o5m9u"
              >
                <div className="border-b border-gray-200" data-oid="b4p94a:">
                  <nav className="flex space-x-8 px-6" data-oid="bikday8">
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
                        data-oid="5zk.:dd"
                      >
                        {tab.label}
                      </button>
                    ))}
                  </nav>
                </div>

                <div className="p-6" data-oid="mcp-0te">
                  {activeTab === "overview" && (
                    <div className="space-y-6" data-oid="akb_l:_">
                      <div data-oid="gml6pkw">
                        <h3
                          className="text-lg font-semibold text-gray-800 mb-3"
                          data-oid="_:125bw"
                        >
                          Job Description
                        </h3>
                        <div
                          className="prose prose-blue max-w-none"
                          data-oid="grs3t.n"
                        >
                          <p
                            className="text-gray-600 leading-relaxed mb-4"
                            data-oid="2tb2su:"
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
                            data-oid="ehxc1ho"
                          >
                            As a {job.title}, you will be responsible for
                            developing and maintaining high-quality software
                            solutions, collaborating with cross-functional
                            teams, and contributing to the overall success of
                            our products.
                          </p>
                          <p
                            className="text-gray-600 leading-relaxed"
                            data-oid="1vr2rrg"
                          >
                            Join us in building innovative solutions that impact
                            millions of users across India and beyond. We offer
                            a collaborative work environment, competitive
                            compensation, and excellent growth opportunities.
                          </p>
                        </div>
                      </div>

                      <div data-oid="11-0y3q">
                        <h3
                          className="text-lg font-semibold text-gray-800 mb-3"
                          data-oid=":9:xeak"
                        >
                          Key Responsibilities
                        </h3>
                        <ul className="space-y-2" data-oid="_4ds0se">
                          <li
                            className="flex items-start gap-3"
                            data-oid="fo5ct3s"
                          >
                            <div
                              className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                              data-oid="eg6c7up"
                            ></div>
                            <span className="text-gray-700" data-oid="30ka5le">
                              Develop and maintain high-quality software
                              applications
                            </span>
                          </li>
                          <li
                            className="flex items-start gap-3"
                            data-oid="0rbrnq7"
                          >
                            <div
                              className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                              data-oid="0_aapg2"
                            ></div>
                            <span className="text-gray-700" data-oid="spjtgsb">
                              Collaborate with cross-functional teams to define
                              and implement features
                            </span>
                          </li>
                          <li
                            className="flex items-start gap-3"
                            data-oid="r_li074"
                          >
                            <div
                              className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                              data-oid="f2p_9p:"
                            ></div>
                            <span className="text-gray-700" data-oid="8xgx8ch">
                              Write clean, maintainable, and efficient code
                            </span>
                          </li>
                          <li
                            className="flex items-start gap-3"
                            data-oid="a25io0:"
                          >
                            <div
                              className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                              data-oid="fqbtgtu"
                            ></div>
                            <span className="text-gray-700" data-oid="0zgljce">
                              Participate in code reviews and maintain coding
                              standards
                            </span>
                          </li>
                          <li
                            className="flex items-start gap-3"
                            data-oid="evm2_bt"
                          >
                            <div
                              className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                              data-oid="fb4zbkj"
                            ></div>
                            <span className="text-gray-700" data-oid="8o9bbpv">
                              Troubleshoot and debug applications to optimize
                              performance
                            </span>
                          </li>
                        </ul>
                      </div>

                      {job.benefits && job.benefits.length > 0 && (
                        <div data-oid="5byb23p">
                          <h3
                            className="text-lg font-semibold text-gray-800 mb-3"
                            data-oid="ef.-fjr"
                          >
                            Benefits & Perks
                          </h3>
                          <div
                            className="grid grid-cols-1 md:grid-cols-2 gap-3"
                            data-oid="1iya903"
                          >
                            {job.benefits.map((benefit, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                                data-oid="wddseg8"
                              >
                                <div
                                  className="w-2 h-2 bg-green-500 rounded-full"
                                  data-oid="ocrg6q-"
                                ></div>
                                <span
                                  className="text-gray-700"
                                  data-oid="m9rhd9s"
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
                    <div className="space-y-6" data-oid="74nubmp">
                      <div data-oid="rwwv3nt">
                        <h3
                          className="text-lg font-semibold text-gray-800 mb-3"
                          data-oid="i52ypdy"
                        >
                          Required Skills
                        </h3>
                        <div
                          className="flex flex-wrap gap-2"
                          data-oid="rcdzh8x"
                        >
                          {job.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-2 rounded-full"
                              data-oid="e_.-oz-"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div data-oid=":6nilf_">
                        <h3
                          className="text-lg font-semibold text-gray-800 mb-3"
                          data-oid="uyrwi6y"
                        >
                          Experience & Qualifications
                        </h3>
                        <ul className="space-y-3" data-oid="ghybcjn">
                          <li
                            className="flex items-start gap-3"
                            data-oid="yug-kpq"
                          >
                            <div
                              className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                              data-oid="s0fkc:c"
                            ></div>
                            <span className="text-gray-700" data-oid="pbym5ls">
                              Experience: {job.experienceRequired}
                            </span>
                          </li>
                          <li
                            className="flex items-start gap-3"
                            data-oid="9621-db"
                          >
                            <div
                              className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                              data-oid="6vb7vv7"
                            ></div>
                            <span className="text-gray-700" data-oid="tq9fn36">
                              Bachelor's degree in Computer Science,
                              Engineering, or related field
                            </span>
                          </li>
                          <li
                            className="flex items-start gap-3"
                            data-oid="55yguve"
                          >
                            <div
                              className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                              data-oid="emndot:"
                            ></div>
                            <span className="text-gray-700" data-oid="566pfw:">
                              Strong problem-solving and analytical skills
                            </span>
                          </li>
                          <li
                            className="flex items-start gap-3"
                            data-oid="_qn26_j"
                          >
                            <div
                              className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                              data-oid="uj5a6_q"
                            ></div>
                            <span className="text-gray-700" data-oid="8g8oma5">
                              Excellent communication and teamwork abilities
                            </span>
                          </li>
                          <li
                            className="flex items-start gap-3"
                            data-oid="5ed3r-f"
                          >
                            <div
                              className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                              data-oid="s40p1u5"
                            ></div>
                            <span className="text-gray-700" data-oid="q0qzru0">
                              Passion for learning new technologies and best
                              practices
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div data-oid="xu359fn">
                        <h3
                          className="text-lg font-semibold text-gray-800 mb-3"
                          data-oid="tus96yf"
                        >
                          Nice to Have Skills
                        </h3>
                        <div
                          className="flex flex-wrap gap-2"
                          data-oid="4h44ukj"
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
                              data-oid="ewisjcf"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "company" && (
                    <div className="space-y-6" data-oid="a0bdka5">
                      <div data-oid="avp25t6">
                        <h3
                          className="text-lg font-semibold text-gray-800 mb-3"
                          data-oid="pl2116d"
                        >
                          About {job.company}
                        </h3>
                        <p
                          className="text-gray-600 leading-relaxed mb-4"
                          data-oid="ite8ug0"
                        >
                          {job.company} is a leading {job.industry} company that
                          has been revolutionizing the industry with innovative
                          solutions and cutting-edge technology. We are
                          committed to creating products that make a real
                          difference in people's lives.
                        </p>
                        <p
                          className="text-gray-600 leading-relaxed"
                          data-oid="u5.90u9"
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
                        data-oid="ad-j:ve"
                      >
                        <div
                          className="bg-blue-50 p-4 rounded-lg text-center"
                          data-oid="o29.xji"
                        >
                          <div
                            className="text-2xl font-bold text-[hsl(196,80%,45%)]"
                            data-oid="x2gt2kq"
                          >
                            {job.companySize}
                          </div>
                          <div
                            className="text-sm text-gray-600"
                            data-oid="kl0d:rt"
                          >
                            Employees
                          </div>
                        </div>
                        <div
                          className="bg-green-50 p-4 rounded-lg text-center"
                          data-oid="4zpv588"
                        >
                          <div
                            className="text-2xl font-bold text-green-600"
                            data-oid="3-bf7jh"
                          >
                            {job.industry}
                          </div>
                          <div
                            className="text-sm text-gray-600"
                            data-oid="6.xn:nt"
                          >
                            Industry
                          </div>
                        </div>
                        <div
                          className="bg-purple-50 p-4 rounded-lg text-center"
                          data-oid="m8mcbw3"
                        >
                          <div
                            className="text-2xl font-bold text-purple-600"
                            data-oid="o_mq-fa"
                          >
                            {job.companyType}
                          </div>
                          <div
                            className="text-sm text-gray-600"
                            data-oid="9dinuof"
                          >
                            Company Type
                          </div>
                        </div>
                      </div>

                      <div data-oid="2n4oaz6">
                        <h3
                          className="text-lg font-semibold text-gray-800 mb-3"
                          data-oid="iy2:52r"
                        >
                          Company Culture
                        </h3>
                        <div
                          className="grid grid-cols-1 md:grid-cols-2 gap-4"
                          data-oid="7iyks6k"
                        >
                          <div
                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                            data-oid="vt8-3_m"
                          >
                            <div
                              className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"
                              data-oid="1bt-f.g"
                            >
                              <span
                                className="text-blue-600 text-sm"
                                data-oid="07r36km"
                              >
                                🚀
                              </span>
                            </div>
                            <div data-oid="-qqdw59">
                              <div
                                className="font-medium text-gray-800"
                                data-oid="c3v-8fz"
                              >
                                Innovation
                              </div>
                              <div
                                className="text-sm text-gray-600"
                                data-oid="1u.2tf4"
                              >
                                Cutting-edge technology
                              </div>
                            </div>
                          </div>
                          <div
                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                            data-oid=":-z68m9"
                          >
                            <div
                              className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"
                              data-oid="5ak.1n4"
                            >
                              <span
                                className="text-green-600 text-sm"
                                data-oid="2pvjzow"
                              >
                                🤝
                              </span>
                            </div>
                            <div data-oid="i9mr:63">
                              <div
                                className="font-medium text-gray-800"
                                data-oid="aeodwpr"
                              >
                                Collaboration
                              </div>
                              <div
                                className="text-sm text-gray-600"
                                data-oid="onjgoab"
                              >
                                Team-first approach
                              </div>
                            </div>
                          </div>
                          <div
                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                            data-oid="-cmp2ay"
                          >
                            <div
                              className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center"
                              data-oid="epi9jw."
                            >
                              <span
                                className="text-purple-600 text-sm"
                                data-oid="oygt2on"
                              >
                                📈
                              </span>
                            </div>
                            <div data-oid="4kkd.ns">
                              <div
                                className="font-medium text-gray-800"
                                data-oid=".sg_r93"
                              >
                                Growth
                              </div>
                              <div
                                className="text-sm text-gray-600"
                                data-oid="e3_04yr"
                              >
                                Career development
                              </div>
                            </div>
                          </div>
                          <div
                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                            data-oid="x9r6cni"
                          >
                            <div
                              className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center"
                              data-oid="79c3bs_"
                            >
                              <span
                                className="text-orange-600 text-sm"
                                data-oid="9yo:nkk"
                              >
                                ⚖️
                              </span>
                            </div>
                            <div data-oid="cp-72xp">
                              <div
                                className="font-medium text-gray-800"
                                data-oid="lgq-0av"
                              >
                                Work-Life Balance
                              </div>
                              <div
                                className="text-sm text-gray-600"
                                data-oid="1th2ed:"
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
                    <div className="space-y-6" data-oid="0w:67o1">
                      <div className="text-center py-8" data-oid="uwx739c">
                        <div className="text-6xl mb-4" data-oid="dt3im6w">
                          ⭐
                        </div>
                        <h3
                          className="text-2xl font-bold text-gray-800 mb-2"
                          data-oid="vyy5t0j"
                        >
                          4.2 out of 5
                        </h3>
                        <p className="text-gray-600 mb-4" data-oid="_j5gd-t">
                          Based on 127 employee reviews
                        </p>
                        <div
                          className="flex justify-center space-x-1 mb-6"
                          data-oid="lc7p7wm"
                        >
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className={`h-6 w-6 ${star <= 4 ? "text-yellow-400" : "text-gray-300"}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              data-oid="1cgye_a"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                data-oid="5aprino"
                              />
                            </svg>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4" data-oid="1dcrxaz">
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
                            data-oid="oi4tvo_"
                          >
                            <div
                              className="flex items-center justify-between mb-2"
                              data-oid="1ebgx._"
                            >
                              <div
                                className="flex items-center space-x-1"
                                data-oid="3nrh1aw"
                              >
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <svg
                                    key={star}
                                    className={`h-4 w-4 ${star <= review.rating ? "text-yellow-400" : "text-gray-300"}`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    data-oid="5js1eo1"
                                  >
                                    <path
                                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                      data-oid="5uiwklv"
                                    />
                                  </svg>
                                ))}
                              </div>
                              <span
                                className="text-sm text-gray-500"
                                data-oid="a-713rx"
                              >
                                {review.date}
                              </span>
                            </div>
                            <h4
                              className="font-semibold text-gray-800 mb-1"
                              data-oid="jdnyf8w"
                            >
                              {review.title}
                            </h4>
                            <p
                              className="text-gray-600 text-sm mb-2"
                              data-oid="_qdj8gp"
                            >
                              {review.review}
                            </p>
                            <p
                              className="text-xs text-gray-500"
                              data-oid="7q..rvg"
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
            <div className="lg:col-span-1" data-oid="2bfo3-2">
              <div className="sticky top-24 space-y-6" data-oid="9lvfic_">
                {/* Apply Card */}
                <div
                  className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-gray-200 p-6"
                  data-oid="j2n.57d"
                >
                  <h3
                    className="text-lg font-semibold text-gray-800 mb-4"
                    data-oid="kf-qf6-"
                  >
                    Ready to Apply?
                  </h3>
                  <button
                    onClick={handleApply}
                    className="w-full px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 mb-4"
                    data-oid="x1da3oz"
                  >
                    Apply Now
                  </button>
                  <div
                    className="text-sm text-gray-600 space-y-2"
                    data-oid="016uhvf"
                  >
                    <div className="flex items-center gap-2" data-oid="7jytvrp">
                      <svg
                        className="h-4 w-4 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        data-oid="ppofq5q"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                          data-oid="oah6f:u"
                        />
                      </svg>
                      <span data-oid="0fvwjs7">Quick application process</span>
                    </div>
                    <div className="flex items-center gap-2" data-oid="t_81.py">
                      <svg
                        className="h-4 w-4 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        data-oid="2vnizc1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                          data-oid="4g9c5qo"
                        />
                      </svg>
                      <span data-oid="-0yg3la">Response within 3-5 days</span>
                    </div>
                    <div className="flex items-center gap-2" data-oid="j_rcgxe">
                      <svg
                        className="h-4 w-4 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        data-oid="-nf0tk:"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                          data-oid="9vq_.x8"
                        />
                      </svg>
                      <span data-oid="g-1g6:f">Direct contact with HR</span>
                    </div>
                  </div>
                </div>

                {/* Job Summary */}
                <div
                  className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-gray-200 p-6"
                  data-oid="xck5a5d"
                >
                  <h3
                    className="text-lg font-semibold text-gray-800 mb-4"
                    data-oid="wy19_ss"
                  >
                    Job Summary
                  </h3>
                  <div className="space-y-3 text-sm" data-oid="w0gxk5c">
                    <div className="flex justify-between" data-oid="lrnct1_">
                      <span className="text-gray-600" data-oid=".ogayf:">
                        Job Type:
                      </span>
                      <span className="font-medium" data-oid="nby06bu">
                        {job.jobType}
                      </span>
                    </div>
                    <div className="flex justify-between" data-oid="zl84bdv">
                      <span className="text-gray-600" data-oid="shvt4kk">
                        Employment:
                      </span>
                      <span className="font-medium" data-oid="2ybt3oh">
                        {job.employmentType}
                      </span>
                    </div>
                    <div className="flex justify-between" data-oid="tx-2e6y">
                      <span className="text-gray-600" data-oid="pb1:m:t">
                        Experience:
                      </span>
                      <span className="font-medium" data-oid="je4z.np">
                        {job.experienceRequired}
                      </span>
                    </div>
                    <div className="flex justify-between" data-oid=":buq:w.">
                      <span className="text-gray-600" data-oid="x1p-wrx">
                        Salary:
                      </span>
                      <span className="font-medium" data-oid="1a7.zz5">
                        {job.salary}
                      </span>
                    </div>
                    <div className="flex justify-between" data-oid=".wbf__g">
                      <span className="text-gray-600" data-oid="d1efrz-">
                        Location:
                      </span>
                      <span className="font-medium" data-oid="j92ab9r">
                        {job.location}
                      </span>
                    </div>
                    <div className="flex justify-between" data-oid="ph35.nh">
                      <span className="text-gray-600" data-oid="-fikdd.">
                        Remote:
                      </span>
                      <span className="font-medium" data-oid="7p2yfp-">
                        {job.isRemote ? "Yes" : "No"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Similar Jobs */}
                <div
                  className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-gray-200 p-6"
                  data-oid="t1cn.m7"
                >
                  <h3
                    className="text-lg font-semibold text-gray-800 mb-4"
                    data-oid="yqta2tl"
                  >
                    Similar Jobs
                  </h3>
                  <div className="space-y-3" data-oid="n_5cdn-">
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
                        data-oid="ekwc_dl"
                      >
                        <h4
                          className="font-medium text-gray-800 text-sm"
                          data-oid="vw:81kg"
                        >
                          {similarJob.title}
                        </h4>
                        <p className="text-xs text-gray-600" data-oid="e_r5y.4">
                          {similarJob.company}
                        </p>
                        <p
                          className="text-xs text-[hsl(196,80%,45%)] font-medium"
                          data-oid=".uxh429"
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
          data-oid="0jlcjo2"
        >
          <button
            onClick={handleApply}
            className="px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-full font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-110 shadow-2xl flex items-center gap-2 animate-bounce"
            data-oid="sc-ubbv"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              data-oid="644c90m"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
                data-oid="8szvvz."
              />
            </svg>
            Quick Apply
          </button>
        </div>
      </div>
    </>
  );
}
