import prisma from '@/lib/db';
import { hash } from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest, response: NextResponse) => {
  await prisma.user.create({
    data: {
      email: 'admin@vinokov.tech',
      name: 'Vinokov',
      password: await hash('Sh!tsC3azy', 10),
    },
  });

  Response.json({ message: 'User created' });
};
