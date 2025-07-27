import Section1 from '../components/Section1';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';

export const metadata = {
  title: 'Lady With Lens – Photography Portfolio',
  description: 'A modern photography portfolio built with Next.js and Tailwind CSS.',
  openGraph: {
    title: 'Lady With Lens',
    description: 'A modern photography portfolio built with Next.js and Tailwind CSS.',
    images: ['/og-image.jpg'], // Replace with actual image
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
