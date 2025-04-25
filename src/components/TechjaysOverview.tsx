
import React from 'react';

const TechjaysOverview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-6">Techjays Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2 dark-charcoal">150+ Projects</h3>
            <p className="text-gray-700 dark-charcoal">Successfully delivered projects.</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2 dark-charcoal">65+ Clients</h3>
            <p className="text-gray-700 dark-charcoal">Satisfied clients served.</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2 dark-charcoal">Industry Coverage</h3>
            <p className="text-gray-700 dark-charcoal">
              Wide-ranging expertise across diverse industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechjaysOverview;
