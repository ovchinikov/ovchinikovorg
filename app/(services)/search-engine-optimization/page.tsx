import Image from 'next/image';
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { NumberedListIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/layout';
import { Button } from '@/components/ui/button';

const Page = () => {
  return (
    <div className='mx-auto p-2 md:container mt-6'>
      <h1
        className={`${lusitana.className} text-2xl text-center font-bold antialiased md:text-3xl`}
      >
        Search Engine Optimization
      </h1>
      <div className='flex items-center justify-center p-6 md:w-full md:px-28 md:py-12'>
        {/* Add Hero Images Here */}
        <Image
          src='/seo-desktop.webp'
          width={1000}
          height={806}
          className='hidden md:block'
          alt='Screenshots of the dashboard project showing desktop version'
        />
        <Image
          src='/seo-mobile.webp'
          width={560}
          height={452}
          className='block md:hidden'
          alt='Screenshots of the dashboard project showing mobile version'
        />
      </div>
      <div className='mt-6'>
        <h2
          className={`mt-6 mb-3 text-2xl text-center md:text-3xl font-bold antialiased ${lusitana.className}`}
        >
          What is SEO?
        </h2>
        <hr className='mb-4' />
        <p>
          <strong>Search Engine Optimization(SEO)</strong> is the process of
          optimizing your website to get organic, or un-paid, traffic from the
          search engine results page. In other words, SEO involves making
          certain changes to your website design and content that make your site
          more attractive to a search engine. You do this in hopes that the
          search engine will display your website as a top result on the search
          engine results page.
        </p>
      </div>
      <div className='mt-6'>
        <h2
          className={`text-2xl font-bold text-center mb-3 mt-6 md:text-3xl antialiased ${lusitana.className}`}
        >
          How Does SEO Work?
        </h2>
        <hr className='mb-4' />
        <p>
          Search engines such as Google and Bing use bots to crawl pages on the
          web, going from site to site, collecting information about those pages
          and putting them in an index. Next, algorithms analyze pages in the
          index, taking into account hundreds of ranking factors or signals, to
          determine the order pages should appear in the search results for a
          given query.
        </p>
      </div>
      <div className='mt-6'>
        <h2
          className={`text-2xl font-bold text-center mb-3 mt-6 md:text-3xl antialiased ${lusitana.className}`}
        >
          Why is SEO Important?
        </h2>
        <hr className='mb-4' />
        <p>
          SEO is important because it is the process of boosting the visibility
          of your website in the search engine results page. This helps your
          website to be more discoverable and accessible to a wider audience.
        </p>
      </div>

      <div className='mt-6'>
        <h2
          className={`text-2xl font-bold text-center mb-3 mt-6 md:text-3xl antialiased ${lusitana.className}`}
        >
          Our Process
        </h2>
        <hr className='mb-4' />
        <div className='grid grid-cols-1 gap-4 md:grid-cols-4'>
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <p className='flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-4xl font-bold text-white'>
                  1
                </p>
                <span
                  className={`${lusitana.className} text-2xl font-bold antialiased`}
                >
                  Research
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter>
              Research and analyze your website and competition
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <p className='flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-4xl font-bold text-white'>
                  2
                </p>
                <span
                  className={`${lusitana.className} text-2xl font-bold antialiased`}
                >
                  Strategy
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter>
              Create a strategy for your website and content
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <p className='flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-4xl font-bold text-white'>
                  3
                </p>
                <span
                  className={`${lusitana.className} text-2xl font-bold antialiased`}
                >
                  Implementation
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter>Optimize your website and content</CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <p className='flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-4xl font-bold text-white'>
                  4
                </p>
                <span
                  className={`${lusitana.className} text-2xl font-bold antialiased`}
                >
                  Monitor
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter>Monitor your website&apos;s performance</CardFooter>
          </Card>
        </div>
        <div className='p-10 mt-10 flex flex-col sm:flex-row gap-4 justify-between flex-grow'>
          <h1 className={`${lusitana.className} text-2xl font-bold`}>
            Ready to get your website up on google?
          </h1>
          <Button className='rounded-full'>Get a free quote</Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
