type MainNavItem = {
  title: string;
  href: string;
};

type SidebarNavItem = {
  title: string;
  items: SidebarNavItem[];
  href?: string;
  label?: string;
};

export interface DocsConfig {
  mainNav: MainNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: 'Web Development',
      href: '/web-development',
    },
    {
      title: 'Mobile Development',
      href: '/mobile-app-development',
    },
    {
      title: 'Software Development',
      href: '/software-development',
    },
    {
      title: 'E-commerce Development',
      href: '/e-commerce-development',
    },
    {
      title: 'Copywriting',
      href: '/copywriting',
    },

    {
      title: 'Blog',
      href: '/blog',
    },
    {
      title: 'About',
      href: '/about-us',
    },
  ],
};
