
import React from 'react';

const MottoVisionMission = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Motto */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-stjohns-navy py-4 px-6">
              <h3 className="text-xl font-bold text-white text-center">Our Motto</h3>
            </div>
            <div className="p-6 text-center">
              <div className="gold-separator mb-4"></div>
              <p className="text-stjohns-navy text-lg">
                "Pro Deo et Patria — For God and Country"
              </p>
            </div>
          </div>
          
          {/* Vision */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-stjohns-navy py-4 px-6">
              <h3 className="text-xl font-bold text-white text-center">Our Vision</h3>
            </div>
            <div className="p-6 text-center">
              <div className="gold-separator mb-4"></div>
              <p className="text-stjohns-navy text-lg">
                "To create compassionate leaders rooted in integrity, service, and academic excellence."
              </p>
            </div>
          </div>
          
          {/* Mission */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-stjohns-navy py-4 px-6">
              <h3 className="text-xl font-bold text-white text-center">Our Mission</h3>
            </div>
            <div className="p-6 text-center">
              <div className="gold-separator mb-4"></div>
              <p className="text-stjohns-navy text-lg">
                "Fostering critical thinking, character, and service among young boys to shape responsible global citizens."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MottoVisionMission;
