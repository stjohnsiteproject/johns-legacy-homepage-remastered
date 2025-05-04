
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Shield, 
  Video, 
  ClipboardCheck, 
  Bell, 
  Users, 
  MessageSquare 
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const ChildSafety = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <PageHero 
          title="Child Safety" 
          backgroundImage="/images/about-us22.png"
          altText="Child Safety at St. John's High School"
          icon={<Shield className="h-8 w-8" />}
        />

        {/* Content Section */}
        <div className="container-custom py-12 md:py-16">
          <Card className="shadow-lg">
            <CardContent className="p-6 md:p-10">
              <div className="prose lg:prose-lg max-w-none">
                <div className="text-center mb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-stjohns-navy font-serif mb-4">
                    Child Safety at St. John's
                  </h2>
                  <p className="text-lg">
                    The safety and well-being of students are paramount at St. John's High School.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-stjohns-navy/5 p-6 rounded-lg flex">
                    <div className="mr-4 flex-shrink-0">
                      <Video className="h-8 w-8 text-stjohns-navy" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-stjohns-navy mb-2">CCTV Surveillance</h3>
                      <p>
                        Complete CCTV coverage across all key areas including classrooms, corridors, playgrounds, and entry/exit points. Monitors are regularly checked by designated staff members.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-stjohns-navy/5 p-6 rounded-lg flex">
                    <div className="mr-4 flex-shrink-0">
                      <ClipboardCheck className="h-8 w-8 text-stjohns-navy" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-stjohns-navy mb-2">Staff Verification</h3>
                      <p>
                        Mandatory background verification of all teaching and non-teaching staff. Regular training on child safety protocols and POSCO Act provisions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-stjohns-navy/5 p-6 rounded-lg flex">
                    <div className="mr-4 flex-shrink-0">
                      <Bell className="h-8 w-8 text-stjohns-navy" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-stjohns-navy mb-2">Safety Drills</h3>
                      <p>
                        Regular fire and disaster management drills conducted every term. Students are trained in emergency protocols and evacuation procedures.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-stjohns-navy/5 p-6 rounded-lg flex">
                    <div className="mr-4 flex-shrink-0">
                      <Users className="h-8 w-8 text-stjohns-navy" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-stjohns-navy mb-2">POSCO Committee</h3>
                      <p>
                        A dedicated committee formed as per POSCO Act guidelines, comprising school administrators, senior teachers, and a parent representative.
                      </p>
                    </div>
                  </div>
                </div>
                
                <Separator className="my-10" />
                
                <div className="bg-stjohns-navy/5 p-6 rounded-lg mt-6">
                  <div className="flex items-center mb-4">
                    <MessageSquare className="h-6 w-6 text-stjohns-navy mr-3" />
                    <h3 className="text-xl font-serif text-stjohns-navy">Grievance Redressal</h3>
                  </div>
                  
                  <p className="mb-4">
                    St. John's High School maintains a robust grievance redressal system to address concerns related to child safety:
                  </p>
                  
                  <ul className="space-y-2">
                    <li>Designated Child Safety Officers available during school hours</li>
                    <li>Confidential reporting channels for students and parents</li>
                    <li>Regular awareness sessions on identifying and reporting safety concerns</li>
                    <li>Prompt investigation and resolution of reported incidents</li>
                    <li>Counseling support for affected students</li>
                  </ul>
                  
                  <div className="mt-6 p-4 bg-white rounded-lg border border-stjohns-navy/20">
                    <p className="text-sm font-medium">
                      Child Safety Helpline: <span className="text-stjohns-navy">0172-2791000</span> (During School Hours)
                    </p>
                    <p className="text-sm font-medium">
                      Email for Safety Concerns: <span className="text-stjohns-navy">safety@stjohnschandigarh.com</span>
                    </p>
                  </div>
                </div>
                
                <div className="text-center mt-10">
                  <p className="italic text-lg">
                    "Our commitment to child safety ensures that St. John's remains a safe, nurturing space where students can focus on learning and growth."
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

export default ChildSafety;
