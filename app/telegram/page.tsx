'use client';

import MainNavbar from '@/components/mainNavbar';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function TelegramPage() {
    const [countdown, setCountdown] = useState(5);
    const [isRedirecting, setIsRedirecting] = useState(false);

    // Telegram group link - replace with your actual Telegram group link
    const telegramGroupLink = 'https://t.me/xcareerconnect';

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    setIsRedirecting(true);
                    // Redirect to Telegram
                    window.location.href = telegramGroupLink;
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [telegramGroupLink]);

    const handleJoinNow = () => {
        setIsRedirecting(true);
        window.location.href = telegramGroupLink;
    };

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50"
            data-oid=".hpfq0j"
        >
            <MainNavbar data-oid="jk8lun7" />

            <main className="container mx-auto px-4 py-12" data-oid="8dfht47">
                <div className="max-w-4xl mx-auto" data-oid="0v67.1f">
                    {/* Header Section */}
                    <div className="text-center mb-12" data-oid="z5toit:">
                        <div
                            className="inline-flex items-center justify-center w-24 h-24 bg-blue-500 rounded-full mb-6 shadow-lg"
                            data-oid="n776l6r"
                        >
                            <svg
                                className="w-12 h-12 text-white"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                data-oid="csyvaz:"
                            >
                                <path
                                    d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                                    data-oid="mm_.w5d"
                                />
                            </svg>
                        </div>
                        <h1
                            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
                            data-oid="u2i_uus"
                        >
                            Join Our Telegram Community
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-oid="e74mzft">
                            Connect with 2,711+ tech professionals, get real-time job updates, and
                            participate in focused discussions on our Telegram channel.
                        </p>
                    </div>

                    {/* Stats Section */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12" data-oid="qe:evtj">
                        <div
                            className="bg-white rounded-xl shadow-md p-6 text-center border-t-4 border-blue-500"
                            data-oid=".uu7_t1"
                        >
                            <div
                                className="text-3xl font-bold text-blue-600 mb-2"
                                data-oid="9x3b5xk"
                            >
                                2,711
                            </div>
                            <div className="text-gray-600" data-oid="rn4kd8p">
                                Active Members
                            </div>
                        </div>
                        <div
                            className="bg-white rounded-xl shadow-md p-6 text-center border-t-4 border-purple-500"
                            data-oid="7xdjji5"
                        >
                            <div
                                className="text-3xl font-bold text-purple-600 mb-2"
                                data-oid="otq5ybt"
                            >
                                100+
                            </div>
                            <div className="text-gray-600" data-oid="k48qs_r">
                                Daily Messages
                            </div>
                        </div>
                        <div
                            className="bg-white rounded-xl shadow-md p-6 text-center border-t-4 border-green-500"
                            data-oid=".-ekb:-"
                        >
                            <div
                                className="text-3xl font-bold text-green-600 mb-2"
                                data-oid="iuul-rb"
                            >
                                24/7
                            </div>
                            <div className="text-gray-600" data-oid="6u5659_">
                                Active Discussions
                            </div>
                        </div>
                    </div>

                    {/* Features Section */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 mb-12" data-oid=":y5xvml">
                        <h2
                            className="text-2xl font-bold text-gray-800 mb-6 text-center"
                            data-oid="u3p6-s_"
                        >
                            What You'll Get in Our Telegram Community
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6" data-oid=".2ri3-i">
                            <div className="flex items-start space-x-4" data-oid="dro.alq">
                                <div
                                    className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"
                                    data-oid="l4s3r.:"
                                >
                                    <svg
                                        className="w-5 h-5 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="u3h7jkr"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2"
                                            data-oid="1x4a_dc"
                                        />
                                    </svg>
                                </div>
                                <div data-oid="9bxba0q">
                                    <h3
                                        className="font-semibold text-gray-800 mb-1"
                                        data-oid="704-rtu"
                                    >
                                        Curated Job Posts
                                    </h3>
                                    <p className="text-gray-600 text-sm" data-oid="k_bppq3">
                                        High-quality job opportunities specifically for tech
                                        freshers
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4" data-oid="t30xc:o">
                                <div
                                    className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center"
                                    data-oid="u6vxbys"
                                >
                                    <svg
                                        className="w-5 h-5 text-purple-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="8.-ephz"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                            data-oid="w3rb6yi"
                                        />
                                    </svg>
                                </div>
                                <div data-oid="mjm.dhh">
                                    <h3
                                        className="font-semibold text-gray-800 mb-1"
                                        data-oid="-c93g5-"
                                    >
                                        Tech Discussions
                                    </h3>
                                    <p className="text-gray-600 text-sm" data-oid="qk:-dmu">
                                        Engage in meaningful conversations about technology trends
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4" data-oid="hh-1du_">
                                <div
                                    className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"
                                    data-oid="bv1d91."
                                >
                                    <svg
                                        className="w-5 h-5 text-green-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="n6-5ykg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                            data-oid="396v-:l"
                                        />
                                    </svg>
                                </div>
                                <div data-oid="c5qok.7">
                                    <h3
                                        className="font-semibold text-gray-800 mb-1"
                                        data-oid="vq6gz3w"
                                    >
                                        Learning Resources
                                    </h3>
                                    <p className="text-gray-600 text-sm" data-oid="rqft-_b">
                                        Access to tutorials, courses, and skill development
                                        materials
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4" data-oid="dgkl0om">
                                <div
                                    className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center"
                                    data-oid="187vm2x"
                                >
                                    <svg
                                        className="w-5 h-5 text-yellow-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid=".1fz4ds"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                            data-oid="n7x2xk9"
                                        />
                                    </svg>
                                </div>
                                <div data-oid="-brf3zg">
                                    <h3
                                        className="font-semibold text-gray-800 mb-1"
                                        data-oid="0e1952i"
                                    >
                                        Quick Updates
                                    </h3>
                                    <p className="text-gray-600 text-sm" data-oid="10m-x:d">
                                        Fast notifications and real-time industry updates
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4" data-oid="1asyuan">
                                <div
                                    className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center"
                                    data-oid="3woyufd"
                                >
                                    <svg
                                        className="w-5 h-5 text-red-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="x1wk:51"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                            data-oid="wwbj1jn"
                                        />
                                    </svg>
                                </div>
                                <div data-oid="heu2-v-">
                                    <h3
                                        className="font-semibold text-gray-800 mb-1"
                                        data-oid="y_ssonx"
                                    >
                                        Supportive Community
                                    </h3>
                                    <p className="text-gray-600 text-sm" data-oid="ar-qc79">
                                        Get help and support from experienced professionals
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4" data-oid="m165maf">
                                <div
                                    className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center"
                                    data-oid="9-4qomm"
                                >
                                    <svg
                                        className="w-5 h-5 text-indigo-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="n:c6c2d"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                            data-oid="avkrqrx"
                                        />
                                    </svg>
                                </div>
                                <div data-oid="-r.fc-9">
                                    <h3
                                        className="font-semibold text-gray-800 mb-1"
                                        data-oid="x8q4qsq"
                                    >
                                        Career Analytics
                                    </h3>
                                    <p className="text-gray-600 text-sm" data-oid="402kbs4">
                                        Market insights and career progression data
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Telegram Features */}
                    <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg p-8 mb-12 text-white"
                        data-oid="7593ccy"
                    >
                        <h2 className="text-2xl font-bold mb-6 text-center" data-oid="x6lre2p">
                            Why Telegram?
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6" data-oid="sd9jf2s">
                            <div className="flex items-center space-x-3" data-oid="tf-pr.9">
                                <div
                                    className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center"
                                    data-oid="tj0co09"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        data-oid="3741i_e"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                            data-oid="oebhaeq"
                                        />
                                    </svg>
                                </div>
                                <span data-oid="pe5.dx8">End-to-end encryption</span>
                            </div>
                            <div className="flex items-center space-x-3" data-oid="nk1schs">
                                <div
                                    className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center"
                                    data-oid="ote8i69"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        data-oid="7c7xfjn"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                            data-oid="cq6qvem"
                                        />
                                    </svg>
                                </div>
                                <span data-oid="f4zfi:e">File sharing up to 2GB</span>
                            </div>
                            <div className="flex items-center space-x-3" data-oid="z5sze1s">
                                <div
                                    className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center"
                                    data-oid="mg9:2xy"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        data-oid="utejeu9"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                            data-oid="n73lsdi"
                                        />
                                    </svg>
                                </div>
                                <span data-oid="22iinze">Cross-platform sync</span>
                            </div>
                            <div className="flex items-center space-x-3" data-oid="95a1qrz">
                                <div
                                    className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center"
                                    data-oid="h7vn_ey"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        data-oid="obte35r"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                            data-oid="qpx.xu4"
                                        />
                                    </svg>
                                </div>
                                <span data-oid="4e86ys9">No ads or distractions</span>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-lg p-8 text-center text-white"
                        data-oid="4hvuu92"
                    >
                        <h2 className="text-3xl font-bold mb-4" data-oid="mpuf2_g">
                            Ready to Join?
                        </h2>
                        <p className="text-blue-100 mb-6 text-lg" data-oid="jnsk-2f">
                            {isRedirecting
                                ? 'Redirecting you to Telegram...'
                                : `Redirecting to Telegram in ${countdown} seconds...`}
                        </p>

                        <div className="space-y-4" data-oid="gck0_pn">
                            <button
                                onClick={handleJoinNow}
                                disabled={isRedirecting}
                                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                                data-oid="ha_c9oz"
                            >
                                <svg
                                    className="w-6 h-6 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="05y-7y9"
                                >
                                    <path
                                        d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                                        data-oid="u7a69sy"
                                    />
                                </svg>
                                {isRedirecting ? 'Joining...' : 'Join Telegram Channel Now'}
                            </button>

                            <div className="text-blue-100 text-sm" data-oid="2tz3zki">
                                <p data-oid="7q.8u95">
                                    Don't have Telegram?{' '}
                                    <a
                                        href="https://telegram.org/apps"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline hover:text-white"
                                        data-oid="t2f3k5y"
                                    >
                                        Download it here
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Back to Home */}
                    <div className="text-center mt-8" data-oid="dfqdz7v">
                        <Link
                            href="/"
                            className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors"
                            data-oid="i.ht-ln"
                        >
                            <svg
                                className="w-4 h-4 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="4tcdpoz"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                    data-oid="fp90x36"
                                />
                            </svg>
                            Back to X Careers
                        </Link>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-950 text-white mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="mb-6">
                                <div className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                                        </svg>
                                    </div>
                                    <span className="text-xl font-bold text-white">X Careers</span>
                                </div>
                            </div>
                            <p className="text-gray-400 mb-4">
                                Helping tech freshers launch their careers with curated
                                opportunities and resources.
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    href="https://www.linkedin.com/company/x-careers/"
                                    className="text-gray-400 hover:text-white transition-all duration-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.instagram.com/x_careers_official?igsh=Z3M3cTJyNndtdDdq"
                                    className="text-gray-400 hover:text-white transition-all duration-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://whatsapp.com/channel/0029Vak7B1WLo4hdCrawMw3i"
                                    className="text-gray-400 hover:text-white transition-all duration-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                                    </svg>
                                </a>
                                <a
                                    href="https://t.me/xcareerconnect"
                                    className="text-gray-400 hover:text-white transition-all duration-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Company</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="/about" className="text-gray-400 hover:text-white transition-all duration-300">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="/careers" className="text-gray-400 hover:text-white transition-all duration-300">
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a href="/blog" className="text-gray-400 hover:text-white transition-all duration-300">
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Resources</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="/resources" className="text-gray-400 hover:text-white transition-all duration-300">
                                        All Resources
                                    </a>
                                </li>
                                <li>
                                    <a href="/resume-builder" className="text-gray-400 hover:text-white transition-all duration-300">
                                        Resume Builder
                                    </a>
                                </li>
                                <li>
                                    <a href="/notify" className="text-gray-400 hover:text-white transition-all duration-300">
                                        NotifyX
                                    </a>
                                </li>
                                <li>
                                    <a href="/subscriptions" className="text-gray-400 hover:text-white transition-all duration-300">
                                        Subscriptions
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Legal</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-all duration-300">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="/terms-of-service" className="text-gray-400 hover:text-white transition-all duration-300">
                                        Terms of Service
                                    </a>
                                </li>
                                <li>
                                    <a href="/refund-policy" className="text-gray-400 hover:text-white transition-all duration-300">
                                        Refund Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="/shipping-policy" className="text-gray-400 hover:text-white transition-all duration-300">
                                        Shipping Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="/terms-and-conditions" className="text-gray-400 hover:text-white transition-all duration-300">
                                        Terms and Conditions
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                        <p className="mb-2">© {new Date().getFullYear()} X Careers. All rights reserved.</p>
                        <p>Built with ❤️ for tech freshers</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
