'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

interface Job {
    id: number;
    title: string;
    company: string;
    location: string;
    salary?: string;
    jobType: string;
}

const mockJobs: Job[] = [
    {
        id: 1,
        title: 'Frontend Developer',
        company: 'Swiggy',
        location: 'Bangalore, India',
        salary: '₹6-10 LPA',
        jobType: 'Full-time',
    },
];

export default function JobApplicationPage() {
    const params = useParams();
    const router = useRouter();
    const jobTitle = params.jobTitle as string;
    const [job, setJob] = useState<Job | null>(null);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        experience: '',
        currentSalary: '',
        expectedSalary: '',
        noticePeriod: '',
        coverLetter: '',
        resume: null as File | null,
    });

    useEffect(() => {
        // Find job by title (URL decoded)
        const decodedTitle = decodeURIComponent(jobTitle).replace(/-/g, ' ');
        const foundJob = mockJobs.find((j) => j.title.toLowerCase() === decodedTitle.toLowerCase());
        setJob(foundJob || null);
    }, [jobTitle]);

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Application submitted:', formData);
        // Redirect to success page or show success message
        alert('Application submitted successfully!');
        router.push('/jobs');
    };

    if (!job) {
        return (
            <div className="min-h-screen bg-white" data-oid="cgurvr.">
                <MainNavbar data-oid="aib8lh_" />
                <div className="max-w-4xl mx-auto px-4 py-16 text-center" data-oid="de_2zq-">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4" data-oid="vu5xoqc">
                        Job Not Found
                    </h1>
                    <p className="text-gray-600 mb-8" data-oid="nc072gp">
                        The job you're looking for doesn't exist.
                    </p>
                    <button
                        onClick={() => router.push('/jobs')}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        data-oid="t01t_3q"
                    >
                        Back to Jobs
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50" data-oid="wbyqgka">
            <MainNavbar data-oid="exizu5g" />

            <div className="max-w-4xl mx-auto px-4 py-8" data-oid="jd-z207">
                {/* Header */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8" data-oid="3rkrkfa">
                    <div className="flex items-center justify-between mb-4" data-oid="g-7d0v0">
                        <button
                            onClick={() => router.back()}
                            className="flex items-center text-blue-600 hover:text-blue-700"
                            data-oid="1lq9xne"
                        >
                            <svg
                                className="h-5 w-5 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="b_stp.f"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 19l-7-7 7-7"
                                    data-oid="fh6m90k"
                                />
                            </svg>
                            Back
                        </button>
                    </div>

                    <h1 className="text-3xl font-bold text-gray-800 mb-2" data-oid="vftl.sj">
                        Apply for {job.title}
                    </h1>
                    <p className="text-xl text-blue-600 mb-2" data-oid="_b96ff0">
                        {job.company}
                    </p>
                    <p className="text-gray-600" data-oid="cjh08ym">
                        {job.location} • {job.jobType} • {job.salary}
                    </p>
                </div>

                {/* Application Form */}
                <div className="bg-white rounded-lg shadow-md p-6" data-oid="jtkgicf">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6" data-oid=".x3.:pw">
                        Application Form
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6" data-oid="58pg3tq">
                        {/* Personal Information */}
                        <div className="grid md:grid-cols-2 gap-6" data-oid="mdwr3ni">
                            <div data-oid="4r.q3ll">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="e4d-gew"
                                >
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    data-oid="tyr1-i7"
                                />
                            </div>

                            <div data-oid="a0as17_">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="f0f3w.a"
                                >
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    data-oid="eohnwy1"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6" data-oid="wm-9ja1">
                            <div data-oid="nz1x:sm">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="86m0u_7"
                                >
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    data-oid="mp78801"
                                />
                            </div>

                            <div data-oid="7ugxqre">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="x:em586"
                                >
                                    Years of Experience *
                                </label>
                                <select
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    data-oid="9ymwt9y"
                                >
                                    <option value="" data-oid="vzgmx-x">
                                        Select Experience
                                    </option>
                                    <option value="0-1" data-oid="px_ttss">
                                        0-1 years
                                    </option>
                                    <option value="1-3" data-oid="9wjl4-a">
                                        1-3 years
                                    </option>
                                    <option value="3-5" data-oid="8f:dwh1">
                                        3-5 years
                                    </option>
                                    <option value="5+" data-oid="axbh-6k">
                                        5+ years
                                    </option>
                                </select>
                            </div>
                        </div>

                        {/* Salary Information */}
                        <div className="grid md:grid-cols-3 gap-6" data-oid="6l_afch">
                            <div data-oid="-ovcvjm">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="jvo6nvy"
                                >
                                    Current Salary (LPA)
                                </label>
                                <input
                                    type="text"
                                    name="currentSalary"
                                    value={formData.currentSalary}
                                    onChange={handleInputChange}
                                    placeholder="e.g., 8"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    data-oid="9eq72oj"
                                />
                            </div>

                            <div data-oid="1znf-kk">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="d_9m_7a"
                                >
                                    Expected Salary (LPA) *
                                </label>
                                <input
                                    type="text"
                                    name="expectedSalary"
                                    value={formData.expectedSalary}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="e.g., 12"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    data-oid="f69.0.r"
                                />
                            </div>

                            <div data-oid="18q8:ex">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="uo599iy"
                                >
                                    Notice Period *
                                </label>
                                <select
                                    name="noticePeriod"
                                    value={formData.noticePeriod}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    data-oid="24zm4si"
                                >
                                    <option value="" data-oid="yadddb.">
                                        Select Notice Period
                                    </option>
                                    <option value="immediate" data-oid="ahe3yat">
                                        Immediate
                                    </option>
                                    <option value="15-days" data-oid="roqcrup">
                                        15 days
                                    </option>
                                    <option value="1-month" data-oid="e0-sl1u">
                                        1 month
                                    </option>
                                    <option value="2-months" data-oid="t3rwef.">
                                        2 months
                                    </option>
                                    <option value="3-months" data-oid="ixmu1h.">
                                        3 months
                                    </option>
                                </select>
                            </div>
                        </div>

                        {/* Resume Upload */}
                        <div data-oid="mxi7tvh">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="d_txfed"
                            >
                                Resume/CV *
                            </label>
                            <input
                                type="file"
                                name="resume"
                                onChange={handleFileChange}
                                accept=".pdf,.doc,.docx"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                data-oid="wk76115"
                            />

                            <p className="text-sm text-gray-500 mt-1" data-oid="sf7tm9a">
                                Accepted formats: PDF, DOC, DOCX (Max 5MB)
                            </p>
                        </div>

                        {/* Cover Letter */}
                        <div data-oid="dpxzklb">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="d6:-w5g"
                            >
                                Cover Letter
                            </label>
                            <textarea
                                name="coverLetter"
                                value={formData.coverLetter}
                                onChange={handleInputChange}
                                rows={6}
                                placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                data-oid="35to63x"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex gap-4" data-oid="tcazrwd">
                            <button
                                type="submit"
                                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                                data-oid="7lgsw92"
                            >
                                Submit Application
                            </button>
                            <button
                                type="button"
                                onClick={() => router.back()}
                                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                                data-oid="_iojv27"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
