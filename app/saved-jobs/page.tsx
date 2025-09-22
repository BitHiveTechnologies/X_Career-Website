'use client';

import JobCard from '@/components/JobCard';
import MainNavbar from '@/components/mainNavbar';
import { ApiResponse, FrontendJob, Job, jobService, JobsResponse } from '@/lib/api';
import { useAuth } from '@/lib/auth/AuthContextBackend';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type SavedItem = FrontendJob & {
    savedDate: string;
    tags: string[];
    notes: string;
};

// Convert SavedItem to FrontendJob
const convertSavedItemToFrontendJob = (item: SavedItem): FrontendJob => {
    if (item.type === 'internship') {
        // Convert Internship to FrontendJob
        return {
            id: item.id.toString(),
            title: item.title,
            company: item.company,
            description: item.description || '',
            type: 'internship' as const,
            eligibility: {
                qualifications: [],
                streams: [],
                passoutYears: [],
                minCGPA: 0
            },
            applicationDeadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
            applicationLink: '#',
            location: item.isRemote ? 'remote' : 'onsite',
            salary: item.stipend,
            skills: item.skills || [],
            isActive: true,
            createdAt: item.postedDate || new Date().toISOString(),
            // FrontendJob specific properties
            isFeatured: item.isFeatured || false,
            isUrgent: item.isUrgent || false,
            applicantCount: item.applicantCount || 0,
            companyLogo: item.companyLogo,
            companySize: item.companySize || '',
            industry: item.industry || '',
            benefits: item.benefits || [],
            companyType: item.companyType || 'Startup',
            experienceRequired: 'Fresher',
            jobType: 'Internship',
            employmentType: 'Internship',
            postedDate: item.postedDate || new Date().toISOString().split('T')[0],
            isRemote: item.isRemote || false,
        };
    } else {
        // Convert MockJob to FrontendJob
        return {
            id: item.id.toString(),
            title: item.title,
            company: item.company,
            description: item.description,
            type: 'job' as const,
            eligibility: {
                qualifications: [],
                streams: [],
                passoutYears: [],
                minCGPA: 0
            },
            applicationDeadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
            applicationLink: '#',
            location: item.isRemote ? 'remote' : 'onsite',
            salary: (item as any).type === 'internship' ? (item as any).stipend : (item as any).salary,
            skills: item.skills || [],
            isActive: true,
            createdAt: item.postedDate || new Date().toISOString(),
            // FrontendJob specific properties
            isFeatured: item.isFeatured || false,
            isUrgent: item.isUrgent || false,
            applicantCount: item.applicantCount || 0,
            companyLogo: item.companyLogo,
            companySize: item.companySize || '',
            industry: item.industry || '',
            benefits: item.benefits || [],
            companyType: item.companyType || 'Startup',
            experienceRequired: (item as any).type === 'internship' ? 'Fresher' : (item as any).experienceRequired || '',
            jobType: (item as any).type === 'internship' ? 'Internship' : (item as any).jobType || '',
            employmentType: (item as any).type === 'internship' ? 'Internship' : (item as any).employmentType || '',
            postedDate: item.postedDate || new Date().toISOString().split('T')[0],
            isRemote: item.isRemote || false,
        };
    }
};

