import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  const socialsLinks = [
    {
      name: 'Linkedin',
      url: 'https://linkedin.com',
      href: '',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com',
    },
  ];
  return (
    <footer className='mt-10 py-6 bg-indigo-500 text-white'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between gap-4'>
        <div className='flex flex-col md:flex-row gap-3  mb-4 md:mb-0'>
          <Link href='/about-us' className='hover:underline'>
            About
          </Link>
          <Link href='/contact-us' className='hover:underline'>
            Contact
          </Link>
          <Link href='/privacy-policy' className='hover:underline'>
            Privacy Policy
          </Link>
          <Link href='/terms-of-service' className='hover:underline'>
            Terms of Service
          </Link>
        </div>
        <div className='flex space-x-4 mb-4 md:mb-0'>
          {socialsLinks.map((social) => (
            <SocialIcon
              key={social.name}
              url={social.url}
              href=''
              target='_blank'
              fgColor='#fff'
              bgColor='#312e81'
              style={{ height: 30, width: 30 }}
            />
          ))}
        </div>
      </div>
      <div className='container mx-auto text-center mt-4'>
        <p>
          &copy; {new Date().getFullYear()} Vinokov Tech. Co. All rights
          reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
