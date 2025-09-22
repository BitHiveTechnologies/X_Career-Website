import { NextRequest, NextResponse } from 'next/server';

// Mock jobs data for testing
const mockJobs = [
  {
    id: "job_1",
    title: "Frontend Developer",
    company: "Tech Corp",
    description: "We are looking for a talented frontend developer...",
    type: "job",
    location: "remote",
    salary: "₹6-10 LPA",
    isActive: true,
    createdAt: "2024-01-01T00:00:00.000Z",
    eligibility: {
      qualifications: ["B.Tech", "M.Tech"],
      streams: ["CSE", "IT"],
      passoutYears: [2022, 2023, 2024],
      minCGPA: 7.0
    }
  },
  {
    id: "job_2", 
    title: "Backend Developer",
    company: "StartupXYZ",
    description: "Join our backend team...",
    type: "job",
    location: "hybrid",
    salary: "₹8-12 LPA",
    isActive: true,
    createdAt: "2024-01-02T00:00:00.000Z",
    eligibility: {
      qualifications: ["B.Tech"],
      streams: ["CSE", "IT", "ECE"],
      passoutYears: [2023, 2024],
      minCGPA: 7.5
    }
  },
  {
    id: "internship_1",
    title: "Frontend Intern",
    company: "BigTech",
    description: "Internship opportunity...",
    type: "internship",
    location: "remote",
    salary: "₹25,000/month",
    isActive: true,
    createdAt: "2024-01-03T00:00:00.000Z",
    eligibility: {
      qualifications: ["B.Tech"],
      streams: ["CSE", "IT"],
      passoutYears: [2024, 2025],
      minCGPA: 6.5
    }
  }
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const type = searchParams.get('type');
    const location = searchParams.get('location');
    const search = searchParams.get('search');

    let filteredJobs = mockJobs;

    // Filter by type
    if (type && type !== 'all') {
      filteredJobs = filteredJobs.filter(job => job.type === type);
    }

    // Filter by location
    if (location && location !== 'all') {
      filteredJobs = filteredJobs.filter(job => job.location === location);
    }

    // Filter by search term
    if (search) {
      const searchLower = search.toLowerCase();
      filteredJobs = filteredJobs.filter(job => 
        job.title.toLowerCase().includes(searchLower) ||
        job.company.toLowerCase().includes(searchLower) ||
        job.description.toLowerCase().includes(searchLower)
      );
    }

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedJobs = filteredJobs.slice(startIndex, endIndex);

    const response = {
      success: true,
      data: {
        data: paginatedJobs,
        pagination: {
          page,
          limit,
          total: filteredJobs.length,
          pages: Math.ceil(filteredJobs.length / limit)
        }
      },
      timestamp: new Date().toISOString()
    };

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: {
          message: 'Failed to fetch jobs',
          code: 'JOBS_FETCH_ERROR'
        },
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}
