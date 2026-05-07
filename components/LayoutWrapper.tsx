'use client';

import { ReactNode } from 'react';
import MainNavbar from './mainNavbar';
import Footer from './Footer';

interface LayoutWrapperProps {
    children: ReactNode;
    showFooter?: boolean;
}

export default function LayoutWrapper({ children, showFooter = true }: LayoutWrapperProps) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
            <MainNavbar />
            <main className="pt-16">
                {children}
            </main>
            {showFooter && <Footer />}
        </div>
    );
}