import React from 'react';
import { motion } from 'framer-motion';
// Tambahin Sparkles di import lucide-react
import { ExternalLink, Monitor, ShoppingCart, Folder, Sparkles } from 'lucide-react';

const projects = [
  {
    title: "Chatbot Kuliner Nusantara (Gemini AI 2.5 Flash)",
    desc: "AI Chatbot Kuliner Indonesia berbasis Gemini AI 2.5 Flash. Memberikan rekomendasi resep, inspirasi menu harian, dan analisis tren kuliner Nusantara secara real-time dengan respons cepat dan akurat.",
    tech: ["Gemini AI", "React", "API Integration", "Vite", "Node.js", "Postman"],
    icon: <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />, // Pake warna ungu + animasi pulse
    link: "https://github.com/KakangBRXXY/Chatbot_Kuliner_Nusantara",
    isFeatured: true // Kita kasih penanda khusus
  },
  {
    title: "Sistem Monitoring Siswa PKL",
    desc: "Aplikasi manajemen untuk memantau kehadiran dan progres laporan jurnal harian siswa secara real-time.",
    tech: ["PHP", "MySQL", "Bootstrap", "Laravel", "Agile Development"],
    icon: <Monitor className="w-6 h-6 text-cyan-400" />,
    link: "https://github.com/KakangBRXXY/Laporan_Project_Front_End" 
  },
  {
    title: "Aplikasi Kasir (Development)",
    desc: "Laporan Front - END pengembangan aplikasi monitoring siswa. Saat ini dalam tahap pengembangan optimasi UI dan UX untuk Supervisor.",
    tech: ["PHP", "REST API", "JavaScript", "Laravel", "Via Github"],
    icon: <ShoppingCart className="w-6 h-6 text-blue-400" />,
    link: "https://github.com/KakangBRXXY/FinanceApp-RidhoDzakhwanXI"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="shiny-text">Projects</span></h2>
          <p className="text-gray-500 max-w-md">Kumpulan project yang pernah saya kerjakan dalam pengembangan web dan integrasi sistem.</p>
        </div>
        <a href="https://github.com/KakangBRXXY" target="_blank" className="text-sm font-medium text-gray-400 hover:text-cyan-400 transition flex items-center gap-2 border-b border-white/10 pb-1">
          View Github <ExternalLink size={14} />
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -10 }}
            // Tambahin logic border kalau dia project AI (isFeatured)
            className={`group relative bg-white/[0.03] border ${item.isFeatured ? 'border-purple-500/30' : 'border-white/10'} p-8 rounded-3xl overflow-hidden`}
          >
            {/* Background Glow khusus AI (Ungu) atau Standar (Cyan) */}
            <div className={`absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full blur-3xl ${item.isFeatured ? 'group-hover:bg-purple-500/20' : 'group-hover:bg-cyan-500/20'} transition-all duration-500`} />
            
            {/* Badge buat Project AI */}
            {item.isFeatured && (
                <div className="absolute top-8 right-8 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full">
                    <span className="text-[10px] text-purple-400 font-bold tracking-widest uppercase">AI Model</span>
                </div>
            )}

            <div className="mb-6 p-3 w-fit bg-white/5 rounded-2xl border border-white/10">
              {item.icon}
            </div>

            <h3 className={`text-xl font-bold mb-3 ${item.isFeatured ? 'group-hover:text-purple-400' : 'group-hover:text-cyan-400'} transition-colors`}>
              {item.title}
            </h3>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {item.desc}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {item.tech.map((t) => (
                <span key={t} className="text-[10px] px-3 py-1 bg-white/5 rounded-full border border-white/5 text-gray-500">
                  {t}
                </span>
              ))}
            </div>

            <a 
              href={item.link} 
              className={`flex items-center gap-2 text-sm font-semibold hover:gap-4 transition-all duration-300 ${item.isFeatured ? 'text-purple-400' : 'text-white'}`}
            >
              Learn More <span className={item.isFeatured ? 'text-purple-500' : 'text-cyan-500'}>→</span>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;