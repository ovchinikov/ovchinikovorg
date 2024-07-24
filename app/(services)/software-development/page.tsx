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
import Image from 'next/image';
import Balancer from 'react-wrap-balancer';

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
      <h1
        className={`${lusitana.className} text-2xl text-center md:text-3xl font-bold antialiased`}
      >
        Software Development
      </h1>
      <div className='flex items-center justify-center p-6'>
        <Image
          src='/software-development-desktop.webp'
          alt='software development in kenya'
          height={492}
          width={1000}
          className='hidden md:block w-full'
        />
        <Image
          src={'/software-development-mobile.webp'}
          alt='software development company in kenya'
          height={276}
          width={560}
          className='block md:hidden'
        />
      </div>
      <div className='mt-6'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit a iure
        unde id quis minima fugit commodi impedit! Quos aut accusantium
        repudiandae dolore natus quasi pariatur, voluptates sint soluta eos.
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
            className={`${lusitana.className} font-medium text-2xl text-center`}
          >
            Our Services
          </h1>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 mt-6'>
            {services.map((service) => (
              <Card key={service.name} className='p-4'>
                <CardTitle className='flex gap-4 items-center'>
                  {service.icon}
                  <CardDescription>{service.name}</CardDescription>
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
        <Button>Get in touch</Button>
      </div>
    </div>
  );
};

export default Page;
