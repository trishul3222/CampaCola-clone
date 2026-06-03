import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Droplets, Zap, Citrus } from 'lucide-react';
import { cn } from '@/lib/utils';

const PRODUCTS = [
  {
    id: 'cola',
    name: 'Campa Cola',
    tagline: 'The Classic Bold Taste',
    description: 'The iconic robust flavor that started it all. Deep, refreshing, and perfectly carbonated for that legendary bite.',
    color: '#E31937',
    gradient: 'from-[#E31937] to-[#800F1F]',
    icon: Droplets,
    stats: { calories: 140, sugar: '38g', caffeine: '34mg' }
  },
  {
    id: 'orange',
    name: 'Campa Orange',
    tagline: 'Vibrant & Fruity',
    description: 'A burst of tangy citrus energy. Sweet, bright, and endlessly refreshing for any time of day.',
    color: '#F97316',
    gradient: 'from-[#F97316] to-[#C2410C]',
    icon: Citrus,
    stats: { calories: 150, sugar: '41g', caffeine: '0mg' }
  },
  {
    id: 'lemon',
    name: 'Campa Lemon',
    tagline: 'Crisp Citrus Rush',
    description: 'Zesty, clear, and sharply refreshing. The perfect thirst quencher with a clean finish.',
    color: '#EAB308',
    gradient: 'from-[#EAB308] to-[#A16207]',
    icon: Citrus,
    stats: { calories: 140, sugar: '38g', caffeine: '0mg' }
  },
  {
    id: 'energy',
    name: 'Campa Energy',
    tagline: 'Electrifying Power',
    description: 'A high-voltage mix of bold flavor, vitamins, and caffeine to power you through the night.',
    color: '#5A1E76',
    gradient: 'from-[#5A1E76] to-[#3B0764]',
    icon: Zap,
    stats: { calories: 160, sugar: '42g', caffeine: '80mg' }
  }
];

export function ProductShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeProduct = PRODUCTS[currentIndex];

  const next = () => setCurrentIndex((prev) => (prev + 1) % PRODUCTS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);

  return (
    <section className="relative min-h-[90vh] bg-transparent flex items-center py-20 overflow-hidden">
      {/* Dynamic Background Blob */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProduct.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.8 }}
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full blur-[120px] opacity-40 mix-blend-screen pointer-events-none bg-gradient-to-br",
            activeProduct.gradient
          )}
        />
      </AnimatePresence>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-white">
            <motion.h2 
              className="text-6xl md:text-[80px] font-black mb-6 uppercase tracking-tighter italic text-[#E31937]"
            >
              The Lineup
            </motion.h2>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <activeProduct.icon className="w-8 h-8" style={{ color: activeProduct.color }} />
                  <h3 className="text-3xl md:text-5xl font-bold" style={{ color: activeProduct.color }}>
                    {activeProduct.name}
                  </h3>
                </div>
                <p className="text-xl font-medium text-zinc-300 mb-6">{activeProduct.tagline}</p>
                <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-md">
                  {activeProduct.description}
                </p>

                {/* Nutrition Stats */}
                <div className="grid grid-cols-3 gap-4 border-y border-white/10 py-6 mb-8 max-w-md">
                  <div className="flex flex-col">
                    <span className="text-zinc-500 text-sm font-semibold uppercase tracking-wider">Calories</span>
                    <span className="text-2xl font-bold">{activeProduct.stats.calories}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-zinc-500 text-sm font-semibold uppercase tracking-wider">Sugar</span>
                    <span className="text-2xl font-bold">{activeProduct.stats.sugar}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-zinc-500 text-sm font-semibold uppercase tracking-wider">Caffeine</span>
                    <span className="text-2xl font-bold">{activeProduct.stats.caffeine}</span>
                  </div>
                </div>

                <button 
                  className="px-8 py-4 rounded-full font-bold text-white transition-all hover:scale-105"
                  style={{ backgroundColor: activeProduct.color }}
                >
                  Order Now
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Visual Showcase (Mock 3D Glass Morphism) */}
          <div className="w-full md:w-1/2 flex justify-center items-center relative h-[60vh]">
            <div className="absolute inset-x-0 bottom-0 flex justify-center gap-4 z-20">
              <button 
                onClick={prev}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white hover:bg-white/20 transition-colors"
                aria-label="Previous product"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={next}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white hover:bg-white/20 transition-colors"
                aria-label="Next product"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
                initial={{ opacity: 0, x: 100, rotate: 10 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                exit={{ opacity: 0, x: -100, rotate: -10 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="relative w-64 h-96 md:w-80 md:h-[30rem]"
              >
                {/* Simulated Glass Bottle / Can abstract shape */}
                <div 
                  className={cn(
                    "absolute inset-0 rounded-[2rem] border border-white/20 backdrop-blur-xl shadow-2xl flex items-center justify-center overflow-hidden bg-gradient-to-tr mix-blend-luminosity",
                    activeProduct.gradient
                  )}
                >
                   {/* Liquid Effect Highlights */}
                   <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                   <div className="absolute -left-20 top-20 w-40 h-full bg-white/10 blur-xl rotate-12 pointer-events-none" />
                   
                   <div className="z-10 text-center -rotate-90 origin-center scale-150 flex flex-col items-center">
                     <span className="text-8xl font-black text-white/20 uppercase tracking-tighter mix-blend-overlay">CAMPA</span>
                     <span className="text-5xl font-black text-white uppercase tracking-tight">{activeProduct.name.split(' ')[1]}</span>
                   </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
