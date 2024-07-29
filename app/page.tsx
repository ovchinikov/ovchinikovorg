import { lusitana } from '@/app/layout';
import { Button } from '@/components/ui/button';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import styles from '@/app/home.module.css';
import { getHomePosts } from '@/lib/data';
import Blog from '@/components/blog/Blog';

export default async function Home() {
  const posts = await getHomePosts();
  // console.log(posts);
  const reviews = [
    {
      name: 'Dmitry Petrov',
      image: '/russian.webp',
      review: 'Professional, efficient and reliable.',
    },
    {
      name: 'Muhammad Abubakar',
      image: '/muhammad.webp',
      review:
        'Top notch service. Excellent communication and great results. Highly recommended.',
    },
  ];
  const services = [
    {
      name: 'Web Development',
      link: '/web-development',
      image: '/web-dev-mobile.webp',
    },
    {
      name: 'Mobile App Development',
      link: '/mobile-app-development',
      image: '/phone-mobile.webp',
    },

    {
      name: 'E-commerce development',
      link: '/e-commerce-development',
      image: '/e-commerce-mobile.webp',
    },
    {
      name: 'Software Development',
      link: '/software-development',
      image: '/software-dev.webp',
    },
    {
      name: 'Search Engine Optimization',
      link: '/search-engine-optimization',
      image: '/seo-mobile.webp',
    },
    {
      name: 'copywriting',
      link: '/copywriting',
      image: '/copy-writing-mobile.webp',
    },
  ];
  return (
    <main className='mt-10 p-4 md:container md:mx-auto'>
      <div>
        <div className='flex flex-col sm:flex-row gap-4 p-4 justify-center items-center'>
          <div className='flex flex-col gap-4 items-center'>
            <h1 className={`${lusitana.className} text-3xl font-bold`}>
              <Balancer>
                Empower Your Business with{' '}
                <span className='text-indigo-500'>
                  Cutting-Edge Software Solutions
                </span>
              </Balancer>
            </h1>
            <h2 className={`text-xl`}>
              <Balancer>
                Innovative Technology, Tailored to Your Needs - Streamline
                Operations, Boost Productivity, and Drive Growth.
              </Balancer>
            </h2>
          </div>
          <div className='flex justify-center items-center p-6'>
            <Image
              src='/hero-desktop.webp'
              alt='vinokov tech co hero image'
              width={1000}
              height={820}
              priority={true}
              className='hidden sm:block'
            />
            <Image
              src='/hero-mobile.webp'
              alt='vinokov tech co hero image'
              width={559}
              height={459}
              priority={true}
              className='block sm:hidden'
            />
          </div>
        </div>
      </div>
      <div className='mt-6'>
        <h2 className={`${lusitana.className} text-center text-3xl font-bold`}>
          <Balancer>Growing your businesses is our main business</Balancer>
        </h2>
        <p className='sm:text-center'>
          <Balancer>
            We work with businesses of all sizes to help them achieve their
            goals. Whether you are a small business looking to grow or a large
            corporation looking to improve your processes, we can help. We
            integrate{' '}
            <strong className='text-indigo-500'>Artificial Intelligence</strong>{' '}
            and other modern technologies to ensure that your business is always
            ahead of the competition and running smoothly.
          </Balancer>
        </p>
      </div>
      <div className='mt-6'>
        <h1 className={`${lusitana.className} font-bold text-center text-2xl`}>
          What exactly do we do?
        </h1>
        <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {services.map((service, index) => (
            <>
              <div
                key={service.name}
                className='rounded-lg p-4 flex flex-col gap-2 items-center'
              >
                <Link href={service.link}>
                  <Image
                    src={service.image}
                    alt={service.name}
                    width={200}
                    height={200}
                    className='h-auto w-auto'
                  />

                  <h2
                    className={`${lusitana.className} text-xl text-center font-bold`}
                  >
                    {service.name}
                  </h2>
                  <div>
                    <Button
                      variant='link'
                      className='flex gap-2 text-indigo-500'
                    >
                      <span className=''>Learn more</span>
                      <ArrowRightCircleIcon height={20} width={20} />
                    </Button>
                  </div>
                </Link>
              </div>
              {index < services.length - 1 && (
                <hr className='block sm:hidden' />
              )}
            </>
          ))}
        </div>
      </div>

      <div className='testimonial mt-6'>
        <h1 className={`${lusitana.className} font-bold text-center text-2xl`}>
          What our clients say about us
        </h1>
        <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {reviews.map((review) => (
            <div
              key={review.name}
              className='rounded-lg p-4 flex gap-4 items-center bg-gray-100'
            >
              <Avatar>
                <AvatarImage src={review.image} alt={review.name} />
                <AvatarFallback>{review.name}</AvatarFallback>
              </Avatar>

              <blockquote>
                <q className={styles.customQuote}>{review.review}</q>
                <br />
                <cite>{review.name}</cite>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-6 p-4 flex flex-col gap-4 justify-center items-center sm:flex-row'>
        <div className='flex flex-col gap-2 flex-1'>
          <h1
            className={`${lusitana.className} text-2xl text-center font-bold`}
          >
            <Balancer>
              Have a project in mind or questions about our services? Get in
              touch
            </Balancer>
          </h1>
        </div>
        <Button className='flex justify gap-4 rounded-full bg-indigo-500 hover:bg-indigo-900'>
          <Link href='/contact' className='p-2'>
            Contact us
          </Link>
        </Button>
      </div>
      <div className='mt-6'>
        <h1 className={`${lusitana.className} text-2xl text-center font-bold`}>
          Latest blog posts
        </h1>
        <hr className='mt-2' />
        <div className='grid gap-4 grid-cols-1  sm:grid-cols-2 md:grid-cols-3 p-4 sm:container mx-auto'>
          {posts.map((post, index) => (
            <>
              <Blog key={post.id} {...post} />
              {index < posts.length - 1 && <hr className='block sm:hidden' />}
            </>
          ))}
        </div>
        <Button
          variant='link'
          className='flex justify-center items-center gap-3 text-indigo-500 underline'
        >
          <Link href='/blog' className='p-2'>
            View all posts
          </Link>
          <ArrowRightCircleIcon height={20} width={20} />
        </Button>
      </div>
    </main>
  );
}
