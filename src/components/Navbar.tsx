import { Search, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  // Navigation theme logic:
  // - On Homepage: Starts transparent/white, becomes dark glass on scroll.
  // - On Internal Pages: Always starts and stays dark glass (footer match).
  
  const shouldBeGlass = isScrolled || !isHomePage || isMenuOpen;

  const navStyles = isScrolled 
    ? "bg-[#0f0a0a]/90 backdrop-blur-xl border-b border-white/5 py-[7px] md:py-[11px]" 
    : `${shouldBeGlass ? "bg-[#0f0a0a]/90 backdrop-blur-xl border-b border-white/5" : "bg-transparent"} py-[11px] md:py-[15px]`;

  const textColor = "text-white";

  const logoColor = shouldBeGlass 
    ? "text-secondary" 
    : "text-white";

  const searchBg = shouldBeGlass 
    ? "bg-white/5 border-white/10" 
    : "bg-white/10 border-white/10";

  const navLinks = [
    { name: "Collections", href: "#" },
    { name: "Bespoke", href: "#" },
    { name: "Heritage", href: "#" },
    { name: "Journal", href: "#" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`w-full transition-[background-color,padding,border-color,backdrop-filter] duration-300 ease-in-out transform-gpu relative z-[210] ${navStyles}`}
      >
        <div className="flex justify-between items-center w-full px-4 md:px-8 max-w-7xl mx-auto">
          {/* Left: Logo & Links */}
          <div className="flex items-center gap-2 md:gap-12">
            <Link to="/" className="relative z-[110] group flex items-center gap-2 md:gap-4">
              <div className="w-[39px] h-[39px] md:w-[55px] md:h-[55px] rounded-full bg-[#0f0a0a]/80 backdrop-blur-xl border border-white/10 flex items-center justify-center p-[3px] md:p-[5px] shadow-[0_10px_30px_rgba(0,0,0,0.4)] group-hover:scale-105 transition-all duration-500 overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                <img 
                  src="/logo_trans.png" 
                  alt="Shine Jewels Logo" 
                  className="w-full h-full object-contain relative z-10 brightness-[1.1] contrast-[1.1]"
                />
              </div>
              <span className={`text-2xl md:text-3xl font-serif italic tracking-tighter transition-colors ${logoColor}`}>
                Shine Jewels
              </span>
            </Link>
            <div className="hidden md:flex gap-10 items-center">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-sans tracking-[0.3em] uppercase text-[10px] transition-colors ${
                    shouldBeGlass 
                      ? "text-white/60 hover:text-secondary" 
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Center: Search Bar (Refined) */}
          <div className="hidden lg:block flex-1 max-w-md mx-12">
            <div className={`flex items-center px-6 py-2.5 rounded-full border border-white/10 transition-all ${searchBg}`}>
              <Search className={`w-3.5 h-3.5 mr-3 opacity-40 ${textColor}`} />
              <input
                type="text"
                placeholder="Search collection..."
                className={`bg-transparent border-none outline-none focus:outline-none focus:ring-0 focus:bg-transparent w-full text-[10px] placeholder:opacity-30 tracking-[0.1em] ${textColor} placeholder:currentcolor`}
              />
            </div>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-1 md:gap-6">
            <div className="flex gap-0.5 md:gap-2">
              <button className={`p-2 transition-opacity hover:opacity-80 md:hidden`}>
                <Search className="w-5 h-5 text-white" />
              </button>
              <button className={`p-2 transition-opacity hover:opacity-80 ${textColor}`}>
                <Heart className="w-4.5 h-4.5 opacity-80" />
              </button>
              <button className={`p-2 transition-opacity hover:opacity-80 ${textColor}`}>
                <ShoppingBag className="w-4.5 h-4.5 opacity-80" />
              </button>
            </div>

            {/* Hamburger Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 -mr-2 text-white relative z-[110]"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-0 left-0 w-full h-[60vh] bg-[#0f0a0a]/98 backdrop-blur-2xl z-[200] md:hidden pt-28 px-6 overflow-y-auto flex flex-col items-center rounded-b-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <div className="flex flex-col gap-5 text-center w-full max-w-sm mx-auto">
              <div className="space-y-1">
                {navLinks.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <a
                      href={item.href}
                      className="text-white/50 hover:text-secondary text-[10px] font-sans font-bold tracking-[0.2em] uppercase block py-2 transition-colors"
                    >
                      {item.name}
                    </a>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-4 border-t border-white/10"
              >
                <div className="flex flex-col gap-2 items-center">
                  <span className="text-white/30 text-[8px] font-sans font-bold tracking-[0.3em] uppercase">Connect With Us</span>
                  <div className="flex gap-6">
                    {["Instagram", "Pinterest", "YouTube"].map((social) => (
                      <a key={social} href="#" className="text-white/80 hover:text-secondary text-[9px] font-sans tracking-[0.2em] uppercase transition-colors">{social}</a>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4 pb-8"
              >
                <Link 
                  to="/"
                  className="inline-block px-10 py-4 border border-secondary/30 rounded-full text-secondary text-[9px] font-sans font-bold tracking-[0.3em] uppercase hover:bg-secondary hover:text-black transition-all"
                >
                  Explore the Collection
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

