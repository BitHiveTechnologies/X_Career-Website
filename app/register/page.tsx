'use client';

import MainNavbar from '@/components/mainNavbar';
import RegistrationModal from '@/components/RegistrationModal';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

function RegisterForm() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-[hsl(196,80%,45%)] via-[hsl(210,70%,45%)] to-[hsl(175,70%,41%)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20 text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
                            Join X Career
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Create your account and start your career journey with us
                        </p>
                        
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="w-full bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white py-3 px-6 rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105"
                        >
                            Create Account
                        </button>
                        
                        <p className="mt-6 text-sm text-gray-600">
                            Already have an account?{' '}
                            <Link
                                href="/login"
                                className="font-medium text-[hsl(196,80%,45%)] hover:text-[hsl(196,80%,40%)] transition-colors"
                            >
                                Sign in here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            
            <RegistrationModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
        </>
    );
}

export default function RegisterPage() {
    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="wdcsjfm">
            <MainNavbar data-oid="shn5kza" />
            <Suspense
                fallback={
                    <div
                        className="min-h-screen bg-gradient-to-br from-[hsl(196,80%,45%)] via-[hsl(210,70%,45%)] to-[hsl(175,70%,41%)] flex items-center justify-center"
                        data-oid="nww.z2f"
                    >
                        <div
                            className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"
                            data-oid="_7ghd0s"
                        ></div>
                    </div>
                }
                data-oid="crw81vn"
            >
                <RegisterForm data-oid=".j2ptn_" />
            </Suspense>
        </div>
    );
}
