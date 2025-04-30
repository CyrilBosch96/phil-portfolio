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
      <div className="absolute inset-0 z-20 flex flex-col justify-end items-center">
        <div className="relative w-full max-w-[1400px] mx-auto flex justify-center">
          {/* Enhanced responsive sizing for Philip's image with better viewport adaptations */}
          <div className="relative w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[45%] 2xl:w-[40%] h-[65vh] sm:h-[70vh] md:h-[75vh] lg:h-[80vh] xl:h-[85vh]">
            <Image
              src={philImage}
              alt="Philip Clements Samuelraj"
              fill
              sizes="(max-width: 640px) 80vw, (max-width: 768px) 70vw, (max-width: 1024px) 60vw, (max-width: 1280px) 50vw, (max-width: 1536px) 45vw, 40vw"
              style={{
                objectFit: 'contain',
                objectPosition: 'center bottom',
                maxHeight: '90vh',
              }}
              className="pointer-events-none select-none"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
