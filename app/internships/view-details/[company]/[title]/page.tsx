"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import MainNavbar from "@/components/mainNavbar";
import { mockInternships, type Internship } from "@/lib/mockData";

export default function InternshipDetailsPage() {
  const params = useParams();
  const [internship, setInternship] = useState<Internship | null>(null);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (params.company && params.title) {
      const companySlug = params.company as string;
      const titleSlug = params.title as string;

      const foundInternship = mockInternships.find((internship) => {
        const internshipCompanySlug = internship.company
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^a-z0-9-]/g, "");
        const internshipTitleSlug = internship.title
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^a-z0-9-]/g, "");
        return (
          internshipCompanySlug === companySlug &&
          internshipTitleSlug === titleSlug
        );
      });

      setInternship(foundInternship || null);
    }
  }, [params]);

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${internship?.title} at ${internship?.company}`,
        text: `Check out this internship opportunity: ${internship?.title} at ${internship?.company}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const handleApply = () => {
    if (internship) {
      const companySlug = internship.company
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");
      const titleSlug = internship.title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");
      window.location.href = `/internships/apply/${companySlug}/${titleSlug}`;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (!internship) {
    return (
      <div className="min-h-screen bg-white" data-oid="z3za54m">
        <MainNavbar data-oid="-llbvd_" />
        <div
          className="max-w-4xl mx-auto px-4 py-16 text-center"
          data-oid="ef.nr8v"
        >
          <h1
            className="text-2xl font-bold text-gray-800 mb-4"
            data-oid="jaul0r5"
          >
            Internship Not Found
          </h1>
          <p className="text-gray-600" data-oid="0-_1qox">
            The internship you're looking for doesn't exist.
          </p>
          <a
            href="/internships"
            className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            data-oid="q9i2uv6"
          >
            Browse Internships
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" data-oid="i_p.c7g">
      <MainNavbar data-oid="5yde3id" />

      <div className="max-w-6xl mx-auto px-4 py-8" data-oid="z3uocp1">
        <div className="grid lg:grid-cols-3 gap-8" data-oid="q_6qcks">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6" data-oid="2paafc5">
            {/* Header Card */}
            <div
              className="bg-white rounded-xl shadow-md p-6"
              data-oid="sbbgijx"
            >
              <div
                className="flex items-start justify-between mb-4"
                data-oid="wo_4udd"
              >
                <div className="flex-1" data-oid="ja1bglx">
                  <div
                    className="flex items-center gap-3 mb-2"
                    data-oid="kfl955o"
                  >
                    {internship.isUrgent && (
                      <span
                        className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse"
                        data-oid="8zj0vu:"
                      >
                        🔥 URGENT HIRING
                      </span>
                    )}
                    {internship.isFeatured && (
                      <span
                        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full"
                        data-oid="pu6rsnm"
                      >
                        ⭐ FEATURED
                      </span>
                    )}
                    {internship.isRemote && (
                      <span
                        className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full"
                        data-oid="6z41f5k"
                      >
                        🏠 Remote
                      </span>
                    )}
                  </div>
                  <h1
                    className="text-3xl font-bold text-gray-800 mb-2"
                    data-oid="zzceguc"
                  >
                    {internship.title}
                  </h1>
                  <p
                    className="text-xl text-blue-600 font-semibold mb-2"
                    data-oid="w32ykp1"
                  >
                    {internship.company}
                  </p>
                  <div
                    className="flex items-center gap-1 text-sm text-gray-600 mb-2"
                    data-oid="mz.z1cm"
                  >
                    <span data-oid="6v58lym">{internship.industry}</span>
                    <span data-oid="w3j:0x.">•</span>
                    <span data-oid="j33yg01">{internship.companyType}</span>
                    {internship.companySize && (
                      <>
                        <span data-oid="daiylrt">•</span>
                        <span data-oid="it8un1f">
                          {internship.companySize} employees
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Key Details */}
              <div
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
                data-oid="oaa8jgh"
              >
                <div
                  className="flex items-center text-gray-600"
                  data-oid="-cwne0t"
                >
                  <svg
                    className="h-5 w-5 mr-2 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="xwb_jbk"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      data-oid="2psi4pj"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      data-oid="xtvkq8k"
                    />
                  </svg>
                  <div data-oid="0gstty:">
                    <p className="text-xs text-gray-500" data-oid="vv9r5fn">
                      Location
                    </p>
                    <p className="font-medium" data-oid="blr3irp">
                      {internship.location}
                    </p>
                  </div>
                </div>

                <div
                  className="flex items-center text-gray-600"
                  data-oid="cq88j9l"
                >
                  <svg
                    className="h-5 w-5 mr-2 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="q6i1f.q"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      data-oid="hk:8agb"
                    />
                  </svg>
                  <div data-oid="5q86wef">
                    <p className="text-xs text-gray-500" data-oid="-l2emny">
                      Duration
                    </p>
                    <p className="font-medium" data-oid="_0q._wi">
                      {internship.duration}
                    </p>
                  </div>
                </div>

                {internship.stipend && (
                  <div
                    className="flex items-center text-gray-600"
                    data-oid="yinfhr6"
                  >
                    <svg
                      className="h-5 w-5 mr-2 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="wpqdy_n"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                        data-oid="d11z.3l"
                      />
                    </svg>
                    <div data-oid="-su1y.z">
                      <p className="text-xs text-gray-500" data-oid="9o9-l-s">
                        Stipend
                      </p>
                      <p
                        className="font-medium text-green-600"
                        data-oid="4hgjj9d"
                      >
                        {internship.stipend}
                      </p>
                    </div>
                  </div>
                )}

                <div
                  className="flex items-center text-gray-600"
                  data-oid="yjovp.:"
                >
                  <svg
                    className="h-5 w-5 mr-2 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="tfhclwr"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      data-oid="y8.h4ii"
                    />
                  </svg>
                  <div data-oid="_p:0u5w">
                    <p className="text-xs text-gray-500" data-oid="78b.8g3">
                      Posted
                    </p>
                    <p className="font-medium" data-oid="ets.4kz">
                      {formatDate(internship.postedDate)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3" data-oid="p1f5f3u">
                <button
                  onClick={handleApply}
                  className="flex-1 min-w-[200px] px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  data-oid="txsmfqm"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="mcin:ml"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      data-oid="u::_9h."
                    />
                  </svg>
                  Apply for Internship
                </button>

                <button
                  onClick={handleSave}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    isSaved
                      ? "bg-red-100 text-red-600 hover:bg-red-200"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                  title={isSaved ? "Remove from saved" : "Save internship"}
                  data-oid="yv8kpzw"
                >
                  <svg
                    className="h-5 w-5"
                    fill={isSaved ? "currentColor" : "none"}
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="sy26-rz"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      data-oid="8se0dsk"
                    />
                  </svg>
                </button>

                <button
                  onClick={handleShare}
                  className="px-4 py-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-all duration-300"
                  title="Share internship"
                  data-oid="m:z5s1_"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="_2vg-e."
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                      data-oid="m-rk8td"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Description */}
            <div
              className="bg-white rounded-xl shadow-md p-6"
              data-oid="qbffqfe"
            >
              <h2
                className="text-xl font-bold text-gray-800 mb-4"
                data-oid="y.0l-pw"
              >
                About this Internship
              </h2>
              <div
                className="prose max-w-none text-gray-600"
                data-oid="_9p9jy0"
              >
                <p data-oid="1udg-xz">{internship.description}</p>

                <h3
                  className="text-lg font-semibold text-gray-800 mt-6 mb-3"
                  data-oid="1fcj5yd"
                >
                  What you'll learn:
                </h3>
                <ul
                  className="list-disc list-inside space-y-1"
                  data-oid="ppw:y-c"
                >
                  <li data-oid="ee1.zub">
                    Hands-on experience with real-world projects
                  </li>
                  <li data-oid="gfgk4r:">
                    Industry best practices and professional development
                  </li>
                  <li data-oid=".-ex-vu">
                    Mentorship from experienced professionals
                  </li>
                  <li data-oid="mgd.ag1">
                    Exposure to cutting-edge technologies and tools
                  </li>
                </ul>

                <h3
                  className="text-lg font-semibold text-gray-800 mt-6 mb-3"
                  data-oid="-v-p-pr"
                >
                  Requirements:
                </h3>
                <ul
                  className="list-disc list-inside space-y-1"
                  data-oid="8410j85"
                >
                  <li data-oid="il0lsa2">
                    Currently pursuing or recently completed relevant degree
                  </li>
                  <li data-oid="d:vn_lz">
                    Strong foundation in required technical skills
                  </li>
                  <li data-oid="r_j.0u9">
                    Excellent communication and teamwork abilities
                  </li>
                  <li data-oid="zj0a697">
                    Eagerness to learn and adapt to new challenges
                  </li>
                </ul>
              </div>
            </div>

            {/* Skills Required */}
            <div
              className="bg-white rounded-xl shadow-md p-6"
              data-oid="zjh78k7"
            >
              <h2
                className="text-xl font-bold text-gray-800 mb-4"
                data-oid="hhzlmhw"
              >
                Skills Required
              </h2>
              <div className="flex flex-wrap gap-2" data-oid=":5f248q">
                {internship.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                    data-oid="-immyix"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Benefits */}
            {internship.benefits && internship.benefits.length > 0 && (
              <div
                className="bg-white rounded-xl shadow-md p-6"
                data-oid="aq1k68."
              >
                <h2
                  className="text-xl font-bold text-gray-800 mb-4"
                  data-oid="tv3ye6b"
                >
                  Benefits & Perks
                </h2>
                <div className="grid md:grid-cols-2 gap-3" data-oid="i2co:nn">
                  {internship.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center"
                      data-oid="y3oh70y"
                    >
                      <svg
                        className="h-5 w-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        data-oid="u-599xr"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                          data-oid="j8p9co7"
                        />
                      </svg>
                      <span className="text-gray-700" data-oid="yovr-ll">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6" data-oid="u09l0o3">
            {/* Quick Apply Card */}
            <div
              className="bg-white rounded-xl shadow-md p-6 sticky top-24"
              data-oid="bskyv-d"
            >
              <h3
                className="text-lg font-bold text-gray-800 mb-4"
                data-oid="435omme"
              >
                Quick Apply
              </h3>

              {internship.applicationDeadline && (
                <div
                  className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg"
                  data-oid="unrknk4"
                >
                  <div className="flex items-center" data-oid="t8f04fi">
                    <svg
                      className="h-5 w-5 text-yellow-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="d.y63n_"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                        data-oid="sq:9yyy"
                      />
                    </svg>
                    <div data-oid="871uyez">
                      <p
                        className="text-sm font-medium text-yellow-800"
                        data-oid="a6wvvlh"
                      >
                        Application Deadline
                      </p>
                      <p className="text-sm text-yellow-700" data-oid="agle2w:">
                        {formatDate(internship.applicationDeadline)}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-3 mb-6" data-oid="d:xwwnt">
                <div className="flex justify-between" data-oid="uff5mse">
                  <span className="text-gray-600" data-oid="awn3jhw">
                    Type:
                  </span>
                  <span className="font-medium" data-oid="5bw_kns">
                    {internship.jobType}
                  </span>
                </div>
                <div className="flex justify-between" data-oid="78:n-93">
                  <span className="text-gray-600" data-oid="ef-dp8.">
                    Duration:
                  </span>
                  <span className="font-medium" data-oid="s89lhmt">
                    {internship.duration}
                  </span>
                </div>
                {internship.startDate && (
                  <div className="flex justify-between" data-oid=":arc--2">
                    <span className="text-gray-600" data-oid="hk.3j6j">
                      Start Date:
                    </span>
                    <span className="font-medium" data-oid="5mvoj:.">
                      {formatDate(internship.startDate)}
                    </span>
                  </div>
                )}
                {internship.applicantCount && (
                  <div className="flex justify-between" data-oid="0wb23_i">
                    <span className="text-gray-600" data-oid="hgavd23">
                      Applicants:
                    </span>
                    <span className="font-medium" data-oid="5rp-te0">
                      {internship.applicantCount}
                    </span>
                  </div>
                )}
              </div>

              <button
                onClick={handleApply}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                data-oid="0bx0207"
              >
                Apply Now
              </button>
            </div>

            {/* Company Info */}
            <div
              className="bg-white rounded-xl shadow-md p-6"
              data-oid="skuk8t4"
            >
              <h3
                className="text-lg font-bold text-gray-800 mb-4"
                data-oid="12i.zx9"
              >
                About {internship.company}
              </h3>
              <div className="space-y-3" data-oid="d1uct1j">
                <div className="flex justify-between" data-oid="qedg6j0">
                  <span className="text-gray-600" data-oid="b.ws2rk">
                    Industry:
                  </span>
                  <span className="font-medium" data-oid="2gm-6:o">
                    {internship.industry}
                  </span>
                </div>
                <div className="flex justify-between" data-oid="uf9f4gs">
                  <span className="text-gray-600" data-oid="21logp4">
                    Company Type:
                  </span>
                  <span className="font-medium" data-oid="8fnn0pd">
                    {internship.companyType}
                  </span>
                </div>
                {internship.companySize && (
                  <div className="flex justify-between" data-oid="_5982im">
                    <span className="text-gray-600" data-oid="hqufaub">
                      Company Size:
                    </span>
                    <span className="font-medium" data-oid="24y1.-2">
                      {internship.companySize}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Similar Internships */}
            <div
              className="bg-white rounded-xl shadow-md p-6"
              data-oid=":8k.61l"
            >
              <h3
                className="text-lg font-bold text-gray-800 mb-4"
                data-oid=":b1no8z"
              >
                Similar Internships
              </h3>
              <div className="space-y-3" data-oid="47b29y_">
                {mockInternships
                  .filter(
                    (i) =>
                      i.id !== internship.id &&
                      i.industry === internship.industry,
                  )
                  .slice(0, 3)
                  .map((similarInternship) => (
                    <div
                      key={similarInternship.id}
                      className="border border-gray-200 rounded-lg p-3 hover:border-blue-300 transition-colors"
                      data-oid="lzj2cjs"
                    >
                      <h4
                        className="font-medium text-gray-800 text-sm"
                        data-oid="k97g9do"
                      >
                        {similarInternship.title}
                      </h4>
                      <p className="text-blue-600 text-sm" data-oid="2r-6mcg">
                        {similarInternship.company}
                      </p>
                      <p className="text-gray-500 text-xs" data-oid="-qt3t:e">
                        {similarInternship.location}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
