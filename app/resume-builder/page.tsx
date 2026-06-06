'use client';

export const dynamic = 'force-dynamic';

import MainNavbar from '@/components/mainNavbar';
import ResumeForm from '@/components/ResumeForm';
import ResumePreview from '@/components/ResumePreview';
import SubscriptionStatus from '@/components/SubscriptionStatus';
import TemplateSelector from '@/components/TemplateSelector';
import { getMyResume, saveResume } from '@/lib/api/services';
import { getResumePrintStorageKey } from '@/lib/resumeExport/printPayload';
import {
    BASIC_TEMPLATE_ID,
    basicTemplateVisibleSections,
    cloneBasicTemplateDefaults,
} from '@/lib/resumeTemplates/basic';
import {
    BriefcaseBusiness,
    CheckCircle,
    Download,
    FileText,
    GraduationCap,
    Minus,
    Plus,
    RefreshCw,
    Save,
    UserRound,
    Wrench,
    FolderKanban,
    type LucideIcon,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

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
    startDate: string;
    endDate: string;
    current: boolean;
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

const sanitizeUrl = (url: string): string => {
    if (!url) return '';
    const trimmedUrl = url.trim();
    if (!trimmedUrl) return '';

    if (!/^https?:\/\//i.test(trimmedUrl)) {
        return `https://${trimmedUrl}`;
    }

    return trimmedUrl;
};

export default function ResumeBuilderPage() {
    const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
    const [savedResumeData, setSavedResumeData] = useState<ResumeData>(initialResumeData);
    const [selectedTemplate, setSelectedTemplate] = useState(BASIC_TEMPLATE_ID);
    const [activeSection, setActiveSection] = useState('personal');
    const [zoomLevel, setZoomLevel] = useState(0.7);
    const [isSaving, setIsSaving] = useState(false);
    const [lastSaved, setLastSaved] = useState<Date | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const resumeRef = useRef<HTMLDivElement>(null);
    const exportResumeRef = useRef<HTMLDivElement>(null);
    const fontFamily = 'Inter';

    const hasUnsavedChanges = JSON.stringify(resumeData) !== JSON.stringify(savedResumeData);
    const visibleSectionIds =
        selectedTemplate === BASIC_TEMPLATE_ID
            ? [...basicTemplateVisibleSections]
            : ['personal', 'experience', 'education', 'projects', 'skills', 'additional'];

    useEffect(() => {
        const fetchResume = async () => {
            try {
                setIsLoading(true);
                const response = await getMyResume();

                if (response.success && response.data?.resume) {
                    const data = response.data.resume.data;
                    setResumeData(data);
                    setSavedResumeData(data);

                    if (response.data.resume.templateId) {
                        setSelectedTemplate(response.data.resume.templateId);
                    }

                    if (response.data.resume.updatedAt) {
                        setLastSaved(new Date(response.data.resume.updatedAt));
                    }
                } else {
                    const seededData = cloneBasicTemplateDefaults();
                    setResumeData(seededData);
                    setSavedResumeData(seededData);
                    setSelectedTemplate(BASIC_TEMPLATE_ID);
                }
            } catch (error) {
                ; void /* console.error */ ((..._args) => {})('Failed to fetch resume:', error);
                const seededData = cloneBasicTemplateDefaults();
                setResumeData(seededData);
                setSavedResumeData(seededData);
                setSelectedTemplate(BASIC_TEMPLATE_ID);
            } finally {
                setIsLoading(false);
            }
        };

        fetchResume();
    }, []);

    const handleSave = async () => {
        try {
            setIsSaving(true);
            const response = await saveResume({
                data: resumeData,
                templateId: selectedTemplate,
            });

            if (response.success) {
                setSavedResumeData(JSON.parse(JSON.stringify(resumeData)));
                setLastSaved(new Date());
            }
        } catch (error) {
            ; void /* console.error */ ((..._args) => {})('Failed to save resume:', error);
            alert('Failed to save resume. Please try again.');
        } finally {
            setIsSaving(false);
        }
    };

    const handleDataChange = (section: keyof ResumeData, data: any) => {
        if (section === 'personalInfo') {
            const personalInfoData = data as PersonalInfo;
            const sanitizedData: PersonalInfo = {
                ...personalInfoData,
                linkedin: sanitizeUrl(personalInfoData.linkedin),
                github: sanitizeUrl(personalInfoData.github),
                portfolio: sanitizeUrl(personalInfoData.portfolio),
            };

            setResumeData((prev) => ({
                ...prev,
                [section]: sanitizedData,
            }));
            return;
        }

        setResumeData((prev) => ({
            ...prev,
            [section]: data,
        }));
    };

    const handleDownloadPDF = async () => {
        const { fullName, email } = resumeData.personalInfo;
        if (!fullName || !email) {
            alert('Please fill in your Full Name and Email before downloading.');
            return;
        }

        if (typeof window !== 'undefined') {
            try {
                const token = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
                const storageKey = getResumePrintStorageKey(token);
                const printWindow = window.open('', '_blank');

                if (!printWindow) {
                    throw new Error('Unable to open print window');
                }

                window.localStorage.setItem(
                    storageKey,
                    JSON.stringify({
                        resumeData,
                        template: selectedTemplate,
                        fontFamily,
                    }),
                );

                printWindow.location.href = `/resume-builder/print?token=${encodeURIComponent(token)}`;
            } catch (error) {
                ; void /* console.error */ ((..._args) => {})('PDF generation error:', error);
                alert('Failed to generate PDF. Please try again.');
            }
        }
    };

    const handleDownloadDoc = () => {
        if (exportResumeRef.current) {
            const content = exportResumeRef.current.innerHTML;
            const header =
                "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
                "xmlns:w='urn:schemas-microsoft-com:office:word' " +
                "xmlns='http://www.w3.org/TR/REC-html40'>" +
                "<head><meta charset='utf-8'><title>Resume</title><style>.resume-export-root{background:#fff}.resume-export-page{page-break-after:always;break-after:page;box-shadow:none !important;margin:0 auto;} .resume-export-page:last-child{page-break-after:auto;break-after:auto;} .break-inside-avoid{page-break-inside:avoid;break-inside:avoid;}</style></head><body>";
            const footer = '</body></html>';
            const sourceHTML = header + content + footer;
            const source = `data:application/vnd.ms-word;charset=utf-8,${encodeURIComponent(sourceHTML)}`;
            const fileDownload = document.createElement('a');

            document.body.appendChild(fileDownload);
            fileDownload.href = source;
            fileDownload.download = `${resumeData.personalInfo.fullName || 'resume'}.doc`;
            fileDownload.click();
            document.body.removeChild(fileDownload);
        }
    };

    const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.1, 1.5));
    const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.1, 0.3));

    const sections = [
        { id: 'personal', label: 'Personal', icon: UserRound },
        { id: 'experience', label: 'Experience', icon: BriefcaseBusiness },
        { id: 'education', label: 'Education', icon: GraduationCap },
        { id: 'projects', label: 'Projects', icon: FolderKanban },
        { id: 'skills', label: 'Skills', icon: Wrench },
        { id: 'additional', label: 'Extra', icon: FileText },
    ].filter((section) => visibleSectionIds.includes(section.id));

    const activeSectionMeta = sections.find((section) => section.id === activeSection) ?? sections[0];

    if (isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-slate-50">
                <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
                    <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-slate-900"></div>
                    <p className="text-lg font-semibold text-slate-700">Loading your resume</p>
                    <p className="mt-1 text-sm text-slate-500">Preparing the builder workspace</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <MainNavbar />

            <div className="sticky top-0 z-[60] border-b border-slate-200/70 bg-white/90 backdrop-blur-xl shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
                <div className="mx-auto flex max-w-[1500px] items-center justify-between px-4 py-3 sm:px-5">
                    <div className="flex items-center space-x-6">
                        <div className="flex flex-col">
                            <h1 className="text-lg font-bold leading-none tracking-tight text-slate-800">
                                AI Resume Builder
                            </h1>
                            <span className="mt-1 text-[10px] font-medium uppercase tracking-widest text-slate-400">
                                Premium Workspace
                            </span>
                        </div>
                        <div className="hidden h-8 w-px bg-slate-200 md:block"></div>
                        <div className="hidden items-center space-x-4 md:flex">
                            <div className="flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5">
                                {hasUnsavedChanges ? (
                                    <div className="flex items-center">
                                        <div className="mr-2 h-2 w-2 animate-pulse rounded-full bg-amber-500"></div>
                                        <span className="text-xs font-bold text-amber-700">Unsaved Changes</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center">
                                        <div className="mr-2 h-2 w-2 rounded-full bg-emerald-500"></div>
                                        <span className="text-xs font-bold text-emerald-700">Everything Saved</span>
                                    </div>
                                )}
                            </div>
                            {lastSaved && (
                                <span className="text-[11px] font-medium italic text-slate-400">
                                    Last sync: {lastSaved.toLocaleTimeString()}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={handleSave}
                            disabled={!hasUnsavedChanges || isSaving}
                            className={`relative rounded-xl px-6 py-2.5 text-sm font-bold transition-all duration-300 ${
                                hasUnsavedChanges
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 hover:bg-blue-700 active:scale-95'
                                    : 'cursor-not-allowed bg-slate-100 text-slate-400'
                            }`}
                        >
                            <span className="flex items-center">
                                {isSaving ? (
                                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                                ) : (
                                    <Save className="mr-2 h-4 w-4" />
                                )}
                                {isSaving ? 'Syncing...' : 'Save Progress'}
                            </span>
                        </button>

                        <button
                            onClick={handleDownloadPDF}
                            className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:bg-black active:scale-95"
                        >
                            <span className="flex items-center">
                                <Download className="mr-2 h-4 w-4" />
                                Download PDF
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="mx-auto grid max-w-[1500px] gap-6 px-4 py-6 sm:px-5 xl:grid-cols-[620px,minmax(0,1fr)]">
                <div className="space-y-6">
                    <SubscriptionStatus className="shadow-none" />

                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                        <div className="mb-4">
                            <h2 className="text-xl font-bold text-slate-800">
                                Template
                            </h2>
                            <p className="mt-1 text-sm text-slate-500">
                                Pick a layout before exporting.
                            </p>
                        </div>
                        <TemplateSelector
                            selectedTemplate={selectedTemplate}
                            onTemplateChange={setSelectedTemplate}
                        />
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                        <div className="mb-4">
                            <h2 className="text-xl font-bold text-slate-800">
                                Sections
                            </h2>
                            <p className="mt-1 text-sm text-slate-500">
                                Choose what you want to edit.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                            {sections.map((section) => {
                                const Icon = section.icon as LucideIcon;

                                return (
                                    <button
                                        key={section.id}
                                        onClick={() => setActiveSection(section.id)}
                                        className={`flex items-center gap-2 rounded-xl border px-3 py-3 text-left text-sm transition ${
                                            activeSection === section.id
                                                ? 'border-slate-900 bg-slate-900 text-white'
                                                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                                        }`}
                                    >
                                        <Icon className="h-4 w-4 shrink-0" />
                                        <span className="font-medium">{section.label}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white h-[70vh] xl:h-[calc(100vh-341px)]">
                        <div className="h-full overflow-y-auto">
                        <ResumeForm
                            resumeData={resumeData}
                            activeSection={activeSection}
                            onDataChange={handleDataChange}
                            selectedTemplate={selectedTemplate}
                        />
                        </div>
                    </div>
                </div>

                <div className="xl:sticky xl:top-[96px] xl:h-[calc(100vh-120px)]">
                    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white">
                        <div className="flex flex-col gap-3 border-b border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <h2 className="text-lg font-semibold text-slate-900">Preview</h2>
                                <p className="mt-1 text-sm text-slate-500">
                                    Check the final layout while you edit.
                                </p>
                            </div>

                            <div className="flex items-center gap-2 self-start rounded-xl border border-slate-200 bg-slate-50 p-1">
                                <button
                                    onClick={handleZoomOut}
                                    className="rounded-lg p-2 text-slate-600 transition hover:bg-white"
                                    aria-label="Zoom out"
                                >
                                    <Minus className="h-4 w-4" />
                                </button>
                                <div className="min-w-[64px] px-2 text-center text-sm font-medium text-slate-700">
                                    {Math.round(zoomLevel * 100)}%
                                </div>
                                <button
                                    onClick={handleZoomIn}
                                    className="rounded-lg p-2 text-slate-600 transition hover:bg-white"
                                    aria-label="Zoom in"
                                >
                                    <Plus className="h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        <div className="flex-1 overflow-auto bg-slate-100 p-4 sm:p-6">
                            <div className="flex justify-center items-start">
                                <div
                                    className="origin-top"
                                    style={{
                                        zoom: zoomLevel,
                                        width: '8.5in',
                                        transition: 'zoom 0.2s ease',
                                    }}
                                >
                                    <div
                                        ref={resumeRef}
                                        className="overflow-hidden bg-white shadow-[0_12px_36px_rgba(15,23,42,0.16)] ring-1 ring-black/5"
                                    >
                                        <ResumePreview
                                            resumeData={resumeData}
                                            template={selectedTemplate}
                                            fontFamily={fontFamily}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
{/* 
                        <div className="flex items-center gap-2 border-t border-slate-200 px-5 py-4 text-sm text-slate-500">
                            <CheckCircle className="h-4 w-4 text-emerald-500" />
                            Live preview updates as you edit.
                        </div> */}
                    </div>
                </div>
            </div>

            <div className="pointer-events-none fixed left-[-99999px] top-0 opacity-0">
                <div ref={exportResumeRef} className="resume-export-root bg-white">
                    <ResumePreview
                        resumeData={resumeData}
                        template={selectedTemplate}
                        fontFamily={fontFamily}
                        isExport={true}
                    />
                </div>
            </div>
        </div>
    );
}
