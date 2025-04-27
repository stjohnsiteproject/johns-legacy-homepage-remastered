
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WelcomeOverview from '@/components/WelcomeOverview';
import PrincipalMessage from '@/components/PrincipalMessage';
import MottoVisionMission from '@/components/MottoVisionMission';
import CoreValues from '@/components/CoreValues';
import LatestNews from '@/components/LatestNews';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <WelcomeOverview />
        <PrincipalMessage />
        <MottoVisionMission />
        <CoreValues />
        <LatestNews />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
