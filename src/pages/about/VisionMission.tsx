
import React from 'react';
import MainNavbar from '@/components/MainNavbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const VisionMission = () => {
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
              Vision and Mission
            </h1>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Vision Section */}
              <Card className="shadow-md h-full">
                <CardContent className="pt-6">
                  <div className="flex flex-col h-full">
                    <h2 className="text-2xl font-bold text-stjohns-navy font-playfair mb-4 pb-2 border-b-2 border-stjohns-gold">
                      Our Vision
                    </h2>
                    
                    <div className="flex-grow">
                      <p className="mb-4">
                        St. John's High School aspires to be a center of academic excellence and holistic education, where students are nurtured to become:
                      </p>
                      
                      <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Compassionate leaders with a strong moral compass</li>
                        <li>Critical thinkers equipped to face the challenges of tomorrow</li>
                        <li>Confident individuals who value their heritage while embracing progress</li>
                        <li>Responsible citizens who contribute positively to society</li>
                      </ul>
                      
                      <p className="mb-4">
                        We envision a learning community where diverse talents are recognized, developed, and celebrated in an atmosphere of mutual respect and collaboration.
                      </p>
                      
                      <p>
                        Our vision is to create an educational institution that not only prepares students academically but also instills in them the values and skills necessary to lead meaningful lives and make significant contributions to their communities and the world.
                      </p>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                      <p className="text-stjohns-gold italic font-medium">
                        "Creating compassionate leaders for tomorrow's world"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Mission Section */}
              <Card className="shadow-md h-full">
                <CardContent className="pt-6">
                  <div className="flex flex-col h-full">
                    <h2 className="text-2xl font-bold text-stjohns-navy font-playfair mb-4 pb-2 border-b-2 border-stjohns-gold">
                      Our Mission
                    </h2>
                    
                    <div className="flex-grow">
                      <p className="mb-4">
                        The mission of St. John's High School is to provide a comprehensive, value-based education that develops the whole person – intellectually, physically, emotionally, socially, and spiritually. We are committed to:
                      </p>
                      
                      <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Maintaining academic excellence through rigorous curricula and innovative teaching methodologies</li>
                        <li>Nurturing character and leadership qualities in our students</li>
                        <li>Fostering an environment of inclusivity, respect, and understanding</li>
                        <li>Promoting social responsibility and service to the community</li>
                        <li>Instilling a lifelong love for learning and pursuit of knowledge</li>
                        <li>Honoring our heritage while preparing students for the future</li>
                        <li>Working in partnership with parents and the wider community</li>
                      </ul>
                      
                      <p>
                        We fulfill our mission by providing diverse opportunities for growth, encouraging student initiative, and supporting each student's unique journey toward personal excellence.
                      </p>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                      <p className="text-stjohns-gold italic font-medium">
                        "Pro Deo et Patria - For God and Country"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Core Values Section */}
            <div className="mt-8">
              <Card className="shadow-md">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-stjohns-navy font-playfair mb-6 pb-2 border-b-2 border-stjohns-gold">
                    Our Core Values
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 text-center">
                      <h3 className="text-xl font-semibold text-stjohns-navy mb-3">Faith</h3>
                      <p className="text-gray-700">Nurturing spiritual growth and moral values that guide ethical decisions and actions.</p>
                    </div>
                    
                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 text-center">
                      <h3 className="text-xl font-semibold text-stjohns-navy mb-3">Excellence</h3>
                      <p className="text-gray-700">Striving for the highest standards in all endeavors, academic and beyond.</p>
                    </div>
                    
                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 text-center">
                      <h3 className="text-xl font-semibold text-stjohns-navy mb-3">Service</h3>
                      <p className="text-gray-700">Developing a spirit of selflessness and commitment to the welfare of others.</p>
                    </div>
                    
                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 text-center">
                      <h3 className="text-xl font-semibold text-stjohns-navy mb-3">Integrity</h3>
                      <p className="text-gray-700">Upholding honesty, transparency, and consistency in words and actions.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default VisionMission;
