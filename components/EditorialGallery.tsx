"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Photo {
  id: number;
  size: string;
  title: string;
  color: string;
  src: string;
  gallery: string[];
}

const PHOTOS: Photo[] = [
  {
    id: 1,
    size: "tall", // Portrait
    title: "Royal",
    color: "bg-km-purple/20",
    src: "/pictures/Royal/IMG_0014.jpg",
    gallery: [
        "/pictures/Royal/IMG_0014.jpg",
        "/pictures/Royal/IMG_0278.jpg",
        "/pictures/Royal/IMG_1298.jpg",
        "/pictures/Royal/IMG_1353.jpg",
        "/pictures/Royal/IMG_2148.jpg",
        "/pictures/Royal/IMG_2188.jpg",
        "/pictures/Royal/IMG_3088.jpg",
        "/pictures/Royal/IMG_4335.jpg",
        "/pictures/Royal/IMG_4687.jpg",
        "/pictures/Royal/IMG_4771.jpg",
        "/pictures/Royal/IMG_5681.jpg",
        "/pictures/Royal/IMG_6273.jpg",
        "/pictures/Royal/IMG_7230.jpg",
        "/pictures/Royal/IMG_7404.jpg",
        "/pictures/Royal/IMG_7522.jpg",
        "/pictures/Royal/IMG_7986.jpg",
        "/pictures/Royal/IMG_8661.jpg",
        "/pictures/Royal/IMG_8665.jpg",
        "/pictures/Royal/IMG_9178.jpg",
        "/pictures/Royal/IMG_9254.jpg",
        "/pictures/Royal/IMG_9968.jpg",
        "/pictures/Royal/IMG_0142.jpg"
    ]
  },
  {
    id: 2,
    size: "wide", // Landscape
    title: "Hot",
    color: "bg-red-500/20",
    src: "/photo-2.jpeg",
    gallery: [
        "/photo-2.jpeg",
        "/photo-5.jpeg",
        "/photo-1.jpeg",
        "/photo-3.jpeg"
    ]
  },
  {
    id: 3,
    size: "small", // Square
    title: "Classic",
    color: "bg-gray-500/20",
    src: "/photo-3.jpeg",
    gallery: [
        "/photo-3.jpeg",
        "/photo-4.jpeg",
        "/photo-2.jpeg",
        "/photo-5.jpeg"
    ]
  },
  {
    id: 4,
    size: "tall", // Portrait
    title: "Timeless",
    color: "bg-km-orange/20",
    src: "/photo-4.jpeg",
    gallery: [
        "/photo-4.jpeg",
        "/photo-1.jpeg",
        "/photo-5.jpeg",
        "/photo-2.jpeg"
    ]
  },
  {
    id: 5,
    size: "small",
    title: "Divine",
    color: "bg-km-cyan/20",
    src: "/photo-5.jpeg",
    gallery: [
        "/pictures/Divine/IMG_0198.jpg",
        "/pictures/Divine/IMG_0847.jpg",
        "/pictures/Divine/IMG_0903.JPEG",
        "/pictures/Divine/IMG_1491.jpg",
        "/pictures/Divine/IMG_2557.jpg",
        "/pictures/Divine/IMG_7349.jpg",
        "/pictures/Divine/IMG_7392.jpg",
        "/pictures/Divine/IMG_7475.JPEG",
        "/pictures/Divine/IMG_7542.jpg",
        "/pictures/Divine/IMG_7598.jpg",
        "/pictures/Divine/IMG_7743.jpg",
        "/pictures/Divine/IMG_8018.jpg",
        "/pictures/Divine/IMG_8167.jpg",
        "/pictures/Divine/IMG_8206.jpg",
        "/pictures/Divine/IMG_8326.jpg",
        "/pictures/Divine/IMG_8357.jpg",
        "/pictures/Divine/IMG_8668.jpg",
        "/pictures/Divine/IMG_8716.jpg",
        "/pictures/Divine/IMG_8767.jpg",
        "/pictures/Divine/IMG_9184.jpg",
        "/pictures/Divine/IMG_9231.jpg",
        "/pictures/Divine/IMG_9251.jpg",
        "/pictures/Divine/IMG_9293.jpg",
        "/pictures/Divine/IMG_9519.jpg"
    ]
  }
];

