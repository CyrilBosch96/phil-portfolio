import React from 'react';
import Image from 'next/image';
import bannerImage from '@/app/Banner bg.png'; // Import the banner image
import philImage from '@/app/Phil transparent.png'; // Import the Phil transparent image

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen w-screen relative overflow-hidden bg-background flex items-center justify-center"
      style={{ paddingTop: 0, paddingBottom: 0 }} // Remove padding
    >
      {/* Background Image */}
      <Image
        src={bannerImage}
        alt="Hero Banner Background"
        layout="fill"
        objectFit="cover" // Changed from contain to cover
        objectPosition="center"
        className="absolute inset-0 z-0" // Ensure it's the background
        priority
      />

      {/* Foreground Image Container - Changed items-center to items-end */}
      <div className="absolute inset-0 flex items-end justify-center z-10"> {/* Container for foreground image, aligned to bottom */}
        <Image
          src={philImage}
          alt="Philip Clements Samuelraj"
          width={681} // Increased width by 15% (592 * 1.15)
          height={681} // Increased height by 15% (592 * 1.15)
          className="object-contain" // Use contain to show the full image without cropping
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
