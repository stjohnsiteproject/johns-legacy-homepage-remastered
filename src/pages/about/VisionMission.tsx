
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const VisionMission = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <PageHero 
          title="Vision and Mission" 
          backgroundImage="/images/100.jpg"
          subtitle="Pro Deo et Patria — For God and Country"
        />

        {/* Content Section */}
        <div className="container-custom py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vision Section */}
            <Card className="shadow-lg">
              <CardContent className="p-6 md:p-10">
                <h2 className="text-2xl font-serif font-bold text-stjohns-navy mb-6 pb-2 border-b-2 border-stjohns-gold">
                  Our Vision
                </h2>
                
                <div className="prose lg:prose-lg max-w-none">
                  <p className="mb-6 text-lg font-medium text-center italic">
                    "To create compassionate leaders of tomorrow rooted in integrity, justice, and excellence."
                  </p>
                  
                  <p className="mb-4">
                    At St. John's High School, we aspire to be a center of academic excellence and holistic education, where students are nurtured to become:
                  </p>
                  
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Compassionate leaders with a strong moral compass</li>
                    <li>Critical thinkers equipped to face the challenges of tomorrow</li>
                    <li>Confident individuals who value their heritage while embracing progress</li>
                    <li>Responsible citizens who contribute positively to society</li>
                  </ul>
                  
                  <p>
                    We envision a learning community where diverse talents are recognized, developed, and celebrated in an atmosphere of mutual respect and collaboration.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Mission Section */}
            <Card className="shadow-lg">
              <CardContent className="p-6 md:p-10">
                <h2 className="text-2xl font-serif font-bold text-stjohns-navy mb-6 pb-2 border-b-2 border-stjohns-gold">
                  Our Mission
                </h2>
                
                <div className="prose lg:prose-lg max-w-none">
                  <p className="mb-4">
                    The mission of St. John's High School is to provide a comprehensive, value-based education that develops the whole person. We are committed to:
                  </p>
                  
                  <ul className="list-disc pl-5 space-y-3 mb-4">
                    <li className="font-medium">To promote academic excellence through innovative teaching and rigorous standards</li>
                    <li className="font-medium">To instill moral and ethical values through faith-based education</li>
                    <li className="font-medium">To nurture creativity, confidence, and resilience</li>
                    <li className="font-medium">To foster social responsibility and community outreach</li>
                    <li className="font-medium">To embrace diversity and cultivate global citizenship</li>
                  </ul>
                  
                  <Separator className="my-6 bg-stjohns-gold h-0.5 max-w-[150px] mx-auto" />
                  
                  <p className="text-center italic">
                    The school's motto, "Pro Deo et Patria", encapsulates our commitment to both God and Country.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Core Values Section */}
          <Card className="shadow-lg mt-8">
            <CardContent className="p-6 md:p-10">
              <h2 className="text-2xl font-serif font-bold text-stjohns-navy mb-6 pb-2 border-b-2 border-stjohns-gold">
                Our Core Values
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 text-center">
                  <h3 className="text-xl font-semibold text-stjohns-navy mb-3">Excellence</h3>
                  <p className="text-gray-700">Striving for the highest standards in all endeavors, academic and beyond.</p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 text-center">
                  <h3 className="text-xl font-semibold text-stjohns-navy mb-3">Faith</h3>
                  <p className="text-gray-700">Nurturing spiritual growth and moral values that guide ethical decisions and actions.</p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 text-center">
                  <h3 className="text-xl font-semibold text-stjohns-navy mb-3">Integrity</h3>
                  <p className="text-gray-700">Upholding honesty, transparency, and consistency in words and actions.</p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 text-center">
                  <h3 className="text-xl font-semibold text-stjohns-navy mb-3">Compassion</h3>
                  <p className="text-gray-700">Developing empathy and a genuine concern for the well-being of others.</p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 text-center">
                  <h3 className="text-xl font-semibold text-stjohns-navy mb-3">Leadership</h3>
                  <p className="text-gray-700">Fostering the courage to stand up for what is right and guide others with wisdom.</p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 text-center">
                  <h3 className="text-xl font-semibold text-stjohns-navy mb-3">Service</h3>
                  <p className="text-gray-700">Promoting a spirit of selflessness and commitment to the welfare of society.</p>
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

export default VisionMission;
