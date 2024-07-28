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
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
};

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
        <p>
          <Balancer>
            <strong>Vinokov Tech Co Ltd</strong>, founded in 2022, specializes
            in Software development, SEO optimization, Copywriting, Web and
            Mobile app development, and E-commerce solutions. Our mission is to
            empower businesses with innovative technology and creative
            solutions. Let us help you achieve your digital goals with expert
            craftsmanship and personalized service.
          </Balancer>
        </p>
        <div className='mt-4'>
          <Balancer>
            We&apos;ve had the privilege of working with a diverse range of
            clients, helping them to succeed in the digital world. Some of our
            esteemed clients include{' '}
            <span className='font-bold text-indigo-500'>
              <Link href='https://gsportskit.shop'>GsportsKit</Link>
            </span>
            ,{' '}
            <span className='font-bold text-indigo-500'>
              <Link href='https://spb.stolle.ru/'>Shtolle</Link>
            </span>
            , and{' '}
            <span className='font-bold text-indigo-500'>
              <Link href='https://stomatologiya-spb.com/'>
                Studio Esthetic Dental
              </Link>
            </span>
            . Join them and experience the Vinokov Tech difference.
          </Balancer>
        </div>
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
              <div className='flex items-center justify-center w-12 h-12 bg-indigo-100 text-indigo-500 rounded-full'>
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
          <p className='flex-1'>
            <Balancer>
              Our mission is to help businesses grow by providing them with high
              quality software development services. We are committed to
              delivering innovative solutions that meet the needs of our
              clients. We are passionate about technology and strive to provide
              the best possible service to our customers. We believe in
              integrity, teamwork, and customer satisfaction. Our goal is to
              build long-term relationships with our clients and help them
              achieve their business goals.{' '}
            </Balancer>
          </p>
          <div className='flex-1 flex justify-center items-center p-6'>
            <Image
              src='/mission.webp'
              alt='Mission'
              width={1000}
              height={600}
              className='h-auto w-auto'
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
              Book a free consultation with us today. We are here to help you
              with all your software development needs.
            </Balancer>
          </p>
        </div>
        <Button className='rounded-full bg-indigo-500 hover:bg-indigo-900'>
          <Link href='/contact'>Contact us</Link>
        </Button>
      </div>
    </div>
  );
};

export default Page;
