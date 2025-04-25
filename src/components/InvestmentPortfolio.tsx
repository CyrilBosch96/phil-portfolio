
import React from 'react';

const InvestmentPortfolio = () => {
  return (
    <section id="investment-portfolio" className="py-16 light-gray-section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-6">Investment Portfolio</h2>
        <p className="mb-4 dark-charcoal">
          Our investment philosophy focuses on strategic, long-term growth across diverse sectors.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2 dark-charcoal">Technology</h3>
            <p className="text-gray-700 dark-charcoal">
              Investments in cutting-edge technology companies.
            </p>
            {/* Add subtle hover effects revealing additional information */}
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2 dark-charcoal">Healthcare</h3>
            <p className="text-gray-700 dark-charcoal">
              Supporting innovative healthcare solutions.
            </p>
            {/* Add subtle hover effects revealing additional information */}
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2 dark-charcoal">Real Estate</h3>
            <p className="text-gray-700 dark-charcoal">
              Strategic investments in real estate ventures.
            </p>
            {/* Add subtle hover effects revealing additional information */}
          </div>
        </div>
        {/* Add visual representation of investment sectors here */}
        <div className="mt-6">
          <p className="text-xl font-semibold dark-charcoal">Investment Sectors Visualization</p>
          {/* Implement interactive elements showing investment philosophy */}
          <div className="h-48 bg-gray-200 rounded-lg mt-2">
            {/* Add interactive elements or chart here */}
            <p className="text-center py-20 dark-charcoal">Interactive Visualization</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPortfolio;

