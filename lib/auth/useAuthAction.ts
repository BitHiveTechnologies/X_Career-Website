'use client';

import { useAuth } from './AuthContext';
import { useRouter } from 'next/navigation';

export const useAuthAction = () => {
    const { isAuthenticated, requireAuth } = useAuth();
    const router = useRouter();

    const executeWithAuth = (action: () => void, redirectPath?: string) => {
        if (isAuthenticated) {
            action();
        } else {
            // Store the intended action path for redirect after login
            if (redirectPath) {
                localStorage.setItem('careerx_redirect_after_auth', redirectPath);
            }
            router.push('/login');
        }
    };

    const navigateWithAuth = (path: string) => {
        if (isAuthenticated) {
            router.push(path);
        } else {
            localStorage.setItem('careerx_redirect_after_auth', path);
            router.push('/login');
        }
    };

    return {
        executeWithAuth,
        navigateWithAuth,
        isAuthenticated,
    };
};
