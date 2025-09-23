'use client';

import CategoryMenu from '@/components/CategoryMenu';
import FiltersSidebar from '@/components/FiltersSidebar';
import JobCard from '@/components/JobCard';
import MainNavbar from '@/components/mainNavbar';
import {
    FrontendJob,
    jobService
} from '@/lib/api';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useCallback, useEffect, useState } from 'react';

// TypeScript Interfaces

export interface FilterOptions {
    jobType: string;
    employmentType: string;
    skills: string;
    location: 'remote' | 'onsite' | 'hybrid' | 'all';
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

// Category definitions (without counts - will be populated dynamically)
const categoryDefinitions: Omit<Category, 'count'>[] = [
    { id: 1, name: 'All Jobs', slug: 'all' },
    { id: 2, name: 'Software Development', slug: 'software-development' },
    { id: 3, name: 'Data Science & AI', slug: 'data-science' },
    { id: 4, name: 'UI/UX Design', slug: 'ui-ux-design' },
    { id: 5, name: 'DevOps & Cloud', slug: 'devops' },
    { id: 6, name: 'Product Management', slug: 'product-management' },
    { id: 7, name: 'Mobile Development', slug: 'mobile-development' },
    { id: 8, name: 'Blockchain & Web3', slug: 'blockchain' },
    { id: 9, name: 'Cybersecurity', slug: 'cybersecurity' },
    { id: 10, name: 'Marketing & Growth', slug: 'marketing' },
    { id: 11, name: 'Finance & Fintech', slug: 'finance' },
    { id: 12, name: 'Sales & Business', slug: 'sales' },
];

function JobsPageContent() {
    // State management
    const [jobs, setJobs] = useState<FrontendJob[]>([]);
    const [filteredJobs, setFilteredJobs] = useState<FrontendJob[]>([]);
    
    // Debug filteredJobs changes
    useEffect(() => {
        console.log('🔍 FilteredJobs State Change:', {
            filteredJobs,
            length: filteredJobs?.length,
            type: typeof filteredJobs,
            isArray: Array.isArray(filteredJobs)
        });
    }, [filteredJobs]);
    
    // Dynamic categories with real counts
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [filters, setFilters] = useState<FilterOptions>({
        jobType: '',
        employmentType: '',
        skills: '',
        location: 'all',
        experienceLevel: '',
        salaryRange: '',
        companyType: '',
    });
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchLocation, setSearchLocation] = useState('');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
    const [sortBy, setSortBy] = useState('relevance');
    const [visibleJobs, setVisibleJobs] = useState(6);
    const [error, setError] = useState<string | null>(null);
    const [filterLoading, setFilterLoading] = useState(false);
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 10,
        total: 0,
        pages: 0
    });
    const router = useRouter();
    const searchParams = useSearchParams();

    // Function to calculate category counts based on actual job data
    const calculateCategoryCounts = useCallback((jobData: FrontendJob[]) => {
        console.log('📊 Calculating category counts for', jobData.length, 'jobs');
        
        const categoryMap: { [key: string]: string[] } = {
            'software-development': [
                'frontend', 'backend', 'full stack', 'software', 'developer', 'engineer',
                'react', 'angular', 'vue', 'node', 'python', 'java', 'javascript'
            ],
            'data-science': ['data scientist', 'ai', 'ml', 'machine learning', 'analyst', 'data engineer'],
            'ui-ux-design': ['ui', 'ux', 'designer', 'design', 'figma', 'adobe'],
            'devops': ['devops', 'cloud', 'aws', 'azure', 'kubernetes', 'docker', 'infrastructure'],
            'product-management': ['product manager', 'product', 'pm', 'strategy'],
            'mobile-development': ['mobile', 'ios', 'android', 'react native', 'flutter'],
            'blockchain': ['blockchain', 'crypto', 'web3', 'solidity', 'ethereum'],
            'cybersecurity': ['security', 'cyber', 'penetration', 'siem', 'incident'],
            'marketing': ['marketing', 'growth', 'digital', 'social', 'content'],
            'finance': ['finance', 'fintech', 'banking', 'financial', 'trading'],
            'sales': ['sales', 'business development', 'bd', 'account', 'revenue']
        };

        const counts: { [key: string]: number } = {
            'all': jobData.length
        };

        // Calculate count for each category
        categoryDefinitions.forEach(category => {
            if (category.slug === 'all') return;
            
            const keywords = categoryMap[category.slug] || [];
            const count = jobData.filter(job => {
                const titleLower = job.title?.toLowerCase() || '';
                const descriptionLower = job.description?.toLowerCase() || '';
                const skillsLower = job.skills?.map(s => s.toLowerCase()).join(' ') || '';
                
                return keywords.some(keyword => 
                    titleLower.includes(keyword) || 
                    descriptionLower.includes(keyword) ||
                    skillsLower.includes(keyword)
                );
            }).length;
            
            counts[category.slug] = count;
        });

        // Create categories array with calculated counts
        const categoriesWithCounts: Category[] = categoryDefinitions.map(category => ({
            ...category,
            count: counts[category.slug] || 0
        }));

        console.log('📊 Category counts calculated:', counts);
        return categoriesWithCounts;
    }, []);

    // Read URL search parameters on component mount
    useEffect(() => {
        const searchParam = searchParams.get('search');
        if (searchParam) {
            setSearchQuery(decodeURIComponent(searchParam));
        }
    }, [searchParams]); // Include searchParams as dependency

    // Cleanup effect for debounced functions
    useEffect(() => {
        return () => {
            // Cleanup any pending timeouts when component unmounts
        };
    }, []);

    // Backend data loading functions
    const loadJobs = useCallback(async (page: number = pagination.page) => {
        try {
            setIsLoading(true);
            setError(null);
            
            console.log('🔄 Loading jobs from backend...', {
                page,
                limit: pagination.limit,
                type: 'job'
            });
            
            const response: any = await jobService.getJobs({
                page: page,
                limit: pagination.limit,
                type: 'job' // Only load jobs, not internships
            });

            console.log('📥 Backend response:', response);
            console.log('📥 Response type:', typeof response);
            console.log('📥 Response success:', response?.success);
            console.log('📥 Response data:', response?.data);

            if (response.success && response.data) {
                // Backend returns: { success: true, data: { jobs: [...], pagination: {...} } }
                const jobsArray = response.data.jobs;
                
                if (Array.isArray(jobsArray)) {
                    console.log('✅ Processing', jobsArray.length, 'jobs from backend');
                    
                    const frontendJobs = jobsArray.map((job: any) => {
                        try {
                        return jobService.transformToFrontendJob(job);
                        } catch (transformError) {
                            console.error('❌ Error transforming job:', job, transformError);
                            // Return a fallback job object
                            return {
                                ...job,
                                isFeatured: false,
                                isUrgent: false,
                                applicantCount: 0,
                                companyType: 'Product' as const,
                                experienceRequired: '1-3 years',
                                jobType: job.type === 'job' ? 'Full-time' : 'Internship',
                                employmentType: 'Permanent',
                                skills: job.eligibility?.streams || [],
                                postedDate: job.createdAt,
                                isRemote: job.location === 'remote',
                            };
                        }
                    });
                    
                    console.log('✅ Transformed jobs:', frontendJobs);
                    setJobs(frontendJobs);
                    setFilteredJobs(frontendJobs);
                    setPagination(response.data.pagination || { page: 1, limit: 10, total: 0, pages: 0 });
                    
                    // Calculate and set category counts based on actual job data
                    const categoriesWithCounts = calculateCategoryCounts(frontendJobs);
                    setCategories(categoriesWithCounts);
                } else {
                    console.warn('❌ Jobs data is not an array:', jobsArray);
                    setJobs([]);
                    setFilteredJobs([]);
                    setError('Invalid jobs data format received');
                }
            } else {
                console.error('❌ API response failed:', response);
                setError(response.error?.message || 'No jobs data received');
                setJobs([]);
                setFilteredJobs([]);
            }
        } catch (err) {
            console.error('💥 Error loading jobs:', err);
            
            // Try to load mock data as fallback
            try {
                console.log('🔄 Attempting to load mock data as fallback...');
                const { mockJobs } = await import('@/lib/mockData');
                const frontendJobs = mockJobs.map((job: any) => ({
                    ...job,
                    isFeatured: Math.random() > 0.8,
                    isUrgent: Math.random() > 0.9,
                    applicantCount: Math.floor(Math.random() * 500),
                    companyType: 'Product' as const,
                    experienceRequired: '1-3 years',
                    jobType: 'Full-time',
                    employmentType: 'Permanent',
                    skills: job.skills || [],
                    postedDate: job.postedDate,
                    isRemote: job.isRemote || false,
                }));
                
                setJobs(frontendJobs);
                setFilteredJobs(frontendJobs);
                setError(null);
                
                // Calculate and set category counts for mock data too
                const categoriesWithCounts = calculateCategoryCounts(frontendJobs);
                setCategories(categoriesWithCounts);
                console.log('✅ Fallback to mock data successful');
            } catch (fallbackError) {
                console.error('❌ Fallback to mock data also failed:', fallbackError);
                setError(`Failed to load jobs: ${err instanceof Error ? err.message : 'Unknown error'}`);
            setJobs([]);
            setFilteredJobs([]);
            }
        } finally {
            setIsLoading(false);
        }
    }, [pagination.page, pagination.limit]);

    const searchJobs = useCallback(async (page: number = pagination.page) => {
        try {
            setIsLoading(true);
            setError(null);
            
            console.log('🔍 Searching jobs...', {
                query: searchQuery,
                location: searchLocation,
                page,
                limit: pagination.limit
            });
            
            const response: any = await jobService.searchJobs(searchQuery, {
                page: page,
                limit: pagination.limit,
                type: 'job',
                location: (searchLocation as 'remote' | 'onsite' | 'hybrid') || undefined
            });

            console.log('📥 Search response:', response);

            if (response.success && response.data) {
                // Backend returns: { success: true, data: { jobs: [...], pagination: {...} } }
                const jobsArray = response.data.jobs;
                if (Array.isArray(jobsArray)) {
                    console.log('✅ Processing', jobsArray.length, 'search results');
                    
                    const frontendJobs = jobsArray.map((job: any) => {
                        try {
                            return jobService.transformToFrontendJob(job);
                        } catch (transformError) {
                            console.error('❌ Error transforming search result:', job, transformError);
                            return {
                                ...job,
                                isFeatured: false,
                                isUrgent: false,
                                applicantCount: 0,
                                companyType: 'Product' as const,
                                experienceRequired: '1-3 years',
                                jobType: job.type === 'job' ? 'Full-time' : 'Internship',
                                employmentType: 'Permanent',
                                skills: job.eligibility?.streams || [],
                                postedDate: job.createdAt,
                                isRemote: job.location === 'remote',
                            };
                        }
                    });
                    
                    setJobs(frontendJobs);
                    setFilteredJobs(frontendJobs);
                    setPagination(response.data.pagination || { page: 1, limit: 10, total: 0, pages: 0 });
                    
                    // Calculate and set category counts for search results
                    const categoriesWithCounts = calculateCategoryCounts(frontendJobs);
                    setCategories(categoriesWithCounts);
                } else {
                    console.warn('❌ Search jobs data is not an array:', jobsArray);
                    setJobs([]);
                    setFilteredJobs([]);
                    setError('Invalid search results format received');
                }
            } else {
                console.error('❌ Search API response failed:', response);
                setError(response.error?.message || 'No search results received');
                setJobs([]);
                setFilteredJobs([]);
            }
        } catch (err) {
            console.error('💥 Error searching jobs:', err);
            setError(`Failed to search jobs: ${err instanceof Error ? err.message : 'Unknown error'}`);
            setJobs([]);
            setFilteredJobs([]);
        } finally {
            setIsLoading(false);
        }
    }, [searchQuery, searchLocation, pagination.page, pagination.limit]);

    // Test API connection on component mount
    useEffect(() => {
        const testApiConnection = async () => {
            try {
                console.log('🔌 Testing API connection...');
                const response = await fetch('http://localhost:3001/health');
                const healthData = await response.json();
                console.log('✅ API Health Check:', healthData);
            } catch (error) {
                console.error('❌ API Health Check Failed:', error);
            }
        };
        
        testApiConnection();
    }, []);

    // Load jobs from backend on component mount
    useEffect(() => {
        console.log('🚀 Component mounted, loading jobs...');
        loadJobs();
    }, [loadJobs]);

    // Recalculate category counts when jobs data changes
    useEffect(() => {
        if (jobs.length > 0) {
            console.log('🔄 Recalculating category counts due to jobs change');
            const categoriesWithCounts = calculateCategoryCounts(jobs);
            setCategories(categoriesWithCounts);
        }
    }, [jobs, calculateCategoryCounts]);

    // Load jobs when search parameters change
    useEffect(() => {
        if (searchQuery || searchLocation) {
            searchJobs();
        } else {
            loadJobs();
        }
    }, [searchQuery, searchLocation, loadJobs, searchJobs]);

    // Function to update URL when search query changes (debounced)
    const updateSearchURL = (query: string) => {
        try {
            // Debounce URL updates to avoid excessive router calls
            const timeoutId = setTimeout(() => {
                if (query.trim()) {
                    const params = new URLSearchParams(searchParams.toString());
                    params.set('search', query);
                    router.replace(`/jobs?${params.toString()}`);
                } else {
                    const params = new URLSearchParams(searchParams.toString());
                    params.delete('search');
                    router.replace(`/jobs?${params.toString()}`);
                }
            }, 300); // 300ms debounce

            return () => clearTimeout(timeoutId);
        } catch (error) {
            // console.error('Error updating search URL:', error);
        }
    };

    // Function to clear search and update URL immediately
    const clearSearch = () => {
        setSearchQuery('');
        try {
            const params = new URLSearchParams(searchParams.toString());
            params.delete('search');
            router.replace(`/jobs?${params.toString()}`);
        } catch (error) {
            // console.error('Error clearing search URL:', error);
        }
    };

    // Enhanced filter logic with proper data mapping and error handling
    useEffect(() => {
        // Debounce filter operations for better performance
        const filterTimeout = setTimeout(() => {
            console.log('🔍 Filter Effect Triggered:', {
                jobsLength: jobs?.length,
                selectedCategory,
                filters,
                searchQuery,
                searchLocation,
                sortBy
            });

            setFilterLoading(true);
        
        // Ensure jobs is an array before filtering
        if (!Array.isArray(jobs)) {
                console.warn('❌ Jobs is not an array:', jobs);
            setFilteredJobs([]);
                setFilterLoading(false);
            return;
        }

        // If jobs array is empty, don't run filtering logic
        if (jobs.length === 0) {
                console.log('📭 No jobs to filter');
                setFilteredJobs([]);
                setFilterLoading(false);
            return;
        }

        let filtered = [...jobs]; // Create a copy to avoid mutating original array
        console.log('🚀 Starting with', filtered.length, 'jobs');

        // Filter by search query
        if (searchQuery && searchQuery.trim()) {
            const query = searchQuery.toLowerCase().trim();
            filtered = filtered.filter((job) => {
                const titleMatch = job.title?.toLowerCase().includes(query) || false;
                const companyMatch = job.company?.toLowerCase().includes(query) || false;
                const skillsMatch = job.skills?.some((skill) => 
                    skill.toLowerCase().includes(query)
                ) || false;
                const descriptionMatch = job.description?.toLowerCase().includes(query) || false;
                
                return titleMatch || companyMatch || skillsMatch || descriptionMatch;
            });
            console.log('🔍 After search query filter:', filtered.length, 'jobs');
        }

        // Filter by search location
        if (searchLocation && searchLocation.trim()) {
            const location = searchLocation.toLowerCase().trim();
            filtered = filtered.filter((job) => {
                // Check both the location field and if it's mentioned in the location string
                const locationMatch = job.location?.toLowerCase().includes(location) || false;
                return locationMatch;
            });
            console.log('📍 After location filter:', filtered.length, 'jobs');
        }

        // Filter by category
        if (selectedCategory !== 'all') {
            const categoryMap: { [key: string]: string[] } = {
                'software-development': [
                    'frontend', 'backend', 'full stack', 'software', 'developer', 'engineer',
                    'react', 'angular', 'vue', 'node', 'python', 'java', 'javascript'
                ],
                'data-science': ['data scientist', 'ai', 'ml', 'machine learning', 'analyst', 'data engineer'],
                'ui-ux-design': ['ui', 'ux', 'designer', 'design', 'figma', 'adobe'],
                'devops': ['devops', 'cloud', 'aws', 'azure', 'kubernetes', 'docker', 'infrastructure'],
                'product-management': ['product manager', 'product', 'pm', 'strategy'],
                'mobile-development': ['mobile', 'ios', 'android', 'react native', 'flutter'],
                'blockchain': ['blockchain', 'crypto', 'web3', 'solidity', 'ethereum'],
                'cybersecurity': ['security', 'cyber', 'penetration', 'siem', 'incident'],
                'marketing': ['marketing', 'growth', 'digital', 'social', 'content'],
                'finance': ['finance', 'fintech', 'banking', 'financial', 'trading'],
                'sales': ['sales', 'business development', 'bd', 'account', 'revenue']
            };
            
            const categoryKeywords = categoryMap[selectedCategory] || [];
            filtered = filtered.filter((job) => {
                const titleLower = job.title?.toLowerCase() || '';
                const descriptionLower = job.description?.toLowerCase() || '';
                const skillsLower = job.skills?.map(s => s.toLowerCase()).join(' ') || '';
                
                return categoryKeywords.some(keyword => 
                    titleLower.includes(keyword) || 
                    descriptionLower.includes(keyword) ||
                    skillsLower.includes(keyword)
                );
            });
            console.log('🏷️ After category filter:', filtered.length, 'jobs');
        }

        // Filter by job type (Full-time, Part-time, etc.)
        if (filters.jobType) {
            // Since backend only has 'job' and 'internship', we need to use additional logic
            filtered = filtered.filter((job) => {
                const jobTitle = job.title?.toLowerCase() || '';
                const jobDescription = job.description?.toLowerCase() || '';
                const combinedText = `${jobTitle} ${jobDescription}`;
                
                switch (filters.jobType) {
                    case 'Full-time':
                        // Full-time jobs: exclude internships and part-time keywords
                        return job.type === 'job' && 
                               !combinedText.includes('part-time') && 
                               !combinedText.includes('part time') &&
                               !combinedText.includes('intern');
                    case 'Part-time':
                        // Part-time jobs: look for part-time keywords
                        return job.type === 'job' && 
                               (combinedText.includes('part-time') || 
                                combinedText.includes('part time'));
                    case 'Contract':
                        // Contract jobs: look for contract keywords
                        return job.type === 'job' && 
                               (combinedText.includes('contract') || 
                                combinedText.includes('freelance'));
                    case 'Internship':
                        // Internships: backend type is 'internship'
                        return job.type === 'internship';
                    case 'Freelance':
                        // Freelance jobs: look for freelance keywords
                        return job.type === 'job' && 
                               (combinedText.includes('freelance') || 
                                combinedText.includes('contract'));
                    default:
                        return true;
                }
            });
            console.log('💼 After job type filter:', filtered.length, 'jobs');
        }

        // Filter by employment type (Permanent, Contract, etc.)
        if (filters.employmentType) {
            filtered = filtered.filter((job) => {
                const jobTitle = job.title?.toLowerCase() || '';
                const jobDescription = job.description?.toLowerCase() || '';
                const combinedText = `${jobTitle} ${jobDescription}`;
                
                switch (filters.employmentType) {
                    case 'Permanent':
                        // Permanent jobs: exclude contract, temporary, consultant keywords
                        return job.type === 'job' && 
                               !combinedText.includes('contract') && 
                               !combinedText.includes('temporary') &&
                               !combinedText.includes('consultant') &&
                               !combinedText.includes('freelance');
                    case 'Contract':
                        // Contract jobs: look for contract keywords
                        return job.type === 'job' && 
                               (combinedText.includes('contract') || 
                                combinedText.includes('freelance'));
                    case 'Temporary':
                        // Temporary jobs: internships or temporary keywords
                        return job.type === 'internship' || 
                               combinedText.includes('temporary') ||
                               combinedText.includes('temp');
                    case 'Consultant':
                        // Consultant jobs: look for consultant keywords
                        return job.type === 'job' && 
                               (combinedText.includes('consultant') || 
                                combinedText.includes('consulting'));
                    default:
                        return true;
                }
            });
            console.log('📋 After employment type filter:', filtered.length, 'jobs');
        }

        // Filter by experience level
        if (filters.experienceLevel) {
            filtered = filtered.filter((job) => {
                // First check if job has experienceRequired field (from mock data)
                const experienceRequired = job.experienceRequired?.toLowerCase() || '';
                
                // Also check title and description for experience keywords
                const titleLower = job.title?.toLowerCase() || '';
                const descriptionLower = job.description?.toLowerCase() || '';
                const combinedText = `${titleLower} ${descriptionLower}`;
                
                // Experience level matching logic
                let matches = false;
                
                switch (filters.experienceLevel) {
                    case '0-1 years':
                        // Match fresher/entry level jobs
                        matches = experienceRequired.includes('0-1') || 
                                 experienceRequired.includes('0-2') ||
                                 combinedText.includes('fresher') ||
                                 combinedText.includes('entry level') ||
                                 combinedText.includes('entry-level') ||
                                 combinedText.includes('trainee') ||
                                 combinedText.includes('fresh graduate') ||
                                 combinedText.includes('new graduate') ||
                                 combinedText.includes('no experience') ||
                                 combinedText.includes('zero experience');
                        break;
                        
                    case '1-3 years':
                        // Match junior level jobs
                        matches = experienceRequired.includes('1-3') || 
                                 experienceRequired.includes('1-2') ||
                                 experienceRequired.includes('2-3') ||
                                 experienceRequired.includes('2-4') ||
                                 combinedText.includes('junior') ||
                                 combinedText.includes('associate') ||
                                 (combinedText.includes('1 year') && !combinedText.includes('5+')) ||
                                 (combinedText.includes('2 years') && !combinedText.includes('5+')) ||
                                 (combinedText.includes('3 years') && !combinedText.includes('5+'));
                        break;
                        
                    case '3-5 years':
                        // Match mid-level jobs
                        matches = experienceRequired.includes('3-5') || 
                                 experienceRequired.includes('3-4') ||
                                 experienceRequired.includes('4-5') ||
                                 experienceRequired.includes('2-5') ||
                                 combinedText.includes('mid-level') ||
                                 combinedText.includes('mid level') ||
                                 combinedText.includes('intermediate') ||
                                 (combinedText.includes('4 years') && !combinedText.includes('5+')) ||
                                 (combinedText.includes('5 years') && !combinedText.includes('6+'));
                        break;
                        
                    case '5+ years':
                        // Match senior level jobs
                        matches = experienceRequired.includes('5+') || 
                                 experienceRequired.includes('6+') ||
                                 experienceRequired.includes('7+') ||
                                 experienceRequired.includes('8+') ||
                                 experienceRequired.includes('10+') ||
                                 combinedText.includes('senior') ||
                                 combinedText.includes('lead') ||
                                 combinedText.includes('principal') ||
                                 combinedText.includes('architect') ||
                                 combinedText.includes('manager') ||
                                 combinedText.includes('director') ||
                                 (combinedText.includes('5 years') && !combinedText.includes('3-5')) ||
                                 combinedText.includes('6 years') ||
                                 combinedText.includes('7 years') ||
                                 combinedText.includes('8 years') ||
                                 combinedText.includes('9 years') ||
                                 combinedText.includes('10 years');
                        break;
                        
                    default:
                        matches = true;
                }
                
                // Debug logging for experience filtering
                if (filters.experienceLevel === '0-1 years' && matches) {
                    console.log(`👔 Experience Match [${filters.experienceLevel}]:`, {
                        jobTitle: job.title,
                        experienceRequired: job.experienceRequired,
                        jobDescription: job.description?.substring(0, 100) + '...',
                        matched: matches
                    });
                }
                
                return matches;
            });
            console.log('👔 After experience filter:', filtered.length, 'jobs');
        }

        // Filter by skills
        if (filters.skills && filters.skills.trim()) {
            const skillsArray = filters.skills
                .toLowerCase()
                .split(',')
                .map((s) => s.trim())
                .filter(s => s.length > 0);
                
            filtered = filtered.filter((job) => {
                const jobSkills = job.skills?.map(s => s.toLowerCase()) || [];
                const titleLower = job.title?.toLowerCase() || '';
                const descriptionLower = job.description?.toLowerCase() || '';
                
                return skillsArray.some((skill) => {
                    // Check in job skills array with exact matching
                    const hasSkill = jobSkills.some((jobSkill) => {
                        // Exact match
                        if (jobSkill === skill) return true;
                        // Check if skill is contained in job skill (for compound skills)
                        if (jobSkill.includes(skill)) return true;
                        // Check if job skill is contained in skill (for broader skills)
                        if (skill.includes(jobSkill)) return true;
                        return false;
                    });
                    
                    // Check in job title with word boundary matching
                    const hasInTitle = (() => {
                        const regex = new RegExp(`\\b${skill}\\b`, 'i');
                        return regex.test(titleLower);
                    })();
                    
                    // Check in job description with word boundary matching
                    const hasInDescription = (() => {
                        const regex = new RegExp(`\\b${skill}\\b`, 'i');
                        return regex.test(descriptionLower);
                    })();
                    
                    return hasSkill || hasInTitle || hasInDescription;
                });
            });
            console.log('🛠️ After skills filter:', filtered.length, 'jobs');
        }

        // Filter by location
        if (filters.location && filters.location !== 'all') {
            const locationValue = filters.location.toLowerCase();
            filtered = filtered.filter((job) => {
                const jobLocation = job.location?.toLowerCase() || '';
                return jobLocation === locationValue || jobLocation.includes(locationValue);
            });
            console.log('📍 After location filter:', filtered.length, 'jobs');
        }

        // Filter by salary range
        if (filters.salaryRange) {
            filtered = filtered.filter((job) => {
                const salary = job.salary || job.stipend;
                if (!salary) return false;

                // Extract salary range from strings like "₹6-10 LPA" or "₹15-25 LPA"
                const salaryMatch = salary.match(/₹?(\d+)(?:-(\d+))?/);
                if (!salaryMatch) {
                    console.log('❌ Salary regex failed for:', salary);
                    return false;
                }

                const jobMinSalary = parseInt(salaryMatch[1]);
                const jobMaxSalary = salaryMatch[2] ? parseInt(salaryMatch[2]) : jobMinSalary;

                let matches = false;
                switch (filters.salaryRange) {
                    case '0-5':
                        // Show jobs where the salary range overlaps with 0-5 LPA
                        // Job should have some salary in the 0-5 range
                        matches = jobMinSalary < 5; // Job starts before 5 LPA
                        break;
                    case '5-10':
                        // Show jobs where the salary range overlaps with 5-10 LPA
                        // Job should have some salary in the 5-10 range
                        matches = jobMinSalary < 10 && jobMaxSalary > 5;
                        break;
                    case '10-20':
                        // Show jobs where the salary range overlaps with 10-20 LPA
                        // Job should have some salary in the 10-20 range
                        matches = jobMinSalary < 20 && jobMaxSalary > 10;
                        break;
                    case '20+':
                        // Show jobs where the minimum salary is 20 LPA or higher
                        matches = jobMinSalary >= 20;
                        break;
                    default:
                        matches = true;
                }

                // Debug logging for salary filtering
                if (filters.salaryRange === '10-20') {
                    console.log(`💰 Salary Filter Debug [${filters.salaryRange}]:`, {
                    jobTitle: job.title,
                        salary: salary,
                        jobMinSalary,
                        jobMaxSalary,
                    matches,
                    filterRange: filters.salaryRange
                });
                }

                return matches;
            });
            console.log('💰 After salary filter:', filtered.length, 'jobs');
        }

        // Filter by company type
        if (filters.companyType) {
            filtered = filtered.filter((job) => {
                const companyName = job.company.toLowerCase();
                const jobTitle = job.title?.toLowerCase() || '';
                const jobDescription = job.description?.toLowerCase() || '';
                const combinedText = `${companyName} ${jobTitle} ${jobDescription}`;
                
                switch (filters.companyType) {
                    case 'Startup':
                        // Startup companies: look for startup indicators
                        return combinedText.includes('startup') ||
                               combinedText.includes('tech') ||
                               combinedText.includes('innov') ||
                               combinedText.includes('labs') ||
                               combinedText.includes('ventures') ||
                               combinedText.includes('swiggy') ||
                               combinedText.includes('zomato') ||
                               combinedText.includes('ola') ||
                               combinedText.includes('paytm') ||
                               combinedText.includes('phonepe') ||
                               combinedText.includes('dream11') ||
                               combinedText.includes('coindcx') ||
                               combinedText.includes('byjus') ||
                               combinedText.includes('razorpay');
                    
                    case 'MNC':
                        // MNC companies: look for large company indicators
                        return combinedText.includes('microsoft') ||
                               combinedText.includes('google') ||
                               combinedText.includes('amazon') ||
                               combinedText.includes('apple') ||
                               combinedText.includes('meta') ||
                               combinedText.includes('netflix') ||
                               combinedText.includes('uber') ||
                               combinedText.includes('airbnb') ||
                               combinedText.includes('flipkart') ||
                               combinedText.includes('hotstar') ||
                               combinedText.includes('freshworks') ||
                               combinedText.includes('tcs') ||
                               combinedText.includes('infosys') ||
                               combinedText.includes('wipro');
                    
                    case 'Product':
                        // Product companies: look for product-focused indicators
                        return combinedText.includes('product') ||
                               combinedText.includes('platform') ||
                               combinedText.includes('app') ||
                               combinedText.includes('software') ||
                               combinedText.includes('phonepe') ||
                               combinedText.includes('razorpay') ||
                               combinedText.includes('freshworks') ||
                               combinedText.includes('saas') ||
                               combinedText.includes('api');
                    
                    case 'Service':
                        // Service companies: look for service-focused indicators
                        return combinedText.includes('consulting') ||
                               combinedText.includes('services') ||
                               combinedText.includes('solutions') ||
                               combinedText.includes('advisory') ||
                               combinedText.includes('urban company') ||
                               combinedText.includes('nykaa') ||
                               combinedText.includes('outsourcing') ||
                               combinedText.includes('bpo');
                    
                    default:
                        return true;
                }
            });
            console.log('🏢 After company type filter:', filtered.length, 'jobs');
        }

        // Sort filtered results
        const sortedFiltered = [...filtered]; // Create copy for sorting
        switch (sortBy) {
            case 'date':
                sortedFiltered.sort((a, b) => {
                    const dateA = new Date(a.createdAt || '').getTime();
                    const dateB = new Date(b.createdAt || '').getTime();
                    return dateB - dateA; // Newest first
                });
                break;
            case 'salary':
                sortedFiltered.sort((a, b) => {
                    const salaryA = a.salary ? parseInt(a.salary.replace(/[^\d]/g, '')) : 0;
                    const salaryB = b.salary ? parseInt(b.salary.replace(/[^\d]/g, '')) : 0;
                    return salaryB - salaryA; // Highest first
                });
                break;
            case 'company':
                sortedFiltered.sort((a, b) => a.company.localeCompare(b.company));
                break;
            default: // relevance
                sortedFiltered.sort((a, b) => {
                    const scoreA = (a.isFeatured ? 10 : 0) + (a.isUrgent ? 5 : 0) + (a.applicantCount || 0) / 100;
                    const scoreB = (b.isFeatured ? 10 : 0) + (b.isUrgent ? 5 : 0) + (b.applicantCount || 0) / 100;
                    return scoreB - scoreA;
                });
        }

            console.log('✅ Final filtered results:', sortedFiltered.length, 'jobs');
            setFilteredJobs(sortedFiltered);
            setFilterLoading(false);
        }, 150); // 150ms debounce

        // Cleanup timeout on unmount or dependency change
        return () => clearTimeout(filterTimeout);
    }, [jobs, selectedCategory, filters, searchQuery, searchLocation, sortBy]);

    const handleFilterChange = (newFilters: FilterOptions) => {
        try {
            // Validate filter values
            const validatedFilters = {
                jobType: newFilters.jobType || '',
                employmentType: newFilters.employmentType || '',
                skills: newFilters.skills || '',
                location: newFilters.location || 'all',
                experienceLevel: newFilters.experienceLevel || '',
                salaryRange: newFilters.salaryRange || '',
                companyType: newFilters.companyType || '',
            };
            
            // Additional validation
            if (validatedFilters.skills) {
                // Clean up skills input - remove extra spaces and duplicates
                const skillsArray = validatedFilters.skills
                    .split(',')
                    .map(s => s.trim())
                    .filter(s => s.length > 0);
                validatedFilters.skills = [...new Set(skillsArray)].join(', ');
            }
            
            setFilters(validatedFilters);
            console.log('✅ Filters updated:', validatedFilters);
        } catch (error) {
            console.error('❌ Error updating filters:', error);
        }
    };

    const handleCategoryChange = (categorySlug: string) => {
        setSelectedCategory(categorySlug);
    };

    const resetFilters = () => {
        setFilters({
            jobType: '',
            employmentType: '',
            skills: '',
            location: 'all',
            experienceLevel: '',
            salaryRange: '',
            companyType: '',
        });
        setSelectedCategory('all');
        setSearchQuery('');
        setSearchLocation('');
        // Clear URL search parameters
        router.replace('/jobs');
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Search is handled by useEffect
    };

    const loadMoreJobs = () => {
        setVisibleJobs((prev) => prev + 6);
    };

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="uklr-dx">
            {/* Navbar */}
            <MainNavbar data-oid="48b2y81" />

            {/* Enhanced Hero Section with Search */}
            <section
                className="bg-gradient-to-r from-[hsl(196,80%,45%)] via-[hsl(210,70%,45%)] to-[hsl(175,70%,41%)] text-white relative overflow-hidden py-20"
                data-oid="5l-66ph"
            >
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden" data-oid="edligen">
                    <div
                        className="absolute -top-20 -left-20 w-96 h-96 bg-[hsl(196,80%,65%)] opacity-30 rounded-full blur-3xl animate-blob"
                        data-oid="hixpww8"
                    ></div>
                    <div
                        className="absolute top-40 right-20 w-96 h-96 bg-[hsl(210,70%,65%)] opacity-40 rounded-full blur-3xl animate-blob animation-delay-2000"
                        data-oid="-n1pow2"
                    ></div>
                    <div
                        className="absolute bottom-10 left-1/3 w-96 h-96 bg-[hsl(175,70%,61%)] opacity-40 rounded-full blur-3xl animate-blob animation-delay-4000"
                        data-oid="6ndv7_-"
                    ></div>
                </div>

                {/* Frosted glass overlay */}
                <div
                    className="absolute inset-0 bg-white/5 backdrop-blur-[1px]"
                    data-oid="2_2v5zo"
                ></div>

                <div
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
                    data-oid="z:ry69j"
                >
                    <h1
                        className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-md"
                        data-oid="3im5n08"
                    >
                        Find Your Dream Job
                    </h1>
                    <p className="text-xl md:text-2xl mb-2 text-blue-100" data-oid="-qxrtld">
                        Empower Your Career Journey
                    </p>
                    <p className="text-lg text-blue-200 max-w-2xl mx-auto mb-8" data-oid="mmt2yog">
                        Discover thousands of opportunities from top Indian companies
                    </p>

                    {/* Advanced Search Bar */}
                    <form onSubmit={handleSearch} className="max-w-4xl mx-auto" data-oid="rf47m-:">
                        <div
                            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                            data-oid="9pcq_i_"
                        >
                            <div className="grid md:grid-cols-3 gap-4" data-oid="2m7hme1">
                                {/* Job Title Search */}
                                <div className="relative" data-oid="7bq_iy9">
                                    <div
                                        className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                                        data-oid="n2sh61l"
                                    >
                                        <svg
                                            className="h-5 w-5 text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="9.x5utn"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                data-oid="g5i8bnr"
                                            />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Job title, skills, or company"
                                        value={searchQuery}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            setSearchQuery(value);
                                            // Only update URL when user stops typing (debounced)
                                            if (value.trim()) {
                                                updateSearchURL(value);
                                            }
                                        }}
                                        className="w-full pl-10 pr-4 py-3 bg-white/90 backdrop-blur-sm border border-white/30 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
                                        data-oid="m0k26yz"
                                    />
                                    {searchQuery && (
                                        <button
                                            type="button"
                                            onClick={clearSearch}
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                                        >
                                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    )}
                                </div>

                                {/* Location Search */}
                                <div className="relative" data-oid="da.zkn:">
                                    <div
                                        className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                                        data-oid="8oxpybe"
                                    >
                                        <svg
                                            className="h-5 w-5 text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="i-7o-7y"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                data-oid="3m.467w"
                                            />

                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                data-oid="394c:gd"
                                            />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Location or Remote"
                                        value={searchLocation}
                                        onChange={(e) => setSearchLocation(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 bg-white/90 backdrop-blur-sm border border-white/30 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
                                        data-oid=".kq:afo"
                                    />
                                </div>

                                {/* Search Button */}
                                <button
                                    type="submit"
                                    className="px-8 py-3 bg-white text-[hsl(196,80%,45%)] rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
                                    data-oid="4:mrv9l"
                                >
                                    <svg
                                        className="h-5 w-5 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid=":6jexy7"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            data-oid="oczaol2"
                                        />
                                    </svg>
                                    Search Jobs
                                </button>
                            </div>

                            {/* Quick Search Tags */}
                            <div
                                className="flex flex-wrap gap-2 mt-4 justify-center"
                                data-oid="4j84d1h"
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
                                        onClick={() => {
                                            setSearchQuery(tag);
                                            // Immediate URL update for quick search tags
                                            try {
                                                const params = new URLSearchParams(searchParams.toString());
                                                params.set('search', tag);
                                                router.replace(`/jobs?${params.toString()}`);
                                            } catch (error) {
                                                // console.error('Error updating quick search URL:', error);
                                            }
                                        }}
                                        className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full hover:bg-white/30 transition-all duration-300"
                                        data-oid="s463h6f"
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>

                            {/* Quick Filters */}
                            <div className="mt-6">
                                <h3 className="text-sm font-medium text-white/90 mb-3 text-center">Quick Filters</h3>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {[
                                        { label: 'Fresher Full-time Jobs', filters: { jobType: 'Full-time', experienceLevel: '0-1 years' } },
                                        { label: 'Remote Jobs', filters: { location: 'remote' } },
                                        { label: 'High Salary (10-20 LPA)', filters: { salaryRange: '10-20' } },
                                        { label: 'Startup Jobs', filters: { companyType: 'Startup' } },
                                        { label: 'Internships', filters: { jobType: 'Internship' } },
                                    ].map((quickFilter) => (
                                        <button
                                            key={quickFilter.label}
                                            onClick={() => {
                                                console.log('🚀 Applying quick filter:', quickFilter);
                                                setFilters(prevFilters => ({
                                                    ...prevFilters,
                                                    ...quickFilter.filters
                                                }));
                                                // Clear search query when applying quick filters
                                                setSearchQuery('');
                                                setSearchLocation('');
                                                // Clear URL search parameters
                                                try {
                                                    router.replace('/jobs');
                                                } catch (error) {
                                                    console.error('Error clearing search URL:', error);
                                                }
                                            }}
                                            className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
                                        >
                                            {quickFilter.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>

            {/* Category Menu */}
            <section
                className="bg-gradient-to-b from-[hsl(210,50%,98%)] to-[hsl(196,60%,95%)] py-8"
                data-oid="idn.va9"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="m:xck_e">
                    <CategoryMenu
                        categories={categories}
                        selectedCategory={selectedCategory}
                        onCategoryChange={handleCategoryChange}
                        data-oid="8ev-jon"
                    />

                    {/* Jobs Count Badge */}
                    <div className="text-center mt-6" data-oid=".-gq5b8">
                        <div
                            className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-md border border-[hsl(210,30%,95%)]"
                            data-oid="bcx379p"
                        >
                            <svg
                                className="h-5 w-5 text-[hsl(196,80%,45%)] mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="exmyai2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                    data-oid="8ntyjob"
                                />
                            </svg>
                            <span className="text-lg font-bold text-gray-800" data-oid="vpwukyz">
                                {filterLoading ? (
                                    <span className="flex items-center gap-2">
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                        FILTERING JOBS...
                                    </span>
                                ) : (
                                    `${filteredJobs.length.toLocaleString()}+ JOBS FOUND`
                                )}
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section
                className="py-12 bg-gradient-to-b from-[hsl(196,60%,95%)] to-white"
                data-oid="4a365m9"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="-ezd7zt">
                    <div className="grid lg:grid-cols-4 gap-8" data-oid="mbhftz2">
                        {/* Filters Sidebar */}
                        <div className="lg:col-span-1 order-2 lg:order-1" data-oid="4wj1m.n">
                            <FiltersSidebar
                                filters={filters}
                                onFilterChange={handleFilterChange}
                                onReset={resetFilters}
                                data-oid="oofaq7x"
                            />
                        </div>

                        {/* Job Listings */}
                        <div className="lg:col-span-3 order-1 lg:order-2" data-oid="oxtj_7l">
                            {/* Toolbar */}
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-[hsl(210,30%,95%)] p-6 mb-6"
                                data-oid="xhakfl9"
                            >
                                <div
                                    className="flex flex-col lg:flex-row lg:items-center justify-between gap-4"
                                    data-oid=".zim5qg"
                                >
                                    {/* Results Counter */}
                                    <div
                                        className="flex flex-col sm:flex-row sm:items-center gap-2"
                                        data-oid="dhcjl9n"
                                    >
                                        <span
                                            className="text-xl font-bold text-gray-800"
                                            data-oid="e_2nn6s"
                                        >
                                            {filterLoading ? (
                                                <span className="flex items-center gap-2">
                                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[hsl(196,80%,45%)]"></div>
                                                    Filtering...
                                                </span>
                                            ) : (
                                                `${filteredJobs.length.toLocaleString()} Jobs Found`
                                            )}
                                        </span>
                                        {(searchQuery || searchLocation) && (
                                            <span
                                                className="text-sm text-gray-600 bg-blue-50 px-3 py-1 rounded-full"
                                                data-oid="sfhyj-p"
                                            >
                                                for "{searchQuery}"{' '}
                                                {searchLocation && `in ${searchLocation}`}
                                            </span>
                                        )}
                                        
                                        {/* Active Filters Summary */}
                                        {(filters.jobType || filters.employmentType || filters.experienceLevel || 
                                          filters.salaryRange || filters.companyType || filters.skills || 
                                          filters.location !== 'all' || selectedCategory !== 'all') && (
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {filters.jobType && (
                                                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                                                        {filters.jobType}
                                                    </span>
                                                )}
                                                {filters.employmentType && (
                                                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                                                        {filters.employmentType}
                                                    </span>
                                                )}
                                                {filters.experienceLevel && (
                                                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                                                        {filters.experienceLevel}
                                                    </span>
                                                )}
                                                {filters.salaryRange && (
                                                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                                                        {filters.salaryRange} LPA
                                                    </span>
                                                )}
                                                {filters.companyType && (
                                                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                                                        {filters.companyType}
                                                    </span>
                                                )}
                                                {filters.skills && (
                                                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                                                        Skills: {filters.skills.split(',').length} selected
                                                    </span>
                                                )}
                                                {filters.location !== 'all' && (
                                                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                                                        {filters.location}
                                                    </span>
                                                )}
                                                {selectedCategory !== 'all' && (
                                                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                                                        {selectedCategory.replace('-', ' ')}
                                            </span>
                                                )}
                                            </div>
                                        )}
                                    </div>

                                    <div
                                        className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
                                        data-oid="eryjf.4"
                                    >
                                        {/* Sort Options */}
                                        <div className="flex items-center gap-2" data-oid="g9kpb6i">
                                            <label
                                                className="text-sm font-medium text-gray-700 whitespace-nowrap"
                                                data-oid="c:ynklt"
                                            >
                                                Sort by:
                                            </label>
                                            <select
                                                value={sortBy}
                                                onChange={(e) => setSortBy(e.target.value)}
                                                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent bg-white min-w-[120px]"
                                                data-oid=".-q5.3j"
                                            >
                                                <option value="relevance" data-oid="7f--jr:">
                                                    Relevance
                                                </option>
                                                <option value="date" data-oid="wbb-1q0">
                                                    Date Posted
                                                </option>
                                                <option value="salary" data-oid="u1zv603">
                                                    Salary
                                                </option>
                                                <option value="company" data-oid="7nr61n3">
                                                    Company
                                                </option>
                                            </select>
                                        </div>

                                        {/* View Toggle */}
                                        <div
                                            className="flex items-center bg-gray-100 rounded-lg p-1"
                                            data-oid="w-42di2"
                                        >
                                            <button
                                                onClick={() => setViewMode('list')}
                                                className={`p-2 rounded-md transition-all duration-200 ${
                                                    viewMode === 'list'
                                                        ? 'bg-white text-[hsl(196,80%,45%)] shadow-sm'
                                                        : 'text-gray-600 hover:text-gray-800'
                                                }`}
                                                title="List View"
                                                data-oid="z3ciaq-"
                                            >
                                                <svg
                                                    className="h-4 w-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    data-oid="w7vs4tr"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M4 6h16M4 10h16M4 14h16M4 18h16"
                                                        data-oid="e5heror"
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
                                                data-oid="-vjg8j1"
                                            >
                                                <svg
                                                    className="h-4 w-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    data-oid="m47s_kh"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                                        data-oid="k7.z-i_"
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
                                data-oid="w-i1s-u"
                            >
                                <div
                                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                                    data-oid="5hberio"
                                >
                                    <div className="flex items-start gap-4" data-oid="hm1bqfr">
                                        <div
                                            className="bg-[hsl(196,80%,45%)] p-3 rounded-full flex-shrink-0"
                                            data-oid="hqpn_5z"
                                        >
                                            <svg
                                                className="h-6 w-6 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="ftgzdn_"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M15 17h5l-5 5v-5z"
                                                    data-oid="90:ze3w"
                                                />

                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M4 19h6v-2H4v2zM4 15h8v-2H4v2zM4 11h10V9H4v2zM4 7h12V5H4v2z"
                                                    data-oid="_47w82b"
                                                />
                                            </svg>
                                        </div>
                                        <div data-oid="w7p_bi-">
                                            <h3
                                                className="text-lg font-semibold text-gray-800 mb-1"
                                                data-oid="xuxtpxl"
                                            >
                                                Get Job Alerts
                                            </h3>
                                            <p className="text-gray-600 text-sm" data-oid="rg2..uk">
                                                Never miss a job opportunity that matches your
                                                profile
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        className="px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                                        data-oid="qnb-1.1"
                                    >
                                        Create Alert
                                    </button>
                                </div>
                            </div>

                            {/* Job Cards Container */}
                            <div className="space-y-6" data-oid="ptslt8l">
                                {error ? (
                                    <div className="text-center py-16" data-oid="error-state">
                                        <div className="text-red-500 mb-4">
                                            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Unable to Load Jobs</h3>
                                        <p className="text-gray-600 mb-4">{error}</p>
                                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                            <button
                                                onClick={() => loadJobs()}
                                                className="px-6 py-2 bg-[hsl(196,80%,45%)] text-white rounded-lg hover:bg-[hsl(196,80%,40%)] transition-colors duration-200 font-medium"
                                            >
                                                Try Again
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setError(null);
                                                    window.location.reload();
                                                }}
                                                className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 font-medium"
                                            >
                                                Refresh Page
                                            </button>
                                        </div>
                                    </div>
                                ) : isLoading ? (
                                    <div className="text-center py-16" data-oid="88afc--">
                                        <div
                                            className="animate-spin rounded-full h-12 w-12 border-b-2 border-[hsl(196,80%,45%)] mx-auto"
                                            data-oid="cliswb9"
                                        ></div>
                                        <p className="mt-4 text-gray-600" data-oid="f8gg3cr">
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
                                            data-oid="2e2rne6"
                                        >
                                            {filteredJobs.slice(0, visibleJobs).map((job) => (
                                                <JobCard
                                                    key={job.id}
                                                    job={job}
                                                    viewMode={viewMode}
                                                    data-oid="pjsr1l4"
                                                />
                                            ))}
                                        </div>

                                        {/* Load More Button */}
                                        {visibleJobs < filteredJobs.length && (
                                            <div className="text-center py-8" data-oid="vn.xunx">
                                                <button
                                                    onClick={loadMoreJobs}
                                                    className="px-8 py-3 bg-white border-2 border-[hsl(196,80%,45%)] text-[hsl(196,80%,45%)] rounded-lg font-medium hover:bg-[hsl(196,80%,45%)] hover:text-white transition-all duration-300 transform hover:scale-105"
                                                    data-oid="u3i.byp"
                                                >
                                                    Load More Jobs (
                                                    {filteredJobs.length - visibleJobs} remaining)
                                                </button>
                                            </div>
                                        )}

                                        {/* Pagination Controls */}
                                        {pagination.pages > 1 && (
                                            <div className="flex justify-center items-center space-x-4 mt-8">
                                                <button
                                                    onClick={() => {
                                                        const newPage = pagination.page - 1;
                                                        setPagination(prev => ({ ...prev, page: newPage }));
                                                        loadJobs(newPage);
                                                    }}
                                                    disabled={pagination.page <= 1}
                                                    className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                                                >
                                                    Previous
                                                </button>
                                                
                                                <span className="text-sm text-gray-600">
                                                    Page {pagination.page} of {pagination.pages}
                                                </span>
                                                
                                                <button
                                                    onClick={() => {
                                                        const newPage = pagination.page + 1;
                                                        setPagination(prev => ({ ...prev, page: newPage }));
                                                        loadJobs(newPage);
                                                    }}
                                                    disabled={pagination.page >= pagination.pages}
                                                    className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                                                >
                                                    Next
                                                </button>
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <div className="text-center py-16" data-oid="wntbpi9">
                                        <div
                                            className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6"
                                            data-oid="1ugu_5a"
                                        >
                                            <svg
                                                className="h-12 w-12 text-gray-400"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                data-oid="yl6gd38"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                    data-oid="2lu5:sl"
                                                />
                                            </svg>
                                        </div>
                                        <h3
                                            className="text-xl font-medium text-gray-900 mb-2"
                                            data-oid="jcj0mns"
                                        >
                                            No jobs found
                                        </h3>
                                        <p className="text-gray-600 mb-6" data-oid="dbqq3rg">
                                            Try adjusting your filters or search criteria
                                        </p>
                                        <button
                                            onClick={resetFilters}
                                            className="px-6 py-3 bg-[hsl(196,80%,45%)] text-white rounded-lg hover:bg-[hsl(196,80%,40%)] transition-colors duration-200 font-medium"
                                            data-oid="mb2lett"
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

export default function JobsPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-white text-gray-800 font-sans">
                <MainNavbar />
                <div className="flex items-center justify-center min-h-screen">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[hsl(196,80%,45%)] mx-auto"></div>
                        <p className="mt-4 text-lg text-gray-600">Loading jobs...</p>
                    </div>
                </div>
            </div>
        }>
            <JobsPageContent />
        </Suspense>
    );
}
