"use client";

import { useState } from "react";
import { Job } from "@/app/jobs/page";

interface JobDetailsModalProps {
  job: Job;
  isOpen: boolean;
  onClose: () => void;
  onApply: () => void;
}

export default function JobDetailsModal({
  job,
  isOpen,
  onClose,
  onApply,
}: JobDetailsModalProps) {
  const [activeTab, setActiveTab] = useState<
    "overview" | "requirements" | "company"
  >("overview");

  if (!isOpen) return null;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-custom flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      data-oid="j..df16"
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden modal-enter"
        data-oid="6kaak3o"
      >
        {/* Header */}
        <div
          className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white p-6"
          data-oid="9.5rw:z"
        >
          <div className="flex items-start justify-between" data-oid="xrh::s:">
            <div className="flex-1" data-oid="yvk2lly">
              <div className="flex items-center gap-3 mb-2" data-oid="u2:pka3">
                <h1 className="text-2xl font-bold" data-oid="_1qde20">
                  {job.title}
                </h1>
                {job.isUrgent && (
                  <span
                    className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse"
                    data-oid="eg4yn4r"
                  >
                    🔥 URGENT
                  </span>
                )}
                {job.isFeatured && (
                  <span
                    className="bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full"
                    data-oid="7-qem.r"
                  >
                    ⭐ FEATURED
                  </span>
                )}
              </div>
              <p
                className="text-xl font-semibold text-blue-100 mb-2"
                data-oid="ci2eeo0"
              >
                {job.company}
              </p>
              <div
                className="flex flex-wrap items-center gap-4 text-sm text-blue-100"
                data-oid="_k61_fu"
              >
                <span className="flex items-center gap-1" data-oid="d_rt8on">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="d4vkrxw"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      data-oid="r.414f3"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      data-oid="6u2w-cm"
                    />
                  </svg>
                  {job.location}
                </span>
                <span className="flex items-center gap-1" data-oid="mh_2bxv">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="ls.6664"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                      data-oid="o_ecjy2"
                    />
                  </svg>
                  {job.salary}
                </span>
                <span className="flex items-center gap-1" data-oid="l9g9sg9">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="cb3_2db"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                      data-oid="z9r5m8l"
                    />
                  </svg>
                  {job.experienceRequired}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
              data-oid="c9o.hya"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                data-oid="h1-esxh"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                  data-oid="vcln3lq"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col h-[calc(90vh-200px)]" data-oid="f.2z7mo">
          {/* Tabs */}
          <div className="border-b border-gray-200 px-6" data-oid="8k.qo.8">
            <nav className="flex space-x-8" data-oid="4.y:y_n">
              {[
                { id: "overview", label: "Job Overview" },
                { id: "requirements", label: "Requirements" },
                { id: "company", label: "About Company" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? "border-[hsl(196,80%,45%)] text-[hsl(196,80%,45%)]"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                  data-oid="l.y0upi"
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div
            className="flex-1 overflow-y-auto p-6 modal-scroll"
            data-oid="a:lx5_6"
          >
            {activeTab === "overview" && (
              <div className="space-y-6" data-oid="wcn4.8u">
                {/* Job Stats */}
                <div
                  className="grid grid-cols-2 md:grid-cols-4 gap-4"
                  data-oid="6ycdf1-"
                >
                  <div
                    className="bg-blue-50 p-4 rounded-lg text-center"
                    data-oid="efq::a0"
                  >
                    <div
                      className="text-2xl font-bold text-[hsl(196,80%,45%)]"
                      data-oid="dbtfd3_"
                    >
                      {job.applicantCount}
                    </div>
                    <div className="text-sm text-gray-600" data-oid="o-i57dp">
                      Applicants
                    </div>
                  </div>
                  <div
                    className="bg-green-50 p-4 rounded-lg text-center"
                    data-oid="n40ngz5"
                  >
                    <div
                      className="text-2xl font-bold text-green-600"
                      data-oid="1o50ov4"
                    >
                      {job.jobType}
                    </div>
                    <div className="text-sm text-gray-600" data-oid="mvezk:m">
                      Job Type
                    </div>
                  </div>
                  <div
                    className="bg-purple-50 p-4 rounded-lg text-center"
                    data-oid="fcupwh:"
                  >
                    <div
                      className="text-2xl font-bold text-purple-600"
                      data-oid="7qt0_ob"
                    >
                      {job.employmentType}
                    </div>
                    <div className="text-sm text-gray-600" data-oid=":o5mm_m">
                      Employment
                    </div>
                  </div>
                  <div
                    className="bg-orange-50 p-4 rounded-lg text-center"
                    data-oid="hgmk:jp"
                  >
                    <div
                      className="text-2xl font-bold text-orange-600"
                      data-oid="x5ugxa4"
                    >
                      {formatDate(job.postedDate).split(" ")[0]}
                    </div>
                    <div className="text-sm text-gray-600" data-oid="vfurdu9">
                      Posted
                    </div>
                  </div>
                </div>

                {/* Job Description */}
                <div data-oid="fmxiguv">
                  <h3
                    className="text-lg font-semibold text-gray-800 mb-3"
                    data-oid="bnwc1dh"
                  >
                    Job Description
                  </h3>
                  <div
                    className="prose prose-blue max-w-none"
                    data-oid="2lqz_nk"
                  >
                    <p
                      className="text-gray-600 leading-relaxed mb-4"
                      data-oid=":zcqpwy"
                    >
                      We are looking for a talented {job.title} to join our
                      dynamic team at {job.company}. This is an excellent
                      opportunity for someone with {job.experienceRequired} of
                      experience to work on cutting-edge projects and grow their
                      career in the {job.industry} industry.
                    </p>
                    <p
                      className="text-gray-600 leading-relaxed mb-4"
                      data-oid="b34jb15"
                    >
                      As a {job.title}, you will be responsible for developing
                      and maintaining high-quality software solutions,
                      collaborating with cross-functional teams, and
                      contributing to the overall success of our products.
                    </p>
                    <p
                      className="text-gray-600 leading-relaxed"
                      data-oid="c73:v2t"
                    >
                      Join us in building innovative solutions that impact
                      millions of users across India and beyond. We offer a
                      collaborative work environment, competitive compensation,
                      and excellent growth opportunities.
                    </p>
                  </div>
                </div>

                {/* Application Deadline & Quick Stats */}
                <div
                  className="bg-blue-50 rounded-lg p-4 mb-6"
                  data-oid="_vknjkw"
                >
                  <div
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    data-oid="0bryhr."
                  >
                    <div className="text-center" data-oid="y2qxrjj">
                      <div
                        className="text-2xl font-bold text-blue-600"
                        data-oid="9rl5ojf"
                      >
                        {Math.max(1, Math.floor(Math.random() * 15))} days
                      </div>
                      <div className="text-sm text-gray-600" data-oid="wy.yjiz">
                        Application Deadline
                      </div>
                    </div>
                    <div className="text-center" data-oid="g:7p19-">
                      <div
                        className="text-2xl font-bold text-green-600"
                        data-oid="7c6:ckz"
                      >
                        {job.isRemote ? "Remote" : "On-site"}
                      </div>
                      <div className="text-sm text-gray-600" data-oid=":eysp2p">
                        Work Mode
                      </div>
                    </div>
                    <div className="text-center" data-oid="2ly98pi">
                      <div
                        className="text-2xl font-bold text-purple-600"
                        data-oid=":gw7np-"
                      >
                        {Math.floor(Math.random() * 5) + 1}-
                        {Math.floor(Math.random() * 3) + 3} rounds
                      </div>
                      <div className="text-sm text-gray-600" data-oid="5h7z:pr">
                        Interview Process
                      </div>
                    </div>
                  </div>
                </div>

                {/* Company Highlights */}
                <div className="mb-6" data-oid="h7-6z-f">
                  <h3
                    className="text-lg font-semibold text-gray-800 mb-3"
                    data-oid="p.2mi2l"
                  >
                    Why Join {job.company}?
                  </h3>
                  <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-3"
                    data-oid="ozgg8tr"
                  >
                    <div
                      className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                      data-oid="4hi1rym"
                    >
                      <div
                        className="w-2 h-2 bg-green-500 rounded-full"
                        data-oid="meh-g-4"
                      ></div>
                      <span className="text-gray-700" data-oid="roa.cgz">
                        Fast-growing {job.companyType} company
                      </span>
                    </div>
                    <div
                      className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"
                      data-oid="cimqtdf"
                    >
                      <div
                        className="w-2 h-2 bg-blue-500 rounded-full"
                        data-oid="i_e77s3"
                      ></div>
                      <span className="text-gray-700" data-oid="1xrn7-g">
                        Learning & development opportunities
                      </span>
                    </div>
                    <div
                      className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg"
                      data-oid="q98bg.c"
                    >
                      <div
                        className="w-2 h-2 bg-purple-500 rounded-full"
                        data-oid="bbq1dkl"
                      ></div>
                      <span className="text-gray-700" data-oid="tq9efy8">
                        Collaborative work environment
                      </span>
                    </div>
                    <div
                      className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg"
                      data-oid="a.wm-23"
                    >
                      <div
                        className="w-2 h-2 bg-orange-500 rounded-full"
                        data-oid="bpwf.-0"
                      ></div>
                      <span className="text-gray-700" data-oid="k9bpn8e">
                        Competitive compensation package
                      </span>
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                {job.benefits && job.benefits.length > 0 && (
                  <div data-oid="i3:1.ya">
                    <h3
                      className="text-lg font-semibold text-gray-800 mb-3"
                      data-oid=".dlzugd"
                    >
                      Benefits & Perks
                    </h3>
                    <div
                      className="grid grid-cols-1 md:grid-cols-2 gap-3"
                      data-oid="rzjd:_2"
                    >
                      {job.benefits.map((benefit, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                          data-oid="o1v_kxl"
                        >
                          <div
                            className="w-2 h-2 bg-green-500 rounded-full"
                            data-oid="xrxmlvp"
                          ></div>
                          <span className="text-gray-700" data-oid="ik6-wyk">
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
              <div className="space-y-6" data-oid="3t-ffpl">
                {/* Skills Required */}
                <div data-oid="9qtp9z6">
                  <h3
                    className="text-lg font-semibold text-gray-800 mb-3"
                    data-oid="2oniiyj"
                  >
                    Required Skills
                  </h3>
                  <div className="flex flex-wrap gap-2" data-oid="bf2hzdq">
                    {job.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-2 rounded-full"
                        data-oid="j97p5ck"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Experience & Qualifications */}
                <div data-oid="1b3q65j">
                  <h3
                    className="text-lg font-semibold text-gray-800 mb-3"
                    data-oid="qb7a8vy"
                  >
                    Experience & Qualifications
                  </h3>
                  <div className="space-y-3" data-oid="qs.x4_c">
                    <div className="flex items-start gap-3" data-oid="bw5938a">
                      <div
                        className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                        data-oid="4chi7l_"
                      ></div>
                      <span className="text-gray-700" data-oid="67byb_7">
                        Experience: {job.experienceRequired}
                      </span>
                    </div>
                    <div className="flex items-start gap-3" data-oid="uuz9112">
                      <div
                        className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                        data-oid="0rxz7os"
                      ></div>
                      <span className="text-gray-700" data-oid="7uaf-wv">
                        Bachelor's degree in Computer Science, Engineering, or
                        related field
                      </span>
                    </div>
                    <div className="flex items-start gap-3" data-oid="dkb8q5q">
                      <div
                        className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                        data-oid="sim7xir"
                      ></div>
                      <span className="text-gray-700" data-oid="vr_d:5w">
                        Strong problem-solving and analytical skills
                      </span>
                    </div>
                    <div className="flex items-start gap-3" data-oid="aet4bog">
                      <div
                        className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                        data-oid="vunjz0e"
                      ></div>
                      <span className="text-gray-700" data-oid="zaw6-9n">
                        Excellent communication and teamwork abilities
                      </span>
                    </div>
                    <div className="flex items-start gap-3" data-oid="qnqilf1">
                      <div
                        className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                        data-oid="vhw.bfr"
                      ></div>
                      <span className="text-gray-700" data-oid="61fph7h">
                        Passion for learning new technologies and best practices
                      </span>
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <div data-oid="30lct7-">
                  <h3
                    className="text-lg font-semibold text-gray-800 mb-3"
                    data-oid="0_eltpp"
                  >
                    Key Responsibilities
                  </h3>
                  <div className="space-y-3" data-oid=".laj:zr">
                    <div className="flex items-start gap-3" data-oid="q8z9bpf">
                      <div
                        className="w-2 h-2 bg-green-500 rounded-full mt-2"
                        data-oid="2f-d:z-"
                      ></div>
                      <span className="text-gray-700" data-oid="n-95xu:">
                        Develop and maintain high-quality software applications
                      </span>
                    </div>
                    <div className="flex items-start gap-3" data-oid="9z7iz1f">
                      <div
                        className="w-2 h-2 bg-green-500 rounded-full mt-2"
                        data-oid="b9-.02d"
                      ></div>
                      <span className="text-gray-700" data-oid="8h9vu8h">
                        Collaborate with cross-functional teams to define and
                        implement features
                      </span>
                    </div>
                    <div className="flex items-start gap-3" data-oid="4c.kb-c">
                      <div
                        className="w-2 h-2 bg-green-500 rounded-full mt-2"
                        data-oid="7u1f8hq"
                      ></div>
                      <span className="text-gray-700" data-oid="q28:0ua">
                        Write clean, maintainable, and efficient code
                      </span>
                    </div>
                    <div className="flex items-start gap-3" data-oid="04q8u.n">
                      <div
                        className="w-2 h-2 bg-green-500 rounded-full mt-2"
                        data-oid="yuo8tbw"
                      ></div>
                      <span className="text-gray-700" data-oid="b:ds7__">
                        Participate in code reviews and maintain coding
                        standards
                      </span>
                    </div>
                    <div className="flex items-start gap-3" data-oid="xlxr0g3">
                      <div
                        className="w-2 h-2 bg-green-500 rounded-full mt-2"
                        data-oid="e_:h6e5"
                      ></div>
                      <span className="text-gray-700" data-oid="t.wxfo.">
                        Troubleshoot and debug applications to optimize
                        performance
                      </span>
                    </div>
                  </div>
                </div>

                {/* Interview Process */}
                <div className="mt-6" data-oid="0mgtzd4">
                  <h3
                    className="text-lg font-semibold text-gray-800 mb-3"
                    data-oid="zzzakbz"
                  >
                    Interview Process
                  </h3>
                  <div className="space-y-4" data-oid="nz6f.j6">
                    <div
                      className="flex items-center gap-4 p-3 bg-blue-50 rounded-lg"
                      data-oid="yef10k0"
                    >
                      <div
                        className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                        data-oid=":89dhuu"
                      >
                        1
                      </div>
                      <div data-oid="_s_nqsc">
                        <div
                          className="font-medium text-gray-800"
                          data-oid="_crqcgg"
                        >
                          Application Review
                        </div>
                        <div
                          className="text-sm text-gray-600"
                          data-oid="ru82vu4"
                        >
                          Resume and profile screening
                        </div>
                      </div>
                    </div>
                    <div
                      className="flex items-center gap-4 p-3 bg-green-50 rounded-lg"
                      data-oid=":jugqhv"
                    >
                      <div
                        className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                        data-oid="dejedi:"
                      >
                        2
                      </div>
                      <div data-oid="dhdmdq9">
                        <div
                          className="font-medium text-gray-800"
                          data-oid="2mpe74h"
                        >
                          Technical Assessment
                        </div>
                        <div
                          className="text-sm text-gray-600"
                          data-oid="mlalav9"
                        >
                          Coding challenge or technical questions
                        </div>
                      </div>
                    </div>
                    <div
                      className="flex items-center gap-4 p-3 bg-purple-50 rounded-lg"
                      data-oid="k-hvwvc"
                    >
                      <div
                        className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                        data-oid="2r2fx.6"
                      >
                        3
                      </div>
                      <div data-oid="6oe2k9t">
                        <div
                          className="font-medium text-gray-800"
                          data-oid="tbt2gf1"
                        >
                          Technical Interview
                        </div>
                        <div
                          className="text-sm text-gray-600"
                          data-oid="smf6dvv"
                        >
                          Deep dive into technical skills and problem-solving
                        </div>
                      </div>
                    </div>
                    <div
                      className="flex items-center gap-4 p-3 bg-orange-50 rounded-lg"
                      data-oid="us3.e:3"
                    >
                      <div
                        className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                        data-oid="lvqu7dz"
                      >
                        4
                      </div>
                      <div data-oid="cqis2m:">
                        <div
                          className="font-medium text-gray-800"
                          data-oid="423r8xe"
                        >
                          HR Interview
                        </div>
                        <div
                          className="text-sm text-gray-600"
                          data-oid="yluli8a"
                        >
                          Cultural fit and final discussion
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Preferred Skills */}
                <div className="mt-6" data-oid="51bqh6c">
                  <h3
                    className="text-lg font-semibold text-gray-800 mb-3"
                    data-oid="pv26kga"
                  >
                    Nice to Have Skills
                  </h3>
                  <div className="flex flex-wrap gap-2" data-oid="16.68ds">
                    {["Git", "Docker", "AWS", "Agile", "Testing", "CI/CD"].map(
                      (skill, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full border border-gray-300"
                          data-oid="1159tbo"
                        >
                          {skill}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "company" && (
              <div className="space-y-6" data-oid="j.azlfx">
                {/* Company Overview */}
                <div data-oid="i1yuba5">
                  <h3
                    className="text-lg font-semibold text-gray-800 mb-3"
                    data-oid="j.qbpbj"
                  >
                    About {job.company}
                  </h3>
                  <p
                    className="text-gray-600 leading-relaxed mb-4"
                    data-oid="71:3zte"
                  >
                    {job.company} is a leading {job.industry} company that has
                    been revolutionizing the industry with innovative solutions
                    and cutting-edge technology. We are committed to creating
                    products that make a real difference in people's lives.
                  </p>
                  <p
                    className="text-gray-600 leading-relaxed"
                    data-oid="55es9l5"
                  >
                    Our team consists of passionate professionals who are
                    dedicated to excellence and continuous learning. We foster a
                    culture of innovation, collaboration, and growth where every
                    team member can thrive and make an impact.
                  </p>
                </div>

                {/* Company Stats */}
                <div
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                  data-oid=".__4tx."
                >
                  <div
                    className="bg-blue-50 p-4 rounded-lg text-center"
                    data-oid="4:xml95"
                  >
                    <div
                      className="text-2xl font-bold text-[hsl(196,80%,45%)]"
                      data-oid="8eh7.34"
                    >
                      {job.companySize}
                    </div>
                    <div className="text-sm text-gray-600" data-oid="y50d:41">
                      Employees
                    </div>
                  </div>
                  <div
                    className="bg-green-50 p-4 rounded-lg text-center"
                    data-oid="5wm-fy:"
                  >
                    <div
                      className="text-2xl font-bold text-green-600"
                      data-oid="sg54.6x"
                    >
                      {job.industry}
                    </div>
                    <div className="text-sm text-gray-600" data-oid="aggyxf-">
                      Industry
                    </div>
                  </div>
                  <div
                    className="bg-purple-50 p-4 rounded-lg text-center"
                    data-oid="pr--x6-"
                  >
                    <div
                      className="text-2xl font-bold text-purple-600"
                      data-oid="1y_xpi3"
                    >
                      {job.companyType}
                    </div>
                    <div className="text-sm text-gray-600" data-oid="67v1xdi">
                      Company Type
                    </div>
                  </div>
                </div>

                {/* Company Culture */}
                <div data-oid="f:aesg4">
                  <h3
                    className="text-lg font-semibold text-gray-800 mb-3"
                    data-oid="6dcrkd3"
                  >
                    Company Culture
                  </h3>
                  <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    data-oid="1_ev_hm"
                  >
                    <div
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                      data-oid="nwi:72b"
                    >
                      <div
                        className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"
                        data-oid="gy7xjp3"
                      >
                        <span
                          className="text-blue-600 text-sm"
                          data-oid="llplm2s"
                        >
                          🚀
                        </span>
                      </div>
                      <div data-oid="a8x1vu4">
                        <div
                          className="font-medium text-gray-800"
                          data-oid="ys9im-_"
                        >
                          Innovation
                        </div>
                        <div
                          className="text-sm text-gray-600"
                          data-oid="-3f4:xm"
                        >
                          Cutting-edge technology
                        </div>
                      </div>
                    </div>
                    <div
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                      data-oid="uw2n104"
                    >
                      <div
                        className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"
                        data-oid="wye_wox"
                      >
                        <span
                          className="text-green-600 text-sm"
                          data-oid="desl33t"
                        >
                          🤝
                        </span>
                      </div>
                      <div data-oid="7_u2wdo">
                        <div
                          className="font-medium text-gray-800"
                          data-oid="1.ff:8j"
                        >
                          Collaboration
                        </div>
                        <div
                          className="text-sm text-gray-600"
                          data-oid="na0qxfa"
                        >
                          Team-first approach
                        </div>
                      </div>
                    </div>
                    <div
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                      data-oid="4a-97rj"
                    >
                      <div
                        className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center"
                        data-oid="e23a5ml"
                      >
                        <span
                          className="text-purple-600 text-sm"
                          data-oid="fax66a0"
                        >
                          📈
                        </span>
                      </div>
                      <div data-oid="dnqhy7m">
                        <div
                          className="font-medium text-gray-800"
                          data-oid="4vt5_o6"
                        >
                          Growth
                        </div>
                        <div
                          className="text-sm text-gray-600"
                          data-oid="aj0uj9."
                        >
                          Career development
                        </div>
                      </div>
                    </div>
                    <div
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                      data-oid="x44396u"
                    >
                      <div
                        className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center"
                        data-oid="cvr1yft"
                      >
                        <span
                          className="text-orange-600 text-sm"
                          data-oid="9dgjc:-"
                        >
                          ⚖️
                        </span>
                      </div>
                      <div data-oid="ua_uuy5">
                        <div
                          className="font-medium text-gray-800"
                          data-oid="-2wl:ry"
                        >
                          Work-Life Balance
                        </div>
                        <div
                          className="text-sm text-gray-600"
                          data-oid="epfpwp3"
                        >
                          Flexible working
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Office Locations */}
                <div className="mt-6" data-oid="q--5o:m">
                  <h3
                    className="text-lg font-semibold text-gray-800 mb-3"
                    data-oid="vd:-fvm"
                  >
                    Office Locations
                  </h3>
                  <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    data-oid="v:jl2nq"
                  >
                    <div
                      className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"
                      data-oid="sbjvkch"
                    >
                      <svg
                        className="h-5 w-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        data-oid="4vrje:3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          data-oid="jx39gc6"
                        />

                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          data-oid="b8k6l4x"
                        />
                      </svg>
                      <div data-oid="f:japyi">
                        <div
                          className="font-medium text-gray-800"
                          data-oid="cpr_aqo"
                        >
                          Headquarters
                        </div>
                        <div
                          className="text-sm text-gray-600"
                          data-oid="gb_c-yi"
                        >
                          {job.location}
                        </div>
                      </div>
                    </div>
                    {job.isRemote && (
                      <div
                        className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                        data-oid="bz9zn0x"
                      >
                        <svg
                          className="h-5 w-5 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          data-oid="rm:o2k5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            data-oid="unzn8x4"
                          />
                        </svg>
                        <div data-oid="h7-l6sk">
                          <div
                            className="font-medium text-gray-800"
                            data-oid="og9j9e7"
                          >
                            Remote Work
                          </div>
                          <div
                            className="text-sm text-gray-600"
                            data-oid="45-hkx5"
                          >
                            Work from anywhere
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Recent News & Updates */}
                <div className="mt-6" data-oid="m.wul3v">
                  <h3
                    className="text-lg font-semibold text-gray-800 mb-3"
                    data-oid="3rz2yd2"
                  >
                    Recent Company Updates
                  </h3>
                  <div className="space-y-3" data-oid="_gmn1qz">
                    <div
                      className="p-3 bg-gray-50 rounded-lg border-l-4 border-blue-500"
                      data-oid="34ok558"
                    >
                      <div
                        className="font-medium text-gray-800"
                        data-oid="6it:zw4"
                      >
                        New Product Launch
                      </div>
                      <div className="text-sm text-gray-600" data-oid="5owsa_s">
                        Recently launched innovative solutions in {job.industry}
                      </div>
                    </div>
                    <div
                      className="p-3 bg-gray-50 rounded-lg border-l-4 border-green-500"
                      data-oid="o.hz8jp"
                    >
                      <div
                        className="font-medium text-gray-800"
                        data-oid="awo8xtv"
                      >
                        Team Expansion
                      </div>
                      <div className="text-sm text-gray-600" data-oid="wxub:sa">
                        Growing team by 30% this year with focus on tech talent
                      </div>
                    </div>
                    <div
                      className="p-3 bg-gray-50 rounded-lg border-l-4 border-purple-500"
                      data-oid="m23bbuw"
                    >
                      <div
                        className="font-medium text-gray-800"
                        data-oid="ge5odfr"
                      >
                        Awards & Recognition
                      </div>
                      <div className="text-sm text-gray-600" data-oid="fdlv80.">
                        Recognized as one of the best places to work in tech
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div
          className="border-t border-gray-200 p-6 bg-gray-50"
          data-oid="64u6:vt"
        >
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-4"
            data-oid="pn53awf"
          >
            <div className="text-sm text-gray-600" data-oid="nva.nad">
              Posted on {formatDate(job.postedDate)} • {job.applicantCount}{" "}
              applicants
            </div>
            <div className="flex gap-3" data-oid="_0eomzq">
              <button
                onClick={onClose}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                data-oid="rbvysky"
              >
                Close
              </button>
              <button
                onClick={onApply}
                className="px-8 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg"
                data-oid=".t2ajmp"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="xk_qgfi"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    data-oid="b.kbgv."
                  />
                </svg>
                Apply Now
              </button>
            </div>
          </div>
        </div>

        {/* Floating Apply Button - appears when scrolling */}
        <div className="fixed bottom-6 right-6 z-50" data-oid="39n47ni">
          <button
            onClick={onApply}
            className="px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-full font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-110 shadow-2xl flex items-center gap-2 animate-bounce"
            data-oid="r6-8-97"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              data-oid="c:7uho:"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
                data-oid="2c70e_r"
              />
            </svg>
            Quick Apply
          </button>
        </div>
      </div>
    </div>
  );
}
