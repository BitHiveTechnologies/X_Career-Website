import { NextRequest, NextResponse } from 'next/server';
import { emailTemplates } from '../email-templates';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const template = searchParams.get('template') || 'welcome';
        const email = searchParams.get('email') || 'demo@example.com';

        if (!emailTemplates[template as keyof typeof emailTemplates]) {
            return NextResponse.json(
                { error: 'Template not found' },
                { status: 404 }
            );
        }

        const emailData = {
            name: email.split('@')[0],
            preferences: {
                jobAlerts: true,
                interviewTips: true,
                learningResources: true,
                careerUpdates: true,
            },
            unsubscribeLink: `https://xcareers.com/unsubscribe?email=${encodeURIComponent(email)}`
        };

        const jobAlertData = {
            company: 'Google',
            position: 'Software Engineer',
            location: 'Mountain View, CA',
            salary: '$150K - $200K',
            urgency: 'High Priority',
            applyLink: 'https://careers.google.com/jobs/12345',
            similarJobs: [
                { company: 'Microsoft', position: 'Senior Developer', location: 'Seattle, WA' },
                { company: 'Amazon', position: 'Full Stack Engineer', location: 'Seattle, WA' }
            ]
        };

        let html;
        let subject;

        if (template === 'welcome') {
            subject = emailTemplates.welcome.subject;
            html = emailTemplates.welcome.html(emailData);
        } else if (template === 'jobAlert') {
            subject = emailTemplates.jobAlert.subject;
            html = emailTemplates.jobAlert.html(jobAlertData);
        } else {
            return NextResponse.json(
                { error: 'Invalid template' },
                { status: 400 }
            );
        }

        return new NextResponse(html, {
            headers: {
                'Content-Type': 'text/html',
            },
        });

    } catch (error) {
        console.error('Demo error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
} 