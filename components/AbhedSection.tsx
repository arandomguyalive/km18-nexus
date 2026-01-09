"use client";

import { motion } from "framer-motion";
import { Lock, EyeOff, ShieldCheck } from "lucide-react";

export default function AbhedSection() {
  return (
    <section className="relative min-h-screen w-full flex flex-col-reverse md:flex-row items-center justify-center p-8 bg-transparent overflow-hidden transition-colors duration-500">
        
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,229,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,229,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(0,212,229,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,229,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none" />

      {/* Phone Mockup */}
      <motion.div 
         initial={{ opacity: 0, y: 100 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 1 }}
         viewport={{ once: true }}
         className="flex-1 flex justify-center items-center z-10"
      >
        <div className="relative w-72 h-[550px] bg-black border-4 border-gray-800 rounded-[3rem] shadow-[0_0_50px_rgba(0,212,229,0.2)] overflow-hidden ring-1 ring-white/20">
            {/* Screen Content */}
            <div className="w-full h-full bg-gray-900 relative overflow-hidden flex flex-col">
                {/* Status Bar */}
                <div className="h-8 w-full bg-black/50 backdrop-blur-md flex justify-between items-center px-6 text-[10px] text-white/50 font-mono">
                    <span>18:00</span>
                    <span>ABHED SECURE</span>
                </div>
                
                {/* App UI */}
                <div className="flex-1 p-4 space-y-4">
                    {/* Fake Post 1 */}
                    <div className="bg-white/5 rounded-xl p-3 border border-white/10 backdrop-blur-sm">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-km-cyan to-km-blue" />
                            <div className="h-2 w-24 bg-white/20 rounded" />
                        </div>
                        <div className="h-24 w-full bg-black/40 rounded-lg border border-white/5 flex items-center justify-center">
                            <span className="text-xs text-km-cyan font-mono animate-pulse">ENCRYPTED MEDIA</span>
                        </div>
                    </div>
                    
                    {/* Fake Post 2 */}
                    <div className="bg-white/5 rounded-xl p-3 border border-white/10 backdrop-blur-sm opacity-50">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 rounded-full bg-gray-700" />
                            <div className="h-2 w-20 bg-white/20 rounded" />
                        </div>
                        <div className="h-20 w-full bg-black/40 rounded-lg border border-white/5" />
                    </div>
                </div>

                {/* Navbar */}
                <div className="h-16 w-full bg-black/80 backdrop-blur-xl border-t border-white/10 flex justify-around items-center text-km-cyan">
                    <ShieldCheck size={24} />
                    <div className="w-12 h-12 bg-km-cyan/20 rounded-full flex items-center justify-center border border-km-cyan shadow-[0_0_15px_rgba(0,212,229,0.5)]">
                        <div className="w-3 h-3 bg-white rounded-full" />
                    </div>
                    <EyeOff size={24} />
                </div>
            </div>
            
            {/* Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none rounded-[3rem]" />
        </div>
      </motion.div>

      {/* Text Content */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex-1 max-w-2xl z-10 md:pl-12 mb-16 md:mb-0"
      >
        <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-km-cyan/10 border border-km-cyan/50 rounded text-xs font-mono text-km-cyan tracking-widest">BETA ACCESS</span>
        </div>
        <h2 className="font-sans font-bold text-5xl md:text-7xl text-gray-900 dark:text-white mb-6 tracking-tighter transition-colors">
            ABHED
            <span className="text-km-cyan">.</span>
        </h2>
        <p className="font-sans text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8 transition-colors">
            Social media, declassified. 
            <br />
            Experience true anonymity with military-grade encryption, self-destructing content, and a dystopian aesthetic that breaks the mold.
        </p>
        
        <ul className="space-y-4 font-mono text-sm text-gray-500 mb-8">
            <li className="flex items-center gap-3">
                <Lock className="text-km-cyan" size={16} /> 
                <span>End-to-End Encryption</span>
            </li>
            <li className="flex items-center gap-3">
                <EyeOff className="text-km-cyan" size={16} /> 
                <span>Anonymous Browsing</span>
            </li>
        </ul>

        <a 
          href="https://cyclotron.vercel.app/blacklist" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block px-8 py-3 border border-km-cyan text-km-cyan font-mono uppercase tracking-widest hover:bg-km-cyan hover:text-black transition-colors duration-300"
        >
          Request Access
        </a>
      </motion.div>

    </section>
  );
}
