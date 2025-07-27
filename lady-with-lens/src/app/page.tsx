'use client';

import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';

const Section1 = dynamic(() => import('../components/Section1'), {
  loading: () => <div>Loading Section...</div>,
});

const About = dynamic(() => import('@/components/About'), {
  loading: () => <div>Loading About...</div>,
});

const Portfolio = dynamic(() => import('@/components/Portfolio'), {
  loading: () => <div>Loading Portfolio...</div>,
});

export const metadata = {
  title: 'Lady With Lens – Photography Portfolio',
  description: 'A modern photography portfolio built with Next.js and Tailwind CSS.',
  openGraph: {
    title: 'Lady With Lens',
    description: 'A modern photography portfolio built with Next.js and Tailwind CSS.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lady With Lens',
    description: 'Photography portfolio built with Next.js',
    images: ['/og-image.jpg'],
  },
};

const HomePage = () => {
  return (
    <>
      <Hero />
      <Section1 />
      <About />
      <Portfolio />
    </>
  );
};

export default HomePage;
