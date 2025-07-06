'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/auth/AuthContext';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import MainNavbar from '@/components/mainNavbar';

export default function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { register, isAuthenticated } = useAuth();
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

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }

        setIsLoading(true);

        const result = await register(name, email, password);

        if (!result.success) {
            setError(result.error || 'Registration failed');
        }

        setIsLoading(false);
    };

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="g3zolkw">
            <MainNavbar data-oid="c3nx2c4" />

            <div
                className="min-h-screen bg-gradient-to-br from-[hsl(196,80%,45%)] via-[hsl(210,70%,45%)] to-[hsl(175,70%,41%)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
                data-oid="y6j.4q1"
            >
                <div className="max-w-md w-full space-y-8" data-oid="van3r2f">
                    <div
                        className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20"
                        data-oid="ayj_dx."
                    >
                        <div data-oid="iyyww56">
                            <h2
                                className="mt-6 text-center text-3xl font-extrabold text-gray-900"
                                data-oid="_g68f7r"
                            >
                                Create your account
                            </h2>
                            <p
                                className="mt-2 text-center text-sm text-gray-600"
                                data-oid="bdipu7h"
                            >
                                Or{' '}
                                <Link
                                    href="/login"
                                    className="font-medium text-[hsl(196,80%,45%)] hover:text-[hsl(196,80%,40%)] transition-colors"
                                    data-oid="il247xj"
                                >
                                    sign in to your existing account
                                </Link>
                            </p>
                        </div>

                        <form className="mt-8 space-y-6" onSubmit={handleSubmit} data-oid="cg7mq09">
                            {error && (
                                <div
                                    className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg"
                                    data-oid="vsxmug9"
                                >
                                    {error}
                                </div>
                            )}

                            <div className="space-y-4" data-oid="6znyo6r">
                                <div data-oid="suc5maz">
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700"
                                        data-oid="dbx0vd9"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="mt-1 appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)] focus:z-10 sm:text-sm transition-all duration-200"
                                        placeholder="Enter your full name"
                                        data-oid="zypeijk"
                                    />
                                </div>

                                <div data-oid="63clhnn">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700"
                                        data-oid="o-azr2f"
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
                                        data-oid="ck2dj_-"
                                    />
                                </div>

                                <div data-oid="uj7:8as">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium text-gray-700"
                                        data-oid="dblq5ea"
                                    >
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="new-password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="mt-1 appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)] focus:z-10 sm:text-sm transition-all duration-200"
                                        placeholder="Create a password"
                                        data-oid="0rm7.er"
                                    />
                                </div>

                                <div data-oid="2yey:bl">
                                    <label
                                        htmlFor="confirmPassword"
                                        className="block text-sm font-medium text-gray-700"
                                        data-oid="3_4gp.4"
                                    >
                                        Confirm Password
                                    </label>
                                    <input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="password"
                                        autoComplete="new-password"
                                        required
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="mt-1 appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)] focus:z-10 sm:text-sm transition-all duration-200"
                                        placeholder="Confirm your password"
                                        data-oid="vh1-zes"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center" data-oid="e8iap:r">
                                <input
                                    id="agree-terms"
                                    name="agree-terms"
                                    type="checkbox"
                                    required
                                    className="h-4 w-4 text-[hsl(196,80%,45%)] focus:ring-[hsl(196,80%,45%)] border-gray-300 rounded"
                                    data-oid="mip83vp"
                                />

                                <label
                                    htmlFor="agree-terms"
                                    className="ml-2 block text-sm text-gray-900"
                                    data-oid="12xfy4c"
                                >
                                    I agree to the{' '}
                                    <Link
                                        href="/terms"
                                        className="text-[hsl(196,80%,45%)] hover:text-[hsl(196,80%,40%)]"
                                        data-oid="h-a3swl"
                                    >
                                        Terms of Service
                                    </Link>{' '}
                                    and{' '}
                                    <Link
                                        href="/privacy-policy"
                                        className="text-[hsl(196,80%,45%)] hover:text-[hsl(196,80%,40%)]"
                                        data-oid="l67t:nj"
                                    >
                                        Privacy Policy
                                    </Link>
                                </label>
                            </div>

                            <div data-oid="29q5ejt">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(196,80%,45%)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
                                    data-oid="-6g18gt"
                                >
                                    {isLoading ? (
                                        <div className="flex items-center" data-oid="79mtgos">
                                            <div
                                                className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                                                data-oid="bs1q7c-"
                                            ></div>
                                            Creating account...
                                        </div>
                                    ) : (
                                        'Create account'
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
