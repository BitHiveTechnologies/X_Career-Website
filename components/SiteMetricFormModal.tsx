'use client';

import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';

export interface SiteMetricFormValues {
    _id?: string;
    key: string;
    value: string;
    description: string;
}

interface SiteMetricFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (values: SiteMetricFormValues) => Promise<void> | void;
    /** Passing a metric switches the modal from create to edit. */
    metric?: SiteMetricFormValues | null;
}

const empty: SiteMetricFormValues = { key: '', value: '', description: '' };

export function SiteMetricFormModal({
    isOpen,
    onClose,
    onSubmit,
    metric,
}: SiteMetricFormModalProps) {
    const [values, setValues] = useState<SiteMetricFormValues>(empty);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const isEdit = Boolean(metric?._id);

    useEffect(() => {
        setValues(metric ? { ...empty, ...metric } : empty);
        setError(null);
    }, [metric, isOpen]);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!values.key.trim() || !values.value.trim()) {
            setError('Key and value are required.');
            return;
        }
        if (!/^[a-z0-9_]+$/.test(values.key.trim())) {
            setError('Key may only use lowercase letters, numbers and underscores.');
            return;
        }
        setIsSubmitting(true);
        setError(null);
        try {
            await onSubmit({ ...values, key: values.key.trim(), value: values.value.trim() });
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
            <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">
                        {isEdit ? 'Edit stat' : 'Add stat'}
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
                            Key *
                        </label>
                        <input
                            className={`${field} ${isEdit ? 'bg-gray-50 text-gray-500' : ''}`}
                            value={values.key}
                            onChange={(e) => setValues((v) => ({ ...v, key: e.target.value }))}
                            placeholder="freshers_count"
                            disabled={isEdit}
                        />
                        <p className="mt-1 text-xs text-gray-500">
                            {isEdit
                                ? 'The homepage reads this key, so it cannot be renamed.'
                                : 'Only keys the homepage already reads will appear there.'}
                        </p>
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Value *
                        </label>
                        <input
                            className={field}
                            value={values.value}
                            onChange={(e) => setValues((v) => ({ ...v, value: e.target.value }))}
                            placeholder="35,213"
                        />
                        <p className="mt-1 text-xs text-gray-500">
                            Shown exactly as typed — e.g. 35,213 or 10k+.
                        </p>
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Where it appears
                        </label>
                        <input
                            className={field}
                            value={values.description}
                            onChange={(e) =>
                                setValues((v) => ({ ...v, description: e.target.value }))
                            }
                            placeholder="Hero · Freshers Joined"
                        />
                    </div>

                    {error && <p className="text-sm text-red-600">{error}</p>}

                    <div className="flex justify-end gap-3 pt-2">
                        <Button type="button" variant="outline" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Saving...' : isEdit ? 'Save changes' : 'Add stat'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
