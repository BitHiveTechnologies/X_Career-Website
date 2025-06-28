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
            <div className="min-h-screen bg-white" data-oid="wnfg0dt">
                <MainNavbar data-oid="sgw:x07" />
                <div className="max-w-4xl mx-auto px-4 py-16 text-center" data-oid="mnmrcpc">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4" data-oid="b.odrve">
                        Internship Not Found
                    </h1>
                    <p className="text-gray-600" data-oid="ey6fboc">
                        The internship you're looking for doesn't exist.
                    </p>
                    <a
                        href="/internships"
                        className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        data-oid=":gcdgjx"
                    >
                        Browse Internships
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50" data-oid="lovo7a5">
            <MainNavbar data-oid="sgqe6jh" />

            <div className="max-w-6xl mx-auto px-4 py-8" data-oid="y-02n9m">
                <div className="grid lg:grid-cols-3 gap-8" data-oid="o8vgzxk">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6" data-oid="bvl8z32">
                        {/* Header Card */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="k3o_n1c">
                            <div
                                className="flex items-start justify-between mb-4"
                                data-oid="y57nh-h"
                            >
                                <div className="flex-1" data-oid="xx7q5p9">
                                    <div
                                        className="flex items-center gap-3 mb-2"
                                        data-oid="bcagtr_"
                                    >
                                        {internship.isUrgent && (
                                            <span
                                                className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse"
                                                data-oid="of7unro"
                                            >
                                                🔥 URGENT HIRING
                                            </span>
                                        )}
                                        {internship.isFeatured && (
                                            <span
                                                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full"
                                                data-oid="zyq-ufh"
                                            >
                                                ⭐ FEATURED
                                            </span>
                                        )}
                                        {internship.isRemote && (
                                            <span
                                                className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full"
                                                data-oid="3a1.mq7"
                                            >
                                                🏠 Remote
                                            </span>
                                        )}
                                    </div>
                                    <h1
                                        className="text-3xl font-bold text-gray-800 mb-2"
                                        data-oid="1x8_e7u"
                                    >
                                        {internship.title}
                                    </h1>
                                    <p
                                        className="text-xl text-blue-600 font-semibold mb-2"
                                        data-oid="c4yiyfc"
                                    >
                                        {internship.company}
                                    </p>
                                    <div
                                        className="flex items-center gap-1 text-sm text-gray-600 mb-2"
                                        data-oid="eqh45ms"
                                    >
                                        <span data-oid="umg9t:l">{internship.industry}</span>
                                        <span data-oid="f06fzq6">•</span>
                                        <span data-oid="ouy_g_a">{internship.companyType}</span>
                                        {internship.companySize && (
                                            <>
                                                <span data-oid="g8.h8u5">•</span>
                                                <span data-oid="yqmhxok">
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
                                data-oid="odgs9:_"
                            >
                                <div className="flex items-center text-gray-600" data-oid="8weoabx">
                                    <svg
                                        className="h-5 w-5 mr-2 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="47he5d5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            data-oid="oyrqc_f"
                                        />

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            data-oid="g.rkt76"
                                        />
                                    </svg>
                                    <div data-oid="5z90:.w">
                                        <p className="text-xs text-gray-500" data-oid="kbzl:2:">
                                            Location
                                        </p>
                                        <p className="font-medium" data-oid="q:nwbav">
                                            {internship.location}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center text-gray-600" data-oid="liz-rv_">
                                    <svg
                                        className="h-5 w-5 mr-2 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="d1j8be8"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            data-oid=".py_:my"
                                        />
                                    </svg>
                                    <div data-oid="whgqg3_">
                                        <p className="text-xs text-gray-500" data-oid="r-ad7tb">
                                            Duration
                                        </p>
                                        <p className="font-medium" data-oid="op4a6mv">
                                            {internship.duration}
                                        </p>
                                    </div>
                                </div>

                                {internship.stipend && (
                                    <div
                                        className="flex items-center text-gray-600"
                                        data-oid="fzztu7s"
                                    >
                                        <svg
                                            className="h-5 w-5 mr-2 text-green-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="-9ub761"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                                                data-oid=".lsw2ra"
                                            />
                                        </svg>
                                        <div data-oid="_rx3-.7">
                                            <p className="text-xs text-gray-500" data-oid="h8_iff.">
                                                Stipend
                                            </p>
                                            <p
                                                className="font-medium text-green-600"
                                                data-oid="gyf35mn"
                                            >
                                                {internship.stipend}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                <div className="flex items-center text-gray-600" data-oid="m0llx11">
                                    <svg
                                        className="h-5 w-5 mr-2 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="v:ozf-f"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            data-oid="_qt84i2"
                                        />
                                    </svg>
                                    <div data-oid="a-gyiky">
                                        <p className="text-xs text-gray-500" data-oid="ov2.tdg">
                                            Posted
                                        </p>
                                        <p className="font-medium" data-oid="d9e3_h.">
                                            {formatDate(internship.postedDate)}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-3" data-oid="jl995r1">
                                <button
                                    onClick={handleApply}
                                    className="flex-1 min-w-[200px] px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                                    data-oid="z488vie"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="-_k8do6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                            data-oid="hxfh_i3"
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
                                    data-oid="36euldt"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill={isSaved ? 'currentColor' : 'none'}
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="s0nj3ej"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                            data-oid="q399vbe"
                                        />
                                    </svg>
                                </button>

                                <button
                                    onClick={handleShare}
                                    className="px-4 py-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-all duration-300"
                                    title="Share internship"
                                    data-oid="f_sxe.s"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="wlgt2l0"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                                            data-oid="mvfsuko"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="_wnydk4">
                            <h2 className="text-xl font-bold text-gray-800 mb-4" data-oid="w7o5cn1">
                                About this Internship
                            </h2>
                            <div className="prose max-w-none text-gray-600" data-oid="jocf45-">
                                <p data-oid="98w02z.">{internship.description}</p>

                                <h3
                                    className="text-lg font-semibold text-gray-800 mt-6 mb-3"
                                    data-oid=":r3ovm4"
                                >
                                    What you'll learn:
                                </h3>
                                <ul className="list-disc list-inside space-y-1" data-oid="7yveptr">
                                    <li data-oid="xnj4-pp">
                                        Hands-on experience with real-world projects
                                    </li>
                                    <li data-oid="zy-::em">
                                        Industry best practices and professional development
                                    </li>
                                    <li data-oid="_adu-2h">
                                        Mentorship from experienced professionals
                                    </li>
                                    <li data-oid="7dpx3m1">
                                        Exposure to cutting-edge technologies and tools
                                    </li>
                                </ul>

                                <h3
                                    className="text-lg font-semibold text-gray-800 mt-6 mb-3"
                                    data-oid="kyfmc:9"
                                >
                                    Requirements:
                                </h3>
                                <ul className="list-disc list-inside space-y-1" data-oid="ky3m:dq">
                                    <li data-oid="-inqaq9">
                                        Currently pursuing or recently completed relevant degree
                                    </li>
                                    <li data-oid="ze4i45o">
                                        Strong foundation in required technical skills
                                    </li>
                                    <li data-oid="wzb1ch1">
                                        Excellent communication and teamwork abilities
                                    </li>
                                    <li data-oid="kq3vnta">
                                        Eagerness to learn and adapt to new challenges
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Skills Required */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="u8-w:_s">
                            <h2 className="text-xl font-bold text-gray-800 mb-4" data-oid="c_b9p8u">
                                Skills Required
                            </h2>
                            <div className="flex flex-wrap gap-2" data-oid=":vn6gvc">
                                {internship.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                                        data-oid="_ernryl"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Benefits */}
                        {internship.benefits && internship.benefits.length > 0 && (
                            <div className="bg-white rounded-xl shadow-md p-6" data-oid="z9qc66m">
                                <h2
                                    className="text-xl font-bold text-gray-800 mb-4"
                                    data-oid="ktr6sms"
                                >
                                    Benefits & Perks
                                </h2>
                                <div className="grid md:grid-cols-2 gap-3" data-oid="aozb34l">
                                    {internship.benefits.map((benefit, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center"
                                            data-oid="t3-amr3"
                                        >
                                            <svg
                                                className="h-5 w-5 text-green-500 mr-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="1yct.k4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                    data-oid="5t1ppme"
                                                />
                                            </svg>
                                            <span className="text-gray-700" data-oid=":::z:wk">
                                                {benefit}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-6" data-oid="hu.htlo">
                        {/* Quick Apply Card */}
                        <div
                            className="bg-white rounded-xl shadow-md p-6 sticky top-24"
                            data-oid="unf-g2r"
                        >
                            <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid="3g.mqz4">
                                Quick Apply
                            </h3>

                            {internship.applicationDeadline && (
                                <div
                                    className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg"
                                    data-oid="_6iv3g."
                                >
                                    <div className="flex items-center" data-oid="qzfe6uf">
                                        <svg
                                            className="h-5 w-5 text-yellow-600 mr-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="_j5z7s6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                                                data-oid="ej5ink7"
                                            />
                                        </svg>
                                        <div data-oid="j8tger3">
                                            <p
                                                className="text-sm font-medium text-yellow-800"
                                                data-oid="qxcmsmo"
                                            >
                                                Application Deadline
                                            </p>
                                            <p
                                                className="text-sm text-yellow-700"
                                                data-oid="-ct5a.u"
                                            >
                                                {formatDate(internship.applicationDeadline)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="space-y-3 mb-6" data-oid="6ovrgc7">
                                <div className="flex justify-between" data-oid="z9n9jal">
                                    <span className="text-gray-600" data-oid="4tw8yrj">
                                        Type:
                                    </span>
                                    <span className="font-medium" data-oid="omi:vfx">
                                        {internship.jobType}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid="e2d8w6d">
                                    <span className="text-gray-600" data-oid=".avjy3y">
                                        Duration:
                                    </span>
                                    <span className="font-medium" data-oid="k0yajui">
                                        {internship.duration}
                                    </span>
                                </div>
                                {internship.startDate && (
                                    <div className="flex justify-between" data-oid="t..ihb2">
                                        <span className="text-gray-600" data-oid="tyqv4kz">
                                            Start Date:
                                        </span>
                                        <span className="font-medium" data-oid="5:hme1r">
                                            {formatDate(internship.startDate)}
                                        </span>
                                    </div>
                                )}
                                {internship.applicantCount && (
                                    <div className="flex justify-between" data-oid="e1652ur">
                                        <span className="text-gray-600" data-oid="jnaz9.9">
                                            Applicants:
                                        </span>
                                        <span className="font-medium" data-oid="kecrv0k">
                                            {internship.applicantCount}
                                        </span>
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={handleApply}
                                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                data-oid="_9ohltw"
                            >
                                Apply Now
                            </button>
                        </div>

                        {/* Company Info */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="z8dv5_d">
                            <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid="iq_sh14">
                                About {internship.company}
                            </h3>
                            <div className="space-y-3" data-oid="hhd9.k4">
                                <div className="flex justify-between" data-oid="o4fpp:1">
                                    <span className="text-gray-600" data-oid="zr-gid_">
                                        Industry:
                                    </span>
                                    <span className="font-medium" data-oid="43jo90a">
                                        {internship.industry}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid=".ub221a">
                                    <span className="text-gray-600" data-oid="jo7ntf.">
                                        Company Type:
                                    </span>
                                    <span className="font-medium" data-oid="33-riyz">
                                        {internship.companyType}
                                    </span>
                                </div>
                                {internship.companySize && (
                                    <div className="flex justify-between" data-oid="xpccpkp">
                                        <span className="text-gray-600" data-oid="3hnhbg:">
                                            Company Size:
                                        </span>
                                        <span className="font-medium" data-oid="2la_wct">
                                            {internship.companySize}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Similar Internships */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="rhoapyc">
                            <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid="2-_u:p3">
                                Similar Internships
                            </h3>
                            <div className="space-y-3" data-oid="ywr:pt-">
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
                                            data-oid="70_w-cf"
                                        >
                                            <h4
                                                className="font-medium text-gray-800 text-sm"
                                                data-oid="c0-c8g8"
                                            >
                                                {similarInternship.title}
                                            </h4>
                                            <p className="text-blue-600 text-sm" data-oid="-gb-te4">
                                                {similarInternship.company}
                                            </p>
                                            <p className="text-gray-500 text-xs" data-oid="z37rp1y">
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
