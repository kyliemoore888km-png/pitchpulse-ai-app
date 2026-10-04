import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { plan = 'starter' } = body;

    return NextResponse.json({
      ok: true,
      plan,
      message: 'Stripe checkout would be started here. Add your Stripe keys to enable live billing.',
    });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}
