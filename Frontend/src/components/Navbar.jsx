import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // or use any icon library

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-20 z-50 bg-[#af7942] transition-colors duration-300">
      <div className="max-w-7xl mt-3 mx-auto px-6 py-4 flex items-center justify-between text-white font-sans font-semibold text-sm">
        {/* Logo */}
        <div className="uppercase text-xl tracking-widest" data-aos="fade-right">
          ARZOO
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 items-center">
          <Link to="/home" className="text-lg hover:text-gray-200">Home</Link>
          <Link to="/about" className="text-lg hover:text-gray-200">About Us</Link>
          <Link to="/contact" className="text-lg hover:text-gray-200">Contact</Link>
          <Link to="/services" className="text-lg hover:text-gray-200">Services</Link>
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="uppercase border border-white px-8 py-4 text-white text-sm hover:bg-white hover:text-black transition-all duration-200"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#af7942] px-6 pt-4 pb-6 space-y-4 text-white font-semibold text-lg"
          >
            <Link onClick={closeMenu} to="/home" className="block hover:text-gray-200">Home</Link>
            <Link onClick={closeMenu} to="/about" className="block hover:text-gray-200">About Us</Link>
            <Link onClick={closeMenu} to="/contact" className="block hover:text-gray-200">Contact</Link>
            <Link onClick={closeMenu} to="/services" className="block hover:text-gray-200">Services</Link>
            <Link
              onClick={closeMenu}
              to="/contact"
              className="mt-2 inline-block uppercase border border-white px-6 py-2 text-sm hover:bg-white hover:text-black transition-all duration-200"
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
