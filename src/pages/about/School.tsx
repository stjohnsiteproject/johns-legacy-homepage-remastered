
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const School = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <PageHero 
          title="School" 
          backgroundImage="/images/about-us22.png"
          altText="St. John's High School Campus"
        />

        {/* Content Section */}
        <div className="container-custom py-12 md:py-16">
          <Card className="shadow-lg">
            <CardContent className="p-6 md:p-10">
              <div className="prose lg:prose-lg max-w-none text-justify">
                <p className="mb-6 text-lg">
                  St. John's High School, Chandigarh, was established in 1959 by the Congregation of Christian Brothers. 
                  Named after Saint John Baptist de La Salle, the school has grown into one of the most respected educational 
                  institutions in North India. The school is committed to imparting not only academic excellence but also a 
                  strong moral foundation, fostering leadership and compassion.
                </p>
                
                <Separator className="my-8 bg-stjohns-gold h-0.5 w-1/4 mx-auto" />
                
                <p className="mb-6 text-lg">
                  The motto 'Pro Deo et Patria' — For God and Country — inspires students to serve both spiritual and national ideals. 
                  The institution nurtures character, discipline, and responsibility, equipping students with the confidence and 
                  skills to thrive in a globalized world.
                </p>
                
                <Separator className="my-8 bg-stjohns-gold h-0.5 w-1/4 mx-auto" />
                
                <p className="text-lg">
                  Over the decades, the school has earned recognition for its progressive curriculum, accomplished alumni, 
                  and active engagement in the community. It emphasizes holistic development through academics, sports, 
                  cultural programs, and social service.
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

export default School;
