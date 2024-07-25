import {
  ArrowRightCircleIcon,
  CheckCircleIcon,
  LightBulbIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import { Handshake, HeartHandshakeIcon } from 'lucide-react';
import Image from 'next/image';
import { lusitana } from '../layout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

const Page = () => {
  const values = [
    {
      title: 'Innovation',
      icon: <LightBulbIcon height={24} width={24} />,
      description: 'We are always looking for new ways to solve problems',
    },
    {
      title: 'Quality',
      icon: <CheckCircleIcon height={24} width={24} />,
      description: 'We deliver high quality products and services',
    },
    {
      title: 'Integrity',
      icon: <ShieldCheckIcon height={24} width={24} />,
      description: 'We are honest and transparent in all our dealings',
    },
    {
      title: 'Customer Satisfaction',
      icon: <HeartHandshakeIcon height={24} width={24} />,
      description: 'We put our customers first',
    },
    {
      title: 'Teamwork',
      icon: <Handshake size={24} />,
      description: 'We work together to achieve our goals',
    },
  ];
  return (
    <div className='mt-10 p-4 md:container md:mx-auto'>
      <div className='mt-4'>
        <h1
          className={`${lusitana.className} text-2xl text-center mb-2 font-bold `}
        >
          About Us
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate,
          deserunt. Aut quod et quos. Perspiciatis voluptate minus, blanditiis
          alias, quibusdam dicta error ratione, molestias adipisci commodi eius
          quasi voluptatem facere. Iste amet sed dolore blanditiis animi
          doloribus voluptatibus laborum minima enim distinctio, nobis itaque,
          magnam minus consequuntur odit ipsa quam nulla error doloremque,
          deleniti reprehenderit sequi quod. Quas, nobis eius.
        </p>
      </div>

      <div className='mt-6'>
        <h1
          className={`${lusitana.className} text-2xl text-center font-bold mt-4 mb-4`}
        >
          Our core values
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {values.map((value, index) => (
            <div
              key={index}
              className='flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg'
            >
              <div className='flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full'>
                {value.icon}
              </div>
              <h2 className='mt-2 text-lg font-semibold'>{value.title}</h2>
              <p className='mt-2 text-sm text-center'>{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-6'>
        <h1
          className={`${lusitana.className} text-2xl text-center font-bold mt-4`}
        >
          Our Mission
        </h1>
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <p className='flex-1 text-center'>
            <Balancer>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptate, deserunt. Aut quod et quos. Perspiciatis voluptate
              minus, blanditiis alias, quibusdam dicta error ratione, molestias
              adipisci commodi eius quasi voluptatem facere. Iste amet sed
              dolore blanditiis animi doloribus voluptatibus laborum minima enim
              distinctio, nobis itaque, magnam minus consequuntur odit ipsa quam
              nulla error doloremque, deleniti reprehenderit sequi quod. Quas,
              nobis eius.
            </Balancer>
          </p>
          <div className='flex-1 flex justify-center items-center p-6'>
            <Image
              src='/mission.webp'
              alt='Mission'
              width={1000}
              height={600}
            />
          </div>
        </div>
      </div>

      <div className='mt-6 p-6 flex flex-col sm:flex-row items-center justify-between gap-4'>
        <div>
          <h1
            className={`${lusitana.className} text-3xl text-center  font-bold`}
          >
            Let us be part of your success story
          </h1>
          <p className='text-center mt-2'>
            <Balancer>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptate, deserunt. Aut quod et quos. Perspiciatis voluptate
              minus, blanditiis
            </Balancer>
          </p>
        </div>
        <Button className='flex gap-2'>
          <Link href='/contact'>Contact Us</Link>
          <ArrowRightCircleIcon height={24} width={24} />
        </Button>
      </div>
    </div>
  );
};

export default Page;
