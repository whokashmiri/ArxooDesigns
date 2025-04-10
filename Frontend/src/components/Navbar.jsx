import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react"; // Optional, for dropdown arrow

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-20 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#af7942]" : ""
      }`}
    >
      <div className="max-w-7xl mt-3 mx-auto px-6 py-4 flex items-center justify-between text-white font-sans font-semibold text-sm">
        
        {/* Left: Logo */}
        <div className="uppercase text-xl tracking-widest">
          ARZOO
        </div>

        {/* Center: Navigation */}
        <div className="hidden md:flex gap-10 items-center">
          <div className="flex items-center gap-1 cursor-pointer">
            <span>All Pages</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <a href="#about" className="text-lg hover:text-gray-200">About Us</a>
          <a href="#blog" className="text-lg hover:text-gray-200">Blog</a>
          <a href="#contact" className="text-lg hover:text-gray-200">Contact</a>
          <a href="#services" className="text-lg hover:text-gray-200">Services</a>

        </div>

        {/* Right: Contact Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="uppercase border border-white px-8 py-4 text-white text-sm hover:bg-white hover:text-black transition-all duration-200  "
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}
