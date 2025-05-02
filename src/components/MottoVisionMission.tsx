
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const MottoVisionMission = () => {
  return (
    <section className="bg-stjohns-offwhite section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Motto */}
          <Card className="border-none shadow-md">
            <CardHeader className="bg-stjohns-navy text-white text-center py-6">
              <h3 className="text-xl font-bold">Our Motto</h3>
            </CardHeader>
            <CardContent className="pt-6 text-center">
              <div className="gold-separator mb-4"></div>
              <p className="text-stjohns-navy text-lg font-medium">
                "Pro Deo et Patria"
              </p>
              <p className="text-gray-500 italic mt-2">(For God and Country)</p>
            </CardContent>
          </Card>
          
          {/* Vision */}
          <Card className="border-none shadow-md">
            <CardHeader className="bg-stjohns-navy text-white text-center py-6">
              <h3 className="text-xl font-bold">Our Vision</h3>
            </CardHeader>
            <CardContent className="pt-6 text-center">
              <div className="gold-separator mb-4"></div>
              <p className="text-stjohns-navy text-lg">
                "Creating compassionate leaders."
              </p>
            </CardContent>
          </Card>
          
          {/* Mission */}
          <Card className="border-none shadow-md">
            <CardHeader className="bg-stjohns-navy text-white text-center py-6">
              <h3 className="text-xl font-bold">Our Mission</h3>
            </CardHeader>
            <CardContent className="pt-6 text-center">
              <div className="gold-separator mb-4"></div>
              <p className="text-stjohns-navy text-lg">
                "Academic excellence and social responsibility."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MottoVisionMission;
