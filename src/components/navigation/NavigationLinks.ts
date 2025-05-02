
// Navigation link interfaces
export interface NavLink {
  name: string;
  path: string;
}

export interface NavSection {
  title: string;
  links: NavLink[];
}

// About Us dropdown items
export const aboutUsLinks: NavLink[] = [
  { name: 'School', path: '/about/school' },
  { name: 'Brief History', path: '/about/history' },
  { name: 'Our Founder\'s Life', path: '/about/founder' },
  { name: 'Vision and Mission', path: '/about/vision-mission' },
  { name: 'Our Ethos', path: '/about/ethos' },
  { name: 'The Spirit of St. John\'s', path: '/about/spirit' },
  { name: 'School Anthem', path: '/about/anthem' },
  { name: 'School Information', path: '/about/information' },
  { name: 'Child Safety in St. John\'s', path: '/about/child-safety' },
  { name: 'Route Plan of School Buses', path: '/about/route-plan' },
  { name: 'Facilities', path: '/about/facilities' },
  { name: 'Transaction Listing', path: '/about/transactions' },
  { name: 'Ex-Principals', path: '/about/ex-principals' },
  { name: 'Faculty', path: '/about/faculty' },
  { name: 'PTA', path: '/about/pta' },
];

// Message dropdown items
export const messageLinks: NavLink[] = [
  { name: 'Principal\'s Message', path: '/message/principal' },
  { name: 'Headmistress\'s Message', path: '/message/headmistress' },
  { name: 'President of School Council Message', path: '/message/president' },
];

// School dropdown items
export const schoolLinks: NavLink[] = [
  { name: 'Activity Calendar', path: '/school/calendar' },
  { name: 'Diary Material', path: '/school/diary' },
  { name: 'Curriculum', path: '/school/curriculum' },
  { name: 'Administrative Info', path: '/school/admin-info' },
  { name: 'Exam Schedule', path: '/school/exams' },
  { name: 'Uniform', path: '/school/uniform' },
  { name: 'Booklist', path: '/school/booklist' },
];

// Achievements dropdown items
export const achievementsLinks: NavLink[] = [
  { name: 'Achievements', path: '/achievements' },
  { name: 'Academic Achievements', path: '/achievements/academic' },
  { name: 'Sports Achievements', path: '/achievements/sports' },
  { name: 'CBSE Class X', path: '/achievements/cbse-x' },
  { name: 'CBSE Class XII', path: '/achievements/cbse-xii' },
];

// Gallery dropdown items
export const galleryLinks: NavLink[] = [
  { name: 'Photo Gallery', path: '/gallery/photos' },
  { name: 'Assemblies', path: '/gallery/assemblies' },
  { name: 'Activities', path: '/gallery/activities' },
  { name: 'Media Gallery', path: '/gallery/media' },
  { name: 'Vocational Activity', path: '/gallery/vocational' },
  { name: 'Sports Activity', path: '/gallery/sports' },
  { name: 'Community Service / Outreach', path: '/gallery/community' },
];

// Publications dropdown items
export const publicationsLinks: NavLink[] = [
  { name: 'School Magazine', path: '/publications/magazine' },
  { name: 'The Justice Newsdesk', path: '/publications/newsdesk' },
  { name: 'Newsletter', path: '/publications/newsletter' },
];

// Alumni dropdown items
export const alumniLinks: NavLink[] = [
  { name: 'SJOBA', path: '/alumni/sjoba' },
];

// Job Opportunities dropdown items
export const jobsLinks: NavLink[] = [
  { name: 'Advertisement', path: '/jobs/advertisement' },
  { name: 'Expectation of Teacher', path: '/jobs/expectations' },
];

// Contact Us dropdown items
export const contactLinks: NavLink[] = [
  { name: 'Mail Us', path: '/contact/mail' },
  { name: 'Join Us', path: '/contact/join' },
  { name: 'Guest Book', path: '/contact/guest-book' },
];

// Downloads dropdown items
export const downloadsLinks: NavLink[] = [
  { name: 'Forms', path: '/downloads/forms' },
  { name: 'Circulars', path: '/downloads/circulars' },
];

// All navigation sections
export const navigationSections: NavSection[] = [
  { title: 'About Us', links: aboutUsLinks },
  { title: 'Message', links: messageLinks },
  { title: 'School', links: schoolLinks },
  { title: 'Achievements', links: achievementsLinks },
  { title: 'Gallery', links: galleryLinks },
  { title: 'Publications', links: publicationsLinks },
  { title: 'Alumni', links: alumniLinks },
  { title: 'Job Opportunities', links: jobsLinks },
  { title: 'Contact Us', links: contactLinks },
  { title: 'Downloads', links: downloadsLinks },
];