export default function EditorialGallery() {
  const ref = useRef(null);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedPhoto) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedPhoto]);

  return (
    <>
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
                <PhotoCard photo={PHOTOS[0]} height="h-[500px]" onClick={() => setSelectedPhoto(PHOTOS[0])} />
                <PhotoCard photo={PHOTOS[2]} height="h-[400px]" onClick={() => setSelectedPhoto(PHOTOS[2])} />
            </motion.div>

            {/* Column 2 (Center - Offset) */}
            <motion.div className="md:col-span-4 flex flex-col gap-6 pt-0 md:pt-24">
                 {/* Quote Card */}
                 <div className="h-[200px] flex items-center justify-center p-6 text-center">
                    <p className="font-pinyon text-3xl md:text-4xl text-gray-800 dark:text-gray-200 leading-tight">
                        &quot;Elegance is the only beauty that never fades.&quot;
                    </p>
                 </div>
                 <PhotoCard photo={PHOTOS[1]} height="h-[600px]" onClick={() => setSelectedPhoto(PHOTOS[1])} />
            </motion.div>

            {/* Column 3 */}
            <motion.div style={{ y: y2 }} className="md:col-span-4 flex flex-col gap-6">
                <PhotoCard photo={PHOTOS[3]} height="h-[500px]" onClick={() => setSelectedPhoto(PHOTOS[3])} />
                <PhotoCard photo={PHOTOS[4]} height="h-[400px]" onClick={() => setSelectedPhoto(PHOTOS[4])} />
            </motion.div>

        </div>
      </div>
    </section>

    {/* Elegant Gallery Modal */}
    <AnimatePresence>
        {selectedPhoto && (
            <GalleryModal photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
        )}
    </AnimatePresence>
    </>
  );
}

function PhotoCard({ photo, height, onClick }: { photo: Photo, height: string, onClick: () => void }) {
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onClick={onClick}
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
                        unoptimized
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
                        Ref: {photo.id < 10 ? `0${photo.id}` : photo.id} {/* K-M-18 */}
                    </span>
                    <h4 className="font-pinyon text-3xl text-white drop-shadow-md">{photo.title}</h4>
                </div>
            </div>
        </motion.div>
    )
}

