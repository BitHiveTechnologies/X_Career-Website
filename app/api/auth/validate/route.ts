import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(request: NextRequest) {
    try {
        // Get token from cookie
        const token = request.cookies.get('auth-token')?.value;

        if (!token) {
            return NextResponse.json({ error: 'No token provided' }, { status: 401 });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key') as any;

        return NextResponse.json(
            {
                valid: true,
                user: {
                    id: decoded.userId,
                    email: decoded.email,
                    name: decoded.name,
                    role: decoded.role,
                },
            },
            { status: 200 },
        );
    } catch (error) {
        console.error('Token validation error:', error);
        return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }
}

export async function POST() {
    return NextResponse.json({ message: 'Validate endpoint - use GET method' }, { status: 405 });
}
