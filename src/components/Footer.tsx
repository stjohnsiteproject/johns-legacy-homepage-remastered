
import React from 'react';

const Footer = () => {
  return (
    <footer className="relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://raw.githubusercontent.com/dhruvrakesh/johns-legacy-homepage/main/public/images/100.jpg" 
          alt="St. John's High School Campus" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stjohns-navy/80"></div>
      </div>
      
      {/* Footer Content */}
      <div className="relative py-16 px-4 text-center text-white">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-playfair mb-8">
            Building Character. Inspiring Excellence.
          </h2>
          
          <div className="mt-10 pt-8 border-t border-white/20 text-sm opacity-80">
            <p>© 2025 St. John's High School, Chandigarh. All Rights Reserved.</p>
            <p className="mt-2">
              Designed & Maintained by <a href="#" className="underline hover:text-stjohns-gold">Franciscan Solutions</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
