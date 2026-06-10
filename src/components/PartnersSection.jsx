import React from 'react';
import { partnersData } from '../data/content';

const PartnersSection = () => {
  return (
    <section className="py-8 border-b border-borderColor bg-white">
      <div className="container-custom">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-10 lg:gap-8 opacity-60">
          {partnersData.map((partner, index) => (
            <img 
              key={index} 
              src={partner} 
              alt={`Partner ${index + 1}`} 
              className="h-6 sm:h-8 lg:h-10 object-contain hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
