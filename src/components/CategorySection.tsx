import { motion } from "motion/react";

const categories = [
  {
    name: "Rings",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8eFiN6STv4hY3QWdGPbQ3nX-8nbm0ZNJbKBk7jXwyS3nCPKNgr4YRxVOeeKiUqQv9DkUisf_lc7FYLUyM5muf-yQR88YkPXBnQzg2peC3SUW1wTyll86eZ43KOf9cVqtuop9r9c7kvh7cynlpQmBMYjyVNSj0buM51-XwbL6An99bedMqKas35qWsfhlKW1kw7ngDfJk4Fc3M7fXLOfvCanB6PYE2zIgshkCEIjsSXKUy9P_aYDtR3y1Id2zkDkU-S2ToGlLbQMk",
  },
  {
    name: "Earrings",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjMRYmEndz9iPm9J7lkgdDJINRESkkSPCKUDLlQReSPI1m5luOZMnf08FNMlh-O6Nq9wiLIxob1E3sJSFDE72BlVoSk7jjQvLbA-7hfEpgj0lJXUxhL51wcOe_nwNYVf9BlQ-t1ynQSACToS7dyCsYtRxDGuuN2jo8bR3KPsVM3nqWwvetlMU8fAke5qreCep8yJiOqrDCYm_Tf1JtJ2iINoyQ2vkXjS4LuSTVZk0WFlpCB7y0VDwrF0FHVA71n0Cs_7cIci3tqYw",
  },
  {
    name: "Necklaces",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdm59U0ftKZpzxEULPCh0ZmuAjcVAKvYLtY9U0uWWGBzr7at776L8AOhMaCIrY8o7Ic1grTQbJ9miEaj-4m0j_Mhdr5U1oGVs8e79LJprrSkTcnV9v-DvuSOBsN8GJMV0g3-02Y_yPFWAkSDTrb1MPlxm_mJv3tC-H-rf_VuhAvXkbvK5MzVRSNugYKSC-jefAvZQfbpaIePkQvLeDxbhBjWu5kA4n8D--uJdiqtGrbVah39fkW46YK-_C-_FVdurVdoPB1-B2mPU",
  },
  {
    name: "Bangles",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7ulKeywPAMLVVQp9tRYgo_rhedzSc3jROWw4U0Ko-_ohR5MSYJML00XepzfjFxPVukI0cYGXE2A4MSrCr9pwFSnPxWDfhlUB8Frk_qiYjtlIRL0WRr2bFyF-DbheRe8sBm-U6l6ztydaFBhlpx0Vi7-onka_9BnDmaMeB7K6Nrkas-Y168nG65WPSKw4UZzQpb0ezHimVxzzOXwGI1lu6ludD0OARc0eOFX7b99ZbAlonumrQGta_i0mgax5Rv6sXDlF4yjkvhTs",
  },
  {
    name: "Bridal Sets",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7NwdScD8TmVX-QSKKbl5vaicpqVxBuRuT0JicMVvKo6g417-3-X0c6bfJcyZZPOCfwLIuuKjp_T5wndd4j6FNa9dGAPW-2K8TuuTXnCO_VGNzXqM6OFR4PhtgkItwhS1Vb2GdYb5TOrq1yVzzTwTymEtJDwKoLA3TPDGgqq8iORAXuvi4ovfg8gaWs4rExLUBBiqTPxPHdhDwIgtlnhDtd_dlfxN8nZ9gEUVVT5ngw-B7D07rGCKQGLV-gxZNPr2eqtI6krMDqBc",
  },
  {
    name: "Bespoke",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiY242QnN9XzQPwm9KfKKmnms73mNCIdfnPMH4F315Z-lnvQufZQgITNu_UzAXjk45q7Vt807Vcw6orWmFF3RRUBuLGNvh5raft4nNSLc-jkOe-fNTWd71AZeWjsfS2zW9BRsnK_41JSmNgmAvp2ugjfyJ_ZACN2qlHSGCX7HC64TRaCJBTzS9x5p8yJ42cJgF5G8XkGagJQJzmP1KXjM1ZwfJFimOre8bcL3uI4rnfVHWd5Pfk2jFfhzrPlQfcjX2dbYJLhAhwIU",
  },
];

export default function CategorySection() {
  return (
    <section className="py-6 md:py-12 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-[0.03] select-none">
        <span className="text-[30rem] font-serif italic text-primary absolute top-0 left-0 -translate-x-1/2 -translate-y-1/4">E</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-4 md:mb-8 relative z-10"
      >
        <span className="font-sans uppercase text-[8px] md:text-[10px] tracking-[0.4em] text-secondary mb-2 md:mb-4 block">Curated Collections</span>
        <h2 className="text-3xl md:text-5xl font-serif text-primary italic">Shop by Category</h2>
        <div className="mt-3 md:mt-6 flex justify-center items-center gap-4">
          <div className="h-[1px] w-8 md:w-12 bg-secondary/30"></div>
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full border border-secondary/50"></div>
          <div className="h-[1px] w-8 md:w-12 bg-secondary/30"></div>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-4 md:gap-6 relative z-10">
        {categories.map((cat, index) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            className="group cursor-pointer flex flex-col items-center"
          >
            <div className="relative w-full max-w-[160px] aspect-square mb-2 md:mb-8">
              {/* Outer Decorative Ring */}
              <div className="absolute inset-[-6px] rounded-full border border-secondary/10 group-hover:border-secondary/40 transition-colors duration-700"></div>
              
              {/* Main Image Container */}
              <div className="w-full h-full rounded-full bg-surface-container-low p-2 border border-secondary/5 overflow-hidden relative shadow-sm group-hover:shadow-xl group-hover:border-secondary/20 transition-all duration-700">
                <motion.img
                  src={cat.image}
                  alt={cat.name}
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full object-cover rounded-full mix-blend-multiply opacity-90 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>

              {/* Index Number */}
              <span className="absolute -top-1 -right-1 w-7 h-7 bg-white rounded-full flex items-center justify-center text-[8px] font-sans font-bold text-secondary shadow-sm border border-secondary/10">
                0{index + 1}
              </span>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-lg text-on-surface group-hover:text-primary transition-colors duration-300">
                {cat.name}
              </h3>
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                className="h-[1px] bg-secondary/40 mt-2 mx-auto"
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
