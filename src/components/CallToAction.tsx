
import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-stjohns-navy mb-6">
          Join Our Legacy of Excellence
        </h2>
        <Link 
          to="/admissions" 
          className="inline-block bg-stjohns-navy text-white px-8 py-4 rounded border-2 border-stjohns-gold hover:bg-stjohns-gold hover:text-stjohns-navy transition-colors duration-300 font-medium"
        >
          Explore Admissions & Fee Structure
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
