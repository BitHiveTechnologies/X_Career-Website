'use client';

import { useRouter } from 'next/navigation';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

export interface User {
    id: string;
    email: string;
    name: string;
    avatar?: string;
    createdAt: string;
    subscription?: {
        plan: 'free' | 'starter' | 'premium';
        status: 'active' | 'inactive' | 'cancelled';
        startDate?: string;
        endDate?: string;
    };
}

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
    register: (
        name: string,
        email: string,
        password: string,
    ) => Promise<{ success: boolean; error?: string }>;
    logout: () => void;
    requireAuth: (redirectTo?: string) => boolean;
    updateSubscription: (plan: 'free' | 'starter' | 'premium') => Promise<{ success: boolean; error?: string }>;
    getUserSubscription: () => 'free' | 'starter' | 'premium';
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    // Check for existing session on mount
    useEffect(() => {
        checkAuthStatus();
    }, []);

    const checkAuthStatus = async () => {
        try {
            // Check if we're in the browser before accessing localStorage
            if (typeof window !== 'undefined') {
                const storedToken = localStorage.getItem('careerx_token');

                if (storedToken) {
                    // Verify token with backend
                    const response = await fetch('/api/v1/jwt-auth/me', {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${storedToken}`,
                            'Content-Type': 'application/json',
                        },
                    });

                    if (response.ok) {
                        const data = await response.json();
                        if (data.success && data.data && data.data.user) {
                            const userData = data.data.user;
                            
                            // Transform backend user data to frontend User interface
                            const user: User = {
                                id: userData.id,
                                email: userData.email,
                                name: userData.firstName + ' ' + userData.lastName,
                                avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(userData.firstName)}&background=2563eb&color=fff`,
                                createdAt: new Date().toISOString(),
                                subscription: {
                                    plan: 'free', // Default plan, will be updated from backend
                                    status: 'active',
                                    startDate: new Date().toISOString(),
                                },
                            };
                            
                            setUser(user);
                        } else {
                            // Invalid token, clear storage
                            localStorage.removeItem('careerx_user');
                            localStorage.removeItem('careerx_token');
                        }
                    } else {
                        // Token invalid or expired, clear storage
                        localStorage.removeItem('careerx_user');
                        localStorage.removeItem('careerx_token');
                    }
                }
            }
        } catch (error) {
            console.error('Auth check error:', error);
            // Clear invalid data only if we're in the browser
            if (typeof window !== 'undefined') {
                localStorage.removeItem('careerx_user');
                localStorage.removeItem('careerx_token');
            }
        } finally {
            setIsLoading(false);
        }
    };

    const login = async (
        email: string,
        password: string,
    ): Promise<{ success: boolean; error?: string }> => {
        setIsLoading(true);

        try {
            // Call backend authentication API
            const response = await fetch('/api/v1/jwt-auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                return { success: false, error: data.error || 'Login failed' };
            }

            if (data.success && data.data) {
                const { token, user: userData } = data.data;
                
                // Transform backend user data to frontend User interface
                const user: User = {
                    id: userData.id,
                    email: userData.email,
                    name: userData.firstName + ' ' + userData.lastName,
                    avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(userData.firstName)}&background=2563eb&color=fff`,
                    createdAt: new Date().toISOString(),
                    subscription: {
                        plan: 'free', // Default plan, will be updated from backend
                        status: 'active',
                        startDate: new Date().toISOString(),
                    },
                };

                // Store user data and token only if we're in the browser
                if (typeof window !== 'undefined') {
                    localStorage.setItem('careerx_user', JSON.stringify(user));
                    localStorage.setItem('careerx_token', token);
                }

                setUser(user);

                // Handle redirect after login
                if (typeof window !== 'undefined') {
                    const redirectTo = localStorage.getItem('careerx_redirect_after_auth');
                    if (redirectTo) {
                        localStorage.removeItem('careerx_redirect_after_auth');
                        router.push(redirectTo);
                    } else {
                        router.push('/dashboard');
                    }
                }

                return { success: true };
            } else {
                return { success: false, error: 'Invalid response from server' };
            }
        } catch (error) {
            console.error('Login error:', error);
            return { success: false, error: 'Login failed. Please try again.' };
        } finally {
            setIsLoading(false);
        }
    };

    const register = async (
        name: string,
        email: string,
        password: string,
    ): Promise<{ success: boolean; error?: string }> => {
        setIsLoading(true);

        try {
            // Call backend registration API
            const response = await fetch('/api/v1/jwt-auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: name.split(' ')[0],
                    lastName: name.split(' ').slice(1).join(' ') || '',
                    email,
                    password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                return { success: false, error: data.error || 'Registration failed' };
            }

            if (data.success && data.data) {
                const { token, user: userData } = data.data;
                
                // Transform backend user data to frontend User interface
                const user: User = {
                    id: userData.id,
                    email: userData.email,
                    name: userData.firstName + ' ' + userData.lastName,
                    avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(userData.firstName)}&background=2563eb&color=fff`,
                    createdAt: new Date().toISOString(),
                    subscription: {
                        plan: 'free', // Default plan, will be updated from backend
                        status: 'active',
                        startDate: new Date().toISOString(),
                    },
                };

                // Store user data and token only if we're in the browser
                if (typeof window !== 'undefined') {
                    localStorage.setItem('careerx_user', JSON.stringify(user));
                    localStorage.setItem('careerx_token', token);
                }

                setUser(user);

                // Handle redirect after registration
                if (typeof window !== 'undefined') {
                    const redirectTo = localStorage.getItem('careerx_redirect_after_auth');
                    if (redirectTo) {
                        localStorage.removeItem('careerx_redirect_after_auth');
                        router.push(redirectTo);
                    } else {
                        router.push('/dashboard');
                    }
                }

                return { success: true };
            } else {
                return { success: false, error: 'Invalid response from server' };
            }
        } catch (error) {
            console.error('Registration error:', error);
            return { success: false, error: 'Registration failed. Please try again.' };
        } finally {
            setIsLoading(false);
        }
    };

    const logout = () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('careerx_user');
            localStorage.removeItem('careerx_token');
            localStorage.removeItem('careerx_redirect_after_auth');
        }
        setUser(null);
        router.push('/');
    };

    const requireAuth = (redirectTo?: string): boolean => {
        if (!user && !isLoading) {
            // Store the intended destination
            if (redirectTo && typeof window !== 'undefined') {
                localStorage.setItem('careerx_redirect_after_auth', redirectTo);
            }

            // Redirect to login
            router.push('/login');
            return false;
        }
        return !!user;
    };

    const updateSubscription = async (plan: 'free' | 'starter' | 'premium'): Promise<{ success: boolean; error?: string }> => {
        if (!user) {
            return { success: false, error: 'User not authenticated' };
        }

        try {
            // Simulate API call for subscription update
            await new Promise((resolve) => setTimeout(resolve, 1000));

            const updatedUser: User = {
                ...user,
                subscription: {
                    plan,
                    status: 'active',
                    startDate: new Date().toISOString(),
                    endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days from now
                },
            };

            setUser(updatedUser);

            // Update localStorage
            if (typeof window !== 'undefined') {
                localStorage.setItem('careerx_user', JSON.stringify(updatedUser));
            }

            return { success: true };
        } catch (error) {
            return { success: false, error: 'Subscription update failed' };
        }
    };

    const getUserSubscription = (): 'free' | 'starter' | 'premium' => {
        return user?.subscription?.plan || 'free';
    };

    const value: AuthContextType = {
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        requireAuth,
        updateSubscription,
        getUserSubscription,
    };

    return (
        <AuthContext.Provider value={value} data-oid="xpar59t">
            {children}
        </AuthContext.Provider>
    );
};
