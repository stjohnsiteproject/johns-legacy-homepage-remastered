
import React, { ReactNode } from 'react';

interface PageHeroProps {
  title: string;
  backgroundImage: string;
  altText?: string;
  subtitle?: string;
  icon?: ReactNode;
}

const PageHero: React.FC<PageHeroProps> = ({ title, backgroundImage, altText, subtitle, icon }) => {
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
      
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="flex items-center gap-3">
          {icon && <div className="text-white text-3xl">{icon}</div>}
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white animate-fade-in text-center px-4">
            {title}
          </h1>
        </div>
        {subtitle && (
          <p className="text-lg md:text-xl text-white mt-4 animate-fade-in opacity-90 text-center px-4">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHero;
