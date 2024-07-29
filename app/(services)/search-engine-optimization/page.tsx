import Image from 'next/image';
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import {
  ChartBarIcon,
  DocumentTextIcon,
  LinkIcon,
  MagnifyingGlassIcon,
  NumberedListIcon,
  PencilIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/layout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';
import { KeyIcon } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search Engine Optimization',
  keywords: [
    'search engine optimization',
    'search engine optimization in Kenya',
    'search engine optimization services',
    'search engine optimization company',
    'search engine optimization agency',
    'search engine optimization in Nairobi',
    'search engine optimization in Mombasa',
    'search engine optimization in Kisumu',
    'search engine optimization in Nakuru',
    'search engine optimization in Eldoret',
    'search engine optimization in Thika',
  ],
};
const Page = () => {
  const choices = [
    {
      name: 'Free Comprehensive SEO Audit',
      icon: <MagnifyingGlassIcon width={24} height={24} />,
      description:
        'Thorough audits identify strengths, weaknesses, and opportunities for your website. Detailed analysis ensures that every aspect of your SEO strategy is optimized for maximum impact.',
    },
    {
      name: 'Keyword Research and Analysis',
      icon: <KeyIcon width={24} height={24} />,
      description:
        'In-depth keyword research identifies the most relevant and high-performing keywords for your business. A strategic plan targets these keywords, ensuring your content reaches your ideal audience.',
    },
    {
      name: 'On-Page Optimization',
      icon: <DocumentTextIcon width={24} height={24} />,
      description:
        'From meta tags and headings to content and internal linking, every element of your website is optimized. The goal is to make your site search engine-friendly and user-centric, improving both rankings and user experience.',
    },
    {
      name: 'Content Creation and Optimization',
      icon: <PencilIcon width={24} height={24} />,
      description:
        'Quality content is at the heart of SEO. Skilled copywriters produce engaging, SEO-friendly content that resonates with your audience and aligns with search engine algorithms.',
    },
    {
      name: 'Link Building',
      icon: <LinkIcon width={24} height={24} />,
      description: `High-quality, authoritative backlinks enhance your website's credibility and authority. Link-building strategies are designed to improve your site's domain authority and search engine rankings.`,
    },
    {
      name: 'Performance Tracking and Reporting',
      icon: <ChartBarIcon width={24} height={24} />,
      description:
        'Transparency and results matter. Regular performance reports keep you informed about your SEO progress and the impact on your business. A data-driven approach ensures continuous improvement and success.',
    },
  ];
  const steps = [
    {
      title: 'Research',
      description: 'Research and analyze your website and competition',
    },
    {
      title: 'Strategy',
      description: 'Create a strategy for your website and content',
    },
    {
      title: 'Implementation',
      description: 'Optimize your website and content',
    },
    {
      title: 'Monitor',
      description: "Monitor your website's performance",
    },
  ];
  return (
    <div className='mx-auto p-2 md:container mt-6'>
      <div className='flex items-center justify-center p-6 md:w-full md:px-28 md:py-12'>
        {/* Add Hero Images Here */}
        <Image
          src='/seo-desktop.webp'
          width={1000}
          height={806}
          className='hidden md:block h-auto w-auto'
          alt='Screenshots of the dashboard project showing desktop version'
          priority={true}
        />
        <Image
          src='/seo-mobile.webp'
          width={560}
          height={452}
          className='block md:hidden h-auto w-auto'
          alt='Screenshots of the dashboard project showing mobile version'
          priority={true}
        />
      </div>
      <div className='p-6'>
        <hr className='mb-4' />
        <p className='text-center'>
          <Balancer>
            Unlock the true potential of your online presence with premier SEO
            optimization services. In today&apos;s digital landscape, visibility
            is key to success. Our expert team leverages cutting-edge techniques
            and proven strategies to enhance your search engine rankings,
            driving targeted traffic to your website and increasing conversions.
          </Balancer>
        </p>
      </div>
      <div>
        <h1 className={`${lusitana.className} font-bold text-2xl`}>
          Why choose us?
        </h1>
        <hr className='mb-4' />
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          {choices.map((choice, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <span className='flex items-center justify-center w-12 h-12 bg-indigo-100 text-indigo-500 rounded-full'>
                    {choice.icon}
                  </span>
                  <span
                    className={`${lusitana.className} text-lg font-bold antialiased`}
                  >
                    {choice.name}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{choice.description}</CardDescription>
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <div className='mt-6'>
        <h2
          className={`text-2xl font-bold text-center mb-3 mt-6 md:text-3xl antialiased ${lusitana.className}`}
        >
          Our Process
        </h2>
        <hr className='mb-4' />
        <div className='grid grid-cols-1 gap-4 md:grid-cols-4'>
          {steps.map((step, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <p className='flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-xl font-bold text-indigo-500'>
                    {index + 1}
                  </p>
                  <span
                    className={`${lusitana.className} text-lg font-bold antialiased`}
                  >
                    {step.title}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription></CardDescription>
              </CardContent>
              <CardFooter>{step.description}</CardFooter>
            </Card>
          ))}
        </div>
        <div className='p-10 mt-10 flex flex-col sm:flex-row gap-4 items-center justify-between flex-grow'>
          <div className='flex flex-1 flex-col gap-2 items-center justify-center'>
            <h1 className={`${lusitana.className} text-2xl font-bold`}>
              Ready to take your online presence to the next level?
            </h1>
            <p>
              Partner with us for SEO optimization that delivers results.
              Contact us today to learn more about our services and how we can
              help your business thrive in the digital world.
            </p>
          </div>

          <Button className='rounded-full bg-indigo-500 hover:bg-indigo-900'>
            <Link href='/contact' className='p-2'>
              Get a free quote
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
