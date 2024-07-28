import type { Metadata } from 'next';
import { Inter, Lusitana } from 'next/font/google';
import './globals.css';
import { MobileNav } from '@/components/mobile-nav';
import { MainNav } from '@/components/main-nav';
import { SiteHeader } from '@/components/site-header';
import Footer from '@/components/Footer';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import WhatsappWidget from '@/components/whatsappWidget';

const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Vinokov Tech Co.',
    default: 'Vinokov Tech Co.',
  },
  description: '',
  metadataBase: new URL('https://vinokov.tech'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} min-h-screen`}>
        <SiteHeader />
        {children}
        <WhatsappWidget />
        <Footer />
      </body>
    </html>
  );
}
