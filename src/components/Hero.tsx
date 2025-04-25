import React from 'react';
import Image from 'next/image';
import philImage from '@/app/PHILS.png';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <Image
          src={philImage}
          alt="Philip Clements Samuelraj"
          width={1200}
          height={800}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
          className="rounded-md object-cover"
        />
        {/* Add subtle background animation or gradient here */}
      </div>
    </section>
  );
};

export default Hero;
