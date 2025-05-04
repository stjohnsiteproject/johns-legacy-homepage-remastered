
import React from 'react';

interface PageHeroProps {
  title: string;
  backgroundImage: string;
  altText?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, backgroundImage, altText }) => {
  return (
    <div className="relative h-[40vh] md:h-[50vh]">
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={backgroundImage} 
          alt={altText || `${title} background`} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-white animate-fade-in text-center px-4">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default PageHero;
