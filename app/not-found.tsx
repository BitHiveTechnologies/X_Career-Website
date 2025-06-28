import Link from 'next/link';

export default function NotFound() {
    return (
        <div
            className="min-h-screen flex items-center justify-center bg-gray-50"
            data-oid="lm8mhwr"
        >
            <div
                className="max-w-md w-full bg-white rounded-lg shadow-md p-6 text-center"
                data-oid="vd5osb1"
            >
                <h2 className="text-2xl font-bold text-gray-800 mb-4" data-oid=":3.s59e">
                    404 - Page Not Found
                </h2>
                <p className="text-gray-600 mb-6" data-oid="tcm3dhi">
                    The page you are looking for does not exist.
                </p>
                <Link
                    href="/"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-block"
                    data-oid="5cno4ay"
                >
                    Return Home
                </Link>
            </div>
        </div>
    );
}
