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
    isUrgent?: boolean;
    applicantCount?: number;
    companyLogo?: string;
    companySize?: string;
    industry?: string;
    benefits?: string[];
    companyType?: 'Startup' | 'MNC' | 'Product' | 'Service';
}

export interface FilterOptions {
    jobType: string;
    employmentType: string;
    skills: string;
    location: string;
    experienceLevel: string;
    salaryRange: string;
    companyType: string;
}

export interface Category {
    id: number;
    name: string;
    count: number;
    slug: string;
}

// Enhanced Mock Data with 12 diverse jobs from major Indian companies
const mockJobs: Job[] = [
    {
        id: 1,
        title: 'Frontend Developer',
        company: 'Swiggy',
        location: 'Bangalore, India',
        experienceRequired: '0-2 years',
        jobType: 'Full-time',
        employmentType: 'Permanent',
        skills: ['React', 'TypeScript', 'JavaScript', 'CSS', 'Redux'],
        postedDate: '2024-01-15',
        salary: '₹6-10 LPA',
        description:
            'Join our team to build amazing user interfaces for millions of food lovers...',
        isRemote: false,
        isFeatured: true,
        isUrgent: true,
        applicantCount: 234,
        companyLogo: '/logos/swiggy.png',
        companySize: '5000-10000',
        industry: 'Food Tech',
        benefits: ['Health Insurance', 'Free Meals', 'Flexible Hours', 'Stock Options'],
        companyType: 'Startup',
    },
    {
        id: 2,
        title: 'Backend Engineer',
        company: 'Zomato',
        location: 'Gurgaon, India',
        experienceRequired: '1-3 years',
        jobType: 'Full-time',
        employmentType: 'Permanent',
        skills: ['Java', 'Spring Boot', 'AWS', 'MySQL', 'Microservices'],
        postedDate: '2024-01-14',
        salary: '₹8-15 LPA',
        description: 'Build scalable backend systems for food delivery platform...',
        isRemote: true,
        isFeatured: true,
        isUrgent: false,
        applicantCount: 189,
        companyLogo: '/logos/zomato.png',
        companySize: '1000-5000',
        industry: 'Food Tech',
        benefits: ['Health Insurance', 'Work from Home', 'Learning Budget', 'Team Outings'],
        companyType: 'Startup',
    },
    {
        id: 3,
        title: 'Full Stack Developer',
        company: 'Paytm',
        location: 'Noida, India',
        experienceRequired: '2-4 years',
        jobType: 'Full-time',
        employmentType: 'Permanent',
        skills: ['React', 'Node.js', 'MongoDB', 'Express', 'Payment APIs'],
        postedDate: '2024-01-13',
        salary: '₹12-20 LPA',
        description: 'Work on cutting-edge fintech applications...',
        isRemote: false,
        isFeatured: false,
        isUrgent: true,
        applicantCount: 456,
        companyLogo: '/logos/paytm.png',
        companySize: '10000+',
        industry: 'Fintech',
        benefits: ['Health Insurance', 'Bonus', 'Cab Facility', 'Gym Membership'],
        companyType: 'MNC',
    },
    {
        id: 4,
        title: 'Data Scientist',
        company: 'Flipkart',
        location: 'Bangalore, India',
        experienceRequired: '1-3 years',
        jobType: 'Full-time',
        employmentType: 'Permanent',
        skills: ['Python', 'Machine Learning', 'SQL', 'Pandas', 'TensorFlow'],
        postedDate: '2024-01-12',
        salary: '₹10-18 LPA',
        description: 'Analyze data to drive business decisions for e-commerce platform...',
        isRemote: true,
        isFeatured: false,
        isUrgent: false,
        applicantCount: 312,
        companyLogo: '/logos/flipkart.png',
        companySize: '10000+',
        industry: 'E-commerce',
        benefits: ['Health Insurance', 'Stock Options', 'Learning Budget', 'Flexible Hours'],
        companyType: 'MNC',
    },
    {
        id: 5,
        title: 'UI/UX Designer',
        company: 'Ola',
        location: 'Bangalore, India',
        experienceRequired: '0-2 years',
        jobType: 'Full-time',
        employmentType: 'Contract',
        skills: ['Figma', 'Adobe XD', 'Photoshop', 'User Research', 'Prototyping'],
        postedDate: '2024-01-11',
        salary: '₹5-9 LPA',
        description: 'Design beautiful and intuitive user experiences for mobility platform...',
        isRemote: false,
        isFeatured: false,
        isUrgent: false,
        applicantCount: 167,
        companyLogo: '/logos/ola.png',
        companySize: '1000-5000',
        industry: 'Transportation',
        benefits: ['Health Insurance', 'Free Rides', 'Team Events', 'Learning Budget'],
        companyType: 'Startup',
    },
    {
        id: 6,
        title: 'DevOps Engineer',
        company: 'PhonePe',
        location: 'Bangalore, India',
        experienceRequired: '2-5 years',
        jobType: 'Full-time',
        employmentType: 'Permanent',
        skills: ['Docker', 'Kubernetes', 'AWS', 'Jenkins', 'Terraform'],
        postedDate: '2024-01-10',
        salary: '₹15-25 LPA',
        description: 'Manage and optimize cloud infrastructure for digital payments...',
        isRemote: true,
        isFeatured: true,
        isUrgent: true,
        applicantCount: 89,
        companyLogo: '/logos/phonepe.png',
        companySize: '1000-5000',
        industry: 'Fintech',
        benefits: ['Health Insurance', 'Stock Options', 'Work from Home', 'Bonus'],
        companyType: 'Product',
    },
    {
        id: 7,
        title: 'Mobile App Developer',
        company: 'Dream11',
        location: 'Mumbai, India',
        experienceRequired: '1-3 years',
        jobType: 'Full-time',
        employmentType: 'Permanent',
        skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase'],
        postedDate: '2024-01-09',
        salary: '₹8-14 LPA',
        description: 'Build engaging mobile experiences for fantasy sports platform...',
        isRemote: false,
        isFeatured: false,
        isUrgent: false,
        applicantCount: 278,
        companyLogo: '/logos/dream11.png',
        companySize: '500-1000',
        industry: 'Gaming',
        benefits: ['Health Insurance', 'Game Credits', 'Team Outings', 'Flexible Hours'],
        companyType: 'Startup',
    },
    {
        id: 8,
        title: 'Blockchain Developer',
        company: 'CoinDCX',
        location: 'Mumbai, India',
        experienceRequired: '2-4 years',
        jobType: 'Full-time',
        employmentType: 'Permanent',
        skills: ['Solidity', 'Web3.js', 'Ethereum', 'Smart Contracts', 'Node.js'],
        postedDate: '2024-01-08',
        salary: '₹18-30 LPA',
        description: 'Develop blockchain solutions for cryptocurrency exchange...',
        isRemote: true,
        isFeatured: true,
        isUrgent: false,
        applicantCount: 45,
        companyLogo: '/logos/coindcx.png',
        companySize: '100-500',
        industry: 'Cryptocurrency',
        benefits: ['Health Insurance', 'Crypto Bonus', 'Work from Home', 'Learning Budget'],
        companyType: 'Startup',
    },
    {
        id: 9,
        title: 'AI/ML Engineer',
        company: 'Hotstar',
        location: 'Bangalore, India',
        experienceRequired: '3-5 years',
        jobType: 'Full-time',
        employmentType: 'Permanent',
        skills: ['Python', 'TensorFlow', 'PyTorch', 'Computer Vision', 'NLP'],
        postedDate: '2024-01-07',
        salary: '₹20-35 LPA',
        description: 'Build AI-powered recommendation systems for streaming platform...',
        isRemote: false,
        isFeatured: true,
        isUrgent: true,
        applicantCount: 123,
        companyLogo: '/logos/hotstar.png',
        companySize: '1000-5000',
        industry: 'Entertainment',
        benefits: ['Health Insurance', 'Stock Options', 'Content Access', 'Learning Budget'],
        companyType: 'MNC',
    },
    {
        id: 10,
        title: 'Cybersecurity Analyst',
        company: 'Razorpay',
        location: 'Bangalore, India',
        experienceRequired: '1-3 years',
        jobType: 'Full-time',
        employmentType: 'Permanent',
        skills: ['Network Security', 'Penetration Testing', 'SIEM', 'Incident Response'],
        postedDate: '2024-01-06',
        salary: '₹12-20 LPA',
        description: 'Secure payment infrastructure and protect against cyber threats...',
        isRemote: true,
        isFeatured: false,
        isUrgent: false,
        applicantCount: 156,
        companyLogo: '/logos/razorpay.png',
        companySize: '1000-5000',
        industry: 'Fintech',
        benefits: ['Health Insurance', 'Stock Options', 'Work from Home', 'Security Training'],
        companyType: 'Product',
    },
    {
        id: 11,
        title: 'Product Manager',
        company: "Byju's",
        location: 'Bangalore, India',
        experienceRequired: '3-6 years',
        jobType: 'Full-time',
        employmentType: 'Permanent',
        skills: ['Product Strategy', 'Analytics', 'User Research', 'Agile', 'SQL'],
        postedDate: '2024-01-05',
        salary: '₹25-40 LPA',
        description: 'Lead product development for educational technology platform...',
        isRemote: false,
        isFeatured: false,
        isUrgent: false,
        applicantCount: 89,
        companyLogo: '/logos/byjus.png',
        companySize: '10000+',
        industry: 'EdTech',
        benefits: ['Health Insurance', 'Learning Budget', 'Flexible Hours', 'Stock Options'],
        companyType: 'Startup',
    },
    {
        id: 12,
        title: 'Cloud Architect',
        company: 'Freshworks',
        location: 'Chennai, India',
        experienceRequired: '5+ years',
        jobType: 'Full-time',
        employmentType: 'Permanent',
        skills: ['AWS', 'Azure', 'GCP', 'Microservices', 'Kubernetes', 'Terraform'],
        postedDate: '2024-01-04',
        salary: '₹30-50 LPA',
        description: 'Design and implement cloud solutions for SaaS platform...',
        isRemote: true,
        isFeatured: true,
        isUrgent: false,
        applicantCount: 67,
        companyLogo: '/logos/freshworks.png',
        companySize: '1000-5000',
        industry: 'SaaS',
        benefits: ['Health Insurance', 'Stock Options', 'Work from Home', 'Learning Budget'],
        companyType: 'Product',
    },
];

