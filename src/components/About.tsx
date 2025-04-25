
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 light-gray-section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-6">About Philip</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4 dark-charcoal">
              A highly accomplished CEO, investor, and technology leader, Philip
              Clements Samuelraj has consistently demonstrated a remarkable ability
              to transform innovative ideas into thriving businesses. With a keen eye
              for identifying opportunities and a passion for driving growth, he has
              established himself as a visionary in the industry.
            </p>
            <p className="mb-4 dark-charcoal">
              Throughout his career, Philip has been instrumental in leading numerous
              successful ventures, leveraging his expertise in technology and
              business strategy to create impactful solutions. His commitment to
              excellence and dedication to fostering a culture of innovation have
              earned him widespread recognition and respect.
            </p>
            <p className="mb-4 dark-charcoal">
              More background story and vision details can be added here.
            </p>
            {/* Animated statistics about career accomplishments */}
            <div className="mt-6">
              <p className="text-xl font-semibold dark-charcoal">Career Highlights</p>
              <ul className="list-disc pl-5 dark-charcoal">
                <li>Transformed X number of ideas into businesses</li>
                <li>Led Y number of successful ventures</li>
                {/* Add more animated statistics as needed */}
              </ul>
            </div>
          </div>
          <div>
            <img
              src="https://picsum.photos/500/300"
              alt="Philip Clements Samuelraj"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

