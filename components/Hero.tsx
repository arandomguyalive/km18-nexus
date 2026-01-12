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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-x-6 md:gap-x-12 mb-4"
        >
          {["Kinjal", "Mishra"].map((word, wordIndex) => (
            <div key={wordIndex} className="flex">
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  className="font-baskervville text-7xl md:text-[10rem] text-[#D4AF37] tracking-tight leading-[1.1] uppercase inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 max-w-4xl mx-auto font-mono text-xs md:text-sm tracking-[0.2em] text-km-purple dark:text-km-pale-pink/80 uppercase"
        >
          {[
            "Author",
            "Founder",
            "Investor",
            "Global Icon",
            "Face of UAE",
            "Public Speaker",
          ].map((item, index, array) => (
            <div key={item} className="flex items-center gap-4">
              <span>{item}</span>
              {index < array.length - 1 && (
                <span className="hidden md:inline text-km-cyan">•</span>
              )}
            </div>
          ))}
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
    </section>
  );
}
