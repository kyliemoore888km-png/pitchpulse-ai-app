import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, fullName } = body || {};

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    return NextResponse.json({
      ok: true,
      user: {
        email,
        fullName: fullName || 'Demo User',
      },
      message: 'Demo signup succeeded. Add Supabase to enable production auth.',
    });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}
