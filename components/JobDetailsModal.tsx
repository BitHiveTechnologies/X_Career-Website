'use client';

import { useState } from 'react';
import { Job } from '@/app/jobs/page';

interface JobDetailsModalProps {
    job: Job;
    isOpen: boolean;
    onClose: () => void;
    onApply: () => void;
}

export default function JobDetailsModal({ job, isOpen, onClose, onApply }: JobDetailsModalProps) {
    const [activeTab, setActiveTab] = useState<'overview' | 'requirements' | 'company'>('overview');

    if (!isOpen) return null;

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-custom flex items-center justify-center p-4"
            onClick={handleBackdropClick}
            data-oid=".ezexsq"
        >
            <div
                className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden modal-enter"
                data-oid="yk:whqv"
            >
                {/* Header */}
                <div
                    className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white p-6"
                    data-oid="95ahvwy"
                >
                    <div className="flex items-start justify-between" data-oid="1hqzrjt">
                        <div className="flex-1" data-oid=":-e368z">
                            <div className="flex items-center gap-3 mb-2" data-oid="vo:w:ka">
                                <h1 className="text-2xl font-bold" data-oid="qhii5pq">
                                    {job.title}
                                </h1>
                                {job.isUrgent && (
                                    <span
                                        className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse"
                                        data-oid="0ddu_8a"
                                    >
                                        🔥 URGENT
                                    </span>
                                )}
                                {job.isFeatured && (
                                    <span
                                        className="bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full"
                                        data-oid="nhx.:0f"
                                    >
                                        ⭐ FEATURED
                                    </span>
                                )}
                            </div>
                            <p
                                className="text-xl font-semibold text-blue-100 mb-2"
                                data-oid="2177cxl"
                            >
                                {job.company}
                            </p>
                            <div
                                className="flex flex-wrap items-center gap-4 text-sm text-blue-100"
                                data-oid="k7:oriu"
                            >
                                <span className="flex items-center gap-1" data-oid="5q7_.5_">
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="9m18kfs"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            data-oid="m9r3i1y"
                                        />

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            data-oid="x7bymqt"
                                        />
                                    </svg>
                                    {job.location}
                                </span>
                                <span className="flex items-center gap-1" data-oid="is:gsyx">
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="ae.:3w8"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                                            data-oid="cepfbim"
                                        />
                                    </svg>
                                    {job.salary}
                                </span>
                                <span className="flex items-center gap-1" data-oid="-mkny4a">
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="8-ad0f9"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                            data-oid="o__m-_d"
                                        />
                                    </svg>
                                    {job.experienceRequired}
                                </span>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/20 rounded-full transition-colors"
                            data-oid="cpu_pi."
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="nb70:6d"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                    data-oid="su12ro2"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-col h-[calc(90vh-200px)]" data-oid="06361q6">
                    {/* Tabs */}
                    <div className="border-b border-gray-200 px-6" data-oid="nqfj.7y">
                        <nav className="flex space-x-8" data-oid="cgen_w2">
                            {[
                                { id: 'overview', label: 'Job Overview' },
                                { id: 'requirements', label: 'Requirements' },
                                { id: 'company', label: 'About Company' },
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as any)}
                                    className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                                        activeTab === tab.id
                                            ? 'border-[hsl(196,80%,45%)] text-[hsl(196,80%,45%)]'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}
                                    data-oid="42ue8wa"
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Tab Content */}
                    <div className="flex-1 overflow-y-auto p-6 modal-scroll" data-oid="jshmyem">
                        {activeTab === 'overview' && (
                            <div className="space-y-6" data-oid="1m6wjyh">
                                {/* Job Stats */}
                                <div
                                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                                    data-oid="ayovij1"
                                >
                                    <div
                                        className="bg-blue-50 p-4 rounded-lg text-center"
                                        data-oid="f7p3jld"
                                    >
                                        <div
                                            className="text-2xl font-bold text-[hsl(196,80%,45%)]"
                                            data-oid="a1j89cd"
                                        >
                                            {job.applicantCount}
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid="rhil_ko">
                                            Applicants
                                        </div>
                                    </div>
                                    <div
                                        className="bg-green-50 p-4 rounded-lg text-center"
                                        data-oid="u2apkja"
                                    >
                                        <div
                                            className="text-2xl font-bold text-green-600"
                                            data-oid="26.g8:r"
                                        >
                                            {job.jobType}
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid="7e-_n-n">
                                            Job Type
                                        </div>
                                    </div>
                                    <div
                                        className="bg-purple-50 p-4 rounded-lg text-center"
                                        data-oid="e.ojp-4"
                                    >
                                        <div
                                            className="text-2xl font-bold text-purple-600"
                                            data-oid="nw7_9k6"
                                        >
                                            {job.employmentType}
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid="8bm3prb">
                                            Employment
                                        </div>
                                    </div>
                                    <div
                                        className="bg-orange-50 p-4 rounded-lg text-center"
                                        data-oid="9lolxcv"
                                    >
                                        <div
                                            className="text-2xl font-bold text-orange-600"
                                            data-oid=".j9n79s"
                                        >
                                            {formatDate(job.postedDate).split(' ')[0]}
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid="vk107pa">
                                            Posted
                                        </div>
                                    </div>
                                </div>

                                {/* Job Description */}
                                <div data-oid=".4omuhk">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="zq1qese"
                                    >
                                        Job Description
                                    </h3>
                                    <div className="prose prose-blue max-w-none" data-oid="0528j4s">
                                        <p
                                            className="text-gray-600 leading-relaxed mb-4"
                                            data-oid="jr0:sc9"
                                        >
                                            We are looking for a talented {job.title} to join our
                                            dynamic team at {job.company}. This is an excellent
                                            opportunity for someone with {job.experienceRequired} of
                                            experience to work on cutting-edge projects and grow
                                            their career in the {job.industry} industry.
                                        </p>
                                        <p
                                            className="text-gray-600 leading-relaxed mb-4"
                                            data-oid="ws_2p0w"
                                        >
                                            As a {job.title}, you will be responsible for developing
                                            and maintaining high-quality software solutions,
                                            collaborating with cross-functional teams, and
                                            contributing to the overall success of our products.
                                        </p>
                                        <p
                                            className="text-gray-600 leading-relaxed"
                                            data-oid="c-iaj03"
                                        >
                                            Join us in building innovative solutions that impact
                                            millions of users across India and beyond. We offer a
                                            collaborative work environment, competitive
                                            compensation, and excellent growth opportunities.
                                        </p>
                                    </div>
                                </div>

                                {/* Application Deadline & Quick Stats */}
                                <div className="bg-blue-50 rounded-lg p-4 mb-6" data-oid="qtwy8wi">
                                    <div
                                        className="grid grid-cols-1 md:grid-cols-3 gap-4"
                                        data-oid="5h:z5i."
                                    >
                                        <div className="text-center" data-oid="twwv6n2">
                                            <div
                                                className="text-2xl font-bold text-blue-600"
                                                data-oid="m9ajd37"
                                            >
                                                {Math.max(1, Math.floor(Math.random() * 15))} days
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="bf35819"
                                            >
                                                Application Deadline
                                            </div>
                                        </div>
                                        <div className="text-center" data-oid="6nka.x6">
                                            <div
                                                className="text-2xl font-bold text-green-600"
                                                data-oid="e3bpzan"
                                            >
                                                {job.isRemote ? 'Remote' : 'On-site'}
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="2n2l10m"
                                            >
                                                Work Mode
                                            </div>
                                        </div>
                                        <div className="text-center" data-oid="1nw1ilx">
                                            <div
                                                className="text-2xl font-bold text-purple-600"
                                                data-oid="_fzha.n"
                                            >
                                                {Math.floor(Math.random() * 5) + 1}-
                                                {Math.floor(Math.random() * 3) + 3} rounds
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="s-3_owm"
                                            >
                                                Interview Process
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Company Highlights */}
                                <div className="mb-6" data-oid="bng6w9j">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="._t02df"
                                    >
                                        Why Join {job.company}?
                                    </h3>
                                    <div
                                        className="grid grid-cols-1 md:grid-cols-2 gap-3"
                                        data-oid="m2eeevy"
                                    >
                                        <div
                                            className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                                            data-oid="1t4gse1"
                                        >
                                            <div
                                                className="w-2 h-2 bg-green-500 rounded-full"
                                                data-oid="e-k6-i."
                                            ></div>
                                            <span className="text-gray-700" data-oid=".-4g9pt">
                                                Fast-growing {job.companyType} company
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"
                                            data-oid="70dvhw3"
                                        >
                                            <div
                                                className="w-2 h-2 bg-blue-500 rounded-full"
                                                data-oid="m3vp.a5"
                                            ></div>
                                            <span className="text-gray-700" data-oid="huypn6x">
                                                Learning & development opportunities
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg"
                                            data-oid="3ezd_j0"
                                        >
                                            <div
                                                className="w-2 h-2 bg-purple-500 rounded-full"
                                                data-oid="ehltito"
                                            ></div>
                                            <span className="text-gray-700" data-oid="pf618j0">
                                                Collaborative work environment
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg"
                                            data-oid="msjyb8_"
                                        >
                                            <div
                                                className="w-2 h-2 bg-orange-500 rounded-full"
                                                data-oid="e96j4d1"
                                            ></div>
                                            <span className="text-gray-700" data-oid="thl-5-2">
                                                Competitive compensation package
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Benefits */}
                                {job.benefits && job.benefits.length > 0 && (
                                    <div data-oid="6wjrn86">
                                        <h3
                                            className="text-lg font-semibold text-gray-800 mb-3"
                                            data-oid="bcf9.16"
                                        >
                                            Benefits & Perks
                                        </h3>
                                        <div
                                            className="grid grid-cols-1 md:grid-cols-2 gap-3"
                                            data-oid="1:or10_"
                                        >
                                            {job.benefits.map((benefit, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                                                    data-oid="-k00d_3"
                                                >
                                                    <div
                                                        className="w-2 h-2 bg-green-500 rounded-full"
                                                        data-oid="81yg93c"
                                                    ></div>
                                                    <span
                                                        className="text-gray-700"
                                                        data-oid="278xwy5"
                                                    >
                                                        {benefit}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {activeTab === 'requirements' && (
                            <div className="space-y-6" data-oid="zryuy9_">
                                {/* Skills Required */}
                                <div data-oid="ewux42n">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="fsdzb:4"
                                    >
                                        Required Skills
                                    </h3>
                                    <div className="flex flex-wrap gap-2" data-oid="ti3bey_">
                                        {job.skills.map((skill, index) => (
                                            <span
                                                key={index}
                                                className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-2 rounded-full"
                                                data-oid="ty7cmih"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Experience & Qualifications */}
                                <div data-oid="qjn4kik">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="x5dq3jl"
                                    >
                                        Experience & Qualifications
                                    </h3>
                                    <div className="space-y-3" data-oid="_ps21dp">
                                        <div className="flex items-start gap-3" data-oid="o9m1pvp">
                                            <div
                                                className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                data-oid="uzv-k-n"
                                            ></div>
                                            <span className="text-gray-700" data-oid="mqxajs.">
                                                Experience: {job.experienceRequired}
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-3" data-oid="wrm.o8:">
                                            <div
                                                className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                data-oid="2qf_:wl"
                                            ></div>
                                            <span className="text-gray-700" data-oid="a.cuo3w">
                                                Bachelor's degree in Computer Science, Engineering,
                                                or related field
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-3" data-oid="a9bpcs:">
                                            <div
                                                className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                data-oid="zqk7384"
                                            ></div>
                                            <span className="text-gray-700" data-oid="um:z5gj">
                                                Strong problem-solving and analytical skills
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-3" data-oid="v:cx5_4">
                                            <div
                                                className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                data-oid="xaga_98"
                                            ></div>
                                            <span className="text-gray-700" data-oid="t7vey_g">
                                                Excellent communication and teamwork abilities
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-3" data-oid="g5:uyw-">
                                            <div
                                                className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                data-oid="-v.50.v"
                                            ></div>
                                            <span className="text-gray-700" data-oid="wcfu9wr">
                                                Passion for learning new technologies and best
                                                practices
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Responsibilities */}
                                <div data-oid="pclcjxn">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="09384oi"
                                    >
                                        Key Responsibilities
                                    </h3>
                                    <div className="space-y-3" data-oid="65rk2c:">
                                        <div className="flex items-start gap-3" data-oid="ij:g26-">
                                            <div
                                                className="w-2 h-2 bg-green-500 rounded-full mt-2"
                                                data-oid="043khq_"
                                            ></div>
                                            <span className="text-gray-700" data-oid="02j:.r-">
                                                Develop and maintain high-quality software
                                                applications
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-3" data-oid="6ffbn:b">
                                            <div
                                                className="w-2 h-2 bg-green-500 rounded-full mt-2"
                                                data-oid="kjxqe.k"
                                            ></div>
                                            <span className="text-gray-700" data-oid="on:54rz">
                                                Collaborate with cross-functional teams to define
                                                and implement features
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-3" data-oid="u-bx7rb">
                                            <div
                                                className="w-2 h-2 bg-green-500 rounded-full mt-2"
                                                data-oid="527vrbt"
                                            ></div>
                                            <span className="text-gray-700" data-oid="sbyqxqy">
                                                Write clean, maintainable, and efficient code
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-3" data-oid="fw4vd3n">
                                            <div
                                                className="w-2 h-2 bg-green-500 rounded-full mt-2"
                                                data-oid="u403wqs"
                                            ></div>
                                            <span className="text-gray-700" data-oid="x9307ak">
                                                Participate in code reviews and maintain coding
                                                standards
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-3" data-oid="rdzrs2v">
                                            <div
                                                className="w-2 h-2 bg-green-500 rounded-full mt-2"
                                                data-oid="d154nb3"
                                            ></div>
                                            <span className="text-gray-700" data-oid="kgrlyng">
                                                Troubleshoot and debug applications to optimize
                                                performance
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Interview Process */}
                                <div className="mt-6" data-oid="ksa96e.">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="q1a732n"
                                    >
                                        Interview Process
                                    </h3>
                                    <div className="space-y-4" data-oid="kwoi.tn">
                                        <div
                                            className="flex items-center gap-4 p-3 bg-blue-50 rounded-lg"
                                            data-oid="kq1cok3"
                                        >
                                            <div
                                                className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                                data-oid="5ef3alz"
                                            >
                                                1
                                            </div>
                                            <div data-oid="o3wpvf5">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid=".-sue3h"
                                                >
                                                    Application Review
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid="rk36d:_"
                                                >
                                                    Resume and profile screening
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center gap-4 p-3 bg-green-50 rounded-lg"
                                            data-oid="si43faq"
                                        >
                                            <div
                                                className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                                data-oid="hfhsblp"
                                            >
                                                2
                                            </div>
                                            <div data-oid="n5-e0uw">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid="kkwgewu"
                                                >
                                                    Technical Assessment
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid="ps8lxeg"
                                                >
                                                    Coding challenge or technical questions
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center gap-4 p-3 bg-purple-50 rounded-lg"
                                            data-oid="p:x2cd8"
                                        >
                                            <div
                                                className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                                data-oid="dfs1jl4"
                                            >
                                                3
                                            </div>
                                            <div data-oid="m4r3zyi">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid="q962:di"
                                                >
                                                    Technical Interview
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid="qkd7di9"
                                                >
                                                    Deep dive into technical skills and
                                                    problem-solving
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center gap-4 p-3 bg-orange-50 rounded-lg"
                                            data-oid="_zvyiha"
                                        >
                                            <div
                                                className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                                data-oid="p57gwnf"
                                            >
                                                4
                                            </div>
                                            <div data-oid="8y6mnd7">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid="-.4tt0g"
                                                >
                                                    HR Interview
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid="j2jafdb"
                                                >
                                                    Cultural fit and final discussion
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Preferred Skills */}
                                <div className="mt-6" data-oid="2wvo0v7">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="_r8r-v3"
                                    >
                                        Nice to Have Skills
                                    </h3>
                                    <div className="flex flex-wrap gap-2" data-oid="_i60wui">
                                        {['Git', 'Docker', 'AWS', 'Agile', 'Testing', 'CI/CD'].map(
                                            (skill, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full border border-gray-300"
                                                    data-oid="amma6wf"
                                                >
                                                    {skill}
                                                </span>
                                            ),
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'company' && (
                            <div className="space-y-6" data-oid="0clk3fz">
                                {/* Company Overview */}
                                <div data-oid="-vkx.pi">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="7bh-.5s"
                                    >
                                        About {job.company}
                                    </h3>
                                    <p
                                        className="text-gray-600 leading-relaxed mb-4"
                                        data-oid="i2hgmx2"
                                    >
                                        {job.company} is a leading {job.industry} company that has
                                        been revolutionizing the industry with innovative solutions
                                        and cutting-edge technology. We are committed to creating
                                        products that make a real difference in people's lives.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed" data-oid="9be82rz">
                                        Our team consists of passionate professionals who are
                                        dedicated to excellence and continuous learning. We foster a
                                        culture of innovation, collaboration, and growth where every
                                        team member can thrive and make an impact.
                                    </p>
                                </div>

                                {/* Company Stats */}
                                <div
                                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                                    data-oid="3z0f6p-"
                                >
                                    <div
                                        className="bg-blue-50 p-4 rounded-lg text-center"
                                        data-oid="w-n_18z"
                                    >
                                        <div
                                            className="text-2xl font-bold text-[hsl(196,80%,45%)]"
                                            data-oid="gct:tzc"
                                        >
                                            {job.companySize}
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid="y:6tzux">
                                            Employees
                                        </div>
                                    </div>
                                    <div
                                        className="bg-green-50 p-4 rounded-lg text-center"
                                        data-oid="a9yndxb"
                                    >
                                        <div
                                            className="text-2xl font-bold text-green-600"
                                            data-oid="6oc2d.m"
                                        >
                                            {job.industry}
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid="7z1.01g">
                                            Industry
                                        </div>
                                    </div>
                                    <div
                                        className="bg-purple-50 p-4 rounded-lg text-center"
                                        data-oid="6m4t0q6"
                                    >
                                        <div
                                            className="text-2xl font-bold text-purple-600"
                                            data-oid="0xu1jjz"
                                        >
                                            {job.companyType}
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid="u_1t45.">
                                            Company Type
                                        </div>
                                    </div>
                                </div>

                                {/* Company Culture */}
                                <div data-oid="h.hap9z">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="3h7.zh5"
                                    >
                                        Company Culture
                                    </h3>
                                    <div
                                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                        data-oid="htee:zt"
                                    >
                                        <div
                                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                                            data-oid="m1h39rf"
                                        >
                                            <div
                                                className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"
                                                data-oid="p4427e0"
                                            >
                                                <span
                                                    className="text-blue-600 text-sm"
                                                    data-oid="cori:1o"
                                                >
                                                    🚀
                                                </span>
                                            </div>
                                            <div data-oid="1261:ua">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid="ov0_11g"
                                                >
                                                    Innovation
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid="xgdylxo"
                                                >
                                                    Cutting-edge technology
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                                            data-oid="tou5oo_"
                                        >
                                            <div
                                                className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"
                                                data-oid="hok-mvq"
                                            >
                                                <span
                                                    className="text-green-600 text-sm"
                                                    data-oid="lt1xvho"
                                                >
                                                    🤝
                                                </span>
                                            </div>
                                            <div data-oid="0c5m.0x">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid="1:yda04"
                                                >
                                                    Collaboration
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid="bgqo1a:"
                                                >
                                                    Team-first approach
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                                            data-oid="od69a2-"
                                        >
                                            <div
                                                className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center"
                                                data-oid="4fc9y2m"
                                            >
                                                <span
                                                    className="text-purple-600 text-sm"
                                                    data-oid="eq707kk"
                                                >
                                                    📈
                                                </span>
                                            </div>
                                            <div data-oid="1o1.si7">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid="mqtmx4y"
                                                >
                                                    Growth
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid="h:fb5xq"
                                                >
                                                    Career development
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                                            data-oid="3ymy7.p"
                                        >
                                            <div
                                                className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center"
                                                data-oid="fwhireq"
                                            >
                                                <span
                                                    className="text-orange-600 text-sm"
                                                    data-oid="29.2r:d"
                                                >
                                                    ⚖️
                                                </span>
                                            </div>
                                            <div data-oid="tsex1zn">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid="2c0y74p"
                                                >
                                                    Work-Life Balance
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid="x15am37"
                                                >
                                                    Flexible working
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Office Locations */}
                                <div className="mt-6" data-oid="5uy001p">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="wja8qp:"
                                    >
                                        Office Locations
                                    </h3>
                                    <div
                                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                        data-oid="u4bquzl"
                                    >
                                        <div
                                            className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"
                                            data-oid="pdz-3uf"
                                        >
                                            <svg
                                                className="h-5 w-5 text-blue-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="i67lk.x"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                    data-oid="y..41wx"
                                                />

                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                    data-oid="gf0oz9b"
                                                />
                                            </svg>
                                            <div data-oid="d2m800e">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid="mm641xs"
                                                >
                                                    Headquarters
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid="mkbp.qa"
                                                >
                                                    {job.location}
                                                </div>
                                            </div>
                                        </div>
                                        {job.isRemote && (
                                            <div
                                                className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                                                data-oid="ri400jb"
                                            >
                                                <svg
                                                    className="h-5 w-5 text-green-600"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    data-oid="7kd__ts"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        data-oid="4qvs81:"
                                                    />
                                                </svg>
                                                <div data-oid="_26dm6d">
                                                    <div
                                                        className="font-medium text-gray-800"
                                                        data-oid="0m.2:71"
                                                    >
                                                        Remote Work
                                                    </div>
                                                    <div
                                                        className="text-sm text-gray-600"
                                                        data-oid="dm9e8uk"
                                                    >
                                                        Work from anywhere
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Recent News & Updates */}
                                <div className="mt-6" data-oid="hv6_sz5">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="71hiaxo"
                                    >
                                        Recent Company Updates
                                    </h3>
                                    <div className="space-y-3" data-oid="dxqc6-3">
                                        <div
                                            className="p-3 bg-gray-50 rounded-lg border-l-4 border-blue-500"
                                            data-oid="433.lpk"
                                        >
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="yxn_hmp"
                                            >
                                                New Product Launch
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="aqf44:h"
                                            >
                                                Recently launched innovative solutions in{' '}
                                                {job.industry}
                                            </div>
                                        </div>
                                        <div
                                            className="p-3 bg-gray-50 rounded-lg border-l-4 border-green-500"
                                            data-oid="yh3haxl"
                                        >
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="6-hc:v6"
                                            >
                                                Team Expansion
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid=":xwdps."
                                            >
                                                Growing team by 30% this year with focus on tech
                                                talent
                                            </div>
                                        </div>
                                        <div
                                            className="p-3 bg-gray-50 rounded-lg border-l-4 border-purple-500"
                                            data-oid="m0edz.y"
                                        >
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="8ms5n.9"
                                            >
                                                Awards & Recognition
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="g1xz4.5"
                                            >
                                                Recognized as one of the best places to work in tech
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer */}
                <div className="border-t border-gray-200 p-6 bg-gray-50" data-oid="05by6az">
                    <div
                        className="flex flex-col sm:flex-row items-center justify-between gap-4"
                        data-oid="1_4xphk"
                    >
                        <div className="text-sm text-gray-600" data-oid="g_it94c">
                            Posted on {formatDate(job.postedDate)} • {job.applicantCount} applicants
                        </div>
                        <div className="flex gap-3" data-oid="hg1zl19">
                            <button
                                onClick={onClose}
                                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                                data-oid="k6nrhh4"
                            >
                                Close
                            </button>
                            <button
                                onClick={onApply}
                                className="px-8 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg"
                                data-oid="pxi2:37"
                            >
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="8zewvak"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                        data-oid="b5q902f"
                                    />
                                </svg>
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Floating Apply Button - appears when scrolling */}
                <div className="fixed bottom-6 right-6 z-50" data-oid="9-71bnr">
                    <button
                        onClick={onApply}
                        className="px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-full font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-110 shadow-2xl flex items-center gap-2 animate-bounce"
                        data-oid="w.t5pjt"
                    >
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid=":8nuzas"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                data-oid="a9qpjwd"
                            />
                        </svg>
                        Quick Apply
                    </button>
                </div>
            </div>
        </div>
    );
}
