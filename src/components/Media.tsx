
import React from 'react';
import Image from 'next/image'; // Import the Image component
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

// Import the images
import digitalDigestImage from '@/app/Digital Digest.png';
import boldJourneyImage from '@/app/Bold Journey.png'; // Import Bold Journey image
import mediumImage from '@/app/Medium.png'; // Import Medium image
import topFirmImage from '@/app/TopFirm.png'; // Import TopFirm image

const Media = () => {
  const articles = [
    {
      title: 'Digital Digest: Boldly Building with AI',
      link: 'https://digitaldigest.com/techjays-ai-future-philip-clements-samuelraj/',
      image: digitalDigestImage,
      alt: 'Digital Digest Article Cover',
    },
    {
      title: 'Bold Journey: Meet Philip Samuelraj',
      link: 'https://boldjourney.com/meet-philip-samuelraj/',
      image: boldJourneyImage,
      alt: 'Bold Journey Article Cover',
    },
    {
      title: 'Medium: Empowering People and Innovating Software Services',
      link: 'https://medium.com/strtupboost/philip-samuelrajs-vision-empowering-people-and-innovating-software-services-593cab150352',
      image: mediumImage,
      alt: 'Medium Article Cover',
    },
    {
      title: 'TopFirms: Interview With The Founder & Chief helper of Techjays – Philip Samuelraj',
      link: 'https://topfirms.co/interview/founder-of-techjays',
      image: topFirmImage,
      alt: 'TopFirms Interview Cover',
    },
  ];

  return (
    <section id="media" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-12 text-center text-foreground">
          Media Mentions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10"> {/* Increased gap */}
          {articles.map((article, index) => (
            <Card key={index} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              {/* Image Container */}
              {article.image && (
                <div className="relative w-full h-60 overflow-hidden"> {/* Fixed height container */}
                  <Image
                    src={article.image}
                    alt={article.alt || article.title}
                    layout="fill" // Fill the container
                    objectFit="cover" // Crop the image to cover the container
                    className="transition-transform duration-300 group-hover:scale-105" // Slight zoom on hover
                  />
                </div>
              )}
              {/* Content Container */}
              <CardHeader className="p-6 flex-grow"> {/* Use padding and make it grow */}
                <CardTitle className="text-xl font-semibold mb-2 text-foreground leading-snug"> {/* Adjusted leading */}
                  {article.link ? (
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary hover:underline transition-colors duration-200"
                    >
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
