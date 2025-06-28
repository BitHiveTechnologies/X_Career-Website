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
            <div className="min-h-screen bg-white" data-oid="a:1o:an">
                <MainNavbar data-oid="wxw9knx" />
                <div className="max-w-4xl mx-auto px-4 py-16 text-center" data-oid="nl6acwh">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4" data-oid="2le7avx">
                        Internship Not Found
                    </h1>
                    <p className="text-gray-600" data-oid="gtjt826">
                        The internship you're looking for doesn't exist.
                    </p>
                    <a
                        href="/internships"
                        className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        data-oid="7uxyx1n"
                    >
                        Browse Internships
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50" data-oid="7pyts36">
            <MainNavbar data-oid="hf-nido" />

            <div className="max-w-6xl mx-auto px-4 py-8" data-oid="3ix7voj">
                <div className="grid lg:grid-cols-3 gap-8" data-oid="ixft-op">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6" data-oid="1qlyxz0">
                        {/* Header Card */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="ki9op.e">
                            <div
                                className="flex items-start justify-between mb-4"
                                data-oid="r47gcu8"
                            >
                                <div className="flex-1" data-oid="7im_wgh">
                                    <div
                                        className="flex items-center gap-3 mb-2"
                                        data-oid="cuef6ii"
                                    >
                                        {internship.isUrgent && (
                                            <span
                                                className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse"
                                                data-oid="::jw8r2"
                                            >
                                                🔥 URGENT HIRING
                                            </span>
                                        )}
                                        {internship.isFeatured && (
                                            <span
                                                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full"
                                                data-oid="4jok9:d"
                                            >
                                                ⭐ FEATURED
                                            </span>
                                        )}
                                        {internship.isRemote && (
                                            <span
                                                className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full"
                                                data-oid="27h1.0j"
                                            >
                                                🏠 Remote
                                            </span>
                                        )}
                                    </div>
                                    <h1
                                        className="text-3xl font-bold text-gray-800 mb-2"
                                        data-oid="f7xi613"
                                    >
                                        {internship.title}
                                    </h1>
                                    <p
                                        className="text-xl text-blue-600 font-semibold mb-2"
                                        data-oid="w:veb2v"
                                    >
                                        {internship.company}
                                    </p>
                                    <div
                                        className="flex items-center gap-1 text-sm text-gray-600 mb-2"
                                        data-oid=":dp7tb:"
                                    >
                                        <span data-oid="eeawl9b">{internship.industry}</span>
                                        <span data-oid="tvac2hp">•</span>
                                        <span data-oid="qfr5mo7">{internship.companyType}</span>
                                        {internship.companySize && (
                                            <>
                                                <span data-oid="w2jlcrb">•</span>
                                                <span data-oid="514n7om">
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
                                data-oid="cbc-hj5"
                            >
                                <div className="flex items-center text-gray-600" data-oid="56keucx">
                                    <svg
                                        className="h-5 w-5 mr-2 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="rangnk_"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            data-oid="5l79i-o"
                                        />

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            data-oid="44-c.dt"
                                        />
                                    </svg>
                                    <div data-oid="xyn-ect">
                                        <p className="text-xs text-gray-500" data-oid=".pjv2:c">
                                            Location
                                        </p>
                                        <p className="font-medium" data-oid="glsfvvy">
                                            {internship.location}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center text-gray-600" data-oid="d2r03ir">
                                    <svg
                                        className="h-5 w-5 mr-2 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="_k4dorw"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            data-oid="51d4ucj"
                                        />
                                    </svg>
                                    <div data-oid="m92jybk">
                                        <p className="text-xs text-gray-500" data-oid="t28gjce">
                                            Duration
                                        </p>
                                        <p className="font-medium" data-oid="jc5h15x">
                                            {internship.duration}
                                        </p>
                                    </div>
                                </div>

                                {internship.stipend && (
                                    <div
                                        className="flex items-center text-gray-600"
                                        data-oid="l5k.0w5"
                                    >
                                        <svg
                                            className="h-5 w-5 mr-2 text-green-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="11jzq85"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                                                data-oid="hsldday"
                                            />
                                        </svg>
                                        <div data-oid="ywu2o0s">
                                            <p className="text-xs text-gray-500" data-oid="ln_-d0s">
                                                Stipend
                                            </p>
                                            <p
                                                className="font-medium text-green-600"
                                                data-oid="h0kcioj"
                                            >
                                                {internship.stipend}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                <div className="flex items-center text-gray-600" data-oid="5dykhxs">
                                    <svg
                                        className="h-5 w-5 mr-2 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="fp0.ek8"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            data-oid="xqjn0-_"
                                        />
                                    </svg>
                                    <div data-oid="m5dvs:f">
                                        <p className="text-xs text-gray-500" data-oid="soxgy-v">
                                            Posted
                                        </p>
                                        <p className="font-medium" data-oid="y1ubrls">
                                            {formatDate(internship.postedDate)}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-3" data-oid="nkrgj27">
                                <button
                                    onClick={handleApply}
                                    className="flex-1 min-w-[200px] px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                                    data-oid="2yb5ljz"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="yfz1_tu"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                            data-oid=".faawtf"
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
                                    data-oid="d70e5f3"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill={isSaved ? 'currentColor' : 'none'}
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="yuc1l_:"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                            data-oid="ykvoykz"
                                        />
                                    </svg>
                                </button>

                                <button
                                    onClick={handleShare}
                                    className="px-4 py-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-all duration-300"
                                    title="Share internship"
                                    data-oid="bvpz-cf"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="klynt8t"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                                            data-oid="fx02k0n"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="2oqb7v2">
                            <h2 className="text-xl font-bold text-gray-800 mb-4" data-oid="xzlky9a">
                                About this Internship
                            </h2>
                            <div className="prose max-w-none text-gray-600" data-oid="qxzpbfp">
                                <p data-oid="l7dvd4y">{internship.description}</p>

                                <h3
                                    className="text-lg font-semibold text-gray-800 mt-6 mb-3"
                                    data-oid="j4cl2m6"
                                >
                                    What you'll learn:
                                </h3>
                                <ul className="list-disc list-inside space-y-1" data-oid="ev.bk4c">
                                    <li data-oid="yjc38mz">
                                        Hands-on experience with real-world projects
                                    </li>
                                    <li data-oid="t51_edn">
                                        Industry best practices and professional development
                                    </li>
                                    <li data-oid="rh_ozu9">
                                        Mentorship from experienced professionals
                                    </li>
                                    <li data-oid="yq:u3:7">
                                        Exposure to cutting-edge technologies and tools
                                    </li>
                                </ul>

                                <h3
                                    className="text-lg font-semibold text-gray-800 mt-6 mb-3"
                                    data-oid="..yq7mi"
                                >
                                    Requirements:
                                </h3>
                                <ul className="list-disc list-inside space-y-1" data-oid="e9d-7lt">
                                    <li data-oid="s3lao2y">
                                        Currently pursuing or recently completed relevant degree
                                    </li>
                                    <li data-oid="oc8z_js">
                                        Strong foundation in required technical skills
                                    </li>
                                    <li data-oid="850r6jr">
                                        Excellent communication and teamwork abilities
                                    </li>
                                    <li data-oid="jq8y2kq">
                                        Eagerness to learn and adapt to new challenges
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Skills Required */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="fo_m9r3">
                            <h2 className="text-xl font-bold text-gray-800 mb-4" data-oid=".ffzq4f">
                                Skills Required
                            </h2>
                            <div className="flex flex-wrap gap-2" data-oid="_qw61-s">
                                {internship.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                                        data-oid="m4cg8i8"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Benefits */}
                        {internship.benefits && internship.benefits.length > 0 && (
                            <div className="bg-white rounded-xl shadow-md p-6" data-oid="96o4573">
                                <h2
                                    className="text-xl font-bold text-gray-800 mb-4"
                                    data-oid="6eedj.0"
                                >
                                    Benefits & Perks
                                </h2>
                                <div className="grid md:grid-cols-2 gap-3" data-oid="hb990lo">
                                    {internship.benefits.map((benefit, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center"
                                            data-oid="mtfvqrx"
                                        >
                                            <svg
                                                className="h-5 w-5 text-green-500 mr-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="o9ebvfm"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                    data-oid="gnupe5u"
                                                />
                                            </svg>
                                            <span className="text-gray-700" data-oid="-oeq:yz">
                                                {benefit}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-6" data-oid="aoeyvbb">
                        {/* Quick Apply Card */}
                        <div
                            className="bg-white rounded-xl shadow-md p-6 sticky top-24"
                            data-oid="9vjwawe"
                        >
                            <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid="c1n.ihp">
                                Quick Apply
                            </h3>

                            {internship.applicationDeadline && (
                                <div
                                    className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg"
                                    data-oid="hg9pf1e"
                                >
                                    <div className="flex items-center" data-oid="wsad7:y">
                                        <svg
                                            className="h-5 w-5 text-yellow-600 mr-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="et.12eh"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                                                data-oid="ty:8zm5"
                                            />
                                        </svg>
                                        <div data-oid="4u585zs">
                                            <p
                                                className="text-sm font-medium text-yellow-800"
                                                data-oid="1w0vcok"
                                            >
                                                Application Deadline
                                            </p>
                                            <p
                                                className="text-sm text-yellow-700"
                                                data-oid="l49x.uu"
                                            >
                                                {formatDate(internship.applicationDeadline)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="space-y-3 mb-6" data-oid="636gc82">
                                <div className="flex justify-between" data-oid="bui8wqg">
                                    <span className="text-gray-600" data-oid="-gm0f9g">
                                        Type:
                                    </span>
                                    <span className="font-medium" data-oid="t-1d1dt">
                                        {internship.jobType}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid="4z--26_">
                                    <span className="text-gray-600" data-oid="icg6iow">
                                        Duration:
                                    </span>
                                    <span className="font-medium" data-oid="yxqxj4t">
                                        {internship.duration}
                                    </span>
                                </div>
                                {internship.startDate && (
                                    <div className="flex justify-between" data-oid="j9dr4cz">
                                        <span className="text-gray-600" data-oid="vfmjb9h">
                                            Start Date:
                                        </span>
                                        <span className="font-medium" data-oid="2ypj4tw">
                                            {formatDate(internship.startDate)}
                                        </span>
                                    </div>
                                )}
                                {internship.applicantCount && (
                                    <div className="flex justify-between" data-oid="2or3t3m">
                                        <span className="text-gray-600" data-oid="r75o4_w">
                                            Applicants:
                                        </span>
                                        <span className="font-medium" data-oid="kte2kmh">
                                            {internship.applicantCount}
                                        </span>
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={handleApply}
                                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                data-oid="p4e5ib9"
                            >
                                Apply Now
                            </button>
                        </div>

                        {/* Company Info */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="fs_x8xh">
                            <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid="eqbbwd6">
                                About {internship.company}
                            </h3>
                            <div className="space-y-3" data-oid="-:oww0h">
                                <div className="flex justify-between" data-oid="5x.80v4">
                                    <span className="text-gray-600" data-oid="19pjlfk">
                                        Industry:
                                    </span>
                                    <span className="font-medium" data-oid="u4hui3s">
                                        {internship.industry}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid="mc2:95-">
                                    <span className="text-gray-600" data-oid="vr52pgb">
                                        Company Type:
                                    </span>
                                    <span className="font-medium" data-oid="isq05mz">
                                        {internship.companyType}
                                    </span>
                                </div>
                                {internship.companySize && (
                                    <div className="flex justify-between" data-oid="g_q1x.n">
                                        <span className="text-gray-600" data-oid="aqagw54">
                                            Company Size:
                                        </span>
                                        <span className="font-medium" data-oid="jepofwz">
                                            {internship.companySize}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Similar Internships */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="y8c_8gw">
                            <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid="mwzye.0">
                                Similar Internships
                            </h3>
                            <div className="space-y-3" data-oid="qjd4i5f">
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
                                            data-oid="7kemg6o"
                                        >
                                            <h4
                                                className="font-medium text-gray-800 text-sm"
                                                data-oid="._m02r-"
                                            >
                                                {similarInternship.title}
                                            </h4>
                                            <p className="text-blue-600 text-sm" data-oid="h74-8du">
                                                {similarInternship.company}
                                            </p>
                                            <p className="text-gray-500 text-xs" data-oid="x0htbw0">
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
