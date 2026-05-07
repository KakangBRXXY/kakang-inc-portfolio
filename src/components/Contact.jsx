import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

// Kita cuma pakai Send dari Lucide, kalau ini masih error, nanti kita ganti manual juga.
import { Send } from 'lucide-react'; 

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm('service_d7orxdo', 'template_j12ukp4', form.current, '7-b37vqfHN5dpl443')
      .then(() => {
          // Ganti teksnya jadi lebih meyakinkan
          setStatus('Pesan terkirim secara Real-time ke Inbox Rizan! ✅');
          form.current.reset();
      }, (error) => {
          setStatus('Gagal terkirim. Cek koneksi internet lu ya.');
      })
      .finally(() => {
          setIsSending(false);
          // Biar statusnya nggak ilang cepet-cepet, kasih waktu biar dibaca
          setTimeout(() => setStatus(''), 8000);
      });
  };

  // Kumpulan Ikon High-Res (SVG)
  const icons = {
    instagram: "https://api.iconify.design/line-md:instagram.svg?color=%2306b6d4",
    github: "https://api.iconify.design/line-md:github-loop.svg?color=%2306b6d4",
    linkedin: "https://api.iconify.design/line-md:linkedin.svg?color=%2306b6d4",
    mail: "https://api.iconify.design/line-md:email.svg?color=%2306b6d4",
    location: "https://api.iconify.design/line-md:map-marker.svg?color=%2306b6d4"
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16">
        
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">Get in <span className="shiny-text">Touch</span></h2>
            <p className="text-gray-400">Punya project seru atau tawaran bisnis ? Mari kita bicarakan!</p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center border border-white/10">
                <img src={icons.location} className="w-6 h-6" alt="location" />
              </div>
              <p>Cimahi, Jawa Barat, Indonesia</p>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center border border-white/10">
                <img src={icons.mail} className="w-6 h-6" alt="email" />
              </div>
              <p>ridhodzakhwan30@outlook.com</p>
            </div>
            <div className="flex items-center gap-2 mt-1">
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
  </span>
  <span className="text-[10px] text-cyan-400/80 uppercase tracking-widest font-bold">
    Real-time Monitoring Email Active 
  </span>
</div>
          </div>

          <div className="pt-8 flex gap-4 flex-wrap">
            {[
              { img: icons.instagram, link: "https://instagram.com/justrizan_", label: "Personal" },
              { img: icons.instagram, link: "https://instagram.com/kakang.inc", label: "Brand" },
              { img: icons.github, link: "https://github.com/KakangBRXXY", label: "Github" },
              { img: icons.linkedin, link: "https://linkedin.com", label: "LinkedIn" },
            ].map((social, i) => (
              <motion.a
                key={i}
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}
                href={social.link}
                target="_blank"
                className="p-4 bg-white/5 border border-white/10 rounded-2xl text-gray-400 hover:text-white transition-all flex flex-col items-center gap-2 min-w-[80px]"
              >
                <img src={social.img} className="w-6 h-6" alt={social.label} />
                <span className="text-[8px] uppercase tracking-widest">{social.label}</span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* FORM TETEP SAMA */}
        <motion.div className="bg-white/[0.02] border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-xl">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">Name</label>
              <input type="text" name="user_name" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan-500/50 transition-all text-white" placeholder="Your Name" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">Email</label>
              <input type="email" name="user_email" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan-500/50 transition-all text-white" placeholder="email@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">Message</label>
              <textarea name="message" rows="4" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan-500/50 transition-all resize-none text-white" placeholder="What's on your mind?"></textarea>
            </div>
            
            <button type="submit" disabled={isSending} className="w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-cyan-400 transition-all flex items-center justify-center gap-2 disabled:opacity-50">
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
            {status && <p className="text-center text-sm mt-4 text-cyan-400 font-medium">{status}</p>}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;