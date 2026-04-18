import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";
import NewArrivals from "../components/NewArrivals";
import StyleItYourWay from "../components/StyleItYourWay";
import Bestsellers from "../components/Bestsellers";
import PromoSection from "../components/PromoSection";
import ProductShowcase from "../components/ProductShowcase";
import Testimonials from "../components/Testimonials";
import InstagramFeed from "../components/InstagramFeed";

export default function Home() {
  return (
    <>
      <Hero />
      <CategorySection />
      <NewArrivals />
      <StyleItYourWay />
      <Bestsellers />
      <PromoSection />
      <ProductShowcase />
      <Testimonials />
      <InstagramFeed />
    </>
  );
}
