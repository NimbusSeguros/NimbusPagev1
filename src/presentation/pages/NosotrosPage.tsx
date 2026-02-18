import CardsComponent from "../components/ui/NosotrosUi/CardsComponent";
import HeaderStaticNosotros from "../components/ui/NosotrosUi/HeaderStaticNosotros";
import HistorySection from "../components/ui/NosotrosUi/HistorySection";
import MissionSection from "../components/ui/NosotrosUi/MissionSection";
import PASBanner from "../components/ui/NosotrosUi/PASBanner";
import TeamCarousel from "../components/ui/NosotrosUi/TeamCarousel";
import VisionSection from "../components/ui/NosotrosUi/VisionSection";
import Footer from '../components/ui/footer/Footer';

export default function SegurosPage() {




  return (
    <>
      <HeaderStaticNosotros />
      <div id="leer-mas">
        <HistorySection />
      </div>
      <PASBanner />
      <MissionSection />
      <CardsComponent />
      <VisionSection />
      <TeamCarousel />
      <Footer />
    </>
  )
}