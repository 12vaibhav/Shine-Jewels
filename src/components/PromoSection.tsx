import { motion } from "motion/react";

// Ornate Corner SVG Flourish for the Image Cards
function CardCorner({ className }: { className: string }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      className={`absolute pointer-events-none z-10 ${className}`}
    >
      <g stroke="#c8a96e" strokeWidth="1" opacity="0.8">
        <path d="M2 38 L2 2 L38 2" fill="none" />
        <path d="M6 38 L6 6 L38 6" fill="none" opacity="0.5" />
        <path d="M2 15 Q10 15 15 2 Q15 10 2 15" fill="none" />
        <circle cx="6" cy="6" r="1.5" fill="#c8a96e" />
      </g>
    </svg>
  );
}

// Sparkle Icon for the Badge
function SparkleIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#c8a96e]">
      <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
      <circle cx="12" cy="12" r="3" fill="currentColor" />
    </svg>
  );
}

export default function PromoSection() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-8 relative overflow-hidden text-center flex items-center justify-center min-h-[600px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/Section Background/Banner Section.webp" 
          alt="Promo Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full max-w-[1400px] mx-auto relative z-10 flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-8">
        
        {/* Left Image Card */}
        <motion.img 
          initial={{ opacity: 0, x: -30, rotate: -3 }}
          whileInView={{ opacity: 1, x: 0, rotate: -3 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          src="/Section Background/B1.webp" 
          alt="Jewellery Detail" 
          className="hidden xl:block w-[28%] aspect-[0.7] object-cover rounded-[32px] rotate-[-3deg]"
        />

        {/* Center Content */}
        <div className="max-w-2xl flex-1 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3a1f26]/80 backdrop-blur-md border border-[#c8a96e]/40 mb-6 shadow-lg">
              <SparkleIcon />
              <span className="text-[#c8a96e] text-[8px] md:text-[9px] tracking-[0.3em] uppercase font-bold">
                Exclusive Debut Privilege
              </span>
              <SparkleIcon />
            </div>

            {/* Headline */}
            <h2 className="flex flex-col items-center text-center mb-5">
              <span className="text-3xl md:text-[42px] font-serif text-[#f4ecd8] leading-tight mb-1">
                Your Journey of
              </span>
              <span className="text-4xl md:text-[56px] font-serif italic text-[#e4c995] leading-tight">
                Brilliance Begins Here
              </span>
            </h2>

            {/* Subheadline */}
            <p className="text-white/90 font-sans text-[11px] md:text-[13px] tracking-wide mb-10 max-w-[340px] leading-relaxed">
              Receive an Exclusive <span className="text-[#e4c995] font-semibold">20% Reduction</span><br />
              on Your Debut Selection.
            </p>
          </motion.div>

          {/* Timer */}
          <div className="flex justify-center gap-4 md:gap-5 mb-10">
            {[
              { label: "Hours", value: "12" },
              { label: "Minutes", value: "45" },
              { label: "Seconds", value: "08" },
            ].map((item, i) => (
              <motion.div 
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              >
                {/* Metallic Timer Block */}
                <div 
                  className="relative flex flex-col items-center justify-center w-[75px] h-[75px] md:w-[85px] md:h-[85px] shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
                  style={{ clipPath: 'polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)' }}
                >
                  {/* Outer Gold Bezel */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#f2e6cb] via-[#d4af37] to-[#8a6327] pointer-events-none"></div>
                  
                  {/* Inner Pearl Plate */}
                  <div 
                    className="absolute inset-[3px] bg-gradient-to-b from-[#ffffff] via-[#f7f0df] to-[#dcc08c] flex flex-col items-center justify-center shadow-[inset_0_0_15px_rgba(255,255,255,0.8)]"
                    style={{ clipPath: 'polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)' }}
                  >
                    <span className="text-[#4a1525] text-2xl md:text-3xl font-serif mb-0.5 tracking-tight">{item.value}</span>
                    <span className="text-[#8c6b3f] text-[7px] md:text-[8px] uppercase tracking-[0.15em] font-bold">{item.label}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Button */}
          <motion.button 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="relative group overflow-hidden rounded-full shadow-[0_8px_25px_rgba(0,0,0,0.5)] border-2 border-[#b58b4c]"
          >
            {/* Metallic Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#fffcf2] via-[#f1e2be] to-[#cfad6f] shadow-[inset_0_2px_5px_rgba(255,255,255,0.9)]"></div>
            
            <div className="relative px-10 md:px-14 py-3.5 md:py-4 flex items-center justify-center">
              <span className="text-[#5a3a1f] font-sans font-bold uppercase tracking-[0.2em] text-[10px] md:text-[11px] drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]">
                Unveil Your Gift
              </span>
            </div>
            
            {/* Shimmer Effect */}
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/40 opacity-0 group-hover:animate-shimmer group-hover:opacity-100" />
          </motion.button>
        </div>

        {/* Right Image Card */}
        <motion.img 
          initial={{ opacity: 0, x: 30, rotate: 3 }}
          whileInView={{ opacity: 1, x: 0, rotate: 3 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          src="/Section Background/B2.webp" 
          alt="Jewellery Detail" 
          className="hidden xl:block w-[28%] aspect-[0.7] object-cover rounded-[32px] rotate-[3deg]"
        />
      </div>
    </section>
  );
}
