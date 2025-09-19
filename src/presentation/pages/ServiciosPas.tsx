import Footer from "../components/ui/footer/Footer";
import CompanyLogos from "../components/ui/globalComponents/CompanyLogos";
import BenefitsSection from "../components/ui/serviciosPasUi/BenefitsSection";
import CallToActionSection from "../components/ui/serviciosPasUi/CallToActionSection";
import FAQAccordion from "../components/ui/serviciosPasUi/FAQAccordion";
import HeaderStaticServices from "../components/ui/serviciosPasUi/HeaderStaticServices";
import LearningSection from "../components/ui/serviciosPasUi/LearningSectionProps";
import { useEffect } from 'react';


export default function ServiciosPas() {

 useEffect(() => {
  if (location.hash) {
    const hash = location.hash;
    setTimeout(() => {
      const el = document.querySelector(hash);
      if (el && window.location.hash === hash) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
}, [location]);


  return (
  <>
    <HeaderStaticServices/>
    <div id="beneficios">
    <BenefitsSection/>
    </div>
    <LearningSection/>
    <CallToActionSection/>
    <CompanyLogos/>
    <FAQAccordion/>
    <Footer />
  </>
  )
}
