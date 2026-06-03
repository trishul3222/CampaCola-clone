import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Search, Navigation } from 'lucide-react';

const MOCK_STORES = [
  { id: 1, name: "SuperMart Select", distance: "0.8 km", status: "In Stock" },
  { id: 2, name: "City Grocery", distance: "1.2 km", status: "Low Stock" },
  { id: 3, name: "Fresh Needs", distance: "2.5 km", status: "In Stock" },
];

export function StoreLocator() {
  const [search, setSearch] = useState('');

  return (
    <section className="py-24 bg-transparent relative">
      <div className="container mx-auto px-6 pt-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center bg-white/5 backdrop-blur-3xl rounded-[3rem] p-8 md:p-12 shadow-2xl border border-white/10 relative overflow-hidden">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 relative z-10 text-white">
            <h2 className="text-5xl md:text-7xl font-black mb-4 uppercase tracking-tighter italic text-[#FFD447]">Find Your Fix</h2>
            <p className="text-white/60 mb-8 max-w-md">Enter your location to find the nearest store stocking your favorite Campa flavors.</p>
            
            <div className="relative mb-8">
              <input 
                type="text" 
                placeholder="Enter city or zip code..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-black/40 rounded-full py-4 pl-14 pr-32 outline-none focus:ring-2 focus:ring-[#E31937]/50 text-white font-medium border border-white/10"
              />
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
              <button className="absolute right-2 top-2 bottom-2 px-6 rounded-full bg-[#E31937] text-white font-bold hover:bg-[#C2152F] transition-colors uppercase tracking-widest text-xs">
                Search
              </button>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-4">Nearby Locations</h3>
              {MOCK_STORES.map((store, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={store.id} 
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#E31937]/20 text-[#E31937] flex items-center justify-center shrink-0 border border-[#E31937]/30">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{store.name}</h4>
                      <p className="text-sm text-white/50">{store.distance}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-bold uppercase tracking-wider ${store.status === 'In Stock' ? 'text-green-400' : 'text-orange-400'}`}>
                      {store.status}
                    </span>
                    <button className="w-8 h-8 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white/50 group-hover:text-[#FFD447] group-hover:border-[#FFD447] transition-colors shadow-sm">
                      <Navigation className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Map Image / Visual */}
          <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px] rounded-[2rem] bg-black/20 relative overflow-hidden flex items-center justify-center border border-white/10">
            <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-luminosity grayscale" />
            
            {/* Map UI Elements overlays */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
               <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="relative group"
               >
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#E31937]/40 rounded-full blur-xl animate-pulse" />
                 <MapPin className="w-16 h-16 text-[#E31937] drop-shadow-2xl relative z-10" />
                 <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl shadow-xl border border-white/20 font-bold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity text-white">
                   Campa Store
                 </div>
               </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
