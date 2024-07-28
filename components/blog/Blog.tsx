import { lusitana } from '@/app/layout';
import { dateToString } from '@/lib/utils';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '../ui/button';

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
      <div className='rounded-lg p-4 h-[200px]'>
        <Link href={`/blog/${slug}`}>
          <div className='flex flex-col gap-3 h-full'>
            <div className='flex flex-col gap-2 flex-grow'>
              <h1 className={`text-xl font-bold ${lusitana.className}`}>
                {title}
              </h1>
              <h1 className='text-sm text-indigo-500'>
                {dateToString(createdAt)}
              </h1>
            </div>

            <Button
              variant='link'
              className='flex justify-start gap-2 text-indigo-500'
            >
              <span className=''>Read more</span>
              <ArrowRightCircleIcon height={20} width={20} />
            </Button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Blog;
