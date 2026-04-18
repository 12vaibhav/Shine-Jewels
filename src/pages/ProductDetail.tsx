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
import { useState, useRef } from "react";
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
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCuoPMr_wxYG3RtMthwSKotCGC7ADGX-Rzri_5Eq-cezTLon2vEVAKk-H08SCVmCjlJM0doGbriCT-6XQRfTYkyNUrSV7eT0I2V4yZVBUaJhzFrsy58iw1eaJx20-bIW-XhTBxFvhPMhO4_GmmQEqKGchft4dP19B5_z9rOOmrVQSqzqhcyUtjyZmTYuI5H7dkV3Di7hBJHnG31tuRewAT9i6Q46jNKd2qyHeDDRdK0nQLrVJH1Rl4uXJWkD7R-tIazHF6p0pd-K6c",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBMjfYHe4V7R2SnqxZ4n9-Bq_YNiyj1KfGAiar6M8A-7ZnNNQl3zaurNe7wyreXiM7c7c1VMhdhcVy06TlK3aP-xxBGR0AQddGi1RoE64Kz-TEwbGDOiXCv6phgsxdLz4UCOOyxDpOCqsbubuyf2VmsngcT2DLvMSP1Lzkuge0Vq7iBY6t--QTDW991vdhfyzRY_45HWsMA7whCrZjkMEPmDp79kSNExhH4bry_SDbdVj08LkW8V1zl2Q_Lrc_fM9f3xTfn5wAO5Lk",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDWD-6Lmey3FGduregovvZ3RMaDpMVm7hEnyiMQETUOtISHpFyaChdZMaiNef76iDXuJicUKqYiRdQB-1KWscCDspfC3M1WQmEWeMgOudJx7AExUXjuDoG-lI_NlyyFnpyM9xMcJxnPiuLgeE76xGKzNd7pf6Ks5ITzJxrVUC8rt0fncndvzq6DffG4Pqsx7uP-NFBIwg6awNJ6hz7iPSYoFxO--HyETS04Vi2-pNbsYlDGukd-TDa5yoauxDLOA94qElNvZypzalw",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBogmMc5NXaQQ3Yxruu9LuEam-SDahPmLGSIuZtCTDLDi_xQQouD7bzo9tzo6o7V-_9t5y882XYtdBpx3kU4eEKtTHstNttUJftXDwYxg-kFLvOgauUNvl4hseSj8IsFqSD3ZeT0pJ6fFci-68j0wzC5UPxjID76TwPGwsr_wDBENSXLfSFQxlsyuFkD0r7kAVtpsw4Ji2ISydbJTBeOCONgca4DW8ixoqil4K5ikvOXhofasUnane06YGHSmy_ipV0apCk9AoJL_I"
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
    name: "Floral Petal Studs",
    price: "₹18,500",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPDoRMnLv0zonlhQkjNQdnwPNrSuO-wXWWRu3XmwUvkBxxhQGWpXXCVlVKLK7HVQzEG0W23ua39wyBEn2_uze1KxOgAC40Nr6Ev4GLC8yXZf4KEwflp8BlXkmi1foRVXBQECcMzqVFJf-LeY0bPjBhqEuWSK4dXG6GAOTyvLSZcd09cRLif-hlLsxh-wNFogvSN2qlozYN-dYxn58v-dYYFaRCM0iqmuPNpMdNU_5r7uvM_h9lqY8XsIAqjBvyEXf_oYjTu9p_Rqw"
  },
  {
    name: "Morning Dew Pendant",
    price: "₹22,900",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOahhpWMUDf2aiz7ULnwH_CeeRMYjkzr22r1S6I3Hqm0XadX9JtocbakX3_twsXUjRIELPyq3G-LavAlxXvr_VAG9se6VJyysqH_MRwfGKfMzqwkQDMnTe_zttUNusVXjI08JyIaB5KJ0NoWRZkwE5rctFOGhm3bJ989z7FkvgODb7v3FNpxC2SbDnado5sgS-o8XmP4roBtk1vPLpqFM9dwGh2CAITh7BEyF1-h2YA4-QKxplTu6ecS6KLaUe1RGF1WugAfFdvsk"
  },
  {
    name: "Peony Blossom Bangle",
    price: "₹42,000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwrKMps8mciwhKpe7wnHnqr89VTTI088uCZLvGX-c3a3hOK7XnNGCKZfNJd8m_MexDNhX7HGEV5gfM5WvgNdkBwvaXBYlMegjEQmrbrkKanRszzFlSI9QChdrn0GabpeuBVoZ1GyBTdT4C1ETkw6EYL84A9KEmrB4B3-DgX_LamFFoVBnJqN3UhFOq8_Aq03n8xQR1-RPy7lApZcHRpj7GzH9vF6G6D8redHAycWZotio2dOGeSDUcW9q_hgDsxHzbZtilJw1ZUFs"
  },
  {
    name: "Petite Bloom Band",
    price: "₹12,400",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvod9vcCMSIiMqE09iIKVjIUz1cuTUIFhfbNlYqYziJjFO3VolWT7r-Vho6ZnyuRCZRRtAsccUk9T_EsSNr7R7gsT1anv33p03zOIW24snyDPl3cbDhvM8wyc8EHtpeNC_Ue9J9yBTVojSRRCTBC0VXUocMYxsnslCdZc3RuiPhJrzhdv3J42lJ4Z8_Z9Kq1OaRiqkHQqvQppS7Nz-8ii_sGs92LDP-TnUMUoHyeo5zTpMz_mFcYoPPutQlbBWMkBKHZ2adqMGy0I"
  }
];

