
import React from 'react';

const Media = () => {
  return (
    <section id="media" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-6">Media Mentions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2 dark-charcoal">Featured Article</h3>
            {/* Replace with magazine-style layout */}
            <div className="h-32 bg-gray-200 rounded-lg mb-2">
              {/* Add magazine-style article preview here */}
              <p className="text-center py-12 dark-charcoal">Magazine Article Preview</p>
            </div>
            <p className="text-gray-700 dark-charcoal">
              Article featuring Philip Clements Samuelraj in a leading magazine.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2 dark-charcoal">Podcast Appearance</h3>
            {/* Replace with audio preview options */}
            <div className="h-32 bg-gray-200 rounded-lg mb-2">
              {/* Add podcast audio preview here */}
              <p className="text-center py-12 dark-charcoal">Podcast Audio Preview</p>
            </div>
            <p className="text-gray-700 dark-charcoal">
              Podcast appearance discussing technology trends.
            </p>
          </div>
        </div>
        {/* Speaking engagements timeline removed */}
      </div>
    </section>
  );
};

export default Media;

