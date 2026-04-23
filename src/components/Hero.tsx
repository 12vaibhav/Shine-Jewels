import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Decorative Corner Flourishes */}
      <div className="absolute top-0 left-0 w-[30vw] h-[30vw] opacity-20 z-10 pointer-events-none select-none">
        <svg viewBox="0 0 400 400" className="w-full h-full text-secondary fill-current">
          <path d="M0,0 C100,0 200,50 250,150 C280,220 250,300 200,350 L0,350 Z" opacity="0.1" />
          <path d="M40,0 Q100,0 120,60 T180,100 M20,40 Q60,40 80,100 T120,160 M0,80 Q40,80 60,140 T100,200" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M10,10 Q50,10 60,50 T100,90" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-[30vw] h-[30vw] opacity-20 z-10 pointer-events-none select-none scale-x-[-1]">
        <svg viewBox="0 0 400 400" className="w-full h-full text-secondary fill-current">
          <path d="M0,0 C100,0 200,50 250,150 C280,220 250,300 200,350 L0,350 Z" opacity="0.1" />
          <path d="M40,0 Q100,0 120,60 T180,100 M20,40 Q60,40 80,100 T120,160 M0,80 Q40,80 60,140 T100,200" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Background with Parallax */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <img
          src="/Section Background/Hero section Image.webp"
          alt="Editorial jewelry photography"
          className="w-full h-full object-cover object-top"
        />
        {/* Subtle radial shadow to make text pop */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.5)_100%)]"></div>
      </motion.div>

      {/* Content Container */}
      <motion.div style={{ opacity }} className="relative z-30 w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Top Tagline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8 md:mb-12 text-center mt-[70px]"
        >
          <span className="font-sans tracking-[0.5em] md:tracking-[0.8em] uppercase text-[9px] md:text-[11px] text-white/90">
            EST. 1984 — LONDON • PARIS • NEW YORK
          </span>
        </motion.div>

        {/* Main Title Layout */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between md:px-12 mb-8 md:mb-16 gap-4">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-[18vw] md:text-[12vw] font-serif italic gold-text leading-none tracking-tighter drop-shadow-2xl px-4"
          >
            Grace
          </motion.h1>

          <div className="hidden md:block flex-1 h-[1px] bg-white/20 mx-12 self-center mt-12"></div>

          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-[18vw] md:text-[12vw] font-serif italic gold-text leading-none tracking-tighter drop-shadow-2xl px-4"
          >
            Unveiled
          </motion.h1>
        </div>

        {/* Center Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-center mb-10 md:mb-16"
        >
          <p className="text-white/80 font-sans tracking-[0.4em] md:tracking-[0.6em] uppercase text-[8px] md:text-[10px] leading-relaxed max-w-lg mx-auto">
            Redefining Heritage Through <br className="hidden md:block" /> Contemporary Brilliance
          </p>
        </motion.div>

        {/* Pearl & Magic Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="relative group -mt-5 z-30"
        >
          {/* Magic Aura Glow */}
          <div className="absolute inset-0 bg-secondary/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 group-hover:scale-[1.8] transition-all duration-700 -z-10 scale-150"></div>
          
          <button className="pearl-effect px-[32.5px] md:px-[56.5px] py-[10.5px] md:py-[14.5px] rounded-full border border-secondary/40 shadow-[0_10px_30px_rgba(0,0,0,0.2)] group-hover:shadow-[0_20px_60px_rgba(200,169,110,0.6)] group-hover:bg-none group-hover:bg-secondary group-hover:border-white/10 transition-all duration-700 group-hover:scale-105 active:scale-95 overflow-hidden cursor-pointer">
            {/* Shimmer Effect */}
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
            
            <span className="relative z-10 font-sans tracking-[0.4em] group-hover:tracking-[0.5em] uppercase text-[9px] md:text-[11px] text-primary font-bold group-hover:text-black transition-all duration-500">
              Explore the Collection
            </span>

            {/* Sparkle Particles on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
               <div className="absolute top-2 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
               <div className="absolute bottom-2 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-75"></div>
               <div className="absolute top-1/2 right-4 w-1.5 h-1.5 bg-white rounded-full animate-ping delay-150"></div>
            </div>
          </button>
        </motion.div>
      </motion.div>

      {/* Bottom Layout - Matches Reference */}
      <div className="absolute bottom-12 left-0 right-0 px-8 md:px-16 flex flex-col gap-6 z-20">
        {/* Scroll Indicator - Bottom Center */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute -top-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 translate-y-[120px]"
        >
          <span className="text-[7px] md:text-[8px] font-sans tracking-[0.5em] text-white/30 uppercase">Scroll</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-secondary/40 via-secondary/20 to-transparent relative overflow-hidden">
            <motion.div 
              animate={{ 
                y: ["-100%", "400%"],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2.5, 
                ease: "linear" 
              }}
              className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-transparent via-white to-transparent"
            />
          </div>
        </motion.div>

        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-1">
            <span className="text-[7px] md:text-[9px] font-sans tracking-[0.4em] text-white/30 uppercase">Collection</span>
            <span className="text-[9px] md:text-[11px] font-serif italic text-secondary/80">Spring / Summer 2024</span>
          </div>

          <div className="flex flex-col gap-1 text-right">
            <span className="text-[7px] md:text-[9px] font-sans tracking-[0.4em] text-white/30 uppercase">Craftsmanship</span>
            <span className="text-[9px] md:text-[11px] font-serif italic text-secondary/80">Hand finished in London</span>
          </div>
        </div>

        {/* Decorative Divider with Icon */}
        <div className="flex items-center gap-6 opacity-30 translate-y-[20px]">
          <div className="h-[0.5px] flex-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
          <div className="w-6 h-6 flex items-center justify-center">
            <svg viewBox="0 0 40 40" className="w-full h-full text-secondary fill-current">
              <path d="M20,0 L24,16 L40,20 L24,24 L20,40 L16,24 L0,20 L16,16 Z" />
            </svg>
          </div>
          <div className="h-[0.5px] flex-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
        </div>
      </div>

      {/* Corner Brackets */}
      <div className="absolute top-12 left-12 w-12 h-12 border-t border-l border-white/10 hidden md:block"></div>
      <div className="absolute top-12 right-12 w-12 h-12 border-t border-r border-white/10 hidden md:block"></div>
    </section>
  );
}
