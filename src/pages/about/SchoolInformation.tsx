
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Card, CardContent } from '@/components/ui/card';
import { Info } from 'lucide-react';

const SchoolInformation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <PageHero 
          title="School Information" 
          backgroundImage="/images/100.jpg"
          altText="St. John's High School Information"
          icon={<Info className="h-8 w-8" />}
        />

        {/* Content Section */}
        <div className="container-custom py-12 md:py-16">
          <Card className="shadow-lg">
            <CardContent className="p-6 md:p-10">
              <div className="prose lg:prose-lg max-w-none">
                <h2 className="text-2xl md:text-3xl font-bold text-stjohns-navy font-serif mb-8">
                  General Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-stjohns-navy/5 p-6 rounded-lg">
                      <h3 className="text-xl font-serif text-stjohns-navy mb-3">School Profile</h3>
                      <ul className="space-y-3">
                        <li><strong>Name:</strong> St. John's High School</li>
                        <li><strong>Founded:</strong> 1959</li>
                        <li><strong>Board Affiliation:</strong> CBSE (Central Board of Secondary Education)</li>
                        <li><strong>CBSE Affiliation Number:</strong> 2630001</li>
                        <li><strong>Medium of Instruction:</strong> English</li>
                        <li><strong>School Type:</strong> Boys, Day School</li>
                        <li><strong>Classes:</strong> KG to Class XII</li>
                      </ul>
                    </div>
                    
                    <div className="bg-stjohns-navy/5 p-6 rounded-lg">
                      <h3 className="text-xl font-serif text-stjohns-navy mb-3">School Timing</h3>
                      <ul className="space-y-3">
                        <li><strong>Monday to Friday:</strong> 7:40 AM to 1:40 PM</li>
                        <li><strong>Saturday:</strong> 7:40 AM to 11:40 AM (Every 1st and 3rd Saturday)</li>
                        <li><strong>Office Hours:</strong> 8:00 AM to 2:00 PM</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-stjohns-navy/5 p-6 rounded-lg">
                      <h3 className="text-xl font-serif text-stjohns-navy mb-3">Contact Information</h3>
                      <ul className="space-y-3">
                        <li><strong>Address:</strong> Sector 26, Chandigarh, 160019</li>
                        <li><strong>Phone:</strong> 0172-2791652, 2790758</li>
                        <li><strong>Email:</strong> stjohns@stjohnschandigarh.com</li>
                        <li><strong>Website:</strong> www.stjohnschandigarh.com</li>
                      </ul>
                    </div>
                    
                    <div className="bg-stjohns-navy/5 p-6 rounded-lg">
                      <h3 className="text-xl font-serif text-stjohns-navy mb-3">Administration</h3>
                      <ul className="space-y-3">
                        <li><strong>Principal:</strong> Rev. Br. Dr. J. Berchmans</li>
                        <li><strong>Vice-Principal:</strong> Rev. Br. Benedict Dennis</li>
                        <li><strong>Coordinator (Senior Section):</strong> Mrs. T. Gill</li>
                        <li><strong>Coordinator (Middle Section):</strong> Mrs. S. Chaudhary</li>
                        <li><strong>Coordinator (Junior Section):</strong> Mrs. N. Sharma</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 bg-stjohns-navy/5 p-6 rounded-lg">
                  <h3 className="text-xl font-serif text-stjohns-navy mb-3">Uniform Policy</h3>
                  <p>
                    St. John's High School maintains a strict uniform policy. Students are expected to wear the prescribed uniform on all working days. The uniform consists of white shirt, navy blue trousers, school tie, belt, and black shoes. On special occasions, the formal uniform includes a navy blue blazer with the school crest. Students participating in sports activities should wear the proper sports uniform.
                  </p>
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

export default SchoolInformation;
