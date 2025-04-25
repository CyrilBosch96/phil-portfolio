
import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          Monica Shokrai
        </div>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Work</a>
          <a href="#">Hobbies</a>
          <a href="#">Contact</a>
        </div>
        <div className="social-links">
          <a href="#" aria-label="LinkedIn">
            <Linkedin />
          </a>
          <a href="#" aria-label="Twitter">
            <Twitter />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
