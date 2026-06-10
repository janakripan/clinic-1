import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="home" className="relative w-full bg-[#3BB094] pt-24 lg:pt-28 pb-20 lg:pb-32 overflow-visible z-10 h-[100vh] min-h-[600px] max-h-[850px] flex items-center">
      
      {/* Vertical grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20 flex justify-evenly">
         <div className="w-[1px] h-full bg-white"></div>
         <div className="w-[1px] h-full bg-white"></div>
         <div className="w-[1px] h-full bg-white"></div>
         <div className="w-[1px] h-full bg-white"></div>
         <div className="w-[1px] h-full bg-white"></div>
      </div>

      <div className="container-custom relative z-20 max-w-[1000px] mx-auto w-full px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Left Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={contentVariants}
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left text-white relative z-30 mt-4 lg:mt-0"
          >
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-[54px] font-bold leading-[1.1] tracking-tight mb-5 text-white">
              Professional Medical<br className="hidden sm:block" /> Care for Your Optimal<br className="hidden sm:block" /> Health
            </motion.h1>
            <motion.p variants={itemVariants} className="text-[12px] md:text-[13px] opacity-90 mb-6 max-w-[420px] leading-relaxed text-white">
              We are committed to providing top-quality healthcare with a team of highly skilled medical professionals and advanced medical technology.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
              <button className="bg-[#1E8E82] text-white px-6 py-2.5 rounded-full text-[12px] font-bold hover:bg-white hover:text-primaryTeal transition-colors shadow-lg">
                Book an Appointment
              </button>
              <button className="bg-white text-darkText px-6 py-2.5 rounded-full text-[12px] font-bold hover:bg-[#1E8E82] hover:text-white transition-colors shadow-lg">
                View Services
              </button>
            </motion.div>

            {/* Avatar Group */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <div className="flex -space-x-3">
                <img className="w-8 h-8 rounded-full border-2 border-[#3BB094] object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80" alt="Patient 1" />
                <img className="w-8 h-8 rounded-full border-2 border-[#3BB094] object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80" alt="Patient 2" />
                <img className="w-8 h-8 rounded-full border-2 border-[#3BB094] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80" alt="Patient 3" />
                <img className="w-8 h-8 rounded-full border-2 border-[#3BB094] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80" alt="Patient 4" />
              </div>
              <p className="text-[10px] opacity-90 font-medium">
                150K+ Patients<br/>Recover
              </p>
            </motion.div>
          </motion.div>

          {/* Right Spacer */}
          <div className="hidden lg:block w-1/2"></div>
        </div>
      </div>

      {/* Doctor Image */}
      <div className="hidden lg:flex absolute bottom-[-10px] right-[10%] xl:right-[15%] h-[85%] z-20 justify-center pointer-events-none">
        <motion.img 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-full w-auto object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]" 
          src="https://www.freepnglogos.com/uploads/doctor-png/doctor-bulk-billing-doctors-chapel-hill-health-care-medical-3.png" 
          alt="Doctor" 
        />
      </div>

      {/* Doctor Image (Mobile Only) */}
      <div className="w-full lg:hidden relative h-[380px] flex justify-center mt-10">
        <motion.img 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-full w-auto object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]" 
          src="https://www.freepnglogos.com/uploads/doctor-png/doctor-bulk-billing-doctors-chapel-hill-health-care-medical-3.png" 
          alt="Doctor" 
        />
      </div>

      {/* SVG Wave */}
      <div className="absolute bottom-[-1px] left-0 right-0 w-full z-10 hidden lg:block translate-y-[99%]">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
          <path d="M0,0 C480,100 960,100 1440,0 L1440,0 L0,0 Z" fill="#3BB094"></path>
        </svg>
      </div>

    </section>
  );
};

export default Hero;
