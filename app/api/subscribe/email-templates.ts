export const emailTemplates = {
    welcome: {
        subject: '🎉 Welcome to NotifyX - Your Career Success Journey Begins!',
        html: (data: any) => `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Welcome to NotifyX</title>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                    .content { background: #f9f9f9; padding: 30px; }
                    .footer { background: #333; color: white; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; }
                    .button { display: inline-block; background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; margin: 10px 0; }
                    .feature { background: white; padding: 15px; margin: 10px 0; border-radius: 5px; border-left: 4px solid #667eea; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>🎉 Welcome to NotifyX!</h1>
                        <p>Hi ${data.name}, your career success journey starts now!</p>
                    </div>
                    
                    <div class="content">
                        <h2>What you'll receive:</h2>
                        
                        <div class="feature">
                            <strong>💼 Job Alerts</strong><br>
                            Real-time notifications for opportunities matching your skills
                        </div>
                        
                        <div class="feature">
                            <strong>🎯 Interview Tips</strong><br>
                            Weekly strategies to ace your interviews
                        </div>
                        
                        <div class="feature">
                            <strong>📚 Learning Resources</strong><br>
                            Latest courses and skill development content
                        </div>
                        
                        <div class="feature">
                            <strong>🚀 Career Updates</strong><br>
                            Industry trends and salary insights
                        </div>
                        
                        <p><strong>Your first job alert is already on its way!</strong></p>
                        
                        <a href="https://xcareers.com/dashboard" class="button">View Dashboard</a>
                    </div>
                    
                    <div class="footer">
                        <p>© 2024 X Careers. All rights reserved.</p>
                        <p><a href="${data.unsubscribeLink}" style="color: #ccc;">Unsubscribe</a></p>
                    </div>
                </div>
            </body>
            </html>
        `
    },
    
    jobAlert: {
        subject: '🚀 Hot Job Alert: Software Engineer at Google (Apply Now!)',
        html: (data: any) => `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Hot Job Alert</title>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                    .content { background: #f9f9f9; padding: 30px; }
                    .job-card { background: white; padding: 20px; margin: 15px 0; border-radius: 8px; border: 2px solid #ff6b6b; }
                    .urgent { background: #fff3cd; border: 2px solid #ffc107; padding: 10px; border-radius: 5px; margin: 10px 0; }
                    .button { display: inline-block; background: #ff6b6b; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; margin: 10px 0; }
                    .similar-jobs { background: #f8f9fa; padding: 15px; margin: 15px 0; border-radius: 5px; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>🚀 Hot Job Alert!</h1>
                        <p>New opportunity matching your profile</p>
                    </div>
                    
                    <div class="content">
                        <div class="urgent">
                            <strong>⚡ High Priority - Apply within 24 hours!</strong>
                        </div>
                        
                        <div class="job-card">
                            <h2>${data.position}</h2>
                            <h3>${data.company}</h3>
                            <p><strong>📍 Location:</strong> ${data.location}</p>
                            <p><strong>💰 Salary:</strong> ${data.salary}</p>
                            <p><strong>⏰ Posted:</strong> 2 hours ago</p>
                            
                            <a href="${data.applyLink}" class="button">Apply Now</a>
                        </div>
                        
                        <div class="similar-jobs">
                            <h3>Similar Opportunities:</h3>
                            ${data.similarJobs.map((job: any) => `
                                <div style="padding: 10px; border-bottom: 1px solid #eee;">
                                    <strong>${job.position}</strong> at ${job.company}<br>
                                    <small>📍 ${job.location}</small>
                                </div>
                            `).join('')}
                        </div>
                        
                        <p><small>You're receiving this because you subscribed to job alerts. <a href="https://xcareers.com/preferences">Manage preferences</a></small></p>
                    </div>
                </div>
            </body>
            </html>
        `
    }
}; 