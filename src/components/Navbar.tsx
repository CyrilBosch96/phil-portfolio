'use client';
 
 import React from 'react';
 import {Linkedin, Twitter} from 'lucide-react';
 import Link from 'next/link';
 
 const Navbar = () => {
   return (
    <nav className="navbar sticky top-0 bg-background z-10">
      <div className="nav-container">
        <div className="nav-brand">
          <Link href="/">Philip Clements Samuelraj</Link>
        </div>
        <div className="nav-links">
          <Link href="/techjays-overview">Techjays Overview</Link>
          <Link href="/investment-portfolio">Investment Portfolio</Link>
          <Link href="/media">Media Mentions</Link>
          <Link href="/hobbies">Hobbies</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="social-links">
          <a href="#"><Linkedin /></a>
          <a href="#"><Twitter /></a>
        </div>
      </div>
    </nav>
  );
};
 
 export default Navbar;
