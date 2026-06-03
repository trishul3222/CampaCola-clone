import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black/20 backdrop-blur-md text-white pt-24 pb-12 overflow-hidden relative border-t border-white/5">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#E31937] to-transparent max-w-5xl mx-auto opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">
              <span className="text-[#E31937]">CAMPA</span> COLA
            </h2>
            <p className="text-white/60 max-w-sm mb-8 leading-relaxed font-medium">
              India's Original Cola. Reimagined for the next generation. Bold Taste, New Energy.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-[#E31937] hover:border-[#E31937] transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-6 uppercase tracking-[0.2em] text-[10px] text-white/40">Explore</h3>
            <ul className="space-y-4 text-white/70 font-medium text-sm">
              <li><a href="#" className="hover:text-[#FFD447] transition-colors">Flavors</a></li>
              <li><a href="#" className="hover:text-[#FFD447] transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-[#FFD447] transition-colors">Campa Club</a></li>
              <li><a href="#" className="hover:text-[#FFD447] transition-colors">Store Locator</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-6 uppercase tracking-[0.2em] text-[10px] text-white/40">Business</h3>
            <ul className="space-y-4 text-white/70 font-medium text-sm">
              <li><a href="#" className="hover:text-[#FFD447] transition-colors">Distributor Connect</a></li>
              <li><a href="#" className="hover:text-[#FFD447] transition-colors">Retail Partnerships</a></li>
              <li><a href="#" className="hover:text-[#FFD447] transition-colors">Bulk Orders</a></li>
              <li><a href="#" className="hover:text-[#FFD447] transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-xs font-bold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Campa Beverages. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
