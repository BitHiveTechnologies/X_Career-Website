'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import MainNavbar from '@/components/mainNavbar';
import { mockInternships } from '@/lib/mockData';
import type { Internship } from '@/lib/mockData';

export default function InternshipApplicationPage() {
    const params = useParams();
    const [internship, setInternship] = useState<Internship | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        university: '',
        course: '',
        graduationYear: '',
        cgpa: '',
        skills: '',
        experience: '',
        portfolio: '',
        linkedin: '',
        github: '',
        coverLetter: '',
        resume: null as File | null,
        availability: '',
        expectedStipend: '',
        whyInterested: '',
    });

    useEffect(() => {
        if (params.company && params.title) {
            const companySlug = params.company as string;
            const titleSlug = params.title as string;

            const foundInternship = mockInternships.find((internship) => {
                const internshipCompanySlug = internship.company
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .replace(/[^a-z0-9-]/g, '');
                const internshipTitleSlug = internship.title
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .replace(/[^a-z0-9-]/g, '');
                return internshipCompanySlug === companySlug && internshipTitleSlug === titleSlug;
            });

            setInternship(foundInternship || null);
        }
    }, [params]);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
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
            <div className="min-h-screen bg-white" data-oid="earjcao">
                <MainNavbar data-oid="_kdcwgr" />
                <div className="max-w-4xl mx-auto px-4 py-16 text-center" data-oid="quh-fb_">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4" data-oid="j4s1nck">
                        Internship Not Found
                    </h1>
                    <p className="text-gray-600" data-oid="uy_fvsz">
                        The internship you're looking for doesn't exist.
                    </p>
                </div>
            </div>
        );
    }

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-white" data-oid="ysuhdk1">
                <MainNavbar data-oid="58i278d" />
                <div className="max-w-4xl mx-auto px-4 py-16 text-center" data-oid="ytznjxv">
                    <div
                        className="bg-green-50 border border-green-200 rounded-xl p-8"
                        data-oid="5267rcb"
                    >
                        <div
                            className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                            data-oid="9.3myis"
                        >
                            <svg
                                className="w-8 h-8 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="cizncmn"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                    data-oid="pod8v5k"
                                />
                            </svg>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800 mb-4" data-oid="e_izq7z">
                            Application Submitted Successfully!
                        </h1>
                        <p className="text-gray-600 mb-6" data-oid="kv1yk:b">
                            Thank you for applying for the {internship.title} position at{' '}
                            {internship.company}. We'll review your application and get back to you
                            soon.
                        </p>
                        <div className="flex gap-4 justify-center" data-oid="hh.lvcr">
                            <a
                                href="/internships"
                                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                data-oid="d_fyx-t"
                            >
                                Browse More Internships
                            </a>
                            <a
                                href="/"
                                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                                data-oid="1py:0t7"
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
        <div className="min-h-screen bg-gray-50" data-oid="gul-2c2">
            <MainNavbar data-oid="zy59es_" />

            <div className="max-w-4xl mx-auto px-4 py-8" data-oid="og1ru73">
                {/* Header */}
                <div className="bg-white rounded-xl shadow-md p-6 mb-8" data-oid="kwo2a.r">
                    <div className="flex items-start justify-between" data-oid="q3-9925">
                        <div data-oid="3d17dfe">
                            <h1
                                className="text-2xl font-bold text-gray-800 mb-2"
                                data-oid="56txkws"
                            >
                                Apply for {internship.title}
                            </h1>
                            <p className="text-lg text-blue-600 font-semibold" data-oid="nlwcdol">
                                {internship.company}
                            </p>
                            <div
                                className="flex items-center gap-4 mt-2 text-sm text-gray-600"
                                data-oid="7xri4fr"
                            >
                                <span data-oid="1d-9-zc">📍 {internship.location}</span>
                                <span data-oid="keofb-o">⏱️ {internship.duration}</span>
                                {internship.stipend && (
                                    <span data-oid="drffpwa">💰 {internship.stipend}</span>
                                )}
                            </div>
                        </div>
                        {internship.isUrgent && (
                            <span
                                className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full"
                                data-oid="ky02:35"
                            >
                                🔥 URGENT HIRING
                            </span>
                        )}
                    </div>
                </div>

                {/* Application Form */}
                <div className="bg-white rounded-xl shadow-md p-6" data-oid="bw65.8j">
                    <h2 className="text-xl font-bold text-gray-800 mb-6" data-oid="abo4g9_">
                        Application Form
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6" data-oid="k3_.oij">
                        {/* Personal Information */}
                        <div className="grid md:grid-cols-2 gap-6" data-oid="xr2:qld">
                            <div data-oid="7oej.32">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="vf-9x5y"
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
                                    data-oid="iha:7g:"
                                />
                            </div>
                            <div data-oid="xe9-3u8">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="idopr9x"
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
                                    data-oid="blrmwwm"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6" data-oid="elgzfen">
                            <div data-oid="3nz_5.k">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="x.f97a:"
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
                                    data-oid="b2aqxol"
                                />
                            </div>
                            <div data-oid="9l::5_2">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="w-okg2b"
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
                                    data-oid="i0pochl"
                                />
                            </div>
                        </div>

                        {/* Academic Information */}
                        <div className="grid md:grid-cols-3 gap-6" data-oid="bt3sr:d">
                            <div data-oid="r8til2a">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="nd80hsp"
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
                                    data-oid="ohhp9ql"
                                />
                            </div>
                            <div data-oid="myf74.:">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="olp2hea"
                                >
                                    Graduation Year *
                                </label>
                                <select
                                    name="graduationYear"
                                    value={formData.graduationYear}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    data-oid=":wu24_3"
                                >
                                    <option value="" data-oid="2xk-kzd">
                                        Select Year
                                    </option>
                                    <option value="2024" data-oid="eo4gyz9">
                                        2024
                                    </option>
                                    <option value="2025" data-oid="w0mfvbf">
                                        2025
                                    </option>
                                    <option value="2026" data-oid="h64lpg1">
                                        2026
                                    </option>
                                    <option value="2027" data-oid="ehmk9:h">
                                        2027
                                    </option>
                                </select>
                            </div>
                            <div data-oid=":1e4p7_">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="-m20arq"
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
                                    data-oid="6y8ve1b"
                                />
                            </div>
                        </div>

                        {/* Skills and Experience */}
                        <div data-oid="hpsev0o">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="4ec:h4."
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
                                data-oid="aco.2ug"
                            />
                        </div>

                        <div data-oid="waktzhi">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="yig4qsq"
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
                                data-oid="r_rlc6g"
                            />
                        </div>

                        {/* Links */}
                        <div className="grid md:grid-cols-3 gap-6" data-oid="di6na8x">
                            <div data-oid="c_mlpea">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="1o2i9or"
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
                                    data-oid="-_h-axx"
                                />
                            </div>
                            <div data-oid="r6uu87h">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="yecfp9z"
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
                                    data-oid=":zchjlw"
                                />
                            </div>
                            <div data-oid="0yc5738">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="pw5t5vp"
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
                                    data-oid="6et0ubt"
                                />
                            </div>
                        </div>

                        {/* Internship Specific */}
                        <div className="grid md:grid-cols-2 gap-6" data-oid="w65k188">
                            <div data-oid="jztuor-">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="3.80knr"
                                >
                                    Availability *
                                </label>
                                <select
                                    name="availability"
                                    value={formData.availability}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    data-oid="ejf:kxx"
                                >
                                    <option value="" data-oid="9n12_gc">
                                        Select Availability
                                    </option>
                                    <option value="immediately" data-oid="7_5go2y">
                                        Immediately
                                    </option>
                                    <option value="within-1-week" data-oid="6mw1g0a">
                                        Within 1 week
                                    </option>
                                    <option value="within-2-weeks" data-oid="amjuln1">
                                        Within 2 weeks
                                    </option>
                                    <option value="within-1-month" data-oid=".dq80r0">
                                        Within 1 month
                                    </option>
                                </select>
                            </div>
                            <div data-oid="ibn9fek">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="s5s2ko4"
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
                                    data-oid="_xnlnle"
                                />
                            </div>
                        </div>

                        {/* Why Interested */}
                        <div data-oid="nzgekj:">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="529o06-"
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
                                data-oid="8hc095a"
                            />
                        </div>

                        {/* Cover Letter */}
                        <div data-oid="n4zn7ri">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="l2onbej"
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
                                data-oid="tystx2u"
                            />
                        </div>

                        {/* Resume Upload */}
                        <div data-oid="p3kzye9">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="hn57_gq"
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
                                data-oid="ivxv4-q"
                            />

                            <p className="text-xs text-gray-500 mt-1" data-oid="dv:h:nb">
                                Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
                            </p>
                        </div>

                        {/* Submit Button */}
                        <div className="flex gap-4 pt-6" data-oid="0tujq4q">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                data-oid="u1uu9.0"
                            >
                                {isSubmitting ? (
                                    <div
                                        className="flex items-center justify-center"
                                        data-oid="-fd7zyj"
                                    >
                                        <div
                                            className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"
                                            data-oid="ahx2t.6"
                                        ></div>
                                        Submitting Application...
                                    </div>
                                ) : (
                                    'Submit Application'
                                )}
                            </button>
                            <a
                                href="/internships"
                                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                                data-oid="1cxi4lp"
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
