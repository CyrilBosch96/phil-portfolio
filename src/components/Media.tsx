
import React from 'react';
import Image from 'next/image'; // Import the Image component
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'; // Import CardFooter and CardDescription

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
      description: 'In Conversation: Philip Clements Samuelraj on Boldly Building with AI',
    },
    {
      title: 'Bold Journey: Meet Philip Samuelraj',
      link: 'https://boldjourney.com/meet-philip-samuelraj/',
      image: boldJourneyImage,
      alt: 'Bold Journey Article Cover',
      description: 'Meet Philip Samuelraj',
    },
    {
      title: 'Medium: Empowering People and Innovating Software Services',
      link: 'https://medium.com/strtupboost/philip-samuelrajs-vision-empowering-people-and-innovating-software-services-593cab150352',
      image: mediumImage,
      alt: 'Medium Article Cover',
      description: 'Philip Samuelraj’s Vision: Empowering People and Innovating Software Services', // Added description
    },
    {
      title: 'TopFirms: Interview With The Founder & Chief helper of Techjays – Philip Samuelraj',
      link: 'https://topfirms.co/interview/founder-of-techjays',
      image: topFirmImage,
      alt: 'TopFirms Interview Cover',
      description: 'The Topfirms team had the privilege of interviewing Philip Samuelraj, the Founder of Techjays. It was a rewarding experience marked by excellent collaboration and insightful guidance on emerging trends.' // Added description for TopFirms article
    },
  ];

  return (
    <section id="media" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-12 text-center text-foreground">
          Media Mentions
        </h2>
        {/* Changed from grid to flex column layout */}
        <div className="flex flex-col items-center gap-10">
          {articles.map((article, index) => (
            <Card key={index} className="w-full max-w-3xl overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col group border border-border"> {/* Changed max-w-2xl to max-w-3xl */}
              {/* Image Container */}
              {article.image && (
                <div className="relative w-full h-60 overflow-hidden border-b border-border rounded-t-lg"> {/* Added border-b */}
                  <Image
                    src={article.image}
                    alt={article.alt || article.title}
                    layout="fill" // Fill the container
                    objectFit="cover" // Crop the image to cover the container
                    className="transition-transform duration-300 group-hover:scale-105 border border-border" // Added border for stroke
                  />
                </div>
              )}
              {/* Content Container */}
              <CardHeader className="p-6 flex-grow"> {/* Use padding and make it grow */}
                <CardTitle className="text-xl font-semibold mb-2 text-foreground leading-snug"> {/* Adjusted leading */}
                  {article.title} {/* Removed the link wrapper */}
                </CardTitle>
                 {article.description && (
                   <CardDescription className="text-muted-foreground">
                     {article.description}
                   </CardDescription>
                 )}
              </CardHeader>
              {/* Footer with Read More link */}
              {article.link && (
                <CardFooter className="p-6 pt-0 mt-auto"> {/* Added pt-0 and mt-auto */}
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline transition-colors duration-200 font-medium"
                  >
                    Read More...
                  </a>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Media;
