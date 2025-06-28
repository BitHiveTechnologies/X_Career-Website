'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import MainNavbar from '@/components/mainNavbar';
import { mockInternships } from '@/lib/mockData';
import type { Internship } from '@/lib/mockData';

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
            <div className="min-h-screen bg-white" data-oid="g-:su:l">
                <MainNavbar data-oid="qhavbum" />
                <div className="max-w-4xl mx-auto px-4 py-16 text-center" data-oid="ver4ulk">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4" data-oid="alk456o">
                        Internship Not Found
                    </h1>
                    <p className="text-gray-600" data-oid="qd4x74f">
                        The internship you're looking for doesn't exist.
                    </p>
                    <a
                        href="/internships"
                        className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        data-oid=".5p65y4"
                    >
                        Browse Internships
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50" data-oid="4xhta-z">
            <MainNavbar data-oid="igm8.uj" />

            <div className="max-w-6xl mx-auto px-4 py-8" data-oid="gr5.wm5">
                <div className="grid lg:grid-cols-3 gap-8" data-oid="fv6ax.p">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6" data-oid="1b_pkdu">
                        {/* Header Card */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="4x46glv">
                            <div
                                className="flex items-start justify-between mb-4"
                                data-oid="mvuz4q."
                            >
                                <div className="flex-1" data-oid="qph19wh">
                                    <div
                                        className="flex items-center gap-3 mb-2"
                                        data-oid="0_jforo"
                                    >
                                        {internship.isUrgent && (
                                            <span
                                                className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse"
                                                data-oid="gdr-k3w"
                                            >
                                                🔥 URGENT HIRING
                                            </span>
                                        )}
                                        {internship.isFeatured && (
                                            <span
                                                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full"
                                                data-oid="vbgqg-7"
                                            >
                                                ⭐ FEATURED
                                            </span>
                                        )}
                                        {internship.isRemote && (
                                            <span
                                                className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full"
                                                data-oid="-ad2epr"
                                            >
                                                🏠 Remote
                                            </span>
                                        )}
                                    </div>
                                    <h1
                                        className="text-3xl font-bold text-gray-800 mb-2"
                                        data-oid="0qvjd47"
                                    >
                                        {internship.title}
                                    </h1>
                                    <p
                                        className="text-xl text-blue-600 font-semibold mb-2"
                                        data-oid="d605pso"
                                    >
                                        {internship.company}
                                    </p>
                                    <div
                                        className="flex items-center gap-1 text-sm text-gray-600 mb-2"
                                        data-oid="n:sccp0"
                                    >
                                        <span data-oid="fbtfb85">{internship.industry}</span>
                                        <span data-oid="et2taaf">•</span>
                                        <span data-oid="o5rz:95">{internship.companyType}</span>
                                        {internship.companySize && (
                                            <>
                                                <span data-oid="qq2230h">•</span>
                                                <span data-oid="k887si5">
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
                                data-oid="xbsm0hw"
                            >
                                <div className="flex items-center text-gray-600" data-oid="_s2acyq">
                                    <svg
                                        className="h-5 w-5 mr-2 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="t2h3mp:"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            data-oid=".hqw6vl"
                                        />

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            data-oid="27ahpid"
                                        />
                                    </svg>
                                    <div data-oid="yn.fj_d">
                                        <p className="text-xs text-gray-500" data-oid="qe3w_kk">
                                            Location
                                        </p>
                                        <p className="font-medium" data-oid="r:hyd.h">
                                            {internship.location}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center text-gray-600" data-oid="r300jmz">
                                    <svg
                                        className="h-5 w-5 mr-2 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="yk:os9x"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            data-oid="rsfppsv"
                                        />
                                    </svg>
                                    <div data-oid="fa_z6yf">
                                        <p className="text-xs text-gray-500" data-oid="80p7-gz">
                                            Duration
                                        </p>
                                        <p className="font-medium" data-oid="hnw1c8y">
                                            {internship.duration}
                                        </p>
                                    </div>
                                </div>

                                {internship.stipend && (
                                    <div
                                        className="flex items-center text-gray-600"
                                        data-oid="rny7nzp"
                                    >
                                        <svg
                                            className="h-5 w-5 mr-2 text-green-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="irva4xc"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                                                data-oid="myp.mpp"
                                            />
                                        </svg>
                                        <div data-oid="4u3sivg">
                                            <p className="text-xs text-gray-500" data-oid="811f:hi">
                                                Stipend
                                            </p>
                                            <p
                                                className="font-medium text-green-600"
                                                data-oid="wjc8ewv"
                                            >
                                                {internship.stipend}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                <div className="flex items-center text-gray-600" data-oid="sp:hek3">
                                    <svg
                                        className="h-5 w-5 mr-2 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="jzwiewf"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            data-oid="ph54i4d"
                                        />
                                    </svg>
                                    <div data-oid="k5z9m-.">
                                        <p className="text-xs text-gray-500" data-oid="6phu2lb">
                                            Posted
                                        </p>
                                        <p className="font-medium" data-oid="794zmn_">
                                            {formatDate(internship.postedDate)}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-3" data-oid="rqfogdh">
                                <button
                                    onClick={handleApply}
                                    className="flex-1 min-w-[200px] px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                                    data-oid="aqvpv:k"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid=":ab0tfb"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                            data-oid="bu5-6wk"
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
                                    data-oid="a7i0jqq"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill={isSaved ? 'currentColor' : 'none'}
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="c77n9pt"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                            data-oid="m.2f2yd"
                                        />
                                    </svg>
                                </button>

                                <button
                                    onClick={handleShare}
                                    className="px-4 py-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-all duration-300"
                                    title="Share internship"
                                    data-oid="086.ho0"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="wu:2z6j"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                                            data-oid="donjw-5"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="sk-_9a6">
                            <h2 className="text-xl font-bold text-gray-800 mb-4" data-oid="mjnb_ie">
                                About this Internship
                            </h2>
                            <div className="prose max-w-none text-gray-600" data-oid="uz.zmfd">
                                <p data-oid="k1twu_k">{internship.description}</p>

                                <h3
                                    className="text-lg font-semibold text-gray-800 mt-6 mb-3"
                                    data-oid="4ea.d_j"
                                >
                                    What you'll learn:
                                </h3>
                                <ul className="list-disc list-inside space-y-1" data-oid="xb9rbpb">
                                    <li data-oid="fy970es">
                                        Hands-on experience with real-world projects
                                    </li>
                                    <li data-oid="ye6ogkm">
                                        Industry best practices and professional development
                                    </li>
                                    <li data-oid="2ewpk._">
                                        Mentorship from experienced professionals
                                    </li>
                                    <li data-oid="u66uo07">
                                        Exposure to cutting-edge technologies and tools
                                    </li>
                                </ul>

                                <h3
                                    className="text-lg font-semibold text-gray-800 mt-6 mb-3"
                                    data-oid="w0vybcs"
                                >
                                    Requirements:
                                </h3>
                                <ul className="list-disc list-inside space-y-1" data-oid="rhv_:s6">
                                    <li data-oid=":2qhh6u">
                                        Currently pursuing or recently completed relevant degree
                                    </li>
                                    <li data-oid="8ukxvvq">
                                        Strong foundation in required technical skills
                                    </li>
                                    <li data-oid="_xnl_ak">
                                        Excellent communication and teamwork abilities
                                    </li>
                                    <li data-oid="_yk48i:">
                                        Eagerness to learn and adapt to new challenges
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Skills Required */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="_lndl_g">
                            <h2 className="text-xl font-bold text-gray-800 mb-4" data-oid="jzty60k">
                                Skills Required
                            </h2>
                            <div className="flex flex-wrap gap-2" data-oid="akkxmc:">
                                {internship.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                                        data-oid="53t.2se"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Benefits */}
                        {internship.benefits && internship.benefits.length > 0 && (
                            <div className="bg-white rounded-xl shadow-md p-6" data-oid="zpym30o">
                                <h2
                                    className="text-xl font-bold text-gray-800 mb-4"
                                    data-oid="ka4-oiu"
                                >
                                    Benefits & Perks
                                </h2>
                                <div className="grid md:grid-cols-2 gap-3" data-oid="w1rz6x0">
                                    {internship.benefits.map((benefit, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center"
                                            data-oid="sa__onf"
                                        >
                                            <svg
                                                className="h-5 w-5 text-green-500 mr-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="ms2x9h6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                    data-oid="rsx9wz."
                                                />
                                            </svg>
                                            <span className="text-gray-700" data-oid="4m7hyev">
                                                {benefit}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-6" data-oid="cv9-1is">
                        {/* Quick Apply Card */}
                        <div
                            className="bg-white rounded-xl shadow-md p-6 sticky top-24"
                            data-oid="juorf4j"
                        >
                            <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid="bs9qj76">
                                Quick Apply
                            </h3>

                            {internship.applicationDeadline && (
                                <div
                                    className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg"
                                    data-oid="gbdivt6"
                                >
                                    <div className="flex items-center" data-oid="r0rvyj2">
                                        <svg
                                            className="h-5 w-5 text-yellow-600 mr-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="l5tmifs"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                                                data-oid="3fla3eu"
                                            />
                                        </svg>
                                        <div data-oid="x91n5vw">
                                            <p
                                                className="text-sm font-medium text-yellow-800"
                                                data-oid="f_6rd8n"
                                            >
                                                Application Deadline
                                            </p>
                                            <p
                                                className="text-sm text-yellow-700"
                                                data-oid="z3gsx7b"
                                            >
                                                {formatDate(internship.applicationDeadline)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="space-y-3 mb-6" data-oid="lg5tpt5">
                                <div className="flex justify-between" data-oid="84-gj:p">
                                    <span className="text-gray-600" data-oid="xw:naom">
                                        Type:
                                    </span>
                                    <span className="font-medium" data-oid="d.ntiuk">
                                        {internship.jobType}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid="smyaq0w">
                                    <span className="text-gray-600" data-oid="iviqj-7">
                                        Duration:
                                    </span>
                                    <span className="font-medium" data-oid="8a2m6vl">
                                        {internship.duration}
                                    </span>
                                </div>
                                {internship.startDate && (
                                    <div className="flex justify-between" data-oid="3aywgid">
                                        <span className="text-gray-600" data-oid="j04gs79">
                                            Start Date:
                                        </span>
                                        <span className="font-medium" data-oid="-o9cffn">
                                            {formatDate(internship.startDate)}
                                        </span>
                                    </div>
                                )}
                                {internship.applicantCount && (
                                    <div className="flex justify-between" data-oid="cyi3aw4">
                                        <span className="text-gray-600" data-oid="1a-m5_v">
                                            Applicants:
                                        </span>
                                        <span className="font-medium" data-oid="c.w5-zz">
                                            {internship.applicantCount}
                                        </span>
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={handleApply}
                                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                data-oid="lqp4xwi"
                            >
                                Apply Now
                            </button>
                        </div>

                        {/* Company Info */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="meb17lt">
                            <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid="xc3ag-t">
                                About {internship.company}
                            </h3>
                            <div className="space-y-3" data-oid="3l7ldnr">
                                <div className="flex justify-between" data-oid="snylrsg">
                                    <span className="text-gray-600" data-oid=":_tx-fh">
                                        Industry:
                                    </span>
                                    <span className="font-medium" data-oid="kju4-m5">
                                        {internship.industry}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid="n0zu5cs">
                                    <span className="text-gray-600" data-oid="rrhsron">
                                        Company Type:
                                    </span>
                                    <span className="font-medium" data-oid="ybs.0-6">
                                        {internship.companyType}
                                    </span>
                                </div>
                                {internship.companySize && (
                                    <div className="flex justify-between" data-oid="tbo09gf">
                                        <span className="text-gray-600" data-oid="5h4nhg2">
                                            Company Size:
                                        </span>
                                        <span className="font-medium" data-oid=".d3xu.s">
                                            {internship.companySize}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Similar Internships */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="_sp8p2n">
                            <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid="ygh0xq3">
                                Similar Internships
                            </h3>
                            <div className="space-y-3" data-oid="-_dw46c">
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
                                            data-oid="uq1tww6"
                                        >
                                            <h4
                                                className="font-medium text-gray-800 text-sm"
                                                data-oid="mu7b.jb"
                                            >
                                                {similarInternship.title}
                                            </h4>
                                            <p className="text-blue-600 text-sm" data-oid="mal46j3">
                                                {similarInternship.company}
                                            </p>
                                            <p className="text-gray-500 text-xs" data-oid="efbimio">
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
