import { useState } from "react";
import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    initials: "EM",
    name: "Eleanor M.",
    role: "Bride",
    text: "The Luna Crescent ring was my something blue for the wedding. It's even more breathtaking in person. The craftsmanship is divine.",
  },
  {
    initials: "ST",
    name: "Sarah T.",
    role: "Collector",
    text: "I wear my Papillon drops every day. They are light as air and catch the morning light so beautifully. Exceptional quality.",
  },
  {
    initials: "JW",
    name: "Julianne W.",
    role: "Bespoke Client",
    text: "From the bespoke consultation to the unboxing, Shine Jewels made me feel like royalty. My engagement ring is a dream come true.",
  },
];

export default function Testimonials() {
  const [showAllMobile, setShowAllMobile] = useState(false);

  return (
    <section className="pt-4 md:pt-8 pb-12 md:pb-24 px-4 md:px-6 bg-[#fdfaf8] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none select-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="absolute top-20 -right-10 vertical-text text-[10px] tracking-[0.8em] text-secondary/30 font-bold uppercase hidden lg:block">
        Voices of the Collection
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-6 md:mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[8px] md:text-[10px] font-sans uppercase tracking-[0.6em] text-secondary mb-2 block font-bold"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-5xl font-serif text-primary italic leading-tight"
          >
            Words from Our <span className="text-secondary not-italic block md:inline">Brides & Collectors</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className={`relative group ${!showAllMobile && index >= 2 ? 'hidden md:block' : ''}`}
            >
              {/* Card Decoration */}
              <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-10 h-10 md:w-12 md:h-12 bg-secondary/5 rounded-full blur-xl group-hover:bg-secondary/10 transition-colors"></div>
              
              <div className="bg-white p-5 md:p-8 rounded-2xl md:rounded-[2rem] border border-secondary/5 shadow-sm hover:shadow-[0_20px_40px_rgba(108,4,59,0.05)] transition-all duration-700 relative z-10 flex flex-col h-full">
                <Quote className="w-6 h-6 md:w-8 md:h-8 text-secondary/10 absolute top-4 right-4 md:top-6 md:right-6 rotate-180" />
                
                <div className="flex text-secondary mb-3 md:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 md:w-3 md:h-3 fill-current" />
                  ))}
                </div>

                <p className="font-serif italic text-sm sm:text-base md:text-xl text-primary leading-relaxed mb-4 md:mb-6 flex-grow">
                  "{review.text}"
                </p>

                <div className="flex items-center gap-3 md:gap-4 border-t border-secondary/5 pt-4 md:pt-6">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-[#fdfaf8] rounded-full flex items-center justify-center font-serif text-primary font-bold text-xs md:text-base border border-secondary/10 group-hover:border-secondary/30 transition-colors">
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="font-serif text-xs md:text-base text-primary tracking-tight">{review.name}</h4>
                    <span className="text-[6px] md:text-[8px] font-sans uppercase tracking-[0.2em] text-secondary font-bold">{review.role}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {!showAllMobile && reviews.length > 2 && (
          <div className="mt-8 text-center md:hidden">
            <button 
              onClick={() => setShowAllMobile(true)}
              className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.3em] text-secondary border border-secondary/20 px-8 py-3 rounded-full hover:bg-secondary hover:text-white transition-all duration-500"
            >
              Load More Reviews
            </button>
          </div>
        )}

        {/* Press Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 md:mt-16 pt-6 md:pt-8 border-t border-secondary/10"
        >
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-16">
            <div className="flex flex-col items-center gap-1 md:gap-2 group cursor-default">
              <span className="font-serif text-sm sm:text-xl md:text-2xl text-primary/40 group-hover:text-primary transition-colors duration-500">Trustpilot</span>
              <div className="flex text-secondary/40 group-hover:text-secondary transition-colors duration-500">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-1 h-1 md:w-2 md:h-2 fill-current" />)}
              </div>
            </div>
            <span className="font-serif text-sm sm:text-xl md:text-2xl text-primary/40 hover:text-primary transition-colors duration-500 cursor-default tracking-tighter">VOGUE</span>
            <span className="font-serif text-sm sm:text-xl md:text-2xl text-primary/40 hover:text-primary transition-colors duration-500 cursor-default tracking-tight">BRIDES</span>
            <span className="font-serif text-sm sm:text-xl md:text-2xl text-primary/40 hover:text-primary transition-colors duration-500 cursor-default italic leading-none text-center">BAZAAR</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
