import React from 'react';
import { testimonialsData } from '../data/content';
import { FaQuoteRight } from 'react-icons/fa';

const TestimonialsSection = () => {
  return (
    <section className="py-14 bg-[#F8F9FA] relative z-0">
      <div className="container-custom">
        <div className="text-center md:text-left max-w-2xl mb-8">
          <span className="uppercase tracking-widest text-[10px] font-bold text-primaryTeal mb-2 block">
            WHAT OUR PATIENTS SAY
          </span>
          <h2 className="text-[28px] md:text-[32px] font-bold text-darkText leading-tight">
            Patient Experiences That Speak for<br />Themselves
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10 pb-8">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="bg-[#E2F7F2] rounded-xl pt-6 px-6 pb-6 relative">
              {/* Quote Icon flush with top-right corner */}
              <div className="absolute top-0 right-0 bg-[#278C81] text-white w-10 h-10 rounded-bl-2xl rounded-tr-xl flex items-center justify-center text-sm">
                <FaQuoteRight />
              </div>
              
              <div className="flex flex-col items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-10 h-10 rounded-full object-cover mb-3" 
                />
                <h4 className="text-[13px] font-bold text-darkText text-center">{testimonial.name}</h4>
                <p className="text-[10px] font-semibold text-primaryTeal text-center mb-4">{testimonial.role}</p>
              </div>
              
              <p className="text-bodyText/80 text-[12px] text-center leading-relaxed font-medium">
                {testimonial.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
