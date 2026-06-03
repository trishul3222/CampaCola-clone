/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Hero } from './components/sections/Hero';
import { ProductShowcase } from './components/sections/ProductShowcase';
import { BrandStory } from './components/sections/BrandStory';
import { FlavorMatchQuiz } from './components/sections/FlavorMatchQuiz';
import { StoreLocator } from './components/sections/StoreLocator';
import { Footer } from './components/sections/Footer';
import { AIChatbot } from './components/AIChatbot';
import { AuthProvider, useAuth } from './context/AuthContext';

function Navigation() {
  const { user, signIn, logOut } = useAuth();
  
  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex justify-between items-center px-6 md:px-10 py-6 md:py-8 pointer-events-none">
      <div className="flex items-center gap-12 pointer-events-auto">
        <div className="text-4xl font-black tracking-tighter text-[#E31937] flex items-baseline">
          CAMPA<span className="w-2 h-2 bg-[#FFD447] rounded-full ml-1"></span>
        </div>
        <div className="hidden lg:flex gap-8 text-xs font-bold uppercase tracking-[0.2em] opacity-80">
          <a href="#" className="hover:text-[#FFD447] transition-colors">Products</a>
          <a href="#" className="hover:text-[#FFD447] transition-colors">Our Legacy</a>
          <a href="#" className="hover:text-[#FFD447] transition-colors">B2B Portal</a>
          <a href="#" className="hover:text-[#FFD447] transition-colors">Campa Club</a>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-6 pointer-events-auto">
        {user ? (
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-bold opacity-80 uppercase tracking-widest hidden md:block">
              {user.displayName?.split(' ')[0]}
            </span>
            <button 
              onClick={logOut}
              className="px-6 py-2 border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <button 
            onClick={signIn}
            className="px-6 py-2 border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
          >
            Login
          </button>
        )}
        <button className="px-8 py-3 bg-[#E31937] text-white rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl shadow-red-600/20">Find Near Me</button>
      </div>
    </nav>
  );
}

function MainApp() {
  return (
    <main className="min-h-screen bg-[#121212] font-sans antialiased text-white selection:bg-[#E31937] selection:text-white relative flex flex-col overflow-x-hidden">
      {/* Background Gradients & Textures */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E31937] via-[#5A1E76] to-[#121212] opacity-40"></div>
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#E31937] rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-[-50px] left-[-50px] w-[400px] h-[400px] bg-[#FFD447] rounded-full blur-[100px] opacity-10"></div>
      </div>

      <Navigation />

      {/* Pages Sections */}
      <Hero />
      <ProductShowcase />
      <BrandStory />
      <FlavorMatchQuiz />
      <StoreLocator />
      <Footer />

      {/* Global Overlays */}
      <AIChatbot />
    </main>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}
