import Projects from '@/components/Projects/Projects';
import MainLayout from '@/layouts/MainLayout';

const baseSiteURL = process.env.NEXT_PUBLIC_SITE_URL;
const siteURLWithBlog = `${baseSiteURL}projects`;

export const metadata = {
  title: 'Expert Laravel Projects - Explore Our Showcase',
  description:
    'Discover our portfolio of Laravel projects and see how we can help you with your next development venture. Explore our showcase of successful projects.',
  metadataBase: new URL(siteURLWithBlog),
  alternates: {
    canonical: siteURLWithBlog,
  },
  keywords: 'Laravel Projects, Portfolio, Showcase, Expert Laravel',
  images: [
    {
      url: `${baseSiteURL}static/projects.png`,
      width: '1903',
      height: '955',
      alt: 'Expert Laravel Projects - Explore Our Showcase',
      type: 'image/png',
    },
  ],
  // authors: 'Jigar Patel',

  openGraph: {
    locale: 'en_US',
    type: 'website',
    url: siteURLWithBlog,
    title: 'Expert Laravel Projects - Explore Our Showcase',
    description:
      'Discover our portfolio of Laravel projects and see how we can help you with your next development venture. Explore our showcase of successful projects.',
    siteName: 'Expert Laravel',

    images: [
      {
        url: `${baseSiteURL}static/projects.png`,
        width: '1903',
        height: '955',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Laravel Projects - Explore Our Showcase',
    description:
      'Discover our portfolio of Laravel projects and see how we can help you with your next development venture. Explore our showcase of successful projects.',
    site: '@jbcodeapp',
  },
};

export default function Page() {
  return (
    <MainLayout>
      <div className="space-y-2 pt-6 pb-8 md:space-y-5 ">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Projects
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Here are some of my selected projects worth sharing.
        </p>
      </div>
      <Projects />
    </MainLayout>
  );
}
