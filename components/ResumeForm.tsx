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

interface ResumeFormProps {
    resumeData: ResumeData;
    activeSection: string;
    onDataChange: (section: keyof ResumeData, data: any) => void;
}

export default function ResumeForm({ resumeData, activeSection, onDataChange }: ResumeFormProps) {
    const [newSkillCategory, setNewSkillCategory] = useState('');

    const handlePersonalInfoChange = (field: keyof PersonalInfo, value: string) => {
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
        <div className="p-6 space-y-6" data-oid="-..0rpg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4" data-oid="rbfho6l">
                Personal Information
            </h3>

            <div className="grid md:grid-cols-2 gap-4" data-oid="4wa0qke">
                <div data-oid="qg4k::_">
                    <label
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-oid="nd-0d5s"
                    >
                        Full Name *
                    </label>
                    <input
                        type="text"
                        value={resumeData.personalInfo.fullName}
                        onChange={(e) => handlePersonalInfoChange('fullName', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                        placeholder="John Doe"
                        data-oid="o6h5:2b"
                    />
                </div>

                <div data-oid="23.7492">
                    <label
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-oid="w.49mn3"
                    >
                        Email *
                    </label>
                    <input
                        type="email"
                        value={resumeData.personalInfo.email}
                        onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                        placeholder="john@example.com"
                        data-oid="n9_-j5h"
                    />
                </div>

                <div data-oid="vlltrlj">
                    <label
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-oid="_n220x4"
                    >
                        Phone *
                    </label>
                    <input
                        type="tel"
                        value={resumeData.personalInfo.phone}
                        onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                        data-oid="wmp.t6c"
                    />
                </div>

                <div data-oid="pc67__0">
                    <label
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-oid="98u.mk-"
                    >
                        Location
                    </label>
                    <input
                        type="text"
                        value={resumeData.personalInfo.location}
                        onChange={(e) => handlePersonalInfoChange('location', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                        placeholder="City, State"
                        data-oid="xx:fd3_"
                    />
                </div>

                <div data-oid="7:5._ih">
                    <label
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-oid="3daetmi"
                    >
                        LinkedIn
                    </label>
                    <input
                        type="url"
                        value={resumeData.personalInfo.linkedin}
                        onChange={(e) => handlePersonalInfoChange('linkedin', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                        placeholder="https://linkedin.com/in/johndoe"
                        data-oid="5z6l-w1"
                    />
                </div>

                <div data-oid="abtgn0:">
                    <label
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-oid="4wrpgh4"
                    >
                        GitHub
                    </label>
                    <input
                        type="url"
                        value={resumeData.personalInfo.github}
                        onChange={(e) => handlePersonalInfoChange('github', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                        placeholder="https://github.com/johndoe"
                        data-oid="kdhd0yp"
                    />
                </div>
            </div>

            <div data-oid="9w6uldg">
                <label className="block text-sm font-medium text-gray-700 mb-2" data-oid="c-z.ozg">
                    Portfolio Website
                </label>
                <input
                    type="url"
                    value={resumeData.personalInfo.portfolio}
                    onChange={(e) => handlePersonalInfoChange('portfolio', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                    placeholder="https://johndoe.com"
                    data-oid="izw3gdd"
                />
            </div>

            <div data-oid="uors82v">
                <label className="block text-sm font-medium text-gray-700 mb-2" data-oid="tbq5-yu">
                    Professional Summary
                </label>
                <textarea
                    value={resumeData.personalInfo.summary}
                    onChange={(e) => handlePersonalInfoChange('summary', e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                    placeholder="Write a brief summary of your professional background and career objectives..."
                    data-oid="gwi5tcg"
                />
            </div>
        </div>
    );

    const renderExperience = () => (
        <div className="p-6 space-y-6" data-oid="c1v:7-v">
            <div className="flex items-center justify-between" data-oid="f2o7big">
                <h3 className="text-xl font-semibold text-gray-800" data-oid="8i-iq51">
                    Work Experience
                </h3>
                <button
                    onClick={addExperience}
                    className="px-4 py-2 bg-[hsl(196,80%,45%)] text-white rounded-md hover:bg-[hsl(196,80%,40%)] transition-colors duration-200"
                    data-oid="_65--s:"
                >
                    Add Experience
                </button>
            </div>

            {resumeData.experience.map((exp, index) => (
                <div
                    key={exp.id}
                    className="border border-gray-200 rounded-lg p-4 space-y-4"
                    data-oid="i7jab-y"
                >
                    <div className="flex items-center justify-between" data-oid="zx8jiaq">
                        <h4 className="font-medium text-gray-800" data-oid="kjq_g8n">
                            Experience {index + 1}
                        </h4>
                        <button
                            onClick={() => removeExperience(exp.id)}
                            className="text-red-500 hover:text-red-700"
                            data-oid="6akarly"
                        >
                            Remove
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4" data-oid="wcnqcd.">
                        <div data-oid="8f9bo94">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="riyndar"
                            >
                                Company *
                            </label>
                            <input
                                type="text"
                                value={exp.company}
                                onChange={(e) =>
                                    updateExperience(exp.id, 'company', e.target.value)
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                                placeholder="Company Name"
                                data-oid="1hmv5nd"
                            />
                        </div>

                        <div data-oid="ezcmu-5">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="1.o2m7_"
                            >
                                Position *
                            </label>
                            <input
                                type="text"
                                value={exp.position}
                                onChange={(e) =>
                                    updateExperience(exp.id, 'position', e.target.value)
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                                placeholder="Job Title"
                                data-oid="4rrh.vl"
                            />
                        </div>

                        <div data-oid="vd_gc87">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="hwroyxc"
                            >
                                Location
                            </label>
                            <input
                                type="text"
                                value={exp.location}
                                onChange={(e) =>
                                    updateExperience(exp.id, 'location', e.target.value)
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                                placeholder="City, State"
                                data-oid="t4s.zdp"
                            />
                        </div>

                        <div className="flex items-center space-x-2" data-oid="hb426rn">
                            <input
                                type="checkbox"
                                checked={exp.current}
                                onChange={(e) =>
                                    updateExperience(exp.id, 'current', e.target.checked)
                                }
                                className="rounded text-[hsl(196,80%,45%)] focus:ring-[hsl(196,80%,45%)]"
                                data-oid="hai-8:h"
                            />

                            <label className="text-sm text-gray-700" data-oid="ip801h:">
                                Currently working here
                            </label>
                        </div>

                        <div data-oid="ekk3rs.">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="-_c5qry"
                            >
                                Start Date
                            </label>
                            <input
                                type="month"
                                value={exp.startDate}
                                onChange={(e) =>
                                    updateExperience(exp.id, 'startDate', e.target.value)
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                                data-oid="d11_:r0"
                            />
                        </div>

                        {!exp.current && (
                            <div data-oid="r_s5ted">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="50cf:8_"
                                >
                                    End Date
                                </label>
                                <input
                                    type="month"
                                    value={exp.endDate}
                                    onChange={(e) =>
                                        updateExperience(exp.id, 'endDate', e.target.value)
                                    }
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                                    data-oid="he79bfv"
                                />
                            </div>
                        )}
                    </div>

                    <div data-oid="0:ke3mq">
                        <label
                            className="block text-sm font-medium text-gray-700 mb-1"
                            data-oid="_fwyuk."
                        >
                            Job Description
                        </label>
                        <textarea
                            value={exp.description.join('\n')}
                            onChange={(e) =>
                                updateExperience(exp.id, 'description', e.target.value.split('\n'))
                            }
                            rows={4}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                            placeholder="• Describe your responsibilities and achievements&#10;• Use bullet points for better readability&#10;• Include quantifiable results when possible"
                            data-oid="b13m66_"
                        />
                    </div>
                </div>
            ))}

            {resumeData.experience.length === 0 && (
                <div className="text-center py-8 text-gray-500" data-oid="8cj925:">
                    <p data-oid="2h24tch">No work experience added yet.</p>
                    <p className="text-sm" data-oid=":snv5df">
                        Click "Add Experience" to get started.
                    </p>
                </div>
            )}
        </div>
    );

    const renderEducation = () => (
        <div className="p-6 space-y-6" data-oid="bc4_vg9">
            <div className="flex items-center justify-between" data-oid="8u44v:q">
                <h3 className="text-xl font-semibold text-gray-800" data-oid="7:re9rg">
                    Education
                </h3>
                <button
                    onClick={addEducation}
                    className="px-4 py-2 bg-[hsl(196,80%,45%)] text-white rounded-md hover:bg-[hsl(196,80%,40%)] transition-colors duration-200"
                    data-oid="y9jshgd"
                >
                    Add Education
                </button>
            </div>

            {resumeData.education.map((edu, index) => (
                <div
                    key={edu.id}
                    className="border border-gray-200 rounded-lg p-4 space-y-4"
                    data-oid="7ike4y0"
                >
                    <div className="flex items-center justify-between" data-oid="3co7-oe">
                        <h4 className="font-medium text-gray-800" data-oid=":skakyy">
                            Education {index + 1}
                        </h4>
                        <button
                            onClick={() => removeEducation(edu.id)}
                            className="text-red-500 hover:text-red-700"
                            data-oid="h7g-xcc"
                        >
                            Remove
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4" data-oid="m1ep59-">
                        <div data-oid="ega.muq">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="ib.eljc"
                            >
                                Institution *
                            </label>
                            <input
                                type="text"
                                value={edu.institution}
                                onChange={(e) =>
                                    updateEducation(edu.id, 'institution', e.target.value)
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                                placeholder="University Name"
                                data-oid="dab0p8_"
                            />
                        </div>

                        <div data-oid="0i:8l0l">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="dl0f14y"
                            >
                                Degree *
                            </label>
                            <input
                                type="text"
                                value={edu.degree}
                                onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                                placeholder="Bachelor's, Master's, etc."
                                data-oid="lmq1z0k"
                            />
                        </div>

                        <div data-oid=":5nfj0u">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="unixt2u"
                            >
                                Field of Study
                            </label>
                            <input
                                type="text"
                                value={edu.field}
                                onChange={(e) => updateEducation(edu.id, 'field', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                                placeholder="Computer Science, Engineering, etc."
                                data-oid="qiwr57k"
                            />
                        </div>

                        <div data-oid="x88a4f.">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="ef8sekq"
                            >
                                GPA (Optional)
                            </label>
                            <input
                                type="text"
                                value={edu.gpa || ''}
                                onChange={(e) => updateEducation(edu.id, 'gpa', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                                placeholder="3.8/4.0"
                                data-oid="ndxrfk4"
                            />
                        </div>

                        <div data-oid="awg435x">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="klkruq7"
                            >
                                Start Date
                            </label>
                            <input
                                type="month"
                                value={edu.startDate}
                                onChange={(e) =>
                                    updateEducation(edu.id, 'startDate', e.target.value)
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                                data-oid="anfxu3j"
                            />
                        </div>

                        <div data-oid="q1p3bd.">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="w.6hpp7"
                            >
                                End Date
                            </label>
                            <input
                                type="month"
                                value={edu.endDate}
                                onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                                data-oid="dygcz-r"
                            />
                        </div>
                    </div>

                    <div data-oid="yhq19f9">
                        <label
                            className="block text-sm font-medium text-gray-700 mb-1"
                            data-oid="hqxb93e"
                        >
                            Achievements & Activities
                        </label>
                        <textarea
                            value={edu.achievements.join('\n')}
                            onChange={(e) =>
                                updateEducation(edu.id, 'achievements', e.target.value.split('\n'))
                            }
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                            placeholder="• Dean's List&#10;• Relevant coursework&#10;• Academic achievements"
                            data-oid="6oa3ery"
                        />
                    </div>
                </div>
            ))}

            {resumeData.education.length === 0 && (
                <div className="text-center py-8 text-gray-500" data-oid="u819:.f">
                    <p data-oid="x5gvqr6">No education added yet.</p>
                    <p className="text-sm" data-oid="ll6rv8k">
                        Click "Add Education" to get started.
                    </p>
                </div>
            )}
        </div>
    );

    const renderProjects = () => (
        <div className="p-6 space-y-6" data-oid=":d-iyqd">
            <div className="flex items-center justify-between" data-oid="3esxtnd">
                <h3 className="text-xl font-semibold text-gray-800" data-oid="_agqk2.">
                    Projects
                </h3>
                <button
                    onClick={addProject}
                    className="px-4 py-2 bg-[hsl(196,80%,45%)] text-white rounded-md hover:bg-[hsl(196,80%,40%)] transition-colors duration-200"
                    data-oid="go:loiv"
                >
                    Add Project
                </button>
            </div>

            {resumeData.projects.map((project, index) => (
                <div
                    key={project.id}
                    className="border border-gray-200 rounded-lg p-4 space-y-4"
                    data-oid="wuyqxxe"
                >
                    <div className="flex items-center justify-between" data-oid="wy8l2mj">
                        <h4 className="font-medium text-gray-800" data-oid="3.mbebs">
                            Project {index + 1}
                        </h4>
                        <button
                            onClick={() => removeProject(project.id)}
                            className="text-red-500 hover:text-red-700"
                            data-oid=".q37nvl"
                        >
                            Remove
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4" data-oid="aw8se1p">
                        <div data-oid="n3ts_wz">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="be:mtyt"
                            >
                                Project Name *
                            </label>
                            <input
                                type="text"
                                value={project.name}
                                onChange={(e) => updateProject(project.id, 'name', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                                placeholder="Project Name"
                                data-oid="by9qqdd"
                            />
                        </div>

                        <div data-oid="38qxhmb">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="k3no8ts"
                            >
                                Technologies Used
                            </label>
                            <input
                                type="text"
                                value={project.technologies.join(', ')}
                                onChange={(e) =>
                                    updateProject(
                                        project.id,
                                        'technologies',
                                        e.target.value.split(', ').filter((t) => t.trim()),
                                    )
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                                placeholder="React, Node.js, MongoDB"
                                data-oid="8skl:u3"
                            />
                        </div>

                        <div data-oid="1_33kp7">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="1o20bu5"
                            >
                                Live Demo Link
                            </label>
                            <input
                                type="url"
                                value={project.link || ''}
                                onChange={(e) => updateProject(project.id, 'link', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                                placeholder="https://project-demo.com"
                                data-oid="yxck6hz"
                            />
                        </div>

                        <div data-oid="fp4cxxz">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="sryeuma"
                            >
                                GitHub Repository
                            </label>
                            <input
                                type="url"
                                value={project.github || ''}
                                onChange={(e) =>
                                    updateProject(project.id, 'github', e.target.value)
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                                placeholder="https://github.com/username/project"
                                data-oid="g4.5el7"
                            />
                        </div>
                    </div>

                    <div data-oid="yln_q2-">
                        <label
                            className="block text-sm font-medium text-gray-700 mb-1"
                            data-oid="o3-1cr_"
                        >
                            Project Description
                        </label>
                        <textarea
                            value={project.description}
                            onChange={(e) =>
                                updateProject(project.id, 'description', e.target.value)
                            }
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                            placeholder="Brief description of the project and its purpose..."
                            data-oid="agnd:az"
                        />
                    </div>

                    <div data-oid="_wsk1_u">
                        <label
                            className="block text-sm font-medium text-gray-700 mb-1"
                            data-oid="fm6dpe8"
                        >
                            Key Highlights
                        </label>
                        <textarea
                            value={project.highlights.join('\n')}
                            onChange={(e) =>
                                updateProject(project.id, 'highlights', e.target.value.split('\n'))
                            }
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                            placeholder="• Key features implemented&#10;• Technical challenges solved&#10;• Impact or results achieved"
                            data-oid="x3ok79j"
                        />
                    </div>
                </div>
            ))}

            {resumeData.projects.length === 0 && (
                <div className="text-center py-8 text-gray-500" data-oid="dgn3je1">
                    <p data-oid="n2:jr1-">No projects added yet.</p>
                    <p className="text-sm" data-oid="yl3du9m">
                        Click "Add Project" to get started.
                    </p>
                </div>
            )}
        </div>
    );

    const renderSkills = () => (
        <div className="p-6 space-y-6" data-oid="yo00ycf">
            <div className="flex items-center justify-between" data-oid="veojlr5">
                <h3 className="text-xl font-semibold text-gray-800" data-oid="dmkwdo3">
                    Skills
                </h3>
                <div className="flex items-center space-x-2" data-oid="0yyenlj">
                    <input
                        type="text"
                        value={newSkillCategory}
                        onChange={(e) => setNewSkillCategory(e.target.value)}
                        placeholder="Category name"
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                        data-oid="-ypz4mt"
                    />

                    <button
                        onClick={addSkillCategory}
                        className="px-4 py-2 bg-[hsl(196,80%,45%)] text-white rounded-md hover:bg-[hsl(196,80%,40%)] transition-colors duration-200"
                        data-oid="6a-0rtz"
                    >
                        Add Category
                    </button>
                </div>
            </div>

            {resumeData.skills.map((skill, index) => (
                <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4 space-y-4"
                    data-oid="7ktl56b"
                >
                    <div className="flex items-center justify-between" data-oid="fb6x3-r">
                        <input
                            type="text"
                            value={skill.category}
                            onChange={(e) => updateSkillCategory(index, 'category', e.target.value)}
                            className="font-medium text-gray-800 bg-transparent border-none focus:outline-none focus:ring-0 text-lg"
                            placeholder="Skill Category"
                            data-oid="7d.x0f."
                        />

                        <button
                            onClick={() => removeSkillCategory(index)}
                            className="text-red-500 hover:text-red-700"
                            data-oid="udmvsqa"
                        >
                            Remove
                        </button>
                    </div>

                    <div data-oid="xw2y.eo">
                        <label
                            className="block text-sm font-medium text-gray-700 mb-1"
                            data-oid="nw0_zc4"
                        >
                            Skills (comma-separated)
                        </label>
                        <input
                            type="text"
                            value={skill.items.join(', ')}
                            onChange={(e) =>
                                updateSkillCategory(
                                    index,
                                    'items',
                                    e.target.value.split(', ').filter((item) => item.trim()),
                                )
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                            placeholder="JavaScript, React, Node.js"
                            data-oid="4vutea9"
                        />
                    </div>
                </div>
            ))}

            {resumeData.skills.length === 0 && (
                <div className="text-center py-8 text-gray-500" data-oid="w_qk4m-">
                    <p data-oid="8:._30d">No skill categories added yet.</p>
                    <p className="text-sm" data-oid="ynz21dq">
                        Add a category to get started.
                    </p>
                </div>
            )}
        </div>
    );

    const renderAdditional = () => (
        <div className="p-6 space-y-6" data-oid="ow.r:kp">
            <h3 className="text-xl font-semibold text-gray-800 mb-4" data-oid="6dn.ntb">
                Additional Information
            </h3>

            <div data-oid="ug52n8u">
                <label className="block text-sm font-medium text-gray-700 mb-2" data-oid="5yqzsb5">
                    Certifications
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                    placeholder="AWS Certified Solutions Architect&#10;Google Cloud Professional&#10;Microsoft Azure Fundamentals"
                    data-oid="2mf7mrw"
                />

                <p className="text-xs text-gray-500 mt-1" data-oid="i02ak.a">
                    Enter each certification on a new line
                </p>
            </div>

            <div data-oid="qz2yiz-">
                <label className="block text-sm font-medium text-gray-700 mb-2" data-oid="bk:k9:8">
                    Languages
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                    placeholder="English (Native)&#10;Spanish (Conversational)&#10;French (Basic)"
                    data-oid="-ig0ti1"
                />

                <p className="text-xs text-gray-500 mt-1" data-oid="5y1i4fl">
                    Enter each language on a new line
                </p>
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
