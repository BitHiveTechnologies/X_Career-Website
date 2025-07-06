'use client';

import { useAuth } from '@/lib/auth/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import MainNavbar from '@/components/mainNavbar';
import Link from 'next/link';

export default function DashboardPage() {
    const { user, isAuthenticated, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.push('/login');
        }
    }, [isAuthenticated, isLoading, router]);

    if (isLoading) {
        return (
            <div
                className="min-h-screen bg-white flex items-center justify-center"
                data-oid="bcd9h--"
            >
                <div
                    className="animate-spin rounded-full h-12 w-12 border-b-2 border-[hsl(196,80%,45%)]"
                    data-oid="wzp3n45"
                ></div>
            </div>
        );
    }

    if (!isAuthenticated || !user) {
        return null;
    }

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="0d3t_0y">
            <MainNavbar data-oid="65_1ss:" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-oid="pk03t8-">
                {/* Welcome Section */}
                <div
                    className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] rounded-xl p-8 mb-8 text-white"
                    data-oid="pwejua4"
                >
                    <div className="flex items-center space-x-4" data-oid="m6racx4">
                        <img
                            src={
                                user.avatar ||
                                `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=2563eb&color=fff`
                            }
                            alt={user.name}
                            className="w-16 h-16 rounded-full border-4 border-white/20"
                            data-oid="ls0hmon"
                        />

                        <div data-oid="u1e8xp2">
                            <h1 className="text-3xl font-bold" data-oid="rln.6eq">
                                Welcome back, {user.name}!
                            </h1>
                            <p className="text-blue-100" data-oid="v69vmfo">
                                Ready to take the next step in your career?
                            </p>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" data-oid="y63wxw_">
                    <Link
                        href="/jobs"
                        className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                        data-oid="ww2dhe-"
                    >
                        <div className="flex items-center space-x-3" data-oid="5yamluw">
                            <div className="bg-blue-100 p-3 rounded-lg" data-oid="57kjjl:">
                                <svg
                                    className="w-6 h-6 text-blue-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="ppysq-1"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
                                        data-oid="c3vob.-"
                                    />
                                </svg>
                            </div>
                            <div data-oid="p7n3imy">
                                <h3 className="font-semibold text-gray-900" data-oid="k:2j7yz">
                                    Browse Jobs
                                </h3>
                                <p className="text-sm text-gray-600" data-oid="d0mpf1t">
                                    Find your next opportunity
                                </p>
                            </div>
                        </div>
                    </Link>

                    <Link
                        href="/internships"
                        className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                        data-oid="apduxtn"
                    >
                        <div className="flex items-center space-x-3" data-oid="q8_2uij">
                            <div className="bg-green-100 p-3 rounded-lg" data-oid="l4h5d52">
                                <svg
                                    className="w-6 h-6 text-green-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="61rz132"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                        data-oid="ftfi5v_"
                                    />
                                </svg>
                            </div>
                            <div data-oid="z5:z-jz">
                                <h3 className="font-semibold text-gray-900" data-oid="c._l.rd">
                                    Internships
                                </h3>
                                <p className="text-sm text-gray-600" data-oid="inf8hfp">
                                    Gain valuable experience
                                </p>
                            </div>
                        </div>
                    </Link>

                    <Link
                        href="/resume-builder"
                        className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                        data-oid="iwm4z1v"
                    >
                        <div className="flex items-center space-x-3" data-oid="wj.b1w0">
                            <div className="bg-purple-100 p-3 rounded-lg" data-oid="u6xpp4p">
                                <svg
                                    className="w-6 h-6 text-purple-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="hqlq2xy"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        data-oid="iy9pfj3"
                                    />
                                </svg>
                            </div>
                            <div data-oid="yzhwf7e">
                                <h3 className="font-semibold text-gray-900" data-oid="a2-jmvb">
                                    Resume Builder
                                </h3>
                                <p className="text-sm text-gray-600" data-oid="hg47i.i">
                                    Create ATS-friendly resume
                                </p>
                            </div>
                        </div>
                    </Link>

                    <Link
                        href="/profile"
                        className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                        data-oid="0lleyit"
                    >
                        <div className="flex items-center space-x-3" data-oid="0.7puns">
                            <div className="bg-orange-100 p-3 rounded-lg" data-oid="6rhwejc">
                                <svg
                                    className="w-6 h-6 text-orange-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="j3mmg9x"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        data-oid="u7czl.l"
                                    />
                                </svg>
                            </div>
                            <div data-oid="vp669lu">
                                <h3 className="font-semibold text-gray-900" data-oid="0r7asbl">
                                    Profile
                                </h3>
                                <p className="text-sm text-gray-600" data-oid="ihtuvpy">
                                    Manage your account
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Recent Activity */}
                <div className="grid lg:grid-cols-2 gap-8" data-oid="hfi9ge2">
                    <div
                        className="bg-white rounded-xl shadow-md border border-gray-200 p-6"
                        data-oid="_g..8:s"
                    >
                        <h2 className="text-xl font-bold text-gray-900 mb-4" data-oid="m7b293:">
                            Recent Applications
                        </h2>
                        <div className="space-y-4" data-oid="vib4okr">
                            <div className="text-center py-8 text-gray-500" data-oid="h.k6y77">
                                <svg
                                    className="w-12 h-12 mx-auto mb-4 text-gray-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="mz.oi.0"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        data-oid="gqc3-pn"
                                    />
                                </svg>
                                <p data-oid="agqw0x2">No applications yet</p>
                                <p className="text-sm" data-oid=".5y-ea5">
                                    Start applying to jobs to see them here
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-white rounded-xl shadow-md border border-gray-200 p-6"
                        data-oid="r5i.e4x"
                    >
                        <h2 className="text-xl font-bold text-gray-900 mb-4" data-oid="c3gu2pp">
                            Saved Jobs
                        </h2>
                        <div className="space-y-4" data-oid="rqtxfp_">
                            <div className="text-center py-8 text-gray-500" data-oid="cy_qt7o">
                                <svg
                                    className="w-12 h-12 mx-auto mb-4 text-gray-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="d.kq04x"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                        data-oid="-hw8ndw"
                                    />
                                </svg>
                                <p data-oid="0hl6glx">No saved jobs yet</p>
                                <p className="text-sm" data-oid="hm54808">
                                    Save jobs you're interested in to see them here
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
