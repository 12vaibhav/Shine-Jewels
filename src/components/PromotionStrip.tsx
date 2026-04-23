import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

const notices = [
  "FREE SHIPPING ON ALL ORDERS ABOVE €10,000",
  "Visit our Mumbai Studio for a Bespoke Consultation",
  "New Floral Collection is now live - Explore more",
];

export default function PromotionStrip() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % notices.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-[34px] bg-[#6c043b] border-b border-white/5 flex items-center justify-center overflow-hidden relative z-[210]">
      <AnimatePresence mode="wait">
        <motion.p 
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-[9px] md:text-[10px] uppercase tracking-wider md:tracking-[0.4em] font-bold text-white px-2 text-center"
        >
          {notices[index].includes("BLUSH20") ? (
            <>First order? Use <span className="text-secondary">BLUSH20</span> for 20% off</>
          ) : notices[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
