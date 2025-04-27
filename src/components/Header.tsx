
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Admissions and Fee Structure', path: '/admissions' },
  { name: 'Achievements', path: '/achievements' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact Us', path: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-3">
        <div className="flex items-center justify-between">
          {/* Logo and School Name */}
          <div className="flex items-center">
            <img 
              src="https://raw.githubusercontent.com/dhruvrakesh/johns-legacy-homepage/main/public/images/stjohns-crest.png" 
              alt="St. John's High School Crest" 
              className="h-14 md:h-16"
            />
            <div className="ml-3 md:ml-4">
              <h1 className="text-stjohns-navy text-lg md:text-xl font-bold leading-tight">
                St. John's High School
                <span className="block text-sm font-normal">Chandigarh</span>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-stjohns-navy hover:text-stjohns-gold transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

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
      {isMenuOpen && (
        <nav className="lg:hidden bg-white border-t border-gray-100 py-4">
          <div className="container-custom">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="block text-stjohns-navy hover:text-stjohns-gold transition-colors duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
