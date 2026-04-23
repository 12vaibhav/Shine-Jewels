import { motion, AnimatePresence } from "motion/react";
import {
  Star,
  Heart,
  ShoppingBag,
  Truck,
  RotateCcw,
  ShieldCheck,
  MapPin,
  MessageSquare,
  Award,
  Diamond,
  Lock,
  Smile,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ArrowLeft,
  Minus,
  Plus,
  Search,
  Instagram,
  Facebook,
  Twitter,
  Flower2
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const product = {
  id: "floral-diamond-ring",
  name: "Floral Diamond Solitaire Ring",
  collection: "Floral Collection",
  price: "₹24,999",
  originalPrice: "₹31,999",
  discount: "22% OFF",
  rating: 4.9,
  reviewsCount: 214,
  description: "Inspired by blooming peonies at dawn, this ring features a stunning 0.25ct conflict-free diamond cradled by four hand-sculpted petals. Each petal is meticulously crafted in 18K gold to capture the organic elegance of nature.",
  technicalDetails: "Designed for the modern romantic, the band features a subtle taper that accentuates the central floral motif, ensuring it catches light from every angle.",
  images: [
    "/Product Images/Product Media/P1.webp",
    "/Product Images/Product Media/P2.webp",
    "/Product Images/Product Media/P3.webp",
    "/Product Images/Product Media/P4.webp",
    "/Product Images/Product Media/P5.webp"
  ],
  specs: [
    { label: "Diamond Carat", value: "0.25 CT" },
    { label: "Diamond Quality", value: "VVS-EF" },
    { label: "Gold Purity", value: "18K BIS Hallmark" },
    { label: "Approx Weight", value: "3.45 Grams" }
  ]
};

const relatedProducts = [
  {
    name: "Elegant Green Emerald Drop Earrings",
    price: "₹18,500",
    image: "/Product Images/Our Bestsellers/Elegant Green Emerald Drop Earrings.webp"
  },
  {
    name: "Heritage Floral Medallion Bracelet",
    price: "₹22,900",
    image: "/Product Images/Our Bestsellers/Heritage Floral Medallion Bracelet.webp"
  },
  {
    name: "Liora Mint CZ Ring",
    price: "₹42,000",
    image: "/Product Images/Our Bestsellers/Liora Mint CZ Ring.webp"
  },
  {
    name: "Purple Choker Set",
    price: "₹12,400",
    image: "/Product Images/Our Bestsellers/Purple Choker Set.webp"
  },
  {
    name: "Seerat Wine Maangtikka",
    price: "₹12,400",
    image: "/Product Images/Our Bestsellers/Seerat Wine Maangtikka.webp"
  }
];

const customerReviews = [
  {
    initials: "AS",
    name: "Ananya Sharma",
    comment: "Absolutely stunning! The floral detailing is even more delicate in person. It’s the perfect size for daily wear but still feels incredibly luxurious. Packaging was premium and delivery was super fast.",
    rating: 5,
    image: "/Product Images/Category/Earrings.png"
  },
  {
    initials: "KM",
    name: "Kavita Mehra",
    comment: "The gold quality is exceptional. I've been wearing it for a month and it still looks like new. Perfectly matches with my floral studs. Truly an artisanal piece.",
    rating: 5,
    image: "/Product Images/Category/Rings.webp"
  },
  {
    initials: "RV",
    name: "Rohan Verma",
    comment: "Bought this for my anniversary and my wife absolutely loves it. The unboxing experience was indeed premium as promised. Highly recommend for special gifts.",
    rating: 5,
    image: "/Product Images/Category/Bangles.webp"
  }
];

const moreToAdore = [
  { name: "Esha Pink Bangles", price: "₹28,500", image: "/Product Images/New Arrivals/Esha Pink Bangles.webp" },
  { name: "Ethnic Fringe Elephant Dangle Earrings", price: "₹34,200", image: "/Product Images/New Arrivals/Ethnic Fringe Elephant Dangle Earrings.webp" },
  { name: "Jogi Green Payal Anklets", price: "₹19,900", image: "/Product Images/New Arrivals/Jogi Green Payal Anklets.webp" },
  { name: "Pearl Rose Enamel Polki Kundan Necklace Set", price: "₹12,400", image: "/Product Images/New Arrivals/Pearl Rose Enamel Polki Kundan Necklace Set.webp" },
  { name: "Scorpio Mangalsutra", price: "₹19,900", image: "/Product Images/New Arrivals/Scorpio Mangalsutra.webp" }
];

export default function ProductDetail() {
  const [activeImg, setActiveImg] = useState(product.images[0]);
  const [selectedMetal, setSelectedMetal] = useState("18K Yellow Gold");
  const [selectedSize, setSelectedSize] = useState(6);
  const [activeTab, setActiveTab] = useState("Description");
  const [quantity, setQuantity] = useState(1);
  const [isDescExpanded, setIsDescExpanded] = useState(true);
  const [isDetailExpanded, setIsDetailExpanded] = useState(false);
  const [isSpecsExpanded, setIsSpecsExpanded] = useState(false);
  const [isSizeExpanded, setIsSizeExpanded] = useState(false);
  const [isShippingExpanded, setIsShippingExpanded] = useState(false);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const completeLookRef = useRef<HTMLDivElement>(null);
  const moreToAdoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = `${product.name} | Shine Jewels`;
  }, []);

  const scrollReviews = (direction: 'left' | 'right') => {
    if (reviewsRef.current) {
      const { scrollLeft, clientWidth } = reviewsRef.current;
      // Scroll by exactly one page width (which shows 2 cards on desktop)
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      reviewsRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const scrollCompleteLook = (direction: 'left' | 'right') => {
    if (completeLookRef.current) {
      const { scrollLeft, clientWidth } = completeLookRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      completeLookRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const scrollMoreToAdore = (direction: 'left' | 'right') => {
    if (moreToAdoreRef.current) {
      const { scrollLeft, clientWidth } = moreToAdoreRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      moreToAdoreRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const navigateGallery = (direction: 'prev' | 'next') => {
    const currentIndex = product.images.indexOf(activeImg);
    if (direction === 'prev') {
      const prevIndex = (currentIndex - 1 + product.images.length) % product.images.length;
      setActiveImg(product.images[prevIndex]);
    } else {
      const nextIndex = (currentIndex + 1) % product.images.length;
      setActiveImg(product.images[nextIndex]);
    }
  };

  return (
    <div className="pt-20 md:pt-32 min-h-screen bg-surface text-on-surface font-sans leading-relaxed tracking-tight selection:bg-secondary-container">
      <main className="pb-9 md:pb-0">
        {/* Mobile Hero & Header - block md:hidden */}
        <div className="md:hidden">
          <section className="relative bg-surface-container-low overflow-hidden">
            <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide aspect-square">
              {product.images.map((img, i) => (
                <div key={i} className="flex-shrink-0 w-full snap-center">
                  <img referrerPolicy="no-referrer" alt={product.name} className="w-full h-full object-cover" src={img} />
                </div>
              ))}
            </div>
            <div className="absolute top-10 left-6">
              <span className="bg-primary text-white px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-lg">NEW ARRIVAL</span>
            </div>
            <button className="absolute top-10 right-6 w-12 h-12 bg-white/40 backdrop-blur-xl rounded-full flex items-center justify-center text-primary shadow-sm active:scale-90 transition-transform">
              <Heart className="w-5 h-5" />
            </button>
            <div className="absolute bottom-6 w-full flex justify-center gap-2">
              {product.images.map((img, i) => (
                <div key={i} className={`w-2 h-2 rounded-full transition-all ${activeImg === img ? "bg-primary" : "bg-primary/20"}`}></div>
              ))}
            </div>
          </section>

          <section className="px-[18px] pt-6 pb-6">
            <div className="flex flex-col space-y-2">
              <span className="text-secondary text-[11px] font-bold tracking-[0.2em] uppercase">{product.collection}</span>
              <h1 className="font-serif text-4xl text-primary leading-tight italic">{product.name}</h1>
              <div className="flex items-center gap-2 pt-1">
                <div className="flex text-secondary star-rating">
                  {[...Array(5)].map((_, i) => <Star key={i} className={`w-3.5 h-3.5 fill-current ${i === 4 ? "opacity-50" : ""}`} />)}
                </div>
                <span className="text-[12px] text-on-surface-variant font-medium">({product.reviewsCount} Reviews)</span>
              </div>
            </div>
            <div className="mt-6 flex items-baseline gap-4">
              <span className="text-3xl font-serif text-primary font-semibold">{product.price}</span>
              <span className="text-lg text-outline-variant line-through font-light">{product.originalPrice}</span>
              <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[11px] font-bold tracking-wider">{product.discount}</span>
            </div>
            <div className="mt-6 space-y-6">
              <div>
                <label className="block text-[11px] font-bold tracking-widest text-on-surface-variant uppercase mb-4">Select Metal</label>
                <div className="flex gap-4 scroll-px-[18px] overflow-x-auto scrollbar-hide -mx-[18px] px-[18px]">
                  {[
                    { name: "18K Rose Gold", color: "bg-[#f3d081]" },
                    { name: "18K White Gold", color: "bg-[#e5e5e5]" },
                    { name: "925 Silver", color: "bg-[#c0c0c0]" }
                  ].map((metal) => (
                    <button
                      key={metal.name}
                      onClick={() => setSelectedMetal(metal.name)}
                      className={`px-6 py-3 rounded-full whitespace-nowrap font-medium text-sm transition-all border ${selectedMetal === metal.name ? "bg-primary text-white border-primary" : "bg-surface-container text-on-surface-variant border-transparent"}`}
                    >
                      {metal.name}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-[11px] font-bold tracking-widest text-on-surface-variant uppercase">Ring Size (US)</label>
                  <button className="text-[11px] font-bold tracking-widest text-secondary border-b border-secondary/30 uppercase italic">Size Guide</button>
                </div>
                <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 scroll-px-[18px] -mx-[18px] px-[18px]">
                  {[6, 7, 8, 9, 10].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[56px] h-14 rounded-full flex items-center justify-center font-medium transition-all ${selectedSize === size ? "bg-primary text-white font-bold shadow-sm" : "bg-surface-container"}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-1 pb-1">
                <img 
                  referrerPolicy="no-referrer"
                  src="/feature_highlights.webp" 
                  alt="Feature Highlights" 
                  className="w-full h-auto rounded-2xl shadow-sm border border-secondary/10" 
                />
              </div>

              <div className="pt-2 -mb-3 text-center">
                <span className="text-[14px] font-black text-secondary uppercase tracking-[0.2em] block leading-none">Artisanal Brilliance</span>
              </div>
            </div>
          </section>

          <section className="mt-6 px-[18px] space-y-4">
            <div className="bg-surface-container-low rounded-lg p-5">
              <button
                onClick={() => setIsDescExpanded(!isDescExpanded)}
                className="flex justify-between items-center w-full mb-3"
              >
                <h3 className="font-serif text-xl italic text-primary">Poetry in Metal</h3>
                <ChevronDown className={`w-5 h-5 text-secondary transition-transform ${isDescExpanded ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {isDescExpanded && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="text-sm leading-relaxed text-on-surface-variant overflow-hidden"
                  >
                    {product.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            <div className="bg-surface-container-low rounded-lg p-5">
              <button
                onClick={() => setIsDetailExpanded(!isDetailExpanded)}
                className="flex justify-between items-center w-full"
              >
                <h3 className="font-serif text-xl italic text-primary">Ethical Craft</h3>
                <ChevronDown className={`w-5 h-5 text-secondary transition-transform ${isDetailExpanded ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {isDetailExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 space-y-4">
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-secondary uppercase tracking-widest">Ethical Diamonds</p>
                        <p className="text-xs leading-relaxed text-on-surface-variant font-sans">Sourced from conflict-free mines. VVS clarity EF color diamonds.</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-secondary uppercase tracking-widest">BIS Hallmarking</p>
                        <p className="text-xs leading-relaxed text-on-surface-variant font-sans">Bureau of Indian Standards certified 18K gold purity.</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="bg-surface-container-low rounded-lg p-5">
              <button
                onClick={() => setIsSpecsExpanded(!isSpecsExpanded)}
                className="flex justify-between items-center w-full"
              >
                <h3 className="font-serif text-xl italic text-primary">Master Specifications</h3>
                <ChevronDown className={`w-5 h-5 text-secondary transition-transform ${isSpecsExpanded ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {isSpecsExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 space-y-3">
                      {product.specs.map((spec, i) => (
                        <div key={i} className="flex justify-between items-center border-b border-outline-variant/10 pb-2">
                          <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">{spec.label}</span>
                          <span className="text-xs text-on-surface-variant font-medium">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="bg-surface-container-low rounded-lg p-5">
              <button
                onClick={() => setIsSizeExpanded(!isSizeExpanded)}
                className="flex justify-between items-center w-full"
              >
                <h3 className="font-serif text-xl italic text-primary">Size Guide</h3>
                <ChevronDown className={`w-5 h-5 text-secondary transition-transform ${isSizeExpanded ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {isSizeExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 space-y-4">
                      <p className="text-xs leading-relaxed text-on-surface-variant font-sans">For accurate measurement, measure your finger at the end of the day when they are largest. Our sizes follow US standards.</p>
                      <img referrerPolicy="no-referrer" src="https://picsum.photos/seed/measure/600/300" alt="Size Guide" className="w-full h-auto rounded-lg" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="bg-surface-container-low rounded-lg p-5">
              <button
                onClick={() => setIsShippingExpanded(!isShippingExpanded)}
                className="flex justify-between items-center w-full"
              >
                <h3 className="font-serif text-xl italic text-primary">Shipping & Returns</h3>
                <ChevronDown className={`w-5 h-5 text-secondary transition-transform ${isShippingExpanded ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {isShippingExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 space-y-4">
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-secondary uppercase tracking-widest">Free Shipping</p>
                        <p className="text-xs leading-relaxed text-on-surface-variant font-sans">Insured delivery within 5-7 business days across India.</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-secondary uppercase tracking-widest">14-Day Returns</p>
                        <p className="text-xs leading-relaxed text-on-surface-variant font-sans">Easy 14-day exchange or refund. Item must be in original condition.</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>

          <section className="mt-4 w-full px-[26px] overflow-hidden">
            <img 
              referrerPolicy="no-referrer" 
              src="/productpage_banner.webp" 
              alt="Trust Banner" 
              className="w-full h-auto object-cover rounded-xl shadow-sm" 
            />
          </section>

          <section className="mt-3 px-[34px]">
            <h2 className="font-serif text-2xl italic text-primary pt-[15px] pb-[35px] text-center">Complete the Look</h2>
            <div className="flex gap-6 overflow-x-auto scrollbar-hide snap-x -mx-[34px] px-[19px] scroll-px-[19px]">
              {relatedProducts.map((p, i) => (
                <div key={i} className="min-w-[160px] snap-start space-y-3">
                  <div className="aspect-[3/4] bg-surface-container overflow-hidden rounded-lg">
                    <img referrerPolicy="no-referrer" alt={p.name} className="w-full h-full object-cover" src={p.image} />
                  </div>
                  <p className="text-[11px] font-bold tracking-widest uppercase text-on-surface-variant truncate">{p.name}</p>
                  <p className="font-serif text-primary">{p.price}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 px-[34px]">
            <div className="flex flex-col items-center text-center mb-10 space-y-5">
              <h2 className="font-serif text-3xl italic text-primary">Customer Love</h2>
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-serif text-secondary leading-none">4.8</span>
                  <div className="flex text-secondary star-rating">
                    {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 fill-current ${i === 4 ? "opacity-50" : ""}`} />)}
                  </div>
                </div>
                <span className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.2em]">Based on {product.reviewsCount} reviews</span>
              </div>
            </div>
            <div className="flex gap-5 overflow-x-auto scrollbar-hide snap-x -mx-[34px] px-[19px] scroll-px-[19px] pb-8">
              {customerReviews.map((review, i) => (
                <div key={i} className="min-w-[85vw] sm:min-w-[280px] snap-start bg-[#f9f0f4] p-6 rounded-2xl shadow-[0_20px_50px_rgba(139,34,82,0.03)]">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="font-bold text-sm text-on-surface">{review.name}</p>
                      <p className="text-[10px] text-outline-variant uppercase tracking-widest">Verified Buyer</p>
                    </div>
                    <div className="flex text-secondary star-rating">
                      {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-3 h-3.5 fill-current" />)}
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed italic text-on-surface-variant font-serif">"{review.comment}"</p>
                  {review.image && (
                    <div className="mt-4 aspect-square w-16 rounded-lg overflow-hidden border border-outline-variant/10">
                      <img referrerPolicy="no-referrer" src={review.image} alt="User gallery" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-col items-center">
              <button className="text-[11px] font-bold tracking-[0.2em] text-secondary uppercase border-2 border-secondary/10 px-10 py-3.5 rounded-full active:scale-95 transition-all">Write a Review</button>
            </div>
            <div className="pt-2 text-center">
              <button className="w-[calc(100%-60px)] mx-auto block mt-2 py-4 px-8 border border-primary/10 bg-white rounded-full text-[11px] font-bold tracking-widest text-primary uppercase hover:bg-primary hover:text-white transition-all shadow-sm active:scale-95">View All {product.reviewsCount} Reviews</button>
            </div>
          </section>

          <section className="mt-10 px-[34px] mb-8">
            <h2 className="font-serif text-3xl italic text-primary mb-8 text-center">More to Adore</h2>
            <div className="flex overflow-x-auto scrollbar-hide snap-x -mx-[34px] px-[19px] gap-4 scroll-px-[19px]">
              {moreToAdore.map((p, i) => (
                <div key={i} className="shrink-0 w-[calc(50vw-32px)] snap-start flex flex-col">
                  <div className="aspect-[4/5] bg-[#fdfaf8] rounded-2xl overflow-hidden mb-4 relative border border-stone-100/50">
                    <img referrerPolicy="no-referrer" alt={p.name} className="w-full h-full object-cover transition-transform duration-700" src={p.image} />
                    <button className="absolute bottom-3 right-3 bg-white p-2.5 rounded-full shadow-lg active:scale-90 transition-transform">
                      <ShoppingBag className="w-3.5 h-3.5 text-primary" />
                    </button>
                  </div>
                  <div className="space-y-1 text-center">
                    <h3 className="font-serif text-base italic text-primary leading-tight px-1">{p.name}</h3>
                    <p className="text-[10px] font-bold tracking-[0.2em] text-secondary uppercase">{p.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <button className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary pb-1 border-b-2 border-secondary/20">View Everything</button>
            </div>
          </section>


          {/* Fixed Bottom Bar - Mobile only */}
          <div className="fixed bottom-0 left-0 w-full z-50 px-4 pb-6 pointer-events-none">
            <div className="max-w-md mx-auto bg-white/90 backdrop-blur-2xl rounded-[32px] px-6 py-5 shadow-[0_-20px_50px_rgba(108,4,59,0.15)] border border-white/40 pointer-events-auto">
              <div className="flex items-center justify-between mb-4">
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-primary/40 uppercase tracking-[0.2em] truncate max-w-[140px] leading-none mb-1">{product.name}</span>
                  <span className="font-serif text-2xl text-primary leading-none">{product.price}</span>
                </div>
                <div className="flex items-center bg-primary/5 rounded-full px-4 py-2 gap-5">
                  <Minus
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-4 h-4 text-primary cursor-pointer active:scale-75 transition-transform"
                  />
                  <span className="text-sm font-bold w-4 text-center text-primary">{quantity}</span>
                  <Plus
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-4 h-4 text-primary cursor-pointer active:scale-75 transition-transform"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 bg-white border-2 border-primary/20 text-primary py-3.5 rounded-2xl font-bold text-[10px] tracking-[0.2em] uppercase active:scale-95 transition-all h-auto">
                  ADD TO CART
                </button>
                <button className="flex-1 bg-primary text-white py-3.5 rounded-2xl font-bold text-[10px] tracking-[0.2em] uppercase shadow-lg shadow-primary/20 active:scale-95 transition-all h-auto">
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Version - hidden md:block */}
        <div className="hidden md:block">
          {/* Breadcrumb - 8-point: pt-2, pb-6 */}
          <div className="max-w-[1340px] mx-auto px-2 md:px-3 pt-2 pb-6">
            <nav className="flex flex-wrap gap-y-2 text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em] text-secondary font-bold">
              <a href="/" className="hover:text-primary transition-colors">Home</a>
              <span className="mx-2 md:mx-4 text-primary/20">/</span>
              <a href="#" className="hover:text-primary transition-colors">Rings</a>
              <span className="mx-2 md:mx-4 text-primary/20">/</span>
              <span className="text-primary/40 leading-none truncate max-w-[150px] md:max-w-none">{product.name}</span>
            </nav>
          </div>

          {/* Main Product Section - 8-point: pt-2, pb-0 (Lower gap from breadcrumbs) */}
          <section className="max-w-[1340px] mx-auto px-2 md:px-3 pt-2 pb-0 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            {/* Left: Gallery */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="aspect-square bg-[#fdfaf8] rounded-2xl overflow-hidden relative group shadow-sm"
              >
                <div className="absolute top-6 left-6 z-10">
                  <span className="bg-primary text-white text-[9px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full">New Arrival</span>
                </div>
                <button className="absolute top-6 right-6 z-10 bg-white/80 backdrop-blur-xl p-3 rounded-full text-primary hover:scale-110 transition-transform shadow-lg">
                  <Heart className="w-5 h-5" />
                </button>

                {/* Gallery Navigation Buttons */}
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <button 
                    onClick={() => navigateGallery('prev')}
                    className="p-3 rounded-full bg-white/90 backdrop-blur-md text-primary shadow-xl hover:bg-primary hover:text-white transition-all transform -translate-x-4 group-hover:translate-x-0"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <button 
                    onClick={() => navigateGallery('next')}
                    className="p-3 rounded-full bg-white/90 backdrop-blur-md text-primary shadow-xl hover:bg-primary hover:text-white transition-all transform translate-x-4 group-hover:translate-x-0"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <img
                  referrerPolicy="no-referrer"
                  src={activeImg}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </motion.div>
              {/* Thumbnails - 8-point: gap-4 */}
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide md:mx-0 -mx-4 md:px-0 px-4 scroll-px-4 md:scroll-px-0">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`w-24 h-24 rounded-xl overflow-hidden border-2 transition-all transition-colors shrink-0 ${activeImg === img ? "border-secondary" : "border-stone-100 hover:border-secondary/40"}`}
                  >
                    <img referrerPolicy="no-referrer" src={img} alt={`Thumb ${i}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Details */}
            <div className="flex flex-col gap-6">
              <div className="space-y-4">
                <span className="text-secondary uppercase tracking-[0.6em] text-[9px] md:text-[10px] font-bold block leading-none">{product.collection}</span>
                <h1 className="text-3xl md:text-5xl font-serif text-primary italic leading-[1.2]">{product.name}</h1>
                <div className="flex items-center gap-4">
                  <div className="flex text-secondary star-rating">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3 h-3 md:w-3.5 md:h-3.5 fill-current ${i === 4 ? "opacity-50" : ""}`} />
                    ))}
                  </div>
                  <span className="text-[9px] md:text-[10px] text-primary/40 font-bold uppercase tracking-widest leading-none">({product.reviewsCount} Reviews)</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-baseline gap-3 md:gap-4">
                  <span className="text-3xl md:text-4xl font-serif text-primary italic leading-none">{product.price}</span>
                  <span className="text-lg md:text-xl text-primary/30 line-through font-serif leading-none">{product.originalPrice}</span>
                  <span className="bg-secondary/10 text-secondary text-[9px] md:text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider leading-none">{product.discount}</span>
                </div>
                <p className="text-[9px] md:text-[10px] text-primary/60 italic font-medium uppercase tracking-widest leading-relaxed">Starting from ₹2,150/month with EMI options</p>
              </div>

              <div className="space-y-4">
                <span className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-primary/60 block leading-none">Select Metal</span>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {[
                    { name: "18K Yellow Gold", color: "bg-[#f3d081]" },
                    { name: "18K White Gold", color: "bg-[#e5e5e5]" },
                    { name: "925 Silver", color: "bg-[#c0c0c0]" }
                  ].map((metal) => (
                    <button
                      key={metal.name}
                      onClick={() => setSelectedMetal(metal.name)}
                      className={`px-4 md:px-6 py-3 md:py-4 rounded-full border-2 text-[10px] md:text-[11px] font-bold uppercase tracking-widest transition-all flex items-center gap-2 ${selectedMetal === metal.name ? "border-primary bg-primary/5 text-primary" : "border-stone-100 text-primary/40 hover:border-primary/20"}`}
                    >
                      <span className={`w-2 md:w-2.5 h-2 md:h-2.5 rounded-full ${metal.color}`}></span>
                      {metal.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center leading-none">
                  <span className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-primary/60">Ring Size</span>
                  <button className="text-[8px] md:text-[9px] text-secondary font-bold underline underline-offset-4 tracking-[0.2em] uppercase">Size Guide →</button>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {[6, 7, 8, 9, 10].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border-2 text-xs font-bold transition-all ${selectedSize === size ? "border-primary bg-primary text-white" : "border-stone-100 text-primary/40 hover:border-primary"}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-6 pt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button className="bg-primary text-white py-4 px-6 rounded-full font-bold uppercase tracking-[0.3em] text-[10px] shadow-xl hover:scale-[1.02] transition-transform h-auto">
                    Add to Cart
                  </button>
                  <button className="bg-secondary text-primary py-4 px-6 rounded-full font-bold uppercase tracking-[0.3em] text-[10px] hover:scale-[1.02] transition-transform h-auto shadow-lg">
                    Buy Now
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button className="border-2 border-primary/10 text-primary py-4 px-6 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-primary/5 transition-all flex items-center justify-center gap-3">
                    <MapPin className="w-4 h-4 text-secondary" /> Try at Home
                  </button>
                  <button className="border-2 border-green-600/10 text-green-700 py-4 px-6 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-green-50 transition-all flex items-center justify-center gap-3">
                    <MessageSquare className="w-4 h-4" /> WhatsApp Expert
                  </button>
                </div>
              </div>

              {/* Trust Highlights */}
              <div className="pt-1 md:pt-2.5 pb-8 md:pb-10 border-t border-stone-100">
                <img 
                  referrerPolicy="no-referrer" 
                  src="/feature_highlights.webp" 
                  alt="Feature Highlights" 
                  className="w-full h-auto rounded-xl" 
                />
              </div>
            </div>
          </section>

          {/* Unified Background Section for Tabs and Trust Bar */}
          <div 
            className="bg-cover bg-center bg-fixed bg-no-repeat border-y border-stone-100"
            style={{ backgroundImage: "url('/PDP_back.webp')" }}
          >
            {/* Product Description Tabs */}
            <section className="pt-0 pb-12 md:pt-2.5 md:pb-16 relative">
              <div className="max-w-[800px] mx-auto px-1 md:px-2">
                <div className="flex justify-start md:justify-center border-b-[0.5px] border-[#e8dcd2] mb-12 md:mb-16 overflow-x-auto scrollbar-hide md:mx-0 -mx-4 md:px-0 px-4 scroll-px-4 md:scroll-px-0">
                  {["Description", "Details", "Size Guide", "Shipping"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className="px-6 md:px-10 py-5 transition-all relative flex items-center justify-center whitespace-nowrap"
                    >
                      <div className="relative">
                         <span className={`text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] leading-none ${activeTab === tab ? "text-[#3a1f26]" : "text-[#937b6b] hover:text-[#3a1f26]/70"}`}>
                          {tab}
                        </span>
                        {activeTab === tab && (
                          <motion.div layoutId="tab-underline" className="absolute -bottom-[21px] left-0 right-0 h-[3px] bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#d4af37]" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Dynamic Tab Content */}
                <div className="min-h-[300px]">
                  {activeTab === "Description" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center"
                    >
                      <div className="flex flex-col space-y-6 md:space-y-8 pr-0 lg:pr-12">
                        <h3 className="text-3xl md:text-[42px] font-serif italic text-[#3a1f26] font-semibold leading-tight">Poetry in <span className="text-[#b08b78]">Metal</span></h3>
                        <div className="space-y-6">
                          <p className="text-[#3a2822] leading-[1.8] font-sans text-[14.5px]">
                            {product.description}
                          </p>
                          <p className="text-[#3a2822] leading-[1.8] font-sans text-[14.5px] italic">
                            {product.technicalDetails}
                          </p>
                        </div>
                      </div>
                      <div className="bg-[#faf7f5] p-8 md:p-10 rounded-[32px] shadow-[0_20px_40px_-15px_rgba(150,130,120,0.15),inset_2px_2px_4px_rgba(255,255,255,0.8),inset_-2px_-2px_4px_rgba(0,0,0,0.02)] border border-white/60">
                        <div className="flex items-center gap-4 mb-6 md:mb-8">
                          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#b89582] leading-none shrink-0">Specifications</h4>
                          <div className="flex-1 h-[1px] border-b-[1.5px] border-dotted border-[#d6c7be]"></div>
                        </div>
                        <div className="space-y-0">
                          {product.specs.map((spec, i) => (
                            <div key={i} className="flex justify-between items-center border-b border-[#e8dfd8] py-4 last:border-0">
                              <span className="text-[11px] font-bold text-[#4a3b36] uppercase tracking-[0.1em]">{spec.label}</span>
                              <span className="text-[13px] font-bold text-[#2d1d17] flex items-center gap-2">
                                {spec.label === "Diamond Carat" && <Diamond className="w-3.5 h-3.5 text-stone-400 fill-stone-200" />}
                                {spec.label === "Gold Purity" && <Award className="w-4 h-4 text-[#d4af37] fill-[#d4af37]/20" />}
                                {spec.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "Details" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center"
                    >
                      <div className="flex flex-col space-y-6 md:space-y-8 pr-0 lg:pr-12">
                        <h3 className="text-3xl md:text-[42px] font-serif italic text-[#3a1f26] font-semibold leading-tight">The <span className="text-[#b08b78]">Art</span> of Craft</h3>
                        <div className="space-y-6">
                          <div className="space-y-3 md:space-y-4">
                            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#b89582] leading-none">Ethical Diamonds</h4>
                            <p className="text-[#3a2822] leading-[1.8] font-sans text-[14.5px]">
                              Our diamonds are exclusively sourced from conflict-free mines. This ring features VVS clarity EF color diamonds, ensuring exceptional brilliance.
                            </p>
                          </div>
                          <div className="space-y-3 md:space-y-4">
                            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#b89582] leading-none">BIS Hallmarking</h4>
                            <p className="text-[#3a2822] leading-[1.8] font-sans text-[14.5px]">
                              Every piece is stamped with the Bureau of Indian Standards (BIS) hallmark, certifying the purity of the 18K gold used in your jewelry.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#faf7f5] p-8 md:p-10 rounded-[32px] shadow-[0_20px_40px_-15px_rgba(150,130,120,0.15),inset_2px_2px_4px_rgba(255,255,255,0.8),inset_-2px_-2px_4px_rgba(0,0,0,0.02)] border border-white/60">
                        <div className="flex items-center gap-4 mb-6 md:mb-8">
                          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#b89582] leading-none shrink-0">Certifications</h4>
                          <div className="flex-1 h-[1px] border-b-[1.5px] border-dotted border-[#d6c7be]"></div>
                        </div>
                        <div className="space-y-0">
                          <div className="flex justify-between items-center border-b border-[#e8dfd8] py-4">
                            <span className="text-[11px] font-bold text-[#4a3b36] uppercase tracking-[0.1em]">SGL/IGI Certificate</span>
                            <span className="text-[13px] font-bold text-[#2d1d17] flex items-center gap-2">
                              <Award className="w-4 h-4 text-[#d4af37] fill-[#d4af37]/20" /> Certified
                            </span>
                          </div>
                          <div className="flex justify-between items-center border-b border-[#e8dfd8] py-4 last:border-0">
                            <span className="text-[11px] font-bold text-[#4a3b36] uppercase tracking-[0.1em]">Setting</span>
                            <span className="text-[13px] font-bold text-[#2d1d17] flex items-center gap-2">
                              <Diamond className="w-3.5 h-3.5 text-stone-400 fill-stone-200" /> Hand-Set
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "Size Guide" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-12"
                    >
                      <div className="text-center max-w-2xl mx-auto space-y-6 md:space-y-8">
                        <h3 className="text-3xl md:text-[42px] font-serif italic text-[#3a1f26] font-semibold leading-tight">Finding Your <span className="text-[#b08b78]">Perfect Fit</span></h3>
                        <p className="text-[#3a2822] leading-[1.8] font-sans text-[14.5px]">
                          A ring should be snug enough not to fall off, but loose enough to slide over your knuckle with some resistance.
                        </p>
                      </div>
                      <div className="bg-[#faf7f5] rounded-[32px] shadow-[0_20px_40px_-15px_rgba(150,130,120,0.15),inset_2px_2px_4px_rgba(255,255,255,0.8),inset_-2px_-2px_4px_rgba(0,0,0,0.02)] border border-white/60 overflow-hidden">
                        <div className="overflow-x-auto scrollbar-hide">
                          <table className="w-full min-w-[500px] md:min-w-0 text-left font-sans text-xs">
                            <thead>
                              <tr className="border-b-[1.5px] border-dotted border-[#d6c7be]">
                                <th className="px-6 md:px-8 py-5 md:py-6 text-[10px] uppercase tracking-[0.2em] font-bold text-[#b89582] leading-none">Ring Size (US)</th>
                                <th className="px-6 md:px-8 py-5 md:py-6 text-[10px] uppercase tracking-[0.2em] font-bold text-[#b89582] leading-none">Inner Diameter (mm)</th>
                                <th className="px-6 md:px-8 py-5 md:py-6 text-[10px] uppercase tracking-[0.2em] font-bold text-[#b89582] leading-none">Inner Circumference (mm)</th>
                              </tr>
                            </thead>
                            <tbody className="text-[#2d1d17]">
                              {[
                                { size: 6, dia: "16.5", cir: "51.9" },
                                { size: 7, dia: "17.3", cir: "54.4" },
                                { size: 8, dia: "18.1", cir: "56.9" },
                                { size: 9, dia: "19.0", cir: "59.5" },
                                { size: 10, dia: "19.8", cir: "62.1" }
                              ].map((row) => (
                                <tr key={row.size} className="border-b border-[#e8dfd8] last:border-0 hover:bg-[#f3e5ab]/10 transition-colors">
                                  <td className="px-6 md:px-8 py-4 md:py-5 font-bold text-[13px]">{row.size}</td>
                                  <td className="px-6 md:px-8 py-4 md:py-5 text-[#3a2822] text-[13px]">{row.dia} mm</td>
                                  <td className="px-6 md:px-8 py-4 md:py-5 text-[#3a2822] text-[13px]">{row.cir} mm</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "Shipping" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                      {[
                        {
                          title: "Free Express Shipping",
                          desc: "Complementary fully insured shipping across India via trusted partners.",
                          icon: Truck,
                          time: "3-5 Business Days"
                        },
                        {
                          title: "Secure Packaging",
                          desc: "Tamper-proof, luxury packaging ensures your jewelry arrives in pristine condition.",
                          icon: ShieldCheck,
                          time: "Premium Experience"
                        },
                        {
                          title: "Easy Returns",
                          desc: "7-day no-questions-asked return policy for a worry-free experience.",
                          icon: RotateCcw,
                          time: "100% Refund"
                        }
                      ].map((item, i) => (
                        <div key={i} className="bg-[#faf7f5] p-8 md:p-10 rounded-[32px] shadow-[0_20px_40px_-15px_rgba(150,130,120,0.15),inset_2px_2px_4px_rgba(255,255,255,0.8),inset_-2px_-2px_4px_rgba(0,0,0,0.02)] border border-white/60 flex flex-col space-y-6">
                          <div className="flex items-center gap-4">
                            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#b89582] leading-none shrink-0">{item.time}</h4>
                            <div className="flex-1 h-[1px] border-b-[1.5px] border-dotted border-[#d6c7be]"></div>
                          </div>
                          <div className="flex-1 flex flex-col items-center text-center space-y-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4af37]/20 to-[#f3e5ab]/10 flex items-center justify-center">
                              <item.icon className="w-5 h-5 text-[#d4af37]" />
                            </div>
                            <span className="text-[13px] font-extrabold text-[#2d1d17]">{item.title}</span>
                            <p className="text-[#3a2822] leading-[1.8] font-sans text-[13px]">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>
              </div>
            </section>

            {/* Trust Bar Banner - Now sharing the same background */}
            <section className="pt-0 pb-12 md:pb-20">
              <div className="max-w-[1340px] mx-auto px-2 md:px-3">
                <img 
                  referrerPolicy="no-referrer" 
                  src="/productpage_banner.webp" 
                  alt="Trust Banner" 
                  className="w-full h-auto object-cover rounded-2xl md:rounded-3xl" 
                />
              </div>
            </section>
          </div>

          {/* Complete the Look - 8-point: py-12 */}
          <section className="py-10 max-w-[1340px] mx-auto px-2 md:px-3">
            <div className="flex justify-between items-end mb-0 md:mb-2">
              <div className="space-y-4 md:space-y-6">
                <span className="text-secondary uppercase tracking-[0.6em] text-[10px] font-bold block leading-none">Artisanal Pairings</span>
                <h2 className="text-3xl md:text-4xl font-serif italic text-primary leading-tight">Complete <span className="text-secondary not-italic">the Look</span></h2>
              </div>
            </div>
            
            <div className="relative group/scroll">
              {/* Navigation Buttons */}
              <button
                onClick={() => scrollCompleteLook('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-20 p-3 md:p-4 rounded-full border border-stone-100 bg-white/90 backdrop-blur-sm text-primary hover:bg-primary hover:text-white transition-all shadow-xl opacity-0 group-hover/scroll:opacity-100 hidden md:flex items-center justify-center"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => scrollCompleteLook('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-20 p-3 md:p-4 rounded-full border border-stone-100 bg-white/90 backdrop-blur-sm text-primary hover:bg-primary hover:text-white transition-all shadow-xl opacity-0 group-hover/scroll:opacity-100 hidden md:flex items-center justify-center"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div 
                ref={completeLookRef}
                className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 pt-10 px-2 md:px-0"
              >
                {relatedProducts.map((p, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -8 }}
                    className="group cursor-pointer shrink-0 w-[75vw] sm:w-[320px] md:w-[300px] snap-start"
                  >
                    <div className="aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden mb-4 md:mb-6 relative bg-[#fdfaf8] border border-stone-50">
                      <img referrerPolicy="no-referrer" src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                      <button className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-white p-3 md:p-4 rounded-full shadow-xl opacity-100 md:opacity-0 translate-y-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500">
                        <ShoppingBag className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                      </button>
                    </div>
                    <div className="text-center space-y-2 md:space-y-3">
                      <h3 className="font-serif italic text-lg md:text-xl text-primary leading-none">{p.name}</h3>
                      <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.3em] text-secondary uppercase leading-none">{p.price}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Customer Stories - 8-point: py-12 */}
          <section className="bg-[#fdfaf8] py-10 border-y border-stone-100">
            <div className="max-w-[1340px] mx-auto px-2 md:px-3">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
                {/* Rating Summary */}
                <div className="space-y-8 md:space-y-10">
                  <div className="space-y-4 md:space-y-6 md:min-h-[100px] flex flex-col justify-end">
                    <span className="text-secondary uppercase tracking-[0.6em] text-[9px] md:text-[10px] font-bold block leading-none">Authentic Feedback</span>
                    <h2 className="text-3xl md:text-4xl font-serif text-primary italic leading-tight">Customer <span className="text-secondary not-italic">Stories</span></h2>
                  </div>
                  <div className="bg-white p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-xl shadow-primary/5 border border-stone-100">
                    <div className="flex items-center gap-5 md:gap-6 mb-8 md:mb-10">
                      <span className="text-6xl md:text-7xl font-serif text-primary italic leading-none">4.9</span>
                      <div className="space-y-2 md:space-y-3">
                        <div className="flex text-secondary star-rating">
                          {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                        </div>
                        <p className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-primary/40 leading-none">Based on {product.reviewsCount} reviews</p>
                      </div>
                    </div>
                    <div className="space-y-5">
                      {[
                        { label: "5 Star", value: 92, count: 198 },
                        { label: "4 Star", value: 6, count: 14 },
                        { label: "3 Star", value: 1, count: 2 },
                        { label: "2 Star", value: 0, count: 0 },
                        { label: "1 Star", value: 0, count: 0 }
                      ].map((bar, i) => (
                        <div key={i} className="flex items-center gap-6 text-[10px] font-bold text-primary/60 uppercase tracking-widest leading-none">
                          <span className="w-16 whitespace-nowrap">{bar.label}</span>
                          <div className="flex-1 h-1.5 bg-stone-100 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${bar.value}%` }}
                              className="h-full bg-secondary"
                            />
                          </div>
                          <span className="w-8 text-right opacity-40">{bar.count}</span>
                        </div>
                      ))}
                    </div>
                    <button className="w-full mt-10 border-2 border-primary text-primary bg-transparent rounded-full font-bold uppercase tracking-[0.2em] text-[10px] py-4 px-6 h-auto hover:bg-primary hover:text-white transition-all duration-500 shadow-none">
                      Write a Review
                    </button>
                  </div>
                </div>

                {/* Reviews List */}
                <div className="lg:col-span-2 space-y-8 min-w-0">
                  <div className="flex justify-between items-center mb-4 md:min-h-[100px] md:items-end md:mb-10">
                    <div className="flex gap-4 overflow-x-auto scrollbar-hide md:mx-0 -mx-4 md:px-0 px-4 scroll-px-4 md:scroll-px-0">
                      {["Most Recent", "With Images", "Highest Rating"].map((filter, i) => (
                        <button key={i} className={`px-8 py-3.5 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all whitespace-nowrap leading-none ${i === 0 ? "bg-primary text-white shadow-lg" : "bg-white text-primary/40 border border-stone-100 hover:border-primary"}`}>
                          {filter}
                        </button>
                      ))}
                    </div>
                    <div className="hidden md:flex gap-2 ml-4 self-end md:self-auto mb-2 md:mb-0">
                      <button
                        onClick={() => scrollReviews('left')}
                        className="p-2.5 md:p-3 rounded-full border border-stone-100 bg-white text-primary hover:bg-primary hover:text-white transition-all shadow-sm"
                      >
                        <ChevronLeft className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      </button>
                      <button
                        onClick={() => scrollReviews('right')}
                        className="p-2.5 md:p-3 rounded-full border border-stone-100 bg-white text-primary hover:bg-primary hover:text-white transition-all shadow-sm"
                      >
                        <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      </button>
                    </div>
                  </div>

                  <div
                    ref={reviewsRef}
                    className="flex gap-6 overflow-x-auto md:overflow-x-hidden snap-x snap-mandatory pb-8 scrollbar-hide md:mx-0 -mx-2 md:px-0 px-2 scroll-px-2 md:scroll-px-0"
                  >
                    {customerReviews.map((review, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-xl shadow-primary/5 border border-stone-100 relative group w-[85vw] sm:w-[280px] md:w-[calc(50%-12px)] snap-start shrink-0"
                      >
                        <div className="flex justify-between items-start mb-6 md:mb-8">
                          <div className="flex items-center gap-4 md:gap-6">
                            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold text-sm md:text-lg">{review.initials}</div>
                            <div className="space-y-1 md:space-y-2">
                              <p className="font-serif italic text-lg md:text-xl text-primary leading-none">{review.name}</p>
                              <p className="text-[8px] md:text-[9px] uppercase font-bold text-secondary flex items-center gap-1.5 tracking-widest leading-none">
                                <ShieldCheck className="w-3 md:w-3.5 h-3 md:h-3.5" /> Verified Purchase
                              </p>
                            </div>
                          </div>
                          <div className="flex text-secondary star-rating">
                            {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-3 h-3 md:w-3.5 md:h-3.5 fill-current" />)}
                          </div>
                        </div>
                        <p className="text-primary/70 leading-relaxed font-sans text-[13px] md:text-sm italic pr-4 md:pr-8">
                          "{review.comment}"
                        </p>
                        {review.image && (
                          <div className="mt-6 md:mt-8 flex gap-6">
                            <div className="relative overflow-hidden rounded-xl md:rounded-2xl group/img">
                              <img
                                referrerPolicy="no-referrer"
                                src={review.image}
                                alt="User Gallery"
                                className="w-20 h-20 md:w-24 md:h-24 object-cover transition-transform duration-700 group-hover/img:scale-110"
                              />
                              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover/img:opacity-100 transition-opacity" />
                            </div>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* More To Adore - 8-point: py-12 (Featured in Dark) */}
          <section className="bg-[#0f0a0a] py-10 text-white overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid-detail" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-detail)" />
              </svg>
            </div>

            <div className="max-w-[1340px] mx-auto px-2 md:px-3 relative z-10">
              <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 md:mb-16 gap-6 md:gap-8">
                <div className="space-y-4 md:space-y-6">
                  <span className="text-secondary uppercase tracking-[0.6em] text-[9px] md:text-[10px] font-bold block leading-none">Curated Just for You</span>
                  <h2 className="text-3xl md:text-6xl font-serif italic text-white tracking-tighter leading-tight">More <span className="text-secondary not-italic">To Adore</span></h2>
                </div>
                <div className="flex items-center gap-8">
                  <a href="#" className="group inline-flex items-center gap-4 text-secondary font-bold uppercase tracking-[0.3em] text-[9px] md:text-[10px] pb-2 border-b-2 border-secondary/20 hover:border-secondary transition-all leading-none w-fit">
                    View All Rings <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
              
              <div className="relative group/scroll">
                {/* Navigation Buttons */}
                <button
                  onClick={() => scrollMoreToAdore('left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-20 p-3 md:p-4 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-white hover:bg-secondary hover:text-primary transition-all shadow-2xl opacity-0 group-hover/scroll:opacity-100 hidden md:flex items-center justify-center"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <button
                  onClick={() => scrollMoreToAdore('right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-20 p-3 md:p-4 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-white hover:bg-secondary hover:text-primary transition-all shadow-2xl opacity-0 group-hover/scroll:opacity-100 hidden md:flex items-center justify-center"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                <div 
                  ref={moreToAdoreRef}
                  className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 px-2 md:px-0"
                >
                  {moreToAdore.map((p, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="group cursor-pointer shrink-0 w-[75vw] sm:w-[320px] md:w-[300px] snap-start"
                    >
                      <div className="aspect-[3/4] bg-white/5 rounded-2xl md:rounded-3xl overflow-hidden mb-6 md:mb-8 relative border border-white/5 group-hover:border-secondary/30 transition-all duration-700">
                        <img
                          referrerPolicy="no-referrer"
                          src={p.image}
                          alt={p.name}
                          className="w-full h-full object-cover transition-transform duration-1000 opacity-60 group-hover:opacity-100 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      </div>
                      <div className="space-y-2 md:space-y-3">
                        <h3 className="font-serif text-xl md:text-2xl text-stone-200 group-hover:text-secondary transition-colors duration-500 leading-tight">{p.name}</h3>
                        <p className="text-[10px] md:text-[11px] font-bold tracking-[0.3em] md:tracking-[0.4em] text-secondary uppercase opacity-70 group-hover:opacity-100 transition-opacity leading-none">{p.price}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