export default function SavedJobsPage() {
    const { isAuthenticated } = useAuth();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<'all' | 'jobs' | 'internships'>('all');
    const [sortBy, setSortBy] = useState<'recent' | 'alphabetical' | 'company'>('recent');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');

    // Saved items from backend API
    const [savedItems, setSavedItems] = useState<SavedItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Load saved jobs from backend API
    const loadSavedJobs = async () => {
        try {
            setLoading(true);
            setError(null);
            
            // For now, we'll load all jobs and mark them as saved
            // In a real implementation, there would be a specific saved jobs endpoint
            const response: ApiResponse<JobsResponse> = await jobService.getJobs();
            
            if (response.success && response.data) {
                // Transform backend jobs to saved items format
                const transformedSavedItems: SavedItem[] = response.data.jobs.map((job: Job) => ({
                    id: job.id,
                    title: job.title,
                    company: job.company,
                    description: job.description,
                    type: job.type,
                    eligibility: {
                        qualifications: [],
                        streams: [],
                        passoutYears: [],
                    },
                    applicationDeadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
                    applicationLink: '#',
                    location: job.location,
                    salary: job.salary || '',
                    skills: job.skills || [],
                    isActive: job.isActive,
                    createdAt: job.createdAt,
                    isFeatured: false,
                    isUrgent: false,
                    applicantCount: 0,
                    companyLogo: '',
                    companySize: '',
                    industry: '',
                    benefits: [],
                    companyType: 'Startup',
                    experienceRequired: '',
                    jobType: '',
                    employmentType: '',
                    postedDate: job.createdAt?.split('T')[0] || new Date().toISOString().split('T')[0],
                    isRemote: job.location === 'remote',
                    savedDate: new Date().toISOString().split('T')[0],
                    tags: job.skills || [],
                    notes: '',
                }));
                
                setSavedItems(transformedSavedItems);
            } else {
                setError('Failed to load saved jobs');
            }
        } catch (err) {
            console.error('Error loading saved jobs:', err);
            setError('Failed to load saved jobs');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login?redirect=/saved-jobs');
        } else {
            loadSavedJobs();
        }
    }, [isAuthenticated, router]);

    const allTags = Array.from(new Set(savedItems.flatMap((item) => item.tags)));

    const filteredItems = savedItems.filter((item) => {
        const matchesTab =
            activeTab === 'all' ||
            (activeTab === 'jobs' && (item as any).type !== 'internship') ||
            (activeTab === 'internships' && (item as any).type === 'internship');

        const matchesSearch =
            searchQuery === '' ||
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.company.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesTags =
            selectedTags.length === 0 || selectedTags.some((tag) => item.tags.includes(tag));

        return matchesTab && matchesSearch && matchesTags;
    });

    const sortedItems = [...filteredItems].sort((a, b) => {
        switch (sortBy) {
            case 'recent':
                return new Date(b.savedDate).getTime() - new Date(a.savedDate).getTime();
            case 'alphabetical':
                return a.title.localeCompare(b.title);
            case 'company':
                return a.company.localeCompare(b.company);
            default:
                return 0;
        }
    });

    const handleRemoveItem = (itemId: string) => {
        setSavedItems((prev) => prev.filter((item) => item.id !== itemId));
    };

    const handleAddTag = (itemId: string, newTag: string) => {
        if (newTag.trim()) {
            setSavedItems((prev) =>
                prev.map((item) =>
                    item.id === itemId ? { ...item, tags: [...item.tags, newTag.trim()] } : item,
                ),
            );
        }
    };

    const handleRemoveTag = (itemId: string, tagToRemove: string) => {
        setSavedItems((prev) =>
            prev.map((item) =>
                item.id === itemId
                    ? { ...item, tags: item.tags.filter((tag) => tag !== tagToRemove) }
                    : item,
            ),
        );
    };

    const handleUpdateNotes = (itemId: string, notes: string) => {
        setSavedItems((prev) =>
            prev.map((item) => (item.id === itemId ? { ...item, notes } : item)),
        );
    };

    const toggleTagFilter = (tag: string) => {
        setSelectedTags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
        );
    };

    if (!isAuthenticated) {
        return null;
    }

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-[hsl(210,50%,98%)] to-[hsl(196,60%,95%)]"
            data-oid="1b:_r9_"
        >
            <MainNavbar data-oid="sjadu6m" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-oid="_ly3c0i">
                {/* Header */}
                <div
                    className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 mb-8"
                    data-oid="57jh226"
                >
                    <div
                        className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
                        data-oid="079mksf"
                    >
                        <div data-oid=".atubye">
                            <h1
                                className="text-3xl font-bold text-gray-800 mb-2"
                                data-oid="z6orbj9"
                            >
                                Saved Jobs & Internships
                            </h1>
                            <p className="text-gray-600" data-oid="0ef9r6o">
                                You have {savedItems.length} saved opportunities •{' '}
                                {filteredItems.length} matching your filters
                            </p>
                        </div>

                        <div className="flex items-center gap-4" data-oid="i:w51hd">
                            <div className="flex bg-gray-100 rounded-lg p-1" data-oid="ie7.0kx">
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-[hsl(196,80%,45%)]' : 'text-gray-600'}`}
                                    data-oid="3epce.z"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="u03ac1t"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 10h16M4 14h16M4 18h16"
                                            data-oid="_l6d_wn"
                                        />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-[hsl(196,80%,45%)]' : 'text-gray-600'}`}
                                    data-oid="8ne84-x"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="vq9w25x"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                            data-oid="0-7k9at"
                                        />
                                    </svg>
                                </button>
                            </div>

                            <Link
                                href="/jobs"
                                className="px-6 py-2 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 shadow-lg"
                                data-oid="c3_kqec"
                            >
                                Find More Jobs
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-4 gap-8" data-oid="h4.hrk0">
                    {/* Filters Sidebar */}
                    <div className="lg:col-span-1" data-oid="0r9zr57">
                        <div
                            className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6 sticky top-8"
                            data-oid="_lzmxip"
                        >
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-4"
                                data-oid="dkxuj9o"
                            >
                                Filters
                            </h3>

                            {/* Search */}
                            <div className="mb-6" data-oid="18_-pn5">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="pik.v5a"
                                >
                                    Search
                                </label>
                                <div className="relative" data-oid="h:2eq3f">
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search jobs..."
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                                        data-oid="e6gz9-w"
                                    />

                                    <svg
                                        className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="0a5whyv"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            data-oid="277txiu"
                                        />
                                    </svg>
                                </div>
                            </div>

                            {/* Type Filter */}
                            <div className="mb-6" data-oid="3x4q52o">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="3zy9xo3"
                                >
                                    Type
                                </label>
                                <div className="space-y-2" data-oid="wqqv1wa">
                                    {[
                                        { id: 'all', label: 'All', count: savedItems.length },
                                        {
                                            id: 'jobs',
                                            label: 'Jobs',
                                            count: savedItems.filter((item) => (item as any).type !== 'internship')
                                                .length,
                                        },
                                        {
                                            id: 'internships',
                                            label: 'Internships',
                                            count: savedItems.filter((item) => (item as any).type === 'internship')
                                                .length,
                                        },
                                    ].map((tab) => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id as any)}
                                            className={`w-full text-left px-3 py-2 rounded-lg transition-all ${
                                                activeTab === tab.id
                                                    ? 'bg-[hsl(196,80%,45%)] text-white'
                                                    : 'text-gray-700 hover:bg-gray-100'
                                            }`}
                                            data-oid="-opm9.r"
                                        >
                                            <span
                                                className="flex justify-between items-center"
                                                data-oid="tj.boa:"
                                            >
                                                {tab.label}
                                                <span
                                                    className={`text-xs px-2 py-1 rounded-full ${
                                                        activeTab === tab.id
                                                            ? 'bg-white/20'
                                                            : 'bg-gray-200'
                                                    }`}
                                                    data-oid="qp5g58x"
                                                >
                                                    {tab.count}
                                                </span>
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Sort By */}
                            <div className="mb-6" data-oid="0sv5m2f">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="fiffzoi"
                                >
                                    Sort By
                                </label>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value as any)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                                    data-oid="uixx:28"
                                >
                                    <option value="recent" data-oid="xn_s:4d">
                                        Recently Saved
                                    </option>
                                    <option value="alphabetical" data-oid="1r3w7kk">
                                        Alphabetical
                                    </option>
                                    <option value="company" data-oid="qfc5r61">
                                        Company Name
                                    </option>
                                </select>
                            </div>

                            {/* Tags Filter */}
                            <div data-oid="9p.pzbq">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="3e-70lm"
                                >
                                    Tags
                                </label>
                                <div className="flex flex-wrap gap-2" data-oid="7cxtlgy">
                                    {allTags.map((tag) => (
                                        <button
                                            key={tag}
                                            onClick={() => toggleTagFilter(tag)}
                                            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                                                selectedTags.includes(tag)
                                                    ? 'bg-[hsl(196,80%,45%)] text-white'
                                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                            data-oid="gohzg3u"
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3" data-oid="a1944sg">
                        {sortedItems.length === 0 ? (
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-12 text-center"
                                data-oid="lvvoz:4"
                            >
                                <div className="max-w-md mx-auto" data-oid="t6qk6hs">
                                    <svg
                                        className="h-24 w-24 mx-auto mb-6 text-gray-300"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="uhck7u9"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                            data-oid="23.3d60"
                                        />
                                    </svg>
                                    <h3
                                        className="text-xl font-semibold text-gray-800 mb-2"
                                        data-oid="qichszy"
                                    >
                                        {savedItems.length === 0
                                            ? 'No saved jobs yet'
                                            : 'No jobs match your filters'}
                                    </h3>
                                    <p className="text-gray-600 mb-6" data-oid="1s.da1q">
                                        {savedItems.length === 0
                                            ? 'Start saving jobs and internships that interest you to build your personal collection.'
                                            : 'Try adjusting your filters to see more results.'}
                                    </p>
                                    <div
                                        className="flex flex-col sm:flex-row gap-4 justify-center"
                                        data-oid="j-n:80r"
                                    >
                                        <Link
                                            href="/jobs"
                                            className="px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 shadow-lg"
                                            data-oid="srrbgb3"
                                        >
                                            Browse Jobs
                                        </Link>
                                        <Link
                                            href="/internships"
                                            className="px-6 py-3 border border-[hsl(196,80%,45%)] text-[hsl(196,80%,45%)] rounded-lg font-medium hover:bg-[hsl(196,80%,45%)]/10 transition-all duration-300"
                                            data-oid="h5vqila"
                                        >
                                            Browse Internships
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div
                                className={`space-y-6 ${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-6 space-y-0' : ''}`}
                                data-oid="kb5ylyn"
                            >
                                {sortedItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 overflow-hidden"
                                        data-oid="s3-p7lu"
                                    >
                                        {/* Saved Item Header */}
                                        <div
                                            className="px-6 py-4 bg-gradient-to-r from-[hsl(196,80%,45%)]/10 to-[hsl(175,70%,41%)]/10 border-b border-gray-200"
                                            data-oid="cvqrq-h"
                                        >
                                            <div
                                                className="flex items-center justify-between"
                                                data-oid="pft_tzt"
                                            >
                                                <div
                                                    className="flex items-center gap-3"
                                                    data-oid="i6-nuyk"
                                                >
                                                    <div
                                                        className="w-8 h-8 bg-[hsl(196,80%,45%)] rounded-full flex items-center justify-center text-white text-sm font-bold"
                                                        data-oid="pm0f038"
                                                    >
                                                        💾
                                                    </div>
                                                    <div data-oid="s-ns:g-">
                                                        <p
                                                            className="text-sm font-medium text-gray-800"
                                                            data-oid="5qrshe9"
                                                        >
                                                            Saved on{' '}
                                                            {new Date(
                                                                item.savedDate,
                                                            ).toLocaleDateString()}
                                                        </p>
                                                        <div
                                                            className="flex flex-wrap gap-1 mt-1"
                                                            data-oid="hsz..u3"
                                                        >
                                                            {item.tags.map((tag) => (
                                                                <span
                                                                    key={tag}
                                                                    className="px-2 py-1 bg-[hsl(196,80%,45%)] text-white text-xs rounded-full"
                                                                    data-oid="qxh5:kx"
                                                                >
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => handleRemoveItem(item.id)}
                                                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                                    title="Remove from saved"
                                                    data-oid="k.wy.dj"
                                                >
                                                    <svg
                                                        className="h-5 w-5"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        data-oid="syvba0i"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                            data-oid="z_7ze99"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>

                                        {/* Job Card */}
                                        <div className="p-6" data-oid="oh3rpg-">
                                            <JobCard
                                                job={convertSavedItemToFrontendJob(item)}
                                                viewMode={viewMode}
                                                isInternship={(item as any).type === 'internship'}
                                                data-oid="n1mo8o9"
                                            />
                                        </div>

                                        {/* Notes Section */}
                                        {item.notes && (
                                            <div className="px-6 pb-6" data-oid="wbbrvvg">
                                                <div
                                                    className="bg-yellow-50 border border-yellow-200 rounded-lg p-4"
                                                    data-oid="s4d484o"
                                                >
                                                    <div
                                                        className="flex items-start gap-3"
                                                        data-oid="8ald0_p"
                                                    >
                                                        <svg
                                                            className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            data-oid="lq4h6qo"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                                data-oid="2elkmbe"
                                                            />
                                                        </svg>
                                                        <div className="flex-1" data-oid="5uk6wxr">
                                                            <p
                                                                className="text-sm font-medium text-yellow-800 mb-1"
                                                                data-oid="qpfw2p5"
                                                            >
                                                                Your Notes
                                                            </p>
                                                            <p
                                                                className="text-sm text-yellow-700"
                                                                data-oid="pb1w34."
                                                            >
                                                                {item.notes}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
