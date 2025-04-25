
import React from 'react';

const Hobbies = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Personal Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2">Travel</h3>
            <p className="text-gray-700">Exploring new cultures and destinations.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2">Reading</h3>
            <p className="text-gray-700">
              Enjoying a wide range of books and literature.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2">Sports</h3>
            <p className="text-gray-700">Passionate about sports and fitness.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
