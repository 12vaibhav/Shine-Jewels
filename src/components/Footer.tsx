import { motion } from "motion/react";
import { Instagram, Facebook, Twitter, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0f0a0a] py-12 px-6 relative overflow-hidden border-t border-secondary/10">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none select-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-footer" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-footer)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-10">
            <div className="space-y-6">
              <a href="#" className="flex items-center gap-5 group">
                <div className="w-[55px] h-[55px] md:w-[71px] md:h-[71px] rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center p-[7px] md:p-[9px] shadow-2xl transition-transform duration-500 group-hover:scale-105 shrink-0">
                  <img 
                    src="/logo_trans.png" 
                    alt="Shine Jewels Logo" 
                    className="w-full h-full object-contain brightness-[1.1] contrast-[1.1]"
                  />
                </div>
                <span className="text-3xl md:text-4xl font-serif text-secondary italic tracking-tighter block">
                  Shine Jewels
                </span>
              </a>
              <p className="text-xs text-stone-500 font-sans leading-relaxed max-w-xs tracking-wide uppercase">
                Crafting heirloom memories since 1984. Every piece is a testament to timeless elegance and artisanal grace.
              </p>
            </div>
            
            <div className="flex gap-6">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3, color: "#c8a96e" }}
                  className="text-stone-600 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-12">
            <div className="space-y-8">
              <h4 className="text-[10px] font-sans uppercase tracking-[0.6em] text-secondary font-bold">The House</h4>
              <nav className="flex flex-col gap-4">
                {["The Story", "Ethical Sourcing", "Our Craft", "Bespoke Service"].map((item) => (
                  <a key={item} href="#" className="text-stone-500 hover:text-secondary transition-all duration-300 text-xs tracking-widest uppercase font-medium">
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            <div className="space-y-8">
              <h4 className="text-[10px] font-sans uppercase tracking-[0.6em] text-secondary font-bold">Client Care</h4>
              <nav className="flex flex-col gap-4">
                {["Care Guide", "Shipping", "Size Guide", "Contact"].map((item) => (
                  <a key={item} href="#" className="text-stone-500 hover:text-secondary transition-all duration-300 text-xs tracking-widest uppercase font-medium">
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-[10px] font-sans uppercase tracking-[0.6em] text-secondary font-bold">Newsletter</h4>
            <div className="space-y-6">
              <p className="text-xs text-stone-500 font-sans leading-relaxed tracking-wide uppercase">
                Join our inner circle for exclusive previews and collection updates.
              </p>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  className="w-full bg-transparent border-b border-stone-800 py-4 text-[10px] tracking-[0.3em] text-stone-200 focus:outline-none focus:border-secondary transition-colors placeholder:text-stone-700"
                />
                <button className="absolute right-0 bottom-4 text-[10px] tracking-[0.4em] text-secondary font-bold uppercase hover:text-white transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] uppercase tracking-[0.4em] text-stone-700 font-medium">
            © 2026 Shine Jewels. All Rights Reserved.
          </p>
          
          <div className="flex gap-8">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a key={item} href="#" className="text-[9px] uppercase tracking-[0.4em] text-stone-700 hover:text-secondary transition-colors font-medium">
                {item}
              </a>
            ))}
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center text-stone-600 hover:text-secondary hover:border-secondary transition-all"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
