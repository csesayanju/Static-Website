'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/logo.jpg'; // ✅ Alias import (ensure `@` is configured or use relative path)

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <header className="bg-primary text-white fixed top-0 left-0 right-0 z-50 shadow-md transition-all">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Brand */}
        <Link
          href="/"
          className="text-2xl font-black tracking-wide flex items-center gap-2"
        >
          <span>✨</span>
          <Image
            src={Logo}
            alt="LadyWithLens Logo"
            width={32}
            height={32}
            className="object-contain"
            priority
          />
          LadyWithLens
        </Link>

        {/* Desktop Nav */}
        <nav>
          <ul className="hidden md:flex gap-6 text-lg font-medium">
            <li>
              <Link href="/" className="hover:text-pink-300 transition-all">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-pink-300 transition-all">About</Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-pink-300 transition-all">Portfolio</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-pink-300 transition-all">Contact</Link>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? '🙈' : '📸'}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary text-white w-full absolute top-full left-0 shadow-inner">
          <ul className="flex flex-col gap-4 p-4 text-lg font-medium">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-pink-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-pink-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/portfolio" onClick={() => setMenuOpen(false)} className="hover:text-pink-300">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-pink-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
