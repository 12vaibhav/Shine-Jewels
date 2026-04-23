import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";

const products = [
  {
    name: "Esha Pink Bangles",
    price: "₹2,850",
    image: "/Product Images/New Arrivals/Esha Pink Bangles.webp",
    material: "18K Gold Plated",
    reviews: 48,
  },
  {
    name: "Ethnic Fringe Earrings",
    price: "₹1,420",
    image: "/Product Images/New Arrivals/Ethnic Fringe Elephant Dangle Earrings.webp",
    material: "Sterling Silver",
    reviews: 35,
  },
  {
    name: "Jogi Green Payal",
    price: "₹1,250",
    image: "/Product Images/New Arrivals/Jogi Green Payal Anklets.webp",
    material: "Kemp Stones",
    reviews: 52,
  },
  {
    name: "Polki Kundan Set",
    price: "₹9,800",
    image: "/Product Images/New Arrivals/Pearl Rose Enamel Polki Kundan Necklace Set.webp",
    material: "Pearl & Enamel",
    reviews: 42,
  },
  {
    name: "Scorpio Mangalsutra",
    price: "₹3,650",
    image: "/Product Images/New Arrivals/Scorpio Mangalsutra.webp",
    material: "18K Gold",
    reviews: 29,
  },
];

export default function NewArrivals() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="pt-[13px] pb-0 md:pt-[61px] md:pb-[26px] px-4 md:px-8 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/Section Background/New Arrivals.webp" 
          alt="New Arrivals Background" 
          className="w-full h-full object-cover opacity-85 saturate-[0.8] contrast-[1.05] brightness-[0.95]"
        />
        {/* Unified Luxury Overlay */}
        <div className="absolute inset-0 bg-secondary/5 mix-blend-overlay"></div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="relative mb-12 flex flex-col items-center w-full">
          {/* Main Title Area (Centered) */}
          <div className="text-center flex flex-col items-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-sans uppercase text-[10px] md:text-xs tracking-[0.3em] text-[#4a1525] font-semibold mb-2 block"
            >
              The Spring Collection
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-serif text-[#333021] italic tracking-tight mb-6 font-semibold">
              New Arrivals
            </h2>
          </div>

          {/* Explore All Link (Absolute Right on Desktop, hidden on mobile) */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="hidden md:flex md:absolute md:right-0 md:bottom-8"
          >
            <Link
              to="/new-arrivals"
              className="text-[#333021] font-sans text-xs tracking-[0.2em] uppercase flex items-center gap-2 hover:opacity-70 transition-opacity border-b border-[#333021]/30 pb-1"
            >
              Explore All <span className="text-lg leading-none">&rarr;</span>
            </Link>
          </motion.div>

          {/* Decorative Divider */}
          <div className="w-full max-w-4xl flex items-center gap-3 mt-4 opacity-80">
            <div className="w-1.5 h-1.5 rotate-45 bg-[#c8a96e]"></div>
            <div className="h-[1px] flex-1 bg-[#c8a96e]"></div>
            
            {/* Center Floral SVG */}
            <div className="px-2 text-[#c8a96e]">
              <svg width="120" height="30" viewBox="0 0 120 30" className="fill-current">
                <path d="M60,15 C50,0 40,10 30,5 C40,20 50,25 60,15 Z M60,15 C70,0 80,10 90,5 C80,20 70,25 60,15 Z" opacity="0.7"/>
                <circle cx="60" cy="15" r="3" />
                <path d="M60,18 C55,25 45,20 40,28 C45,28 55,30 60,25 Z M60,18 C65,25 75,20 80,28 C75,28 65,30 60,25 Z" opacity="0.5"/>
                <path d="M25,10 C15,5 5,15 0,10 C10,20 20,20 25,10 Z M95,10 C105,5 115,15 120,10 C110,20 100,20 95,10 Z" opacity="0.4"/>
              </svg>
            </div>

            <div className="h-[1px] flex-1 bg-[#c8a96e]"></div>
            <div className="w-1.5 h-1.5 rotate-45 bg-[#c8a96e]"></div>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="relative group/scroll md:px-0">
          {/* Chevron Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-30 w-12 h-12 rounded-full bg-[#f4efe8]/90 backdrop-blur-md border border-[#c8a96e]/30 flex items-center justify-center text-[#333021] hover:bg-[#c8a96e] hover:text-white transition-all shadow-lg opacity-0 group-hover/scroll:opacity-100 hidden md:flex"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-30 w-12 h-12 rounded-full bg-[#f4efe8]/90 backdrop-blur-md border border-[#c8a96e]/30 flex items-center justify-center text-[#333021] hover:bg-[#c8a96e] hover:text-white transition-all shadow-lg opacity-0 group-hover/scroll:opacity-100 hidden md:flex"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto overflow-y-hidden scrollbar-hide snap-x scroll-px-4 scroll-smooth pb-12 pt-4 -mx-4 px-4 md:mx-0 md:px-0"
          >
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="group min-w-[calc(50%-12px)] w-[calc(50%-12px)] md:min-w-[0] md:w-[calc(25%-18px)] snap-start shrink-0 flex flex-col"
              >
                <div className="bg-[#f8f5f0] rounded-2xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-shadow duration-500 border border-black/5 flex flex-col h-full">
                  
                  {/* Image Container */}
                  <Link to={`/product/${product.name.replace(/\s+/g, '-').toLowerCase()}`} className="relative w-full aspect-[4/4.5] overflow-hidden block shrink-0">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />

                    {/* NEW IN Badge */}
                    <div className="absolute top-4 left-4 bg-[#f8f5f0] px-3 py-1.5 shadow-sm flex items-center justify-center z-10">
                      <div className="absolute inset-[3px] border-[0.5px] border-[#c8a96e]/60"></div>
                      <span className="text-[9px] md:text-[10px] tracking-[0.15em] uppercase font-sans font-semibold text-[#333021] relative z-10">
                        New In
                      </span>
                    </div>
                  </Link>

                  {/* Content Area */}
                  <div className="p-3.5 md:p-6 text-center flex flex-col items-center justify-center flex-1 bg-[#f8f5f0]">
                    <span className="text-[8px] md:text-[9px] font-sans uppercase tracking-[0.2em] text-[#c8a96e] font-semibold mb-1.5 md:mb-2 block">
                      {product.material}
                    </span>
                    <Link to={`/product/${product.name.replace(/\s+/g, '-').toLowerCase()}`}>
                      <h3 className="font-serif text-[14px] md:text-[17px] text-[#333021] mb-1.5 md:mb-2 hover:opacity-70 transition-opacity leading-snug">
                        {product.name}
                      </h3>
                    </Link>
                    <span className="text-[#4a1525] font-sans text-[11px] md:text-[15px] tracking-wide mt-auto font-medium">
                      {product.price}
                    </span>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
 
          {/* Mobile Explore All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex md:hidden justify-center mt-2 pb-4"
          >
            <Link
              to="/new-arrivals"
              className="text-[#333021] font-sans text-[11px] tracking-[0.25em] uppercase flex items-center gap-2 hover:opacity-70 transition-opacity border border-[#333021]/20 px-8 py-3 rounded-full bg-white shadow-sm"
            >
              Explore All <span className="text-lg leading-none">&rarr;</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


