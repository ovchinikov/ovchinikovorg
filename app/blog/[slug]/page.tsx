import { getPost } from '@/lib/data';
import { dateToString } from '@/lib/utils';
import Link from 'next/link';

const Page = async ({ params }: { params: { slug: string } }) => {
  const blog = await getPost(params.slug);

  return (
    <div className='md:container mx-auto max-w-screen-lg px-4'>
      <h1 className='text-3xl font-bold mb-4'>{blog?.title}</h1>
      <article
        className=' prose prose-lg max-w-none'
        dangerouslySetInnerHTML={{ __html: blog?.content || '' }}
      />
      <p>
        By <i>{blog?.User?.name}</i>
      </p>
      <p>
        <Link href={`/blog/category/${blog?.Category?.name}`}>
          {blog?.Category?.name}
        </Link>
      </p>
      <p>{dateToString(blog?.createdAt)}</p>
    </div>
  );
};

export default Page;
