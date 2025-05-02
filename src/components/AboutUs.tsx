
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about-us" className="bg-white section-padding">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-stjohns-navy mb-10 font-playfair">About Us</h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* About Text */}
          <div className="lg:w-2/3">
            <p className="text-lg leading-relaxed text-stjohns-navy mb-6">
              St. John's High School, located in Chandigarh, India, was established in 1959 by the Congregation of Christian Brothers. 
              The institution is named after Saint John Baptist de La Salle, the founder of the Christian Brothers. 
              Over the decades, the school has built a reputation for imparting quality education with a strong emphasis on values and leadership.
            </p>
            <p className="text-lg leading-relaxed text-stjohns-navy mb-6">
              Our motto, 'Pro Deo et Patria' (For God and Country), guides our educational journey. 
              We believe in nurturing young minds to become compassionate leaders and responsible citizens. 
              St. John's High School has been consistently ranked among the top educational institutions in the region.
            </p>
            <Link 
              to="/about" 
              className="inline-flex items-center text-stjohns-navy border-b-2 border-stjohns-gold pb-1 hover:text-stjohns-gold transition-colors duration-200"
            >
              Learn more about our history <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          
          {/* About Image */}
          <div className="lg:w-1/3">
            <img 
              src="https://raw.githubusercontent.com/stjohnsiteproject/johns-legacy-homepage-remastered/main/public/images/about-us22.png" 
              alt="St. John's High School Building" 
              className="w-full h-auto rounded-lg shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
