'use client';

import MainNavbar from '@/components/mainNavbar';

export default function CareersPage() {
    return (
        <div
            className="min-h-screen bg-gradient-to-br from-[hsl(210,50%,98%)] to-[hsl(196,60%,95%)]"
            data-oid="b5k3e7f"
        >
            <MainNavbar data-oid="mwqklv8" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-oid="fwlw7j8">
                <div
                    className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8"
                    data-oid="kdtjqps"
                >
                    <h1 className="text-3xl font-bold text-gray-800 mb-8" data-oid="iws4fc.">
                        Careers at X Careers
                    </h1>

                    <div
                        className="prose prose-lg max-w-none text-gray-700 space-y-6"
                        data-oid="4r8_vg5"
                    >
                        <div className="text-center py-12">
                            <div className="mb-6">
                                <svg
                                    className="mx-auto h-16 w-16 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                No Hirings Currently
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                We're not actively hiring at the moment, but we're always looking for talented individuals 
                                who are passionate about helping tech freshers succeed. Check back later for new opportunities!
                            </p>
                            <div className="mt-8">
                                <p className="text-sm text-gray-500">
                                    To stay updated on future openings, follow us on{' '}
                                    <a 
                                        href="https://www.linkedin.com/company/x-careers/" 
                                        className="text-blue-600 hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        LinkedIn
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 