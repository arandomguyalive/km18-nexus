import Hero from "@/components/Hero";
import BookSection from "@/components/BookSection";
import AbhedSection from "@/components/AbhedSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen selection:bg-km-cyan selection:text-black">
      <Hero />
      <BookSection />
      <AbhedSection />
      
      <footer className="w-full py-12 border-t border-black/5 dark:border-white/10 bg-white dark:bg-black text-center transition-colors duration-500">
        <h2 className="font-pinyon text-4xl text-gradient-gold mb-4">KM18</h2>
        <p className="font-mono text-xs text-gray-500 dark:text-gray-600 tracking-widest uppercase">
          © {new Date().getFullYear()} Kinjal Mishra. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}