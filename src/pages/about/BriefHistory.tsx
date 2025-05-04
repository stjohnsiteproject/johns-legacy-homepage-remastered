
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const BriefHistory = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <PageHero 
          title="Brief History" 
          backgroundImage="/images/100.jpg"
          altText="St. John's High School Campus Historic View"
        />

        {/* Content Section */}
        <div className="container-custom py-12 md:py-16">
          <Card className="shadow-lg">
            <CardContent className="p-6 md:p-10">
              <div className="prose lg:prose-lg max-w-none text-justify">
                <p className="mb-6 text-lg">
                  The origin of the school traces back to the vision of the Congregation of Christian Brothers, 
                  a Roman Catholic religious teaching order founded in Ireland by Edmund Ignatius Rice in 1802. 
                  Their mission focused on educating the underprivileged and forming schools rooted in faith, 
                  discipline, and service.
                </p>
                
                <div className="my-8 flex justify-center">
                  <div className="relative w-full max-w-lg h-64 bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden">
                    <div className="text-gray-500">Historical image - Early campus view</div>
                    {/* Placeholder for historical image */}
                    {/* <img src="/images/early-campus.jpg" alt="St. John's Early Campus" className="w-full h-full object-cover" /> */}
                  </div>
                </div>
                
                <p className="mb-6 text-lg">
                  In 1959, the Brothers brought this vision to Chandigarh. St. John's High School began with 
                  a handful of students, gradually expanding its faculty, infrastructure, and community outreach. 
                  The school's growth mirrored the growth of the city itself.
                </p>
                
                <Separator className="my-8 bg-stjohns-gold h-0.5 w-1/4 mx-auto" />
                
                <p className="mb-6 text-lg">
                  The Brothers introduced innovative teaching methods, emphasized social justice, and fostered 
                  a culture of inclusion and excellence. The early years were marked by both struggle and triumph 
                  as the school laid the foundation for its current stature.
                </p>
                
                <Separator className="my-8 bg-stjohns-gold h-0.5 w-1/4 mx-auto" />
                
                <p className="text-lg">
                  Today, St. John's stands as a tribute to the enduring spirit of Christian education in India. 
                  It continues to blend modern educational techniques with timeless values, adapting to new 
                  challenges while honoring its legacy.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BriefHistory;
