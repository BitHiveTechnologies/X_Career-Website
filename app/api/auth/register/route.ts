import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Mock user database - replace with your actual database
const users: Array<{
    id: string;
    email: string;
    password: string;
    name: string;
    mobile: string;
    qualification: string;
    stream: string;
    yearOfPassout: number;
    cgpaOrPercentage: number;
    role: string;
    createdAt: string;
}> = [];

// Password validation function
function validatePassword(password: string): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];
    
    if (password.length < 8) {
        errors.push('Password must be at least 8 characters long');
    }
    
    if (!/[A-Z]/.test(password)) {
        errors.push('Password must contain at least one uppercase letter');
    }
    
    if (!/[a-z]/.test(password)) {
        errors.push('Password must contain at least one lowercase letter');
    }
    
    if (!/\d/.test(password)) {
        errors.push('Password must contain at least one number');
    }
    
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        errors.push('Password must contain at least one special character');
    }
    
    return {
        isValid: errors.length === 0,
        errors
    };
}

// Email validation function
function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Mobile validation function
function validateMobile(mobile: string): boolean {
    const mobileRegex = /^[6-9]\d{9}$/;
    return mobileRegex.test(mobile);
}

export async function POST(request: NextRequest) {
    try {
        const { 
            email, 
            password, 
            name, 
            mobile, 
            qualification, 
            stream, 
            yearOfPassout, 
            cgpaOrPercentage 
        } = await request.json();

        // Validate required fields
        if (!email || !password || !name || !mobile || !qualification || !stream || !yearOfPassout || !cgpaOrPercentage) {
            return NextResponse.json(
                { 
                    error: 'All fields are required',
                    details: 'Please fill in all required fields: name, email, password, mobile, qualification, stream, year of passout, and CGPA/Percentage'
                },
                { status: 400 },
            );
        }

        // Validate email format
        if (!validateEmail(email)) {
            return NextResponse.json(
                { error: 'Please enter a valid email address' },
                { status: 400 },
            );
        }

        // Validate mobile number
        if (!validateMobile(mobile)) {
            return NextResponse.json(
                { error: 'Please enter a valid 10-digit mobile number starting with 6-9' },
                { status: 400 },
            );
        }

        // Validate password strength
        const passwordValidation = validatePassword(password);
        if (!passwordValidation.isValid) {
            return NextResponse.json(
                { 
                    error: 'Password does not meet requirements',
                    details: passwordValidation.errors
                },
                { status: 400 },
            );
        }

        // Validate year of passout
        const currentYear = new Date().getFullYear();
        if (yearOfPassout < 1990 || yearOfPassout > currentYear + 5) {
            return NextResponse.json(
                { error: 'Please enter a valid year of passout' },
                { status: 400 },
            );
        }

        // Validate CGPA/Percentage
        if (cgpaOrPercentage < 0 || cgpaOrPercentage > 100) {
            return NextResponse.json(
                { error: 'CGPA/Percentage must be between 0 and 100' },
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
            mobile,
            qualification,
            stream,
            yearOfPassout,
            cgpaOrPercentage,
            role: 'user',
            createdAt: new Date().toISOString(),
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
                success: true,
                message: 'Registration successful',
                data: {
                    user: {
                        id: newUser.id,
                        email: newUser.email,
                        name: newUser.name,
                        mobile: newUser.mobile,
                        qualification: newUser.qualification,
                        stream: newUser.stream,
                        yearOfPassout: newUser.yearOfPassout,
                        cgpaOrPercentage: newUser.cgpaOrPercentage,
                        role: newUser.role,
                        createdAt: newUser.createdAt,
                    },
                    token,
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
        console.error('Registration error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 },
        );
    }
}