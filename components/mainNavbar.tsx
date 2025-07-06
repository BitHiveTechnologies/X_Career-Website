'use client';

import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '@/lib/auth/AuthContext';
import { useProgressiveEnhancement } from '@/hooks/useProgressiveEnhancement';
import { SafeAvatar } from '@/components/ui/SafeImage';

export default function MainNavbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const { user, isAuthenticated, logout } = useAuth();
    const userMenuRef = useRef<HTMLDivElement>(null);
    const { isEnhanced, enhance } = useProgressiveEnhancement();

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
            data-oid="_juqrqh"
        >
            <path
                d="M10 5L20 15L10 25"
                stroke="#1E3A8A"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-oid="mz__v:o"
            />

            <path
                d="M30 5H40L50 25H40"
                stroke="#1E3A8A"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-oid=":vx1.z8"
            />

            <text
                x="60"
                y="22"
                fontFamily="Arial"
                fontSize="18"
                fontWeight="bold"
                fill="#1E3A8A"
                data-oid="fdvpttu"
            >
                Careers
            </text>
        </svg>
    );

    return (
        <div data-oid="1o:2g3i">
            <header
                className="sticky top-0 z-50 bg-gradient-to-r from-blue-200/90 via-blue-300/90 to-blue-200/90 backdrop-blur-md shadow-sm border-b border-blue-300/70"
                data-oid="onqf.a2"
            >
                <nav className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8" data-oid="-jd9bxe">
                    <div
                        className="flex justify-between items-center h-14 sm:h-16"
                        data-oid="3w.2i3:"
                    >
                        {/* Logo */}
                        <div className="flex-shrink-0" data-oid="._58q_2">
                            <Link href="/" className="flex items-center" data-oid="on6h8ia">
                                <Logo data-oid="i_bqbbl" />
                            </Link>
                        </div>

                        {/* Navigation Links - Hidden on mobile */}
                        <div
                            className="hidden lg:flex items-center space-x-2 xl:space-x-4"
                            data-oid="a0q:94c"
                        >
                            <Link
                                href="/jobs"
                                className="text-gray-700 hover:text-blue-800 px-2 xl:px-3 py-2 text-sm font-medium transition-colors duration-200"
                                data-oid=".cklr57"
                            >
                                Jobs
                            </Link>
                            <Link
                                href="/internships"
                                className="text-gray-700 hover:text-blue-800 px-2 xl:px-3 py-2 text-sm font-medium transition-colors duration-200"
                                data-oid="m6fzk-b"
                            >
                                Internships
                            </Link>
                            <Link
                                href="/resume-builder"
                                className="text-gray-700 hover:text-blue-800 px-2 xl:px-3 py-2 text-sm font-medium transition-colors duration-200"
                                data-oid="rh9f1l5"
                            >
                                Resume Builder
                            </Link>
                        </div>

                        {/* Auth Section */}
                        <div
                            className="flex items-center space-x-2 sm:space-x-3"
                            data-oid="dt-ecgs"
                        >
                            {isAuthenticated && user ? (
                                // Authenticated User Menu
                                <div className="relative" ref={userMenuRef} data-oid="mte:mv.">
                                    <button
                                        onClick={toggleUserMenu}
                                        className="hidden lg:flex items-center space-x-2 px-2 xl:px-3 py-2 rounded-md text-gray-700 hover:text-blue-800 hover:bg-blue-50 transition-all duration-300"
                                        data-oid="511c_1y"
                                    >
                                        <SafeAvatar
                                            src={user.avatar}
                                            name={user.name}
                                            size={32}
                                            className="xl:w-8 xl:h-8"
                                            data-oid="07:2_p3"
                                        />

                                        <span
                                            className="text-sm font-medium max-w-24 xl:max-w-none truncate"
                                            data-oid="0dw.-rz"
                                        >
                                            {user.name}
                                        </span>
                                        <svg
                                            className="w-4 h-4 flex-shrink-0"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="k_j52j5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                                data-oid="o_k6fkt"
                                            />
                                        </svg>
                                    </button>

                                    {/* User Dropdown Menu */}
                                    {userMenuOpen && (
                                        <div
                                            className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200"
                                            data-oid="a3gci1r"
                                        >
                                            <Link
                                                href="/dashboard"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                                onClick={() => setUserMenuOpen(false)}
                                                data-oid=":4vxu6_"
                                            >
                                                Dashboard
                                            </Link>
                                            <Link
                                                href="/profile"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                                onClick={() => setUserMenuOpen(false)}
                                                data-oid="n:oo8lm"
                                            >
                                                Profile
                                            </Link>
                                            <Link
                                                href="/saved-jobs"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                                onClick={() => setUserMenuOpen(false)}
                                                data-oid="6z2vv33"
                                            >
                                                Saved Jobs
                                            </Link>
                                            <Link
                                                href="/applications"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                                onClick={() => setUserMenuOpen(false)}
                                                data-oid="nk-gulu"
                                            >
                                                My Applications
                                            </Link>
                                            <hr className="my-1" data-oid="976ojd7" />
                                            <button
                                                onClick={handleLogout}
                                                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition-colors"
                                                data-oid="p.1fqr0"
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
                                        data-oid="7idaxhr"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        href="/register"
                                        className="hidden lg:inline-flex items-center px-3 xl:px-4 py-2 border border-transparent text-xs xl:text-sm font-medium rounded-md text-white bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300"
                                        data-oid="j0tu:qj"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}

                            {/* Mobile menu button */}
                            <button
                                type="button"
                                onClick={toggleMobileMenu}
                                className={enhance(
                                    'lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-800 hover:bg-blue-50 transition-colors duration-200',
                                    'lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-800 hover:bg-blue-50',
                                )}
                                aria-expanded={mobileMenuOpen}
                                aria-label="Toggle navigation menu"
                                data-oid="q228:-2"
                            >
                                <svg
                                    className={enhance(
                                        `h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-200 ${mobileMenuOpen ? 'rotate-90' : ''}`,
                                        'h-5 w-5 sm:h-6 sm:w-6',
                                    )}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="bhr63_y"
                                >
                                    {mobileMenuOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                            data-oid="0g8ruj_"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                            data-oid="65m7lr6"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu, show/hide based on menu state */}
                    <div
                        className={enhance(
                            `lg:hidden transition-all duration-300 ease-in-out ${
                                mobileMenuOpen
                                    ? 'max-h-screen opacity-100'
                                    : 'max-h-0 opacity-0 overflow-hidden'
                            }`,

                            `lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`,
                        )}
                        data-oid=":_8xqeb"
                    >
                        <div
                            className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-blue-200 bg-white/50 backdrop-blur-sm"
                            data-oid="kx.3:cx"
                        >
                            <Link
                                href="/jobs"
                                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-blue-50 transition-colors duration-200"
                                onClick={() => setMobileMenuOpen(false)}
                                data-oid="-q0l:xo"
                            >
                                Jobs
                            </Link>
                            <Link
                                href="/internships"
                                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-blue-50 transition-colors duration-200"
                                onClick={() => setMobileMenuOpen(false)}
                                data-oid="50rubdx"
                            >
                                Internships
                            </Link>
                            <Link
                                href="/resume-builder"
                                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-blue-50 transition-colors duration-200"
                                onClick={() => setMobileMenuOpen(false)}
                                data-oid="w7my4t2"
                            >
                                Resume Builder
                            </Link>
                            <div
                                className="pt-2 space-y-2 border-t border-gray-200"
                                data-oid="vbm66yq"
                            >
                                {isAuthenticated && user ? (
                                    // Mobile Authenticated Menu
                                    <>
                                        <div
                                            className="flex items-center px-3 py-3 border-b border-gray-200 bg-blue-50 rounded-md"
                                            data-oid=":qoiiet"
                                        >
                                            <SafeAvatar
                                                src={user.avatar}
                                                name={user.name}
                                                size={32}
                                                className="mr-3"
                                                data-oid="rk2dig1"
                                            />

                                            <span
                                                className="text-sm font-medium text-gray-900"
                                                data-oid=".yqe8wc"
                                            >
                                                {user.name}
                                            </span>
                                        </div>
                                        <Link
                                            href="/dashboard"
                                            className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-blue-50 transition-colors duration-200"
                                            onClick={() => setMobileMenuOpen(false)}
                                            data-oid="uig-c5d"
                                        >
                                            Dashboard
                                        </Link>
                                        <Link
                                            href="/profile"
                                            className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-blue-50 transition-colors duration-200"
                                            onClick={() => setMobileMenuOpen(false)}
                                            data-oid="js-h_k2"
                                        >
                                            Profile
                                        </Link>
                                        <Link
                                            href="/saved-jobs"
                                            className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-blue-50 transition-colors duration-200"
                                            onClick={() => setMobileMenuOpen(false)}
                                            data-oid="cgr71sa"
                                        >
                                            Saved Jobs
                                        </Link>
                                        <Link
                                            href="/applications"
                                            className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-blue-50 transition-colors duration-200"
                                            onClick={() => setMobileMenuOpen(false)}
                                            data-oid="21.mi0m"
                                        >
                                            My Applications
                                        </Link>
                                        <button
                                            onClick={() => {
                                                handleLogout();
                                                setMobileMenuOpen(false);
                                            }}
                                            className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-red-600 hover:bg-red-50 transition-colors duration-200"
                                            data-oid="3lzf-.g"
                                        >
                                            Sign out
                                        </button>
                                    </>
                                ) : (
                                    // Mobile Unauthenticated Menu
                                    <div className="space-y-3" data-oid="i5.cvhc">
                                        <Link
                                            href="/login"
                                            className="block w-full text-center px-4 py-3 border border-[hsl(196,80%,45%)] text-sm font-medium rounded-md text-[hsl(196,80%,45%)] hover:bg-gradient-to-r hover:from-[hsl(196,80%,45%)]/10 hover:to-[hsl(196,80%,45%)]/25 transition-all duration-300"
                                            onClick={() => setMobileMenuOpen(false)}
                                            data-oid="20h:egv"
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            href="/register"
                                            className="block w-full text-center px-4 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300"
                                            onClick={() => setMobileMenuOpen(false)}
                                            data-oid="0m_bzz."
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
