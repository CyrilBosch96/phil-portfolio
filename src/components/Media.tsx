
import React from 'react';

const Media = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Media Mentions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2">Featured Article</h3>
            <p className="text-gray-700">
              Article featuring Philip Clements Samuelraj in a leading magazine.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2">Podcast Appearance</h3>
            <p className="text-gray-700">
              Podcast appearance discussing technology trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;
