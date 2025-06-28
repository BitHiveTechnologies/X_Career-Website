'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import MainNavbar from '@/components/mainNavbar';
import { mockInternships, type Internship } from '@/lib/mockData';

export default function InternshipDetailsPage() {
    const params = useParams();
    const [internship, setInternship] = useState<Internship | null>(null);
    const [isSaved, setIsSaved] = useState(false);

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

    const handleSave = () => {
        setIsSaved(!isSaved);
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: `${internship?.title} at ${internship?.company}`,
                text: `Check out this internship opportunity: ${internship?.title} at ${internship?.company}`,
                url: window.location.href,
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
        }
    };

    const handleApply = () => {
        if (internship) {
            const companySlug = internship.company
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^a-z0-9-]/g, '');
            const titleSlug = internship.title
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^a-z0-9-]/g, '');
            window.location.href = `/internships/apply/${companySlug}/${titleSlug}`;
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    if (!internship) {
        return (
            <div className="min-h-screen bg-white" data-oid="uzt1vxq">
                <MainNavbar data-oid="p659mwu" />
                <div className="max-w-4xl mx-auto px-4 py-16 text-center" data-oid="s5gvi.3">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4" data-oid="k46-y2r">
                        Internship Not Found
                    </h1>
                    <p className="text-gray-600" data-oid=".nl2xo0">
                        The internship you're looking for doesn't exist.
                    </p>
                    <a
                        href="/internships"
                        className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        data-oid="wxf_zt:"
                    >
                        Browse Internships
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50" data-oid=":_71fl-">
            <MainNavbar data-oid="vx3q458" />

            <div className="max-w-6xl mx-auto px-4 py-8" data-oid="h.lkye7">
                <div className="grid lg:grid-cols-3 gap-8" data-oid="gvobg59">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6" data-oid="0bnb5nr">
                        {/* Header Card */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="tq.7n15">
                            <div
                                className="flex items-start justify-between mb-4"
                                data-oid="y00_sgi"
                            >
                                <div className="flex-1" data-oid="tccqdim">
                                    <div
                                        className="flex items-center gap-3 mb-2"
                                        data-oid="9cjc--u"
                                    >
                                        {internship.isUrgent && (
                                            <span
                                                className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse"
                                                data-oid="mr9o1u:"
                                            >
                                                🔥 URGENT HIRING
                                            </span>
                                        )}
                                        {internship.isFeatured && (
                                            <span
                                                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full"
                                                data-oid="5vdik6n"
                                            >
                                                ⭐ FEATURED
                                            </span>
                                        )}
                                        {internship.isRemote && (
                                            <span
                                                className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full"
                                                data-oid=".plk84w"
                                            >
                                                🏠 Remote
                                            </span>
                                        )}
                                    </div>
                                    <h1
                                        className="text-3xl font-bold text-gray-800 mb-2"
                                        data-oid="o1d0t3c"
                                    >
                                        {internship.title}
                                    </h1>
                                    <p
                                        className="text-xl text-blue-600 font-semibold mb-2"
                                        data-oid="ws:5y.s"
                                    >
                                        {internship.company}
                                    </p>
                                    <div
                                        className="flex items-center gap-1 text-sm text-gray-600 mb-2"
                                        data-oid="u_kww6p"
                                    >
                                        <span data-oid="w.yqd1q">{internship.industry}</span>
                                        <span data-oid="gj1mvlq">•</span>
                                        <span data-oid="5oc1be2">{internship.companyType}</span>
                                        {internship.companySize && (
                                            <>
                                                <span data-oid="qd68ut5">•</span>
                                                <span data-oid="box.p1h">
                                                    {internship.companySize} employees
                                                </span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Key Details */}
                            <div
                                className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
                                data-oid="__peq4l"
                            >
                                <div className="flex items-center text-gray-600" data-oid="fhua_rw">
                                    <svg
                                        className="h-5 w-5 mr-2 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="fw_ni2l"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            data-oid="wh.onmi"
                                        />

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            data-oid="me:2dq3"
                                        />
                                    </svg>
                                    <div data-oid="8d68eh1">
                                        <p className="text-xs text-gray-500" data-oid="lfmc_1t">
                                            Location
                                        </p>
                                        <p className="font-medium" data-oid="5o6njm1">
                                            {internship.location}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center text-gray-600" data-oid="j.8ii82">
                                    <svg
                                        className="h-5 w-5 mr-2 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="ao:3hf3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            data-oid="zjek4w8"
                                        />
                                    </svg>
                                    <div data-oid="ck40b.c">
                                        <p className="text-xs text-gray-500" data-oid="pf8c3vg">
                                            Duration
                                        </p>
                                        <p className="font-medium" data-oid="k.kdeco">
                                            {internship.duration}
                                        </p>
                                    </div>
                                </div>

                                {internship.stipend && (
                                    <div
                                        className="flex items-center text-gray-600"
                                        data-oid="4fu:kmp"
                                    >
                                        <svg
                                            className="h-5 w-5 mr-2 text-green-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="a14jhqr"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                                                data-oid="1tki:b9"
                                            />
                                        </svg>
                                        <div data-oid="4my-0cl">
                                            <p className="text-xs text-gray-500" data-oid="4afzg8u">
                                                Stipend
                                            </p>
                                            <p
                                                className="font-medium text-green-600"
                                                data-oid="upni24a"
                                            >
                                                {internship.stipend}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                <div className="flex items-center text-gray-600" data-oid="4l6syto">
                                    <svg
                                        className="h-5 w-5 mr-2 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="huyj1s_"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            data-oid="osgeajg"
                                        />
                                    </svg>
                                    <div data-oid="n4tfvs:">
                                        <p className="text-xs text-gray-500" data-oid="7ngulkr">
                                            Posted
                                        </p>
                                        <p className="font-medium" data-oid="t6dxoe_">
                                            {formatDate(internship.postedDate)}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-3" data-oid="2n:g.nd">
                                <button
                                    onClick={handleApply}
                                    className="flex-1 min-w-[200px] px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                                    data-oid="jnq51h4"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="9j0ina7"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                            data-oid="n3wsdbi"
                                        />
                                    </svg>
                                    Apply for Internship
                                </button>

                                <button
                                    onClick={handleSave}
                                    className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                                        isSaved
                                            ? 'bg-red-100 text-red-600 hover:bg-red-200'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                                    title={isSaved ? 'Remove from saved' : 'Save internship'}
                                    data-oid="-qlekd3"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill={isSaved ? 'currentColor' : 'none'}
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="i:kyvjo"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                            data-oid="-5z2vp5"
                                        />
                                    </svg>
                                </button>

                                <button
                                    onClick={handleShare}
                                    className="px-4 py-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-all duration-300"
                                    title="Share internship"
                                    data-oid="qyhnvms"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="q:k1:9q"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                                            data-oid="87b05h2"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="0gq5o65">
                            <h2 className="text-xl font-bold text-gray-800 mb-4" data-oid="nnoxkuf">
                                About this Internship
                            </h2>
                            <div className="prose max-w-none text-gray-600" data-oid="79e33hc">
                                <p data-oid="st70uhe">{internship.description}</p>

                                <h3
                                    className="text-lg font-semibold text-gray-800 mt-6 mb-3"
                                    data-oid="j3ptd7c"
                                >
                                    What you'll learn:
                                </h3>
                                <ul className="list-disc list-inside space-y-1" data-oid="guepcz3">
                                    <li data-oid="ckzkfg9">
                                        Hands-on experience with real-world projects
                                    </li>
                                    <li data-oid="92lrv9o">
                                        Industry best practices and professional development
                                    </li>
                                    <li data-oid="t1_17-r">
                                        Mentorship from experienced professionals
                                    </li>
                                    <li data-oid="l0m-obt">
                                        Exposure to cutting-edge technologies and tools
                                    </li>
                                </ul>

                                <h3
                                    className="text-lg font-semibold text-gray-800 mt-6 mb-3"
                                    data-oid="qz-66d."
                                >
                                    Requirements:
                                </h3>
                                <ul className="list-disc list-inside space-y-1" data-oid="90z9yak">
                                    <li data-oid="k32jb:7">
                                        Currently pursuing or recently completed relevant degree
                                    </li>
                                    <li data-oid="4hmrnaz">
                                        Strong foundation in required technical skills
                                    </li>
                                    <li data-oid="93:kr77">
                                        Excellent communication and teamwork abilities
                                    </li>
                                    <li data-oid="k:jqfno">
                                        Eagerness to learn and adapt to new challenges
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Skills Required */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="4oz4et6">
                            <h2 className="text-xl font-bold text-gray-800 mb-4" data-oid="6d3j2jn">
                                Skills Required
                            </h2>
                            <div className="flex flex-wrap gap-2" data-oid="lk29_wy">
                                {internship.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                                        data-oid="zaa:k37"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Benefits */}
                        {internship.benefits && internship.benefits.length > 0 && (
                            <div className="bg-white rounded-xl shadow-md p-6" data-oid="9fzrt..">
                                <h2
                                    className="text-xl font-bold text-gray-800 mb-4"
                                    data-oid="0o9s_k0"
                                >
                                    Benefits & Perks
                                </h2>
                                <div className="grid md:grid-cols-2 gap-3" data-oid=".i9nc0:">
                                    {internship.benefits.map((benefit, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center"
                                            data-oid="gc2jy3e"
                                        >
                                            <svg
                                                className="h-5 w-5 text-green-500 mr-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="o7k44w:"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                    data-oid="xvglozw"
                                                />
                                            </svg>
                                            <span className="text-gray-700" data-oid="hm4..1c">
                                                {benefit}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-6" data-oid="bxx781k">
                        {/* Quick Apply Card */}
                        <div
                            className="bg-white rounded-xl shadow-md p-6 sticky top-24"
                            data-oid="mfpq23j"
                        >
                            <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid="mm15vl7">
                                Quick Apply
                            </h3>

                            {internship.applicationDeadline && (
                                <div
                                    className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg"
                                    data-oid="itw2-xy"
                                >
                                    <div className="flex items-center" data-oid="no4un6:">
                                        <svg
                                            className="h-5 w-5 text-yellow-600 mr-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="a9x64qv"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                                                data-oid="ztkxni0"
                                            />
                                        </svg>
                                        <div data-oid="8-:8mq6">
                                            <p
                                                className="text-sm font-medium text-yellow-800"
                                                data-oid=":u.hasc"
                                            >
                                                Application Deadline
                                            </p>
                                            <p
                                                className="text-sm text-yellow-700"
                                                data-oid="z20-j93"
                                            >
                                                {formatDate(internship.applicationDeadline)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="space-y-3 mb-6" data-oid="po2vdm5">
                                <div className="flex justify-between" data-oid="aq2iq2h">
                                    <span className="text-gray-600" data-oid="44o6k2i">
                                        Type:
                                    </span>
                                    <span className="font-medium" data-oid="hs.o9md">
                                        {internship.jobType}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid="9d:et_8">
                                    <span className="text-gray-600" data-oid="h1a278n">
                                        Duration:
                                    </span>
                                    <span className="font-medium" data-oid="e63zc7b">
                                        {internship.duration}
                                    </span>
                                </div>
                                {internship.startDate && (
                                    <div className="flex justify-between" data-oid="wee_jv1">
                                        <span className="text-gray-600" data-oid="wdcaojh">
                                            Start Date:
                                        </span>
                                        <span className="font-medium" data-oid="lw87oes">
                                            {formatDate(internship.startDate)}
                                        </span>
                                    </div>
                                )}
                                {internship.applicantCount && (
                                    <div className="flex justify-between" data-oid="xna4naq">
                                        <span className="text-gray-600" data-oid="ltp:v_e">
                                            Applicants:
                                        </span>
                                        <span className="font-medium" data-oid="7q5f:sk">
                                            {internship.applicantCount}
                                        </span>
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={handleApply}
                                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                data-oid="874u:ou"
                            >
                                Apply Now
                            </button>
                        </div>

                        {/* Company Info */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="had9fp_">
                            <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid="bu9yg66">
                                About {internship.company}
                            </h3>
                            <div className="space-y-3" data-oid="25oqps-">
                                <div className="flex justify-between" data-oid="9mrhwg2">
                                    <span className="text-gray-600" data-oid="88:8mhw">
                                        Industry:
                                    </span>
                                    <span className="font-medium" data-oid="0p0-nah">
                                        {internship.industry}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid="mnpgyt2">
                                    <span className="text-gray-600" data-oid="mug..-7">
                                        Company Type:
                                    </span>
                                    <span className="font-medium" data-oid="0nkojec">
                                        {internship.companyType}
                                    </span>
                                </div>
                                {internship.companySize && (
                                    <div className="flex justify-between" data-oid="lwj999j">
                                        <span className="text-gray-600" data-oid="zlp.rq-">
                                            Company Size:
                                        </span>
                                        <span className="font-medium" data-oid="ixl6k9a">
                                            {internship.companySize}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Similar Internships */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="-.tgjya">
                            <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid=":b.znq_">
                                Similar Internships
                            </h3>
                            <div className="space-y-3" data-oid="9-:e8go">
                                {mockInternships
                                    .filter(
                                        (i) =>
                                            i.id !== internship.id &&
                                            i.industry === internship.industry,
                                    )
                                    .slice(0, 3)
                                    .map((similarInternship) => (
                                        <div
                                            key={similarInternship.id}
                                            className="border border-gray-200 rounded-lg p-3 hover:border-blue-300 transition-colors"
                                            data-oid="zbs:z_c"
                                        >
                                            <h4
                                                className="font-medium text-gray-800 text-sm"
                                                data-oid="wn.dfsh"
                                            >
                                                {similarInternship.title}
                                            </h4>
                                            <p className="text-blue-600 text-sm" data-oid="dizq114">
                                                {similarInternship.company}
                                            </p>
                                            <p className="text-gray-500 text-xs" data-oid="gewcvok">
                                                {similarInternship.location}
                                            </p>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
