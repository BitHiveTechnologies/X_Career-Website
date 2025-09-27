import { apiClient } from '@/lib/api/client';
import { adminService } from '@/lib/api/services';
import { NextRequest, NextResponse } from 'next/server';

// Admin JWT token for backend authentication
const ADMIN_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OGQ0Yzg4MjkzYTliMTQ4OWZjZTE0MDciLCJlbWFpbCI6ImFkbWluQG5vdGlmeXguY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzU4OTYxMjkzLCJleHAiOjE3NTk1NjYwOTMsImF1ZCI6Im5vdGlmeXgtdXNlcnMiLCJpc3MiOiJub3RpZnl4LWJhY2tlbmQifQ.GLH4DwLqBYKnBcHyTHLkiQO32J945kna4dUVbN5YkcQ';

export async function GET(request: NextRequest) {
  try {
    console.log('🧪 Testing admin customer data integration...');
    
    // Set the admin token
    apiClient.setToken(ADMIN_TOKEN);
    
    // Test 1: Get users data
    console.log('🔍 Testing GET /api/v1/admin/users...');
    const usersResponse = await adminService.getUsers({
      page: 1,
      limit: 5
    });
    
    // Test 2: Get user analytics
    console.log('🔍 Testing GET /api/v1/admin/analytics/users...');
    const analyticsResponse = await adminService.getUserAnalytics();
    
    return NextResponse.json({
      success: true,
      message: 'Admin customer data integration test successful',
      tests: {
        usersEndpoint: {
          success: usersResponse.success,
          data: usersResponse.data,
          error: usersResponse.error
        },
        analyticsEndpoint: {
          success: analyticsResponse.success,
          data: analyticsResponse.data,
          error: analyticsResponse.error
        }
      },
      timestamp: new Date().toISOString()
    });
  } catch (error: any) {
    console.error('❌ Admin customer data integration test failed:', error);
    
    return NextResponse.json({
      success: false,
      message: 'Admin customer data integration test failed',
      error: error.message || 'Unknown error',
      details: error.details || null,
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}
