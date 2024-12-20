'use client';

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isButtonClicked, setButtonClicked] = useState(false); // New state for button toggle

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setButtonClicked(!isButtonClicked); // Toggle button state on click
  };

  return (
    <header className="bg-primary text-white fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Brand/Logo */}
        <h1 className="text-xl font-bold">LadyWithLens</h1>

        {/* Navigation Menu */}
        <nav>
          <ul className="hidden md:flex gap-6 text-lg">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:underline">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Menu */}
          <button
            className="md:hidden"
            onClick={toggleMenu} // Use the toggleMenu function to control both states
            aria-label="Toggle Menu"
          >
            {isButtonClicked ? '✖️' : '☰'} {/* Change the button text on toggle */}
          </button>
        </nav>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary text-white w-full absolute top-full left-0">
          <ul className="flex flex-col gap-4 p-4 text-lg">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)} className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/portfolio" onClick={() => setMenuOpen(false)} className="hover:underline">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:underline">
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
