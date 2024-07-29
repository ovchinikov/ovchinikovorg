'use client';

import * as React from 'react';
import Link, { LinkProps } from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { docsConfig } from '@/config/doc';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ServerStackIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <div className='flex items-center p-4 justify-between'>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant='ghost'
            className='mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden'
          >
            <svg
              strokeWidth='1.5'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
            >
              <path
                d='M3 5H11'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
              <path
                d='M3 12H16'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
              <path
                d='M3 19H21'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
            </svg>
            <span className='sr-only'>Toggle Menu</span>
          </Button>
        </SheetTrigger>

        <SheetContent aria-describedby='nav-bar' side='left' className='pr-0'>
          <SheetHeader>
            <SheetTitle>
              <MobileLink
                href='/'
                className='flex items-center'
                onOpenChange={setOpen}
              >
                <span className='flex gap-1 items-center justify-center font-bold text-indigo-500'>
                  <ServerStackIcon className='w-8 h-8' />
                  Vinokov
                </span>
              </MobileLink>
            </SheetTitle>
            <SheetDescription className='sr-only'>
              {siteConfig.description}
            </SheetDescription>
          </SheetHeader>

          <ScrollArea className='my-4 h-[calc(100vh-2rem)] pb-10 pl-2 pr-2'>
            <div className='flex flex-col space-y-2'>
              <div className='flex flex-col space-y-3'>
                {docsConfig.mainNav?.map(
                  (item) =>
                    item.href && (
                      <MobileLink
                        key={item.href}
                        href={item.href}
                        className={clsx(
                          item.href === pathname &&
                            'text-indigo-500 bg-indigo-100 p-2 rounded-md w-full',
                        )}
                        onOpenChange={setOpen}
                      >
                        {item.title}
                      </MobileLink>
                    ),
                )}
              </div>
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
      <Button className='rounded-full bg-indigo-500 hover:bg-indigo-900 md:hidden'>
        <Link href='/contact'>Get in touch</Link>
      </Button>
    </div>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();

  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
