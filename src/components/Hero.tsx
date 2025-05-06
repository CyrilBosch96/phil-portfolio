import React from 'react';
import Image from 'next/image';
import homepageImage from '@/app/Homepage.png'; // Import the homepage image

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen w-screen relative overflow-hidden bg-background"
      style={{ paddingTop: 0, paddingBottom: 0 }} // Remove padding
    >
      {/* Background Image with better positioning */}
      <div className="absolute inset-0 z-0">
        <Image
          src={homepageImage}
          alt="Hero Background"
          fill
          sizes="100vw"
          quality={90}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          priority
        />
      </div>

      {/* Removed dark overlay to make image brighter */}
    </section>
  );
};

export default Hero;
