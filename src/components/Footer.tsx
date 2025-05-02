
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Book, 
  Users, 
  School, 
  Award, 
  Calendar, 
  Mail, 
  Phone, 
  MapPin,
  BookOpen,
  MapIcon,
  User,
  Activity,
  Shield,
  MessageSquare
} from 'lucide-react';

const Footer = () => {
  // Quick links for the footer
  const quickLinks = [
    { 
      name: "Kids' Corner", 
      path: "/kids-corner", 
      icon: <Book className="h-4 w-4" /> 
    },
    { 
      name: "Campus Tour", 
      path: "/campus-tour", 
      icon: <MapIcon className="h-4 w-4" /> 
    },
    { 
      name: "Assemblies", 
      path: "/assemblies", 
      icon: <Users className="h-4 w-4" /> 
    },
    { 
      name: "Sports", 
      path: "/sports", 
      icon: <Activity className="h-4 w-4" /> 
    },
    { 
      name: "e-Care", 
      path: "/e-care", 
      icon: <Mail className="h-4 w-4" /> 
    },
    { 
      name: "Community Services", 
      path: "/community", 
      icon: <Users className="h-4 w-4" /> 
    },
    { 
      name: "Activities", 
      path: "/activities", 
      icon: <Calendar className="h-4 w-4" /> 
    },
    { 
      name: "Child Safety Committee", 
      path: "/child-safety", 
      icon: <Shield className="h-4 w-4" /> 
    },
    { 
      name: "Grievance Redressal", 
      path: "/grievance", 
      icon: <MessageSquare className="h-4 w-4" /> 
    },
  ];

  // Split links into two columns
  const firstColumnLinks = quickLinks.slice(0, Math.ceil(quickLinks.length / 2));
  const secondColumnLinks = quickLinks.slice(Math.ceil(quickLinks.length / 2));

  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* School Information */}
          <div className="md:col-span-1">
            <div className="flex flex-col items-center md:items-start">
              <img 
                src="https://raw.githubusercontent.com/stjohnsiteproject/johns-legacy-homepage-remastered/main/public/images/logo.png" 
                alt="St. John's High School Crest" 
                className="h-16 mb-3"
              />
              <h4 className="text-lg font-bold text-stjohns-navy mb-2 font-playfair">St. John's High School</h4>
              <p className="text-sm text-gray-600 mb-2">Pro Deo et Patria</p>
              <p className="text-sm text-gray-600">For God and Country</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-1">
            <h5 className="text-stjohns-navy font-bold mb-4 font-playfair border-b border-stjohns-gold pb-2">Contact Us</h5>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-stjohns-navy mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-600">Sector 26, Chandigarh, 160019, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-stjohns-navy mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-600">+91-172-2792577, 2791652</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-stjohns-navy mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-600">stjohnschandigarh@yahoo.com</span>
              </li>
            </ul>
          </div>

          {/* Quick Links - First Column */}
          <div className="md:col-span-1">
            <h5 className="text-stjohns-navy font-bold mb-4 font-playfair border-b border-stjohns-gold pb-2">Quick Links</h5>
            <ul className="space-y-2">
              {firstColumnLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="flex items-center text-sm text-gray-600 hover:text-stjohns-gold transition-colors"
                  >
                    <span className="bg-stjohns-navy/10 rounded-full p-1.5 mr-2">
                      {link.icon}
                    </span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links - Second Column */}
          <div className="md:col-span-1">
            <h5 className="text-stjohns-navy font-bold mb-4 font-playfair border-b border-stjohns-gold pb-2 md:opacity-0">Quick Links</h5>
            <ul className="space-y-2">
              {secondColumnLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="flex items-center text-sm text-gray-600 hover:text-stjohns-gold transition-colors"
                  >
                    <span className="bg-stjohns-navy/10 rounded-full p-1.5 mr-2">
                      {link.icon}
                    </span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            © 2025 St. John's High School, Chandigarh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
