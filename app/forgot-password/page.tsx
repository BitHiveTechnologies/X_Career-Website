'use client';

import Link from 'next/link';
import { useState } from 'react';
import Logo from '@/components/ui/Logo';

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
            data-oid="twbwwk2"
        >
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden -z-10" data-oid="94rk9v_">
                <div
                    className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-20 rounded-full blur-3xl animate-blob"
                    data-oid="vln25_:"
                ></div>
                <div
                    className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"
                    data-oid="d5p02s-"
                ></div>
                <div
                    className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-20 rounded-full blur-3xl animate-blob animation-delay-4000"
                    data-oid="eh-c:x-"
                ></div>
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-md px-4 py-8 z-10" data-oid="c3l57ox">
                <div className="text-center mb-6" data-oid="2hxpkk2">
                    <Logo data-oid="gq6l-vm" />
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-800" data-oid="f-:ra-i">
                        Reset your password
                    </h2>
                    <p className="mt-2 text-sm text-gray-600" data-oid="rhig8yl">
                        We'll send you a link to reset your password
                    </p>
                </div>

                <div
                    className="bg-white/80 backdrop-blur-md py-8 px-6 shadow-xl rounded-xl border border-[hsl(210,30%,95%)] sm:px-10 transform transition-all duration-500 hover:shadow-2xl"
                    data-oid="eep:wl8"
                >
                    {error && (
                        <div
                            className="mb-4 p-3 bg-red-50 text-red-700 text-sm rounded-md border border-red-200"
                            data-oid="atik6q4"
                        >
                            {error}
                        </div>
                    )}

                    {isSubmitted ? (
                        <div className="text-center" data-oid="9gb3l1g">
                            <div className="mb-4 flex justify-center" data-oid="nwuelf-">
                                <div
                                    className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center"
                                    data-oid="_rxda1q"
                                >
                                    <svg
                                        className="h-8 w-8 text-green-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="_rq98-k"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="njk5saw"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-lg font-medium text-gray-900" data-oid="o18jhtk">
                                Check your email
                            </h3>
                            <p className="mt-2 text-sm text-gray-600" data-oid="tp:iwqz">
                                We've sent a password reset link to{' '}
                                <strong data-oid="3jif:0k">{email}</strong>
                            </p>
                            <p className="mt-4 text-sm text-gray-600" data-oid=".gk01lp">
                                Didn't receive the email? Check your spam folder or{' '}
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="font-medium text-[hsl(196,80%,45%)] hover:text-[hsl(196,80%,35%)] transition-colors duration-200"
                                    data-oid="m07r16s"
                                >
                                    try again
                                </button>
                            </p>
                        </div>
                    ) : (
                        <form className="space-y-6" onSubmit={handleSubmit} data-oid="t.dwt0-">
                            <div data-oid="wjti4nx">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                    data-oid="uep4dyn"
                                >
                                    Email address
                                </label>
                                <div className="mt-1 focus-within-scale" data-oid="0rm6ud8">
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
                                        data-oid="x250wks"
                                    />
                                </div>
                            </div>

                            <div data-oid="dj8mp:y">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(196,80%,45%)] transition-all duration-300 transform hover:translate-y-[-2px] ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    data-oid="47v3qcb"
                                >
                                    {isLoading ? (
                                        <svg
                                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            data-oid="u9-:4__"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                                data-oid="n8gkwfm"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                data-oid="dxj6a-z"
                                            ></path>
                                        </svg>
                                    ) : null}
                                    {isLoading ? 'Sending...' : 'Send reset link'}
                                </button>
                            </div>
                        </form>
                    )}
                </div>

                <div className="mt-6 text-center" data-oid="3_7ec6p">
                    <p className="text-sm text-gray-600" data-oid="3uyx-5w">
                        Remember your password?{' '}
                        <Link
                            href="/login"
                            className="font-medium text-[hsl(196,80%,45%)] hover:text-[hsl(196,80%,35%)] transition-colors duration-200"
                            data-oid="b81ea86"
                        >
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
