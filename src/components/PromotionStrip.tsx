import { motion } from "motion/react";

export default function PromotionStrip() {
  return (
    <div className="w-full h-8 bg-[#6c043b] border-b border-white/5 py-2 text-center overflow-hidden relative z-[210]">
      <motion.p 
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="text-[10px] uppercase tracking-[0.3em] font-bold text-white"
      >
        First order? Use <span className="text-secondary">BLUSH20</span> for 20% off
      </motion.p>
    </div>
  );
}
