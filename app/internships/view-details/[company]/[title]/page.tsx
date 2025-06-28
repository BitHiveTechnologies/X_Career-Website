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
            <div className="min-h-screen bg-white" data-oid="78me78i">
                <MainNavbar data-oid="okd_ax1" />
                <div className="max-w-4xl mx-auto px-4 py-16 text-center" data-oid="71oj2gd">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4" data-oid="xbd9j2y">
                        Internship Not Found
                    </h1>
                    <p className="text-gray-600" data-oid=":kt-.rn">
                        The internship you're looking for doesn't exist.
                    </p>
                    <a
                        href="/internships"
                        className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        data-oid="28kdequ"
                    >
                        Browse Internships
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50" data-oid="4jtbol3">
            <MainNavbar data-oid="vj4_4im" />

            <div className="max-w-6xl mx-auto px-4 py-8" data-oid="u6c7st0">
                <div className="grid lg:grid-cols-3 gap-8" data-oid="l._2qi7">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6" data-oid="3vkjn1o">
                        {/* Header Card */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="d-94vb1">
                            <div
                                className="flex items-start justify-between mb-4"
                                data-oid="xcwauci"
                            >
                                <div className="flex-1" data-oid="jtqn5fh">
                                    <div
                                        className="flex items-center gap-3 mb-2"
                                        data-oid="ofw_9z5"
                                    >
                                        {internship.isUrgent && (
                                            <span
                                                className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse"
                                                data-oid="5pgrubp"
                                            >
                                                🔥 URGENT HIRING
                                            </span>
                                        )}
                                        {internship.isFeatured && (
                                            <span
                                                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full"
                                                data-oid="hz-drlr"
                                            >
                                                ⭐ FEATURED
                                            </span>
                                        )}
                                        {internship.isRemote && (
                                            <span
                                                className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full"
                                                data-oid="_vwt_ey"
                                            >
                                                🏠 Remote
                                            </span>
                                        )}
                                    </div>
                                    <h1
                                        className="text-3xl font-bold text-gray-800 mb-2"
                                        data-oid="oa7c764"
                                    >
                                        {internship.title}
                                    </h1>
                                    <p
                                        className="text-xl text-blue-600 font-semibold mb-2"
                                        data-oid="1szqj6p"
                                    >
                                        {internship.company}
                                    </p>
                                    <div
                                        className="flex items-center gap-1 text-sm text-gray-600 mb-2"
                                        data-oid="ytyp_z-"
                                    >
                                        <span data-oid="sx0cvw8">{internship.industry}</span>
                                        <span data-oid="ix9g942">•</span>
                                        <span data-oid="rkiys74">{internship.companyType}</span>
                                        {internship.companySize && (
                                            <>
                                                <span data-oid="x13wflo">•</span>
                                                <span data-oid=":wn1ot8">
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
                                data-oid="2zc:2xj"
                            >
                                <div className="flex items-center text-gray-600" data-oid="xa7o40:">
                                    <svg
                                        className="h-5 w-5 mr-2 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid=".zg8vl2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            data-oid="6.j:2b8"
                                        />

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            data-oid="nj_arkw"
                                        />
                                    </svg>
                                    <div data-oid="-tr7_pt">
                                        <p className="text-xs text-gray-500" data-oid="qyxr02s">
                                            Location
                                        </p>
                                        <p className="font-medium" data-oid="pce2jg9">
                                            {internship.location}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center text-gray-600" data-oid="icis6w.">
                                    <svg
                                        className="h-5 w-5 mr-2 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="kzjrgg."
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            data-oid="xv84573"
                                        />
                                    </svg>
                                    <div data-oid="j1qzu7-">
                                        <p className="text-xs text-gray-500" data-oid="7jufa10">
                                            Duration
                                        </p>
                                        <p className="font-medium" data-oid="h9v606:">
                                            {internship.duration}
                                        </p>
                                    </div>
                                </div>

                                {internship.stipend && (
                                    <div
                                        className="flex items-center text-gray-600"
                                        data-oid="pt4uh.4"
                                    >
                                        <svg
                                            className="h-5 w-5 mr-2 text-green-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="zkdnmr0"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                                                data-oid="-.1kn3-"
                                            />
                                        </svg>
                                        <div data-oid="-bc.u3f">
                                            <p className="text-xs text-gray-500" data-oid="36j1:lp">
                                                Stipend
                                            </p>
                                            <p
                                                className="font-medium text-green-600"
                                                data-oid="le0.4xx"
                                            >
                                                {internship.stipend}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                <div className="flex items-center text-gray-600" data-oid="nznef6r">
                                    <svg
                                        className="h-5 w-5 mr-2 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="ywlesfz"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            data-oid="i.7wyc4"
                                        />
                                    </svg>
                                    <div data-oid="guit99v">
                                        <p className="text-xs text-gray-500" data-oid="t6k3q13">
                                            Posted
                                        </p>
                                        <p className="font-medium" data-oid="ngkid0o">
                                            {formatDate(internship.postedDate)}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-3" data-oid="41_7k64">
                                <button
                                    onClick={handleApply}
                                    className="flex-1 min-w-[200px] px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                                    data-oid="t0:f5lu"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="cz6lg6g"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                            data-oid="7udl2fm"
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
                                    data-oid="knpa12n"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill={isSaved ? 'currentColor' : 'none'}
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="3gqvz9u"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                            data-oid="401f4ol"
                                        />
                                    </svg>
                                </button>

                                <button
                                    onClick={handleShare}
                                    className="px-4 py-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-all duration-300"
                                    title="Share internship"
                                    data-oid="m34ymky"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="tou2u:n"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                                            data-oid="kseaqi6"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="fvq_9qy">
                            <h2 className="text-xl font-bold text-gray-800 mb-4" data-oid="-e_trb-">
                                About this Internship
                            </h2>
                            <div className="prose max-w-none text-gray-600" data-oid="ok::su7">
                                <p data-oid="dbc32i8">{internship.description}</p>

                                <h3
                                    className="text-lg font-semibold text-gray-800 mt-6 mb-3"
                                    data-oid="vk9201b"
                                >
                                    What you'll learn:
                                </h3>
                                <ul className="list-disc list-inside space-y-1" data-oid="omf43f0">
                                    <li data-oid="wvcqj-y">
                                        Hands-on experience with real-world projects
                                    </li>
                                    <li data-oid="00ow2-u">
                                        Industry best practices and professional development
                                    </li>
                                    <li data-oid="zyi6nzi">
                                        Mentorship from experienced professionals
                                    </li>
                                    <li data-oid="qhqd93.">
                                        Exposure to cutting-edge technologies and tools
                                    </li>
                                </ul>

                                <h3
                                    className="text-lg font-semibold text-gray-800 mt-6 mb-3"
                                    data-oid="ta0omo."
                                >
                                    Requirements:
                                </h3>
                                <ul className="list-disc list-inside space-y-1" data-oid="634bq_p">
                                    <li data-oid="s_hxrre">
                                        Currently pursuing or recently completed relevant degree
                                    </li>
                                    <li data-oid="xc4707a">
                                        Strong foundation in required technical skills
                                    </li>
                                    <li data-oid="i-yrj29">
                                        Excellent communication and teamwork abilities
                                    </li>
                                    <li data-oid="mm8w.z1">
                                        Eagerness to learn and adapt to new challenges
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Skills Required */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="vazu445">
                            <h2 className="text-xl font-bold text-gray-800 mb-4" data-oid="5vdrxof">
                                Skills Required
                            </h2>
                            <div className="flex flex-wrap gap-2" data-oid="z_0_1-2">
                                {internship.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                                        data-oid="fjoqeks"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Benefits */}
                        {internship.benefits && internship.benefits.length > 0 && (
                            <div className="bg-white rounded-xl shadow-md p-6" data-oid="9_56a-.">
                                <h2
                                    className="text-xl font-bold text-gray-800 mb-4"
                                    data-oid="l2vs4lb"
                                >
                                    Benefits & Perks
                                </h2>
                                <div className="grid md:grid-cols-2 gap-3" data-oid="263ppgb">
                                    {internship.benefits.map((benefit, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center"
                                            data-oid=":u12.ot"
                                        >
                                            <svg
                                                className="h-5 w-5 text-green-500 mr-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="k6n.8es"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                    data-oid=".hz_yki"
                                                />
                                            </svg>
                                            <span className="text-gray-700" data-oid="culema_">
                                                {benefit}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-6" data-oid=":gar90x">
                        {/* Quick Apply Card */}
                        <div
                            className="bg-white rounded-xl shadow-md p-6 sticky top-24"
                            data-oid="v4gxzrq"
                        >
                            <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid="_i37ocz">
                                Quick Apply
                            </h3>

                            {internship.applicationDeadline && (
                                <div
                                    className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg"
                                    data-oid="w7:qwmt"
                                >
                                    <div className="flex items-center" data-oid="k5ytx7s">
                                        <svg
                                            className="h-5 w-5 text-yellow-600 mr-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="7.5q4e4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                                                data-oid="iu2g4v."
                                            />
                                        </svg>
                                        <div data-oid="l6mkf58">
                                            <p
                                                className="text-sm font-medium text-yellow-800"
                                                data-oid="osv5k9k"
                                            >
                                                Application Deadline
                                            </p>
                                            <p
                                                className="text-sm text-yellow-700"
                                                data-oid="s:v3cqr"
                                            >
                                                {formatDate(internship.applicationDeadline)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="space-y-3 mb-6" data-oid="s8y825_">
                                <div className="flex justify-between" data-oid="juug1cz">
                                    <span className="text-gray-600" data-oid="u2nk8vc">
                                        Type:
                                    </span>
                                    <span className="font-medium" data-oid="a:7avw.">
                                        {internship.jobType}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid="-1jmzxi">
                                    <span className="text-gray-600" data-oid="._1o-1x">
                                        Duration:
                                    </span>
                                    <span className="font-medium" data-oid="a-2b_:f">
                                        {internship.duration}
                                    </span>
                                </div>
                                {internship.startDate && (
                                    <div className="flex justify-between" data-oid="i7vu9kd">
                                        <span className="text-gray-600" data-oid="k7qjqyb">
                                            Start Date:
                                        </span>
                                        <span className="font-medium" data-oid="hv20fm2">
                                            {formatDate(internship.startDate)}
                                        </span>
                                    </div>
                                )}
                                {internship.applicantCount && (
                                    <div className="flex justify-between" data-oid="4o8j.ol">
                                        <span className="text-gray-600" data-oid="uel_udv">
                                            Applicants:
                                        </span>
                                        <span className="font-medium" data-oid="bj9r.ab">
                                            {internship.applicantCount}
                                        </span>
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={handleApply}
                                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                data-oid="9_3xbcx"
                            >
                                Apply Now
                            </button>
                        </div>

                        {/* Company Info */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="kmtmjgd">
                            <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid="zu7pxke">
                                About {internship.company}
                            </h3>
                            <div className="space-y-3" data-oid=".8lavhg">
                                <div className="flex justify-between" data-oid="e90uj70">
                                    <span className="text-gray-600" data-oid="r0rgq5_">
                                        Industry:
                                    </span>
                                    <span className="font-medium" data-oid="nsgq:vb">
                                        {internship.industry}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid="s7iqfqw">
                                    <span className="text-gray-600" data-oid="ol3t1dq">
                                        Company Type:
                                    </span>
                                    <span className="font-medium" data-oid="donuqu_">
                                        {internship.companyType}
                                    </span>
                                </div>
                                {internship.companySize && (
                                    <div className="flex justify-between" data-oid="19t9iq5">
                                        <span className="text-gray-600" data-oid="5iqg.v0">
                                            Company Size:
                                        </span>
                                        <span className="font-medium" data-oid="my_2b1w">
                                            {internship.companySize}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Similar Internships */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="f_-gbda">
                            <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid="7cnzrr4">
                                Similar Internships
                            </h3>
                            <div className="space-y-3" data-oid="z-ay7sl">
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
                                            data-oid="49lk4wf"
                                        >
                                            <h4
                                                className="font-medium text-gray-800 text-sm"
                                                data-oid="p5rfs86"
                                            >
                                                {similarInternship.title}
                                            </h4>
                                            <p className="text-blue-600 text-sm" data-oid="590_ijj">
                                                {similarInternship.company}
                                            </p>
                                            <p className="text-gray-500 text-xs" data-oid="gn9j_40">
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
