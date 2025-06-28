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
                <MainNavbar data-oid="wtps53." />
                <div
                    className="min-h-screen bg-gradient-to-b from-[hsl(196,60%,95%)] to-white flex items-center justify-center"
                    data-oid="5lw2c30"
                >
                    <div
                        className="animate-spin rounded-full h-12 w-12 border-b-2 border-[hsl(196,80%,45%)]"
                        data-oid="ctt.khl"
                    ></div>
                </div>
            </>
        );
    }

    if (!job) {
        return (
            <>
                <MainNavbar data-oid="q454hl9" />
                <div
                    className="min-h-screen bg-gradient-to-b from-[hsl(196,60%,95%)] to-white flex items-center justify-center"
                    data-oid="teo2eza"
                >
                    <div className="text-center" data-oid="voc_t4n">
                        <h1 className="text-2xl font-bold text-gray-800 mb-4" data-oid="66_fe1w">
                            Job Not Found
                        </h1>
                        <p className="text-gray-600 mb-6" data-oid="p3:zb-t">
                            The job you're looking for doesn't exist.
                        </p>
                        <button
                            onClick={() => router.push('/jobs')}
                            className="px-6 py-3 bg-[hsl(196,80%,45%)] text-white rounded-lg hover:bg-[hsl(196,80%,40%)] transition-colors"
                            data-oid=".avjsa0"
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
            <MainNavbar data-oid="n2-pq13" />
            <div
                className="min-h-screen bg-gradient-to-b from-[hsl(196,60%,95%)] to-white"
                data-oid="0mbzb:l"
            >
                <JobApplicationModal
                    job={job}
                    isOpen={true}
                    onClose={handleClose}
                    onSubmit={handleApplicationSubmit}
                    data-oid="..t7yr5"
                />
            </div>
        </>
    );
}
