'use client';

export const dynamic = 'force-dynamic'

import MainNavbar from '@/components/mainNavbar';
import ResumeForm from '@/components/ResumeForm';
import ResumePreview from '@/components/ResumePreview';
import SubscriptionStatus from '@/components/SubscriptionStatus';
import ResumeEmptyState from '@/components/ResumeEmptyState';
import TemplateSelector from '@/components/TemplateSelector';
import { getMyResume, saveResume } from '@/lib/api/services';
import { Save, RefreshCw, CheckCircle, AlertCircle, Clock, Plus } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// --- INTERFACE DEFINITIONS ---

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

// --- START: Helper Function for URL Sanitization (CRITICAL FIX) ---

/**
 * Ensures a URL starts with 'http://' or 'https://'.
 * This is crucial for making links clickable in the PDF generation process (html2pdf).
 * @param url The input URL string.
 * @returns The sanitized URL string.
 */
const sanitizeUrl = (url: string): string => {
    if (!url) return '';
    const trimmedUrl = url.trim();
    if (!trimmedUrl) return '';

    // Check if the URL already has a protocol prefix
    if (!/^https?:\/\//i.test(trimmedUrl)) {
        // Assume https and prepend it
        return `https://${trimmedUrl}`;
    }
    return trimmedUrl;
};

// --- END: Helper Function for URL Sanitization ---

