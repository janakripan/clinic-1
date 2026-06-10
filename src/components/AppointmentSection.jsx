import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const AppointmentSection = () => {
  return (
    <section className="py-14 bg-primaryTeal overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          
          {/* Left: Image & Floating Card */}
          <div className="w-full lg:w-1/2 relative z-10 pl-4 lg:pl-8">
            <img 
              src="https://images.pexels.com/photos/5214995/pexels-photo-5214995.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Consultation" 
              className="rounded-2xl w-full h-[380px] object-cover shadow-2xl"
            />
            {/* Floating Schedule Card */}
            <div className="absolute -bottom-6 -left-2 md:-left-6 bg-[#E2F7F2] p-5 rounded-2xl shadow-xl w-[260px] border-4 border-white">
              <ul className="flex flex-col gap-3 mb-5 text-[12px] font-semibold text-darkText">
                <li className="flex justify-between items-center">
                  <span>Monday - Friday</span>
                  <span className="text-[10px]">9AM - 10PM</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Saturday</span>
                  <span className="text-[10px]">9AM - 10PM</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Sunday</span>
                  <span className="text-[10px]">10AM - 4PM</span>
                </li>
              </ul>
              <button className="w-full py-2 border-2 border-primaryTeal rounded-full flex items-center justify-center gap-2 text-primaryTeal font-bold hover:bg-primaryTeal hover:text-white transition-colors text-[12px]">
                <FaPhoneAlt className="text-[10px]" />
                +123 456 789 00
              </button>
            </div>
          </div>

          {/* Right: Content & Form */}
          <div className="w-full lg:w-1/2 lg:pl-10 relative z-10 mt-10 lg:mt-0">
            <span className="uppercase tracking-widest text-[10px] font-bold text-white/90 mb-3 block">
              BOOK AN APPOINTMENT
            </span>
            <h2 className="text-[28px] md:text-[32px] font-bold text-white leading-tight mb-6 max-w-lg">
              Easy, Fast, and Hassle-Free Medical Appointments
            </h2>
            
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl">
              <form className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name" className="w-full bg-[#F8F9FA] px-4 py-2.5 rounded-xl outline-none focus:ring-2 focus:ring-primaryTeal text-[12px] font-medium placeholder:text-gray-400" />
                  <input type="email" placeholder="Your Email" className="w-full bg-[#F8F9FA] px-4 py-2.5 rounded-xl outline-none focus:ring-2 focus:ring-primaryTeal text-[12px] font-medium placeholder:text-gray-400" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="tel" placeholder="Phone Number" className="w-full bg-[#F8F9FA] px-4 py-2.5 rounded-xl outline-none focus:ring-2 focus:ring-primaryTeal text-[12px] font-medium placeholder:text-gray-400" />
                  <input type="date" className="w-full bg-[#F8F9FA] px-4 py-2.5 rounded-xl outline-none focus:ring-2 focus:ring-primaryTeal text-[12px] font-medium text-gray-400" />
                </div>
                <select className="w-full bg-[#F8F9FA] px-4 py-2.5 rounded-xl outline-none focus:ring-2 focus:ring-primaryTeal text-[12px] font-medium text-gray-400 appearance-none">
                  <option value="">Select Services</option>
                  <option value="general">General Checkup</option>
                  <option value="cardio">Cardiology</option>
                  <option value="pediatrics">Pediatrics</option>
                </select>
                <textarea placeholder="Message" rows="3" className="w-full bg-[#F8F9FA] px-4 py-2.5 rounded-xl outline-none focus:ring-2 focus:ring-primaryTeal text-[12px] font-medium placeholder:text-gray-400 resize-none"></textarea>
                <button type="submit" className="w-full bg-darkTeal text-white py-3 rounded-full font-bold hover:bg-primaryTeal transition-colors mt-2 shadow-lg text-[13px]">
                  Make Appointment
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
