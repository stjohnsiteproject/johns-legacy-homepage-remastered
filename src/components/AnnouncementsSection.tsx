
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const AnnouncementsSection = () => {
  const announcements = [
    {
      id: 1,
      date: '20 March, 2025',
      title: 'Admissions Open 2025',
      excerpt: 'Applications now being accepted for the new academic session 2025-26.'
    },
    {
      id: 2,
      date: '15 April, 2025',
      title: 'Annual Sports Day',
      excerpt: 'Annual Sports Day to be held on April 30, 2025. All parents are cordially invited.'
    },
    {
      id: 3,
      date: '5 May, 2025',
      title: 'Parent-Teacher Meeting',
      excerpt: 'PTM for all classes will be held on May 15, 2025, from 9 AM to 12 PM.'
    },
    {
      id: 4,
      date: '1 June, 2025',
      title: 'Summer Vacation',
      excerpt: 'Summer vacation begins June 15 and school reopens on July 1, 2025.'
    },
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-stjohns-navy mb-10 font-playfair">Latest Announcements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {announcements.map(item => (
            <Card 
              key={item.id} 
              className="border-none hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="bg-stjohns-navy/10 pb-3">
                <div className="text-stjohns-gold text-sm font-medium">{item.date}</div>
                <h3 className="text-xl font-bold text-stjohns-navy">{item.title}</h3>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <Link 
                  to="/news" 
                  className="text-stjohns-navy hover:text-stjohns-gold font-medium inline-flex items-center text-sm"
                >
                  Read More <ArrowRight size={16} className="ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;
