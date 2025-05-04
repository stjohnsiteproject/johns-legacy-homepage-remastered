
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Shield, Heart, BookOpen, Handshake, Users, School } from 'lucide-react';

const Ethos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <PageHero 
          title="Our Ethos" 
          backgroundImage="/images/about-us22.png"
          subtitle="The Character and Spirit of St. John's"
        />

        {/* Content Section */}
        <div className="container-custom py-12 md:py-16">
          <Card className="shadow-lg">
            <CardContent className="p-6 md:p-10">
              <div className="prose lg:prose-lg max-w-none">
                <p className="text-xl font-medium text-center italic mb-8">
                  At St. John's, ethos is more than just a word — it is lived through every interaction, every tradition, and every prayer.
                </p>
                
                <Separator className="my-8 bg-stjohns-gold h-0.5 w-1/4 mx-auto" />
                
                <h2 className="text-2xl font-serif font-bold text-stjohns-navy mb-6 text-center">
                  We Believe
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="bg-stjohns-navy p-4 rounded-full">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-stjohns-navy mb-2">In the dignity and uniqueness of every individual</h3>
                      <p className="text-gray-700">
                        We recognize and celebrate the inherent worth of each person, valuing their unique gifts, perspectives, and potential.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="bg-stjohns-navy p-4 rounded-full">
                      <BookOpen className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-stjohns-navy mb-2">That education is a transformative experience</h3>
                      <p className="text-gray-700">
                        Education at St. John's goes beyond academics — it shapes character, broadens horizons, and empowers students to create positive change.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="bg-stjohns-navy p-4 rounded-full">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-stjohns-navy mb-2">That spirituality and scholarship go hand-in-hand</h3>
                      <p className="text-gray-700">
                        We foster intellectual growth alongside spiritual development, nurturing both the mind and the soul in our educational approach.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="bg-stjohns-navy p-4 rounded-full">
                      <Handshake className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-stjohns-navy mb-2">In service before self</h3>
                      <p className="text-gray-700">
                        We instill the value of selfless service, encouraging our community to contribute meaningfully to society and put others' needs before their own.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="bg-stjohns-navy p-4 rounded-full">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-stjohns-navy mb-2">In a disciplined environment that fosters respect</h3>
                      <p className="text-gray-700">
                        We maintain an atmosphere of structured learning and mutual respect, where empathy and responsibility are consistently practiced.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="bg-stjohns-navy p-4 rounded-full">
                      <School className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-stjohns-navy mb-2">In the development of the whole person</h3>
                      <p className="text-gray-700">
                        We nurture intellectual, physical, emotional, and social growth, preparing our students to lead balanced and fulfilling lives.
                      </p>
                    </div>
                  </div>
                </div>
                
                <Separator className="my-8 bg-stjohns-gold h-0.5 w-1/4 mx-auto" />
                
                <p className="text-center">
                  These beliefs shape the environment in which our students grow, leading to character formation that stands the test of time.
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

export default Ethos;
