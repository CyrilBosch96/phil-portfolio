
import Hero from '@/components/Hero';
import About from '@/components/About';
import TechjaysOverview from '@/components/TechjaysOverview';
import InvestmentPortfolio from '@/components/InvestmentPortfolio';
import Media from '@/components/Media';
import Hobbies from '@/components/Hobbies';
import Contact from '@/components/Contact';
import {Toaster} from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TechjaysOverview />
      <InvestmentPortfolio />
      <Media />
      <Hobbies />
      <Contact />
      <Toaster />
    </>
  );
}

