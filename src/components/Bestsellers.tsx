import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const bestsellers = [
  {
    name: "Royal Grace Choker",
    price: "₹2,800",
    image: "/Product Images/Our Bestsellers/Elegant Green Emerald Drop Earrings.webp",
  },
  {
    name: "Vintage Heirloom Ring",
    price: "₹1,450",
    image: "/Product Images/Our Bestsellers/Heritage Floral Medallion Bracelet.webp",
  },
  {
    name: "Marquise Emerald Drops",
    price: "₹3,200",
    image: "/Product Images/Our Bestsellers/Liora Mint CZ Ring.webp",
  },
  {
    name: "Shine Diamond Cuff",
    price: "₹4,500",
    image: "/Product Images/Our Bestsellers/Purple Choker Set.webp",
  },
  {
    name: "Seerat Wine Maangtikka",
    price: "₹5,200",
    image: "/Product Images/Our Bestsellers/Seerat Wine Maangtikka.webp",
  },
];

// Ornate Corner SVG Flourish
function CornerFlourish({ className }: { className: string }) {
  return (
    <svg
      width="90"
      height="90"
      viewBox="0 0 90 90"
      fill="none"
      className={`absolute pointer-events-none ${className}`}
    >
      <g opacity="0.6" stroke="#c8a96e" strokeWidth="0.8">
        {/* Main corner L-bracket */}
        <path d="M2 45 L2 2 L45 2" fill="none" strokeLinecap="round" />
        {/* Scroll curl top */}
        <path d="M2 2 Q2 2 8 8 Q14 14 8 20 Q4 26 10 28" fill="none" strokeLinecap="round" />
        {/* Inner thin line bracket */}
        <path d="M8 45 L8 8 L45 8" fill="none" strokeLinecap="round" strokeOpacity="0.5" />
        {/* Decorative leaf/scroll on vertical arm */}
        <path d="M2 30 Q-4 36 2 42" fill="none" strokeLinecap="round" />
        <path d="M2 30 Q8 36 2 42" fill="none" strokeLinecap="round" />
        {/* Decorative leaf on horizontal arm */}
        <path d="M30 2 Q36 -4 42 2" fill="none" strokeLinecap="round" />
        <path d="M30 2 Q36 8 42 2" fill="none" strokeLinecap="round" />
        {/* Small diamond dot at corner */}
        <rect x="0.5" y="0.5" width="3" height="3" transform="rotate(45 2 2)" fill="#c8a96e" opacity="0.8" />
      </g>
    </svg>
  );
}

export default function Bestsellers() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="pt-[18px] pb-0 md:pt-[50px] md:pb-[10px] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Section Background/Our BestSellers.webp"
          alt="Our Bestsellers Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Corner Flourishes */}
      <CornerFlourish className="top-3 left-3 z-20" />
      <CornerFlourish className="top-3 right-3 z-20 scale-x-[-1]" />
      <CornerFlourish className="bottom-3 left-3 z-20 scale-y-[-1]" />
      <CornerFlourish className="bottom-3 right-3 z-20 scale-x-[-1] scale-y-[-1]" />

      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-12 relative z-10">
        {/* Header — perfectly centered */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans uppercase tracking-[0.4em] text-[9px] md:text-[10px] text-[#c8a96e] mb-3 block font-semibold"
          >
            Collection Favorites
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif italic text-[#f0e6d3]"
          >
            Our Bestsellers
          </motion.h2>
        </div>

        {/* Carousel */}
        <div className="relative group/scroll">
          {/* Chevron Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-[40%] -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-30 w-11 h-11 rounded-full border border-[#c8a96e]/40 flex items-center justify-center text-[#c8a96e] hover:bg-[#c8a96e]/20 transition-all shadow-2xl bg-black/30 backdrop-blur-md opacity-0 group-hover/scroll:opacity-100 hidden md:flex"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-[40%] -translate-y-1/2 translate-x-4 md:translate-x-8 z-30 w-11 h-11 rounded-full border border-[#c8a96e]/40 flex items-center justify-center text-[#c8a96e] hover:bg-[#c8a96e]/20 transition-all shadow-2xl bg-black/30 backdrop-blur-md opacity-0 group-hover/scroll:opacity-100 hidden md:flex"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-5 md:gap-7 overflow-x-auto overflow-y-hidden scrollbar-hide snap-x scroll-px-4 scroll-smooth pb-10 pt-2 -mx-4 px-4 md:mx-0 md:px-0"
          >
            {bestsellers.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="group min-w-[calc(50%-12px)] w-[calc(50%-12px)] md:min-w-[0] md:w-[calc(25%-21px)] snap-start shrink-0 flex flex-col"
              >
                {/* Card with gold border */}
                <Link
                  to={`/product/${item.name.replace(/\s+/g, "-").toLowerCase()}`}
                  className="block relative aspect-[3/3.8] overflow-hidden rounded-2xl border-[1.5px] border-[#c8a96e]/60 shadow-[0_8px_30px_rgba(0,0,0,0.5)] mb-4 bg-[#1a1209] group-hover:border-[#c8a96e] transition-colors duration-500"
                >
                  {/* Inner subtle glow rim */}
                  <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_20px_rgba(200,169,110,0.08)] pointer-events-none z-10"></div>
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="w-full h-full object-cover"
                  />
                </Link>

                {/* Text below card — clean & centered */}
                <div className="text-center">
                  <Link
                    to={`/product/${item.name.replace(/\s+/g, "-").toLowerCase()}`}
                  >
                    <h3 className="font-serif italic text-[#f0e6d3] text-lg md:text-xl mb-1.5 group-hover:text-[#c8a96e] transition-colors duration-300 leading-tight">
                      {item.name}
                    </h3>
                  </Link>
                  <p className="text-[#c8a96e] font-sans text-[11px] md:text-[13px] tracking-widest font-medium">
                    {item.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
