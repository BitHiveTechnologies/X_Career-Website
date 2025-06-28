'use client';

import { useState } from 'react';
import { FilterOptions } from '@/app/jobs/page';

interface FiltersSidebarProps {
    filters: FilterOptions | any;
    onFilterChange: (filters: FilterOptions | any) => void;
    onReset: () => void;
    isInternshipPage?: boolean;
}

export default function FiltersSidebar({
    filters,
    onFilterChange,
    onReset,
    isInternshipPage = false,
}: FiltersSidebarProps) {
    const [isExpanded, setIsExpanded] = useState(true);

    const handleInputChange = (field: string, value: string) => {
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
            data-oid="lnfvhe_"
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-6" data-oid="x8b7xjx">
                <h2
                    className="text-xl font-bold text-gray-800 flex items-center"
                    data-oid="cxmo008"
                >
                    <svg
                        className="h-5 w-5 mr-2 text-[hsl(196,80%,45%)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        data-oid="wnja1pm"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                            data-oid="pow.mtt"
                        />
                    </svg>
                    {isInternshipPage ? 'Filter Internships' : 'Filter Jobs'}
                </h2>
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="lg:hidden p-1 text-gray-500 hover:text-gray-700"
                    data-oid="-6be227"
                >
                    <svg
                        className={`h-5 w-5 transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        data-oid="fxoutwf"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                            data-oid="7k70:53"
                        />
                    </svg>
                </button>
            </div>

            {/* Filters Form */}
            <div
                className={`space-y-6 ${isExpanded ? 'block' : 'hidden lg:block'}`}
                role="form"
                data-oid="0djew94"
            >
                {/* Job Type Filter */}
                <div data-oid="ct4amoe">
                    <label
                        htmlFor="jobType"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-oid=".le0sin"
                    >
                        Job Type
                    </label>
                    <select
                        id="jobType"
                        value={filters.jobType}
                        onChange={(e) => handleInputChange('jobType', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)] transition-colors duration-200 bg-white"
                        data-oid="jzzzv-k"
                    >
                        {jobTypes.map((type) => (
                            <option key={type.value} value={type.value} data-oid="7y1fs29">
                                {type.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Employment Type Filter */}
                <div data-oid="tmjr89z">
                    <label
                        htmlFor="employmentType"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-oid="k5uimyn"
                    >
                        Employment Type
                    </label>
                    <select
                        id="employmentType"
                        value={filters.employmentType}
                        onChange={(e) => handleInputChange('employmentType', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)] transition-colors duration-200 bg-white"
                        data-oid=".5jzicw"
                    >
                        {employmentTypes.map((type) => (
                            <option key={type.value} value={type.value} data-oid="s8hbyde">
                                {type.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Experience Level Filter (only for jobs) */}
                {!isInternshipPage && (
                    <div data-oid="y1nbw_f">
                        <label
                            htmlFor="experienceLevel"
                            className="block text-sm font-medium text-gray-700 mb-2"
                            data-oid="gyj.rpu"
                        >
                            Experience Level
                        </label>
                        <select
                            id="experienceLevel"
                            value={filters.experienceLevel}
                            onChange={(e) => handleInputChange('experienceLevel', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)] transition-colors duration-200 bg-white"
                            data-oid="lg69wyd"
                        >
                            {experienceLevels.map((level) => (
                                <option key={level.value} value={level.value} data-oid="8ogqimx">
                                    {level.label}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {/* Duration Filter (only for internships) */}
                {isInternshipPage && (
                    <div data-oid="w8r_f:j">
                        <label
                            htmlFor="duration"
                            className="block text-sm font-medium text-gray-700 mb-2"
                            data-oid="s3l2skd"
                        >
                            Duration
                        </label>
                        <select
                            id="duration"
                            value={filters.duration || ''}
                            onChange={(e) => handleInputChange('duration', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)] transition-colors duration-200 bg-white"
                            data-oid="tsv_9l6"
                        >
                            <option value="" data-oid=":a4_wu2">
                                All Durations
                            </option>
                            <option value="1 month" data-oid="g.rxqg7">
                                1 month
                            </option>
                            <option value="2 months" data-oid="o19i8k_">
                                2 months
                            </option>
                            <option value="3 months" data-oid="suimrdz">
                                3 months
                            </option>
                            <option value="4 months" data-oid="hjumqyo">
                                4 months
                            </option>
                            <option value="5 months" data-oid="_qav1y3">
                                5 months
                            </option>
                            <option value="6 months" data-oid="28yuuje">
                                6 months
                            </option>
                        </select>
                    </div>
                )}

                {/* Salary/Stipend Range Filter */}
                <div data-oid="ayaxka3">
                    <label
                        className="block text-sm font-medium text-gray-700 mb-3"
                        data-oid="mzioudm"
                    >
                        {isInternshipPage ? 'Stipend Range (per month)' : 'Salary Range (LPA)'}
                    </label>
                    <div className="space-y-2" data-oid="44pptmr">
                        {(isInternshipPage
                            ? [
                                  { value: '', label: 'Any Stipend' },
                                  { value: '0-15', label: '₹0-15k' },
                                  { value: '15-25', label: '₹15-25k' },
                                  { value: '25-35', label: '₹25-35k' },
                                  { value: '35+', label: '₹35k+' },
                              ]
                            : [
                                  { value: '', label: 'Any Salary' },
                                  { value: '0-5', label: '0-5 LPA' },
                                  { value: '5-10', label: '5-10 LPA' },
                                  { value: '10-20', label: '10-20 LPA' },
                                  { value: '20+', label: '20+ LPA' },
                              ]
                        ).map((range) => (
                            <label
                                key={range.value}
                                className="flex items-center"
                                data-oid="rmagngv"
                            >
                                <input
                                    type="radio"
                                    name={isInternshipPage ? 'stipendRange' : 'salaryRange'}
                                    value={range.value}
                                    checked={
                                        (isInternshipPage
                                            ? filters.stipendRange
                                            : filters.salaryRange) === range.value
                                    }
                                    onChange={(e) =>
                                        handleInputChange(
                                            isInternshipPage ? 'stipendRange' : 'salaryRange',
                                            e.target.value,
                                        )
                                    }
                                    className="mr-2 text-[hsl(196,80%,45%)] focus:ring-[hsl(196,80%,45%)]"
                                    data-oid="9w6xjj_"
                                />

                                <span className="text-sm text-gray-700" data-oid="a1x9y1p">
                                    {range.label}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Paid/Unpaid Filter (only for internships) */}
                {isInternshipPage && (
                    <div data-oid="8yje7jn">
                        <label
                            className="block text-sm font-medium text-gray-700 mb-3"
                            data-oid="dxqioat"
                        >
                            Internship Type
                        </label>
                        <div className="space-y-2" data-oid="7:xlwbh">
                            {[
                                { value: '', label: 'All Internships' },
                                { value: 'paid', label: 'Paid Internships' },
                                { value: 'unpaid', label: 'Unpaid Internships' },
                            ].map((type) => (
                                <label
                                    key={type.value}
                                    className="flex items-center"
                                    data-oid="f0eh._i"
                                >
                                    <input
                                        type="radio"
                                        name="isPaid"
                                        value={type.value}
                                        checked={filters.isPaid === type.value}
                                        onChange={(e) =>
                                            handleInputChange('isPaid', e.target.value)
                                        }
                                        className="mr-2 text-[hsl(196,80%,45%)] focus:ring-[hsl(196,80%,45%)]"
                                        data-oid="kj5pnl3"
                                    />

                                    <span className="text-sm text-gray-700" data-oid="bhlu6o8">
                                        {type.label}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>
                )}

                {/* Company Type Filter */}
                <div data-oid="r05nqkb">
                    <label
                        className="block text-sm font-medium text-gray-700 mb-3"
                        data-oid="ry2k2dv"
                    >
                        Company Type
                    </label>
                    <div className="space-y-2" data-oid="8xj66z-">
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
                                data-oid="fq2e80c"
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
                                    data-oid="77_bs2y"
                                />

                                <span className="text-sm text-gray-700" data-oid="10mq45f">
                                    {type.label}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Skills Filter */}
                <div data-oid="wh_vivs">
                    <label
                        htmlFor="skills"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-oid="upq6u_."
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
                        data-oid="aqc2.cm"
                    />

                    <p className="mt-1 text-xs text-gray-500" data-oid="idx.61.">
                        Separate multiple skills with commas
                    </p>
                </div>

                {/* Location Filter */}
                <div data-oid="_aj-005">
                    <label
                        htmlFor="location"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-oid="14lhkn6"
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
                        data-oid="hrn8a52"
                    />
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-6 border-t border-gray-200" data-oid="0-sed4r">
                    <button
                        onClick={onReset}
                        className="w-full px-4 py-3 text-[hsl(196,80%,45%)] border border-[hsl(196,80%,45%)] rounded-lg font-medium hover:bg-[hsl(196,80%,45%)]/10 transition-all duration-300"
                        data-oid="s1ur19e"
                    >
                        Reset All Filters
                    </button>
                </div>

                {/* Quick Filters */}
                <div className="pt-4 border-t border-gray-200" data-oid="0hydnzo">
                    <h3 className="text-sm font-medium text-gray-700 mb-3" data-oid="oqf2i1s">
                        Quick Filters
                    </h3>
                    <div className="space-y-2" data-oid="y7gpp2h">
                        {isInternshipPage ? (
                            <>
                                <button
                                    onClick={() =>
                                        onFilterChange({
                                            ...filters,
                                            isPaid: 'paid',
                                            duration: '3 months',
                                        })
                                    }
                                    className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[hsl(196,80%,45%)] hover:bg-blue-50 rounded-md transition-colors duration-200"
                                    data-oid="q6yw7gm"
                                >
                                    💰 Paid 3-month Internships
                                </button>
                                <button
                                    onClick={() =>
                                        onFilterChange({ ...filters, location: 'Remote' })
                                    }
                                    className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[hsl(196,80%,45%)] hover:bg-blue-50 rounded-md transition-colors duration-200"
                                    data-oid="b3so0e-"
                                >
                                    🏠 Remote Internships
                                </button>
                                <button
                                    onClick={() =>
                                        onFilterChange({ ...filters, stipendRange: '25-35' })
                                    }
                                    className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[hsl(196,80%,45%)] hover:bg-blue-50 rounded-md transition-colors duration-200"
                                    data-oid="8_-je7m"
                                >
                                    💸 High Stipend (₹25-35k)
                                </button>
                                <button
                                    onClick={() =>
                                        onFilterChange({ ...filters, companyType: 'Startup' })
                                    }
                                    className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[hsl(196,80%,45%)] hover:bg-blue-50 rounded-md transition-colors duration-200"
                                    data-oid="_hzrols"
                                >
                                    🚀 Startup Internships
                                </button>
                                <button
                                    onClick={() =>
                                        onFilterChange({ ...filters, duration: '6 months' })
                                    }
                                    className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[hsl(196,80%,45%)] hover:bg-blue-50 rounded-md transition-colors duration-200"
                                    data-oid="9fjca6t"
                                >
                                    📅 Long-term (6 months)
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    onClick={() =>
                                        onFilterChange({
                                            ...filters,
                                            jobType: 'Full-time',
                                            experienceLevel: '0-2 years',
                                        })
                                    }
                                    className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[hsl(196,80%,45%)] hover:bg-blue-50 rounded-md transition-colors duration-200"
                                    data-oid="z-7.uzp"
                                >
                                    🎯 Fresher Full-time Jobs
                                </button>
                                <button
                                    onClick={() =>
                                        onFilterChange({ ...filters, location: 'Remote' })
                                    }
                                    className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[hsl(196,80%,45%)] hover:bg-blue-50 rounded-md transition-colors duration-200"
                                    data-oid="nt0z6lb"
                                >
                                    🏠 Remote Jobs
                                </button>
                                <button
                                    onClick={() =>
                                        onFilterChange({ ...filters, salaryRange: '10-20' })
                                    }
                                    className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[hsl(196,80%,45%)] hover:bg-blue-50 rounded-md transition-colors duration-200"
                                    data-oid="d3k_fwp"
                                >
                                    💰 High Salary (10-20 LPA)
                                </button>
                                <button
                                    onClick={() =>
                                        onFilterChange({ ...filters, companyType: 'Startup' })
                                    }
                                    className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[hsl(196,80%,45%)] hover:bg-blue-50 rounded-md transition-colors duration-200"
                                    data-oid="ol2wxgq"
                                >
                                    🚀 Startup Jobs
                                </button>
                                <button
                                    onClick={() =>
                                        onFilterChange({ ...filters, jobType: 'Internship' })
                                    }
                                    className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[hsl(196,80%,45%)] hover:bg-blue-50 rounded-md transition-colors duration-200"
                                    data-oid=".jqm.bb"
                                >
                                    📚 Internships
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
