
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Admissions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container-custom py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-stjohns-navy mb-8">Admissions & Fee Structure</h1>
          <p className="text-lg">Content coming soon...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admissions;
