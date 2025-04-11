import {
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
    FaRegEnvelope,
  } from "react-icons/fa";
  
  const Footer = () => {
    return (
      <footer className="bg-black text-white px-6 md:px-20 py-14">
        {/* Two main sections with equal width */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Brand Info */}
          <div>
            <h2 className="text-4xl tracking-wider font-semibold mb-4">ARZOO</h2>
            <p className="text-gray-300 leading-relaxed">
              We are passionate about creating stunning and functional interiors
              that elevate your living and working spaces.
            </p>
  
            {/* Social Icons */}
            <div className="flex gap-4 mt-6 text-white text-xl">
              <a href="#" className="hover:text-gray-400 transition-colors"><FaFacebookF /></a>
              <a href="#" className="hover:text-gray-400 transition-colors"><FaLinkedinIn /></a>
              <a href="#" className="hover:text-gray-400 transition-colors"><FaInstagram /></a>
              <a href="#" className="hover:text-gray-400 transition-colors"><FaRegEnvelope /></a>
            </div>
          </div>
  
          {/* Menu + Hours */}
          <div className="grid sm:grid-cols-2 gap-10">
            {/* Menu */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Menu</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition">Home</a></li>
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
  
            {/* Hours */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Hours</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Sun: CLOSED</li>
                <li>Mon to Sun: 8 AM–6PM</li>
                <li>Sat to Fri: 09AM–6PM</li>
              </ul>
            </div>
          </div>
        </div>
  
        {/* Divider & Footer Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
          © Copyright 2025. All Rights Reserved by ARZOO
        </div>
      </footer>
    );
  };
  
  export default Footer;
  