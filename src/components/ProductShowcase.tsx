import { motion } from "motion/react";

const earringProducts = [
  { name: "Aurelia Studs", price: "₹380", image: "/Product Images/Masterpieces for the Ear/Pink Ghunghroo Dangler Earrings.webp" },
  { name: "Sapphire Night", price: "₹720", image: "/Product Images/Masterpieces for the Ear/Royal Temple Design Earrings.webp" },
  { name: "Classic Hoops", price: "₹280", image: "/Product Images/Masterpieces for the Ear/Traditional Hoop Jhumka Earrings.webp" },
  { name: "Butterfly Studs", price: "₹320", image: "/Product Images/Masterpieces for the Ear/White Mother of Pearl Earrings.webp" },
];

const ringProducts = [
  { name: "Blue Square Halo", price: "₹3,200", image: "/Product Images/Rings for Every Story/Blue Square Halo Cocktail Ring.webp" },
  { name: "Green Kundan Pearl", price: "₹850", image: "/Product Images/Rings for Every Story/Green Kundan Ring with Pearl Drop Chains.webp" },
  { name: "Isvari Heirloom", price: "₹2,450", image: "/Product Images/Rings for Every Story/Isvari White Ring.webp" },
  { name: "Marsha CZ", price: "₹1,100", image: "/Product Images/Rings for Every Story/Marsha CZ Ring.webp" },
];

const Pearl = ({ className, size }: { className: string, size: string }) => (
  <div 
    className={`absolute rounded-full shadow-[inset_-3px_-3px_8px_rgba(0,0,0,0.15),_2px_4px_5px_rgba(0,0,0,0.25)] bg-gradient-to-br from-[#ffffff] via-[#fcf6eb] to-[#e6d5b8] ${className}`} 
    style={{ width: size, height: size }}
  >
    <div className="absolute top-[15%] left-[15%] w-[30%] h-[30%] bg-white rounded-full blur-[0.5px] opacity-90"></div>
  </div>
);

