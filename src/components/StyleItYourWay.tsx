import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

const stories = [
  {
    title: "HORIZON BAND",
    price: "₹580",
    image: "/Product Images/Style It Your Way/Floral Earrings with Green Jhumkas.webp",
    video: "/Product Images/Style It Your Way/Vid-Floral Earrings with Green Jhumkas.mp4",
    thumb: "/Product Images/Style It Your Way/Floral Earrings with Green Jhumkas.webp",
  },
  {
    title: "PEARL DROPS",
    price: "₹340",
    image: "/Product Images/Style It Your Way/Jineshvi Maroon Choker Set.webp",
    video: "/Product Images/Style It Your Way/Vid-Jineshvi Maroon Choker Set.mp4",
    thumb: "/Product Images/Style It Your Way/Jineshvi Maroon Choker Set.webp",
  },
  {
    title: "SOLSTICE PENDANT",
    price: "₹1,200",
    image: "/Product Images/Style It Your Way/Multicolor Pearl Earrings.webp",
    video: "/Product Images/Style It Your Way/Vid-Multicolor Pearl Earrings.mp4",
    thumb: "/Product Images/Style It Your Way/Multicolor Pearl Earrings.webp",
  },
  {
    title: "SHINE BRIDAL SET",
    price: "₹3,500",
    image: "/Product Images/Style It Your Way/South Indian Green Necklace Set.webp",
    video: "/Product Images/Style It Your Way/Vid-South Indian Green Necklace Set.mp4",
    thumb: "/Product Images/Style It Your Way/South Indian Green Necklace Set.webp",
  },
  {
    title: "VERSATILE HAATHPANJA",
    price: "₹1,850",
    image: "/Product Images/Style It Your Way/Versatile Green HaathPanja.webp",
    video: "/Product Images/Style It Your Way/Vid-Versatile Green HaathPanja.mp4",
    thumb: "/Product Images/Style It Your Way/Versatile Green HaathPanja.webp",
  },
];

function StoryCard({ story, index }: { story: any; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true); // autoPlay is true by default

  const togglePlay = (e: React.MouseEvent) => {
    // Prevent toggling if they click the "Shop Look" link
    if ((e.target as HTMLElement).closest('a')) return;

    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      onClick={togglePlay}
      className="relative group min-w-[calc(50%-12px)] w-[calc(50%-12px)] md:min-w-[0] md:w-[calc(25%-18px)] aspect-[9/16] rounded-[24px] overflow-hidden bg-black cursor-pointer snap-start shrink-0 border-[4px] border-[#2a2421] shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
    >
      {/* Inner Gold Rim Simulation */}
      <div className="absolute inset-0 rounded-[20px] border border-[#c8a96e]/30 pointer-events-none z-20"></div>

      {/* Video / Image */}
      <video
        ref={videoRef}
        src={story.video}
        poster={story.image}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
      />
      
      {/* Bottom Dark Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-0"></div>

      {/* Central Play Button (Fades out when playing) */}
      <div 
        className={`absolute inset-0 flex items-center justify-center pointer-events-none z-10 transition-opacity duration-300 ${
          isPlaying ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
        }`}
      >
        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-lg transition-transform duration-500">
          <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
        </div>
      </div>

      {/* Bottom Overlay Info Card */}
      <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-[#1a1512]/80 backdrop-blur-md p-2.5 md:p-3.5 rounded-xl border border-white/10 group-hover:bg-[#1a1512]/90 transition-all duration-300 z-20">
        <div className="flex items-center gap-3 md:gap-4">
          {/* Thumbnail - Hidden on mobile */}
          <div className="hidden md:block w-[45px] h-[45px] rounded-lg overflow-hidden bg-black shrink-0 shadow-inner">
            <img
              src={story.thumb}
              alt="thumbnail"
              className="w-full h-full object-cover opacity-90"
            />
          </div>
          
          {/* Text Details */}
          <div className="flex-1 min-w-0 flex flex-col justify-center text-center md:text-left">
            <p className="text-[9px] md:text-[10px] text-white/95 uppercase tracking-widest font-semibold truncate mb-0.5">
              {story.title}
            </p>
            {/* Price - Hidden on mobile */}
            <p className="hidden md:flex text-[16px] text-white/80 font-serif items-center">
              {story.price}
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 ml-2 fill-current text-white/60">
                <path d="M12 2L22 12L12 22L2 12L12 2Z"/>
              </svg>
            </p>
            <div>
              <a href="#" className="inline-block mt-1.5 text-[8px] text-[#c8a96e] uppercase font-bold tracking-[0.2em] border-b border-[#c8a96e]/40 pb-[2px] transition-colors group-hover:border-[#c8a96e]">
                Shop Look
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function StyleItYourWay() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="pt-[13px] pb-0 md:pt-[61px] md:pb-[26px] px-4 md:px-8 overflow-hidden relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/Section Background/Style it your way.webp" 
          alt="Style It Your Way Background" 
          className="w-full h-full object-cover opacity-85 saturate-[0.8] contrast-[1.05] brightness-[0.95]"
        />
        {/* Unified Luxury Overlay */}
        <div className="absolute inset-0 bg-secondary/5 mix-blend-overlay"></div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-12 md:mb-16 flex justify-center w-full">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif italic text-[#4a1525] drop-shadow-md text-center font-semibold"
          >
            Style It Your Way
          </motion.h2>
        </div>

        {/* Carousel Section */}
        <div className="relative group/scroll md:px-0">
          {/* Chevron Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-all shadow-xl opacity-0 group-hover/scroll:opacity-100 hidden md:flex"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-all shadow-xl opacity-0 group-hover/scroll:opacity-100 hidden md:flex"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto overflow-y-hidden scrollbar-hide snap-x scroll-px-4 scroll-smooth pb-12 pt-4 -mx-4 px-4 md:mx-0 md:px-0"
          >
            {stories.map((story, index) => (
              <StoryCard key={story.title} story={story} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


