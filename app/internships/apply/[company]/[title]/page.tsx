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
            <div className="min-h-screen bg-white" data-oid="h19:y1g">
                <MainNavbar data-oid="uvfx2on" />
                <div className="max-w-4xl mx-auto px-4 py-16 text-center" data-oid="707yemq">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4" data-oid="lu0cw0j">
                        Internship Not Found
                    </h1>
                    <p className="text-gray-600" data-oid="ojb8hwe">
                        The internship you're looking for doesn't exist.
                    </p>
                </div>
            </div>
        );
    }

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-white" data-oid="jmzkk.s">
                <MainNavbar data-oid="7h1viiv" />
                <div className="max-w-4xl mx-auto px-4 py-16 text-center" data-oid="dsf_pwt">
                    <div
                        className="bg-green-50 border border-green-200 rounded-xl p-8"
                        data-oid="iicvlmx"
                    >
                        <div
                            className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                            data-oid="nm20kyx"
                        >
                            <svg
                                className="w-8 h-8 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="c2njwt3"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                    data-oid="8zjn21_"
                                />
                            </svg>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800 mb-4" data-oid="diw5g.n">
                            Application Submitted Successfully!
                        </h1>
                        <p className="text-gray-600 mb-6" data-oid="eo8jrdu">
                            Thank you for applying for the {internship.title} position at{' '}
                            {internship.company}. We'll review your application and get back to you
                            soon.
                        </p>
                        <div className="flex gap-4 justify-center" data-oid="g_eit6n">
                            <a
                                href="/internships"
                                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                data-oid="40q-aim"
                            >
                                Browse More Internships
                            </a>
                            <a
                                href="/"
                                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                                data-oid="-5:d3ym"
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
        <div className="min-h-screen bg-gray-50" data-oid="4-z2i35">
            <MainNavbar data-oid="6wu0i-9" />

            <div className="max-w-4xl mx-auto px-4 py-8" data-oid="55-5-y8">
                {/* Header */}
                <div className="bg-white rounded-xl shadow-md p-6 mb-8" data-oid="uhz3ekz">
                    <div className="flex items-start justify-between" data-oid="h-l:fvd">
                        <div data-oid="_bgpznf">
                            <h1
                                className="text-2xl font-bold text-gray-800 mb-2"
                                data-oid="40-knv-"
                            >
                                Apply for {internship.title}
                            </h1>
                            <p className="text-lg text-blue-600 font-semibold" data-oid="gkait7i">
                                {internship.company}
                            </p>
                            <div
                                className="flex items-center gap-4 mt-2 text-sm text-gray-600"
                                data-oid="hrlwyil"
                            >
                                <span data-oid="ylwopsr">📍 {internship.location}</span>
                                <span data-oid="qni6-z.">⏱️ {internship.duration}</span>
                                {internship.stipend && (
                                    <span data-oid="syle5o:">💰 {internship.stipend}</span>
                                )}
                            </div>
                        </div>
                        {internship.isUrgent && (
                            <span
                                className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full"
                                data-oid="wox5:02"
                            >
                                🔥 URGENT HIRING
                            </span>
                        )}
                    </div>
                </div>

                {/* Application Form */}
                <div className="bg-white rounded-xl shadow-md p-6" data-oid="7e-_v30">
                    <h2 className="text-xl font-bold text-gray-800 mb-6" data-oid="gdd3f4u">
                        Application Form
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6" data-oid="ql_:tbi">
                        {/* Personal Information */}
                        <div className="grid md:grid-cols-2 gap-6" data-oid="4tlutju">
                            <div data-oid="_o2mxdg">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="b_8czax"
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
                                    data-oid="qcv1m40"
                                />
                            </div>
                            <div data-oid="pkf:6q2">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="z3e:793"
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
                                    data-oid=":yt75hg"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6" data-oid="0.z0ma6">
                            <div data-oid="l96uewo">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="ojg8fg5"
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
                                    data-oid="y9i2ab1"
                                />
                            </div>
                            <div data-oid="j6ww5ew">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="qw1z85k"
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
                                    data-oid="kgcphwk"
                                />
                            </div>
                        </div>

                        {/* Academic Information */}
                        <div className="grid md:grid-cols-3 gap-6" data-oid="0g_1c3i">
                            <div data-oid="axdh71y">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="m-kgmuq"
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
                                    data-oid="2zuhswt"
                                />
                            </div>
                            <div data-oid="lj586:9">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="tje06od"
                                >
                                    Graduation Year *
                                </label>
                                <select
                                    name="graduationYear"
                                    value={formData.graduationYear}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    data-oid="_d9-3an"
                                >
                                    <option value="" data-oid="ihbmtxk">
                                        Select Year
                                    </option>
                                    <option value="2024" data-oid="ez6d7fh">
                                        2024
                                    </option>
                                    <option value="2025" data-oid="ak-fcw6">
                                        2025
                                    </option>
                                    <option value="2026" data-oid="guws.ed">
                                        2026
                                    </option>
                                    <option value="2027" data-oid="r.gmaoo">
                                        2027
                                    </option>
                                </select>
                            </div>
                            <div data-oid="0_smtk:">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="h2x4kwo"
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
                                    data-oid="gmyk5hu"
                                />
                            </div>
                        </div>

                        {/* Skills and Experience */}
                        <div data-oid="o0qnml:">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="t741h7c"
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
                                data-oid="r6yo9-a"
                            />
                        </div>

                        <div data-oid="_uqoo.u">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="_405zno"
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
                                data-oid="-str:xs"
                            />
                        </div>

                        {/* Links */}
                        <div className="grid md:grid-cols-3 gap-6" data-oid="fp24_ef">
                            <div data-oid="oim3tqr">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="jfl_.jr"
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
                                    data-oid="w-vgx9o"
                                />
                            </div>
                            <div data-oid="2jjtbup">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="yv-8sz8"
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
                                    data-oid="mq55rem"
                                />
                            </div>
                            <div data-oid="u._kvis">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="u2.ngae"
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
                                    data-oid="rubr_pz"
                                />
                            </div>
                        </div>

                        {/* Internship Specific */}
                        <div className="grid md:grid-cols-2 gap-6" data-oid="2.gob1r">
                            <div data-oid="jhod960">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="8ftaouj"
                                >
                                    Availability *
                                </label>
                                <select
                                    name="availability"
                                    value={formData.availability}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    data-oid="u4.si2-"
                                >
                                    <option value="" data-oid="j6.-1sz">
                                        Select Availability
                                    </option>
                                    <option value="immediately" data-oid="48xvcz0">
                                        Immediately
                                    </option>
                                    <option value="within-1-week" data-oid="xukkld_">
                                        Within 1 week
                                    </option>
                                    <option value="within-2-weeks" data-oid="xi.6.x2">
                                        Within 2 weeks
                                    </option>
                                    <option value="within-1-month" data-oid="mzirvka">
                                        Within 1 month
                                    </option>
                                </select>
                            </div>
                            <div data-oid="ekl6vq4">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="orxiurn"
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
                                    data-oid="c6wdcc8"
                                />
                            </div>
                        </div>

                        {/* Why Interested */}
                        <div data-oid="xf.mbm9">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="xcbm-nj"
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
                                data-oid="pwyjj8r"
                            />
                        </div>

                        {/* Cover Letter */}
                        <div data-oid="vjkk4d-">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="3d1p3bv"
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
                                data-oid="bskbbty"
                            />
                        </div>

                        {/* Resume Upload */}
                        <div data-oid="_4eq4cj">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="dw-mql-"
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
                                data-oid="i65pk5v"
                            />

                            <p className="text-xs text-gray-500 mt-1" data-oid="ibwdyfi">
                                Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
                            </p>
                        </div>

                        {/* Submit Button */}
                        <div className="flex gap-4 pt-6" data-oid="b8mdk87">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                data-oid="5fvs-o-"
                            >
                                {isSubmitting ? (
                                    <div
                                        className="flex items-center justify-center"
                                        data-oid="vfq8i_0"
                                    >
                                        <div
                                            className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"
                                            data-oid="3_bg752"
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
                                data-oid="t1b4f2s"
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
