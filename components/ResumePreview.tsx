'use client';

import { ResumeData } from '@/app/resume-builder/page';
import { BASIC_TEMPLATE_ID, basicTemplateLatexSource } from '@/lib/resumeTemplates/basic';

interface ResumePreviewProps {
    resumeData: ResumeData;
    template: string;
    fontFamily?: string;
    isExport?: boolean;
}

export default function ResumePreview({ resumeData, template, fontFamily = 'Inter', isExport = false }: ResumePreviewProps) {
    const BASIC_TEMPLATE_FONT_STACK = '"Computer Modern Serif", "Latin Modern Roman", "CMU Serif", "STIX Two Text", "Charter", "Times New Roman", serif';
    const BASIC_TEMPLATE_FIRST_PAGE_CAPACITY = 62;
    const BASIC_TEMPLATE_OTHER_PAGE_CAPACITY = 58;

    const formatDate = (dateString: string) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    };

    const formatDateRange = (startDate: string, endDate: string, current?: boolean) => {
        const start = formatDate(startDate);
        const end = current ? 'Present' : formatDate(endDate);

        if (!start && !end) return '';
        if (!start) return end;
        if (!end) return start;

        return `${start} -- ${end}`;
    };

    // NOTE: The getDisplayUrl function has been removed as the text is now a static label.

    const templateStyle = {
        fontFamily: fontFamily,
    };

    type BasicPageBlock = {
        key: string;
        sectionTitle?: string;
        height: number;
        content: JSX.Element;
    };

    type BasicTemplatePage = {
        key: string;
        showHeader: boolean;
        blocks: BasicPageBlock[];
    };

    const createBasicPages = (blocks: BasicPageBlock[]): BasicTemplatePage[] => {
        const pages: BasicTemplatePage[] = [];
        let currentPage: BasicTemplatePage = {
            key: 'basic-page-1',
            showHeader: true,
            blocks: [],
        };
        let remainingHeight = BASIC_TEMPLATE_FIRST_PAGE_CAPACITY;

        blocks.forEach((block, index) => {
            const needsNewPage = currentPage.blocks.length > 0 && block.height > remainingHeight;

            if (needsNewPage) {
                pages.push(currentPage);
                currentPage = {
                    key: `basic-page-${pages.length + 1}`,
                    showHeader: false,
                    blocks: [],
                };
                remainingHeight = BASIC_TEMPLATE_OTHER_PAGE_CAPACITY;
            }

            currentPage.blocks.push(block);
            remainingHeight -= block.height;

            if (index === blocks.length - 1) {
                pages.push(currentPage);
            }
        });

        return pages.length > 0 ? pages : [currentPage];
    };

    const ModernTemplate = () => (
        <div
            className={`resume-export-page max-w-4xl mx-auto bg-white p-8 ${isExport ? '' : 'shadow-lg'}`}
            style={{ ...templateStyle, minHeight: '11in', width: '8.5in' }}
            data-oid="hhy:wxb"
        >
            {/* Header */}
            <header className="border-b-2 border-[hsl(196,80%,45%)] pb-6 mb-6" data-oid="szgl5n8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2" data-oid="0l5ugl-">
                    {resumeData.personalInfo.fullName || 'Your Name'}
                </h1>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600" data-oid="zmucxvj">
                    {resumeData.personalInfo.email && (
                        <a
                            href={`mailto:${resumeData.personalInfo.email}`}
                            className="flex items-center hover:underline text-[hsl(196,80%,45%)]"
                            data-oid="nidfn2r"
                        >
                            <svg
                                className="w-4 h-4 mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                data-oid="8sdx0hd"
                            >
                                <path
                                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                                    data-oid="o9h3.fu"
                                />

                                <path
                                    d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                                    data-oid="_ynepf4"
                                />
                            </svg>
                            {resumeData.personalInfo.email}
                        </a>
                    )}
                    {resumeData.personalInfo.phone && (
                        <span className="flex items-center" data-oid="rb2rumq">
                            <svg
                                className="w-4 h-4 mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                data-oid="kfo9o6d"
                            >
                                <path
                                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                                    data-oid="e2rlr0j"
                                />
                            </svg>
                            {resumeData.personalInfo.phone}
                        </span>
                    )}
                    {resumeData.personalInfo.location && (
                        <span className="flex items-center" data-oid="a7ofa18">
                            <svg
                                className="w-4 h-4 mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                data-oid="p-pjaj-"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clipRule="evenodd"
                                    data-oid="jkdo1za"
                                />
                            </svg>
                            {resumeData.personalInfo.location}
                        </span>
                    )}
                    
                    {/* FIX APPLIED: LINKEDIN - Display text is hardcoded to 'LinkedIn' */}
                    {resumeData.personalInfo.linkedin && (
                        <a 
                            href={resumeData.personalInfo.linkedin} // Uses the correct, full URL
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center hover:underline text-[hsl(196,80%,45%)]"
                            data-oid="1bra8:h"
                        >
                            <svg
                                className="w-4 h-4 mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                data-oid="ixtq33p"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                    clipRule="evenodd"
                                    data-oid="1j7wodd"
                                />
                            </svg>
                            {"LinkedIn"} 
                        </a>
                    )}
                    
                    {/* FIX APPLIED: GITHUB - Display text is hardcoded to 'GitHub' */}
                    {resumeData.personalInfo.github && (
                        <a 
                            href={resumeData.personalInfo.github} // Uses the correct, full URL
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center hover:underline text-[hsl(196,80%,45%)]"
                            data-oid="7ckvg2-"
                        >
                            <svg
                                className="w-4 h-4 mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                data-oid="gyn9orv"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                    clipRule="evenodd"
                                    data-oid="sl:n1kx"
                                />
                            </svg>
                            {"GitHub"} 
                        </a>
                    )}

                    {/* FIX APPLIED: PORTFOLIO - Display text is hardcoded to 'Portfolio' */}
                    {resumeData.personalInfo.portfolio && (
                        <a 
                            href={resumeData.personalInfo.portfolio}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center hover:underline text-[hsl(196,80%,45%)]"
                            data-oid="portfolio_link"
                        >
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M12 2a1 1 0 00-1-1H3a1 1 0 00-1 1v16a1 1 0 001 1h8a1 1 0 001-1v-5a1 1 0 00-2 0v4H4V3h7v4a1 1 0 002 0V2zm5 4h-2a1 1 0 000 2h2a1 1 0 000-2zM15 9h-2a1 1 0 000 2h2a1 1 0 000-2zM15 12h-2a1 1 0 000 2h2a1 1 0 000-2zM17 15h-2a1 1 0 000 2h2a1 1 0 000-2z" /></svg>
                            {"Portfolio"}
                        </a>
                    )}
                </div>
            </header>

            {/* Summary */}
            {resumeData.personalInfo.summary && (
                <section className="mb-6" data-oid="zuuvoma">
                    <h2
                        className="text-xl font-semibold text-[hsl(196,80%,45%)] mb-3 border-b border-gray-200 pb-1"
                        data-oid="32k10mq"
                    >
                        Professional Summary
                    </h2>
                    <p className="text-gray-700 leading-relaxed" data-oid="ra6kdjv">
                        {resumeData.personalInfo.summary}
                    </p>
                </section>
            )}

            {/* Experience */}
            {resumeData.experience.length > 0 && (
                <section className="mb-6" data-oid="63.ddlw">
                    <h2
                        className="text-xl font-semibold text-[hsl(196,80%,45%)] mb-3 border-b border-gray-200 pb-1"
                        data-oid="7didvf7"
                    >
                        Professional Experience
                    </h2>
                    <div className="space-y-4" data-oid="pv3co1n">
                        {resumeData.experience.map((exp) => (
                            <div key={exp.id} data-oid="yuog3z.">
                                <div
                                    className="flex justify-between items-start mb-2"
                                    data-oid="_db2jgl"
                                >
                                    <div data-oid="4y4hbrn">
                                        <h3
                                            className="font-semibold text-gray-800"
                                            data-oid="h1gyc-o"
                                        >
                                            {exp.position}
                                        </h3>
                                        <p
                                            className="text-[hsl(196,80%,45%)] font-medium"
                                            data-oid="w5j_q2e"
                                        >
                                            {exp.company}
                                        </p>
                                        {exp.location && (
                                            <p className="text-sm text-gray-600" data-oid="5-lehks">
                                                {exp.location}
                                            </p>
                                        )}
                                    </div>
                                    <div
                                        className="text-sm text-gray-600 text-right"
                                        data-oid="wdy5fp_"
                                    >
                                        {formatDate(exp.startDate)} -{' '}
                                        {exp.current ? 'Present' : formatDate(exp.endDate)}
                                    </div>
                                </div>
                                {exp.description.length > 0 && (
                                    <ul
                                        className="list-disc list-inside text-gray-700 space-y-1 ml-4"
                                        data-oid="957ad8-"
                                    >
                                        {exp.description
                                            .filter((desc) => desc.trim())
                                            .map((desc, index) => (
                                                <li
                                                    key={index}
                                                    className="text-sm"
                                                    data-oid="somywil"
                                                >
                                                    {desc}
                                                </li>
                                            ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Education */}
            {resumeData.education.length > 0 && (
                <section className="mb-6" data-oid="xen_vrj">
                    <h2
                        className="text-xl font-semibold text-[hsl(196,80%,45%)] mb-3 border-b border-gray-200 pb-1"
                        data-oid="w.69qgz"
                    >
                        Education
                    </h2>
                    <div className="space-y-3" data-oid="v_r1x68">
                        {resumeData.education.map((edu) => (
                            <div key={edu.id} data-oid="j:oz:.c">
                                <div
                                    className="flex justify-between items-start mb-1"
                                    data-oid="8qqi_ch"
                                >
                                    <div data-oid="phwd9h9">
                                        <h3
                                            className="font-semibold text-gray-800"
                                            data-oid="mhh663q"
                                        >
                                            {edu.degree} {edu.field && `in ${edu.field}`}
                                        </h3>
                                        <p
                                            className="text-[hsl(196,80%,45%)] font-medium"
                                            data-oid="nxstv:n"
                                        >
                                            {edu.institution}
                                        </p>
                                        {edu.location && (
                                            <p className="text-sm text-gray-600" data-oid="54wfb49">
                                                {edu.location}
                                            </p>
                                        )}
                                        {edu.gpa && (
                                            <p className="text-sm text-gray-600" data-oid="2bcur-6">
                                                GPA: {edu.gpa}
                                            </p>
                                        )}
                                    </div>
                                    <div
                                        className="text-sm text-gray-600 text-right"
                                        data-oid="dreizl-"
                                    >
                                        {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                                    </div>
                                </div>
                                {edu.achievements.length > 0 && edu.achievements[0] && (
                                    <ul
                                        className="list-disc list-inside text-gray-700 space-y-1 ml-4"
                                        data-oid=":17.why"
                                    >
                                        {edu.achievements
                                            .filter((achievement) => achievement.trim())
                                            .map((achievement, index) => (
                                                <li
                                                    key={index}
                                                    className="text-sm"
                                                    data-oid="xq5-inc"
                                                >
                                                    {achievement}
                                                </li>
                                            ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Projects */}
            {resumeData.projects.length > 0 && (
                <section className="mb-6" data-oid="m.1ol7f">
                    <h2
                        className="text-xl font-semibold text-[hsl(196,80%,45%)] mb-3 border-b border-gray-200 pb-1"
                        data-oid="8hucbc_"
                    >
                        Projects
                    </h2>
                    <div className="space-y-4" data-oid="zrmmxjg">
                        {resumeData.projects.map((project) => (
                            <div key={project.id} data-oid="zifl683">
                                <div className="mb-2" data-oid="n5ljv7c">
                                    <div className="flex justify-between items-start gap-4">
                                        <div>
                                            <h3 className="font-semibold text-gray-800" data-oid="t.ga.0x">
                                                {project.name}
                                            </h3>
                                            {project.technologies.length > 0 && (
                                                <p
                                                    className="text-sm text-[hsl(196,80%,45%)] font-medium"
                                                    data-oid="ial8d0n"
                                                >
                                                    Technologies: {project.technologies.join(', ')}
                                                </p>
                                            )}
                                        </div>
                                        <div className="text-sm text-gray-600 text-right">
                                            <div>
                                                {formatDate(project.startDate)} - {project.current ? 'Present' : formatDate(project.endDate)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {project.highlights.length > 0 && project.highlights[0] && (
                                    <ul
                                        className="list-disc list-inside text-gray-700 space-y-1 ml-4"
                                        data-oid="c2s874a"
                                    >
                                        {project.highlights
                                            .filter((highlight) => highlight.trim())
                                            .map((highlight, index) => (
                                                <li
                                                    key={index}
                                                    className="text-sm"
                                                    data-oid="bnegmru"
                                                >
                                                    {highlight}
                                                </li>
                                            ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Skills */}
            {resumeData.skills.length > 0 && (
                <section className="mb-6" data-oid="ld3izu9">
                    <h2
                        className="text-xl font-semibold text-[hsl(196,80%,45%)] mb-3 border-b border-gray-200 pb-1"
                        data-oid="r6w1y4p"
                    >
                        Technical Skills
                    </h2>
                    <div className="space-y-2" data-oid="6x1u_52">
                        {resumeData.skills.map((skillCategory, index) => (
                            <div key={index} className="flex" data-oid="vlbt0j0">
                                <span
                                    className="font-medium text-gray-800 w-32 flex-shrink-0"
                                    data-oid="p88wzyh"
                                >
                                    {skillCategory.category}:
                                </span>
                                <span className="text-gray-700" data-oid="ya-k:l3">
                                    {skillCategory.items.join(', ')}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Additional Information */}
            <div className="grid md:grid-cols-2 gap-6" data-oid="un18mja">
                {/* Certifications */}
                {resumeData.certifications.length > 0 && (
                    <section data-oid="cds3x19">
                        <h2
                            className="text-xl font-semibold text-[hsl(196,80%,45%)] mb-3 border-b border-gray-200 pb-1"
                            data-oid="gm4mm6b"
                        >
                            Certifications
                        </h2>
                        <ul className="space-y-1" data-oid="aneer80">
                            {resumeData.certifications.map((cert, index) => (
                                <li
                                    key={index}
                                    className="text-gray-700 text-sm"
                                    data-oid="rxd.-67"
                                >
                                    {cert}
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Languages */}
                {resumeData.languages.length > 0 && (
                    <section data-oid="o_7nj1d">
                        <h2
                            className="text-xl font-semibold text-[hsl(196,80%,45%)] mb-3 border-b border-gray-200 pb-1"
                            data-oid="36jma9j"
                        >
                            Languages
                        </h2>
                        <ul className="space-y-1" data-oid=":v2.:xz">
                            {resumeData.languages.map((lang, index) => (
                                <li
                                    key={index}
                                    className="text-gray-700 text-sm"
                                    data-oid="31h_0bf"
                                >
                                    {lang}
                                </li>
                            ))}
                        </ul>
                    </section>
                )}
            </div>
        </div>
    );

    const VinodTemplate = () => (
        (() => {
            const exportLineHeight = isExport ? 1.02 : 1.3;
            const sectionGap = isExport ? '0.22rem' : '0.7rem';
            const blockGap = isExport ? '0.08rem' : '0.45rem';
            const listItemGap = isExport ? '0.02em' : '0.2em';
            const headerBottomSpace = isExport ? '0.16in' : '0.32in';
            const sectionTitleBottomSpace = isExport ? '0.1rem' : '0.35rem';
            const sectionTitlePadding = isExport ? '0.04rem' : '0.12rem';
            const topPadding = isExport ? '0.26in' : '0.35in';
            const bottomPadding = isExport ? '0.22in' : '0.42in';
            const listTopMargin = isExport ? '0.1em' : '0.2em';
            const basicTemplateStyle = {
                fontFamily: BASIC_TEMPLATE_FONT_STACK,
                height: '11in',
                minHeight: '11in',
                maxHeight: '11in',
                width: '8.5in',
                fontSize: '11pt',
                lineHeight: exportLineHeight,
                fontWeight: 400,
                boxSizing: 'border-box' as const,
                overflow: 'hidden' as const,
                WebkitFontSmoothing: 'antialiased' as const,
                MozOsxFontSmoothing: 'grayscale' as const,
                fontKerning: 'normal' as const,
            };
            const bodyFont95 = '0.95em';
            const bodyFont90 = '0.9em';
            const bodyFont88 = '0.88em';
            const bodyFont86 = '0.86em';
            const listPaddingLeft = '1.35em';
            const listMarginTop = '0.2em';

            const blocks: BasicPageBlock[] = [];

            resumeData.education.forEach((edu, index) => {
                blocks.push({
                    key: `education-${edu.id}`,
                    sectionTitle: index === 0 ? 'Education' : undefined,
                    height: 4,
                    content: (
                        <div key={edu.id}>
                            <div className="flex items-start justify-between gap-4" style={{ fontSize: bodyFont95 }}>
                                <p className="font-semibold text-black" style={{ margin: 0 }}>{edu.institution}</p>
                                <p className="text-right text-black" style={{ fontSize: bodyFont90, margin: 0 }}>{edu.location}</p>
                            </div>
                            <div className="flex items-start justify-between gap-4 italic text-black" style={{ fontSize: bodyFont88 }}>
                                <p style={{ margin: 0 }}>
                                    {[edu.degree, edu.field].filter(Boolean).join(' in ')}
                                    {edu.gpa ? ` | GPA: ${edu.gpa}` : ''}
                                </p>
                                <p className="text-right" style={{ margin: 0 }}>{formatDateRange(edu.startDate, edu.endDate)}</p>
                            </div>
                        </div>
                    ),
                });
            });

            resumeData.experience.forEach((exp, index) => {
                const bulletCount = exp.description.filter((item) => item.trim()).length;
                blocks.push({
                    key: `experience-${exp.id}`,
                    sectionTitle: index === 0 ? 'Experience' : undefined,
                    height: (index === 0 ? 1.4 : 0) + 4 + Math.max(1.8, bulletCount * 1.2),
                    content: (
                        <div key={exp.id}>
                            <div className="flex items-start justify-between gap-4" style={{ fontSize: bodyFont95 }}>
                                <p className="font-semibold text-black" style={{ margin: 0 }}>{exp.position}</p>
                                <p className="text-right text-black" style={{ fontSize: bodyFont88, margin: 0 }}>
                                    {formatDateRange(exp.startDate, exp.endDate, exp.current)}
                                </p>
                            </div>
                            <div className="flex items-start justify-between gap-4 italic text-black" style={{ fontSize: bodyFont88 }}>
                                <p style={{ margin: 0 }}>{exp.company}</p>
                                <p className="text-right" style={{ margin: 0 }}>{exp.location}</p>
                            </div>
                            {bulletCount > 0 && (
                                <ul
                                    className="list-disc text-black"
                                    style={{ marginTop: listTopMargin, paddingLeft: listPaddingLeft, fontSize: bodyFont86 }}
                                >
                                    {exp.description.filter((item) => item.trim()).map((item, itemIndex) => (
                                        <li key={itemIndex} style={{ marginBottom: listItemGap }}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ),
                });
            });

            resumeData.projects.forEach((project, index) => {
                const bulletCount = project.highlights.filter((item) => item.trim()).length;
                blocks.push({
                    key: `project-${project.id}`,
                    sectionTitle: index === 0 ? 'Projects' : undefined,
                    height: (index === 0 ? 1.4 : 0) + 3 + Math.max(1.8, bulletCount * 1.15),
                    content: (
                        <div key={project.id}>
                            <div className="relative" style={{ fontSize: bodyFont90, paddingRight: '10.5rem' }}>
                                <p className="text-black" style={{ margin: 0 }}>
                                    <span className="font-semibold">{project.name}</span>
                                    {project.technologies.length > 0 && (
                                        <span className="italic">{` | ${project.technologies.join(', ')}`}</span>
                                    )}
                                </p>
                                <div
                                    className="text-right text-black"
                                    style={{ fontSize: '0.85em', margin: 0, position: 'absolute', top: 0, right: 0 }}
                                >
                                    <p style={{ margin: 0 }}>
                                        {formatDateRange(project.startDate, project.endDate, project.current)}
                                    </p>
                                    {(project.link || project.github) && (
                                        <div style={{ display: 'grid', rowGap: '0', justifyItems: 'end', lineHeight: 1.1 }}>
                                            {project.link && (
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="underline">
                                                    Live URL
                                                </a>
                                            )}
                                            {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="underline">
                                                Source Code
                                            </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                            {bulletCount > 0 && (
                                <ul
                                    className="list-disc text-black"
                                    style={{ marginTop: listTopMargin, paddingLeft: listPaddingLeft, fontSize: bodyFont86 }}
                                >
                                    {project.highlights.filter((item) => item.trim()).map((item, itemIndex) => (
                                        <li key={itemIndex} style={{ marginBottom: listItemGap }}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ),
                });
            });

            if (resumeData.skills.length > 0) {
                blocks.push({
                    key: 'skills',
                    sectionTitle: 'Technical Skills',
                    height: 4.5 + resumeData.skills.length * 1.15,
                    content: (
                        <div className="text-black" style={{ fontSize: bodyFont86, display: 'grid', rowGap: '0.2em' }}>
                            {resumeData.skills.map((skillCategory, index) => (
                                <p key={index} style={{ margin: 0 }}>
                                    <span className="font-semibold">{skillCategory.category}</span>
                                    {`: ${skillCategory.items.join(', ')}`}
                                </p>
                            ))}
                        </div>
                    ),
                });
            }

            const pages = createBasicPages(blocks);

            return (
                <div className="space-y-6">
                    {pages.map((page) => (
                        <div
                            key={page.key}
                            className={`resume-export-page max-w-4xl mx-auto bg-white text-left ${isExport ? '' : 'shadow-lg'}`}
                            style={{
                                ...basicTemplateStyle,
                                paddingLeft: '0.62in',
                                paddingRight: '0.62in',
                                paddingTop: topPadding,
                                paddingBottom: bottomPadding,
                                pageBreakAfter: page.key !== pages[pages.length - 1]?.key ? 'always' : 'auto',
                                breakAfter: page.key !== pages[pages.length - 1]?.key ? 'page' : 'auto',
                            }}
                        >
                            {page.showHeader && (
                                <header className="text-center" style={{ marginBottom: headerBottomSpace }}>
                                    <h1
                                        className="font-semibold uppercase text-black"
                                        style={{ fontSize: '2rem', letterSpacing: '0.1em' }}
                                    >
                                        {resumeData.personalInfo.fullName || 'Your Name'}
                                    </h1>
                                    <div
                                        className="mt-1 flex flex-wrap items-center justify-center gap-x-2 text-black"
                                        style={{ fontSize: '0.88rem' }}
                                    >
                                        {resumeData.personalInfo.phone && <span style={{ lineHeight: 1 }}>{resumeData.personalInfo.phone}</span>}
                                        {resumeData.personalInfo.email && (
                                            <>
                                                {resumeData.personalInfo.phone && <span style={{ lineHeight: 1 }}>|</span>}
                                                <a href={`mailto:${resumeData.personalInfo.email}`} className="underline">
                                                    {resumeData.personalInfo.email}
                                                </a>
                                            </>
                                        )}
                                        {resumeData.personalInfo.linkedin && (
                                            <>
                                                {(resumeData.personalInfo.phone || resumeData.personalInfo.email) && <span style={{ lineHeight: 1 }}>|</span>}
                                                <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="underline">
                                                    {resumeData.personalInfo.linkedin.replace(/^https?:\/\//, '')}
                                                </a>
                                            </>
                                        )}
                                        {resumeData.personalInfo.github && (
                                            <>
                                                {(resumeData.personalInfo.phone || resumeData.personalInfo.email || resumeData.personalInfo.linkedin) && <span style={{ lineHeight: 1 }}>|</span>}
                                                <a href={resumeData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="underline">
                                                    {resumeData.personalInfo.github.replace(/^https?:\/\//, '')}
                                                </a>
                                            </>
                                        )}
                                    </div>
                                </header>
                            )}

                            <div style={{ display: 'grid', rowGap: sectionGap }}>
                                {page.blocks.map((block) => (
                                    <div key={block.key} className="break-inside-avoid" style={{ display: 'grid', rowGap: blockGap }}>
                                        {block.sectionTitle && (
                                            <h2
                                                className="border-b border-black font-semibold uppercase text-black"
                                                style={{
                                                    marginBottom: sectionTitleBottomSpace,
                                                    paddingBottom: sectionTitlePadding,
                                                    fontSize: '1.02rem',
                                                    letterSpacing: '0.16em',
                                                }}
                                            >
                                                {block.sectionTitle}
                                            </h2>
                                        )}
                                        {block.content}
                                    </div>
                                ))}
                            </div>

                            <pre className="hidden">{basicTemplateLatexSource}</pre>
                        </div>
                    ))}
                </div>
            );
        })()
    );

    const ProfessionalTemplate = () => (
        <div
            className={`resume-export-page max-w-4xl mx-auto bg-white p-8 text-left ${isExport ? '' : 'shadow-lg'}`}
            style={{ ...templateStyle, minHeight: '11in', width: '8.5in' }}
        >
            {/* Professional Template Implementation - Left Aligned */}
            <div className="border-b-2 border-gray-800 pb-4 mb-6">
                <h1 className="text-3xl font-bold text-gray-900 uppercase tracking-wider mb-2">
                    {resumeData.personalInfo.fullName || 'Your Name'}
                </h1>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-700">
                    {resumeData.personalInfo.email && <div className="flex items-center">📧 {resumeData.personalInfo.email}</div>}
                    {resumeData.personalInfo.phone && <div className="flex items-center">📱 {resumeData.personalInfo.phone}</div>}
                    {resumeData.personalInfo.location && <div className="flex items-center">📍 {resumeData.personalInfo.location}</div>}
                    {resumeData.personalInfo.linkedin && <div className="flex items-center">🔗 LinkedIn</div>}
                </div>
            </div>

            {resumeData.personalInfo.summary && (
                <section className="mb-6">
                    <h2 className="text-sm font-bold text-gray-900 uppercase border-b border-gray-300 mb-2">Professional Summary</h2>
                    <p className="text-sm text-gray-700 leading-relaxed text-left">{resumeData.personalInfo.summary}</p>
                </section>
            )}

            {resumeData.experience.length > 0 && (
                <section className="mb-6">
                    <h2 className="text-sm font-bold text-gray-900 uppercase border-b border-gray-300 mb-3">Work Experience</h2>
                    <div className="space-y-4">
                        {resumeData.experience.map((exp) => (
                            <div key={exp.id} className="text-left">
                                <div className="flex justify-between font-bold text-sm">
                                    <span>{exp.company}</span>
                                    <span>{formatDate(exp.startDate)} — {exp.current ? 'Present' : formatDate(exp.endDate)}</span>
                                </div>
                                <div className="flex justify-between italic text-sm mb-1">
                                    <span>{exp.position}</span>
                                    <span>{exp.location}</span>
                                </div>
                                <ul className="list-disc list-inside text-xs text-gray-700 space-y-0.5 ml-2">
                                    {exp.description.filter(d => d.trim()).map((d, i) => <li key={i} className="text-left">{d}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {resumeData.education.length > 0 && (
                <section className="mb-6 text-left">
                    <h2 className="text-sm font-bold text-gray-900 uppercase border-b border-gray-300 mb-3">Education</h2>
                    <div className="space-y-3">
                        {resumeData.education.map((edu) => (
                            <div key={edu.id}>
                                <div className="flex justify-between font-bold text-sm">
                                    <span>{edu.institution}</span>
                                    <span>{formatDate(edu.startDate)} — {formatDate(edu.endDate)}</span>
                                </div>
                                <div className="text-sm italic">
                                    {edu.degree} in {edu.field} {edu.gpa && `| GPA: ${edu.gpa}`}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {resumeData.skills.length > 0 && (
                <section className="mb-6 text-left">
                    <h2 className="text-sm font-bold text-gray-900 uppercase border-b border-gray-300 mb-2">Technical Skills</h2>
                    <div className="space-y-1">
                        {resumeData.skills.map((s, i) => (
                            <div key={i} className="text-sm">
                                <span className="font-bold">{s.category}:</span> {s.items.join(', ')}
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );

    const CreativeTemplate = () => (
        <div
            className={`resume-export-page max-w-4xl mx-auto bg-white flex overflow-hidden text-left ${isExport ? '' : 'shadow-lg'}`}
            style={{ ...templateStyle, minHeight: '11in', width: '8.5in' }}
        >
            {/* Sidebar */}
            <div className="w-1/3 bg-gray-900 text-white p-8 text-left">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold mb-2 leading-tight">{resumeData.personalInfo.fullName || 'Your Name'}</h1>
                    <p className="text-blue-400 text-xs font-medium uppercase tracking-wider">Candidate Profile</p>
                </div>

                <div className="space-y-8">
                    <section>
                        <h2 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4 border-b border-gray-800 pb-2">Contact Details</h2>
                        <div className="space-y-3 text-[11px] text-gray-300">
                            {resumeData.personalInfo.email && <div className="flex items-center gap-2"><span className="text-blue-400">✉</span> {resumeData.personalInfo.email}</div>}
                            {resumeData.personalInfo.phone && <div className="flex items-center gap-2"><span className="text-blue-400">☎</span> {resumeData.personalInfo.phone}</div>}
                            {resumeData.personalInfo.location && <div className="flex items-center gap-2"><span className="text-blue-400">📍</span> {resumeData.personalInfo.location}</div>}
                        </div>
                    </section>

                    {resumeData.skills.length > 0 && (
                        <section>
                            <h2 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4 border-b border-gray-800 pb-2">Expertise</h2>
                            <div className="space-y-4">
                                {resumeData.skills.map((s, i) => (
                                    <div key={i}>
                                        <p className="text-[9px] font-bold uppercase text-blue-400 mb-2">{s.category}</p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {s.items.map((item, idx) => (
                                                <span key={idx} className="bg-gray-800/50 text-gray-300 px-2 py-0.5 rounded text-[10px] border border-gray-700">{item}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>

            {/* Main Content */}
            <div className="w-2/3 p-10 bg-white text-left">
                {resumeData.personalInfo.summary && (
                    <section className="mb-10">
                        <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-3">
                            <span className="w-6 h-1 bg-blue-500"></span> Summary
                        </h2>
                        <p className="text-sm text-gray-600 leading-relaxed text-left">{resumeData.personalInfo.summary}</p>
                    </section>
                )}

                {resumeData.experience.length > 0 && (
                    <section className="mb-10">
                        <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="w-6 h-1 bg-blue-500"></span> Experience
                        </h2>
                        <div className="space-y-8">
                            {resumeData.experience.map((exp) => (
                                <div key={exp.id} className="relative pl-6 border-l-2 border-gray-100">
                                    <div className="absolute w-2.5 h-2.5 bg-blue-500 rounded-full -left-[6px] top-1.5 ring-4 ring-white"></div>
                                    <h3 className="font-bold text-gray-800 text-sm mb-1">{exp.position}</h3>
                                    <div className="flex justify-between items-center mb-3">
                                        <p className="text-blue-600 text-[11px] font-bold">{exp.company}</p>
                                        <p className="text-gray-400 text-[10px] font-medium">{formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}</p>
                                    </div>
                                    <ul className="list-disc list-outside text-[11px] text-gray-600 space-y-1.5 ml-3">
                                        {exp.description.filter(d => d.trim()).map((d, i) => <li key={i} className="text-left pl-1">{d}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {resumeData.education.length > 0 && (
                    <section>
                        <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="w-6 h-1 bg-blue-500"></span> Education
                        </h2>
                        <div className="space-y-6">
                            {resumeData.education.map((edu) => (
                                <div key={edu.id} className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-bold text-gray-800 text-sm mb-1">{edu.degree}</h3>
                                        <p className="text-gray-500 text-xs">{edu.institution}</p>
                                    </div>
                                    <p className="text-gray-400 text-[10px] font-medium pt-1">{formatDate(edu.startDate)} - {formatDate(edu.endDate)}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );

    const templates = {
        modern: ModernTemplate,
        [BASIC_TEMPLATE_ID]: VinodTemplate,
        professional: ProfessionalTemplate,
        creative: CreativeTemplate,
    };

    const TemplateComponent = templates[template as keyof typeof templates] || ModernTemplate;

    return <TemplateComponent data-oid="42kp747" />;
}
