import { motion } from "motion/react";
import { Instagram, Heart, ShoppingBag } from "lucide-react";

const feed = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCHmXcbbhlgE9JpSbCTyCyO6hng76PpdtLHTUEyP7KevWD5WuLYntJHvQ0FxnKfRkJP6IyDP59rFJpcGYEfupxl9gbH0RTLDPQiw_CuhbJrRO33JJ8qCxYJYFOLANGax817WgkkfZztwS_1dfaLyxvHFd7mwLa8MnoNauFYE8ImNaEwESamJXkoQQbvguH09xzqJKbDSaPJ7Z24BwadMnLbEFOG_fwZr0caQPeSGaSdLvsvmINQKdlGHn-v4ciYvpTMFG6ZsqsVz44",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCiwOeNn17UKh4dV4KW9msckmIi1Dl3Sq5qsvCbLvK7aavgAjNvXXxEBiIMuSCHQYg6BMJNFZ-er_mZUSegu8SmhVZ_G74rnGYZs5a9oGPwePnVzGKwuWsWX9TFhzPnwv6T7aVfAgPXdjiWCqfxfyhJEmQQxPY9kzge1VwqIwdqEMNfkYa-gtA3-gn5Tq9IvlS7px7qjkzN7MDK1lo3eu92ellLdNWCNUF7dsagM7e0Ltv4DJskq9X2hjAVs2hsGIz96WPV6lZR280",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAAMBZQYpP6RuSFRdj5jK76tTRhe4NMW6soxwTI7CAWHfSRvd_T7LKG4oGOOKWS6Zs-f4K0V1iJFEWKGxmP0rMBpWODnHge4BOriglMsTCnzSSMZ2hlJSC77p0LMUD59iDNwyGKsTjYhi_m9nVOQirNVSbqBiJ5K-ncw-XZMjNB-fmsYxLqLqJ7zauVTK1UMP19qD26vTEZalxIXnnRyH-3rsI1-mp5jJKlrgtsuqr2qEprcS1xi-rTe8RbEwESWslnbEurDdAWY5s",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCDqpBH_9KGpQKqNxHUzpjG3utTMZQbVEcf1i_0K4fvjOmUJxsqAhHQ149b2_CEWPcYKplJx2wKe3by1kdS6rguNaUXo_KVF8Ia7ArvzAWh7oqiaasjSd-caSI8FXGGWlOQrtYOyBkhRPIkpBjU-efjgBbkaqd2DukVMpgLKIR0Z6yHAeaHJyyeWDzBalmYwAkqEGKq4y1hFGhwEX6b3lGW1mDSv94WXtw9Ib4Z1K0LqASvWTrTGjioXUmQhCPXEOlQLAE8XqpOV70",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCfsybe3nnkc4lgZO8RfRF30z3IhF0cdM_Sc46nbn-vEPBl5GN_hhU3O7LWpS6oBSa80SBCLu460nQ0DK9Mv4_h66ChR9u4VsimBxaAN6xE43yJq5M7oAJVHc9FXrRA3S4pkWFUyhqMXb1nb37fdLAv10gF5-OFX3DJZZbGCipIvGmRDMh-5iPG7HFnAyYMeUYf_dDB6k2wlFicW0RvIgTO-RdrKjMxDIh47teotV0vADoW8w6ibf1V3ei8hEHKC6JufLbRNRxoSlI",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCpfcoI0d-wl98v12kJ3CfEyrEvj0BhmJ8tTCjhDVXAUiY0dkmsJ7zLWBOBxLDniY9lwPm_uwTCKP2VaCzsLtvuooDfA5weudKjDwZBMvVoVyirx7e29kc3pg4oM9KtcqRm18NA-lz_twLICjjCcnP-WjMxEmmG5nFPyjTt3b6wdKGMNn3uw4jl5a7Vq6hqqYbiKfr024VvWXhmRDVA3zwjPA6l1IVDeIQCBmYeFQ_qw5KWXsgF8-ELEPKXCwZPH7FrEzwiRF8Uugc",
];

export default function InstagramFeed() {
  return (
    <section className="py-8 md:py-24 px-4 md:px-6 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/Section Background/Category.webp" 
          alt="Instagram Feed Background" 
          className="w-full h-full object-cover opacity-85 saturate-[0.8] contrast-[1.05] brightness-[0.95]"
        />
        {/* Unified Luxury Overlay */}
        <div className="absolute inset-0 bg-secondary/5 mix-blend-overlay"></div>
      </div>

      <div className="absolute top-1/2 -left-12 -translate-y-1/2 vertical-text text-[10px] tracking-[1em] text-secondary/30 font-bold uppercase hidden lg:block">
        Social Curations
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-6 md:mb-12 gap-6 md:gap-8">
          <div className="max-w-xl text-center md:text-left mx-auto md:mx-0">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[8px] md:text-[10px] font-sans uppercase tracking-[0.6em] text-secondary mb-3 md:mb-4 block font-bold"
            >
              On Social
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-6xl font-serif text-primary tracking-tighter leading-[0.9] font-semibold"
            >
              Follow the <span className="italic text-secondary">Brand Journey</span>
            </motion.h2>
          </div>
          
          <motion.a 
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-4 group mx-auto md:mx-0"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-secondary/20 flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary transition-all duration-500">
              <Instagram className="w-4 h-4 md:w-5 md:h-5 text-secondary group-hover:text-white transition-colors" />
            </div>
            <div className="text-left">
              <span className="block text-[8px] font-sans uppercase tracking-widest text-secondary font-bold">Instagram</span>
              <span className="block font-serif text-base md:text-lg text-primary group-hover:text-secondary transition-colors">@shine_jewels</span>
            </div>
          </motion.a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 md:gap-6">
          {feed.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="aspect-square relative group overflow-hidden cursor-pointer rounded-2xl bg-surface-container shadow-sm hover:shadow-2xl transition-all duration-700"
            >
              <img
                src={img}
                alt={`Instagram feed ${i}`}
                className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              
              {/* Elegant Overlay */}
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-700 backdrop-blur-[2px]">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-primary shadow-lg hover:bg-secondary hover:text-white transition-all">
                      <Heart className="w-4 h-4" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-primary shadow-lg hover:bg-secondary hover:text-white transition-all">
                      <ShoppingBag className="w-4 h-4" />
                    </div>
                  </div>
                  <span className="text-[8px] font-sans uppercase tracking-[0.3em] text-white font-bold drop-shadow-md">Shop the Look</span>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-4 left-4 w-6 h-[1px] bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-4 left-4 h-6 w-[1px] bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 md:mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 md:px-10 py-3 md:py-4 bg-primary text-white text-[9px] md:text-[10px] font-sans uppercase tracking-[0.4em] font-bold rounded-full shadow-xl hover:bg-secondary transition-all"
          >
            Load More Stories
          </motion.button>
        </div>
      </div>
    </section>
  );
}
