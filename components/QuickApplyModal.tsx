'use client';

import { useState } from 'react';
import { Job } from '@/app/jobs/page';

interface QuickApplyModalProps {
    job: Job;
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (applicationData: any) => void;
}

export default function QuickApplyModal({ job, isOpen, onClose, onSubmit }: QuickApplyModalProps) {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        resume: null as File | null,
        message: '',
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!isOpen) return null;

    const handleInputChange = (field: string, value: string | File | null) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        if (!formData.resume) newErrors.resume = 'Resume is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 2000));
            onSubmit(formData);
            onClose();
        } catch (error) {
            console.error('Error submitting application:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={handleBackdropClick}
            data-oid="-qj:phf"
        >
            <div
                className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden"
                data-oid="nxq8lui"
            >
                {/* Header */}
                <div
                    className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white p-6"
                    data-oid="ru0z8qc"
                >
                    <div className="flex items-center justify-between" data-oid=".k63o-n">
                        <div data-oid="vjejl:m">
                            <h1 className="text-2xl font-bold" data-oid=".xyckjq">
                                Quick Apply
                            </h1>
                            <p className="text-blue-100" data-oid="ca_3xww">
                                {job.title} at {job.company}
                            </p>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/20 rounded-full transition-colors"
                            data-oid="hzs8_:u"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="e2tppet"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                    data-oid="mfvbkq6"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-6" data-oid="4mk0jy0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-oid="yf-7m1q">
                        <div data-oid="o_k_utb">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="u7-sz2e"
                            >
                                Full Name *
                            </label>
                            <input
                                type="text"
                                value={formData.fullName}
                                onChange={(e) => handleInputChange('fullName', e.target.value)}
                                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] ${
                                    errors.fullName ? 'border-red-500' : 'border-gray-300'
                                }`}
                                placeholder="Enter your full name"
                                data-oid="mg6gqml"
                            />

                            {errors.fullName && (
                                <p className="text-red-500 text-sm mt-1" data-oid="ypp30lr">
                                    {errors.fullName}
                                </p>
                            )}
                        </div>

                        <div data-oid="5-euvuu">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="ifbtysc"
                            >
                                Email Address *
                            </label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] ${
                                    errors.email ? 'border-red-500' : 'border-gray-300'
                                }`}
                                placeholder="Enter your email address"
                                data-oid="uza-qz6"
                            />

                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1" data-oid="topc_zh">
                                    {errors.email}
                                </p>
                            )}
                        </div>
                    </div>

                    <div data-oid="3-nlcy1">
                        <label
                            className="block text-sm font-medium text-gray-700 mb-2"
                            data-oid="khvc8-9"
                        >
                            Phone Number *
                        </label>
                        <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] ${
                                errors.phone ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="Enter your phone number"
                            data-oid="qqqd-c1"
                        />

                        {errors.phone && (
                            <p className="text-red-500 text-sm mt-1" data-oid="40mh.m-">
                                {errors.phone}
                            </p>
                        )}
                    </div>

                    <div data-oid="o_s5m62">
                        <label
                            className="block text-sm font-medium text-gray-700 mb-2"
                            data-oid="hq-r9x6"
                        >
                            Resume/CV *
                        </label>
                        <div
                            className={`border-2 border-dashed rounded-lg p-6 text-center ${
                                errors.resume ? 'border-red-500' : 'border-gray-300'
                            }`}
                            data-oid="7f3._ze"
                        >
                            <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                onChange={(e) =>
                                    handleInputChange('resume', e.target.files?.[0] || null)
                                }
                                className="hidden"
                                id="quick-resume-upload"
                                data-oid="3xpxa4c"
                            />

                            <label
                                htmlFor="quick-resume-upload"
                                className="cursor-pointer"
                                data-oid="s6xrqxc"
                            >
                                <div className="text-gray-600" data-oid="jdvaq-:">
                                    <svg
                                        className="mx-auto h-8 w-8 text-gray-400"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 48 48"
                                        data-oid="6z_mhnk"
                                    >
                                        <path
                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            data-oid="tosx3j5"
                                        />
                                    </svg>
                                    <p className="mt-2 text-sm" data-oid="lc-zy8t">
                                        <span
                                            className="font-medium text-[hsl(196,80%,45%)]"
                                            data-oid="61j8.:p"
                                        >
                                            Click to upload
                                        </span>{' '}
                                        or drag and drop
                                    </p>
                                    <p className="text-xs text-gray-500" data-oid="pba-ah3">
                                        PDF, DOC, DOCX up to 10MB
                                    </p>
                                </div>
                            </label>
                            {formData.resume && (
                                <p className="mt-2 text-sm text-green-600" data-oid="yj7b1lr">
                                    ✓ {formData.resume.name}
                                </p>
                            )}
                        </div>
                        {errors.resume && (
                            <p className="text-red-500 text-sm mt-1" data-oid="v4vxohn">
                                {errors.resume}
                            </p>
                        )}
                    </div>

                    <div data-oid="kq2a:fh">
                        <label
                            className="block text-sm font-medium text-gray-700 mb-2"
                            data-oid="m3p7h8f"
                        >
                            Why are you interested in this role?
                        </label>
                        <textarea
                            value={formData.message}
                            onChange={(e) => handleInputChange('message', e.target.value)}
                            rows={4}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)]"
                            placeholder="Tell us why you're excited about this opportunity..."
                            data-oid="pk.28.j"
                        />
                    </div>

                    {/* Footer */}
                    <div
                        className="flex justify-between pt-4 border-t border-gray-200"
                        data-oid="77sdhai"
                    >
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                            data-oid="96nmkwk"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-8 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                            data-oid="yt56wuo"
                        >
                            {isSubmitting ? (
                                <>
                                    <svg
                                        className="animate-spin h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        data-oid=".c26z74"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                            data-oid="kivz9z8"
                                        />

                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            data-oid="124wu0i"
                                        />
                                    </svg>
                                    Submitting...
                                </>
                            ) : (
                                'Submit Application'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
