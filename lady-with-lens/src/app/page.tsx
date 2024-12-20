import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';

const HomePage = () => {
  return (
    <>
      <Section1 />
      <Hero />
      <About />
      <Portfolio />
      <Section2 />
    </>
  );
};

export default HomePage;
