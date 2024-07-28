import { MainNav } from '@/components/main-nav';
import { MobileNav } from '@/components/mobile-nav';

export function SiteHeader() {
  return (
    <header className='sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div>
        <MainNav />
        <MobileNav />
      </div>
    </header>
  );
}
