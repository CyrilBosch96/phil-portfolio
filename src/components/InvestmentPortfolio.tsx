
import React from 'react';

const InvestmentPortfolio = () => {
  return (
    <section className="py-16 light-gray-section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-6">Investment Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2 dark-charcoal">Technology</h3>
            <p className="text-gray-700 dark-charcoal">
              Investments in cutting-edge technology companies.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2 dark-charcoal">Healthcare</h3>
            <p className="text-gray-700 dark-charcoal">
              Supporting innovative healthcare solutions.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2 dark-charcoal">Real Estate</h3>
            <p className="text-gray-700 dark-charcoal">
              Strategic investments in real estate ventures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPortfolio;
