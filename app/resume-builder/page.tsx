'use client';

import MainNavbar from '@/components/mainNavbar';
import { useState, useRef } from 'react';
import ResumeForm from '@/components/ResumeForm';
import ResumePreview from '@/components/ResumePreview';
import TemplateSelector from '@/components/TemplateSelector';

export interface PersonalInfo {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
    portfolio: string;
    summary: string;
}

export interface Experience {
    id: string;
    company: string;
    position: string;
    location: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string[];
}

export interface Education {
    id: string;
    institution: string;
    degree: string;
    field: string;
    location: string;
    startDate: string;
    endDate: string;
    gpa?: string;
    achievements: string[];
}

export interface Project {
    id: string;
    name: string;
    description: string;
    technologies: string[];
    link?: string;
    github?: string;
    highlights: string[];
}

export interface Skill {
    category: string;
    items: string[];
}

export interface ResumeData {
    personalInfo: PersonalInfo;
    experience: Experience[];
    education: Education[];
    projects: Project[];
    skills: Skill[];
    certifications: string[];
    languages: string[];
}

const initialResumeData: ResumeData = {
    personalInfo: {
        fullName: '',
        email: '',
        phone: '',
        location: '',
        linkedin: '',
        github: '',
        portfolio: '',
        summary: '',
    },
    experience: [],
    education: [],
    projects: [],
    skills: [],
    certifications: [],
    languages: [],
};

