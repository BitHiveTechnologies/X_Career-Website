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
            data-oid="u2yqlvs"
        >
            <div
                className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden modal-enter"
                data-oid="_-9e.28"
            >
                {/* Header */}
                <div
                    className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white p-6"
                    data-oid="twg7x76"
                >
                    <div className="flex items-start justify-between" data-oid="ye.-_0v">
                        <div className="flex-1" data-oid="0zk8jfs">
                            <div className="flex items-center gap-3 mb-2" data-oid="p5_5cuf">
                                <h1 className="text-2xl font-bold" data-oid="tkdq_v:">
                                    {job.title}
                                </h1>
                                {job.isUrgent && (
                                    <span
                                        className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse"
                                        data-oid="cm.il55"
                                    >
                                        🔥 URGENT
                                    </span>
                                )}
                                {job.isFeatured && (
                                    <span
                                        className="bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full"
                                        data-oid="ep-z33b"
                                    >
                                        ⭐ FEATURED
                                    </span>
                                )}
                            </div>
                            <p
                                className="text-xl font-semibold text-blue-100 mb-2"
                                data-oid="hezevs5"
                            >
                                {job.company}
                            </p>
                            <div
                                className="flex flex-wrap items-center gap-4 text-sm text-blue-100"
                                data-oid=":w615tm"
                            >
                                <span className="flex items-center gap-1" data-oid="xjrq1cj">
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid=".tp-665"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            data-oid="i6ekx.1"
                                        />

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            data-oid="mno4_.w"
                                        />
                                    </svg>
                                    {job.location}
                                </span>
                                <span className="flex items-center gap-1" data-oid="2qzxoeh">
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="hgqvgt3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                                            data-oid="qere:9q"
                                        />
                                    </svg>
                                    {job.salary}
                                </span>
                                <span className="flex items-center gap-1" data-oid="o0y-.8.">
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="1ii2jfi"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                            data-oid="bdhtq-y"
                                        />
                                    </svg>
                                    {job.experienceRequired}
                                </span>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/20 rounded-full transition-colors"
                            data-oid="b02_p:j"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="_2t4mzx"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                    data-oid="dcz8qec"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-col h-[calc(90vh-200px)]" data-oid="r2dy_ow">
                    {/* Tabs */}
                    <div className="border-b border-gray-200 px-6" data-oid="5atyhjq">
                        <nav className="flex space-x-8" data-oid="yuvy0mz">
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
                                    data-oid="tiwf2jr"
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Tab Content */}
                    <div className="flex-1 overflow-y-auto p-6 modal-scroll" data-oid="m-0h2s.">
                        {activeTab === 'overview' && (
                            <div className="space-y-6" data-oid="s-9g03z">
                                {/* Job Stats */}
                                <div
                                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                                    data-oid="l-ohulc"
                                >
                                    <div
                                        className="bg-blue-50 p-4 rounded-lg text-center"
                                        data-oid="auyjwxw"
                                    >
                                        <div
                                            className="text-2xl font-bold text-[hsl(196,80%,45%)]"
                                            data-oid="l22f2d:"
                                        >
                                            {job.applicantCount}
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid="_:m3ynq">
                                            Applicants
                                        </div>
                                    </div>
                                    <div
                                        className="bg-green-50 p-4 rounded-lg text-center"
                                        data-oid="3l-io_q"
                                    >
                                        <div
                                            className="text-2xl font-bold text-green-600"
                                            data-oid="2rlya2_"
                                        >
                                            {job.jobType}
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid="kpibh1z">
                                            Job Type
                                        </div>
                                    </div>
                                    <div
                                        className="bg-purple-50 p-4 rounded-lg text-center"
                                        data-oid="..62rr7"
                                    >
                                        <div
                                            className="text-2xl font-bold text-purple-600"
                                            data-oid="8_2b0hg"
                                        >
                                            {job.employmentType}
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid="6zxzz3t">
                                            Employment
                                        </div>
                                    </div>
                                    <div
                                        className="bg-orange-50 p-4 rounded-lg text-center"
                                        data-oid="eo3xdsw"
                                    >
                                        <div
                                            className="text-2xl font-bold text-orange-600"
                                            data-oid="vc3adpe"
                                        >
                                            {formatDate(job.postedDate).split(' ')[0]}
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid="d_-h3lb">
                                            Posted
                                        </div>
                                    </div>
                                </div>

                                {/* Job Description */}
                                <div data-oid="97yc0rb">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="okl7878"
                                    >
                                        Job Description
                                    </h3>
                                    <div className="prose prose-blue max-w-none" data-oid="ssg866q">
                                        <p
                                            className="text-gray-600 leading-relaxed mb-4"
                                            data-oid=":44g097"
                                        >
                                            We are looking for a talented {job.title} to join our
                                            dynamic team at {job.company}. This is an excellent
                                            opportunity for someone with {job.experienceRequired} of
                                            experience to work on cutting-edge projects and grow
                                            their career in the {job.industry} industry.
                                        </p>
                                        <p
                                            className="text-gray-600 leading-relaxed mb-4"
                                            data-oid="8ws9iir"
                                        >
                                            As a {job.title}, you will be responsible for developing
                                            and maintaining high-quality software solutions,
                                            collaborating with cross-functional teams, and
                                            contributing to the overall success of our products.
                                        </p>
                                        <p
                                            className="text-gray-600 leading-relaxed"
                                            data-oid="5y87-fq"
                                        >
                                            Join us in building innovative solutions that impact
                                            millions of users across India and beyond. We offer a
                                            collaborative work environment, competitive
                                            compensation, and excellent growth opportunities.
                                        </p>
                                    </div>
                                </div>

                                {/* Application Deadline & Quick Stats */}
                                <div className="bg-blue-50 rounded-lg p-4 mb-6" data-oid="hbtm3e5">
                                    <div
                                        className="grid grid-cols-1 md:grid-cols-3 gap-4"
                                        data-oid="humtdse"
                                    >
                                        <div className="text-center" data-oid=".rcobus">
                                            <div
                                                className="text-2xl font-bold text-blue-600"
                                                data-oid="cas63k6"
                                            >
                                                {Math.max(1, Math.floor(Math.random() * 15))} days
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="vs1u76q"
                                            >
                                                Application Deadline
                                            </div>
                                        </div>
                                        <div className="text-center" data-oid="44or_64">
                                            <div
                                                className="text-2xl font-bold text-green-600"
                                                data-oid="fo-a6ae"
                                            >
                                                {job.isRemote ? 'Remote' : 'On-site'}
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="2lpj8yh"
                                            >
                                                Work Mode
                                            </div>
                                        </div>
                                        <div className="text-center" data-oid="en7ktpf">
                                            <div
                                                className="text-2xl font-bold text-purple-600"
                                                data-oid="tz8x9gl"
                                            >
                                                {Math.floor(Math.random() * 5) + 1}-
                                                {Math.floor(Math.random() * 3) + 3} rounds
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="jlr51br"
                                            >
                                                Interview Process
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Company Highlights */}
                                <div className="mb-6" data-oid="nt_2pct">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="ubg5lgv"
                                    >
                                        Why Join {job.company}?
                                    </h3>
                                    <div
                                        className="grid grid-cols-1 md:grid-cols-2 gap-3"
                                        data-oid="wb7sdtz"
                                    >
                                        <div
                                            className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                                            data-oid="1:pnb.w"
                                        >
                                            <div
                                                className="w-2 h-2 bg-green-500 rounded-full"
                                                data-oid="eqc3avg"
                                            ></div>
                                            <span className="text-gray-700" data-oid="l8ea78h">
                                                Fast-growing {job.companyType} company
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"
                                            data-oid="lyr7crd"
                                        >
                                            <div
                                                className="w-2 h-2 bg-blue-500 rounded-full"
                                                data-oid="gjpxw17"
                                            ></div>
                                            <span className="text-gray-700" data-oid="i37n3kl">
                                                Learning & development opportunities
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg"
                                            data-oid="n6a74h4"
                                        >
                                            <div
                                                className="w-2 h-2 bg-purple-500 rounded-full"
                                                data-oid="mtco-.t"
                                            ></div>
                                            <span className="text-gray-700" data-oid="u4or.9v">
                                                Collaborative work environment
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg"
                                            data-oid="z4icgf4"
                                        >
                                            <div
                                                className="w-2 h-2 bg-orange-500 rounded-full"
                                                data-oid="3n4h_x6"
                                            ></div>
                                            <span className="text-gray-700" data-oid="2b3d6qr">
                                                Competitive compensation package
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Benefits */}
                                {job.benefits && job.benefits.length > 0 && (
                                    <div data-oid="fi-suqx">
                                        <h3
                                            className="text-lg font-semibold text-gray-800 mb-3"
                                            data-oid="gxu7hze"
                                        >
                                            Benefits & Perks
                                        </h3>
                                        <div
                                            className="grid grid-cols-1 md:grid-cols-2 gap-3"
                                            data-oid="brgk8ya"
                                        >
                                            {job.benefits.map((benefit, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                                                    data-oid="y364w4l"
                                                >
                                                    <div
                                                        className="w-2 h-2 bg-green-500 rounded-full"
                                                        data-oid="7yp639n"
                                                    ></div>
                                                    <span
                                                        className="text-gray-700"
                                                        data-oid="bxtfe5."
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
                            <div className="space-y-6" data-oid="-27ci15">
                                {/* Skills Required */}
                                <div data-oid="yza93tu">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="y0cc_r5"
                                    >
                                        Required Skills
                                    </h3>
                                    <div className="flex flex-wrap gap-2" data-oid="789uli7">
                                        {job.skills.map((skill, index) => (
                                            <span
                                                key={index}
                                                className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-2 rounded-full"
                                                data-oid="y_wm0wg"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Experience & Qualifications */}
                                <div data-oid="_.a.l7m">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid=":ok3yvx"
                                    >
                                        Experience & Qualifications
                                    </h3>
                                    <div className="space-y-3" data-oid=":j5i-t5">
                                        <div className="flex items-start gap-3" data-oid="13o9fmw">
                                            <div
                                                className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                data-oid="bdq4tf-"
                                            ></div>
                                            <span className="text-gray-700" data-oid="8p77194">
                                                Experience: {job.experienceRequired}
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-3" data-oid="oo229_e">
                                            <div
                                                className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                data-oid="_bp5zjl"
                                            ></div>
                                            <span className="text-gray-700" data-oid="k:esucg">
                                                Bachelor's degree in Computer Science, Engineering,
                                                or related field
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-3" data-oid="f7e8g38">
                                            <div
                                                className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                data-oid="l6olsyi"
                                            ></div>
                                            <span className="text-gray-700" data-oid="1gax_6f">
                                                Strong problem-solving and analytical skills
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-3" data-oid="-fnfhab">
                                            <div
                                                className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                data-oid="tld0zht"
                                            ></div>
                                            <span className="text-gray-700" data-oid="q2dq6:v">
                                                Excellent communication and teamwork abilities
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-3" data-oid=".x8cgyp">
                                            <div
                                                className="w-2 h-2 bg-[hsl(196,80%,45%)] rounded-full mt-2"
                                                data-oid="d7uydtk"
                                            ></div>
                                            <span className="text-gray-700" data-oid="s2bkbwo">
                                                Passion for learning new technologies and best
                                                practices
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Responsibilities */}
                                <div data-oid="44zjtal">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="i3a9fex"
                                    >
                                        Key Responsibilities
                                    </h3>
                                    <div className="space-y-3" data-oid="b66t--3">
                                        <div className="flex items-start gap-3" data-oid="s:b_mo8">
                                            <div
                                                className="w-2 h-2 bg-green-500 rounded-full mt-2"
                                                data-oid="mn5jhni"
                                            ></div>
                                            <span className="text-gray-700" data-oid="l8ptc2r">
                                                Develop and maintain high-quality software
                                                applications
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-3" data-oid="5.6rm2_">
                                            <div
                                                className="w-2 h-2 bg-green-500 rounded-full mt-2"
                                                data-oid="t-tzb-4"
                                            ></div>
                                            <span className="text-gray-700" data-oid="ytfz29a">
                                                Collaborate with cross-functional teams to define
                                                and implement features
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-3" data-oid="qumsgdt">
                                            <div
                                                className="w-2 h-2 bg-green-500 rounded-full mt-2"
                                                data-oid="prganas"
                                            ></div>
                                            <span className="text-gray-700" data-oid="6:rc54x">
                                                Write clean, maintainable, and efficient code
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-3" data-oid="n:d16s8">
                                            <div
                                                className="w-2 h-2 bg-green-500 rounded-full mt-2"
                                                data-oid="_z6cyg0"
                                            ></div>
                                            <span className="text-gray-700" data-oid="6cb87b9">
                                                Participate in code reviews and maintain coding
                                                standards
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-3" data-oid=".l1xxfk">
                                            <div
                                                className="w-2 h-2 bg-green-500 rounded-full mt-2"
                                                data-oid="qix00cf"
                                            ></div>
                                            <span className="text-gray-700" data-oid="z9d1:-4">
                                                Troubleshoot and debug applications to optimize
                                                performance
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Interview Process */}
                                <div className="mt-6" data-oid="in0:u34">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="g1t1a-2"
                                    >
                                        Interview Process
                                    </h3>
                                    <div className="space-y-4" data-oid="2or-ndp">
                                        <div
                                            className="flex items-center gap-4 p-3 bg-blue-50 rounded-lg"
                                            data-oid="0ep.o38"
                                        >
                                            <div
                                                className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                                data-oid="8ox2wbc"
                                            >
                                                1
                                            </div>
                                            <div data-oid="39kqe86">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid=".8e-397"
                                                >
                                                    Application Review
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid="29oasrz"
                                                >
                                                    Resume and profile screening
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center gap-4 p-3 bg-green-50 rounded-lg"
                                            data-oid="hww7itb"
                                        >
                                            <div
                                                className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                                data-oid="nbypzpe"
                                            >
                                                2
                                            </div>
                                            <div data-oid=":nletva">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid="ibm-uvo"
                                                >
                                                    Technical Assessment
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid="lxv7fnf"
                                                >
                                                    Coding challenge or technical questions
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center gap-4 p-3 bg-purple-50 rounded-lg"
                                            data-oid="sp4b6es"
                                        >
                                            <div
                                                className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                                data-oid="i_:fdk4"
                                            >
                                                3
                                            </div>
                                            <div data-oid="nzont3.">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid="j486a8c"
                                                >
                                                    Technical Interview
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid="e:l-4s5"
                                                >
                                                    Deep dive into technical skills and
                                                    problem-solving
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center gap-4 p-3 bg-orange-50 rounded-lg"
                                            data-oid="4b0whsu"
                                        >
                                            <div
                                                className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                                                data-oid="mrl53in"
                                            >
                                                4
                                            </div>
                                            <div data-oid="s46l_zy">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid="n5s23o-"
                                                >
                                                    HR Interview
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid="e:o1-tm"
                                                >
                                                    Cultural fit and final discussion
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Preferred Skills */}
                                <div className="mt-6" data-oid="38q:k:-">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="oxrq8j4"
                                    >
                                        Nice to Have Skills
                                    </h3>
                                    <div className="flex flex-wrap gap-2" data-oid="uawax:u">
                                        {['Git', 'Docker', 'AWS', 'Agile', 'Testing', 'CI/CD'].map(
                                            (skill, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full border border-gray-300"
                                                    data-oid="-3usnsy"
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
                            <div className="space-y-6" data-oid="c:2u_r6">
                                {/* Company Overview */}
                                <div data-oid="-wsxvfw">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="7vnkxg0"
                                    >
                                        About {job.company}
                                    </h3>
                                    <p
                                        className="text-gray-600 leading-relaxed mb-4"
                                        data-oid="5_hkkdp"
                                    >
                                        {job.company} is a leading {job.industry} company that has
                                        been revolutionizing the industry with innovative solutions
                                        and cutting-edge technology. We are committed to creating
                                        products that make a real difference in people's lives.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed" data-oid="5afzo2x">
                                        Our team consists of passionate professionals who are
                                        dedicated to excellence and continuous learning. We foster a
                                        culture of innovation, collaboration, and growth where every
                                        team member can thrive and make an impact.
                                    </p>
                                </div>

                                {/* Company Stats */}
                                <div
                                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                                    data-oid="__imc14"
                                >
                                    <div
                                        className="bg-blue-50 p-4 rounded-lg text-center"
                                        data-oid="jv6g793"
                                    >
                                        <div
                                            className="text-2xl font-bold text-[hsl(196,80%,45%)]"
                                            data-oid="u_i7a3d"
                                        >
                                            {job.companySize}
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid="khmxzcx">
                                            Employees
                                        </div>
                                    </div>
                                    <div
                                        className="bg-green-50 p-4 rounded-lg text-center"
                                        data-oid="ph4q7sr"
                                    >
                                        <div
                                            className="text-2xl font-bold text-green-600"
                                            data-oid="r_1ci5n"
                                        >
                                            {job.industry}
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid="ts8n:2y">
                                            Industry
                                        </div>
                                    </div>
                                    <div
                                        className="bg-purple-50 p-4 rounded-lg text-center"
                                        data-oid="buk--d2"
                                    >
                                        <div
                                            className="text-2xl font-bold text-purple-600"
                                            data-oid=":4kg65p"
                                        >
                                            {job.companyType}
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid="bowupp5">
                                            Company Type
                                        </div>
                                    </div>
                                </div>

                                {/* Company Culture */}
                                <div data-oid="h-q60za">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="7qyl88i"
                                    >
                                        Company Culture
                                    </h3>
                                    <div
                                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                        data-oid="a843bbz"
                                    >
                                        <div
                                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                                            data-oid="7mcgbw-"
                                        >
                                            <div
                                                className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"
                                                data-oid="gqi_pkc"
                                            >
                                                <span
                                                    className="text-blue-600 text-sm"
                                                    data-oid="tlo66fe"
                                                >
                                                    🚀
                                                </span>
                                            </div>
                                            <div data-oid="47x6oxi">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid="0eq4p1c"
                                                >
                                                    Innovation
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid=":su.anv"
                                                >
                                                    Cutting-edge technology
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                                            data-oid="fbe4kx1"
                                        >
                                            <div
                                                className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"
                                                data-oid="966mhrk"
                                            >
                                                <span
                                                    className="text-green-600 text-sm"
                                                    data-oid="f5ebb8z"
                                                >
                                                    🤝
                                                </span>
                                            </div>
                                            <div data-oid="sy70xn8">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid="az0gon2"
                                                >
                                                    Collaboration
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid="0uicdyt"
                                                >
                                                    Team-first approach
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                                            data-oid="bqq-sg3"
                                        >
                                            <div
                                                className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center"
                                                data-oid="schqvl6"
                                            >
                                                <span
                                                    className="text-purple-600 text-sm"
                                                    data-oid="g.w2w6e"
                                                >
                                                    📈
                                                </span>
                                            </div>
                                            <div data-oid="z0sfso-">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid="5wvmf:t"
                                                >
                                                    Growth
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid="ug.n.1m"
                                                >
                                                    Career development
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                                            data-oid="mk8tmxj"
                                        >
                                            <div
                                                className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center"
                                                data-oid="wxfo0_p"
                                            >
                                                <span
                                                    className="text-orange-600 text-sm"
                                                    data-oid="iy7_tx7"
                                                >
                                                    ⚖️
                                                </span>
                                            </div>
                                            <div data-oid="d2zfwfc">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid="vv4-g0x"
                                                >
                                                    Work-Life Balance
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid="010v0st"
                                                >
                                                    Flexible working
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Office Locations */}
                                <div className="mt-6" data-oid="sp8ms1_">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="d4eypco"
                                    >
                                        Office Locations
                                    </h3>
                                    <div
                                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                        data-oid="386rmaw"
                                    >
                                        <div
                                            className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"
                                            data-oid="-gjfv-e"
                                        >
                                            <svg
                                                className="h-5 w-5 text-blue-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="d4ptihj"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                    data-oid="vr4p50d"
                                                />

                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                    data-oid=".wd64n."
                                                />
                                            </svg>
                                            <div data-oid="g1ab9q3">
                                                <div
                                                    className="font-medium text-gray-800"
                                                    data-oid="5f5us34"
                                                >
                                                    Headquarters
                                                </div>
                                                <div
                                                    className="text-sm text-gray-600"
                                                    data-oid="7si0uzj"
                                                >
                                                    {job.location}
                                                </div>
                                            </div>
                                        </div>
                                        {job.isRemote && (
                                            <div
                                                className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                                                data-oid="i6:9ewa"
                                            >
                                                <svg
                                                    className="h-5 w-5 text-green-600"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    data-oid="1s.4z6r"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        data-oid="han0_i5"
                                                    />
                                                </svg>
                                                <div data-oid="1n2q4o9">
                                                    <div
                                                        className="font-medium text-gray-800"
                                                        data-oid="3g97bmh"
                                                    >
                                                        Remote Work
                                                    </div>
                                                    <div
                                                        className="text-sm text-gray-600"
                                                        data-oid="-gkdcvo"
                                                    >
                                                        Work from anywhere
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Recent News & Updates */}
                                <div className="mt-6" data-oid="s3hthfl">
                                    <h3
                                        className="text-lg font-semibold text-gray-800 mb-3"
                                        data-oid="1xeu85c"
                                    >
                                        Recent Company Updates
                                    </h3>
                                    <div className="space-y-3" data-oid="a2_r9::">
                                        <div
                                            className="p-3 bg-gray-50 rounded-lg border-l-4 border-blue-500"
                                            data-oid="wc_se8w"
                                        >
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="7atneuv"
                                            >
                                                New Product Launch
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="n4wd0km"
                                            >
                                                Recently launched innovative solutions in{' '}
                                                {job.industry}
                                            </div>
                                        </div>
                                        <div
                                            className="p-3 bg-gray-50 rounded-lg border-l-4 border-green-500"
                                            data-oid="bt6w143"
                                        >
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="lt1kz4c"
                                            >
                                                Team Expansion
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid=":8dyp3j"
                                            >
                                                Growing team by 30% this year with focus on tech
                                                talent
                                            </div>
                                        </div>
                                        <div
                                            className="p-3 bg-gray-50 rounded-lg border-l-4 border-purple-500"
                                            data-oid="9kdczcd"
                                        >
                                            <div
                                                className="font-medium text-gray-800"
                                                data-oid="v_n77um"
                                            >
                                                Awards & Recognition
                                            </div>
                                            <div
                                                className="text-sm text-gray-600"
                                                data-oid="6k_w.uk"
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
                <div className="border-t border-gray-200 p-6 bg-gray-50" data-oid="l4hlfc.">
                    <div
                        className="flex flex-col sm:flex-row items-center justify-between gap-4"
                        data-oid="4_wzxnq"
                    >
                        <div className="text-sm text-gray-600" data-oid=":jt01__">
                            Posted on {formatDate(job.postedDate)} • {job.applicantCount} applicants
                        </div>
                        <div className="flex gap-3" data-oid="-q6aqsq">
                            <button
                                onClick={onClose}
                                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                                data-oid="a:v-ntd"
                            >
                                Close
                            </button>
                            <button
                                onClick={onApply}
                                className="px-8 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg"
                                data-oid="ss16-f1"
                            >
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="c3:9fyu"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                        data-oid="f_um9ph"
                                    />
                                </svg>
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Floating Apply Button - appears when scrolling */}
                <div className="fixed bottom-6 right-6 z-50" data-oid="zylv2ae">
                    <button
                        onClick={onApply}
                        className="px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-full font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-110 shadow-2xl flex items-center gap-2 animate-bounce"
                        data-oid="sz00fhb"
                    >
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="vk8wmw2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                data-oid="9wu1tsi"
                            />
                        </svg>
                        Quick Apply
                    </button>
                </div>
            </div>
        </div>
    );
}
