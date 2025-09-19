import HeaderCarousel from "../components/ui/HomeUi/header/HeaderCarousel"
import Footer from "../components/ui/footer/Footer"
import CompanyLogos from "../components/ui/globalComponents/CompanyLogos"
import MarqueeBanner from "../components/ui/HomeUi/MarqueeBanner"
import NimbusSection from "../components/ui/HomeUi/NimbusSection"
import SeccionHomeExito from "../components/ui/HomeUi/SeccionHomeExito"
import StatsComponent from "../components/ui/HomeUi/StatsComponent"
import TestimonialsCarousel from "../components/ui/HomeUi/TestimonialsCarousel"
import VideoNotebookComponent from "../components/ui/HomeUi/VideoNotebookComponent"

export default function HomePage() {
  return (
    <>
        <HeaderCarousel/>
        <MarqueeBanner/>
        <SeccionHomeExito/>
        <StatsComponent/>
        <NimbusSection/>
        <CompanyLogos/>
        <TestimonialsCarousel/>
        <VideoNotebookComponent/>
        <Footer/>
    </>
  )
}