function GalleryModal({ photo, onClose }: { photo: Photo, onClose: () => void }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextPhoto = () => {
        setCurrentIndex((prev) => (prev + 1) % photo.gallery.length);
    };

    const prevPhoto = () => {
        setCurrentIndex((prev) => (prev - 1 + photo.gallery.length) % photo.gallery.length);
    };

    // Dynamic Theme Configuration based on Title
    const getTheme = (title: string) => {
        switch (title) {
            case "Royal":
                return {
                    bg: "bg-gradient-to-br from-[#1a0524] via-black to-[#0f0214]", // Deep Regal Purple
                    border: "border-yellow-500/30",
                    accent: "text-yellow-500",
                    glow: "shadow-[0_0_50px_rgba(234,179,8,0.1)]",
                    font: "font-serif",
                    watermark: "text-yellow-500/5",
                    bracket: "border-yellow-500/50"
                };
            case "Hot":
                return {
                    bg: "bg-gradient-to-br from-[#240505] via-black to-[#140202]", // Deep Red
                    border: "border-red-500/30",
                    accent: "text-red-500",
                    glow: "shadow-[0_0_50px_rgba(239,68,68,0.1)]",
                    font: "font-sans",
                    watermark: "text-red-500/5",
                    bracket: "border-red-500/50"
                };
            case "Classic":
                return {
                    bg: "bg-gradient-to-br from-[#1a1a1a] via-black to-[#0a0a0a]", // Monochrome
                    border: "border-gray-400/30",
                    accent: "text-gray-200",
                    glow: "shadow-[0_0_50px_rgba(255,255,255,0.05)]",
                    font: "font-serif",
                    watermark: "text-white/5",
                    bracket: "border-gray-400/50"
                };
            case "Timeless":
                return {
                    bg: "bg-gradient-to-br from-[#1c1206] via-black to-[#0d0702]", // Sepia/Bronze
                    border: "border-orange-400/30",
                    accent: "text-orange-300",
                    glow: "shadow-[0_0_50px_rgba(251,146,60,0.1)]",
                    font: "font-serif",
                    watermark: "text-orange-300/5",
                    bracket: "border-orange-400/50"
                };
            case "Divine":
                return {
                    bg: "bg-gradient-to-br from-[#051a24] via-black to-[#020f14]", // Cyan/Deep Teal
                    border: "border-cyan-400/30",
                    accent: "text-cyan-300",
                    glow: "shadow-[0_0_50px_rgba(34,211,238,0.1)]",
                    font: "font-mono",
                    watermark: "text-cyan-300/5",
                    bracket: "border-cyan-400/50"
                };
            default:
                return {
                    bg: "bg-black/95",
                    border: "border-white/10",
                    accent: "text-white",
                    glow: "shadow-none",
                    font: "font-sans",
                    watermark: "text-white/5",
                    bracket: "border-white/50"
                };
        }
    };

    const theme = getTheme(photo.title);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 backdrop-blur-3xl ${theme.bg}`}
        >
            {/* Massive Watermark Background */}
            <div className={`absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden`}>
                <span className={`font-pinyon text-[15rem] md:text-[30rem] ${theme.watermark} opacity-10 rotate-[-10deg]`}>
                    {photo.title}
                </span>
            </div>

            {/* Close Button */}
            <button 
                onClick={onClose} 
                className={`absolute top-4 right-4 md:top-8 md:right-8 z-[1000] p-2 rounded-full bg-black/50 border border-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all duration-300 group`}
            >
                <X size={24} className="md:w-8 md:h-8 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-7xl h-full flex flex-col md:flex-row gap-8 items-center justify-center">
                
                {/* Main Image Display */}
                <div className="relative w-full h-[50vh] md:h-[80vh] flex-1 perspective-[2000px]">
                    
                    {/* Decorative Brackets */}
                    <div className={`absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 ${theme.bracket} opacity-50`} />
                    <div className={`absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 ${theme.bracket} opacity-50`} />

                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, rotateY: 10, scale: 0.9 }}
                        animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                        transition={{ duration: 0.6, ease: "circOut" }}
                        className={`relative w-full h-full rounded-sm overflow-hidden ${theme.glow} border ${theme.border} bg-black/20 backdrop-blur-sm`}
                    >
                         <Image 
                            src={photo.gallery[currentIndex]} 
                            alt={`${photo.title} - ${currentIndex + 1}`} 
                            fill 
                            className="object-contain" 
                            priority
                            unoptimized
                        />
                    </motion.div>

                    {/* Navigation Arrows (Floating) */}
                    <button 
                        onClick={prevPhoto} 
                        className={`absolute -left-12 top-1/2 -translate-y-1/2 p-4 text-white/30 hover:text-white transition-colors hidden md:block`}
                    >
                        <ChevronLeft size={48} />
                    </button>
                    <button 
                        onClick={nextPhoto} 
                        className={`absolute -right-12 top-1/2 -translate-y-1/2 p-4 text-white/30 hover:text-white transition-colors hidden md:block`}
                    >
                        <ChevronRight size={48} />
                    </button>

                    {/* Mobile Nav (Bottom Overlay) */}
                     <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-8 md:hidden z-20">
                        <button onClick={prevPhoto} className="p-2 bg-black/50 rounded-full text-white backdrop-blur-md border border-white/10"><ChevronLeft/></button>
                        <button onClick={nextPhoto} className="p-2 bg-black/50 rounded-full text-white backdrop-blur-md border border-white/10"><ChevronRight/></button>
                     </div>
                </div>

                {/* Info & Thumbnails (Sidebar) */}
                <div className="w-full md:w-96 flex flex-col gap-6 bg-black/40 p-6 rounded-lg border border-white/5 backdrop-blur-xl">
                    <div>
                        <motion.h2 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className={`font-pinyon text-6xl md:text-7xl ${theme.accent} mb-2 drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]`}
                        >
                            {photo.title}
                        </motion.h2>
                        <motion.div 
                             initial={{ width: 0 }}
                             animate={{ width: "100%" }}
                             transition={{ delay: 0.4, duration: 0.8 }}
                             className={`h-[1px] bg-gradient-to-r from-transparent via-${theme.accent.split('-')[1]}-500 to-transparent mb-4 opacity-50`}
                        />
                        <motion.p 
                             initial={{ y: 20, opacity: 0 }}
                             animate={{ y: 0, opacity: 1 }}
                             transition={{ delay: 0.3 }}
                             className={`font-mono text-xs ${theme.accent} tracking-[0.2em] uppercase opacity-80`}
                        >
                            No. 0{photo.id} // Frame {currentIndex + 1} / {photo.gallery.length}
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-4 gap-2">
                        {photo.gallery.map((src, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`relative aspect-square rounded-sm overflow-hidden border transition-all duration-300 ${
                                    currentIndex === idx ? `${theme.border.replace('/30', '')} scale-110 shadow-lg z-10` : "border-transparent opacity-40 hover:opacity-80 grayscale hover:grayscale-0"
                                }`}
                            >
                                <Image src={src} alt="Thumbnail" fill className="object-cover" unoptimized />
                            </button>
                        ))}
                    </div>
                    
                    <div className="mt-auto">
                        <p className={`font-sans text-xs ${theme.accent} opacity-60 italic leading-relaxed text-right`}>
                            "Every frame is a window into a universe of its own styling."
                        </p>
                    </div>
                </div>
            </div>

        </motion.div>
    );
}
