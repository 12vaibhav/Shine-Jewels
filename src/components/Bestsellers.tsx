import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Bestsellers() {
  const bestsellers = [
    {
      name: "Royal Grace Choker",
      price: "$2,800",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7E2se-7W2yeoE__-Qgzp1MGHg0qZXZGn2w-qyO46EYYwHebWs5Q0bu-a6esViT548cp-nQbazh1-qXwYzQ6QBzKQCtuMVvrjGDNcSfL9GW3rFqhZoU5s2N7WnNCZHDrh8ciPpSHFNfjKEiN5fKmOXMmAASToCtTPuTMoLFU7cJtZDOrOgRBup7P3U32ux8nH0rljnVwmBEJkD3X_O6xGCzl_QojZ3hnJPqZYlOPJqjMqqEOxdnZgeuBD3Fnuu3EduFjwOkuQZnyA",
    },
    {
      name: "Vintage Heirloom Ring",
      price: "$1,450",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDm8gB3vUF_3gJHbM3yHVvJYR7HhpoHunihyYvlVClICJBKK6O86m4selHxe57Jy1UdAx1MjMd2ZM0w48s4NCgoRgvpRYPwgWj3aZGHeP4EcMCP0v0CgHwHOv790ohYrDXXEjCPODjDjwv23Qycpl76OtooQtqhuFYGVL4-iEMsz32U40tkEBelceLjksymKftG34myTwGmW3XHlGRPeE7Vq0RwpL5_023c2Y4IL47_shE6wEYLxC-44fJvJn7mM_x9MOzWIERsDq0",
    },
    {
      name: "Marquise Emerald Drops",
      price: "$3,200",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3-70i0KkwIE9BHvfEs4EGrGIKtJNSLGaJZ1IjQfOX4SxVW3N6ixvTq9au_GlPatb9m-xTlydb_c429beTFAYpkIkrrHykQ2Cfmqvy7d1eASAw8CE5r4Poancr7Kby_CzNbFgeLvB3O24jnjX5BUnJLYsRQq75HvtDn2gH5qZu6WntZ3fqnMke12-rYjjy9MHx1be07lz3W8pziyOFiKxgISjckjgiB6J6fTaLibKi2nGNUW8nuCeS_TkIqgniYst2TJAOKM6SctM",
    },
    {
      name: "Shine Diamond Cuff",
      price: "$4,500",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiY242QnN9XzQPwm9KfKKmnms73mNCIdfnPMH4F315Z-lnvQufZQgITNu_UzAXjk45q7Vt807Vcw6orWmFF3RRUBuLGNvh5raft4nNSLc-jkOe-fNTWd71AZeWjsfS2zW9BRsnK_41JSmNgmAvp2ugjfyJ_ZACN2qlHSGCX7HC64TRaCJBTzS9x5p8yJ42cJgF5G8XkGagJQJzmP1KXjM1ZwfJFimOre8bcL3uI4rnfVHWd5Pfk2jFfhzrPlQfcjX2dbYJLhAhwIU",
    },
  ];

  return (
    <section className="py-8 md:py-24 bg-[#1a0f0f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-6 md:mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-sans uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-3 md:mb-4 block font-bold"
          >
            Collection Favorites
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-serif italic text-white mb-4"
          >
            Our Bestsellers
          </motion.h2>
          <div className="w-8 md:w-12 h-px bg-secondary/50 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-12">
          {bestsellers.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl md:rounded-2xl mb-3 md:mb-6 bg-stone-900 border border-white/5 shadow-2xl">
                <Link to="/product/floral-diamond-ring" className="absolute inset-0 z-20"></Link>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-all duration-700"></div>
                
                {/* Visual Accent */}
                <div className="hidden md:block absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-30">
                  <Link 
                    to="/product/floral-diamond-ring"
                    className="w-full h-12 flex items-center justify-center bg-white text-black text-[10px] uppercase tracking-[0.3em] font-bold rounded-full hover:bg-secondary hover:text-white transition-colors"
                  >
                    Explore Piece
                  </Link>
                </div>
              </div>

              <div className="text-center px-1">
                <Link to="/product/floral-diamond-ring" className="relative z-30">
                  <h3 className="font-serif italic text-sm sm:text-lg md:text-2xl text-white mb-1 md:mb-2 group-hover:text-secondary transition-colors">
                    {item.name}
                  </h3>
                </Link>
                <p className="text-secondary font-sans text-[8px] md:text-xs tracking-[0.2em] font-medium opacity-80 uppercase">
                  {item.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
}
