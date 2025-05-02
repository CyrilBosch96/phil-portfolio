import React from 'react';
import Image from 'next/image'; // Import the Image component
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'; // Import CardFooter and CardDescription
import { Badge } from '@/components/ui/badge'; // Import Badge component
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

// Import the images
import buildWithAIImage from '@/app/Build with AI.png';
import boldJourneyImage from '@/app/Bold Journey.png'; // Import Bold Journey image
import boldJourney1Image from '@/app/Boldjourney1.png'; // Import Boldjourney1 image
import topFirmImage from '@/app/TopFirm.png'; // Import TopFirm image
import innovatingSoftwareImage from '@/app/Innovating software services.png'; // Import Innovating software services image

const Media = () => {
  const articles = [
    {
      title: 'Digital Digest: Boldly Building with AI',
      link: 'https://digitaldigest.com/techjays-ai-future-philip-clements-samuelraj/',
      image: buildWithAIImage,
      alt: 'Digital Digest Article Cover',
      description: 'In Conversation: Philip Clements Samuelraj on Boldly Building with AI',
      label: 'Article',
      imagePosition: 'center top', // Optimized position to better show the face
    },
    {
      title: 'Bold Journey: Meet Philip Samuelraj',
      link: 'https://boldjourney.com/meet-philip-samuelraj/',
      image: boldJourneyImage,
      alt: 'Bold Journey Article Cover',
      description: 'Meet Philip Samuelraj',
      label: 'Article',
      imagePosition: 'center 30%', // Optimized position to better show the face
    },
    {
      title: 'Medium: Empowering People and Innovating Software Services',
      link: 'https://medium.com/strtupboost/philip-samuelrajs-vision-empowering-people-and-innovating-software-services-593cab150352',
      image: boldJourney1Image,
      alt: 'Medium Article Cover',
      description: "Philip Samuelraj's Vision: Empowering People and Innovating Software Services",
      label: 'Article',
      imagePosition: 'center 35%', // Optimized position to better show the face
    },
    {
      title: 'TopFirms: Interview With The Founder & Chief helper of Techjays – Philip Samuelraj',
      link: 'https://topfirms.co/interview/founder-of-techjays',
      image: topFirmImage,
      alt: 'TopFirms Interview Cover',
      description: 'The Topfirms team had the privilege of interviewing Philip Samuelraj, the Founder of Techjays. It was a rewarding experience marked by excellent collaboration and insightful guidance on emerging trends.',
      label: 'Article',
      imagePosition: 'center 25%', // Optimized position to better show the face
    },
    {
      title: 'What Makes Techjays AI Products STAND OUT?',
      description: 'The Future of AI Development: Insights from Philip, Founder of Techjays',
      label: 'Interview',
      image: innovatingSoftwareImage,
      alt: 'Techjays Interview Image',
      link: 'https://www.youtube.com/watch?v=dlD9yiJs070',
      imagePosition: 'center 30%', // Optimized position to better show the face
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
            <a 
              key={index} 
              href={article.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full max-w-3xl block"
            >
              <Card className="relative w-full overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col group border border-border hover:border-primary cursor-pointer h-full">
                {/* Image Container */}
                {article.image && (
                  <div className="relative w-full h-80 overflow-hidden border-b border-border rounded-t-lg">
                    <Image
                      src={article.image}
                      alt={article.alt || article.title}
                      layout="fill"
                      objectFit="cover"
                      objectPosition={article.imagePosition || 'center'}
                      className="transition-transform duration-300 group-hover:scale-105 border border-border"
                      priority
                    />
                  </div>
                )}
                {/* Content Container */}
                <CardHeader className="p-6 flex-grow">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-semibold mb-2 text-foreground leading-snug group-hover:text-primary transition-colors duration-200">
                      {article.title}
                    </CardTitle>
                    <ExternalLink size={18} className="text-muted-foreground shrink-0 ml-2 mt-1 group-hover:text-primary transition-colors duration-200" />
                  </div>
                  {article.description && (
                    <CardDescription className="text-muted-foreground">
                      {article.description}
                    </CardDescription>
                  )}
                </CardHeader>
                
                {/* Article/Interview Badge */}
                <Badge variant="secondary" className="absolute bottom-4 right-4">
                  {article.label}
                </Badge>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Media;
