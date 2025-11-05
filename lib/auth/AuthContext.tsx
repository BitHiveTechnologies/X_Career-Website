'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { User } from '@/lib/api/types';
import { AuthService } from '@/lib/api/auth';

// ============================================================================
// TYPES AND INTERFACES
// ============================================================================

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
    register: (
        name: string,
        email: string,
        password: string,
    mobile: string,
    qualification: string,
    stream: string,
    yearOfPassout: number,
    cgpaOrPercentage: number
    ) => Promise<{ success: boolean; error?: string }>;
    logout: () => void;
  checkAuthStatus: () => Promise<void>;
  refreshUser: () => Promise<void>;
  updateProfile: (profileData: any) => Promise<{ success: boolean; error?: string }>;
  getProfileCompletion: () => Promise<any>;
}

interface AuthProviderProps {
  children: ReactNode;
}

// ============================================================================
// AUTH CONTEXT
// ============================================================================

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

// ============================================================================
// AUTH PROVIDER
// ============================================================================

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
  const authService = AuthService.getInstance();

  const isAuthenticated = !!user;

  // ============================================================================
  // AUTHENTICATION METHODS
  // ============================================================================

    const checkAuthStatus = async () => {
        try {
      setIsLoading(true);
      
      // Check if we have a stored user and token
            if (typeof window !== 'undefined') {
        const storedUser = localStorage.getItem('careerx_user');
                const storedToken = localStorage.getItem('careerx_token');

        if (storedUser && storedToken) {
          try {
            const userData = JSON.parse(storedUser);
            
            // Validate token with backend
            const isValid = await authService.validateToken(storedToken);
            if (isValid) {
              setUser(userData);
              return;
                        } else {
              // Token is invalid or expired, clear stored data
              console.log('Token validation failed');
              setUser(null);
                            localStorage.removeItem('careerx_user');
                            localStorage.removeItem('careerx_token');
                        }
          } catch (error) {
            // Token is invalid or expired, clear stored data
            console.log('Token validation failed with error:', error);
            setUser(null);
                        localStorage.removeItem('careerx_user');
                        localStorage.removeItem('careerx_token');
                    }
          return;
                }
            }
      
      // No stored user/token, user is not authenticated
      setUser(null);
        } catch (error) {
      console.error('Auth initialization error:', error);
      setUser(null);
        } finally {
            setIsLoading(false);
        }
    };

    const login = async (
        email: string,
        password: string,
    ): Promise<{ success: boolean; error?: string }> => {
    try {
        setIsLoading(true);

      // Use regular user login for normal users, admin login for admin users
      let result;
      if (email === 'superadmin@notifyx.com' || email === 'admin@notifyx.com') {
        // Use admin login for admin users
        console.log('Using admin login for admin user');
        result = await authService.adminLogin({ email, password });
        console.log('Admin login result:', result);
      } else {
        // Use regular user login
        console.log('Using regular user login');
        result = await authService.login({ email, password });
        console.log('User login result:', result);
      }
      
      if (result.success && result.user) {
        // Set user data from login response
        const userData = {
          id: result.user.id,
          email: result.user.email,
          firstName: result.user.firstName,
          lastName: result.user.lastName,
          role: result.user.role as 'user' | 'admin' | 'super_admin',
          subscriptionStatus: 'inactive' as const,
          isProfileComplete: true,
        };
        
        setUser(userData);
        
        // Store user in localStorage for persistence
                if (typeof window !== 'undefined') {
          localStorage.setItem('careerx_user', JSON.stringify(userData));
          // Store token if available
          const token = authService.getCurrentToken();
          if (token) {
                    localStorage.setItem('careerx_token', token);
          }
                }

        // Handle redirect after login based on role
                if (typeof window !== 'undefined') {
                    const redirectTo = localStorage.getItem('careerx_redirect_after_auth');
                    if (redirectTo) {
                        localStorage.removeItem('careerx_redirect_after_auth');
                        router.push(redirectTo);
                    } else {
            // Role-based routing
            if (userData.role === 'admin' || userData.role === 'super_admin') {
                        router.push('/dashboard');
            } else {
              router.push('/');
            }
                    }
                }

                return { success: true };
            } else {
        return { success: false, error: result.error || 'Login failed. Please try again.' };
            }
    } catch (error: any) {
            console.error('Login error:', error);
      return { success: false, error: error.message || 'Login failed. Please try again.' };
        } finally {
            setIsLoading(false);
        }
    };

    const register = async (
        name: string,
        email: string,
        password: string,
    mobile: string,
    qualification: string,
    stream: string,
    yearOfPassout: number,
    cgpaOrPercentage: number,
    ): Promise<{ success: boolean; error?: string }> => {
    try {
        setIsLoading(true);

      const result = await authService.register({
        name,
                    email,
                    password,
        mobile,
        qualification,
        stream,
        yearOfPassout,
        cgpaOrPercentage,
      });
      
      if (result.success && result.user) {
        // Set user data from registration response
        const userData = {
          id: result.user.id,
          email: result.user.email,
          firstName: result.user.firstName,
          lastName: result.user.lastName,
          role: (result.user.role as 'user' | 'admin' | 'super_admin') || 'user',
          subscriptionStatus: 'inactive' as const,
          isProfileComplete: true,
        };
        
        setUser(userData);
        
        // Store user data in localStorage
                if (typeof window !== 'undefined') {
          localStorage.setItem('careerx_user', JSON.stringify(userData));
          // Store token if available
          const token = authService.getCurrentToken();
          if (token) {
                    localStorage.setItem('careerx_token', token);
                }
        }

                // Handle redirect after registration
                if (typeof window !== 'undefined') {
                    const redirectTo = localStorage.getItem('careerx_redirect_after_auth');
                    if (redirectTo) {
                        localStorage.removeItem('careerx_redirect_after_auth');
                        router.push(redirectTo);
                    } else {
            // Role-based routing
            if (userData.role === 'admin' || userData.role === 'super_admin') {
                        router.push('/dashboard');
            } else {
              router.push('/');
            }
                    }
                }

                return { success: true };
            } else {
        return { success: false, error: result.error || 'Registration failed' };
            }
    } catch (error: any) {
            console.error('Registration error:', error);
      return { success: false, error: error.message || 'Registration failed. Please try again.' };
        } finally {
            setIsLoading(false);
        }
    };

    const logout = () => {
    setUser(null);
        if (typeof window !== 'undefined') {
            localStorage.removeItem('careerx_user');
            localStorage.removeItem('careerx_token');
        }
    authService.logout();
        router.push('/');
    };

  const updateProfile = async (profileData: any): Promise<{ success: boolean; error?: string }> => {
    try {
      const result = await authService.updateProfile(profileData);
      
      if (result.success && result.user) {
        // Update local user state
        setUser(result.user);

            // Update localStorage
            if (typeof window !== 'undefined') {
          localStorage.setItem('careerx_user', JSON.stringify(result.user));
            }

            return { success: true };
      } else {
        return { success: false, error: result.error || 'Failed to update profile' };
      }
    } catch (error: any) {
      console.error('Update profile error:', error);
      return { success: false, error: error.message || 'Failed to update profile' };
    }
  };

  const getProfileCompletion = async (): Promise<any> => {
    try {
      const result = await authService.getProfileCompletion();
      
      if (result.success && result.completion) {
        return result.completion;
      } else {
        return null;
      }
    } catch (error: any) {
      console.error('Get profile completion error:', error);
      return null;
    }
  };

  const refreshUser = async (): Promise<void> => {
    try {
      const result = await authService.getCurrentUser();
      
      if (result.success && result.user) {
        setUser(result.user);
        
        // Update localStorage
        if (typeof window !== 'undefined') {
          localStorage.setItem('careerx_user', JSON.stringify(result.user));
        }
      }
    } catch (error: any) {
      console.error('Refresh user error:', error);
    }
  };

  // ============================================================================
  // EFFECTS
  // ============================================================================

  useEffect(() => {
    checkAuthStatus();
  }, []);

  // ============================================================================
  // CONTEXT VALUE
  // ============================================================================

    const value: AuthContextType = {
        user,
        isLoading,
    isAuthenticated,
        login,
        register,
        logout,
    checkAuthStatus,
    refreshUser,
    updateProfile,
    getProfileCompletion,
    };

    return (
    <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};