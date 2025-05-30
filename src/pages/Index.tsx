
import React from 'react';
import MainNavbar from '@/components/MainNavbar';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import MottoVisionMission from '@/components/MottoVisionMission';
import AnnouncementsSection from '@/components/AnnouncementsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavbar />
      <main>
        <Hero />
        <AboutUs />
        <MottoVisionMission />
        <AnnouncementsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
