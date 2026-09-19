'use client';

import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';

export interface TestimonialFormValues {
    _id?: string;
    name: string;
    role: string;
    content: string;
    rating: number;
    avatar?: string;
    linkedinUrl?: string;
    isApproved: boolean;
    isVerified: boolean;
}

interface TestimonialFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (values: TestimonialFormValues) => Promise<void> | void;
    /** Passing a testimonial switches the modal from create to edit. */
    testimonial?: TestimonialFormValues | null;
}

const empty: TestimonialFormValues = {
    name: '',
    role: '',
    content: '',
    rating: 5,
    avatar: '',
    linkedinUrl: '',
    isApproved: true,
    isVerified: false,
};

export function TestimonialFormModal({
    isOpen,
    onClose,
    onSubmit,
    testimonial,
}: TestimonialFormModalProps) {
    const [values, setValues] = useState<TestimonialFormValues>(empty);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setValues(testimonial ? { ...empty, ...testimonial } : empty);
        setError(null);
    }, [testimonial, isOpen]);

    if (!isOpen) return null;

    const set = <K extends keyof TestimonialFormValues>(key: K, value: TestimonialFormValues[K]) =>
        setValues((prev) => ({ ...prev, [key]: value }));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!values.name.trim() || !values.role.trim() || !values.content.trim()) {
            setError('Name, role/company and testimonial text are required.');
            return;
        }
        setIsSubmitting(true);
        setError(null);
        try {
            await onSubmit(values);
        } catch (err) {
            setError(
                err instanceof Error ? err.message : 'Something went wrong. Please try again.',
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const field =
        'w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none';

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-xl">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">
                        {testimonial?._id ? 'Edit testimonial' : 'Add testimonial'}
                    </h2>
                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-full p-1 text-gray-500 hover:bg-gray-100"
                        aria-label="Close"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Name *
                        </label>
                        <input
                            className={field}
                            value={values.name}
                            onChange={(e) => set('name', e.target.value)}
                            placeholder="Priya Sharma"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Role / Company *
                        </label>
                        <input
                            className={field}
                            value={values.role}
                            onChange={(e) => set('role', e.target.value)}
                            placeholder="Google"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Testimonial *
                        </label>
                        <textarea
                            className={`${field} min-h-24`}
                            value={values.content}
                            onChange={(e) => set('content', e.target.value)}
                            placeholder="X Careers gave me the confidence to land my role."
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-700">
                                Rating
                            </label>
                            <select
                                className={field}
                                value={values.rating}
                                onChange={(e) => set('rating', Number(e.target.value))}
                            >
                                {[5, 4, 3, 2, 1].map((r) => (
                                    <option key={r} value={r}>
                                        {r} star{r > 1 ? 's' : ''}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-700">
                                Avatar URL
                            </label>
                            <input
                                className={field}
                                value={values.avatar || ''}
                                onChange={(e) => set('avatar', e.target.value)}
                                placeholder="https://..."
                            />
                        </div>
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            LinkedIn URL
                        </label>
                        <input
                            className={field}
                            value={values.linkedinUrl || ''}
                            onChange={(e) => set('linkedinUrl', e.target.value)}
                            placeholder="https://linkedin.com/in/..."
                        />
                    </div>

                    <div className="flex items-center gap-6">
                        <label className="flex items-center gap-2 text-sm text-gray-700">
                            <input
                                type="checkbox"
                                checked={values.isApproved}
                                onChange={(e) => set('isApproved', e.target.checked)}
                            />
                            Approved (visible on the homepage)
                        </label>
                        <label className="flex items-center gap-2 text-sm text-gray-700">
                            <input
                                type="checkbox"
                                checked={values.isVerified}
                                onChange={(e) => set('isVerified', e.target.checked)}
                            />
                            Verified
                        </label>
                    </div>

                    {error && <p className="text-sm text-red-600">{error}</p>}

                    <div className="flex justify-end gap-3 pt-2">
                        <Button type="button" variant="outline" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting
                                ? 'Saving...'
                                : testimonial?._id
                                  ? 'Save changes'
                                  : 'Add testimonial'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
