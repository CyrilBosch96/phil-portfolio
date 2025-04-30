import React from 'react';
import Image from 'next/image';

const InvestmentPortfolio = () => {
  return (
    <section id="investment-portfolio" className="py-16 light-gray-section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-6">Investment Portfolio</h2>
        <p className="mb-4 dark-charcoal">
          Our investment philosophy focuses on supporting innovative companies across diverse sectors.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="mb-4 relative h-[200px] w-full">
              <Image 
                src="/Company1.png" 
                alt="Aervivo Logo" 
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 dark-charcoal">Aervivo</h3>
            <p className="text-gray-700 dark-charcoal">
              Aervivo's platform enables our partners to rapidly provide fiber-grade connectivity experiences at a fraction of the cost of fiber.
            </p>
            <div className="mt-4">
              <a 
                href="https://www.techjays.com/case-studies/qa-case-study-aervivo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="mb-4 relative h-[200px] w-full">
              <Image 
                src="/Company 2.png" 
                alt="Bracketology Logo" 
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 dark-charcoal">Bracketology</h3>
            <p className="text-gray-700 dark-charcoal">
              Bracketology offers dynamic fantasy gaming for reality television shows in one centralized location.
            </p>
            <div className="mt-4">
              <a 
                href="https://www.techjays.com/case-studies/bracketology" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="mb-4 relative h-[200px] w-full">
              <Image 
                src="/Company3.png" 
                alt="PepCare Logo" 
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 dark-charcoal">PepCare</h3>
            <p className="text-gray-700 dark-charcoal">
              Built a web HIPPA-compliant platform to streamline scheduling, referral, and consultation services for dental practitioners.
            </p>
            <div className="mt-4">
              <a 
                href="https://www.techjays.com/case-studies/pepcare" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="mb-4 relative h-[200px] w-full">
              <Image 
                src="/Company4.png" 
                alt="Hawx Logo" 
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 dark-charcoal">Hawx</h3>
            <p className="text-gray-700 dark-charcoal">
              Our pros created a fully-integrated and user-friendly platform for pest control booking via desktop, mobile, and tablet.
            </p>
            <div className="mt-4">
              <a 
                href="https://www.techjays.com/case-studies/hawx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPortfolio;
