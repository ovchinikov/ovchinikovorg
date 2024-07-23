import prisma from '@/lib/db';

export async function getPosts() {
  return await prisma.post.findMany({
    include: { User: true, Category: true },
  });
}

export async function getPost(slug: string) {
  return await prisma.post.findUnique({
    where: { slug: slug },
    include: {
      User: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
      Category: true,
    },
  });
}

// getpost by id

export async function getPostById(id: string) {
  return await prisma.post.findUnique({
    where: { id: id },
    include: { User: true, Category: true },
  });
}

export async function getPostsByCategory(category: string) {
  return await prisma.post.findMany({
    where: { Category: { name: category } },
  });
}

export async function getCategories() {
  return await prisma.category.findMany();
}

export async function getCategoryById(id: string) {
  return await prisma.category.findUnique({
    where: { id: id },
  });
}
