'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/auth/AuthContext';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import MainNavbar from '@/components/mainNavbar';

export default function LoginPage() {
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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="6w984hm">
            <MainNavbar data-oid="mbfemnv" />

            <div
                className="min-h-screen bg-gradient-to-br from-[hsl(196,80%,45%)] via-[hsl(210,70%,45%)] to-[hsl(175,70%,41%)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
                data-oid="br7cvx1"
            >
                <div className="max-w-md w-full space-y-8" data-oid="ac:7p9a">
                    <div
                        className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20"
                        data-oid="91wu:7j"
                    >
                        <div data-oid="hnzvngy">
                            <h2
                                className="mt-6 text-center text-3xl font-extrabold text-gray-900"
                                data-oid="kb0gli0"
                            >
                                Sign in to your account
                            </h2>
                            <p
                                className="mt-2 text-center text-sm text-gray-600"
                                data-oid="ym0rfbr"
                            >
                                Or{' '}
                                <Link
                                    href="/register"
                                    className="font-medium text-[hsl(196,80%,45%)] hover:text-[hsl(196,80%,40%)] transition-colors"
                                    data-oid="mefakd4"
                                >
                                    create a new account
                                </Link>
                            </p>
                        </div>

                        <form className="mt-8 space-y-6" onSubmit={handleSubmit} data-oid="agj_rw9">
                            {error && (
                                <div
                                    className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg"
                                    data-oid="7ubdbrf"
                                >
                                    {error}
                                </div>
                            )}

                            <div className="space-y-4" data-oid="5sweja2">
                                <div data-oid="v2qxthp">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700"
                                        data-oid="t7_urue"
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
                                        data-oid="zj3313s"
                                    />
                                </div>

                                <div data-oid="i3z205o">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium text-gray-700"
                                        data-oid="-1y9751"
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
                                        data-oid="lj66_b3"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between" data-oid="7-.frc4">
                                <div className="flex items-center" data-oid="dxoo0.j">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-[hsl(196,80%,45%)] focus:ring-[hsl(196,80%,45%)] border-gray-300 rounded"
                                        data-oid="peiq3a0"
                                    />

                                    <label
                                        htmlFor="remember-me"
                                        className="ml-2 block text-sm text-gray-900"
                                        data-oid="_5vxc:l"
                                    >
                                        Remember me
                                    </label>
                                </div>

                                <div className="text-sm" data-oid="r.-9_jr">
                                    <Link
                                        href="/forgot-password"
                                        className="font-medium text-[hsl(196,80%,45%)] hover:text-[hsl(196,80%,40%)] transition-colors"
                                        data-oid="t7iapmi"
                                    >
                                        Forgot your password?
                                    </Link>
                                </div>
                            </div>

                            <div data-oid="knc71:j">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(196,80%,45%)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
                                    data-oid="jveb.as"
                                >
                                    {isLoading ? (
                                        <div className="flex items-center" data-oid="0oj07nn">
                                            <div
                                                className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                                                data-oid="n9wi:1e"
                                            ></div>
                                            Signing in...
                                        </div>
                                    ) : (
                                        'Sign in'
                                    )}
                                </button>
                            </div>

                            <div className="mt-6" data-oid="en302fc">
                                <div className="relative" data-oid="1t_-a3q">
                                    <div
                                        className="absolute inset-0 flex items-center"
                                        data-oid="rvkxmvx"
                                    >
                                        <div
                                            className="w-full border-t border-gray-300"
                                            data-oid="cmnw.tb"
                                        />
                                    </div>
                                    <div
                                        className="relative flex justify-center text-sm"
                                        data-oid="c_:n1xe"
                                    >
                                        <span
                                            className="px-2 bg-white text-gray-500"
                                            data-oid="5_:i_fi"
                                        >
                                            Demo Credentials
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className="mt-3 text-center text-xs text-gray-600 bg-gray-50 p-3 rounded-lg"
                                    data-oid="xd9wfbh"
                                >
                                    <p data-oid="j3_ek88">
                                        <strong data-oid="xguetp9">Email:</strong> demo@careerx.com
                                    </p>
                                    <p data-oid="___tgzq">
                                        <strong data-oid="q90ljoc">Password:</strong> Any password
                                        (6+ characters)
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