// Enhanced Categories with 12 comprehensive categories
const mockCategories: Category[] = [
    { id: 1, name: 'All Jobs', count: 15247, slug: 'all' },
    { id: 2, name: 'Software Development', count: 5821, slug: 'software-development' },
    { id: 3, name: 'Data Science & AI', count: 2456, slug: 'data-science' },
    { id: 4, name: 'UI/UX Design', count: 1876, slug: 'ui-ux-design' },
    { id: 5, name: 'DevOps & Cloud', count: 1234, slug: 'devops' },
    { id: 6, name: 'Product Management', count: 987, slug: 'product-management' },
    { id: 7, name: 'Mobile Development', count: 1543, slug: 'mobile-development' },
    { id: 8, name: 'Blockchain & Web3', count: 456, slug: 'blockchain' },
    { id: 9, name: 'Cybersecurity', count: 678, slug: 'cybersecurity' },
    { id: 10, name: 'Marketing & Growth', count: 1245, slug: 'marketing' },
    { id: 11, name: 'Finance & Fintech', count: 876, slug: 'finance' },
    { id: 12, name: 'Sales & Business', count: 654, slug: 'sales' },
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
        salaryRange: '',
        companyType: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchLocation, setSearchLocation] = useState('');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
    const [sortBy, setSortBy] = useState('relevance');
    const [visibleJobs, setVisibleJobs] = useState(6);

    // Enhanced filter logic with search and advanced filtering
    useEffect(() => {
        let filtered = jobs;

        // Filter by search query
        if (searchQuery) {
            filtered = filtered.filter(
                (job) =>
                    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    job.skills.some((skill) =>
                        skill.toLowerCase().includes(searchQuery.toLowerCase()),
                    ),
            );
        }

        // Filter by search location
        if (searchLocation) {
            filtered = filtered.filter((job) =>
                job.location.toLowerCase().includes(searchLocation.toLowerCase()),
            );
        }

        // Filter by category
        if (selectedCategory !== 'all') {
            const categoryMap: { [key: string]: string[] } = {
                'software-development': [
                    'Frontend Developer',
                    'Backend Engineer',
                    'Full Stack Developer',
                ],

                'data-science': ['Data Scientist', 'AI/ML Engineer'],
                'ui-ux-design': ['UI/UX Designer'],
                devops: ['DevOps Engineer', 'Cloud Architect'],
                'product-management': ['Product Manager'],
                'mobile-development': ['Mobile App Developer'],
                blockchain: ['Blockchain Developer'],
                cybersecurity: ['Cybersecurity Analyst'],
                marketing: ['Marketing Manager', 'Growth Hacker'],
                finance: ['Financial Analyst', 'Fintech Developer'],
                sales: ['Sales Manager', 'Business Development'],
            };
            filtered = filtered.filter(
                (job) =>
                    categoryMap[selectedCategory]?.includes(job.title) ||
                    job.industry?.toLowerCase().includes(selectedCategory.replace('-', ' ')),
            );
        }

        // Apply all other filters
        if (filters.jobType) {
            filtered = filtered.filter((job) => job.jobType === filters.jobType);
        }

        if (filters.employmentType) {
            filtered = filtered.filter((job) => job.employmentType === filters.employmentType);
        }

        if (filters.experienceLevel) {
            filtered = filtered.filter((job) => job.experienceRequired === filters.experienceLevel);
        }

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

        if (filters.location) {
            filtered = filtered.filter((job) =>
                job.location.toLowerCase().includes(filters.location.toLowerCase()),
            );
        }

        if (filters.salaryRange) {
            filtered = filtered.filter((job) => {
                if (!job.salary) return false;

                // Extract salary range from strings like "₹6-10 LPA" or "₹15-25 LPA"
                const salaryMatch = job.salary.match(/₹?(\d+)(?:-(\d+))?/);
                if (!salaryMatch) return false;

                const minSalary = parseInt(salaryMatch[1]);
                const maxSalary = salaryMatch[2] ? parseInt(salaryMatch[2]) : minSalary;

                switch (filters.salaryRange) {
                    case '0-5':
                        return maxSalary <= 5;
                    case '5-10':
                        return minSalary >= 5 && maxSalary <= 10;
                    case '10-20':
                        return minSalary >= 10 && maxSalary <= 20;
                    case '20+':
                        return minSalary >= 20;
                    default:
                        return true;
                }
            });
        }

        if (filters.companyType) {
            filtered = filtered.filter((job) => job.companyType === filters.companyType);
        }

        // Sort filtered results
        switch (sortBy) {
            case 'date':
                filtered.sort(
                    (a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime(),
                );
                break;
            case 'salary':
                filtered.sort((a, b) => {
                    const salaryA = a.salary ? parseInt(a.salary.replace(/[^\d]/g, '')) : 0;
                    const salaryB = b.salary ? parseInt(b.salary.replace(/[^\d]/g, '')) : 0;
                    return salaryB - salaryA;
                });
                break;
            case 'company':
                filtered.sort((a, b) => a.company.localeCompare(b.company));
                break;
            default: // relevance
                filtered.sort((a, b) => {
                    const scoreA =
                        (a.isFeatured ? 10 : 0) +
                        (a.isUrgent ? 5 : 0) +
                        (a.applicantCount || 0) / 100;
                    const scoreB =
                        (b.isFeatured ? 10 : 0) +
                        (b.isUrgent ? 5 : 0) +
                        (b.applicantCount || 0) / 100;
                    return scoreB - scoreA;
                });
        }

        setFilteredJobs(filtered);
    }, [jobs, selectedCategory, filters, searchQuery, searchLocation, sortBy]);

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
            salaryRange: '',
            companyType: '',
        });
        setSelectedCategory('all');
        setSearchQuery('');
        setSearchLocation('');
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Search is handled by useEffect
    };

    const loadMoreJobs = () => {
        setVisibleJobs((prev) => prev + 6);
    };

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="5duntyn">
            {/* Navbar */}
            <MainNavbar data-oid="u7g_5qe" />

            {/* Enhanced Hero Section with Search */}
            <section
                className="bg-gradient-to-r from-[hsl(196,80%,45%)] via-[hsl(210,70%,45%)] to-[hsl(175,70%,41%)] text-white relative overflow-hidden py-20"
                data-oid="xn:pdy3"
            >
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden" data-oid="jqdgoka">
                    <div
                        className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-30 rounded-full blur-3xl animate-blob"
                        data-oid="wa1qd7x"
                    ></div>
                    <div
                        className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-40 rounded-full blur-3xl animate-blob animation-delay-2000"
                        data-oid="9yt:72o"
                    ></div>
                    <div
                        className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-40 rounded-full blur-3xl animate-blob animation-delay-4000"
                        data-oid="5qekly8"
                    ></div>
                </div>

                {/* Frosted glass overlay */}
                <div
                    className="absolute inset-0 bg-white/5 backdrop-blur-[1px]"
                    data-oid="ui:snhr"
                ></div>

                <div
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
                    data-oid="21z7xcc"
                >
                    <h1
                        className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-md"
                        data-oid="86dk5mq"
                    >
                        Find Your Dream Job
                    </h1>
                    <p className="text-xl md:text-2xl mb-2 text-blue-100" data-oid=":hzoogk">
                        Empower Your Career Journey
                    </p>
                    <p className="text-lg text-blue-200 max-w-2xl mx-auto mb-8" data-oid="2:8nl.6">
                        Discover thousands of opportunities from top Indian companies
                    </p>

                    {/* Advanced Search Bar */}
                    <form onSubmit={handleSearch} className="max-w-4xl mx-auto" data-oid="n2ly2ls">
                        <div
                            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                            data-oid="v6jk053"
                        >
                            <div className="grid md:grid-cols-3 gap-4" data-oid="cei23ck">
                                {/* Job Title Search */}
                                <div className="relative" data-oid="n9xl90w">
                                    <div
                                        className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                                        data-oid="5-o6dvj"
                                    >
                                        <svg
                                            className="h-5 w-5 text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="w:l6vf5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                data-oid="ojzb6nq"
                                            />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Job title, skills, or company"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 bg-white/90 backdrop-blur-sm border border-white/30 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
                                        data-oid="_lg9-q6"
                                    />
                                </div>

                                {/* Location Search */}
                                <div className="relative" data-oid="ii.mdd.">
                                    <div
                                        className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                                        data-oid="ph.2.cg"
                                    >
                                        <svg
                                            className="h-5 w-5 text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="b012wr:"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                data-oid="2_09p8-"
                                            />

                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                data-oid="jqxn.xc"
                                            />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Location or Remote"
                                        value={searchLocation}
                                        onChange={(e) => setSearchLocation(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 bg-white/90 backdrop-blur-sm border border-white/30 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
                                        data-oid="borz9es"
                                    />
                                </div>

                                {/* Search Button */}
                                <button
                                    type="submit"
                                    className="px-8 py-3 bg-white text-[hsl(196,80%,45%)] rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
                                    data-oid="dp1ff4l"
                                >
                                    <svg
                                        className="h-5 w-5 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="bt1m3hy"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            data-oid="kwqwwtm"
                                        />
                                    </svg>
                                    Search Jobs
                                </button>
                            </div>

                            {/* Quick Search Tags */}
                            <div
                                className="flex flex-wrap gap-2 mt-4 justify-center"
                                data-oid="qpnd9kg"
                            >
                                {[
                                    'React Developer',
                                    'Data Scientist',
                                    'Product Manager',
                                    'DevOps Engineer',
                                    'UI/UX Designer',
                                ].map((tag) => (
                                    <button
                                        key={tag}
                                        onClick={() => setSearchQuery(tag)}
                                        className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full hover:bg-white/30 transition-all duration-300"
                                        data-oid="_tct1xs"
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </form>
                </div>
            </section>

            {/* Category Menu */}
            <section
                className="bg-gradient-to-b from-[hsl(210,50%,98%)] to-[hsl(196,60%,95%)] py-8"
                data-oid="_7kba9g"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="bhwm5zj">
                    <CategoryMenu
                        categories={categories}
                        selectedCategory={selectedCategory}
                        onCategoryChange={handleCategoryChange}
                        data-oid="7q3_jfb"
                    />

                    {/* Jobs Count Badge */}
                    <div className="text-center mt-6" data-oid="u9ceom:">
                        <div
                            className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-md border border-[hsl(210,30%,95%)]"
                            data-oid="_otppfo"
                        >
                            <svg
                                className="h-5 w-5 text-[hsl(196,80%,45%)] mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="cs5q8lq"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
                                    data-oid="p0591qr"
                                />
                            </svg>
                            <span className="text-lg font-bold text-gray-800" data-oid="4:bg4k0">
                                {filteredJobs.length.toLocaleString()}+ JOBS FOUND
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section
                className="py-12 bg-gradient-to-b from-[hsl(196,60%,95%)] to-white"
                data-oid=":q_:cnv"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="xzuhslg">
                    <div className="grid lg:grid-cols-4 gap-8" data-oid="4os-nyx">
                        {/* Filters Sidebar */}
                        <div className="lg:col-span-1 order-2 lg:order-1" data-oid="_r2tch-">
                            <FiltersSidebar
                                filters={filters}
                                onFilterChange={handleFilterChange}
                                onReset={resetFilters}
                                data-oid=":ubwo0n"
                            />
                        </div>

                        {/* Job Listings */}
                        <div className="lg:col-span-3 order-1 lg:order-2" data-oid="k7p311y">
                            {/* Toolbar */}
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-[hsl(210,30%,95%)] p-6 mb-6"
                                data-oid="3.mfk6x"
                            >
                                <div
                                    className="flex flex-col lg:flex-row lg:items-center justify-between gap-4"
                                    data-oid="zibbb0x"
                                >
                                    {/* Results Counter */}
                                    <div
                                        className="flex flex-col sm:flex-row sm:items-center gap-2"
                                        data-oid="4oxsmvn"
                                    >
                                        <span
                                            className="text-xl font-bold text-gray-800"
                                            data-oid="6ouvs7v"
                                        >
                                            {filteredJobs.length.toLocaleString()} Jobs Found
                                        </span>
                                        {(searchQuery || searchLocation) && (
                                            <span
                                                className="text-sm text-gray-600 bg-blue-50 px-3 py-1 rounded-full"
                                                data-oid="phai-n9"
                                            >
                                                for "{searchQuery}"{' '}
                                                {searchLocation && `in ${searchLocation}`}
                                            </span>
                                        )}
                                    </div>

                                    <div
                                        className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
                                        data-oid="jkykd9i"
                                    >
                                        {/* Sort Options */}
                                        <div className="flex items-center gap-2" data-oid="wfbhan7">
                                            <label
                                                className="text-sm font-medium text-gray-700 whitespace-nowrap"
                                                data-oid="ijfsipv"
                                            >
                                                Sort by:
                                            </label>
                                            <select
                                                value={sortBy}
                                                onChange={(e) => setSortBy(e.target.value)}
                                                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent bg-white min-w-[120px]"
                                                data-oid="6wfqh:j"
                                            >
                                                <option value="relevance" data-oid="b.7ae-x">
                                                    Relevance
                                                </option>
                                                <option value="date" data-oid="lusjk8s">
                                                    Date Posted
                                                </option>
                                                <option value="salary" data-oid="5jw4om8">
                                                    Salary
                                                </option>
                                                <option value="company" data-oid="p43c-:.">
                                                    Company
                                                </option>
                                            </select>
                                        </div>

                                        {/* View Toggle */}
                                        <div
                                            className="flex items-center bg-gray-100 rounded-lg p-1"
                                            data-oid="i8ayvg."
                                        >
                                            <button
                                                onClick={() => setViewMode('list')}
                                                className={`p-2 rounded-md transition-all duration-200 ${
                                                    viewMode === 'list'
                                                        ? 'bg-white text-[hsl(196,80%,45%)] shadow-sm'
                                                        : 'text-gray-600 hover:text-gray-800'
                                                }`}
                                                title="List View"
                                                data-oid="z4g_upg"
                                            >
                                                <svg
                                                    className="h-4 w-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    data-oid="c025e-p"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M4 6h16M4 10h16M4 14h16M4 18h16"
                                                        data-oid="b0-veml"
                                                    />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={() => setViewMode('grid')}
                                                className={`p-2 rounded-md transition-all duration-200 ${
                                                    viewMode === 'grid'
                                                        ? 'bg-white text-[hsl(196,80%,45%)] shadow-sm'
                                                        : 'text-gray-600 hover:text-gray-800'
                                                }`}
                                                title="Grid View"
                                                data-oid=".-2sa-2"
                                            >
                                                <svg
                                                    className="h-4 w-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    data-oid="0iaiblz"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                                        data-oid="y-ifovq"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Job Alerts Section */}
                            <div
                                className="bg-gradient-to-r from-[hsl(196,80%,45%)]/10 to-[hsl(175,70%,41%)]/10 backdrop-blur-sm rounded-xl border border-[hsl(196,80%,45%)]/20 p-6 mb-8"
                                data-oid="g1d9npf"
                            >
                                <div
                                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                                    data-oid="1cmlx6i"
                                >
                                    <div className="flex items-start gap-4" data-oid="7:l2z2t">
                                        <div
                                            className="bg-[hsl(196,80%,45%)] p-3 rounded-full flex-shrink-0"
                                            data-oid="g7q2-h9"
                                        >
                                            <svg
                                                className="h-6 w-6 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="o7ep6q9"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M15 17h5l-5 5v-5zM4 19h6v-2H4v2zM4 15h8v-2H4v2zM4 11h10V9H4v2zM4 7h12V5H4v2z"
                                                    data-oid="tqct._r"
                                                />
                                            </svg>
                                        </div>
                                        <div data-oid="tyaxgk2">
                                            <h3
                                                className="text-lg font-semibold text-gray-800 mb-1"
                                                data-oid="c5xi8iw"
                                            >
                                                Get Job Alerts
                                            </h3>
                                            <p className="text-gray-600 text-sm" data-oid="m81ey52">
                                                Never miss a job opportunity that matches your
                                                profile
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        className="px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                                        data-oid="68g5ezl"
                                    >
                                        Create Alert
                                    </button>
                                </div>
                            </div>

                            {/* Job Cards Container */}
                            <div className="space-y-6" data-oid="3zfvees">
                                {isLoading ? (
                                    <div className="text-center py-16" data-oid="b01ir0e">
                                        <div
                                            className="animate-spin rounded-full h-12 w-12 border-b-2 border-[hsl(196,80%,45%)] mx-auto"
                                            data-oid="ya50ve0"
                                        ></div>
                                        <p className="mt-4 text-gray-600" data-oid="qvhk4k7">
                                            Loading jobs...
                                        </p>
                                    </div>
                                ) : filteredJobs.length > 0 ? (
                                    <>
                                        {/* Job Cards Grid/List */}
                                        <div
                                            className={`${
                                                viewMode === 'grid'
                                                    ? 'grid grid-cols-1 xl:grid-cols-2 gap-6'
                                                    : 'space-y-6'
                                            }`}
                                            role="list"
                                            data-oid="eeyb9:y"
                                        >
                                            {filteredJobs.slice(0, visibleJobs).map((job) => (
                                                <JobCard
                                                    key={job.id}
                                                    job={job}
                                                    viewMode={viewMode}
                                                    data-oid="wkqv46e"
                                                />
                                            ))}
                                        </div>

                                        {/* Load More Button */}
                                        {visibleJobs < filteredJobs.length && (
                                            <div className="text-center py-8" data-oid="k-slc:5">
                                                <button
                                                    onClick={loadMoreJobs}
                                                    className="px-8 py-3 bg-white border-2 border-[hsl(196,80%,45%)] text-[hsl(196,80%,45%)] rounded-lg font-medium hover:bg-[hsl(196,80%,45%)] hover:text-white transition-all duration-300 transform hover:scale-105"
                                                    data-oid=":512-a5"
                                                >
                                                    Load More Jobs (
                                                    {filteredJobs.length - visibleJobs} remaining)
                                                </button>
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <div className="text-center py-16" data-oid="p1sqhlm">
                                        <div
                                            className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6"
                                            data-oid="uc3rki3"
                                        >
                                            <svg
                                                className="h-12 w-12 text-gray-400"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="g4-tbae"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                    data-oid="z1tpoqi"
                                                />
                                            </svg>
                                        </div>
                                        <h3
                                            className="text-xl font-medium text-gray-900 mb-2"
                                            data-oid="1hwdlye"
                                        >
                                            No jobs found
                                        </h3>
                                        <p className="text-gray-600 mb-6" data-oid="oyy95e-">
                                            Try adjusting your filters or search criteria
                                        </p>
                                        <button
                                            onClick={resetFilters}
                                            className="px-6 py-3 bg-[hsl(196,80%,45%)] text-white rounded-lg hover:bg-[hsl(196,80%,40%)] transition-colors duration-200 font-medium"
                                            data-oid="bz67pv."
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
