import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, Mail, Download, Menu, X } from 'lucide-react';

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home", icon: <Home size={20} /> },
    { name: "About", href: "#about", icon: <User size={20} /> },
    { name: "Projects", href: "#projects", icon: <Briefcase size={20} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={20} /> },
  ];

  return (
    <div className="md:hidden">
      {/* 1. FLOATING DOWNLOAD CV (Kanan Bawah) */}
      <motion.a
        href="/CV_Ridho_Dzakhwan.pdf"
        download
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-24 right-6 z-[60] w-14 h-14 bg-white text-black rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-90"
      >
        <Download size={24} />
      </motion.a>

      {/* 2. BOTTOM DOCK NAV (Tengah Bawah) */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] w-[90%] max-w-[400px]">
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-[2rem] p-2 flex justify-between items-center shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="p-4 text-gray-400 hover:text-cyan-400 transition-colors"
            >
              {link.icon}
            </a>
          ))}
          
          {/* Menu Button buat Branding/Info Tambahan */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* 3. FULLSCREEN MENU (Muncul pas Menu di-klik) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed inset-0 z-[55] bg-black/90 backdrop-blur-2xl p-10 flex flex-col justify-center items-center gap-8"
          >
            <div className="text-3xl font-bold shiny-text mb-10 italic text-center">
                kakang.inc
                <p className="text-[10px] text-gray-500 uppercase tracking-[0.5em] not-italic">Identity System</p>
            </div>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-4xl font-bold tracking-tighter text-white hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavigation;