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
      className="relative h-[85svh] min-h-[600px] md:h-screen md:min-h-[800px] w-full flex items-center justify-center pb-12 overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background with Parallax */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdfQsOF3zr-ZcBfuMx0-Z6iQEP7IxLgsYN4jR59gRGGJ6Dp0RK2_5XZgNLw6PjHO71aNUaKONKcMh5OndOU1sIvhLm1RVQcfakezdf16B0IBN0ghPuZDPkATYAX4gBa1XV7Snn0LVr4FrDdW_1-Sf777bwzEBxpKBjbPwSM_nwuyHyIvk0RX5Z5Y9yq4LMYpE30IuToKOGqPORzo8mxUs19CNODl0XiRty4AArvYWSA-CLcdl3dEA3ihgEZVzaN2t3ebp-sMgv1Rs"
          alt="Editorial close up of a woman draped in high-end pearls"
          className="w-full h-full object-cover object-center opacity-60 contrast-[1.1] brightness-[0.7]"
          referrerPolicy="no-referrer"
        />
        {/* Layered Atmospheric Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(108,4,59,0.15)_0%,transparent_50%)]"></div>
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 w-full text-center px-4">
        <div className="overflow-hidden mb-4">
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-block font-sans tracking-[0.5em] uppercase text-[10px] text-secondary/80 mb-6"
          >
            Est. 1984 — London • Paris • New York
          </motion.span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-[15vw] sm:text-[12vw] lg:text-[14vw] font-serif italic text-white leading-[0.85] tracking-tighter mix-blend-difference select-none pointer-events-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
        >
          Grace <br className="lg:hidden" />
          <span className="hidden lg:inline-block w-48 h-[1px] bg-white/30 align-middle mx-12"></span>
          Unveiled
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-8 md:mt-16 flex flex-col items-center"
        >
          <p className="text-white/50 font-sans tracking-[0.3em] uppercase text-[9px] md:text-[11px] mb-8 md:mb-12 max-w-[280px] md:max-w-md leading-relaxed">
            Redefining Heritage Through <br /> Contemporary Brilliance
          </p>
          
          <button className="group relative px-12 md:px-20 py-4 md:py-6 bg-white/5 backdrop-blur-2xl border border-secondary/30 rounded-full overflow-hidden transition-all duration-700 hover:border-secondary hover:shadow-[0_0_50px_rgba(200,169,110,0.2)] active:scale-95">
            <span className="relative z-10 font-sans tracking-[0.4em] uppercase text-[9px] md:text-[11px] text-secondary group-hover:text-white transition-colors duration-500">
              Explore the Collection
            </span>
            <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            {/* Shimmer Effect */}
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          </button>
        </motion.div>
      </motion.div>

      {/* Floating Elements / Decorative */}
      <div className="absolute bottom-12 left-12 hidden lg:flex items-center gap-12">
        <div className="flex flex-col gap-2">
          <span className="text-[9px] font-sans tracking-[0.3em] text-white/20 uppercase">Collection</span>
          <span className="text-[11px] font-serif italic text-white/60">Spring / Summer 2024</span>
        </div>
        <div className="w-[1px] h-8 bg-white/10"></div>
        <div className="flex flex-col gap-2">
          <span className="text-[9px] font-sans tracking-[0.3em] text-white/20 uppercase">Craftsmanship</span>
          <span className="text-[11px] font-serif italic text-white/60">Hand-finished in London</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 md:bottom-12 md:left-auto md:right-12 md:translate-x-0 flex flex-col items-center gap-4"
      >
        <span className="text-[9px] font-sans tracking-[0.3em] text-white/20 uppercase vertical-rl rotate-180">Scroll</span>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="text-secondary/60"
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>

      {/* Corner Accents */}
      <div className="absolute top-12 left-12 w-8 h-8 border-t border-l border-white/10"></div>
      <div className="absolute top-12 right-12 w-8 h-8 border-t border-r border-white/10"></div>
    </section>
  );
}
