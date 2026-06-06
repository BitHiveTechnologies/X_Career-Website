'use client';

import ResumePreview from '@/components/ResumePreview';
import { getResumePrintStorageKey } from '@/lib/resumeExport/printPayload';
import { useEffect, useState } from 'react';

type PrintPayload = {
    resumeData: any;
    template: string;
    fontFamily?: string;
};

export default function ResumePrintPage() {
    const [storageKey, setStorageKey] = useState('');
    const [payload, setPayload] = useState<PrintPayload | null>(null);
    const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        const token = new URLSearchParams(window.location.search).get('token');
        if (!token) {
            setStatus('error');
            return;
        }

        setStorageKey(getResumePrintStorageKey(token));
    }, []);

    useEffect(() => {
        if (!storageKey || typeof window === 'undefined') {
            return;
        }

        try {
            const raw = window.localStorage.getItem(storageKey);
            if (!raw) {
                setStatus('error');
                return;
            }

            const parsed = JSON.parse(raw) as PrintPayload;
            if (!parsed?.resumeData || !parsed?.template) {
                setStatus('error');
                return;
            }

            const fullName = parsed.resumeData?.personalInfo?.fullName?.trim();
            document.title = `${fullName}'s Resume` || 'Resume';
            setPayload(parsed);
            setStatus('ready');
        } catch (_error) {
            setStatus('error');
        }
    }, [storageKey]);

    useEffect(() => {
        if (status !== 'ready' || !storageKey || typeof window === 'undefined') {
            return;
        }

        let cleanupTimeout: number | undefined;

        const handleAfterPrint = () => {
            window.localStorage.removeItem(storageKey);
            cleanupTimeout = window.setTimeout(() => {
                window.close();
            }, 150);
        };

        window.addEventListener('afterprint', handleAfterPrint);

        const printTimeout = window.setTimeout(() => {
            window.print();
        }, 250);

        return () => {
            window.clearTimeout(printTimeout);
            if (cleanupTimeout) {
                window.clearTimeout(cleanupTimeout);
            }
            window.removeEventListener('afterprint', handleAfterPrint);
        };
    }, [status, storageKey]);

    if (status === 'loading') {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center p-8">
                <div className="max-w-md text-center">
                    <h1 className="text-xl font-semibold text-slate-900">Preparing print preview</h1>
                    <p className="mt-2 text-sm text-slate-600">
                        Loading the resume with the same template styling used in the builder.
                    </p>
                </div>
            </div>
        );
    }

    if (status === 'error' || !payload) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center p-8">
                <div className="max-w-md text-center">
                    <h1 className="text-xl font-semibold text-slate-900">Unable to load print preview</h1>
                    <p className="mt-2 text-sm text-slate-600">
                        Please return to the resume builder and try exporting again.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <>
            <style jsx global>{`
                @page {
                    size: letter;
                    margin: 0;
                }

                html, body {
                    margin: 0;
                    padding: 0;
                    background: #ffffff;
                }

                @media print {
                    html, body {
                        background: #ffffff;
                    }

                    .print-app-shell {
                        padding: 0 !important;
                    }

                    .print-helper {
                        display: none !important;
                    }

                    .resume-export-page {
                        box-shadow: none !important;
                        margin: 0 auto !important;
                        page-break-after: always;
                        break-after: page;
                    }

                    .resume-export-page:last-child {
                        page-break-after: auto;
                        break-after: auto;
                    }
                }
            `}</style>

            <div className="print-app-shell min-h-screen bg-slate-100 py-8">
                <div className="print-helper mx-auto mb-4 max-w-3xl rounded-xl border border-slate-200 bg-white px-4 py-3 text-center text-sm text-slate-600 shadow-sm">
                    The print dialog should open automatically. Choose <strong>Save as PDF</strong> to download the resume.
                </div>

                <ResumePreview
                    resumeData={payload.resumeData}
                    template={payload.template}
                    fontFamily={payload.fontFamily || 'Inter'}
                    isExport={false}
                />
            </div>
        </>
    );
}
