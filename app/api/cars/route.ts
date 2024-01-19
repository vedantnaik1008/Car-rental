import { cars } from '@/data/API';

import { NextResponse } from 'next/server';

export async function GET() {
    try {
        return NextResponse.json(cars);
    } catch (error: any) {
        console.log('[FETCH_ERROR]', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}