
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import {
  aboutUsLinks,
  messageLinks,
  schoolLinks,
  achievementsLinks,
  galleryLinks,
  publicationsLinks,
  alumniLinks,
  jobsLinks,
  contactLinks,
  downloadsLinks,
  NavSection
} from './NavigationLinks';

interface MobileNavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  if (!isMenuOpen) return null;

  // Create a component for mobile dropdown section
  const MobileDropdownSection = ({ section }: { section: NavSection }) => (
    <li>
      <details className="group">
        <summary className="flex cursor-pointer items-center justify-between text-stjohns-navy font-medium hover:text-stjohns-gold transition-colors duration-200">
          {section.title}
          <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
        </summary>
        <ul className="mt-2 space-y-2 pl-4 border-l border-gray-100">
          {section.links.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="block text-gray-600 hover:text-stjohns-gold transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </details>
    </li>
  );

  const allSections = [
    { title: 'About Us', links: aboutUsLinks },
    { title: 'Message', links: messageLinks },
    { title: 'School', links: schoolLinks },
    { title: 'Achievements', links: achievementsLinks },
    { title: 'Gallery', links: galleryLinks },
    { title: 'Publications', links: publicationsLinks },
    { title: 'Alumni', links: alumniLinks },
    { title: 'Job Opportunities', links: jobsLinks },
    { title: 'Contact Us', links: contactLinks },
    { title: 'Downloads', links: downloadsLinks }
  ];

  return (
    <nav className="lg:hidden bg-white border-t border-gray-100 py-4 max-h-[85vh] overflow-y-auto">
      <div className="container-custom">
        <ul className="space-y-4">
          {/* Home Link */}
          <li>
            <Link
              to="/"
              className="block text-stjohns-navy hover:text-stjohns-gold transition-colors duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          
          {/* Map through all sections */}
          {allSections.map((section) => (
            <MobileDropdownSection key={section.title} section={section} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavigation;
