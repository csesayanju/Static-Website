'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const name = 'LadyWithLens';

export default function Hero() {
  const gradientStyle = {
    backgroundImage:
      'linear-gradient(135deg, #CE3D51 0%, #FF7D66 65%, #B73447 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[85vh] px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center overflow-visible">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight sm:leading-normal tracking-tight"
      >
        <span
          className="inline-block align-text-bottom mr-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
          style={gradientStyle}
        >
          👋
        </span>
        Hey there, I'm{' '}
        <div
          className="inline-block min-h-[1.3em] align-text-bottom"
          style={{ lineHeight: 'normal' }}
        >
          {name.split('').map((char, i) => (
            <span
              key={i}
              className="inline-block align-text-bottom"
              style={{
                ...gradientStyle,
                animationDelay: `${i * 0.02}s`,
              }}
            >
              {char}
            </span>
          ))}
        </div>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xs sm:max-w-md md:max-w-xl leading-relaxed"
      >
        A creative studio for modern graphic design, digital art, and visual storytelling.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center w-full max-w-xs sm:max-w-md md:max-w-none"
      >
        <Link href="/portfolio" className="w-full sm:w-auto">
          <span className="block w-full px-6 py-3 text-center rounded-full bg-white text-[#CE3D51] border border-[#CE3D51] hover:scale-105 transition-all shadow-md text-sm sm:text-base">
            🖌️ View Portfolio
          </span>
        </Link>
        <Link href="/about" className="w-full sm:w-auto">
          <span className="block w-full px-6 py-3 text-center rounded-full bg-[#CE3D51] text-white hover:scale-105 transition-all shadow-md text-sm sm:text-base">
            👀 Learn More
          </span>
        </Link>
      </motion.div>

      <div className="absolute bottom-6 animate-bounce text-gray-400 text-xs sm:text-sm">
        ↓ scroll down
      </div>
    </section>
  );
}
