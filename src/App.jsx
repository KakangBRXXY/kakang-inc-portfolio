import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import logoBrand from './assets/logo-brand.png';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="bg-dark min-h-screen text-white overflow-x-hidden selection:bg-cyan-500/30">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 z-[100] origin-left" style={{ scaleX }} />
      
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 bg-cyan-400/40 rounded-full blur-2xl pointer-events-none z-[9999] hidden md:block"
        animate={{ x: mousePos.x - 24, y: mousePos.y - 24 }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      
      {/* --- FOOTER SECTION --- */}
      <footer className="relative pt-24 pb-10 px-6 border-t border-white/5 bg-black/20 overflow-hidden">
        {/* Background Decoration (Glow di pojok) */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-500/5 blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-16">
            
            {/* Sisi Kiri: Branding */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
              {/* Bagian Logo Baru di Footer */}
              <img 
                src={logoBrand} 
                alt="kakang.inc logo" 
                className="w-12 h-12 object-contain" 
              />
              <div>
                <h4 className="text-xl font-bold tracking-tighter text-white">kakang.inc</h4>
                <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em]">Digital Identity System</p>
              </div>
            </div>
              <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
                Membangun solusi digital dari masa depan dengan teknologi masa kini. Mari kita buat Indonesia selangkah lebih maju.
              </p>
            </div>

            {/* Sisi Kanan: Quick Links */}
            <div className="grid grid-cols-2 gap-12 md:gap-24">
              <div className="space-y-4">
                <h5 className="text-white text-sm font-bold uppercase tracking-widest">Navigation</h5>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li><a href="#home" className="hover:text-cyan-400 transition-colors">Home</a></li>
                  <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
                  <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h5 className="text-white text-sm font-bold uppercase tracking-widest">Connect</h5>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li><a href="https://instagram.com/kakang.inc" className="hover:text-cyan-400 transition-colors">Instagram</a></li>
                  <li><a href="https://github.com/KakangBRXXY" className="hover:text-cyan-400 transition-colors">Github</a></li>
                  <li><a href="mailto:rizan@kakang.inc" className="hover:text-cyan-400 transition-colors">Email</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Branding (Besar tapi samar) */}
          <div className="relative border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="order-2 md:order-1 text-center md:text-left">
              <p className="text-gray-600 text-[10px] uppercase tracking-[0.5em] mb-1">Developed By</p>
              <p className="text-white text-sm font-medium tracking-tight">
                Ridho Dzakhwan <span className="text-gray-600">© 2026</span>
              </p>
            </div>
            
            {/* Status Batch */}
            <div className="order-1 md:order-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">System Operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;