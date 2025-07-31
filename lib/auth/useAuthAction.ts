'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from './AuthContext';

export const useAuthAction = () => {
    const { isAuthenticated, requireAuth } = useAuth();
    const router = useRouter();

    const executeWithAuth = (action: () => void, redirectPath?: string) => {
        if (isAuthenticated) {
            action();
        } else {
            // Store the intended action path for redirect after login
            if (redirectPath && typeof window !== 'undefined') {
                localStorage.setItem('careerx_redirect_after_auth', redirectPath);
            }
            router.push('/login');
        }
    };

    const navigateWithAuth = (path: string) => {
        if (isAuthenticated) {
            // If user is authenticated and trying to access community, go to community
            if (path === '/community') {
                router.push('/community');
            } else {
                router.push(path);
            }
        } else {
            // If user is not authenticated
            if (path === '/community') {
                // For community access, redirect to register page
                router.push('/register');
            } else {
                // For other protected routes, store redirect and go to login
                if (typeof window !== 'undefined') {
                    localStorage.setItem('careerx_redirect_after_auth', path);
                }
                router.push('/login');
            }
        }
    };

    return {
        executeWithAuth,
        navigateWithAuth,
        isAuthenticated,
    };
};
