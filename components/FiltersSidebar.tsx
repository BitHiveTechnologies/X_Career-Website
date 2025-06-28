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
            data-oid="-zhwh-j"
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-6" data-oid="nqkfimi">
                <h2
                    className="text-xl font-bold text-gray-800 flex items-center"
                    data-oid="rng1n8f"
                >
                    <svg
                        className="h-5 w-5 mr-2 text-[hsl(196,80%,45%)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        data-oid="pm-b-vg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                            data-oid="em56heg"
                        />
                    </svg>
                    {isInternshipPage ? 'Filter Internships' : 'Filter Jobs'}
                </h2>
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="lg:hidden p-1 text-gray-500 hover:text-gray-700"
                    data-oid="l3cc7oj"
                >
                    <svg
                        className={`h-5 w-5 transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        data-oid=":4f._h:"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                            data-oid="gpp.o7m"
                        />
                    </svg>
                </button>
            </div>

            {/* Filters Form */}
            <div
                className={`space-y-6 ${isExpanded ? 'block' : 'hidden lg:block'}`}
                role="form"
                data-oid="vd:kr1."
            >
                {/* Job Type Filter */}
                <div data-oid="nflh.1b">
                    <label
                        htmlFor="jobType"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-oid="2qgi-su"
                    >
                        Job Type
                    </label>
                    <select
                        id="jobType"
                        value={filters.jobType}
                        onChange={(e) => handleInputChange('jobType', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)] transition-colors duration-200 bg-white"
                        data-oid="xrgzm3u"
                    >
                        {jobTypes.map((type) => (
                            <option key={type.value} value={type.value} data-oid="-j.fofj">
                                {type.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Employment Type Filter */}
                <div data-oid="2u3g7c9">
                    <label
                        htmlFor="employmentType"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-oid="hp57lt."
                    >
                        Employment Type
                    </label>
                    <select
                        id="employmentType"
                        value={filters.employmentType}
                        onChange={(e) => handleInputChange('employmentType', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)] transition-colors duration-200 bg-white"
                        data-oid="wh3e2wc"
                    >
                        {employmentTypes.map((type) => (
                            <option key={type.value} value={type.value} data-oid="bd5:1hg">
                                {type.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Experience Level Filter (only for jobs) */}
                {!isInternshipPage && (
                    <div data-oid="oqt7pwu">
                        <label
                            htmlFor="experienceLevel"
                            className="block text-sm font-medium text-gray-700 mb-2"
                            data-oid="cf7u:va"
                        >
                            Experience Level
                        </label>
                        <select
                            id="experienceLevel"
                            value={filters.experienceLevel}
                            onChange={(e) => handleInputChange('experienceLevel', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)] transition-colors duration-200 bg-white"
                            data-oid="6j2ol4o"
                        >
                            {experienceLevels.map((level) => (
                                <option key={level.value} value={level.value} data-oid=":brw456">
                                    {level.label}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {/* Duration Filter (only for internships) */}
                {isInternshipPage && (
                    <div data-oid="duration-filter">
                        <label
                            htmlFor="duration"
                            className="block text-sm font-medium text-gray-700 mb-2"
                            data-oid="maazwde"
                        >
                            Duration
                        </label>
                        <select
                            id="duration"
                            value={filters.duration || ''}
                            onChange={(e) => handleInputChange('duration', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)] transition-colors duration-200 bg-white"
                            data-oid="-.oc84p"
                        >
                            <option value="" data-oid="emcuqb.">
                                All Durations
                            </option>
                            <option value="1 month" data-oid="n._axax">
                                1 month
                            </option>
                            <option value="2 months" data-oid="syvevt1">
                                2 months
                            </option>
                            <option value="3 months" data-oid="ci57jbx">
                                3 months
                            </option>
                            <option value="4 months" data-oid="xsr1bd9">
                                4 months
                            </option>
                            <option value="5 months" data-oid="c-8m9ps">
                                5 months
                            </option>
                            <option value="6 months" data-oid="49j9zyb">
                                6 months
                            </option>
                        </select>
                    </div>
                )}

                {/* Salary/Stipend Range Filter */}
                <div data-oid="8e8k5o6">
                    <label
                        className="block text-sm font-medium text-gray-700 mb-3"
                        data-oid="z_zeji2"
                    >
                        {isInternshipPage ? 'Stipend Range (per month)' : 'Salary Range (LPA)'}
                    </label>
                    <div className="space-y-2" data-oid="ro59-.h">
                        {isInternshipPage
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
                              ].map((range) => (
                                  <label
                                      key={range.value}
                                      className="flex items-center"
                                      data-oid="ecgz007"
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
                                          data-oid="a1zm251"
                                      />

                                      <span className="text-sm text-gray-700" data-oid="jnrsrnj">
                                          {range.label}
                                      </span>
                                  </label>
                              ))}
                    </div>
                </div>

                {/* Paid/Unpaid Filter (only for internships) */}
                {isInternshipPage && (
                    <div data-oid="paid-filter">
                        <label
                            className="block text-sm font-medium text-gray-700 mb-3"
                            data-oid="shyx232"
                        >
                            Internship Type
                        </label>
                        <div className="space-y-2" data-oid="aehkfwj">
                            {[
                                { value: '', label: 'All Internships' },
                                { value: 'paid', label: 'Paid Internships' },
                                { value: 'unpaid', label: 'Unpaid Internships' },
                            ].map((type) => (
                                <label
                                    key={type.value}
                                    className="flex items-center"
                                    data-oid="fa8y2.m"
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
                                        data-oid="5zjg6at"
                                    />

                                    <span className="text-sm text-gray-700" data-oid="f2p.l7x">
                                        {type.label}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>
                )}

                {/* Company Type Filter */}
                <div data-oid="lbwsiu8">
                    <label
                        className="block text-sm font-medium text-gray-700 mb-3"
                        data-oid="6034_3v"
                    >
                        Company Type
                    </label>
                    <div className="space-y-2" data-oid="ut13t8.">
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
                                data-oid="r3ye66e"
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
                                    data-oid="nt:s-x0"
                                />

                                <span className="text-sm text-gray-700" data-oid="mmbff8w">
                                    {type.label}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Skills Filter */}
                <div data-oid="fy_5kwz">
                    <label
                        htmlFor="skills"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-oid="52iegkb"
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
                        data-oid="4f6vcyz"
                    />

                    <p className="mt-1 text-xs text-gray-500" data-oid="gj1gtg3">
                        Separate multiple skills with commas
                    </p>
                </div>

                {/* Location Filter */}
                <div data-oid="lpme0ez">
                    <label
                        htmlFor="location"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-oid="-q5zogi"
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
                        data-oid="ek:pxpr"
                    />
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-6 border-t border-gray-200" data-oid="3.cn-s2">
                    <button
                        onClick={onReset}
                        className="w-full px-4 py-3 text-[hsl(196,80%,45%)] border border-[hsl(196,80%,45%)] rounded-lg font-medium hover:bg-[hsl(196,80%,45%)]/10 transition-all duration-300"
                        data-oid="nadv2wx"
                    >
                        Reset All Filters
                    </button>
                </div>

                {/* Quick Filters */}
                <div className="pt-4 border-t border-gray-200" data-oid="b4qmp0g">
                    <h3 className="text-sm font-medium text-gray-700 mb-3" data-oid="jvd9naj">
                        Quick Filters
                    </h3>
                    <div className="space-y-2" data-oid="4_zh6sq">
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
                                    data-oid="hg2u-p7"
                                >
                                    💰 Paid 3-month Internships
                                </button>
                                <button
                                    onClick={() =>
                                        onFilterChange({ ...filters, location: 'Remote' })
                                    }
                                    className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[hsl(196,80%,45%)] hover:bg-blue-50 rounded-md transition-colors duration-200"
                                    data-oid=".mz4:z9"
                                >
                                    🏠 Remote Internships
                                </button>
                                <button
                                    onClick={() =>
                                        onFilterChange({ ...filters, stipendRange: '25-35' })
                                    }
                                    className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[hsl(196,80%,45%)] hover:bg-blue-50 rounded-md transition-colors duration-200"
                                    data-oid="svq.553"
                                >
                                    💸 High Stipend (₹25-35k)
                                </button>
                                <button
                                    onClick={() =>
                                        onFilterChange({ ...filters, companyType: 'Startup' })
                                    }
                                    className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[hsl(196,80%,45%)] hover:bg-blue-50 rounded-md transition-colors duration-200"
                                    data-oid="3ptlq2m"
                                >
                                    🚀 Startup Internships
                                </button>
                                <button
                                    onClick={() =>
                                        onFilterChange({ ...filters, duration: '6 months' })
                                    }
                                    className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[hsl(196,80%,45%)] hover:bg-blue-50 rounded-md transition-colors duration-200"
                                    data-oid="glb29wd"
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
                                    data-oid="wxjk7y1"
                                >
                                    🎯 Fresher Full-time Jobs
                                </button>
                                <button
                                    onClick={() =>
                                        onFilterChange({ ...filters, location: 'Remote' })
                                    }
                                    className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[hsl(196,80%,45%)] hover:bg-blue-50 rounded-md transition-colors duration-200"
                                    data-oid="rcxafqj"
                                >
                                    🏠 Remote Jobs
                                </button>
                                <button
                                    onClick={() =>
                                        onFilterChange({ ...filters, salaryRange: '10-20' })
                                    }
                                    className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[hsl(196,80%,45%)] hover:bg-blue-50 rounded-md transition-colors duration-200"
                                    data-oid="9iyse25"
                                >
                                    💰 High Salary (10-20 LPA)
                                </button>
                                <button
                                    onClick={() =>
                                        onFilterChange({ ...filters, companyType: 'Startup' })
                                    }
                                    className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[hsl(196,80%,45%)] hover:bg-blue-50 rounded-md transition-colors duration-200"
                                    data-oid="mmmbnm4"
                                >
                                    🚀 Startup Jobs
                                </button>
                                <button
                                    onClick={() =>
                                        onFilterChange({ ...filters, jobType: 'Internship' })
                                    }
                                    className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[hsl(196,80%,45%)] hover:bg-blue-50 rounded-md transition-colors duration-200"
                                    data-oid="veh4vev"
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
