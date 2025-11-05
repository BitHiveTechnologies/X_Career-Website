import { NextRequest, NextResponse } from 'next/server';

// Proxy requests to the backend API
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Get all query parameters
    const params = new URLSearchParams();
    searchParams.forEach((value, key) => {
      params.append(key, value);
    });
    
    // Construct backend URL
    const backendUrl = `http://localhost:3001/api/v1/jobs/?${params.toString()}`;
    
    // Make request to backend
    const response = await fetch(backendUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`Backend responded with status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Return the backend response
    return NextResponse.json(data);
    
  } catch (error) {
    console.error('Proxy Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: {
          message: 'Failed to fetch jobs from backend',
          code: 'BACKEND_PROXY_ERROR'
        },
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}
