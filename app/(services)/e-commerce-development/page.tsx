import { lusitana } from '@/app/layout';
import { Button } from '@/components/ui/button';
import {
  ChartBarIcon,
  ClipboardDocumentListIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import Balancer from 'react-wrap-balancer';

const Page = () => {
  const features = [
    {
      name: 'Responsive design',
      icon: <DevicePhoneMobileIcon className='h-6 w-6' />,
      description: 'Our websites are designed to look great on all devices.',
    },
    {
      name: 'Easy to navigate',
      icon: <CursorArrowRaysIcon className='h-6 w-6' />,
      description: 'Our websites are easy to navigate and user-friendly.',
    },
    {
      name: 'SEO optimized',
      icon: <MagnifyingGlassIcon className='h-6 w-6' />,
      description: 'Our websites are optimized for search engines.',
    },
    {
      name: 'Secure payment gateways',
      icon: <LockClosedIcon className='h-6 w-6' />,
      description:
        'We integrate secure payment gateways such as M-Pesa directly into your website.',
    },
    {
      name: 'Product management',
      icon: <ClipboardDocumentListIcon className='h-6 w-6' />,
      description: 'Easily manage your products and inventory.',
    },
    {
      name: 'Customer support',
      icon: <DevicePhoneMobileIcon className='h-6 w-6' />,
      description: 'Provide excellent customer support to your customers.',
    },
    {
      name: 'Analytics',
      icon: <ChartBarIcon className='h-6 w-6' />,
      description: 'Gain insights into your business with our analytics tools',
    },
  ];
  return (
    <div className='mt-10 p-4 md:container mx-auto'>
      <h1
        className={`${lusitana.className} text-3xl text-center md:text-2xl antialiased font-bold`}
      >
        E-commerce Web Development
      </h1>
      <div className='flex items-center justify-center p-6'>
        <Image
          src='/e-commerce-desktop.webp'
          alt='e-commerce web development in Kenya'
          className='hidden md:block'
          height={667}
          width={1000}
        />
        <Image
          src='/e-commerce-mobile.webp'
          className='block md:hidden'
          alt='e-commerce web development in Kenya'
          height={411}
          width={560}
        />
      </div>
      <div className='mt-6'>
        <h1
          className={`text-3xl text-center md:text-2xl font-bold antialiased ${lusitana.className}`}
        >
          <Balancer>
            Increase your sales and online presence with us today
          </Balancer>
        </h1>
        <p className='mt-4 text-center'>
          We build custom <strong>E-Commerce</strong> websites that are designed
          to help you sell more products and services online. Our websites are
          designed to be user-friendly and easy to navigate. We also provide
          excellent customer support to help you grow your business.
        </p>
      </div>
      <div className='mt-6'>
        <h1
          className={`${lusitana.className} text-center font-bold text-2xl antialiased`}
        >
          <Balancer>Our E-commerce Website Features</Balancer>
        </h1>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mt-6'>
          {features.map((feature, index) => (
            <div key={index} className='p-4 border rounded-lg'>
              <div className='flex items-center gap-2'>
                {feature.icon}
                <h1
                  className={`${lusitana.className} font-bold ml-2 text-lg font-semi-bold`}
                >
                  {feature.name}
                </h1>
              </div>
              <p className='mt-2 text-sm'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-6 p-6 flex flex-col md:flex-row gap-4 justify-between'>
        <h1 className={`${lusitana.className} text-2xl font-bold`}>
          <Balancer>Get in touch with us today</Balancer>
        </h1>
        <Button className='rounded-full'>Talk to an expert</Button>
      </div>
    </div>
  );
};

export default Page;
