
import React from 'react';
import Image from 'next/image'; // Import the Image component
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

// Import the images
import digitalDigestImage from '@/app/Digital Digest.png';
import boldJourneyImage from '@/app/Bold Journey.png'; // Import Bold Journey image
import mediumImage from '@/app/Medium.png'; // Import Medium image

const Media = () => {
  const articles = [
    {
      title: 'Digital Digest: Boldly Building with AI',
      link: 'https://digitaldigest.com/techjays-ai-future-philip-clements-samuelraj/',
      image: digitalDigestImage, // Add image reference
      alt: 'Digital Digest Article', // Add alt text
    },
    {
      title: 'Bold Journey: Meet Philip Samuelraj',
      link: 'https://boldjourney.com/meet-philip-samuelraj/',
      image: boldJourneyImage, // Add image reference
      alt: 'Bold Journey Article', // Add alt text
    },
    {
      title: 'Medium: Empowering People and Innovating Software Services',
      link: 'https://medium.com/strtupboost/philip-samuelrajs-vision-empowering-people-and-innovating-software-services-593cab150352',
      image: mediumImage, // Add image reference for Medium
      alt: 'Medium Article', // Add alt text
    },
    {
      title: 'TopFirms: Interview With The Founder & Chief helper of Techjays – Philip Samuelraj',
      link: 'https://topfirms.co/interview/founder-of-techjays', // Updated link
      // image: topFirmsImage, // Add image reference if available
      alt: 'TopFirms Interview', // Add alt text
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
                {/* Conditionally render the image if it exists */}
                {article.image && (
                  <Image
                    src={article.image}
                    alt={article.alt || article.title} // Use provided alt text or title
                    width={400} // Example width
                    height={200} // Example height
                    className="mb-4 rounded-md object-cover"
                  />
                )}
                <CardTitle className="text-xl font-semibold mb-2 dark-charcoal">
                  {article.link ? (
                    <a href={article.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {article.title}
                    </a>
                  ) : (
                    article.title
                  )}
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Media;
