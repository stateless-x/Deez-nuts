import PromoBanner from "./Components/PromoBanner";
import CardList from "./Components/CardList";
import HeroSection from './Components/HeroSection';
import Footer from "./Components/Footer";

export default function Home() {
  return (
  <>
    <PromoBanner />
    <div className="
    bg-[#d7ffc4] 
      py-12 
      sm:py-24"
    >
    <HeroSection />
    <CardList />
    </div>
    <Footer />
  </>
  );
}
