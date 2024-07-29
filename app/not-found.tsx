import { Button } from '@/components/ui/button';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import { lusitana } from '@/app/layout';

const NotFound = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='flex flex-col gap-4'>
        <div>
          <h1 className={`flex gap-2 text-3xl font-bold ${lusitana.className}`}>
            <ExclamationCircleIcon className='w-8 h-8 text-red-500 ' />
            The page you are looking for does not exist.
          </h1>
          <Button variant='link'>
            <Link
              href='/'
              className='flex gap-2 font-bold items-center text-indigo-500'
            >
              <span>Go back home</span>
              <ArrowRightIcon className='w-4 h-4' />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
