'use client';

import MainNavbar from '@/components/mainNavbar';
import { useAuth } from '@/lib/auth/AuthContext';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { login, isAuthenticated } = useAuth();
    const router = useRouter();
    const searchParams = useSearchParams();

    // Redirect if already authenticated
    useEffect(() => {
        if (isAuthenticated) {
            const redirectTo = searchParams.get('redirect') || '/dashboard';
            router.push(redirectTo);
        }
    }, [isAuthenticated, router, searchParams]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        const result = await login(email, password);

        if (!result.success) {
            setError(result.error || 'Login failed');
        }

        setIsLoading(false);
    };

    return (
        <>
            <div
                className="min-h-screen bg-gradient-to-br from-[hsl(196,80%,45%)] via-[hsl(210,70%,45%)] to-[hsl(175,70%,41%)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
                data-oid="nlvqou:"
            >
                <div className="max-w-md w-full space-y-8" data-oid="eph87iy">
                    <div
                        className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20"
                        data-oid="1c:whjq"
                    >
                        <div data-oid="fn9oq4q">
                            <h2
                                className="mt-6 text-center text-3xl font-extrabold text-gray-900"
                                data-oid="r7lzat-"
                            >
                                Sign in to your account
                            </h2>
                            <p
                                className="mt-2 text-center text-sm text-gray-600"
                                data-oid="coutkf4"
                            >
                                Or{' '}
                                <Link
                                    href="/register"
                                    className="font-medium text-[hsl(196,80%,45%)] hover:text-[hsl(196,80%,40%)] transition-colors"
                                    data-oid="5esl7f6"
                                >
                                    create a new account
                                </Link>
                            </p>
                        </div>

                        <form className="mt-8 space-y-6" onSubmit={handleSubmit} data-oid="e8hs7hr">
                            {error && (
                                <div
                                    className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg"
                                    data-oid="eejy.5x"
                                >
                                    {error}
                                </div>
                            )}

                            <div className="space-y-4" data-oid="-59:8k2">
                                <div data-oid="32w1jh:">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700"
                                        data-oid="ik2vogq"
                                    >
                                        Email address
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="mt-1 appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)] focus:z-10 sm:text-sm transition-all duration-200"
                                        placeholder="Enter your email"
                                        data-oid="g7u.o_n"
                                    />
                                </div>

                                <div data-oid="4zi2:fm">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium text-gray-700"
                                        data-oid="95sgd5."
                                    >
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="mt-1 appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)] focus:z-10 sm:text-sm transition-all duration-200"
                                        placeholder="Enter your password"
                                        data-oid="7y0m:aj"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between" data-oid="ni.:ugl">
                                <div className="flex items-center" data-oid="6g16_gr">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-[hsl(196,80%,45%)] focus:ring-[hsl(196,80%,45%)] border-gray-300 rounded"
                                        data-oid="mz7jnuj"
                                    />

                                    <label
                                        htmlFor="remember-me"
                                        className="ml-2 block text-sm text-gray-900"
                                        data-oid="pmqb13i"
                                    >
                                        Remember me
                                    </label>
                                </div>

                                <div className="text-sm" data-oid="21y7ftr">
                                    <Link
                                        href="/forgot-password"
                                        className="font-medium text-[hsl(196,80%,45%)] hover:text-[hsl(196,80%,40%)] transition-colors"
                                        data-oid="-zcji:o"
                                    >
                                        Forgot your password?
                                    </Link>
                                </div>
                            </div>

                            <div data-oid="7_8xra3">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(196,80%,45%)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
                                    data-oid="sq26m_j"
                                >
                                    {isLoading ? (
                                        <div className="flex items-center" data-oid="aqt4w7a">
                                            <div
                                                className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                                                data-oid="c58dno-"
                                            ></div>
                                            Signing in...
                                        </div>
                                    ) : (
                                        'Sign in'
                                    )}
                                </button>
                            </div>

                            <div className="mt-6" data-oid="330m_nb">
                                <div className="relative" data-oid="49o.ezp">
                                    <div
                                        className="absolute inset-0 flex items-center"
                                        data-oid="6vthylw"
                                    >
                                        <div
                                            className="w-full border-t border-gray-300"
                                            data-oid="cz13.32"
                                        />
                                    </div>
                                    <div
                                        className="relative flex justify-center text-sm"
                                        data-oid="z9ls.gw"
                                    >
                                        <span
                                            className="px-2 bg-white text-gray-500"
                                            data-oid="8a9y7jv"
                                        >
                                            Demo Credentials
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className="mt-3 text-center text-xs text-gray-600 bg-gray-50 p-3 rounded-lg"
                                    data-oid="5:n_tun"
                                >
                                    <p data-oid="8n9m:9-">
                                        <strong data-oid="q.:cecq">Email:</strong> demo@xcareers.com
                                    </p>
                                    <p data-oid="havau7-">
                                        <strong data-oid="0.8qdle">Password:</strong> Any password
                                        (6+ characters)
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="snqh.s7">
            <MainNavbar data-oid="cvd9f_w" />
            <Suspense
                fallback={
                    <div
                        className="min-h-screen bg-gradient-to-br from-[hsl(196,80%,45%)] via-[hsl(210,70%,45%)] to-[hsl(175,70%,41%)] flex items-center justify-center"
                        data-oid="qs8fy3v"
                    >
                        <div
                            className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"
                            data-oid="kmc-mhb"
                        ></div>
                    </div>
                }
                data-oid="fj00bp4"
            >
                <LoginForm data-oid="mwd:nhw" />
            </Suspense>
        </div>
    );
}
