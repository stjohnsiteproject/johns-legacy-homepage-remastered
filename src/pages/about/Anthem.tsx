
import React from 'react';
import MainNavbar from '@/components/MainNavbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const Anthem = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[30vh] md:h-[40vh]">
          <div className="absolute inset-0">
            <img 
              src="https://raw.githubusercontent.com/stjohnsiteproject/johns-legacy-homepage-remastered/main/public/images/100.jpg" 
              alt="St. John's High School Campus" 
              className="w-full h-full object-cover"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-playfair">
              School Anthem
            </h1>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container-custom">
            <Card className="shadow-md">
              <CardContent className="pt-6">
                <div className="prose max-w-none">
                  <h2 className="text-2xl md:text-3xl font-bold text-center text-stjohns-navy font-playfair mb-6">
                    St. John's School Anthem
                  </h2>
                  
                  <div className="flex justify-center mb-8">
                    <div className="max-w-2xl text-center">
                      <p className="italic mb-6 text-lg">
                        Through these portals of learning<br />
                        We pass each day,<br />
                        Gaining knowledge and wisdom<br />
                        Along life's way.<br />
                        John the Baptist our patron,<br />
                        To him we pray.<br />
                        For guidance and direction<br />
                        Day by day.
                      </p>

                      <p className="font-bold text-xl mb-6">
                        CHORUS
                      </p>

                      <p className="italic mb-6 text-lg">
                        Forward, onward, St. John's School<br />
                        Forever we stand,<br />
                        Facing ev'ry tomorrow<br />
                        Hand in hand.<br />
                        Climb the ladder of success,<br />
                        Stand strong and tall,<br />
                        For God and Country<br />
                        We give our all.
                      </p>

                      <p className="italic mb-6 text-lg">
                        Working, playing together<br />
                        In harmony,<br />
                        Steadfast, loyal, and true<br />
                        We strive to be.<br />
                        In knowledge and learning<br />
                        Our minds expand,<br />
                        To make a better world<br />
                        Throughout our land.
                      </p>

                      <p className="italic mb-6 text-lg">
                        (Repeat Chorus)
                      </p>

                      <div className="mt-10 p-6 bg-stjohns-navy/5 rounded-lg">
                        <p className="text-sm text-gray-600">
                          The school anthem was composed in the 1970s and embodies the core values and aspirations of St. John's High School. It is sung with pride at all important school functions and assemblies, reminding students of their heritage and calling them to excellence.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Anthem;
