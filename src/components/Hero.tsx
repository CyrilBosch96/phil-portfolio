import React from 'react';
import Image from 'next/image';
import philImage from '@/app/PHILS.png';

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen w-screen relative overflow-hidden bg-background flex items-center justify-center" // Added flex centering
    >
      <Image
        src={philImage}
        alt="Philip Clements Samuelraj"
        layout="fill" // Fills the parent container
        objectFit="contain" // Scales down to fit within the container, showing the whole image
        objectPosition="center" // Centers the image within its box
        className="rounded-md" // Optional: keep rounded corners if desired
        priority // Load the image eagerly as it's above the fold
      />
    </section>
  );
};

export default Hero;
