import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { galleryPhotos } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;

    // Validate ID format
    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        { error: 'Valid ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    // Fetch photo by ID
    const photo = await db
      .select()
      .from(galleryPhotos)
      .where(eq(galleryPhotos.id, parseInt(id)))
      .limit(1);

    if (photo.length === 0) {
      return NextResponse.json(
        { error: 'Gallery photo not found', code: 'PHOTO_NOT_FOUND' },
        { status: 404 }
      );
    }

    return NextResponse.json(photo[0], { status: 200 });
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + error },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;

    // Validate ID format
    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        { error: 'Valid ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    // Parse request body
    const body = await request.json();

    // Check if photo exists
    const existingPhoto = await db
      .select()
      .from(galleryPhotos)
      .where(eq(galleryPhotos.id, parseInt(id)))
      .limit(1);

    if (existingPhoto.length === 0) {
      return NextResponse.json(
        { error: 'Gallery photo not found', code: 'PHOTO_NOT_FOUND' },
        { status: 404 }
      );
    }

    // Prepare update object with allowed fields
    const updateData: {
      title?: string;
      description?: string;
      imageUrl?: string;
      category?: string;
      displayOrder?: number;
      isVisible?: boolean;
      updatedAt: string;
    } = {
      updatedAt: new Date().toISOString(),
    };

    // Add fields from request body if present
    if (body.title !== undefined) {
      updateData.title = body.title.trim();
    }
    if (body.description !== undefined) {
      updateData.description = body.description ? body.description.trim() : body.description;
    }
    if (body.imageUrl !== undefined) {
      updateData.imageUrl = body.imageUrl.trim();
    }
    if (body.category !== undefined) {
      updateData.category = body.category ? body.category.trim() : body.category;
    }
    if (body.displayOrder !== undefined) {
      updateData.displayOrder = parseInt(body.displayOrder);
    }
    if (body.isVisible !== undefined) {
      updateData.isVisible = Boolean(body.isVisible);
    }

    // Update photo
    const updatedPhoto = await db
      .update(galleryPhotos)
      .set(updateData)
      .where(eq(galleryPhotos.id, parseInt(id)))
      .returning();

    if (updatedPhoto.length === 0) {
      return NextResponse.json(
        { error: 'Failed to update gallery photo', code: 'UPDATE_FAILED' },
        { status: 500 }
      );
    }

    return NextResponse.json(updatedPhoto[0], { status: 200 });
  } catch (error) {
    console.error('PATCH error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + error },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;

    // Validate ID format
    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        { error: 'Valid ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    // Check if photo exists
    const existingPhoto = await db
      .select()
      .from(galleryPhotos)
      .where(eq(galleryPhotos.id, parseInt(id)))
      .limit(1);

    if (existingPhoto.length === 0) {
      return NextResponse.json(
        { error: 'Gallery photo not found', code: 'PHOTO_NOT_FOUND' },
        { status: 404 }
      );
    }

    // Delete photo
    const deletedPhoto = await db
      .delete(galleryPhotos)
      .where(eq(galleryPhotos.id, parseInt(id)))
      .returning();

    if (deletedPhoto.length === 0) {
      return NextResponse.json(
        { error: 'Failed to delete gallery photo', code: 'DELETE_FAILED' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: 'Gallery photo deleted successfully',
        photo: deletedPhoto[0],
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + error },
      { status: 500 }
    );
  }
}