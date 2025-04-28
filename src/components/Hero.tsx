import React from 'react';
import Image from 'next/image';
import philImage from '@/app/PHILS.png';

const Hero = () => {
  return (
    <section id="hero" className="h-screen w-screen relative flex items-center justify-center overflow-hidden bg-background p-4">
      {/* Container to control max size and center the image */}
      <div className="relative w-full max-w-6xl"> {/* Increased max-width from 5xl to 6xl */}
        <Image
          src={philImage}
          alt="Philip Clements Samuelraj"
          width={1600} // Original or desired aspect ratio width
          height={900} // Original or desired aspect ratio height
          layout="responsive" // Makes the image scale with the container width
          className="object-cover rounded-md" // Use object-cover to fill container, potentially cropping
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
