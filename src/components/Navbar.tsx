'use client';

 import React from 'react';
 import {Linkedin, Twitter} from 'lucide-react';
 import Link from 'next/link';

 const Navbar = () => {
   return (
    <nav className="navbar sticky top-0 bg-background z-10">
      <div className="nav-container">
        <div className="nav-brand">
           <Link href="/" className="text-black font-semibold">Philip Clements Samuelraj</Link>
        </div>
        <div className="nav-links">
           <Link href="/techjays-overview" className="text-black">Techjays Overview</Link>
           <Link href="/investment-portfolio" className="text-black">Investment Portfolio</Link>
           <Link href="/media" className="text-black">Media Mentions</Link>
           <Link href="/hobbies" className="text-black">Hobbies</Link>
           <Link href="/contact" className="text-black">Contact</Link>
        </div>
        <div className="social-links">
           <a href="https://www.linkedin.com/in/philipclementssamuelraj/" target="_blank" rel="noopener noreferrer" className="text-black"><Linkedin /></a>
           <a href="#" className="text-black"><Twitter /></a>
        </div>
      </div>
    </nav>
  );
};

 export default Navbar;