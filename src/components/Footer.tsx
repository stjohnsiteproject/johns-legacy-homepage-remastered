
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-stjohns-navy text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src="https://raw.githubusercontent.com/stjohnsiteproject/johns-legacy-homepage-remastered/main/public/images/logo.png" 
              alt="St. John's High School Crest" 
              className="h-16 mb-4"
            />
            <h4 className="text-lg font-bold mb-2 font-playfair">St. John's High School</h4>
            <p className="text-gray-300">Sector 26, Chandigarh, India</p>
            <p className="text-gray-300">+91-172-2792577</p>
          </div>
          
          {/* Quick Links */}
          <div className="md:mx-auto">
            <h4 className="text-lg font-bold mb-4 font-playfair">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-stjohns-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/admissions" className="text-gray-300 hover:text-stjohns-gold transition-colors">Admissions</Link>
              </li>
              <li>
                <Link to="/forms" className="text-gray-300 hover:text-stjohns-gold transition-colors">Downloads</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-stjohns-gold transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Office Hours */}
          <div className="md:mx-auto">
            <h4 className="text-lg font-bold mb-4 font-playfair">Office Hours</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Monday - Friday: 8:00 AM - 2:00 PM</li>
              <li>Saturday: 8:00 AM - 12:00 Noon</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
          
          {/* External Links */}
          <div className="md:mx-auto">
            <h4 className="text-lg font-bold mb-4 font-playfair">Connect With Us</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://sjoba.in" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-stjohns-gold transition-colors">
                  SJOBA (Alumni)
                </a>
              </li>
              <li>
                <a href="https://cbse.gov.in" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-stjohns-gold transition-colors">
                  CBSE Portal
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          <p>© 2025 St. John's High School, Chandigarh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
