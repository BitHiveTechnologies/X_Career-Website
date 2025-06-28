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
            data-oid="xgnhizu"
        >
            <div
                className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden modal-enter"
                data-oid=":n7xxn6"
            >
                {/* Header */}
                <div
                    className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white p-6"
                    data-oid="v0p46ab"
                >
                    <div className="flex items-start justify-between" data-oid="65qf.f_">
                        <div className="flex-1" data-oid="fqw3vo3">
                            <div className="flex items-center gap-3 mb-2" data-oid="pwabas.">
                                <h1 className="text-2xl font-bold" data-oid="m.vb1v:">
                                    {job.title}
                                </h1>
                                {job.isUrgent && (
                                    <span
                                        className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse"
                                        data-oid=":h_zo-l"
                                    >
                                        🔥 URGENT
                                    </span>
                                )}
                                {job.isFeatured && (
                                    <span
                                        className="bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full"
                                        data-oid="vyrmri4"
                                    >
                                        ⭐ FEATURED
                                    </span>
                                )}
                            </div>
                            <p
                                className="text-xl font-semibold text-blue-100 mb-2"
                                data-oid="xbvbsqs"
                            >
                                {job.company}
                            </p>
                            <div
                                className="flex flex-wrap items-center gap-4 text-sm text-blue-100"
                                data-oid="ngnbbc7"
                            >
                                <span className="flex items-center gap-1" data-oid="6kk8ms4">
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="ob8ck8m"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            data-oid="_.37bbv"
                                        />

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            data-oid="mwvtrmp"
                                        />
                                    </svg>
                                    {job.location}
                                </span>
                                <span className="flex items-center gap-1" data-oid="mu70l7d">
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="c79m4sn"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                                            data-oid="ygvifbc"
                                        />
                                    </svg>
                                    {job.salary}
                                </span>
                                <span className="flex items-center gap-1" data-oid="r:2:8pa">
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="66xohng"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                            data-oid="k5hakcl"
                                        />
                                    </svg>
                                    {job.experienceRequired}
                                </span>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/20 rounded-full transition-colors"
                            data-oid="r6g_ck3"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid=".50dl_5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                    data-oid="v9kc3od"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-col h-[calc(90vh-200px)]" data-oid="_a.:bk4">
                    {/* Tabs */}
                    <div className="border-b border-gray-200 px-6" data-oid="gfb95j1">
                        <nav className="flex space-x-8" data-oid="orledrd">
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
                                    data-oid="sgwxt37"
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Tab Content */}
                    <div className="flex-1 overflow-y-auto p-6 modal-scroll" data-oid="694wpo1">
                        {activeTab === 'overview' && (
                            <div className="space-y-6" data-oid="3q4t.7z">
                                {/* Job Stats */}
                                <div
                                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                                    data-oid="qpzsg.a"
                                >
                                    <div
                                        className="bg-blue-50 p-4 rounded-lg text-center"
                                        data-oid="tn4rka4"
                                    >
                                        <div
                                            className="text-2xl font-bold text-[hsl(196,80%,45%)]"
                                            data-oid="omt35g-"
                                        >
                                            {job.applicantCount}
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid="p4uo9r_">
                                            Applicants
                                        </div>
                                    </div>
                                    <div
                                        className="bg-green-50 p-4 rounded-lg text-center"
                                        data-oid="s9s6_sa"
                                    >
                                        <div
                                            className="text-2xl font-bold text-green-600"
                                            data-oid="rxtn346"
                                        >
                                            {job.jobType}
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid=":tlojcb">
                                            Job Type
                                        </div>
                                    </div>
                                    <div
                                        className="bg-purple-50 p-4 rounded-lg text-center"
                                        data-oid="5wddy4l"
                                    >
                                        <div
                                            className="text-2xl font-bold text-purple-600"
                                            data-oid="qy70s92"
                                        >
                                            {job.employmentType}
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid=".ajuaya">
                                            Employment
                                        </div>
                                    </div>
                                    <div
                                        className="bg-orange-50 p-4 rounded-lg text-center"
                                        data-oid="tilgcdw"
                                    >
                                        <div
                                            className="text-2xl font-bold text-orange-600"
                                            data-oid=":wdh_2b"
                                        >
                                            {formatDate(job.postedDate).split(' ')[0]}
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid="y272gzh">
                                            Posted
                                        </div>
                                    </div>
                                </div>

                                {/* Job Description */}
                                <div data-oid="w4be_-_">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="vzop3mo"
                                    >
                                        Job Description
                                    </h3>
                                    <div className="prose prose-blue max-w-none" data-oid="3yttan2">
                                        <p
                                            className="text-gray-600 leading-relaxed mb-4"
                                            data-oid="757ycc1"
                                        >
                                            We are looking for a talented {job.title} to join our
                                            dynamic team at {job.company}. This is an excellent
                                            opportunity for someone with {job.experienceRequired} of
                                            experience to work on cutting-edge projects and grow
                                            their career in the {job.industry} industry.
                                        </p>
                                        <p
                                            className="text-gray-600 leading-relaxed mb-4"
                                            data-oid="1hjegfc"
                                        >
                                            As a {job.title}, you will be responsible for developing
                                            and maintaining high-quality software solutions,
                                            collaborating with cross-functional teams, and
                                            contributing to the overall success of our products.
                                        </p>
                                        <p
                                            className="text-gray-600 leading-relaxed"
                                            data-oid="uvqvteb"
                                        >
                                            Join us in building innovative solutions that impact
                                            millions of users across India and beyond. We offer a
                                            collaborative work environment, competitive
                                            compensation, and excellent growth opportunities.
                                        </p>
                                    </div>
                                </div>

                                {/* Application Deadline & Quick Stats */}
                                <div className="bg-blue-50 rounded-lg p-4 mb-6" data-oid="9wfuiwv">
                                    <div
                                        className="grid grid-cols-1 md:grid-cols-3 gap-4"
                                        data-oid="yrb4a9k"
                                    >
                                        <div className="text-center" data-oid="shwjj8_">
                                            <div
                                                className="text-2xl font-bold text-blue-600"
                                                data-oid="o44twte"
                                            >
                                                {Math.max(1, Math.floor(Math.random() * 15))} days
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="rax8ktd"
                                            >
                                                Application Deadline
                                            </div>
                                        </div>
                                        <div className="text-center" data-oid="2tozi7l">
                                            <div
                                                className="text-2xl font-bold text-green-600"
                                                data-oid="zx-se3e"
                                            >
                                                {job.isRemote ? 'Remote' : 'On-site'}
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="52bnuy3"
                                            >
                                                Work Mode
                                            </div>
                                        </div>
                                        <div className="text-center" data-oid="w0ym43w">
                                            <div
                                                className="text-2xl font-bold text-purple-600"
                                                data-oid="12ejcnk"
                                            >
                                                {Math.floor(Math.random() * 5) + 1}-
                                                {Math.floor(Math.random() * 3) + 3} rounds
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="zgmycw1"
                                            >
                                                Interview Process
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Company Highlights */}
                                <div className="mb-6" data-oid=":k96i0_">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="d9m-qm3"
                                    >
                                        Why Join {job.company}?
                                    </h3>
                                    <div
                                        className="grid grid-cols-1 md:grid-cols-2 gap-3"
                                        data-oid="d26a0wq"
                                    >
                                        <div
                                            className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                                            data-oid="66z:s:6"
                                        >
                                            <div
                                                className="w-2 h-2 bg-green-500 rounded-full"
                                                data-oid="tps92g-"
                                            ></div>
                                            <span className="text-gray-700" data-oid="zxwqhe9">
                                                Fast-growing {job.companyType} company
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"
                                            data-oid="gxmrj0e"
                                        >
                                            <div
                                                className="w-2 h-2 bg-blue-500 rounded-full"
                                                data-oid="aaf:9-5"
                                            ></div>
                                            <span className="text-gray-700" data-oid="l-6fj2b">
                                                Learning & development opportunities
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg"
                                            data-oid="qc_ig6p"
                                        >
                                            <div
                                                className="w-2 h-2 bg-purple-500 rounded-full"
                                                data-oid="noc3.qm"
                                            ></div>
                                            <span className="text-gray-700" data-oid="m-g:jyw">
                                                Collaborative work environment
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg"
                                            data-oid="1qx3vm."
                                        >
                                            <div
                                                className="w-2 h-2 bg-orange-500 rounded-full"
                                                data-oid="al9irz4"
                                            ></div>
                                            <span className="text-gray-700" data-oid="e04kx4c">
                                                Competitive compensation package
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Benefits */}
                                {job.benefits && job.benefits.length > 0 && (
                                    <div data-oid="5uuqn2w">
                                        <h3
                                            className="text-lg font-semibold text-gray-800 mb-3"
                                            data-oid="nmsn6.w"
                                        >
                                            Benefits & Perks
                                        </h3>
                                        <div
                                            className="grid grid-cols-1 md:grid-cols-2 gap-3"
                                            data-oid="lrr3gv7"
                                        >
                                            {job.benefits.map((benefit, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                                                    data-oid="q2..y7g"
                                                >
                                                    <div
                                                        className="w-2 h-2 bg-green-500 rounded-full"
                                                        data-oid="yo5_ujm"
                                                    ></div>
                                                    <span
                                                        className="text-gray-700"
                                                        data-oid="t3u195k"
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
                            <div className="space-y-6" data-oid="x5twdwy">
                                {/* Skills Required */}
                                <div data-oid="dt.jt06">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="puzpac."
                                    >
                                        Required Skills
                                    </h3>
                                    <div className="flex flex-wrap gap-2" data-oid="vf_b-2e">
                                        {job.skills.map((skill, index) => (
                                            <span
                                                key={index}
                                                className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-2 rounded-full"
                                                data-oid="d1f175z"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Experience & Qualifications */}
                                <div data-oid="slw_m0w">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="jnv4xfl"
                                    >
                                        Experience & Qualifications
                                    </h3>
                                    <div className="space-y-3" data-oid="0d_b75:">
                                        <div className="flex items-start gap-3" data-oid="nre3ksq">
                                            <div
                                                className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                data-oid="jpst1he"
                                            ></div>
                                            <span className="text-gray-700" data-oid="t7pt7gj">
                                                Experience: {job.experienceRequired}
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-3" data-oid="kq4l7:o">
                                            <div
                                                className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                data-oid="-to8u30"
                                            ></div>
                                            <span className="text-gray-700" data-oid="x2kpmk.">
                                                Bachelor's degree in Computer Science, Engineering,
                                                or related field
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-3" data-oid="e06lu94">
                                            <div
                                                className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                data-oid="8mo0z5a"
                                            ></div>
                                            <span className="text-gray-700" data-oid="pxt6sxw">
                                                Strong problem-solving and analytical skills
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-3" data-oid="m7_j.ez">
                                            <div
                                                className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                data-oid="_dhmt4u"
                                            ></div>
                                            <span className="text-gray-700" data-oid="yq1d4yx">
                                                Excellent communication and teamwork abilities
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-3" data-oid="n0cfnj_">
                                            <div
                                                className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                data-oid="2n:hu98"
                                            ></div>
                                            <span className="text-gray-700" data-oid="_yhajur">
                                                Passion for learning new technologies and best
                                                practices
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Responsibilities */}
                                <div data-oid="q_pg9:v">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="j5lru7u"
                                    >
                                        Key Responsibilities
                                    </h3>
                                    <div className="space-y-3" data-oid="a2v8gku">
                                        <div className="flex items-start gap-3" data-oid="l:jwotw">
                                            <div
                                                className="w-2 h-2 bg-green-500 rounded-full mt-2"
                                                data-oid="o5d_sbo"
                                            ></div>
                                            <span className="text-gray-700" data-oid="7-q51k7">
                                                Develop and maintain high-quality software
                                                applications
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-3" data-oid="_dr90ak">
                                            <div
                                                className="w-2 h-2 bg-green-500 rounded-full mt-2"
                                                data-oid="4_f5bih"
                                            ></div>
                                            <span className="text-gray-700" data-oid="cby2zrk">
                                                Collaborate with cross-functional teams to define
                                                and implement features
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-3" data-oid="pr:xsqt">
                                            <div
                                                className="w-2 h-2 bg-green-500 rounded-full mt-2"
                                                data-oid=":a2uvir"
                                            ></div>
                                            <span className="text-gray-700" data-oid="vaoufvx">
                                                Write clean, maintainable, and efficient code
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-3" data-oid="s:c4z4r">
                                            <div
                                                className="w-2 h-2 bg-green-500 rounded-full mt-2"
                                                data-oid="23kp7rl"
                                            ></div>
                                            <span className="text-gray-700" data-oid="rp8oru2">
                                                Participate in code reviews and maintain coding
                                                standards
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-3" data-oid="7zsjgbo">
                                            <div
                                                className="w-2 h-2 bg-green-500 rounded-full mt-2"
                                                data-oid="oycjzs6"
                                            ></div>
                                            <span className="text-gray-700" data-oid="b8nsax3">
                                                Troubleshoot and debug applications to optimize
                                                performance
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Interview Process */}
                                <div className="mt-6" data-oid="y6y.8qb">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="rgme0:c"
                                    >
                                        Interview Process
                                    </h3>
                                    <div className="space-y-4" data-oid="hehc7io">
                                        <div
                                            className="flex items-center gap-4 p-3 bg-blue-50 rounded-lg"
                                            data-oid="g6:vjh6"
                                        >
                                            <div
                                                className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                                data-oid="rx9tcg5"
                                            >
                                                1
                                            </div>
                                            <div data-oid="i-ie4ny">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid="pmy5r-c"
                                                >
                                                    Application Review
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid="msjh:h7"
                                                >
                                                    Resume and profile screening
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center gap-4 p-3 bg-green-50 rounded-lg"
                                            data-oid="j0a9op2"
                                        >
                                            <div
                                                className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                                data-oid="ls.z0ov"
                                            >
                                                2
                                            </div>
                                            <div data-oid="50f59xg">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid="2:hh8bw"
                                                >
                                                    Technical Assessment
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid="y.l3f_e"
                                                >
                                                    Coding challenge or technical questions
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center gap-4 p-3 bg-purple-50 rounded-lg"
                                            data-oid="qhlox4z"
                                        >
                                            <div
                                                className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                                data-oid="7zdblpk"
                                            >
                                                3
                                            </div>
                                            <div data-oid="c0bdqex">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid="pygrc3g"
                                                >
                                                    Technical Interview
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid="1tfcqr9"
                                                >
                                                    Deep dive into technical skills and
                                                    problem-solving
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center gap-4 p-3 bg-orange-50 rounded-lg"
                                            data-oid="ck-x3o2"
                                        >
                                            <div
                                                className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                                data-oid="c59v0iw"
                                            >
                                                4
                                            </div>
                                            <div data-oid="5468-ip">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid="-6va9hb"
                                                >
                                                    HR Interview
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid=".y4w:jr"
                                                >
                                                    Cultural fit and final discussion
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Preferred Skills */}
                                <div className="mt-6" data-oid="-09-yg.">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="_n3d0:9"
                                    >
                                        Nice to Have Skills
                                    </h3>
                                    <div className="flex flex-wrap gap-2" data-oid="u040tkp">
                                        {['Git', 'Docker', 'AWS', 'Agile', 'Testing', 'CI/CD'].map(
                                            (skill, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full border border-gray-300"
                                                    data-oid="_-hlg9:"
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
                            <div className="space-y-6" data-oid="rwxt-uw">
                                {/* Company Overview */}
                                <div data-oid="kqzrq9e">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid=":7xi8u1"
                                    >
                                        About {job.company}
                                    </h3>
                                    <p
                                        className="text-gray-600 leading-relaxed mb-4"
                                        data-oid=".8lytjd"
                                    >
                                        {job.company} is a leading {job.industry} company that has
                                        been revolutionizing the industry with innovative solutions
                                        and cutting-edge technology. We are committed to creating
                                        products that make a real difference in people's lives.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed" data-oid="f._117j">
                                        Our team consists of passionate professionals who are
                                        dedicated to excellence and continuous learning. We foster a
                                        culture of innovation, collaboration, and growth where every
                                        team member can thrive and make an impact.
                                    </p>
                                </div>

                                {/* Company Stats */}
                                <div
                                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                                    data-oid="zec.v0_"
                                >
                                    <div
                                        className="bg-blue-50 p-4 rounded-lg text-center"
                                        data-oid="z4d5rax"
                                    >
                                        <div
                                            className="text-2xl font-bold text-[hsl(196,80%,45%)]"
                                            data-oid="gdie876"
                                        >
                                            {job.companySize}
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid="ks7_z3h">
                                            Employees
                                        </div>
                                    </div>
                                    <div
                                        className="bg-green-50 p-4 rounded-lg text-center"
                                        data-oid="k646-::"
                                    >
                                        <div
                                            className="text-2xl font-bold text-green-600"
                                            data-oid="ctrdz49"
                                        >
                                            {job.industry}
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid="splzc1c">
                                            Industry
                                        </div>
                                    </div>
                                    <div
                                        className="bg-purple-50 p-4 rounded-lg text-center"
                                        data-oid="xhnlh92"
                                    >
                                        <div
                                            className="text-2xl font-bold text-purple-600"
                                            data-oid="wf4_8es"
                                        >
                                            {job.companyType}
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid="9zy_vtr">
                                            Company Type
                                        </div>
                                    </div>
                                </div>

                                {/* Company Culture */}
                                <div data-oid="r_4fzf:">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid=".-ej3ha"
                                    >
                                        Company Culture
                                    </h3>
                                    <div
                                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                        data-oid="y-y8ydv"
                                    >
                                        <div
                                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                                            data-oid="mvz9j4b"
                                        >
                                            <div
                                                className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"
                                                data-oid="o6m5did"
                                            >
                                                <span
                                                    className="text-blue-600 text-sm"
                                                    data-oid="0e-w0z5"
                                                >
                                                    🚀
                                                </span>
                                            </div>
                                            <div data-oid="1-0cu78">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid="r_2j7e9"
                                                >
                                                    Innovation
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid="k4hrf1p"
                                                >
                                                    Cutting-edge technology
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                                            data-oid="met4yz5"
                                        >
                                            <div
                                                className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"
                                                data-oid="0fsive5"
                                            >
                                                <span
                                                    className="text-green-600 text-sm"
                                                    data-oid="q9w:lax"
                                                >
                                                    🤝
                                                </span>
                                            </div>
                                            <div data-oid="v.ltxpy">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid="i0l.yaj"
                                                >
                                                    Collaboration
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid="lohxfyb"
                                                >
                                                    Team-first approach
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                                            data-oid="1hk65_u"
                                        >
                                            <div
                                                className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center"
                                                data-oid="9u8vfqs"
                                            >
                                                <span
                                                    className="text-purple-600 text-sm"
                                                    data-oid="e.6ull9"
                                                >
                                                    📈
                                                </span>
                                            </div>
                                            <div data-oid="zar37fz">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid="i9h-xoy"
                                                >
                                                    Growth
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid="mbqlwxh"
                                                >
                                                    Career development
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                                            data-oid=":lq26zw"
                                        >
                                            <div
                                                className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center"
                                                data-oid="dm35.zy"
                                            >
                                                <span
                                                    className="text-orange-600 text-sm"
                                                    data-oid="ve1ocw8"
                                                >
                                                    ⚖️
                                                </span>
                                            </div>
                                            <div data-oid="6f.o61b">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid="g8ga7yg"
                                                >
                                                    Work-Life Balance
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid="9.yvf6s"
                                                >
                                                    Flexible working
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Office Locations */}
                                <div className="mt-6" data-oid="0d.zzsk">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="n6c:p0s"
                                    >
                                        Office Locations
                                    </h3>
                                    <div
                                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                        data-oid="d4035gi"
                                    >
                                        <div
                                            className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"
                                            data-oid="0xv5gqy"
                                        >
                                            <svg
                                                className="h-5 w-5 text-blue-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="t:hl0_o"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                    data-oid="zu3oh2f"
                                                />

                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                    data-oid="-5r_od6"
                                                />
                                            </svg>
                                            <div data-oid="x2e41fi">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid="qqmx_07"
                                                >
                                                    Headquarters
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid="c4f-9-5"
                                                >
                                                    {job.location}
                                                </div>
                                            </div>
                                        </div>
                                        {job.isRemote && (
                                            <div
                                                className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                                                data-oid="2ykd8nl"
                                            >
                                                <svg
                                                    className="h-5 w-5 text-green-600"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    data-oid="vo4nd62"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        data-oid="4ydn0s5"
                                                    />
                                                </svg>
                                                <div data-oid="tk7.er:">
                                                    <div
                                                        className="font-medium text-gray-800"
                                                        data-oid="_ldaini"
                                                    >
                                                        Remote Work
                                                    </div>
                                                    <div
                                                        className="text-sm text-gray-600"
                                                        data-oid="kk_1zw1"
                                                    >
                                                        Work from anywhere
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Recent News & Updates */}
                                <div className="mt-6" data-oid="imee_:6">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="sfwb6wa"
                                    >
                                        Recent Company Updates
                                    </h3>
                                    <div className="space-y-3" data-oid="t_etx6q">
                                        <div
                                            className="p-3 bg-gray-50 rounded-lg border-l-4 border-blue-500"
                                            data-oid="-4l8-x0"
                                        >
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="zfww5.h"
                                            >
                                                New Product Launch
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="h_jih-4"
                                            >
                                                Recently launched innovative solutions in{' '}
                                                {job.industry}
                                            </div>
                                        </div>
                                        <div
                                            className="p-3 bg-gray-50 rounded-lg border-l-4 border-green-500"
                                            data-oid="i.j5ils"
                                        >
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="-hhygbo"
                                            >
                                                Team Expansion
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="0_zr.ip"
                                            >
                                                Growing team by 30% this year with focus on tech
                                                talent
                                            </div>
                                        </div>
                                        <div
                                            className="p-3 bg-gray-50 rounded-lg border-l-4 border-purple-500"
                                            data-oid="f21sd0r"
                                        >
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="2fc3pol"
                                            >
                                                Awards & Recognition
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="vac56e7"
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
                <div className="border-t border-gray-200 p-6 bg-gray-50" data-oid="22:xg66">
                    <div
                        className="flex flex-col sm:flex-row items-center justify-between gap-4"
                        data-oid="qo1u5_e"
                    >
                        <div className="text-sm text-gray-600" data-oid="w2.exx5">
                            Posted on {formatDate(job.postedDate)} • {job.applicantCount} applicants
                        </div>
                        <div className="flex gap-3" data-oid="rvahk4r">
                            <button
                                onClick={onClose}
                                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                                data-oid="sopt9bl"
                            >
                                Close
                            </button>
                            <button
                                onClick={onApply}
                                className="px-8 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg"
                                data-oid=":ew8fh7"
                            >
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="m613fku"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                        data-oid="qi064f_"
                                    />
                                </svg>
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Floating Apply Button - appears when scrolling */}
                <div className="fixed bottom-6 right-6 z-50" data-oid="ajohco3">
                    <button
                        onClick={onApply}
                        className="px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-full font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-110 shadow-2xl flex items-center gap-2 animate-bounce"
                        data-oid="sisuvl9"
                    >
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="36.svhj"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                data-oid="4iul9mk"
                            />
                        </svg>
                        Quick Apply
                    </button>
                </div>
            </div>
        </div>
    );
}
