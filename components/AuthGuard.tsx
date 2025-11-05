'use client';

import React, { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth/AuthContext';

interface AuthGuardProps {
  children: ReactNode;
  requireAuth?: boolean;
  requireRole?: 'user' | 'admin' | 'super_admin';
  redirectTo?: string;
  fallback?: ReactNode;
}

function AuthGuard({
  children,
  requireAuth = true,
  requireRole,
  redirectTo,
  fallback = <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
  </div>
}: AuthGuardProps) {
  const { user, isLoading, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return; // Still loading, don't redirect yet

    // If authentication is required but user is not authenticated
    if (requireAuth && !isAuthenticated) {
      const currentPath = window.location.pathname;
      const redirectPath = redirectTo || `/login?redirect=${encodeURIComponent(currentPath)}`;
      router.push(redirectPath);
      return;
    }

    // If user is authenticated but doesn't have required role
    if (requireAuth && isAuthenticated && requireRole && user) {
      const hasRequiredRole = checkRoleAccess(user.role, requireRole);
      if (!hasRequiredRole) {
        // Redirect based on user role
        if (user.role === 'admin' || user.role === 'super_admin') {
          router.push('/dashboard');
        } else {
          router.push('/');
        }
        return;
      }
    }

    // If user is authenticated but trying to access login/register pages
    if (!requireAuth && isAuthenticated && user) {
      // Redirect based on user role
      if (user.role === 'admin' || user.role === 'super_admin') {
        router.push('/dashboard');
      } else {
        router.push('/');
      }
      return;
    }
  }, [isLoading, isAuthenticated, user, requireAuth, requireRole, redirectTo, router]);

  // Show loading state while checking authentication
  if (isLoading) {
    return <>{fallback}</>;
  }

  // If authentication is required but user is not authenticated
  if (requireAuth && !isAuthenticated) {
    return <>{fallback}</>;
  }

  // If user is authenticated but doesn't have required role
  if (requireAuth && isAuthenticated && requireRole && user) {
    const hasRequiredRole = checkRoleAccess(user.role, requireRole);
    if (!hasRequiredRole) {
      return <>{fallback}</>;
    }
  }

  // If user is authenticated but trying to access login/register pages
  if (!requireAuth && isAuthenticated) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}

// Helper function to check role access
function checkRoleAccess(userRole: string, requiredRole: string): boolean {
  const roleHierarchy = {
    'user': 1,
    'admin': 2,
    'super_admin': 3
  };

  const userLevel = roleHierarchy[userRole as keyof typeof roleHierarchy] || 0;
  const requiredLevel = roleHierarchy[requiredRole as keyof typeof roleHierarchy] || 0;

  return userLevel >= requiredLevel;
}

// Higher-order component for easier usage
export function withAuthGuard<P extends object>(
  Component: React.ComponentType<P>,
  options: Omit<AuthGuardProps, 'children'> = {}
) {
  return function AuthGuardedComponent(props: P) {
    return (
      <AuthGuard {...options}>
        <Component {...props} />
      </AuthGuard>
    );
  };
}

// Specific guards for common use cases
export function AdminGuard({ children }: { children: ReactNode }) {
  return (
    <AuthGuard requireAuth={true} requireRole="admin">
      {children}
    </AuthGuard>
  );
}

export function SuperAdminGuard({ children }: { children: ReactNode }) {
  return (
    <AuthGuard requireAuth={true} requireRole="super_admin">
      {children}
    </AuthGuard>
  );
}

export function UserGuard({ children }: { children: ReactNode }) {
  return (
    <AuthGuard requireAuth={true} requireRole="user">
      {children}
    </AuthGuard>
  );
}

export function GuestGuard({ children }: { children: ReactNode }) {
  return (
    <AuthGuard requireAuth={false}>
      {children}
    </AuthGuard>
  );
}

export { AuthGuard };
export default AuthGuard;
