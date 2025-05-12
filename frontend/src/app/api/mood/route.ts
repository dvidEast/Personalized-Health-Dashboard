import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const data = await request.json();
    console.log('Received mood:', data);
    return NextResponse.json({ message: 'Mood logged successfully' });
}
