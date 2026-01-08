"use client";

import { motion } from "framer-motion";
import { Instagram, Youtube, Play, ExternalLink, Radio } from "lucide-react";

// Mock Data for "Transmissions"
// TODO: PASTE YOUR WIDGET URL HERE (e.g., from Behold.so or Elfsight)
const INSTAGRAM_WIDGET_URL = ""; 

const SOCIAL_FEED = [
  {
    type: "instagram",
    id: 1,
    image: "/insta-1.jpg", // Placeholder
    caption: "Redefining the rules of digital wealth. #InnerBillionaire",
    link: "https://www.instagram.com/iamkm18/"
  },
  {
    type: "instagram",
    id: 2,
    image: "/insta-2.jpg", // Placeholder
    caption: "Behind the scenes of ABHED. The future is private.",
    link: "https://www.instagram.com/iamkm18/"
  },
  {
    type: "instagram",
    id: 3,
    image: "/insta-3.jpg", // Placeholder
    caption: "Gratitude for the journey. ✨",
    link: "https://www.instagram.com/iamkm18/"
  }
];

const LATEST_VIDEO = {
  title: "The Inner Billionaire: Official Trailer",
  link: "https://www.youtube.com/@TheInnerBillionaire18",
  embedUrl: "https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYK" // Using a playlist or generic embed for now
};

export default function TransmissionSection() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 bg-gray-50 dark:bg-black transition-colors duration-500 overflow-hidden">
      
      {/* Section Header */}
      <div className="relative z-10 flex flex-col items-center mb-16">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-2"
        >
            <Radio className="text-km-hot-pink animate-pulse" size={20} />
            <span className="font-mono text-xs text-km-hot-pink tracking-[0.3em] uppercase">Stay Connected</span>
        </motion.div>
        <h2 className="font-pinyon text-5xl md:text-6xl text-center text-gray-900 dark:text-white">
            The World of KM18
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Neural Cinema (YouTube) */}
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
        >
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <Youtube size={20} className="text-red-500" />
                    <span className="font-mono text-sm font-bold text-gray-700 dark:text-gray-300">FEATURED CONTENT</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-red-500/10 rounded-full border border-red-500/20">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
                    <span className="text-[10px] font-mono text-red-500">LIVE</span>
                </div>
            </div>
            
            {/* Video Frame */}
            <div className="relative aspect-video w-full bg-black rounded-xl border border-gray-200 dark:border-white/10 overflow-hidden group shadow-2xl">
                 <iframe 
                    width="100%" 
                    height="100%" 
                    src={LATEST_VIDEO.embedUrl} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                 ></iframe>
                 
                 {/* Decor: Corner brackets */}
                 <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-km-cyan rounded-tl-md" />
                 <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-km-cyan rounded-br-md" />
            </div>
            
            <a href={LATEST_VIDEO.link} target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-km-cyan transition-colors group">
                <span>View Channel</span>
                <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
        </motion.div>

        {/* Holographic Feed (Instagram) */}
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
        >
            <div className="flex items-center gap-2 mb-6">
                <Instagram size={20} className="text-km-hot-pink" />
                <span className="font-mono text-sm font-bold text-gray-700 dark:text-gray-300">LATEST MOMENTS</span>
            </div>

            {INSTAGRAM_WIDGET_URL ? (
                /* LIVE WIDGET MODE */
                <div className="w-full h-[400px] bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden shadow-lg">
                    <iframe 
                        src={INSTAGRAM_WIDGET_URL} 
                        className="w-full h-full border-none"
                        loading="lazy"
                    />
                </div>
            ) : (
                /* FALLBACK MOCK MODE */
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {SOCIAL_FEED.map((item, index) => (
                        <a 
                            key={item.id} 
                            href={item.link}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`relative group bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-4 transition-all duration-300 hover:border-km-hot-pink/50 hover:shadow-[0_0_20px_rgba(255,83,178,0.2)] ${index === 2 ? "sm:col-span-2" : ""}`}
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 p-[2px]">
                                    <div className="w-full h-full bg-white dark:bg-black rounded-full" />
                                </div>
                                <ExternalLink size={14} className="text-gray-400 group-hover:text-km-hot-pink transition-colors" />
                            </div>
                            <div className="h-24 bg-gray-100 dark:bg-white/5 rounded-lg mb-3 flex items-center justify-center text-gray-400 text-xs">
                                {/* Placeholder for actual image */}
                                <span className="font-mono">POST</span>
                            </div>
                            <p className="text-xs text-gray-600 dark:text-gray-400 font-mono line-clamp-2">
                                {item.caption}
                            </p>
                        </a>
                    ))}
                </div>
            )}
        </motion.div>

      </div>
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-km-purple/5 dark:bg-km-purple/10 rounded-full blur-[150px] -z-10" />

    </section>
  );
}
