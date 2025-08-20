'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function SubscriptionsPage() {
    const router = useRouter();

    useEffect(() => {
        // Redirect to /notify
        router.replace('/notify');
    }, [router]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[hsl(210,50%,98%)] to-[hsl(196,60%,95%)] flex items-center justify-center">
            <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Redirecting to subscriptions...</p>
            </div>
        </div>
    );
} 