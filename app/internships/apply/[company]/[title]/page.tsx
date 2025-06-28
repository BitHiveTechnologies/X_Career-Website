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
            <div className="min-h-screen bg-white" data-oid="je-9szm">
                <MainNavbar data-oid="efww_de" />
                <div className="max-w-4xl mx-auto px-4 py-16 text-center" data-oid="cze23jh">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4" data-oid="_40m2bx">
                        Internship Not Found
                    </h1>
                    <p className="text-gray-600" data-oid="cj-fi4j">
                        The internship you're looking for doesn't exist.
                    </p>
                </div>
            </div>
        );
    }

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-white" data-oid="4u9sob7">
                <MainNavbar data-oid="08xzjxx" />
                <div className="max-w-4xl mx-auto px-4 py-16 text-center" data-oid="ayy:lxn">
                    <div
                        className="bg-green-50 border border-green-200 rounded-xl p-8"
                        data-oid="9:ng2kw"
                    >
                        <div
                            className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                            data-oid="egr5zpj"
                        >
                            <svg
                                className="w-8 h-8 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="u1ofol-"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                    data-oid="qu-11je"
                                />
                            </svg>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800 mb-4" data-oid="g3hgv8d">
                            Application Submitted Successfully!
                        </h1>
                        <p className="text-gray-600 mb-6" data-oid="ku477d-">
                            Thank you for applying for the {internship.title} position at{' '}
                            {internship.company}. We'll review your application and get back to you
                            soon.
                        </p>
                        <div className="flex gap-4 justify-center" data-oid="wry-obc">
                            <a
                                href="/internships"
                                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                data-oid="-3s9wp-"
                            >
                                Browse More Internships
                            </a>
                            <a
                                href="/"
                                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                                data-oid="uq3geu_"
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
        <div className="min-h-screen bg-gray-50" data-oid="bznb4.z">
            <MainNavbar data-oid="dtuo7qm" />

            <div className="max-w-4xl mx-auto px-4 py-8" data-oid="xeq-ejy">
                {/* Header */}
                <div className="bg-white rounded-xl shadow-md p-6 mb-8" data-oid="q_ka1q4">
                    <div className="flex items-start justify-between" data-oid="iv30n1v">
                        <div data-oid="xbnacgl">
                            <h1
                                className="text-2xl font-bold text-gray-800 mb-2"
                                data-oid="prxi44b"
                            >
                                Apply for {internship.title}
                            </h1>
                            <p className="text-lg text-blue-600 font-semibold" data-oid="__7dji7">
                                {internship.company}
                            </p>
                            <div
                                className="flex items-center gap-4 mt-2 text-sm text-gray-600"
                                data-oid=".wp2:47"
                            >
                                <span data-oid="e7u7h6b">📍 {internship.location}</span>
                                <span data-oid="3las-pp">⏱️ {internship.duration}</span>
                                {internship.stipend && (
                                    <span data-oid="4s4dm_4">💰 {internship.stipend}</span>
                                )}
                            </div>
                        </div>
                        {internship.isUrgent && (
                            <span
                                className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full"
                                data-oid="5cfg7sc"
                            >
                                🔥 URGENT HIRING
                            </span>
                        )}
                    </div>
                </div>

                {/* Application Form */}
                <div className="bg-white rounded-xl shadow-md p-6" data-oid="k96yv-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-6" data-oid="-1s8mx3">
                        Application Form
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6" data-oid="f0apfuf">
                        {/* Personal Information */}
                        <div className="grid md:grid-cols-2 gap-6" data-oid="dm6.n-v">
                            <div data-oid="n:4dwjx">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="nm0g8kf"
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
                                    data-oid="j0n:3g0"
                                />
                            </div>
                            <div data-oid="5-p2n0n">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="uno8csh"
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
                                    data-oid="x:.07r9"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6" data-oid="x91xnq0">
                            <div data-oid="23cmdx9">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="y9g242r"
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
                                    data-oid="lgjhb3t"
                                />
                            </div>
                            <div data-oid="nw_aoj3">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="k251q84"
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
                                    data-oid="8i9_rsj"
                                />
                            </div>
                        </div>

                        {/* Academic Information */}
                        <div className="grid md:grid-cols-3 gap-6" data-oid="cj7x-c-">
                            <div data-oid="uxqt84s">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="54cil29"
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
                                    data-oid="471u-9b"
                                />
                            </div>
                            <div data-oid="tcsosn7">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="dg_19y5"
                                >
                                    Graduation Year *
                                </label>
                                <select
                                    name="graduationYear"
                                    value={formData.graduationYear}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    data-oid="_.cln59"
                                >
                                    <option value="" data-oid="tr03dou">
                                        Select Year
                                    </option>
                                    <option value="2024" data-oid="mb0i6y2">
                                        2024
                                    </option>
                                    <option value="2025" data-oid="b:0q55n">
                                        2025
                                    </option>
                                    <option value="2026" data-oid="s8pn9zl">
                                        2026
                                    </option>
                                    <option value="2027" data-oid="704t8a9">
                                        2027
                                    </option>
                                </select>
                            </div>
                            <div data-oid="bhn4x-5">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="ubkf-e2"
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
                                    data-oid="8ju1-.h"
                                />
                            </div>
                        </div>

                        {/* Skills and Experience */}
                        <div data-oid="f7hv-w3">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="lw745p:"
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
                                data-oid="zqstp_l"
                            />
                        </div>

                        <div data-oid="o07s7_6">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="v.-t.md"
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
                                data-oid="1:pyu9j"
                            />
                        </div>

                        {/* Links */}
                        <div className="grid md:grid-cols-3 gap-6" data-oid="sl243lo">
                            <div data-oid="68_-_8:">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="_7assja"
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
                                    data-oid="qai9:o7"
                                />
                            </div>
                            <div data-oid="cfan2ia">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="1derr28"
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
                                    data-oid="jnm4cf9"
                                />
                            </div>
                            <div data-oid="9-5ulot">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="e:xsko3"
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
                                    data-oid="jvcd0.q"
                                />
                            </div>
                        </div>

                        {/* Internship Specific */}
                        <div className="grid md:grid-cols-2 gap-6" data-oid="2pm7d8p">
                            <div data-oid="visa8rr">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="pt12995"
                                >
                                    Availability *
                                </label>
                                <select
                                    name="availability"
                                    value={formData.availability}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    data-oid="i6w635j"
                                >
                                    <option value="" data-oid="9t6-gpr">
                                        Select Availability
                                    </option>
                                    <option value="immediately" data-oid="yebzoiw">
                                        Immediately
                                    </option>
                                    <option value="within-1-week" data-oid="fcm8qdt">
                                        Within 1 week
                                    </option>
                                    <option value="within-2-weeks" data-oid="4.-r0:-">
                                        Within 2 weeks
                                    </option>
                                    <option value="within-1-month" data-oid="9xel3.c">
                                        Within 1 month
                                    </option>
                                </select>
                            </div>
                            <div data-oid="htqcrd4">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="sdyeq2k"
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
                                    data-oid="ums05q3"
                                />
                            </div>
                        </div>

                        {/* Why Interested */}
                        <div data-oid="ocptdvu">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="rmzlxji"
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
                                data-oid="9per-5v"
                            />
                        </div>

                        {/* Cover Letter */}
                        <div data-oid="m5oaxgt">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="13:f8p0"
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
                                data-oid="uiuierx"
                            />
                        </div>

                        {/* Resume Upload */}
                        <div data-oid="w.hecod">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="km8dqgi"
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
                                data-oid="yetaqbf"
                            />

                            <p className="text-xs text-gray-500 mt-1" data-oid="2z3qxn0">
                                Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
                            </p>
                        </div>

                        {/* Submit Button */}
                        <div className="flex gap-4 pt-6" data-oid="i440ibn">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                data-oid="yxustdv"
                            >
                                {isSubmitting ? (
                                    <div
                                        className="flex items-center justify-center"
                                        data-oid="d5x11cr"
                                    >
                                        <div
                                            className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"
                                            data-oid="b0gpfw5"
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
                                data-oid="kv7uryc"
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
