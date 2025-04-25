
import React from 'react';

const TechjaysOverview = () => {
  return (
    <section id="techjays-overview" className="py-16 bg-white">
      <div className="container mx-auto px-4 dark-charcoal">
        <h2 className="text-3xl font-serif font-bold mb-6 dark-charcoal">
          Techjays Overview
        </h2>
        <p className="mb-4">
          Founded in 2020 in Menlo Park, California, Techjays is on a bold mission to build the world's best AI products, apps, and solutions.
        </p>
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
            <h3 className="text-xl font-semibold mb-2 dark-charcoal">
              Industry Coverage
            </h3>
            <p className="text-gray-700 dark-charcoal">
              Expertise is backed by partnerships with industry leaders.
            </p>
          </div>
        </div>
        {/* Company mission and vision */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2 dark-charcoal">Techjays Overview</h3>
          <p className="dark-charcoal">
            Techjays Overview Founded in 2020 in Menlo Park, California, Techjays is on a bold mission to build the world's best AI products, apps, and solutions. With over 150 projects delivered across 7 countries, they've rapidly grown to serve 65+ clients spanning 15+ verticals in just a few years. Their team of 170+ professionals specializes in Gen AI, Web & Mobile development, Edge/Cloud Computing, AI Quality Engineering, and Digital Transformation. This expertise is backed by partnerships with industry leaders like Google Cloud, AWS, and IBM, along with ISO 27001 and 9001 certifications. At Techjays, they combine cutting-edge technical capabilities with deep industry knowledge to deliver solutions that drive real business impact. Their client-centric approach and commitment to excellence have established them as trusted partners for organizations looking to harness the power of AI and digital technologies in an increasingly competitive landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechjaysOverview;
