import React from "react";
import { FaHospitalSymbol } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primaryTeal relative overflow-hidden text-white pt-14">
      {/* Decorative Grid Lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "25% 100%",
        }}
      ></div>
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "100% 25%",
        }}
      ></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-10">
          {/* Column 1 (Wider) */}
          <div className="lg:col-span-5 flex flex-col pr-0 lg:pr-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-transparent border-2 border-white text-white p-1 rounded-md">
                <FaHospitalSymbol className="text-xl" />
              </div>
              <span className="text-xl font-bold tracking-tight">Romedic</span>
            </div>
            <p className="text-white/90 mb-6 leading-relaxed text-[12px] max-w-md">
              Donec rhoncus sapien sed dui pulvinar, sed dignissim ex tempus.
              Integer porttitor euismod dolor, ut tempor nisl ultrices ac. Donec
              consequat sapien est.
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              <div>
                <span className="text-white/80 text-[10px] block mb-1">
                  Need more help?
                </span>
                <span className="font-bold text-base">+123 456 789</span>
              </div>
              <div>
                <span className="text-white/80 text-[10px] block mb-1">
                  Email support
                </span>
                <span className="font-bold text-base">hello@romedic.com</span>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="lg:col-span-3 lg:pl-8">
            <h4 className="text-base font-bold mb-4">Services</h4>
            <ul className="flex flex-col gap-2 text-[12px] text-white/90 font-medium">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  General Health Checkups
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Emergency & Urgent Care
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cardiology & Heart Health
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pediatrics & Family Medicine
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Orthopedic & Physiotherapy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Diagnostic Imaging & Lab Tests
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-bold mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2 text-[12px] text-white/90 font-medium">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Appointment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-bold mb-4">Socials</h4>
            <ul className="flex flex-col gap-2 text-[12px] text-white/90 font-medium">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/80 font-medium">
          <p>Hospital & Medical Clinic Template Kit by FoxCreation Studio</p>
          <p>Copyright © 2025. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
