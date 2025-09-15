import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Mock user database - replace with your actual database
const users: Array<{
    id: string;
    email: string;
    password: string;
    name: string;
    role: string;
}> = [];

export async function POST(request: NextRequest) {
    try {
        const { email, password, name } = await request.json();

        // Validate input
        if (!email || !password || !name) {
            return NextResponse.json(
                { error: 'Email, password, and name are required' },
                { status: 400 },
            );
        }

        // Check if user already exists
        const existingUser = users.find((u) => u.email === email);
        if (existingUser) {
            return NextResponse.json(
                { error: 'User already exists with this email' },
                { status: 409 },
            );
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = {
            id: Date.now().toString(),
            email,
            password: hashedPassword,
            name,
            role: 'user',
        };

        // Add to mock database
        users.push(newUser);

        // Generate JWT token
        const token = jwt.sign(
            {
                userId: newUser.id,
                email: newUser.email,
                name: newUser.name,
                role: newUser.role,
            },
            process.env.JWT_SECRET || 'your-secret-key',
            { expiresIn: '7d' },
        );

        // Create response
        const response = NextResponse.json(
            {
                message: 'Registration successful',
                user: {
                    id: newUser.id,
                    email: newUser.email,
                    name: newUser.name,
                    role: newUser.role,
                },
            },
            { status: 201 },
        );

        // Set HTTP-only cookie
        response.cookies.set('auth-token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60, // 7 days
        });

        return response;
    } catch (error) {
        // Log error for debugging (server-side only)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

export async function GET() {
    return NextResponse.json({ message: 'Register endpoint - use POST method' }, { status: 405 });
}
