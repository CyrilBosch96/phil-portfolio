
import React from 'react';

const Hobbies = () => {
  return (
    <section className="py-16 light-gray-section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-6">Personal Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2 dark-charcoal">Travel</h3>
            <p className="text-gray-700 dark-charcoal">Exploring new cultures and destinations.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2 dark-charcoal">Reading</h3>
            <p className="text-gray-700 dark-charcoal">
              Enjoying a wide range of books and literature.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2 dark-charcoal">Sports</h3>
            <p className="text-gray-700 dark-charcoal">Passionate about sports and fitness.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
