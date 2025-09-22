/**
 * Authentication Service for NotifyX Backend Integration
 * Handles JWT authentication, user management, and session handling
 */

import { apiClient, API_ENDPOINTS } from './client';
import { 
  LoginRequest, 
  AdminLoginRequest,
  LoginResponse, 
  User, 
  UserProfile, 
  ProfileCompletionStatus,
  UpdateProfileRequest,
  ApiResponse 
} from './types';
import { validateUser, validateUserProfile, safeValidate } from './validation';

// ============================================================================
// AUTHENTICATION SERVICE CLASS
// ============================================================================

export class AuthService {
  private static instance: AuthService;
  private currentUser: User | null = null;
  private listeners: Array<(user: User | null) => void> = [];

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  // ============================================================================
  // AUTHENTICATION METHODS
  // ============================================================================

  /**
   * User login with email and password
   */
  async login(loginData: LoginRequest): Promise<{ success: boolean; error?: string; user?: User }> {
    try {
      const response = await apiClient.post<LoginResponse>(API_ENDPOINTS.AUTH.LOGIN, loginData);
      
      if (response.success && response.data) {
        // Set the token for future requests
        apiClient.setToken(response.data.token);
        
        // Get full user profile
        const userResponse = await this.getCurrentUser();
        if (userResponse.success && userResponse.user) {
          this.setCurrentUser(userResponse.user);
          return { success: true, user: userResponse.user };
        }
        
        // If we can't get full user data, use the basic user info from login
        const basicUser: User = {
          id: response.data.user.id,
          email: response.data.user.email,
          firstName: response.data.user.firstName,
          lastName: response.data.user.lastName,
          role: response.data.user.role as 'user' | 'admin' | 'super_admin',
          subscriptionStatus: 'inactive',
          isProfileComplete: false,
        };
        
        this.setCurrentUser(basicUser);
        return { success: true, user: basicUser };
      }
      
      return { success: false, error: 'Login failed' };
    } catch (error: any) {
      console.error('Login error:', error);
      return { 
        success: false, 
        error: error.message || 'Login failed. Please try again.' 
      };
    }
  }

  /**
   * Admin login with email and password
   */
  async adminLogin(loginData: AdminLoginRequest): Promise<{ success: boolean; error?: string; user?: User }> {
    try {
      const response = await apiClient.post<any>(API_ENDPOINTS.AUTH.ADMIN_LOGIN, loginData);
      
      if (response.success && response.data) {
        // Set the token for future requests
        apiClient.setToken(response.data.token);
        
        // Use the user data directly from login response since token verification is failing
        // Handle both admin and user response structures
        const userData = response.data.admin || response.data.user;
        const basicUser: User = {
          id: userData.id,
          email: userData.email,
          firstName: userData.name ? userData.name.split(' ')[0] : userData.firstName || 'Admin',
          lastName: userData.name ? userData.name.split(' ').slice(1).join(' ') : userData.lastName || 'User',
          role: userData.role as 'user' | 'admin' | 'super_admin',
          subscriptionStatus: 'inactive',
          isProfileComplete: false,
        };
        
        this.setCurrentUser(basicUser);
        return { success: true, user: basicUser };
      }
      
      return { success: false, error: 'Admin login failed' };
    } catch (error: any) {
      console.error('Admin login error:', error);
      return { 
        success: false, 
        error: error.message || 'Admin login failed. Please try again.' 
      };
    }
  }

  /**
   * Login with email and password (traditional login)
   */
  async loginWithPassword(email: string, password: string): Promise<{ success: boolean; error?: string; user?: User }> {
    return this.login({
      email,
      password,
    });
  }

  /**
   * Get current user from token
   */
  async getCurrentUser(): Promise<{ success: boolean; user?: User; error?: string }> {
    try {
      const response = await apiClient.get<User>(API_ENDPOINTS.AUTH.ME);
      
      if (response.success && response.data) {
        const validation = safeValidate(response.data, validateUser);
        if (validation.isValid) {
          return { success: true, user: validation.data! };
        } else {
          return { success: false, error: 'Invalid user data received' };
        }
      }
      
      return { success: false, error: 'Failed to get user data' };
    } catch (error: any) {
      console.error('Get current user error:', error);
      return { 
        success: false, 
        error: error.message || 'Failed to get user data' 
      };
    }
  }

