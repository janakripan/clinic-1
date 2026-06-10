import React from 'react';
import { doctorsData } from '../data/content';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const DoctorsSection = () => {
  return (
    <section className="py-14 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="uppercase tracking-widest text-[10px] font-bold text-primaryTeal mb-3 block">
            OUR MEDICAL EXPERTS
          </span>
          <h2 className="text-[28px] md:text-[32px] font-bold text-darkText leading-tight">
            Your Health in the Hands of Trusted Experts
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1000px] mx-auto">
          {doctorsData.map((doctor) => (
            <div key={doctor.id} className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col border border-gray-100">
              
              {/* Image Container with Solid Teal Background */}
              <div className="relative bg-primaryTeal pt-6 px-4 flex justify-center items-end h-[220px] overflow-hidden">
                {/* Decorative Background Circles */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full border-[0.5px] border-white/20"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full border-[0.5px] border-white/10"></div>
                
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-[85%] h-full object-contain object-bottom relative z-10"
                />

                {/* Social Overlay on Hover */}
                <div className="absolute inset-0 bg-primaryTeal/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                  <div className="flex gap-3">
                    <a href="#" className="w-9 h-9 rounded-full bg-white text-primaryTeal flex items-center justify-center hover:bg-darkTeal hover:text-white transition-colors shadow-lg">
                      <FaFacebookF className="text-sm" />
                    </a>
                    <a href="#" className="w-9 h-9 rounded-full bg-white text-primaryTeal flex items-center justify-center hover:bg-darkTeal hover:text-white transition-colors shadow-lg">
                      <FaTwitter className="text-sm" />
                    </a>
                    <a href="#" className="w-9 h-9 rounded-full bg-white text-primaryTeal flex items-center justify-center hover:bg-darkTeal hover:text-white transition-colors shadow-lg">
                      <FaLinkedinIn className="text-sm" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Doctor Info */}
              <div className="py-4 text-center bg-[#F8F9FA]">
                <h3 className="text-[13px] font-bold text-darkText mb-1">{doctor.name}</h3>
                <p className="text-[10px] font-semibold text-gray-500">{doctor.specialty}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
