import { lusitana } from '@/app/layout';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Balancer from 'react-wrap-balancer';

const Page = () => {
  return (
    <div className='mt-10 p-4 md:container md:mx-auto'>
      <h1
        className={`${lusitana.className} text-3xl md:text-2xl text-center font-bold antialiased`}
      >
        Web Development
      </h1>
      <div className='flex flex-col md:flex-row gap-4 items-center justify-center mt-10'>
        <div className='flex-1 flex flex-col gap-3'>
          <h1 className={`text-3xl font-bold ${lusitana.className}`}>
            <Balancer>
              Boost your online presence with a professional website.
            </Balancer>
          </h1>
          <p>Websites that are designed to get you more leads and sales</p>
          <Button className='rounded-full w-1/3'>Get in touch</Button>
        </div>
        <div className='flex flex-1 items-center justify-center p-6'>
          <Image
            src='/web-dev-desktop.webp'
            alt='e-commerce web development in Kenya'
            className='hidden md:block'
            height={667}
            width={1000}
          />
          <Image
            src='/web-dev-mobile.webp'
            className='block md:hidden'
            alt='e-commerce web development in Kenya'
            height={411}
            width={560}
          />
        </div>
      </div>
      <div className='mt-6'>
        <h1
          className={`${lusitana.className} text-2xl text-center font-bold antialiased`}
        >
          <Balancer>
            We understand that your website is the face of your business.
          </Balancer>
        </h1>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-2'>
          <div className='flex flex-1 justify-center items-center p-6'>
            <Image
              src='/growth.svg'
              alt='A website growing'
              height={200}
              width={200}
              className='block md:hidden'
            />
            <Image
              src='/growth.svg'
              alt='A website growing'
              height={200}
              width={200}
              className='hidden md:block'
            />
          </div>
          <div className='flex-1 flex flex-col gap-2'>
            <h1
              className={`text-2xl font-bold ${lusitana.className} text-center`}
            >
              <Balancer>Grow your business with us today</Balancer>
            </h1>
            <p className='flex-1'>
              Explode your revenue, increase your online presence and get more
              leads. We&apos;ve helped clients increase their revenue by up to{' '}
              <span className='text-2xl font-bold text-blue-500'>x10</span> in
              just a few months.
            </p>
          </div>
        </div>
      </div>
      <div className='mt-6 p-6 flex flex-col gap-4 justify-between items-center sm:flex-row'>
        <h1 className={`${lusitana.className} text-2xl font-bold`}>
          <Balancer>Get a free website audit and consultation today</Balancer>
        </h1>
        <Button className='rounded-full'>Get in touch</Button>
      </div>
    </div>
  );
};

export default Page;
