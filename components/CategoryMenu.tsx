'use client';

import { useRef, useState, useEffect } from 'react';
import { Category } from '@/app/jobs/page';

interface CategoryMenuProps {
    categories: Category[];
    selectedCategory: string;
    onCategoryChange: (categorySlug: string) => void;
}

export default function CategoryMenu({
    categories,
    selectedCategory,
    onCategoryChange,
}: CategoryMenuProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScrollButtons = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
        }
    };

    useEffect(() => {
        checkScrollButtons();
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', checkScrollButtons);
            return () => container.removeEventListener('scroll', checkScrollButtons);
        }
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 200;
            const newScrollLeft =
                scrollContainerRef.current.scrollLeft +
                (direction === 'left' ? -scrollAmount : scrollAmount);

            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="relative" data-oid="sbmju:q">
            {/* Scroll Left Button */}
            <button
                onClick={() => scroll('left')}
                className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md border border-gray-200 transition-all duration-300 ${
                    canScrollLeft
                        ? 'opacity-100 hover:bg-white hover:shadow-lg'
                        : 'opacity-0 pointer-events-none'
                }`}
                aria-label="Scroll left"
                data-oid="._7tnok"
            >
                <svg
                    className="h-5 w-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="3.kj.1d"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                        data-oid="wqs684o"
                    />
                </svg>
            </button>

            {/* Scroll Right Button */}
            <button
                onClick={() => scroll('right')}
                className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md border border-gray-200 transition-all duration-300 ${
                    canScrollRight
                        ? 'opacity-100 hover:bg-white hover:shadow-lg'
                        : 'opacity-0 pointer-events-none'
                }`}
                aria-label="Scroll right"
                data-oid="nq_gz7."
            >
                <svg
                    className="h-5 w-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-oid="0amzk9:"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                        data-oid="bwlnxhf"
                    />
                </svg>
            </button>

            {/* Categories Container */}
            <div
                ref={scrollContainerRef}
                className="flex space-x-4 overflow-x-auto scrollbar-hide py-4 px-8"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                data-oid="z_1ow16"
            >
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => onCategoryChange(category.slug)}
                        className={`flex-shrink-0 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-md ${
                            selectedCategory === category.slug
                                ? 'bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white shadow-lg'
                                : 'bg-white/80 backdrop-blur-sm text-gray-700 border border-gray-200 hover:border-[hsl(196,80%,45%)] hover:text-[hsl(196,80%,45%)] hover:bg-white'
                        }`}
                        data-oid="ck6pp:d"
                    >
                        <div className="flex flex-col items-center" data-oid="m7:smc3">
                            <span className="font-semibold" data-oid="q1o_jn5">
                                {category.name}
                            </span>
                            <span
                                className={`text-xs mt-1 ${
                                    selectedCategory === category.slug
                                        ? 'text-blue-100'
                                        : 'text-gray-500'
                                }`}
                                data-oid="_y_etha"
                            >
                                {category.count.toLocaleString()} jobs
                            </span>
                        </div>
                    </button>
                ))}
            </div>

            {/* Gradient Overlays for scroll indication */}
            <div
                className={`absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[hsl(196,60%,95%)] to-transparent pointer-events-none transition-opacity duration-300 ${
                    canScrollLeft ? 'opacity-100' : 'opacity-0'
                }`}
                data-oid="3o506rg"
            />

            <div
                className={`absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[hsl(196,60%,95%)] to-transparent pointer-events-none transition-opacity duration-300 ${
                    canScrollRight ? 'opacity-100' : 'opacity-0'
                }`}
                data-oid="m-maae1"
            />
        </div>
    );
}
