
import React from 'react';
import MainNavbar from '@/components/MainNavbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const Founder = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[30vh] md:h-[40vh]">
          <div className="absolute inset-0">
            <img 
              src="https://raw.githubusercontent.com/stjohnsiteproject/johns-legacy-homepage-remastered/main/public/images/100.jpg" 
              alt="St. John's High School Campus" 
              className="w-full h-full object-cover"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-playfair">
              Our Founder's Life
            </h1>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container-custom">
            <Card className="shadow-md">
              <CardContent className="pt-6">
                <div className="prose max-w-none">
                  <h2 className="text-2xl md:text-3xl font-bold text-stjohns-navy font-playfair mb-6">
                    Saint John Baptist De La Salle
                  </h2>
                  
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3 flex justify-center">
                      <img 
                        src="https://raw.githubusercontent.com/stjohnsiteproject/johns-legacy-homepage-remastered/main/public/images/about-us22.png" 
                        alt="Saint John Baptist De La Salle" 
                        className="rounded-md shadow-md max-w-full h-auto"
                      />
                    </div>
                    
                    <div className="md:w-2/3">
                      <p className="mb-4">
                        Saint John Baptist de La Salle was born into a world very different from our own. He was the first son of wealthy parents living in France over 300 years ago. Born at Reims, John Baptist de La Salle received the tonsure at age eleven and was named Canon of the Reims Cathedral at sixteen. Though he had to assume the administration of family affairs after his parents died, he completed his theological studies and was ordained a priest on April 9, 1678. Two years later he received a doctorate in theology.
                      </p>
                      
                      <p className="mb-4">
                        Meanwhile he became tentatively involved with a group of rough and barely literate young men in order to establish schools for poor boys. At that time a few people lived in luxury, but most of the people were extremely poor: peasants in the country, and slum dwellers in the towns. Only a few could send their children to school; most children had little hope for the future.
                      </p>
                      
                      <p className="mb-4">
                        Moved by the plight of the poor who seemed so "far from salvation" either in this world or the next, he determined to put his own talents and advanced education at the service of the children "often left to themselves and badly brought up."
                      </p>
                      
                      <p className="mb-4">
                        To be more effective, he abandoned his family home, moved in with the teachers, renounced his position as Canon and his wealth, and so formed the community that became known as the Brothers of the Christian Schools.
                      </p>
                      
                      <p className="mb-4">
                        His enterprise met opposition from the ecclesiastical authorities who resisted the creation of a new form of religious life, a community of consecrated laymen to conduct gratuitous schools "together and by association." The educational establishment resented his innovative methods and his insistence on gratuity for all, regardless of whether they could afford to pay.
                      </p>
                      
                      <p className="mb-4">
                        Nevertheless De La Salle and his Brothers succeeded in creating a network of quality schools throughout France that featured instruction in the vernacular, students grouped according to ability and achievement, integration of religious instruction with secular subjects, well-prepared teachers with a sense of vocation and mission, and the involvement of parents.
                      </p>
                      
                      <p className="mb-4">
                        In addition, De La Salle pioneered in programs for training lay teachers, Sunday courses for working young men, and one of the first institutions in France for the care of delinquents. Worn out by austerities and exhausting labors, he died at Saint Yon near Rouen early in 1719 on Good Friday, only weeks before his sixty-eighth birthday.
                      </p>
                      
                      <p>
                        John Baptist de La Salle was a pioneer in founding training colleges for teachers, reform schools for delinquents, technical schools, and secondary schools for modern languages, arts, and sciences. His work quickly spread through France and, after his death, continued to spread across the globe. In 1900 John Baptist de La Salle was declared a Saint. In 1950, because of his life and inspirational writings, he was made Patron Saint of all those who work in the field of education. John Baptist de La Salle inspired others how to teach and care for young people, how to meet failure and frailty with compassion, how to affirm, strengthen and heal. At the present time there are De La Salle schools in 80 different countries around the globe.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Founder;
