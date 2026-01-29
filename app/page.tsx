import Hero from "@/components/Hero";
import BookSection from "@/components/BookSection";
import AbhedSection from "@/components/AbhedSection";
import TransmissionSection from "@/components/TransmissionSection";
import EditorialGallery from "@/components/EditorialGallery";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen selection:bg-km-cyan selection:text-black">
      
      {/* 1. HERO - Fixed Base */}
      <div className="sticky top-0 z-0 h-screen w-full">
        <Hero />
      </div>

      {/* 2. GALLERY - Slides Over (Relative to allow scrolling tall content) */}
      <div className="relative z-10 min-h-screen w-full bg-background shadow-[0_-20px_50px_rgba(0,0,0,0.5)] overflow-hidden transition-colors duration-500">
        {/* Watermark */}
        <div className="absolute top-20 right-0 md:-right-20 pointer-events-none opacity-5 dark:opacity-10 select-none">
             <span className="font-pinyon text-[15rem] md:text-[30rem] text-foreground leading-none">Icon</span>
        </div>
        <EditorialGallery />
      </div>

      {/* 3. BOOK - Slides Over */}
      <div className="sticky top-0 z-20 min-h-screen w-full bg-card shadow-[0_-20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex items-center transition-colors duration-500">
        {/* Watermark */}
         <div className="absolute bottom-0 left-0 md:-left-20 pointer-events-none opacity-5 dark:opacity-10 select-none">
             <span className="font-pinyon text-[15rem] md:text-[30rem] text-km-orange leading-none">Mind</span>
        </div>
        <BookSection />
      </div>

      {/* 4. ABHED - Slides Over */}
      <div className="sticky top-0 z-30 min-h-screen w-full bg-section-bg shadow-[0_-20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex items-center transition-colors duration-500">
         {/* Watermark */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-5 dark:opacity-5 select-none w-full text-center">
             <span className="font-sans font-black text-[10rem] md:text-[20rem] text-km-cyan tracking-tighter leading-none">FUTURE</span>
        </div>
        <AbhedSection />
      </div>

      {/* 5. TRANSMISSION - Slides Over */}
      <div className="sticky top-0 z-40 min-h-screen w-full bg-background shadow-[0_-20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col justify-between transition-colors duration-500">
         <div className="flex-1 flex items-center relative">
             {/* Watermark */}
             <div className="absolute bottom-40 right-10 pointer-events-none opacity-5 dark:opacity-10 select-none">
                 <span className="font-mono text-[8rem] md:text-[15rem] text-km-hot-pink tracking-widest leading-none">SIGNAL</span>
            </div>
            <TransmissionSection />
         </div>
      
          <footer className="w-full py-12 border-t border-card-border bg-card text-center transition-colors duration-500 relative z-50">
            <h2 className="font-pinyon text-4xl text-gradient-gold mb-4">KM18</h2>
            <p className="font-mono text-xs text-muted tracking-widest uppercase">
              © {new Date().getFullYear()} Kinjal Mishra. All Rights Reserved.
            </p>
          </footer>
      </div>

    </main>
  );
}