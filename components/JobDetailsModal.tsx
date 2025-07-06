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
            data-oid=".vg17ea"
        >
            <div
                className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden modal-enter"
                data-oid="j_lxryd"
            >
                {/* Header */}
                <div
                    className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white p-6"
                    data-oid="ihk1l88"
                >
                    <div className="flex items-start justify-between" data-oid="pqk1oj8">
                        <div className="flex-1" data-oid="7.ltj-b">
                            <div className="flex items-center gap-3 mb-2" data-oid="b_9lkq4">
                                <h1 className="text-2xl font-bold" data-oid=".6mnr5y">
                                    {job.title}
                                </h1>
                                {job.isUrgent && (
                                    <span
                                        className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse"
                                        data-oid="ci2mumt"
                                    >
                                        🔥 URGENT
                                    </span>
                                )}
                                {job.isFeatured && (
                                    <span
                                        className="bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full"
                                        data-oid="j_sociy"
                                    >
                                        ⭐ FEATURED
                                    </span>
                                )}
                            </div>
                            <p
                                className="text-xl font-semibold text-blue-100 mb-2"
                                data-oid="58d42ze"
                            >
                                {job.company}
                            </p>
                            <div
                                className="flex flex-wrap items-center gap-4 text-sm text-blue-100"
                                data-oid="9r-3fxf"
                            >
                                <span className="flex items-center gap-1" data-oid="7axoox4">
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="-wo.ibo"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            data-oid="97nw.cn"
                                        />

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            data-oid="i4z2s7b"
                                        />
                                    </svg>
                                    {job.location}
                                </span>
                                <span className="flex items-center gap-1" data-oid="ad660ao">
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid=":urkoaa"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                                            data-oid="mlgaaqa"
                                        />
                                    </svg>
                                    {job.salary}
                                </span>
                                <span className="flex items-center gap-1" data-oid="vq4:h4z">
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="nflmqrh"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                            data-oid=":r03nvq"
                                        />
                                    </svg>
                                    {job.experienceRequired}
                                </span>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/20 rounded-full transition-colors"
                            data-oid="5fbevnc"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="u1zjxj9"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                    data-oid=".n9.x6n"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-col h-[calc(90vh-200px)]" data-oid="b:7316_">
                    {/* Tabs */}
                    <div className="border-b border-gray-200 px-6" data-oid="lem-i4b">
                        <nav className="flex space-x-8" data-oid="-7f7or_">
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
                                    data-oid="9l.3fri"
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Tab Content */}
                    <div className="flex-1 overflow-y-auto p-6 modal-scroll" data-oid="iblu7xk">
                        {activeTab === 'overview' && (
                            <div className="space-y-6" data-oid="ggvcv2d">
                                {/* Job Stats */}
                                <div
                                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                                    data-oid="92g3tay"
                                >
                                    <div
                                        className="bg-blue-50 p-4 rounded-lg text-center"
                                        data-oid="79indh7"
                                    >
                                        <div
                                            className="text-2xl font-bold text-[hsl(196,80%,45%)]"
                                            data-oid="bex5l0i"
                                        >
                                            {job.applicantCount}
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid="5q4pa8t">
                                            Applicants
                                        </div>
                                    </div>
                                    <div
                                        className="bg-green-50 p-4 rounded-lg text-center"
                                        data-oid="uapmo8j"
                                    >
                                        <div
                                            className="text-2xl font-bold text-green-600"
                                            data-oid="kajo73p"
                                        >
                                            {job.jobType}
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid=":m.fppb">
                                            Job Type
                                        </div>
                                    </div>
                                    <div
                                        className="bg-purple-50 p-4 rounded-lg text-center"
                                        data-oid="h-qo0xd"
                                    >
                                        <div
                                            className="text-2xl font-bold text-purple-600"
                                            data-oid="6pak9sz"
                                        >
                                            {job.employmentType}
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid="2pv4bwi">
                                            Employment
                                        </div>
                                    </div>
                                    <div
                                        className="bg-orange-50 p-4 rounded-lg text-center"
                                        data-oid="-_mrf6w"
                                    >
                                        <div
                                            className="text-2xl font-bold text-orange-600"
                                            data-oid="g1di50z"
                                        >
                                            {formatDate(job.postedDate).split(' ')[0]}
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid="oou9gi5">
                                            Posted
                                        </div>
                                    </div>
                                </div>

                                {/* Job Description */}
                                <div data-oid="duhp9zx">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="tqggg:i"
                                    >
                                        Job Description
                                    </h3>
                                    <div className="prose prose-blue max-w-none" data-oid="cqy2pn3">
                                        <p
                                            className="text-gray-600 leading-relaxed mb-4"
                                            data-oid="-5ihftf"
                                        >
                                            We are looking for a talented {job.title} to join our
                                            dynamic team at {job.company}. This is an excellent
                                            opportunity for someone with {job.experienceRequired} of
                                            experience to work on cutting-edge projects and grow
                                            their career in the {job.industry} industry.
                                        </p>
                                        <p
                                            className="text-gray-600 leading-relaxed mb-4"
                                            data-oid="t4w9ohy"
                                        >
                                            As a {job.title}, you will be responsible for developing
                                            and maintaining high-quality software solutions,
                                            collaborating with cross-functional teams, and
                                            contributing to the overall success of our products.
                                        </p>
                                        <p
                                            className="text-gray-600 leading-relaxed"
                                            data-oid="ekrdj6_"
                                        >
                                            Join us in building innovative solutions that impact
                                            millions of users across India and beyond. We offer a
                                            collaborative work environment, competitive
                                            compensation, and excellent growth opportunities.
                                        </p>
                                    </div>
                                </div>

                                {/* Application Deadline & Quick Stats */}
                                <div className="bg-blue-50 rounded-lg p-4 mb-6" data-oid="15kvvkf">
                                    <div
                                        className="grid grid-cols-1 md:grid-cols-3 gap-4"
                                        data-oid="2te9nj-"
                                    >
                                        <div className="text-center" data-oid="bbregzi">
                                            <div
                                                className="text-2xl font-bold text-blue-600"
                                                data-oid="90tw_8f"
                                            >
                                                {Math.max(1, Math.floor(Math.random() * 15))} days
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="zzcp2gv"
                                            >
                                                Application Deadline
                                            </div>
                                        </div>
                                        <div className="text-center" data-oid="_phge8d">
                                            <div
                                                className="text-2xl font-bold text-green-600"
                                                data-oid="b446z89"
                                            >
                                                {job.isRemote ? 'Remote' : 'On-site'}
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="v_iyqad"
                                            >
                                                Work Mode
                                            </div>
                                        </div>
                                        <div className="text-center" data-oid="gcl1:qa">
                                            <div
                                                className="text-2xl font-bold text-purple-600"
                                                data-oid="4slrar7"
                                            >
                                                {Math.floor(Math.random() * 5) + 1}-
                                                {Math.floor(Math.random() * 3) + 3} rounds
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="kvmcd:k"
                                            >
                                                Interview Process
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Company Highlights */}
                                <div className="mb-6" data-oid="c:d-8ob">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="rf30opc"
                                    >
                                        Why Join {job.company}?
                                    </h3>
                                    <div
                                        className="grid grid-cols-1 md:grid-cols-2 gap-3"
                                        data-oid="2ndn3rk"
                                    >
                                        <div
                                            className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                                            data-oid=".hh.bh0"
                                        >
                                            <div
                                                className="w-2 h-2 bg-green-500 rounded-full"
                                                data-oid="hgl_pcy"
                                            ></div>
                                            <span className="text-gray-700" data-oid="el7960j">
                                                Fast-growing {job.companyType} company
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"
                                            data-oid="gb7r2l."
                                        >
                                            <div
                                                className="w-2 h-2 bg-blue-500 rounded-full"
                                                data-oid="686shiy"
                                            ></div>
                                            <span className="text-gray-700" data-oid="t:cmwhn">
                                                Learning & development opportunities
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg"
                                            data-oid="wcm_4j."
                                        >
                                            <div
                                                className="w-2 h-2 bg-purple-500 rounded-full"
                                                data-oid="5j126k4"
                                            ></div>
                                            <span className="text-gray-700" data-oid="b5gmw-i">
                                                Collaborative work environment
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg"
                                            data-oid="t19tt-u"
                                        >
                                            <div
                                                className="w-2 h-2 bg-orange-500 rounded-full"
                                                data-oid="1ft9v7y"
                                            ></div>
                                            <span className="text-gray-700" data-oid="-n:yhd2">
                                                Competitive compensation package
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Benefits */}
                                {job.benefits && job.benefits.length > 0 && (
                                    <div data-oid="lclqzdy">
                                        <h3
                                            className="text-lg font-semibold text-gray-800 mb-3"
                                            data-oid="4v:-mpu"
                                        >
                                            Benefits & Perks
                                        </h3>
                                        <div
                                            className="grid grid-cols-1 md:grid-cols-2 gap-3"
                                            data-oid="4xqwn:6"
                                        >
                                            {job.benefits.map((benefit, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                                                    data-oid="uhjs_d."
                                                >
                                                    <div
                                                        className="w-2 h-2 bg-green-500 rounded-full"
                                                        data-oid=":452dzu"
                                                    ></div>
                                                    <span
                                                        className="text-gray-700"
                                                        data-oid="j0epliq"
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
                            <div className="space-y-6" data-oid="i:vrays">
                                {/* Skills Required */}
                                <div data-oid="suh9v2_">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="2w0z7oy"
                                    >
                                        Required Skills
                                    </h3>
                                    <div className="flex flex-wrap gap-2" data-oid="sh1x9gy">
                                        {job.skills.map((skill, index) => (
                                            <span
                                                key={index}
                                                className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-2 rounded-full"
                                                data-oid="s1trijm"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Experience & Qualifications */}
                                <div data-oid="t.5un2g">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="5mv:6bi"
                                    >
                                        Experience & Qualifications
                                    </h3>
                                    <div className="space-y-3" data-oid="e5nrc72">
                                        <div className="flex items-start gap-3" data-oid="wp0d3nt">
                                            <div
                                                className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                data-oid="x1_upgt"
                                            ></div>
                                            <span className="text-gray-700" data-oid="0:rzs8u">
                                                Experience: {job.experienceRequired}
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-3" data-oid="js20t.w">
                                            <div
                                                className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                data-oid="47tlb_7"
                                            ></div>
                                            <span className="text-gray-700" data-oid="uzyfxhr">
                                                Bachelor's degree in Computer Science, Engineering,
                                                or related field
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-3" data-oid="wljx5yh">
                                            <div
                                                className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                data-oid="3x_4rc6"
                                            ></div>
                                            <span className="text-gray-700" data-oid="tfbbxja">
                                                Strong problem-solving and analytical skills
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-3" data-oid="r5hynpo">
                                            <div
                                                className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                data-oid="nrevnm3"
                                            ></div>
                                            <span className="text-gray-700" data-oid="yd7p993">
                                                Excellent communication and teamwork abilities
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-3" data-oid="bpgtzfo">
                                            <div
                                                className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                data-oid="1ehub88"
                                            ></div>
                                            <span className="text-gray-700" data-oid="of-ctd7">
                                                Passion for learning new technologies and best
                                                practices
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Responsibilities */}
                                <div data-oid="d7ngnoq">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="275_kqd"
                                    >
                                        Key Responsibilities
                                    </h3>
                                    <div className="space-y-3" data-oid="xh:z_pr">
                                        <div className="flex items-start gap-3" data-oid=":jzna.m">
                                            <div
                                                className="w-2 h-2 bg-green-500 rounded-full mt-2"
                                                data-oid="r4.wi:_"
                                            ></div>
                                            <span className="text-gray-700" data-oid="::ka:aj">
                                                Develop and maintain high-quality software
                                                applications
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-3" data-oid="ati3b9l">
                                            <div
                                                className="w-2 h-2 bg-green-500 rounded-full mt-2"
                                                data-oid="rdnhege"
                                            ></div>
                                            <span className="text-gray-700" data-oid="2zr9t_b">
                                                Collaborate with cross-functional teams to define
                                                and implement features
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-3" data-oid="ugd5u:2">
                                            <div
                                                className="w-2 h-2 bg-green-500 rounded-full mt-2"
                                                data-oid="5fk:r8u"
                                            ></div>
                                            <span className="text-gray-700" data-oid="hmr1w0o">
                                                Write clean, maintainable, and efficient code
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-3" data-oid="k0e7p4o">
                                            <div
                                                className="w-2 h-2 bg-green-500 rounded-full mt-2"
                                                data-oid="7y58clt"
                                            ></div>
                                            <span className="text-gray-700" data-oid="4cz0w3z">
                                                Participate in code reviews and maintain coding
                                                standards
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-3" data-oid="m07rm5g">
                                            <div
                                                className="w-2 h-2 bg-green-500 rounded-full mt-2"
                                                data-oid="x5lt3fs"
                                            ></div>
                                            <span className="text-gray-700" data-oid="b2lrsa2">
                                                Troubleshoot and debug applications to optimize
                                                performance
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Interview Process */}
                                <div className="mt-6" data-oid="3b.761o">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="flhzmlb"
                                    >
                                        Interview Process
                                    </h3>
                                    <div className="space-y-4" data-oid=":6uh-k1">
                                        <div
                                            className="flex items-center gap-4 p-3 bg-blue-50 rounded-lg"
                                            data-oid="6gyf:yo"
                                        >
                                            <div
                                                className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                                data-oid=":-h2wut"
                                            >
                                                1
                                            </div>
                                            <div data-oid="lzrdj:b">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid="la_s.d7"
                                                >
                                                    Application Review
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid="vqzssy9"
                                                >
                                                    Resume and profile screening
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center gap-4 p-3 bg-green-50 rounded-lg"
                                            data-oid="vrks9ye"
                                        >
                                            <div
                                                className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                                data-oid="j-t6bh1"
                                            >
                                                2
                                            </div>
                                            <div data-oid="n7v3c_8">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid="1e8u7:b"
                                                >
                                                    Technical Assessment
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid="cosw70k"
                                                >
                                                    Coding challenge or technical questions
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center gap-4 p-3 bg-purple-50 rounded-lg"
                                            data-oid="vl85c0v"
                                        >
                                            <div
                                                className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                                data-oid="6ne87fc"
                                            >
                                                3
                                            </div>
                                            <div data-oid="0lv.9nn">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid="4_jecfx"
                                                >
                                                    Technical Interview
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid="g_v-xuf"
                                                >
                                                    Deep dive into technical skills and
                                                    problem-solving
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center gap-4 p-3 bg-orange-50 rounded-lg"
                                            data-oid="zj-4i9."
                                        >
                                            <div
                                                className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                                data-oid="z5.4.hv"
                                            >
                                                4
                                            </div>
                                            <div data-oid="2s6zoiu">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid="zcf3y8b"
                                                >
                                                    HR Interview
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid="nt54922"
                                                >
                                                    Cultural fit and final discussion
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Preferred Skills */}
                                <div className="mt-6" data-oid="d1ihp0j">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="l096l7i"
                                    >
                                        Nice to Have Skills
                                    </h3>
                                    <div className="flex flex-wrap gap-2" data-oid="z8ukeu8">
                                        {['Git', 'Docker', 'AWS', 'Agile', 'Testing', 'CI/CD'].map(
                                            (skill, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full border border-gray-300"
                                                    data-oid="fd2zvu2"
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
                            <div className="space-y-6" data-oid=".-:.1o-">
                                {/* Company Overview */}
                                <div data-oid="fvcahjg">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="pu7hxl6"
                                    >
                                        About {job.company}
                                    </h3>
                                    <p
                                        className="text-gray-600 leading-relaxed mb-4"
                                        data-oid="agb9is5"
                                    >
                                        {job.company} is a leading {job.industry} company that has
                                        been revolutionizing the industry with innovative solutions
                                        and cutting-edge technology. We are committed to creating
                                        products that make a real difference in people's lives.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed" data-oid="zgeb7xv">
                                        Our team consists of passionate professionals who are
                                        dedicated to excellence and continuous learning. We foster a
                                        culture of innovation, collaboration, and growth where every
                                        team member can thrive and make an impact.
                                    </p>
                                </div>

                                {/* Company Stats */}
                                <div
                                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                                    data-oid="7907-o-"
                                >
                                    <div
                                        className="bg-blue-50 p-4 rounded-lg text-center"
                                        data-oid="hzk:i1i"
                                    >
                                        <div
                                            className="text-2xl font-bold text-[hsl(196,80%,45%)]"
                                            data-oid="_rt:svd"
                                        >
                                            {job.companySize}
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid="o9cjbjm">
                                            Employees
                                        </div>
                                    </div>
                                    <div
                                        className="bg-green-50 p-4 rounded-lg text-center"
                                        data-oid="7cxycy3"
                                    >
                                        <div
                                            className="text-2xl font-bold text-green-600"
                                            data-oid="c_eyv02"
                                        >
                                            {job.industry}
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid=".b0vbx1">
                                            Industry
                                        </div>
                                    </div>
                                    <div
                                        className="bg-purple-50 p-4 rounded-lg text-center"
                                        data-oid="aicsd35"
                                    >
                                        <div
                                            className="text-2xl font-bold text-purple-600"
                                            data-oid="9rcfzj:"
                                        >
                                            {job.companyType}
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid="hxk_xk5">
                                            Company Type
                                        </div>
                                    </div>
                                </div>

                                {/* Company Culture */}
                                <div data-oid="u15hhp3">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="ipi:etq"
                                    >
                                        Company Culture
                                    </h3>
                                    <div
                                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                        data-oid=".z1zr62"
                                    >
                                        <div
                                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                                            data-oid="x.vkfd5"
                                        >
                                            <div
                                                className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"
                                                data-oid="pi70knb"
                                            >
                                                <span
                                                    className="text-blue-600 text-sm"
                                                    data-oid="m3xr.vv"
                                                >
                                                    🚀
                                                </span>
                                            </div>
                                            <div data-oid="k51xmav">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid="fkqpre_"
                                                >
                                                    Innovation
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid="vj2efu9"
                                                >
                                                    Cutting-edge technology
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                                            data-oid="9l3uhom"
                                        >
                                            <div
                                                className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"
                                                data-oid="1qd8s-n"
                                            >
                                                <span
                                                    className="text-green-600 text-sm"
                                                    data-oid="d562gq4"
                                                >
                                                    🤝
                                                </span>
                                            </div>
                                            <div data-oid="ct0.f.y">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid="sdnighx"
                                                >
                                                    Collaboration
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid="3i5ad67"
                                                >
                                                    Team-first approach
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                                            data-oid=":agnqwl"
                                        >
                                            <div
                                                className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center"
                                                data-oid="pqilyts"
                                            >
                                                <span
                                                    className="text-purple-600 text-sm"
                                                    data-oid="ovg-2k4"
                                                >
                                                    📈
                                                </span>
                                            </div>
                                            <div data-oid="z3-3ol-">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid="5i.bvgy"
                                                >
                                                    Growth
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid="64yyk:i"
                                                >
                                                    Career development
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                                            data-oid="hoo-ie3"
                                        >
                                            <div
                                                className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center"
                                                data-oid="kg1qry4"
                                            >
                                                <span
                                                    className="text-orange-600 text-sm"
                                                    data-oid="ec314js"
                                                >
                                                    ⚖️
                                                </span>
                                            </div>
                                            <div data-oid="kviy-ta">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid="k-209em"
                                                >
                                                    Work-Life Balance
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid="l7gt1ub"
                                                >
                                                    Flexible working
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Office Locations */}
                                <div className="mt-6" data-oid="6wejbfd">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="m66qp78"
                                    >
                                        Office Locations
                                    </h3>
                                    <div
                                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                        data-oid="flrcgph"
                                    >
                                        <div
                                            className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"
                                            data-oid="fgwu1oa"
                                        >
                                            <svg
                                                className="h-5 w-5 text-blue-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="gpxe0_i"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                    data-oid="h9j97o-"
                                                />

                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                    data-oid="ze0a8.3"
                                                />
                                            </svg>
                                            <div data-oid="-0r4xkg">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid="n97vvyt"
                                                >
                                                    Headquarters
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid="hjf4skt"
                                                >
                                                    {job.location}
                                                </div>
                                            </div>
                                        </div>
                                        {job.isRemote && (
                                            <div
                                                className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                                                data-oid="0c6nr1-"
                                            >
                                                <svg
                                                    className="h-5 w-5 text-green-600"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    data-oid="zydqrry"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        data-oid="11e9p-j"
                                                    />
                                                </svg>
                                                <div data-oid="8htxpu8">
                                                    <div
                                                        className="font-medium text-gray-800"
                                                        data-oid="ekkd5n2"
                                                    >
                                                        Remote Work
                                                    </div>
                                                    <div
                                                        className="text-sm text-gray-600"
                                                        data-oid="dkqh1.m"
                                                    >
                                                        Work from anywhere
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Recent News & Updates */}
                                <div className="mt-6" data-oid="2a10wwl">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="vlee5i-"
                                    >
                                        Recent Company Updates
                                    </h3>
                                    <div className="space-y-3" data-oid="9:skbq7">
                                        <div
                                            className="p-3 bg-gray-50 rounded-lg border-l-4 border-blue-500"
                                            data-oid="lz:v_9:"
                                        >
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="gn6e3sb"
                                            >
                                                New Product Launch
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="a3a3olo"
                                            >
                                                Recently launched innovative solutions in{' '}
                                                {job.industry}
                                            </div>
                                        </div>
                                        <div
                                            className="p-3 bg-gray-50 rounded-lg border-l-4 border-green-500"
                                            data-oid="s17e99l"
                                        >
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="51k1alh"
                                            >
                                                Team Expansion
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="jhngeqs"
                                            >
                                                Growing team by 30% this year with focus on tech
                                                talent
                                            </div>
                                        </div>
                                        <div
                                            className="p-3 bg-gray-50 rounded-lg border-l-4 border-purple-500"
                                            data-oid="30ernrs"
                                        >
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="u6pi36f"
                                            >
                                                Awards & Recognition
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="h2xbazs"
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
                <div className="border-t border-gray-200 p-6 bg-gray-50" data-oid="cq5xu9z">
                    <div
                        className="flex flex-col sm:flex-row items-center justify-between gap-4"
                        data-oid="illb608"
                    >
                        <div className="text-sm text-gray-600" data-oid="yzdrkhs">
                            Posted on {formatDate(job.postedDate)} • {job.applicantCount} applicants
                        </div>
                        <div className="flex gap-3" data-oid="zx8ixui">
                            <button
                                onClick={onClose}
                                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                                data-oid=".__44gd"
                            >
                                Close
                            </button>
                            <button
                                onClick={onApply}
                                className="px-8 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg"
                                data-oid="f-j.-ri"
                            >
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="1fd--a8"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                        data-oid="gfdokpv"
                                    />
                                </svg>
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Floating Apply Button - appears when scrolling */}
                <div className="fixed bottom-6 right-6 z-50" data-oid="6bv-7r1">
                    <button
                        onClick={onApply}
                        className="px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-full font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-110 shadow-2xl flex items-center gap-2 animate-bounce"
                        data-oid="wz6sxf:"
                    >
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="qw9qxe_"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                data-oid="wcadqqu"
                            />
                        </svg>
                        Quick Apply
                    </button>
                </div>
            </div>
        </div>
    );
}
