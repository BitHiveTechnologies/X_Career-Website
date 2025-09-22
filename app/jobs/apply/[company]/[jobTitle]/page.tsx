'use client';

import { FrontendJob, jobService, applicationService, ApiResponse, PaginatedResponse, Job, JobsResponse } from '@/lib/api';
import JobApplicationModal from '@/components/JobApplicationModal';
import MainNavbar from '@/components/mainNavbar';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function JobApplyPage() {
    const params = useParams();
    const router = useRouter();
    const [job, setJob] = useState<FrontendJob | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Convert MockJob to FrontendJob
    const convertMockJobToFrontendJob = (mockJob: FrontendJob): FrontendJob => ({
        id: mockJob.id.toString(),
        title: mockJob.title,
        company: mockJob.company,
        description: mockJob.description,
        type: 'job' as const,
        eligibility: {
            qualifications: [],
            streams: [],
            passoutYears: [],
            minCGPA: 0
        },
        applicationDeadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days from now
        applicationLink: '#',
        location: mockJob.isRemote ? 'remote' : 'onsite',
        salary: mockJob.salary,
        skills: mockJob.skills || [],
        isActive: true,
        createdAt: mockJob.postedDate || new Date().toISOString(),
        // FrontendJob specific properties
        isFeatured: mockJob.isFeatured || false,
        isUrgent: mockJob.isUrgent || false,
        applicantCount: mockJob.applicantCount || 0,
        companyLogo: mockJob.companyLogo,
        companySize: mockJob.companySize || '',
        industry: mockJob.industry || '',
        benefits: mockJob.benefits || [],
        companyType: mockJob.companyType || 'Startup',
        experienceRequired: mockJob.experienceRequired || '',
        jobType: mockJob.jobType || '',
        employmentType: mockJob.employmentType || '',
        postedDate: mockJob.postedDate || new Date().toISOString().split('T')[0],
        isRemote: mockJob.isRemote || false,
    });

    useEffect(() => {
        const loadJob = async () => {
            try {
                setIsLoading(true);
                
                // Load job from backend API
                const response: ApiResponse<JobsResponse> = await jobService.getJobs();
                
                if (response.success && response.data) {
                    const companySlug = params.company as string;
                    const jobTitleSlug = params.jobTitle as string;
                    
                    // Find job by matching company and title
                    const foundJob = response.data.jobs.find((job: Job) => 
                        job.company.toLowerCase().replace(/\s+/g, '-') === companySlug &&
                        job.title.toLowerCase().replace(/\s+/g, '-') === jobTitleSlug
                    );
                    
                    if (foundJob) {
                        // Transform backend job to frontend format
                        const frontendJob: FrontendJob = {
                            id: foundJob.id,
                            title: foundJob.title,
                            company: foundJob.company,
                            description: foundJob.description,
                            type: foundJob.type,
                            eligibility: {
                                qualifications: [],
                                streams: [],
                                passoutYears: [],
                            },
                            applicationDeadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
                            applicationLink: '#',
                            location: foundJob.location,
                            salary: foundJob.salary || '',
                            skills: foundJob.skills || [],
                            isActive: foundJob.isActive,
                            createdAt: foundJob.createdAt,
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
                            postedDate: foundJob.createdAt?.split('T')[0] || new Date().toISOString().split('T')[0],
                            isRemote: foundJob.location === 'remote',
                        };
                        setJob(frontendJob);
                    } else {
                        // Job not found, redirect to jobs page
                        router.push('/jobs');
                    }
                } else {
                    router.push('/jobs');
                }
            } catch (error) {
                console.error('Error loading job:', error);
                router.push('/jobs');
            } finally {
                setIsLoading(false);
            }
        };

        loadJob();
    }, [params, router]);

    const handleApplicationSubmit = async (applicationData: any) => {
        try {
            if (!job) return;
            // Map modal data to API shape. Since backend expects resumeUrl string, use provided URL if present
            // or fallback to a placeholder for testing.
            const resumeUrl = applicationData.resumeUrl || 'https://example.com/resume.pdf';
            const coverLetter = applicationData.coverLetter || '';
            await applicationService.applyForJob(job.id, { resumeUrl, coverLetter });
            router.push('/applications');
        } catch (e) {
            router.push('/jobs?applied=false');
        }
    };

    const handleClose = () => {
        router.back();
    };

    if (isLoading) {
        return (
            <>
                <MainNavbar data-oid="r.1d57_" />
                <div
                    className="min-h-screen bg-gradient-to-b from-[hsl(196,60%,95%)] to-white flex items-center justify-center"
                    data-oid="dgn_y.d"
                >
                    <div
                        className="animate-spin rounded-full h-12 w-12 border-b-2 border-[hsl(196,80%,45%)]"
                        data-oid="mn7:-:i"
                    ></div>
                </div>
            </>
        );
    }

    if (!job) {
        return (
            <>
                <MainNavbar data-oid="hjt:53n" />
                <div
                    className="min-h-screen bg-gradient-to-b from-[hsl(196,60%,95%)] to-white flex items-center justify-center"
                    data-oid="dyczydx"
                >
                    <div className="text-center" data-oid="rh6ksl-">
                        <h1 className="text-2xl font-bold text-gray-800 mb-4" data-oid="gn36898">
                            Job Not Found
                        </h1>
                        <p className="text-gray-600 mb-6" data-oid="3b1gj77">
                            The job you're looking for doesn't exist.
                        </p>
                        <button
                            onClick={() => router.push('/jobs')}
                            className="px-6 py-3 bg-[hsl(196,80%,45%)] text-white rounded-lg hover:bg-[hsl(196,80%,40%)] transition-colors"
                            data-oid=":qgwqa8"
                        >
                            Back to Jobs
                        </button>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <MainNavbar data-oid="ujn4.bf" />
            <div
                className="min-h-screen bg-gradient-to-b from-[hsl(196,60%,95%)] to-white"
                data-oid="y-nj4oh"
            >
                <JobApplicationModal
                    job={job}
                    isOpen={true}
                    onClose={handleClose}
                    onSubmit={handleApplicationSubmit}
                    data-oid="a0hx5an"
                />
            </div>
        </>
    );
}
