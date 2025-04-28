import React from 'react';
import Image from 'next/image';
import philImage from '@/app/PHILS.png';

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen w-screen relative overflow-hidden bg-background"
    >
      <Image
        src={philImage}
        alt="Philip Clements Samuelraj"
        layout="fill"
        objectFit="cover" // Ensures the image covers the section, potentially cropping
        objectPosition="center" // Centers the image within the container
        className="rounded-md" // Optional: keep rounded corners if desired
        priority // Load the image eagerly as it's above the fold
      />
      {/* Optional: Add overlay or content on top of the image here */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div> */}
      {/* <div className="relative z-20 flex items-center justify-center h-full text-white"> */}
      {/*   Content */}
      {/* </div> */}
    </section>
  );
};

export default Hero;
