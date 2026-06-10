import React from "react";

const CTASection = () => {
  return (
    <section className="relative pt-32 pb-0 bg-[#F8F9FA] overflow-visible">
      
      {/* Full-width Teal Banner */}
      <div className="relative w-full min-h-[280px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        {/* Teal Overlay */}
        <div className="absolute inset-0 bg-[#3BB094]/85" />

        {/* Constrained Content Wrapper */}
        <div className="relative z-30 container-custom max-w-[1100px] mx-auto h-full flex items-center">
          
          {/* Doctor Image (Absolute positioned to break out of top) */}
          <div className="absolute bottom-0 left-[5%] lg:left-[8%] h-[125%] z-20 pointer-events-none hidden md:block">
            <img
              src="https://www.freepnglogos.com/uploads/doctor-png/doctor-bulk-billing-doctors-chapel-hill-health-care-medical-3.png"
              alt="Doctor"
              className="h-full w-auto object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
            />
          </div>

          {/* Text Content */}
          <div className="w-full px-6 md:px-0 md:pl-[45%] lg:pl-[50%] py-14 lg:py-16 text-center md:text-left relative z-30">
            <h2 className="text-white font-bold leading-tight text-[28px] lg:text-[34px] max-w-[500px] mx-auto md:mx-0">
              Ready to Take the First Step in Your Health Journey?
            </h2>

            <p className="mt-4 text-white/90 text-[12px] lg:text-[13px] leading-relaxed max-w-[480px] mx-auto md:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <button className="mt-6 bg-white text-primaryTeal px-7 py-3 rounded-full text-[13px] font-bold transition-all duration-300 hover:bg-lightBg shadow-lg">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;