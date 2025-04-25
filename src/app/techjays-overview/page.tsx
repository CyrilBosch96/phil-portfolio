'use client';

import TechjaysOverview from '@/components/TechjaysOverview';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import AroundImage from './Around.png';

export default function TechjaysOverviewPage() {
  return (
    <>
      <Navbar />
      <TechjaysOverview />
       <Image
          src={AroundImage}
          alt="Techjays Overview"
          width={1200}
          height={800}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
          className="rounded-md object-cover"
        />
    </>
  );
}

