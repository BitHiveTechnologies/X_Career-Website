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
import { apiClient, API_ENDPOINTS } from '@/lib/api/client';

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
      
      // Check if we have a stored user and token
      if (typeof window !== 'undefined') {
        const storedUser = localStorage.getItem('careerx_user');
        const storedToken = localStorage.getItem('careerx_token');
        console.log('Auth initialization - checking stored data:', {
          hasUser: !!storedUser,
          hasToken: !!storedToken,
          tokenPreview: storedToken ? storedToken.substring(0, 20) + '...' : 'No token',
          userPreview: storedUser ? JSON.parse(storedUser) : null
        });
        
        if (storedUser && storedToken) {
          const user = JSON.parse(storedUser);
          // Ensure user data has required properties
          if (user && user.id) {
            setUser(user);
            console.log('User and token loaded from localStorage');
          } else {
            console.log('Invalid user data in localStorage, clearing...');
            localStorage.removeItem('careerx_user');
            localStorage.removeItem('careerx_token');
            setUser(null);
          }
          
          // Verify the token is still valid by calling the backend
          try {
            const result = await authService.getMe();
            console.log('Token validation response:', result);
            if (result.success && result.data) {
              // Token is valid, update user data if needed
              // Handle different response structures
              const userData = result.data.user || result.data;
              if (userData && userData.id) {
                setUser(userData);
                if (typeof window !== 'undefined') {
                  localStorage.setItem('careerx_user', JSON.stringify(userData));
                }
              } else {
                console.log('Invalid user data structure:', result.data);
                // Keep the stored user data if API response is malformed
              }
            } else {
              // Token is invalid, clear stored data
              console.log('Token validation failed - clearing stored data');
              setUser(null);
              if (typeof window !== 'undefined') {
                localStorage.removeItem('careerx_user');
                localStorage.removeItem('careerx_token');
              }
            }
          } catch (error) {
            // Token is invalid or expired, clear stored data
            console.log('Token validation failed with error:', error);
            setUser(null);
            if (typeof window !== 'undefined') {
              localStorage.removeItem('careerx_user');
              localStorage.removeItem('careerx_token');
            }
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
      
      if (result.success && result.data) {
        // Store the JWT token in localStorage
        if (typeof window !== 'undefined') {
          console.log('Login successful, storing token:', {
            hasToken: !!result.data.token,
            tokenPreview: result.data.token ? result.data.token.substring(0, 20) + '...' : 'No token',
            fullResponse: result
          });
          localStorage.setItem('careerx_token', result.data.token);
          console.log('Token stored in localStorage:', result.data.token);
          
          // Verify token was stored
          const storedToken = localStorage.getItem('careerx_token');
          console.log('Token verification - stored token:', storedToken ? storedToken.substring(0, 20) + '...' : 'No token found');
        }
        
        // Set user data from login response
        const userData = {
          id: result.data.user?.id || (result.data as any).id,
          email: result.data.user?.email || (result.data as any).email,
          firstName: result.data.user?.firstName || (result.data as any).firstName || '',
          lastName: result.data.user?.lastName || (result.data as any).lastName || '',
          mobile: result.data.user?.mobile || (result.data as any).mobile || '',
          role: (result.data.user?.role || (result.data as any).role || 'user') as 'user' | 'admin' | 'super_admin',
          subscriptionStatus: 'inactive' as const,
          isProfileComplete: true,
        };
        
        console.log('Constructed user data:', userData);
        
        // Validate user data before setting
        if (userData && userData.id && userData.email) {
          setUser(userData);
        } else {
          console.error('Invalid user data structure:', userData);
          return { success: false, error: 'Invalid user data received from server' };
        }
        
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
            router.push('/');
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
      
      if (result.success && result.data) {
        // Store the JWT token in localStorage
        if (typeof window !== 'undefined') {
          console.log('Admin login successful, storing token:', {
            hasToken: !!result.data.token,
            tokenPreview: result.data.token ? result.data.token.substring(0, 20) + '...' : 'No token',
            fullResponse: result
          });
          localStorage.setItem('careerx_token', result.data.token);
          console.log('Token stored in localStorage:', result.data.token);
          
          // Verify token was stored
          const storedToken = localStorage.getItem('careerx_token');
          console.log('Token verification - stored token:', storedToken ? storedToken.substring(0, 20) + '...' : 'No token found');
        }
        
        // Set user data from login response
        const userData = {
          id: result.data.user?.id || (result.data as any).id,
          email: result.data.user?.email || (result.data as any).email,
          firstName: result.data.user?.firstName || (result.data as any).firstName || '',
          lastName: result.data.user?.lastName || (result.data as any).lastName || '',
          mobile: result.data.user?.mobile || (result.data as any).mobile || '',
          role: (result.data.user?.role || (result.data as any).role || 'admin') as 'user' | 'admin' | 'super_admin',
          subscriptionStatus: 'inactive' as const,
          isProfileComplete: true,
        };
        
        console.log('Constructed admin user data:', userData);
        
        // Validate user data before setting
        if (userData && userData.id && userData.email) {
          setUser(userData);
        } else {
          console.error('Invalid admin user data structure:', userData);
          return { success: false, error: 'Invalid user data received from server' };
        }
        
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
            router.push('/');
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
      
      if (result.success && result.data) {
        // Set user data from registration response
        const userData = {
          id: result.data.user?.id || (result.data as any).id,
          email: result.data.user?.email || (result.data as any).email,
          firstName: result.data.user?.name?.split(' ')[0] || (result.data.user as any)?.firstName || '',
          lastName: result.data.user?.name?.split(' ').slice(1).join(' ') || (result.data.user as any)?.lastName || '',
          mobile: result.data.user?.mobile || (result.data as any).mobile || '',
          role: (result.data.user?.role || (result.data as any).role || 'user') as 'user' | 'admin' | 'super_admin',
          subscriptionStatus: 'inactive' as const,
          isProfileComplete: true,
        };
        
        console.log('Constructed registration user data:', userData);
        
        // Validate user data before setting
        if (userData && userData.id && userData.email) {
          setUser(userData);
        } else {
          console.error('Invalid registration user data structure:', userData);
          return { success: false, error: 'Invalid user data received from server' };
        }
        
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
            router.push('/');
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
      
      // Clear user data and token from localStorage
      if (typeof window !== 'undefined') {
        localStorage.removeItem('careerx_user');
        localStorage.removeItem('careerx_token');
        console.log('User data and token cleared from localStorage');
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
    try {
      // Ensure we have a valid token before making the request
      const token = apiClient.getToken();
      if (!token) {
        console.error('No token available for profile request');
        return null;
      }

      const result = await apiClient.get(API_ENDPOINTS.USERS.ME);
      console.log('getUserProfile response:', result);
      
      if (result.success && result.data) {
        // Handle different response structures
        const userData = result.data.user || result.data;
        if (userData && userData.profile) {
          return userData.profile;
        }
        // If no profile exists, return null
        console.log('No profile data found in response');
        return null;
      }
      return null;
    } catch (error: any) {
      console.error('Error getting user profile:', error);
      return null;
    }
  };

  const updateProfile = async (profileData: UpdateProfileRequest): Promise<{ success: boolean; error?: string }> => {
    try {
      // Ensure we have a valid token before making the request
      const token = apiClient.getToken();
      if (!token) {
        console.error('No token available for profile update request');
        return { success: false, error: 'No authentication token available' };
      }

      const result = await apiClient.put(API_ENDPOINTS.USERS.ME, profileData);
      if (result.success) {
        // Update local user data if needed
        if (result.data && result.data.user) {
          setUser(prev => prev ? { ...prev, ...result.data.user } : null);
        }
        return { success: true };
      } else {
        return { success: false, error: result.error?.message || 'Failed to update profile' };
      }
    } catch (error: any) {
      console.error('Error updating profile:', error);
      return { success: false, error: error.message || 'Failed to update profile' };
    }
  };

  const getProfileCompletion = async (): Promise<ProfileCompletionStatus | null> => {
    try {
      // Ensure we have a valid token before making the request
      const token = apiClient.getToken();
      if (!token) {
        console.error('No token available for profile completion request');
        return null;
      }

      const result = await apiClient.get(API_ENDPOINTS.USERS.ME_COMPLETION);
      if (result.success && result.data) {
        return result.data;
      }
      return null;
    } catch (error: any) {
      console.error('Error getting profile completion:', error);
      return null;
    }
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
