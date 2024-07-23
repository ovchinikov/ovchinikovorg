import { getPost } from '@/lib/data';
import { dateToString } from '@/lib/utils';
import Link from 'next/link';

const Page = async ({ params }: { params: { slug: string } }) => {
  const blog = await getPost(params.slug);

  return (
    <>
      <h1>{blog?.title}</h1>
      <p>{blog?.content}</p>
      <p>
        By <i>{blog?.User?.name}</i>
      </p>
      <p>
        <Link href={`/blog/category/${blog?.Category?.name}`}>
          {blog?.Category?.name}
        </Link>
      </p>
      <p>{dateToString(blog?.createdAt)}</p>
    </>
  );
};

export default Page;
