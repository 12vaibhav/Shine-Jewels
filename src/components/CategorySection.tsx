import { motion } from "motion/react";

const categories = [
  {
    name: "Rings",
    image: "/Product Images/Category/Rings.webp",
  },
  {
    name: "Earrings",
    image: "/Product Images/Category/Earrings.png",
  },
  {
    name: "Necklaces",
    image: "/Product Images/Category/Necklaces.jpeg",
  },
  {
    name: "Bangles",
    image: "/Product Images/Category/Bangles.webp",
  },
  {
    name: "Bridal Sets",
    image: "/Product Images/Category/Bridal Sets.jpg",
  },
  {
    name: "Bespoke",
    image: "/Product Images/Category/Bespoke.jpg",
  },
];

export default function CategorySection() {
  return (
    <section className="relative pt-[51px] pb-4 overflow-hidden bg-[#faf8f5]">
      {/* Background Image & Sparkles */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/Section Background/Category.webp" 
          alt="Category Background" 
          className="w-full h-full object-cover opacity-85 saturate-[0.8] contrast-[1.05] brightness-[0.95]"
        />
        {/* Unified Luxury Overlay */}
        <div className="absolute inset-0 bg-secondary/5 mix-blend-overlay"></div>
        {/* Subtle radial glow to enhance the center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.4)_0%,transparent_100%)]"></div>
        
        {/* Floating Sparkles (CSS simulation) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-white rounded-full shadow-[0_0_10px_5px_rgba(255,255,255,0.5)] animate-pulse"></div>
          <div className="absolute top-[60%] left-[80%] w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_4px_rgba(255,255,255,0.4)] animate-ping delay-300"></div>
          <div className="absolute top-[80%] left-[30%] w-2.5 h-2.5 bg-[#c8a96e] rounded-full shadow-[0_0_12px_6px_rgba(200,169,110,0.4)] animate-pulse delay-700"></div>
          <div className="absolute top-[30%] left-[70%] w-1 h-1 bg-white rounded-full shadow-[0_0_5px_2px_rgba(255,255,255,0.5)] animate-ping delay-1000"></div>
        </div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-2 md:mb-14 flex flex-col items-center"
        >
          <span className="font-sans uppercase text-[10px] md:text-xs tracking-[0.4em] text-secondary font-semibold mb-4">
            Curated Collections
          </span>
          
          <div className="flex items-center justify-center gap-4 md:gap-8 w-full">
            {/* Left Flourish */}
            <svg width="80" height="20" viewBox="0 0 100 20" className="hidden md:block text-secondary fill-current opacity-80" style={{ transform: 'scaleX(-1)' }}>
              <path d="M0,10 C30,-5 50,25 70,10 C80,2 90,5 100,10 C90,15 80,18 70,10 C50,-5 30,25 0,10 Z"/>
              <circle cx="10" cy="10" r="2" />
              <circle cx="25" cy="10" r="1.5" />
            </svg>

            <h2 className="text-4xl md:text-6xl font-serif italic text-primary drop-shadow-sm font-semibold tracking-tight pb-[15px] md:pb-0">
              Shop by Category
            </h2>

            {/* Right Flourish */}
            <svg width="80" height="20" viewBox="0 0 100 20" className="hidden md:block text-secondary fill-current opacity-80">
              <path d="M0,10 C30,-5 50,25 70,10 C80,2 90,5 100,10 C90,15 80,18 70,10 C50,-5 30,25 0,10 Z"/>
              <circle cx="10" cy="10" r="2" />
              <circle cx="25" cy="10" r="1.5" />
            </svg>
          </div>
        </motion.div>

        {/* Categories Row - Grid on mobile, Flex on desktop */}
        <div className="grid grid-cols-2 md:flex md:flex-nowrap md:overflow-x-auto pb-12 pt-4 md:-mx-4 md:px-4 justify-items-center md:justify-start xl:justify-center items-start gap-y-8 gap-x-[26px] md:gap-0 md:scrollbar-hide md:snap-x">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group cursor-pointer flex flex-col items-center shrink-0 md:w-[210px] md:snap-center relative"
            >
              {/* The Linking Chain Background (Only visible between items on desktop) */}
              {index !== 0 && (
                <div className="hidden md:block absolute top-[45%] left-[-105px] w-[105px] h-[2px] border-t-2 border-dashed border-secondary/40 -z-10 pointer-events-none"></div>
              )}
 
              {/* The Gold Ring Container */}
              <div className="relative w-[115px] h-[115px] md:w-[170px] md:h-[170px] mb-3 md:mb-6">
                
                {/* Outer Chain Detail (SVG) */}
                <div className="absolute inset-[-8px] md:inset-[-12px] z-0 pointer-events-none">
                  <svg className="w-full h-full animate-[spin_60s_linear_infinite]" viewBox="0 0 200 200">
                    <circle cx="100" cy="100" r="96" fill="none" stroke="#c8a96e" strokeWidth="2.5" strokeDasharray="3,4" opacity="0.8" />
                    <circle cx="100" cy="100" r="90" fill="none" stroke="#c8a96e" strokeWidth="1" opacity="0.4" />
                  </svg>
                </div>
 
                {/* 3D Gold Frame */}
                <div className="absolute inset-0 rounded-full z-20 pointer-events-none shadow-[inset_0_0_0_4px_#fceeb5,inset_0_0_0_8px_#c8a96e,inset_0_0_20px_10px_rgba(0,0,0,0.6),0_0_0_2px_#c8a96e,0_15px_30px_rgba(0,0,0,0.4)] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4)_0%,transparent_60%)] group-hover:shadow-[inset_0_0_0_4px_#fceeb5,inset_0_0_0_8px_#c8a96e,inset_0_0_20px_10px_rgba(0,0,0,0.6),0_0_0_2px_#c8a96e,0_20px_40px_rgba(200,169,110,0.4)] transition-shadow duration-500"></div>
 
                {/* Image Mask */}
                <div className="w-full h-full rounded-full overflow-hidden border-[5px] md:border-[6px] border-transparent relative z-10 bg-black">
                  <motion.img
                    src={cat.image}
                    alt={cat.name}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full h-full object-cover rounded-full"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle Inner Glow on Image */}
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_30px_rgba(0,0,0,0.5)] pointer-events-none"></div>
                </div>
 
                {/* Top Badge (Index Number) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center">
                  {/* Decorative crown point */}
                  <div className="w-2.5 h-2.5 md:w-3 h-3 bg-secondary rotate-45 -mb-1.5 md:-mb-2 z-0 rounded-sm"></div>
                  
                  <div className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-[#fdfbf7] border-2 border-secondary shadow-[0_5px_15px_rgba(0,0,0,0.2)] flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0.5 rounded-full border border-secondary/30"></div>
                    <span className="text-[9px] md:text-xs font-serif font-bold text-primary">
                      0{index + 1}
                    </span>
                  </div>
                </div>
              </div>
 
              {/* Category Title */}
              <h3 className="font-serif text-lg md:text-2xl text-primary mt-2 transition-colors duration-300">
                {cat.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
