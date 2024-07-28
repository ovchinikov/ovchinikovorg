import Blog from '@/components/blog/Blog';
import { getPosts } from '@/lib/data';
import { lusitana } from '../layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
};

const Page = async () => {
  const posts = await getPosts();
  return (
    <div className='min-h-screen'>
      <h1 className={`${lusitana.className} font-bold text-3xl text-center`}>
        Blogs
      </h1>

      <div className='grid gap-4 grid-cols-1  sm:grid-cols-2 md:grid-cols-3 p-4 sm:container mx-auto'>
        {posts.map((post) => (
          <div key={post.id}>
            <Blog {...post} />
            <hr className='block sm:hidden' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
