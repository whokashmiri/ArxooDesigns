import {  useEffect } from "react";
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css"; 
     

export default function Navbar() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);



  return (
    <nav
      className="fixed top-0 left-0 w-full h-20 z-50 transition-colors duration-300 ${
        bg-[#af7942]"
    >
      <div className="max-w-7xl mt-3 mx-auto px-6 py-4 flex items-center justify-between text-white font-sans font-semibold text-sm">
        
        {/* Left: Logo */}
        <div className="uppercase text-xl tracking-widest" data-aos="fade-right">
          ARZOO
        </div>

        {/* Center: Navigation */}
        <div className="hidden md:flex gap-10 items-center">
        <Link to="/home" className="text-lg hover:text-gray-200">
    Home
  </Link>
  <Link to="/about" className="text-lg hover:text-gray-200">
    About Us
  </Link>
  <Link to="/contact" className="text-lg hover:text-gray-200">
    Contact
  </Link>
  <Link to="/services" className="text-lg hover:text-gray-200">
    Services
  </Link>
</div>

        {/* Right: Contact Button */}
        <div className="hidden md:block">
          <Link
            href="contact"
            className="uppercase border border-white px-8 py-4 text-white text-sm hover:bg-white hover:text-black transition-all duration-200  "
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
