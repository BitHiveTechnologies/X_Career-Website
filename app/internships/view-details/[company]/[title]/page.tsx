'use client';

import MainNavbar from '@/components/mainNavbar';
import { mockInternships, type Internship } from '@/lib/mockData';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

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
            <div className="min-h-screen bg-white" data-oid="kyac-ze">
                <MainNavbar data-oid="tj6rbo-" />
                <div className="max-w-4xl mx-auto px-4 py-16 text-center" data-oid="szl..jr">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4" data-oid="x40aqvv">
                        Internship Not Found
                    </h1>
                    <p className="text-gray-600" data-oid="2f.b:mn">
                        The internship you're looking for doesn't exist.
                    </p>
                    <a
                        href="/internships"
                        className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        data-oid="075jl-a"
                    >
                        Browse Internships
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50" data-oid="f.6ievq">
            <MainNavbar data-oid="cy6-34s" />

            <div className="max-w-6xl mx-auto px-4 py-8" data-oid="nsmz8jm">
                <div className="grid lg:grid-cols-3 gap-8" data-oid="3pnduda">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6" data-oid="x63j_ea">
                        {/* Header Card */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="4:3ki01">
                            <div
                                className="flex items-start justify-between mb-4"
                                data-oid="lkbajgs"
                            >
                                <div className="flex-1" data-oid="862zgc7">
                                    <div
                                        className="flex items-center gap-3 mb-2"
                                        data-oid="mlfh-t5"
                                    >
                                        {internship.isUrgent && (
                                            <span
                                                className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse"
                                                data-oid="_kayeod"
                                            >
                                                🔥 URGENT HIRING
                                            </span>
                                        )}
                                        {internship.isFeatured && (
                                            <span
                                                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full"
                                                data-oid="z3e8c5j"
                                            >
                                                ⭐ FEATURED
                                            </span>
                                        )}
                                        {internship.isRemote && (
                                            <span
                                                className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full"
                                                data-oid="ntokxmz"
                                            >
                                                🏠 Remote
                                            </span>
                                        )}
                                    </div>
                                    <h1
                                        className="text-3xl font-bold text-gray-800 mb-2"
                                        data-oid="eq4d45f"
                                    >
                                        {internship.title}
                                    </h1>
                                    <p
                                        className="text-xl text-blue-600 font-semibold mb-2"
                                        data-oid="hyugbqv"
                                    >
                                        {internship.company}
                                    </p>
                                    <div
                                        className="flex items-center gap-1 text-sm text-gray-600 mb-2"
                                        data-oid="k_etaxb"
                                    >
                                        <span data-oid="ziyyeyg">{internship.industry}</span>
                                        <span data-oid="g6yp5b1">•</span>
                                        <span data-oid="mno6ap.">{internship.companyType}</span>
                                        {internship.companySize && (
                                            <>
                                                <span data-oid="ecsx_z1">•</span>
                                                <span data-oid="r5u56r8">
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
                                data-oid="f74f0:g"
                            >
                                <div className="flex items-center text-gray-600" data-oid="_kz39e-">
                                    <svg
                                        className="h-5 w-5 mr-2 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="qkvsvv_"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            data-oid="o.:qcyx"
                                        />

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            data-oid="o3xp.96"
                                        />
                                    </svg>
                                    <div data-oid="28o4:gh">
                                        <p className="text-xs text-gray-500" data-oid="7ja4t1l">
                                            Location
                                        </p>
                                        <p className="font-medium" data-oid="52zgpg:">
                                            {internship.location}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center text-gray-600" data-oid="iotvhc0">
                                    <svg
                                        className="h-5 w-5 mr-2 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="3lvgnqv"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            data-oid=".e_5w06"
                                        />
                                    </svg>
                                    <div data-oid="okxfmf9">
                                        <p className="text-xs text-gray-500" data-oid="9m8nlsg">
                                            Duration
                                        </p>
                                        <p className="font-medium" data-oid="ojaixr7">
                                            {internship.duration}
                                        </p>
                                    </div>
                                </div>

                                {internship.stipend && (
                                    <div
                                        className="flex items-center text-gray-600"
                                        data-oid="._bft3u"
                                    >
                                        <svg
                                            className="h-5 w-5 mr-2 text-green-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="xv12am4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                                                data-oid="g3fb1yj"
                                            />
                                        </svg>
                                        <div data-oid="71yg8md">
                                            <p className="text-xs text-gray-500" data-oid="zv2fehj">
                                                Stipend
                                            </p>
                                            <p
                                                className="font-medium text-green-600"
                                                data-oid="hbcd35h"
                                            >
                                                {internship.stipend}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                <div className="flex items-center text-gray-600" data-oid="39s5up1">
                                    <svg
                                        className="h-5 w-5 mr-2 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="xg6kfnf"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            data-oid="pouj54k"
                                        />
                                    </svg>
                                    <div data-oid="2qn9iit">
                                        <p className="text-xs text-gray-500" data-oid="9eg7r6q">
                                            Posted
                                        </p>
                                        <p className="font-medium" data-oid="o:.0joc">
                                            {formatDate(internship.postedDate)}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-3" data-oid="sdg6b9j">
                                <button
                                    onClick={handleApply}
                                    className="flex-1 min-w-[200px] px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                                    data-oid=":ti82h8"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="2tnswdi"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                            data-oid="m7d1ddx"
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
                                    data-oid="o.nv.z_"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill={isSaved ? 'currentColor' : 'none'}
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="zcm9:ba"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                            data-oid="fy38_zq"
                                        />
                                    </svg>
                                </button>

                                <button
                                    onClick={handleShare}
                                    className="px-4 py-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-all duration-300"
                                    title="Share internship"
                                    data-oid="a5u0eh4"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="c_05_1g"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                                            data-oid="ovg0ez9"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="atgol9u">
                            <h2 className="text-xl font-bold text-gray-800 mb-4" data-oid="f6es9a.">
                                About this Internship
                            </h2>
                            <div className="prose max-w-none text-gray-600" data-oid="ha-yiof">
                                <p data-oid="9mkwuc8">{internship.description}</p>

                                <h3
                                    className="text-lg font-semibold text-gray-800 mt-6 mb-3"
                                    data-oid="72.b0bi"
                                >
                                    What you'll learn:
                                </h3>
                                <ul className="list-disc list-inside space-y-1" data-oid="71zbu7q">
                                    <li data-oid="-blz73w">
                                        Hands-on experience with real-world projects
                                    </li>
                                    <li data-oid="ia_6p9-">
                                        Industry best practices and professional development
                                    </li>
                                    <li data-oid="zx5rc8o">
                                        Mentorship from experienced professionals
                                    </li>
                                    <li data-oid="9d1byqu">
                                        Exposure to cutting-edge technologies and tools
                                    </li>
                                </ul>

                                <h3
                                    className="text-lg font-semibold text-gray-800 mt-6 mb-3"
                                    data-oid="m0kgpzm"
                                >
                                    Requirements:
                                </h3>
                                <ul className="list-disc list-inside space-y-1" data-oid="1x7sg_k">
                                    <li data-oid="ag2u.84">
                                        Currently pursuing or recently completed relevant degree
                                    </li>
                                    <li data-oid="x_oois9">
                                        Strong foundation in required technical skills
                                    </li>
                                    <li data-oid="d_menxf">
                                        Excellent communication and teamwork abilities
                                    </li>
                                    <li data-oid="jky353p">
                                        Eagerness to learn and adapt to new challenges
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Skills Required */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="..t-po:">
                            <h2 className="text-xl font-bold text-gray-800 mb-4" data-oid="3bkcjnx">
                                Skills Required
                            </h2>
                            <div className="flex flex-wrap gap-2" data-oid="4toul90">
                                {internship.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                                        data-oid="06tb2oe"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Benefits */}
                        {internship.benefits && internship.benefits.length > 0 && (
                            <div className="bg-white rounded-xl shadow-md p-6" data-oid="xa:_rw.">
                                <h2
                                    className="text-xl font-bold text-gray-800 mb-4"
                                    data-oid="78r-ov5"
                                >
                                    Benefits & Perks
                                </h2>
                                <div className="grid md:grid-cols-2 gap-3" data-oid="l7s44n0">
                                    {internship.benefits.map((benefit, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center"
                                            data-oid="qa48.68"
                                        >
                                            <svg
                                                className="h-5 w-5 text-green-500 mr-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="wkcrvc7"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                    data-oid="900-i.y"
                                                />
                                            </svg>
                                            <span className="text-gray-700" data-oid="l52o804">
                                                {benefit}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-6" data-oid="ndvn:k5">
                        {/* Quick Apply Card */}
                        <div
                            className="bg-white rounded-xl shadow-md p-6 sticky top-24"
                            data-oid="kvlcfbw"
                        >
                            <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid="-h9ykug">
                                Quick Apply
                            </h3>

                            {internship.applicationDeadline && (
                                <div
                                    className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg"
                                    data-oid="_mhoom6"
                                >
                                    <div className="flex items-center" data-oid="e3vqr3q">
                                        <svg
                                            className="h-5 w-5 text-yellow-600 mr-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="e:6h1ne"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                                                data-oid="wypz.2l"
                                            />
                                        </svg>
                                        <div data-oid="g0u60x8">
                                            <p
                                                className="text-sm font-medium text-yellow-800"
                                                data-oid="bbiaqy:"
                                            >
                                                Application Deadline
                                            </p>
                                            <p
                                                className="text-sm text-yellow-700"
                                                data-oid="r54b..o"
                                            >
                                                {formatDate(internship.applicationDeadline)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="space-y-3 mb-6" data-oid="q-:dh24">
                                <div className="flex justify-between" data-oid="tw3heop">
                                    <span className="text-gray-600" data-oid="x89l8l4">
                                        Type:
                                    </span>
                                    <span className="font-medium" data-oid="ertur99">
                                        {internship.jobType}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid="u-awmsb">
                                    <span className="text-gray-600" data-oid="uikcxbm">
                                        Duration:
                                    </span>
                                    <span className="font-medium" data-oid="1rdx:dn">
                                        {internship.duration}
                                    </span>
                                </div>
                                {internship.startDate && (
                                    <div className="flex justify-between" data-oid="ihok.to">
                                        <span className="text-gray-600" data-oid="77k.2yh">
                                            Start Date:
                                        </span>
                                        <span className="font-medium" data-oid="43xtteb">
                                            {formatDate(internship.startDate)}
                                        </span>
                                    </div>
                                )}
                                {internship.applicantCount && (
                                    <div className="flex justify-between" data-oid="f:2:6l9">
                                        <span className="text-gray-600" data-oid="qme1g_n">
                                            Applicants:
                                        </span>
                                        <span className="font-medium" data-oid="ni.rpui">
                                            {internship.applicantCount}
                                        </span>
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={handleApply}
                                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                data-oid="et_o.o6"
                            >
                                Apply Now
                            </button>
                        </div>

                        {/* Company Info */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="_7bm:9l">
                            <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid="e9r598r">
                                About {internship.company}
                            </h3>
                            <div className="space-y-3" data-oid="e8hm:l0">
                                <div className="flex justify-between" data-oid="g_qge9c">
                                    <span className="text-gray-600" data-oid="jns0aix">
                                        Industry:
                                    </span>
                                    <span className="font-medium" data-oid="yhwghq4">
                                        {internship.industry}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid="1aa6mwc">
                                    <span className="text-gray-600" data-oid="7cb_oim">
                                        Company Type:
                                    </span>
                                    <span className="font-medium" data-oid="e8j0je-">
                                        {internship.companyType}
                                    </span>
                                </div>
                                {internship.companySize && (
                                    <div className="flex justify-between" data-oid=".4rmuat">
                                        <span className="text-gray-600" data-oid="54:af.s">
                                            Company Size:
                                        </span>
                                        <span className="font-medium" data-oid=".e_f4st">
                                            {internship.companySize}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Similar Internships */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="s:us91o">
                            <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid="wobbhcg">
                                Similar Internships
                            </h3>
                            <div className="space-y-3" data-oid="j5k7w07">
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
                                            data-oid="a3i.sw1"
                                        >
                                            <h4
                                                className="font-medium text-gray-800 text-sm"
                                                data-oid="rsvm9re"
                                            >
                                                {similarInternship.title}
                                            </h4>
                                            <p className="text-blue-600 text-sm" data-oid="au:fe:t">
                                                {similarInternship.company}
                                            </p>
                                            <p className="text-gray-500 text-xs" data-oid="lwnwi-j">
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
