'use client';

 import React from 'react';
 import Link from 'next/link';

 const Navbar = () => {
   return (
    <nav className="navbar sticky top-0 bg-background z-10">
      <div className="nav-container">
        <div className="nav-brand">
           {/* Link the brand name to the homepage */}
           {/* Increased font size and changed font */}
           <Link href="/" className="text-foreground font-serif text-xl font-semibold">
             Philip Clements Samuelraj
           </Link>
        </div>
        <div className="nav-links">
           <Link href="/techjays-overview" className="text-foreground hover:text-primary">Techjays Overview</Link>
           <Link href="/investment-portfolio" className="text-foreground hover:text-primary">Investment Portfolio</Link>
           <Link href="/media" className="text-foreground hover:text-primary">Media Mentions</Link>
           <Link href="/hobbies" className="text-foreground hover:text-primary">Hobbies</Link>
           <Link href="/contact" className="text-foreground hover:text-primary">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

 export default Navbar;
