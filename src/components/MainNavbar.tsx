import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';
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

  // About Us dropdown items
  const aboutUsLinks = [{
    name: 'School',
    path: '/about/school'
  }, {
    name: 'Brief History',
    path: '/about/history'
  }, {
    name: 'Our Founder\'s Life',
    path: '/about/founder'
  }, {
    name: 'Vision and Mission',
    path: '/about/vision-mission'
  }, {
    name: 'Our Ethos',
    path: '/about/ethos'
  }, {
    name: 'The Spirit of St. John\'s',
    path: '/about/spirit'
  }, {
    name: 'School Anthem',
    path: '/about/anthem'
  }, {
    name: 'School Information',
    path: '/about/information'
  }, {
    name: 'Child Safety in St. John\'s',
    path: '/about/child-safety'
  }, {
    name: 'Route Plan of School Buses',
    path: '/about/route-plan'
  }, {
    name: 'Facilities',
    path: '/about/facilities'
  }, {
    name: 'Transaction Listing',
    path: '/about/transactions'
  }, {
    name: 'Ex-Principals',
    path: '/about/ex-principals'
  }, {
    name: 'Faculty',
    path: '/about/faculty'
  }, {
    name: 'PTA',
    path: '/about/pta'
  }];

  // Message dropdown items
  const messageLinks = [{
    name: 'Principal\'s Message',
    path: '/message/principal'
  }, {
    name: 'Headmistress\'s Message',
    path: '/message/headmistress'
  }, {
    name: 'President of School Council Message',
    path: '/message/president'
  }];

  // School dropdown items
  const schoolLinks = [{
    name: 'Activity Calendar',
    path: '/school/calendar'
  }, {
    name: 'Diary Material',
    path: '/school/diary'
  }, {
    name: 'Curriculum',
    path: '/school/curriculum'
  }, {
    name: 'Administrative Info',
    path: '/school/admin-info'
  }, {
    name: 'Exam Schedule',
    path: '/school/exams'
  }, {
    name: 'Uniform',
    path: '/school/uniform'
  }, {
    name: 'Booklist',
    path: '/school/booklist'
  }];

  // Achievements dropdown items
  const achievementsLinks = [{
    name: 'Achievements',
    path: '/achievements'
  }, {
    name: 'Academic Achievements',
    path: '/achievements/academic'
  }, {
    name: 'Sports Achievements',
    path: '/achievements/sports'
  }, {
    name: 'CBSE Class X',
    path: '/achievements/cbse-x'
  }, {
    name: 'CBSE Class XII',
    path: '/achievements/cbse-xii'
  }];

  // Gallery dropdown items
  const galleryLinks = [{
    name: 'Photo Gallery',
    path: '/gallery/photos'
  }, {
    name: 'Assemblies',
    path: '/gallery/assemblies'
  }, {
    name: 'Activities',
    path: '/gallery/activities'
  }, {
    name: 'Media Gallery',
    path: '/gallery/media'
  }, {
    name: 'Vocational Activity',
    path: '/gallery/vocational'
  }, {
    name: 'Sports Activity',
    path: '/gallery/sports'
  }, {
    name: 'Community Service / Outreach',
    path: '/gallery/community'
  }];

  // Publications dropdown items
  const publicationsLinks = [{
    name: 'School Magazine',
    path: '/publications/magazine'
  }, {
    name: 'The Justice Newsdesk',
    path: '/publications/newsdesk'
  }, {
    name: 'Newsletter',
    path: '/publications/newsletter'
  }];

  // Alumni dropdown items
  const alumniLinks = [{
    name: 'SJOBA',
    path: '/alumni/sjoba'
  }];

  // Job Opportunities dropdown items
  const jobsLinks = [{
    name: 'Advertisement',
    path: '/jobs/advertisement'
  }, {
    name: 'Expectation of Teacher',
    path: '/jobs/expectations'
  }];

  // Contact Us dropdown items
  const contactLinks = [{
    name: 'Mail Us',
    path: '/contact/mail'
  }, {
    name: 'Join Us',
    path: '/contact/join'
  }, {
    name: 'Guest Book',
    path: '/contact/guest-book'
  }];

  // Downloads dropdown items
  const downloadsLinks = [{
    name: 'Forms',
    path: '/downloads/forms'
  }, {
    name: 'Circulars',
    path: '/downloads/circulars'
  }];
  return <header className={`bg-white shadow-sm sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo and School Name */}
          <div className="flex items-center">
            <img src="https://raw.githubusercontent.com/stjohnsiteproject/johns-legacy-homepage-remastered/main/public/images/logo.png" alt="St. John's High School Crest" className={`transition-all duration-300 ${scrolled ? 'h-12' : 'h-16'}`} />
            <div className="ml-3 md:ml-4">
              <h1 className="text-left">
                St. John's High School
                <span className="block text-sm font-normal">Chandigarh</span>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-0.5">
                {/* Home Link */}
                <NavigationMenuItem>
                  <Link to="/" className="it is coming on the school logo and name">
                    Home
                  </Link>
                </NavigationMenuItem>

                {/* About Us Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid grid-cols-2 gap-3 p-4 w-[500px]">
                      {aboutUsLinks.map(link => <li key={link.path} className="row-span-1">
                          <Link to={link.path} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">{link.name}</div>
                          </Link>
                        </li>)}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Message Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Message</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {messageLinks.map(link => <li key={link.path} className="row-span-1">
                          <Link to={link.path} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">{link.name}</div>
                          </Link>
                        </li>)}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* School Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>School</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {schoolLinks.map(link => <li key={link.path} className="row-span-1">
                          <Link to={link.path} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">{link.name}</div>
                          </Link>
                        </li>)}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Achievements Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Achievements</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {achievementsLinks.map(link => <li key={link.path} className="row-span-1">
                          <Link to={link.path} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">{link.name}</div>
                          </Link>
                        </li>)}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Gallery Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Gallery</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {galleryLinks.map(link => <li key={link.path} className="row-span-1">
                          <Link to={link.path} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">{link.name}</div>
                          </Link>
                        </li>)}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Publications Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Publications</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {publicationsLinks.map(link => <li key={link.path} className="row-span-1">
                          <Link to={link.path} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">{link.name}</div>
                          </Link>
                        </li>)}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Alumni Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Alumni</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {alumniLinks.map(link => <li key={link.path} className="row-span-1">
                          <Link to={link.path} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">{link.name}</div>
                          </Link>
                        </li>)}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Job Opportunities Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Job Opportunities</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {jobsLinks.map(link => <li key={link.path} className="row-span-1">
                          <Link to={link.path} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">{link.name}</div>
                          </Link>
                        </li>)}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Contact Us Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Contact Us</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {contactLinks.map(link => <li key={link.path} className="row-span-1">
                          <Link to={link.path} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">{link.name}</div>
                          </Link>
                        </li>)}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Downloads Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Downloads</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {downloadsLinks.map(link => <li key={link.path} className="row-span-1">
                          <Link to={link.path} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">{link.name}</div>
                          </Link>
                        </li>)}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-stjohns-navy" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && <nav className="lg:hidden bg-white border-t border-gray-100 py-4 max-h-[85vh] overflow-y-auto">
          <div className="container-custom">
            <ul className="space-y-4">
              {/* Home Link */}
              <li>
                <Link to="/" className="block text-stjohns-navy hover:text-stjohns-gold transition-colors duration-200 font-medium" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
              </li>
              
              {/* About Us Section with nested links */}
              <li>
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between text-stjohns-navy font-medium hover:text-stjohns-gold transition-colors duration-200">
                    About Us
                    <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                  </summary>
                  <ul className="mt-2 space-y-2 pl-4 border-l border-gray-100">
                    {aboutUsLinks.map(link => <li key={link.path}>
                        <Link to={link.path} className="block text-gray-600 hover:text-stjohns-gold transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                          {link.name}
                        </Link>
                      </li>)}
                  </ul>
                </details>
              </li>
              
              {/* Message Section with nested links */}
              <li>
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between text-stjohns-navy font-medium hover:text-stjohns-gold transition-colors duration-200">
                    Message
                    <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                  </summary>
                  <ul className="mt-2 space-y-2 pl-4 border-l border-gray-100">
                    {messageLinks.map(link => <li key={link.path}>
                        <Link to={link.path} className="block text-gray-600 hover:text-stjohns-gold transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                          {link.name}
                        </Link>
                      </li>)}
                  </ul>
                </details>
              </li>
              
              {/* School Section with nested links */}
              <li>
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between text-stjohns-navy font-medium hover:text-stjohns-gold transition-colors duration-200">
                    School
                    <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                  </summary>
                  <ul className="mt-2 space-y-2 pl-4 border-l border-gray-100">
                    {schoolLinks.map(link => <li key={link.path}>
                        <Link to={link.path} className="block text-gray-600 hover:text-stjohns-gold transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                          {link.name}
                        </Link>
                      </li>)}
                  </ul>
                </details>
              </li>
              
              {/* Achievements Section with nested links */}
              <li>
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between text-stjohns-navy font-medium hover:text-stjohns-gold transition-colors duration-200">
                    Achievements
                    <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                  </summary>
                  <ul className="mt-2 space-y-2 pl-4 border-l border-gray-100">
                    {achievementsLinks.map(link => <li key={link.path}>
                        <Link to={link.path} className="block text-gray-600 hover:text-stjohns-gold transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                          {link.name}
                        </Link>
                      </li>)}
                  </ul>
                </details>
              </li>
              
              {/* Gallery Section with nested links */}
              <li>
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between text-stjohns-navy font-medium hover:text-stjohns-gold transition-colors duration-200">
                    Gallery
                    <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                  </summary>
                  <ul className="mt-2 space-y-2 pl-4 border-l border-gray-100">
                    {galleryLinks.map(link => <li key={link.path}>
                        <Link to={link.path} className="block text-gray-600 hover:text-stjohns-gold transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                          {link.name}
                        </Link>
                      </li>)}
                  </ul>
                </details>
              </li>
              
              {/* Publications Section with nested links */}
              <li>
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between text-stjohns-navy font-medium hover:text-stjohns-gold transition-colors duration-200">
                    Publications
                    <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                  </summary>
                  <ul className="mt-2 space-y-2 pl-4 border-l border-gray-100">
                    {publicationsLinks.map(link => <li key={link.path}>
                        <Link to={link.path} className="block text-gray-600 hover:text-stjohns-gold transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                          {link.name}
                        </Link>
                      </li>)}
                  </ul>
                </details>
              </li>
              
              {/* Alumni Section with nested links */}
              <li>
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between text-stjohns-navy font-medium hover:text-stjohns-gold transition-colors duration-200">
                    Alumni
                    <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                  </summary>
                  <ul className="mt-2 space-y-2 pl-4 border-l border-gray-100">
                    {alumniLinks.map(link => <li key={link.path}>
                        <Link to={link.path} className="block text-gray-600 hover:text-stjohns-gold transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                          {link.name}
                        </Link>
                      </li>)}
                  </ul>
                </details>
              </li>
              
              {/* Job Opportunities Section with nested links */}
              <li>
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between text-stjohns-navy font-medium hover:text-stjohns-gold transition-colors duration-200">
                    Job Opportunities
                    <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                  </summary>
                  <ul className="mt-2 space-y-2 pl-4 border-l border-gray-100">
                    {jobsLinks.map(link => <li key={link.path}>
                        <Link to={link.path} className="block text-gray-600 hover:text-stjohns-gold transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                          {link.name}
                        </Link>
                      </li>)}
                  </ul>
                </details>
              </li>
              
              {/* Contact Us Section with nested links */}
              <li>
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between text-stjohns-navy font-medium hover:text-stjohns-gold transition-colors duration-200">
                    Contact Us
                    <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                  </summary>
                  <ul className="mt-2 space-y-2 pl-4 border-l border-gray-100">
                    {contactLinks.map(link => <li key={link.path}>
                        <Link to={link.path} className="block text-gray-600 hover:text-stjohns-gold transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                          {link.name}
                        </Link>
                      </li>)}
                  </ul>
                </details>
              </li>
              
              {/* Downloads Section with nested links */}
              <li>
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between text-stjohns-navy font-medium hover:text-stjohns-gold transition-colors duration-200">
                    Downloads
                    <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                  </summary>
                  <ul className="mt-2 space-y-2 pl-4 border-l border-gray-100">
                    {downloadsLinks.map(link => <li key={link.path}>
                        <Link to={link.path} className="block text-gray-600 hover:text-stjohns-gold transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                          {link.name}
                        </Link>
                      </li>)}
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </nav>}
    </header>;
};
export default MainNavbar;