import CardsComponent from "../components/ui/NosotrosUi/CardsComponent";
import HeaderStaticNosotros from "../components/ui/NosotrosUi/HeaderStaticNosotros";
import HistorySection from "../components/ui/NosotrosUi/HistorySection";
import MissionSection from "../components/ui/NosotrosUi/MissionSection";
import PASBanner from "../components/ui/NosotrosUi/PASBanner";
import TeamCarousel from "../components/ui/NosotrosUi/TeamCarousel";
import VisionSection from "../components/ui/NosotrosUi/VisionSection";
import Footer from '../components/ui/footer/Footer';
import SumateSection from '../components/ui/NosotrosUi/SumateSection';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SegurosPage() {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);


    return (
        <>
        <HeaderStaticNosotros/>
        <div id="leer-mas">
        <HistorySection/>
        </div>
        <PASBanner/>
        <MissionSection/>
        <CardsComponent/>
        <VisionSection/>
        <TeamCarousel/>
        <SumateSection/>
        <Footer/>
        </>
  )
}