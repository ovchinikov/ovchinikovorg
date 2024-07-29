import { getCategories, getPostById } from '@/lib/data';
import dynamic from 'next/dynamic';

const EditBlog = dynamic(() => import('@/components/forms/edit-blog'), {
  ssr: false,
});

const Page = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const [categories, blog] = await Promise.all([
    getCategories(),
    getPostById(id),
  ]);
  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <EditBlog categories={categories} blog={blog} />
    </div>
  );
};

export default Page;
