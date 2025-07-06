'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/auth/AuthContext';
import { useRouter } from 'next/navigation';
import MainNavbar from '@/components/mainNavbar';
import JobCard from '@/components/JobCard';
import { mockJobs, mockInternships } from '@/lib/mockData';
import { Job } from '@/app/jobs/page';
import { Internship } from '@/lib/mockData';
import Link from 'next/link';

type SavedItem = (Job | Internship) & {
    savedDate: string;
    isInternship: boolean;
    tags: string[];
    notes: string;
};

export default function SavedJobsPage() {
    const { isAuthenticated } = useAuth();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<'all' | 'jobs' | 'internships'>('all');
    const [sortBy, setSortBy] = useState<'recent' | 'alphabetical' | 'company'>('recent');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');

    // Mock saved items (in real app, this would come from backend)
    const [savedItems, setSavedItems] = useState<SavedItem[]>([
        {
            ...mockJobs[0],
            savedDate: '2024-01-20',
            isInternship: false,
            tags: ['Frontend', 'React', 'Remote'],
            notes: 'Great company culture, good for career growth',
        },
        {
            ...mockJobs[1],
            savedDate: '2024-01-19',
            isInternship: false,
            tags: ['Backend', 'Java', 'Fintech'],
            notes: 'Competitive salary, interesting tech stack',
        },
        {
            ...mockInternships[0],
            savedDate: '2024-01-18',
            isInternship: true,
            tags: ['Internship', 'Frontend', 'Learning'],
            notes: 'Perfect for gaining experience in food tech',
        },
        {
            ...mockJobs[3],
            savedDate: '2024-01-17',
            isInternship: false,
            tags: ['Data Science', 'Python', 'ML'],
            notes: 'Dream role in data science',
        },
        {
            ...mockInternships[2],
            savedDate: '2024-01-16',
            isInternship: true,
            tags: ['Internship', 'Data Science', 'Analytics'],
            notes: 'Great learning opportunity',
        },
    ]);

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login?redirect=/saved-jobs');
        }
    }, [isAuthenticated, router]);

    const allTags = Array.from(new Set(savedItems.flatMap((item) => item.tags)));

    const filteredItems = savedItems.filter((item) => {
        const matchesTab =
            activeTab === 'all' ||
            (activeTab === 'jobs' && !item.isInternship) ||
            (activeTab === 'internships' && item.isInternship);

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

    const handleRemoveItem = (itemId: number) => {
        setSavedItems((prev) => prev.filter((item) => item.id !== itemId));
    };

    const handleAddTag = (itemId: number, newTag: string) => {
        if (newTag.trim()) {
            setSavedItems((prev) =>
                prev.map((item) =>
                    item.id === itemId ? { ...item, tags: [...item.tags, newTag.trim()] } : item,
                ),
            );
        }
    };

    const handleRemoveTag = (itemId: number, tagToRemove: string) => {
        setSavedItems((prev) =>
            prev.map((item) =>
                item.id === itemId
                    ? { ...item, tags: item.tags.filter((tag) => tag !== tagToRemove) }
                    : item,
            ),
        );
    };

    const handleUpdateNotes = (itemId: number, notes: string) => {
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
            data-oid="t_1d6tp"
        >
            <MainNavbar data-oid="s0lvdy3" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-oid="sdszmc_">
                {/* Header */}
                <div
                    className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 mb-8"
                    data-oid="0027fnv"
                >
                    <div
                        className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
                        data-oid="k0fgui-"
                    >
                        <div data-oid="i3-ojf:">
                            <h1
                                className="text-3xl font-bold text-gray-800 mb-2"
                                data-oid="bnbswo:"
                            >
                                Saved Jobs & Internships
                            </h1>
                            <p className="text-gray-600" data-oid="s7oh1ol">
                                You have {savedItems.length} saved opportunities •{' '}
                                {filteredItems.length} matching your filters
                            </p>
                        </div>

                        <div className="flex items-center gap-4" data-oid="xr5i:uv">
                            <div className="flex bg-gray-100 rounded-lg p-1" data-oid="m03lj0w">
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-[hsl(196,80%,45%)]' : 'text-gray-600'}`}
                                    data-oid="9d8sm7f"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="_ud45r4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 10h16M4 14h16M4 18h16"
                                            data-oid="s0xq:3x"
                                        />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-[hsl(196,80%,45%)]' : 'text-gray-600'}`}
                                    data-oid="dzu3q:v"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid=":rdz3gm"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                            data-oid="f3ob:ys"
                                        />
                                    </svg>
                                </button>
                            </div>

                            <Link
                                href="/jobs"
                                className="px-6 py-2 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 shadow-lg"
                                data-oid="xjh:k-j"
                            >
                                Find More Jobs
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-4 gap-8" data-oid="pz4tj5o">
                    {/* Filters Sidebar */}
                    <div className="lg:col-span-1" data-oid="3z4kohm">
                        <div
                            className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6 sticky top-8"
                            data-oid=":tec05k"
                        >
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-4"
                                data-oid=".6vtmh2"
                            >
                                Filters
                            </h3>

                            {/* Search */}
                            <div className="mb-6" data-oid="0-6ipl2">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="7ktvr80"
                                >
                                    Search
                                </label>
                                <div className="relative" data-oid="j8b-0a8">
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search jobs..."
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                                        data-oid="v9hsdr:"
                                    />

                                    <svg
                                        className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="q:j068w"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            data-oid="iq-hgcx"
                                        />
                                    </svg>
                                </div>
                            </div>

                            {/* Type Filter */}
                            <div className="mb-6" data-oid="k7x6f0d">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="s::c2kp"
                                >
                                    Type
                                </label>
                                <div className="space-y-2" data-oid="g23g2jz">
                                    {[
                                        { id: 'all', label: 'All', count: savedItems.length },
                                        {
                                            id: 'jobs',
                                            label: 'Jobs',
                                            count: savedItems.filter((item) => !item.isInternship)
                                                .length,
                                        },
                                        {
                                            id: 'internships',
                                            label: 'Internships',
                                            count: savedItems.filter((item) => item.isInternship)
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
                                            data-oid="2kbaeha"
                                        >
                                            <span
                                                className="flex justify-between items-center"
                                                data-oid=":ssdd6f"
                                            >
                                                {tab.label}
                                                <span
                                                    className={`text-xs px-2 py-1 rounded-full ${
                                                        activeTab === tab.id
                                                            ? 'bg-white/20'
                                                            : 'bg-gray-200'
                                                    }`}
                                                    data-oid="vvt8pmc"
                                                >
                                                    {tab.count}
                                                </span>
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Sort By */}
                            <div className="mb-6" data-oid="zabf-hz">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="zs.wlhf"
                                >
                                    Sort By
                                </label>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value as any)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                                    data-oid="hlj2ajk"
                                >
                                    <option value="recent" data-oid="su:k53q">
                                        Recently Saved
                                    </option>
                                    <option value="alphabetical" data-oid="l_qg3_i">
                                        Alphabetical
                                    </option>
                                    <option value="company" data-oid="g4l79v5">
                                        Company Name
                                    </option>
                                </select>
                            </div>

                            {/* Tags Filter */}
                            <div data-oid="sd3-9fr">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="y022x3i"
                                >
                                    Tags
                                </label>
                                <div className="flex flex-wrap gap-2" data-oid="lmq88zu">
                                    {allTags.map((tag) => (
                                        <button
                                            key={tag}
                                            onClick={() => toggleTagFilter(tag)}
                                            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                                                selectedTags.includes(tag)
                                                    ? 'bg-[hsl(196,80%,45%)] text-white'
                                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                            data-oid="2g7bcrg"
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3" data-oid="4ml:rd4">
                        {sortedItems.length === 0 ? (
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-12 text-center"
                                data-oid="82rmn2b"
                            >
                                <div className="max-w-md mx-auto" data-oid="t.ub1_-">
                                    <svg
                                        className="h-24 w-24 mx-auto mb-6 text-gray-300"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="87s4iz."
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                            data-oid="888ziqn"
                                        />
                                    </svg>
                                    <h3
                                        className="text-xl font-semibold text-gray-800 mb-2"
                                        data-oid="_97.5.k"
                                    >
                                        {savedItems.length === 0
                                            ? 'No saved jobs yet'
                                            : 'No jobs match your filters'}
                                    </h3>
                                    <p className="text-gray-600 mb-6" data-oid="ma.tu:y">
                                        {savedItems.length === 0
                                            ? 'Start saving jobs and internships that interest you to build your personal collection.'
                                            : 'Try adjusting your filters to see more results.'}
                                    </p>
                                    <div
                                        className="flex flex-col sm:flex-row gap-4 justify-center"
                                        data-oid="b-qhl8d"
                                    >
                                        <Link
                                            href="/jobs"
                                            className="px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 shadow-lg"
                                            data-oid=".znzhzk"
                                        >
                                            Browse Jobs
                                        </Link>
                                        <Link
                                            href="/internships"
                                            className="px-6 py-3 border border-[hsl(196,80%,45%)] text-[hsl(196,80%,45%)] rounded-lg font-medium hover:bg-[hsl(196,80%,45%)]/10 transition-all duration-300"
                                            data-oid="g35xcc9"
                                        >
                                            Browse Internships
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div
                                className={`space-y-6 ${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-6 space-y-0' : ''}`}
                                data-oid="ydnbfnd"
                            >
                                {sortedItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 overflow-hidden"
                                        data-oid="d2di9nz"
                                    >
                                        {/* Saved Item Header */}
                                        <div
                                            className="px-6 py-4 bg-gradient-to-r from-[hsl(196,80%,45%)]/10 to-[hsl(175,70%,41%)]/10 border-b border-gray-200"
                                            data-oid="75ztaaf"
                                        >
                                            <div
                                                className="flex items-center justify-between"
                                                data-oid="d:9w.e8"
                                            >
                                                <div
                                                    className="flex items-center gap-3"
                                                    data-oid="cj4k4hk"
                                                >
                                                    <div
                                                        className="w-8 h-8 bg-[hsl(196,80%,45%)] rounded-full flex items-center justify-center text-white text-sm font-bold"
                                                        data-oid="muwc1vs"
                                                    >
                                                        💾
                                                    </div>
                                                    <div data-oid=".5c70hh">
                                                        <p
                                                            className="text-sm font-medium text-gray-800"
                                                            data-oid="goct3ey"
                                                        >
                                                            Saved on{' '}
                                                            {new Date(
                                                                item.savedDate,
                                                            ).toLocaleDateString()}
                                                        </p>
                                                        <div
                                                            className="flex flex-wrap gap-1 mt-1"
                                                            data-oid="vmk-v3_"
                                                        >
                                                            {item.tags.map((tag) => (
                                                                <span
                                                                    key={tag}
                                                                    className="px-2 py-1 bg-[hsl(196,80%,45%)] text-white text-xs rounded-full"
                                                                    data-oid="z04f4h."
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
                                                    data-oid=":2x-iw0"
                                                >
                                                    <svg
                                                        className="h-5 w-5"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        data-oid="4vhr9hw"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                            data-oid="7ubphm9"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>

                                        {/* Job Card */}
                                        <div className="p-6" data-oid=":-8b51:">
                                            <JobCard
                                                job={item as Job}
                                                viewMode={viewMode}
                                                isInternship={item.isInternship}
                                                data-oid=":zhen2y"
                                            />
                                        </div>

                                        {/* Notes Section */}
                                        {item.notes && (
                                            <div className="px-6 pb-6" data-oid="muiy8q0">
                                                <div
                                                    className="bg-yellow-50 border border-yellow-200 rounded-lg p-4"
                                                    data-oid="j9al2rs"
                                                >
                                                    <div
                                                        className="flex items-start gap-3"
                                                        data-oid="ziwavp_"
                                                    >
                                                        <svg
                                                            className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            data-oid="4vkui7s"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                                data-oid="y.4bzfv"
                                                            />
                                                        </svg>
                                                        <div className="flex-1" data-oid="s8tkjca">
                                                            <p
                                                                className="text-sm font-medium text-yellow-800 mb-1"
                                                                data-oid="gf4i8_j"
                                                            >
                                                                Your Notes
                                                            </p>
                                                            <p
                                                                className="text-sm text-yellow-700"
                                                                data-oid="pct90o9"
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
