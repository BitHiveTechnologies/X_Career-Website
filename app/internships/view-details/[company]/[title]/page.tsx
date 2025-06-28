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
            <div className="min-h-screen bg-white" data-oid="upu:5g_">
                <MainNavbar data-oid="c.:uv6h" />
                <div className="max-w-4xl mx-auto px-4 py-16 text-center" data-oid="nwyw0s:">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4" data-oid="gawirhd">
                        Internship Not Found
                    </h1>
                    <p className="text-gray-600" data-oid="bag32uw">
                        The internship you're looking for doesn't exist.
                    </p>
                    <a
                        href="/internships"
                        className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        data-oid="9gwv:so"
                    >
                        Browse Internships
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50" data-oid="i0._zke">
            <MainNavbar data-oid="m.-7495" />

            <div className="max-w-6xl mx-auto px-4 py-8" data-oid="imu441s">
                <div className="grid lg:grid-cols-3 gap-8" data-oid=".xx:glv">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6" data-oid="8dde-yz">
                        {/* Header Card */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="a_lvgea">
                            <div
                                className="flex items-start justify-between mb-4"
                                data-oid="x8a87ei"
                            >
                                <div className="flex-1" data-oid="gkf112g">
                                    <div
                                        className="flex items-center gap-3 mb-2"
                                        data-oid="5cxw2km"
                                    >
                                        {internship.isUrgent && (
                                            <span
                                                className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse"
                                                data-oid="5.0ch:i"
                                            >
                                                🔥 URGENT HIRING
                                            </span>
                                        )}
                                        {internship.isFeatured && (
                                            <span
                                                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full"
                                                data-oid="x3bq1l-"
                                            >
                                                ⭐ FEATURED
                                            </span>
                                        )}
                                        {internship.isRemote && (
                                            <span
                                                className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full"
                                                data-oid="3ibqqdy"
                                            >
                                                🏠 Remote
                                            </span>
                                        )}
                                    </div>
                                    <h1
                                        className="text-3xl font-bold text-gray-800 mb-2"
                                        data-oid="kei986x"
                                    >
                                        {internship.title}
                                    </h1>
                                    <p
                                        className="text-xl text-blue-600 font-semibold mb-2"
                                        data-oid="3lxyxff"
                                    >
                                        {internship.company}
                                    </p>
                                    <div
                                        className="flex items-center gap-1 text-sm text-gray-600 mb-2"
                                        data-oid="qnwtb7-"
                                    >
                                        <span data-oid="m5de3zc">{internship.industry}</span>
                                        <span data-oid="_c:8arm">•</span>
                                        <span data-oid="qrmkp9-">{internship.companyType}</span>
                                        {internship.companySize && (
                                            <>
                                                <span data-oid="_6tliep">•</span>
                                                <span data-oid="5rvmhcn">
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
                                data-oid="ok26lvi"
                            >
                                <div className="flex items-center text-gray-600" data-oid=".aq1e-6">
                                    <svg
                                        className="h-5 w-5 mr-2 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="trmwuy5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            data-oid="s70fgau"
                                        />

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            data-oid="by-8nj0"
                                        />
                                    </svg>
                                    <div data-oid="qdvl6-0">
                                        <p className="text-xs text-gray-500" data-oid="z3g0iaw">
                                            Location
                                        </p>
                                        <p className="font-medium" data-oid="eao6:.j">
                                            {internship.location}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center text-gray-600" data-oid="4ff3hpa">
                                    <svg
                                        className="h-5 w-5 mr-2 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="8py2ffk"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            data-oid="h6tbvke"
                                        />
                                    </svg>
                                    <div data-oid="hzx7bxp">
                                        <p className="text-xs text-gray-500" data-oid="xhv04m.">
                                            Duration
                                        </p>
                                        <p className="font-medium" data-oid="ub9bp2i">
                                            {internship.duration}
                                        </p>
                                    </div>
                                </div>

                                {internship.stipend && (
                                    <div
                                        className="flex items-center text-gray-600"
                                        data-oid=".7kc6sc"
                                    >
                                        <svg
                                            className="h-5 w-5 mr-2 text-green-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="xq-:5qy"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                                                data-oid="gjs1l39"
                                            />
                                        </svg>
                                        <div data-oid="u:oapt6">
                                            <p className="text-xs text-gray-500" data-oid=".rwum52">
                                                Stipend
                                            </p>
                                            <p
                                                className="font-medium text-green-600"
                                                data-oid="y60zcms"
                                            >
                                                {internship.stipend}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                <div className="flex items-center text-gray-600" data-oid="igcrez:">
                                    <svg
                                        className="h-5 w-5 mr-2 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="990g8vv"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            data-oid="hlut7fb"
                                        />
                                    </svg>
                                    <div data-oid="1qsfysp">
                                        <p className="text-xs text-gray-500" data-oid="7kbjnxc">
                                            Posted
                                        </p>
                                        <p className="font-medium" data-oid="45nk3w5">
                                            {formatDate(internship.postedDate)}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-3" data-oid="wt3up:x">
                                <button
                                    onClick={handleApply}
                                    className="flex-1 min-w-[200px] px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                                    data-oid="vmwpkx4"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="hz9tmg5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                            data-oid="kzhsssr"
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
                                    data-oid="l25l1ja"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill={isSaved ? 'currentColor' : 'none'}
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="-zk9:at"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                            data-oid="j.qrwuz"
                                        />
                                    </svg>
                                </button>

                                <button
                                    onClick={handleShare}
                                    className="px-4 py-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-all duration-300"
                                    title="Share internship"
                                    data-oid="p41:wf3"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="y4er16k"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                                            data-oid="t1.-jvp"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="rrnw1f4">
                            <h2 className="text-xl font-bold text-gray-800 mb-4" data-oid="xibtf7d">
                                About this Internship
                            </h2>
                            <div className="prose max-w-none text-gray-600" data-oid="rfafjqm">
                                <p data-oid="tecpo-q">{internship.description}</p>

                                <h3
                                    className="text-lg font-semibold text-gray-800 mt-6 mb-3"
                                    data-oid="11vx_kc"
                                >
                                    What you'll learn:
                                </h3>
                                <ul className="list-disc list-inside space-y-1" data-oid="qyiawrq">
                                    <li data-oid="q.a_bo8">
                                        Hands-on experience with real-world projects
                                    </li>
                                    <li data-oid="kok-1e2">
                                        Industry best practices and professional development
                                    </li>
                                    <li data-oid="dpt2xk:">
                                        Mentorship from experienced professionals
                                    </li>
                                    <li data-oid="c8gk7._">
                                        Exposure to cutting-edge technologies and tools
                                    </li>
                                </ul>

                                <h3
                                    className="text-lg font-semibold text-gray-800 mt-6 mb-3"
                                    data-oid="nrv5sv_"
                                >
                                    Requirements:
                                </h3>
                                <ul className="list-disc list-inside space-y-1" data-oid="vfhmtn6">
                                    <li data-oid="0mkaa0s">
                                        Currently pursuing or recently completed relevant degree
                                    </li>
                                    <li data-oid="iupn.8e">
                                        Strong foundation in required technical skills
                                    </li>
                                    <li data-oid="i3o6699">
                                        Excellent communication and teamwork abilities
                                    </li>
                                    <li data-oid="ihgt8h2">
                                        Eagerness to learn and adapt to new challenges
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Skills Required */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="-9v6ibj">
                            <h2 className="text-xl font-bold text-gray-800 mb-4" data-oid="zqw7g94">
                                Skills Required
                            </h2>
                            <div className="flex flex-wrap gap-2" data-oid="u_1p_ar">
                                {internship.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                                        data-oid="9f_-a6j"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Benefits */}
                        {internship.benefits && internship.benefits.length > 0 && (
                            <div className="bg-white rounded-xl shadow-md p-6" data-oid="q9q9hh:">
                                <h2
                                    className="text-xl font-bold text-gray-800 mb-4"
                                    data-oid="0axrv8e"
                                >
                                    Benefits & Perks
                                </h2>
                                <div className="grid md:grid-cols-2 gap-3" data-oid="pk4lo4i">
                                    {internship.benefits.map((benefit, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center"
                                            data-oid=".usge75"
                                        >
                                            <svg
                                                className="h-5 w-5 text-green-500 mr-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="pmi4syl"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                    data-oid="ygm0tnw"
                                                />
                                            </svg>
                                            <span className="text-gray-700" data-oid="s4y55h6">
                                                {benefit}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-6" data-oid="s7akknv">
                        {/* Quick Apply Card */}
                        <div
                            className="bg-white rounded-xl shadow-md p-6 sticky top-24"
                            data-oid="gpj7gdt"
                        >
                            <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid="9ug49cx">
                                Quick Apply
                            </h3>

                            {internship.applicationDeadline && (
                                <div
                                    className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg"
                                    data-oid="3740f84"
                                >
                                    <div className="flex items-center" data-oid="8soddaj">
                                        <svg
                                            className="h-5 w-5 text-yellow-600 mr-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="881bt::"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                                                data-oid="x6bsw3w"
                                            />
                                        </svg>
                                        <div data-oid="5j083rk">
                                            <p
                                                className="text-sm font-medium text-yellow-800"
                                                data-oid="etdiwnf"
                                            >
                                                Application Deadline
                                            </p>
                                            <p
                                                className="text-sm text-yellow-700"
                                                data-oid="em3f5bb"
                                            >
                                                {formatDate(internship.applicationDeadline)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="space-y-3 mb-6" data-oid="l_rb.6t">
                                <div className="flex justify-between" data-oid="z086p_e">
                                    <span className="text-gray-600" data-oid="_fe:1oc">
                                        Type:
                                    </span>
                                    <span className="font-medium" data-oid="p2nmbzy">
                                        {internship.jobType}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid="6tsrrt4">
                                    <span className="text-gray-600" data-oid="apqfl3m">
                                        Duration:
                                    </span>
                                    <span className="font-medium" data-oid="rulb8h6">
                                        {internship.duration}
                                    </span>
                                </div>
                                {internship.startDate && (
                                    <div className="flex justify-between" data-oid="ewz:qux">
                                        <span className="text-gray-600" data-oid="bb68eks">
                                            Start Date:
                                        </span>
                                        <span className="font-medium" data-oid="qdz6xwt">
                                            {formatDate(internship.startDate)}
                                        </span>
                                    </div>
                                )}
                                {internship.applicantCount && (
                                    <div className="flex justify-between" data-oid="33pxd6l">
                                        <span className="text-gray-600" data-oid="trlh29o">
                                            Applicants:
                                        </span>
                                        <span className="font-medium" data-oid="hd9kl7o">
                                            {internship.applicantCount}
                                        </span>
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={handleApply}
                                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                data-oid="c_4-g07"
                            >
                                Apply Now
                            </button>
                        </div>

                        {/* Company Info */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="8:a-1ct">
                            <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid="h9zur8a">
                                About {internship.company}
                            </h3>
                            <div className="space-y-3" data-oid="qots-03">
                                <div className="flex justify-between" data-oid="od0scc.">
                                    <span className="text-gray-600" data-oid="e7nt8_y">
                                        Industry:
                                    </span>
                                    <span className="font-medium" data-oid="mece34t">
                                        {internship.industry}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid="02xlcth">
                                    <span className="text-gray-600" data-oid="d_sxfv9">
                                        Company Type:
                                    </span>
                                    <span className="font-medium" data-oid="xh1_g.1">
                                        {internship.companyType}
                                    </span>
                                </div>
                                {internship.companySize && (
                                    <div className="flex justify-between" data-oid="kyqocqr">
                                        <span className="text-gray-600" data-oid="ouxfveh">
                                            Company Size:
                                        </span>
                                        <span className="font-medium" data-oid="0oy79ws">
                                            {internship.companySize}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Similar Internships */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="49orl6.">
                            <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid="mt46i3_">
                                Similar Internships
                            </h3>
                            <div className="space-y-3" data-oid="z_h2.bk">
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
                                            data-oid="u:f3im7"
                                        >
                                            <h4
                                                className="font-medium text-gray-800 text-sm"
                                                data-oid="ui29_lh"
                                            >
                                                {similarInternship.title}
                                            </h4>
                                            <p className="text-blue-600 text-sm" data-oid="pi7s68q">
                                                {similarInternship.company}
                                            </p>
                                            <p className="text-gray-500 text-xs" data-oid="tuur_00">
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
