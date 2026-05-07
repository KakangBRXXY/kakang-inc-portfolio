import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Monitor, ShoppingCart, Folder } from 'lucide-react'; // Github dihapus

const projects = [
  {
    title: "Sistem Monitoring Siswa PKL",
    desc: "Aplikasi manajemen untuk memantau kehadiran dan progres laporan jurnal harian siswa secara real-time.",
    tech: ["PHP", "MySQL", "Bootstrap", "Laravel", "Agile Development"],
    icon: <Monitor className="w-6 h-6 text-cyan-400" />,
    link: "https://github.com/KakangBRXXY" 
  },
  {
    title: "Aplikasi Kasir (Development)", // Judul diperbarui
    desc: "Sistem POS dengan integrasi API. Saat ini dalam tahap pengembangan optimasi modul payment E-Wallet.",
    tech: ["PHP", "REST API", "JavaScript", "Laravel", "Via Github"],
    icon: <ShoppingCart className="w-6 h-6 text-blue-400" />,
    link: "#"
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
            className="group relative bg-white/[0.03] border border-white/10 p-8 rounded-3xl overflow-hidden"
          >
            {/* Dekorasi Background */}
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500" />
            
            <div className="mb-6 p-3 w-fit bg-white/5 rounded-2xl border border-white/10">
              {item.icon}
            </div>

            <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
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
              className="flex items-center gap-2 text-sm font-semibold hover:gap-4 transition-all duration-300"
            >
              Learn More <span className="text-cyan-500">→</span>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;