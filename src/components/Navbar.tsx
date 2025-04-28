'use client';

 import React from 'react';
 import {Linkedin, Twitter, Instagram} from 'lucide-react'; // Keep imports for now if needed elsewhere, but remove links
 import Link from 'next/link';

 const Navbar = () => {
   return (
    <nav className="navbar sticky top-0 bg-background z-10">
      <div className="nav-container">
        <div className="nav-brand">
           {/* Link the brand name to the homepage */}
           <Link href="/" className="text-foreground font-semibold">Philip Clements Samuelraj</Link>
        </div>
        <div className="nav-links">
           <Link href="/techjays-overview" className="text-foreground">Techjays Overview</Link>
           <Link href="/investment-portfolio" className="text-foreground">Investment Portfolio</Link>
           <Link href="/media" className="text-foreground">Media Mentions</Link>
           <Link href="/hobbies" className="text-foreground">Hobbies</Link>
           <Link href="/contact" className="text-foreground">Contact</Link>
        </div>
        {/* Removed social links div */}
      </div>
    </nav>
  );
};

 export default Navbar;
