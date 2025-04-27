
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const LatestNews = () => {
  const news = [
    {
      id: 1,
      date: '26 April, 2025',
      title: 'SQUASH COACHING',
      excerpt: 'New squash coaching program launches next month.'
    },
    {
      id: 2,
      date: '16 April, 2024',
      title: 'VERIFY YOUR VOTE TODAY',
      excerpt: 'Important notice for all eligible voters.'
    },
    {
      id: 3,
      date: '13 April, 2024',
      title: 'Dear Parents, The school has been...',
      excerpt: 'Important announcement for all parents.'
    },
  ];

  return (
    <section className="bg-stjohns-offwhite section-padding">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-stjohns-navy mb-10">Latest News & Notices</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map(item => (
            <div 
              key={item.id} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-stjohns-gold text-sm font-medium mb-2">{item.date}</div>
              <h3 className="text-xl font-bold text-stjohns-navy mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.excerpt}</p>
              <Link 
                to="/news" 
                className="text-stjohns-navy hover:text-stjohns-gold font-medium inline-flex items-center"
              >
                Read More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            to="/news" 
            className="inline-flex items-center bg-stjohns-gold text-white px-6 py-3 rounded hover:bg-opacity-90 transition-colors duration-200"
          >
            View All News <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
