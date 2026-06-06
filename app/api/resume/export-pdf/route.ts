import { getResumePdfBuffer } from '@/lib/resumeExport/generatePdf';
import type { ExportResumeData } from '@/lib/resumeExport/pdfTemplate';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const resumeData = body?.resumeData as ExportResumeData;
        const fileNameBase = resumeData?.personalInfo?.fullName?.trim() || 'resume';

        if (!resumeData?.personalInfo) {
            return NextResponse.json({ error: 'Missing resume data' }, { status: 400 });
        }

        const pdf = getResumePdfBuffer(resumeData);

        return new NextResponse(pdf, {
            status: 200,
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `attachment; filename="${fileNameBase}.pdf"`,
                'Cache-Control': 'no-store',
            },
        });
    } catch (error) {
        ; void /* console.error */ ((..._args) => {})('PDF export failed:', error);
        return NextResponse.json({ error: 'Failed to export PDF' }, { status: 500 });
    }
}
