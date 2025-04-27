
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const WelcomeOverview = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom max-w-4xl mx-auto text-center">
        {/* Gold Separator */}
        <div className="gold-separator mb-8"></div>
        
        {/* Welcome Text */}
        <div className="space-y-6 text-stjohns-navy">
          <p className="text-lg leading-relaxed">
            St. John's High School is a Christian Minority Educational Institution run by the CCB in India which is registered under the Society Registration Act of 1860. St. John's High School is an all-boys, English Medium, unaided Catholic Minority Institution that falls under the category of Religious Minority Institutions as defined by the Constitution of India and has obtained its NOC from the UT of Chandigarh. It is a recognized institute with recognition given by the Education Department, UT. This institute has been affiliated with the CBSE since 1990. The CCBI is a permanently registered society.
          </p>
          
          <p className="text-xl font-medium">
            Welcome to the extended family of St. John's which is a Christian minority, private, un-aided Educational Institute.
          </p>
        </div>
        
        {/* Gold Separator */}
        <div className="gold-separator mt-8 mb-8"></div>
        
        {/* Read More Button */}
        <Link 
          to="/about" 
          className="inline-flex items-center bg-stjohns-navy text-white px-6 py-3 rounded hover:bg-opacity-90 transition-colors duration-200"
        >
          Read More <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </section>
  );
};

export default WelcomeOverview;
