'use client';

import {
    authService,
    ProfileCompletionStatus,
    UpdateProfileRequest,
    User,
    UserProfile
} from '@/lib/api';
import { useRouter } from 'next/navigation';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

// ============================================================================
// AUTH CONTEXT INTERFACE
// ============================================================================

export interface AuthContextType {
  // User state
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  
  // Authentication methods
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  adminLogin: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (name: string, email: string, password: string, mobile: string, qualification: string, stream: string, yearOfPassout: number, cgpaOrPercentage: number) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  requireAuth: (redirectTo?: string) => boolean;
  
  // User profile methods
  getUserProfile: () => Promise<UserProfile | null>;
  updateProfile: (profileData: UpdateProfileRequest) => Promise<{ success: boolean; error?: string }>;
  getProfileCompletion: () => Promise<ProfileCompletionStatus | null>;
  
  // Subscription methods
  updateSubscription: (subscriptionData: any) => Promise<{ success: boolean; error?: string }>;
  getUserSubscription: () => Promise<any>;
  
  // Role-based access control
  hasRole: (role: 'user' | 'admin' | 'super_admin') => boolean;
  isAdmin: () => boolean;
  isSuperAdmin: () => boolean;
  canAccessAdmin: () => boolean;
}

// ============================================================================
// AUTH CONTEXT
// ============================================================================

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ============================================================================
// AUTH PROVIDER
// ============================================================================

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Initialize authentication on mount
  useEffect(() => {
    checkAuthStatus();
  }, []);

  // ============================================================================
  // AUTHENTICATION METHODS
  // ============================================================================

  const checkAuthStatus = async () => {
    try {
      setIsLoading(true);
      
      // Check if we have a stored user
      if (typeof window !== 'undefined') {
        const storedUser = localStorage.getItem('careerx_user');
        if (storedUser) {
          const user = JSON.parse(storedUser);
          setUser(user);
          return;
        }
      }
      
      // Try to get user info from the backend
      try {
        const result = await authService.getMe();
        if (result.success && result.data) {
          setUser(result.data);
          
          // Store user in localStorage for persistence
          if (typeof window !== 'undefined') {
            localStorage.setItem('careerx_user', JSON.stringify(result.data));
          }
        }
      } catch (error) {
        // User is not authenticated
        setUser(null);
      }
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
      
      if (result.success && result.data && result.data.user) {
        // Set user data from login response
        const userData = {
          id: result.data.user.id,
          email: result.data.user.email,
          firstName: result.data.user.firstName,
          lastName: result.data.user.lastName,
          role: (result.data.user.role as 'user' | 'admin' | 'super_admin') || 'user',
          subscriptionStatus: 'inactive' as const,
          isProfileComplete: true,
        };
        
        setUser(userData);
        
        // Store user in localStorage for persistence
        if (typeof window !== 'undefined') {
          localStorage.setItem('careerx_user', JSON.stringify(userData));
        }
        
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
        return { success: false, error: result.error?.message || 'Login failed' };
      }
    } catch (error: any) {
      console.error('Login error:', error);
      return { success: false, error: error.message || 'Login failed. Please try again.' };
    } finally {
      setIsLoading(false);
    }
  };

  const adminLogin = async (
    email: string,
    password: string,
  ): Promise<{ success: boolean; error?: string }> => {
    try {
      setIsLoading(true);
      
      const result = await authService.adminLogin({ email, password });
      
      if (result.success && result.data && result.data.user) {
        // Set user data from login response
        const userData = {
          id: result.data.user.id,
          email: result.data.user.email,
          firstName: result.data.user.firstName,
          lastName: result.data.user.lastName,
          role: (result.data.user.role as 'user' | 'admin' | 'super_admin') || 'admin',
          subscriptionStatus: 'inactive' as const,
          isProfileComplete: true,
        };
        
        setUser(userData);
        
        // Store user in localStorage for persistence
        if (typeof window !== 'undefined') {
          localStorage.setItem('careerx_user', JSON.stringify(userData));
        }
        
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
        return { success: false, error: result.error?.message || 'Admin login failed' };
      }
    } catch (error: any) {
      console.error('Admin login error:', error);
      return { success: false, error: error.message || 'Admin login failed. Please try again.' };
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
      
      if (result.success && result.data && result.data.user) {
        // Set user data from registration response
        const userData = {
          id: result.data.user.id,
          email: result.data.user.email,
          firstName: result.data.user.name.split(' ')[0],
          lastName: result.data.user.name.split(' ').slice(1).join(' ') || '',
          role: (result.data.user.role as 'user' | 'admin' | 'super_admin') || 'user',
          subscriptionStatus: 'inactive' as const,
          isProfileComplete: true,
        };
        
        setUser(userData);
        
        // Store user data in localStorage
        if (typeof window !== 'undefined') {
          localStorage.setItem('careerx_user', JSON.stringify(userData));
        }
        
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
        return { success: false, error: result.error?.message || 'Registration failed' };
      }
    } catch (error: any) {
      console.error('Registration error:', error);
      return { success: false, error: error.message || 'Registration failed. Please try again.' };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    try {
      setIsLoading(true);
      setUser(null);
      
      // Clear user from localStorage
      if (typeof window !== 'undefined') {
        localStorage.removeItem('careerx_user');
      }
      
      router.push('/');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const requireAuth = (redirectTo?: string): boolean => {
    if (!user) {
      if (typeof window !== 'undefined') {
        const currentPath = window.location.pathname;
        localStorage.setItem('careerx_redirect_after_auth', redirectTo || currentPath);
        router.push('/login');
      }
      return false;
    }
    return true;
  };

  // ============================================================================
  // USER PROFILE METHODS
  // ============================================================================

  const getUserProfile = async (): Promise<UserProfile | null> => {
    // Placeholder implementation
    return null;
  };

  const updateProfile = async (profileData: UpdateProfileRequest): Promise<{ success: boolean; error?: string }> => {
    // Placeholder implementation
    return { success: false, error: 'Not implemented' };
  };

  const getProfileCompletion = async (): Promise<ProfileCompletionStatus | null> => {
    // Placeholder implementation
    return null;
  };

  // ============================================================================
  // SUBSCRIPTION METHODS
  // ============================================================================

  const updateSubscription = async (subscriptionData: any): Promise<{ success: boolean; error?: string }> => {
    // Placeholder implementation
    return { success: false, error: 'Not implemented' };
  };

  const getUserSubscription = async (): Promise<any> => {
    // Placeholder implementation
    return null;
  };

  // ============================================================================
  // ROLE-BASED ACCESS CONTROL
  // ============================================================================

  const hasRole = (role: 'user' | 'admin' | 'super_admin'): boolean => {
    return user?.role === role;
  };

  const isAdmin = (): boolean => {
    return user?.role === 'admin' || user?.role === 'super_admin';
  };

  const isSuperAdmin = (): boolean => {
    return user?.role === 'super_admin';
  };

  const canAccessAdmin = (): boolean => {
    return user?.role === 'admin' || user?.role === 'super_admin';
  };

  // ============================================================================
  // CONTEXT VALUE
  // ============================================================================

  const value: AuthContextType = {
    // User state
    user,
    isLoading,
    isAuthenticated: !!user,
    
    // Authentication methods
    login,
    adminLogin,
    register,
    logout,
    requireAuth,
    
    // User profile methods
    getUserProfile,
    updateProfile,
    getProfileCompletion,
    
    // Subscription methods
    updateSubscription,
    getUserSubscription,
    
    // Role-based access control
    hasRole,
    isAdmin,
    isSuperAdmin,
    canAccessAdmin,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// ============================================================================
// AUTH HOOK
// ============================================================================

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthProvider;
