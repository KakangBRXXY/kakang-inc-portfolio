import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react'; // Tambahin import ini

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4 ${
        scrolled ? 'bg-black/20 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter shiny-text">
          kakang.inc
        </div>
        
        {/* Tambahin items-center biar tombolnya sejajar sama teks menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          
          {/* TOMBOL CV NYELIP DI SINI */}
          <a 
            href="/CV_Ridho_Dzakhwan.pdf" 
            download
            className="ml-2 px-8 py-1 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition]"
          >
            CV 
          </a>
        </div>

      </div>
    </motion.nav>
  );
};

export default Navbar;