import { NextRequest, NextResponse } from 'next/server';
import { emailTemplates } from './email-templates';

export async function POST(request: NextRequest) {
    try {
        const { email, preferences } = await request.json();

        // Validate email
        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        // In a real implementation, you would:
        // 1. Save to database
        // 2. Send to email service (SendGrid, Mailchimp, etc.)
        // 3. Add to CRM
        // 4. Send welcome email
        // 5. Send immediate job alert



        // Simulate processing time
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Prepare email data
        const emailData = {
            name: email.split('@')[0],
            preferences,
            unsubscribeLink: `https://xcareers.com/unsubscribe?email=${encodeURIComponent(email)}`
        };

        // Generate welcome email
        const welcomeEmail = {
            to: email,
            subject: emailTemplates.welcome.subject,
            html: emailTemplates.welcome.html(emailData)
        };

        // Generate job alert email
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

        const jobAlertEmail = {
            to: email,
            subject: emailTemplates.jobAlert.subject,
            html: emailTemplates.jobAlert.html(jobAlertData)
        };

        // Log email data (in production, this would be sent via email service)

        // Return success response
        return NextResponse.json({
            success: true,
            message: 'Successfully subscribed to NotifyX',
            data: {
                email,
                preferences,
                subscriptionId: `sub_${Date.now()}`,
                welcomeEmailSent: true,
                jobAlertSent: true,
                emails: {
                    welcome: welcomeEmail,
                    jobAlert: jobAlertEmail
                }
            }
        });

    } catch (error) {
        // Log error for debugging (server-side only)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
} 