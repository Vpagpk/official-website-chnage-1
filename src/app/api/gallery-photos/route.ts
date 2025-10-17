import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { galleryPhotos } from '@/db/schema';
import { eq, and, desc, asc } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    const limit = Math.min(parseInt(searchParams.get('limit') || '100'), 100);
    const offset = parseInt(searchParams.get('offset') || '0');
    const isVisible = searchParams.get('isVisible');
    const category = searchParams.get('category');

    let query = db.select().from(galleryPhotos);

    const conditions = [];

    if (isVisible !== null) {
      const visibleValue = isVisible === 'true';
      conditions.push(eq(galleryPhotos.isVisible, visibleValue));
    }

    if (category) {
      conditions.push(eq(galleryPhotos.category, category));
    }

    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }

    const results = await query
      .orderBy(asc(galleryPhotos.displayOrder), desc(galleryPhotos.createdAt))
      .limit(limit)
      .offset(offset);

    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + error },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, imageUrl, description, category, displayOrder, isVisible } = body;

    if (!title || title.trim() === '') {
      return NextResponse.json(
        { error: 'Title is required and cannot be empty', code: 'MISSING_TITLE' },
        { status: 400 }
      );
    }

    if (!imageUrl || imageUrl.trim() === '') {
      return NextResponse.json(
        { error: 'Image URL is required and cannot be empty', code: 'MISSING_IMAGE_URL' },
        { status: 400 }
      );
    }

    const now = new Date().toISOString();

    const newPhoto = await db.insert(galleryPhotos)
      .values({
        title: title.trim(),
        imageUrl: imageUrl.trim(),
        description: description ? description.trim() : null,
        category: category ? category.trim() : null,
        displayOrder: displayOrder !== undefined ? parseInt(displayOrder) : 0,
        isVisible: isVisible !== undefined ? Boolean(isVisible) : true,
        createdAt: now,
        updatedAt: now,
      })
      .returning();

    return NextResponse.json(newPhoto[0], { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + error },
      { status: 500 }
    );
  }
}