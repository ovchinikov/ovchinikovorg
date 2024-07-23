import CreateBlog from '@/components/forms/create-blog';
import { getCategories } from '@/lib/data';

const Page = async () => {
  const categories = await getCategories();
  // console.log(categories);
  return (
    <div className=''>
      <CreateBlog categories={categories} />
    </div>
  );
};

export default Page;
