
import React from 'react';
import { Book, Heart, Award, Landmark } from 'lucide-react';

const CoreValues = () => {
  const values = [
    {
      name: 'Faith',
      icon: <Book className="h-8 w-8 text-stjohns-gold" />,
      description: 'Guided by spiritual principles'
    },
    {
      name: 'Integrity',
      icon: <Heart className="h-8 w-8 text-stjohns-gold" />,
      description: 'Honesty and moral uprightness'
    },
    {
      name: 'Excellence',
      icon: <Award className="h-8 w-8 text-stjohns-gold" />,
      description: 'Striving for the highest standards'
    },
    {
      name: 'Service',
      icon: <Landmark className="h-8 w-8 text-stjohns-gold" />,
      description: 'Contributing to community and society'
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container-custom">
        <div className="gold-separator mb-8"></div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-3">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-stjohns-navy mb-1">{value.name}</h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
        
        <div className="gold-separator mt-8"></div>
      </div>
    </section>
  );
};

export default CoreValues;
