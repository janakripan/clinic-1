import React from 'react';
import { motion } from 'framer-motion';

const StatsCards = () => {
  return (
    <section className="relative w-full z-30 -mt-20 lg:-mt-24 pb-14 bg-transparent px-4">
      <div className="container-custom max-w-[1000px] mx-auto">
        <div className="flex flex-col md:flex-row gap-5 items-stretch justify-center">
          
          {/* Card 1: Experience */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#E2F7F2] rounded-[24px] p-6 lg:w-[35%] shadow-xl relative overflow-hidden flex flex-col justify-end min-h-[220px] border border-[#d2efe8]"
          >
            {/* Subtle background circles */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-[1px] border-primaryTeal/20 rounded-full"></div>
            <div className="absolute -bottom-5 -right-5 w-20 h-20 border-[1px] border-primaryTeal/20 rounded-full"></div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-darkText mb-2">15+</h2>
            <div className="relative z-10 mt-3">
              <h3 className="text-[12px] font-bold text-darkText mb-1.5">Years of Experience</h3>
              <p className="text-[10px] text-bodyText leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec .
              </p>
            </div>
          </motion.div>

          {/* Card 2: Community & Stats */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-[24px] p-6 lg:w-[65%] shadow-xl flex flex-col md:flex-row gap-6 relative overflow-hidden min-h-[220px] border border-gray-100"
          >
            {/* Left side: Community */}
            <div className="flex-1 relative pr-4 md:border-r border-gray-100 py-2">
              <h3 className="text-xl font-bold text-darkText mb-4 max-w-[200px] leading-tight">
                Join a thriving health and wellness community
              </h3>
              <p className="text-[10px] text-bodyText max-w-[180px] mt-8">
                Over 1 million users trust Romedic for their medical needs.
              </p>

              {/* Scattered Avatars */}
              <div className="absolute top-2 right-4">
                 <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80" className="w-7 h-7 rounded-full border-[2px] border-white shadow-md object-cover" alt="user"/>
              </div>
              <div className="absolute bottom-8 right-8">
                 <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" className="w-8 h-8 rounded-full border-[2px] border-white shadow-md object-cover" alt="user"/>
              </div>
              <div className="absolute top-16 left-[60%]">
                 <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" className="w-5 h-5 rounded-full border-[2px] border-white shadow-md object-cover" alt="user"/>
              </div>
              <div className="absolute bottom-2 right-0">
                 <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" className="w-6 h-6 rounded-full border-[2px] border-white shadow-md object-cover" alt="user"/>
              </div>
            </div>

            {/* Right side: Stats */}
            <div className="flex flex-col justify-center gap-6 pl-0 md:pl-4 w-[160px]">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-primaryTeal mb-1">35+</h2>
                <p className="text-[10px] text-bodyText font-medium">Medical Specialties</p>
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-primaryTeal mb-1">20+</h2>
                <p className="text-[10px] text-bodyText font-medium">Hospital Rooms</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default StatsCards;