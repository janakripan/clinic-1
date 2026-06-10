import React from "react";
import { processData } from "../data/content";
import { motion } from "framer-motion";

const ProcessSection = () => {
  return (
    <section className="relative w-full bg-white py-20 lg:py-32 overflow-hidden">
      
      {/* Right Image (Absolute for Desktop) */}
      <div className="hidden lg:block absolute right-0 top-0 w-[45%] h-full z-0">
        <img 
          src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=80" 
          alt="Doctor explaining to patient" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container-custom relative z-10 max-w-[1100px] mx-auto px-6">
        
        {/* Top Text Block */}
        <div className="max-w-[450px] mb-12 lg:mb-16 relative z-20 mx-auto lg:mx-0 text-center lg:text-left">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-widest text-[11px] font-bold text-primaryTeal mb-4 block"
          >
            How It Works
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-[40px] font-bold text-darkText leading-tight mb-5"
          >
            How It Works in 4 Easy Steps
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[13px] text-bodyText leading-relaxed"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </motion.p>
        </div>

        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative z-20">
          {processData.map((step, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#E2F7F2] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] relative overflow-hidden flex flex-col pt-16 px-6 pb-8 min-h-[220px]"
            >
              {/* Top-Left Number Badge */}
              <div className="absolute top-0 left-0 bg-primaryTeal text-white rounded-br-2xl w-[65px] h-[50px] flex items-center justify-center text-[26px] font-bold">
                {step.step}
              </div>
              
              <h3 className="text-[15px] font-bold text-darkText mb-3 leading-snug">
                {step.title}
              </h3>
              <p className="text-[11px] text-bodyText leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Mobile Image (renders below the cards on small screens) */}
      <div className="lg:hidden w-full h-[300px] mt-10 px-6">
        <img 
          src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80" 
          alt="Doctor explaining to patient" 
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </section>
  );
};

export default ProcessSection;
