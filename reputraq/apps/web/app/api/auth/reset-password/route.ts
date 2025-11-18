import { NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import { db } from '@/lib/db';
import { users } from '@/lib/db/schema';

export async function POST(request: Request) {
  console.log('Reset password endpoint hit');
  try {
    const body = await request.json();
    console.log('Reset password request body received', body);
    const { email, newPassword } = body ?? {};

    if (!email) {
      console.log('Reset password missing email');
      return NextResponse.json(
        { message: 'Email is required' },
        { status: 400 }
      );
    }

    if (!newPassword) {
      console.log('Reset password missing new password');
      return NextResponse.json(
        { message: 'New password is required' },
        { status: 400 }
      );
    }

    if (typeof newPassword !== 'string' || newPassword.length < 6) {
      console.log('Reset password new password too short');
      return NextResponse.json(
        { message: 'New password must be at least 6 characters long' },
        { status: 400 }
      );
    }

    const database = await db;

    const existingUser = await database
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    if (existingUser.length === 0) {
      console.log('Reset password user not found', email);
      return NextResponse.json(
        { message: 'No account found with that email' },
        { status: 404 }
      );
    }

    await database
      .update(users)
      .set({
        password: newPassword,
        updatedAt: new Date(),
      })
      .where(eq(users.email, email));

    console.log('Reset password successful for', email);

    return NextResponse.json({
      message: 'Password updated successfully. You can now sign in with your new password.',
    });
  } catch (error) {
    console.error('Reset password error', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

