'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link href="/" className="text-foreground font-serif text-lg sm:text-xl md:text-2xl font-semibold">
            Philip Clements Samuelraj
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link href="/techjays-overview" className="nav-link">Techjays Overview</Link>
            <Link href="/investment-portfolio" className="nav-link">Investment Portfolio</Link>
            <Link href="/media" className="nav-link">Media Mentions</Link>
            <Link href="/hobbies" className="nav-link">Hobbies</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </div>

          {/* Mobile Burger Button */}
          <button 
            className="md:hidden w-10 h-10 flex items-center justify-center focus:outline-none"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <Menu className={`w-6 h-6 transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
            <X className={`w-6 h-6 absolute transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      >
        <div 
          className={`absolute top-0 right-0 w-64 h-full bg-background shadow-lg transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col p-6 space-y-6">
            <Link 
              href="/techjays-overview" 
              className="mobile-link"
              onClick={toggleMenu}
            >
              Techjays Overview
            </Link>
            <Link 
              href="/investment-portfolio" 
              className="mobile-link"
              onClick={toggleMenu}
            >
              Investment Portfolio
            </Link>
            <Link 
              href="/media" 
              className="mobile-link"
              onClick={toggleMenu}
            >
              Media Mentions
            </Link>
            <Link 
              href="/hobbies" 
              className="mobile-link"
              onClick={toggleMenu}
            >
              Hobbies
            </Link>
            <Link 
              href="/contact" 
              className="mobile-link"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
