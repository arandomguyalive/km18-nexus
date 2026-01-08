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
        initial={{ opacity: 0, x: 50, rotateY: 90 }}
        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
        transition={{ duration: 1.2, type: "spring" }}
        viewport={{ once: true }}
        className="flex-1 flex justify-center items-center perspective-[1000px]"
      >
        <div className="relative w-64 h-96 md:w-80 md:h-[500px] preserve-3d group cursor-pointer hover:rotate-y-[-15deg] transition-transform duration-500 ease-out transform-style-3d">
            {/* 
               TODO: To use a real image, uncomment the Image component below and remove the 'bg-gradient...' div.
               Ensure you place 'book-cover.jpg' in the 'public' folder.
            */}
            {/* 
            <div className="absolute inset-0 backface-hidden z-20 rounded-r-md overflow-hidden shadow-2xl">
                 <Image src="/book-cover.jpg" alt="The Inner Billionaire Cover" fill className="object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
            */}

            {/* Default CSS Cover (Fallback) */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black border-2 border-km-orange/30 rounded-r-md flex flex-col items-center justify-center text-center p-6 shadow-2xl backface-hidden z-20">
                <div className="border border-km-orange/50 p-4 w-full h-full flex flex-col justify-between items-center">
                    <span className="font-mono text-xs text-km-orange tracking-[0.3em]">BESTSELLER</span>
                    <h3 className="font-pinyon text-4xl text-white">The<br/>Inner<br/>Billionaire</h3>
                    <span className="font-sans text-sm text-gray-400">KINJAL MISHRA</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
            
            {/* Spine */}
            <div className="absolute top-0 left-0 w-12 h-full bg-gray-800 origin-left rotate-y-[-90deg] border-r border-white/10 flex items-center justify-center">
                <span className="font-pinyon text-white rotate-90 whitespace-nowrap text-xl">The Inner Billionaire</span>
            </div>

            {/* Back Cover (Pages) */}
            <div className="absolute top-2 right-0 w-60 h-[380px] md:w-76 md:h-[484px] bg-white translate-z-[-20px] rounded-l-md shadow-lg" />
        </div>
      </motion.div>
    </section>
  );
}
