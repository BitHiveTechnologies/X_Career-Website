import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export const dynamic = 'force-dynamic';

// Mock user database - replace with your actual database
const users = [
    {
        id: '1',
        email: 'demo@example.com',
        name: 'Demo User',
        role: 'user',
        firstName: 'Demo',
        lastName: 'User',
        mobile: '9876543210',
        qualification: 'B.Tech',
        stream: 'CSE',
        yearOfPassout: 2023,
        cgpaOrPercentage: 8.5,
        dateOfBirth: '2000-01-01',
        address: '123 Main St',
        city: 'Mumbai',
        state: 'Maharashtra',
        pincode: '400001',
        resumeUrl: 'https://example.com/resume.pdf',
        linkedinUrl: 'https://linkedin.com/in/demouser',
        githubUrl: 'https://github.com/demouser',
        skills: ['JavaScript', 'React', 'Node.js'],
        createdAt: '2024-01-01T00:00:00Z',
    },
    {
        id: '2',
        email: 'admin@notifyx.com',
        name: 'Admin User',
        role: 'admin',
        firstName: 'Admin',
        lastName: 'User',
        mobile: '9876543211',
        qualification: 'M.Tech',
        stream: 'CSE',
        yearOfPassout: 2022,
        cgpaOrPercentage: 9.0,
        dateOfBirth: '1995-01-01',
        address: '456 Admin St',
        city: 'Delhi',
        state: 'Delhi',
        pincode: '110001',
        resumeUrl: 'https://example.com/admin-resume.pdf',
        linkedinUrl: 'https://linkedin.com/in/adminuser',
        githubUrl: 'https://github.com/adminuser',
        skills: ['Python', 'Django', 'PostgreSQL'],
        createdAt: '2024-01-01T00:00:00Z',
    },
];

// Helper function to verify JWT token
function verifyToken(request: NextRequest) {
    try {
        const authHeader = request.headers.get('authorization');
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return null;
        }

        const token = authHeader.substring(7);
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key') as any;
        return decoded;
    } catch (error) {
        console.error('Token verification error:', error);
        return null;
    }
}

// Calculate profile completion percentage
function calculateProfileCompletion(user: any) {
    const requiredFields = [
        'firstName', 'lastName', 'email', 'mobile', 'qualification', 
        'stream', 'yearOfPassout', 'cgpaOrPercentage', 'dateOfBirth',
        'address', 'city', 'state', 'pincode'
    ];
    
    const optionalFields = [
        'resumeUrl', 'linkedinUrl', 'githubUrl', 'skills'
    ];
    
    let completedFields = 0;
    let totalFields = requiredFields.length;
    const missingFields: string[] = [];
    
    // Check required fields
    requiredFields.forEach(field => {
        if (user[field] && user[field] !== '') {
            completedFields++;
        } else {
            missingFields.push(field);
        }
    });
    
    // Check optional fields (count as bonus)
    optionalFields.forEach(field => {
        if (user[field] && user[field] !== '') {
            completedFields++;
            totalFields++;
        }
    });
    
    const completionPercentage = Math.round((completedFields / totalFields) * 100);
    
    return {
        completionPercentage: Math.min(completionPercentage, 100),
        completedFields,
        totalFields,
        missingFields,
        isComplete: missingFields.length === 0
    };
}

export async function GET(request: NextRequest) {
    try {
        const decoded = verifyToken(request);
        if (!decoded) {
            return NextResponse.json(
                { error: 'Invalid or missing token' },
                { status: 401 }
            );
        }

        // Find user by email from token
        const user = users.find(u => u.email === decoded.email);
        if (!user) {
            return NextResponse.json(
                { error: 'User not found' },
                { status: 404 }
            );
        }

        // Calculate profile completion
        const completionData = calculateProfileCompletion(user);

        return NextResponse.json({
            success: true,
            data: completionData,
        });
    } catch (error) {
        console.error('Get profile completion error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
