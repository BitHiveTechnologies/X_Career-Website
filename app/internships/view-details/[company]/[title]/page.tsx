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
            <div className="min-h-screen bg-white" data-oid="i9_bney">
                <MainNavbar data-oid=":64xdta" />
                <div className="max-w-4xl mx-auto px-4 py-16 text-center" data-oid="bfgnj0b">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4" data-oid="v:wmyh1">
                        Internship Not Found
                    </h1>
                    <p className="text-gray-600" data-oid="a8bwtuh">
                        The internship you're looking for doesn't exist.
                    </p>
                    <a
                        href="/internships"
                        className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        data-oid="g2krpyh"
                    >
                        Browse Internships
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50" data-oid="i1.yal:">
            <MainNavbar data-oid="w-3hl:x" />

            <div className="max-w-6xl mx-auto px-4 py-8" data-oid="jc5grbc">
                <div className="grid lg:grid-cols-3 gap-8" data-oid="ltjdbrr">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6" data-oid="0yxir8m">
                        {/* Header Card */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="inwlwwn">
                            <div
                                className="flex items-start justify-between mb-4"
                                data-oid="iabuth0"
                            >
                                <div className="flex-1" data-oid="bq455f7">
                                    <div
                                        className="flex items-center gap-3 mb-2"
                                        data-oid="y4m7or-"
                                    >
                                        {internship.isUrgent && (
                                            <span
                                                className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse"
                                                data-oid="5815uuw"
                                            >
                                                🔥 URGENT HIRING
                                            </span>
                                        )}
                                        {internship.isFeatured && (
                                            <span
                                                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full"
                                                data-oid="tc_6r56"
                                            >
                                                ⭐ FEATURED
                                            </span>
                                        )}
                                        {internship.isRemote && (
                                            <span
                                                className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full"
                                                data-oid="is5a-ho"
                                            >
                                                🏠 Remote
                                            </span>
                                        )}
                                    </div>
                                    <h1
                                        className="text-3xl font-bold text-gray-800 mb-2"
                                        data-oid="bcmhns5"
                                    >
                                        {internship.title}
                                    </h1>
                                    <p
                                        className="text-xl text-blue-600 font-semibold mb-2"
                                        data-oid="2pav5ef"
                                    >
                                        {internship.company}
                                    </p>
                                    <div
                                        className="flex items-center gap-1 text-sm text-gray-600 mb-2"
                                        data-oid="iqhdqdf"
                                    >
                                        <span data-oid="p48wrzb">{internship.industry}</span>
                                        <span data-oid="e93k.j2">•</span>
                                        <span data-oid=".csx7dv">{internship.companyType}</span>
                                        {internship.companySize && (
                                            <>
                                                <span data-oid="efm1ohk">•</span>
                                                <span data-oid="ng:x2of">
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
                                data-oid="dlx7p.m"
                            >
                                <div className="flex items-center text-gray-600" data-oid="157xxsx">
                                    <svg
                                        className="h-5 w-5 mr-2 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="k7y_svc"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            data-oid="8yu2g2n"
                                        />

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            data-oid="m6out28"
                                        />
                                    </svg>
                                    <div data-oid="_234hgl">
                                        <p className="text-xs text-gray-500" data-oid="eydj4xf">
                                            Location
                                        </p>
                                        <p className="font-medium" data-oid="-6.zlsz">
                                            {internship.location}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center text-gray-600" data-oid="r6w2v8_">
                                    <svg
                                        className="h-5 w-5 mr-2 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="9q-r3s1"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            data-oid="242wj66"
                                        />
                                    </svg>
                                    <div data-oid="nqh4xv2">
                                        <p className="text-xs text-gray-500" data-oid="rwfohhm">
                                            Duration
                                        </p>
                                        <p className="font-medium" data-oid=":u9zjkk">
                                            {internship.duration}
                                        </p>
                                    </div>
                                </div>

                                {internship.stipend && (
                                    <div
                                        className="flex items-center text-gray-600"
                                        data-oid="ed4kj0j"
                                    >
                                        <svg
                                            className="h-5 w-5 mr-2 text-green-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="nskr:39"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                                                data-oid="4jbv-1y"
                                            />
                                        </svg>
                                        <div data-oid="ugpf8fo">
                                            <p className="text-xs text-gray-500" data-oid="dxbik93">
                                                Stipend
                                            </p>
                                            <p
                                                className="font-medium text-green-600"
                                                data-oid="6ejrwam"
                                            >
                                                {internship.stipend}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                <div className="flex items-center text-gray-600" data-oid="sk2bxj2">
                                    <svg
                                        className="h-5 w-5 mr-2 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid=".i6y5yd"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            data-oid="s0dkffk"
                                        />
                                    </svg>
                                    <div data-oid="jqufdon">
                                        <p className="text-xs text-gray-500" data-oid="77n7.8k">
                                            Posted
                                        </p>
                                        <p className="font-medium" data-oid="oe:6lhz">
                                            {formatDate(internship.postedDate)}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-3" data-oid="hn6:jt7">
                                <button
                                    onClick={handleApply}
                                    className="flex-1 min-w-[200px] px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                                    data-oid="9vhvi_7"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="948cmgw"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                            data-oid="jx.0i68"
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
                                    data-oid="84_q7g:"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill={isSaved ? 'currentColor' : 'none'}
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="gvspg_1"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                            data-oid="s1osbm2"
                                        />
                                    </svg>
                                </button>

                                <button
                                    onClick={handleShare}
                                    className="px-4 py-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-all duration-300"
                                    title="Share internship"
                                    data-oid="8f_i9hw"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid=".6f8lq9"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                                            data-oid="-houltk"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="5rry-bk">
                            <h2 className="text-xl font-bold text-gray-800 mb-4" data-oid="45598w8">
                                About this Internship
                            </h2>
                            <div className="prose max-w-none text-gray-600" data-oid="4lgvrlm">
                                <p data-oid="h8shzud">{internship.description}</p>

                                <h3
                                    className="text-lg font-semibold text-gray-800 mt-6 mb-3"
                                    data-oid="xw9l69d"
                                >
                                    What you'll learn:
                                </h3>
                                <ul className="list-disc list-inside space-y-1" data-oid="q260hsa">
                                    <li data-oid="_jec2s6">
                                        Hands-on experience with real-world projects
                                    </li>
                                    <li data-oid="4.cnw.j">
                                        Industry best practices and professional development
                                    </li>
                                    <li data-oid="797zev4">
                                        Mentorship from experienced professionals
                                    </li>
                                    <li data-oid="f:5hgj7">
                                        Exposure to cutting-edge technologies and tools
                                    </li>
                                </ul>

                                <h3
                                    className="text-lg font-semibold text-gray-800 mt-6 mb-3"
                                    data-oid="qu41kvw"
                                >
                                    Requirements:
                                </h3>
                                <ul className="list-disc list-inside space-y-1" data-oid="erbmukn">
                                    <li data-oid="bzfdh1w">
                                        Currently pursuing or recently completed relevant degree
                                    </li>
                                    <li data-oid="1ni0oia">
                                        Strong foundation in required technical skills
                                    </li>
                                    <li data-oid="p9ejdnc">
                                        Excellent communication and teamwork abilities
                                    </li>
                                    <li data-oid=":2.royj">
                                        Eagerness to learn and adapt to new challenges
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Skills Required */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="8_3_0ms">
                            <h2 className="text-xl font-bold text-gray-800 mb-4" data-oid="j9:9etk">
                                Skills Required
                            </h2>
                            <div className="flex flex-wrap gap-2" data-oid="..czs2d">
                                {internship.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                                        data-oid="p3h1_6j"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Benefits */}
                        {internship.benefits && internship.benefits.length > 0 && (
                            <div className="bg-white rounded-xl shadow-md p-6" data-oid="mzmky_:">
                                <h2
                                    className="text-xl font-bold text-gray-800 mb-4"
                                    data-oid="yyvh2rd"
                                >
                                    Benefits & Perks
                                </h2>
                                <div className="grid md:grid-cols-2 gap-3" data-oid="o6quxg0">
                                    {internship.benefits.map((benefit, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center"
                                            data-oid="4x:kapv"
                                        >
                                            <svg
                                                className="h-5 w-5 text-green-500 mr-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="p2u6y6j"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                    data-oid="4ojc5zw"
                                                />
                                            </svg>
                                            <span className="text-gray-700" data-oid="p8t:h:3">
                                                {benefit}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-6" data-oid="7t04ig-">
                        {/* Quick Apply Card */}
                        <div
                            className="bg-white rounded-xl shadow-md p-6 sticky top-24"
                            data-oid="hu4oxni"
                        >
                            <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid="kb-5881">
                                Quick Apply
                            </h3>

                            {internship.applicationDeadline && (
                                <div
                                    className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg"
                                    data-oid="p6oe77z"
                                >
                                    <div className="flex items-center" data-oid="rw39qb5">
                                        <svg
                                            className="h-5 w-5 text-yellow-600 mr-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="b5u1ele"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                                                data-oid="x870h2o"
                                            />
                                        </svg>
                                        <div data-oid="nlgfgfo">
                                            <p
                                                className="text-sm font-medium text-yellow-800"
                                                data-oid="in-ilbc"
                                            >
                                                Application Deadline
                                            </p>
                                            <p
                                                className="text-sm text-yellow-700"
                                                data-oid=".jswiq3"
                                            >
                                                {formatDate(internship.applicationDeadline)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="space-y-3 mb-6" data-oid="lvzvm2-">
                                <div className="flex justify-between" data-oid="knyng3y">
                                    <span className="text-gray-600" data-oid="rq.ka3a">
                                        Type:
                                    </span>
                                    <span className="font-medium" data-oid="tixgmex">
                                        {internship.jobType}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid="1pyehep">
                                    <span className="text-gray-600" data-oid="amfqww7">
                                        Duration:
                                    </span>
                                    <span className="font-medium" data-oid="zf7l5:r">
                                        {internship.duration}
                                    </span>
                                </div>
                                {internship.startDate && (
                                    <div className="flex justify-between" data-oid="whjarwc">
                                        <span className="text-gray-600" data-oid="0qv9n_y">
                                            Start Date:
                                        </span>
                                        <span className="font-medium" data-oid="1qm987h">
                                            {formatDate(internship.startDate)}
                                        </span>
                                    </div>
                                )}
                                {internship.applicantCount && (
                                    <div className="flex justify-between" data-oid="o2r7o45">
                                        <span className="text-gray-600" data-oid="enytfmu">
                                            Applicants:
                                        </span>
                                        <span className="font-medium" data-oid="8ktfoce">
                                            {internship.applicantCount}
                                        </span>
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={handleApply}
                                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                data-oid="pdsu5b-"
                            >
                                Apply Now
                            </button>
                        </div>

                        {/* Company Info */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="g0tt4lj">
                            <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid="u80n088">
                                About {internship.company}
                            </h3>
                            <div className="space-y-3" data-oid="yhv5f9v">
                                <div className="flex justify-between" data-oid="f5cs57u">
                                    <span className="text-gray-600" data-oid="g.hcl.m">
                                        Industry:
                                    </span>
                                    <span className="font-medium" data-oid="umocu-x">
                                        {internship.industry}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid="b7d-fii">
                                    <span className="text-gray-600" data-oid=":od_fps">
                                        Company Type:
                                    </span>
                                    <span className="font-medium" data-oid="kc:_3eu">
                                        {internship.companyType}
                                    </span>
                                </div>
                                {internship.companySize && (
                                    <div className="flex justify-between" data-oid="_dqr5:o">
                                        <span className="text-gray-600" data-oid="2:xgt.5">
                                            Company Size:
                                        </span>
                                        <span className="font-medium" data-oid="p8zooxb">
                                            {internship.companySize}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Similar Internships */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="sa6v_nw">
                            <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid="kfaf2dw">
                                Similar Internships
                            </h3>
                            <div className="space-y-3" data-oid=":vi-tic">
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
                                            data-oid="71i60ho"
                                        >
                                            <h4
                                                className="font-medium text-gray-800 text-sm"
                                                data-oid="4ev-4fv"
                                            >
                                                {similarInternship.title}
                                            </h4>
                                            <p className="text-blue-600 text-sm" data-oid="k-dl9zn">
                                                {similarInternship.company}
                                            </p>
                                            <p className="text-gray-500 text-xs" data-oid="ajw4wx.">
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
