import React from 'react';
import Image from 'next/image';
import bannerImage from '@/app/Banner bg.png'; // Import the banner image
import philImage from '@/app/Phil transparent.png'; // Import the Phil transparent image

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen w-screen relative overflow-hidden bg-background flex items-center justify-center"
    >
      {/* Background Image */}
      <Image
        src={bannerImage}
        alt="Hero Banner Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="absolute inset-0 z-0" // Ensure it's the background
        priority
      />

      {/* Foreground Image */}
      <div className="absolute inset-0 flex items-center justify-center z-10"> {/* Container for foreground image */}
        <Image
          src={philImage}
          alt="Philip Clements Samuelraj"
          width={500} // Adjust width as needed
          height={500} // Adjust height as needed
          className="object-contain" // Use contain to show the full image without cropping
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