export default function ProductShowcase() {
  return (
    <div className="space-y-0">
      <svg width="0" height="0" className="absolute pointer-events-none">
        <filter id="torn-edge">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      {/* Earring Section */}
      <section className="pt-12 md:pt-20 pb-16 md:pb-24 px-4 md:px-8 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/Section Background/for Rings.webp" 
            alt="Section Background" 
            className="w-full h-full object-cover opacity-85 saturate-[0.8] contrast-[1.05] brightness-[0.95]"
          />
          {/* Unified Luxury Overlay */}
          <div className="absolute inset-0 bg-secondary/5 mix-blend-overlay"></div>
        </div>

        <div className="max-w-[1300px] mx-auto relative z-10">
          {/* Header */}
          <div className="mb-12 md:mb-16 pl-0 md:pl-4 text-center md:text-left flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2">
            <h2 className="text-4xl md:text-[54px] font-serif text-[#3a1f26] tracking-tight m-0 leading-none font-semibold">
              Masterpieces
            </h2>
            <span className="font-serif italic text-[#cdae77] text-4xl md:text-[58px] leading-none md:-mt-2 font-semibold">
              for the Ear
            </span>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-10 items-center lg:items-start">
            
            {/* Left Column: Editorial Image & Story */}
            <div className="w-full lg:w-[45%] relative mt-4 md:mt-0 pl-0 md:pl-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-20 w-full md:w-[85%] mx-auto lg:mx-0"
              >
                <div className="relative aspect-[4/4.5] bg-white shadow-[0_15px_40px_rgba(0,0,0,0.15)] p-[2px]">
                  {/* Gold Frame Border */}
                  <div className="absolute inset-0 border-[2px] border-[#cdae77] m-1 pointer-events-none z-10 shadow-[inset_0_0_10px_rgba(0,0,0,0.05)]"></div>
                  
                  <img
                    src="/Product Images/Masterpieces for the Ear/Big Image.webp"
                    alt="Statement Earrings"
                    className="w-full h-full object-cover"
                  />
 
                  {/* Pearls at the bottom edge */}
                  <Pearl className="-bottom-3 left-[20%]" size="18px" />
                  <Pearl className="-bottom-1 left-[25%]" size="12px" />
                  <Pearl className="-bottom-4 left-[28%]" size="15px" />
                  <Pearl className="-bottom-2 left-[32%]" size="10px" />
                </div>
              </motion.div>
 
              {/* Overlapping Content Box with Deckled Edge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative lg:absolute -mt-16 lg:mt-0 lg:-bottom-16 -right-0 lg:right-0 p-6 md:p-7 max-w-[280px] md:max-w-[300px] mx-auto lg:mx-0 z-30"
              >
                {/* Torn Edge Background */}
                <div 
                  className="absolute inset-0 bg-[#f9f7f2] shadow-[0_15px_30px_rgba(0,0,0,0.1)]" 
                  style={{ filter: 'url(#torn-edge)' }}
                ></div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-start text-left">
                  <div className="w-5 h-[1.5px] bg-[#a88444] mb-4"></div>
                  <h3 className="font-serif text-[22px] md:text-[26px] text-[#3a1f26] italic mb-3 leading-[1.15]">
                    Sculpted for <br /> the Senses
                  </h3>
                  <p className="text-[10px] md:text-[11px] text-[#333333] font-sans leading-[1.8] mb-6 font-medium tracking-wide">
                    Our earrings are more than mere adornments; they are architectural studies in light and movement. Each piece is meticulously balanced to ensure comfort without compromising on sheer editorial drama.
                  </p>
                  
                  <button className="px-4 py-2 bg-gradient-to-b from-[#e8e4db] to-[#cac4b7] rounded-[2px] text-[9px] font-sans font-bold uppercase tracking-[0.15em] text-[#3a2f26] shadow-[inset_0_1px_0_rgba(255,255,255,0.8),_0_4px_8px_rgba(0,0,0,0.1)] border border-[#b8b2a5] hover:bg-gradient-to-b hover:from-[#f0ede6] hover:to-[#d0caca] transition-all">
                    DISCOVER THE PROCESS
                  </button>

                  {/* Gem/Pearl element on the box */}
                  <div className="absolute -bottom-6 right-8">
                    <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
                      <circle cx="50" cy="50" r="45" fill="url(#gem-grad)" />
                      <path d="M10 50 L50 10 L90 50 L50 90 Z" fill="rgba(255,255,255,0.4)" />
                      <path d="M30 30 L70 30 L70 70 L30 70 Z" fill="rgba(200,169,110,0.5)" />
                      <defs>
                        <linearGradient id="gem-grad" x1="0" y1="0" x2="100" y2="100">
                          <stop offset="0%" stopColor="#e8cf9f" />
                          <stop offset="50%" stopColor="#cdae77" />
                          <stop offset="100%" stopColor="#8a6732" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Product Grid */}
            <div className="w-full lg:w-[55%]">
              <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:gap-x-12 md:gap-y-12">
                {earringProducts.map((p, i) => (
                  <motion.div
                    key={p.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.8 }}
                    className="group relative max-w-full mx-auto w-full"
                  >
                    <div className="relative aspect-square overflow-hidden rounded-[12px] shadow-[0_10px_25px_rgba(0,0,0,0.12)] group-hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)] transition-all duration-500 border-[1.5px] border-[#cdae77]/60">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                      />
                      
                      {/* Content Overlay */}
                      <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end min-h-[45%]">
                        <span className="text-[#cdae77] text-[8px] md:text-[9px] font-sans uppercase tracking-[0.2em] mb-1 block opacity-90 font-bold">
                          0{i + 1}
                        </span>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-1 sm:gap-2">
                          <h3 className="font-serif text-[20px] md:text-[23px] text-white tracking-tight leading-tight">
                            {p.name}
                          </h3>
                          <p className="font-serif text-[#cdae77] text-[19px] md:text-[21px] flex-shrink-0 font-medium">
                            {p.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Ring Section */}
      <section className="pt-12 md:pt-20 pb-16 md:pb-24 px-4 md:px-8 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/Section Background/for Rings.webp" 
            alt="Section Background" 
            className="w-full h-full object-cover transform scale-x-[-1] opacity-85 saturate-[0.8] contrast-[1.05] brightness-[0.95]"
          />
          {/* Unified Luxury Overlay */}
          <div className="absolute inset-0 bg-secondary/5 mix-blend-overlay"></div>
        </div>

        <div className="max-w-[1300px] mx-auto relative z-10">
          {/* Header */}
          <div className="mb-12 md:mb-16 pr-0 md:pr-4 text-center md:text-right flex flex-wrap items-center justify-center md:justify-end gap-x-4 gap-y-2">
            <span className="font-serif italic text-[#cdae77] text-4xl md:text-[58px] leading-none md:-mt-2 font-semibold">
              Rings for
            </span>
            <h2 className="text-4xl md:text-[54px] font-serif text-[#3a1f26] tracking-tight m-0 leading-none font-semibold">
              Every Story
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-10 items-center lg:items-start">
            
            {/* Left Column: Product Grid */}
            <div className="w-full lg:w-[55%] order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:gap-x-12 md:gap-y-12">
                {ringProducts.map((p, i) => (
                  <motion.div
                    key={p.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.8 }}
                    className="group relative max-w-full mx-auto w-full"
                  >
                    <div className="relative aspect-square overflow-hidden rounded-[12px] shadow-[0_10px_25px_rgba(0,0,0,0.12)] group-hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)] transition-all duration-500 border-[1.5px] border-[#cdae77]/60">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                      />
                      
                      {/* Content Overlay */}
                      <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end min-h-[45%]">
                        <span className="text-[#cdae77] text-[8px] md:text-[9px] font-sans uppercase tracking-[0.2em] mb-1 block opacity-90 font-bold">
                          0{i + 1}
                        </span>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-1 sm:gap-2">
                          <h3 className="font-serif text-[20px] md:text-[23px] text-white tracking-tight leading-tight">
                            {p.name}
                          </h3>
                          <p className="font-serif text-[#cdae77] text-[19px] md:text-[21px] flex-shrink-0 font-medium">
                            {p.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Editorial Image & Story */}
            <div className="w-full lg:w-[45%] order-1 lg:order-2 relative mt-4 md:mt-0 pr-0 md:pr-4 lg:translate-x-[60px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-20 w-full md:w-[85%] mx-auto lg:mx-0"
              >
                <div className="relative aspect-[4/4.5] bg-white shadow-[0_15px_40px_rgba(0,0,0,0.15)] p-[2px]">
                  {/* Gold Frame Border */}
                  <div className="absolute inset-0 border-[2px] border-[#cdae77] m-1 pointer-events-none z-10 shadow-[inset_0_0_10px_rgba(0,0,0,0.05)]"></div>
                  
                  <img
                    src="/Product Images/Rings for Every Story/Big Image.webp"
                    alt="Rings Styling"
                    className="w-full h-full object-cover"
                  />
 
                  {/* Pearls at the bottom edge */}
                  <Pearl className="-bottom-3 right-[20%]" size="18px" />
                  <Pearl className="-bottom-1 right-[25%]" size="12px" />
                  <Pearl className="-bottom-4 right-[28%]" size="15px" />
                  <Pearl className="-bottom-2 right-[32%]" size="10px" />
                </div>
              </motion.div>
 
              {/* Overlapping Content Box with Deckled Edge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative lg:absolute -mt-16 lg:mt-0 lg:-bottom-16 -left-0 lg:-left-[35px] p-6 md:p-7 max-w-[280px] md:max-w-[300px] mx-auto lg:mx-0 z-30"
              >
                {/* Torn Edge Background */}
                <div 
                  className="absolute inset-0 bg-[#f9f7f2] shadow-[0_15px_30px_rgba(0,0,0,0.1)]" 
                  style={{ filter: 'url(#torn-edge)' }}
                ></div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-start text-left">
                  <div className="w-5 h-[1.5px] bg-[#a88444] mb-4"></div>
                  <h3 className="font-serif text-[22px] md:text-[26px] text-[#3a1f26] italic mb-3 leading-[1.15]">
                    The Circle <br /> of Eternity
                  </h3>
                  <p className="text-[10px] md:text-[11px] text-[#333333] font-sans leading-[1.8] mb-6 font-medium tracking-wide">
                    Every ring tells a story of connection and timelessness. Hand-sculpted in our house, these pieces are designed to be worn for a lifetime and passed down through generations.
                  </p>
                  
                  <button className="px-4 py-2 bg-gradient-to-b from-[#e8e4db] to-[#cac4b7] rounded-[2px] text-[9px] font-sans font-bold uppercase tracking-[0.15em] text-[#3a2f26] shadow-[inset_0_1px_0_rgba(255,255,255,0.8),_0_4px_8px_rgba(0,0,0,0.1)] border border-[#b8b2a5] hover:bg-gradient-to-b hover:from-[#f0ede6] hover:to-[#d0caca] transition-all">
                    VIEW SIZE GUIDE
                  </button>

                  {/* Gem/Pearl element on the box */}
                  <div className="absolute -bottom-6 left-8">
                    <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
                      <circle cx="50" cy="50" r="45" fill="url(#gem-grad-2)" />
                      <path d="M10 50 L50 10 L90 50 L50 90 Z" fill="rgba(255,255,255,0.4)" />
                      <path d="M30 30 L70 30 L70 70 L30 70 Z" fill="rgba(200,169,110,0.5)" />
                      <defs>
                        <linearGradient id="gem-grad-2" x1="0" y1="0" x2="100" y2="100">
                          <stop offset="0%" stopColor="#e8cf9f" />
                          <stop offset="50%" stopColor="#cdae77" />
                          <stop offset="100%" stopColor="#8a6732" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
