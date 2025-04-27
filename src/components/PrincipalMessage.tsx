
import React from 'react';

const PrincipalMessage = () => {
  return (
    <section className="bg-stjohns-offwhite section-padding">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-stjohns-navy mb-10">Principal's Message</h2>
        
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
          {/* Message Text */}
          <div className="lg:w-2/3">
            <div className="prose prose-lg max-w-none text-stjohns-navy">
              <p>Dear Parents and Students,</p>
              <p>Welcome to St. John's High School, Chandigarh. We are a Catholic Christian Institution established in 1959, that strives to promote the total development of all aspects of the student's personality. True education releases capacities, develops analytical abilities, confidence in oneself, will power and goal setting competencies, and instills the vision that enables one to become a self-motivated agent of social change.</p>
              <p>St. John's is a school that caters to the boys of Chandigarh and its surrounding areas. It enjoys the reputation of being one of the premier institutions of the city. Our school is a place where students and faculty are known, valued, and supported. It is a community that encourages collaboration, creativity, and critical thinking.</p>
              <p>We stress not only academic excellence but also the formation of sound character and a healthy sense of social responsibility. We promote discipline and foster respect for all. We also nurture and encourage leadership, teamwork, and service to the community.</p>
              <p>Let us together commit ourselves to uphold the high traditions of St. John's High School.</p>
              <p>May God Bless Us All.</p>
              <p>Sincerely,<br />Principal</p>
            </div>
          </div>
          
          {/* Principal's Image */}
          <div className="lg:w-1/3 flex justify-center">
            <div className="w-56 h-56 md:w-64 md:h-64 bg-gray-200 rounded-full flex items-center justify-center shadow-md">
              <span className="text-gray-500">Principal's Photo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
