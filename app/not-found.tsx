import Link from 'next/link';

export default function NotFound() {
    return (
        <div
            className="min-h-screen flex items-center justify-center bg-gray-50"
            data-oid="atzalig"
        >
            <div
                className="max-w-md w-full bg-white rounded-lg shadow-md p-6 text-center"
                data-oid="5hkmuw_"
            >
                <h2 className="text-2xl font-bold text-gray-800 mb-4" data-oid=".ow9qj:">
                    404 - Page Not Found
                </h2>
                <p className="text-gray-600 mb-6" data-oid="t53rjyp">
                    The page you are looking for does not exist.
                </p>
                <Link
                    href="/"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-block"
                    data-oid="prx:7ez"
                >
                    Return Home
                </Link>
            </div>
        </div>
    );
}
