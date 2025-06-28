import Link from 'next/link';
import React, { useState } from 'react';

export default function MainNavbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };
    const Logo = () => (
        <svg
            className="h-8 w-auto"
            viewBox="0 0 120 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-oid="82vi58."
        >
            <path
                d="M10 5L20 15L10 25"
                stroke="#1E3A8A"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-oid="-_9t-v_"
            />

            <path
                d="M30 5H40L50 25H40"
                stroke="#1E3A8A"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-oid="vv047hj"
            />

            <text
                x="60"
                y="22"
                fontFamily="Arial"
                fontSize="18"
                fontWeight="bold"
                fill="#1E3A8A"
                data-oid="10vhpeh"
            >
                Careers
            </text>
        </svg>
    );

    return (
        <div data-oid="65n.ss9">
            <header
                className="sticky top-0 z-50 bg-gradient-to-r from-blue-200/90 via-blue-300/90 to-blue-200/90 backdrop-blur-md shadow-sm border-b border-blue-300/70"
                data-oid="0vjb1kg"
            >
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="arwewxa">
                    <div className="flex justify-between items-center h-16" data-oid="fg6j06-">
                        {/* Logo */}
                        <div className="flex-shrink-0" data-oid="ueuvr9f">
                            <a href="/" className="flex items-center" data-oid="zon-dw.">
                                <Logo data-oid="33x___y" />
                            </a>
                        </div>

                        {/* Navigation Links - Hidden on mobile */}
                        <div className="hidden md:flex items-center space-x-4" data-oid="4-qfmhx">
                            <a
                                href="/jobs"
                                className="text-gray-700 hover:text-blue-800 px-3 py-2 text-sm font-medium"
                                data-oid="p35ii1j"
                            >
                                Jobs
                            </a>
                            <a
                                href="/internships"
                                className="text-gray-700 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-all duration-300"
                                data-oid="cyfax1f"
                            >
                                Internships
                            </a>
                            <a
                                href="/resume-builder"
                                className="text-gray-700 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-all duration-300"
                                data-oid="vgk8jz:"
                            >
                                Resume Builder
                            </a>
                        </div>

                        {/* Auth Buttons */}
                        <div className="flex items-center space-x-3" data-oid="5s6y.8i">
                            <Link
                                href="/login"
                                className="hidden md:inline-flex items-center px-4 py-2 border border-[hsl(196,80%,45%)] text-sm font-medium rounded-md text-[hsl(196,80%,45%)] hover:bg-gradient-to-r hover:from-[hsl(196,80%,45%)]/10 hover:to-[hsl(196,80%,45%)]/25 transition-all duration-300"
                                data-oid="0ueein5"
                            >
                                Login
                            </Link>
                            <Link
                                href="/register"
                                className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300"
                                data-oid="1srw1fp"
                            >
                                Register
                            </Link>

                            {/* Mobile menu button */}
                            <button
                                type="button"
                                onClick={toggleMobileMenu}
                                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-800 hover:bg-blue-50"
                                data-oid="9kso5wh"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="yig1-qw"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                        data-oid=".p7__zj"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu, show/hide based on menu state */}
                    {mobileMenuOpen && (
                        <div className="md:hidden" data-oid="70dtysd">
                            <div
                                className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-blue-200"
                                data-oid="uw0-zyu"
                            >
                                <a
                                    href="/jobs"
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-blue-50"
                                    data-oid="tmilko."
                                >
                                    Jobs
                                </a>
                                <a
                                    href="/internships"
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-blue-50"
                                    data-oid="dea7:3i"
                                >
                                    Internships
                                </a>
                                <a
                                    href="/resume-builder"
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-blue-50"
                                    data-oid="1ezq:0:"
                                >
                                    Resume Builder
                                </a>
                                <div className="pt-2 space-y-2" data-oid="lv7q86v">
                                    <Link
                                        href="/login"
                                        className="block w-full text-center px-4 py-2 border border-[hsl(196,80%,45%)] text-sm font-medium rounded-md text-[hsl(196,80%,45%)] hover:bg-gradient-to-r hover:from-[hsl(196,80%,45%)]/10 hover:to-[hsl(196,80%,45%)]/25 transition-all duration-300"
                                        data-oid="t3avcv_"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        href="/register"
                                        className="block w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300"
                                        data-oid="nq9g07t"
                                    >
                                        Register
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </nav>
            </header>
        </div>
    );
}
