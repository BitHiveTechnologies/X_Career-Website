'use client';

import { ResumeData } from '@/app/resume-builder/page';

interface ResumePreviewProps {
    resumeData: ResumeData;
    template: string;
}

export default function ResumePreview({ resumeData, template }: ResumePreviewProps) {
    const formatDate = (dateString: string) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    };

    const ModernTemplate = () => (
        <div
            className="max-w-4xl mx-auto bg-white p-8 shadow-lg"
            style={{ minHeight: '11in', width: '8.5in' }}
            data-oid="hhy:wxb"
        >
            {/* Header */}
            <header className="border-b-2 border-[hsl(196,80%,45%)] pb-6 mb-6" data-oid="szgl5n8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2" data-oid="0l5ugl-">
                    {resumeData.personalInfo.fullName || 'Your Name'}
                </h1>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600" data-oid="zmucxvj">
                    {resumeData.personalInfo.email && (
                        <span className="flex items-center" data-oid="nidfn2r">
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
                        </span>
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
                    {resumeData.personalInfo.linkedin && (
                        <span className="flex items-center" data-oid="1bra8:h">
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
                            LinkedIn
                        </span>
                    )}
                    {resumeData.personalInfo.github && (
                        <span className="flex items-center" data-oid="7ckvg2-">
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
                            GitHub
                        </span>
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
                                    <div
                                        className="flex space-x-4 text-sm text-gray-600"
                                        data-oid="eu._201"
                                    >
                                        {project.link && (
                                            <span data-oid="0pei95n">
                                                Live Demo: {project.link}
                                            </span>
                                        )}
                                        {project.github && (
                                            <span data-oid="5z_pf2t">GitHub: {project.github}</span>
                                        )}
                                    </div>
                                </div>
                                {project.description && (
                                    <p className="text-gray-700 text-sm mb-2" data-oid="ov7ecd5">
                                        {project.description}
                                    </p>
                                )}
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

    const MinimalTemplate = () => (
        <div
            className="max-w-4xl mx-auto bg-white p-8 shadow-lg"
            style={{ minHeight: '11in', width: '8.5in' }}
            data-oid="c-.2qmw"
        >
            {/* Header */}
            <header className="text-center mb-8" data-oid="ab_2fa-">
                <h1 className="text-4xl font-light text-gray-800 mb-4" data-oid="zv.55dc">
                    {resumeData.personalInfo.fullName || 'Your Name'}
                </h1>
                <div
                    className="flex justify-center flex-wrap gap-6 text-sm text-gray-600"
                    data-oid="l1wna1z"
                >
                    {resumeData.personalInfo.email && (
                        <span data-oid="9g5mmhj">{resumeData.personalInfo.email}</span>
                    )}
                    {resumeData.personalInfo.phone && (
                        <span data-oid="uwb938p">{resumeData.personalInfo.phone}</span>
                    )}
                    {resumeData.personalInfo.location && (
                        <span data-oid="-s_xfbh">{resumeData.personalInfo.location}</span>
                    )}
                    {resumeData.personalInfo.linkedin && <span data-oid="kcrjpy:">LinkedIn</span>}
                    {resumeData.personalInfo.github && <span data-oid="43.jj::">GitHub</span>}
                </div>
            </header>

            {/* Summary */}
            {resumeData.personalInfo.summary && (
                <section className="mb-8" data-oid="srhf0ol">
                    <p
                        className="text-gray-700 leading-relaxed text-center italic"
                        data-oid="bpm_zz7"
                    >
                        {resumeData.personalInfo.summary}
                    </p>
                </section>
            )}

            {/* Experience */}
            {resumeData.experience.length > 0 && (
                <section className="mb-8" data-oid="dy7297:">
                    <h2
                        className="text-2xl font-light text-gray-800 mb-4 text-center"
                        data-oid="7.mtz4y"
                    >
                        EXPERIENCE
                    </h2>
                    <div className="space-y-6" data-oid="auv4421">
                        {resumeData.experience.map((exp) => (
                            <div
                                key={exp.id}
                                className="border-l-2 border-gray-300 pl-4"
                                data-oid="r4-p_dd"
                            >
                                <div className="mb-2" data-oid="luhyk-6">
                                    <h3
                                        className="font-semibold text-gray-800 text-lg"
                                        data-oid="6_9jn93"
                                    >
                                        {exp.position}
                                    </h3>
                                    <p className="text-gray-600 font-medium" data-oid="783qhij">
                                        {exp.company}
                                    </p>
                                    <p className="text-sm text-gray-500" data-oid="-e8zg9.">
                                        {formatDate(exp.startDate)} -{' '}
                                        {exp.current ? 'Present' : formatDate(exp.endDate)}
                                        {exp.location && ` • ${exp.location}`}
                                    </p>
                                </div>
                                {exp.description.length > 0 && (
                                    <ul className="space-y-1" data-oid=".d9w8zu">
                                        {exp.description
                                            .filter((desc) => desc.trim())
                                            .map((desc, index) => (
                                                <li
                                                    key={index}
                                                    className="text-gray-700 text-sm"
                                                    data-oid="r.9lr2u"
                                                >
                                                    • {desc}
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
                <section className="mb-8" data-oid="0g1p5p_">
                    <h2
                        className="text-2xl font-light text-gray-800 mb-4 text-center"
                        data-oid="eirwm-r"
                    >
                        EDUCATION
                    </h2>
                    <div className="space-y-4" data-oid="n17cvr8">
                        {resumeData.education.map((edu) => (
                            <div key={edu.id} className="text-center" data-oid="-c4llci">
                                <h3 className="font-semibold text-gray-800" data-oid="1tpjd87">
                                    {edu.degree} {edu.field && `in ${edu.field}`}
                                </h3>
                                <p className="text-gray-600" data-oid="iw7j:2i">
                                    {edu.institution}
                                </p>
                                <p className="text-sm text-gray-500" data-oid="6enp:g9">
                                    {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                                    {edu.gpa && ` • GPA: ${edu.gpa}`}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Skills */}
            {resumeData.skills.length > 0 && (
                <section className="mb-8" data-oid="32vyx.r">
                    <h2
                        className="text-2xl font-light text-gray-800 mb-4 text-center"
                        data-oid="0r1h-2s"
                    >
                        SKILLS
                    </h2>
                    <div className="text-center space-y-2" data-oid="skaorld">
                        {resumeData.skills.map((skillCategory, index) => (
                            <div key={index} data-oid="s41pxsj">
                                <span className="font-medium text-gray-800" data-oid="mix9_29">
                                    {skillCategory.category}:
                                </span>
                                <span className="text-gray-700 ml-2" data-oid="qgwe0yz">
                                    {skillCategory.items.join(' • ')}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Projects */}
            {resumeData.projects.length > 0 && (
                <section className="mb-8" data-oid="-d0lcmt">
                    <h2
                        className="text-2xl font-light text-gray-800 mb-4 text-center"
                        data-oid="jxv:ioh"
                    >
                        PROJECTS
                    </h2>
                    <div className="space-y-4" data-oid="5vj4_j5">
                        {resumeData.projects.map((project) => (
                            <div key={project.id} className="text-center" data-oid="_lr4zjq">
                                <h3 className="font-semibold text-gray-800" data-oid="pah0hk-">
                                    {project.name}
                                </h3>
                                {project.technologies.length > 0 && (
                                    <p className="text-sm text-gray-600" data-oid="3weyi:e">
                                        {project.technologies.join(' • ')}
                                    </p>
                                )}
                                {project.description && (
                                    <p className="text-gray-700 text-sm mt-1" data-oid="y_qdhfk">
                                        {project.description}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );

    const templates = {
        modern: ModernTemplate,
        minimal: MinimalTemplate,
    };

    const TemplateComponent = templates[template as keyof typeof templates] || ModernTemplate;

    return <TemplateComponent data-oid="42kp747" />;
}
