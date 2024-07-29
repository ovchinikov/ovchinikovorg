import { getCategories } from '@/lib/data';

import dynamic from 'next/dynamic';

const CreateBlog = dynamic(() => import('@/components/forms/create-blog'), {
  ssr: false,
});

const Page = async () => {
  const categories = await getCategories();
  // console.log(categories);
  return (
    <div>
      <CreateBlog categories={categories} />
    </div>
  );
};

export default Page;
