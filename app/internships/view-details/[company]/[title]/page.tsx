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
            <div className="min-h-screen bg-white" data-oid="ynr6oxm">
                <MainNavbar data-oid="02vsm3t" />
                <div className="max-w-4xl mx-auto px-4 py-16 text-center" data-oid="ekbpx-v">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4" data-oid="q0.a_jd">
                        Internship Not Found
                    </h1>
                    <p className="text-gray-600" data-oid="gk0r_2.">
                        The internship you're looking for doesn't exist.
                    </p>
                    <a
                        href="/internships"
                        className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        data-oid="yvt3y7z"
                    >
                        Browse Internships
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50" data-oid="wxiyov5">
            <MainNavbar data-oid="7iqha43" />

            <div className="max-w-6xl mx-auto px-4 py-8" data-oid="6ek3w0i">
                <div className="grid lg:grid-cols-3 gap-8" data-oid="kz:h_1n">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6" data-oid="5w7-25s">
                        {/* Header Card */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="3tbwjr1">
                            <div
                                className="flex items-start justify-between mb-4"
                                data-oid="qm5n4m4"
                            >
                                <div className="flex-1" data-oid="p477.v6">
                                    <div
                                        className="flex items-center gap-3 mb-2"
                                        data-oid="abe347z"
                                    >
                                        {internship.isUrgent && (
                                            <span
                                                className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse"
                                                data-oid="-y8:o16"
                                            >
                                                🔥 URGENT HIRING
                                            </span>
                                        )}
                                        {internship.isFeatured && (
                                            <span
                                                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full"
                                                data-oid="uz:cm-2"
                                            >
                                                ⭐ FEATURED
                                            </span>
                                        )}
                                        {internship.isRemote && (
                                            <span
                                                className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full"
                                                data-oid="n:l3m0g"
                                            >
                                                🏠 Remote
                                            </span>
                                        )}
                                    </div>
                                    <h1
                                        className="text-3xl font-bold text-gray-800 mb-2"
                                        data-oid="_s8doj0"
                                    >
                                        {internship.title}
                                    </h1>
                                    <p
                                        className="text-xl text-blue-600 font-semibold mb-2"
                                        data-oid="_iqpj3w"
                                    >
                                        {internship.company}
                                    </p>
                                    <div
                                        className="flex items-center gap-1 text-sm text-gray-600 mb-2"
                                        data-oid="i:9ycvw"
                                    >
                                        <span data-oid="ns3vp.z">{internship.industry}</span>
                                        <span data-oid="mkdhas:">•</span>
                                        <span data-oid="eatdu0e">{internship.companyType}</span>
                                        {internship.companySize && (
                                            <>
                                                <span data-oid="p-79bm5">•</span>
                                                <span data-oid="hjr1olx">
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
                                data-oid="2d002ia"
                            >
                                <div className="flex items-center text-gray-600" data-oid="wdkpi4o">
                                    <svg
                                        className="h-5 w-5 mr-2 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="4:mmuty"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            data-oid="4:j6.uh"
                                        />

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            data-oid="kif1-4b"
                                        />
                                    </svg>
                                    <div data-oid="s4qi_iu">
                                        <p className="text-xs text-gray-500" data-oid="ib3j70p">
                                            Location
                                        </p>
                                        <p className="font-medium" data-oid="lsnriz6">
                                            {internship.location}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center text-gray-600" data-oid="ypsq:ug">
                                    <svg
                                        className="h-5 w-5 mr-2 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid=":wy34rq"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            data-oid="6ffynxj"
                                        />
                                    </svg>
                                    <div data-oid="mvgubtm">
                                        <p className="text-xs text-gray-500" data-oid="wpt61-o">
                                            Duration
                                        </p>
                                        <p className="font-medium" data-oid="v1:w4.l">
                                            {internship.duration}
                                        </p>
                                    </div>
                                </div>

                                {internship.stipend && (
                                    <div
                                        className="flex items-center text-gray-600"
                                        data-oid="9dhsk-m"
                                    >
                                        <svg
                                            className="h-5 w-5 mr-2 text-green-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="0-y32sc"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                                                data-oid="2jtz_6m"
                                            />
                                        </svg>
                                        <div data-oid="h.66c_.">
                                            <p className="text-xs text-gray-500" data-oid="id7ecv9">
                                                Stipend
                                            </p>
                                            <p
                                                className="font-medium text-green-600"
                                                data-oid="4v4zd3j"
                                            >
                                                {internship.stipend}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                <div className="flex items-center text-gray-600" data-oid="c53q:ub">
                                    <svg
                                        className="h-5 w-5 mr-2 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="v_cika_"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            data-oid="_:yci05"
                                        />
                                    </svg>
                                    <div data-oid="azeyhxy">
                                        <p className="text-xs text-gray-500" data-oid="6en1_0v">
                                            Posted
                                        </p>
                                        <p className="font-medium" data-oid="58htnnp">
                                            {formatDate(internship.postedDate)}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-3" data-oid="57le9m2">
                                <button
                                    onClick={handleApply}
                                    className="flex-1 min-w-[200px] px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                                    data-oid="b6qiw.z"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="fw7ahkz"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                            data-oid="-.4odd."
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
                                    data-oid="htpf:7:"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill={isSaved ? 'currentColor' : 'none'}
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="idx47-i"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                            data-oid="jep92t5"
                                        />
                                    </svg>
                                </button>

                                <button
                                    onClick={handleShare}
                                    className="px-4 py-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-all duration-300"
                                    title="Share internship"
                                    data-oid="c1y93kx"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="h0fl7ef"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                                            data-oid="u951.8y"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="7.ve:wq">
                            <h2 className="text-xl font-bold text-gray-800 mb-4" data-oid="12qmq26">
                                About this Internship
                            </h2>
                            <div className="prose max-w-none text-gray-600" data-oid="tq8:ndg">
                                <p data-oid="j_6v50m">{internship.description}</p>

                                <h3
                                    className="text-lg font-semibold text-gray-800 mt-6 mb-3"
                                    data-oid="1py_9q8"
                                >
                                    What you'll learn:
                                </h3>
                                <ul className="list-disc list-inside space-y-1" data-oid="ddxdbl-">
                                    <li data-oid="m6v47st">
                                        Hands-on experience with real-world projects
                                    </li>
                                    <li data-oid="di__pmn">
                                        Industry best practices and professional development
                                    </li>
                                    <li data-oid="n9-4qbh">
                                        Mentorship from experienced professionals
                                    </li>
                                    <li data-oid="gncy-ow">
                                        Exposure to cutting-edge technologies and tools
                                    </li>
                                </ul>

                                <h3
                                    className="text-lg font-semibold text-gray-800 mt-6 mb-3"
                                    data-oid="yfqypbq"
                                >
                                    Requirements:
                                </h3>
                                <ul className="list-disc list-inside space-y-1" data-oid="mdu7hek">
                                    <li data-oid="j_0:d-l">
                                        Currently pursuing or recently completed relevant degree
                                    </li>
                                    <li data-oid=":o8n4ar">
                                        Strong foundation in required technical skills
                                    </li>
                                    <li data-oid="55j561g">
                                        Excellent communication and teamwork abilities
                                    </li>
                                    <li data-oid="q9w7-6g">
                                        Eagerness to learn and adapt to new challenges
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Skills Required */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="4z1swgn">
                            <h2 className="text-xl font-bold text-gray-800 mb-4" data-oid="vgntvzl">
                                Skills Required
                            </h2>
                            <div className="flex flex-wrap gap-2" data-oid="k:9x5sq">
                                {internship.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                                        data-oid="ew0yj11"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Benefits */}
                        {internship.benefits && internship.benefits.length > 0 && (
                            <div className="bg-white rounded-xl shadow-md p-6" data-oid="2.bmkh.">
                                <h2
                                    className="text-xl font-bold text-gray-800 mb-4"
                                    data-oid=".gni8b3"
                                >
                                    Benefits & Perks
                                </h2>
                                <div className="grid md:grid-cols-2 gap-3" data-oid="hs239uh">
                                    {internship.benefits.map((benefit, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center"
                                            data-oid="b:1sdgt"
                                        >
                                            <svg
                                                className="h-5 w-5 text-green-500 mr-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="-ky7tfo"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                    data-oid="ktgbilq"
                                                />
                                            </svg>
                                            <span className="text-gray-700" data-oid="rv.t4w2">
                                                {benefit}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-6" data-oid="fs.3k9z">
                        {/* Quick Apply Card */}
                        <div
                            className="bg-white rounded-xl shadow-md p-6 sticky top-24"
                            data-oid="ch_ypu9"
                        >
                            <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid="yjq56p1">
                                Quick Apply
                            </h3>

                            {internship.applicationDeadline && (
                                <div
                                    className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg"
                                    data-oid="d8tb:s-"
                                >
                                    <div className="flex items-center" data-oid="_42s:f.">
                                        <svg
                                            className="h-5 w-5 text-yellow-600 mr-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="uvj48uc"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                                                data-oid="u5csbc6"
                                            />
                                        </svg>
                                        <div data-oid="8u5mqlf">
                                            <p
                                                className="text-sm font-medium text-yellow-800"
                                                data-oid="av3.u4i"
                                            >
                                                Application Deadline
                                            </p>
                                            <p
                                                className="text-sm text-yellow-700"
                                                data-oid="c6863z8"
                                            >
                                                {formatDate(internship.applicationDeadline)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="space-y-3 mb-6" data-oid="9n4-120">
                                <div className="flex justify-between" data-oid="v-:.eit">
                                    <span className="text-gray-600" data-oid="jogz:u9">
                                        Type:
                                    </span>
                                    <span className="font-medium" data-oid="brzhe_s">
                                        {internship.jobType}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid="v18jbdk">
                                    <span className="text-gray-600" data-oid="-l3kuer">
                                        Duration:
                                    </span>
                                    <span className="font-medium" data-oid="l_9q16e">
                                        {internship.duration}
                                    </span>
                                </div>
                                {internship.startDate && (
                                    <div className="flex justify-between" data-oid="1f5ut0j">
                                        <span className="text-gray-600" data-oid="vjiv-.l">
                                            Start Date:
                                        </span>
                                        <span className="font-medium" data-oid="5xy9f4e">
                                            {formatDate(internship.startDate)}
                                        </span>
                                    </div>
                                )}
                                {internship.applicantCount && (
                                    <div className="flex justify-between" data-oid="41x5f2h">
                                        <span className="text-gray-600" data-oid=".4ya3gb">
                                            Applicants:
                                        </span>
                                        <span className="font-medium" data-oid="hi-um-t">
                                            {internship.applicantCount}
                                        </span>
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={handleApply}
                                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                data-oid="yf:fn45"
                            >
                                Apply Now
                            </button>
                        </div>

                        {/* Company Info */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="w.4mjxl">
                            <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid="mly:3tm">
                                About {internship.company}
                            </h3>
                            <div className="space-y-3" data-oid="0dz3i82">
                                <div className="flex justify-between" data-oid="7bkbui7">
                                    <span className="text-gray-600" data-oid="6o19yf2">
                                        Industry:
                                    </span>
                                    <span className="font-medium" data-oid="qm2y_8l">
                                        {internship.industry}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid="9k2-:1u">
                                    <span className="text-gray-600" data-oid=".omku::">
                                        Company Type:
                                    </span>
                                    <span className="font-medium" data-oid="2ntl_2t">
                                        {internship.companyType}
                                    </span>
                                </div>
                                {internship.companySize && (
                                    <div className="flex justify-between" data-oid="tpoka.g">
                                        <span className="text-gray-600" data-oid="g8oi-2l">
                                            Company Size:
                                        </span>
                                        <span className="font-medium" data-oid="0tgmwv0">
                                            {internship.companySize}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Similar Internships */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="jo7r9h9">
                            <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid="s6kd346">
                                Similar Internships
                            </h3>
                            <div className="space-y-3" data-oid="08idz2s">
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
                                            data-oid="_dd7x4d"
                                        >
                                            <h4
                                                className="font-medium text-gray-800 text-sm"
                                                data-oid="s2oquha"
                                            >
                                                {similarInternship.title}
                                            </h4>
                                            <p className="text-blue-600 text-sm" data-oid="20ct0yo">
                                                {similarInternship.company}
                                            </p>
                                            <p className="text-gray-500 text-xs" data-oid="9gza08c">
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
