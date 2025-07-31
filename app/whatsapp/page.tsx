'use client';

import MainNavbar from '@/components/mainNavbar';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function WhatsAppPage() {
    const [countdown, setCountdown] = useState(5);
    const [isRedirecting, setIsRedirecting] = useState(false);

    // WhatsApp group link - replace with your actual WhatsApp group link
    const whatsappGroupLink = 'https://whatsapp.com/channel/0029Vak7B1WLo4hdCrawMw3i';

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    setIsRedirecting(true);
                    // Redirect to WhatsApp
                    window.location.href = whatsappGroupLink;
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [whatsappGroupLink]);

    const handleJoinNow = () => {
        setIsRedirecting(true);
        window.location.href = whatsappGroupLink;
    };

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50"
            data-oid="cr7.7r-"
        >
            <MainNavbar data-oid="70:-qp4" />

            <main className="container mx-auto px-4 py-12" data-oid="0_2xra7">
                <div className="max-w-4xl mx-auto" data-oid="st:0a-e">
                    {/* Header Section */}
                    <div className="text-center mb-12" data-oid="mkgwgy_">
                        <div
                            className="inline-flex items-center justify-center w-24 h-24 bg-green-500 rounded-full mb-6 shadow-lg"
                            data-oid="76pfofw"
                        >
                            <svg
                                className="w-12 h-12 text-white"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                data-oid="5icz2k_"
                            >
                                <path
                                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                                    data-oid="l7hxl66"
                                />
                            </svg>
                        </div>
                        <h1
                            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
                            data-oid="z4r4g.w"
                        >
                            Join Our WhatsApp Community
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-oid="9666x6_">
                            Connect with 35,000+ tech freshers, get instant job alerts, and share
                            opportunities in our active WhatsApp community.
                        </p>
                    </div>

                    {/* Stats Section */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12" data-oid=".yf.tpp">
                        <div
                            className="bg-white rounded-xl shadow-md p-6 text-center border-t-4 border-green-500"
                            data-oid=":c022ip"
                        >
                            <div
                                className="text-3xl font-bold text-green-600 mb-2"
                                data-oid="487atzc"
                            >
                                35,213
                            </div>
                            <div className="text-gray-600" data-oid="0em:gw5">
                                Active Members
                            </div>
                        </div>
                        <div
                            className="bg-white rounded-xl shadow-md p-6 text-center border-t-4 border-blue-500"
                            data-oid="if1ut8-"
                        >
                            <div
                                className="text-3xl font-bold text-blue-600 mb-2"
                                data-oid="916bubg"
                            >
                                500+
                            </div>
                            <div className="text-gray-600" data-oid="cfs8nd8">
                                Daily Job Updates
                            </div>
                        </div>
                        <div
                            className="bg-white rounded-xl shadow-md p-6 text-center border-t-4 border-purple-500"
                            data-oid="8tilfpl"
                        >
                            <div
                                className="text-3xl font-bold text-purple-600 mb-2"
                                data-oid="7.k_sbf"
                            >
                                24/7
                            </div>
                            <div className="text-gray-600" data-oid="cxba562">
                                Community Support
                            </div>
                        </div>
                    </div>

                    {/* Features Section */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 mb-12" data-oid="berwhuk">
                        <h2
                            className="text-2xl font-bold text-gray-800 mb-6 text-center"
                            data-oid="_qs7jfa"
                        >
                            What You'll Get in Our WhatsApp Community
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6" data-oid="7da9ndc">
                            <div className="flex items-start space-x-4" data-oid="th4a1km">
                                <div
                                    className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"
                                    data-oid="ay.67jk"
                                >
                                    <svg
                                        className="w-5 h-5 text-green-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="lexooxi"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                            data-oid="8igjjc3"
                                        />
                                    </svg>
                                </div>
                                <div data-oid="gip5p5h">
                                    <h3
                                        className="font-semibold text-gray-800 mb-1"
                                        data-oid="6-np2j3"
                                    >
                                        Instant Job Alerts
                                    </h3>
                                    <p className="text-gray-600 text-sm" data-oid="pcgjumc">
                                        Get notified immediately when new fresher jobs are posted
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4" data-oid="marwrmf">
                                <div
                                    className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"
                                    data-oid="-4_m7hi"
                                >
                                    <svg
                                        className="w-5 h-5 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="5k08rsb"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                            data-oid="q6eh:sv"
                                        />
                                    </svg>
                                </div>
                                <div data-oid="3axlojp">
                                    <h3
                                        className="font-semibold text-gray-800 mb-1"
                                        data-oid="27wmonb"
                                    >
                                        Peer Networking
                                    </h3>
                                    <p className="text-gray-600 text-sm" data-oid=".wb_pan">
                                        Connect with fellow freshers and experienced professionals
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4" data-oid="pr.j4af">
                                <div
                                    className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center"
                                    data-oid="mo0cc97"
                                >
                                    <svg
                                        className="w-5 h-5 text-purple-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="b06hwlo"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            data-oid="z6dupp:"
                                        />
                                    </svg>
                                </div>
                                <div data-oid="_4wg7q.">
                                    <h3
                                        className="font-semibold text-gray-800 mb-1"
                                        data-oid="vvrn3i-"
                                    >
                                        Career Guidance
                                    </h3>
                                    <p className="text-gray-600 text-sm" data-oid="ecix7_t">
                                        Get advice on resume building, interview prep, and career
                                        growth
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4" data-oid="o7jvte9">
                                <div
                                    className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center"
                                    data-oid="r33r927"
                                >
                                    <svg
                                        className="w-5 h-5 text-yellow-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="-aw_4ig"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                                            data-oid="82ixwcb"
                                        />
                                    </svg>
                                </div>
                                <div data-oid="wsytuh8">
                                    <h3
                                        className="font-semibold text-gray-800 mb-1"
                                        data-oid="o_imakz"
                                    >
                                        Salary Insights
                                    </h3>
                                    <p className="text-gray-600 text-sm" data-oid="3vq9rdi">
                                        Learn about salary ranges and negotiation tips for freshers
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div
                        className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl shadow-lg p-8 text-center text-white"
                        data-oid="uj0u6sn"
                    >
                        <h2 className="text-3xl font-bold mb-4" data-oid="n6t6t.w">
                            Ready to Join?
                        </h2>
                        <p className="text-green-100 mb-6 text-lg" data-oid="hd326xj">
                            {isRedirecting
                                ? 'Redirecting you to WhatsApp...'
                                : `Redirecting to WhatsApp in ${countdown} seconds...`}
                        </p>

                        <div className="space-y-4" data-oid="8fbimyc">
                            <button
                                onClick={handleJoinNow}
                                disabled={isRedirecting}
                                className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-bold text-lg rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                                data-oid="_3ros7b"
                            >
                                <svg
                                    className="w-6 h-6 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="w-ldle:"
                                >
                                    <path
                                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                                        data-oid="38m1lf0"
                                    />
                                </svg>
                                {isRedirecting ? 'Joining...' : 'Join WhatsApp Group Now'}
                            </button>

                            <div className="text-green-100 text-sm" data-oid="0bler45">
                                <p data-oid=".2f8fhw">
                                    Don't have WhatsApp?{' '}
                                    <a
                                        href="https://www.whatsapp.com/download"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline hover:text-white"
                                        data-oid="c.2upt9"
                                    >
                                        Download it here
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Back to Home */}
                    <div className="text-center mt-8" data-oid="-6zzrg2">
                        <Link
                            href="/"
                            className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors"
                            data-oid="xe2z.rx"
                        >
                            <svg
                                className="w-4 h-4 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="vg3d3q_"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                    data-oid="3-4xti."
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
