import Blog from '@/components/blog/Blog';
import { getPosts } from '@/lib/data';
import { dateToString } from '@/lib/utils';
import Link from 'next/link';

const Page = async () => {
  const posts = await getPosts();
  console.log(posts);
  return (
    <>
      <h1>Blogs</h1>

      <div className='grid gap-4 grid-cols-1  sm:grid-cols-2 md:grid-cols-3 p-4 sm:container mx-auto'>
        {posts.map((post) => (
          <div key={post.id}>
            <Blog {...post} />
            <hr className='block sm:hidden' />
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;
