'use client';

import MainNavbar from '@/components/mainNavbar';

export default function ShippingPolicyPage() {
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
                        Shipping Policy
                    </h1>

                    <div
                        className="prose prose-lg max-w-none text-gray-700 space-y-6"
                        data-oid="4r8_vg5"
                    >
                        <div className="mb-6">
                            <p className="text-sm text-gray-600 mb-4">
                                <strong>Effective Date:</strong> [Yet to be declared]
                            </p>
                        </div>

                        <section data-oid="kvsy_:e">
                            <p className="text-gray-700 mb-6">
                                We do not ship physical products. All services are delivered digitally.
                            </p>
                            
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Delivery timeframe</h3>
                                        <p className="text-gray-700">
                                            Login credentials and notifications are emailed within 24hrs of payment confirmation.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Access Issue</h3>
                                        <p className="text-gray-700">
                                            Check your spam folder or contact support if you do not receive access details in the stated time.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Responsibility</h3>
                                        <p className="text-gray-700">
                                            We are not liable for delivery delays caused by incorrect email addresses or technical issues beyond our control.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="border-t border-gray-200 pt-6 mt-8" data-oid="gvpq2l5">
                            <p className="text-sm text-gray-500" data-oid="ysk6nzn">
                                Last updated: [Yet to be declared]
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 