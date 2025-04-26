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
          style={{ objectFit: 'cover', objectPosition: 'center' }} // Use object-fit: cover to zoom and crop, center the image
          priority // Added priority for LCP image
          // Removed fixed width/height and className="rounded-md object-cover"
          // The parent div handles the layout, and 'fill' + 'object-fit' handles the image rendering.
        />
      </div>
      {/* Optional: Add overlay or text content here if needed later */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Philip Clements Samuelraj</h1>
      </div> */}
    </section>
  );
};

export default Hero;