export default function ResumeBuilderPage() {
    const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
    const [savedResumeData, setSavedResumeData] = useState<ResumeData>(initialResumeData);
    const [selectedTemplate, setSelectedTemplate] = useState('vinod'); 
    const [fontFamily, setFontFamily] = useState('Inter');
    const [activeSection, setActiveSection] = useState('personal');
    const [zoomLevel, setZoomLevel] = useState(0.7);
    const [isSaving, setIsSaving] = useState(false);
    const [lastSaved, setLastSaved] = useState<Date | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [showEmptyState, setShowEmptyState] = useState(false);
    const resumeRef = useRef<HTMLDivElement>(null);

    const hasUnsavedChanges = JSON.stringify(resumeData) !== JSON.stringify(savedResumeData);
    const isDataEmpty = !resumeData.personalInfo.fullName && resumeData.experience.length === 0 && resumeData.education.length === 0;

    // Fetch initial data
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
                    setShowEmptyState(false);
                } else {
                    setShowEmptyState(true);
                }
            } catch (error) {
                ; void /* console.error */ ((..._args) => {})('Failed to fetch resume:', error);
                setShowEmptyState(true);
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
                templateId: selectedTemplate
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
        // Validation checks
        const { fullName, email } = resumeData.personalInfo;
        if (!fullName || !email) {
            alert('Please fill in your Full Name and Email before downloading.');
            return;
        }
        if (!/@gmail\.com$/.test(email.toLowerCase())) {
            alert('Please use a valid @gmail.com address.');
            return;
        }

        if (typeof window !== 'undefined') {
            try {
                const html2pdf = (await import('html2pdf.js')).default;
                const element = resumeRef.current;

                if (element) {
                    const opt = {
                        margin: 0,
                        filename: `${resumeData.personalInfo.fullName || 'resume'}.pdf`,
                        image: { type: 'jpeg', quality: 0.98 },
                        html2canvas: { 
                            scale: 2,
                            useCORS: true,
                            letterRendering: true
                        },
                        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
                    };

                    html2pdf().set(opt).from(element).save();
                }
            } catch (error) {
                ; void /* console.error */ ((..._args) => {})('PDF generation error:', error);
                alert('Failed to generate PDF. Please try again.');
            }
        }
    };

    const handleDownloadDoc = () => {
        if (resumeRef.current) {
            const content = resumeRef.current.innerHTML;
            const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
                "xmlns:w='urn:schemas-microsoft-com:office:word' "+
                "xmlns='http://www.w3.org/TR/REC-html40'>"+
                "<head><meta charset='utf-8'><title>Resume</title></head><body>";
            const footer = "</body></html>";
            const sourceHTML = header+content+footer;
            
            const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
            const fileDownload = document.createElement("a");
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
        { id: 'personal', label: 'Personal', icon: '👤' },
        { id: 'experience', label: 'Experience', icon: '💼' },
        { id: 'education', label: 'Education', icon: '🎓' },
        { id: 'projects', label: 'Projects', icon: '🚀' },
        { id: 'skills', label: 'Skills', icon: '⚡' },
        { id: 'additional', label: 'Extra', icon: '📋' },
        { id: 'design', label: 'Design', icon: '🎨' },
    ];

    if (isLoading) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                <div className="text-center p-8 bg-white rounded-2xl shadow-xl border border-blue-100">
                    <div className="relative w-16 h-16 mx-auto mb-4">
                        <div className="absolute inset-0 border-4 border-blue-100 rounded-full"></div>
                        <div className="absolute inset-0 border-4 border-t-blue-600 rounded-full animate-spin"></div>
                    </div>
                    <p className="text-slate-600 font-semibold text-lg">Preparing Workspace...</p>
                    <p className="text-slate-400 text-sm mt-1">Loading your resume data</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f1f5f9]">
            <MainNavbar />

            {/* Premium Header Bar */}
            <div className="sticky top-[64px] z-40 bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-sm">
                <div className="max-w-[1600px] mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                        <div className="flex flex-col">
                            <h1 className="text-lg font-bold text-slate-800 tracking-tight leading-none">
                                AI Resume Builder
                            </h1>
                            <span className="text-[10px] text-slate-400 font-medium uppercase tracking-widest mt-1">
                                Premium Workspace
                            </span>
                        </div>
                        <div className="h-8 w-px bg-slate-200"></div>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200">
                                {hasUnsavedChanges ? (
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse mr-2"></div>
                                        <span className="text-xs font-bold text-amber-700">Unsaved Changes</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                                        <span className="text-xs font-bold text-emerald-700">Everything Saved</span>
                                    </div>
                                )}
                            </div>
                            {lastSaved && (
                                <span className="text-[11px] text-slate-400 font-medium italic hidden md:block">
                                    Last sync: {lastSaved.toLocaleTimeString()}
                                </span>
                            )}
                        </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                        <button
                            onClick={handleSave}
                            disabled={!hasUnsavedChanges || isSaving}
                            className={`relative group px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 overflow-hidden ${
                                hasUnsavedChanges 
                                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200 active:scale-95' 
                                    : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                            }`}
                        >
                            <span className="relative z-10 flex items-center">
                                {isSaving ? <RefreshCw className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
                                {isSaving ? 'Syncing...' : 'Save Progress'}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-[1600px] mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-[450px,1fr] gap-8 items-start">
                    
                    {/* Left Panel: Editor */}
                    <div className="space-y-6 lg:sticky lg:top-[144px]">
                        <SubscriptionStatus />
                        
                        {showEmptyState && isDataEmpty ? (
                            <ResumeEmptyState onStart={() => setShowEmptyState(false)} />
                        ) : (
                            <>
                        {/* Section Navigation Tabs */}
                        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-2 overflow-x-auto no-scrollbar">
                            <div className="flex items-center space-x-1">
                                {sections.map((section) => (
                                    <button
                                        key={section.id}
                                        onClick={() => setActiveSection(section.id)}
                                        className={`flex-shrink-0 px-4 py-3 rounded-xl transition-all duration-200 flex flex-col items-center min-w-[70px] ${
                                            activeSection === section.id
                                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                                                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
                                        }`}
                                    >
                                        <span className="text-xl mb-1">{section.icon}</span>
                                        <span className="text-[10px] font-bold uppercase tracking-wider">{section.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Template Selection Quick Tool */}
                        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
                            <div className="bg-slate-50 px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Active Template</span>
                                <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-bold">PRO</span>
                            </div>
                            <div className="p-4">
                                <TemplateSelector
                                    selectedTemplate={selectedTemplate}
                                    onTemplateChange={setSelectedTemplate}
                                />
                            </div>
                        </div>

                        {/* Main Editor Component */}
                        <div className="bg-white rounded-2xl shadow-2xl shadow-slate-200/80 border border-slate-100 overflow-hidden ring-1 ring-black/5">
                            <ResumeForm
                                resumeData={resumeData}
                                activeSection={activeSection}
                                onDataChange={handleDataChange}
                                selectedTemplate={selectedTemplate}
                                fontFamily={fontFamily}
                                onFontChange={setFontFamily}
                            />
                        </div>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                onClick={handleDownloadPDF}
                                className="group flex items-center justify-center px-6 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-black transition-all duration-300 shadow-xl active:scale-[0.98]"
                            >
                                <svg className="w-5 h-5 mr-3 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Export PDF
                            </button>
                            <button
                                onClick={handleDownloadDoc}
                                className="flex items-center justify-center px-6 py-4 bg-white text-blue-600 border-2 border-blue-100 rounded-2xl font-bold hover:bg-blue-50 hover:border-blue-200 transition-all duration-300 shadow-md active:scale-[0.98]"
                            >
                                Download DOCX
                            </button>
                        </div>
                            </>
                        )}
                    </div>

                    {/* Right Panel: Live Preview (Document Simulator) */}
                    <div className="lg:sticky lg:top-[144px] h-[calc(100vh-176px)]">
                        <div className="bg-slate-200/50 rounded-3xl p-6 h-full flex flex-col border border-slate-300/30 shadow-inner">
                            {/* Toolbar */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-2xl border border-white shadow-sm">
                                    <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></div>
                                    <h3 className="text-sm font-bold text-slate-800">Live Render</h3>
                                </div>
                                
                                <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm p-1.5 rounded-2xl border border-white shadow-sm">
                                    <button onClick={handleZoomOut} className="p-2 hover:bg-white rounded-xl transition-all shadow-sm text-slate-600 active:scale-90">
                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M20 12H4" /></svg>
                                    </button>
                                    <div className="px-3 border-x border-slate-200">
                                        <span className="text-xs font-bold text-slate-700 tabular-nums">{Math.round(zoomLevel * 100)}%</span>
                                    </div>
                                    <button onClick={handleZoomIn} className="p-2 hover:bg-white rounded-xl transition-all shadow-sm text-slate-600 active:scale-90">
                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" /></svg>
                                    </button>
                                </div>
                            </div>
                            
                            {/* Preview Area (Simulating a desk/surface) */}
                            <div className="flex-1 overflow-auto rounded-2xl bg-slate-400/10 shadow-inner border border-black/5 flex justify-center custom-scrollbar">
                                <div 
                                    className="origin-top p-8 lg:p-12"
                                    style={{
                                        transform: `scale(${zoomLevel})`,
                                        width: '8.5in', // Standard Letter width
                                        transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
                                    }}
                                >
                                    <div 
                                        ref={resumeRef}
                                        className="shadow-2xl shadow-black/20 bg-white ring-1 ring-black/5"
                                    >
                                        <ResumePreview
                                            resumeData={resumeData}
                                            template={selectedTemplate}
                                            fontFamily={fontFamily}
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            {/* Tips Overlay */}
                            <div className="mt-4 flex items-center justify-center space-x-6 text-[11px] text-slate-500 font-medium">
                                <span className="flex items-center"><CheckCircle className="w-3 h-3 mr-1 text-emerald-500" /> ATS Optimized</span>
                                <span className="flex items-center"><CheckCircle className="w-3 h-3 mr-1 text-emerald-500" /> High-Resolution Export</span>
                                <span className="flex items-center"><CheckCircle className="w-3 h-3 mr-1 text-emerald-500" /> Multi-Template Ready</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
