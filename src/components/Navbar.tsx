'use client';

import React from 'react';
import {Linkedin, Twitter} from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <a href="#hero">Philip Clements Samuelraj</a>
        </div>
        <div className="nav-links">
          <a href="#techjays-overview">Techjays Overview</a>
          <a href="#investment-portfolio">Investment Portfolio</a>
          <a href="#media">Media</a>
          <a href="#hobbies">Hobbies</a>
          <a href="#contact">Contact</a>
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
