import { lusitana } from '@/app/layout';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartBarIcon,
  CodeBracketIcon,
  CreditCardIcon,
  DocumentTextIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

export const metadata: Metadata = {
  title: 'Software Development',
  keywords: [
    'software development',
    'software development in Kenya',
    'software development services',
    'software development company',
    'software development agency',
    'software development in Nairobi',
    'software development in Mombasa',
    'software development in Kisumu',
    'software development in Nakuru',
    'software development in Eldoret',
    'software development in Thika',
  ],
};

const Page = () => {
  const services = [
    {
      name: 'Payment Gateway',
      icon: <CreditCardIcon height={24} width={24} />,
      description: 'Integrate payment gateways to your website or app',
    },
    {
      name: 'Content Management System',
      icon: <DocumentTextIcon height={24} width={24} />,
      description: 'Manage your website content with ease',
    },
    {
      name: 'Management Information System',
      icon: <ChartBarIcon height={24} width={24} />,
      description: 'Get insights on your business operations',
    },
    {
      name: 'Customer Relationship Management',
      icon: <UserGroupIcon height={24} width={24} />,
      description: 'Manage your customer relationships',
    },
    {
      name: 'Point of Sale System',
      icon: <ShoppingCartIcon height={24} width={24} />,
      description: 'Manage your sales and inventory',
    },
    {
      name: 'E-commerce',
      icon: <ShoppingBagIcon height={24} width={24} />,
      description: 'Sell your products online',
    },
    {
      name: 'Custom Software Development',
      icon: <CodeBracketIcon height={24} width={24} />,
      description: 'Get software that meets your needs',
    },
  ];
  return (
    <div className='mt-10 p-4 md:container md:mx-auto'>
      <div className='flex items-center justify-center p-6'>
        <Image
          src='/software-dev.webp'
          alt='software development in kenya'
          height={492}
          width={1000}
          className='hidden md:block w-full'
        />
        <Image
          src={'/software-dev.webp'}
          alt='software development company in kenya'
          height={276}
          width={560}
          className='block md:hidden'
        />
      </div>
      <div className='mt-6'>
        Transform your vision into reality with our top-tier software
        development services. Our expert team specializes in creating custom
        software solutions tailored to your unique business needs. From concept
        to deployment, we ensure seamless integration, robust functionality, and
        exceptional user experience. Let us help you innovate and grow with
        cutting-edge technology and personalized service. Contact us today to
        start your digital transformation journey.
      </div>
      <div className='mt-6'>
        <h1 className={`${lusitana.className} text-center font-bold text-3xl`}>
          <Balancer>
            Our software development services are tailored to meet your business
            needs
          </Balancer>
        </h1>
        <div className='mt-6'>
          <h1
            className={`${lusitana.className} font-semibold text-2xl text-center`}
          >
            Our Services
          </h1>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 mt-6'>
            {services.map((service) => (
              <Card key={service.name} className='p-4'>
                <CardTitle className='flex gap-4 items-center'>
                  <div className='flex items-center justify-center w-12 h-12 bg-indigo-100 text-indigo-500 rounded-full'>
                    {service.icon}
                  </div>
                  <CardDescription className='font-semibold text-black'>
                    {service.name}
                  </CardDescription>
                </CardTitle>
                <CardContent className='text-sm'>
                  {service.description}
                </CardContent>
                <CardFooter></CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className='mt-6 p-4 flex flex-col sm:flex-row gap-4 justify-between'>
        <h1 className={`text-2xl font-bold antialiased ${lusitana.className}`}>
          Ready to get started on your next project?
        </h1>
        <Button className='rounded-full bg-indigo-500 hover:bg-indigo-900'>
          <Link href='/contact'>Get in touch</Link>
        </Button>
      </div>
    </div>
  );
};

export default Page;
