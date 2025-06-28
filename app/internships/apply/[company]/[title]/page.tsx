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
            <div className="min-h-screen bg-white" data-oid="zsjlylk">
                <MainNavbar data-oid="tzft867" />
                <div className="max-w-4xl mx-auto px-4 py-16 text-center" data-oid="4eqhb73">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4" data-oid="2-9v8by">
                        Internship Not Found
                    </h1>
                    <p className="text-gray-600" data-oid="8-s_8d4">
                        The internship you're looking for doesn't exist.
                    </p>
                </div>
            </div>
        );
    }

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-white" data-oid="86lodi8">
                <MainNavbar data-oid="h_k90-h" />
                <div className="max-w-4xl mx-auto px-4 py-16 text-center" data-oid="p9s01mz">
                    <div
                        className="bg-green-50 border border-green-200 rounded-xl p-8"
                        data-oid="_-wzi_w"
                    >
                        <div
                            className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                            data-oid="r9jv_2x"
                        >
                            <svg
                                className="w-8 h-8 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="9lbst5x"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                    data-oid="ozpu6s8"
                                />
                            </svg>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800 mb-4" data-oid="nt2d5us">
                            Application Submitted Successfully!
                        </h1>
                        <p className="text-gray-600 mb-6" data-oid="r7b:fbh">
                            Thank you for applying for the {internship.title} position at{' '}
                            {internship.company}. We'll review your application and get back to you
                            soon.
                        </p>
                        <div className="flex gap-4 justify-center" data-oid="_z7hz1h">
                            <a
                                href="/internships"
                                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                data-oid="vj-7wcz"
                            >
                                Browse More Internships
                            </a>
                            <a
                                href="/"
                                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                                data-oid="zom5b:1"
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
        <div className="min-h-screen bg-gray-50" data-oid="-be-ki6">
            <MainNavbar data-oid="oe:duxx" />

            <div className="max-w-4xl mx-auto px-4 py-8" data-oid="hwo2c0x">
                {/* Header */}
                <div className="bg-white rounded-xl shadow-md p-6 mb-8" data-oid="tay2ja2">
                    <div className="flex items-start justify-between" data-oid="qch833r">
                        <div data-oid="1fix3_l">
                            <h1
                                className="text-2xl font-bold text-gray-800 mb-2"
                                data-oid="cdkic-z"
                            >
                                Apply for {internship.title}
                            </h1>
                            <p className="text-lg text-blue-600 font-semibold" data-oid="c6gdc8f">
                                {internship.company}
                            </p>
                            <div
                                className="flex items-center gap-4 mt-2 text-sm text-gray-600"
                                data-oid="s8ysgfj"
                            >
                                <span data-oid="k2y-lc-">📍 {internship.location}</span>
                                <span data-oid=".bexk_t">⏱️ {internship.duration}</span>
                                {internship.stipend && (
                                    <span data-oid="_059t6d">💰 {internship.stipend}</span>
                                )}
                            </div>
                        </div>
                        {internship.isUrgent && (
                            <span
                                className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full"
                                data-oid="a-4sz0z"
                            >
                                🔥 URGENT HIRING
                            </span>
                        )}
                    </div>
                </div>

                {/* Application Form */}
                <div className="bg-white rounded-xl shadow-md p-6" data-oid="uys48q5">
                    <h2 className="text-xl font-bold text-gray-800 mb-6" data-oid="w52xyh1">
                        Application Form
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6" data-oid="zlk:hkc">
                        {/* Personal Information */}
                        <div className="grid md:grid-cols-2 gap-6" data-oid="5h45bsh">
                            <div data-oid="g:t2g2d">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="nb1xen9"
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
                                    data-oid="dm1:jnv"
                                />
                            </div>
                            <div data-oid=":27lhx1">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="zeomd0."
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
                                    data-oid=".p0_.j_"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6" data-oid="osoqtxy">
                            <div data-oid="x5q7qr_">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="2ln31jd"
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
                                    data-oid="0qsbtrl"
                                />
                            </div>
                            <div data-oid="0kv7mos">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="_1ejobs"
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
                                    data-oid=":50kutz"
                                />
                            </div>
                        </div>

                        {/* Academic Information */}
                        <div className="grid md:grid-cols-3 gap-6" data-oid="vn8d:o5">
                            <div data-oid="0w0z2ye">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="dvo:dq1"
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
                                    data-oid="8si..-q"
                                />
                            </div>
                            <div data-oid="n_r9oz5">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="qd5n7ba"
                                >
                                    Graduation Year *
                                </label>
                                <select
                                    name="graduationYear"
                                    value={formData.graduationYear}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    data-oid="qorbaeu"
                                >
                                    <option value="" data-oid="y7_6:-w">
                                        Select Year
                                    </option>
                                    <option value="2024" data-oid="09vi8a-">
                                        2024
                                    </option>
                                    <option value="2025" data-oid="e9oju.6">
                                        2025
                                    </option>
                                    <option value="2026" data-oid="d_8n6by">
                                        2026
                                    </option>
                                    <option value="2027" data-oid="eaojxyk">
                                        2027
                                    </option>
                                </select>
                            </div>
                            <div data-oid="u32fkuj">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="n1rbmt1"
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
                                    data-oid=".ceq.fe"
                                />
                            </div>
                        </div>

                        {/* Skills and Experience */}
                        <div data-oid="hr2igo3">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="lfj92n4"
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
                                data-oid="egys_1y"
                            />
                        </div>

                        <div data-oid="jznscr.">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="sl.y2.8"
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
                                data-oid="ad78fy9"
                            />
                        </div>

                        {/* Links */}
                        <div className="grid md:grid-cols-3 gap-6" data-oid="3smghwe">
                            <div data-oid="8igkzs_">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="7g60iyg"
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
                                    data-oid="lyljjzm"
                                />
                            </div>
                            <div data-oid="oc_v8mp">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="p7ga9ov"
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
                                    data-oid="yiefdmr"
                                />
                            </div>
                            <div data-oid="n9e-iul">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="g_s0uih"
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
                                    data-oid="s1jafhc"
                                />
                            </div>
                        </div>

                        {/* Internship Specific */}
                        <div className="grid md:grid-cols-2 gap-6" data-oid="kjnjitk">
                            <div data-oid="qli:ra4">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="s7aqx1l"
                                >
                                    Availability *
                                </label>
                                <select
                                    name="availability"
                                    value={formData.availability}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    data-oid="q22vyyk"
                                >
                                    <option value="" data-oid="mwhvpca">
                                        Select Availability
                                    </option>
                                    <option value="immediately" data-oid="co6a6o5">
                                        Immediately
                                    </option>
                                    <option value="within-1-week" data-oid="vtd34l.">
                                        Within 1 week
                                    </option>
                                    <option value="within-2-weeks" data-oid="oeglue6">
                                        Within 2 weeks
                                    </option>
                                    <option value="within-1-month" data-oid="3imz5.l">
                                        Within 1 month
                                    </option>
                                </select>
                            </div>
                            <div data-oid="zu-0fpu">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="9115ucs"
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
                                    data-oid="5dr.gsx"
                                />
                            </div>
                        </div>

                        {/* Why Interested */}
                        <div data-oid="bu2ov5r">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="mild13t"
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
                                data-oid="eoxewwe"
                            />
                        </div>

                        {/* Cover Letter */}
                        <div data-oid="yg6sxp:">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="n.by-g9"
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
                                data-oid="l79x1zd"
                            />
                        </div>

                        {/* Resume Upload */}
                        <div data-oid="wngfu8m">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid=":oupdwi"
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
                                data-oid="-p.avhk"
                            />

                            <p className="text-xs text-gray-500 mt-1" data-oid="bh.2yye">
                                Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
                            </p>
                        </div>

                        {/* Submit Button */}
                        <div className="flex gap-4 pt-6" data-oid="jf49erk">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                data-oid="d3h.ga1"
                            >
                                {isSubmitting ? (
                                    <div
                                        className="flex items-center justify-center"
                                        data-oid="8igahrs"
                                    >
                                        <div
                                            className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"
                                            data-oid="1pw5zye"
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
                                data-oid="sy0ad_h"
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
