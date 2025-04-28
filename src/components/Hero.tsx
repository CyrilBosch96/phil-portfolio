import React from 'react';
import Image from 'next/image';
import philImage from '@/app/PHILS.png';

const Hero = () => {
  return (
    <section id="hero" className="h-screen w-screen relative flex items-center justify-center overflow-hidden bg-background">
      {/* Container takes full width/height of the section */}
      <div className="relative w-full h-full">
        <Image
          src={philImage}
          alt="Philip Clements Samuelraj"
          layout="fill" // Use layout="fill" to cover the container
          objectFit="cover" // Use objectFit="cover" to maintain aspect ratio and cover
          className="rounded-md" // Optional: keep rounded corners if desired
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
