'use client';

import { useRouter } from 'next/navigation';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { 
  authService, 
  User, 
  UserProfile, 
  ProfileCompletionStatus,
  UpdateProfileRequest,
  AdminLoginRequest
} from '@/lib/api';

// ============================================================================
// AUTH CONTEXT INTERFACE
// ============================================================================

interface AuthContextType {
  // User state
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  
  // Authentication methods
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  adminLogin: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (name: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  requireAuth: (redirectTo?: string) => boolean;
  
  // User profile methods
  getUserProfile: () => Promise<{ success: boolean; profile?: User; error?: string }>;
  updateProfile: (profileData: UpdateProfileRequest) => Promise<{ success: boolean; error?: string; user?: User }>;
  getProfileCompletion: () => Promise<{ success: boolean; completion?: ProfileCompletionStatus; error?: string }>;
  
  // Subscription methods
  updateSubscription: (plan: 'free' | 'starter' | 'premium') => Promise<{ success: boolean; error?: string }>;
  getUserSubscription: () => 'free' | 'starter' | 'premium';
  
  // Role-based access control
  hasRole: (role: 'user' | 'admin' | 'super_admin') => boolean;
  isAdmin: () => boolean;
  isSuperAdmin: () => boolean;
  canAccessAdmin: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// ============================================================================
// AUTH PROVIDER COMPONENT
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
    initializeAuth();
  }, []);

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = authService.addAuthListener((newUser) => {
      setUser(newUser);
    });

    return unsubscribe;
  }, []);

  // ============================================================================
  // AUTHENTICATION METHODS
  // ============================================================================

  const initializeAuth = async () => {
    try {
      setIsLoading(true);
      
      // If user is already set, don't override it
      if (user) {
        setIsLoading(false);
        return;
      }
      
      // First, try to restore user from localStorage
      if (typeof window !== 'undefined') {
        const storedUser = localStorage.getItem('careerx_user');
        if (storedUser) {
          try {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
            setIsLoading(false);
            return;
          } catch (e) {
            console.warn('Failed to parse stored user:', e);
            localStorage.removeItem('careerx_user');
          }
        }
      }
      
      // If no stored user, attempt to initialize from stored token
      const result = await authService.initializeAuth();
      if (result.success && result.user) {
        setUser(result.user);
        // Store user in localStorage for persistence
        if (typeof window !== 'undefined') {
          localStorage.setItem('careerx_user', JSON.stringify(result.user));
        }
      }
      setIsLoading(false);
    } catch (error) {
      console.error('Auth initialization error:', error);
      setIsLoading(false);
    }
  };

  const login = async (
    email: string,
    password: string,
  ): Promise<{ success: boolean; error?: string }> => {
    try {
      setIsLoading(true);
      // For testing, use admin login since user login endpoint doesn't have test users
      const result = await authService.adminLogin({ email, password });
      
      if (result.success && result.user) {
        setUser(result.user);
        
        // Store user in localStorage for persistence
        if (typeof window !== 'undefined') {
          localStorage.setItem('careerx_user', JSON.stringify(result.user));
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
        return { success: false, error: result.error || 'Login failed' };
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
      
      if (result.success && result.user) {
        setUser(result.user);
        
        // Store user in localStorage for persistence
        if (typeof window !== 'undefined') {
          localStorage.setItem('careerx_user', JSON.stringify(result.user));
        }
        
        // Handle redirect after admin login
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
        return { success: false, error: result.error || 'Admin login failed' };
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
  ): Promise<{ success: boolean; error?: string }> => {
    try {
      setIsLoading(true);
      
      // For now, we'll use the admin login endpoint with the provided data
      // In a real app, you'd have a separate registration endpoint
      const result = await authService.adminLogin({
        email,
        password,
      });
      
      if (result.success && result.user) {
        setUser(result.user);
        
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
        return { success: false, error: result.error || 'Registration failed' };
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
      await authService.logout();
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

  // ============================================================================
  // USER PROFILE METHODS
  // ============================================================================

  const getUserProfile = async (): Promise<{ success: boolean; profile?: User; error?: string }> => {
    try {
      const result = await authService.getUserProfile();
      if (result.success && result.profile) {
        setUser(result.profile);
      }
      return result;
    } catch (error: any) {
      console.error('Get user profile error:', error);
      return { success: false, error: error.message || 'Failed to get user profile' };
    }
  };

  const updateProfile = async (profileData: UpdateProfileRequest): Promise<{ success: boolean; error?: string; user?: User }> => {
    try {
      const result = await authService.updateProfile(profileData);
      if (result.success && result.user) {
        setUser(result.user);
      }
      return result;
    } catch (error: any) {
      console.error('Update profile error:', error);
      return { success: false, error: error.message || 'Failed to update profile' };
    }
  };

  const getProfileCompletion = async (): Promise<{ success: boolean; completion?: ProfileCompletionStatus; error?: string }> => {
    try {
      return await authService.getProfileCompletion();
    } catch (error: any) {
      console.error('Get profile completion error:', error);
      return { success: false, error: error.message || 'Failed to get profile completion status' };
    }
  };

  // ============================================================================
  // SUBSCRIPTION METHODS
  // ============================================================================

  const updateSubscription = async (plan: 'free' | 'starter' | 'premium'): Promise<{ success: boolean; error?: string }> => {
    try {
      const result = await authService.updateSubscription(plan);
      if (result.success && user) {
        // Update local user state
        const updatedUser: User = {
          ...user,
          subscriptionStatus: plan === 'free' ? 'inactive' : 'active',
        };
        setUser(updatedUser);
      }
      return result;
    } catch (error: any) {
      console.error('Update subscription error:', error);
      return { success: false, error: error.message || 'Failed to update subscription' };
    }
  };

  const getUserSubscription = (): 'free' | 'starter' | 'premium' => {
    return authService.getUserSubscription();
  };

  // ============================================================================
  // ROLE-BASED ACCESS CONTROL
  // ============================================================================

  const hasRole = (role: 'user' | 'admin' | 'super_admin'): boolean => {
    return authService.hasRole(role);
  };

  const isAdmin = (): boolean => {
    return authService.isAdmin();
  };

  const isSuperAdmin = (): boolean => {
    return authService.isSuperAdmin();
  };

  const canAccessAdmin = (): boolean => {
    return authService.canAccessAdmin();
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
