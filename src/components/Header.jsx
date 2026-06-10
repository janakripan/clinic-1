import React, { useState } from 'react';
import { navLinks } from '../data/content';
import { FaPhoneAlt, FaHospitalSymbol } from 'react-icons/fa';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Header = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    setIsScrolled(latest > 50);
    setHidden(latest > previous && latest > 150);
  });

  return (
    <motion.div 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-150%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${isScrolled ? 'top-4' : 'top-6'}`}
    >
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        className="max-w-[1200px] mx-auto bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.08)] px-6 py-4 flex items-center justify-between"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-primaryTeal text-white p-2 rounded-lg">
            <FaHospitalSymbol className="text-xl" />
          </div>
          <span className="text-xl font-bold text-darkText tracking-tight">Romedic</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.path} 
              className="text-darkText font-medium hover:text-primaryTeal transition-colors text-sm"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden sm:flex items-center gap-3 bg-primaryTeal text-white px-6 py-2.5 rounded-full font-medium hover:bg-secondaryTeal transition-colors cursor-pointer text-sm">
          <FaPhoneAlt className="text-xs" />
          <span>+123 456 7890</span>
        </div>

        {/* Mobile Menu Icon Placeholder */}
        <div className="md:hidden text-primaryTeal text-2xl cursor-pointer">
          ☰
        </div>
      </motion.header>
    </motion.div>
  );
};

export default Header;
