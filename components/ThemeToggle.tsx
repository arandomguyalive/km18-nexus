"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.button
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-background/50 border border-foreground/10 backdrop-blur-md hover:bg-foreground/5 transition-colors shadow-lg group"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle Theme"
    >
      <div className="relative w-6 h-6 overflow-hidden">
        <motion.div
          animate={{ y: theme === "dark" ? 0 : 30, opacity: theme === "dark" ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center text-km-cyan"
        >
          <Moon size={20} />
        </motion.div>
        
        <motion.div
            animate={{ y: theme === "dark" ? -30 : 0, opacity: theme === "dark" ? 0 : 1 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center text-km-orange"
        >
          <Sun size={20} />
        </motion.div>
      </div>
    </motion.button>
  );
}
