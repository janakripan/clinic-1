import React from 'react';
import { blogData } from '../data/content';
import { FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const BlogSection = () => {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
      className="py-14 bg-white"
    >
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column (Text Content) */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center">
            <span className="uppercase tracking-widest text-[10px] font-bold text-primaryTeal mb-3 block">
              HEALTH TIPS & ARTICLES
            </span>
            <h2 className="text-[28px] md:text-[32px] font-bold text-darkText leading-tight mb-4">
              Latest News from Romedic
            </h2>
            <p className="text-[12px] text-bodyText leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          {/* Right Column (Blog Cards) */}
          <div className="w-full lg:w-2/3 stagger-grid grid grid-cols-1 sm:grid-cols-2 gap-4">
            {blogData.map((blog) => (
              <motion.div 
                key={blog.id} 
                variants={itemVariants}
                className="bg-[#E2F7F2] rounded-2xl overflow-hidden group hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                <div className="relative h-[160px] overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-[15px] font-bold text-darkText mb-3 leading-tight group-hover:text-primaryTeal transition-colors">{blog.title}</h3>
                  <div className="flex items-center gap-1.5 text-[11px] text-primaryTeal mb-3 font-medium">
                    <FaCalendarAlt />
                    <span>{blog.date}</span>
                  </div>
                  <p className="text-bodyText mb-4 text-[12px] leading-relaxed">
                    {blog.excerpt}
                  </p>
                  <a href="#" className="text-darkTeal font-bold hover:text-primaryTeal transition-colors text-[12px]">
                    Read More
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default BlogSection;
