'use client';

import { useState } from 'react';
import { FilterOptions } from '@/app/jobs/page';

interface FiltersSidebarProps {
    filters: FilterOptions;
    onFilterChange: (filters: FilterOptions) => void;
    onReset: () => void;
}

export default function FiltersSidebar({ filters, onFilterChange, onReset }: FiltersSidebarProps) {
    const [isExpanded, setIsExpanded] = useState(true);

    const handleInputChange = (field: keyof FilterOptions, value: string) => {
        onFilterChange({
            ...filters,
            [field]: value,
        });
    };

    const jobTypes = [
        { value: '', label: 'All Types' },
        { value: 'Full-time', label: 'Full-time' },
        { value: 'Part-time', label: 'Part-time' },
        { value: 'Contract', label: 'Contract' },
        { value: 'Internship', label: 'Internship' },
        { value: 'Freelance', label: 'Freelance' },
    ];

    const employmentTypes = [
        { value: '', label: 'All Employment Types' },
        { value: 'Permanent', label: 'Permanent' },
        { value: 'Contract', label: 'Contract' },
        { value: 'Temporary', label: 'Temporary' },
        { value: 'Consultant', label: 'Consultant' },
    ];

    const experienceLevels = [
        { value: '', label: 'All Experience Levels' },
        { value: '0-1 years', label: 'Fresher (0-1 years)' },
        { value: '1-3 years', label: 'Junior (1-3 years)' },
        { value: '3-5 years', label: 'Mid-level (3-5 years)' },
        { value: '5+ years', label: 'Senior (5+ years)' },
    ];

    return (
        <div
            className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-[hsl(210,30%,95%)] p-6 sticky top-24"
            data-oid="d-pr:sl"
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-6" data-oid="y7oypra">
                <h2
                    className="text-xl font-bold text-gray-800 flex items-center"
                    data-oid="-s:iczu"
                >
                    <svg
                        className="h-5 w-5 mr-2 text-[hsl(196,80%,45%)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        data-oid="caks7pz"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                            data-oid="-5__cb4"
                        />
                    </svg>
                    Filter Jobs
                </h2>
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="lg:hidden p-1 text-gray-500 hover:text-gray-700"
                    data-oid="wvyrhes"
                >
                    <svg
                        className={`h-5 w-5 transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        data-oid="dl5-zt1"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                            data-oid=".8yqxmg"
                        />
                    </svg>
                </button>
            </div>

            {/* Filters Form */}
            <div
                className={`space-y-6 ${isExpanded ? 'block' : 'hidden lg:block'}`}
                role="form"
                data-oid=":-du8cz"
            >
                {/* Job Type Filter */}
                <div data-oid="0:m-oho">
                    <label
                        htmlFor="jobType"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-oid="wch8xdh"
                    >
                        Job Type
                    </label>
                    <select
                        id="jobType"
                        value={filters.jobType}
                        onChange={(e) => handleInputChange('jobType', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)] transition-colors duration-200 bg-white"
                        data-oid=":1192ni"
                    >
                        {jobTypes.map((type) => (
                            <option key={type.value} value={type.value} data-oid="oqf5jg7">
                                {type.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Employment Type Filter */}
                <div data-oid="d9q6dxr">
                    <label
                        htmlFor="employmentType"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-oid="a91pz.q"
                    >
                        Employment Type
                    </label>
                    <select
                        id="employmentType"
                        value={filters.employmentType}
                        onChange={(e) => handleInputChange('employmentType', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)] transition-colors duration-200 bg-white"
                        data-oid="3s_g::l"
                    >
                        {employmentTypes.map((type) => (
                            <option key={type.value} value={type.value} data-oid=".wbn67x">
                                {type.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Experience Level Filter */}
                <div data-oid="4wtfb66">
                    <label
                        htmlFor="experienceLevel"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-oid="c62styf"
                    >
                        Experience Level
                    </label>
                    <select
                        id="experienceLevel"
                        value={filters.experienceLevel}
                        onChange={(e) => handleInputChange('experienceLevel', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)] transition-colors duration-200 bg-white"
                        data-oid="c3mprwc"
                    >
                        {experienceLevels.map((level) => (
                            <option key={level.value} value={level.value} data-oid="i:cwufl">
                                {level.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Skills Filter */}
                <div data-oid="z0ogkws">
                    <label
                        htmlFor="skills"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-oid="0xjhwmn"
                    >
                        Skills
                    </label>
                    <input
                        type="text"
                        id="skills"
                        value={filters.skills}
                        onChange={(e) => handleInputChange('skills', e.target.value)}
                        placeholder="e.g. Python, React, JavaScript"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)] transition-colors duration-200"
                        data-oid="wc409xb"
                    />

                    <p className="mt-1 text-xs text-gray-500" data-oid="3tac2i8">
                        Separate multiple skills with commas
                    </p>
                </div>

                {/* Location Filter */}
                <div data-oid="1i1lerb">
                    <label
                        htmlFor="location"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-oid="8bl51vi"
                    >
                        Location
                    </label>
                    <input
                        type="text"
                        id="location"
                        value={filters.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        placeholder="e.g. Bangalore, Mumbai, Remote"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)] transition-colors duration-200"
                        data-oid="x:o87p8"
                    />
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-4 border-t border-gray-200" data-oid="nfww-0z">
                    <button
                        onClick={() => {
                            // Apply filters - this is handled automatically by the parent component
                            // You could add additional logic here if needed
                        }}
                        className="w-full px-4 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-md font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:translate-y-[-1px] hover:shadow-lg"
                        data-oid="jbmkh8s"
                    >
                        Apply Filters
                    </button>

                    <button
                        onClick={onReset}
                        className="w-full px-4 py-2 text-[hsl(196,80%,45%)] border border-[hsl(196,80%,45%)] rounded-md font-medium hover:bg-[hsl(196,80%,45%)]/10 transition-all duration-300"
                        data-oid="3gfusjb"
                    >
                        Reset Filters
                    </button>
                </div>

                {/* Quick Filters */}
                <div className="pt-4 border-t border-gray-200" data-oid="-wy8tjp">
                    <h3 className="text-sm font-medium text-gray-700 mb-3" data-oid="k.9u91n">
                        Quick Filters
                    </h3>
                    <div className="space-y-2" data-oid="0ee73aq">
                        <button
                            onClick={() =>
                                onFilterChange({
                                    ...filters,
                                    jobType: 'Full-time',
                                    experienceLevel: '0-1 years',
                                })
                            }
                            className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[hsl(196,80%,45%)] hover:bg-blue-50 rounded-md transition-colors duration-200"
                            data-oid="_10.930"
                        >
                            🎯 Fresher Full-time Jobs
                        </button>
                        <button
                            onClick={() => onFilterChange({ ...filters, location: 'Remote' })}
                            className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[hsl(196,80%,45%)] hover:bg-blue-50 rounded-md transition-colors duration-200"
                            data-oid="pmcjc-f"
                        >
                            🏠 Remote Jobs
                        </button>
                        <button
                            onClick={() => onFilterChange({ ...filters, jobType: 'Internship' })}
                            className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[hsl(196,80%,45%)] hover:bg-blue-50 rounded-md transition-colors duration-200"
                            data-oid="1-e790w"
                        >
                            📚 Internships
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
