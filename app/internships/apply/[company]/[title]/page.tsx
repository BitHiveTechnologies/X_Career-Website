'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import MainNavbar from '@/components/mainNavbar';
import { mockInternships, type Internship } from '@/lib/mockData';

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
            <div className="min-h-screen bg-white" data-oid=".kop693">
                <MainNavbar data-oid="vem56s7" />
                <div className="max-w-4xl mx-auto px-4 py-16 text-center" data-oid="9l0nynt">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4" data-oid="sxn2q23">
                        Internship Not Found
                    </h1>
                    <p className="text-gray-600" data-oid="wl5z_zq">
                        The internship you're looking for doesn't exist.
                    </p>
                </div>
            </div>
        );
    }

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-white" data-oid="71sudge">
                <MainNavbar data-oid="so_0j-x" />
                <div className="max-w-4xl mx-auto px-4 py-16 text-center" data-oid="o3rtie_">
                    <div
                        className="bg-green-50 border border-green-200 rounded-xl p-8"
                        data-oid="iyv_1fr"
                    >
                        <div
                            className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                            data-oid="wauof:s"
                        >
                            <svg
                                className="w-8 h-8 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="0rpx45q"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                    data-oid="vmuc1ju"
                                />
                            </svg>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800 mb-4" data-oid="2du42nl">
                            Application Submitted Successfully!
                        </h1>
                        <p className="text-gray-600 mb-6" data-oid="v_x9356">
                            Thank you for applying for the {internship.title} position at{' '}
                            {internship.company}. We'll review your application and get back to you
                            soon.
                        </p>
                        <div className="flex gap-4 justify-center" data-oid="-w6hdek">
                            <a
                                href="/internships"
                                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                data-oid="0ou7jkq"
                            >
                                Browse More Internships
                            </a>
                            <a
                                href="/"
                                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                                data-oid="suhspla"
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
        <div className="min-h-screen bg-gray-50" data-oid="e:tf:i8">
            <MainNavbar data-oid="yi26nke" />

            <div className="max-w-4xl mx-auto px-4 py-8" data-oid="1ol_j7u">
                {/* Header */}
                <div className="bg-white rounded-xl shadow-md p-6 mb-8" data-oid="7f408fs">
                    <div className="flex items-start justify-between" data-oid="mrqvw6:">
                        <div data-oid="ws7zz8k">
                            <h1
                                className="text-2xl font-bold text-gray-800 mb-2"
                                data-oid="l8ao15n"
                            >
                                Apply for {internship.title}
                            </h1>
                            <p className="text-lg text-blue-600 font-semibold" data-oid="hf5pbaq">
                                {internship.company}
                            </p>
                            <div
                                className="flex items-center gap-4 mt-2 text-sm text-gray-600"
                                data-oid="416dm0-"
                            >
                                <span data-oid="wlae9:1">📍 {internship.location}</span>
                                <span data-oid="kvh9t-8">⏱️ {internship.duration}</span>
                                {internship.stipend && (
                                    <span data-oid="uyob96e">💰 {internship.stipend}</span>
                                )}
                            </div>
                        </div>
                        {internship.isUrgent && (
                            <span
                                className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full"
                                data-oid="e9kfkl6"
                            >
                                🔥 URGENT HIRING
                            </span>
                        )}
                    </div>
                </div>

                {/* Application Form */}
                <div className="bg-white rounded-xl shadow-md p-6" data-oid="gm_1jhx">
                    <h2 className="text-xl font-bold text-gray-800 mb-6" data-oid="juz31z1">
                        Application Form
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6" data-oid="89i2t8d">
                        {/* Personal Information */}
                        <div className="grid md:grid-cols-2 gap-6" data-oid="i6jpt:b">
                            <div data-oid="90ldsy:">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="3nv_to0"
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
                                    data-oid="ecj047z"
                                />
                            </div>
                            <div data-oid="rw6rr49">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="tq2gu3q"
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
                                    data-oid="n:uujp."
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6" data-oid="7_9:ef.">
                            <div data-oid="_jil.lc">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="dca-ql_"
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
                                    data-oid="t8j53uw"
                                />
                            </div>
                            <div data-oid="rhxelw8">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="9..99kx"
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
                                    data-oid="n5401gr"
                                />
                            </div>
                        </div>

                        {/* Academic Information */}
                        <div className="grid md:grid-cols-3 gap-6" data-oid="_2:2-2s">
                            <div data-oid="f:bm_8w">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="62g-5yg"
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
                                    data-oid="p8xz-km"
                                />
                            </div>
                            <div data-oid="tat._bd">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="o31w1jl"
                                >
                                    Graduation Year *
                                </label>
                                <select
                                    name="graduationYear"
                                    value={formData.graduationYear}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    data-oid="9bj6.qh"
                                >
                                    <option value="" data-oid=".5_z8yd">
                                        Select Year
                                    </option>
                                    <option value="2024" data-oid="c.j3e-m">
                                        2024
                                    </option>
                                    <option value="2025" data-oid="xgw5em_">
                                        2025
                                    </option>
                                    <option value="2026" data-oid="-3.n4j0">
                                        2026
                                    </option>
                                    <option value="2027" data-oid="smwz2:b">
                                        2027
                                    </option>
                                </select>
                            </div>
                            <div data-oid="ijo6hdq">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="dhcx9b6"
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
                                    data-oid="lw30pmd"
                                />
                            </div>
                        </div>

                        {/* Skills and Experience */}
                        <div data-oid="q-:rc8e">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="s1abiaa"
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
                                data-oid="uh2uv64"
                            />
                        </div>

                        <div data-oid="e-c972g">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="rkraara"
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
                                data-oid="1pa64bx"
                            />
                        </div>

                        {/* Links */}
                        <div className="grid md:grid-cols-3 gap-6" data-oid="ppstf_4">
                            <div data-oid="hson-2s">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="_kzhuv3"
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
                                    data-oid="y0f9mid"
                                />
                            </div>
                            <div data-oid="0ecb42i">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="u5ffqfv"
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
                                    data-oid="803e_qy"
                                />
                            </div>
                            <div data-oid="r:adczc">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="a9ra40c"
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
                                    data-oid="tdl7l08"
                                />
                            </div>
                        </div>

                        {/* Internship Specific */}
                        <div className="grid md:grid-cols-2 gap-6" data-oid="eg88myz">
                            <div data-oid="13zc8r0">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="4-xxvfi"
                                >
                                    Availability *
                                </label>
                                <select
                                    name="availability"
                                    value={formData.availability}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    data-oid="vtti64v"
                                >
                                    <option value="" data-oid="yk.s_o0">
                                        Select Availability
                                    </option>
                                    <option value="immediately" data-oid="8:df7fi">
                                        Immediately
                                    </option>
                                    <option value="within-1-week" data-oid="5t15.0b">
                                        Within 1 week
                                    </option>
                                    <option value="within-2-weeks" data-oid="lknwmn6">
                                        Within 2 weeks
                                    </option>
                                    <option value="within-1-month" data-oid="haqc1kt">
                                        Within 1 month
                                    </option>
                                </select>
                            </div>
                            <div data-oid="ag79x_g">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="-jw_4:y"
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
                                    data-oid="ib-tq9a"
                                />
                            </div>
                        </div>

                        {/* Why Interested */}
                        <div data-oid="q2:unsi">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="eo.s1uq"
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
                                data-oid="djnp3iy"
                            />
                        </div>

                        {/* Cover Letter */}
                        <div data-oid="c10lknw">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="esb76g7"
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
                                data-oid="icdw-_6"
                            />
                        </div>

                        {/* Resume Upload */}
                        <div data-oid="nl.aihy">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="tt_eneu"
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
                                data-oid="5zq_6iv"
                            />

                            <p className="text-xs text-gray-500 mt-1" data-oid="o6smsvq">
                                Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
                            </p>
                        </div>

                        {/* Submit Button */}
                        <div className="flex gap-4 pt-6" data-oid="vvnz5ao">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                data-oid="4djo.l2"
                            >
                                {isSubmitting ? (
                                    <div
                                        className="flex items-center justify-center"
                                        data-oid="75mhh::"
                                    >
                                        <div
                                            className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"
                                            data-oid="t8.mhod"
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
                                data-oid="dw13ejz"
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
