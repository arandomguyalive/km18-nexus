"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-gray-100 to-gray-200 dark:from-[#1a0b2e] dark:via-[#030014] dark:to-[#000000] transition-colors duration-500">
      {/* Ambient Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-km-purple rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-km-cyan rounded-full blur-[128px] animate-pulse delay-1000" />
      </div>

      <div className="z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="font-pinyon text-7xl md:text-9xl mb-4 text-gradient-gold drop-shadow-lg tracking-wider leading-[1.2] py-4">
            Kinjal Mishra
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col md:flex-row gap-4 items-center justify-center font-mono text-sm md:text-lg tracking-[0.3em] text-km-purple dark:text-km-pale-pink/80 uppercase"
        >
          <span>The Inner Billionaire</span>
          <span className="hidden md:inline text-km-cyan">•</span>
          <span>Architect of Abhed</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-12 flex flex-col items-center"
        >
          <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-km-cyan to-transparent" />
          <span className="mt-4 text-xs text-km-cyan font-mono animate-bounce">
            SCROLL TO ENTER
          </span>
        </motion.div>
      </div>

      {/* The Mist Transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white dark:from-[#030014] to-transparent z-20 pointer-events-none" />
    </section>
  );
}
