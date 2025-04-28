
'use client';

import TechjaysOverview from '@/components/TechjaysOverview';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import AroundImage from './Around.png';

export default function TechjaysOverviewPage() {
  return (
    <>
      <Navbar />
       <div className="flex justify-center my-8"> {/* Added container to center the image */}
         <Image
            src={AroundImage}
            alt="Techjays Overview"
            width={960} // Reduced width by 20% (1200 * 0.8)
            height={640} // Reduced height by 20% (800 * 0.8)
            // Removed inline style for max-width to allow centering
            className="rounded-md object-cover" // Removed mx-auto as the parent div handles centering
          />
       </div>
       <TechjaysOverview />
    </>
  );
}
