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
            data-oid="qvqxokg"
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-6" data-oid="phuqi_v">
                <h2
                    className="text-xl font-bold text-gray-800 flex items-center"
                    data-oid="3c3z-ub"
                >
                    <svg
                        className="h-5 w-5 mr-2 text-[hsl(196,80%,45%)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        data-oid="q3uy--p"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                            data-oid="upvmx_c"
                        />
                    </svg>
                    {isInternshipPage ? 'Filter Internships' : 'Filter Jobs'}
                </h2>
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="lg:hidden p-1 text-gray-500 hover:text-gray-700"
                    data-oid="_urkh5z"
                >
                    <svg
                        className={`h-5 w-5 transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        data-oid="nwjvr_i"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                            data-oid="cyxjru7"
                        />
                    </svg>
                </button>
            </div>

            {/* Filters Form */}
            <div
                className={`space-y-6 ${isExpanded ? 'block' : 'hidden lg:block'}`}
                role="form"
                data-oid="3sg-537"
            >
                {/* Job Type Filter */}
                <div data-oid="6a2b5jo">
                    <label
                        htmlFor="jobType"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-oid="02j78cn"
                    >
                        Job Type
                    </label>
                    <select
                        id="jobType"
                        value={filters.jobType}
                        onChange={(e) => handleInputChange('jobType', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)] transition-colors duration-200 bg-white"
                        data-oid="qsqb.zi"
                    >
                        {jobTypes.map((type) => (
                            <option key={type.value} value={type.value} data-oid="0ykhp:0">
                                {type.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Employment Type Filter */}
                <div data-oid="k7_.r0w">
                    <label
                        htmlFor="employmentType"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-oid="6kc7tu2"
                    >
                        Employment Type
                    </label>
                    <select
                        id="employmentType"
                        value={filters.employmentType}
                        onChange={(e) => handleInputChange('employmentType', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)] transition-colors duration-200 bg-white"
                        data-oid="ic05ie2"
                    >
                        {employmentTypes.map((type) => (
                            <option key={type.value} value={type.value} data-oid="dr-de74">
                                {type.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Experience Level Filter (only for jobs) */}
                {!isInternshipPage && (
                    <div data-oid="f0979s4">
                        <label
                            htmlFor="experienceLevel"
                            className="block text-sm font-medium text-gray-700 mb-2"
                            data-oid="5-2j8v5"
                        >
                            Experience Level
                        </label>
                        <select
                            id="experienceLevel"
                            value={filters.experienceLevel}
                            onChange={(e) => handleInputChange('experienceLevel', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)] transition-colors duration-200 bg-white"
                            data-oid="xsabd1-"
                        >
                            {experienceLevels.map((level) => (
                                <option key={level.value} value={level.value} data-oid="hhgpxm5">
                                    {level.label}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {/* Duration Filter (only for internships) */}
                {isInternshipPage && (
                    <div data-oid="qo_jch_">
                        <label
                            htmlFor="duration"
                            className="block text-sm font-medium text-gray-700 mb-2"
                            data-oid="ht164fx"
                        >
                            Duration
                        </label>
                        <select
                            id="duration"
                            value={filters.duration || ''}
                            onChange={(e) => handleInputChange('duration', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)] transition-colors duration-200 bg-white"
                            data-oid="jq96dpb"
                        >
                            <option value="" data-oid=".:e92bt">
                                All Durations
                            </option>
                            <option value="1 month" data-oid="zpctbr5">
                                1 month
                            </option>
                            <option value="2 months" data-oid="gycm-e:">
                                2 months
                            </option>
                            <option value="3 months" data-oid="wjlfs5q">
                                3 months
                            </option>
                            <option value="4 months" data-oid="ntvmcbv">
                                4 months
                            </option>
                            <option value="5 months" data-oid="gvn:o0.">
                                5 months
                            </option>
                            <option value="6 months" data-oid="yav3hj3">
                                6 months
                            </option>
                        </select>
                    </div>
                )}

                {/* Salary/Stipend Range Filter */}
                <div data-oid="vsaeoul">
                    <label
                        className="block text-sm font-medium text-gray-700 mb-3"
                        data-oid="se8.x8n"
                    >
                        {isInternshipPage ? 'Stipend Range (per month)' : 'Salary Range (LPA)'}
                    </label>
                    <div className="space-y-2" data-oid="njmy.:o">
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
                                data-oid="5b_tkti"
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
                                    data-oid="10yhfw0"
                                />

                                <span className="text-sm text-gray-700" data-oid="3u7xeo6">
                                    {range.label}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Paid/Unpaid Filter (only for internships) */}
                {isInternshipPage && (
                    <div data-oid="6yg4atf">
                        <label
                            className="block text-sm font-medium text-gray-700 mb-3"
                            data-oid="ieypel4"
                        >
                            Internship Type
                        </label>
                        <div className="space-y-2" data-oid="nlx.37k">
                            {[
                                { value: '', label: 'All Internships' },
                                { value: 'paid', label: 'Paid Internships' },
                                { value: 'unpaid', label: 'Unpaid Internships' },
                            ].map((type) => (
                                <label
                                    key={type.value}
                                    className="flex items-center"
                                    data-oid="h8upd4:"
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
                                        data-oid="enu-:nk"
                                    />

                                    <span className="text-sm text-gray-700" data-oid="e-1pblh">
                                        {type.label}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>
                )}

                {/* Company Type Filter */}
                <div data-oid="vjulzwj">
                    <label
                        className="block text-sm font-medium text-gray-700 mb-3"
                        data-oid="ewqo220"
                    >
                        Company Type
                    </label>
                    <div className="space-y-2" data-oid="uxbaiht">
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
                                data-oid="wer9tso"
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
                                    data-oid="ggwm61m"
                                />

                                <span className="text-sm text-gray-700" data-oid="mom4beu">
                                    {type.label}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Skills Filter */}
                <div data-oid=":18w2lu">
                    <label
                        htmlFor="skills"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-oid="mbjr7x4"
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
                        data-oid="cqmplsk"
                    />

                    <p className="mt-1 text-xs text-gray-500" data-oid="ft-1b6y">
                        Separate multiple skills with commas
                    </p>
                </div>

                {/* Location Filter */}
                <div data-oid="g2z7kw0">
                    <label
                        htmlFor="location"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-oid=":5rw:nj"
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
                        data-oid="b6q35f2"
                    />
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-6 border-t border-gray-200" data-oid="mfge7c5">
                    <button
                        onClick={onReset}
                        className="w-full px-4 py-3 text-[hsl(196,80%,45%)] border border-[hsl(196,80%,45%)] rounded-lg font-medium hover:bg-[hsl(196,80%,45%)]/10 transition-all duration-300"
                        data-oid=":p_gmve"
                    >
                        Reset All Filters
                    </button>
                </div>

                {/* Quick Filters */}
                <div className="pt-4 border-t border-gray-200" data-oid="u:zrh6v">
                    <h3 className="text-sm font-medium text-gray-700 mb-3" data-oid="u:t6y.0">
                        Quick Filters
                    </h3>
                    <div className="space-y-2" data-oid="9pl52t_">
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
                                    data-oid=":_r:d1z"
                                >
                                    💰 Paid 3-month Internships
                                </button>
                                <button
                                    onClick={() =>
                                        onFilterChange({ ...filters, location: 'Remote' })
                                    }
                                    className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[hsl(196,80%,45%)] hover:bg-blue-50 rounded-md transition-colors duration-200"
                                    data-oid="fph6gfd"
                                >
                                    🏠 Remote Internships
                                </button>
                                <button
                                    onClick={() =>
                                        onFilterChange({ ...filters, stipendRange: '25-35' })
                                    }
                                    className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[hsl(196,80%,45%)] hover:bg-blue-50 rounded-md transition-colors duration-200"
                                    data-oid="4ve_xft"
                                >
                                    💸 High Stipend (₹25-35k)
                                </button>
                                <button
                                    onClick={() =>
                                        onFilterChange({ ...filters, companyType: 'Startup' })
                                    }
                                    className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[hsl(196,80%,45%)] hover:bg-blue-50 rounded-md transition-colors duration-200"
                                    data-oid="0hl5sgr"
                                >
                                    🚀 Startup Internships
                                </button>
                                <button
                                    onClick={() =>
                                        onFilterChange({ ...filters, duration: '6 months' })
                                    }
                                    className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[hsl(196,80%,45%)] hover:bg-blue-50 rounded-md transition-colors duration-200"
                                    data-oid="0wpmy0w"
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
                                    data-oid="g-qx3s_"
                                >
                                    🎯 Fresher Full-time Jobs
                                </button>
                                <button
                                    onClick={() =>
                                        onFilterChange({ ...filters, location: 'Remote' })
                                    }
                                    className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[hsl(196,80%,45%)] hover:bg-blue-50 rounded-md transition-colors duration-200"
                                    data-oid="sc8h8eu"
                                >
                                    🏠 Remote Jobs
                                </button>
                                <button
                                    onClick={() =>
                                        onFilterChange({ ...filters, salaryRange: '10-20' })
                                    }
                                    className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[hsl(196,80%,45%)] hover:bg-blue-50 rounded-md transition-colors duration-200"
                                    data-oid=".sql:tv"
                                >
                                    💰 High Salary (10-20 LPA)
                                </button>
                                <button
                                    onClick={() =>
                                        onFilterChange({ ...filters, companyType: 'Startup' })
                                    }
                                    className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[hsl(196,80%,45%)] hover:bg-blue-50 rounded-md transition-colors duration-200"
                                    data-oid="gegjq1c"
                                >
                                    🚀 Startup Jobs
                                </button>
                                <button
                                    onClick={() =>
                                        onFilterChange({ ...filters, jobType: 'Internship' })
                                    }
                                    className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[hsl(196,80%,45%)] hover:bg-blue-50 rounded-md transition-colors duration-200"
                                    data-oid="dkf14rv"
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
