import { lusitana } from '@/app/layout';
import { Button } from '@/components/ui/button';
import { CheckBadgeIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const Page = () => {
  // copywriting services
  const services = [
    'Blog writing',
    'SEO copywriting',
    'Website copywriting',
    'Product descriptions',
  ];
  return (
    <div className='mt-10 p-4 md:container md:mx-auto'>
      <h1
        className={`${lusitana.className} text-3xl md:text-2xl text-center font-bold antialiased`}
      >
        Copywriting
      </h1>
      <h1
        className={`${lusitana.className} text-3xl mt-6 text-center font-bold antialiased`}
      >
        We will write a story that sells.
      </h1>
      <p className='text-center mt-6 text-lg'>
        Our copywriting services will help you create a compelling story that
        will attract, engage, and convert your audience.
      </p>
      <div className='flex justify-center items-center p-6'>
        <Image
          src='/copy-writing-desktop.webp'
          alt='copywriting in kenya'
          width={1000}
          height={667}
          className='hidden md:block'
        />
        <Image
          src='/copy-writing-mobile.webp'
          alt='copywriting in kenya'
          width={600}
          height={400}
          className='block md:hidden'
        />
      </div>
      <div>
        <h2
          className={`${lusitana.className} text-2xl mt-6 text-center font-bold antialiased`}
        >
          What we offer
        </h2>
        <p className='text-center mt-6'>Our copywriting services include:</p>
        <ul className='mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2'>
          {services.map((service, index) => (
            <li key={index} className='flex items-center border p-6 rounded-lg'>
              <CheckBadgeIcon className='h-5 w-5 text-green-500' />
              <span className='ml-2'>{service}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex flex-col sm:flex-row p-4'>
        <div className='flex-1'>
          <h2
            className={`${lusitana.className} text-2xl mt-6 text-center font-bold antialiased`}
          >
            Why choose us
          </h2>
          <p className='text-center mt-6'>
            We are a team of experienced copywriters who have worked with
            clients from different industries. We understand the power of words
            and how they can influence your audience. We will help you create a
            compelling story that will attract, engage, and convert your
            audience.
          </p>
        </div>
        <div className='flex-1 flex flex-col gap-2 justify-end'>
          <div>
            <h2
              className={`${lusitana.className} text-2xl mt-6 text-center font-bold antialiased`}
            >
              Get in touch
            </h2>
            <p className='text-center mt-6'>
              If you are looking for a copywriting service that will help you
              create a compelling story that will attract, engage, and convert
              your audience, get in touch with us today.
            </p>
          </div>
          <Button className='mt-6 sm:w-1/3 rounded-full'>Contact us</Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
