'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/logo.jpg'; // ✅ Alias import (ensure `@` is configured or use relative path)

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xl sm:text-2xl font-black tracking-wide"
          >
            <span className="text-lg sm:text-xl">✨</span>
            <Image
              src={Logo}
              alt="LadyWithLens Logo"
              width={32}
              height={32}
              className="object-contain"
              priority
            />
            <span className="hidden sm:inline">LadyWithLens</span>
            <span className="sm:hidden">LWL</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center">
            <ul className="flex gap-4 sm:gap-6 text-base sm:text-lg font-medium">
              <li>
                <Link href="/" className="hover:text-pink-300 transition-all px-2 py-1 rounded-md">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-pink-300 transition-all px-2 py-1 rounded-md">
                  About
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-pink-300 transition-all px-2 py-1 rounded-md">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-pink-300 transition-all px-2 py-1 rounded-md">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-2xl p-2 rounded-full hover:bg-white/10 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-md absolute top-full left-0 right-0 shadow-lg">
            <ul className="flex flex-col gap-2 p-4 text-lg font-medium">
              <li>
                <Link 
                  href="/" 
                  onClick={() => setMenuOpen(false)} 
                  className="block px-4 py-2 rounded-md hover:bg-white/20 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  onClick={() => setMenuOpen(false)} 
                  className="block px-4 py-2 rounded-md hover:bg-white/20 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/portfolio" 
                  onClick={() => setMenuOpen(false)} 
                  className="block px-4 py-2 rounded-md hover:bg-white/20 transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  onClick={() => setMenuOpen(false)} 
                  className="block px-4 py-2 rounded-md hover:bg-white/20 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
