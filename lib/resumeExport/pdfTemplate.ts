type PersonalInfo = {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
    portfolio: string;
    summary: string;
};

type Experience = {
    id: string;
    company: string;
    position: string;
    location: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string[];
};

type Education = {
    id: string;
    institution: string;
    degree: string;
    field: string;
    location: string;
    startDate: string;
    endDate: string;
    gpa?: string;
    achievements: string[];
};

type Project = {
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
};

type Skill = {
    category: string;
    items: string[];
};

export type ExportResumeData = {
    personalInfo: PersonalInfo;
    experience: Experience[];
    education: Education[];
    projects: Project[];
    skills: Skill[];
    certifications: string[];
    languages: string[];
};

const escapeHtml = (value: string): string =>
    value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');

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

const renderBasicSections = (resumeData: ExportResumeData) => {
    const education = resumeData.education.length > 0
        ? `
        <section class="section">
            <h2 class="section-title">Education</h2>
            ${resumeData.education.map((edu) => `
                <div class="entry">
                    <table class="entry-table">
                        <tr>
                            <td class="entry-left strong">${escapeHtml(edu.institution || '')}</td>
                            <td class="entry-right">${escapeHtml(edu.location || '')}</td>
                        </tr>
                        <tr>
                            <td class="entry-left italic">${escapeHtml([edu.degree, edu.field].filter(Boolean).join(' in '))}</td>
                            <td class="entry-right italic">${escapeHtml(formatDateRange(edu.startDate, edu.endDate))}</td>
                        </tr>
                    </table>
                </div>
            `).join('')}
        </section>
        `
        : '';

    const experience = resumeData.experience.length > 0
        ? `
        <section class="section">
            <h2 class="section-title">Experience</h2>
            ${resumeData.experience.map((exp) => `
                <div class="entry">
                    <table class="entry-table">
                        <tr>
                            <td class="entry-left strong">${escapeHtml(exp.position || '')}</td>
                            <td class="entry-right">${escapeHtml(formatDateRange(exp.startDate, exp.endDate, exp.current))}</td>
                        </tr>
                        <tr>
                            <td class="entry-left italic">${escapeHtml(exp.company || '')}</td>
                            <td class="entry-right italic">${escapeHtml(exp.location || '')}</td>
                        </tr>
                    </table>
                    ${exp.description.filter(Boolean).length > 0 ? `
                        <ul class="bullet-list">
                            ${exp.description.filter((item) => item.trim()).map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
                        </ul>
                    ` : ''}
                </div>
            `).join('')}
        </section>
        `
        : '';

    const projects = resumeData.projects.length > 0
        ? `
        <section class="section">
            <h2 class="section-title">Projects</h2>
            ${resumeData.projects.map((project) => `
                <div class="entry">
                    <table class="entry-table">
                        <tr>
                            <td class="entry-left">
                                <span class="strong">${escapeHtml(project.name || '')}</span>${project.technologies.length > 0 ? ` <span class="italic">| ${escapeHtml(project.technologies.join(', '))}</span>` : ''}
                            </td>
                            <td class="entry-right">${escapeHtml(formatDateRange(project.startDate, project.endDate, project.current))}</td>
                        </tr>
                    </table>
                    ${project.highlights.filter(Boolean).length > 0 ? `
                        <ul class="bullet-list">
                            ${project.highlights.filter((item) => item.trim()).map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
                        </ul>
                    ` : ''}
                </div>
            `).join('')}
        </section>
        `
        : '';

    const skills = resumeData.skills.length > 0
        ? `
        <section class="section">
            <h2 class="section-title">Technical Skills</h2>
            <div class="skills-list">
                ${resumeData.skills.map((skill) => `
                    <p class="skill-row"><span class="strong">${escapeHtml(skill.category || '')}</span>: ${escapeHtml(skill.items.join(', '))}</p>
                `).join('')}
            </div>
        </section>
        `
        : '';

    return `${education}${experience}${projects}${skills}`;
};

