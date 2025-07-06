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
            data-oid="8gv0h1n"
        >
            {/* Header */}
            <header className="border-b-2 border-[hsl(196,80%,45%)] pb-6 mb-6" data-oid="0r8c82o">
                <h1 className="text-3xl font-bold text-gray-800 mb-2" data-oid=".c8ptsg">
                    {resumeData.personalInfo.fullName || 'Your Name'}
                </h1>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600" data-oid="-p39v2o">
                    {resumeData.personalInfo.email && (
                        <span className="flex items-center" data-oid="r02g_va">
                            <svg
                                className="w-4 h-4 mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                data-oid="lsnejsb"
                            >
                                <path
                                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                                    data-oid="llbd7j:"
                                />

                                <path
                                    d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                                    data-oid="r6m337n"
                                />
                            </svg>
                            {resumeData.personalInfo.email}
                        </span>
                    )}
                    {resumeData.personalInfo.phone && (
                        <span className="flex items-center" data-oid="hj6eluj">
                            <svg
                                className="w-4 h-4 mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                data-oid="a32idje"
                            >
                                <path
                                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                                    data-oid="ojwy8d-"
                                />
                            </svg>
                            {resumeData.personalInfo.phone}
                        </span>
                    )}
                    {resumeData.personalInfo.location && (
                        <span className="flex items-center" data-oid="ctfep:8">
                            <svg
                                className="w-4 h-4 mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                data-oid="mfl7rq6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clipRule="evenodd"
                                    data-oid="oblunpt"
                                />
                            </svg>
                            {resumeData.personalInfo.location}
                        </span>
                    )}
                    {resumeData.personalInfo.linkedin && (
                        <span className="flex items-center" data-oid="cm1e3li">
                            <svg
                                className="w-4 h-4 mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                data-oid="c908ekv"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                    clipRule="evenodd"
                                    data-oid="kvbu1ys"
                                />
                            </svg>
                            LinkedIn
                        </span>
                    )}
                    {resumeData.personalInfo.github && (
                        <span className="flex items-center" data-oid="h1-cjvu">
                            <svg
                                className="w-4 h-4 mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                data-oid="tuu4_.v"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                    clipRule="evenodd"
                                    data-oid="vz9m3uo"
                                />
                            </svg>
                            GitHub
                        </span>
                    )}
                </div>
            </header>

            {/* Summary */}
            {resumeData.personalInfo.summary && (
                <section className="mb-6" data-oid="ldly.vs">
                    <h2
                        className="text-xl font-semibold text-[hsl(196,80%,45%)] mb-3 border-b border-gray-200 pb-1"
                        data-oid="dks444x"
                    >
                        Professional Summary
                    </h2>
                    <p className="text-gray-700 leading-relaxed" data-oid="vzsy7e4">
                        {resumeData.personalInfo.summary}
                    </p>
                </section>
            )}

            {/* Experience */}
            {resumeData.experience.length > 0 && (
                <section className="mb-6" data-oid="9p3obae">
                    <h2
                        className="text-xl font-semibold text-[hsl(196,80%,45%)] mb-3 border-b border-gray-200 pb-1"
                        data-oid=":ik0moe"
                    >
                        Professional Experience
                    </h2>
                    <div className="space-y-4" data-oid="vd959zt">
                        {resumeData.experience.map((exp) => (
                            <div key={exp.id} data-oid="lt85_po">
                                <div
                                    className="flex justify-between items-start mb-2"
                                    data-oid="s-7ls.o"
                                >
                                    <div data-oid="i.:x_iu">
                                        <h3
                                            className="font-semibold text-gray-800"
                                            data-oid="b_fl00o"
                                        >
                                            {exp.position}
                                        </h3>
                                        <p
                                            className="text-[hsl(196,80%,45%)] font-medium"
                                            data-oid="l:m2x1."
                                        >
                                            {exp.company}
                                        </p>
                                        {exp.location && (
                                            <p className="text-sm text-gray-600" data-oid="x1y_-24">
                                                {exp.location}
                                            </p>
                                        )}
                                    </div>
                                    <div
                                        className="text-sm text-gray-600 text-right"
                                        data-oid="o1y-8k5"
                                    >
                                        {formatDate(exp.startDate)} -{' '}
                                        {exp.current ? 'Present' : formatDate(exp.endDate)}
                                    </div>
                                </div>
                                {exp.description.length > 0 && (
                                    <ul
                                        className="list-disc list-inside text-gray-700 space-y-1 ml-4"
                                        data-oid="r_yly-i"
                                    >
                                        {exp.description
                                            .filter((desc) => desc.trim())
                                            .map((desc, index) => (
                                                <li
                                                    key={index}
                                                    className="text-sm"
                                                    data-oid="qzjno79"
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
                <section className="mb-6" data-oid="w00mjw.">
                    <h2
                        className="text-xl font-semibold text-[hsl(196,80%,45%)] mb-3 border-b border-gray-200 pb-1"
                        data-oid="6b774tn"
                    >
                        Education
                    </h2>
                    <div className="space-y-3" data-oid="f.hh8hh">
                        {resumeData.education.map((edu) => (
                            <div key={edu.id} data-oid="lcua_h9">
                                <div
                                    className="flex justify-between items-start mb-1"
                                    data-oid=":rw2t-2"
                                >
                                    <div data-oid="9igbey9">
                                        <h3
                                            className="font-semibold text-gray-800"
                                            data-oid="x0pos0b"
                                        >
                                            {edu.degree} {edu.field && `in ${edu.field}`}
                                        </h3>
                                        <p
                                            className="text-[hsl(196,80%,45%)] font-medium"
                                            data-oid="u3ypg6."
                                        >
                                            {edu.institution}
                                        </p>
                                        {edu.location && (
                                            <p className="text-sm text-gray-600" data-oid="02ebzg7">
                                                {edu.location}
                                            </p>
                                        )}
                                        {edu.gpa && (
                                            <p className="text-sm text-gray-600" data-oid="mu66s.v">
                                                GPA: {edu.gpa}
                                            </p>
                                        )}
                                    </div>
                                    <div
                                        className="text-sm text-gray-600 text-right"
                                        data-oid="e3r:9_3"
                                    >
                                        {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                                    </div>
                                </div>
                                {edu.achievements.length > 0 && edu.achievements[0] && (
                                    <ul
                                        className="list-disc list-inside text-gray-700 space-y-1 ml-4"
                                        data-oid="6ahgcp6"
                                    >
                                        {edu.achievements
                                            .filter((achievement) => achievement.trim())
                                            .map((achievement, index) => (
                                                <li
                                                    key={index}
                                                    className="text-sm"
                                                    data-oid="cq57qbw"
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
                <section className="mb-6" data-oid="_yt33e2">
                    <h2
                        className="text-xl font-semibold text-[hsl(196,80%,45%)] mb-3 border-b border-gray-200 pb-1"
                        data-oid="c77-sen"
                    >
                        Projects
                    </h2>
                    <div className="space-y-4" data-oid="ynyzlut">
                        {resumeData.projects.map((project) => (
                            <div key={project.id} data-oid="dg03mn:">
                                <div className="mb-2" data-oid="jk9f3e5">
                                    <h3 className="font-semibold text-gray-800" data-oid="cpr3qnw">
                                        {project.name}
                                    </h3>
                                    {project.technologies.length > 0 && (
                                        <p
                                            className="text-sm text-[hsl(196,80%,45%)] font-medium"
                                            data-oid="8712tzv"
                                        >
                                            Technologies: {project.technologies.join(', ')}
                                        </p>
                                    )}
                                    <div
                                        className="flex space-x-4 text-sm text-gray-600"
                                        data-oid="y4z6q6w"
                                    >
                                        {project.link && (
                                            <span data-oid="nc7.ibd">
                                                Live Demo: {project.link}
                                            </span>
                                        )}
                                        {project.github && (
                                            <span data-oid="rzhrmep">GitHub: {project.github}</span>
                                        )}
                                    </div>
                                </div>
                                {project.description && (
                                    <p className="text-gray-700 text-sm mb-2" data-oid=".1wy6bn">
                                        {project.description}
                                    </p>
                                )}
                                {project.highlights.length > 0 && project.highlights[0] && (
                                    <ul
                                        className="list-disc list-inside text-gray-700 space-y-1 ml-4"
                                        data-oid="1t.kfci"
                                    >
                                        {project.highlights
                                            .filter((highlight) => highlight.trim())
                                            .map((highlight, index) => (
                                                <li
                                                    key={index}
                                                    className="text-sm"
                                                    data-oid="7voezsi"
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
                <section className="mb-6" data-oid=".yoqifi">
                    <h2
                        className="text-xl font-semibold text-[hsl(196,80%,45%)] mb-3 border-b border-gray-200 pb-1"
                        data-oid="7udtkfp"
                    >
                        Technical Skills
                    </h2>
                    <div className="space-y-2" data-oid="kq59ofr">
                        {resumeData.skills.map((skillCategory, index) => (
                            <div key={index} className="flex" data-oid="ub1ghp_">
                                <span
                                    className="font-medium text-gray-800 w-32 flex-shrink-0"
                                    data-oid="ng7-yo9"
                                >
                                    {skillCategory.category}:
                                </span>
                                <span className="text-gray-700" data-oid="o4aza7t">
                                    {skillCategory.items.join(', ')}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Additional Information */}
            <div className="grid md:grid-cols-2 gap-6" data-oid="yl7qwfm">
                {/* Certifications */}
                {resumeData.certifications.length > 0 && (
                    <section data-oid="e.0epaa">
                        <h2
                            className="text-xl font-semibold text-[hsl(196,80%,45%)] mb-3 border-b border-gray-200 pb-1"
                            data-oid=":hr6roy"
                        >
                            Certifications
                        </h2>
                        <ul className="space-y-1" data-oid="hm:3.wx">
                            {resumeData.certifications.map((cert, index) => (
                                <li
                                    key={index}
                                    className="text-gray-700 text-sm"
                                    data-oid="rvw81bc"
                                >
                                    {cert}
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Languages */}
                {resumeData.languages.length > 0 && (
                    <section data-oid="mj3n5e9">
                        <h2
                            className="text-xl font-semibold text-[hsl(196,80%,45%)] mb-3 border-b border-gray-200 pb-1"
                            data-oid="rw_gk4t"
                        >
                            Languages
                        </h2>
                        <ul className="space-y-1" data-oid="hh4n9le">
                            {resumeData.languages.map((lang, index) => (
                                <li
                                    key={index}
                                    className="text-gray-700 text-sm"
                                    data-oid="x.eb5lu"
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
            data-oid="blgh8z1"
        >
            {/* Header */}
            <header className="text-center mb-8" data-oid="e3xokkk">
                <h1 className="text-4xl font-light text-gray-800 mb-4" data-oid="qxbdrk3">
                    {resumeData.personalInfo.fullName || 'Your Name'}
                </h1>
                <div
                    className="flex justify-center flex-wrap gap-6 text-sm text-gray-600"
                    data-oid="d0vf6he"
                >
                    {resumeData.personalInfo.email && (
                        <span data-oid="2-3.m3m">{resumeData.personalInfo.email}</span>
                    )}
                    {resumeData.personalInfo.phone && (
                        <span data-oid="qhdokx6">{resumeData.personalInfo.phone}</span>
                    )}
                    {resumeData.personalInfo.location && (
                        <span data-oid=".8:rw:y">{resumeData.personalInfo.location}</span>
                    )}
                    {resumeData.personalInfo.linkedin && <span data-oid="7s8tij6">LinkedIn</span>}
                    {resumeData.personalInfo.github && <span data-oid="k6xzkhj">GitHub</span>}
                </div>
            </header>

            {/* Summary */}
            {resumeData.personalInfo.summary && (
                <section className="mb-8" data-oid="9ipjyy:">
                    <p
                        className="text-gray-700 leading-relaxed text-center italic"
                        data-oid="2ytnmxt"
                    >
                        {resumeData.personalInfo.summary}
                    </p>
                </section>
            )}

            {/* Experience */}
            {resumeData.experience.length > 0 && (
                <section className="mb-8" data-oid="d-1ht0h">
                    <h2
                        className="text-2xl font-light text-gray-800 mb-4 text-center"
                        data-oid="gz9-vz6"
                    >
                        EXPERIENCE
                    </h2>
                    <div className="space-y-6" data-oid="mvu6tf2">
                        {resumeData.experience.map((exp) => (
                            <div
                                key={exp.id}
                                className="border-l-2 border-gray-300 pl-4"
                                data-oid="vm_00_w"
                            >
                                <div className="mb-2" data-oid="i0k-2v8">
                                    <h3
                                        className="font-semibold text-gray-800 text-lg"
                                        data-oid="wkkjet_"
                                    >
                                        {exp.position}
                                    </h3>
                                    <p className="text-gray-600 font-medium" data-oid="9p_j102">
                                        {exp.company}
                                    </p>
                                    <p className="text-sm text-gray-500" data-oid="bbhi5xt">
                                        {formatDate(exp.startDate)} -{' '}
                                        {exp.current ? 'Present' : formatDate(exp.endDate)}
                                        {exp.location && ` • ${exp.location}`}
                                    </p>
                                </div>
                                {exp.description.length > 0 && (
                                    <ul className="space-y-1" data-oid="7_1vhsi">
                                        {exp.description
                                            .filter((desc) => desc.trim())
                                            .map((desc, index) => (
                                                <li
                                                    key={index}
                                                    className="text-gray-700 text-sm"
                                                    data-oid="dnhcpir"
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
                <section className="mb-8" data-oid="x0jy4--">
                    <h2
                        className="text-2xl font-light text-gray-800 mb-4 text-center"
                        data-oid="cv_8liw"
                    >
                        EDUCATION
                    </h2>
                    <div className="space-y-4" data-oid="mrknc:y">
                        {resumeData.education.map((edu) => (
                            <div key={edu.id} className="text-center" data-oid="bosupo8">
                                <h3 className="font-semibold text-gray-800" data-oid="jdotoqr">
                                    {edu.degree} {edu.field && `in ${edu.field}`}
                                </h3>
                                <p className="text-gray-600" data-oid="wgp1_lv">
                                    {edu.institution}
                                </p>
                                <p className="text-sm text-gray-500" data-oid="vtcj58t">
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
                <section className="mb-8" data-oid="vtc68t7">
                    <h2
                        className="text-2xl font-light text-gray-800 mb-4 text-center"
                        data-oid="f4a4_fj"
                    >
                        SKILLS
                    </h2>
                    <div className="text-center space-y-2" data-oid="k7m:06e">
                        {resumeData.skills.map((skillCategory, index) => (
                            <div key={index} data-oid="dix41jh">
                                <span className="font-medium text-gray-800" data-oid="qa.yygg">
                                    {skillCategory.category}:
                                </span>
                                <span className="text-gray-700 ml-2" data-oid="9gn7cpz">
                                    {skillCategory.items.join(' • ')}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Projects */}
            {resumeData.projects.length > 0 && (
                <section className="mb-8" data-oid="qt1:evi">
                    <h2
                        className="text-2xl font-light text-gray-800 mb-4 text-center"
                        data-oid="nci.3g:"
                    >
                        PROJECTS
                    </h2>
                    <div className="space-y-4" data-oid="ej4_:7:">
                        {resumeData.projects.map((project) => (
                            <div key={project.id} className="text-center" data-oid="7tkugr3">
                                <h3 className="font-semibold text-gray-800" data-oid="_orbx5u">
                                    {project.name}
                                </h3>
                                {project.technologies.length > 0 && (
                                    <p className="text-sm text-gray-600" data-oid="1e2k.0.">
                                        {project.technologies.join(' • ')}
                                    </p>
                                )}
                                {project.description && (
                                    <p className="text-gray-700 text-sm mt-1" data-oid="z-r7wxg">
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

    return <TemplateComponent data-oid="1:nkfsw" />;
}
