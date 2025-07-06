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
                data-oid="m0l7oo0"
            >
                <div
                    className="animate-spin rounded-full h-12 w-12 border-b-2 border-[hsl(196,80%,45%)]"
                    data-oid="fp0t1qu"
                ></div>
            </div>
        );
    }

    if (!isAuthenticated || !user) {
        return null;
    }

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="ypctfa-">
            <MainNavbar data-oid=":yr7fs9" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-oid=".ps.ish">
                {/* Welcome Section */}
                <div
                    className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] rounded-xl p-8 mb-8 text-white"
                    data-oid="qr6ymts"
                >
                    <div className="flex items-center space-x-4" data-oid="8lamf_n">
                        <img
                            src={
                                user.avatar ||
                                `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=2563eb&color=fff`
                            }
                            alt={user.name}
                            className="w-16 h-16 rounded-full border-4 border-white/20"
                            data-oid="_fu0rq."
                        />

                        <div data-oid="zkktimf">
                            <h1 className="text-3xl font-bold" data-oid="wlc8ag6">
                                Welcome back, {user.name}!
                            </h1>
                            <p className="text-blue-100" data-oid="me3m3x5">
                                Ready to take the next step in your career?
                            </p>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" data-oid="zfxpw60">
                    <Link
                        href="/jobs"
                        className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                        data-oid="-8qzk57"
                    >
                        <div className="flex items-center space-x-3" data-oid="b6o8do5">
                            <div className="bg-blue-100 p-3 rounded-lg" data-oid="ljx_7hq">
                                <svg
                                    className="w-6 h-6 text-blue-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="-s2fovx"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
                                        data-oid="oe:y1pp"
                                    />
                                </svg>
                            </div>
                            <div data-oid="csui592">
                                <h3 className="font-semibold text-gray-900" data-oid="rowkkm_">
                                    Browse Jobs
                                </h3>
                                <p className="text-sm text-gray-600" data-oid="41qf20w">
                                    Find your next opportunity
                                </p>
                            </div>
                        </div>
                    </Link>

                    <Link
                        href="/internships"
                        className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                        data-oid="uy-sg39"
                    >
                        <div className="flex items-center space-x-3" data-oid="fkuaw0z">
                            <div className="bg-green-100 p-3 rounded-lg" data-oid="sgio1y3">
                                <svg
                                    className="w-6 h-6 text-green-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="ks76hu0"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                        data-oid="bdepd.6"
                                    />
                                </svg>
                            </div>
                            <div data-oid="fwxgqz.">
                                <h3 className="font-semibold text-gray-900" data-oid="l0knxys">
                                    Internships
                                </h3>
                                <p className="text-sm text-gray-600" data-oid="a1d.cnk">
                                    Gain valuable experience
                                </p>
                            </div>
                        </div>
                    </Link>

                    <Link
                        href="/resume-builder"
                        className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                        data-oid="1.as00p"
                    >
                        <div className="flex items-center space-x-3" data-oid="z_y90q3">
                            <div className="bg-purple-100 p-3 rounded-lg" data-oid="ia5vq7d">
                                <svg
                                    className="w-6 h-6 text-purple-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="pxzu_xk"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        data-oid="d6wdhrv"
                                    />
                                </svg>
                            </div>
                            <div data-oid="t8hwj-w">
                                <h3 className="font-semibold text-gray-900" data-oid="1o43n3t">
                                    Resume Builder
                                </h3>
                                <p className="text-sm text-gray-600" data-oid="c2j4c9-">
                                    Create ATS-friendly resume
                                </p>
                            </div>
                        </div>
                    </Link>

                    <Link
                        href="/profile"
                        className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                        data-oid="s.xp4s_"
                    >
                        <div className="flex items-center space-x-3" data-oid="g3do_61">
                            <div className="bg-orange-100 p-3 rounded-lg" data-oid="pz16.a5">
                                <svg
                                    className="w-6 h-6 text-orange-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="hnqezhi"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        data-oid="d2gqshb"
                                    />
                                </svg>
                            </div>
                            <div data-oid="p8panv.">
                                <h3 className="font-semibold text-gray-900" data-oid="8f4rwc_">
                                    Profile
                                </h3>
                                <p className="text-sm text-gray-600" data-oid="cb1ckgj">
                                    Manage your account
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Recent Activity */}
                <div className="grid lg:grid-cols-2 gap-8" data-oid="1iym4do">
                    <div
                        className="bg-white rounded-xl shadow-md border border-gray-200 p-6"
                        data-oid="x2::2n6"
                    >
                        <h2 className="text-xl font-bold text-gray-900 mb-4" data-oid="uke-qnv">
                            Recent Applications
                        </h2>
                        <div className="space-y-4" data-oid="b37rtwa">
                            <div className="text-center py-8 text-gray-500" data-oid="njjf:.b">
                                <svg
                                    className="w-12 h-12 mx-auto mb-4 text-gray-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="6oc_amw"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        data-oid="j-3::xw"
                                    />
                                </svg>
                                <p data-oid="d2:9s9-">No applications yet</p>
                                <p className="text-sm" data-oid="t7cseu1">
                                    Start applying to jobs to see them here
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-white rounded-xl shadow-md border border-gray-200 p-6"
                        data-oid="ryjfq.-"
                    >
                        <h2 className="text-xl font-bold text-gray-900 mb-4" data-oid=":-6k.xb">
                            Saved Jobs
                        </h2>
                        <div className="space-y-4" data-oid="bh9jdux">
                            <div className="text-center py-8 text-gray-500" data-oid="dz80hbf">
                                <svg
                                    className="w-12 h-12 mx-auto mb-4 text-gray-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid=":ag.5cx"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                        data-oid="ckeu5:3"
                                    />
                                </svg>
                                <p data-oid="ca:b0:n">No saved jobs yet</p>
                                <p className="text-sm" data-oid="5lljynd">
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
