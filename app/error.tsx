"use client";

import { useEffect } from "react";

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
      data-oid="fb.dlcw"
    >
      <div
        className="max-w-md w-full bg-white rounded-lg shadow-md p-6 text-center"
        data-oid="hd26-si"
      >
        <h2
          className="text-2xl font-bold text-gray-800 mb-4"
          data-oid="fq1erxx"
        >
          Something went wrong!
        </h2>
        <p className="text-gray-600 mb-6" data-oid="--dp0lj">
          An error occurred while loading this page.
        </p>
        <button
          onClick={reset}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          data-oid="cdowqm4"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
