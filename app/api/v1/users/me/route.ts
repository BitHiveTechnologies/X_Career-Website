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
        createdAt: '2024-01-01T00:00:00Z',
    },
    {
        id: '3',
        email: 'superadmin@notifyx.com',
        name: 'Super Admin',
        role: 'super_admin',
        firstName: 'Super',
        lastName: 'Admin',
        mobile: '9876543212',
        qualification: 'PhD',
        stream: 'CSE',
        yearOfPassout: 2020,
        cgpaOrPercentage: 9.5,
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

        // Return user profile data
        const profileData = {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            mobile: user.mobile,
            qualification: user.qualification,
            stream: user.stream,
            yearOfPassout: user.yearOfPassout,
            cgpaOrPercentage: user.cgpaOrPercentage,
            role: user.role,
            createdAt: user.createdAt,
        };

        return NextResponse.json({
            success: true,
            data: profileData,
        });
    } catch (error) {
        console.error('Get user profile error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

export async function PUT(request: NextRequest) {
    try {
        const decoded = verifyToken(request);
        if (!decoded) {
            return NextResponse.json(
                { error: 'Invalid or missing token' },
                { status: 401 }
            );
        }

        const updateData = await request.json();
        
        // Find user by email from token
        const userIndex = users.findIndex(u => u.email === decoded.email);
        if (userIndex === -1) {
            return NextResponse.json(
                { error: 'User not found' },
                { status: 404 }
            );
        }

        // Update user data
        users[userIndex] = {
            ...users[userIndex],
            ...updateData,
            id: users[userIndex].id, // Keep original ID
            email: users[userIndex].email, // Keep original email
            role: users[userIndex].role, // Keep original role
        };

        return NextResponse.json({
            success: true,
            data: users[userIndex],
        });
    } catch (error) {
        console.error('Update user profile error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
