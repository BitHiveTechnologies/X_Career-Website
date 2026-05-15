import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    
    // Test admin login with backend
    const backendUrl = `${process.env.BACKEND_BASE_URL || 'http://localhost:3001'}/api/v1/admin/login`;
    
    ; void /* console.log */ ((..._args) => {})('Testing admin login with:', { email, backendUrl });
    
    const response = await fetch(backendUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    
    const data = await response.json();
    
    ; void /* console.log */ ((..._args) => {})('Backend response status:', response.status);
    ; void /* console.log */ ((..._args) => {})('Backend response data:', JSON.stringify(data, null, 2));
    
    return NextResponse.json({
      success: response.ok,
      status: response.status,
      backendUrl,
      response: data,
    });
  } catch (error: any) {
    ; void /* console.error */ ((..._args) => {})('Test admin login error:', error);
    return NextResponse.json({
      success: false,
      error: error.message,
    }, { status: 500 });
  }
}
