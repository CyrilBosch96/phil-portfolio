
import Hero from '@/components/Hero';
import {Toaster} from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Toaster />
    </>
  );
}
