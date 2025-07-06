"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import MainNavbar from "@/components/mainNavbar";
import { mockInternships, type Internship } from "@/lib/mockData";

export default function InternshipApplicationPage() {
  const params = useParams();
  const [internship, setInternship] = useState<Internship | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    university: "",
    course: "",
    graduationYear: "",
    cgpa: "",
    skills: "",
    experience: "",
    portfolio: "",
    linkedin: "",
    github: "",
    coverLetter: "",
    resume: null as File | null,
    availability: "",
    expectedStipend: "",
    whyInterested: "",
  });

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

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      resume: file,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (!internship) {
    return (
      <div className="min-h-screen bg-white" data-oid="fk5buc.">
        <MainNavbar data-oid="exv7yhg" />
        <div
          className="max-w-4xl mx-auto px-4 py-16 text-center"
          data-oid="hknzl-4"
        >
          <h1
            className="text-2xl font-bold text-gray-800 mb-4"
            data-oid="c:rl:u5"
          >
            Internship Not Found
          </h1>
          <p className="text-gray-600" data-oid="w:jipy6">
            The internship you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white" data-oid="g6.8d6:">
        <MainNavbar data-oid="0n:4mdv" />
        <div
          className="max-w-4xl mx-auto px-4 py-16 text-center"
          data-oid="qerlk1k"
        >
          <div
            className="bg-green-50 border border-green-200 rounded-xl p-8"
            data-oid="ddak32v"
          >
            <div
              className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
              data-oid="14dxqau"
            >
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                data-oid="0pn0v6f"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                  data-oid="qtm2c47"
                />
              </svg>
            </div>
            <h1
              className="text-2xl font-bold text-gray-800 mb-4"
              data-oid="gvx7mm."
            >
              Application Submitted Successfully!
            </h1>
            <p className="text-gray-600 mb-6" data-oid="pl5_10n">
              Thank you for applying for the {internship.title} position at{" "}
              {internship.company}. We'll review your application and get back
              to you soon.
            </p>
            <div className="flex gap-4 justify-center" data-oid="w0pt_nc">
              <a
                href="/internships"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                data-oid="b1faj3t"
              >
                Browse More Internships
              </a>
              <a
                href="/"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                data-oid="y:g.0r8"
              >
                Go Home
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" data-oid="djj.d7_">
      <MainNavbar data-oid=":.6gv0l" />

      <div className="max-w-4xl mx-auto px-4 py-8" data-oid="mgf2gs5">
        {/* Header */}
        <div
          className="bg-white rounded-xl shadow-md p-6 mb-8"
          data-oid=":b:.3ah"
        >
          <div className="flex items-start justify-between" data-oid="kt0h99k">
            <div data-oid="gjtc8zx">
              <h1
                className="text-2xl font-bold text-gray-800 mb-2"
                data-oid="q0c7qyv"
              >
                Apply for {internship.title}
              </h1>
              <p
                className="text-lg text-blue-600 font-semibold"
                data-oid="68k5enk"
              >
                {internship.company}
              </p>
              <div
                className="flex items-center gap-4 mt-2 text-sm text-gray-600"
                data-oid="thtjoju"
              >
                <span data-oid="33x9nq1">📍 {internship.location}</span>
                <span data-oid="t6_vx1z">⏱️ {internship.duration}</span>
                {internship.stipend && (
                  <span data-oid="zaasrti">💰 {internship.stipend}</span>
                )}
              </div>
            </div>
            {internship.isUrgent && (
              <span
                className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full"
                data-oid="0r15mk_"
              >
                🔥 URGENT HIRING
              </span>
            )}
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-xl shadow-md p-6" data-oid="ra5hbba">
          <h2
            className="text-xl font-bold text-gray-800 mb-6"
            data-oid="sj97k7o"
          >
            Application Form
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            data-oid="bl_wit0"
          >
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-6" data-oid="8xe_je2">
              <div data-oid="kja:jv2">
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  data-oid="8v2n32h"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  data-oid="ps_b988"
                />
              </div>
              <div data-oid="0v_fjwh">
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  data-oid="i1aynfy"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  data-oid="15_7vs7"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6" data-oid="wxf-8ox">
              <div data-oid="0abu6cf">
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  data-oid="j_y98uk"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  data-oid="pnbm015"
                />
              </div>
              <div data-oid=".kzip:d">
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  data-oid="xuv894j"
                >
                  University/College *
                </label>
                <input
                  type="text"
                  name="university"
                  value={formData.university}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  data-oid="forste4"
                />
              </div>
            </div>

            {/* Academic Information */}
            <div className="grid md:grid-cols-3 gap-6" data-oid="5ail.d5">
              <div data-oid="17dq2xo">
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  data-oid="4dag--q"
                >
                  Course/Degree *
                </label>
                <input
                  type="text"
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., B.Tech CSE"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  data-oid="nrbu:50"
                />
              </div>
              <div data-oid="gzl4yyw">
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  data-oid="zjym.q6"
                >
                  Graduation Year *
                </label>
                <select
                  name="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  data-oid="-gxfpgb"
                >
                  <option value="" data-oid="sozy0la">
                    Select Year
                  </option>
                  <option value="2024" data-oid="t1e8kxg">
                    2024
                  </option>
                  <option value="2025" data-oid="stwi_sp">
                    2025
                  </option>
                  <option value="2026" data-oid="ibuoot1">
                    2026
                  </option>
                  <option value="2027" data-oid="g.hir6u">
                    2027
                  </option>
                </select>
              </div>
              <div data-oid="zczy_ip">
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  data-oid="cr-gg_a"
                >
                  CGPA/Percentage
                </label>
                <input
                  type="text"
                  name="cgpa"
                  value={formData.cgpa}
                  onChange={handleInputChange}
                  placeholder="e.g., 8.5 or 85%"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  data-oid="_x-i.ce"
                />
              </div>
            </div>

            {/* Skills and Experience */}
            <div data-oid="_g.b.ve">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                data-oid="a9:4ay."
              >
                Relevant Skills *
              </label>
              <textarea
                name="skills"
                value={formData.skills}
                onChange={handleInputChange}
                required
                rows={3}
                placeholder="List your relevant skills (e.g., React, JavaScript, Python, etc.)"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                data-oid="mdg7us9"
              />
            </div>

            <div data-oid="u0xutrc">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                data-oid="hq0d.it"
              >
                Previous Experience (if any)
              </label>
              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                rows={3}
                placeholder="Describe any relevant projects, internships, or work experience"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                data-oid="0mocj27"
              />
            </div>

            {/* Links */}
            <div className="grid md:grid-cols-3 gap-6" data-oid="lsgw8f-">
              <div data-oid="amaj5d4">
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  data-oid="e.iy0v2"
                >
                  Portfolio URL
                </label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  placeholder="https://yourportfolio.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  data-oid="w3v8z1r"
                />
              </div>
              <div data-oid="vrwco_6">
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  data-oid="1x_7jby"
                >
                  LinkedIn Profile
                </label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  data-oid="l2m4p4q"
                />
              </div>
              <div data-oid="k.jgho:">
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  data-oid="c5f76hs"
                >
                  GitHub Profile
                </label>
                <input
                  type="url"
                  name="github"
                  value={formData.github}
                  onChange={handleInputChange}
                  placeholder="https://github.com/yourusername"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  data-oid="5c_juoe"
                />
              </div>
            </div>

            {/* Internship Specific */}
            <div className="grid md:grid-cols-2 gap-6" data-oid="pqzw2w9">
              <div data-oid="bynre:h">
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  data-oid="yawwx-u"
                >
                  Availability *
                </label>
                <select
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  data-oid="5nj:szy"
                >
                  <option value="" data-oid="uu566y:">
                    Select Availability
                  </option>
                  <option value="immediately" data-oid="bqidh-i">
                    Immediately
                  </option>
                  <option value="within-1-week" data-oid="p1h1p34">
                    Within 1 week
                  </option>
                  <option value="within-2-weeks" data-oid="4fi69uq">
                    Within 2 weeks
                  </option>
                  <option value="within-1-month" data-oid="tzzrway">
                    Within 1 month
                  </option>
                </select>
              </div>
              <div data-oid="3r6riw-">
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  data-oid="ug9637r"
                >
                  Expected Stipend (per month)
                </label>
                <input
                  type="text"
                  name="expectedStipend"
                  value={formData.expectedStipend}
                  onChange={handleInputChange}
                  placeholder="e.g., ₹20,000 or Negotiable"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  data-oid="harey6z"
                />
              </div>
            </div>

            {/* Why Interested */}
            <div data-oid="mqchyo:">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                data-oid="56zsbla"
              >
                Why are you interested in this internship? *
              </label>
              <textarea
                name="whyInterested"
                value={formData.whyInterested}
                onChange={handleInputChange}
                required
                rows={4}
                placeholder="Tell us why you want to intern at this company and what you hope to learn..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                data-oid="n2zgm9b"
              />
            </div>

            {/* Cover Letter */}
            <div data-oid="gxu320v">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                data-oid="zbtgrva"
              >
                Cover Letter
              </label>
              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                rows={4}
                placeholder="Write a brief cover letter explaining your interest and qualifications..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                data-oid="wip8-g7"
              />
            </div>

            {/* Resume Upload */}
            <div data-oid="3j22l-.">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                data-oid="i2o3dby"
              >
                Resume *
              </label>
              <input
                type="file"
                name="resume"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                data-oid=".ej8f43"
              />

              <p className="text-xs text-gray-500 mt-1" data-oid="fhh25jg">
                Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 pt-6" data-oid="dto837y">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                data-oid="unrn7gs"
              >
                {isSubmitting ? (
                  <div
                    className="flex items-center justify-center"
                    data-oid="pjg:buq"
                  >
                    <div
                      className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"
                      data-oid="8vv_17e"
                    ></div>
                    Submitting Application...
                  </div>
                ) : (
                  "Submit Application"
                )}
              </button>
              <a
                href="/internships"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                data-oid="z2k1vd:"
              >
                Cancel
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
