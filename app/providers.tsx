'use client';

import React from 'react';
import { AuthProvider } from '@/lib/auth/AuthContext';

interface ProvidersProps {
    children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
    return <AuthProvider data-oid="jdgsf-p">{children}</AuthProvider>;
}
