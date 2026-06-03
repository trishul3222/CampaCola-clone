import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, Trophy, Heart } from 'lucide-react';

const TIMELINE = [
  {
    year: "1970s",
    title: "The Original",
    description: "Born in India, for India. Campa created the taste of a generation.",
    icon: Trophy
  },
  {
    year: "1990s",
    title: "The Golden Era",
    description: "The unmistakable taste of celebrations, memories, and youth.",
    icon: Heart
  },
  {
    year: "Today",
    title: "The Revival",
    description: "Reimagined with modern quality, retaining the bold classic flavor.",
    icon: Sparkles
  }
];

export function BrandStory() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section className="py-32 bg-transparent text-white relative overflow-hidden">
      {/* Decorative grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-[80px] font-black mb-6 uppercase tracking-tighter italic text-[#E31937]"
          >
            Our Legacy
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 font-medium leading-relaxed"
          >
            More than a drink. It's the nostalgia of a billion people, crafted with uncompromising quality for the modern palate.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {TIMELINE.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * i }}
              className="relative p-8 rounded-[40px] bg-white/5 backdrop-blur-xl border border-white/10 hover:shadow-2xl hover:border-[#E31937]/50 transition-all group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-[#E31937]/20 transition-colors pointer-events-none">
                <item.icon className="w-32 h-32" />
              </div>
              <div className="w-14 h-14 bg-[#E31937] text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-red-600/20">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-[50px] leading-[0.8] font-black italic tracking-tighter text-white/20 mb-4">{item.year}</h3>
              <h4 className="text-2xl font-bold mb-4 uppercase tracking-tighter">{item.title}</h4>
              <p className="text-sm opacity-80 font-medium leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
