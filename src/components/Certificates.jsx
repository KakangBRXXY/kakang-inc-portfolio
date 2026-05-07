import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ShieldCheck, Zap, Globe, Cpu, X } from 'lucide-react';

const certCategories = [
  { 
    id: 'alibaba',
    title: "Alibaba Cloud Certification", 
    count: "10 Certificates", 
    provider: "Alibaba Cloud",
    icon: <Award className="text-orange-400" />,
    color: "group-hover:border-orange-500/50",
    // Contoh path gambar (sesuaikan dengan nama file di assets lu nanti)
    images: ["/certs/alibaba-1.jpeg", "/certs/alibaba-2.jpeg", "/certs/alibaba-3.jpeg", "/certs/alibaba-4.jpeg", "/certs/alibaba-5.jpeg", "/certs/alibaba-6.jpeg", "/certs/alibaba-7.jpeg", "/certs/alibaba-8.jpeg", "/certs/alibaba-9.jpeg", "/certs/alibaba-10.jpeg"] 
  },
  { 
    id: 'microsoft-ioe',
    title: "IOE x Microsoft Integration", 
    count: "10 Certificates", 
    provider: "Microsoft & IOE",
    icon: <Award className="text-blue-400" />,
    color: "group-hover:border-blue-500/50",
    images: ["/certs/ioe-1.png", "/certs/ioe-2.png", "/certs/ioe-3.png", "/certs/ioe-4.png", "/certs/ioe-5.png", "/certs/ioe-6.png", "/certs/ioe-7.png", "/certs/ioe-8.png", "/certs/ioe-9.png", "/certs/ioe-10.png"]
  },
  { 
    id: 'Telkom Indonesia',
    title: "Telkom Certifications",
    count: "3 Certificates",
    provider: "Telkom Indonesia",
    icon: <Award className="text-red-400" />,
    color: "group-hover:border-red-500/50",
    images: ["/certs/telkom-1.jpeg", "/certs/telkom-2.jpeg", "/certs/telkom-3.jpg"]
  },
  { 
    id: 'Microsoft',
    title: "Microsoft Certifications",
    count: "1 Certificate",
    provider: "Microsoft",
    icon: <Award className="text-grey-400" />,
    color: "group-hover:border-grey-500/50",
    images: ["/certs/microsoft.jpeg", ]
  },
  { 
    id: 'Dicoding',
    title: "Dicoding Certifications",
    count: "1 Certificate",
    provider: "Dicoding Indonesia",
    icon: <Award className="text-blue-300" />,
    color: "group-hover:border-blue-500/20",
    images: ["/certs/dicoding.jpeg"]
  },
  { 
    id: 'Industry Visit Certification',
    title: "Industry Visit Certifications",
    count: "1 Certificate",
    provider: "Industry Visit From School",
    icon: <Award className="text-purple-400" />,
    color: "group-hover:border-purple-500/20",
    images: ["/certs/industry-visit.jpeg"]
  },
  { 
    id: 'Achievement Certification',
    title: "Achievement Certifications",
    count: "1 Certificate",
    provider: "Other Achievements",
    icon: <Award className="text-blue-300" />,
    color: "group-hover:border-blue-500/20",
    images: ["/certs/achievement.jpeg"]
  }
  
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">
          Professional <span className="shiny-text">Certifications</span>
        </h2>
        <p className="text-gray-500 max-w-2xl text-lg">
          Kumpulan sertifikasi internasional dan nasional sebagai bukti kompetensi dan prestasi.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certCategories.map((cert, index) => (
          <motion.div
            key={index}
            onClick={() => setSelectedCert(cert)} // Klik kartu buat buka
            className={`group p-8 bg-white/[0.02] border border-white/5 rounded-[2rem] transition-all duration-500 cursor-pointer ${cert.color} hover:bg-white/[0.04]`}
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  {cert.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{cert.title}</h3>
                <p className="text-gray-500 text-sm mb-6">{cert.provider}</p>
              </div>
              
              <div className="flex items-center justify-between mt-4">
                <span className="px-4 py-1.5 bg-white/5 rounded-full text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                  {cert.count}
                </span>
                <div className="text-white/20 group-hover:text-cyan-400 transition-colors">
                   <Zap size={18} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL OVERLAY */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedCert(null)} // Klik luar buat tutup
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-5xl w-full max-h-[80vh] overflow-y-auto bg-white/[0.05] border border-white/10 p-6 md:p-10 rounded-[3rem]"
              onClick={(e) => e.stopPropagation()} // Biar klik dalem nggak nutup
            >
              <button 
                className="absolute top-6 right-6 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                onClick={() => setSelectedCert(null)}
              >
                <X size={24} />
              </button>

              <div className="mb-8 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">{selectedCert.title}</h3>
                <p className="text-gray-400 text-sm">{selectedCert.provider} — {selectedCert.count}</p>
              </div>

              {/* GRID GAMBAR DI DALEM MODAL */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedCert.images.map((img, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden border border-white/10 group">
                    <img 
                      src={img} 
                      alt={`Cert ${i}`} 
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
                      onError={(e) => { e.target.src = "https://placehold.co/600x400/1a1a1a/ffffff?text=Sertifikat+Belum+Upload"; }} // Fallback kalau foto belum ada
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;