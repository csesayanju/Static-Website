'use client';

import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import metadata from './metadata';

const Section1 = dynamic(() => import('../components/Section1'), {
  loading: () => <div>Loading Section...</div>,
});

const About = dynamic(() => import('@/components/About'), {
  loading: () => <div>Loading About...</div>,
});

const Portfolio = dynamic(() => import('@/components/Portfolio'), {
  loading: () => <div>Loading Portfolio...</div>,
});

export { metadata };

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
