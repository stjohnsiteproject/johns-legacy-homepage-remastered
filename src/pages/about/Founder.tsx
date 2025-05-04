
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Card, CardContent } from '@/components/ui/card';

const Founder = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <PageHero 
          title="Our Founder's Life" 
          backgroundImage="/images/about-us22.png"
          altText="St. John Baptist de La Salle Portrait"
        />

        {/* Content Section */}
        <div className="container-custom py-12 md:py-16">
          <Card className="shadow-lg">
            <CardContent className="p-6 md:p-10">
              <div className="prose lg:prose-lg max-w-none text-justify">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <img 
                      src="/images/about-us22.png" 
                      alt="Saint John Baptist De La Salle" 
                      className="rounded-md shadow-md max-w-full h-auto"
                    />
                  </div>
                  
                  <div className="md:w-2/3">
                    <p className="mb-6">
                      Saint John Baptist de La Salle, the patron saint of teachers and founder of the Congregation of Christian Brothers, was born in Reims, France in 1651. He devoted his life to educating the poor and revolutionized teaching methods, emphasizing respect, compassion, and the holistic development of students.
                    </p>
                    
                    <p className="mb-6">
                      In an era when education was reserved for the elite, De La Salle believed in education as a means to uplift and transform lives. He introduced progressive educational practices including simultaneous instruction and teacher training. His approach was rooted in faith, community, and service.
                    </p>
                    
                    <p className="mb-6">
                      His legacy continues to inspire Christian Brothers across the world. The principles laid down by him are the bedrock of St. John's High School, where every effort is made to live out his vision — "Live Jesus in our hearts forever."
                    </p>
                  </div>
                </div>
                
                <h2 className="text-2xl font-serif font-bold text-stjohns-navy mt-10 mb-6">The Legacy of De La Salle</h2>
                
                <p className="mb-6">
                  John Baptist de La Salle was born into a world very different from our own. He was the first son of wealthy parents living in France over 300 years ago. Though he had to assume the administration of family affairs after his parents died, he completed his theological studies and was ordained a priest on April 9, 1678.
                </p>
                
                <p className="mb-6">
                  Moved by the plight of the poor who seemed so "far from salvation" either in this world or the next, he determined to put his own talents and advanced education at the service of the children "often left to themselves and badly brought up." To be more effective, he abandoned his family home, moved in with the teachers, renounced his position as Canon and his wealth, and so formed the community that became known as the Brothers of the Christian Schools.
                </p>
                
                <p>
                  Today, the De La Salle Brothers continue their educational mission in more than 80 countries. St. John's High School in Chandigarh proudly carries forward this tradition of excellence and compassion in education, forming young minds to be both academically proficient and morally upright.
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

export default Founder;
