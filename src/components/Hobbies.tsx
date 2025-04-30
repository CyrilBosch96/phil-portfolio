import React from 'react';

const Hobbies = () => {
  return (
    <section id="hobbies" className="py-16 light-gray-section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-6">Personal Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2 dark-charcoal">Travel</h3>
            {/* Replace with a photo gallery */}
            <div className="h-32 bg-gray-200 rounded-lg mb-2">
              {/* Add travel photo gallery here */}
              <p className="text-center py-12 dark-charcoal">Travel Photo Gallery</p>
            </div>
            <p className="text-gray-700 dark-charcoal">
              Philip is an enthusiastic traveler who sees every journey as an opportunity to learn, connect, and grow. He loves exploring new cultures, cuisines, and landscapes, finding inspiration in the stories of people and places along the way. Whether it's a spontaneous road trip or a carefully planned international adventure, travel fuels his curiosity and broadens his perspective on the world.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2 dark-charcoal">Reading</h3>
            {/* Replace with book cover designs */}
            <div className="h-32 bg-gray-200 rounded-lg mb-2">
              {/* Add reading recommendations here */}
              <p className="text-center py-12 dark-charcoal">Reading Recommendations</p>
            </div>
            <p className="text-gray-700 dark-charcoal">
              Philip is an avid reader who enjoys exploring new ideas and perspectives through books. Some personal recommendations include "Wild Courage" by Jenny Wood and "Show Your Work" by Austin Kleon - both have significantly influenced his approach to leadership and creativity.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2 dark-charcoal">Sports</h3>
            {/* Replace with a visual representation of sports interests */}
            <div className="h-32 bg-gray-200 rounded-lg mb-2">
              {/* Add sports interests visualization here */}
              <p className="text-center py-12 dark-charcoal">Sports Interests Visualization</p>
            </div>
            <p className="text-gray-700 dark-charcoal">
              Philip is a passionate cricket enthusiast who finds joy in both the strategy and spirit of the game. He draws inspiration from legendary matches and iconic players, and enjoys both playing and watching cricket whenever he can. His love for sports extends beyond the pitch—he's also an avid follower of the NFL and NBA, appreciating the intensity, athleticism, and storytelling that define each league.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;

