'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import MainNavbar from '@/components/mainNavbar';
import { Job } from '@/app/jobs/page';

// Mock data - in real app, this would come from API
const mockJobs: Job[] = [
    {
        id: 1,
        title: 'Frontend Developer',
        company: 'Swiggy',
        location: 'Bangalore, India',
        experienceRequired: '0-2 years',
        jobType: 'Full-time',
        employmentType: 'Permanent',
        skills: ['React', 'TypeScript', 'JavaScript', 'CSS', 'Redux'],
        postedDate: '2024-01-15',
        salary: '₹6-10 LPA',
        description:
            'Join our team to build amazing user interfaces for millions of food lovers...',
        isRemote: false,
        isFeatured: true,
        isUrgent: true,
        applicantCount: 234,
        companyLogo: '/logos/swiggy.png',
        companySize: '5000-10000',
        industry: 'Food Tech',
        benefits: ['Health Insurance', 'Free Meals', 'Flexible Hours', 'Stock Options'],
        companyType: 'Startup',
    },
    // Add other jobs here...
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
            <div className="min-h-screen bg-white" data-oid="d6d6rmz">
                <MainNavbar data-oid="r.ur7_t" />
                <div className="max-w-4xl mx-auto px-4 py-16 text-center" data-oid="p95hqde">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4" data-oid="29z.g3z">
                        Job Not Found
                    </h1>
                    <p className="text-gray-600 mb-8" data-oid="z.qgm-.">
                        The job you're looking for doesn't exist.
                    </p>
                    <button
                        onClick={() => router.push('/jobs')}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        data-oid="qlrde_2"
                    >
                        Back to Jobs
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50" data-oid="vjz8-h7">
            <MainNavbar data-oid="8og4wn9" />

            <div className="max-w-4xl mx-auto px-4 py-8" data-oid="u:k39_:">
                {/* Header */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8" data-oid="t88t8n8">
                    <div className="flex items-center justify-between mb-4" data-oid="st_6t4s">
                        <button
                            onClick={() => router.back()}
                            className="flex items-center text-blue-600 hover:text-blue-700"
                            data-oid="wz4zhsg"
                        >
                            <svg
                                className="h-5 w-5 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="rmqdbt-"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 19l-7-7 7-7"
                                    data-oid="c8_pw7."
                                />
                            </svg>
                            Back
                        </button>
                    </div>

                    <h1 className="text-3xl font-bold text-gray-800 mb-2" data-oid="foqxk2v">
                        Apply for {job.title}
                    </h1>
                    <p className="text-xl text-blue-600 mb-2" data-oid=".xnsr6t">
                        {job.company}
                    </p>
                    <p className="text-gray-600" data-oid="d0j5kvs">
                        {job.location} • {job.jobType} • {job.salary}
                    </p>
                </div>

                {/* Application Form */}
                <div className="bg-white rounded-lg shadow-md p-6" data-oid="p7qbxyh">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6" data-oid="py__mn0">
                        Application Form
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6" data-oid="n6qbs9m">
                        {/* Personal Information */}
                        <div className="grid md:grid-cols-2 gap-6" data-oid="d--bktz">
                            <div data-oid="h2nr:be">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="r-gh_xf"
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
                                    data-oid="d_8hzvv"
                                />
                            </div>

                            <div data-oid="-fs9eud">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="686x8ti"
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
                                    data-oid="dzys1l4"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6" data-oid="v19b2us">
                            <div data-oid=":64gfxm">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="9owccyi"
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
                                    data-oid="tho97qo"
                                />
                            </div>

                            <div data-oid="-_8_0kg">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="z3fnam1"
                                >
                                    Years of Experience *
                                </label>
                                <select
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    data-oid="z:u7vmd"
                                >
                                    <option value="" data-oid="7jahcb8">
                                        Select Experience
                                    </option>
                                    <option value="0-1" data-oid="qernp2z">
                                        0-1 years
                                    </option>
                                    <option value="1-3" data-oid="r6zutj1">
                                        1-3 years
                                    </option>
                                    <option value="3-5" data-oid="sp..ste">
                                        3-5 years
                                    </option>
                                    <option value="5+" data-oid="bhjh2bv">
                                        5+ years
                                    </option>
                                </select>
                            </div>
                        </div>

                        {/* Salary Information */}
                        <div className="grid md:grid-cols-3 gap-6" data-oid="fse_6p9">
                            <div data-oid="b_yvyjl">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="7lz1qn8"
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
                                    data-oid="w44v_9c"
                                />
                            </div>

                            <div data-oid="5v6jp9q">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="qnptj7."
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
                                    data-oid="dwoidop"
                                />
                            </div>

                            <div data-oid="ga58a_n">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="cd662gx"
                                >
                                    Notice Period *
                                </label>
                                <select
                                    name="noticePeriod"
                                    value={formData.noticePeriod}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    data-oid="8gf5y0f"
                                >
                                    <option value="" data-oid="ytyjerj">
                                        Select Notice Period
                                    </option>
                                    <option value="immediate" data-oid="23h6npn">
                                        Immediate
                                    </option>
                                    <option value="15-days" data-oid="x9u6g63">
                                        15 days
                                    </option>
                                    <option value="1-month" data-oid="qttqa41">
                                        1 month
                                    </option>
                                    <option value="2-months" data-oid="u-qbx_0">
                                        2 months
                                    </option>
                                    <option value="3-months" data-oid="839opjb">
                                        3 months
                                    </option>
                                </select>
                            </div>
                        </div>

                        {/* Resume Upload */}
                        <div data-oid="lb2moac">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="29mvbwd"
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
                                data-oid="uqa_5dj"
                            />

                            <p className="text-sm text-gray-500 mt-1" data-oid="ty5392.">
                                Accepted formats: PDF, DOC, DOCX (Max 5MB)
                            </p>
                        </div>

                        {/* Cover Letter */}
                        <div data-oid="4hx3eqm">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid=":fv8_cj"
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
                                data-oid="f_ukwod"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex gap-4" data-oid="2d0t_z4">
                            <button
                                type="submit"
                                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                                data-oid="cv9d12o"
                            >
                                Submit Application
                            </button>
                            <button
                                type="button"
                                onClick={() => router.back()}
                                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                                data-oid="dwa3mgp"
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
