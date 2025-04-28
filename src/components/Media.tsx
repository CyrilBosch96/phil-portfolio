
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'; // Assuming you have Card components

const Media = () => {
  const articles = [
    {
      title: 'Digital Digest: Boldly Building with AI',
      // link: '#', // Add link if available
    },
    {
      title: 'Bold Journey: Meet Philip Samuelraj',
      // link: '#',
    },
    {
      title: 'Medium: Empowering People and Innovating Software Services',
      // link: '#',
    },
    {
      title: 'TopFirms: Interview With The Founder & Chief helper of Techjays – Philip Samuelraj',
      // link: '#',
    },
  ];

  return (
    <section id="media" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-8 text-center dark-charcoal">Media Mentions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="bg-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold mb-2 dark-charcoal">{article.title}</CardTitle>
                {/* Optional: Add description or link preview if needed */}
                {/* <CardDescription>
                  <a href={article.link} target="_blank" rel="noopener noreferrer" className="teal-accent hover:underline">
                    Read More
                  </a>
                </CardDescription> */}
              </CardHeader>
            </Card>
          ))}
        </div>
        {/* Removed podcast section as per previous instructions */}
      </div>
    </section>
  );
};

export default Media;
