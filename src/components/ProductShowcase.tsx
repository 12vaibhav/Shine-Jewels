import { motion } from "motion/react";
import { ShoppingBag, Sparkles } from "lucide-react";

const earringProducts = [
  { name: "Aurelia Studs", price: "$380", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuhRzP4Zx2-JqzbcOohfTT7YyeNYZhAXE_oa8VW-vudmw_8OO27sbkRwKW3z_IerGXZ2tUp3fqLYkLflg2ssyX1C8PZbcydoWMjOpAFNjyVDnI_w5RkPEVhsK6f6aHBoux2ECpFRIlgxOS3xlcJaQWMoFWoj3Fi_FmglKUTLmRRwWHqfzYvt05Xnq_t66RRg8dqG9i1UrBfIyZp3Sjfst4nE0A5KNj_KaS0cBZG5bGn0kFsUyVaD-57U6wZ5oBGme0YohM1k8YvCg" },
  { name: "Sapphire Night", price: "$720", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkbjpUyghr9LkMNtkNzOqjdtdzWW6_-Z_zMY5uHCMaCc6W-FVsGweENi3JpND-L6tCaHugfnM6YOqcDfKcLF2XNX4e-u1wHY3DbSk9P-e7LGaWdvRJh5FdeDrksrDfrhQyvOa-yw_VfoQiOcDtarndMa1XmFFPC-Jw5aurXA5IS_uT5bFflJaCTOhZwxURM0F42TSVQSnaAeXBupWNtgxE86Lp_QvVBGPX-jzJFb0ZbIQaYFFv2_NTvzJIzMF5xvk56caB7QT9hSE" },
  { name: "Infinity Hoops", price: "$450", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCh1q5NsPM6ZnoblU3yGnHnE6QM4onBnwH6RqjRw6whn2PiT6wESiggsntiu0OCA4LA5AA5nros3XMrhQsk01wBvUHa1U4VMkuILL9E9NHR8ee4ryXH9N2d8ex3QFxz0B2aG0-AThm8tN-SFEymvetPyUjb3Ch44Jy7zI0vkOyx-FQZkyfHUujhloYgHijN-pJCw_AMj-fbndR9TG9osuYaQE46V6WxCoLoaIdLBVU14UkxPWtgjgkunwYDbvoENDAXYLz7PCVRepw" },
  { name: "Papillon Drops", price: "$590", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCTCArxmaLyVcwMIQPBX1s_q3jtrw18frw0DBMrVV37H4YWNBZ71SVeFpSSvR18HVisRtHkfAlI4SpoP1zmINv6fU-dIrr79OOEwcJcgAVcMvLl_Bs3KCb4eUwKMAG1MAws86UIjE8y-hmvByxKQQmsJUmf2UcDl8pc_i1PuvyigYbgdBykP_Btck67fQIn1aKi7EMbbWPNUrsmnfNTeyJAG_z-YqALxVApxRzdhc8o3saJT2gZtvIRqGPonGwYENKtw-ikIE2Mes" },
];

const ringProducts = [
  { name: "The Forever Solitaire", price: "$3,200", desc: "A timeless symbol of devotion, handcrafted in 18k white gold.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCrcT2hOstGNwk-GmkKWn00fmKm9Q0Mws66EkXL29EP82sIRR-5KTLDLqafe0bJPwwMjnmOl68864T4mPU5CN9mtd6eI5ZAFNGFbZeQsVv_P9EFO5X0us2wnzt742jvfNeYEjtsWSDPlGkaYaloURTMD44-LnySExvqeWqi5jFxfTez5uZ68rCow9LFLK54qk-yUTa9pJocXJQn-7E9EA7N7LkYYBqLbPD_KU7J8VJKgxftK7GgBXYeff5YOLPSrrJQA1iKkwl6-Q" },
  { name: "Horizon Band", price: "$850", desc: "Inspired by the infinite curve of the ocean, textured yellow gold.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZ5au5oUEMCInhRLRJ-PLY92nrw03LZd3MFtf4vp6JnBGjQxVwsd_88Or9KKhikFTfIZB2--FwfzBthe9YO5yaEjk_qbdiCw5lshITgYmA0N-DXyX8Rtqmhbm9KyjVfN7ivyh6AcVdaDLlfTpeZ9hmgTuiL7XL37C-5Jgtwo2jxuMH2GcN9ieH2Hxr19-0dJGFuyWN5quzTWOo9UiGpoWgEK0kHA2ZX069ABUfdLTWYkfAMN0MkXAUG7WRxVWat46OkZ11_BhPqNQ" },
  { name: "Ancestral Emerald", price: "$2,450", desc: "A legacy-inspired piece featuring an heirloom-cut emerald.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDm8gB3vUF_3gJHbM3yHVvJYR7HhpoHunihyYvlVClICJBKK6O86m4selHxe57Jy1UdAx1MjMd2ZM0w48s4NCgoRgvpRYPwgWj3aZGHeP4EcMCP0v0CgHwHOv790ohYrDXXEjCPODjDjwv23Qycpl76OtooQtqhuFYGVL4-iEMsz32U40tkEBelceLjksymKftG34myTwGmW3XHlGRPeE7Vq0RwpL5_023c2Y4IL47_shE6wEYLxC-44fJvJn7mM_x9MOzWIERsDq0" },
  { name: "Unity Interlock", price: "$1,100", desc: "Two souls joined as one. Interlocking 14k gold bands.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8eFiN6STv4hY3QWdGPbQ3nX-8nbm0ZNJbKBk7jXwyS3nCPKNgr4YRxVOeeKiUqQv9DkUisf_lc7FYLUyM5muf-yQR88YkPXBnQzg2peC3SUW1wTyll86eZ43KOf9cVqtuop9r9c7kvh7cynlpQmBMYjyVNSj0buM51-XwbL6An99bedMqKas35qWsfhlKW1kw7ngDfJk4Fc3M7fXLOfvCanB6PYE2zIgshkCEIjsSXKUy9P_aYDtR3y1Id2zkDkU-S2ToGlLbQMk" },
];

export default function ProductShowcase() {
  return (
    <div className="space-y-0">
      {/* Earring Section */}
      <section className="pt-12 md:pt-24 pb-4 md:pb-8 px-4 md:px-6 bg-[#fdfaf8] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="absolute top-20 -left-10 vertical-text text-[10px] tracking-[0.8em] text-secondary/40 font-bold uppercase hidden lg:block">
          Shine Collection 2026
        </div>

        {/* Floating Sparkles */}
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 text-secondary/20 hidden lg:block"
        >
          <Sparkles className="w-8 h-8" />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-10 text-secondary/20 hidden lg:block"
        >
          <Sparkles className="w-12 h-12" />
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-6 md:mb-10 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-primary tracking-tighter">
              Masterpieces <span className="italic text-secondary block md:inline md:ml-4">for the Ear</span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
            {/* Left Column: Editorial Image & Story */}
            <div className="w-full lg:w-[45%] relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-20"
              >
                <div className="aspect-[4/5] rounded-[2rem] md:rounded-[4rem] rounded-tr-none overflow-hidden shadow-2xl border border-secondary/10 group">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUzckAvW4l-Gv4Qod2bAla0lQew069IBz1Ym8ZT5oUY3t7SyIvofeY8x0v828OWA5_6cbh2I9foL90IY_jyZLFG9fCO6oNcUK2rVINyDTPZ1yC4WjY3eIQIl7eD5aGEUokX_3dYK8T8psMI3nKOJeSsYWJfkc9teJZQd8Yoyl5Pwq8QY6nskb4TAWK3iOW5fF9JOoJjPIi0Rk9kC7jJKfddWSsDM1gpsSZnM8t-uY605jqrVEBUmzw5-NQRDFcsJh6sWWSXJfkkPs"
                    alt="Statement Earrings"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                </div>
              </motion.div>

              {/* Overlapping Content Box */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative lg:absolute -mt-8 lg:mt-0 lg:-bottom-16 -right-0 lg:-right-16 bg-white p-6 md:p-12 rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl max-w-[320px] md:max-w-[360px] mx-auto lg:mx-0 z-30 border border-secondary/5 backdrop-blur-xl bg-white/95"
              >
                <div className="w-8 md:w-12 h-[1px] bg-secondary mb-4 md:mb-6"></div>
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-primary italic mb-3 md:mb-6 leading-tight">Sculpted for <br /> the Senses</h3>
                <p className="text-[10px] md:text-xs text-on-surface/60 font-sans leading-relaxed mb-5 md:mb-8 tracking-wide">
                  Our earrings are more than mere adornments; they are architectural studies in light and movement. Each piece is meticulously balanced to ensure comfort without compromising on sheer editorial drama.
                </p>
                <button className="text-[8px] md:text-[10px] font-sans uppercase tracking-[0.4em] text-secondary font-bold border-b border-secondary/20 pb-1.5 md:pb-2 hover:text-primary hover:border-primary transition-all">
                  Discover the Process
                </button>
              </motion.div>

              {/* Decorative Background Shape */}
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10 animate-pulse hidden lg:block"></div>
            </div>

            {/* Right Column: Product Grid */}
            <div className="w-full lg:w-[55%] pt-2 lg:pt-0">
              <div className="grid grid-cols-2 gap-x-3 gap-y-6 md:gap-x-6 md:gap-y-8">
                {earringProducts.map((p, i) => (
                  <motion.div
                    key={p.name}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.8 }}
                    className="group relative max-w-full mx-auto w-full"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white shadow-sm group-hover:shadow-[0_20px_50px_rgba(200,169,110,0.2)] transition-all duration-700 border border-secondary/5">
                      <img 
                        src={p.image} 
                        alt={p.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out opacity-90 group-hover:opacity-100" 
                        referrerPolicy="no-referrer" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      
                      {/* Inner Glow on Hover */}
                      <div className="absolute inset-0 border-[0.5px] border-secondary/0 group-hover:border-secondary/20 transition-all duration-700 rounded-2xl m-2"></div>
                      
                      {/* Floating Action */}
                      <motion.button 
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute bottom-3 right-3 md:top-4 md:right-4 bg-white/90 backdrop-blur-md text-primary w-8 h-8 md:w-10 md:h-10 flex border-none outline-none items-center justify-center rounded-full shadow-xl md:opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-secondary hover:text-white"
                      >
                        <ShoppingBag className="w-4 h-4 md:w-4 md:h-4 text-current flex-shrink-0" />
                      </motion.button>
                    </div>
                    
                    <div className="mt-3 md:mt-6 flex flex-col md:flex-row md:justify-between md:items-end gap-1">
                      <div>
                        <span className="text-[6px] md:text-[7px] font-sans uppercase tracking-[0.3em] text-secondary mb-1 block font-bold">0{i + 1}</span>
                        <h3 className="font-serif text-xs sm:text-sm md:text-xl text-primary tracking-tight group-hover:text-secondary transition-colors duration-500 leading-tight md:leading-normal">{p.name}</h3>
                      </div>
                      <p className="font-serif italic text-secondary text-[10px] md:text-base mt-0.5 md:mt-0">{p.price}</p>
                    </div>
                    <div className="mt-2 md:mt-4 h-[1px] w-0 group-hover:w-full bg-secondary/30 transition-all duration-700"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ring Section */}
      <section className="pt-4 md:pt-8 pb-4 md:pb-8 px-4 md:px-6 bg-[#fdfaf8] relative overflow-hidden">
        {/* Decorative Elements (Mirrored Grid) */}
        <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none select-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-unified" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-unified)" />
          </svg>
        </div>

        <div className="absolute bottom-20 -right-10 vertical-text text-[10px] tracking-[0.8em] text-secondary/40 font-bold uppercase hidden lg:block">
          The Circle of Eternity
        </div>

        {/* Floating Sparkles (Mirrored) */}
        <motion.div 
          animate={{ y: [0, 20, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-10 text-secondary/20 hidden lg:block"
        >
          <Sparkles className="w-12 h-12" />
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-6 md:mb-10 text-center md:text-right">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-primary tracking-tighter">
              <span className="italic text-secondary block md:inline md:mr-4">Rings for</span> Every Story
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
            {/* Left Column: Product Grid */}
            <div className="w-full lg:w-[55%] order-2 lg:order-1 pt-4 lg:pt-0">
              <div className="grid grid-cols-2 gap-x-3 gap-y-6 md:gap-x-6 md:gap-y-8">
                {ringProducts.map((p, i) => (
                  <motion.div
                    key={p.name}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.8 }}
                    className="group relative max-w-full mx-auto w-full"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white shadow-sm group-hover:shadow-[0_20px_50px_rgba(200,169,110,0.2)] transition-all duration-700 border border-secondary/5">
                      <img 
                        src={p.image} 
                        alt={p.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out opacity-90 group-hover:opacity-100" 
                        referrerPolicy="no-referrer" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      
                      {/* Inner Glow on Hover */}
                      <div className="absolute inset-0 border-[0.5px] border-secondary/0 group-hover:border-secondary/20 transition-all duration-700 rounded-2xl m-2"></div>
                      
                      {/* Floating Action */}
                      <motion.button 
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute bottom-3 right-3 md:top-4 md:right-4 bg-white/90 backdrop-blur-md text-primary w-8 h-8 md:w-10 md:h-10 flex border-none outline-none items-center justify-center rounded-full shadow-xl md:opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-secondary hover:text-white"
                      >
                        <ShoppingBag className="w-4 h-4 md:w-4 md:h-4 text-current flex-shrink-0" />
                      </motion.button>
                    </div>
                    
                    <div className="mt-3 md:mt-6 flex flex-col md:flex-row md:justify-between md:items-end gap-1">
                      <div>
                        <span className="text-[6px] md:text-[7px] font-sans uppercase tracking-[0.3em] text-secondary mb-1 block font-bold">0{i + 1}</span>
                        <h3 className="font-serif text-xs sm:text-sm md:text-xl text-primary tracking-tight group-hover:text-secondary transition-colors duration-500 leading-tight md:leading-normal">{p.name}</h3>
                      </div>
                      <p className="font-serif italic text-secondary text-[10px] md:text-base mt-0.5 md:mt-0">{p.price}</p>
                    </div>
                    <div className="mt-2 md:mt-4 h-[1px] w-0 group-hover:w-full bg-secondary/30 transition-all duration-700"></div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Editorial Image & Story */}
            <div className="w-full lg:w-[45%] order-1 lg:order-2 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-20"
              >
                <div className="aspect-[4/5] rounded-[2rem] md:rounded-[4rem] rounded-tl-none overflow-hidden shadow-2xl border border-secondary/10 group">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeQAx6bK5NKNme7O1dIhUPAS26hem3I9Ooc-3rmOtaaSPirXnvQm5jTV4zCOsgFKJyrYcDZ7I00bxM_gWVTqJ9Sq2aER2FEOnSRrVVVUhC_NgBxMH22EENm2WXrUTBr2tEUeQBUVt_UyWxiiGSD6ff2Jliv0yVjJWOnBrkD6cVQdUDHNB_u0J00UR10f9xX6M8JWP_A3xNmfQtojiBrVeqRzWsJ3FW2MJLhHiQqhlQM_3p03DtJYyzf4fFlEQS3GV-vtB0XCXFfIk"
                    alt="Rings Styling"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                </div>
              </motion.div>

              {/* Overlapping Content Box */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative lg:absolute -mt-8 lg:mt-0 lg:-bottom-16 -left-0 lg:-left-16 bg-white p-6 md:p-12 rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl max-w-[320px] md:max-w-[360px] mx-auto lg:mx-0 z-30 border border-secondary/5 backdrop-blur-xl bg-white/95"
              >
                <div className="w-8 md:w-12 h-[1px] bg-secondary mb-4 md:mb-6"></div>
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-primary italic mb-3 md:mb-6 leading-tight">The Circle <br /> of Eternity</h3>
                <p className="text-[10px] md:text-xs text-on-surface/60 font-sans leading-relaxed mb-5 md:mb-8 tracking-wide">
                  Every ring tells a story of connection and timelessness. Hand-sculpted in our house, these pieces are designed to be worn for a lifetime and passed down through generations.
                </p>
                <button className="text-[8px] md:text-[10px] font-sans uppercase tracking-[0.4em] text-secondary font-bold border-b border-secondary/20 pb-1.5 md:pb-2 hover:text-primary hover:border-primary transition-all">
                  View Size Guide
                </button>
              </motion.div>

              {/* Decorative Background Shape */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10 animate-pulse hidden lg:block"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
