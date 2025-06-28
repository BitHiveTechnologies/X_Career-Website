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
            data-oid="oqk1asi"
        >
            <path
                d="M10 5L20 15L10 25"
                stroke="#1E3A8A"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-oid="_:xufy:"
            />

            <path
                d="M30 5H40L50 25H40"
                stroke="#1E3A8A"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-oid="7imil5v"
            />

            <text
                x="60"
                y="22"
                fontFamily="Arial"
                fontSize="18"
                fontWeight="bold"
                fill="#1E3A8A"
                data-oid="0hhktz4"
            >
                Careers
            </text>
        </svg>
    );

    return (
        <div data-oid="4ragtnw">
            <header
                className="sticky top-0 z-50 bg-gradient-to-r from-blue-200/90 via-blue-300/90 to-blue-200/90 backdrop-blur-md shadow-sm border-b border-blue-300/70"
                data-oid="077:yi6"
            >
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="dft9bda">
                    <div className="flex justify-between items-center h-16" data-oid="7x_cwh7">
                        {/* Logo */}
                        <div className="flex-shrink-0" data-oid="avdc_4_">
                            <a href="/" className="flex items-center" data-oid="2t:1hgn">
                                <Logo data-oid="qugxlzk" />
                            </a>
                        </div>

                        {/* Navigation Links - Hidden on mobile */}
                        <div className="hidden md:flex items-center space-x-4" data-oid="_76qw54">
                            <a
                                href="/jobs"
                                className="text-gray-700 hover:text-blue-800 px-3 py-2 text-sm font-medium"
                                data-oid="a8gpv8h"
                            >
                                Jobs
                            </a>
                            <a
                                href="/internships"
                                className="text-gray-700 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-all duration-300"
                                data-oid="zlsdq_8"
                            >
                                Internships
                            </a>
                            <a
                                href="/resume-builder"
                                className="text-gray-700 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-all duration-300"
                                data-oid="eearfhv"
                            >
                                Resume Builder
                            </a>
                        </div>

                        {/* Auth Buttons */}
                        <div className="flex items-center space-x-3" data-oid="v26:a0s">
                            <Link
                                href="/login"
                                className="hidden md:inline-flex items-center px-4 py-2 border border-[hsl(196,80%,45%)] text-sm font-medium rounded-md text-[hsl(196,80%,45%)] hover:bg-gradient-to-r hover:from-[hsl(196,80%,45%)]/10 hover:to-[hsl(196,80%,45%)]/25 transition-all duration-300"
                                data-oid="podjx82"
                            >
                                Login
                            </Link>
                            <Link
                                href="/register"
                                className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300"
                                data-oid="c22d6.p"
                            >
                                Register
                            </Link>

                            {/* Mobile menu button */}
                            <button
                                type="button"
                                onClick={toggleMobileMenu}
                                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-800 hover:bg-blue-50"
                                data-oid="42idil7"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="93f9_lk"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                        data-oid="42srq7p"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu, show/hide based on menu state */}
                    {mobileMenuOpen && (
                        <div className="md:hidden" data-oid="ccndghj">
                            <div
                                className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-blue-200"
                                data-oid="8yn54ur"
                            >
                                <a
                                    href="/jobs"
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-blue-50"
                                    data-oid="l92nuny"
                                >
                                    Jobs
                                </a>
                                <a
                                    href="/internships"
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-blue-50"
                                    data-oid="xg5hlkk"
                                >
                                    Internships
                                </a>
                                <a
                                    href="/resume-builder"
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-blue-50"
                                    data-oid="2k1vm6q"
                                >
                                    Resume Builder
                                </a>
                                <div className="pt-2 space-y-2" data-oid=":49tu42">
                                    <Link
                                        href="/login"
                                        className="block w-full text-center px-4 py-2 border border-[hsl(196,80%,45%)] text-sm font-medium rounded-md text-[hsl(196,80%,45%)] hover:bg-gradient-to-r hover:from-[hsl(196,80%,45%)]/10 hover:to-[hsl(196,80%,45%)]/25 transition-all duration-300"
                                        data-oid="vt-x7jb"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        href="/register"
                                        className="block w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300"
                                        data-oid="bcvc_hp"
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
