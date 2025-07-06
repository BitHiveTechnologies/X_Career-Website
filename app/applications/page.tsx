'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/auth/AuthContext';
import { useRouter } from 'next/navigation';
import MainNavbar from '@/components/mainNavbar';
import { mockJobs, mockInternships } from '@/lib/mockData';
import { Job } from '@/app/jobs/page';
import { Internship } from '@/lib/mockData';
import Link from 'next/link';

type ApplicationStatus = 'applied' | 'under-review' | 'interview' | 'rejected' | 'accepted';

interface Application {
    id: number;
    job: Job | Internship;
    isInternship: boolean;
    appliedDate: string;
    status: ApplicationStatus;
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
};

export default function ApplicationsPage() {
    const { isAuthenticated } = useAuth();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<'all' | ApplicationStatus>('all');
    const [sortBy, setSortBy] = useState<'recent' | 'status' | 'company'>('recent');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);

    // Mock applications data (in real app, this would come from backend)
    const [applications, setApplications] = useState<Application[]>([
        {
            id: 1,
            job: mockJobs[0],
            isInternship: false,
            appliedDate: '2024-01-20',
            status: 'interview',
            lastUpdated: '2024-01-22',
            applicationMethod: 'full-application',
            notes: 'Really excited about this role. Great company culture.',
            interviewDate: '2024-01-25',
            nextSteps: 'Technical interview scheduled for Friday',
        },
        {
            id: 2,
            job: mockJobs[1],
            isInternship: false,
            appliedDate: '2024-01-19',
            status: 'under-review',
            lastUpdated: '2024-01-21',
            applicationMethod: 'quick-apply',
            notes: 'Backend role with good growth opportunities',
        },
        {
            id: 3,
            job: mockInternships[0],
            isInternship: true,
            appliedDate: '2024-01-18',
            status: 'accepted',
            lastUpdated: '2024-01-23',
            applicationMethod: 'full-application',
            notes: 'Perfect internship for gaining frontend experience',
            feedback: 'Impressed with your portfolio and enthusiasm for learning!',
        },
        {
            id: 4,
            job: mockJobs[3],
            isInternship: false,
            appliedDate: '2024-01-17',
            status: 'applied',
            lastUpdated: '2024-01-17',
            applicationMethod: 'external',
            notes: 'Data science role at top e-commerce company',
        },
        {
            id: 5,
            job: mockJobs[2],
            isInternship: false,
            appliedDate: '2024-01-15',
            status: 'rejected',
            lastUpdated: '2024-01-20',
            applicationMethod: 'quick-apply',
            notes: 'Full-stack position with competitive salary',
            feedback:
                'Thank you for your interest. We decided to move forward with other candidates.',
        },
    ]);

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login?redirect=/applications');
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
            data-oid="okxf0ui"
        >
            <MainNavbar data-oid="cic_twd" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-oid="s:t.o0o">
                {/* Header */}
                <div
                    className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 mb-8"
                    data-oid="txuhc5k"
                >
                    <div
                        className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
                        data-oid="gbdhjl-"
                    >
                        <div data-oid="4v7winf">
                            <h1
                                className="text-3xl font-bold text-gray-800 mb-2"
                                data-oid="xefrg70"
                            >
                                My Applications
                            </h1>
                            <p className="text-gray-600" data-oid=":_j7hnx">
                                Track your job and internship applications • {applications.length}{' '}
                                total applications
                            </p>
                        </div>

                        <div className="flex items-center gap-4" data-oid="ce35lqs">
                            <Link
                                href="/jobs"
                                className="px-6 py-2 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 shadow-lg"
                                data-oid=".zd-:r_"
                            >
                                Apply to More Jobs
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8"
                    data-oid="k98wboj"
                >
                    <div
                        className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-4 text-center"
                        data-oid="2.gn-ie"
                    >
                        <div className="text-2xl font-bold text-gray-800" data-oid="ca2de57">
                            {applications.length}
                        </div>
                        <div className="text-sm text-gray-600" data-oid="jyo2z07">
                            Total Applied
                        </div>
                    </div>
                    {Object.entries(statusConfig).map(([status, config]) => (
                        <div
                            key={status}
                            className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-4 text-center"
                            data-oid="04_5j0e"
                        >
                            <div className="text-xl mb-1" data-oid="ba69qcg">
                                {config.icon}
                            </div>
                            <div className="text-2xl font-bold text-gray-800" data-oid=".2jh_u8">
                                {statusCounts[status as ApplicationStatus] || 0}
                            </div>
                            <div className="text-sm text-gray-600" data-oid="vzkof11">
                                {config.label}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-4 gap-8" data-oid="s470bzc">
                    {/* Filters Sidebar */}
                    <div className="lg:col-span-1" data-oid="0t4o8v9">
                        <div
                            className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6 sticky top-8"
                            data-oid="xgz8nq5"
                        >
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-4"
                                data-oid="5zugmis"
                            >
                                Filters
                            </h3>

                            {/* Search */}
                            <div className="mb-6" data-oid="ztid4ko">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="q:exdoj"
                                >
                                    Search
                                </label>
                                <div className="relative" data-oid="eiob9-u">
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search applications..."
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                                        data-oid="s0yp0u-"
                                    />

                                    <svg
                                        className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="pq9412s"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            data-oid="qv8zaz4"
                                        />
                                    </svg>
                                </div>
                            </div>

                            {/* Status Filter */}
                            <div className="mb-6" data-oid="98v:_h1">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="572htvr"
                                >
                                    Status
                                </label>
                                <div className="space-y-2" data-oid=".mrs6hl">
                                    <button
                                        onClick={() => setActiveTab('all')}
                                        className={`w-full text-left px-3 py-2 rounded-lg transition-all ${
                                            activeTab === 'all'
                                                ? 'bg-[hsl(196,80%,45%)] text-white'
                                                : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                        data-oid="v_oem8g"
                                    >
                                        <span
                                            className="flex justify-between items-center"
                                            data-oid="vxiu2:r"
                                        >
                                            All Applications
                                            <span
                                                className={`text-xs px-2 py-1 rounded-full ${
                                                    activeTab === 'all'
                                                        ? 'bg-white/20'
                                                        : 'bg-gray-200'
                                                }`}
                                                data-oid="tq8dw0."
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
                                            data-oid="9o61xeo"
                                        >
                                            <span
                                                className="flex justify-between items-center"
                                                data-oid="aa9xvip"
                                            >
                                                <span
                                                    className="flex items-center gap-2"
                                                    data-oid="ommpil4"
                                                >
                                                    {config.icon} {config.label}
                                                </span>
                                                <span
                                                    className={`text-xs px-2 py-1 rounded-full ${
                                                        activeTab === status
                                                            ? 'bg-white/20'
                                                            : 'bg-gray-200'
                                                    }`}
                                                    data-oid="lq-xjih"
                                                >
                                                    {statusCounts[status as ApplicationStatus] || 0}
                                                </span>
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Sort By */}
                            <div data-oid=".p4vv3e">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="mof5c6c"
                                >
                                    Sort By
                                </label>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value as any)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                                    data-oid="4efna6m"
                                >
                                    <option value="recent" data-oid="pyqk_1t">
                                        Recently Updated
                                    </option>
                                    <option value="status" data-oid="qxk:or7">
                                        Status
                                    </option>
                                    <option value="company" data-oid="32wpv3p">
                                        Company Name
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3" data-oid="sog33.8">
                        {sortedApplications.length === 0 ? (
                            <div
                                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-12 text-center"
                                data-oid="7:.os6z"
                            >
                                <div className="max-w-md mx-auto" data-oid="mdkiwvj">
                                    <svg
                                        className="h-24 w-24 mx-auto mb-6 text-gray-300"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="d-1le_k"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            data-oid="eqkglcd"
                                        />
                                    </svg>
                                    <h3
                                        className="text-xl font-semibold text-gray-800 mb-2"
                                        data-oid="9behf48"
                                    >
                                        {applications.length === 0
                                            ? 'No applications yet'
                                            : 'No applications match your filters'}
                                    </h3>
                                    <p className="text-gray-600 mb-6" data-oid="0-f-ajs">
                                        {applications.length === 0
                                            ? 'Start applying to jobs and internships to track your progress here.'
                                            : 'Try adjusting your filters to see more results.'}
                                    </p>
                                    <div
                                        className="flex flex-col sm:flex-row gap-4 justify-center"
                                        data-oid="61g3ib4"
                                    >
                                        <Link
                                            href="/jobs"
                                            className="px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105 shadow-lg"
                                            data-oid="p0w6_9d"
                                        >
                                            Browse Jobs
                                        </Link>
                                        <Link
                                            href="/internships"
                                            className="px-6 py-3 border border-[hsl(196,80%,45%)] text-[hsl(196,80%,45%)] rounded-lg font-medium hover:bg-[hsl(196,80%,45%)]/10 transition-all duration-300"
                                            data-oid="b0fzzom"
                                        >
                                            Browse Internships
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-6" data-oid="rocg:ss">
                                {sortedApplications.map((application) => {
                                    const statusInfo = statusConfig[application.status];
                                    return (
                                        <div
                                            key={application.id}
                                            className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 overflow-hidden hover:shadow-xl transition-all duration-300"
                                            data-oid="vo3ejja"
                                        >
                                            <div className="p-6" data-oid="qkag8ua">
                                                {/* Header */}
                                                <div
                                                    className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4"
                                                    data-oid="mhp_dbo"
                                                >
                                                    <div className="flex-1" data-oid="zb8il_o">
                                                        <div
                                                            className="flex items-start gap-4"
                                                            data-oid=".:_rryo"
                                                        >
                                                            <div
                                                                className="w-12 h-12 bg-[hsl(196,80%,45%)] rounded-lg flex items-center justify-center text-white font-bold text-lg"
                                                                data-oid="rybk998"
                                                            >
                                                                {application.job.company.charAt(0)}
                                                            </div>
                                                            <div
                                                                className="flex-1"
                                                                data-oid="h6l_co."
                                                            >
                                                                <h3
                                                                    className="text-xl font-bold text-gray-800 mb-1"
                                                                    data-oid="ifux4_8"
                                                                >
                                                                    {application.job.title}
                                                                </h3>
                                                                <p
                                                                    className="text-[hsl(196,80%,45%)] font-semibold text-lg mb-2"
                                                                    data-oid="3juq6i:"
                                                                >
                                                                    {application.job.company}
                                                                </p>
                                                                <div
                                                                    className="flex flex-wrap items-center gap-4 text-sm text-gray-600"
                                                                    data-oid="l0eb4we"
                                                                >
                                                                    <span
                                                                        className="flex items-center gap-1"
                                                                        data-oid="cw0ofm2"
                                                                    >
                                                                        <svg
                                                                            className="h-4 w-4"
                                                                            fill="none"
                                                                            stroke="currentColor"
                                                                            viewBox="0 0 24 24"
                                                                            data-oid="g5-s74x"
                                                                        >
                                                                            <path
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                strokeWidth="2"
                                                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                                                data-oid="3ckpql5"
                                                                            />

                                                                            <path
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                strokeWidth="2"
                                                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                                                data-oid="63-wx6e"
                                                                            />
                                                                        </svg>
                                                                        {application.job.location}
                                                                    </span>
                                                                    <span
                                                                        className="flex items-center gap-1"
                                                                        data-oid="jumgrfk"
                                                                    >
                                                                        <svg
                                                                            className="h-4 w-4"
                                                                            fill="none"
                                                                            stroke="currentColor"
                                                                            viewBox="0 0 24 24"
                                                                            data-oid="h5q7du4"
                                                                        >
                                                                            <path
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                strokeWidth="2"
                                                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                                data-oid="bt45p9c"
                                                                            />
                                                                        </svg>
                                                                        Applied{' '}
                                                                        {formatDate(
                                                                            application.appliedDate,
                                                                        )}
                                                                    </span>
                                                                    <span
                                                                        className="flex items-center gap-1"
                                                                        data-oid=".n81eww"
                                                                    >
                                                                        <svg
                                                                            className="h-4 w-4"
                                                                            fill="none"
                                                                            stroke="currentColor"
                                                                            viewBox="0 0 24 24"
                                                                            data-oid="08qbqx8"
                                                                        >
                                                                            <path
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                strokeWidth="2"
                                                                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                                                                data-oid="g82o4mp"
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
                                                        data-oid="s_qcoee"
                                                    >
                                                        <span
                                                            className={`px-4 py-2 rounded-full text-sm font-medium ${statusInfo.color}`}
                                                            data-oid="gwrgve0"
                                                        >
                                                            {statusInfo.icon} {statusInfo.label}
                                                        </span>
                                                        {application.isInternship && (
                                                            <span
                                                                className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full"
                                                                data-oid="chushul"
                                                            >
                                                                Internship
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Status Description */}
                                                <div className="mb-4" data-oid="ng0xkle">
                                                    <p className="text-gray-600" data-oid=".2-yql:">
                                                        {statusInfo.description}
                                                    </p>
                                                </div>

                                                {/* Application Details */}
                                                <div
                                                    className="grid md:grid-cols-2 gap-6 mb-6"
                                                    data-oid="s:39vuj"
                                                >
                                                    <div data-oid="ceo:jpc">
                                                        <h4
                                                            className="text-sm font-medium text-gray-700 mb-2"
                                                            data-oid="a_ifj0f"
                                                        >
                                                            Application Method
                                                        </h4>
                                                        <div
                                                            className="flex items-center gap-2"
                                                            data-oid=":5fjpqm"
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
                                                                data-oid="81s7y-t"
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

                                                    {!application.isInternship &&
                                                        'salary' in application.job &&
                                                        application.job.salary && (
                                                            <div data-oid="8mdmcs1">
                                                                <h4
                                                                    className="text-sm font-medium text-gray-700 mb-2"
                                                                    data-oid="_4sm-8k"
                                                                >
                                                                    Salary Range
                                                                </h4>
                                                                <p
                                                                    className="text-green-600 font-medium"
                                                                    data-oid="-exwuwc"
                                                                >
                                                                    {application.job.salary}
                                                                </p>
                                                            </div>
                                                        )}

                                                    {application.isInternship &&
                                                        'stipend' in application.job &&
                                                        application.job.stipend && (
                                                            <div data-oid="n1g.iyt">
                                                                <h4
                                                                    className="text-sm font-medium text-gray-700 mb-2"
                                                                    data-oid="ourswc0"
                                                                >
                                                                    Stipend
                                                                </h4>
                                                                <p
                                                                    className="text-green-600 font-medium"
                                                                    data-oid="i6w9tqk"
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
                                                        data-oid=":x4wkjc"
                                                    >
                                                        <div
                                                            className="flex items-start gap-3"
                                                            data-oid="rbcu5vz"
                                                        >
                                                            <svg
                                                                className="h-5 w-5 text-purple-600 mt-0.5"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                                data-oid="zi1sy3."
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="2"
                                                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                                    data-oid="ya-l_oh"
                                                                />
                                                            </svg>
                                                            <div data-oid="axeyxhm">
                                                                <p
                                                                    className="text-sm font-medium text-purple-800"
                                                                    data-oid="v6k-if9"
                                                                >
                                                                    Interview Scheduled
                                                                </p>
                                                                <p
                                                                    className="text-sm text-purple-700"
                                                                    data-oid="kxscylh"
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
                                                            application.status === 'accepted'
                                                                ? 'bg-green-50 border-green-200'
                                                                : 'bg-red-50 border-red-200'
                                                        }`}
                                                        data-oid="n39:tan"
                                                    >
                                                        <div
                                                            className="flex items-start gap-3"
                                                            data-oid="yypl9dq"
                                                        >
                                                            <svg
                                                                className={`h-5 w-5 mt-0.5 ${
                                                                    application.status ===
                                                                    'accepted'
                                                                        ? 'text-green-600'
                                                                        : 'text-red-600'
                                                                }`}
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                                data-oid="_hly1zh"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="2"
                                                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                                                    data-oid="6de:3ba"
                                                                />
                                                            </svg>
                                                            <div data-oid="kfoztdu">
                                                                <p
                                                                    className={`text-sm font-medium ${
                                                                        application.status ===
                                                                        'accepted'
                                                                            ? 'text-green-800'
                                                                            : 'text-red-800'
                                                                    }`}
                                                                    data-oid="pysncqh"
                                                                >
                                                                    Feedback from Company
                                                                </p>
                                                                <p
                                                                    className={`text-sm ${
                                                                        application.status ===
                                                                        'accepted'
                                                                            ? 'text-green-700'
                                                                            : 'text-red-700'
                                                                    }`}
                                                                    data-oid="z:e3ycb"
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
                                                        data-oid="iqdp752"
                                                    >
                                                        <div
                                                            className="flex items-start gap-3"
                                                            data-oid="y33o.oe"
                                                        >
                                                            <svg
                                                                className="h-5 w-5 text-blue-600 mt-0.5"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                                data-oid="ubjwa89"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="2"
                                                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                    data-oid="cfkbyee"
                                                                />
                                                            </svg>
                                                            <div data-oid="u8rbazk">
                                                                <p
                                                                    className="text-sm font-medium text-blue-800"
                                                                    data-oid="jqx9zlq"
                                                                >
                                                                    Next Steps
                                                                </p>
                                                                <p
                                                                    className="text-sm text-blue-700"
                                                                    data-oid="9ikx0ph"
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
                                                        data-oid="9tiej6r"
                                                    >
                                                        <div
                                                            className="flex items-start gap-3"
                                                            data-oid="k5i4e8_"
                                                        >
                                                            <svg
                                                                className="h-5 w-5 text-yellow-600 mt-0.5"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                                data-oid="nmwt8ko"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="2"
                                                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                                    data-oid="0nh182i"
                                                                />
                                                            </svg>
                                                            <div data-oid="-a2tvz.">
                                                                <p
                                                                    className="text-sm font-medium text-yellow-800"
                                                                    data-oid="l8dhbs9"
                                                                >
                                                                    Your Notes
                                                                </p>
                                                                <p
                                                                    className="text-sm text-yellow-700"
                                                                    data-oid=".-69ob-"
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
                                                    data-oid="1l2dd8u"
                                                >
                                                    <h4
                                                        className="text-sm font-medium text-gray-700 mb-2"
                                                        data-oid="hyq6xs1"
                                                    >
                                                        Required Skills
                                                    </h4>
                                                    <div
                                                        className="flex flex-wrap gap-2"
                                                        data-oid="kroero3"
                                                    >
                                                        {application.job.skills
                                                            .slice(0, 5)
                                                            .map((skill, index) => (
                                                                <span
                                                                    key={index}
                                                                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                                                                    data-oid="luw61rg"
                                                                >
                                                                    {skill}
                                                                </span>
                                                            ))}
                                                        {application.job.skills.length > 5 && (
                                                            <span
                                                                className="px-3 py-1 text-gray-500 text-xs"
                                                                data-oid="vmu:5ru"
                                                            >
                                                                +{application.job.skills.length - 5}{' '}
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
