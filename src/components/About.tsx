
import React from 'react';

const About = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">About Philip</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">
              A highly accomplished CEO, investor, and technology leader, Philip
              Clements Samuelraj has consistently demonstrated a remarkable ability
              to transform innovative ideas into thriving businesses. With a keen eye
              for identifying opportunities and a passion for driving growth, he has
              established himself as a visionary in the industry.
            </p>
            <p className="mb-4">
              Throughout his career, Philip has been instrumental in leading numerous
              successful ventures, leveraging his expertise in technology and
              business strategy to create impactful solutions. His commitment to
              excellence and dedication to fostering a culture of innovation have
              earned him widespread recognition and respect.
            </p>
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
