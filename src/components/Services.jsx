import React from "react";
import { servicesData } from "../data/content";
import * as FaIcons from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

const DynamicFaIcon = ({ name }) => {
  const IconComponent = FaIcons[name];

  if (!IconComponent) {
    return <FaIcons.FaBriefcaseMedical />;
  }

  return <IconComponent />;
};

const Services = () => {
  return (
    <section id="services" className="py-14 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-10 gap-6">
          <div className="w-full lg:w-[55%]">
            <span className="uppercase tracking-[0.2em] text-[9px] font-bold text-primaryTeal mb-3 block">
              WHAT WE OFFER
            </span>

            <h2 className="text-[28px] md:text-[32px] font-semibold leading-[1.2] text-darkText max-w-[520px]">
              Comprehensive Medical Services for Every Stage of Life
            </h2>
          </div>

          <div className="w-full lg:w-[35%] flex flex-col items-start">
            <p className="text-[#7B8794] text-[12px] leading-5 max-w-[280px] mb-4">
              We are committed to delivering world-class healthcare that is
              accessible, efficient, and patient-centered.
            </p>

            <button className="bg-darkTeal text-white px-5 py-2 rounded-full text-[12px] font-semibold hover:bg-secondaryTeal transition-colors">
              View More
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[900px] mx-auto">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-[8px] overflow-hidden border border-[#ECECEC] flex flex-col"
            >
              {/* Card Header */}
              <div className="bg-primaryTeal px-4 py-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full border border-white flex items-center justify-center text-white text-sm shrink-0">
                  <DynamicFaIcon name={service.icon} />
                </div>

                <h3 className="text-[13px] font-semibold text-white leading-[1.3]">
                  {service.title}
                </h3>
              </div>

              {/* Image */}
              <div className="h-[140px] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="px-4 py-3 bg-[#F9F9F9] flex flex-col flex-grow">
                <p className="text-[11px] text-[#6B7280] leading-[1.7] mb-3">
                  {service.description ||
                    "Regular health assessments for early disease detection. Lorem ipsum dolor sit amet."}
                </p>

                <a
                  href="#"
                  className="flex items-center gap-2 text-primaryTeal text-[11px] font-semibold"
                >
                  View Details
                  <FaArrowCircleRight className="text-[12px]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;