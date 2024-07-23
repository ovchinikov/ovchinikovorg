'use server';
import prisma from '@/lib/db';
import { z } from 'zod';
import { titleToSlug } from './utils';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  category: z.string(),
  content: z.string(),
  slug: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const CreateBlog = FormSchema.omit({
  id: true,
  slug: true,
  createdAt: true,
  updatedAt: true,
});
export async function createBlog(myContent: string | null, formData: FormData) {
  const { title, category, content } = CreateBlog.parse({
    title: formData.get('title'),
    category: formData.get('category'),
    content: myContent,
  });

  console.log(title, category, content);
  try {
    let categoryExists = await prisma.category.findFirst({
      where: {
        name: category,
      },
    });

    if (!categoryExists) {
      categoryExists = await prisma.category.create({
        data: {
          name: category,
        },
      });
    }
    await prisma.post.create({
      data: {
        title,
        Category: {
          connect: {
            id: categoryExists.id,
          },
        },
        content,
        slug: titleToSlug(title),
      },
    });
  } catch (error) {
    return {
      message: 'An error occurred while creating the blog',
    };
  }
  revalidatePath('/dashboard');
  redirect('/dashboard');
}

export const UpdateBlog = async (
  id: string,
  myContent: string,
  formData: FormData,
) => {
  const { title, category, content } = CreateBlog.parse({
    title: formData.get('title'),
    category: formData.get('category'),
    content: myContent,
  });

  console.log(title, category, content);
  try {
    let categoryExists = await prisma.category.findFirst({
      where: {
        name: category,
      },
    });

    if (!categoryExists) {
      categoryExists = await prisma.category.create({
        data: {
          name: category,
        },
      });
    }
    await prisma.post.update({
      where: {
        id,
      },
      data: {
        title,
        Category: {
          connect: {
            id: categoryExists.id,
          },
        },
        content,
        slug: titleToSlug(title),
      },
    });
  } catch (error) {
    return {
      message: 'An error occurred while updating the blog',
    };
  }
  revalidatePath('/dashboard');
  redirect('/dashboard');
};

export async function deleteBlog(id: string) {
  try {
    await prisma.post.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    return {
      message: 'An error occurred while deleting the blog',
    };
  }
  revalidatePath('/dashboard');
  redirect('/dashboard');
}

const categorySchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const CreateCategory = categorySchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export async function createCategory(formData: FormData) {
  const { name } = CreateCategory.parse({
    name: formData.get('category'),
  });
  try {
    await prisma.category.create({
      data: {
        name,
      },
    });
  } catch (error) {
    return {
      message: 'An error occurred while creating the category',
    };
  }
  revalidatePath('/dashboard/category');
  redirect('/dashboard/category');
}

export async function updateCategory(id: string, formData: FormData) {
  const { name } = CreateCategory.parse({
    name: formData.get('category'),
  });
  try {
    await prisma.category.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });
  } catch (error) {
    return {
      message: 'An error occurred while updating the category',
    };
  }
  revalidatePath('/dashboard/category');
  redirect('/dashboard/category');
}

export async function deleteCategory(id: string) {
  try {
    await prisma.category.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    return {
      message: 'An error occurred while deleting the category',
    };
  }
  revalidatePath('/dashboard/category');
  redirect('/dashboard/category');
}
