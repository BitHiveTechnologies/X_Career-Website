'use client';

import { useState } from 'react';
import {
    ResumeData,
    PersonalInfo,
    Experience,
    Education,
    Project,
    Skill,
} from '@/app/resume-builder/page';
import { BASIC_TEMPLATE_ID } from '@/lib/resumeTemplates/basic';

interface ResumeFormProps {
    resumeData: ResumeData;
    activeSection: string;
    onDataChange: (section: keyof ResumeData, data: any) => void;
    selectedTemplate?: string;
}

export default function ResumeForm({ 
    resumeData, 
    activeSection, 
    onDataChange, 
    selectedTemplate
}: ResumeFormProps) {
    const [newSkillCategory, setNewSkillCategory] = useState('');
    const [skillItemDrafts, setSkillItemDrafts] = useState<Record<number, string>>({});
    const [projectTechnologyDrafts, setProjectTechnologyDrafts] = useState<Record<string, string>>({});
    const [emailError, setEmailError] = useState('');
    const isBasicLatexTemplate = selectedTemplate === BASIC_TEMPLATE_ID;

    const parseCommaSeparated = (value: string) =>
        value.split(',').map((item) => item.trim()).filter((item) => item);

    const handlePersonalInfoChange = (field: keyof PersonalInfo, value: string) => {
        // NOTE: The URL sanitization logic is now handled in the parent component (ResumeBuilderPage.tsx)
        // before calling onDataChange('personalInfo', ...), ensuring full URLs are stored

        onDataChange('personalInfo', {
            ...resumeData.personalInfo,
            [field]: value,
        });
    };

    const addExperience = () => {
        const newExperience: Experience = {
            id: Date.now().toString(),
            company: '',
            position: '',
            location: '',
            startDate: '',
            endDate: '',
            current: false,
            description: [''],
        };
        onDataChange('experience', [...resumeData.experience, newExperience]);
    };

    const updateExperience = (id: string, field: keyof Experience, value: any) => {
        const updated = resumeData.experience.map((exp) =>
            exp.id === id ? { ...exp, [field]: value } : exp,
        );
        onDataChange('experience', updated);
    };

    const removeExperience = (id: string) => {
        onDataChange(
            'experience',
            resumeData.experience.filter((exp) => exp.id !== id),
        );
    };

    const addEducation = () => {
        const newEducation: Education = {
            id: Date.now().toString(),
            institution: '',
            degree: '',
            field: '',
            location: '',
            startDate: '',
            endDate: '',
            gpa: '',
            achievements: [''],
        };
        onDataChange('education', [...resumeData.education, newEducation]);
    };

    const updateEducation = (id: string, field: keyof Education, value: any) => {
        const updated = resumeData.education.map((edu) =>
            edu.id === id ? { ...edu, [field]: value } : edu,
        );
        onDataChange('education', updated);
    };

    const removeEducation = (id: string) => {
        onDataChange(
            'education',
            resumeData.education.filter((edu) => edu.id !== id),
        );
    };

    const addProject = () => {
        const newProject: Project = {
            id: Date.now().toString(),
            name: '',
            description: '',
            technologies: [],
            startDate: '',
            endDate: '',
            current: false,
            link: '',
            github: '',
            highlights: [''],
        };
        onDataChange('projects', [...resumeData.projects, newProject]);
    };

    const updateProject = (id: string, field: keyof Project, value: any) => {
        const updated = resumeData.projects.map((proj) =>
            proj.id === id ? { ...proj, [field]: value } : proj,
        );
        onDataChange('projects', updated);
    };

    const removeProject = (id: string) => {
        onDataChange(
            'projects',
            resumeData.projects.filter((proj) => proj.id !== id),
        );
    };

    const addSkillCategory = () => {
        if (newSkillCategory.trim()) {
            const newSkill: Skill = {
                category: newSkillCategory.trim(),
                items: [],
            };
            onDataChange('skills', [...resumeData.skills, newSkill]);
            setNewSkillCategory('');
        }
    };

    const updateSkillCategory = (index: number, field: keyof Skill, value: any) => {
        const updated = resumeData.skills.map((skill, i) =>
            i === index ? { ...skill, [field]: value } : skill,
        );
        onDataChange('skills', updated);
    };

    const removeSkillCategory = (index: number) => {
        onDataChange(
            'skills',
            resumeData.skills.filter((_, i) => i !== index),
        );
    };

    const renderPersonalInfo = () => (
        <div className="space-y-8 pt-0 p-6" data-oid="-..0rpg">
            <div className="sticky top-0 z-10 -mx-6 flex items-center justify-between border-b border-slate-100 bg-white px-6 py-4">
                <div>
                    <h3 className="text-xl font-bold text-slate-800" data-oid="rbfho6l">
                        Personal Details
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">Basic information for your resume header</p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6" data-oid="4wa0qke">
                <div className="space-y-2" data-oid="qg4k::_">
                    <label
                        className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1"
                        data-oid="nd-0d5s"
                    >
                        Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                        type="text"
                        value={resumeData.personalInfo.fullName}
                        onChange={(e) => handlePersonalInfoChange('fullName', e.target.value)}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm font-medium"
                        placeholder="John Doe"
                        data-oid="o6h5:2b"
                    />
                </div>

                <div className="space-y-2" data-oid="23.7492">
                    <label
                        className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1"
                        data-oid="w.49mn3"
                    >
                        Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                        type="email"
                        value={resumeData.personalInfo.email}
                        onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
                        className={`w-full px-4 py-3 bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm font-medium border-slate-200
                        }`}
                        placeholder="john@gmail.com"
                        data-oid="n9_-j5h"
                    />
                    {emailError && !resumeData.personalInfo.email.endsWith('@gmail.com') && (
                        <p className="text-[10px] text-rose-500 font-bold ml-1">{emailError}</p>
                    )}
                </div>

                <div className="space-y-2" data-oid="vlltrlj">
                    <label
                        className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1"
                        data-oid="_n220x4"
                    >
                        Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                        type="tel"
                        value={resumeData.personalInfo.phone}
                        onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm font-medium"
                        placeholder="+91 9876543210"
                        data-oid="wmp.t6c"
                    />
                </div>

                {!isBasicLatexTemplate && (
                    <div className="space-y-2" data-oid="pc67__0">
                        <label
                            className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1"
                            data-oid="98u.mk-"
                        >
                            Current Location
                        </label>
                        <input
                            type="text"
                            value={resumeData.personalInfo.location}
                            onChange={(e) => handlePersonalInfoChange('location', e.target.value)}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm font-medium"
                            placeholder="Bengaluru, India"
                            data-oid="xx:fd3_"
                        />
                    </div>
                )}

                <div className="space-y-2" data-oid="7:5._ih">
                    <label
                        className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1"
                        data-oid="3daetmi"
                    >
                        LinkedIn URL
                    </label>
                    <input
                        type="url"
                        value={resumeData.personalInfo.linkedin}
                        onChange={(e) => handlePersonalInfoChange('linkedin', e.target.value)}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm font-medium"
                        placeholder="https://linkedin.com/in/johndoe"
                        data-oid="5z6l-w1"
                    />
                </div>

                <div className="space-y-2" data-oid="abtgn0:">
                    <label
                        className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1"
                        data-oid="4wrpgh4"
                    >
                        GitHub Profile
                    </label>
                    <input
                        type="url"
                        value={resumeData.personalInfo.github}
                        onChange={(e) => handlePersonalInfoChange('github', e.target.value)}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm font-medium"
                        placeholder="https://github.com/johndoe"
                        data-oid="kdhd0yp"
                    />
                </div>
            </div>

            {!isBasicLatexTemplate && (
                <div className="space-y-2" data-oid="uors82v">
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1" data-oid="tbq5-yu">
                        Professional Summary
                    </label>
                    <textarea
                        value={resumeData.personalInfo.summary}
                        onChange={(e) => handlePersonalInfoChange('summary', e.target.value)}
                        rows={5}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm font-medium resize-none"
                        placeholder="Briefly describe your career goals and highlights..."
                        data-oid="gwi5tcg"
                    />
                </div>
            )}
        </div>
    );

    const renderExperience = () => {
        const isMinimalTemplate = selectedTemplate === 'minimal';
        
        return (
            <div className="space-y-6 pt-0 p-6" data-oid="c1v:7-v">
                <div className="sticky top-0 z-10 -mx-6 flex items-center justify-between border-b border-slate-100 bg-white px-6 py-4" data-oid="f2o7big">
                    <div>
                        <h3 className="text-xl font-bold text-slate-800" data-oid="8i-iq51">
                            Professional Experience
                        </h3>
                        <p className="text-xs text-slate-400 mt-1">Relevant work history and internships</p>
                    </div>
                    {!isMinimalTemplate && (
                        <button
                            onClick={addExperience}
                            className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-black transition-all shadow-lg"
                            data-oid="_65--s:"
                        >
                            + Add Item
                        </button>
                    )}
                </div>
                
                {isMinimalTemplate && (
                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                        <div className="flex items-center gap-3 text-amber-800">
                            <div className="p-2 bg-white rounded-lg shadow-sm">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <span className="font-bold text-sm tracking-tight">Experience Hidden for This Template</span>
                        </div>
                        <p className="text-amber-700/80 text-xs mt-3 leading-relaxed">
                            The "Minimal Clean" template is optimized for fresh graduates. To display experience, please select a "Professional" or "Executive" template.
                        </p>
                    </div>
                )}

            {!isMinimalTemplate && resumeData.experience.map((exp, index) => (
                <div
                    key={exp.id}
                    className="relative bg-slate-50/50 border border-slate-200 rounded-2xl p-6 space-y-6 group transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-200/50"
                    data-oid="i7jab-y"
                >
                    <div className="flex items-center justify-between" data-oid="zx8jiaq">
                        <div className="flex items-center space-x-3">
                            <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold ring-4 ring-blue-50">
                                {index + 1}
                            </span>
                            <h4 className="font-bold text-slate-800 text-sm" data-oid="kjq_g8n">
                                Experience Details
                            </h4>
                        </div>
                        <button
                            onClick={() => removeExperience(exp.id)}
                            className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                            data-oid="6akarly"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6" data-oid="wcnqcd.">
                        <div className="space-y-2" data-oid="8f9bo94">
                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Company</label>
                            <input
                                type="text"
                                value={exp.company}
                                onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                                placeholder="e.g. Google"
                                data-oid="1hmv5nd"
                            />
                        </div>

                        <div className="space-y-2" data-oid="ezcmu-5">
                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Position</label>
                            <input
                                type="text"
                                value={exp.position}
                                onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                                placeholder="e.g. Software Engineer"
                                data-oid="4rrh.vl"
                            />
                        </div>

                        <div className="space-y-2" data-oid="vd_gc87">
                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Location</label>
                            <input
                                type="text"
                                value={exp.location}
                                onChange={(e) => updateExperience(exp.id, 'location', e.target.value)}
                                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                                placeholder="City, Country"
                                data-oid="t4s.zdp"
                            />
                        </div>

                        <div className="flex items-center space-x-3 pt-6" data-oid="hb426rn">
                            <div className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={exp.current}
                                    onChange={(e) => updateExperience(exp.id, 'current', e.target.checked)}
                                    className="w-5 h-5 rounded-md border-slate-300 text-blue-600 focus:ring-blue-500/20 transition-all"
                                    data-oid="hai-8:h"
                                />
                                <label className="text-xs font-bold text-slate-600 ml-2" data-oid="ip801h:">
                                    Active Role
                                </label>
                            </div>
                        </div>

                        <div className="space-y-2" data-oid="ekk3rs.">
                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">From</label>
                            <input
                                type="month"
                                value={exp.startDate}
                                onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                                data-oid="d11_:r0"
                            />
                        </div>

                        {!exp.current && (
                            <div className="space-y-2" data-oid="r_s5ted">
                                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">To</label>
                                <input
                                    type="month"
                                    value={exp.endDate}
                                    onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                                    data-oid="he79bfv"
                                />
                            </div>
                        )}
                    </div>

                    <div className="space-y-2" data-oid="0:ke3mq">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Key Responsibilities</label>
                        <textarea
                            value={exp.description.join('\n')}
                            onChange={(e) => updateExperience(exp.id, 'description', e.target.value.split('\n'))}
                            rows={4}
                            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm resize-none"
                            placeholder="• Bullet points for clarity...&#10;• Achievements and metrics..."
                            data-oid="b13m66_"
                        />
                    </div>
                </div>
            ))}

            {resumeData.experience.length === 0 && !isMinimalTemplate && (
                <div className="text-center py-12 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200" data-oid="8cj925:">
                    <div className="p-3 bg-white rounded-2xl shadow-sm inline-block mb-3">
                        <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <p className="text-slate-500 font-bold text-sm tracking-tight" data-oid="2h24tch">History is Empty</p>
                    <p className="text-slate-400 text-xs mt-1" data-oid=":snv5df">Add your first professional experience</p>
                </div>
            )}
        </div>
    );
    };

    const renderEducation = () => (
        <div className="space-y-6 pt-0 p-6" data-oid="bc4_vg9">
            <div className="sticky top-0 z-10 -mx-6 flex items-center justify-between border-b border-slate-100 bg-white px-6 py-4" data-oid="8u44v:q">
                <div>
                    <h3 className="text-xl font-bold text-slate-800" data-oid="7:re9rg">
                        Education History
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">Academic credentials and certifications</p>
                </div>
                <button
                    onClick={addEducation}
                    className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-black transition-all shadow-lg"
                    data-oid="y9jshgd"
                >
                    + Add Item
                </button>
            </div>

            {resumeData.education.map((edu, index) => (
                <div
                    key={edu.id}
                    className="relative bg-slate-50/50 border border-slate-200 rounded-2xl p-6 space-y-6 group transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-200/50"
                    data-oid="7ike4y0"
                >
                    <div className="flex items-center justify-between" data-oid="3co7-oe">
                        <div className="flex items-center space-x-3">
                            <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold ring-4 ring-blue-50">
                                {index + 1}
                            </span>
                            <h4 className="font-bold text-slate-800 text-sm" data-oid=":skakyy">
                                Qualification Details
                            </h4>
                        </div>
                        <button
                            onClick={() => removeEducation(edu.id)}
                            className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                            data-oid="h7g-xcc"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6" data-oid="m1ep59-">
                        <div className="space-y-2" data-oid="ega.muq">
                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Institution</label>
                            <input
                                type="text"
                                value={edu.institution}
                                onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                                placeholder="University Name"
                                data-oid="dab0p8_"
                            />
                        </div>

                        <div className="space-y-2" data-oid="0i:8l0l">
                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Degree</label>
                            <input
                                type="text"
                                value={edu.degree}
                                onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                                placeholder="e.g. B.Tech"
                                data-oid="lmq1z0k"
                            />
                        </div>

                        <div className="space-y-2" data-oid=":5nfj0u">
                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Specialization</label>
                            <input
                                type="text"
                                value={edu.field}
                                onChange={(e) => updateEducation(edu.id, 'field', e.target.value)}
                                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                                placeholder="e.g. CS"
                                data-oid="qiwr57k"
                            />
                        </div>

                        <div className="space-y-2" data-oid="x88a4f.">
                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">GPA / Percent</label>
                            <input
                                type="text"
                                value={edu.gpa || ''}
                                onChange={(e) => updateEducation(edu.id, 'gpa', e.target.value)}
                                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                                placeholder="8.5/10"
                                data-oid="ndxrfk4"
                            />
                        </div>

                        <div className="space-y-2" data-oid="awg435x">
                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">From</label>
                            <input
                                type="month"
                                value={edu.startDate}
                                onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                                data-oid="anfxu3j"
                            />
                        </div>

                        <div className="space-y-2" data-oid="q1p3bd.">
                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">To</label>
                            <input
                                type="month"
                                value={edu.endDate}
                                onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                                data-oid="dygcz-r"
                            />
                        </div>
                    </div>
                </div>
            ))}

            {resumeData.education.length === 0 && (
                <div className="text-center py-12 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200" data-oid="u819:.f">
                    <div className="p-3 bg-white rounded-2xl shadow-sm inline-block mb-3">
                        <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
                    </div>
                    <p className="text-slate-500 font-bold text-sm tracking-tight" data-oid="x5gvqr6">Academic List Empty</p>
                    <p className="text-slate-400 text-xs mt-1" data-oid="ll6rv8k">Add your qualifications to stand out</p>
                </div>
            )}
        </div>
    );

    const renderProjects = () => (
        <div className="space-y-6 pt-0 p-6" data-oid=":d-iyqd">
            <div className="sticky top-0 z-10 -mx-6 flex items-center justify-between border-b border-slate-100 bg-white px-6 py-4" data-oid="3esxtnd">
                <div>
                    <h3 className="text-xl font-bold text-slate-800" data-oid="_agqk2.">
                        Personal Projects
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">Showcase your practical skills</p>
                </div>
                <button
                    onClick={addProject}
                    className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-black transition-all shadow-lg"
                    data-oid="go:loiv"
                >
                    + Add Item
                </button>
            </div>

            {resumeData.projects.map((project, index) => (
                <div
                    key={project.id}
                    className="relative bg-slate-50/50 border border-slate-200 rounded-2xl p-6 space-y-6 group transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-200/50"
                    data-oid="wuyqxxe"
                >
                    <div className="flex items-center justify-between" data-oid="wy8l2mj">
                        <div className="flex items-center space-x-3">
                            <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold ring-4 ring-blue-50">
                                {index + 1}
                            </span>
                            <h4 className="font-bold text-slate-800 text-sm" data-oid="3.mbebs">
                                Project Overview
                            </h4>
                        </div>
                        <button
                            onClick={() => removeProject(project.id)}
                            className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                            data-oid=".q37nvl"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6" data-oid="aw8se1p">
                        <div className="space-y-2" data-oid="n3ts_wz">
                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Title</label>
                            <input
                                type="text"
                                value={project.name}
                                onChange={(e) => updateProject(project.id, 'name', e.target.value)}
                                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                                placeholder="e.g. Portfolio"
                                data-oid="by9qqdd"
                            />
                        </div>

                    <div className="space-y-2" data-oid="38qxhmb">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Stack</label>
                        <input
                            type="text"
                            value={projectTechnologyDrafts[project.id] ?? project.technologies.join(', ')}
                            onChange={(e) =>
                                setProjectTechnologyDrafts((prev) => ({
                                    ...prev,
                                    [project.id]: e.target.value,
                                }))
                            }
                            onBlur={(e) =>
                                updateProject(project.id, 'technologies', parseCommaSeparated(e.target.value))
                            }
                            className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                            placeholder="e.g. React, Node"
                            data-oid="8skl:u3"
                        />
                        </div>

                        <div className="space-y-2" data-oid="project-start-date">
                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">From</label>
                            <input
                                type="month"
                                value={project.startDate}
                                onChange={(e) => updateProject(project.id, 'startDate', e.target.value)}
                                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                            />
                        </div>

                        {!project.current && (
                            <div className="space-y-2" data-oid="project-end-date">
                                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">To</label>
                                <input
                                    type="month"
                                    value={project.endDate}
                                    onChange={(e) => updateProject(project.id, 'endDate', e.target.value)}
                                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                                />
                            </div>
                        )}

                        <div className="flex items-center space-x-3 pt-6" data-oid="project-current">
                            <div className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={project.current}
                                    onChange={(e) => updateProject(project.id, 'current', e.target.checked)}
                                    className="w-5 h-5 rounded-md border-slate-300 text-blue-600 focus:ring-blue-500/20 transition-all"
                                />
                                <label className="text-xs font-bold text-slate-600 ml-2">
                                    Ongoing Project
                                </label>
                            </div>
                        </div>

                        <div className="space-y-2" data-oid="1_33kp7">
                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Live URL</label>
                            <input
                                type="url"
                                value={project.link || ''}
                                onChange={(e) => updateProject(project.id, 'link', e.target.value)}
                                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                                placeholder="https://"
                                data-oid="yxck6hz"
                            />
                        </div>

                        <div className="space-y-2" data-oid="fp4cxxz">
                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Source Code</label>
                            <input
                                type="url"
                                value={project.github || ''}
                                onChange={(e) => updateProject(project.id, 'github', e.target.value)}
                                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                                placeholder="GitHub URL"
                                data-oid="g4.5el7"
                            />
                        </div>
                    </div>

                    <div className="space-y-2" data-oid="project-highlights">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Project Highlights</label>
                        <textarea
                            value={project.highlights.join('\n')}
                            onChange={(e) => updateProject(project.id, 'highlights', e.target.value.split('\n'))}
                            rows={4}
                            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm resize-none"
                            placeholder="One bullet per line"
                        />
                    </div>

                </div>
            ))}

            {resumeData.projects.length === 0 && (
                <div className="text-center py-12 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200" data-oid="dgn3je1">
                    <div className="p-3 bg-white rounded-2xl shadow-sm inline-block mb-3">
                        <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.168.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5S19.832 5.477 21 6.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                    </div>
                    <p className="text-slate-500 font-bold text-sm tracking-tight" data-oid="n2:jr1-">Projects are Missing</p>
                    <p className="text-slate-400 text-xs mt-1" data-oid="yl3du9m">Add projects to showcase your expertise</p>
                </div>
            )}
        </div>
    );

    const renderSkills = () => (
        <div className="space-y-8 pt-0 p-6" data-oid="yo00ycf">
            <div className="sticky top-0 z-10 -mx-6 flex items-center justify-between border-b border-slate-100 bg-white px-6 py-4" data-oid="veojlr5">
                <div>
                    <h3 className="text-xl font-bold text-slate-800" data-oid="dmkwdo3">
                        Skills & Expertise
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">Categorized skills for ATS optimization</p>
                </div>
                <div className="flex items-center space-x-2" data-oid="0yyenlj">
                    <input
                        type="text"
                        value={newSkillCategory}
                        onChange={(e) => setNewSkillCategory(e.target.value)}
                        placeholder="Category (e.g. Tools)"
                        className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-xs font-bold"
                        data-oid="-ypz4mt"
                    />
                    <button
                        onClick={addSkillCategory}
                        className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-black transition-all shadow-lg"
                        data-oid="6a-0rtz"
                    >
                        Add
                    </button>
                </div>
            </div>

            <div className="grid gap-4" data-oid="skill-grid">
                {resumeData.skills.map((skill, index) => (
                    <div
                        key={index}
                        className="relative bg-slate-50/50 border border-slate-200 rounded-2xl p-6 transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 group"
                        data-oid="7ktl56b"
                    >
                        <div className="flex items-center justify-between mb-4" data-oid="fb6x3-r">
                            <input
                                type="text"
                                value={skill.category}
                                onChange={(e) => updateSkillCategory(index, 'category', e.target.value)}
                                className="font-bold text-slate-800 bg-transparent border-none focus:outline-none focus:ring-0 text-sm uppercase tracking-wider"
                                placeholder="Skill Category"
                                data-oid="7d.x0f."
                            />
                            <button
                                onClick={() => removeSkillCategory(index)}
                                className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                                data-oid="udmvsqa"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                            </button>
                        </div>

                        <div className="space-y-2" data-oid="xw2y.eo">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1" data-oid="nw0_zc4">
                                Items (Comma Separated)
                            </label>
                            <input
                                type="text"
                                value={skillItemDrafts[index] ?? skill.items.join(', ')}
                                onChange={(e) => {
                                    const nextValue = e.target.value;
                                    setSkillItemDrafts((prev) => ({
                                        ...prev,
                                        [index]: nextValue,
                                    }))
                                    updateSkillCategory(index, 'items', parseCommaSeparated(nextValue))
                                }}
                                onBlur={(e) =>
                                    updateSkillCategory(index, 'items', parseCommaSeparated(e.target.value))
                                }
                                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm font-medium"
                                placeholder="React, Node.js, TypeScript..."
                                data-oid="4vutea9"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {resumeData.skills.length === 0 && (
                <div className="text-center py-12 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200" data-oid="w_qk4m-">
                    <div className="p-3 bg-white rounded-2xl shadow-sm inline-block mb-3">
                        <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <p className="text-slate-500 font-bold text-sm tracking-tight" data-oid="8:._30d">No Skills Defined</p>
                    <p className="text-slate-400 text-xs mt-1" data-oid="ynz21dq">Add categories like Languages, Frameworks, etc.</p>
                </div>
            )}
        </div>
    );

    const renderAdditional = () => (
        <div className="space-y-8 pt-0 p-6" data-oid="ow.r:kp">
            <div className="sticky top-0 z-10 -mx-6 border-b border-slate-100 bg-white px-6 py-4">
                <div>
                <h3 className="text-xl font-bold text-slate-800" data-oid="6dn.ntb">
                    Additional Info
                </h3>
                <p className="text-xs text-slate-400 mt-1">Certifications, languages, and more</p>
                </div>
            </div>

            <div className="space-y-6">
                <div className="space-y-2" data-oid="ug52n8u">
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1" data-oid="5yqzsb5">
                        Certifications & Awards
                    </label>
                    <textarea
                        value={resumeData.certifications.join('\n')}
                        onChange={(e) =>
                            onDataChange(
                                'certifications',
                                e.target.value.split('\n').filter((cert) => cert.trim()),
                            )
                        }
                        rows={4}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm font-medium resize-none"
                        placeholder="• AWS Certified...&#10;• Best Performer Award..."
                        data-oid="2mf7mrw"
                    />
                </div>

                <div className="space-y-2" data-oid="qz2yiz-">
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1" data-oid="bk:k9:8">
                        Languages Spoken
                    </label>
                    <textarea
                        value={resumeData.languages.join('\n')}
                        onChange={(e) =>
                            onDataChange(
                                'languages',
                                e.target.value.split('\n').filter((lang) => lang.trim()),
                            )
                        }
                        rows={3}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm font-medium resize-none"
                        placeholder="• English (Native)&#10;• Hindi (Fluent)..."
                        data-oid="-ig0ti1"
                    />
                </div>
            </div>
        </div>
    );

    const sections = {
        personal: renderPersonalInfo,
        experience: renderExperience,
        education: renderEducation,
        projects: renderProjects,
        skills: renderSkills,
        additional: renderAdditional,
    };

    return (
        <div className="bg-white" data-oid="bhvxaqk">
            {sections[activeSection as keyof typeof sections]?.() || renderPersonalInfo()}
        </div>
    );
}
