import React from 'react';
import Image from 'next/image';
import bannerImage from '@/app/Banner bg.png'; // Import the banner image
import philImage from '@/app/Phil transparent.png'; // Import the Phil transparent image

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
          src={bannerImage}
          alt="Hero Banner Background"
          fill
          sizes="100vw"
          quality={90}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          style={{
            objectFit: 'cover',
            objectPosition: 'center 40%',
          }}
          priority
        />
      </div>

      {/* Dark overlay to ensure text visibility */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Content container with Philip's image - optimized for different screen sizes */}
      <div className="absolute inset-x-0 bottom-0 z-20 flex justify-center items-end">
        <div className="relative w-full max-w-[1200px] flex justify-center">
          {/* Responsive sizing for Philip's image */}
          <div className="relative w-[75%] md:w-[60%] lg:w-[50%] xl:w-[45%] h-auto min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh]">
            <Image
              src={philImage}
              alt="Philip Clements Samuelraj"
              fill
              sizes="(max-width: 640px) 75vw, (max-width: 768px) 60vw, (max-width: 1024px) 50vw, 45vw"
              style={{
                objectFit: 'contain',
                objectPosition: 'center bottom',
              }}
              className="pointer-events-none select-none"
              priority
            />
          </div>
        </div>
      </div>

      {/* Name title - positioned at top of screen */}
      <div className="absolute inset-x-0 top-0 z-20 pt-24 sm:pt-32 md:pt-40">
        <h1 className="text-center text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold px-4 tracking-wide drop-shadow-lg">
          Philip Clements Samuelraj
        </h1>
      </div>
    </section>
  );
};

export default Hero;
