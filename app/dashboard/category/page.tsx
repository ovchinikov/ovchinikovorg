import { lusitana } from '@/app/layout';
import { CreateCategory } from '@/components/category/buttons';
import CategoryTable from '@/components/category/table';

const Page = () => {
  return (
    <div className='w-full'>
      <div className='flex w-full items-center justify-between'>
        <h1 className={`${lusitana.className} text-2xl`}>Category</h1>
      </div>
      <div className='mt-4 flex items-center justify-end gap-2 md:mt-8 mb-8'>
        <CreateCategory />
      </div>
      <CategoryTable />
    </div>
  );
};

export default Page;
