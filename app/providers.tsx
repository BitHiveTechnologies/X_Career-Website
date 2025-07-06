"use client";

import React from "react";
import { AuthProvider } from "@/lib/auth/AuthContext";
import ErrorBoundary from "@/components/ErrorBoundary";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ErrorBoundary data-oid="nc9ek12">
      <AuthProvider data-oid="ymfie4-">{children}</AuthProvider>
    </ErrorBoundary>
  );
}
