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
    ? "bg-[#0f0a0a]/80 backdrop-blur-xl border-b border-white/5 py-3 md:py-4" 
    : `${shouldBeGlass ? "bg-[#0f0a0a]/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"} py-4 md:py-5`;

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
        className={`w-full transition-all duration-500 relative z-[210] ${navStyles}`}
      >
        <div className="flex justify-between items-center w-full px-4 md:px-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 md:gap-8">
            {/* Hamburger Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 -ml-2 text-white relative z-[110]"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <Link to="/" className={`text-xl md:text-2xl font-serif italic tracking-tighter transition-colors ${logoColor} relative z-[110]`}>
              Shine Jewels
            </Link>
            <div className="hidden md:flex gap-8 items-center">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-sans tracking-[0.2em] uppercase text-[10px] transition-colors ${
                    shouldBeGlass 
                      ? "text-white/60 hover:text-secondary" 
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-6">
            <div className={`hidden lg:flex items-center px-4 py-2 rounded-full border transition-all ${searchBg}`}>
              <Search className={`w-4 h-4 mr-2 opacity-50 ${textColor}`} />
              <input
                type="text"
                placeholder="Search collection..."
                className={`bg-transparent border-none text-xs focus:ring-0 w-48 placeholder:opacity-50 ${textColor} placeholder:currentcolor`}
              />
            </div>
            <div className="flex gap-2 md:gap-4">
              <button className={`p-2 transition-opacity hover:opacity-80 md:hidden`}>
                <Search className="w-5 h-5 text-white" />
              </button>
              <button className={`p-2 transition-opacity hover:opacity-80 ${textColor}`}>
                <Heart className="w-5 h-5" />
              </button>
              <button className={`p-2 transition-opacity hover:opacity-80 ${textColor}`}>
                <ShoppingBag className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0f0a0a]/98 backdrop-blur-2xl z-[200] md:hidden pt-32 px-6 overflow-y-auto flex flex-col items-center"
          >
            <div className="flex flex-col gap-8 text-center w-full max-w-sm mx-auto">
              <div className="space-y-4">
                {navLinks.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    <a
                      href={item.href}
                      className="text-white/50 hover:text-secondary text-[11px] font-sans font-bold tracking-[0.2em] uppercase block py-3 transition-colors"
                    >
                      {item.name}
                    </a>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-6 border-t border-white/10"
              >
                <div className="flex flex-col gap-3 items-center">
                  <span className="text-white/30 text-[8px] font-sans font-bold tracking-[0.3em] uppercase">Connect With Us</span>
                  <div className="flex gap-6">
                    {["Instagram", "Pinterest", "YouTube"].map((social) => (
                      <a key={social} href="#" className="text-white/80 hover:text-secondary text-[10px] font-sans tracking-[0.2em] uppercase transition-colors">{social}</a>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-6 pb-12"
              >
                <Link 
                  to="/"
                  className="inline-block px-12 py-5 border border-secondary/30 rounded-full text-secondary text-[10px] font-sans font-bold tracking-[0.3em] uppercase hover:bg-secondary hover:text-black transition-all"
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

