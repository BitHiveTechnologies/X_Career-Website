'use client';

import MainNavbar from '@/components/mainNavbar';
import LoginModal from '@/components/LoginModal';
import { useAuth } from '@/lib/auth/AuthContextBackend';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

function LoginForm() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { isAuthenticated } = useAuth();
    const router = useRouter();
    const searchParams = useSearchParams();

    // Redirect if already authenticated
    useEffect(() => {
        if (isAuthenticated) {
            const redirectTo = searchParams.get('redirect') || '/dashboard';
            router.push(redirectTo);
        }
    }, [isAuthenticated, router, searchParams]);

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-[hsl(196,80%,45%)] via-[hsl(210,70%,45%)] to-[hsl(175,70%,41%)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20 text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                        </div>
                        
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
                            Welcome Back
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Sign in to your account and continue your career journey
                        </p>
                        
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="w-full bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white py-3 px-6 rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105"
                        >
                            Sign In
                        </button>
                        
                        <p className="mt-6 text-sm text-gray-600">
                            Don't have an account?{' '}
                            <Link
                                href="/register"
                                className="font-medium text-[hsl(196,80%,45%)] hover:text-[hsl(196,80%,40%)] transition-colors"
                            >
                                Create one here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            
            <LoginModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
        </>
    );
}

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans">
            <MainNavbar />
            <Suspense
                fallback={
                    <div className="min-h-screen bg-gradient-to-br from-[hsl(196,80%,45%)] via-[hsl(210,70%,45%)] to-[hsl(175,70%,41%)] flex items-center justify-center">
                        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
                    </div>
                }
            >
                <LoginForm />
            </Suspense>
        </div>
    );
}
