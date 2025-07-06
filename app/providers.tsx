"use client";

import React from "react";
import { AuthProvider } from "@/lib/auth/AuthContext";
import ErrorBoundary from "@/components/ErrorBoundary";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ErrorBoundary data-oid="4o2tdgr">
      <AuthProvider data-oid="4zrz-x9">{children}</AuthProvider>
    </ErrorBoundary>
  );
}
