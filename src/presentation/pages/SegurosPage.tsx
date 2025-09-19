import Footer from "../components/ui/footer/Footer";
import BannerSeguros from "../components/ui/segurosUi/BannerSeguros";
import CommitmentSection from "../components/ui/segurosUi/CommitmentSection";
import HeaderStaticSeguros from "../components/ui/segurosUi/HeaderStaticSeguros";
import InsuranceCards from "../components/ui/segurosUi/InsuranceCards";
import { useEffect } from 'react';


export default function SegurosPage() {

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
    <HeaderStaticSeguros/>
    <div id="seguros">
    <InsuranceCards/>
    </div>
    <BannerSeguros/>
    <CommitmentSection/>
    <Footer/>
   </>
  )
}
