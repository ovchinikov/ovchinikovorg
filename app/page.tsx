import { lusitana } from '@/app/layout';
import { Button } from '@/components/ui/button';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import styles from '@/app/home.module.css';
import { getHomePosts } from '@/lib/data';
import { dateToString } from '@/lib/utils';

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
                Solving your business needs with great software solutions.
              </Balancer>
            </h1>
            <p>
              We are a team of developers with a passion for solving problems
              and creating great software solutions. We work with businesses of
              all sizes to help them achieve their goals.
            </p>
          </div>
          <div className='flex justify-center items-center p-6'>
            <Image
              src='/hero-desktop.webp'
              alt='vinokov tech co hero image'
              width={1000}
              height={677}
              className='hidden sm:block'
            />
            <Image
              src='/hero-mobile.webp'
              alt='vinokov tech co hero image'
              width={560}
              height={577}
              className='block sm:hidden'
            />
          </div>
        </div>
      </div>
      <div className='mt-6'>
        <h2 className={`${lusitana.className} text-center text-2xl font-bold`}>
          <Balancer>Growing your businesses is our main business</Balancer>
        </h2>
        <p className='sm:text-center'>
          <Balancer>
            We work with businesses of all sizes to help them achieve their
            goals. Whether you are a small business looking to grow or a large
            corporation looking to improve your processes, we can help. We
            integrate <strong>Artificial Intelligence</strong> and other modern
            technologies to ensure that your business is always ahead of the
            competition and running smoothly.
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
                  />

                  <h2 className='text-xl text-center font-bold'>
                    {service.name}
                  </h2>
                  <div>
                    <Button variant='link' className='flex gap-2'>
                      <span>Learn more</span>
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
        <Button className='flex justify gap-4'>
          <Link href='/contact'>Contact us</Link>
          <ArrowRightCircleIcon height={20} width={20} />
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
              <div key={post.id}>
                <div className='rounded-lg p-4 h-[200px]'>
                  <Link href={`/blog/${post.slug}`}>
                    <div className='flex flex-col gap-6 h-full'>
                      <div className='flex flex-col gap-2 flex-grow'>
                        <h1 className='text-2xl text-center font-bold'>
                          {post.title}
                        </h1>
                        <h1 className='text-sm text-blue-500 text-center'>
                          {dateToString(post.createdAt)}
                        </h1>
                      </div>

                      <button className='mb-5 flex justify-center items-center gap-1 font-bold outline-none text-blue-500 hover:font-bold ease-in-out'>
                        Read more
                        <ArrowRightCircleIcon height={20} width={20} />
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
              {index < posts.length - 1 && <hr className='block sm:hidden' />}
            </>
          ))}
        </div>
        <Button
          variant='link'
          className='flex justify-center items-center gap-2 rounded-full'
        >
          <Link href='/blog'>View all posts</Link>
          <ArrowRightCircleIcon height={20} width={20} />
        </Button>
      </div>
    </main>
  );
}
