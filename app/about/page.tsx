'use client';

import MainNavbar from '@/components/mainNavbar';
import Footer from '@/components/Footer';

export default function AboutUsPage() {
    return (
        <div
            className="min-h-screen bg-gradient-to-br from-[hsl(210,50%,98%)] to-[hsl(196,60%,95%)] flex flex-col"
            data-oid="about-us-root"
        >
            <MainNavbar data-oid="about-us-navbar" />

            <div className="flex-grow max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-24" data-oid="about-us-container">
                <div
                    className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 sm:p-12"
                    data-oid="about-us-card"
                >
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-2 text-center" data-oid="about-us-title" >
                        X Careers – About Us
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 border-b border-gray-150 pb-6 text-center" data-oid="about-us-subtitle">
                        Your partner in career growth, opportunity awareness, and professional development.
                    </p>

                    <div
                        className="prose prose-lg max-w-none text-gray-700 space-y-10"
                        data-oid="about-us-content"
                    >
                        {/* Section: About X Careers */}
                        <section className="space-y-4" data-oid="about-us-sec-1">
                            <h2 className="text-2xl font-bold text-gray-800" data-oid="about-us-h2-1">
                                About X Careers
                            </h2>
                            <p className="leading-relaxed" data-oid="about-us-p-1">
                                X Careers is a student-focused career support platform designed to help learners stay updated with job
                                opportunities, build strong resumes, and enhance their employability through guided support.
                            </p>
                            <p className="font-medium text-[hsl(196,80%,35%)] bg-[hsl(196,80%,45%)]/5 p-4 rounded-xl border border-[hsl(196,80%,45%)]/20" data-oid="about-us-mission">
                                Our mission is simple: Help students get career-ready with the right information and tools at the right time.
                            </p>
                        </section>

                        {/* Section: What X Careers Does */}
                        <section className="space-y-4" data-oid="about-us-sec-2">
                            <h2 className="text-2xl font-bold text-gray-800" data-oid="about-us-h2-2">
                                What X Careers Does
                            </h2>
                            
                            <div className="space-y-6" data-oid="about-us-list-does">
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 rounded-full bg-[hsl(196,80%,45%)]/10 text-[hsl(196,80%,45%)] flex items-center justify-center font-bold text-sm shrink-0 mt-1">1</div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900">Job Hiring Notifications</h3>
                                        <p className="text-gray-600 mt-1">We keep students informed about the latest hiring opportunities from companies across various domains. With our real-time updates, students never miss a chance to apply for the right role.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 rounded-full bg-[hsl(196,80%,45%)]/10 text-[hsl(196,80%,45%)] flex items-center justify-center font-bold text-sm shrink-0 mt-1">2</div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900">Resume Building Support</h3>
                                        <p className="text-gray-600 mt-1">We help students create professional, structured, and impactful resumes that increase their chances of getting shortlisted by recruiters.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 rounded-full bg-[hsl(196,80%,45%)]/10 text-[hsl(196,80%,45%)] flex items-center justify-center font-bold text-sm shrink-0 mt-1">3</div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900">NotifyX – Smart Career Alerts</h3>
                                        <p className="text-gray-600 mt-1">Our website xcareers.in offers NotifyX, a powerful notification feature that instantly alerts students about relevant job openings based on eligibility, graduation year, and career interests.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 rounded-full bg-[hsl(196,80%,45%)]/10 text-[hsl(196,80%,45%)] flex items-center justify-center font-bold text-sm shrink-0 mt-1">4</div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900">Easy-to-Use Career Tools</h3>
                                        <ul className="list-disc pl-6 space-y-1 text-gray-600 mt-2">
                                            <li>NotifyX Alerts</li>
                                            <li>Resume Builder</li>
                                            <li>Daily/Weekly Hiring Notifications</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section: Website */}
                        <section className="space-y-4" data-oid="about-us-sec-3">
                            <h2 className="text-2xl font-bold text-gray-800" data-oid="about-us-h2-3">
                                Website – <a href="https://www.xcareers.in" className="hover:underline font-semibold">xcareers.in</a>
                            </h2>
                            <p className="leading-relaxed" data-oid="about-us-p-3">
                                Our platform is designed to make career support accessible to every student. Through xcareers.in, users can:
                            </p>
                            <ul className="list-disc pl-6 space-y-1.5 text-gray-600">
                                <li>Receive real-time job alerts.</li>
                                <li>Build and download professional resumes.</li>
                                <li>Filter job notifications based on interest and eligibility.</li>
                            </ul>
                            <p className="font-semibold text-gray-800" data-oid="about-us-aim">
                                We aim to make job searching easier, faster, and more effective.
                            </p>
                        </section>

                        {/* Section: NotifyX In-Depth */}
                        <section className="space-y-4" data-oid="about-us-sec-4">
                            <h2 className="text-2xl font-bold text-gray-800" data-oid="about-us-h2-4">
                                NotifyX – In-Depth Overview
                            </h2>
                            <p className="leading-relaxed" data-oid="about-us-p-4">
                                NotifyX is the core feature of X Careers, designed to make job searching smarter, faster, and more personalized. It ensures that students receive only the most relevant hiring notifications based on their qualification, stream, graduation year, and eligibility criteria.
                            </p>
                        </section>

                        {/* Section: How NotifyX Works */}
                        <section className="space-y-4" data-oid="about-us-sec-5">
                            <h2 className="text-2xl font-bold text-gray-800" data-oid="about-us-h2-5">
                                How NotifyX Works
                            </h2>
                            <ol className="list-decimal pl-6 space-y-2 text-gray-600">
                                <li>Students enter their academic details such as degree, branch, CGPA, and graduation year.</li>
                                <li>NotifyX filters job opportunities posted on xcareers.in.</li>
                                <li>Only eligible students receive instant notifications via email or dashboard alerts.</li>
                            </ol>
                        </section>

                        {/* Section: How to Use NotifyX */}
                        <section className="space-y-4" data-oid="about-us-sec-6">
                            <h2 className="text-2xl font-bold text-gray-800" data-oid="about-us-h2-6">
                                How to Use NotifyX
                            </h2>
                            <div className="space-y-3" data-oid="about-us-steps">
                                <div className="flex items-start space-x-2">
                                    <span className="font-semibold text-[hsl(196,80%,45%)] shrink-0">Step 1:</span>
                                    <span className="text-gray-700">Choose a Premium Plan to activate NotifyX services.</span>
                                </div>
                                <div className="flex items-start space-x-2">
                                    <span className="font-semibold text-[hsl(196,80%,45%)] shrink-0">Step 2:</span>
                                    <span className="text-gray-700">Fill your profile details including email ID, qualification, stream, college name, and CGPA.</span>
                                </div>
                                <div className="flex items-start space-x-2">
                                    <span className="font-semibold text-[hsl(196,80%,45%)] shrink-0">Step 3:</span>
                                    <span className="text-gray-700">Admin publishes a hiring opportunity on the X Careers website.</span>
                                </div>
                                <div className="flex items-start space-x-2">
                                    <span className="font-semibold text-[hsl(196,80%,45%)] shrink-0">Step 4:</span>
                                    <span className="text-gray-700">NotifyX compares job requirements with student profile data.</span>
                                </div>
                                <div className="flex items-start space-x-2">
                                    <span className="font-semibold text-[hsl(196,80%,45%)] shrink-0">Step 5:</span>
                                    <span className="text-gray-700">Eligible students receive instant email notifications to apply.</span>
                                </div>
                            </div>
                        </section>

                        {/* Section: Key Features of NotifyX */}
                        <section className="space-y-4" data-oid="about-us-sec-7">
                            <h2 className="text-2xl font-bold text-gray-800" data-oid="about-us-h2-7">
                                Key Features of NotifyX
                            </h2>
                            <ul className="list-disc pl-6 space-y-1 text-gray-600">
                                <li>Eligibility-Based Alerts</li>
                                <li>Real-Time Updates</li>
                                <li>Subscription Access</li>
                                <li>Simple & Accurate Notifications</li>
                            </ul>
                        </section>

                        {/* Section: Benefits to Students */}
                        <section className="space-y-4" data-oid="about-us-sec-8">
                            <h2 className="text-2xl font-bold text-gray-800" data-oid="about-us-h2-8">
                                Benefits to Students
                            </h2>
                            <ul className="list-disc pl-6 space-y-1.5 text-gray-600">
                                <li>Saves time by eliminating irrelevant job searches.</li>
                                <li>Increases chances of applying early and getting shortlisted.</li>
                                <li>Keeps students updated with genuine hiring opportunities.</li>
                            </ul>
                        </section>

                        {/* Section: Premium Plans */}
                        <section className="space-y-4" data-oid="about-us-sec-9">
                            <h2 className="text-2xl font-bold text-gray-800" data-oid="about-us-h2-9">
                                NotifyX Premium Plans
                            </h2>
                            <div className="overflow-x-auto border border-[hsl(196,80%,45%)]/20 rounded-xl bg-[hsl(196,80%,45%)]/[0.03]" data-oid="about-us-table-container" >
                                <table className="min-w-full divide-y divide-[hsl(196,80%,45%)]/10" data-oid="about-us-table">
                                    <thead className="bg-[hsl(196,80%,45%)]/10" data-oid="about-us-thead">
                                        <tr className="divide-x divide-[hsl(196,80%,45%)]/10">
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-[hsl(196,80%,35%)] uppercase tracking-wider">
                                                Plan
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-[hsl(196,80%,35%)] uppercase tracking-wider">
                                                Features & Benefits
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[hsl(196,80%,45%)]/10 text-sm text-gray-700" data-oid="about-us-tbody">
                                        <tr className="divide-x divide-[hsl(196,80%,45%)]/10">
                                            <td className="px-6 py-4 font-semibold text-[hsl(196,80%,35%)] shrink-0 bg-[hsl(196,80%,45%)]/5">Basic Premium</td>
                                            <td className="px-6 py-4 bg-[hsl(196,80%,45%)]/[0.01]">Access to NotifyX alerts and standard job notifications.</td>
                                        </tr>
                                        <tr className="divide-x divide-[hsl(196,80%,45%)]/10">
                                            <td className="px-6 py-4 font-semibold text-[hsl(196,80%,35%)] shrink-0 bg-[hsl(196,80%,45%)]/5">Standard Premium</td>
                                            <td className="px-6 py-4 bg-[hsl(196,80%,45%)]/[0.01]">Includes Basic features, priority notifications, and resume tips.</td>
                                        </tr>
                                        <tr className="divide-x divide-[hsl(196,80%,45%)]/10">
                                            <td className="px-6 py-4 font-semibold text-[hsl(196,80%,35%)] shrink-0 bg-[hsl(196,80%,45%)]/5">Premium Plus</td>
                                            <td className="px-6 py-4 bg-[hsl(196,80%,45%)]/[0.01]">Includes Standard features, advanced resume help, and early access alerts.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Section: Why Choose X Careers? */}
                        <section className="space-y-4" data-oid="about-us-sec-10">
                            <h2 className="text-2xl font-bold text-gray-800" data-oid="about-us-h2-10">
                                Why Choose X Careers?
                            </h2>
                            <ul className="list-disc pl-6 space-y-1.5 text-gray-600">
                                <li>Reliable job notifications</li>
                                <li>Well-structured resume assistance</li>
                                <li>Easy-to-use tools through our official website</li>
                                <li>Support for students from all streams and graduation years</li>
                            </ul>
                        </section>

                        {/* Section: Stay Connected */}
                        <section className="space-y-4 border-t border-gray-150 pt-8 text-center" data-oid="about-us-sec-11">
                            <h2 className="text-2xl font-bold text-gray-800" data-oid="about-us-h2-11">
                                Stay Connected
                            </h2>
                            <p className="flex items-center justify-center space-x-2 text-gray-700" data-oid="about-us-url">
                                <span className="text-[hsl(196,80%,45%)]">■</span>
                                <a href="https://www.xcareers.in" className="hover:underline font-semibold">xcareers.in</a>
                            </p>
                            <p className="text-lg font-bold text-[hsl(196,80%,35%)] italic" data-oid="about-us-powered">
                                Grow your career with confidence — powered by X Careers.
                            </p>
                        </section>
                    </div>
                </div>
            </div>

            <Footer data-oid="about-us-footer" />
        </div>
    );
}
