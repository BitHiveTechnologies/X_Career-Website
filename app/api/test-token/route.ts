import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    console.log('Authorization header:', authHeader);
    
    // Test the token with the backend
    const backendUrl = `${process.env.BACKEND_BASE_URL || 'http://localhost:3001'}/api/v1/jobs/`;
    
    const response = await fetch(backendUrl, {
      method: 'GET',
      headers: {
        'Authorization': authHeader || '',
      },
    });
    
    const data = await response.json();
    
    return NextResponse.json({
      success: true,
      authHeader,
      backendResponse: data,
      backendStatus: response.status
    });
  } catch (error: any) {
    console.error('Token test error:', error);
    return NextResponse.json({
      success: false,
      error: error.message,
    }, { status: 500 });
  }
}
