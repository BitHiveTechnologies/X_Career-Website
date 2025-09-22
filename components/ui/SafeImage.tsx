'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface SafeImageProps {
    src: string;
    alt: string;
    fallbackSrc?: string;
    className?: string;
    width?: number;
    height?: number;
    onError?: () => void;
}

export function SafeImage({
    src,
    alt,
    fallbackSrc,
    className = '',
    width,
    height,
    onError,
}: SafeImageProps) {
    const [imgSrc, setImgSrc] = useState(src);
    const [hasError, setHasError] = useState(false);

    const handleError = () => {
        if (!hasError) {
            setHasError(true);
            if (fallbackSrc) {
                setImgSrc(fallbackSrc);
            }
            onError?.();
        }
    };

    // If no fallback and error occurred, show placeholder
    if (hasError && !fallbackSrc) {
        return (
            <div
                className={`bg-gray-200 flex items-center justify-center ${className}`}
                style={{ width, height }}
                data-oid="3j4z0m2"
            >
                <svg
                    className="w-8 h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="xvtw7tl"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        data-oid="qi-pyw8"
                    />
                </svg>
            </div>
        );
    }

    return (
        <Image
            src={imgSrc}
            alt={alt}
            className={className}
            width={width}
            height={height}
            onError={handleError}
            loading="lazy"
            data-oid="m5tnd7e"
        />
    );
}

export function SafeAvatar({
    src,
    name,
    size = 40,
    className = '',
}: {
    src?: string;
    name: string;
    size?: number;
    className?: string;
}) {
    const [imgError, setImgError] = useState(false);

    // Generate initials from name
    const getInitials = (name: string | undefined) => {
        if (!name) return 'U';
        return name
            .split(' ')
            .map((word) => word.charAt(0))
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    // Generate consistent color based on name
    const getAvatarColor = (name: string | undefined) => {
        const colors = [
            'bg-blue-500',
            'bg-green-500',
            'bg-purple-500',
            'bg-pink-500',
            'bg-indigo-500',
            'bg-yellow-500',
            'bg-red-500',
        ];

        if (!name) return colors[0];
        const index = name.charCodeAt(0) % colors.length;
        return colors[index];
    };

    const handleImageError = () => {
        setImgError(true);
    };

    if (!src || imgError) {
        return (
            <div
                className={`${getAvatarColor(name)} flex items-center justify-center text-white font-medium rounded-full ${className}`}
                style={{ width: size, height: size, fontSize: size * 0.4 }}
                data-oid="pz_:g:t"
            >
                {getInitials(name)}
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={name}
            className={`rounded-full object-cover ${className}`}
            style={{ width: size, height: size }}
            onError={handleImageError}
            loading="lazy"
            data-oid="q2pym80"
        />
    );
}
