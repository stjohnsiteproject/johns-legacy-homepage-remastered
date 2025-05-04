import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Building,
  Laptop, 
  BeakerIcon, 
  BookOpen, 
  Trophy, 
  Music2,
  Palette, 
  Stethoscope, 
  Utensils, 
  Wifi 
} from 'lucide-react';

const Facilities = () => {
  const facilities = [
    {
      title: "Smart Classrooms",
      description: "Equipped with interactive digital boards, projectors, and audio systems to facilitate dynamic learning experiences",
      icon: <Laptop className="h-10 w-10 text-stjohns-navy" />
    },
    {
      title: "Science Labs",
      description: "State-of-the-art physics, chemistry, and biology laboratories with modern equipment for practical experiments",
      icon: <BeakerIcon className="h-10 w-10 text-stjohns-navy" />
    },
    {
      title: "Library",
      description: "Extensive collection of over 5000 books, periodicals, reference materials, and digital resources for research",
      icon: <BookOpen className="h-10 w-10 text-stjohns-navy" />
    },
    {
      title: "Sports Facilities",
      description: "Expansive grounds for cricket, football, athletics, plus indoor facilities for basketball, badminton, and table tennis",
      icon: <Trophy className="h-10 w-10 text-stjohns-navy" />
    },
    {
      title: "Music Room",
      description: "Dedicated space with various instruments, recording equipment, and practice areas for vocal and instrumental music",
      icon: <Music2 className="h-10 w-10 text-stjohns-navy" />
    },
    {
      title: "Art Studio",
      description: "Creative workspace with materials and equipment for drawing, painting, sculpture, and other visual arts",
      icon: <Palette className="h-10 w-10 text-stjohns-navy" />
    },
    {
      title: "Infirmary",
      description: "Medical facility with a full-time nurse, essential medical supplies, and first-aid equipment for emergencies",
      icon: <Stethoscope className="h-10 w-10 text-stjohns-navy" />
    },
    {
      title: "Cafeteria",
      description: "Hygienic dining area serving nutritious meals and snacks prepared under strict quality control measures",
      icon: <Utensils className="h-10 w-10 text-stjohns-navy" />
    },
    {
      title: "Computer Labs",
      description: "Multiple computer laboratories with high-speed internet, latest software, and dedicated IT support staff",
      icon: <Wifi className="h-10 w-10 text-stjohns-navy" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <PageHero 
          title="Campus Facilities" 
          backgroundImage="/images/about-us22.png"
          altText="St. John's High School Campus Facilities"
          icon={<Building className="h-8 w-8" />}
        />

        {/* Content Section */}
        <div className="container-custom py-12 md:py-16">
          <Card className="shadow-lg">
            <CardContent className="p-6 md:p-10">
              <div className="prose lg:prose-lg max-w-none mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-stjohns-navy font-serif text-center mb-6">
                  World-Class Facilities at St. John's
                </h2>
                <p className="text-center">
                  St. John's High School provides state-of-the-art facilities to ensure a comprehensive educational experience. 
                  Our campus is designed to nurture academic excellence, physical development, and creative expression.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {facilities.map((facility, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-stjohns-navy/5 p-4 rounded-full mb-4">
                        {facility.icon}
                      </div>
                      <h3 className="text-xl font-serif text-stjohns-navy mb-3">{facility.title}</h3>
                      <p className="text-gray-700">{facility.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 bg-stjohns-navy/5 p-6 rounded-lg">
                <h3 className="text-xl font-serif text-stjohns-navy mb-4 text-center">Auditorium & Performance Spaces</h3>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <img 
                      src="/images/about-us22.png" 
                      alt="St. John's Auditorium" 
                      className="rounded-lg shadow-md w-full h-48 object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700">
                      Our modern auditorium seats over 500 people and is equipped with professional lighting, sound systems, and a large stage for dramatic productions, concerts, assemblies, and other events. Adjacent rehearsal rooms provide space for drama and music practice.
                    </p>
                    <p className="text-gray-700 mt-4">
                      The multipurpose hall offers additional space for indoor sports, exhibitions, and activities during inclement weather. These facilities foster a vibrant cultural life at St. John's and help develop students' confidence in public speaking and performance.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 text-center">
                <p className="italic text-lg text-gray-600">
                  "Our facilities are designed not just as physical spaces, but as environments that inspire learning, creativity, and growth."
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  — St. John's High School Administration
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

export default Facilities;
