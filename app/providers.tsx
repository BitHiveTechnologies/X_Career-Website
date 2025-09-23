'use client';

import ErrorBoundary from '@/components/ErrorBoundary';
import { AuthProvider } from '@/lib/auth/AuthContextBackend';
import { Toaster } from '@/components/ui/sonner';
import React from 'react';

interface ProvidersProps {
    children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
    return (
        <ErrorBoundary data-oid="nc9ek12">
            <AuthProvider data-oid="ymfie4-">
                {children}
                <Toaster />
            </AuthProvider>
        </ErrorBoundary>
    );
}
