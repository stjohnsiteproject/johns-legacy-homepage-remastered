
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import DesktopNavigation from './navigation/DesktopNavigation';
import MobileNavigation from './navigation/MobileNavigation';

const MainNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`bg-white shadow-sm sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo and School Name - Updated layout */}
          <div className="flex items-center gap-3 md:gap-4">
            <img 
              src="https://raw.githubusercontent.com/stjohnsiteproject/johns-legacy-homepage-remastered/main/public/images/logo.png" 
              alt="St. John's High School Crest" 
              className={`transition-all duration-300 ${scrolled ? 'h-12' : 'h-16'}`}
            />
            <div>
              <h1 className={`text-stjohns-navy font-bold font-playfair leading-tight transition-all duration-300 ${scrolled ? 'text-lg' : 'text-xl'}`}>
                St. John's High School Chandigarh
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <DesktopNavigation />

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-stjohns-navy" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNavigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
};

export default MainNavbar;
