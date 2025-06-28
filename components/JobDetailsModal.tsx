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
            data-oid="8doaxpw"
        >
            <div
                className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden modal-enter"
                data-oid="s9gh718"
            >
                {/* Header */}
                <div
                    className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white p-6"
                    data-oid="6y.38q-"
                >
                    <div className="flex items-start justify-between" data-oid="5kp_-.k">
                        <div className="flex-1" data-oid="kl6.p.7">
                            <div className="flex items-center gap-3 mb-2" data-oid="mla-g-_">
                                <h1 className="text-2xl font-bold" data-oid="iic73t9">
                                    {job.title}
                                </h1>
                                {job.isUrgent && (
                                    <span
                                        className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse"
                                        data-oid="wo5cipr"
                                    >
                                        🔥 URGENT
                                    </span>
                                )}
                                {job.isFeatured && (
                                    <span
                                        className="bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full"
                                        data-oid="0ez6b3h"
                                    >
                                        ⭐ FEATURED
                                    </span>
                                )}
                            </div>
                            <p
                                className="text-xl font-semibold text-blue-100 mb-2"
                                data-oid="ly0o.m5"
                            >
                                {job.company}
                            </p>
                            <div
                                className="flex flex-wrap items-center gap-4 text-sm text-blue-100"
                                data-oid=":hpbbdr"
                            >
                                <span className="flex items-center gap-1" data-oid="r31omnu">
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="6fe64l8"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            data-oid="gd3om6n"
                                        />

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            data-oid="2b2i1hb"
                                        />
                                    </svg>
                                    {job.location}
                                </span>
                                <span className="flex items-center gap-1" data-oid="4e8z2ff">
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid=".zi07h3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                                            data-oid="k-trrq1"
                                        />
                                    </svg>
                                    {job.salary}
                                </span>
                                <span className="flex items-center gap-1" data-oid="f7-:rcp">
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="w02m-mt"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                            data-oid="ol99h5m"
                                        />
                                    </svg>
                                    {job.experienceRequired}
                                </span>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/20 rounded-full transition-colors"
                            data-oid="pz-jzr9"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="5os_ur4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                    data-oid="qnp0g4g"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-col h-[calc(90vh-200px)]" data-oid="zj7kayw">
                    {/* Tabs */}
                    <div className="border-b border-gray-200 px-6" data-oid="bhv8nol">
                        <nav className="flex space-x-8" data-oid="9p1.48:">
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
                                    data-oid="g0ldf7y"
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Tab Content */}
                    <div className="flex-1 overflow-y-auto p-6 modal-scroll" data-oid="cfm3-jz">
                        {activeTab === 'overview' && (
                            <div className="space-y-6" data-oid="subgm:a">
                                {/* Job Stats */}
                                <div
                                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                                    data-oid="_iizous"
                                >
                                    <div
                                        className="bg-blue-50 p-4 rounded-lg text-center"
                                        data-oid="ow_h347"
                                    >
                                        <div
                                            className="text-2xl font-bold text-[hsl(196,80%,45%)]"
                                            data-oid="iib_i8q"
                                        >
                                            {job.applicantCount}
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid="zk3mir5">
                                            Applicants
                                        </div>
                                    </div>
                                    <div
                                        className="bg-green-50 p-4 rounded-lg text-center"
                                        data-oid="x0zk.dg"
                                    >
                                        <div
                                            className="text-2xl font-bold text-green-600"
                                            data-oid="wugatz."
                                        >
                                            {job.jobType}
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid="5r-ikih">
                                            Job Type
                                        </div>
                                    </div>
                                    <div
                                        className="bg-purple-50 p-4 rounded-lg text-center"
                                        data-oid="7kdqsss"
                                    >
                                        <div
                                            className="text-2xl font-bold text-purple-600"
                                            data-oid="cw-99sd"
                                        >
                                            {job.employmentType}
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid="8zt_:0:">
                                            Employment
                                        </div>
                                    </div>
                                    <div
                                        className="bg-orange-50 p-4 rounded-lg text-center"
                                        data-oid="jkonerv"
                                    >
                                        <div
                                            className="text-2xl font-bold text-orange-600"
                                            data-oid="uw:575-"
                                        >
                                            {formatDate(job.postedDate).split(' ')[0]}
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid="iei9_sb">
                                            Posted
                                        </div>
                                    </div>
                                </div>

                                {/* Job Description */}
                                <div data-oid="tag8s80">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="ex_c2m2"
                                    >
                                        Job Description
                                    </h3>
                                    <div className="prose prose-blue max-w-none" data-oid="v92e-jb">
                                        <p
                                            className="text-gray-600 leading-relaxed mb-4"
                                            data-oid="ndyfi.:"
                                        >
                                            We are looking for a talented {job.title} to join our
                                            dynamic team at {job.company}. This is an excellent
                                            opportunity for someone with {job.experienceRequired} of
                                            experience to work on cutting-edge projects and grow
                                            their career in the {job.industry} industry.
                                        </p>
                                        <p
                                            className="text-gray-600 leading-relaxed mb-4"
                                            data-oid="xvl6m9f"
                                        >
                                            As a {job.title}, you will be responsible for developing
                                            and maintaining high-quality software solutions,
                                            collaborating with cross-functional teams, and
                                            contributing to the overall success of our products.
                                        </p>
                                        <p
                                            className="text-gray-600 leading-relaxed"
                                            data-oid="sjd1w_k"
                                        >
                                            Join us in building innovative solutions that impact
                                            millions of users across India and beyond. We offer a
                                            collaborative work environment, competitive
                                            compensation, and excellent growth opportunities.
                                        </p>
                                    </div>
                                </div>

                                {/* Application Deadline & Quick Stats */}
                                <div className="bg-blue-50 rounded-lg p-4 mb-6" data-oid=":u4sp79">
                                    <div
                                        className="grid grid-cols-1 md:grid-cols-3 gap-4"
                                        data-oid="hq:68de"
                                    >
                                        <div className="text-center" data-oid="_bcz88g">
                                            <div
                                                className="text-2xl font-bold text-blue-600"
                                                data-oid="b3glj3o"
                                            >
                                                {Math.max(1, Math.floor(Math.random() * 15))} days
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="-cokyw7"
                                            >
                                                Application Deadline
                                            </div>
                                        </div>
                                        <div className="text-center" data-oid="20rkn9h">
                                            <div
                                                className="text-2xl font-bold text-green-600"
                                                data-oid="bvxk:bp"
                                            >
                                                {job.isRemote ? 'Remote' : 'On-site'}
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid=":2_5j3s"
                                            >
                                                Work Mode
                                            </div>
                                        </div>
                                        <div className="text-center" data-oid="dlv0b5r">
                                            <div
                                                className="text-2xl font-bold text-purple-600"
                                                data-oid="pol3_j8"
                                            >
                                                {Math.floor(Math.random() * 5) + 1}-
                                                {Math.floor(Math.random() * 3) + 3} rounds
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="2hmo:t9"
                                            >
                                                Interview Process
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Company Highlights */}
                                <div className="mb-6" data-oid="5oyh19c">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="vprns.n"
                                    >
                                        Why Join {job.company}?
                                    </h3>
                                    <div
                                        className="grid grid-cols-1 md:grid-cols-2 gap-3"
                                        data-oid="usxf1g8"
                                    >
                                        <div
                                            className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                                            data-oid="biig:y-"
                                        >
                                            <div
                                                className="w-2 h-2 bg-green-500 rounded-full"
                                                data-oid="rq9tp:l"
                                            ></div>
                                            <span className="text-gray-700" data-oid="cn08ir:">
                                                Fast-growing {job.companyType} company
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"
                                            data-oid="2dm53du"
                                        >
                                            <div
                                                className="w-2 h-2 bg-blue-500 rounded-full"
                                                data-oid="ut-wmx7"
                                            ></div>
                                            <span className="text-gray-700" data-oid="u874dii">
                                                Learning & development opportunities
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg"
                                            data-oid="v:ywkt9"
                                        >
                                            <div
                                                className="w-2 h-2 bg-purple-500 rounded-full"
                                                data-oid="t5xid32"
                                            ></div>
                                            <span className="text-gray-700" data-oid="o79j7wi">
                                                Collaborative work environment
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg"
                                            data-oid="fmxnk1l"
                                        >
                                            <div
                                                className="w-2 h-2 bg-orange-500 rounded-full"
                                                data-oid="ngc_swn"
                                            ></div>
                                            <span className="text-gray-700" data-oid="vhplb.p">
                                                Competitive compensation package
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Benefits */}
                                {job.benefits && job.benefits.length > 0 && (
                                    <div data-oid="44zy2ml">
                                        <h3
                                            className="text-lg font-semibold text-gray-800 mb-3"
                                            data-oid="gd_o25-"
                                        >
                                            Benefits & Perks
                                        </h3>
                                        <div
                                            className="grid grid-cols-1 md:grid-cols-2 gap-3"
                                            data-oid="7iqs_mb"
                                        >
                                            {job.benefits.map((benefit, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                                                    data-oid="tuoy.08"
                                                >
                                                    <div
                                                        className="w-2 h-2 bg-green-500 rounded-full"
                                                        data-oid="hxeohyk"
                                                    ></div>
                                                    <span
                                                        className="text-gray-700"
                                                        data-oid="wz:gjoo"
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
                            <div className="space-y-6" data-oid="faotctj">
                                {/* Skills Required */}
                                <div data-oid="4z-1fzj">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="e7k8pzu"
                                    >
                                        Required Skills
                                    </h3>
                                    <div className="flex flex-wrap gap-2" data-oid="kndpzkw">
                                        {job.skills.map((skill, index) => (
                                            <span
                                                key={index}
                                                className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-2 rounded-full"
                                                data-oid="rceu79j"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Experience & Qualifications */}
                                <div data-oid="nyodtfb">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="c4185ls"
                                    >
                                        Experience & Qualifications
                                    </h3>
                                    <div className="space-y-3" data-oid=".:ef-q5">
                                        <div className="flex items-start gap-3" data-oid="54_swii">
                                            <div
                                                className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                data-oid="8uptp98"
                                            ></div>
                                            <span className="text-gray-700" data-oid="e:q1g_k">
                                                Experience: {job.experienceRequired}
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-3" data-oid="ufjgsr_">
                                            <div
                                                className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                data-oid="l9:99wh"
                                            ></div>
                                            <span className="text-gray-700" data-oid="y7xrmso">
                                                Bachelor's degree in Computer Science, Engineering,
                                                or related field
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-3" data-oid="-mjmt-.">
                                            <div
                                                className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                data-oid="whlmxj7"
                                            ></div>
                                            <span className="text-gray-700" data-oid="ztqix2v">
                                                Strong problem-solving and analytical skills
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-3" data-oid="xf47ub1">
                                            <div
                                                className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                data-oid="0w7lzp0"
                                            ></div>
                                            <span className="text-gray-700" data-oid="-j..-.m">
                                                Excellent communication and teamwork abilities
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-3" data-oid="_l5nthm">
                                            <div
                                                className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                data-oid="ml8kvqe"
                                            ></div>
                                            <span className="text-gray-700" data-oid="mt5om-e">
                                                Passion for learning new technologies and best
                                                practices
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Responsibilities */}
                                <div data-oid="8m-g8qu">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="b5.k567"
                                    >
                                        Key Responsibilities
                                    </h3>
                                    <div className="space-y-3" data-oid="mqll4hl">
                                        <div className="flex items-start gap-3" data-oid="qpr97uf">
                                            <div
                                                className="w-2 h-2 bg-green-500 rounded-full mt-2"
                                                data-oid=".47ndt_"
                                            ></div>
                                            <span className="text-gray-700" data-oid="kbybh78">
                                                Develop and maintain high-quality software
                                                applications
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-3" data-oid="47t-sn2">
                                            <div
                                                className="w-2 h-2 bg-green-500 rounded-full mt-2"
                                                data-oid="xfu3.ku"
                                            ></div>
                                            <span className="text-gray-700" data-oid="uorunzb">
                                                Collaborate with cross-functional teams to define
                                                and implement features
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-3" data-oid="vso13e5">
                                            <div
                                                className="w-2 h-2 bg-green-500 rounded-full mt-2"
                                                data-oid="dnyw0uj"
                                            ></div>
                                            <span className="text-gray-700" data-oid="nthaw6b">
                                                Write clean, maintainable, and efficient code
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-3" data-oid="j-tazop">
                                            <div
                                                className="w-2 h-2 bg-green-500 rounded-full mt-2"
                                                data-oid="3zdwxbg"
                                            ></div>
                                            <span className="text-gray-700" data-oid="85:971l">
                                                Participate in code reviews and maintain coding
                                                standards
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-3" data-oid="_.-6xdw">
                                            <div
                                                className="w-2 h-2 bg-green-500 rounded-full mt-2"
                                                data-oid="adrb_vc"
                                            ></div>
                                            <span className="text-gray-700" data-oid="3q.fqih">
                                                Troubleshoot and debug applications to optimize
                                                performance
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Interview Process */}
                                <div className="mt-6" data-oid="r4.7t6-">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="zy6ri2g"
                                    >
                                        Interview Process
                                    </h3>
                                    <div className="space-y-4" data-oid="-h2y5ph">
                                        <div
                                            className="flex items-center gap-4 p-3 bg-blue-50 rounded-lg"
                                            data-oid="wrvv89d"
                                        >
                                            <div
                                                className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                                data-oid="iw1xhu0"
                                            >
                                                1
                                            </div>
                                            <div data-oid="s3:5-qs">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid="a.9f_ih"
                                                >
                                                    Application Review
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid=".:cax-3"
                                                >
                                                    Resume and profile screening
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center gap-4 p-3 bg-green-50 rounded-lg"
                                            data-oid="8:uhm_0"
                                        >
                                            <div
                                                className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                                data-oid="j9v6w96"
                                            >
                                                2
                                            </div>
                                            <div data-oid="on28577">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid="ooyg-9t"
                                                >
                                                    Technical Assessment
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid="ynqowqi"
                                                >
                                                    Coding challenge or technical questions
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center gap-4 p-3 bg-purple-50 rounded-lg"
                                            data-oid=".t6pviv"
                                        >
                                            <div
                                                className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                                data-oid="gv-g04z"
                                            >
                                                3
                                            </div>
                                            <div data-oid="fvglqnr">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid="3-h30og"
                                                >
                                                    Technical Interview
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid="ns7_v9t"
                                                >
                                                    Deep dive into technical skills and
                                                    problem-solving
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center gap-4 p-3 bg-orange-50 rounded-lg"
                                            data-oid="g6fu-fh"
                                        >
                                            <div
                                                className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                                data-oid="pu7qvn4"
                                            >
                                                4
                                            </div>
                                            <div data-oid="sejs:ev">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid="8irgm2r"
                                                >
                                                    HR Interview
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid="ro1mr9s"
                                                >
                                                    Cultural fit and final discussion
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Preferred Skills */}
                                <div className="mt-6" data-oid="jd-z6ic">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="q-bb5s5"
                                    >
                                        Nice to Have Skills
                                    </h3>
                                    <div className="flex flex-wrap gap-2" data-oid="1vxq353">
                                        {['Git', 'Docker', 'AWS', 'Agile', 'Testing', 'CI/CD'].map(
                                            (skill, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full border border-gray-300"
                                                    data-oid=":ywtmyw"
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
                            <div className="space-y-6" data-oid="1n..blu">
                                {/* Company Overview */}
                                <div data-oid="5t6ud.i">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="kxt-nq3"
                                    >
                                        About {job.company}
                                    </h3>
                                    <p
                                        className="text-gray-600 leading-relaxed mb-4"
                                        data-oid="ezr-c4u"
                                    >
                                        {job.company} is a leading {job.industry} company that has
                                        been revolutionizing the industry with innovative solutions
                                        and cutting-edge technology. We are committed to creating
                                        products that make a real difference in people's lives.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed" data-oid="0cret45">
                                        Our team consists of passionate professionals who are
                                        dedicated to excellence and continuous learning. We foster a
                                        culture of innovation, collaboration, and growth where every
                                        team member can thrive and make an impact.
                                    </p>
                                </div>

                                {/* Company Stats */}
                                <div
                                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                                    data-oid="yhfug3y"
                                >
                                    <div
                                        className="bg-blue-50 p-4 rounded-lg text-center"
                                        data-oid="-a3:nwo"
                                    >
                                        <div
                                            className="text-2xl font-bold text-[hsl(196,80%,45%)]"
                                            data-oid="sbxkp:d"
                                        >
                                            {job.companySize}
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid="cjaly2y">
                                            Employees
                                        </div>
                                    </div>
                                    <div
                                        className="bg-green-50 p-4 rounded-lg text-center"
                                        data-oid="d2ir0dz"
                                    >
                                        <div
                                            className="text-2xl font-bold text-green-600"
                                            data-oid="dpftazc"
                                        >
                                            {job.industry}
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid=".v13_d8">
                                            Industry
                                        </div>
                                    </div>
                                    <div
                                        className="bg-purple-50 p-4 rounded-lg text-center"
                                        data-oid="cz5hagj"
                                    >
                                        <div
                                            className="text-2xl font-bold text-purple-600"
                                            data-oid="6_msds9"
                                        >
                                            {job.companyType}
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid="14b90px">
                                            Company Type
                                        </div>
                                    </div>
                                </div>

                                {/* Company Culture */}
                                <div data-oid="7phze1b">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="hs54a8o"
                                    >
                                        Company Culture
                                    </h3>
                                    <div
                                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                        data-oid="4p4qlal"
                                    >
                                        <div
                                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                                            data-oid="i5p3zh2"
                                        >
                                            <div
                                                className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"
                                                data-oid="fs2p8g5"
                                            >
                                                <span
                                                    className="text-blue-600 text-sm"
                                                    data-oid="k_hl592"
                                                >
                                                    🚀
                                                </span>
                                            </div>
                                            <div data-oid="wp7.b1z">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid="9d149w7"
                                                >
                                                    Innovation
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid="quxq3d1"
                                                >
                                                    Cutting-edge technology
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                                            data-oid="s9vzzz6"
                                        >
                                            <div
                                                className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"
                                                data-oid="ub_8ls4"
                                            >
                                                <span
                                                    className="text-green-600 text-sm"
                                                    data-oid="dcieb:b"
                                                >
                                                    🤝
                                                </span>
                                            </div>
                                            <div data-oid="v2_x:6_">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid="v6i93:."
                                                >
                                                    Collaboration
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid="j5p6tn5"
                                                >
                                                    Team-first approach
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                                            data-oid="roa7q_r"
                                        >
                                            <div
                                                className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center"
                                                data-oid="99.7:24"
                                            >
                                                <span
                                                    className="text-purple-600 text-sm"
                                                    data-oid="b4e-kzz"
                                                >
                                                    📈
                                                </span>
                                            </div>
                                            <div data-oid="21t3vly">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid="2anlje7"
                                                >
                                                    Growth
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid="pwkwl7e"
                                                >
                                                    Career development
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                                            data-oid=".i0jcav"
                                        >
                                            <div
                                                className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center"
                                                data-oid=":rmqygg"
                                            >
                                                <span
                                                    className="text-orange-600 text-sm"
                                                    data-oid="cstc.x5"
                                                >
                                                    ⚖️
                                                </span>
                                            </div>
                                            <div data-oid="ev.asmv">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid="xmzf0:6"
                                                >
                                                    Work-Life Balance
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid="j6a1o0e"
                                                >
                                                    Flexible working
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Office Locations */}
                                <div className="mt-6" data-oid="dk9nv6g">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="t-dnhnf"
                                    >
                                        Office Locations
                                    </h3>
                                    <div
                                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                        data-oid="e43wvss"
                                    >
                                        <div
                                            className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"
                                            data-oid="-b.zca9"
                                        >
                                            <svg
                                                className="h-5 w-5 text-blue-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="b69gnp7"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                    data-oid="eacstt4"
                                                />

                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                    data-oid="dw:--fm"
                                                />
                                            </svg>
                                            <div data-oid="bn33abp">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid="m94iqet"
                                                >
                                                    Headquarters
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid="sy4j3i7"
                                                >
                                                    {job.location}
                                                </div>
                                            </div>
                                        </div>
                                        {job.isRemote && (
                                            <div
                                                className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                                                data-oid="dg.aq5o"
                                            >
                                                <svg
                                                    className="h-5 w-5 text-green-600"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    data-oid="wxaxcpy"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        data-oid="k96kwjn"
                                                    />
                                                </svg>
                                                <div data-oid="_k_y3qs">
                                                    <div
                                                        className="font-medium text-gray-800"
                                                        data-oid="xo:dw6m"
                                                    >
                                                        Remote Work
                                                    </div>
                                                    <div
                                                        className="text-sm text-gray-600"
                                                        data-oid="n:h3:me"
                                                    >
                                                        Work from anywhere
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Recent News & Updates */}
                                <div className="mt-6" data-oid="rgxkvqd">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="c_l2kxl"
                                    >
                                        Recent Company Updates
                                    </h3>
                                    <div className="space-y-3" data-oid="m:aau-0">
                                        <div
                                            className="p-3 bg-gray-50 rounded-lg border-l-4 border-blue-500"
                                            data-oid="txf5yk:"
                                        >
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="0lwhk-n"
                                            >
                                                New Product Launch
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="jtgvd.1"
                                            >
                                                Recently launched innovative solutions in{' '}
                                                {job.industry}
                                            </div>
                                        </div>
                                        <div
                                            className="p-3 bg-gray-50 rounded-lg border-l-4 border-green-500"
                                            data-oid=":tw2ytf"
                                        >
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid=":2i:efe"
                                            >
                                                Team Expansion
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="-jcixl0"
                                            >
                                                Growing team by 30% this year with focus on tech
                                                talent
                                            </div>
                                        </div>
                                        <div
                                            className="p-3 bg-gray-50 rounded-lg border-l-4 border-purple-500"
                                            data-oid="pfbmjqy"
                                        >
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="_8a0igr"
                                            >
                                                Awards & Recognition
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="79a0uqd"
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
                <div className="border-t border-gray-200 p-6 bg-gray-50" data-oid="52nw--x">
                    <div
                        className="flex flex-col sm:flex-row items-center justify-between gap-4"
                        data-oid="2a66yms"
                    >
                        <div className="text-sm text-gray-600" data-oid="_baknuh">
                            Posted on {formatDate(job.postedDate)} • {job.applicantCount} applicants
                        </div>
                        <div className="flex gap-3" data-oid="17-s:tp">
                            <button
                                onClick={onClose}
                                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                                data-oid="x9.g.oh"
                            >
                                Close
                            </button>
                            <button
                                onClick={onApply}
                                className="px-8 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg"
                                data-oid="u7x0.rq"
                            >
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="lsc_iw-"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                        data-oid="7iyk04w"
                                    />
                                </svg>
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Floating Apply Button - appears when scrolling */}
                <div className="fixed bottom-6 right-6 z-50" data-oid="ymm_3_n">
                    <button
                        onClick={onApply}
                        className="px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-full font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-110 shadow-2xl flex items-center gap-2 animate-bounce"
                        data-oid="zssgmdp"
                    >
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="lbex-w6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                data-oid="_votxsh"
                            />
                        </svg>
                        Quick Apply
                    </button>
                </div>
            </div>
        </div>
    );
}
