"use client";

import { motion } from "framer-motion";
import { ShoppingCart, BookOpen } from "lucide-react";
import Image from "next/image";

export default function BookSection() {
  return (
    <section className="relative min-h-screen w-full flex flex-col md:flex-row items-center justify-center p-8 bg-black border-t border-white/5">
      
      {/* Text Content */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex-1 max-w-2xl z-10 md:pr-12 mb-16 md:mb-0"
      >
        <h2 className="font-pinyon text-5xl md:text-7xl text-km-orange mb-6">
          The Inner Billionaire
        </h2>
        <p className="font-sans text-lg md:text-xl text-gray-300 leading-relaxed mb-8 border-l-2 border-km-hot-pink pl-6">
          "True wealth isn't just in the bank. It's in the mind."
          <br /><br />
          A journey through the psychology of success, redefining what it means to be wealthy in the digital age. Kinjal Mishra's debut masterpiece.
        </p>
        
        <div className="flex flex-col gap-4">
            <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest">Available On</h3>
            <div className="flex flex-wrap gap-4">
                <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-none text-white font-mono uppercase tracking-widest transition-all duration-300">
                    <ShoppingCart size={18} />
                    <span>Amazon</span>
                </a>
                <a href="#" className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-none text-white font-mono uppercase tracking-widest transition-all duration-300">
                    <BookOpen size={18} />
                    <span>Kindle</span>
                </a>
            </div>
        </div>
      </motion.div>

      {/* 3D Book Mockup */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="flex-1 flex justify-center items-center"
      >
        <div className="relative w-72 h-[450px] md:w-96 md:h-[600px] group cursor-pointer hover:scale-105 transition-transform duration-500 ease-out">
            {/* Real 3D Image Cover */}
            <div className="relative w-full h-full drop-shadow-[0_20px_50px_rgba(235,121,85,0.3)]">
                 <Image 
                    src="/book-cover-shop.png" 
                    alt="The Inner Billionaire 3D Cover" 
                    fill 
                    className="object-contain"
                    priority
                 />
                 {/* Subtle Glow Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
        </div>
      </motion.div>
    </section>
  );
}
