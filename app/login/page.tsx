'use client';

import MainNavbar from '@/components/mainNavbar';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

// SVG Logo component
const Logo = () => (
    <svg
        className="h-8 w-auto"
        viewBox="0 0 120 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-oid="6uudzk1"
    >
        <path
            d="M10 5L20 15L10 25"
            stroke="#1E3A8A"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            data-oid="dz5k41t"
        />

        <path
            d="M30 5H40L50 25H40"
            stroke="#1E3A8A"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            data-oid="jhcjxo6"
        />

        <text
            x="60"
            y="22"
            fontFamily="Arial"
            fontSize="18"
            fontWeight="bold"
            fill="#1E3A8A"
            data-oid=".5ln04x"
        >
            Careers
        </text>
    </svg>
);

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Simulate API call
        try {
            // Replace with actual authentication logic
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // For demo purposes, just redirect to home
            router.push('/');
        } catch (err) {
            setError('Invalid email or password. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <MainNavbar data-oid="1w64ti-" />
            <div
                className="min-h-screen bg-gradient-to-b from-[hsl(204, 100.00%, 50.00%)] to-[hsl(162, 100.00%, 50.00%)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
                data-oid="85czefh"
            >
                {/* Animated background elements */}
                <div className="fixed inset-0 overflow-hidden -z-10" data-oid="kf6dzp-">
                    <div
                        className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-50 rounded-full blur-3xl animate-blob"
                        data-oid="7zy5z0-"
                    ></div>
                    <div
                        className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-50 rounded-full blur-3xl animate-blob animation-delay-2000"
                        data-oid="qrl_s5r"
                    ></div>
                    <div
                        className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-40 rounded-full blur-3xl animate-blob animation-delay-4000"
                        data-oid="gcfq6ye"
                    ></div>
                </div>

                <div className="w-full sm:mx-auto sm:max-w-md z-10 -mt-20" data-oid="_i5okr-">
                    <div className="text-center mb-6" data-oid="aworqgk">
                        <h2 className=" text-3xl font-extrabold text-gray-800" data-oid="f5iqv1o">
                            Welcome back
                        </h2>
                        <p className="mt-2 text-sm text-gray-600" data-oid="ng-w2jy">
                            Sign in to access your account
                        </p>
                    </div>

                    <div
                        className="bg-white/80 backdrop-blur-md py-8 px-6 shadow-xl rounded-xl border border-[hsl(210,30%,95%)] sm:px-10 transform transition-all duration-500 hover:shadow-2xl"
                        data-oid="20jyxr3"
                    >
                        {error && (
                            <div
                                className="mb-4 p-3 bg-red-50 text-red-700 text-sm rounded-md border border-red-200"
                                data-oid="k0l9n.v"
                            >
                                {error}
                            </div>
                        )}

                        <form className="space-y-6" onSubmit={handleSubmit} data-oid="wi32-n4">
                            <div data-oid="86wnu_m">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                    data-oid="3ojt58r"
                                >
                                    Email address
                                </label>
                                <div className="mt-1" data-oid="7hyze02">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)] transition-colors duration-200"
                                        placeholder="you@example.com"
                                        data-oid="4hgguhl"
                                    />
                                </div>
                            </div>

                            <div data-oid="x-sf3rp">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700"
                                    data-oid="-bib_lw"
                                >
                                    Password
                                </label>
                                <div className="mt-1" data-oid="n-98i_w">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)] transition-colors duration-200"
                                        placeholder="••••••••"
                                        data-oid="t--_qnw"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between" data-oid="3wyoyrx">
                                <div className="flex items-center" data-oid="38-ncnu">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                        className="h-4 w-4 text-[hsl(196,80%,45%)] focus:ring-[hsl(196,80%,45%)] border-gray-300 rounded"
                                        data-oid="uekbd9e"
                                    />

                                    <label
                                        htmlFor="remember-me"
                                        className="ml-2 block text-sm text-gray-700"
                                        data-oid="xr32::-"
                                    >
                                        Remember me
                                    </label>
                                </div>

                                <div className="text-sm" data-oid="oga9me2">
                                    <Link
                                        href="/forgot-password"
                                        className="font-medium text-[hsl(196,80%,45%)] hover:text-[hsl(196,80%,35%)] transition-colors duration-200"
                                        data-oid="eunr3ke"
                                    >
                                        Forgot your password?
                                    </Link>
                                </div>
                            </div>

                            <div data-oid="tamq770">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(196,80%,45%)] transition-all duration-300 transform hover:translate-y-[-2px] ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    data-oid="ox8r_zf"
                                >
                                    {isLoading ? (
                                        <svg
                                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            data-oid="9os6mgf"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                                data-oid="wf4lyj-"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                data-oid="gzo:_1m"
                                            ></path>
                                        </svg>
                                    ) : null}
                                    {isLoading ? 'Signing in...' : 'Sign in'}
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="mt-6 text-center" data-oid="h_:a.s_">
                        <p className="text-sm text-gray-600" data-oid="wgcm6z.">
                            Don't have an account?{' '}
                            <Link
                                href="/register"
                                className="font-medium text-[hsl(196,80%,45%)] hover:text-[hsl(196,80%,35%)] transition-colors duration-200"
                                data-oid="rhqa_7c"
                            >
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
