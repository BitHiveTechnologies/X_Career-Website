'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-gray-50"
            data-oid="z5v2lur"
        >
            <div
                className="max-w-md w-full bg-white rounded-lg shadow-md p-6 text-center"
                data-oid="j:aen92"
            >
                <h2 className="text-2xl font-bold text-gray-800 mb-4" data-oid="7a8e6h-">
                    Something went wrong!
                </h2>
                <p className="text-gray-600 mb-6" data-oid="8dg:opb">
                    An error occurred while loading this page.
                </p>
                <button
                    onClick={reset}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    data-oid="jp.w_7p"
                >
                    Try again
                </button>
            </div>
        </div>
    );
}
