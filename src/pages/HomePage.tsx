import Footer from "../components/footer/Footer";
import BestSellerSection from "../components/home/BestSellerSection";
import HeroSection from "../components/home/HeroSection";
import MenuSection from "../components/home/MenuSection";
import PromiseSection from "../components/home/PromiseSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <MenuSection />
      <BestSellerSection />
      <PromiseSection />
      <Footer />
    </>
  )
}

export default HomePage