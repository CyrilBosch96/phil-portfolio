'use client';
 
 import React from 'react';
 import {Linkedin, Twitter} from 'lucide-react';
 import Link from 'next/link';
 
 const Navbar = () => {
   return (
    <nav className="navbar sticky top-0 bg-background z-10">
      <div className="nav-container">
        <div className="nav-brand">
          <Link href="/" className="dark-charcoal">Philip Clements Samuelraj</Link>
        </div>
        <div className="nav-links">
          <Link href="/techjays-overview" className="dark-charcoal">Techjays Overview</Link>
          <Link href="/investment-portfolio" className="dark-charcoal">Investment Portfolio</Link>
          <Link href="/media" className="dark-charcoal">Media Mentions</Link>
          <Link href="/hobbies" className="dark-charcoal">Hobbies</Link>
          <Link href="/contact" className="dark-charcoal">Contact</Link>
        </div>
        <div className="social-links">
          <a href="#" className="dark-charcoal"><Linkedin /></a>
          <a href="#" className="dark-charcoal"><Twitter /></a>
        </div>
      </div>
    </nav>
  );
};
 
 export default Navbar;
