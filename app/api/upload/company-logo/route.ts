import { existsSync } from 'fs';
import { mkdir, writeFile } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import { join } from 'path';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// Maximum file size: 2MB
const MAX_FILE_SIZE = 2 * 1024 * 1024;
const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('logo') as File | null;

    if (!file) {
      return NextResponse.json(
        {
          success: false,
          error: {
            message: 'No file provided',
            code: 'NO_FILE'
          }
        },
        { status: 400 }
      );
    }

    // Validate file type
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        {
          success: false,
          error: {
            message: 'Invalid file type. Only PNG, JPEG, JPG, and WebP are allowed.',
            code: 'INVALID_FILE_TYPE'
          }
        },
        { status: 400 }
      );
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        {
          success: false,
          error: {
            message: 'File size exceeds 2MB limit',
            code: 'FILE_TOO_LARGE'
          }
        },
        { status: 400 }
      );
    }

    // Generate unique filename
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 15);
    const fileExtension = file.name.split('.').pop() || 'png';
    const filename = `company-logo-${timestamp}-${randomString}.${fileExtension}`;

    // Create uploads directory if it doesn't exist
    const uploadsDir = join(process.cwd(), 'public', 'uploads', 'company-logos');
    if (!existsSync(uploadsDir)) {
      await mkdir(uploadsDir, { recursive: true });
    }

  // Convert file to a typed array and save
  const bytes = await file.arrayBuffer();
  const array = new Uint8Array(bytes);
  const filepath = join(uploadsDir, filename);

  await writeFile(filepath, array);

    // Return the public URL
    const publicUrl = `/uploads/company-logos/${filename}`;

    return NextResponse.json({
      success: true,
      data: {
        url: publicUrl,
        filename: filename,
        size: file.size,
        type: file.type
      },
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error uploading company logo:', error);
    return NextResponse.json(
      {
        success: false,
        error: {
          message: 'Failed to upload logo',
          code: 'UPLOAD_ERROR'
        },
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}

