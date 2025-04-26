import React from 'react';
import Image from 'next/image';
import philImage from '@/app/PHILS.png';

const Hero = () => {
  return (
    <section id="hero" className="h-screen w-screen relative overflow-hidden bg-background">
      {/* Container div to control image positioning and size */}
      <div className="absolute inset-0">
        <Image
          src={philImage}
          alt="Philip Clements Samuelraj"
          fill // Use fill to make the image expand to the container
          className="object-cover object-center" // Use Tailwind classes for fitting and positioning
          priority // Added priority for LCP image
        />
      </div>
    </section>
  );
};

export default Hero;
