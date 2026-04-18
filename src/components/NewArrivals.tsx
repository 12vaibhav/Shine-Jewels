import { motion } from "motion/react";
import { Plus, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    name: "Luna Crescent Ring",
    price: "$850",
    material: "18K Rose Gold",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlPEqU2EWKv2xmdkuVuBxMutq9IYnjVUOnB38BzIygIhoPRlmsGzQpcIi1kgAvnX2NH1Y11KnqvKX2qlogsRvqnJ4P72nRs3wi4MjbTcHhlYc0FrX0xDuUpy8eOISHUguKatffGMiQKM6He-WcMwOB9a7k1qsy0LvZzQd3M5ushn2EXPs8TsL8hI0HR6Wypd3C2q4ut_QBLcYTxSBs8Fr7nDy-q5f2RkONP9jC2q9ntUrpfP_6eZobn703oNfJ9tCTcwmNHOIBfOM",
  },
  {
    name: "Aether Drop Earrings",
    price: "$420",
    material: "Sterling Silver",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDK18fprg7ajvGeuCu89c9QoVXCbdkyMQkW99XxvuwiUR5_sDFXkFZizp0doMNozl1H35SVx9s9iJkABwoSN9yap1a4y_8p3xZqJoAU8Cg3pq0TZn2P2VW-goSVT3HDXBGSlYQ8-zIpaTcLtthVFYBd9OItw5sWzslb3Fsg2M21NSbCuqss8fdQ8mncnL7FymXWdXVb7PC28YNBYMHtQuWhTa_x7bsBPEXyfvyEYSrpvQIoU9RXUYlBpvS-5Pkoe284RrRLINU2OLM",
  },
  {
    name: "Solstice Pendant",
    price: "$1,200",
    material: "Yellow Gold",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRY-bWHpLIm8-0rMvqnE4Wf7HpQRsmbmdh-M_Q8edRldm_2qCNTP6D92SJe8hVu8X4fP5cP1pckUXPaKmIClW3LqwxFz-Vwcyh4K1w7q6cJH_NIlTjNYE_5Yu26-6AAfh3McV0SQ81GrrZymazc5zznu60IeBDyyB2QFI7sQwr-WUUw028eu5WEMvj6LPYo3F1u739SHrHq5Y3fFfkrk9x91_-LnJq-ieXekIbp4l3UZAATw60GlEaWztAFIP1OY-KimMnM8mjiic",
  },
  {
    name: "Shine Collections Cuff",
    price: "$2,450",
    material: "Platinum",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiY242QnN9XzQPwm9KfKKmnms73mNCIdfnPMH4F315Z-lnvQufZQgITNu_UzAXjk45q7Vt807Vcw6orWmFF3RRUBuLGNvh5raft4nNSLc-jkOe-fNTWd71AZeWjsfS2zW9BRsnK_41JSmNgmAvp2ugjfyJ_ZACN2qlHSGCX7HC64TRaCJBTzS9x5p8yJ42cJgF5G8XkGagJQJzmP1KXjM1ZwfJFimOre8bcL3uI4rnfVHWd5Pfk2jFfhzrPlQfcjX2dbYJLhAhwIU",
  },
];

export default function NewArrivals() {
  return (
    <section className="py-8 md:py-16 bg-surface-container-low px-4 md:px-6 relative overflow-hidden">
      {/* Decorative Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-6 md:mb-12 gap-4 md:gap-6">
          <div className="text-center md:text-left">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="font-sans uppercase text-[7px] md:text-[10px] tracking-[0.4em] text-secondary mb-2 md:mb-3 block"
            >
              The Spring Collection
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-serif text-primary italic">New Arrivals</h2>
          </div>
          <motion.a 
            whileHover={{ x: 5 }}
            href="#" 
            className="text-primary font-sans text-[7px] md:text-[10px] tracking-[0.3em] uppercase border-b border-secondary/30 pb-1.5 hover:border-secondary transition-all flex items-center gap-2 md:gap-3"
          >
            Explore All
            <div className="w-6 md:w-8 h-[1px] bg-secondary/50"></div>
          </motion.a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group"
            >
              <div className="relative bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700 md:group-hover:-translate-y-3 border border-secondary/5">
                {/* Image Container */}
                <Link to="/product/floral-diamond-ring" className="relative aspect-[4/5] overflow-hidden bg-surface-container-low/30 block">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Hover Actions Overlay (Hidden on Mobile) */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:flex items-center justify-center gap-3">
                    <button className="w-11 h-11 rounded-full bg-white text-primary flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
                      <Plus className="w-5 h-5" />
                    </button>
                    <button className="w-11 h-11 rounded-full bg-white text-primary flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Mobile Quick Add (Visible on Mobile) */}
                  <div className="absolute bottom-2 right-2 md:hidden">
                    <button className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm text-primary flex items-center justify-center shadow-md border border-secondary/20 active:scale-90 transition-transform">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <span className="absolute top-3 left-3 md:top-5 md:left-5 bg-white/90 backdrop-blur-sm text-primary px-3 md:px-4 py-1.5 text-[7px] md:text-[9px] tracking-[0.2em] uppercase font-bold border border-secondary/20 shadow-sm z-10">
                    New In
                  </span>
                </Link>

                {/* Content Area */}
                <div className="p-3 md:p-4 text-center">
                  <span className="text-[7px] md:text-[8px] font-sans uppercase tracking-[0.3em] text-secondary/70 mb-1.5 md:mb-2 block">
                    {product.material}
                  </span>
                  <Link to="/product/floral-diamond-ring">
                    <h3 className="font-serif text-sm md:text-base text-on-surface mb-1 md:mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-primary font-sans text-[10px] md:text-xs tracking-widest font-medium">
                      {product.price}
                    </span>
                    <div className="hidden md:block w-8 h-[1px] bg-secondary/20 group-hover:w-16 transition-all duration-500"></div>
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