const customerReviews = [
  {
    initials: "AS",
    name: "Ananya Sharma",
    comment: "Absolutely stunning! The floral detailing is even more delicate in person. It’s the perfect size for daily wear but still feels incredibly luxurious. Packaging was premium and delivery was super fast.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCP3Uh4zjAJaWcJeqR6k8hdy4ryZmnNhZi0YXVDfetu29G1bdmTpg3AjuKL2cfJAeRCcUf093AqMVSiOsElap1OKRVB4-LAcBaH3t_SpY5C4cEre40VfldPR9Xlka-PJamHMLboi13f-Wz5PMQmh4TFIrHrFSqgf6HaexNjaXB4O5Su45Hdpl2lLO754CD4ZI_hfNuGzjx1KGXDdK4zZk8GjWBxCcFH-DtT8q2BxSB_Nkjd6upqxmbDBZUfwX24kG45TAqckBNXS18"
  },
  {
    initials: "KM",
    name: "Kavita Mehra",
    comment: "The gold quality is exceptional. I've been wearing it for a month and it still looks like new. Perfectly matches with my floral studs. Truly an artisanal piece.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3M8g5YmGvX_YVpC5u6-D7_Hkj7L2K4m8-Wc8G_v5A8S_T1W_Gv5Q_M8L5Y-4K8m8-Wc8G" // Fallback placeholder logic if this is bad, but I'll use a better one
  },
  {
    initials: "RV",
    name: "Rohan Verma",
    comment: "Bought this for my anniversary and my wife absolutely loves it. The unboxing experience was indeed premium as promised. Highly recommend for special gifts.",
    rating: 5
  }
];

