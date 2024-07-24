import { dateToString } from '@/lib/utils';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface BlogProps {
  id: string;
  title: string;
  slug: string;
  createdAt: Date;
  content: string;
}
const Blog = ({ id, title, slug, createdAt }: BlogProps) => {
  return (
    <>
      <div className='rounded-lg p-4 h-[200px] sm:h-[300px]'>
        <Link href={`/blog/${slug}`}>
          <div className='flex flex-col gap-6 h-full'>
            <div className='flex flex-col gap-2 flex-grow'>
              <h1 className='text-2xl md:text-3xl text-center font-bold'>
                {title}
              </h1>
              <h1 className='text-sm text-blue-500 text-center'>
                {dateToString(createdAt)}
              </h1>
            </div>

            <button className='mb-5 flex justify-center items-center gap-1 font-bold outline-none text-blue-500 hover:font-bold ease-in-out'>
              Read more
              <ArrowRightCircleIcon height={20} width={20} />
            </button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Blog;
