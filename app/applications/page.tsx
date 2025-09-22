'use client';

import { Job, FrontendJob, applicationService, ApiResponse, PaginatedResponse, JobApplication, ApplicationWithJob } from '@/lib/api';
import MainNavbar from '@/components/mainNavbar';
import { useAuth } from '@/lib/auth/AuthContextBackend';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type ApplicationStatus = 'applied' | 'under-review' | 'interview' | 'rejected' | 'accepted' | 'shortlisted' | 'withdrawn';

interface Application {
    id: string;
    job: FrontendJob;
    appliedDate: string;
    status: 'applied' | 'shortlisted' | 'rejected' | 'withdrawn';
    lastUpdated: string;
    applicationMethod: 'quick-apply' | 'full-application' | 'external';
    notes: string;
    interviewDate?: string;
    feedback?: string;
    nextSteps?: string;
}

const statusConfig = {
    applied: {
        label: 'Applied',
        color: 'bg-blue-100 text-blue-800',
        icon: '📝',
        description: 'Application submitted successfully',
    },
    'under-review': {
        label: 'Under Review',
        color: 'bg-yellow-100 text-yellow-800',
        icon: '👀',
        description: 'Application is being reviewed',
    },
    interview: {
        label: 'Interview Scheduled',
        color: 'bg-purple-100 text-purple-800',
        icon: '🎯',
        description: 'Interview round scheduled',
    },
    rejected: {
        label: 'Not Selected',
        color: 'bg-red-100 text-red-800',
        icon: '❌',
        description: 'Application was not successful',
    },
    accepted: {
        label: 'Offer Received',
        color: 'bg-green-100 text-green-800',
        icon: '🎉',
        description: 'Congratulations! Offer received',
    },
    shortlisted: {
        label: 'Shortlisted',
        color: 'bg-green-100 text-green-800',
        icon: '✅',
        description: 'Application has been shortlisted',
    },
    withdrawn: {
        label: 'Withdrawn',
        color: 'bg-gray-100 text-gray-800',
        icon: '↩️',
        description: 'Application has been withdrawn',
    },
};

