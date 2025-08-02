# X Career Platform

A modern career platform for job seekers and employers, built with Next.js, TypeScript, and Tailwind CSS.

## Features

### Dashboard
- **Quick Create**: Admin functionality to create jobs and internships with a comprehensive form
- **Analytics**: View platform statistics and performance metrics
- **Modern UI**: Clean, responsive design with gradient themes

### Job Management
- **Job Postings**: Create and manage job listings with detailed information
- **Internship Postings**: Create and manage internship opportunities
- **Advanced Filtering**: Filter jobs by location, skills, experience, and more
- **Search Functionality**: Search jobs by title, company, or skills

### User Features
- **Job Applications**: Apply to jobs with a streamlined process
- **Resume Builder**: Create professional resumes
- **Profile Management**: Manage user profiles and preferences
- **Community**: Connect with other professionals

## Quick Create Feature

The Quick Create modal allows administrators to easily create new job or internship postings with the following fields:

### Job Posting Fields:
- **Basic Information**: Title, Company, Location, Experience Required
- **Job Type & Employment**: Job Type, Employment Type, Salary Range, Remote Option
- **Required Skills**: Add/remove skills with tags
- **Benefits**: Add/remove benefits with tags
- **Job Description**: Detailed role description

### Internship Posting Fields:
- **Basic Information**: Title, Company, Location, Duration
- **Internship Details**: Stipend, Start Date, Application Deadline, Remote/Part-time options
- **Required Skills**: Add/remove skills with tags
- **Benefits**: Add/remove benefits with tags
- **Internship Description**: Detailed internship description

## Technology Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Icons**: Lucide React
- **State Management**: React hooks
- **Development**: ESLint, Prettier

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── dashboard/         # Dashboard page with Quick Create
│   ├── jobs/             # Job listings and details
│   ├── internships/      # Internship listings and details
│   └── ...
├── components/           # React components
│   ├── ui/              # shadcn/ui components
│   ├── QuickCreateModal.tsx  # Quick Create modal
│   └── ...
├── lib/                 # Utility functions and data
└── types/               # TypeScript type definitions
```

## Quick Create Usage

1. Navigate to the Dashboard
2. Click the "Quick Create" button
3. Choose between "Job Posting" or "Internship" tabs
4. Fill in the required fields
5. Add skills and benefits as needed
6. Click "Create Job" or "Create Internship"

The form data is currently logged to the console and can be easily integrated with a backend API.

## Future Enhancements

- Backend integration for data persistence
- User authentication and authorization
- Advanced analytics and reporting
- Email notifications
- Mobile app development
- AI-powered job matching
