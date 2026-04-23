import { motion } from "motion/react";
import { Star } from "lucide-react";

const reviews = [
  {
    initials: "DH",
    name: "David H.",
    role: "GROOM",
    text: "Customizing my wife's band was an amazing experience. They really listened to what I wanted and created something beyond my expectations.",
  },
  {
    initials: "OW",
    name: "Olivia W.",
    role: "DAILY WEAR",
    text: "I never take off my gold stacking rings. They've kept their shine perfectly even with daily wear. Truly premium quality.",
  },
  {
    initials: "EM",
    name: "Eleanor M.",
    role: "BRIDE",
    text: "The Luna Crescent ring was my something blue for the wedding. It's even more breathtaking in person. The craftsmanship is divine.",
  },
  {
    initials: "ST",
    name: "Sarah T.",
    role: "COLLECTOR",
    text: "I wear my Papillon drops every day. They catch the air and catch the morning light so beautifully. Exceptional quality.",
  },
];

// Double the reviews for a seamless loop
const duplicatedReviews = [...reviews, ...reviews];

export default function Testimonials() {
  return (
    <section className="pt-[38px] md:pt-[70px] pb-[19px] md:pb-[51px] relative overflow-hidden">
      {/* SVG Filters */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <filter id="testimonial-torn-edge">
          <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/Section Background/Testimonial.webp" 
          alt="Testimonials Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-[100vw] relative z-10">
        <div className="text-center mb-4 md:mb-11 px-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[9px] md:text-[11px] font-sans uppercase tracking-[0.4em] text-[#3a1f26] mb-4 block font-bold"
          >
            TESTIMONIALS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-[46px] font-serif leading-tight font-semibold"
          >
            <span className="text-[#3a1f26] italic mr-2 md:mr-3">Words from Our</span>
            <span className="text-[#cdae77] not-italic">Brides & Collectors</span>
          </motion.h2>
        </div>

        {/* Horizontal Looping Container */}
        <div className="relative w-full">
          {/* Gradient Overlays for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#fbf9f4]/40 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#fbf9f4]/40 to-transparent z-20 pointer-events-none"></div>

          <motion.div
            className="flex gap-6 md:gap-10 px-4"
            animate={{
              x: [0, "-50%"],
            }}
            transition={{
              duration: 50,
              ease: "linear",
              repeat: Infinity,
            }}
            style={{ width: "fit-content" }}
          >
            {duplicatedReviews.map((review, index) => (
              <div
                key={`${review.name}-${index}`}
                className="w-[300px] md:w-[380px] flex-shrink-0 py-4"
              >
                {/* Physical Gold Frame */}
                <div className="relative h-full p-[8px] bg-gradient-to-br from-[#e8cf9f] via-[#cdae77] to-[#8a6732] shadow-[0_15px_30px_rgba(0,0,0,0.15)] rounded-[1px] flex flex-col group">
                  {/* Inner frame reflection line */}
                  <div className="absolute inset-0 border border-white/40 m-[2px] pointer-events-none"></div>
                  
                  {/* The Deckled Paper */}
                  <div 
                    className="relative h-full bg-[#fbf9f4] p-6 md:p-8 flex flex-col items-start text-left shadow-[inset_0_0_20px_rgba(0,0,0,0.02)]" 
                    style={{ filter: 'url(#testimonial-torn-edge)' }}
                  >
                    {/* Top Row: Stars and Quote */}
                    <div className="flex justify-between items-start w-full mb-4 md:mb-6 relative z-10">
                      {/* Stars */}
                      <div className="flex gap-1 pt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] fill-[#cdae77] text-[#cdae77]" />
                        ))}
                      </div>
                      {/* Serif Double Quote */}
                      <div 
                        className="font-serif text-[60px] md:text-[75px] text-[#d8e2df] leading-[0.6] mr-[-5px]" 
                        style={{ WebkitTextStroke: '1.5px #b89454' }}
                      >
                        “
                      </div>
                    </div>

                    {/* Review Text */}
                    <p className="font-serif italic text-[15px] md:text-[17px] text-[#3a1f26] leading-[1.6] mb-8 flex-grow relative z-10 pr-2">
                      "{review.text}"
                    </p>

                    {/* Reviewer Info */}
                    <div className="flex items-center gap-4 mt-auto relative z-10">
                      <div className={`w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center font-serif text-[15px] md:text-[17px] border-[1.5px] border-[#b89454] shadow-[0_4px_10px_rgba(0,0,0,0.1)] ${index % 2 !== 0 ? 'bg-[#3a1f26] text-[#e8cf9f]' : 'bg-[#fbf9f4] text-[#3a1f26]'}`}>
                        {review.initials}
                      </div>
                      <div className="flex flex-col">
                        <h4 className="font-serif text-[15px] md:text-[17px] text-[#3a1f26] tracking-tight mb-0.5">{review.name}</h4>
                        <span className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.15em] text-[#b89454] font-medium">{review.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Press Bar */}
        <div className="max-w-[1400px] mx-auto px-4 mt-12 md:mt-20">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="overflow-hidden"
          >
            <motion.div 
              className="flex items-center gap-12 md:gap-20"
              animate={{
                x: ["-50%", 0],
              }}
              transition={{
                duration: 40,
                ease: "linear",
                repeat: Infinity,
              }}
              style={{ width: "fit-content" }}
            >
              {[
                "MARIE CLAIRE", "VANITY FAIR", "COSMOPOLITAN", "VOGUE", "BRIDES", "BAZAAR",
                "MARIE CLAIRE", "VANITY FAIR", "COSMOPOLITAN", "VOGUE", "BRIDES", "BAZAAR"
              ].map((brand, i) => (
                <span 
                  key={i} 
                  className={`font-serif font-bold text-xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-b from-[#a88444] to-[#5a3e1a] flex-shrink-0 ${
                    brand === "COSMOPOLITAN" ? "font-sans font-black tracking-tighter transform scale-y-110" : ""
                  } ${
                    brand === "BAZAAR" || brand === "VANITY FAIR" ? "italic" : ""
                  }`}
                  style={{ filter: 'drop-shadow(0px 3px 6px rgba(0,0,0,0.25))' }}
                >
                  {brand}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
