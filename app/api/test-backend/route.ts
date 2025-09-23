import { NextRequest, NextResponse } from 'next/server';
import { healthService } from '@/lib/api/services';

export async function GET(request: NextRequest) {
  try {
    // Test the backend connection
    const healthResponse = await healthService.checkHealth();
    
    return NextResponse.json({
      success: true,
      message: 'Backend connection test successful',
      backend: healthResponse,
      timestamp: new Date().toISOString()
    });
  } catch (error: any) {
    console.error('Backend connection test failed:', error);
    
    return NextResponse.json({
      success: false,
      message: 'Backend connection test failed',
      error: error.message || 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}
