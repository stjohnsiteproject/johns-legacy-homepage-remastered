
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Music } from 'lucide-react';

const Anthem = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <PageHero 
          title="School Anthem" 
          backgroundImage="/images/about-us22.png"
          altText="St. John's High School Anthem"
          icon={<Music className="h-8 w-8" />}
        />

        {/* Content Section */}
        <div className="container-custom py-12 md:py-16">
          <Card className="shadow-lg">
            <CardContent className="pt-6">
              <div className="prose max-w-none">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-stjohns-navy font-serif mb-6">
                  St. John's School Anthem
                </h2>
                
                <p className="text-center mb-6">
                  St. John's High School proudly sings its anthem, a reflection of loyalty, discipline, and the spirit of service.
                </p>
                
                <div className="flex justify-center mb-8">
                  <Button className="bg-stjohns-navy hover:bg-stjohns-navy/90 flex items-center gap-2">
                    <Music className="h-4 w-4" />
                    <span>Play Anthem</span>
                  </Button>
                </div>
                
                <div className="max-w-2xl mx-auto text-center">
                  <blockquote className="italic border-l-4 border-stjohns-gold pl-4 py-2 mb-6">
                    Through these portals of learning<br />
                    We pass each day,<br />
                    Gaining knowledge and wisdom<br />
                    Along life's way.<br />
                    John the Baptist our patron,<br />
                    To him we pray.<br />
                    For guidance and direction<br />
                    Day by day.
                  </blockquote>

                  <p className="font-bold text-xl mb-6">
                    CHORUS
                  </p>

                  <blockquote className="italic border-l-4 border-stjohns-gold pl-4 py-2 mb-6">
                    Forward, onward, St. John's School<br />
                    Forever we stand,<br />
                    Facing ev'ry tomorrow<br />
                    Hand in hand.<br />
                    Climb the ladder of success,<br />
                    Stand strong and tall,<br />
                    For God and Country<br />
                    We give our all.
                  </blockquote>

                  <blockquote className="italic border-l-4 border-stjohns-gold pl-4 py-2 mb-6">
                    Working, playing together<br />
                    In harmony,<br />
                    Steadfast, loyal, and true<br />
                    We strive to be.<br />
                    In knowledge and learning<br />
                    Our minds expand,<br />
                    To make a better world<br />
                    Throughout our land.
                  </blockquote>

                  <p className="italic mb-6">
                    (Repeat Chorus)
                  </p>

                  <div className="mt-10 p-6 bg-stjohns-navy/5 rounded-lg">
                    <p className="text-sm text-gray-600">
                      The school anthem was composed in the 1970s and embodies the core values and aspirations of St. John's High School. It is sung with pride at all important school functions and assemblies, reminding students of their heritage and calling them to excellence.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Anthem;
