import bcrypt from 'bcrypt';
import prisma from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

const seed = async () => {
  const password = await bcrypt.hash('123456', 10);
  const user = await prisma.user.create({
    data: {
      name: 'Maskim',
      email: 'deo.vinokov@gmail.com',
      password,
    },
  });

  return user;
};

export const GET = async (request: NextRequest, response: NextResponse) => {
  await seed();
  return Response.json('Hello world');
};
