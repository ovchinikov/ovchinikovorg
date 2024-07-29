'use client';

import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { ServerIcon, ServerStackIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Web Development',
    href: '/web-development',
  },
  {
    title: 'Mobile Development',
    href: '/mobile-app-development',
  },
  {
    title: 'E-commerce Development',
    href: '/e-commerce-development',
  },
  {
    title: 'SEO Optimization',
    href: '/search-engine-optimization',
  },
  {
    title: 'Software Development',
    href: '/software-development',
  },
  {
    title: 'Copywriting',
    href: '/copywriting',
  },
];

export function MainNav() {
  const pathname = usePathname();
  return (
    <div className='hidden md:block'>
      <div className='flex justify-between items-center p-4'>
        <Link href='/'>
          <span className='flex gap-1 items-center justify-center font-bold text-indigo-500'>
            <ServerStackIcon className='w-8 h-8' />
            Vinokov
          </span>
        </Link>
        <NavigationMenu className=''>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
                  {services.map((service) => (
                    <ListItem
                      key={service.title}
                      title={service.title}
                      href={service.href}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href='/blog' legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className='justify-self-end'>
              <Link href='/about-us' legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button className='rounded-full bg-indigo-500 hover:bg-indigo-900'>
          <Link href='/contact' className='p-2'>
            Get in touch
          </Link>
        </Button>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
