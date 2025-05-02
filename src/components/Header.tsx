
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Admissions and Fee Structure', path: '/admissions' },
  { name: 'Achievements', path: '/achievements' },
];

const Header = () => {
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
      <div className="container-custom py-0">
        <div className="flex items-center justify-between">
          {/* Logo and School Name */}
          <div className="flex items-center">
            <img 
              src="https://raw.githubusercontent.com/stjohnsiteproject/johns-legacy-homepage-remastered/main/public/images/logo.png" 
              alt="St. John's High School Crest" 
              className={`transition-all duration-300 ${scrolled ? 'h-12' : 'h-16'}`}
            />
            <div className="ml-3 md:ml-4">
              <h1 className={`text-stjohns-navy font-bold font-playfair leading-tight transition-all duration-300 ${scrolled ? 'text-lg' : 'text-xl'}`}>
                St. John's High School
                <span className="block text-sm font-normal">Chandigarh</span>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-6 items-center">
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
              
              {/* Downloads Dropdown */}
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="text-stjohns-navy hover:text-stjohns-gold transition-colors duration-200 font-medium flex items-center">
                    Downloads <ChevronDown size={16} className="ml-1" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link to="/forms" className="cursor-pointer">Forms</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/circulars" className="cursor-pointer">Circulars</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              
              {/* SJOBA External Link */}
              <li>
                <a 
                  href="https://sjoba.in" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-stjohns-navy hover:text-stjohns-gold transition-colors duration-200 font-medium"
                >
                  SJOBA
                </a>
              </li>
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
              
              {/* Downloads Section */}
              <li className="pt-2 border-t border-gray-100">
                <p className="text-sm font-medium text-gray-500 mb-2">Downloads</p>
                <ul className="pl-4 space-y-2">
                  <li>
                    <Link
                      to="/forms"
                      className="block text-stjohns-navy hover:text-stjohns-gold transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Forms
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/circulars"
                      className="block text-stjohns-navy hover:text-stjohns-gold transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Circulars
                    </Link>
                  </li>
                </ul>
              </li>
              
              {/* SJOBA External Link */}
              <li>
                <a 
                  href="https://sjoba.in" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block text-stjohns-navy hover:text-stjohns-gold transition-colors duration-200 font-medium"
                >
                  SJOBA
                </a>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
