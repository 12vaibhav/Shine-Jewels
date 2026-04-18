import { motion } from "motion/react";
import { Play } from "lucide-react";

const stories = [
  {
    title: "Horizon Band",
    price: "$580",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeQAx6bK5NKNme7O1dIhUPAS26hem3I9Ooc-3rmOtaaSPirXnvQm5jTV4zCOsgFKJyrYcDZ7I00bxM_gWVTqJ9Sq2aER2FEOnSRrVVVUhC_NgBxMH22EENm2WXrUTBr2tEUeQBUVt_UyWxiiGSD6ff2Jliv0yVjJWOnBrkD6cVQdUDHNB_u0J00UR10f9xX6M8JWP_A3xNmfQtojiBrVeqRzWsJ3FW2MJLhHiQqhlQM_3p03DtJYyzf4fFlEQS3GV-vtB0XCXFfIk",
    thumb: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8eFiN6STv4hY3QWdGPbQ3nX-8nbm0ZNJbKBk7jXwyS3nCPKNgr4YRxVOeeKiUqQv9DkUisf_lc7FYLUyM5muf-yQR88YkPXBnQzg2peC3SUW1wTyll86eZ43KOf9cVqtuop9r9c7kvh7cynlpQmBMYjyVNSj0buM51-XwbL6An99bedMqKas35qWsfhlKW1kw7ngDfJk4Fc3M7fXLOfvCanB6PYE2zIgshkCEIjsSXKUy9P_aYDtR3y1Id2zkDkU-S2ToGlLbQMk",
  },
  {
    title: "Pearl Drops",
    price: "$340",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUzckAvW4l-Gv4Qod2bAla0lQew069IBz1Ym8ZT5oUY3t7SyIvofeY8x0v828OWA5_6cbh2I9foL90IY_jyZLFG9fCO6oNcUK2rVINyDTPZ1yC4WjY3eIQIl7eD5aGEUokX_3dYK8T8psMI3nKOJeSsYWJfkc9teJZQd8Yoyl5Pwq8QY6nskb4TAWK3iOW5fF9JOoJjPIi0Rk9kC7jJKfddWSsDM1gpsSZnM8t-uY605jqrVEBUmzw5-NQRDFcsJh6sWWSXJfkkPs",
    thumb: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjMRYmEndz9iPm9J7lkgdDJINRESkkSPCKUDLlQReSPI1m5luOZMnf08FNMlh-O6Nq9wiLIxob1E3sJSFDE72BlVoSk7jjQvLbA-7hfEpgj0lJXUxhL51wcOe_nwNYVf9BlQ-t1ynQSACToS7dyCsYtRxDGuuN2jo8bR3KPsVM3nqWwvetlMU8fAke5qreCep8yJiOqrDCYm_Tf1JtJ2iINoyQ2vkXjS4LuSTVZk0WFlpCB7y0VDwrF0FHVA71n0Cs_7cIci3tqYw",
  },
  {
    title: "Solstice Pendant",
    price: "$1,200",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAJuSUxNMymt-5_qjH_B7o93xgljroNkjweTi6SWPiZyheE-wZ5bFChIdthto1TwGILeZHlRlpa9UoA4oxqoCIGsOkcxvtNf4xi4r2A4xcCNCqblWvLIze8ulQ2rg-G8Nx9hHcQlKwpUx-scrT9cIU9jbHe4008aZeFMTb-6AypqTWsBqPurzYg_CPALqdhDTzCPlCkpIo36phhW7GggN7wCtRUdRTVHJw47YevOOYQGt9UH7v7ltEg9uhXa3rJE300ZfNx9Qeah4",
    thumb: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdm59U0ftKZpzxEULPCh0ZmuAjcVAKvYLtY9U0uWWGBzr7at776L8AOhMaCIrY8o7Ic1grTQbJ9miEaj-4m0j_Mhdr5U1oGVs8e79LJprrSkTcnV9v-DvuSOBsN8GJMV0g3-02Y_yPFWAkSDTrb1MPlxm_mJv3tC-H-rf_VuhAvXkbvK5MzVRSNugYKSC-jefAvZQfbpaIePkQvLeDxbhBjWu5kA4n8D--uJdiqtGrbVah39fkW46YK-_C-_FVdurVdoPB1-B2mPU",
  },
  {
    title: "Shine Bridal Set",
    price: "$3,500",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAx_zqXZnFzal3UkcIpH-5uHl4DXekYa1FuOw5XwajCb8sKKvLIkTCgArOSWj3CQoTijWm8vVT-p_Fw30hXZMC0XauB7lzscPOOn3MiJAXckdS9ghI4ZiFZLwbcx7glaVkwedMCHp733bHkQCSCY3OixB1HdFiGjQ8fI3w6zFddzGc5Q4CNlSjNCaHzPeJRI6g2irqPwXXn2A2ZxuZb5xigqOmnqDUa_pJkFGtvp74EIT5yfpeeXZQFqmfHjkVPBcNPlJPjQWxAXoM",
    thumb: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7NwdScD8TmVX-QSKKbl5vaicpqVxBuRuT0JicMVvKo6g417-3-X0c6bfJcyZZPOCfwLIuuKjp_T5wndd4j6FNa9dGAPW-2K8TuuTXnCO_VGNzXqM6OFR4PhtgkItwhS1Vb2GdYb5TOrq1yVzzTwTymEtJDwKoLA3TPDGgqq8iORAXuvi4ovfg8gaWs4rExLUBBiqTPxPHdhDwIgtlnhDtd_dlfxN8nZ9gEUVVT5ngw-B7D07rGCKQGLV-gxZNPr2eqtI6krMDqBc",
  },
];

export default function StyleItYourWay() {
  return (
    <section className="py-8 md:py-16 bg-[#ffe4ef] px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-5xl font-serif italic text-primary mb-6 md:mb-8 text-center"
        >
          Style It Your Way
        </motion.h2>

        <div className="flex gap-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 overflow-x-auto md:overflow-x-visible scrollbar-hide snap-x -mx-6 px-6 md:mx-0 md:px-0 scroll-px-6">
          {stories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group min-w-[280px] md:min-w-0 aspect-[9/16] rounded-2xl overflow-hidden ambient-glow-rose bg-surface-container shadow-xl cursor-pointer snap-start"
            >
              <img
                src={story.image}
                alt={story.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-500">
                  <Play className="w-8 h-8 text-white fill-white" />
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-white/20 backdrop-blur-xl p-4 rounded-xl border border-white/20 group-hover:bg-white/30 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-lg overflow-hidden bg-white/50 flex-shrink-0">
                    <img
                      src={story.thumb}
                      alt="thumbnail"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-white uppercase tracking-widest font-bold truncate">
                      {story.title}
                    </p>
                    <p className="text-sm text-white font-serif italic">{story.price}</p>
                    <a href="#" className="inline-block mt-2 text-[9px] text-secondary uppercase font-bold tracking-widest border-b border-secondary">
                      Shop Look
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
