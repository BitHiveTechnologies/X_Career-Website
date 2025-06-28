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
            <div className="min-h-screen bg-white" data-oid=":i7q.sy">
                <MainNavbar data-oid="04nu42y" />
                <div className="max-w-4xl mx-auto px-4 py-16 text-center" data-oid="rx1y68j">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4" data-oid="f6:51hn">
                        Internship Not Found
                    </h1>
                    <p className="text-gray-600" data-oid="jg97w5r">
                        The internship you're looking for doesn't exist.
                    </p>
                </div>
            </div>
        );
    }

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-white" data-oid="z3flv8x">
                <MainNavbar data-oid="i_6c1vh" />
                <div className="max-w-4xl mx-auto px-4 py-16 text-center" data-oid="6kwun0z">
                    <div
                        className="bg-green-50 border border-green-200 rounded-xl p-8"
                        data-oid="a1v-j4n"
                    >
                        <div
                            className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                            data-oid="q7dx-uq"
                        >
                            <svg
                                className="w-8 h-8 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="1r6tw8-"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                    data-oid="g9sr3vv"
                                />
                            </svg>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800 mb-4" data-oid="7_:lk77">
                            Application Submitted Successfully!
                        </h1>
                        <p className="text-gray-600 mb-6" data-oid="a929gqv">
                            Thank you for applying for the {internship.title} position at{' '}
                            {internship.company}. We'll review your application and get back to you
                            soon.
                        </p>
                        <div className="flex gap-4 justify-center" data-oid="ao6f1vo">
                            <a
                                href="/internships"
                                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                data-oid="-roxguc"
                            >
                                Browse More Internships
                            </a>
                            <a
                                href="/"
                                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                                data-oid="zyzpvwz"
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
        <div className="min-h-screen bg-gray-50" data-oid="fm.q0ee">
            <MainNavbar data-oid="mrjzk7u" />

            <div className="max-w-4xl mx-auto px-4 py-8" data-oid="6vdfv9n">
                {/* Header */}
                <div className="bg-white rounded-xl shadow-md p-6 mb-8" data-oid="2vlhoh7">
                    <div className="flex items-start justify-between" data-oid="jlygkvt">
                        <div data-oid="jcwmt3g">
                            <h1
                                className="text-2xl font-bold text-gray-800 mb-2"
                                data-oid="puaeq_-"
                            >
                                Apply for {internship.title}
                            </h1>
                            <p className="text-lg text-blue-600 font-semibold" data-oid="lxn_fu6">
                                {internship.company}
                            </p>
                            <div
                                className="flex items-center gap-4 mt-2 text-sm text-gray-600"
                                data-oid="y1ncs0t"
                            >
                                <span data-oid="thihf6.">📍 {internship.location}</span>
                                <span data-oid="07.d10x">⏱️ {internship.duration}</span>
                                {internship.stipend && (
                                    <span data-oid="w3e5lyb">💰 {internship.stipend}</span>
                                )}
                            </div>
                        </div>
                        {internship.isUrgent && (
                            <span
                                className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full"
                                data-oid="kw_brtk"
                            >
                                🔥 URGENT HIRING
                            </span>
                        )}
                    </div>
                </div>

                {/* Application Form */}
                <div className="bg-white rounded-xl shadow-md p-6" data-oid="em97l2:">
                    <h2 className="text-xl font-bold text-gray-800 mb-6" data-oid="9:u-xsb">
                        Application Form
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6" data-oid="4pmez2j">
                        {/* Personal Information */}
                        <div className="grid md:grid-cols-2 gap-6" data-oid="jj:q76l">
                            <div data-oid="392l571">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="bv.__v_"
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
                                    data-oid="5a5afh4"
                                />
                            </div>
                            <div data-oid="ipm-esl">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="l47948l"
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
                                    data-oid="0lhuqtf"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6" data-oid="w.sv_0:">
                            <div data-oid="kgrw4y0">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="u-dbzm."
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
                                    data-oid=".iv2-5r"
                                />
                            </div>
                            <div data-oid="5.6muf_">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="wiadd6x"
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
                                    data-oid="xgw-:i2"
                                />
                            </div>
                        </div>

                        {/* Academic Information */}
                        <div className="grid md:grid-cols-3 gap-6" data-oid="2li.-90">
                            <div data-oid="5-1xj.2">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="mt20jon"
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
                                    data-oid="t6afkxc"
                                />
                            </div>
                            <div data-oid="f-npmh_">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="zvgk-ay"
                                >
                                    Graduation Year *
                                </label>
                                <select
                                    name="graduationYear"
                                    value={formData.graduationYear}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    data-oid="offn:c_"
                                >
                                    <option value="" data-oid="f2_iwus">
                                        Select Year
                                    </option>
                                    <option value="2024" data-oid="2yytr_d">
                                        2024
                                    </option>
                                    <option value="2025" data-oid="_p74iru">
                                        2025
                                    </option>
                                    <option value="2026" data-oid="wr4ibjl">
                                        2026
                                    </option>
                                    <option value="2027" data-oid=".puh8af">
                                        2027
                                    </option>
                                </select>
                            </div>
                            <div data-oid="sr8z:hd">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="2ki_-s-"
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
                                    data-oid="78:1sf3"
                                />
                            </div>
                        </div>

                        {/* Skills and Experience */}
                        <div data-oid="m._5g07">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="xo:o6e9"
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
                                data-oid="__:4691"
                            />
                        </div>

                        <div data-oid="ie3xjvz">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="n:if__o"
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
                                data-oid=".6l6hgj"
                            />
                        </div>

                        {/* Links */}
                        <div className="grid md:grid-cols-3 gap-6" data-oid="u4xr4ea">
                            <div data-oid="3:d7k3k">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="wymus2s"
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
                                    data-oid="txqy7xi"
                                />
                            </div>
                            <div data-oid="seckqaf">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="4xgg4j0"
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
                                    data-oid="bpib9jh"
                                />
                            </div>
                            <div data-oid="25v_sm.">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="pew15wm"
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
                                    data-oid="62qfxkr"
                                />
                            </div>
                        </div>

                        {/* Internship Specific */}
                        <div className="grid md:grid-cols-2 gap-6" data-oid="wk574ky">
                            <div data-oid="x.89q7q">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="e:ls_l_"
                                >
                                    Availability *
                                </label>
                                <select
                                    name="availability"
                                    value={formData.availability}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    data-oid=":gltk9l"
                                >
                                    <option value="" data-oid="0or7xdk">
                                        Select Availability
                                    </option>
                                    <option value="immediately" data-oid="jw_6pp6">
                                        Immediately
                                    </option>
                                    <option value="within-1-week" data-oid="8ynk5.v">
                                        Within 1 week
                                    </option>
                                    <option value="within-2-weeks" data-oid="sdht_vs">
                                        Within 2 weeks
                                    </option>
                                    <option value="within-1-month" data-oid="t7yevdo">
                                        Within 1 month
                                    </option>
                                </select>
                            </div>
                            <div data-oid="g_ul56_">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="73x41co"
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
                                    data-oid="4jh82ks"
                                />
                            </div>
                        </div>

                        {/* Why Interested */}
                        <div data-oid="sd4_f41">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="g_eq-q6"
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
                                data-oid="_141kuk"
                            />
                        </div>

                        {/* Cover Letter */}
                        <div data-oid="gi7zz87">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="35aohpb"
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
                                data-oid="vu_qzmo"
                            />
                        </div>

                        {/* Resume Upload */}
                        <div data-oid="b-vs7ba">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="og..gp-"
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
                                data-oid="fly2wtw"
                            />

                            <p className="text-xs text-gray-500 mt-1" data-oid="r.e.1w4">
                                Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
                            </p>
                        </div>

                        {/* Submit Button */}
                        <div className="flex gap-4 pt-6" data-oid="cn1ljx7">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                data-oid="ntm.c5n"
                            >
                                {isSubmitting ? (
                                    <div
                                        className="flex items-center justify-center"
                                        data-oid="vsal:hz"
                                    >
                                        <div
                                            className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"
                                            data-oid="elf9tqb"
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
                                data-oid="ztvjloo"
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
