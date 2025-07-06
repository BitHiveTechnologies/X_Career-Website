'use client';

import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '@/lib/auth/AuthContext';

export default function MainNavbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const { user, isAuthenticated, logout } = useAuth();
    const userMenuRef = useRef<HTMLDivElement>(null);

    // Close user menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
                setUserMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Close mobile menu when window resizes to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const toggleUserMenu = () => {
        setUserMenuOpen(!userMenuOpen);
    };

    const handleLogout = () => {
        logout();
        setUserMenuOpen(false);
    };

    const Logo = () => (
        <svg
            className="h-7 w-auto sm:h-8"
            viewBox="0 0 120 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-oid="p-0bwb_"
        >
            <path
                d="M10 5L20 15L10 25"
                stroke="#1E3A8A"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-oid="xm..6tq"
            />

            <path
                d="M30 5H40L50 25H40"
                stroke="#1E3A8A"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-oid="4sjpito"
            />

            <text
                x="60"
                y="22"
                fontFamily="Arial"
                fontSize="18"
                fontWeight="bold"
                fill="#1E3A8A"
                data-oid="js8_qqk"
            >
                Careers
            </text>
        </svg>
    );

    return (
        <div data-oid="4it-5xr">
            <header
                className="sticky top-0 z-50 bg-gradient-to-r from-blue-200/90 via-blue-300/90 to-blue-200/90 backdrop-blur-md shadow-sm border-b border-blue-300/70"
                data-oid="hg4nl-_"
            >
                <nav className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8" data-oid="qviw-d4">
                    <div
                        className="flex justify-between items-center h-14 sm:h-16"
                        data-oid="gd96s4_"
                    >
                        {/* Logo */}
                        <div className="flex-shrink-0" data-oid="w2igh_e">
                            <a href="/" className="flex items-center" data-oid="xki4g6t">
                                <Logo data-oid="lzcx3r6" />
                            </a>
                        </div>

                        {/* Navigation Links - Hidden on mobile */}
                        <div
                            className="hidden lg:flex items-center space-x-2 xl:space-x-4"
                            data-oid="hyn_w8x"
                        >
                            <a
                                href="/jobs"
                                className="text-gray-700 hover:text-blue-800 px-2 xl:px-3 py-2 text-sm font-medium transition-colors duration-200"
                                data-oid="ldxsop:"
                            >
                                Jobs
                            </a>
                            <a
                                href="/internships"
                                className="text-gray-700 hover:text-blue-800 px-2 xl:px-3 py-2 text-sm font-medium transition-colors duration-200"
                                data-oid="z38ieoz"
                            >
                                Internships
                            </a>
                            <a
                                href="/resume-builder"
                                className="text-gray-700 hover:text-blue-800 px-2 xl:px-3 py-2 text-sm font-medium transition-colors duration-200"
                                data-oid=":ocic:_"
                            >
                                Resume Builder
                            </a>
                        </div>

                        {/* Auth Section */}
                        <div
                            className="flex items-center space-x-2 sm:space-x-3"
                            data-oid="i7m9y-z"
                        >
                            {isAuthenticated && user ? (
                                // Authenticated User Menu
                                <div className="relative" ref={userMenuRef} data-oid="dx5bolu">
                                    <button
                                        onClick={toggleUserMenu}
                                        className="hidden lg:flex items-center space-x-2 px-2 xl:px-3 py-2 rounded-md text-gray-700 hover:text-blue-800 hover:bg-blue-50 transition-all duration-300"
                                        data-oid="q-y34ua"
                                    >
                                        <img
                                            src={
                                                user.avatar ||
                                                `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=2563eb&color=fff`
                                            }
                                            alt={user.name}
                                            className="w-7 h-7 xl:w-8 xl:h-8 rounded-full"
                                            data-oid="cgzysj3"
                                        />

                                        <span
                                            className="text-sm font-medium max-w-24 xl:max-w-none truncate"
                                            data-oid="jduv12i"
                                        >
                                            {user.name}
                                        </span>
                                        <svg
                                            className="w-4 h-4 flex-shrink-0"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="61-gtdg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                                data-oid="-jcljlt"
                                            />
                                        </svg>
                                    </button>

                                    {/* User Dropdown Menu */}
                                    {userMenuOpen && (
                                        <div
                                            className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200"
                                            data-oid="lwhcoft"
                                        >
                                            <Link
                                                href="/dashboard"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                                onClick={() => setUserMenuOpen(false)}
                                                data-oid="rghlxh-"
                                            >
                                                Dashboard
                                            </Link>
                                            <Link
                                                href="/profile"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                                onClick={() => setUserMenuOpen(false)}
                                                data-oid="2:117b-"
                                            >
                                                Profile
                                            </Link>
                                            <Link
                                                href="/saved-jobs"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                                onClick={() => setUserMenuOpen(false)}
                                                data-oid="j5oe096"
                                            >
                                                Saved Jobs
                                            </Link>
                                            <Link
                                                href="/applications"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                                onClick={() => setUserMenuOpen(false)}
                                                data-oid="u1r1pvk"
                                            >
                                                My Applications
                                            </Link>
                                            <hr className="my-1" data-oid="2ig7wh4" />
                                            <button
                                                onClick={handleLogout}
                                                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition-colors"
                                                data-oid="i.bfx:y"
                                            >
                                                Sign out
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                // Unauthenticated Auth Buttons
                                <>
                                    <Link
                                        href="/login"
                                        className="hidden lg:inline-flex items-center px-3 xl:px-4 py-2 border border-[hsl(196,80%,45%)] text-xs xl:text-sm font-medium rounded-md text-[hsl(196,80%,45%)] hover:bg-gradient-to-r hover:from-[hsl(196,80%,45%)]/10 hover:to-[hsl(196,80%,45%)]/25 transition-all duration-300"
                                        data-oid="uzq_xeh"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        href="/register"
                                        className="hidden lg:inline-flex items-center px-3 xl:px-4 py-2 border border-transparent text-xs xl:text-sm font-medium rounded-md text-white bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300"
                                        data-oid="1y8zrrv"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}

                            {/* Mobile menu button */}
                            <button
                                type="button"
                                onClick={toggleMobileMenu}
                                className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-800 hover:bg-blue-50 transition-colors duration-200"
                                aria-expanded={mobileMenuOpen}
                                aria-label="Toggle navigation menu"
                                data-oid="mxrjz4l"
                            >
                                <svg
                                    className={`h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-200 ${mobileMenuOpen ? 'rotate-90' : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="1qocc9-"
                                >
                                    {mobileMenuOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                            data-oid="36axk.d"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                            data-oid="onkxrm_"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu, show/hide based on menu state */}
                    <div
                        className={`lg:hidden transition-all duration-300 ease-in-out ${
                            mobileMenuOpen
                                ? 'max-h-screen opacity-100'
                                : 'max-h-0 opacity-0 overflow-hidden'
                        }`}
                        data-oid="stlbx_x"
                    >
                        <div
                            className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-blue-200 bg-white/50 backdrop-blur-sm"
                            data-oid="ig:v47a"
                        >
                            <a
                                href="/jobs"
                                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-blue-50 transition-colors duration-200"
                                onClick={() => setMobileMenuOpen(false)}
                                data-oid="zo_5b54"
                            >
                                Jobs
                            </a>
                            <a
                                href="/internships"
                                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-blue-50 transition-colors duration-200"
                                onClick={() => setMobileMenuOpen(false)}
                                data-oid="zipksxm"
                            >
                                Internships
                            </a>
                            <a
                                href="/resume-builder"
                                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-blue-50 transition-colors duration-200"
                                onClick={() => setMobileMenuOpen(false)}
                                data-oid="sarwap."
                            >
                                Resume Builder
                            </a>
                            <div
                                className="pt-2 space-y-2 border-t border-gray-200"
                                data-oid="bljs6j-"
                            >
                                {isAuthenticated && user ? (
                                    // Mobile Authenticated Menu
                                    <>
                                        <div
                                            className="flex items-center px-3 py-3 border-b border-gray-200 bg-blue-50 rounded-md"
                                            data-oid="ln16p:e"
                                        >
                                            <img
                                                src={
                                                    user.avatar ||
                                                    `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=2563eb&color=fff`
                                                }
                                                alt={user.name}
                                                className="w-8 h-8 rounded-full mr-3"
                                                data-oid="qs89lks"
                                            />

                                            <span
                                                className="text-sm font-medium text-gray-900"
                                                data-oid="ita1-6j"
                                            >
                                                {user.name}
                                            </span>
                                        </div>
                                        <Link
                                            href="/dashboard"
                                            className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-blue-50 transition-colors duration-200"
                                            onClick={() => setMobileMenuOpen(false)}
                                            data-oid="l04qabc"
                                        >
                                            Dashboard
                                        </Link>
                                        <Link
                                            href="/profile"
                                            className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-blue-50 transition-colors duration-200"
                                            onClick={() => setMobileMenuOpen(false)}
                                            data-oid="4qr9co4"
                                        >
                                            Profile
                                        </Link>
                                        <Link
                                            href="/saved-jobs"
                                            className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-blue-50 transition-colors duration-200"
                                            onClick={() => setMobileMenuOpen(false)}
                                            data-oid="2gkge_i"
                                        >
                                            Saved Jobs
                                        </Link>
                                        <Link
                                            href="/applications"
                                            className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-blue-50 transition-colors duration-200"
                                            onClick={() => setMobileMenuOpen(false)}
                                            data-oid="oiinpxr"
                                        >
                                            My Applications
                                        </Link>
                                        <button
                                            onClick={() => {
                                                handleLogout();
                                                setMobileMenuOpen(false);
                                            }}
                                            className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-red-600 hover:bg-red-50 transition-colors duration-200"
                                            data-oid="k7k8wgw"
                                        >
                                            Sign out
                                        </button>
                                    </>
                                ) : (
                                    // Mobile Unauthenticated Menu
                                    <div className="space-y-3" data-oid="v.v08k0">
                                        <Link
                                            href="/login"
                                            className="block w-full text-center px-4 py-3 border border-[hsl(196,80%,45%)] text-sm font-medium rounded-md text-[hsl(196,80%,45%)] hover:bg-gradient-to-r hover:from-[hsl(196,80%,45%)]/10 hover:to-[hsl(196,80%,45%)]/25 transition-all duration-300"
                                            onClick={() => setMobileMenuOpen(false)}
                                            data-oid="9gpr6-_"
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            href="/register"
                                            className="block w-full text-center px-4 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300"
                                            onClick={() => setMobileMenuOpen(false)}
                                            data-oid="xrx9bje"
                                        >
                                            Register
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}