export default function ResumeBuilderPage() {
    const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
    const [selectedTemplate, setSelectedTemplate] = useState('modern');
    const [activeSection, setActiveSection] = useState('personal');
    const [isPreviewMode, setIsPreviewMode] = useState(false);
    const resumeRef = useRef<HTMLDivElement>(null);

    const handleDataChange = (section: keyof ResumeData, data: any) => {
        setResumeData((prev) => ({
            ...prev,
            [section]: data,
        }));
    };

    const handleDownloadPDF = async () => {
        if (typeof window !== 'undefined') {
            const html2pdf = (await import('html2pdf.js')).default;
            const element = resumeRef.current;

            if (element) {
                const opt = {
                    margin: 0.5,
                    filename: `${resumeData.personalInfo.fullName || 'resume'}.pdf`,
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { scale: 2 },
                    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
                };

                html2pdf().set(opt).from(element).save();
            }
        }
    };

    const sections = [
        { id: 'personal', label: 'Personal Info', icon: '👤' },
        { id: 'experience', label: 'Experience', icon: '💼' },
        { id: 'education', label: 'Education', icon: '🎓' },
        { id: 'projects', label: 'Projects', icon: '🚀' },
        { id: 'skills', label: 'Skills', icon: '⚡' },
        { id: 'additional', label: 'Additional', icon: '📋' },
    ];

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50"
            data-oid="mxu.ido"
        >
            <MainNavbar data-oid="8726ne1" />

            {/* Hero Section */}
            <section
                className="bg-gradient-to-r from-[hsl(196,80%,45%)] via-[hsl(210,70%,45%)] to-[hsl(175,70%,41%)] text-white py-16"
                data-oid="r.a49a3"
            >
                <div
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
                    data-oid="m94slck"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4" data-oid="a2.8p:d">
                        Professional Resume Builder
                    </h1>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto" data-oid="3yzmeuw">
                        Create a stunning resume in minutes with our AI-powered builder. Choose from
                        professional templates and land your dream job.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm" data-oid=".gnpk.a">
                        <div
                            className="flex items-center bg-white/20 px-4 py-2 rounded-full"
                            data-oid="k1hupx9"
                        >
                            <span className="mr-2" data-oid="9pd.5n-">
                                ✨
                            </span>
                            ATS-Friendly Templates
                        </div>
                        <div
                            className="flex items-center bg-white/20 px-4 py-2 rounded-full"
                            data-oid="p.5jf.n"
                        >
                            <span className="mr-2" data-oid="jwuy8b2">
                                📱
                            </span>
                            Mobile Responsive
                        </div>
                        <div
                            className="flex items-center bg-white/20 px-4 py-2 rounded-full"
                            data-oid="ij.p9wq"
                        >
                            <span className="mr-2" data-oid="m66.f2r">
                                ⚡
                            </span>
                            Instant PDF Download
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-oid="ttloge3">
                {/* Template Selection */}
                <div className="mb-8" data-oid="q4femwu">
                    <TemplateSelector
                        selectedTemplate={selectedTemplate}
                        onTemplateChange={setSelectedTemplate}
                        data-oid="mt683nm"
                    />
                </div>

                {/* Progress Bar */}
                <div className="mb-8" data-oid="vlsnsxs">
                    <div className="bg-white rounded-lg shadow-sm border p-4" data-oid="y0-nxhp">
                        <div className="flex items-center justify-between mb-2" data-oid="_6wgkji">
                            <h3 className="text-lg font-semibold text-gray-800" data-oid="mpuo9y1">
                                Resume Progress
                            </h3>
                            <span className="text-sm text-gray-600" data-oid="v4bd4r-">
                                {Math.round(
                                    (Object.values(resumeData).filter((section) =>
                                        Array.isArray(section)
                                            ? section.length > 0
                                            : typeof section === 'object'
                                              ? Object.values(section).some((val) => val !== '')
                                              : false,
                                    ).length /
                                        6) *
                                        100,
                                )}
                                % Complete
                            </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2" data-oid="ugcueb9">
                            <div
                                className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] h-2 rounded-full transition-all duration-300"
                                style={{
                                    width: `${Math.round(
                                        (Object.values(resumeData).filter((section) =>
                                            Array.isArray(section)
                                                ? section.length > 0
                                                : typeof section === 'object'
                                                  ? Object.values(section).some((val) => val !== '')
                                                  : false,
                                        ).length /
                                            6) *
                                            100,
                                    )}%`,
                                }}
                                data-oid="2obxhcn"
                            ></div>
                        </div>
                    </div>
                </div>

                {/* Main Builder Interface */}
                <div className="grid lg:grid-cols-2 gap-8" data-oid="y:3fx2j">
                    {/* Form Section */}
                    <div className="space-y-6" data-oid="dp68l1.">
                        {/* Section Navigation */}
                        <div
                            className="bg-white rounded-lg shadow-sm border p-4"
                            data-oid="3:incch"
                        >
                            <div
                                className="grid grid-cols-2 md:grid-cols-3 gap-2"
                                data-oid="-r-:siz"
                            >
                                {sections.map((section) => (
                                    <button
                                        key={section.id}
                                        onClick={() => setActiveSection(section.id)}
                                        className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                                            activeSection === section.id
                                                ? 'bg-[hsl(196,80%,45%)] text-white shadow-md'
                                                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                        }`}
                                        data-oid="_ynk4hg"
                                    >
                                        <div
                                            className="flex flex-col items-center"
                                            data-oid="5p2ixbj"
                                        >
                                            <span className="text-lg mb-1" data-oid="o_dgsfl">
                                                {section.icon}
                                            </span>
                                            <span data-oid="dd.myyt">{section.label}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Form Content */}
                        <div className="bg-white rounded-lg shadow-sm border" data-oid="vtw:w6a">
                            <ResumeForm
                                resumeData={resumeData}
                                activeSection={activeSection}
                                onDataChange={handleDataChange}
                                data-oid="gte-bwo"
                            />
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4" data-oid="_3-gxzd">
                            <button
                                onClick={() => setIsPreviewMode(!isPreviewMode)}
                                className="flex-1 md:flex-none px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200"
                                data-oid=":_wd:h."
                            >
                                {isPreviewMode ? 'Edit Resume' : 'Preview Resume'}
                            </button>
                            <button
                                onClick={handleDownloadPDF}
                                className="flex-1 md:flex-none px-6 py-3 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg font-medium hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300 transform hover:scale-105"
                                data-oid="w.08bwi"
                            >
                                Download PDF
                            </button>
                        </div>
                    </div>

                    {/* Preview Section */}
                    <div className="lg:sticky lg:top-24 lg:h-fit" data-oid="srklgyx">
                        <div
                            className="bg-white rounded-lg shadow-lg border p-6"
                            data-oid="rcf0in1"
                        >
                            <div
                                className="flex items-center justify-between mb-4"
                                data-oid="zpe_i-q"
                            >
                                <h3
                                    className="text-lg font-semibold text-gray-800"
                                    data-oid="4kn3270"
                                >
                                    Live Preview
                                </h3>
                                <div className="flex items-center space-x-2" data-oid="-2-vj.p">
                                    <button
                                        className="p-2 text-gray-500 hover:text-gray-700 rounded-md hover:bg-gray-100"
                                        data-oid="15h3o-k"
                                    >
                                        <svg
                                            className="h-4 w-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid=":ter05n"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                data-oid="mkthzd8"
                                            />
                                        </svg>
                                    </button>
                                    <button
                                        className="p-2 text-gray-500 hover:text-gray-700 rounded-md hover:bg-gray-100"
                                        data-oid="w9zu.ty"
                                    >
                                        <svg
                                            className="h-4 w-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="ezdvmej"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                                                data-oid="ziyx9e7"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div
                                className="border rounded-lg overflow-hidden bg-white"
                                style={{
                                    transform: 'scale(0.8)',
                                    transformOrigin: 'top left',
                                    width: '125%',
                                    height: '125%',
                                }}
                                data-oid="xsx05jp"
                            >
                                <div ref={resumeRef} data-oid="uvq32:0">
                                    <ResumePreview
                                        resumeData={resumeData}
                                        template={selectedTemplate}
                                        data-oid="puwjfwj"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tips Section */}
                <div
                    className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8"
                    data-oid="r27h6r1"
                >
                    <h3
                        className="text-2xl font-bold text-gray-800 mb-6 text-center"
                        data-oid="h0296rg"
                    >
                        Resume Writing Tips
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-oid="80ioo3j">
                        <div className="bg-white p-6 rounded-lg shadow-sm" data-oid="68vf8ai">
                            <div className="text-2xl mb-3" data-oid="0jrvmbl">
                                🎯
                            </div>
                            <h4 className="font-semibold text-gray-800 mb-2" data-oid="0:k6bqs">
                                Tailor Your Resume
                            </h4>
                            <p className="text-gray-600 text-sm" data-oid="3quks_.">
                                Customize your resume for each job application by highlighting
                                relevant skills and experiences.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm" data-oid="gyppu3s">
                            <div className="text-2xl mb-3" data-oid="4yf39bi">
                                📊
                            </div>
                            <h4 className="font-semibold text-gray-800 mb-2" data-oid="25vs.lh">
                                Use Numbers
                            </h4>
                            <p className="text-gray-600 text-sm" data-oid="766fcjs">
                                Quantify your achievements with specific numbers, percentages, and
                                metrics whenever possible.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm" data-oid="e..uy0x">
                            <div className="text-2xl mb-3" data-oid="u.cd4fm">
                                🔍
                            </div>
                            <h4 className="font-semibold text-gray-800 mb-2" data-oid="z-8a6o-">
                                Keywords Matter
                            </h4>
                            <p className="text-gray-600 text-sm" data-oid="fn9j0fw">
                                Include relevant keywords from the job description to pass through
                                ATS systems.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
