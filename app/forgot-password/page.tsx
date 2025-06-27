'use client';

import { useState } from 'react';
import Link from 'next/link';

// SVG Logo component
const Logo = () => (
    <svg
        className="h-8 w-auto"
        viewBox="0 0 120 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-oid=".uic59z"
    >
        <path
            d="M10 5L20 15L10 25"
            stroke="#1E3A8A"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            data-oid="2io_j.t"
        />

        <path
            d="M30 5H40L50 25H40"
            stroke="#1E3A8A"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            data-oid=":wzqwv7"
        />

        <text
            x="60"
            y="22"
            fontFamily="Arial"
            fontSize="18"
            fontWeight="bold"
            fill="#1E3A8A"
            data-oid="ih0j3fm"
        >
            Careers
        </text>
    </svg>
);

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Simulate API call
        try {
            // Replace with actual password reset logic
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setIsSubmitted(true);
        } catch (err) {
            setError('Failed to send reset link. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div
            className="min-h-screen bg-gradient-to-b from-[hsl(210,50%,98%)] to-[hsl(196,60%,95%)] flex flex-col justify-center"
            data-oid="g8.ag-k"
        >
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden -z-10" data-oid="g3zxrd:">
                <div
                    className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-20 rounded-full blur-3xl animate-blob"
                    data-oid="pdpzmnb"
                ></div>
                <div
                    className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"
                    data-oid="gq7jxs:"
                ></div>
                <div
                    className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-4000"
                    data-oid=":z6qqai"
                ></div>
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-md px-4 py-8 z-10" data-oid="dkya956">
                <div className="text-center mb-6" data-oid="u1wyyjl">
                    <Link href="/" className="inline-block" data-oid="mtn8tku">
                        <Logo data-oid="rosw.zv" />
                    </Link>
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-800" data-oid="rc6i07m">
                        Reset your password
                    </h2>
                    <p className="mt-2 text-sm text-gray-600" data-oid="2peu-dn">
                        We'll send you a link to reset your password
                    </p>
                </div>

                <div
                    className="bg-white/80 backdrop-blur-md py-8 px-6 shadow-xl rounded-xl border border-[hsl(210,30%,95%)] sm:px-10 transform transition-all duration-500 hover:shadow-2xl"
                    data-oid="-voxesm"
                >
                    {error && (
                        <div
                            className="mb-4 p-3 bg-red-50 text-red-700 text-sm rounded-md border border-red-200"
                            data-oid="4x5x26e"
                        >
                            {error}
                        </div>
                    )}

                    {isSubmitted ? (
                        <div className="text-center" data-oid="_fb_k0f">
                            <div className="mb-4 flex justify-center" data-oid="wii4gy0">
                                <div
                                    className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center"
                                    data-oid="ohhy1o8"
                                >
                                    <svg
                                        className="h-8 w-8 text-green-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="lhu-an_"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="fsec:9t"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-lg font-medium text-gray-900" data-oid="xi7e1x7">
                                Check your email
                            </h3>
                            <p className="mt-2 text-sm text-gray-600" data-oid="-3jqtk4">
                                We've sent a password reset link to{' '}
                                <strong data-oid="ss0omlu">{email}</strong>
                            </p>
                            <p className="mt-4 text-sm text-gray-600" data-oid="v72g4bu">
                                Didn't receive the email? Check your spam folder or{' '}
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="font-medium text-[hsl(196,80%,45%)] hover:text-[hsl(196,80%,35%)] transition-colors duration-200"
                                    data-oid="y4agd9p"
                                >
                                    try again
                                </button>
                            </p>
                        </div>
                    ) : (
                        <form className="space-y-6" onSubmit={handleSubmit} data-oid="npbgwr8">
                            <div data-oid="7mkfhrz">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                    data-oid="l79etvv"
                                >
                                    Email address
                                </label>
                                <div className="mt-1 focus-within-scale" data-oid="mktmt74">
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
                                        data-oid="r:qckmn"
                                    />
                                </div>
                            </div>

                            <div data-oid="iuf3cpl">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(196,80%,45%)] transition-all duration-300 transform hover:translate-y-[-2px] ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    data-oid="f4romwf"
                                >
                                    {isLoading ? (
                                        <svg
                                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            data-oid="na0sf.i"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                                data-oid="pjz3url"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                data-oid="84lp50o"
                                            ></path>
                                        </svg>
                                    ) : null}
                                    {isLoading ? 'Sending...' : 'Send reset link'}
                                </button>
                            </div>
                        </form>
                    )}
                </div>

                <div className="mt-6 text-center" data-oid="7qnlggi">
                    <p className="text-sm text-gray-600" data-oid="hp7bgeu">
                        Remember your password?{' '}
                        <Link
                            href="/login"
                            className="font-medium text-[hsl(196,80%,45%)] hover:text-[hsl(196,80%,35%)] transition-colors duration-200"
                            data-oid="ndubvgm"
                        >
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
