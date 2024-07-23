import prisma from '@/lib/db';
import { hash } from 'bcrypt';

async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'user@example.com',
      name: 'John Doe',
      password: await hash('password', 10),
    },
  });

  const category = await prisma.category.create({
    data: {
      name: 'Technology',
    },
  });

  await prisma.post.create({
    data: {
      title: 'My First Post',
      content: 'This is the content of my first post.',
      slug: 'my-first-post',
      User: {
        connect: { email: 'user@example.com' },
      },
      Category: {
        connect: { id: category.id },
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
