"use client";

import React from "react";

interface LoadingSkeletonProps {
  className?: string;
  variant?: "text" | "circular" | "rectangular" | "card";
  width?: string | number;
  height?: string | number;
  lines?: number;
}

export function LoadingSkeleton({
  className = "",
  variant = "rectangular",
  width,
  height,
  lines = 1,
}: LoadingSkeletonProps) {
  const baseClasses = "animate-pulse bg-gray-200 rounded";

  const getVariantClasses = () => {
    switch (variant) {
      case "text":
        return "h-4 rounded";
      case "circular":
        return "rounded-full";
      case "card":
        return "h-48 rounded-lg";
      default:
        return "rounded";
    }
  };

  const style = {
    width: width || (variant === "text" ? "100%" : undefined),
    height: height || (variant === "circular" ? width : undefined),
  };

  if (variant === "text" && lines > 1) {
    return (
      <div className={`space-y-2 ${className}`} data-oid="nor.401">
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`${baseClasses} ${getVariantClasses()}`}
            style={{
              ...style,
              width: index === lines - 1 ? "75%" : "100%",
            }}
            data-oid="g2am87w"
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`${baseClasses} ${getVariantClasses()} ${className}`}
      style={style}
      data-oid="9htmvgl"
    />
  );
}

export function JobCardSkeleton() {
  return (
    <div
      className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
      data-oid="1wzo9-0"
    >
      <div className="flex items-start justify-between mb-4" data-oid="bc9w:f4">
        <div className="flex-1" data-oid="m:e3a8q">
          <LoadingSkeleton
            variant="text"
            className="mb-2"
            width="60%"
            data-oid="wd0:osu"
          />

          <LoadingSkeleton
            variant="text"
            className="mb-1"
            width="40%"
            data-oid="ykv656q"
          />

          <LoadingSkeleton variant="text" width="30%" data-oid="e8h.eq:" />
        </div>
        <LoadingSkeleton
          variant="circular"
          width={48}
          height={48}
          data-oid="zraz3x_"
        />
      </div>

      <div className="mb-4" data-oid="uqbw:lb">
        <LoadingSkeleton variant="text" lines={2} data-oid="005_050" />
      </div>

      <div className="flex flex-wrap gap-2 mb-4" data-oid="33qzr8j">
        <LoadingSkeleton className="h-6" width={60} data-oid="cd267m." />
        <LoadingSkeleton className="h-6" width={80} data-oid="wn_7o1w" />
        <LoadingSkeleton className="h-6" width={70} data-oid="c33uwbh" />
      </div>

      <div className="flex items-center justify-between" data-oid="54sw.lk">
        <LoadingSkeleton variant="text" width="25%" data-oid="c:g9w.i" />
        <LoadingSkeleton className="h-10" width={100} data-oid="6tt2y.k" />
      </div>
    </div>
  );
}

export function NavbarSkeleton() {
  return (
    <div
      className="sticky top-0 z-50 bg-gradient-to-r from-blue-200/90 via-blue-300/90 to-blue-200/90 backdrop-blur-md shadow-sm border-b border-blue-300/70"
      data-oid="oebj8bb"
    >
      <nav
        className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8"
        data-oid="1t64gvj"
      >
        <div
          className="flex justify-between items-center h-14 sm:h-16"
          data-oid="cg8dsyj"
        >
          <LoadingSkeleton width={120} height={32} data-oid="_zeyujo" />

          <div
            className="hidden lg:flex items-center space-x-4"
            data-oid="ylitpy5"
          >
            <LoadingSkeleton width={60} height={20} data-oid="u636ben" />
            <LoadingSkeleton width={80} height={20} data-oid="snvauy9" />
            <LoadingSkeleton width={100} height={20} data-oid="pj2lblz" />
          </div>

          <div className="flex items-center space-x-3" data-oid="sdy9t1v">
            <LoadingSkeleton width={80} height={36} data-oid="b5kfro8" />
            <LoadingSkeleton width={100} height={36} data-oid="tf05p0d" />
          </div>
        </div>
      </nav>
    </div>
  );
}
