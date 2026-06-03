import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden text-white flex items-center">
      {/* Dynamic Liquid/Gradient Background - we remove the previous one as App bounds the background */}
      
      {/* Side Elements */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-8 opacity-20">
        <div className="w-[1px] h-20 bg-white"></div>
        <div className="text-[10px] font-bold uppercase tracking-[0.5em] rotate-180" style={{ writingMode: 'vertical-rl' }}>INDIA'S PRIDE</div>
        <div className="w-[1px] h-20 bg-white"></div>
      </div>

      {/* Hero Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        <div className="col-span-1 lg:col-span-6 flex flex-col justify-center gap-6 mt-16 md:mt-0 items-center lg:items-start text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/10"
          >
            <span className="text-[10px] font-bold text-[#FFD447] uppercase tracking-tighter">New Era</span>
            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
            <span className="text-[10px] font-medium opacity-70 uppercase tracking-tighter">India's Iconic Cola</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-[80px] lg:text-[90px] leading-[0.9] font-black tracking-tighter italic uppercase"
          >
            India's Original<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">Is Back.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg opacity-80 max-w-md leading-relaxed mx-auto lg:mx-0"
          >
            Bold Taste. New Energy. One Iconic Brand. Reimagined for the generation that refuses to follow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-6 mt-4"
          >
            <button className="h-16 px-10 bg-white text-black font-black uppercase tracking-tighter text-lg flex items-center gap-4 hover:scale-105 transition-transform rounded-sm">
              Explore Campa 
              <ArrowRight className="w-5 h-5" />
            </button>
            <div className="flex flex-col justify-center text-left">
              <span className="text-[10px] opacity-40 uppercase tracking-widest">Available In</span>
              <span className="text-sm font-bold">500,000+ Outlets</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Interactive Elements */}
        <div className="col-span-1 lg:col-span-6 relative h-[600px] flex justify-center items-center">
            {/* Floating 3D-style Can Visual */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, type: "spring" }}
              className="relative w-72 md:w-80 h-[500px] md:h-[550px] bg-gradient-to-b from-[#E31937] to-[#8c0f21] rounded-[60px] shadow-2xl flex flex-col items-center justify-between py-12 border-[6px] border-white/5 overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/10 to-transparent"></div>
              
              <div className="relative z-10 text-[100px] font-black opacity-10 tracking-tighter rotate-90 mt-20 select-none">COLA</div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="text-5xl font-black italic tracking-tighter mb-1">CAMPA</div>
                <div className="h-[2px] w-12 bg-[#FFD447]"></div>
                <div className="text-[10px] font-bold tracking-[0.5em] mt-2 opacity-80 uppercase">Original</div>
              </div>
              
              <motion.div 
                animate={{ rotate: [-12, -8, -12] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -right-8 w-32 h-32 bg-[#FFD447] text-black rounded-full flex flex-col items-center justify-center -rotate-12 border-4 border-[#121212] z-20"
              >
                <span className="text-[10px] font-black uppercase leading-none">Refreshing</span>
                <span className="text-2xl font-black leading-none">BOLD</span>
                <span className="text-[10px] font-black uppercase leading-none">Flavor</span>
              </motion.div>
            </motion.div>

            {/* Interactive Floating Card */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="hidden lg:block absolute bottom-10 -left-10 p-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl w-60 shadow-2xl"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-[#FFD447] rounded-lg">
                  <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                </div>
                <span className="text-[10px] opacity-50 uppercase font-bold tracking-tighter">Rating 4.9/5</span>
              </div>
              <p className="text-xs font-medium leading-relaxed opacity-90">
                "The nostalgia is real. But the taste? That's futuristic. My new daily favorite."
              </p>
              <p className="text-[9px] mt-2 font-bold text-[#E31937] uppercase">— Rohan M, Bangalore</p>
            </motion.div>
        </div>
      </motion.div>

      {/* Floating Bubbles */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "110vh", opacity: 0, x: Math.random() * 100 + "vw" }}
            animate={{ 
              y: "-10vh", 
              opacity: [0, 0.5, 0],
              x: `calc(${Math.random() * 100}vw + ${Math.random() * 50 - 25}px)`
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            className="absolute bottom-0 w-4 h-4 rounded-full border border-white/20 backdrop-blur-sm shadow-[0_0_10px_rgba(255,255,255,0.3)] bg-white/5"
            style={{
              width: Math.random() * 20 + 10 + 'px',
              height: Math.random() * 20 + 10 + 'px',
            }}
          />
        ))}
      </div>
    </section>
  );
}
