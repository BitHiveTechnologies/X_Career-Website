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
            data-oid="vbq2spa"
        >
            <div
                className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative"
                data-oid="k6tus:e"
            >
                {/* Confetti Animation */}
                {showConfetti && (
                    <div className="absolute inset-0 pointer-events-none" data-oid="iolpjyo">
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
                                data-oid="tv4ehn0"
                            >
                                🎉
                            </div>
                        ))}
                    </div>
                )}

                {/* Success Icon */}
                <div className="text-center p-8" data-oid="odfvf3x">
                    <div
                        className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6"
                        data-oid=":j6j8_8"
                    >
                        <svg
                            className="h-8 w-8 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="bdexump"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                                data-oid="et6odmc"
                            />
                        </svg>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-2" data-oid="-_c-amx">
                        Application Submitted!
                    </h2>

                    <p className="text-gray-600 mb-6" data-oid="edj.w:4">
                        Your application for{' '}
                        <span className="font-semibold text-[hsl(196,80%,45%)]" data-oid="dxpobyn">
                            {jobTitle}
                        </span>{' '}
                        at{' '}
                        <span className="font-semibold text-[hsl(196,80%,45%)]" data-oid="nvg0484">
                            {companyName}
                        </span>{' '}
                        has been successfully submitted.
                    </p>

                    {/* Next Steps */}
                    <div className="bg-blue-50 rounded-lg p-4 mb-6 text-left" data-oid="rept8:n">
                        <h3 className="font-semibold text-gray-800 mb-3" data-oid="5biv2.d">
                            What happens next?
                        </h3>
                        <div className="space-y-2 text-sm text-gray-600" data-oid="jun44s4">
                            <div className="flex items-center gap-2" data-oid="iwji8ma">
                                <div
                                    className="w-2 h-2 bg-blue-500 rounded-full"
                                    data-oid="5-x6sb9"
                                ></div>
                                <span data-oid="ygpjqrw">
                                    You'll receive a confirmation email shortly
                                </span>
                            </div>
                            <div className="flex items-center gap-2" data-oid="g1ig3uh">
                                <div
                                    className="w-2 h-2 bg-blue-500 rounded-full"
                                    data-oid="0-i3_zh"
                                ></div>
                                <span data-oid=":gnu988">HR team will review your application</span>
                            </div>
                            <div className="flex items-center gap-2" data-oid="kpi3i45">
                                <div
                                    className="w-2 h-2 bg-blue-500 rounded-full"
                                    data-oid="0m4.pcs"
                                ></div>
                                <span data-oid="cq0_r9p">
                                    You'll be contacted within 3-5 business days
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3" data-oid="ovw8zym">
                        <button
                            onClick={onClose}
                            className="flex-1 px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300"
                            data-oid="52c89yz"
                        >
                            Continue Browsing
                        </button>
                        <button
                            onClick={() => {
                                // Navigate to applications page or similar
                                onClose();
                            }}
                            className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                            data-oid="jp5o_hc"
                        >
                            View Applications
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
