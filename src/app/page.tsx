'use client';

import Hero from '@/components/Hero';
import {Toaster} from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    // Added id="home-page-wrapper"
    <div id="home-page-wrapper" className="flex flex-col h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
      </main>
      <Toaster />
    </div>
  );
}
