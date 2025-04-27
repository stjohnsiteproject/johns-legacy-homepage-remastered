
import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[60vh] md:h-[70vh] lg:h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://raw.githubusercontent.com/dhruvrakesh/johns-legacy-homepage/main/public/images/about-us22.png" 
          alt="St. John's High School Campus" 
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-stjohns-navy/50"></div>
      </div>
      
      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
        <div className="animate-fade-in">
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            Welcome to St. John's High School, Chandigarh
          </h1>
          <p className="text-white text-lg md:text-xl italic font-playfair">
            For God and Country – Excellence Since 1959
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
