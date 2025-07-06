"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (
    email: string,
    password: string,
  ) => Promise<{ success: boolean; error?: string }>;
  register: (
    name: string,
    email: string,
    password: string,
  ) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  requireAuth: (redirectTo?: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
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
      if (typeof window !== "undefined") {
        const storedUser = localStorage.getItem("careerx_user");
        const storedToken = localStorage.getItem("careerx_token");

        if (storedUser && storedToken) {
          const userData = JSON.parse(storedUser);
          // In a real app, you'd validate the token with your backend
          setUser(userData);
        }
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      // Clear invalid data only if we're in the browser
      if (typeof window !== "undefined") {
        localStorage.removeItem("careerx_user");
        localStorage.removeItem("careerx_token");
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
      // Simulate API call - replace with actual API integration
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock validation - replace with real authentication
      if (email && password.length >= 6) {
        const userData: User = {
          id: Math.random().toString(36).substr(2, 9),
          email,
          name: email.split("@")[0],
          avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(email.split("@")[0])}&background=2563eb&color=fff`,
          createdAt: new Date().toISOString(),
        };

        // Store user data only if we're in the browser
        if (typeof window !== "undefined") {
          localStorage.setItem("careerx_user", JSON.stringify(userData));
          localStorage.setItem(
            "careerx_token",
            "mock_jwt_token_" + userData.id,
          );
        }

        setUser(userData);

        // Handle redirect after login
        if (typeof window !== "undefined") {
          const redirectTo = localStorage.getItem(
            "careerx_redirect_after_auth",
          );
          if (redirectTo) {
            localStorage.removeItem("careerx_redirect_after_auth");
            router.push(redirectTo);
          } else {
            router.push("/dashboard");
          }
        }

        return { success: true };
      } else {
        return { success: false, error: "Invalid email or password" };
      }
    } catch (error) {
      return { success: false, error: "Login failed. Please try again." };
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
      // Simulate API call - replace with actual API integration
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock validation - replace with real registration
      if (name && email && password.length >= 6) {
        const userData: User = {
          id: Math.random().toString(36).substr(2, 9),
          email,
          name,
          avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=2563eb&color=fff`,
          createdAt: new Date().toISOString(),
        };

        // Store user data only if we're in the browser
        if (typeof window !== "undefined") {
          localStorage.setItem("careerx_user", JSON.stringify(userData));
          localStorage.setItem(
            "careerx_token",
            "mock_jwt_token_" + userData.id,
          );
        }

        setUser(userData);

        // Handle redirect after registration
        if (typeof window !== "undefined") {
          const redirectTo = localStorage.getItem(
            "careerx_redirect_after_auth",
          );
          if (redirectTo) {
            localStorage.removeItem("careerx_redirect_after_auth");
            router.push(redirectTo);
          } else {
            router.push("/dashboard");
          }
        }

        return { success: true };
      } else {
        return { success: false, error: "Please fill all fields correctly" };
      }
    } catch (error) {
      return {
        success: false,
        error: "Registration failed. Please try again.",
      };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("careerx_user");
      localStorage.removeItem("careerx_token");
      localStorage.removeItem("careerx_redirect_after_auth");
    }
    setUser(null);
    router.push("/");
  };

  const requireAuth = (redirectTo?: string): boolean => {
    if (!user && !isLoading) {
      // Store the intended destination
      if (redirectTo && typeof window !== "undefined") {
        localStorage.setItem("careerx_redirect_after_auth", redirectTo);
      }

      // Redirect to login
      router.push("/login");
      return false;
    }
    return !!user;
  };

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    requireAuth,
  };

  return (
    <AuthContext.Provider value={value} data-oid="yvvh:w8">
      {children}
    </AuthContext.Provider>
  );
};