const moreToAdore = [
  { name: "Shine Wave Band", price: "₹28,500", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuAm7JBevpGWbNYk51mdQcom-XCFfula7Jc1v74MRL94vBS_SBrgd8xKvOeCB4JYEyS_TJtnxWCwD4_SwDbAlaYreHR_q0P2TUC3qK8j6q69XIWz3CyGCKZvaIZ2pPT7DQhyFidXljaB6b5WaOCP_oGVU2LL3_PJat7op7d8B2ovLgV4YEI3ReMYz-hEfNtdct_hNATc8s_p4o_ogWdxil-Wij1YAe5vjXArBsAqaBeUJMCiAHQ5Zi1njkSvO6sUrxUlRI2gZpCcc" },
  { name: "Lace Halo Solitaire", price: "₹34,200", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAISTvfNMMm206L-gAC92cKsNMjSecEAIXKZy18lFYGSj1Oa7Al419n_SzEyaARy8PnzaIjLVVEbFGm4WYo11cxVmAzlvSuTOiAz499USTLm4o5swalboF31Se36RmAVfk8j2y0QH64DSTs9RtrEuj0IU5bV2ziROSRQpJk_Bj0a7ke7XoeqflcCv5oo92-pMvsSFvtFUF-9WgWf3IEqMnjJy0Q0zOvB8-5yD_InFYTiRSOxzPEcv48zCSSIBVKWGKOZ_WrtzwT8R8" },
  { name: "Marquise Leaf Ring", price: "₹19,900", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAniFAqaS5Ng_fC8Cgg03YvFLNuFhSUxYkRWkIybIqGrRqpZpvX9tXwZEK3Gek90QJ7UBtXQjYHYaxMhBGNpfixbJUW9Wv2CXXkBGJmZKDO9Y0PN1vf1QHxLDP2gNGFTprarrBQX8MTOCB2MV_JSNBnYzDn9q4dgUEVA0B5O-0B1ns5o1SvPn0UmXHbZjrC6dWpyvnhKsHJNvdZl245uVaF_5FlMX8atDIeQroU2FN19Jvq3Bz91cZwj2qgT5j1sh10k7d9gC4SFec" },
  { name: "Petite Bloom Band", price: "₹12,400", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvod9vcCMSIiMqE09iIKVjIUz1cuTUIFhfbNlYqYziJjFO3VolWT7r-Vho6ZnyuRCZRRtAsccUk9T_EsSNr7R7gsT1anv33p03zOIW24snyDPl3cbDhvM8wyc8EHtpeNC_Ue9J9yBTVojSRRCTBC0VXUocMYxsnslCdZc3RuiPhJrzhdv3J42lJ4Z8_Z9Kq1OaRiqkHQqvQppS7Nz-8ii_sGs92LDP-TnUMUoHyeo5zTpMz_mFcYoPPutQlbBWMkBKHZ2adqMGy0I" }
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

  const scrollReviews = (direction: 'left' | 'right') => {
    if (reviewsRef.current) {
      const { scrollLeft, clientWidth } = reviewsRef.current;
      // Scroll by exactly one page width (which shows 2 cards on desktop)
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      reviewsRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-24 md:pt-40 min-h-screen bg-surface text-on-surface font-sans leading-relaxed tracking-tight selection:bg-secondary-container">
      <main className="pb-24 md:pb-0">
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
            <div className="absolute top-6 left-6">
              <span className="bg-surface-container-highest/90 text-primary px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase backdrop-blur-md">NEW ARRIVAL</span>
            </div>
            <button className="absolute top-6 right-6 w-12 h-12 bg-white/40 backdrop-blur-xl rounded-full flex items-center justify-center text-primary shadow-sm active:scale-90 transition-transform">
              <Heart className="w-5 h-5" />
            </button>
            <div className="absolute bottom-6 w-full flex justify-center gap-2">
              {product.images.map((img, i) => (
                <div key={i} className={`w-2 h-2 rounded-full transition-all ${activeImg === img ? "bg-primary" : "bg-primary/20"}`}></div>
              ))}
            </div>
          </section>

          <section className="px-6 pt-10 pb-6">
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
            <div className="mt-8 flex items-baseline gap-4">
              <span className="text-3xl font-serif text-primary font-semibold">{product.price}</span>
              <span className="text-lg text-outline-variant line-through font-light">{product.originalPrice}</span>
              <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[11px] font-bold tracking-wider">{product.discount}</span>
            </div>
            <div className="mt-10 space-y-8">
              <div>
                <label className="block text-[11px] font-bold tracking-widest text-on-surface-variant uppercase mb-4">Select Metal</label>
                <div className="flex gap-4 scroll-px-4 overflow-x-auto scrollbar-hide -mx-4 px-4">
                  {[
                    { name: "18K Rose Gold", color: "bg-[#f3d081]" },
                    { name: "18K White Gold", color: "bg-[#e5e5e5]" },
                    { name: "925 Silver", color: "bg-[#c0c0c0]" }
                  ].map((metal) => (
                    <button 
                      key={metal.name}
                      onClick={() => setSelectedMetal(metal.name)}
                      className={`px-6 py-3 rounded-full whitespace-nowrap font-medium text-sm transition-all border ${selectedMetal === metal.name ? "bg-secondary-container text-on-secondary-container border-secondary/20" : "bg-surface-container text-on-surface-variant border-transparent"}`}
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
                <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 scroll-px-4 -mx-4 px-4">
                  {[6, 7, 8, 9, 10].map((size) => (
                    <button 
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[56px] h-14 rounded-full flex items-center justify-center font-medium transition-all ${selectedSize === size ? "bg-secondary-container text-on-secondary-container font-bold shadow-sm" : "bg-surface-container"}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mt-8 px-6 space-y-4">
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

          <section className="mt-16 bg-surface-container-low/50 py-12 px-6">
            <div className="grid grid-cols-2 gap-y-10 gap-x-6">
              {[
                { icon: ShieldCheck, label: "Hallmark Certified" },
                { icon: Diamond, label: "100% Real Diamonds" },
                { icon: Lock, label: "Secure Checkout" },
                { icon: Smile, label: "Happy Customers" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center space-y-2">
                  <item.icon className="w-7 h-7 text-secondary" />
                  <span className="text-[10px] font-bold tracking-widest uppercase">{item.label}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16 px-6">
            <h2 className="font-serif text-2xl italic text-primary mb-8">Complete the Look</h2>
            <div className="flex gap-6 overflow-x-auto scrollbar-hide snap-x -mx-6 px-6 scroll-px-6">
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

          <section className="mt-20 px-6">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="font-serif text-3xl italic text-primary">Customer Love</h2>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-2xl font-serif text-secondary">4.8</span>
                  <div className="flex text-secondary star-rating">
                    {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 fill-current ${i === 4 ? "opacity-50" : ""}`} />)}
                  </div>
                </div>
              </div>
              <button className="text-[11px] font-bold tracking-widest text-primary uppercase border-b border-primary/20 pb-1">Write Review</button>
            </div>
            <div className="flex gap-5 overflow-x-auto scrollbar-hide snap-x -mx-6 px-6 scroll-px-6 pb-8">
              {customerReviews.map((review, i) => (
                <div key={i} className="min-w-[85vw] sm:min-w-[280px] snap-start bg-surface-container-lowest p-6 rounded-2xl shadow-[0_20px_50px_rgba(139,34,82,0.03)] border border-outline-variant/5">
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
            <div className="pt-2">
              <button className="w-full mt-2 py-5 border border-outline-variant/20 rounded-full text-[11px] font-bold tracking-widest text-on-surface-variant uppercase hover:bg-surface-container transition-all">View All {product.reviewsCount} Reviews</button>
            </div>
          </section>

          <section className="mt-24 px-6 mb-12">
            <h2 className="font-serif text-3xl italic text-primary mb-8 text-center">More to Adore</h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-8">
              {moreToAdore.map((p, i) => (
                <div key={i} className="group flex flex-col">
                  <div className="aspect-[4/5] bg-[#fdfaf8] rounded-2xl overflow-hidden mb-4 relative border border-stone-100/50">
                    <img referrerPolicy="no-referrer" alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={p.image} />
                    <button className="absolute bottom-3 right-3 bg-white p-2.5 rounded-full shadow-lg">
                      <ShoppingBag className="w-3.5 h-3.5 text-primary" />
                    </button>
                  </div>
                  <div className="space-y-1 text-center">
                    <h3 className="font-serif text-base italic text-primary">{p.name}</h3>
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
          <div className="fixed bottom-0 w-full z-50 bg-white/95 backdrop-blur-xl px-6 pt-2.5 pb-4 border-t border-outline-variant/10 shadow-[0_-20px_50px_rgba(139,34,82,0.1)]">
            <div className="flex items-center justify-between mb-2">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-outline-variant uppercase tracking-widest truncate max-w-[150px]">{product.name}</span>
                <span className="font-serif text-xl text-primary">{product.price}</span>
              </div>
              <div className="flex gap-4 items-center">
                <div className="flex items-center bg-surface-container rounded-full px-3 py-1.5 gap-4">
                  <Minus onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-3.5 h-3.5 text-secondary cursor-pointer" />
                  <span className="text-sm font-bold w-4 text-center">{quantity}</span>
                  <Plus onClick={() => setQuantity(quantity + 1)} className="w-3.5 h-3.5 text-secondary cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 bg-white border-2 border-primary text-primary py-3.5 rounded-full font-bold text-[10px] tracking-[0.1em] uppercase active:scale-95 transition-transform h-auto">
                ADD TO CART
              </button>
              <button className="flex-1 bg-primary text-white py-3.5 rounded-full font-bold text-[10px] tracking-[0.1em] uppercase shadow-lg shadow-primary/20 active:scale-95 transition-transform h-auto">
                BUY NOW
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Version - hidden md:block */}
        <div className="hidden md:block">
          {/* Breadcrumb - 8-point: pt-2, pb-6 */}
          <div className="max-w-[1280px] mx-auto px-4 md:px-6 pt-2 pb-6">
        <nav className="flex flex-wrap gap-y-2 text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em] text-secondary font-bold">
          <a href="/" className="hover:text-primary transition-colors">Home</a>
          <span className="mx-2 md:mx-4 text-primary/20">/</span>
          <a href="#" className="hover:text-primary transition-colors">Rings</a>
          <span className="mx-2 md:mx-4 text-primary/20">/</span>
          <span className="text-primary/40 leading-none truncate max-w-[150px] md:max-w-none">{product.name}</span>
        </nav>
      </div>

      {/* Main Product Section - 8-point: pt-2, pb-0 (Lower gap from breadcrumbs) */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-6 pt-2 pb-0 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
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
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="space-y-4 md:space-y-6">
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

          {/* Metal Selection */}
          <div className="space-y-4 md:space-y-5">
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

          {/* Size Selection */}
          <div className="space-y-4 md:space-y-5">
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
          <div className="grid grid-cols-3 gap-4 py-8 md:py-10 border-t border-stone-100">
            {[
              { label: "Free Delivery", icon: Truck },
              { label: "7-Day Returns", icon: RotateCcw },
              { label: "Hallmark Certified", icon: ShieldCheck }
            ].map((badge, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2 md:gap-3 group cursor-default">
                <badge.icon className="w-5 h-5 md:w-6 md:h-6 text-secondary group-hover:scale-110 transition-transform duration-500" />
                <span className="text-[8px] md:text-[9px] uppercase font-bold tracking-[0.1em] md:tracking-[0.2em] text-primary/40 leading-none">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs Section - 8-point: py-12 (combined with previous/next sections for 96px total gap) */}
      <section className="bg-[#fdfaf8] py-12 border-y border-stone-100">
        <div className="max-w-[800px] mx-auto px-4 md:px-6">
          <div className="flex justify-start md:justify-center border-b border-stone-200 mb-8 md:mb-12 overflow-x-auto scrollbar-hide md:mx-0 -mx-4 md:px-0 px-4 scroll-px-4 md:scroll-px-0">
            {["Description", "Details", "Size Guide", "Shipping"].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 md:px-8 py-4 md:py-5 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] transition-all relative leading-none whitespace-nowrap ${activeTab === tab ? "text-primary" : "text-primary/30 hover:text-primary"}`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary" />
                )}
              </button>
            ))}
          </div>

          {/* Dynamic Tab Content */}
          <div className="min-h-[300px]">
            {activeTab === "Description" && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start"
              >
                <div className="space-y-6 md:space-y-8">
                  <h3 className="text-2xl md:text-3xl font-serif italic text-primary leading-tight">Poetry in <span className="text-secondary not-italic">Metal</span></h3>
                  <div className="space-y-4 md:space-y-6">
                    <p className="text-primary/70 leading-relaxed font-sans text-[13px] md:text-sm">
                      {product.description}
                    </p>
                    <p className="text-primary/70 leading-relaxed font-sans text-[13px] md:text-sm italic">
                      {product.technicalDetails}
                    </p>
                  </div>
                </div>
                <div className="bg-white p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-xl shadow-primary/5 border border-stone-100">
                  <h4 className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-secondary mb-6 md:mb-8 block leading-none">Specifications</h4>
                  <div className="space-y-4 md:space-y-6">
                    {product.specs.map((spec, i) => (
                      <div key={i} className="flex justify-between border-b border-stone-50 pb-3 md:pb-4">
                        <span className="text-[10px] md:text-xs font-medium text-primary/40 uppercase tracking-widest leading-none">{spec.label}</span>
                        <span className="text-[10px] md:text-xs font-bold text-primary leading-none">{spec.value}</span>
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
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-start"
              >
                <div className="space-y-8">
                  <h3 className="text-2xl md:text-3xl font-serif italic text-primary leading-tight">The <span className="text-secondary not-italic">Art</span> of Craft</h3>
                  <div className="space-y-6">
                    <div className="space-y-3 md:space-y-4">
                      <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary">Ethical Diamonds</h4>
                      <p className="text-primary/70 leading-relaxed font-sans text-[13px] md:text-sm">
                        Our diamonds are exclusively sourced from conflict-free mines. This ring features VVS clarity EF color diamonds, ensuring exceptional brilliance.
                      </p>
                    </div>
                    <div className="space-y-3 md:space-y-4">
                      <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary">BIS Hallmarking</h4>
                      <p className="text-primary/70 leading-relaxed font-sans text-[13px] md:text-sm">
                        Every piece is stamped with the Bureau of Indian Standards (BIS) hallmark, certifying the purity of the 18K gold used in your jewelry.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 md:space-y-6">
                   <div className="bg-white p-6 md:p-8 rounded-2xl border border-stone-100 flex items-center gap-4 md:gap-6">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                        <Award className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                      </div>
                      <div>
                        <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-primary">Certified Brilliance</p>
                        <p className="text-[11px] md:text-xs text-primary/60">Includes SGL/IGI Diamond Certificate.</p>
                      </div>
                   </div>
                   <div className="bg-white p-6 md:p-8 rounded-2xl border border-stone-100 flex items-center gap-4 md:gap-6">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                        <Diamond className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                      </div>
                      <div>
                        <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-primary">Hand-Set Perfection</p>
                        <p className="text-[11px] md:text-xs text-primary/60">Master artisans in our house.</p>
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
                <div className="text-center max-w-2xl mx-auto space-y-3 md:space-y-4">
                  <h3 className="text-2xl md:text-3xl font-serif italic text-primary leading-tight">Finding Your <span className="text-secondary not-italic">Perfect Fit</span></h3>
                  <p className="text-primary/70 leading-relaxed font-sans text-[13px] md:text-sm">
                    A ring should be snug enough not to fall off, but loose enough to slide over your knuckle with some resistance.
                  </p>
                </div>
                <div className="bg-white overflow-x-auto rounded-2xl md:rounded-3xl border border-stone-100 shadow-xl shadow-primary/5 scrollbar-hide">
                  <table className="w-full min-w-[500px] md:min-w-0 text-left font-sans text-xs">
                    <thead>
                      <tr className="bg-stone-50 border-b border-stone-100 uppercase tracking-widest text-primary/40">
                        <th className="px-6 md:px-8 py-5 md:py-6 font-bold">Ring Size (US)</th>
                        <th className="px-6 md:px-8 py-5 md:py-6 font-bold">Inner Diameter (mm)</th>
                        <th className="px-6 md:px-8 py-5 md:py-6 font-bold">Inner Circumference (mm)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-50 text-primary">
                      {[
                        { size: 6, dia: "16.5", cir: "51.9" },
                        { size: 7, dia: "17.3", cir: "54.4" },
                        { size: 8, dia: "18.1", cir: "56.9" },
                        { size: 9, dia: "19.0", cir: "59.5" },
                        { size: 10, dia: "19.8", cir: "62.1" }
                      ].map((row) => (
                        <tr key={row.size} className="hover:bg-stone-50/50 transition-colors">
                          <td className="px-6 md:px-8 py-4 md:py-5 font-bold">{row.size}</td>
                          <td className="px-6 md:px-8 py-4 md:py-5">{row.dia} mm</td>
                          <td className="px-6 md:px-8 py-4 md:py-5">{row.cir} mm</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
                  <div key={i} className="bg-white p-6 md:p-10 rounded-2xl md:rounded-3xl border border-stone-100 hover:border-secondary/20 transition-all space-y-4 md:space-y-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[#fdfaf8] flex items-center justify-center">
                      <item.icon className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                    </div>
                    <div className="space-y-2 md:space-y-4">
                      <h4 className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-primary leading-none">{item.title}</h4>
                      <p className="text-[11px] md:text-xs text-primary/60 leading-relaxed">{item.desc}</p>
                      <p className="text-[9px] md:text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">{item.time}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Trust Bar - 8-point: py-12 */}
      <section className="bg-primary py-12 text-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {[
            { label: "BIS Hallmark", sub: "100% Purity Assured", icon: Award },
            { label: "Real Diamonds", sub: "SGL/IGI Certified", icon: Diamond },
            { label: "Secure Checkout", sub: "SSL Encrypted", icon: Lock },
            { label: "Happy Families", sub: "45k+ Served", icon: Smile }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-secondary" />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-secondary leading-none">{item.label}</p>
                <p className="text-[9px] text-white/50 uppercase tracking-widest leading-none">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Complete the Look - 8-point: py-12 */}
      <section className="py-12 max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-10 md:mb-12">
          <div className="space-y-4 md:space-y-6">
             <span className="text-secondary uppercase tracking-[0.6em] text-[10px] font-bold block leading-none">Artisanal Pairings</span>
             <h2 className="text-3xl md:text-4xl font-serif italic text-primary leading-tight">Complete <span className="text-secondary not-italic">the Look</span></h2>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {relatedProducts.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
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
      </section>

      {/* Customer Stories - 8-point: py-12 */}
      <section className="bg-[#fdfaf8] py-12 border-y border-stone-100">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
            {/* Rating Summary */}
            <div className="space-y-8 md:space-y-10">
              <div className="space-y-4 md:space-y-6">
                <span className="text-secondary uppercase tracking-[0.6em] text-[9px] md:text-[10px] font-bold block leading-none">Authentic Feedback</span>
                <h2 className="text-3xl md:text-4xl font-serif text-primary italic leading-tight">Customer <span className="text-secondary not-italic">Stories</span></h2>
              </div>
              <div className="bg-white p-8 md:p-12 rounded-2xl md:rounded-3xl shadow-xl shadow-primary/5 border border-stone-100">
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
                    { label: "4 Star", value: 8, count: 14 }
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
              <div className="flex justify-between items-center mb-4">
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
                className="flex gap-6 overflow-x-auto md:overflow-x-hidden snap-x snap-mandatory pb-8 scrollbar-hide md:mx-0 -mx-4 md:px-0 px-4 scroll-px-4 md:scroll-px-0"
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
      <section className="bg-[#0f0a0a] py-12 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-detail" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-detail)" />
          </svg>
        </div>

        <div className="max-w-[1280px] mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 md:mb-16 gap-6 md:gap-8">
            <div className="space-y-4 md:space-y-6">
              <span className="text-secondary uppercase tracking-[0.6em] text-[9px] md:text-[10px] font-bold block leading-none">Curated Just for You</span>
              <h2 className="text-3xl md:text-6xl font-serif italic text-white tracking-tighter leading-tight">More <span className="text-secondary not-italic">To Adore</span></h2>
            </div>
            <a href="#" className="group inline-flex items-center gap-4 text-secondary font-bold uppercase tracking-[0.3em] text-[9px] md:text-[10px] pb-2 border-b-2 border-secondary/20 hover:border-secondary transition-all leading-none w-fit">
              View All Rings <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {moreToAdore.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
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
      </section>
    </div>
  </main>
</div>
  );
}
