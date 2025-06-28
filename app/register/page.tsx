'use client';

import MainNavbar from '@/components/mainNavbar';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function RegisterPage() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Simulate API call
        try {
            // Replace with actual registration logic
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // For demo purposes, just redirect to login
            router.push('/login');
        } catch (err) {
            setError('Registration failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <MainNavbar data-oid="r20uqz." />
            <div
                className="min-h-screen bg-gradient-to-b from-[hsl(204, 100.00%, 50.00%)] to-[hsl(162, 100.00%, 50.00%)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
                data-oid="vi9zg-i"
            >
                {/* Animated background elements */}
                <div className="fixed inset-0 overflow-hidden -z-10" data-oid="6bw6hqw">
                    <div
                        className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-50 rounded-full blur-3xl animate-blob"
                        data-oid="t3137ub"
                    ></div>
                    <div
                        className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-50 rounded-full blur-3xl animate-blob animation-delay-2000"
                        data-oid="_c6i0y4"
                    ></div>
                    <div
                        className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-40 rounded-full blur-3xl animate-blob animation-delay-4000"
                        data-oid="v0iw9qq"
                    ></div>
                </div>

                <div className="w-full sm:mx-auto sm:max-w-md z-10 -mt-20" data-oid="6o7l4w9">
                    <div className="text-center mb-6" data-oid="g73jjj7">
                        <h2 className="text-3xl font-extrabold text-gray-800" data-oid="tujh82p">
                            Create an account
                        </h2>
                        <p className="mt-2 text-sm text-gray-600" data-oid=":jjbzev">
                            Sign up to get started with CareerX
                        </p>
                    </div>

                    <div
                        className="bg-white/80 backdrop-blur-md py-8 px-6 shadow-xl rounded-xl border border-[hsl(210,30%,95%)] sm:px-10 transform transition-all duration-500 hover:shadow-2xl"
                        data-oid="ylvq69q"
                    >
                        {error && (
                            <div
                                className="mb-4 p-3 bg-red-50 text-red-700 text-sm rounded-md border border-red-200"
                                data-oid="tpams0."
                            >
                                {error}
                            </div>
                        )}

                        <form className="space-y-6" onSubmit={handleSubmit} data-oid="l9d1vcx">
                            <div data-oid="0jw:cik">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                    data-oid="0:if24g"
                                >
                                    Full Name
                                </label>
                                <div className="mt-1" data-oid="5mul36z">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)] transition-colors duration-200"
                                        placeholder="John Doe"
                                        data-oid=".t22vul"
                                    />
                                </div>
                            </div>

                            <div data-oid="i3dnhq3">
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-medium text-gray-700"
                                    data-oid=":zcqytp"
                                >
                                    Phone Number
                                </label>
                                <div className="mt-1" data-oid="r_87yye">
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        autoComplete="tel"
                                        required
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)] transition-colors duration-200"
                                        placeholder="+1 (123) 456-7890"
                                        data-oid="iuprmt2"
                                    />
                                </div>
                            </div>

                            <div data-oid="xkb54qf">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                    data-oid="dib0:p-"
                                >
                                    Email address
                                </label>
                                <div className="mt-1" data-oid="qg0yjdy">
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
                                        data-oid="4-4bstu"
                                    />
                                </div>
                            </div>

                            <div data-oid="3g7q:kn">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700"
                                    data-oid="kbhlyid"
                                >
                                    Password
                                </label>
                                <div className="mt-1" data-oid="maem6j3">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="new-password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)] transition-colors duration-200"
                                        placeholder="••••••••"
                                        data-oid="cqn2.rn"
                                    />
                                </div>
                            </div>

                            <div data-oid="bv5h8so">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(196,80%,45%)] transition-all duration-300 transform hover:translate-y-[-2px] ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    data-oid="_l2aka9"
                                >
                                    {isLoading ? (
                                        <svg
                                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            data-oid="dfp-:1h"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                                data-oid="dzcv1hz"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                data-oid="sxr-cac"
                                            ></path>
                                        </svg>
                                    ) : null}
                                    {isLoading ? 'Creating account...' : 'Create account'}
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="mt-6 text-center" data-oid="dn128hh">
                        <p className="text-sm text-gray-600" data-oid="e.0b8uc">
                            Already have an account?{' '}
                            <Link
                                href="/login"
                                className="font-medium text-[hsl(196,80%,45%)] hover:text-[hsl(196,80%,35%)] transition-colors duration-200"
                                data-oid="3-qbz11"
                            >
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
