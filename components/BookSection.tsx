"use client";

import { motion } from "framer-motion";
import { ShoppingCart, BookOpen } from "lucide-react";
import Image from "next/image";

export default function BookSection() {
  return (
    <section className="relative min-h-screen w-full flex flex-col md:flex-row items-center justify-center p-8 bg-transparent transition-colors duration-500">
      
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
        <p className="font-sans text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 border-l-2 border-km-hot-pink pl-6">
          "True wealth isn't just in the bank. It's in the mind."
          <br /><br />
          A journey through the psychology of success, redefining what it means to be wealthy in the digital age. Kinjal Mishra's debut masterpiece.
        </p>
        
        <div className="flex flex-col gap-4">
            <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest">Available On</h3>
            <div className="flex flex-wrap gap-4">
                <a 
                    href="https://www.amazon.in/Inner-Billionaire-27-Day-Journey-Happiest-ebook/dp/B0FTFVD485/ref=" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 px-6 py-3 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 border border-black/10 dark:border-white/10 rounded-none text-gray-900 dark:text-white font-mono uppercase tracking-widest transition-all duration-300 group"
                >
                    <ShoppingCart size={18} className="text-km-orange group-hover:scale-110 transition-transform" />
                    <span>Amazon</span>
                </a>
                <a 
                    href="https://www.flipkart.com/the-inner-billionaire/p/itmb6df04b4ea7bc?pid=9789373357690&lid=LSTBOK9789373357690KW2SE3&marketplace=" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 px-6 py-3 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 border border-black/10 dark:border-white/10 rounded-none text-gray-900 dark:text-white font-mono uppercase tracking-widest transition-all duration-300 group"
                >
                    <ShoppingCart size={18} className="text-km-cyan group-hover:scale-110 transition-transform" />
                    <span>Flipkart</span>
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
        className="flex-1 flex justify-center items-center relative"
      >
        {/* Pulsing Glow Effect */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-64 h-96 md:w-80 md:h-[500px] bg-km-orange/30 rounded-full blur-[100px] z-0"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute w-64 h-96 md:w-80 md:h-[500px] bg-km-hot-pink/20 rounded-full blur-[120px] z-0"
        />

        <div className="relative w-72 h-[450px] md:w-96 md:h-[600px] group cursor-pointer hover:scale-105 transition-transform duration-500 ease-out z-10">
            {/* Real 3D Image Cover */}
            <div className="relative w-full h-full drop-shadow-[0_0_30px_rgba(235,121,85,0.5)]">
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
