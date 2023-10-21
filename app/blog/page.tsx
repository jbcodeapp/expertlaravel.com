// 'use client';

import ListLayout from '@/layouts/MDX/ListLayout';
import MainLayout from '@/layouts/MainLayout';
import { sortedBlogPost } from '@/lib/utils/contentlayer';
import { POSTS_PER_PAGE } from '@/types/default';
import { allBlogs } from 'contentlayer/generated';

const baseSiteURL = process.env.NEXT_PUBLIC_SITE_URL;
const siteURLWithBlog = `${baseSiteURL}blog`;

export const metadata = {
  title: 'Expert Laravel Blog - Latest Insights and Tutorials',
  description:
    'Stay updated with the latest Laravel insights, tutorials, and news from Expert Laravels blog. Enhance your web development skills with our expert articles.',
  metadataBase: new URL(siteURLWithBlog),
  alternates: {
    canonical: siteURLWithBlog,
  },
  keywords: 'Laravel Blog, Web Development, Laravel Insights, Tutorials, Expert Laravel',
  images: `${baseSiteURL}static/blog.png`,
  openGraph: {
    locale: 'en_US',
    type: 'website',
    url: siteURLWithBlog,
    title: 'Expert Laravel Blog - Latest Insights and Tutorials',
    description:
      'Stay updated with the latest Laravel insights, tutorials, and news from Expert Laravels blog. Enhance your web development skills with our expert articles.',
    siteName: 'Expert Laravel',
    images: [
      {
        url: `${baseSiteURL}static/blog.png`,
        width: '1903',
        height: '955',
        alt: 'Expert Laravel Blog - Latest Insights and Tutorials',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Laravel Blog - Latest Insights and Tutorials',
    description:
      'Stay updated with the latest Laravel insights, tutorials, and news from Expert Laravels blog. Enhance your web development skills with our expert articles.',
    site: '@jbcodeapp',
  },
};

export default function Blog() {
  const activePosts = allBlogs.filter((p) => p.draft === false);
  const posts = sortedBlogPost(activePosts);
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE);
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  };

  return (
    <MainLayout>
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="Blog"
      />
    </MainLayout>
  );
}
