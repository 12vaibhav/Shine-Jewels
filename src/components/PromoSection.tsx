import { motion } from "motion/react";
import { Sparkles, Flower2 } from "lucide-react";

export default function PromoSection() {
  return (
    <section className="py-8 md:py-20 bg-[#6c043b] px-4 md:px-6 relative overflow-hidden text-center">
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      {/* Dynamic Background Glows */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] pointer-events-none"
      />

      {/* Animated Background Elements */}
      <motion.div 
        animate={{ 
          rotate: 360,
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -left-40 text-white/5 w-80 h-80 select-none pointer-events-none"
      >
        <Flower2 className="w-full h-full" />
      </motion.div>
      
      <motion.div 
        animate={{ 
          rotate: -360,
        }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-48 -right-48 text-white/5 w-[24rem] h-[24rem] select-none pointer-events-none"
      >
        <Flower2 className="w-full h-full" />
      </motion.div>

      {/* Floating Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
              y: [0, -30, 0],
            }}
            transition={{ 
              duration: 4 + i, 
              repeat: Infinity, 
              delay: i * 0.7 
            }}
            className="absolute text-secondary/40"
            style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%` 
            }}
          >
            <Sparkles className="w-2 h-2" />
          </motion.div>
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Image Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="hidden xl:block w-1/4 aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl rotate-[-3deg]"
        >
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRY-bWHpLIm8-0rMvqnE4Wf7HpQRsmbmdh-M_Q8edRldm_2qCNTP6D92SJe8hVu8X4fP5cP1pckUXPaKmIClW3LqwxFz-Vwcyh4K1w7q6cJH_NIlTjNYE_5Yu26-6AAfh3McV0SQ81GrrZymazc5zznu60IeBDyyB2QFI7sQwr-WUUw028eu5WEMvj6LPYo3F1u739SHrHq5Y3fFfkrk9x91_-LnJq-ieXekIbp4l3UZAATw60GlEaWztAFIP1OY-KimMnM8mjiic" 
            alt="Jewellery Detail" 
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="max-w-2xl flex-1 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 md:mb-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-secondary text-[8px] tracking-[0.4em] uppercase font-bold mb-3 md:mb-4 shadow-xl">
              <Sparkles className="w-2.5 h-2.5 animate-pulse" />
              Exclusive Privilege
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight mb-4 tracking-tight">
              A Gift for Your <span className="italic text-secondary relative inline-block">
                First Journey
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="absolute -bottom-1 left-0 h-[1px] bg-secondary/30"
                />
              </span>
            </h2>
            <p className="text-white/60 font-sans text-[8px] md:text-[9px] tracking-[0.2em] uppercase mb-6 md:mb-8 max-w-[280px] md:max-w-md mx-auto leading-relaxed">
              Receive a <span className="text-secondary font-bold">20% reduction</span> on your debut acquisition.
            </p>
          </motion.div>

          <div className="flex justify-center gap-3 md:gap-6 mb-6 md:mb-8 text-center">
            {[
              { label: "Hours", value: "12" },
              { label: "Minutes", value: "45" },
              { label: "Seconds", value: "08" },
            ].map((item, i) => (
              <motion.div 
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="relative group"
              >
                <div className="w-14 h-14 md:w-20 md:h-20 bg-white/[0.03] backdrop-blur-2xl flex flex-col items-center justify-center rounded-2xl border border-white/10 shadow-lg group-hover:border-secondary/40 transition-all duration-500 group-hover:-translate-y-1">
                  <span className="text-white text-lg md:text-2xl font-serif italic mb-0.5 tracking-tighter">{item.value}</span>
                  <span className="text-white/30 text-[6px] md:text-[7px] uppercase tracking-[0.1em] font-bold">{item.label}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button 
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="relative group overflow-hidden bg-secondary text-primary px-8 md:px-12 py-4 rounded-full font-sans tracking-[0.4em] uppercase text-[9px] font-bold shadow-xl transition-all"
          >
            <span className="relative z-10">Claim Privilege</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/40 opacity-50 group-hover:animate-shimmer" />
          </motion.button>
        </div>

        {/* Right Image Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="hidden xl:block w-1/4 aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl rotate-[3deg]"
        >
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiY242QnN9XzQPwm9KfKKmnms73mNCIdfnPMH4F315Z-lnvQufZQgITNu_UzAXjk45q7Vt807Vcw6orWmFF3RRUBuLGNvh5raft4nNSLc-jkOe-fNTWd71AZeWjsfS2zW9BRsnK_41JSmNgmAvp2ugjfyJ_ZACN2qlHSGCX7HC64TRaCJBTzS9x5p8yJ42cJgF5G8XkGagJQJzmP1KXjM1ZwfJFimOre8bcL3uI4rnfVHWd5Pfk2jFfhzrPlQfcjX2dbYJLhAhwIU" 
            alt="Jewellery Detail" 
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}
