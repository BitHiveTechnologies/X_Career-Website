'use client';

import MainNavbar from '@/components/mainNavbar';
import { mockInternships, type Internship } from '@/lib/mockData';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

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
            <div className="min-h-screen bg-white" data-oid="edn:plv">
                <MainNavbar data-oid="0jols4-" />
                <div className="max-w-4xl mx-auto px-4 py-16 text-center" data-oid="l7u5vb2">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4" data-oid="of88:1o">
                        Internship Not Found
                    </h1>
                    <p className="text-gray-600" data-oid="uwav:-4">
                        The internship you're looking for doesn't exist.
                    </p>
                </div>
            </div>
        );
    }

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-white" data-oid="qhszcml">
                <MainNavbar data-oid="d.xuiwa" />
                <div className="max-w-4xl mx-auto px-4 py-16 text-center" data-oid="fg5t2n_">
                    <div
                        className="bg-green-50 border border-green-200 rounded-xl p-8"
                        data-oid="blmzxyd"
                    >
                        <div
                            className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                            data-oid="vuaaz7e"
                        >
                            <svg
                                className="w-8 h-8 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="sh8_m8:"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                    data-oid="1xllo6z"
                                />
                            </svg>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800 mb-4" data-oid="i21goaj">
                            Application Submitted Successfully!
                        </h1>
                        <p className="text-gray-600 mb-6" data-oid="v1kj0pj">
                            Thank you for applying for the {internship.title} position at{' '}
                            {internship.company}. We'll review your application and get back to you
                            soon.
                        </p>
                        <div className="flex gap-4 justify-center" data-oid="h60xlj:">
                            <a
                                href="/internships"
                                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                data-oid="0odo3ai"
                            >
                                Browse More Internships
                            </a>
                            <a
                                href="/"
                                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                                data-oid="wcr4cmq"
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
        <div className="min-h-screen bg-gray-50" data-oid="pwcglxl">
            <MainNavbar data-oid="azflbxg" />

            <div className="max-w-4xl mx-auto px-4 py-8" data-oid="v:.l9he">
                {/* Header */}
                <div className="bg-white rounded-xl shadow-md p-6 mb-8" data-oid="-b0hs.u">
                    <div className="flex items-start justify-between" data-oid="_5bxba4">
                        <div data-oid="pjogw96">
                            <h1
                                className="text-2xl font-bold text-gray-800 mb-2"
                                data-oid="l7q7l.p"
                            >
                                Apply for {internship.title}
                            </h1>
                            <p className="text-lg text-blue-600 font-semibold" data-oid="yicbrus">
                                {internship.company}
                            </p>
                            <div
                                className="flex items-center gap-4 mt-2 text-sm text-gray-600"
                                data-oid="wbjp_cp"
                            >
                                <span data-oid="nubckaj">📍 {internship.location}</span>
                                <span data-oid="r__zsvu">⏱️ {internship.duration}</span>
                                {internship.stipend && (
                                    <span data-oid="k33r07u">💰 {internship.stipend}</span>
                                )}
                            </div>
                        </div>
                        {internship.isUrgent && (
                            <span
                                className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full"
                                data-oid="pxrb:t1"
                            >
                                🔥 URGENT HIRING
                            </span>
                        )}
                    </div>
                </div>

                {/* Application Form */}
                <div className="bg-white rounded-xl shadow-md p-6" data-oid="qbi81p_">
                    <h2 className="text-xl font-bold text-gray-800 mb-6" data-oid="2b91y-v">
                        Application Form
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6" data-oid="-:se40d">
                        {/* Personal Information */}
                        <div className="grid md:grid-cols-2 gap-6" data-oid="buae690">
                            <div data-oid="de.brso">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="db6n6x6"
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
                                    data-oid="ulk8xet"
                                />
                            </div>
                            <div data-oid="5gx3i8.">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="ait5ii-"
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
                                    data-oid="gh54fe9"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6" data-oid="9q6f.b_">
                            <div data-oid="kfzduag">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="f1tk63s"
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
                                    data-oid="an0hmt7"
                                />
                            </div>
                            <div data-oid="7jvl8:q">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid=".ooa4zr"
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
                                    data-oid="s--6nhp"
                                />
                            </div>
                        </div>

                        {/* Academic Information */}
                        <div className="grid md:grid-cols-3 gap-6" data-oid="1y3kz00">
                            <div data-oid="hu0nl4d">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="9osi.um"
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
                                    data-oid="umb4:r9"
                                />
                            </div>
                            <div data-oid="2274_bm">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="29c5gjj"
                                >
                                    Graduation Year *
                                </label>
                                <select
                                    name="graduationYear"
                                    value={formData.graduationYear}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    data-oid="st9d1t2"
                                >
                                    <option value="" data-oid="5ghmqhs">
                                        Select Year
                                    </option>
                                    <option value="2024" data-oid="exr45v1">
                                        2024
                                    </option>
                                    <option value="2025" data-oid="tfuenbw">
                                        2025
                                    </option>
                                    <option value="2026" data-oid="ktqz5co">
                                        2026
                                    </option>
                                    <option value="2027" data-oid="h9qatwo">
                                        2027
                                    </option>
                                </select>
                            </div>
                            <div data-oid="2vvt10z">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="y6l9wwn"
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
                                    data-oid="nv_sko8"
                                />
                            </div>
                        </div>

                        {/* Skills and Experience */}
                        <div data-oid="o6ea1g_">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="9qz-amy"
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
                                data-oid="jhcw4bm"
                            />
                        </div>

                        <div data-oid="ecvvag4">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="zwjw.1:"
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
                                data-oid="pe7iby6"
                            />
                        </div>

                        {/* Links */}
                        <div className="grid md:grid-cols-3 gap-6" data-oid="8un6:bd">
                            <div data-oid="g705zy5">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid=":j5xos."
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
                                    data-oid="449khcd"
                                />
                            </div>
                            <div data-oid="-iz:psx">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="i77o71m"
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
                                    data-oid="n67fqhm"
                                />
                            </div>
                            <div data-oid="31egyda">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="on.:8u9"
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
                                    data-oid="invdg6i"
                                />
                            </div>
                        </div>

                        {/* Internship Specific */}
                        <div className="grid md:grid-cols-2 gap-6" data-oid="lrba11l">
                            <div data-oid="fici29:">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="ij.x_qi"
                                >
                                    Availability *
                                </label>
                                <select
                                    name="availability"
                                    value={formData.availability}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    data-oid="6:.x2il"
                                >
                                    <option value="" data-oid="a_ijuc9">
                                        Select Availability
                                    </option>
                                    <option value="immediately" data-oid="bv-tr_a">
                                        Immediately
                                    </option>
                                    <option value="within-1-week" data-oid="x_p_itv">
                                        Within 1 week
                                    </option>
                                    <option value="within-2-weeks" data-oid="8pdwihi">
                                        Within 2 weeks
                                    </option>
                                    <option value="within-1-month" data-oid="evvz45f">
                                        Within 1 month
                                    </option>
                                </select>
                            </div>
                            <div data-oid="awlrdxy">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="lv:v0m5"
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
                                    data-oid="lrovbd:"
                                />
                            </div>
                        </div>

                        {/* Why Interested */}
                        <div data-oid=":5588l9">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="u-1f4pw"
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
                                data-oid="iajbr7b"
                            />
                        </div>

                        {/* Cover Letter */}
                        <div data-oid="rplqkfx">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="siq3zcn"
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
                                data-oid="zurkk:1"
                            />
                        </div>

                        {/* Resume Upload */}
                        <div data-oid="egs_08x">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="e2uf-bf"
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
                                data-oid="rupfc:y"
                            />

                            <p className="text-xs text-gray-500 mt-1" data-oid="f01sojx">
                                Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
                            </p>
                        </div>

                        {/* Submit Button */}
                        <div className="flex gap-4 pt-6" data-oid="481gbuv">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                data-oid="k6bux58"
                            >
                                {isSubmitting ? (
                                    <div
                                        className="flex items-center justify-center"
                                        data-oid="wxwdmaw"
                                    >
                                        <div
                                            className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"
                                            data-oid="ai2:9ut"
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
                                data-oid="utvaq1f"
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