export default function ApplicationsPage() {
    const { isAuthenticated } = useAuth();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<'all' | ApplicationStatus>('all');
    const [sortBy, setSortBy] = useState<'recent' | 'status' | 'company'>('recent');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);

    // Applications data from backend API
    const [applications, setApplications] = useState<Application[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Load applications from backend API
    const loadApplications = async () => {
        try {
            setLoading(true);
            setError(null);
            
            const response: ApiResponse<PaginatedResponse<ApplicationWithJob>> = await applicationService.getMyApplications();
            
            if (response.success && response.data) {
                // Transform backend applications to frontend format
                const transformedApplications: Application[] = response.data.data.map((app: ApplicationWithJob) => ({
                    id: app.id,
                    job: {
                        id: app.job?.id || '',
                        title: app.job?.title || '',
                        company: app.job?.company || '',
                        description: 'Job description not available',
                        type: 'job' as const,
                        eligibility: {
                            qualifications: [],
                            streams: [],
                            passoutYears: [],
                        },
                        applicationDeadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days from now
                        applicationLink: '#',
                        location: 'remote' as const,
                        salary: '',
                        skills: [],
                        isActive: true,
                        createdAt: new Date().toISOString(),
                        // FrontendJob additional properties
                        isFeatured: false,
                        isUrgent: false,
                        applicantCount: 0,
                        companyLogo: '',
                        companySize: '',
                        industry: '',
                        benefits: [],
                        companyType: 'Startup' as const,
                        experienceRequired: '',
                        jobType: '',
                        employmentType: '',
                        postedDate: new Date().toISOString().split('T')[0],
                        isRemote: true,
                    },
                    appliedDate: app.appliedAt?.split('T')[0] || new Date().toISOString().split('T')[0],
                    status: app.status as 'applied' | 'shortlisted' | 'rejected' | 'withdrawn',
                    lastUpdated: app.appliedAt?.split('T')[0] || new Date().toISOString().split('T')[0],
                    applicationMethod: 'full-application',
                    notes: '',
                }));
                
                setApplications(transformedApplications);
            } else {
                setError('Failed to load applications');
            }
        } catch (err) {
            console.error('Error loading applications:', err);
            setError('Failed to load applications');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login?redirect=/applications');
        } else {
            loadApplications();
        }
    }, [isAuthenticated, router]);

    const filteredApplications = applications.filter((app) => {
        const matchesTab = activeTab === 'all' || app.status === activeTab;
        const matchesSearch =
            searchQuery === '' ||
            app.job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            app.job.company.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesTab && matchesSearch;
    });

    const sortedApplications = [...filteredApplications].sort((a, b) => {
        switch (sortBy) {
            case 'recent':
                return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
            case 'status':
                return a.status.localeCompare(b.status);
            case 'company':
                return a.job.company.localeCompare(b.job.company);
            default:
                return 0;
        }
    });

    const getStatusCounts = () => {
        const counts = applications.reduce(
            (acc, app) => {
                acc[app.status] = (acc[app.status] || 0) + 1;
                return acc;
            },
            {} as Record<ApplicationStatus, number>,
        );
        return counts;
    };

    const statusCounts = getStatusCounts();

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    const getTimeAgo = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - date.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1) return '1 day ago';
        if (diffDays < 7) return `${diffDays} days ago`;
        if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
        return `${Math.ceil(diffDays / 30)} months ago`;
    };

    if (!isAuthenticated) {
        return null;
    }

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-[hsl(210,50%,98%)] to-[hsl(196,60%,95%)]"
            data-oid="-tfxd48"
        >
            <MainNavbar data-oid="7tcfegg" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-oid="x18prkb">
                {/* Header */}
                <div
                    className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 mb-8"
                    data-oid=":-e7:yf"
                >
                    <div
                        className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
                        data-oid="w9f0n.-"
                    >
                        <div data-oid="m7ersd1">
                            <h1
                                className="text-3xl font-bold text-gray-800 mb-2"
                                data-oid="use-g4x"
                            >
                                My Applications
                            </h1>
                            <p className="text-gray-600" data-oid="fwlr5mw">
                                Track your job and internship applications • {applications.length}{' '}
                                total applications
                            </p>
                        </div>

                        <div className="flex items-center gap-4" data-oid="xc6n6-x">
                            <Link
                                href="/jobs"
                                className="px-6 py-2 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 shadow-lg"
                                data-oid="4:xqq1p"
                            >
                                Apply to More Jobs
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8"
                    data-oid=".2xjg0y"
                >
                    <div
                        className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-4 text-center"
                        data-oid="8a:7act"
                    >
                        <div className="text-2xl font-bold text-gray-800" data-oid="pdlfbby">
                            {applications.length}
                        </div>
                        <div className="text-sm text-gray-600" data-oid="ly44idu">
                            Total Applied
                        </div>
                    </div>
                    {Object.entries(statusConfig).map(([status, config]) => (
                        <div
                            key={status}
                            className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-4 text-center"
                            data-oid="t65_vbz"
                        >
                            <div className="text-xl mb-1" data-oid="pjsl9g.">
                                {config.icon}
                            </div>
                            <div className="text-2xl font-bold text-gray-800" data-oid="8kdr:1b">
                                {statusCounts[status as ApplicationStatus] || 0}
                            </div>
                            <div className="text-sm text-gray-600" data-oid="v:vybkp">
                                {config.label}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-4 gap-8" data-oid="c9i76b3">
                    {/* Filters Sidebar */}
                    <div className="lg:col-span-1" data-oid="sgi5hfb">
                        <div
                            className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6 sticky top-8"
                            data-oid="65cgwfm"
                        >
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-4"
                                data-oid="i84v640"
                            >
                                Filters
                            </h3>

                            {/* Search */}
                            <div className="mb-6" data-oid="yr.lx0i">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="lepek:6"
                                >
                                    Search
                                </label>
                                <div className="relative" data-oid="172ok6s">
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search applications..."
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                                        data-oid="ack-ov0"
                                    />

                                    <svg
                                        className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="pn4w75w"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            data-oid="s5nktv."
                                        />
                                    </svg>
                                </div>
                            </div>

                            {/* Status Filter */}
                            <div className="mb-6" data-oid="362mucj">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="8j:a6.e"
                                >
                                    Status
                                </label>
                                <div className="space-y-2" data-oid="it9ge6o">
                                    <button
                                        onClick={() => setActiveTab('all')}
                                        className={`w-full text-left px-3 py-2 rounded-lg transition-all ${
                                            activeTab === 'all'
                                                ? 'bg-[hsl(196,80%,45%)] text-white'
                                                : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                        data-oid="0h3edtr"
                                    >
                                        <span
                                            className="flex justify-between items-center"
                                            data-oid="x2zcxlt"
                                        >
                                            All Applications
                                            <span
                                                className={`text-xs px-2 py-1 rounded-full ${
                                                    activeTab === 'all'
                                                        ? 'bg-white/20'
                                                        : 'bg-gray-200'
                                                }`}
                                                data-oid="1s09jo_"
                                            >
                                                {applications.length}
                                            </span>
                                        </span>
                                    </button>
                                    {Object.entries(statusConfig).map(([status, config]) => (
                                        <button
                                            key={status}
                                            onClick={() =>
                                                setActiveTab(status as ApplicationStatus)
                                            }
                                            className={`w-full text-left px-3 py-2 rounded-lg transition-all ${
                                                activeTab === status
                                                    ? 'bg-[hsl(196,80%,45%)] text-white'
                                                    : 'text-gray-700 hover:bg-gray-100'
                                            }`}
                                            data-oid="4593f53"
                                        >
                                            <span
                                                className="flex justify-between items-center"
                                                data-oid="5ks_ti0"
                                            >
                                                <span
                                                    className="flex items-center gap-2"
                                                    data-oid=".0gio58"
                                                >
                                                    {config.icon} {config.label}
                                                </span>
                                                <span
                                                    className={`text-xs px-2 py-1 rounded-full ${
                                                        activeTab === status
                                                            ? 'bg-white/20'
                                                            : 'bg-gray-200'
                                                    }`}
                                                    data-oid="_c8nvx2"
                                                >
                                                    {statusCounts[status as ApplicationStatus] || 0}
                                                </span>
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Sort By */}
                            <div data-oid=".x4b544">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="coz3c6b"
                                >
                                    Sort By
                                </label>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value as any)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                                    data-oid="ksg-vy:"
                                >
                                    <option value="recent" data-oid="zv.x:29">
                                        Recently Updated
                                    </option>
                                    <option value="status" data-oid="4wyqg:.">
                                        Status
                                    </option>
                                    <option value="company" data-oid="kglezxs">
                                        Company Name
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3" data-oid=".wrl2u:">
                        {sortedApplications.length === 0 ? (
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-12 text-center"
                                data-oid="bawl62f"
                            >
                                <div className="max-w-md mx-auto" data-oid="cuwzv8m">
                                    <svg
                                        className="h-24 w-24 mx-auto mb-6 text-gray-300"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="xfhpj9d"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            data-oid="bpdvm_a"
                                        />
                                    </svg>
                                    <h3
                                        className="text-xl font-semibold text-gray-800 mb-2"
                                        data-oid="twj6ojk"
                                    >
                                        {applications.length === 0
                                            ? 'No applications yet'
                                            : 'No applications match your filters'}
                                    </h3>
                                    <p className="text-gray-600 mb-6" data-oid="es.t8w.">
                                        {applications.length === 0
                                            ? 'Start applying to jobs and internships to track your progress here.'
                                            : 'Try adjusting your filters to see more results.'}
                                    </p>
                                    <div
                                        className="flex flex-col sm:flex-row gap-4 justify-center"
                                        data-oid="4b7iqkl"
                                    >
                                        <Link
                                            href="/jobs"
                                            className="px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 shadow-lg"
                                            data-oid=".t69y5a"
                                        >
                                            Browse Jobs
                                        </Link>
                                        <Link
                                            href="/internships"
                                            className="px-6 py-3 border border-[hsl(196,80%,45%)] text-[hsl(196,80%,45%)] rounded-lg font-medium hover:bg-[hsl(196,80%,45%)]/10 transition-all duration-300"
                                            data-oid="ijjtm10"
                                        >
                                            Browse Internships
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-6" data-oid="i2x8uni">
                                {sortedApplications.map((application) => {
                                    const statusInfo = statusConfig[application.status];
                                    return (
                                        <div
                                            key={application.id}
                                            className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 overflow-hidden hover:shadow-xl transition-all duration-300"
                                            data-oid="edqefiq"
                                        >
                                            <div className="p-6" data-oid="u4eelu:">
                                                {/* Header */}
                                                <div
                                                    className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4"
                                                    data-oid="0ahg6u9"
                                                >
                                                    <div className="flex-1" data-oid="bor65ev">
                                                        <div
                                                            className="flex items-start gap-4"
                                                            data-oid="6pmv8i5"
                                                        >
                                                            <div
                                                                className="w-12 h-12 bg-[hsl(196,80%,45%)] rounded-lg flex items-center justify-center text-white font-bold text-lg"
                                                                data-oid="_dle:v_"
                                                            >
                                                                {application.job.company.charAt(0)}
                                                            </div>
                                                            <div
                                                                className="flex-1"
                                                                data-oid="fshwtgu"
                                                            >
                                                                <h3
                                                                    className="text-xl font-bold text-gray-800 mb-1"
                                                                    data-oid="cpzu3ml"
                                                                >
                                                                    {application.job.title}
                                                                </h3>
                                                                <p
                                                                    className="text-[hsl(196,80%,45%)] font-semibold text-lg mb-2"
                                                                    data-oid="iwd29ot"
                                                                >
                                                                    {application.job.company}
                                                                </p>
                                                                <div
                                                                    className="flex flex-wrap items-center gap-4 text-sm text-gray-600"
                                                                    data-oid="kejsd:r"
                                                                >
                                                                    <span
                                                                        className="flex items-center gap-1"
                                                                        data-oid="z5ylq32"
                                                                    >
                                                                        <svg
                                                                            className="h-4 w-4"
                                                                            fill="none"
                                                                            stroke="currentColor"
                                                                            viewBox="0 0 24 24"
                                                                            data-oid="n6f-5:u"
                                                                        >
                                                                            <path
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                strokeWidth="2"
                                                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                                                data-oid="puy:ox:"
                                                                            />

                                                                            <path
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                strokeWidth="2"
                                                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                                                data-oid="jf014-s"
                                                                            />
                                                                        </svg>
                                                                        {application.job.location}
                                                                    </span>
                                                                    <span
                                                                        className="flex items-center gap-1"
                                                                        data-oid="bt-kjo."
                                                                    >
                                                                        <svg
                                                                            className="h-4 w-4"
                                                                            fill="none"
                                                                            stroke="currentColor"
                                                                            viewBox="0 0 24 24"
                                                                            data-oid="7aq-p2e"
                                                                        >
                                                                            <path
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                strokeWidth="2"
                                                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                                data-oid="a70e.i."
                                                                            />
                                                                        </svg>
                                                                        Applied{' '}
                                                                        {formatDate(
                                                                            application.appliedDate,
                                                                        )}
                                                                    </span>
                                                                    <span
                                                                        className="flex items-center gap-1"
                                                                        data-oid="42164xg"
                                                                    >
                                                                        <svg
                                                                            className="h-4 w-4"
                                                                            fill="none"
                                                                            stroke="currentColor"
                                                                            viewBox="0 0 24 24"
                                                                            data-oid="i6lfe5t"
                                                                        >
                                                                            <path
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                strokeWidth="2"
                                                                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                                                                data-oid=".ozo82m"
                                                                            />
                                                                        </svg>
                                                                        Updated{' '}
                                                                        {getTimeAgo(
                                                                            application.lastUpdated,
                                                                        )}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div
                                                        className="flex items-center gap-3"
                                                        data-oid="sjm-689"
                                                    >
                                                        <span
                                                            className={`px-4 py-2 rounded-full text-sm font-medium ${statusInfo.color}`}
                                                            data-oid="57zx-cq"
                                                        >
                                                            {statusInfo.icon} {statusInfo.label}
                                                        </span>
                                                        {application.job.type === 'internship' && (
                                                            <span
                                                                className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full"
                                                                data-oid="x6-aq15"
                                                            >
                                                                Internship
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Status Description */}
                                                <div className="mb-4" data-oid="1c.vnr6">
                                                    <p className="text-gray-600" data-oid="5lsy:_w">
                                                        {statusInfo.description}
                                                    </p>
                                                </div>

                                                {/* Application Details */}
                                                <div
                                                    className="grid md:grid-cols-2 gap-6 mb-6"
                                                    data-oid="9d:1uqy"
                                                >
                                                    <div data-oid="b6h:rzo">
                                                        <h4
                                                            className="text-sm font-medium text-gray-700 mb-2"
                                                            data-oid="whksmun"
                                                        >
                                                            Application Method
                                                        </h4>
                                                        <div
                                                            className="flex items-center gap-2"
                                                            data-oid="p.kf3u6"
                                                        >
                                                            <span
                                                                className={`px-3 py-1 rounded-full text-xs font-medium ${
                                                                    application.applicationMethod ===
                                                                    'quick-apply'
                                                                        ? 'bg-green-100 text-green-800'
                                                                        : application.applicationMethod ===
                                                                            'full-application'
                                                                          ? 'bg-blue-100 text-blue-800'
                                                                          : 'bg-gray-100 text-gray-800'
                                                                }`}
                                                                data-oid="gmc64do"
                                                            >
                                                                {application.applicationMethod ===
                                                                'quick-apply'
                                                                    ? '⚡ Quick Apply'
                                                                    : application.applicationMethod ===
                                                                        'full-application'
                                                                      ? '📋 Full Application'
                                                                      : '🔗 External Application'}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    {application.job.type !== 'internship' &&
                                                        'salary' in application.job &&
                                                        application.job.salary && (
                                                            <div data-oid="o2-j3ns">
                                                                <h4
                                                                    className="text-sm font-medium text-gray-700 mb-2"
                                                                    data-oid="x73pun:"
                                                                >
                                                                    Salary Range
                                                                </h4>
                                                                <p
                                                                    className="text-green-600 font-medium"
                                                                    data-oid="4a2os.6"
                                                                >
                                                                    {application.job.salary}
                                                                </p>
                                                            </div>
                                                        )}

                                                    {application.job.type === 'internship' &&
                                                        'stipend' in application.job &&
                                                        application.job.stipend && (
                                                            <div data-oid="nekhpj2">
                                                                <h4
                                                                    className="text-sm font-medium text-gray-700 mb-2"
                                                                    data-oid="tfs9x49"
                                                                >
                                                                    Stipend
                                                                </h4>
                                                                <p
                                                                    className="text-green-600 font-medium"
                                                                    data-oid="l1pmxgs"
                                                                >
                                                                    {application.job.stipend}
                                                                </p>
                                                            </div>
                                                        )}
                                                </div>

                                                {/* Special Information */}
                                                {application.interviewDate && (
                                                    <div
                                                        className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4"
                                                        data-oid="oz7e70j"
                                                    >
                                                        <div
                                                            className="flex items-start gap-3"
                                                            data-oid="ftcvx5f"
                                                        >
                                                            <svg
                                                                className="h-5 w-5 text-purple-600 mt-0.5"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                                data-oid="5d8wy7s"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="2"
                                                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                                    data-oid="mjul11g"
                                                                />
                                                            </svg>
                                                            <div data-oid="4f-212f">
                                                                <p
                                                                    className="text-sm font-medium text-purple-800"
                                                                    data-oid="wgz-5j_"
                                                                >
                                                                    Interview Scheduled
                                                                </p>
                                                                <p
                                                                    className="text-sm text-purple-700"
                                                                    data-oid="-89f5l7"
                                                                >
                                                                    {formatDate(
                                                                        application.interviewDate,
                                                                    )}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {application.feedback && (
                                                    <div
                                                        className={`border rounded-lg p-4 mb-4 ${
                                                            application.status === 'shortlisted'
                                                                ? 'bg-green-50 border-green-200'
                                                                : 'bg-red-50 border-red-200'
                                                        }`}
                                                        data-oid="38c5mc7"
                                                    >
                                                        <div
                                                            className="flex items-start gap-3"
                                                            data-oid="j19lzbk"
                                                        >
                                                            <svg
                                                                className={`h-5 w-5 mt-0.5 ${
                                                                    application.status ===
                                                                    'shortlisted'
                                                                        ? 'text-green-600'
                                                                        : 'text-red-600'
                                                                }`}
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                                data-oid="ygcxyjo"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="2"
                                                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                                                    data-oid="uvinhb."
                                                                />
                                                            </svg>
                                                            <div data-oid="w5pcxhp">
                                                                <p
                                                                    className={`text-sm font-medium ${
                                                                        application.status ===
                                                                        'shortlisted'
                                                                            ? 'text-green-800'
                                                                            : 'text-red-800'
                                                                    }`}
                                                                    data-oid="i89qd2i"
                                                                >
                                                                    Feedback from Company
                                                                </p>
                                                                <p
                                                                    className={`text-sm ${
                                                                        application.status ===
                                                                        'shortlisted'
                                                                            ? 'text-green-700'
                                                                            : 'text-red-700'
                                                                    }`}
                                                                    data-oid="icbaz86"
                                                                >
                                                                    {application.feedback}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {application.nextSteps && (
                                                    <div
                                                        className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4"
                                                        data-oid="964sb54"
                                                    >
                                                        <div
                                                            className="flex items-start gap-3"
                                                            data-oid="jzvq5:_"
                                                        >
                                                            <svg
                                                                className="h-5 w-5 text-blue-600 mt-0.5"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                                data-oid="6495vgn"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="2"
                                                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                    data-oid=".129em6"
                                                                />
                                                            </svg>
                                                            <div data-oid="o6xgexg">
                                                                <p
                                                                    className="text-sm font-medium text-blue-800"
                                                                    data-oid="q7s.r4e"
                                                                >
                                                                    Next Steps
                                                                </p>
                                                                <p
                                                                    className="text-sm text-blue-700"
                                                                    data-oid="2.ijzhu"
                                                                >
                                                                    {application.nextSteps}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Notes */}
                                                {application.notes && (
                                                    <div
                                                        className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4"
                                                        data-oid="kl4fa8:"
                                                    >
                                                        <div
                                                            className="flex items-start gap-3"
                                                            data-oid="6:e.imm"
                                                        >
                                                            <svg
                                                                className="h-5 w-5 text-yellow-600 mt-0.5"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                                data-oid="glyn0zu"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="2"
                                                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                                    data-oid="hak:u-."
                                                                />
                                                            </svg>
                                                            <div data-oid="r7scd-x">
                                                                <p
                                                                    className="text-sm font-medium text-yellow-800"
                                                                    data-oid="7eblrbf"
                                                                >
                                                                    Your Notes
                                                                </p>
                                                                <p
                                                                    className="text-sm text-yellow-700"
                                                                    data-oid="x5pewh4"
                                                                >
                                                                    {application.notes}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Skills Match */}
                                                <div
                                                    className="border-t border-gray-200 pt-4"
                                                    data-oid="1tbmpf5"
                                                >
                                                    <h4
                                                        className="text-sm font-medium text-gray-700 mb-2"
                                                        data-oid="__9wphm"
                                                    >
                                                        Required Skills
                                                    </h4>
                                                    <div
                                                        className="flex flex-wrap gap-2"
                                                        data-oid="8b05:4h"
                                                    >
                                                        {application.job.skills
                                                            ?.slice(0, 5)
                                                            .map((skill: string, index: number) => (
                                                                <span
                                                                    key={index}
                                                                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                                                                    data-oid="82jo:73"
                                                                >
                                                                    {skill}
                                                                </span>
                                                            ))}
                                                        {application.job.skills && application.job.skills.length > 5 && (
                                                            <span
                                                                className="px-3 py-1 text-gray-500 text-xs"
                                                                data-oid="tyxp.ef"
                                                            >
                                                                +{(application.job.skills?.length || 0) - 5}{' '}
                                                                more
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
