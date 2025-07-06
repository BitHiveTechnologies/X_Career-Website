'use client';

import React from 'react';

interface LoadingSkeletonProps {
    className?: string;
    variant?: 'text' | 'circular' | 'rectangular' | 'card';
    width?: string | number;
    height?: string | number;
    lines?: number;
}

export function LoadingSkeleton({
    className = '',
    variant = 'rectangular',
    width,
    height,
    lines = 1,
}: LoadingSkeletonProps) {
    const baseClasses = 'animate-pulse bg-gray-200 rounded';

    const getVariantClasses = () => {
        switch (variant) {
            case 'text':
                return 'h-4 rounded';
            case 'circular':
                return 'rounded-full';
            case 'card':
                return 'h-48 rounded-lg';
            default:
                return 'rounded';
        }
    };

    const style = {
        width: width || (variant === 'text' ? '100%' : undefined),
        height: height || (variant === 'circular' ? width : undefined),
    };

    if (variant === 'text' && lines > 1) {
        return (
            <div className={`space-y-2 ${className}`} data-oid="_h5bhmj">
                {Array.from({ length: lines }).map((_, index) => (
                    <div
                        key={index}
                        className={`${baseClasses} ${getVariantClasses()}`}
                        style={{
                            ...style,
                            width: index === lines - 1 ? '75%' : '100%',
                        }}
                        data-oid="o2_rk_g"
                    />
                ))}
            </div>
        );
    }

    return (
        <div
            className={`${baseClasses} ${getVariantClasses()} ${className}`}
            style={style}
            data-oid="lmel083"
        />
    );
}

export function JobCardSkeleton() {
    return (
        <div
            className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
            data-oid="_oq_lzj"
        >
            <div className="flex items-start justify-between mb-4" data-oid="m1uvtrs">
                <div className="flex-1" data-oid="idb0a6f">
                    <LoadingSkeleton
                        variant="text"
                        className="mb-2"
                        width="60%"
                        data-oid=":h69lft"
                    />

                    <LoadingSkeleton
                        variant="text"
                        className="mb-1"
                        width="40%"
                        data-oid="j97rpe2"
                    />

                    <LoadingSkeleton variant="text" width="30%" data-oid="-q7_3.k" />
                </div>
                <LoadingSkeleton variant="circular" width={48} height={48} data-oid="svv-6i_" />
            </div>

            <div className="mb-4" data-oid="6wr1rhk">
                <LoadingSkeleton variant="text" lines={2} data-oid="7pfp6m1" />
            </div>

            <div className="flex flex-wrap gap-2 mb-4" data-oid="q4o20-z">
                <LoadingSkeleton className="h-6" width={60} data-oid="sh7w8ci" />
                <LoadingSkeleton className="h-6" width={80} data-oid="-lq7i-2" />
                <LoadingSkeleton className="h-6" width={70} data-oid="b27vn0b" />
            </div>

            <div className="flex items-center justify-between" data-oid=".o3wqlm">
                <LoadingSkeleton variant="text" width="25%" data-oid="jfp.-an" />
                <LoadingSkeleton className="h-10" width={100} data-oid="scq3a3g" />
            </div>
        </div>
    );
}

export function NavbarSkeleton() {
    return (
        <div
            className="sticky top-0 z-50 bg-gradient-to-r from-blue-200/90 via-blue-300/90 to-blue-200/90 backdrop-blur-md shadow-sm border-b border-blue-300/70"
            data-oid="b_mrksk"
        >
            <nav className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8" data-oid="_1ggkua">
                <div className="flex justify-between items-center h-14 sm:h-16" data-oid="hyzamjd">
                    <LoadingSkeleton width={120} height={32} data-oid="0zxfgtv" />

                    <div className="hidden lg:flex items-center space-x-4" data-oid="hdg8-6a">
                        <LoadingSkeleton width={60} height={20} data-oid="oy7oqbx" />
                        <LoadingSkeleton width={80} height={20} data-oid="kbflooz" />
                        <LoadingSkeleton width={100} height={20} data-oid="hhs-:gb" />
                    </div>

                    <div className="flex items-center space-x-3" data-oid="d58ij0f">
                        <LoadingSkeleton width={80} height={36} data-oid="lpjz-ic" />
                        <LoadingSkeleton width={100} height={36} data-oid="fkt-xl." />
                    </div>
                </div>
            </nav>
        </div>
    );
}