export const buildResumePdfHtml = (resumeData: ExportResumeData, template: string) => {
    const name = escapeHtml(resumeData.personalInfo.fullName || 'Your Name');
    const phone = resumeData.personalInfo.phone ? `<span>${escapeHtml(resumeData.personalInfo.phone)}</span>` : '';
    const email = resumeData.personalInfo.email ? `<span>${escapeHtml(resumeData.personalInfo.email)}</span>` : '';
    const linkedin = resumeData.personalInfo.linkedin ? `<span>${escapeHtml(resumeData.personalInfo.linkedin.replace(/^https?:\/\//, ''))}</span>` : '';
    const github = resumeData.personalInfo.github ? `<span>${escapeHtml(resumeData.personalInfo.github.replace(/^https?:\/\//, ''))}</span>` : '';
    const contactParts = [phone, email, linkedin, github].filter(Boolean).join('<span class="separator">|</span>');

    const body = renderBasicSections(resumeData);

    return `
    <!doctype html>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>${name}</title>
            <style>
                @page {
                    size: letter;
                    margin: 0;
                }

                html, body {
                    margin: 0;
                    padding: 0;
                    background: #ffffff;
                }

                body {
                    font-family: "Computer Modern Serif", "Latin Modern Roman", "CMU Serif", "STIX Two Text", "Charter", "Times New Roman", serif;
                    color: #000000;
                    -webkit-print-color-adjust: exact;
                    print-color-adjust: exact;
                }

                .page {
                    width: 8.5in;
                    min-height: 11in;
                    margin: 0 auto;
                    box-sizing: border-box;
                    padding: 0.34in 0.62in 0.28in;
                    background: #ffffff;
                    overflow: hidden;
                }

                .header {
                    text-align: center;
                    margin-bottom: 0.22in;
                }

                .name {
                    margin: 0;
                    font-size: 30px;
                    font-weight: 700;
                    letter-spacing: 0.10em;
                    text-transform: uppercase;
                    line-height: 1;
                }

                .contact {
                    margin-top: 6px;
                    font-size: 16px;
                    line-height: 1;
                }

                .contact span {
                    display: inline-block;
                    vertical-align: middle;
                }

                .separator {
                    margin: 0 10px;
                }

                .section {
                    margin: 0 0 10px;
                }

                .section-title {
                    margin: 0 0 6px;
                    padding: 0 0 2px;
                    border-bottom: 1px solid #000;
                    font-size: 26px;
                    font-weight: 700;
                    letter-spacing: 0.14em;
                    line-height: 1;
                    text-transform: uppercase;
                }

                .entry {
                    margin: 0 0 8px;
                    page-break-inside: avoid;
                }

                .entry-table {
                    width: 100%;
                    border-collapse: collapse;
                    table-layout: fixed;
                }

                .entry-table td {
                    padding: 0;
                    vertical-align: top;
                    line-height: 1.02;
                }

                .entry-left {
                    width: 72%;
                    font-size: 17px;
                }

                .entry-right {
                    width: 28%;
                    text-align: right;
                    font-size: 17px;
                    white-space: nowrap;
                }

                .strong {
                    font-weight: 700;
                }

                .italic {
                    font-style: italic;
                }

                .bullet-list {
                    margin: 3px 0 0 18px;
                    padding: 0 0 0 10px;
                    font-size: 16px;
                    line-height: 1.02;
                }

                .bullet-list li {
                    margin: 0 0 1px;
                    padding: 0;
                }

                .skills-list {
                    margin: 0;
                    font-size: 16px;
                    line-height: 1.02;
                }

                .skill-row {
                    margin: 0 0 2px;
                }
            </style>
        </head>
        <body>
            <div class="page" data-template="${escapeHtml(template)}">
                <header class="header">
                    <h1 class="name">${name}</h1>
                    <div class="contact">${contactParts}</div>
                </header>
                ${body}
            </div>
        </body>
    </html>
    `;
};
