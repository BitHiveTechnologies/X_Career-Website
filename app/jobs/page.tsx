'use client';

import MainNavbar from '@/components/mainNavbar';
import { useState, useEffect } from 'react';
import JobCard from '@/components/JobCard';
import FiltersSidebar from '@/components/FiltersSidebar';
import CategoryMenu from '@/components/CategoryMenu';

// TypeScript Interfaces
export interface Job {
    id: number;
    title: string;
    company: string;
    location: string;
    experienceRequired: string;
    jobType: string;
    employmentType: string;
    skills: string[];
    postedDate: string;
    salary?: string;
    description: string;
    isRemote: boolean;
    isFeatured: boolean;
    companyLogo?: string;
}

export interface FilterOptions {
    jobType: string;
    employmentType: string;
    skills: string;
    location: string;
    experienceLevel: string;
}

export interface Category {
    id: number;
    name: string;
    count: number;
    slug: string;
}

// Mock Data
const mockJobs: Job[] = [
    {
        id: 1,
        title: 'Frontend Developer',
        company: 'Microsoft',
        location: 'Bangalore, India',
        experienceRequired: '0-2 years',
        jobType: 'Full-time',
        employmentType: 'Permanent',
        skills: ['React', 'TypeScript', 'JavaScript', 'CSS'],
        postedDate: '2024-01-15',
        salary: '₹5-8 LPA',
        description: 'Join our team to build amazing user interfaces...',
        isRemote: false,
        isFeatured: true,
        companyLogo: '/logos/microsoft.png',
    },
    {
        id: 2,
        title: 'Backend Engineer',
        company: 'Amazon',
        location: 'Hyderabad, India',
        experienceRequired: '0-1 years',
        jobType: 'Full-time',
        employmentType: 'Permanent',
        skills: ['Java', 'Spring Boot', 'AWS', 'MySQL'],
        postedDate: '2024-01-14',
        salary: '₹8-12 LPA',
        description: 'Build scalable backend systems...',
        isRemote: true,
        isFeatured: true,
        companyLogo: '/logos/amazon.png',
    },
    {
        id: 3,
        title: 'Full Stack Developer',
        company: 'Google',
        location: 'Mumbai, India',
        experienceRequired: '1-3 years',
        jobType: 'Full-time',
        employmentType: 'Permanent',
        skills: ['React', 'Node.js', 'MongoDB', 'Express'],
        postedDate: '2024-01-13',
        salary: '₹10-15 LPA',
        description: 'Work on cutting-edge web applications...',
        isRemote: false,
        isFeatured: false,
        companyLogo: '/logos/google.png',
    },
    {
        id: 4,
        title: 'Data Scientist',
        company: 'Flipkart',
        location: 'Bangalore, India',
        experienceRequired: '0-2 years',
        jobType: 'Full-time',
        employmentType: 'Permanent',
        skills: ['Python', 'Machine Learning', 'SQL', 'Pandas'],
        postedDate: '2024-01-12',
        salary: '₹6-10 LPA',
        description: 'Analyze data to drive business decisions...',
        isRemote: true,
        isFeatured: false,
        companyLogo: '/logos/flipkart.png',
    },
    {
        id: 5,
        title: 'UI/UX Designer',
        company: 'Adobe',
        location: 'Noida, India',
        experienceRequired: '0-1 years',
        jobType: 'Full-time',
        employmentType: 'Contract',
        skills: ['Figma', 'Adobe XD', 'Photoshop', 'User Research'],
        postedDate: '2024-01-11',
        salary: '₹4-7 LPA',
        description: 'Design beautiful and intuitive user experiences...',
        isRemote: false,
        isFeatured: false,
        companyLogo: '/logos/adobe.png',
    },
    {
        id: 6,
        title: 'DevOps Engineer',
        company: 'Netflix',
        location: 'Remote',
        experienceRequired: '1-2 years',
        jobType: 'Full-time',
        employmentType: 'Permanent',
        skills: ['Docker', 'Kubernetes', 'AWS', 'Jenkins'],
        postedDate: '2024-01-10',
        salary: '₹8-14 LPA',
        description: 'Manage and optimize our cloud infrastructure...',
        isRemote: true,
        isFeatured: true,
        companyLogo: '/logos/netflix.png',
    },
];

