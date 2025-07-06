"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/lib/auth/AuthContext";
import { useRouter } from "next/navigation";
import MainNavbar from "@/components/mainNavbar";
import { mockJobs, mockInternships } from "@/lib/mockData";
import { Job } from "@/app/jobs/page";
import { Internship } from "@/lib/mockData";
import Link from "next/link";

type ApplicationStatus =
  | "applied"
  | "under-review"
  | "interview"
  | "rejected"
  | "accepted";

interface Application {
  id: number;
  job: Job | Internship;
  isInternship: boolean;
  appliedDate: string;
  status: ApplicationStatus;
  lastUpdated: string;
  applicationMethod: "quick-apply" | "full-application" | "external";
  notes: string;
  interviewDate?: string;
  feedback?: string;
  nextSteps?: string;
}

const statusConfig = {
  applied: {
    label: "Applied",
    color: "bg-blue-100 text-blue-800",
    icon: "📝",
    description: "Application submitted successfully",
  },
  "under-review": {
    label: "Under Review",
    color: "bg-yellow-100 text-yellow-800",
    icon: "👀",
    description: "Application is being reviewed",
  },
  interview: {
    label: "Interview Scheduled",
    color: "bg-purple-100 text-purple-800",
    icon: "🎯",
    description: "Interview round scheduled",
  },
  rejected: {
    label: "Not Selected",
    color: "bg-red-100 text-red-800",
    icon: "❌",
    description: "Application was not successful",
  },
  accepted: {
    label: "Offer Received",
    color: "bg-green-100 text-green-800",
    icon: "🎉",
    description: "Congratulations! Offer received",
  },
};

