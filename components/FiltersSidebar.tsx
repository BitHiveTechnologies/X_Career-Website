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
            data-oid="f-m0x:a"
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-6" data-oid="78z:0_z">
                <h2
                    className="text-xl font-bold text-gray-800 flex items-center"
                    data-oid="n0y_tsf"
                >
                    <svg
                        className="h-5 w-5 mr-2 text-[hsl(196,80%,45%)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        data-oid="l2q8r4a"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                            data-oid="mxi_uu0"
                        />
                    </svg>
                    Filter Jobs
                </h2>
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="lg:hidden p-1 text-gray-500 hover:text-gray-700"
                    data-oid="g_.2i2g"
                >
                    <svg
                        className={`h-5 w-5 transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        data-oid="uua2bs."
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                            data-oid=":pkw0c5"
                        />
                    </svg>
                </button>
            </div>

            {/* Filters Form */}
            <div
                className={`space-y-6 ${isExpanded ? 'block' : 'hidden lg:block'}`}
                role="form"
                data-oid="ny7o7eh"
            >
                {/* Job Type Filter */}
                <div data-oid="ub.qwek">
                    <label
                        htmlFor="jobType"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-oid="crzvia:"
                    >
                        Job Type
                    </label>
                    <select
                        id="jobType"
                        value={filters.jobType}
                        onChange={(e) => handleInputChange('jobType', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)] transition-colors duration-200 bg-white"
                        data-oid="oj.4d5q"
                    >
                        {jobTypes.map((type) => (
                            <option key={type.value} value={type.value} data-oid="tunpwlx">
                                {type.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Employment Type Filter */}
                <div data-oid="pq_g.h:">
                    <label
                        htmlFor="employmentType"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-oid="9_lthi."
                    >
                        Employment Type
                    </label>
                    <select
                        id="employmentType"
                        value={filters.employmentType}
                        onChange={(e) => handleInputChange('employmentType', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)] transition-colors duration-200 bg-white"
                        data-oid="28.q2aq"
                    >
                        {employmentTypes.map((type) => (
                            <option key={type.value} value={type.value} data-oid="d69fwo6">
                                {type.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Experience Level Filter */}
                <div data-oid="3_sui01">
                    <label
                        htmlFor="experienceLevel"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-oid=":lccfgb"
                    >
                        Experience Level
                    </label>
                    <select
                        id="experienceLevel"
                        value={filters.experienceLevel}
                        onChange={(e) => handleInputChange('experienceLevel', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)] transition-colors duration-200 bg-white"
                        data-oid="li:2y5n"
                    >
                        {experienceLevels.map((level) => (
                            <option key={level.value} value={level.value} data-oid="8s.a2ov">
                                {level.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Salary Range Filter */}
                <div data-oid="iv.j20g">
                    <label
                        className="block text-sm font-medium text-gray-700 mb-3"
                        data-oid="imk5w13"
                    >
                        Salary Range (LPA)
                    </label>
                    <div className="space-y-2" data-oid="uvsrwyh">
                        {[
                            { value: '', label: 'Any Salary' },
                            { value: '0-5', label: '0-5 LPA' },
                            { value: '5-10', label: '5-10 LPA' },
                            { value: '10-20', label: '10-20 LPA' },
                            { value: '20+', label: '20+ LPA' },
                        ].map((range) => (
                            <label
                                key={range.value}
                                className="flex items-center"
                                data-oid="m30blkc"
                            >
                                <input
                                    type="radio"
                                    name="salaryRange"
                                    value={range.value}
                                    checked={filters.salaryRange === range.value}
                                    onChange={(e) =>
                                        handleInputChange('salaryRange', e.target.value)
                                    }
                                    className="mr-2 text-[hsl(196,80%,45%)] focus:ring-[hsl(196,80%,45%)]"
                                    data-oid="367vf4-"
                                />

                                <span className="text-sm text-gray-700" data-oid="s02.tqy">
                                    {range.label}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Company Type Filter */}
                <div data-oid="0ecdpz.">
                    <label
                        className="block text-sm font-medium text-gray-700 mb-3"
                        data-oid="hz43inl"
                    >
                        Company Type
                    </label>
                    <div className="space-y-2" data-oid="ksy432a">
                        {[
                            { value: '', label: 'All Companies' },
                            { value: 'Startup', label: 'Startup' },
                            { value: 'MNC', label: 'MNC' },
                            { value: 'Product', label: 'Product Company' },
                            { value: 'Service', label: 'Service Company' },
                        ].map((type) => (
                            <label
                                key={type.value}
                                className="flex items-center"
                                data-oid="4vhd02w"
                            >
                                <input
                                    type="radio"
                                    name="companyType"
                                    value={type.value}
                                    checked={filters.companyType === type.value}
                                    onChange={(e) =>
                                        handleInputChange('companyType', e.target.value)
                                    }
                                    className="mr-2 text-[hsl(196,80%,45%)] focus:ring-[hsl(196,80%,45%)]"
                                    data-oid="n_3xioe"
                                />

                                <span className="text-sm text-gray-700" data-oid="-_y8i2v">
                                    {type.label}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Skills Filter */}
                <div data-oid="anljdn1">
                    <label
                        htmlFor="skills"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-oid="d7pf5me"
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
                        data-oid="44tujks"
                    />

                    <p className="mt-1 text-xs text-gray-500" data-oid="qzpy8ya">
                        Separate multiple skills with commas
                    </p>
                </div>

                {/* Location Filter */}
                <div data-oid="1m1gcbt">
                    <label
                        htmlFor="location"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-oid="fhf.4ie"
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
                        data-oid="c037c7m"
                    />
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-6 border-t border-gray-200" data-oid="6f6:59n">
                    <button
                        onClick={onReset}
                        className="w-full px-4 py-3 text-[hsl(196,80%,45%)] border border-[hsl(196,80%,45%)] rounded-lg font-medium hover:bg-[hsl(196,80%,45%)]/10 transition-all duration-300"
                        data-oid=".vt0n0g"
                    >
                        Reset All Filters
                    </button>
                </div>

                {/* Quick Filters */}
                <div className="pt-4 border-t border-gray-200" data-oid="s6ac0qr">
                    <h3 className="text-sm font-medium text-gray-700 mb-3" data-oid="lwe0fqy">
                        Quick Filters
                    </h3>
                    <div className="space-y-2" data-oid="k9pgj-6">
                        <button
                            onClick={() =>
                                onFilterChange({
                                    ...filters,
                                    jobType: 'Full-time',
                                    experienceLevel: '0-2 years',
                                })
                            }
                            className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[hsl(196,80%,45%)] hover:bg-blue-50 rounded-md transition-colors duration-200"
                            data-oid="wm7mtdf"
                        >
                            🎯 Fresher Full-time Jobs
                        </button>
                        <button
                            onClick={() => onFilterChange({ ...filters, location: 'Remote' })}
                            className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[hsl(196,80%,45%)] hover:bg-blue-50 rounded-md transition-colors duration-200"
                            data-oid="08o23td"
                        >
                            🏠 Remote Jobs
                        </button>
                        <button
                            onClick={() => onFilterChange({ ...filters, salaryRange: '10-20' })}
                            className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[hsl(196,80%,45%)] hover:bg-blue-50 rounded-md transition-colors duration-200"
                            data-oid="e13ptv9"
                        >
                            💰 High Salary (10-20 LPA)
                        </button>
                        <button
                            onClick={() => onFilterChange({ ...filters, companyType: 'Startup' })}
                            className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[hsl(196,80%,45%)] hover:bg-blue-50 rounded-md transition-colors duration-200"
                            data-oid="krd:eof"
                        >
                            🚀 Startup Jobs
                        </button>
                        <button
                            onClick={() => onFilterChange({ ...filters, jobType: 'Internship' })}
                            className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[hsl(196,80%,45%)] hover:bg-blue-50 rounded-md transition-colors duration-200"
                            data-oid="pbiiq5g"
                        >
                            📚 Internships
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
