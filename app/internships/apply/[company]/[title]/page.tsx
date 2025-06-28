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
            <div className="min-h-screen bg-white" data-oid=":z177mv">
                <MainNavbar data-oid="cwj2-.r" />
                <div className="max-w-4xl mx-auto px-4 py-16 text-center" data-oid="hlqw9xl">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4" data-oid="6e1fjzk">
                        Internship Not Found
                    </h1>
                    <p className="text-gray-600" data-oid="3pzsd1j">
                        The internship you're looking for doesn't exist.
                    </p>
                </div>
            </div>
        );
    }

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-white" data-oid="xagn0pe">
                <MainNavbar data-oid="qpska.2" />
                <div className="max-w-4xl mx-auto px-4 py-16 text-center" data-oid="fk.vik3">
                    <div
                        className="bg-green-50 border border-green-200 rounded-xl p-8"
                        data-oid="erchxdu"
                    >
                        <div
                            className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                            data-oid="iu_hqmw"
                        >
                            <svg
                                className="w-8 h-8 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="-7in.yh"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                    data-oid="i2qj5kf"
                                />
                            </svg>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800 mb-4" data-oid="ude:gra">
                            Application Submitted Successfully!
                        </h1>
                        <p className="text-gray-600 mb-6" data-oid="okpq.l1">
                            Thank you for applying for the {internship.title} position at{' '}
                            {internship.company}. We'll review your application and get back to you
                            soon.
                        </p>
                        <div className="flex gap-4 justify-center" data-oid=":n_zsdo">
                            <a
                                href="/internships"
                                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                data-oid="b6zb11j"
                            >
                                Browse More Internships
                            </a>
                            <a
                                href="/"
                                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                                data-oid="9i.0-q8"
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
        <div className="min-h-screen bg-gray-50" data-oid=".f4s-g_">
            <MainNavbar data-oid="p.x.7up" />

            <div className="max-w-4xl mx-auto px-4 py-8" data-oid="p.:noi0">
                {/* Header */}
                <div className="bg-white rounded-xl shadow-md p-6 mb-8" data-oid="vzlqwyj">
                    <div className="flex items-start justify-between" data-oid="hwdly46">
                        <div data-oid="sw3rud8">
                            <h1
                                className="text-2xl font-bold text-gray-800 mb-2"
                                data-oid="7cn4e1c"
                            >
                                Apply for {internship.title}
                            </h1>
                            <p className="text-lg text-blue-600 font-semibold" data-oid=".bry5t8">
                                {internship.company}
                            </p>
                            <div
                                className="flex items-center gap-4 mt-2 text-sm text-gray-600"
                                data-oid="y_54_:h"
                            >
                                <span data-oid="nujw.jy">📍 {internship.location}</span>
                                <span data-oid="_3xmykz">⏱️ {internship.duration}</span>
                                {internship.stipend && (
                                    <span data-oid="r86o2ho">💰 {internship.stipend}</span>
                                )}
                            </div>
                        </div>
                        {internship.isUrgent && (
                            <span
                                className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full"
                                data-oid="kb70d:d"
                            >
                                🔥 URGENT HIRING
                            </span>
                        )}
                    </div>
                </div>

                {/* Application Form */}
                <div className="bg-white rounded-xl shadow-md p-6" data-oid="89250ad">
                    <h2 className="text-xl font-bold text-gray-800 mb-6" data-oid="an6d4th">
                        Application Form
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6" data-oid="z86j09c">
                        {/* Personal Information */}
                        <div className="grid md:grid-cols-2 gap-6" data-oid="q6g9hxb">
                            <div data-oid="syet:wk">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="-t_o4a-"
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
                                    data-oid="huq:wjd"
                                />
                            </div>
                            <div data-oid="ckab:d6">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="ywhq5j5"
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
                                    data-oid="kr.n77y"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6" data-oid="6c:p9-n">
                            <div data-oid="6qrz-gy">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="mj:28_s"
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
                                    data-oid="b9jnisv"
                                />
                            </div>
                            <div data-oid="fnu:po_">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="zji-u7s"
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
                                    data-oid="g-yyy4y"
                                />
                            </div>
                        </div>

                        {/* Academic Information */}
                        <div className="grid md:grid-cols-3 gap-6" data-oid="8ykbuqh">
                            <div data-oid="wmqakof">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="k6o2ab_"
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
                                    data-oid="zyx113c"
                                />
                            </div>
                            <div data-oid="ki1v8j-">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="-j.4zig"
                                >
                                    Graduation Year *
                                </label>
                                <select
                                    name="graduationYear"
                                    value={formData.graduationYear}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    data-oid="kps1-b:"
                                >
                                    <option value="" data-oid="669rvy3">
                                        Select Year
                                    </option>
                                    <option value="2024" data-oid="_sl0.ss">
                                        2024
                                    </option>
                                    <option value="2025" data-oid=":duexv2">
                                        2025
                                    </option>
                                    <option value="2026" data-oid="t6kws:9">
                                        2026
                                    </option>
                                    <option value="2027" data-oid="z4r483i">
                                        2027
                                    </option>
                                </select>
                            </div>
                            <div data-oid="opx8wnm">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="p6nobfr"
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
                                    data-oid="mwlycki"
                                />
                            </div>
                        </div>

                        {/* Skills and Experience */}
                        <div data-oid="wvqz8ln">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="ms9u-pr"
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
                                data-oid="t6jbkvp"
                            />
                        </div>

                        <div data-oid="k:0jea3">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="f3z8gy4"
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
                                data-oid=".4xl:rf"
                            />
                        </div>

                        {/* Links */}
                        <div className="grid md:grid-cols-3 gap-6" data-oid="zp:x6b5">
                            <div data-oid="bzi1zh8">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="5v1abc7"
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
                                    data-oid="51ryr_b"
                                />
                            </div>
                            <div data-oid="7w:6tcc">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid=".c7nhfb"
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
                                    data-oid="o.k86cg"
                                />
                            </div>
                            <div data-oid="xq2cp01">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="mtwj1hr"
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
                                    data-oid="jrv-hz_"
                                />
                            </div>
                        </div>

                        {/* Internship Specific */}
                        <div className="grid md:grid-cols-2 gap-6" data-oid="tv8kr9m">
                            <div data-oid="xygokqa">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="t42x4wf"
                                >
                                    Availability *
                                </label>
                                <select
                                    name="availability"
                                    value={formData.availability}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    data-oid="f7mzbje"
                                >
                                    <option value="" data-oid="7m69krb">
                                        Select Availability
                                    </option>
                                    <option value="immediately" data-oid="-j70e6z">
                                        Immediately
                                    </option>
                                    <option value="within-1-week" data-oid="hqk-08n">
                                        Within 1 week
                                    </option>
                                    <option value="within-2-weeks" data-oid="_qs9kt0">
                                        Within 2 weeks
                                    </option>
                                    <option value="within-1-month" data-oid="5zmr5-n">
                                        Within 1 month
                                    </option>
                                </select>
                            </div>
                            <div data-oid="ywx7qco">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="36yq_pa"
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
                                    data-oid="iljf04x"
                                />
                            </div>
                        </div>

                        {/* Why Interested */}
                        <div data-oid="s.9v7g-">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="gg__ai-"
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
                                data-oid="kge389."
                            />
                        </div>

                        {/* Cover Letter */}
                        <div data-oid="qub:6mr">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="1m88ipl"
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
                                data-oid="ipxi48v"
                            />
                        </div>

                        {/* Resume Upload */}
                        <div data-oid=":flotw9">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="8-qmrqu"
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
                                data-oid="g4stolj"
                            />

                            <p className="text-xs text-gray-500 mt-1" data-oid="a8ipt.0">
                                Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
                            </p>
                        </div>

                        {/* Submit Button */}
                        <div className="flex gap-4 pt-6" data-oid="d-kolck">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                data-oid="emcctk8"
                            >
                                {isSubmitting ? (
                                    <div
                                        className="flex items-center justify-center"
                                        data-oid="zlq2w44"
                                    >
                                        <div
                                            className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"
                                            data-oid="u.nasqr"
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
                                data-oid="p8ma-5s"
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