const mockCategories: Category[] = [
    { id: 1, name: 'All Jobs', count: 12045, slug: 'all' },
    { id: 2, name: 'Software Development', count: 4521, slug: 'software-development' },
    { id: 3, name: 'Data Science', count: 2134, slug: 'data-science' },
    { id: 4, name: 'UI/UX Design', count: 1876, slug: 'ui-ux-design' },
    { id: 5, name: 'DevOps', count: 987, slug: 'devops' },
    { id: 6, name: 'Marketing', count: 1245, slug: 'marketing' },
    { id: 7, name: 'Finance', count: 876, slug: 'finance' },
    { id: 8, name: 'Sales', count: 654, slug: 'sales' },
];

export default function JobsPage() {
    const [jobs, setJobs] = useState<Job[]>(mockJobs);
    const [filteredJobs, setFilteredJobs] = useState<Job[]>(mockJobs);
    const [categories] = useState<Category[]>(mockCategories);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [filters, setFilters] = useState<FilterOptions>({
        jobType: '',
        employmentType: '',
        skills: '',
        location: '',
        experienceLevel: '',
    });
    const [isLoading, setIsLoading] = useState(false);

    // Filter jobs based on selected filters
    useEffect(() => {
        let filtered = jobs;

        // Filter by category
        if (selectedCategory !== 'all') {
            // This would be more sophisticated in a real app
            filtered = filtered.filter((job) => {
                const categoryMap: { [key: string]: string[] } = {
                    'software-development': [
                        'Frontend Developer',
                        'Backend Engineer',
                        'Full Stack Developer',
                    ],

                    'data-science': ['Data Scientist'],
                    'ui-ux-design': ['UI/UX Designer'],
                    devops: ['DevOps Engineer'],
                };
                return categoryMap[selectedCategory]?.includes(job.title);
            });
        }

        // Filter by job type
        if (filters.jobType) {
            filtered = filtered.filter((job) => job.jobType === filters.jobType);
        }

        // Filter by employment type
        if (filters.employmentType) {
            filtered = filtered.filter((job) => job.employmentType === filters.employmentType);
        }

        // Filter by skills
        if (filters.skills) {
            const skillsArray = filters.skills
                .toLowerCase()
                .split(',')
                .map((s) => s.trim());
            filtered = filtered.filter((job) =>
                skillsArray.some((skill) =>
                    job.skills.some((jobSkill) => jobSkill.toLowerCase().includes(skill)),
                ),
            );
        }

        // Filter by location
        if (filters.location) {
            filtered = filtered.filter((job) =>
                job.location.toLowerCase().includes(filters.location.toLowerCase()),
            );
        }

        setFilteredJobs(filtered);
    }, [jobs, selectedCategory, filters]);

    const handleFilterChange = (newFilters: FilterOptions) => {
        setFilters(newFilters);
    };

    const handleCategoryChange = (categorySlug: string) => {
        setSelectedCategory(categorySlug);
    };

    const resetFilters = () => {
        setFilters({
            jobType: '',
            employmentType: '',
            skills: '',
            location: '',
            experienceLevel: '',
        });
        setSelectedCategory('all');
    };

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="nain7s9">
            {/* Navbar */}
            <MainNavbar data-oid="oujxg-_" />

            {/* Hero Section */}
            <section
                className="bg-gradient-to-r from-[hsl(196,80%,45%)] via-[hsl(210,70%,45%)] to-[hsl(175,70%,41%)] text-white relative overflow-hidden py-16"
                data-oid="tku8160"
            >
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden" data-oid="j5hihig">
                    <div
                        className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-30 rounded-full blur-3xl animate-blob"
                        data-oid="9s.cvxl"
                    ></div>
                    <div
                        className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-40 rounded-full blur-3xl animate-blob animation-delay-2000"
                        data-oid="4o5oudr"
                    ></div>
                    <div
                        className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-40 rounded-full blur-3xl animate-blob animation-delay-4000"
                        data-oid="-r3k1wn"
                    ></div>
                </div>

                {/* Frosted glass overlay */}
                <div
                    className="absolute inset-0 bg-white/5 backdrop-blur-[1px]"
                    data-oid=".geadnm"
                ></div>

                <div
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
                    data-oid="djf39ap"
                >
                    <h1
                        className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-md"
                        data-oid="ake88yh"
                    >
                        JOBS
                    </h1>
                    <p className="text-xl md:text-2xl mb-2 text-blue-100" data-oid="bq0rga5">
                        Empower Your Aspirations
                    </p>
                    <p className="text-lg text-blue-200 max-w-2xl mx-auto" data-oid="zsw20h8">
                        Discover thousands of opportunities tailored for tech freshers and
                        experienced professionals
                    </p>
                </div>
            </section>

            {/* Category Menu */}
            <section
                className="bg-gradient-to-b from-[hsl(210,50%,98%)] to-[hsl(196,60%,95%)] py-8"
                data-oid="6aa:l.s"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="6sdaki-">
                    <CategoryMenu
                        categories={categories}
                        selectedCategory={selectedCategory}
                        onCategoryChange={handleCategoryChange}
                        data-oid="zk8dh6r"
                    />

                    {/* Jobs Count Badge */}
                    <div className="text-center mt-6" data-oid="h8a5lyr">
                        <div
                            className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-md border border-[hsl(210,30%,95%)]"
                            data-oid="c.zcfij"
                        >
                            <svg
                                className="h-5 w-5 text-[hsl(196,80%,45%)] mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="h.0_jaq"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
                                    data-oid="d0zrl-1"
                                />
                            </svg>
                            <span className="text-lg font-bold text-gray-800" data-oid="5_a7yz.">
                                {filteredJobs.length.toLocaleString()}+ JOBS FOUND
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section
                className="py-12 bg-gradient-to-b from-[hsl(196,60%,95%)] to-white"
                data-oid="hkn_wxa"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="nbxw6.q">
                    <div className="grid lg:grid-cols-4 gap-8" data-oid="zcyjmxv">
                        {/* Filters Sidebar */}
                        <div className="lg:col-span-1" data-oid="v-c1n7s">
                            <FiltersSidebar
                                filters={filters}
                                onFilterChange={handleFilterChange}
                                onReset={resetFilters}
                                data-oid="bfbo2r0"
                            />
                        </div>

                        {/* Job Listings */}
                        <div className="lg:col-span-3" data-oid="bw5roa9">
                            <div className="space-y-6" role="list" data-oid="pve6zq6">
                                {isLoading ? (
                                    <div className="text-center py-12" data-oid="d968i38">
                                        <div
                                            className="animate-spin rounded-full h-12 w-12 border-b-2 border-[hsl(196,80%,45%)] mx-auto"
                                            data-oid="an0qohs"
                                        ></div>
                                        <p className="mt-4 text-gray-600" data-oid="xfoda3v">
                                            Loading jobs...
                                        </p>
                                    </div>
                                ) : filteredJobs.length > 0 ? (
                                    filteredJobs.map((job) => (
                                        <JobCard key={job.id} job={job} data-oid="8xcc37q" />
                                    ))
                                ) : (
                                    <div className="text-center py-12" data-oid="_eodaxy">
                                        <div
                                            className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4"
                                            data-oid="p3v7.9_"
                                        >
                                            <svg
                                                className="h-12 w-12 text-gray-400"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="n_cviv9"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                    data-oid="2ad:jaz"
                                                />
                                            </svg>
                                        </div>
                                        <h3
                                            className="text-xl font-medium text-gray-900 mb-2"
                                            data-oid="87_f0yp"
                                        >
                                            No jobs found
                                        </h3>
                                        <p className="text-gray-600 mb-4" data-oid="yf3o.4z">
                                            Try adjusting your filters or search criteria
                                        </p>
                                        <button
                                            onClick={resetFilters}
                                            className="px-4 py-2 bg-[hsl(196,80%,45%)] text-white rounded-md hover:bg-[hsl(196,80%,40%)] transition-colors duration-200"
                                            data-oid="cnr4w2:"
                                        >
                                            Reset Filters
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
