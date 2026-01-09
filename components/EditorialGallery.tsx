"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Camera } from "lucide-react";

const PHOTOS = [
  {
    id: 1,
    size: "tall", // Portrait
    title: "Visionary",
    color: "bg-km-orange/20",
    src: "/photo-1.jpeg" // Placeholder path
  },
  {
    id: 2,
    size: "wide", // Landscape
    title: "The Author",
    color: "bg-km-hot-pink/20",
    src: "/photo-2.jpeg"
  },
  {
    id: 3,
    size: "small", // Square
    title: "Unfiltered",
    color: "bg-km-cyan/20",
    src: "/photo-3.jpeg"
  },
  {
    id: 4,
    size: "tall", // Portrait
    title: "KM18 Era",
    color: "bg-km-purple/20",
    src: "/photo-4.jpeg"
  },
  {
    id: 5,
    size: "small",
    title: "Backstage",
    color: "bg-gray-500/20",
    src: "/photo-5.jpeg"
  }
];

export default function EditorialGallery() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section ref={ref} className="relative w-full py-24 px-6 md:px-12 bg-transparent transition-colors duration-500 overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="relative z-10 flex flex-col items-center mb-20">
             <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="w-[1px] h-16 bg-gradient-to-b from-transparent to-km-hot-pink mb-4"
             />
             <h2 className="font-sans font-bold text-sm tracking-[0.5em] text-km-hot-pink uppercase mb-2">The Gallery</h2>
             <h3 className="font-pinyon text-6xl md:text-8xl text-gray-900 dark:text-white text-center">
                In Focus
             </h3>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto">
            
            {/* Column 1 */}
            <motion.div style={{ y: y1 }} className="md:col-span-4 flex flex-col gap-6">
                <PhotoCard photo={PHOTOS[0]} height="h-[500px]" />
                <PhotoCard photo={PHOTOS[2]} height="h-[400px]" />
            </motion.div>

            {/* Column 2 (Center - Offset) */}
            <motion.div className="md:col-span-4 flex flex-col gap-6 pt-0 md:pt-24">
                 {/* Quote Card */}
                 <div className="h-[200px] flex items-center justify-center p-6 text-center">
                    <p className="font-pinyon text-3xl md:text-4xl text-gray-800 dark:text-gray-200 leading-tight">
                        "Elegance is the only beauty that never fades."
                    </p>
                 </div>
                 <PhotoCard photo={PHOTOS[1]} height="h-[600px]" />
            </motion.div>

            {/* Column 3 */}
            <motion.div style={{ y: y2 }} className="md:col-span-4 flex flex-col gap-6">
                <PhotoCard photo={PHOTOS[3]} height="h-[500px]" />
                <PhotoCard photo={PHOTOS[4]} height="h-[400px]" />
            </motion.div>

        </div>
      </div>
    </section>
  );
}

function PhotoCard({ photo, height }: { photo: any, height: string }) {
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`relative w-full ${height} group rounded-sm cursor-pointer perspective-[1000px]`}
        >
            {/* The "Neon Glass" Frame Wrapper */}
            <div className="absolute -inset-[2px] bg-gradient-to-tr from-km-orange/20 via-transparent to-km-cyan/20 rounded-sm z-0 opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]" />
            
            <div className="relative w-full h-full overflow-hidden rounded-sm border border-white/10 dark:border-white/5 bg-black shadow-lg group-hover:shadow-[0_0_30px_rgba(255,83,178,0.3)] transition-all duration-500 ease-out group-hover:scale-[1.02]">
                
                {/* Image */}
                <div className={`w-full h-full ${photo.color} relative`}>
                    <Image 
                        src={photo.src} 
                        alt={photo.title} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                </div>

                {/* Glass Overlay (The "Vault" Effect) */}
                <div className="absolute inset-0 bg-white/10 dark:bg-black/20 backdrop-blur-[2px] opacity-100 group-hover:opacity-0 group-hover:backdrop-blur-none transition-all duration-700" />

                {/* Tech Accents: Corner Brackets */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-white/50 group-hover:border-km-cyan transition-colors duration-300" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-white/50 group-hover:border-km-hot-pink transition-colors duration-300" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-white/50 group-hover:border-km-hot-pink transition-colors duration-300" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-white/50 group-hover:border-km-cyan transition-colors duration-300" />

                {/* Text Reveal */}
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                    <span className="font-mono text-[10px] text-km-cyan tracking-[0.2em] uppercase block mb-1">
                        Ref: {photo.id < 10 ? `0${photo.id}` : photo.id} // K-M-18
                    </span>
                    <h4 className="font-pinyon text-3xl text-white drop-shadow-md">{photo.title}</h4>
                </div>
            </div>
        </motion.div>
    )
}
