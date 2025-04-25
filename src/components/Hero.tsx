
import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="font-serif text-5xl font-bold mb-4">
          Philip Clements Samuelraj
        </h1>
        <p className="text-xl dark-charcoal">
          CEO & visionary leader with a passion for transforming ideas into impactful businesses
        </p>
        {/* Add subtle background animation or gradient here */}
      </div>
    </section>
  );
};

export default Hero;

