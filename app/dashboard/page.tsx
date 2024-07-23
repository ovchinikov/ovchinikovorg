import BlogsTable from '@/components/dashboard/blogs-table';
import { lusitana } from '../layout';
import { CreateBlog } from '@/components/dashboard/buttons';

const Page = async () => {
  return (
    <>
      <div className='w-full'>
        <div className='flex w-full items-center justify-between'>
          <h1 className={`${lusitana.className} text-2xl`}>Dashboard</h1>
        </div>
        <div className='mt-4 flex items-center justify-end gap-2 md:mt-8 mb-8'>
          <CreateBlog />
        </div>
        <BlogsTable />
      </div>
    </>
  );
};

export default Page;
