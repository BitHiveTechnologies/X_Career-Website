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
            <div className="min-h-screen bg-white" data-oid="ml.pon8">
                <MainNavbar data-oid="puobjxr" />
                <div className="max-w-4xl mx-auto px-4 py-16 text-center" data-oid="xl3a:gz">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4" data-oid="lie-tg3">
                        Internship Not Found
                    </h1>
                    <p className="text-gray-600" data-oid="qwaaxxw">
                        The internship you're looking for doesn't exist.
                    </p>
                    <a
                        href="/internships"
                        className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        data-oid="sv99aad"
                    >
                        Browse Internships
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50" data-oid="ny-yleb">
            <MainNavbar data-oid="731362l" />

            <div className="max-w-6xl mx-auto px-4 py-8" data-oid="x0gv-7u">
                <div className="grid lg:grid-cols-3 gap-8" data-oid="sw33epw">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6" data-oid="57w209u">
                        {/* Header Card */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="df:m3yn">
                            <div
                                className="flex items-start justify-between mb-4"
                                data-oid="96jk8ln"
                            >
                                <div className="flex-1" data-oid="bu7_5aw">
                                    <div
                                        className="flex items-center gap-3 mb-2"
                                        data-oid="ii0xdxh"
                                    >
                                        {internship.isUrgent && (
                                            <span
                                                className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse"
                                                data-oid="zi964u0"
                                            >
                                                🔥 URGENT HIRING
                                            </span>
                                        )}
                                        {internship.isFeatured && (
                                            <span
                                                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full"
                                                data-oid="ow91vxw"
                                            >
                                                ⭐ FEATURED
                                            </span>
                                        )}
                                        {internship.isRemote && (
                                            <span
                                                className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full"
                                                data-oid="0w6gdfk"
                                            >
                                                🏠 Remote
                                            </span>
                                        )}
                                    </div>
                                    <h1
                                        className="text-3xl font-bold text-gray-800 mb-2"
                                        data-oid="rvozqqu"
                                    >
                                        {internship.title}
                                    </h1>
                                    <p
                                        className="text-xl text-blue-600 font-semibold mb-2"
                                        data-oid="70fiu4h"
                                    >
                                        {internship.company}
                                    </p>
                                    <div
                                        className="flex items-center gap-1 text-sm text-gray-600 mb-2"
                                        data-oid="z.xh.nr"
                                    >
                                        <span data-oid="4s4fwdk">{internship.industry}</span>
                                        <span data-oid="5ohqbi:">•</span>
                                        <span data-oid="ua3ephs">{internship.companyType}</span>
                                        {internship.companySize && (
                                            <>
                                                <span data-oid="r7n7hdd">•</span>
                                                <span data-oid=".krpzp3">
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
                                data-oid="w-q69s."
                            >
                                <div className="flex items-center text-gray-600" data-oid="49jfx7j">
                                    <svg
                                        className="h-5 w-5 mr-2 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="61bcoug"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            data-oid="zurdak3"
                                        />

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            data-oid="icycln4"
                                        />
                                    </svg>
                                    <div data-oid=".5a5q8c">
                                        <p className="text-xs text-gray-500" data-oid="0-ml2-a">
                                            Location
                                        </p>
                                        <p className="font-medium" data-oid="r6r:xjm">
                                            {internship.location}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center text-gray-600" data-oid="yzxce_b">
                                    <svg
                                        className="h-5 w-5 mr-2 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="7yvwsu9"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            data-oid="vuj70lh"
                                        />
                                    </svg>
                                    <div data-oid="i9:3wb0">
                                        <p className="text-xs text-gray-500" data-oid="9k8fo6s">
                                            Duration
                                        </p>
                                        <p className="font-medium" data-oid="5c-xnh7">
                                            {internship.duration}
                                        </p>
                                    </div>
                                </div>

                                {internship.stipend && (
                                    <div
                                        className="flex items-center text-gray-600"
                                        data-oid="cm-91m_"
                                    >
                                        <svg
                                            className="h-5 w-5 mr-2 text-green-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="unm6ud_"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                                                data-oid="urn937l"
                                            />
                                        </svg>
                                        <div data-oid="3_vts:2">
                                            <p className="text-xs text-gray-500" data-oid="e4xn7v.">
                                                Stipend
                                            </p>
                                            <p
                                                className="font-medium text-green-600"
                                                data-oid="q6iu.o9"
                                            >
                                                {internship.stipend}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                <div className="flex items-center text-gray-600" data-oid="mi8ny96">
                                    <svg
                                        className="h-5 w-5 mr-2 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="81hts99"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            data-oid="kuhc207"
                                        />
                                    </svg>
                                    <div data-oid="trvsvl2">
                                        <p className="text-xs text-gray-500" data-oid="piq6bam">
                                            Posted
                                        </p>
                                        <p className="font-medium" data-oid="4108j40">
                                            {formatDate(internship.postedDate)}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-3" data-oid="hwb7dx:">
                                <button
                                    onClick={handleApply}
                                    className="flex-1 min-w-[200px] px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                                    data-oid="awnewea"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="00zbvsu"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                            data-oid="tz8-q8-"
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
                                    data-oid="bog4zob"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill={isSaved ? 'currentColor' : 'none'}
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="ug0r5.o"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                            data-oid="x2lrt28"
                                        />
                                    </svg>
                                </button>

                                <button
                                    onClick={handleShare}
                                    className="px-4 py-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-all duration-300"
                                    title="Share internship"
                                    data-oid="ych4xl:"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="f-y3n15"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                                            data-oid="3hg_hv9"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="6mpe8oe">
                            <h2 className="text-xl font-bold text-gray-800 mb-4" data-oid="hyek3.o">
                                About this Internship
                            </h2>
                            <div className="prose max-w-none text-gray-600" data-oid="_p2mor0">
                                <p data-oid="mqk5p.q">{internship.description}</p>

                                <h3
                                    className="text-lg font-semibold text-gray-800 mt-6 mb-3"
                                    data-oid="g.z8._k"
                                >
                                    What you'll learn:
                                </h3>
                                <ul className="list-disc list-inside space-y-1" data-oid="cise0wv">
                                    <li data-oid="_9pjhoq">
                                        Hands-on experience with real-world projects
                                    </li>
                                    <li data-oid="l5mu.90">
                                        Industry best practices and professional development
                                    </li>
                                    <li data-oid="q6jxrmv">
                                        Mentorship from experienced professionals
                                    </li>
                                    <li data-oid="l6ynfpg">
                                        Exposure to cutting-edge technologies and tools
                                    </li>
                                </ul>

                                <h3
                                    className="text-lg font-semibold text-gray-800 mt-6 mb-3"
                                    data-oid="zdm-v5b"
                                >
                                    Requirements:
                                </h3>
                                <ul className="list-disc list-inside space-y-1" data-oid="4-p2onv">
                                    <li data-oid="-h:7fdk">
                                        Currently pursuing or recently completed relevant degree
                                    </li>
                                    <li data-oid="rkgex03">
                                        Strong foundation in required technical skills
                                    </li>
                                    <li data-oid="-.urbfp">
                                        Excellent communication and teamwork abilities
                                    </li>
                                    <li data-oid="i32y:_e">
                                        Eagerness to learn and adapt to new challenges
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Skills Required */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="y4vlbtz">
                            <h2 className="text-xl font-bold text-gray-800 mb-4" data-oid="4k:pi5a">
                                Skills Required
                            </h2>
                            <div className="flex flex-wrap gap-2" data-oid="1ro3hv:">
                                {internship.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                                        data-oid="i:bwvhu"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Benefits */}
                        {internship.benefits && internship.benefits.length > 0 && (
                            <div className="bg-white rounded-xl shadow-md p-6" data-oid="xk_gv28">
                                <h2
                                    className="text-xl font-bold text-gray-800 mb-4"
                                    data-oid="8-63vvo"
                                >
                                    Benefits & Perks
                                </h2>
                                <div className="grid md:grid-cols-2 gap-3" data-oid="q3lccst">
                                    {internship.benefits.map((benefit, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center"
                                            data-oid="cvc0mrn"
                                        >
                                            <svg
                                                className="h-5 w-5 text-green-500 mr-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="p78brwh"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                    data-oid="8nlkt75"
                                                />
                                            </svg>
                                            <span className="text-gray-700" data-oid="70b:x-z">
                                                {benefit}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-6" data-oid="7eqe9:m">
                        {/* Quick Apply Card */}
                        <div
                            className="bg-white rounded-xl shadow-md p-6 sticky top-24"
                            data-oid="_5taxc8"
                        >
                            <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid="6d2syi5">
                                Quick Apply
                            </h3>

                            {internship.applicationDeadline && (
                                <div
                                    className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg"
                                    data-oid="_rc6qn5"
                                >
                                    <div className="flex items-center" data-oid="4r_8k5x">
                                        <svg
                                            className="h-5 w-5 text-yellow-600 mr-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="6fax6rt"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                                                data-oid="6mq:l2h"
                                            />
                                        </svg>
                                        <div data-oid="_29v41p">
                                            <p
                                                className="text-sm font-medium text-yellow-800"
                                                data-oid="58oscl9"
                                            >
                                                Application Deadline
                                            </p>
                                            <p
                                                className="text-sm text-yellow-700"
                                                data-oid="usq-9x."
                                            >
                                                {formatDate(internship.applicationDeadline)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="space-y-3 mb-6" data-oid=":0alc5q">
                                <div className="flex justify-between" data-oid="9.h6iq5">
                                    <span className="text-gray-600" data-oid="8is-0vs">
                                        Type:
                                    </span>
                                    <span className="font-medium" data-oid="fe1-ev9">
                                        {internship.jobType}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid=".1xdx6u">
                                    <span className="text-gray-600" data-oid="xff9eu5">
                                        Duration:
                                    </span>
                                    <span className="font-medium" data-oid="vcubjye">
                                        {internship.duration}
                                    </span>
                                </div>
                                {internship.startDate && (
                                    <div className="flex justify-between" data-oid="etqls4q">
                                        <span className="text-gray-600" data-oid="jj1bteo">
                                            Start Date:
                                        </span>
                                        <span className="font-medium" data-oid="h:ofx:v">
                                            {formatDate(internship.startDate)}
                                        </span>
                                    </div>
                                )}
                                {internship.applicantCount && (
                                    <div className="flex justify-between" data-oid="804:3cb">
                                        <span className="text-gray-600" data-oid="q4s0.gt">
                                            Applicants:
                                        </span>
                                        <span className="font-medium" data-oid="4gk1g7a">
                                            {internship.applicantCount}
                                        </span>
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={handleApply}
                                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                data-oid="qz3it5."
                            >
                                Apply Now
                            </button>
                        </div>

                        {/* Company Info */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="9e98gfp">
                            <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid=":3jn8uz">
                                About {internship.company}
                            </h3>
                            <div className="space-y-3" data-oid="_uuqkq9">
                                <div className="flex justify-between" data-oid="03n_721">
                                    <span className="text-gray-600" data-oid="-v37dvr">
                                        Industry:
                                    </span>
                                    <span className="font-medium" data-oid="60zro1k">
                                        {internship.industry}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid="5_hznn.">
                                    <span className="text-gray-600" data-oid="sh9708s">
                                        Company Type:
                                    </span>
                                    <span className="font-medium" data-oid="nn1yspq">
                                        {internship.companyType}
                                    </span>
                                </div>
                                {internship.companySize && (
                                    <div className="flex justify-between" data-oid="nkv8svh">
                                        <span className="text-gray-600" data-oid="imo4t82">
                                            Company Size:
                                        </span>
                                        <span className="font-medium" data-oid="53chil2">
                                            {internship.companySize}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Similar Internships */}
                        <div className="bg-white rounded-xl shadow-md p-6" data-oid="7je3yo2">
                            <h3 className="text-lg font-bold text-gray-800 mb-4" data-oid="smku1lw">
                                Similar Internships
                            </h3>
                            <div className="space-y-3" data-oid="m2mu4ls">
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
                                            data-oid="wnyrqew"
                                        >
                                            <h4
                                                className="font-medium text-gray-800 text-sm"
                                                data-oid="e4ovvtd"
                                            >
                                                {similarInternship.title}
                                            </h4>
                                            <p className="text-blue-600 text-sm" data-oid="jqjpw7o">
                                                {similarInternship.company}
                                            </p>
                                            <p className="text-gray-500 text-xs" data-oid="egcabve">
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
