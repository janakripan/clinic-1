import React from "react";
import { FaCheckCircle, FaPlay, FaHeartbeat } from "react-icons/fa";

const WhyChooseUs = () => {
  const checklist = [
    "Highly Experienced & Certified Doctors",
    "State-of-the-art Medical Facilities",
    "Comprehensive & Personalized Treatment",
    "Commitment to Patient Safety and Innovation",
    "Multilingual & Patient-Friendly Staff",
  ];

  return (
    <section className="py-14 bg-lightBg overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left: Image Collage */}
          <div className="w-full lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=800&q=80"
                alt="Hospital"
                className="rounded-2xl w-full h-[260px] object-cover"
              />
              <div className="flex flex-col gap-4">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80"
                  alt="Consult"
                  className="rounded-2xl w-full h-[120px] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=600&q=80"
                  alt="Care"
                  className="rounded-2xl w-full h-[124px] object-cover"
                />
              </div>
            </div>

            {/* Floating Stat Card */}
            <div className="absolute top-8 right-4 lg:right-[-10px] bg-white p-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.12)] flex items-center gap-3 z-10 border border-borderColor/50">
              <div className="text-3xl font-bold text-primaryTeal">98%</div>
              <div className="text-[11px] font-semibold text-darkText leading-tight">
                Positive
                <br />
                Feedback
              </div>
            </div>

            {/* Support Card */}
            <div className="absolute bottom-[-10px] left-4 lg:left-[-10px] bg-primaryTeal text-white p-4 rounded-2xl shadow-xl flex items-center gap-3 z-10">
              <div className="bg-white/20 p-2.5 rounded-full">
                <FaHeartbeat className="text-lg" />
              </div>
              <div>
                <h4 className="font-semibold text-[13px] mb-0.5">24/7 Support</h4>
                <p className="text-[10px] opacity-90 max-w-[120px] leading-tight">
                  Contact our clinic anytime you need.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2 lg:pl-6">
            <span className="uppercase tracking-widest text-[10px] font-semibold text-primaryTeal mb-3 block">
              Why Choose Us
            </span>
            <h2 className="text-[28px] md:text-[32px] font-bold text-darkText leading-tight mb-5">
              Why Patients Trust Romedic
            </h2>
            <p className="text-[12px] text-bodyText mb-6 leading-relaxed">
              Romedic is an established medical center with a long history of
              providing high-quality care to patients. Our team of specialists
              ensures you receive the best treatment available.
            </p>

            <ul className="flex flex-col gap-3 mb-8">
              {checklist.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2.5 text-sm text-darkText font-semibold"
                >
                  <FaCheckCircle className="text-primaryTeal text-lg flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Video Thumbnail */}
            <div className="relative rounded-2xl overflow-hidden group cursor-pointer max-w-[240px]">
              <img
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80"
                alt="Video Tour"
                className="w-full h-[100px] object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                <div className="bg-white text-primaryTeal w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                  <FaPlay className="text-[10px] ml-0.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
