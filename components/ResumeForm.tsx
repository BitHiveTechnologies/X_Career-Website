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
        <div className="p-6 space-y-6" data-oid="5tb-05v">
            <h3 className="text-xl font-semibold text-gray-800 mb-4" data-oid="fgk1ma6">
                Personal Information
            </h3>

            <div className="grid md:grid-cols-2 gap-4" data-oid="f:3tpwn">
                <div data-oid="4347v9l">
                    <label
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-oid="brsdcn4"
                    >
                        Full Name *
                    </label>
                    <input
                        type="text"
                        value={resumeData.personalInfo.fullName}
                        onChange={(e) => handlePersonalInfoChange('fullName', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                        placeholder="John Doe"
                        data-oid="uqqmhfp"
                    />
                </div>

                <div data-oid="1-vrklu">
                    <label
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-oid="06h8g.h"
                    >
                        Email *
                    </label>
                    <input
                        type="email"
                        value={resumeData.personalInfo.email}
                        onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                        placeholder="john@example.com"
                        data-oid="seve6nz"
                    />
                </div>

                <div data-oid="b:573._">
                    <label
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-oid=":4zodt0"
                    >
                        Phone *
                    </label>
                    <input
                        type="tel"
                        value={resumeData.personalInfo.phone}
                        onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                        data-oid="d3i86g_"
                    />
                </div>

                <div data-oid="w9ix39t">
                    <label
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-oid="07f5z3n"
                    >
                        Location
                    </label>
                    <input
                        type="text"
                        value={resumeData.personalInfo.location}
                        onChange={(e) => handlePersonalInfoChange('location', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                        placeholder="City, State"
                        data-oid=":mv65mb"
                    />
                </div>

                <div data-oid="sc-w4nw">
                    <label
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-oid="w5hb7c0"
                    >
                        LinkedIn
                    </label>
                    <input
                        type="url"
                        value={resumeData.personalInfo.linkedin}
                        onChange={(e) => handlePersonalInfoChange('linkedin', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                        placeholder="https://linkedin.com/in/johndoe"
                        data-oid="u_7du-o"
                    />
                </div>

                <div data-oid="gp87tkb">
                    <label
                        className="block text-sm font-medium text-gray-700 mb-2"
                        data-oid="2s2b5m9"
                    >
                        GitHub
                    </label>
                    <input
                        type="url"
                        value={resumeData.personalInfo.github}
                        onChange={(e) => handlePersonalInfoChange('github', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                        placeholder="https://github.com/johndoe"
                        data-oid="0v20yfo"
                    />
                </div>
            </div>

            <div data-oid="jqt-4ja">
                <label className="block text-sm font-medium text-gray-700 mb-2" data-oid="6o45.qk">
                    Portfolio Website
                </label>
                <input
                    type="url"
                    value={resumeData.personalInfo.portfolio}
                    onChange={(e) => handlePersonalInfoChange('portfolio', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                    placeholder="https://johndoe.com"
                    data-oid="1bci0fq"
                />
            </div>

            <div data-oid="bqcf4sm">
                <label className="block text-sm font-medium text-gray-700 mb-2" data-oid="3.fd3p0">
                    Professional Summary
                </label>
                <textarea
                    value={resumeData.personalInfo.summary}
                    onChange={(e) => handlePersonalInfoChange('summary', e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                    placeholder="Write a brief summary of your professional background and career objectives..."
                    data-oid="djmf29p"
                />
            </div>
        </div>
    );

    const renderExperience = () => (
        <div className="p-6 space-y-6" data-oid="5k_1n.z">
            <div className="flex items-center justify-between" data-oid="i9f_pp_">
                <h3 className="text-xl font-semibold text-gray-800" data-oid="f140pox">
                    Work Experience
                </h3>
                <button
                    onClick={addExperience}
                    className="px-4 py-2 bg-[hsl(196,80%,45%)] text-white rounded-md hover:bg-[hsl(196,80%,40%)] transition-colors duration-200"
                    data-oid="71v1q1p"
                >
                    Add Experience
                </button>
            </div>

            {resumeData.experience.map((exp, index) => (
                <div
                    key={exp.id}
                    className="border border-gray-200 rounded-lg p-4 space-y-4"
                    data-oid="iq4jtc2"
                >
                    <div className="flex items-center justify-between" data-oid="n-l5r.7">
                        <h4 className="font-medium text-gray-800" data-oid="y41ri5t">
                            Experience {index + 1}
                        </h4>
                        <button
                            onClick={() => removeExperience(exp.id)}
                            className="text-red-500 hover:text-red-700"
                            data-oid="sebj:na"
                        >
                            Remove
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4" data-oid="-38lh91">
                        <div data-oid="arxu:xn">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="4x8u8i_"
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
                                data-oid="jzpn4iy"
                            />
                        </div>

                        <div data-oid="f2m3yga">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid=".0gtllo"
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
                                data-oid="r03de_9"
                            />
                        </div>

                        <div data-oid="sjpre-p">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="bbov._l"
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
                                data-oid="9i.7tn3"
                            />
                        </div>

                        <div className="flex items-center space-x-2" data-oid="h-a6cs5">
                            <input
                                type="checkbox"
                                checked={exp.current}
                                onChange={(e) =>
                                    updateExperience(exp.id, 'current', e.target.checked)
                                }
                                className="rounded text-[hsl(196,80%,45%)] focus:ring-[hsl(196,80%,45%)]"
                                data-oid="jbe5s7r"
                            />

                            <label className="text-sm text-gray-700" data-oid="c-2lvpo">
                                Currently working here
                            </label>
                        </div>

                        <div data-oid="l44eu_h">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="5.h01ms"
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
                                data-oid="dpy21.y"
                            />
                        </div>

                        {!exp.current && (
                            <div data-oid="hrykwpr">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="3nf-m_0"
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
                                    data-oid="81_rtgx"
                                />
                            </div>
                        )}
                    </div>

                    <div data-oid="e-u-es_">
                        <label
                            className="block text-sm font-medium text-gray-700 mb-1"
                            data-oid="if9ved3"
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
                            data-oid="wh43jpu"
                        />
                    </div>
                </div>
            ))}

            {resumeData.experience.length === 0 && (
                <div className="text-center py-8 text-gray-500" data-oid="p5ot_a2">
                    <p data-oid="9wmgpfi">No work experience added yet.</p>
                    <p className="text-sm" data-oid=".k53hjh">
                        Click "Add Experience" to get started.
                    </p>
                </div>
            )}
        </div>
    );

    const renderEducation = () => (
        <div className="p-6 space-y-6" data-oid="zv7qiv2">
            <div className="flex items-center justify-between" data-oid="ira9avk">
                <h3 className="text-xl font-semibold text-gray-800" data-oid="_98_1k7">
                    Education
                </h3>
                <button
                    onClick={addEducation}
                    className="px-4 py-2 bg-[hsl(196,80%,45%)] text-white rounded-md hover:bg-[hsl(196,80%,40%)] transition-colors duration-200"
                    data-oid="nz3wy2r"
                >
                    Add Education
                </button>
            </div>

            {resumeData.education.map((edu, index) => (
                <div
                    key={edu.id}
                    className="border border-gray-200 rounded-lg p-4 space-y-4"
                    data-oid="ij3hhwi"
                >
                    <div className="flex items-center justify-between" data-oid="vy5knw1">
                        <h4 className="font-medium text-gray-800" data-oid="hggcmo4">
                            Education {index + 1}
                        </h4>
                        <button
                            onClick={() => removeEducation(edu.id)}
                            className="text-red-500 hover:text-red-700"
                            data-oid="xn.vw5l"
                        >
                            Remove
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4" data-oid="syx9mel">
                        <div data-oid="1:7wkg3">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="0vvdfq3"
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
                                data-oid="e5pwn.u"
                            />
                        </div>

                        <div data-oid="qcal2vs">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="2ol0wdo"
                            >
                                Degree *
                            </label>
                            <input
                                type="text"
                                value={edu.degree}
                                onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                                placeholder="Bachelor's, Master's, etc."
                                data-oid="cbmk_dd"
                            />
                        </div>

                        <div data-oid="3xpj60c">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="xbyo7p."
                            >
                                Field of Study
                            </label>
                            <input
                                type="text"
                                value={edu.field}
                                onChange={(e) => updateEducation(edu.id, 'field', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                                placeholder="Computer Science, Engineering, etc."
                                data-oid="hrsd4ir"
                            />
                        </div>

                        <div data-oid="9sz2y-:">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid=".:d1.jy"
                            >
                                GPA (Optional)
                            </label>
                            <input
                                type="text"
                                value={edu.gpa || ''}
                                onChange={(e) => updateEducation(edu.id, 'gpa', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                                placeholder="3.8/4.0"
                                data-oid="8tgqxt-"
                            />
                        </div>

                        <div data-oid="pw_hi3r">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="sm2_i9y"
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
                                data-oid="ov:6fjt"
                            />
                        </div>

                        <div data-oid="t_rhd2v">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="b-rmj1e"
                            >
                                End Date
                            </label>
                            <input
                                type="month"
                                value={edu.endDate}
                                onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                                data-oid="yac_jbd"
                            />
                        </div>
                    </div>

                    <div data-oid="s.655e_">
                        <label
                            className="block text-sm font-medium text-gray-700 mb-1"
                            data-oid="81kb-3r"
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
                            data-oid="0s2w81e"
                        />
                    </div>
                </div>
            ))}

            {resumeData.education.length === 0 && (
                <div className="text-center py-8 text-gray-500" data-oid="s21bu-q">
                    <p data-oid=":1hvd.g">No education added yet.</p>
                    <p className="text-sm" data-oid="vp457n3">
                        Click "Add Education" to get started.
                    </p>
                </div>
            )}
        </div>
    );

    const renderProjects = () => (
        <div className="p-6 space-y-6" data-oid="cga6bp1">
            <div className="flex items-center justify-between" data-oid="6whhzrn">
                <h3 className="text-xl font-semibold text-gray-800" data-oid="1_nj9j8">
                    Projects
                </h3>
                <button
                    onClick={addProject}
                    className="px-4 py-2 bg-[hsl(196,80%,45%)] text-white rounded-md hover:bg-[hsl(196,80%,40%)] transition-colors duration-200"
                    data-oid="nr37g8x"
                >
                    Add Project
                </button>
            </div>

            {resumeData.projects.map((project, index) => (
                <div
                    key={project.id}
                    className="border border-gray-200 rounded-lg p-4 space-y-4"
                    data-oid="ndde1dw"
                >
                    <div className="flex items-center justify-between" data-oid="84peki-">
                        <h4 className="font-medium text-gray-800" data-oid="oxcllj-">
                            Project {index + 1}
                        </h4>
                        <button
                            onClick={() => removeProject(project.id)}
                            className="text-red-500 hover:text-red-700"
                            data-oid="4f2u2n4"
                        >
                            Remove
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4" data-oid="zk1:rqo">
                        <div data-oid="n.ryvec">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="4:w6lgk"
                            >
                                Project Name *
                            </label>
                            <input
                                type="text"
                                value={project.name}
                                onChange={(e) => updateProject(project.id, 'name', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                                placeholder="Project Name"
                                data-oid="3y0yth9"
                            />
                        </div>

                        <div data-oid="82575zh">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="aiui4r-"
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
                                data-oid="v4em8yj"
                            />
                        </div>

                        <div data-oid="i3t261e">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="8h:orgt"
                            >
                                Live Demo Link
                            </label>
                            <input
                                type="url"
                                value={project.link || ''}
                                onChange={(e) => updateProject(project.id, 'link', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                                placeholder="https://project-demo.com"
                                data-oid="r--z2wo"
                            />
                        </div>

                        <div data-oid="bl.2we.">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="x7t4.l5"
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
                                data-oid="njy5vem"
                            />
                        </div>
                    </div>

                    <div data-oid="g:yf5n1">
                        <label
                            className="block text-sm font-medium text-gray-700 mb-1"
                            data-oid="m3n7sqw"
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
                            data-oid="_t4kki2"
                        />
                    </div>

                    <div data-oid="_td26b4">
                        <label
                            className="block text-sm font-medium text-gray-700 mb-1"
                            data-oid=":qi:1n:"
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
                            data-oid="ee4rb_p"
                        />
                    </div>
                </div>
            ))}

            {resumeData.projects.length === 0 && (
                <div className="text-center py-8 text-gray-500" data-oid="llqvvjz">
                    <p data-oid="ii34v2s">No projects added yet.</p>
                    <p className="text-sm" data-oid="fxsrp4a">
                        Click "Add Project" to get started.
                    </p>
                </div>
            )}
        </div>
    );

    const renderSkills = () => (
        <div className="p-6 space-y-6" data-oid=":mk4:bz">
            <div className="flex items-center justify-between" data-oid="l90defh">
                <h3 className="text-xl font-semibold text-gray-800" data-oid="850o3:y">
                    Skills
                </h3>
                <div className="flex items-center space-x-2" data-oid="72c_2ug">
                    <input
                        type="text"
                        value={newSkillCategory}
                        onChange={(e) => setNewSkillCategory(e.target.value)}
                        placeholder="Category name"
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-transparent"
                        data-oid="m1syc.n"
                    />

                    <button
                        onClick={addSkillCategory}
                        className="px-4 py-2 bg-[hsl(196,80%,45%)] text-white rounded-md hover:bg-[hsl(196,80%,40%)] transition-colors duration-200"
                        data-oid="ml6tkh7"
                    >
                        Add Category
                    </button>
                </div>
            </div>

            {resumeData.skills.map((skill, index) => (
                <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4 space-y-4"
                    data-oid="-_ue0m2"
                >
                    <div className="flex items-center justify-between" data-oid="nfddmh7">
                        <input
                            type="text"
                            value={skill.category}
                            onChange={(e) => updateSkillCategory(index, 'category', e.target.value)}
                            className="font-medium text-gray-800 bg-transparent border-none focus:outline-none focus:ring-0 text-lg"
                            placeholder="Skill Category"
                            data-oid="6kjkqb7"
                        />

                        <button
                            onClick={() => removeSkillCategory(index)}
                            className="text-red-500 hover:text-red-700"
                            data-oid="yu_-aik"
                        >
                            Remove
                        </button>
                    </div>

                    <div data-oid="6qh28vs">
                        <label
                            className="block text-sm font-medium text-gray-700 mb-1"
                            data-oid="9s44ni6"
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
                            data-oid="z6khvz7"
                        />
                    </div>
                </div>
            ))}

            {resumeData.skills.length === 0 && (
                <div className="text-center py-8 text-gray-500" data-oid="k7wb18y">
                    <p data-oid="8lnufax">No skill categories added yet.</p>
                    <p className="text-sm" data-oid="zsdyoq8">
                        Add a category to get started.
                    </p>
                </div>
            )}
        </div>
    );

    const renderAdditional = () => (
        <div className="p-6 space-y-6" data-oid="03gjmv3">
            <h3 className="text-xl font-semibold text-gray-800 mb-4" data-oid="928j49b">
                Additional Information
            </h3>

            <div data-oid="3xmccev">
                <label className="block text-sm font-medium text-gray-700 mb-2" data-oid="ldinn6a">
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
                    data-oid="hjyoibb"
                />

                <p className="text-xs text-gray-500 mt-1" data-oid="al9wxp8">
                    Enter each certification on a new line
                </p>
            </div>

            <div data-oid=".1488qs">
                <label className="block text-sm font-medium text-gray-700 mb-2" data-oid="ye4ovpi">
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
                    data-oid="csu_njg"
                />

                <p className="text-xs text-gray-500 mt-1" data-oid="dw2c-7z">
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
        <div className="bg-white" data-oid="b5.rp:d">
            {sections[activeSection as keyof typeof sections]?.() || renderPersonalInfo()}
        </div>
    );
}
