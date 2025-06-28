'use client';

import MainNavbar from '@/components/mainNavbar';
import JobApplicationModal from '@/components/JobApplicationModal';
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Job } from '@/app/jobs/page';
import { findJobBySlug } from '@/lib/mockData';

export default function JobApplyPage() {
    const params = useParams();
    const router = useRouter();
    const [job, setJob] = useState<Job | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const companySlug = params.company as string;
        const jobTitleSlug = params.jobTitle as string;

        // Find job by matching company and title slugs
        const foundJob = findJobBySlug(companySlug, jobTitleSlug);

        setJob(foundJob || null);
        setIsLoading(false);
    }, [params]);

    const handleApplicationSubmit = (applicationData: any) => {
        console.log('Application submitted:', applicationData);
        // Handle application submission
        router.push('/jobs?applied=true');
    };

    const handleClose = () => {
        router.back();
    };

    if (isLoading) {
        return (
            <>
                <MainNavbar data-oid="4yaa0b." />
                <div
                    className="min-h-screen bg-gradient-to-b from-[hsl(196,60%,95%)] to-white flex items-center justify-center"
                    data-oid="sybwo6_"
                >
                    <div
                        className="animate-spin rounded-full h-12 w-12 border-b-2 border-[hsl(196,80%,45%)]"
                        data-oid="cjbau79"
                    ></div>
                </div>
            </>
        );
    }

    if (!job) {
        return (
            <>
                <MainNavbar data-oid="__3q3fs" />
                <div
                    className="min-h-screen bg-gradient-to-b from-[hsl(196,60%,95%)] to-white flex items-center justify-center"
                    data-oid="u-8ddld"
                >
                    <div className="text-center" data-oid="o5n1_ow">
                        <h1 className="text-2xl font-bold text-gray-800 mb-4" data-oid="p.bo.i.">
                            Job Not Found
                        </h1>
                        <p className="text-gray-600 mb-6" data-oid="t9gn9ii">
                            The job you're looking for doesn't exist.
                        </p>
                        <button
                            onClick={() => router.push('/jobs')}
                            className="px-6 py-3 bg-[hsl(196,80%,45%)] text-white rounded-lg hover:bg-[hsl(196,80%,40%)] transition-colors"
                            data-oid="i.q:vw5"
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
            <MainNavbar data-oid="qsnbjge" />
            <div
                className="min-h-screen bg-gradient-to-b from-[hsl(196,60%,95%)] to-white"
                data-oid="9o4:mz6"
            >
                <JobApplicationModal
                    job={job}
                    isOpen={true}
                    onClose={handleClose}
                    onSubmit={handleApplicationSubmit}
                    data-oid="2y2fhf:"
                />
            </div>
        </>
    );
}
