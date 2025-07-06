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
            <div className="min-h-screen bg-white" data-oid="la3bwt2">
                <MainNavbar data-oid="zo.z8gl" />
                <div className="max-w-4xl mx-auto px-4 py-16 text-center" data-oid="ypnsjoy">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4" data-oid=":wnqov4">
                        Internship Not Found
                    </h1>
                    <p className="text-gray-600" data-oid="z90x252">
                        The internship you're looking for doesn't exist.
                    </p>
                </div>
            </div>
        );
    }

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-white" data-oid="z-qd.41">
                <MainNavbar data-oid="odpd5ks" />
                <div className="max-w-4xl mx-auto px-4 py-16 text-center" data-oid="lq4.6w-">
                    <div
                        className="bg-green-50 border border-green-200 rounded-xl p-8"
                        data-oid="zocxays"
                    >
                        <div
                            className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                            data-oid="g54zin1"
                        >
                            <svg
                                className="w-8 h-8 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="ljkg.00"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                    data-oid="t9_klua"
                                />
                            </svg>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800 mb-4" data-oid="-g0vrk:">
                            Application Submitted Successfully!
                        </h1>
                        <p className="text-gray-600 mb-6" data-oid="zf:8_y4">
                            Thank you for applying for the {internship.title} position at{' '}
                            {internship.company}. We'll review your application and get back to you
                            soon.
                        </p>
                        <div className="flex gap-4 justify-center" data-oid="k-6o18n">
                            <a
                                href="/internships"
                                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                data-oid="3-j2pzs"
                            >
                                Browse More Internships
                            </a>
                            <a
                                href="/"
                                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                                data-oid="c2dtkj5"
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
        <div className="min-h-screen bg-gray-50" data-oid="b--nioi">
            <MainNavbar data-oid="o7r:g2u" />

            <div className="max-w-4xl mx-auto px-4 py-8" data-oid="50_2fty">
                {/* Header */}
                <div className="bg-white rounded-xl shadow-md p-6 mb-8" data-oid="q2r8lhc">
                    <div className="flex items-start justify-between" data-oid="8aogmcg">
                        <div data-oid="7fhhzk.">
                            <h1
                                className="text-2xl font-bold text-gray-800 mb-2"
                                data-oid="pp-e3k4"
                            >
                                Apply for {internship.title}
                            </h1>
                            <p className="text-lg text-blue-600 font-semibold" data-oid=".yg3k6h">
                                {internship.company}
                            </p>
                            <div
                                className="flex items-center gap-4 mt-2 text-sm text-gray-600"
                                data-oid="5jcrgi9"
                            >
                                <span data-oid="mqa_oty">📍 {internship.location}</span>
                                <span data-oid="n6-j3ja">⏱️ {internship.duration}</span>
                                {internship.stipend && (
                                    <span data-oid="9zjaz0_">💰 {internship.stipend}</span>
                                )}
                            </div>
                        </div>
                        {internship.isUrgent && (
                            <span
                                className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full"
                                data-oid="bw117pa"
                            >
                                🔥 URGENT HIRING
                            </span>
                        )}
                    </div>
                </div>

                {/* Application Form */}
                <div className="bg-white rounded-xl shadow-md p-6" data-oid="y-_1.u0">
                    <h2 className="text-xl font-bold text-gray-800 mb-6" data-oid="4q582de">
                        Application Form
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6" data-oid="fyem.gc">
                        {/* Personal Information */}
                        <div className="grid md:grid-cols-2 gap-6" data-oid="eod53_z">
                            <div data-oid="elfav8q">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="-e3bxoz"
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
                                    data-oid="60hjmet"
                                />
                            </div>
                            <div data-oid="cf250ng">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="hymltb."
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
                                    data-oid="n54k6r."
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6" data-oid="skd90hj">
                            <div data-oid="i7de53k">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="x7..tn9"
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
                                    data-oid="t-2t8py"
                                />
                            </div>
                            <div data-oid="7oc3u.z">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="bgou:cm"
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
                                    data-oid="o48e-yo"
                                />
                            </div>
                        </div>

                        {/* Academic Information */}
                        <div className="grid md:grid-cols-3 gap-6" data-oid="j9liqoz">
                            <div data-oid="m_90xvt">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="c62hc5t"
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
                                    data-oid="d4mxr82"
                                />
                            </div>
                            <div data-oid="-gf6rjr">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="yszf87:"
                                >
                                    Graduation Year *
                                </label>
                                <select
                                    name="graduationYear"
                                    value={formData.graduationYear}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    data-oid="-ge5a04"
                                >
                                    <option value="" data-oid="i_1nw3o">
                                        Select Year
                                    </option>
                                    <option value="2024" data-oid="azhjvrh">
                                        2024
                                    </option>
                                    <option value="2025" data-oid="0z-g-7m">
                                        2025
                                    </option>
                                    <option value="2026" data-oid=".q:nes3">
                                        2026
                                    </option>
                                    <option value="2027" data-oid="0wb67:d">
                                        2027
                                    </option>
                                </select>
                            </div>
                            <div data-oid="vegalpf">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="w48bkki"
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
                                    data-oid="lem.cjs"
                                />
                            </div>
                        </div>

                        {/* Skills and Experience */}
                        <div data-oid="xhcs5.c">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="xhcxi3r"
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
                                data-oid="-u09cxr"
                            />
                        </div>

                        <div data-oid="glts-4k">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="z01gc9."
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
                                data-oid="km8-2aa"
                            />
                        </div>

                        {/* Links */}
                        <div className="grid md:grid-cols-3 gap-6" data-oid="5pg1vo0">
                            <div data-oid="0z6b:1g">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="igm.rht"
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
                                    data-oid="81saja."
                                />
                            </div>
                            <div data-oid="i.peqf1">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="nu.3d0v"
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
                                    data-oid="7p:yxb6"
                                />
                            </div>
                            <div data-oid="kqzt1wb">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="79zn9:d"
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
                                    data-oid="y7hzi8v"
                                />
                            </div>
                        </div>

                        {/* Internship Specific */}
                        <div className="grid md:grid-cols-2 gap-6" data-oid="0a0dugf">
                            <div data-oid="ptsub-9">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="y9-pu.4"
                                >
                                    Availability *
                                </label>
                                <select
                                    name="availability"
                                    value={formData.availability}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    data-oid="nta-fb4"
                                >
                                    <option value="" data-oid="xe_8-mw">
                                        Select Availability
                                    </option>
                                    <option value="immediately" data-oid="rwgj1od">
                                        Immediately
                                    </option>
                                    <option value="within-1-week" data-oid="w2q8bh_">
                                        Within 1 week
                                    </option>
                                    <option value="within-2-weeks" data-oid="ugzeh1m">
                                        Within 2 weeks
                                    </option>
                                    <option value="within-1-month" data-oid="7enm_hk">
                                        Within 1 month
                                    </option>
                                </select>
                            </div>
                            <div data-oid=".m10ulg">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="r8452qe"
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
                                    data-oid="3ihu_oo"
                                />
                            </div>
                        </div>

                        {/* Why Interested */}
                        <div data-oid="59wcnl4">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="jf:2ilh"
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
                                data-oid="wy574f9"
                            />
                        </div>

                        {/* Cover Letter */}
                        <div data-oid="pngryo4">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="a62r0w2"
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
                                data-oid="blrwsnd"
                            />
                        </div>

                        {/* Resume Upload */}
                        <div data-oid="s.vhg6d">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="zvufn99"
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
                                data-oid="a5pkijw"
                            />

                            <p className="text-xs text-gray-500 mt-1" data-oid="ceuac0o">
                                Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
                            </p>
                        </div>

                        {/* Submit Button */}
                        <div className="flex gap-4 pt-6" data-oid="oqn81q4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                data-oid="h4un2ed"
                            >
                                {isSubmitting ? (
                                    <div
                                        className="flex items-center justify-center"
                                        data-oid="k7_3s1z"
                                    >
                                        <div
                                            className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"
                                            data-oid="_d0r-:2"
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
                                data-oid="ol:hu8z"
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
