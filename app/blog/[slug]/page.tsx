import { lusitana } from '@/app/layout';
import { getPost } from '@/lib/data';
import { dateToString } from '@/lib/utils';

import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const post = await getPost(slug);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: post?.title,
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    },
  };
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const blog = await getPost(params.slug);

  return (
    <div className='min-h-screen'>
      <div className='md:container flex justify-center mx-auto  px-4'>
        <div>
          <h1 className={`${lusitana.className} text-3xl font-bold mb-4`}>
            {blog?.title}
          </h1>
          <p className='mt-2 text-indigo-500'>
            {dateToString(blog?.createdAt)} | {blog?.Category?.name}
          </p>
          <article
            className=' prose prose-lg max-w-none'
            dangerouslySetInnerHTML={{ __html: blog?.content || '' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
