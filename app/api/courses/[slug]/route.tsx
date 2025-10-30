import { NextResponse } from 'next/server';
import { getDb } from '@/lib/mongodb';
import { NextRequest } from 'next/server';


// { params }: { params: { slug: string } }
export async function GET(request: NextRequest) {
    const url = new URL(request.url);
    const slug = url.pathname.split('/').pop();

    if (!slug) {
        return NextResponse.json({ error: 'Slug not provided' }, { status: 400 });
    }

    const db = await getDb("web3");
    const course = await db.collection("courses").findOne({ slug });

  if (!course) {
    return NextResponse.json({ error: 'Course not found' }, { status: 404 });
  }

  return NextResponse.json(course);
}