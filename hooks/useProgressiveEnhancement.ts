'use client';

import { useState, useEffect } from 'react';

/**
 * Hook for progressive enhancement - starts with basic functionality
 * and enhances when JavaScript is available
 */
export function useProgressiveEnhancement() {
    const [isEnhanced, setIsEnhanced] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Mark as client-side rendered
        setIsClient(true);

        // Small delay to ensure smooth transition
        const timer = setTimeout(() => {
            setIsEnhanced(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return {
        isEnhanced,
        isClient,
        // Helper to conditionally apply enhanced features
        enhance: (enhancedValue: any, fallbackValue: any) =>
            isEnhanced ? enhancedValue : fallbackValue,
    };
}

/**
 * Hook for handling client-side only features
 */
export function useClientOnly() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return isClient;
}

/**
 * Hook for graceful JavaScript degradation
 */
export function useGracefulDegradation() {
    const [hasJavaScript, setHasJavaScript] = useState(false);

    useEffect(() => {
        setHasJavaScript(true);
    }, []);

    return {
        hasJavaScript,
        // Provide fallback for non-JS users
        withFallback: (jsVersion: any, noJsVersion: any) =>
            hasJavaScript ? jsVersion : noJsVersion,
    };
}
