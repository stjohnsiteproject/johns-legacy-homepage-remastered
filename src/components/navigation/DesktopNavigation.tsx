
import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';
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
  downloadsLinks
} from './NavigationLinks';

const DesktopNavigation: React.FC = () => {
  return (
    <nav className="hidden lg:block">
      <NavigationMenu>
        <NavigationMenuList className="gap-0.5">
          {/* Home Link */}
          <NavigationMenuItem>
            <Link to="/" className={navigationMenuTriggerStyle()}>
              Home
            </Link>
          </NavigationMenuItem>

          {/* About Us Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid grid-cols-2 gap-3 p-4 w-[500px]">
                {aboutUsLinks.map((link) => (
                  <li key={link.path} className="row-span-1">
                    <Link
                      to={link.path}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">{link.name}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Message Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Message</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4">
                {messageLinks.map((link) => (
                  <li key={link.path} className="row-span-1">
                    <Link
                      to={link.path}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">{link.name}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* School Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>School</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4">
                {schoolLinks.map((link) => (
                  <li key={link.path} className="row-span-1">
                    <Link
                      to={link.path}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">{link.name}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Achievements Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Achievements</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4">
                {achievementsLinks.map((link) => (
                  <li key={link.path} className="row-span-1">
                    <Link
                      to={link.path}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">{link.name}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Gallery Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Gallery</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4">
                {galleryLinks.map((link) => (
                  <li key={link.path} className="row-span-1">
                    <Link
                      to={link.path}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">{link.name}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Publications Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Publications</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4">
                {publicationsLinks.map((link) => (
                  <li key={link.path} className="row-span-1">
                    <Link
                      to={link.path}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">{link.name}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Alumni Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Alumni</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4">
                {alumniLinks.map((link) => (
                  <li key={link.path} className="row-span-1">
                    <Link
                      to={link.path}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">{link.name}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Job Opportunities Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Job Opportunities</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4">
                {jobsLinks.map((link) => (
                  <li key={link.path} className="row-span-1">
                    <Link
                      to={link.path}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">{link.name}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Contact Us Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Contact Us</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4">
                {contactLinks.map((link) => (
                  <li key={link.path} className="row-span-1">
                    <Link
                      to={link.path}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">{link.name}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Downloads Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Downloads</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4">
                {downloadsLinks.map((link) => (
                  <li key={link.path} className="row-span-1">
                    <Link
                      to={link.path}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">{link.name}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default DesktopNavigation;