  /**
   * Verify JWT token by getting user data
   */
  async verifyToken(): Promise<boolean> {
    try {
      const response = await apiClient.get(API_ENDPOINTS.AUTH.ME);
      return response.success;
    } catch {
      return false;
    }
  }

  /**
   * Logout user
   */
  async logout(): Promise<void> {
    try {
      // Clear token from client
      apiClient.clearToken();
      
      // Clear current user
      this.setCurrentUser(null);
      
      // Clear localStorage
      if (typeof window !== 'undefined') {
        localStorage.removeItem('careerx_user');
        localStorage.removeItem('careerx_token');
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  }

  // ============================================================================
  // USER PROFILE METHODS
  // ============================================================================

  /**
   * Get current user profile
   */
  async getUserProfile(): Promise<{ success: boolean; profile?: User; error?: string }> {
    try {
      const response = await apiClient.get<User>(API_ENDPOINTS.USERS.ME);
      
      if (response.success && response.data) {
        const validation = safeValidate(response.data, validateUser);
        if (validation.isValid) {
          this.setCurrentUser(validation.data!);
          return { success: true, profile: validation.data! };
        } else {
          return { success: false, error: 'Invalid user data received' };
        }
      }
      
      return { success: false, error: 'Failed to get user profile' };
    } catch (error: any) {
      console.error('Get user profile error:', error);
      return { 
        success: false, 
        error: error.message || 'Failed to get user profile' 
      };
    }
  }

  /**
   * Update user profile
   */
  async updateProfile(profileData: UpdateProfileRequest): Promise<{ success: boolean; error?: string; user?: User }> {
    try {
      const response = await apiClient.put<User>(API_ENDPOINTS.USERS.ME, profileData);
      
      if (response.success && response.data) {
        const validation = safeValidate(response.data, validateUser);
        if (validation.isValid) {
          this.setCurrentUser(validation.data!);
          return { success: true, user: validation.data! };
        } else {
          return { success: false, error: 'Invalid user data received' };
        }
      }
      
      return { success: false, error: 'Failed to update profile' };
    } catch (error: any) {
      console.error('Update profile error:', error);
      return { 
        success: false, 
        error: error.message || 'Failed to update profile' 
      };
    }
  }

  /**
   * Get profile completion status
   */
  async getProfileCompletion(): Promise<{ success: boolean; completion?: ProfileCompletionStatus; error?: string }> {
    try {
      const response = await apiClient.get<ProfileCompletionStatus>(API_ENDPOINTS.USERS.ME_COMPLETION);
      
      if (response.success && response.data) {
        return { success: true, completion: response.data };
      }
      
      return { success: false, error: 'Failed to get profile completion status' };
    } catch (error: any) {
      console.error('Get profile completion error:', error);
      return { 
        success: false, 
        error: error.message || 'Failed to get profile completion status' 
      };
    }
  }

  // ============================================================================
  // SESSION MANAGEMENT
  // ============================================================================

  /**
   * Initialize authentication from stored token
   */
  async initializeAuth(): Promise<{ success: boolean; user?: User; error?: string }> {
    try {
      // Check if we have a stored token
      const token = apiClient.getToken();
      if (!token) {
        return { success: false, error: 'No stored token found' };
      }

      // Get current user data (this will verify the token)
      const userResult = await this.getCurrentUser();
      if (userResult.success && userResult.user) {
        this.setCurrentUser(userResult.user);
        return { success: true, user: userResult.user };
      }

      // If we can't get user data, don't logout immediately
      // The token might be valid but the /me endpoint might not work
      console.warn('Token verification failed, but keeping token:', userResult.error);
      return { success: false, error: userResult.error || 'Token verification failed' };
    } catch (error: any) {
      console.error('Initialize auth error:', error);
      // Don't logout on error, just return failure
      return { 
        success: false, 
        error: error.message || 'Failed to initialize authentication' 
      };
    }
  }

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    return apiClient.isAuthenticated() && this.currentUser !== null;
  }

  /**
   * Get current user
   */
  getCurrentUserSync(): User | null {
    return this.currentUser;
  }

  /**
   * Set current user and notify listeners
   */
  private setCurrentUser(user: User | null): void {
    this.currentUser = user;
    
    // Store in localStorage
    if (typeof window !== 'undefined') {
      if (user) {
        localStorage.setItem('careerx_user', JSON.stringify(user));
      } else {
        localStorage.removeItem('careerx_user');
      }
    }
    
    // Notify listeners
    this.listeners.forEach(listener => listener(user));
  }

  /**
   * Add listener for auth state changes
   */
  addAuthListener(listener: (user: User | null) => void): () => void {
    this.listeners.push(listener);
    
    // Return unsubscribe function
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  // ============================================================================
  // ROLE-BASED ACCESS CONTROL
  // ============================================================================

  /**
   * Check if user has specific role
   */
  hasRole(role: 'user' | 'admin' | 'super_admin'): boolean {
    return this.currentUser?.role === role;
  }

  /**
   * Check if user is admin
   */
  isAdmin(): boolean {
    return this.hasRole('admin') || this.hasRole('super_admin');
  }

  /**
   * Check if user is super admin
   */
  isSuperAdmin(): boolean {
    return this.hasRole('super_admin');
  }

  /**
   * Check if user can access admin features
   */
  canAccessAdmin(): boolean {
    return this.isAdmin();
  }

  // ============================================================================
  // SUBSCRIPTION METHODS
  // ============================================================================

  /**
   * Get user subscription status
   */
  getUserSubscription(): 'free' | 'starter' | 'premium' {
    if (!this.currentUser) return 'free';
    
    // Map backend subscription status to frontend plans
    switch (this.currentUser.subscriptionStatus) {
      case 'active':
        return 'premium'; // Default to premium for active subscriptions
      case 'inactive':
      case 'expired':
      case 'cancelled':
      default:
        return 'free';
    }
  }

  /**
   * Update subscription status
   */
  async updateSubscription(plan: 'free' | 'starter' | 'premium'): Promise<{ success: boolean; error?: string }> {
    try {
      // This would typically involve payment processing
      // For now, we'll just update the local user state
      if (this.currentUser) {
        const updatedUser: User = {
          ...this.currentUser,
          subscriptionStatus: plan === 'free' ? 'inactive' : 'active',
        };
        this.setCurrentUser(updatedUser);
        return { success: true };
      }
      
      return { success: false, error: 'No user logged in' };
    } catch (error: any) {
      console.error('Update subscription error:', error);
      return { 
        success: false, 
        error: error.message || 'Failed to update subscription' 
      };
    }
  }
}

// ============================================================================
// SINGLETON INSTANCE
// ============================================================================

export const authService = AuthService.getInstance();

// ============================================================================
// CONVENIENCE FUNCTIONS
// ============================================================================

export const login = (loginData: LoginRequest) => authService.login(loginData);
export const adminLogin = (loginData: AdminLoginRequest) => authService.adminLogin(loginData);
export const loginWithPassword = (email: string, password: string) => authService.loginWithPassword(email, password);
export const logout = () => authService.logout();
export const getCurrentUser = () => authService.getCurrentUser();
export const getUserProfile = () => authService.getUserProfile();
export const updateProfile = (profileData: UpdateProfileRequest) => authService.updateProfile(profileData);
export const getProfileCompletion = () => authService.getProfileCompletion();
export const initializeAuth = () => authService.initializeAuth();
export const isAuthenticated = () => authService.isAuthenticated();
export const getCurrentUserSync = () => authService.getCurrentUserSync();
export const addAuthListener = (listener: (user: User | null) => void) => authService.addAuthListener(listener);
export const hasRole = (role: 'user' | 'admin' | 'super_admin') => authService.hasRole(role);
export const isAdmin = () => authService.isAdmin();
export const isSuperAdmin = () => authService.isSuperAdmin();
export const canAccessAdmin = () => authService.canAccessAdmin();
export const getUserSubscription = () => authService.getUserSubscription();
export const updateSubscription = (plan: 'free' | 'starter' | 'premium') => authService.updateSubscription(plan);
