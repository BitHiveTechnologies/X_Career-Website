import { jsPDF } from 'jspdf';

import type { ExportResumeData } from '@/lib/resumeExport/pdfTemplate';

const PAGE_WIDTH = 612;
const PAGE_HEIGHT = 792;
const PAGE_TOP = 24.5;
const PAGE_BOTTOM = 20;
const PAGE_LEFT = 44.5;
const PAGE_RIGHT = 44.5;
const CONTENT_WIDTH = PAGE_WIDTH - PAGE_LEFT - PAGE_RIGHT;
const RIGHT_COLUMN_WIDTH = 142;
const LEFT_COLUMN_WIDTH = CONTENT_WIDTH - RIGHT_COLUMN_WIDTH;

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

const buildContactLine = (resumeData: ExportResumeData) =>
    [
        resumeData.personalInfo.phone?.trim(),
        resumeData.personalInfo.email?.trim(),
        resumeData.personalInfo.linkedin?.trim().replace(/^https?:\/\//, ''),
        resumeData.personalInfo.github?.trim().replace(/^https?:\/\//, ''),
        resumeData.personalInfo.portfolio?.trim().replace(/^https?:\/\//, ''),
    ]
        .filter(Boolean)
        .join(' | ');

const sanitizeFileName = (value: string) =>
    value
        .replace(/[\\/:*?"<>|]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim() || 'resume';

const getWrappedHeight = (pdf: jsPDF, text: string, maxWidth: number, lineHeight: number) => {
    const lines = pdf.splitTextToSize(text, maxWidth) as string[];
    return {
        lines,
        height: Math.max(lines.length, 1) * lineHeight,
    };
};

const buildBasicPdf = (resumeData: ExportResumeData) => {
    const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'pt',
        format: 'letter',
        compress: true,
    });

    let currentY = PAGE_TOP;

    const addPage = () => {
        pdf.addPage('letter', 'portrait');
        currentY = PAGE_TOP;
    };

    const ensureSpace = (requiredHeight: number) => {
        if (currentY + requiredHeight <= PAGE_HEIGHT - PAGE_BOTTOM) {
            return;
        }
        addPage();
    };

    const drawCenteredLine = (text: string, fontSize: number, fontStyle: 'normal' | 'bold') => {
        pdf.setFont('times', fontStyle);
        pdf.setFontSize(fontSize);
        const textWidth = pdf.getTextWidth(text);
        const x = (PAGE_WIDTH - textWidth) / 2;
        pdf.text(text, x, currentY);
    };

    const drawSectionTitle = (title: string) => {
        const topSpacing = 10;
        const titleHeight = 14;
        const ruleGap = 3;
        const bottomSpacing = 8;

        ensureSpace(topSpacing + titleHeight + ruleGap + bottomSpacing + 14);
        currentY += topSpacing;

        pdf.setFont('times', 'bold');
        pdf.setFontSize(14);
        pdf.text(title.toUpperCase(), PAGE_LEFT, currentY);

        currentY += ruleGap;
        pdf.setLineWidth(0.8);
        pdf.line(PAGE_LEFT, currentY, PAGE_WIDTH - PAGE_RIGHT, currentY);
        currentY += bottomSpacing;
    };

    const drawBulletLines = (items: string[], fontSize = 10.5, lineHeight = 11.5) => {
        const usableItems = items.filter((item) => item.trim());
        if (usableItems.length === 0) return;

        pdf.setFont('times', 'normal');
        pdf.setFontSize(fontSize);

        const bulletX = PAGE_LEFT + 3;
        const textX = PAGE_LEFT + 14;
        const maxWidth = CONTENT_WIDTH - 14;

        usableItems.forEach((item) => {
            const { lines, height } = getWrappedHeight(pdf, item, maxWidth, lineHeight);
            ensureSpace(height + 2);
            pdf.text('\u2022', bulletX, currentY);
            pdf.text(lines, textX, currentY);
            currentY += height + 1.5;
        });
    };

    const estimateBulletHeight = (items: string[], fontSize = 10.5, lineHeight = 11.5) => {
        pdf.setFont('times', 'normal');
        pdf.setFontSize(fontSize);

        return items
            .filter((item) => item.trim())
            .reduce((total, item) => total + getWrappedHeight(pdf, item, CONTENT_WIDTH - 14, lineHeight).height + 1.5, 0);
    };

    const drawTwoColumnRow = (
        leftText: string,
        rightText: string,
        leftStyle: 'normal' | 'bold' | 'italic',
        rightStyle: 'normal' | 'bold' | 'italic',
        fontSize = 11,
        lineHeight = 11.5,
    ) => {
        pdf.setFontSize(fontSize);

        pdf.setFont('times', leftStyle);
        const leftLines = pdf.splitTextToSize(leftText, LEFT_COLUMN_WIDTH) as string[];

        pdf.setFont('times', rightStyle);
        const rightLines = pdf.splitTextToSize(rightText, RIGHT_COLUMN_WIDTH) as string[];

        const rowLines = Math.max(leftLines.length || 1, rightLines.length || 1);
        const rowHeight = rowLines * lineHeight;

        ensureSpace(rowHeight + 2);

        pdf.setFont('times', leftStyle);
        pdf.text(leftLines, PAGE_LEFT, currentY);

        pdf.setFont('times', rightStyle);
        const rightX = PAGE_WIDTH - PAGE_RIGHT;
        rightLines.forEach((line, index) => {
            const width = pdf.getTextWidth(line);
            pdf.text(line, rightX - width, currentY + index * lineHeight);
        });

        currentY += rowHeight;
    };

    const drawEducationSection = () => {
        const items = resumeData.education.filter((edu) => edu.institution || edu.degree || edu.field);
        if (items.length === 0) return;

        drawSectionTitle('Education');

        items.forEach((edu, index) => {
            drawTwoColumnRow(edu.institution || '', edu.location || '', 'bold', 'normal');
            drawTwoColumnRow(
                [edu.degree, edu.field].filter(Boolean).join(' in '),
                formatDateRange(edu.startDate, edu.endDate),
                'italic',
                'italic',
            );

            if (index < items.length - 1) {
                currentY += 5;
            }
        });
    };

    const drawExperienceSection = () => {
        const items = resumeData.experience.filter((exp) => exp.company || exp.position);
        if (items.length === 0) return;

        drawSectionTitle('Experience');

        items.forEach((exp, index) => {
            const descriptionHeight = estimateBulletHeight(exp.description);
            const minimumHeight = 23 + descriptionHeight + 4;
            ensureSpace(minimumHeight);

            drawTwoColumnRow(
                exp.position || '',
                formatDateRange(exp.startDate, exp.endDate, exp.current),
                'bold',
                'normal',
            );
            drawTwoColumnRow(exp.company || '', exp.location || '', 'italic', 'italic');
            if (exp.description.filter((item) => item.trim()).length > 0) {
                currentY += 2.5;
                drawBulletLines(exp.description);
            }

            if (index < items.length - 1) {
                currentY += 5;
            }
        });
    };

    const drawProjectsSection = () => {
        const items = resumeData.projects.filter((project) => project.name);
        if (items.length === 0) return;

        drawSectionTitle('Projects');

        items.forEach((project, index) => {
            const projectTitle = project.technologies.length > 0
                ? `${project.name} | ${project.technologies.join(', ')}`
                : project.name;
            const highlightsHeight = estimateBulletHeight(project.highlights);
            ensureSpace(12 + highlightsHeight + 4);

            drawTwoColumnRow(
                projectTitle,
                formatDateRange(project.startDate, project.endDate, project.current),
                'bold',
                'normal',
            );
            if (project.highlights.filter((item) => item.trim()).length > 0) {
                currentY += 2.5;
                drawBulletLines(project.highlights);
            }

            if (index < items.length - 1) {
                currentY += 5;
            }
        });
    };

    const drawSkillsSection = () => {
        const items = resumeData.skills.filter((skill) => skill.category || skill.items.length > 0);
        if (items.length === 0) return;

        drawSectionTitle('Technical Skills');

        pdf.setFontSize(10.5);
        items.forEach((skill, index) => {
            const label = skill.category ? `${skill.category}: ` : '';
            const text = `${label}${skill.items.join(', ')}`;
            pdf.setFont('times', 'normal');
            const wrapped = pdf.splitTextToSize(text, CONTENT_WIDTH) as string[];
            const rowHeight = wrapped.length * 11.5;

            ensureSpace(rowHeight + 2);

            if (skill.category) {
                const firstLine = wrapped[0] || '';
                const categoryText = `${skill.category}:`;
                const restText = firstLine.startsWith(categoryText) ? firstLine.slice(categoryText.length).trimStart() : firstLine;
                pdf.setFont('times', 'bold');
                pdf.text(categoryText, PAGE_LEFT, currentY);
                pdf.setFont('times', 'normal');
                pdf.text(restText, PAGE_LEFT + pdf.getTextWidth(`${categoryText} `), currentY);
                if (wrapped.length > 1) {
                    pdf.text(wrapped.slice(1), PAGE_LEFT, currentY + 11.5);
                }
            } else {
                pdf.setFont('times', 'normal');
                pdf.text(wrapped, PAGE_LEFT, currentY);
            }

            currentY += rowHeight + (index < items.length - 1 ? 1.5 : 0);
        });
    };

    const fullName = (resumeData.personalInfo.fullName || 'Your Name').toUpperCase();
    const contactLine = buildContactLine(resumeData);

    pdf.setTextColor(0, 0, 0);
    drawCenteredLine(fullName, 24, 'bold');
    currentY += 13;
    if (contactLine) {
        drawCenteredLine(contactLine, 10.5, 'normal');
        currentY += 12;
    }
    currentY += 3;

    drawEducationSection();
    drawExperienceSection();
    drawProjectsSection();
    drawSkillsSection();

    return pdf;
};

export const generateResumePdf = async (resumeData: ExportResumeData, template: string) => {
    const pdf = buildBasicPdf(resumeData);
    const fileName = sanitizeFileName(resumeData.personalInfo.fullName || 'resume');

    if (template !== 'vinod') {
        pdf.save(`${fileName}.pdf`);
        return;
    }

    pdf.save(`${fileName}.pdf`);
};

export const getResumePdfBuffer = (resumeData: ExportResumeData) => {
    const pdf = buildBasicPdf(resumeData);
    return pdf.output('arraybuffer');
};
