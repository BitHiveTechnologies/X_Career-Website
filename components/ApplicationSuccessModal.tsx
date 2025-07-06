'use client';

import { useState, useEffect } from 'react';

interface ApplicationSuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
    jobTitle: string;
    companyName: string;
}

export default function ApplicationSuccessModal({
    isOpen,
    onClose,
    jobTitle,
    companyName,
}: ApplicationSuccessModalProps) {
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setShowConfetti(true);
            const timer = setTimeout(() => setShowConfetti(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={handleBackdropClick}
            data-oid="y-5cjli"
        >
            <div
                className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative"
                data-oid=":w_q8y0"
            >
                {/* Confetti Animation */}
                {showConfetti && (
                    <div className="absolute inset-0 pointer-events-none" data-oid="uvc1d29">
                        {[...Array(20)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute animate-bounce"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 2}s`,
                                    animationDuration: `${1 + Math.random()}s`,
                                }}
                                data-oid="zs6x0dv"
                            >
                                🎉
                            </div>
                        ))}
                    </div>
                )}

                {/* Success Icon */}
                <div className="text-center p-8" data-oid="ip5wegz">
                    <div
                        className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6"
                        data-oid=":04qgss"
                    >
                        <svg
                            className="h-8 w-8 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="nm1wiis"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                                data-oid="1uf2nv9"
                            />
                        </svg>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-2" data-oid="f4vinhy">
                        Application Submitted!
                    </h2>

                    <p className="text-gray-600 mb-6" data-oid="lfcwzmx">
                        Your application for{' '}
                        <span className="font-semibold text-[hsl(196,80%,45%)]" data-oid="9qdzdbh">
                            {jobTitle}
                        </span>{' '}
                        at{' '}
                        <span className="font-semibold text-[hsl(196,80%,45%)]" data-oid="4-65pq.">
                            {companyName}
                        </span>{' '}
                        has been successfully submitted.
                    </p>

                    {/* Next Steps */}
                    <div className="bg-blue-50 rounded-lg p-4 mb-6 text-left" data-oid="yhlfyyo">
                        <h3 className="font-semibold text-gray-800 mb-3" data-oid="6uo-6l5">
                            What happens next?
                        </h3>
                        <div className="space-y-2 text-sm text-gray-600" data-oid="6.r-5ru">
                            <div className="flex items-center gap-2" data-oid="ut.j0dt">
                                <div
                                    className="w-2 h-2 bg-blue-500 rounded-full"
                                    data-oid="4hdf19h"
                                ></div>
                                <span data-oid="vkxsox6">
                                    You'll receive a confirmation email shortly
                                </span>
                            </div>
                            <div className="flex items-center gap-2" data-oid="ayub0-f">
                                <div
                                    className="w-2 h-2 bg-blue-500 rounded-full"
                                    data-oid="8mw74hj"
                                ></div>
                                <span data-oid="v:ev76a">HR team will review your application</span>
                            </div>
                            <div className="flex items-center gap-2" data-oid="-4e_5dc">
                                <div
                                    className="w-2 h-2 bg-blue-500 rounded-full"
                                    data-oid=".dh0zae"
                                ></div>
                                <span data-oid="raajmop">
                                    You'll be contacted within 3-5 business days
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3" data-oid="3-psy3a">
                        <button
                            onClick={onClose}
                            className="flex-1 px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300"
                            data-oid="k2yvf.8"
                        >
                            Continue Browsing
                        </button>
                        <button
                            onClick={() => {
                                // Navigate to applications page or similar
                                onClose();
                            }}
                            className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                            data-oid="1rgl40d"
                        >
                            View Applications
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
