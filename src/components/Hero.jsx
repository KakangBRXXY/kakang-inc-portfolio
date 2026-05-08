import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-gray-400 font-medium tracking-[0.2em] mb-4 text-sm uppercase">
          Welcome to <span className="text-white">kakang.inc</span>
        </h2>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Crafting <span className="shiny-text">Modern Digital</span> <br /> 
          Experiences.
        </h1>

        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed mb-10">
          Siswa RPL dengan fokus pada <span className="text-white font-medium">Frontend Development</span>, 
          pembuatan AI, Website Designer dan integrasi API, siap berkarya.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
          >
            Lihat Project
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/6282129430742"
            target="_blank"
            className="px-8 py-3 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full font-medium hover:bg-white/10 transition"
          >
            Hubungi Saya
          </motion.a>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 text-gray-500"
      >
        ↓ scroll
      </motion.div>
    </section>
  );
};

export default Hero;