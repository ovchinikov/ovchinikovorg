import { lusitana } from '@/app/layout';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

export const metadata: Metadata = {
  title: 'Mobile App Development',
  keywords: [
    'mobile app development',
    'mobile app development in Kenya',
    'mobile app development services',
    'mobile app development company',
    'mobile app development agency',
    'mobile app development in Nairobi',
    'mobile app development in Mombasa',
    'mobile app development in Kisumu',
    'mobile app development in Nakuru',
  ],
};

const Page = () => {
  const features = [
    {
      name: 'Discovery',
      description:
        'We start by getting to know your business and your goals. We research your industry and target audience to create a plan that will help you achieve success.',
    },
    {
      name: 'Design',
      description:
        'Our team of designers will work with you to create a custom design that reflects your brand and appeals to your target audience.',
    },
    {
      name: 'Development',
      description:
        'Our team of developers will bring your design to life, creating a custom website that is tailored to your needs.',
    },
    {
      name: 'Testing',
      description:
        'We test your app to ensure that it is functioning properly and meets your expectations.',
    },
    {
      name: 'Launch',
      description:
        'Once your app is complete, we will launch it and help you promote it to your target audience.',
    },
    {
      name: 'Maintenance',
      description:
        'We provide ongoing maintenance and support to ensure that your app continues to meet your needs and grow your business.',
    },
  ];

  return (
    <div className='mt-10 p-4 md:container md:mx-auto'>
      <div className='flex justify-center items-center p-6'>
        <Image
          src='/app-development-desktop.webp'
          alt='mobile app-development in kenya'
          width={1000}
          height={667}
          priority={true}
          className='hidden md:block'
        />
        <Image
          src='/app-development-mobile.webp'
          alt='mobile app development in kenya'
          width={600}
          height={400}
          priority={true}
          className='block md:hidden'
        />
      </div>
      <div className='mt-6'>
        <h1
          className={`${lusitana.className} text-2xl text-center font-bold antialiased`}
        >
          <Balancer>
            We just don&apos;t build apps, we build businesses
          </Balancer>
        </h1>
        <p className='text-center mt-2'>
          Our mobile app development services are designed to help your business
          grow and succeed in the digital world.
        </p>
      </div>
      <div className='mt-6'>
        <h1
          className={`${lusitana.className} text-2xl text-center font-bold antialiased`}
        >
          Our apps are meant for all platforms
        </h1>
        <div className='flex justify-center items-center p-6'>
          <Image
            src='/phone-desktop.webp'
            alt='mobile app development'
            width={1000}
            height={667}
            priority
            className='hidden md:block h-auto w-auto'
          />
          <Image
            src='/phone-mobile.webp'
            alt='mobile app development'
            width={550}
            height={417}
            priority
            className='block md:hidden h-auto w-auto'
          />
        </div>
        <p className='mt-2 text-center'>
          Whether you need an app for <strong>Android</strong>,{' '}
          <strong>iOS</strong>, or both, we&apos;ve got you covered! Our team of
          experts will work with you to create a custom app that meets your
          needs and exceeds your expectations.
        </p>
      </div>
      <div className='mt-6'>
        <h1
          className={`${lusitana.className} text-2xl text-center font-bold antialiased`}
        >
          Our mobile app development process
        </h1>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mt-6'>
          {features.map((feature, index) => (
            <div key={index} className='p-4 border rounded-lg'>
              <div className='flex items-center gap-2'>
                <h1
                  className={`${lusitana.className} font-bold text-indigo-500 ml-2 text-lg font-semi-bold`}
                >
                  {feature.name}
                </h1>
              </div>
              <p className='mt-2 text-sm'>{feature.description}</p>
            </div>
          ))}
        </div>
        <div className='flex flex-col sm:flex-row gap-4 justify-between p-6'>
          <h1 className={`${lusitana.className} text-2xl font-bold`}>
            <Balancer>Ready to get started?</Balancer>
          </h1>
          <Button className='rounded-full bg-indigo-500 hover:bg-indigo-900'>
            <Link href='/contact' className='p-2'>
              Contact us today
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
