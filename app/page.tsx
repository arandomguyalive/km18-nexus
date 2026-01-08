import Hero from "@/components/Hero";
import BookSection from "@/components/BookSection";
import AbhedSection from "@/components/AbhedSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-black selection:bg-km-cyan selection:text-black">
      <Hero />
      <BookSection />
      <AbhedSection />
      
      <footer className="w-full py-12 border-t border-white/10 bg-black text-center">
        <h2 className="font-pinyon text-4xl text-gradient-gold mb-4">KM18</h2>
        <p className="font-mono text-xs text-gray-600 tracking-widest uppercase">
          © {new Date().getFullYear()} Kinjal Mishra. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}