export default function ApplicationsPage() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"all" | ApplicationStatus>("all");
  const [sortBy, setSortBy] = useState<"recent" | "status" | "company">(
    "recent",
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedApplication, setSelectedApplication] =
    useState<Application | null>(null);

  // Mock applications data (in real app, this would come from backend)
  const [applications, setApplications] = useState<Application[]>([
    {
      id: 1,
      job: mockJobs[0],
      isInternship: false,
      appliedDate: "2024-01-20",
      status: "interview",
      lastUpdated: "2024-01-22",
      applicationMethod: "full-application",
      notes: "Really excited about this role. Great company culture.",
      interviewDate: "2024-01-25",
      nextSteps: "Technical interview scheduled for Friday",
    },
    {
      id: 2,
      job: mockJobs[1],
      isInternship: false,
      appliedDate: "2024-01-19",
      status: "under-review",
      lastUpdated: "2024-01-21",
      applicationMethod: "quick-apply",
      notes: "Backend role with good growth opportunities",
    },
    {
      id: 3,
      job: mockInternships[0],
      isInternship: true,
      appliedDate: "2024-01-18",
      status: "accepted",
      lastUpdated: "2024-01-23",
      applicationMethod: "full-application",
      notes: "Perfect internship for gaining frontend experience",
      feedback: "Impressed with your portfolio and enthusiasm for learning!",
    },
    {
      id: 4,
      job: mockJobs[3],
      isInternship: false,
      appliedDate: "2024-01-17",
      status: "applied",
      lastUpdated: "2024-01-17",
      applicationMethod: "external",
      notes: "Data science role at top e-commerce company",
    },
    {
      id: 5,
      job: mockJobs[2],
      isInternship: false,
      appliedDate: "2024-01-15",
      status: "rejected",
      lastUpdated: "2024-01-20",
      applicationMethod: "quick-apply",
      notes: "Full-stack position with competitive salary",
      feedback:
        "Thank you for your interest. We decided to move forward with other candidates.",
    },
  ]);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login?redirect=/applications");
    }
  }, [isAuthenticated, router]);

  const filteredApplications = applications.filter((app) => {
    const matchesTab = activeTab === "all" || app.status === activeTab;
    const matchesSearch =
      searchQuery === "" ||
      app.job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.job.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const sortedApplications = [...filteredApplications].sort((a, b) => {
    switch (sortBy) {
      case "recent":
        return (
          new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
        );

      case "status":
        return a.status.localeCompare(b.status);
      case "company":
        return a.job.company.localeCompare(b.job.company);
      default:
        return 0;
    }
  });

  const getStatusCounts = () => {
    const counts = applications.reduce(
      (acc, app) => {
        acc[app.status] = (acc[app.status] || 0) + 1;
        return acc;
      },
      {} as Record<ApplicationStatus, number>,
    );
    return counts;
  };

  const statusCounts = getStatusCounts();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return "1 day ago";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return `${Math.ceil(diffDays / 30)} months ago`;
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[hsl(210,50%,98%)] to-[hsl(196,60%,95%)]"
      data-oid="rj5_91u"
    >
      <MainNavbar data-oid="6zr7vkx" />

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        data-oid="c0123hj"
      >
        {/* Header */}
        <div
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 mb-8"
          data-oid=".if162g"
        >
          <div
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
            data-oid="olko_4g"
          >
            <div data-oid="p5v2co.">
              <h1
                className="text-3xl font-bold text-gray-800 mb-2"
                data-oid="r4q2abw"
              >
                My Applications
              </h1>
              <p className="text-gray-600" data-oid="jq2-8wb">
                Track your job and internship applications •{" "}
                {applications.length} total applications
              </p>
            </div>

            <div className="flex items-center gap-4" data-oid="fbiv1qh">
              <Link
                href="/jobs"
                className="px-6 py-2 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 shadow-lg"
                data-oid="l487t6m"
              >
                Apply to More Jobs
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8"
          data-oid="n0nvnt-"
        >
          <div
            className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-4 text-center"
            data-oid="qu5obyj"
          >
            <div
              className="text-2xl font-bold text-gray-800"
              data-oid="z:ofe7a"
            >
              {applications.length}
            </div>
            <div className="text-sm text-gray-600" data-oid="lljz8t9">
              Total Applied
            </div>
          </div>
          {Object.entries(statusConfig).map(([status, config]) => (
            <div
              key={status}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-4 text-center"
              data-oid=":z7uall"
            >
              <div className="text-xl mb-1" data-oid="nyky:9o">
                {config.icon}
              </div>
              <div
                className="text-2xl font-bold text-gray-800"
                data-oid="72qct21"
              >
                {statusCounts[status as ApplicationStatus] || 0}
              </div>
              <div className="text-sm text-gray-600" data-oid="byv061m">
                {config.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-4 gap-8" data-oid="c03xuvj">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1" data-oid="dwy97wr">
            <div
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6 sticky top-8"
              data-oid="y---dth"
            >
              <h3
                className="text-lg font-semibold text-gray-800 mb-4"
                data-oid="m_aur6q"
              >
                Filters
              </h3>

              {/* Search */}
              <div className="mb-6" data-oid="yd.omae">
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  data-oid="06wcexw"
                >
                  Search
                </label>
                <div className="relative" data-oid="o:l73qf">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search applications..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                    data-oid="6tndq2n"
                  />

                  <svg
                    className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="yb.1wgk"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      data-oid="e929op4"
                    />
                  </svg>
                </div>
              </div>

              {/* Status Filter */}
              <div className="mb-6" data-oid="psm:ah2">
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  data-oid="2mfzp0q"
                >
                  Status
                </label>
                <div className="space-y-2" data-oid="5i2i2c1">
                  <button
                    onClick={() => setActiveTab("all")}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-all ${
                      activeTab === "all"
                        ? "bg-[hsl(196,80%,45%)] text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    data-oid="lobvpns"
                  >
                    <span
                      className="flex justify-between items-center"
                      data-oid="mw0kjka"
                    >
                      All Applications
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          activeTab === "all" ? "bg-white/20" : "bg-gray-200"
                        }`}
                        data-oid="tr-wnra"
                      >
                        {applications.length}
                      </span>
                    </span>
                  </button>
                  {Object.entries(statusConfig).map(([status, config]) => (
                    <button
                      key={status}
                      onClick={() => setActiveTab(status as ApplicationStatus)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all ${
                        activeTab === status
                          ? "bg-[hsl(196,80%,45%)] text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                      data-oid="lp:3ad5"
                    >
                      <span
                        className="flex justify-between items-center"
                        data-oid="vpz-3z4"
                      >
                        <span
                          className="flex items-center gap-2"
                          data-oid="txa2.0i"
                        >
                          {config.icon} {config.label}
                        </span>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            activeTab === status ? "bg-white/20" : "bg-gray-200"
                          }`}
                          data-oid="9rmlycf"
                        >
                          {statusCounts[status as ApplicationStatus] || 0}
                        </span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort By */}
              <div data-oid="y3rt5fp">
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  data-oid="3i:yxn:"
                >
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                  data-oid="2_xt0-t"
                >
                  <option value="recent" data-oid="8izsjn0">
                    Recently Updated
                  </option>
                  <option value="status" data-oid="w_uyfo.">
                    Status
                  </option>
                  <option value="company" data-oid="2gprc1.">
                    Company Name
                  </option>
                </select>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3" data-oid="sqyi0qh">
            {sortedApplications.length === 0 ? (
              <div
                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-12 text-center"
                data-oid="_.2ky9-"
              >
                <div className="max-w-md mx-auto" data-oid="fglo0uc">
                  <svg
                    className="h-24 w-24 mx-auto mb-6 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="bnaofpa"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      data-oid="q.pyx3w"
                    />
                  </svg>
                  <h3
                    className="text-xl font-semibold text-gray-800 mb-2"
                    data-oid="wipvftz"
                  >
                    {applications.length === 0
                      ? "No applications yet"
                      : "No applications match your filters"}
                  </h3>
                  <p className="text-gray-600 mb-6" data-oid="0pacwn1">
                    {applications.length === 0
                      ? "Start applying to jobs and internships to track your progress here."
                      : "Try adjusting your filters to see more results."}
                  </p>
                  <div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    data-oid="x7ot71:"
                  >
                    <Link
                      href="/jobs"
                      className="px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 shadow-lg"
                      data-oid="j8vjr_x"
                    >
                      Browse Jobs
                    </Link>
                    <Link
                      href="/internships"
                      className="px-6 py-3 border border-[hsl(196,80%,45%)] text-[hsl(196,80%,45%)] rounded-lg font-medium hover:bg-[hsl(196,80%,45%)]/10 transition-all duration-300"
                      data-oid="2kw2htn"
                    >
                      Browse Internships
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6" data-oid="h7-ow-c">
                {sortedApplications.map((application) => {
                  const statusInfo = statusConfig[application.status];
                  return (
                    <div
                      key={application.id}
                      className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 overflow-hidden hover:shadow-xl transition-all duration-300"
                      data-oid="-udl6n2"
                    >
                      <div className="p-6" data-oid="rfc8783">
                        {/* Header */}
                        <div
                          className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4"
                          data-oid="lx_-4a1"
                        >
                          <div className="flex-1" data-oid="elbgqwp">
                            <div
                              className="flex items-start gap-4"
                              data-oid="m9.qv6:"
                            >
                              <div
                                className="w-12 h-12 bg-[hsl(196,80%,45%)] rounded-lg flex items-center justify-center text-white font-bold text-lg"
                                data-oid="vk311bd"
                              >
                                {application.job.company.charAt(0)}
                              </div>
                              <div className="flex-1" data-oid="cr.tmwo">
                                <h3
                                  className="text-xl font-bold text-gray-800 mb-1"
                                  data-oid="vux9.8p"
                                >
                                  {application.job.title}
                                </h3>
                                <p
                                  className="text-[hsl(196,80%,45%)] font-semibold text-lg mb-2"
                                  data-oid="0xecc7_"
                                >
                                  {application.job.company}
                                </p>
                                <div
                                  className="flex flex-wrap items-center gap-4 text-sm text-gray-600"
                                  data-oid="dmrphr_"
                                >
                                  <span
                                    className="flex items-center gap-1"
                                    data-oid="h9as2hi"
                                  >
                                    <svg
                                      className="h-4 w-4"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                      data-oid="ge__:h9"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        data-oid="jehuvtg"
                                      />

                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        data-oid="sag:hgr"
                                      />
                                    </svg>
                                    {application.job.location}
                                  </span>
                                  <span
                                    className="flex items-center gap-1"
                                    data-oid="3hbkkum"
                                  >
                                    <svg
                                      className="h-4 w-4"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                      data-oid="vmp5j5r"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        data-oid="i17zzkv"
                                      />
                                    </svg>
                                    Applied{" "}
                                    {formatDate(application.appliedDate)}
                                  </span>
                                  <span
                                    className="flex items-center gap-1"
                                    data-oid="4az1o0g"
                                  >
                                    <svg
                                      className="h-4 w-4"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                      data-oid="4oea2q3"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                        data-oid=":2f-syy"
                                      />
                                    </svg>
                                    Updated{" "}
                                    {getTimeAgo(application.lastUpdated)}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            className="flex items-center gap-3"
                            data-oid="tnyi4v8"
                          >
                            <span
                              className={`px-4 py-2 rounded-full text-sm font-medium ${statusInfo.color}`}
                              data-oid="bja6632"
                            >
                              {statusInfo.icon} {statusInfo.label}
                            </span>
                            {application.isInternship && (
                              <span
                                className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full"
                                data-oid="4a9nf0m"
                              >
                                Internship
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Status Description */}
                        <div className="mb-4" data-oid="bu:y5r7">
                          <p className="text-gray-600" data-oid="l41ndlx">
                            {statusInfo.description}
                          </p>
                        </div>

                        {/* Application Details */}
                        <div
                          className="grid md:grid-cols-2 gap-6 mb-6"
                          data-oid="igsmvyk"
                        >
                          <div data-oid="_3zs:hz">
                            <h4
                              className="text-sm font-medium text-gray-700 mb-2"
                              data-oid="aw6z62q"
                            >
                              Application Method
                            </h4>
                            <div
                              className="flex items-center gap-2"
                              data-oid="-1-ku2x"
                            >
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-medium ${
                                  application.applicationMethod ===
                                  "quick-apply"
                                    ? "bg-green-100 text-green-800"
                                    : application.applicationMethod ===
                                        "full-application"
                                      ? "bg-blue-100 text-blue-800"
                                      : "bg-gray-100 text-gray-800"
                                }`}
                                data-oid="c3x1vg2"
                              >
                                {application.applicationMethod === "quick-apply"
                                  ? "⚡ Quick Apply"
                                  : application.applicationMethod ===
                                      "full-application"
                                    ? "📋 Full Application"
                                    : "🔗 External Application"}
                              </span>
                            </div>
                          </div>

                          {!application.isInternship &&
                            "salary" in application.job &&
                            application.job.salary && (
                              <div data-oid="l49on8b">
                                <h4
                                  className="text-sm font-medium text-gray-700 mb-2"
                                  data-oid="309loht"
                                >
                                  Salary Range
                                </h4>
                                <p
                                  className="text-green-600 font-medium"
                                  data-oid="p6_cl-9"
                                >
                                  {application.job.salary}
                                </p>
                              </div>
                            )}

                          {application.isInternship &&
                            "stipend" in application.job &&
                            application.job.stipend && (
                              <div data-oid="yc3806l">
                                <h4
                                  className="text-sm font-medium text-gray-700 mb-2"
                                  data-oid="g9n13t8"
                                >
                                  Stipend
                                </h4>
                                <p
                                  className="text-green-600 font-medium"
                                  data-oid="vhosqx1"
                                >
                                  {application.job.stipend}
                                </p>
                              </div>
                            )}
                        </div>

                        {/* Special Information */}
                        {application.interviewDate && (
                          <div
                            className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4"
                            data-oid="pevmkyv"
                          >
                            <div
                              className="flex items-start gap-3"
                              data-oid="_:a1jy8"
                            >
                              <svg
                                className="h-5 w-5 text-purple-600 mt-0.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="v8__7sf"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  data-oid="88:1-se"
                                />
                              </svg>
                              <div data-oid="41s:7_y">
                                <p
                                  className="text-sm font-medium text-purple-800"
                                  data-oid="lhsr7pj"
                                >
                                  Interview Scheduled
                                </p>
                                <p
                                  className="text-sm text-purple-700"
                                  data-oid="gxml_:a"
                                >
                                  {formatDate(application.interviewDate)}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}

                        {application.feedback && (
                          <div
                            className={`border rounded-lg p-4 mb-4 ${
                              application.status === "accepted"
                                ? "bg-green-50 border-green-200"
                                : "bg-red-50 border-red-200"
                            }`}
                            data-oid="_es9jt5"
                          >
                            <div
                              className="flex items-start gap-3"
                              data-oid="qncmrr7"
                            >
                              <svg
                                className={`h-5 w-5 mt-0.5 ${
                                  application.status === "accepted"
                                    ? "text-green-600"
                                    : "text-red-600"
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="r-7i:.m"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                  data-oid="fq116yq"
                                />
                              </svg>
                              <div data-oid="sxm25dk">
                                <p
                                  className={`text-sm font-medium ${
                                    application.status === "accepted"
                                      ? "text-green-800"
                                      : "text-red-800"
                                  }`}
                                  data-oid="b7mi1.c"
                                >
                                  Feedback from Company
                                </p>
                                <p
                                  className={`text-sm ${
                                    application.status === "accepted"
                                      ? "text-green-700"
                                      : "text-red-700"
                                  }`}
                                  data-oid="0xm05xt"
                                >
                                  {application.feedback}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}

                        {application.nextSteps && (
                          <div
                            className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4"
                            data-oid="593a:g-"
                          >
                            <div
                              className="flex items-start gap-3"
                              data-oid="tbtuoh7"
                            >
                              <svg
                                className="h-5 w-5 text-blue-600 mt-0.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="fqdbb9r"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                  data-oid="lbdtveb"
                                />
                              </svg>
                              <div data-oid="iafeiqe">
                                <p
                                  className="text-sm font-medium text-blue-800"
                                  data-oid="clg-47h"
                                >
                                  Next Steps
                                </p>
                                <p
                                  className="text-sm text-blue-700"
                                  data-oid="mczwd6i"
                                >
                                  {application.nextSteps}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Notes */}
                        {application.notes && (
                          <div
                            className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4"
                            data-oid="udel5yr"
                          >
                            <div
                              className="flex items-start gap-3"
                              data-oid="ev9adtz"
                            >
                              <svg
                                className="h-5 w-5 text-yellow-600 mt-0.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="6xgcv2r"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                  data-oid="u_senar"
                                />
                              </svg>
                              <div data-oid="hfzth2d">
                                <p
                                  className="text-sm font-medium text-yellow-800"
                                  data-oid="04v_kiw"
                                >
                                  Your Notes
                                </p>
                                <p
                                  className="text-sm text-yellow-700"
                                  data-oid="chkhiq3"
                                >
                                  {application.notes}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Skills Match */}
                        <div
                          className="border-t border-gray-200 pt-4"
                          data-oid="i7tcs_c"
                        >
                          <h4
                            className="text-sm font-medium text-gray-700 mb-2"
                            data-oid="5gjby.."
                          >
                            Required Skills
                          </h4>
                          <div
                            className="flex flex-wrap gap-2"
                            data-oid="nuhhg66"
                          >
                            {application.job.skills
                              .slice(0, 5)
                              .map((skill, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                                  data-oid="2yle4ii"
                                >
                                  {skill}
                                </span>
                              ))}
                            {application.job.skills.length > 5 && (
                              <span
                                className="px-3 py-1 text-gray-500 text-xs"
                                data-oid="yxaa41d"
                              >
                                +{application.job.skills.length - 5} more
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
