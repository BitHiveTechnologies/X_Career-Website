'use client';

import Link from 'next/link';

interface BackButtonProps {
    href?: string;
    label?: string;
    className?: string;
}

export default function BackButton({ 
    href = '/', 
    label = 'Back to Home',
    className = ''
}: BackButtonProps) {
    return (
        <Link
            href={href}
            className={`inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors ${className}`}
        >
            <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {label}
        </Link>
    );
} 