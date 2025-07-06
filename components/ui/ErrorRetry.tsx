"use client";

import React from "react";

interface ErrorRetryProps {
  error?: Error | string;
  onRetry?: () => void;
  title?: string;
  description?: string;
  showDetails?: boolean;
  className?: string;
}

export function ErrorRetry({
  error,
  onRetry,
  title = "Something went wrong",
  description = "An error occurred while loading this content.",
  showDetails = false,
  className = "",
}: ErrorRetryProps) {
  const errorMessage = typeof error === "string" ? error : error?.message;

  return (
    <div
      className={`flex flex-col items-center justify-center p-8 text-center ${className}`}
      data-oid="5yxr2eh"
    >
      <div
        className="w-16 h-16 mb-4 rounded-full bg-red-100 flex items-center justify-center"
        data-oid="vl7ltqd"
      >
        <svg
          className="w-8 h-8 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          data-oid="8p7zhh."
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
            data-oid="0mu2:0q"
          />
        </svg>
      </div>

      <h3
        className="text-lg font-semibold text-gray-900 mb-2"
        data-oid=":xw_plz"
      >
        {title}
      </h3>

      <p className="text-gray-600 mb-4 max-w-md" data-oid="k-jka_t">
        {description}
      </p>

      {showDetails && errorMessage && (
        <details className="mb-4 text-sm text-gray-500" data-oid="hpjc09-">
          <summary
            className="cursor-pointer hover:text-gray-700"
            data-oid="tr6.18q"
          >
            Show error details
          </summary>
          <pre
            className="mt-2 p-2 bg-gray-100 rounded text-left overflow-auto max-w-md"
            data-oid="53d:ac."
          >
            {errorMessage}
          </pre>
        </details>
      )}

      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          data-oid="qp94o9x"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            data-oid="b035k4_"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              data-oid="5e5q530"
            />
          </svg>
          Try Again
        </button>
      )}
    </div>
  );
}

export function NetworkErrorRetry({ onRetry }: { onRetry?: () => void }) {
  return (
    <ErrorRetry
      title="Network Error"
      description="Unable to connect to the server. Please check your internet connection and try again."
      onRetry={onRetry}
      className="min-h-[200px]"
      data-oid="142n_x-"
    />
  );
}

export function DataLoadErrorRetry({ onRetry }: { onRetry?: () => void }) {
  return (
    <ErrorRetry
      title="Failed to Load Data"
      description="We couldn't load the requested information. This might be a temporary issue."
      onRetry={onRetry}
      className="min-h-[200px]"
      data-oid="mqc9.x5"
    />
  );
}
