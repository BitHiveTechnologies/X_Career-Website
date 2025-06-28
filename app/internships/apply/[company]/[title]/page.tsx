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
            <div className="min-h-screen bg-white" data-oid="n5-yfxq">
                <MainNavbar data-oid="_g2him4" />
                <div className="max-w-4xl mx-auto px-4 py-16 text-center" data-oid="97_oq3u">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4" data-oid="yl2pkax">
                        Internship Not Found
                    </h1>
                    <p className="text-gray-600" data-oid="6aqzc9m">
                        The internship you're looking for doesn't exist.
                    </p>
                </div>
            </div>
        );
    }

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-white" data-oid="x_pnyku">
                <MainNavbar data-oid="gc905a7" />
                <div className="max-w-4xl mx-auto px-4 py-16 text-center" data-oid="ausoxtc">
                    <div
                        className="bg-green-50 border border-green-200 rounded-xl p-8"
                        data-oid="qo4jkjx"
                    >
                        <div
                            className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                            data-oid="w.quurr"
                        >
                            <svg
                                className="w-8 h-8 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="-vcg96b"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                    data-oid="zees3yn"
                                />
                            </svg>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800 mb-4" data-oid="43co-zt">
                            Application Submitted Successfully!
                        </h1>
                        <p className="text-gray-600 mb-6" data-oid=".:s29l5">
                            Thank you for applying for the {internship.title} position at{' '}
                            {internship.company}. We'll review your application and get back to you
                            soon.
                        </p>
                        <div className="flex gap-4 justify-center" data-oid="lpp:-09">
                            <a
                                href="/internships"
                                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                data-oid="l6gt8s-"
                            >
                                Browse More Internships
                            </a>
                            <a
                                href="/"
                                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                                data-oid="ynuoyg6"
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
        <div className="min-h-screen bg-gray-50" data-oid="smh48of">
            <MainNavbar data-oid="qbipbe_" />

            <div className="max-w-4xl mx-auto px-4 py-8" data-oid="hsnemcd">
                {/* Header */}
                <div className="bg-white rounded-xl shadow-md p-6 mb-8" data-oid="22w_-x5">
                    <div className="flex items-start justify-between" data-oid="yv162d8">
                        <div data-oid="dch5dgn">
                            <h1
                                className="text-2xl font-bold text-gray-800 mb-2"
                                data-oid="z23:.o6"
                            >
                                Apply for {internship.title}
                            </h1>
                            <p className="text-lg text-blue-600 font-semibold" data-oid="yv3x.03">
                                {internship.company}
                            </p>
                            <div
                                className="flex items-center gap-4 mt-2 text-sm text-gray-600"
                                data-oid="2yfbt2_"
                            >
                                <span data-oid="0.j2s6u">📍 {internship.location}</span>
                                <span data-oid="sgovgrw">⏱️ {internship.duration}</span>
                                {internship.stipend && (
                                    <span data-oid="hkjscan">💰 {internship.stipend}</span>
                                )}
                            </div>
                        </div>
                        {internship.isUrgent && (
                            <span
                                className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full"
                                data-oid="6i42qh4"
                            >
                                🔥 URGENT HIRING
                            </span>
                        )}
                    </div>
                </div>

                {/* Application Form */}
                <div className="bg-white rounded-xl shadow-md p-6" data-oid="1b2mm2-">
                    <h2 className="text-xl font-bold text-gray-800 mb-6" data-oid="1dyz9bm">
                        Application Form
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6" data-oid="hbd4c::">
                        {/* Personal Information */}
                        <div className="grid md:grid-cols-2 gap-6" data-oid=".qhq_vo">
                            <div data-oid="-0-qd6x">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="fbt2pws"
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
                                    data-oid="gemk49e"
                                />
                            </div>
                            <div data-oid="jpxv207">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="ivpdsaf"
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
                                    data-oid="6h19102"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6" data-oid="pakxa7m">
                            <div data-oid="ywkbe2r">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="8e4a:d5"
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
                                    data-oid="dk-im7p"
                                />
                            </div>
                            <div data-oid="-d7pkrz">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="-dc-lym"
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
                                    data-oid="ik1ovm5"
                                />
                            </div>
                        </div>

                        {/* Academic Information */}
                        <div className="grid md:grid-cols-3 gap-6" data-oid="20aslja">
                            <div data-oid="73p78jb">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="y8ie3r9"
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
                                    data-oid="ogvp72c"
                                />
                            </div>
                            <div data-oid="2s02c5k">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="zvihf0_"
                                >
                                    Graduation Year *
                                </label>
                                <select
                                    name="graduationYear"
                                    value={formData.graduationYear}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    data-oid="0vjwhg4"
                                >
                                    <option value="" data-oid="_8_1-h1">
                                        Select Year
                                    </option>
                                    <option value="2024" data-oid="6qv78hf">
                                        2024
                                    </option>
                                    <option value="2025" data-oid=":ilwej0">
                                        2025
                                    </option>
                                    <option value="2026" data-oid="oa4:hvz">
                                        2026
                                    </option>
                                    <option value="2027" data-oid="fo:sh0b">
                                        2027
                                    </option>
                                </select>
                            </div>
                            <div data-oid="s3znjs:">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="crgphlp"
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
                                    data-oid="07m3ele"
                                />
                            </div>
                        </div>

                        {/* Skills and Experience */}
                        <div data-oid="9tqy7bk">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="8nh4lq-"
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
                                data-oid="5uah.ea"
                            />
                        </div>

                        <div data-oid="kdxjd-u">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="11-2k_t"
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
                                data-oid="g4nex:x"
                            />
                        </div>

                        {/* Links */}
                        <div className="grid md:grid-cols-3 gap-6" data-oid="-u.rsje">
                            <div data-oid="tho512c">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="u:h0x11"
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
                                    data-oid="q820n5z"
                                />
                            </div>
                            <div data-oid="c_pmxnp">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="dajezf8"
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
                                    data-oid="gw7pr.b"
                                />
                            </div>
                            <div data-oid="f8yz21e">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="9ql9j2c"
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
                                    data-oid="c2er21:"
                                />
                            </div>
                        </div>

                        {/* Internship Specific */}
                        <div className="grid md:grid-cols-2 gap-6" data-oid="yyisau1">
                            <div data-oid="._p7.6o">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="4c-:7xl"
                                >
                                    Availability *
                                </label>
                                <select
                                    name="availability"
                                    value={formData.availability}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    data-oid="sgt.m2o"
                                >
                                    <option value="" data-oid="6vq365:">
                                        Select Availability
                                    </option>
                                    <option value="immediately" data-oid="i2xsppn">
                                        Immediately
                                    </option>
                                    <option value="within-1-week" data-oid="pa8wkxq">
                                        Within 1 week
                                    </option>
                                    <option value="within-2-weeks" data-oid="8ydr-i6">
                                        Within 2 weeks
                                    </option>
                                    <option value="within-1-month" data-oid="tds-b0.">
                                        Within 1 month
                                    </option>
                                </select>
                            </div>
                            <div data-oid="9bd2wp6">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="u84-7yu"
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
                                    data-oid="08_7n66"
                                />
                            </div>
                        </div>

                        {/* Why Interested */}
                        <div data-oid="g3bo.62">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="c8xrut2"
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
                                data-oid="gyxju:b"
                            />
                        </div>

                        {/* Cover Letter */}
                        <div data-oid="mt:xpfn">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="-g7_7jj"
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
                                data-oid="73o_dvw"
                            />
                        </div>

                        {/* Resume Upload */}
                        <div data-oid="5ywqahn">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="k9bbdn5"
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
                                data-oid="bhf12u9"
                            />

                            <p className="text-xs text-gray-500 mt-1" data-oid="oj:p_h8">
                                Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
                            </p>
                        </div>

                        {/* Submit Button */}
                        <div className="flex gap-4 pt-6" data-oid="edfy:kd">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                data-oid=":m41u-w"
                            >
                                {isSubmitting ? (
                                    <div
                                        className="flex items-center justify-center"
                                        data-oid="jf-nyjg"
                                    >
                                        <div
                                            className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"
                                            data-oid="wbpv6_z"
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
                                data-oid="qj-6v-2"
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
