
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[70vh] md:h-[80vh] lg:h-screen">
      {/* Background Image with Zoom Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://raw.githubusercontent.com/stjohnsiteproject/johns-legacy-homepage-remastered/main/public/images/100.jpg" 
          alt="St. John's High School Campus" 
          className="w-full h-full object-cover transform scale-[1.02] animate-[pan_20s_ease-in-out_infinite_alternate]"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
      </div>
      
      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
        <div className="animate-fade-in max-w-4xl mx-auto">
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair">
            Welcome to St. John's High School, Chandigarh
          </h1>
          <p className="text-white text-lg md:text-xl italic font-playfair mb-8">
            For God and Country – Excellence Since 1959
          </p>
          <Link 
            to="#about-us" 
            className="inline-flex items-center bg-stjohns-gold text-white px-6 py-3 rounded hover:bg-opacity-90 transition-colors duration-200"
          >
            Explore St. John's <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
