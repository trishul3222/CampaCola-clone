import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Loader2, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function FlavorMatchQuiz() {
  const [step, setStep] = useState(0);
  const [preferences, setPreferences] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{product: string, reason: string} | null>(null);

  const QUESTIONS = [
    { title: "What's your vibe today?", options: ["High Energy", "Chill & Relaxed", "Focused", "Party Mode"] },
    { title: "What flavors do you crave?", options: ["Bold & Sweet", "Citrus & Sharp", "Fruity & Vibrant", "Classic Cola"] },
  ];

  const handleSelection = (option: string) => {
    setPreferences(prev => prev ? `${prev}, ${option}` : option);
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      submitQuiz(preferences + `, ${option}`);
    }
  };

  const submitQuiz = async (finalPrefs: string) => {
    setLoading(true);
    try {
      const res = await fetch('/api/flavor-match', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ preferences: finalPrefs })
      });
      const data = await res.json();
      setResult(data);
    } catch (error) {
      console.error(error);
      setResult({ product: "Campa Cola", reason: "When in doubt, nothing beats the classic bold taste of India's Original." });
    }
    setLoading(false);
  };

  const reset = () => {
    setStep(0);
    setPreferences('');
    setResult(null);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-[#5A1E76] to-[#2B0E38] text-white relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#E31937] rounded-full blur-[200px] opacity-20 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FFD447] rounded-full blur-[150px] opacity-10 -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-sm font-medium mb-4 text-[#FFD447] border border-white/10">
              <Sparkles className="w-4 h-4" /> Powered by Campa AI
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Find Your Flavor</h2>
            <p className="text-zinc-300 mt-4">Let our AI match your current mood with the perfect drink.</p>
          </div>

          <div className="min-h-[250px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center gap-4 py-12"
                >
                  <Loader2 className="w-12 h-12 animate-spin text-[#FFD447]" />
                  <p className="text-xl font-medium animate-pulse">Analyzing your vibe...</p>
                </motion.div>
              ) : result ? (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <h3 className="text-3xl font-bold mb-2">Your Match:</h3>
                  <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFD447] to-[#E31937] mb-6 inline-block">
                    {result.product}
                  </div>
                  <p className="text-xl text-zinc-300 mb-8 max-w-lg mx-auto">{result.reason}</p>
                  
                  <button 
                    onClick={reset}
                    className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 transition border border-white/20 font-medium"
                  >
                    Try Again
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key={`step-${step}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="w-full max-w-2xl"
                >
                  <h3 className="text-2xl font-bold text-center mb-8">{QUESTIONS[step].title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {QUESTIONS[step].options.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleSelection(option)}
                        className="p-6 rounded-2xl border border-white/10 hover:border-[#FFD447]/50 hover:bg-white/10 transition-all font-semibold text-lg flex items-center justify-between group bg-white/5"
                      >
                        {option}
                        <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#FFD447]" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
