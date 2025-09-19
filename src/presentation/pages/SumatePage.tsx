import Footer from "../components/ui/footer/Footer";
import HeaderSumate from "../components/ui/sumate/HeaderSumate";
import NimbusForm from "../components/ui/sumate/NimbusForm";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function HomePage() {
  
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
      <HeaderSumate />
      <div id="formulario">
      <NimbusForm />
      </div>
      <Footer />
     </>
  )
}
