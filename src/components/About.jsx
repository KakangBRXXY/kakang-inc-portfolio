import React from 'react';
import { motion } from 'framer-motion';
import fotoRizan from '../assets/foto-profil.png'; 

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-3 gap-12 items-center"
      >
        <div className="order-2 md:order-1 space-y-6">
          <h3 className="text-2xl font-bold shiny-text">Professional Profile</h3>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            Halo, saya <span className="text-white font-semibold">Ridho Dzakhwan</span>, akrab disapa <span className="text-white font-semibold">Rizan</span>. 
            Saat ini saya adalah siswa kelas XI jurusan <span className="text-cyan-400">Rekayasa Perangkat Lunak (RPL)</span>. 
            Saya memiliki dedikasi tinggi dalam mengeksplorasi dunia <span className="italic">Frontend Development</span> dan arsitektur API. 
            Fokus utama saya adalah mentransformasi logika kompleks menjadi antarmuka yang intuitif dan modern.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-500">Age</p>
              <p className="text-sm font-medium">18 Years Old</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-500">Location</p>
              <p className="text-sm font-medium">Cimahi, West Java</p>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 flex flex-col items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border border-white/10">
              <img 
    src={fotoRizan} 
    alt="Ridho Dzakhwan" 
    className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
  />
            </div>

            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-xl border border-cyan-500/30 px-6 py-2 rounded-full shadow-2xl"
            >
              <span className="text-[10px] font-bold tracking-[0.3em] text-cyan-400 uppercase">
                Ready for PKL
              </span>
            </motion.div>
          </div>
        </div>

        <div className="order-3 space-y-6 text-left md:text-right">
          <h3 className="text-2xl font-bold text-white tracking-tight">Vision & Branding</h3>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            Melalui <span className="text-white font-semibold italic text-lg">kakang.inc</span>, saya membangun identitas profesional untuk menghadirkan solusi digital yang inovatif. 
            Saya berfokus pada pengembangan aplikasi web terintegrasi yang tidak hanya estetik secara visual, 
            namun juga memiliki performa tinggi serta skalabilitas melalui pemanfaatan teknologi modern.
          </p>
          <div className="flex flex-wrap md:justify-end gap-2 pt-2">
            {['React', 'Vite', 'JavaScript', 'CSS', 'API Integration', 'Tailwind CSS', 'Figma', 'Git', 'Node.js', 'Laravel', 'MySQL'].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-medium border border-white/10 text-gray-300">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;