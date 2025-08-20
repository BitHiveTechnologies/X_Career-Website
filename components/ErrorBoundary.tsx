'use client';

import React from 'react';

interface ErrorBoundaryState {
    hasError: boolean;
    error?: Error;
}

interface ErrorBoundaryProps {
    children: React.ReactNode;
    fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        // Log error for debugging purposes
    }

    resetError = () => {
        this.setState({ hasError: false, error: undefined });
    };

    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                const FallbackComponent = this.props.fallback;
                return (
                    <FallbackComponent
                        error={this.state.error}
                        resetError={this.resetError}
                        data-oid="d6pi5cf"
                    />
                );
            }

            return (
                <div
                    className="min-h-screen flex items-center justify-center bg-gray-50"
                    data-oid="2scrm9m"
                >
                    <div
                        className="max-w-md w-full bg-white rounded-lg shadow-md p-6 text-center"
                        data-oid="c4fdh_r"
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-4" data-oid="q.w4e.l">
                            Something went wrong!
                        </h2>
                        <p className="text-gray-600 mb-6" data-oid=":ca:x.l">
                            An error occurred while loading this page.
                        </p>
                        <button
                            onClick={this.resetError}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            data-oid="lzc1vlh"
                        >
                            Try again
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
