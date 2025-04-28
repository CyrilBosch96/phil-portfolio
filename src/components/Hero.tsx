import React from 'react';
import Image from 'next/image';
import bannerImage from '@/app/Banner bg.png'; // Import the new banner image

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen w-screen relative overflow-hidden bg-background flex items-center justify-center" // Added flex centering
    >
      {/* Removed the empty div causing extra space */}
      <Image
        src={bannerImage} // Use the new banner image
        alt="Hero Banner Background" // Updated alt text
        layout="fill" // Fills the parent container
        objectFit="cover" // Cover the container, cropping if needed
        objectPosition="center" // Centers the image within its box
        className="rounded-md" // Optional: keep rounded corners if desired
        priority // Load the image eagerly as it's above the fold
      />
    </section>
  );
};

export default Hero;
